import { Router } from 'express';
import { requiereSesion } from '../../utils/seguridad.js';
import { estadoIA, generarPreguntas, conversar } from '../../services/ia.js';
import { connection } from '../../config/mysql/dbmysql.js';
import { vidasDisponibles } from '../progreso/progreso.js';

const router = Router();

// Límite por usuario para cuidar la cuota gratuita: 15 solicitudes cada 10 minutos
const VENTANA_MS = 10 * 60 * 1000;
const MAXIMO = 15;
const usos = new Map();

function permitido(idUsuario) {
    const ahora = Date.now();
    const recientes = (usos.get(idUsuario) || []).filter((t) => ahora - t < VENTANA_MS);
    if (recientes.length >= MAXIMO) { usos.set(idUsuario, recientes); return false; }
    recientes.push(ahora);
    usos.set(idUsuario, recientes);
    return true;
}

const texto = (v, max) => String(v ?? '').trim().slice(0, max);

// GET /api/ia/estado -> ¿la IA está configurada?
router.get('/estado', (req, res) => {
    const { configurada, proveedor, modelo } = estadoIA();
    res.json({ configurada, proveedor: configurada ? proveedor : null, modelo: configurada ? modelo : null });
});

// POST /api/ia/preguntas
// { pais, categoria, tema?, alcance, cantidad, fuentes:[{titulo, texto}], evitar:[enunciados] }
router.post('/preguntas', requiereSesion, async (req, res) => {
    try {
        const { pais, categoria, tema, alcance, fuentes, evitar } = req.body;
        const cantidad = Math.min(10, Math.max(3, Number.parseInt(req.body.cantidad, 10) || 8));

        const limpias = (Array.isArray(fuentes) ? fuentes : []).slice(0, 14)
            .map((f) => ({ titulo: texto(f?.titulo, 140), texto: texto(f?.texto, 2500) }))
            .filter((f) => f.titulo && f.texto.length > 40);
        const total = limpias.reduce((s, f) => s + f.texto.length, 0);
        if (!pais || !categoria || !limpias.length) return res.status(400).json({ message: 'Faltan el país, la categoría o el texto del tema' });
        if (total > 12000) return res.status(413).json({ message: 'El texto enviado es demasiado largo' });

        // Sin vidas no se puede jugar: hay que esperar a que se restablezcan
        if (req.body.iso) {
            const { vidas, segundosParaVidas } = await vidasDisponibles(req.usuario.id, texto(req.body.iso, 3));
            if (vidas <= 0) return res.status(403).json({ message: 'Te quedaste sin vidas. Se restablecen en unos minutos.', segundosParaVidas });
        }

        if (!estadoIA().configurada) return res.status(503).json({ message: 'La IA aún no está configurada en el servidor', configurada: false });
        if (!permitido(req.usuario.id)) return res.status(429).json({ message: 'Has pedido muchas rondas seguidas. Espera unos minutos y vuelve a intentarlo.' });

        const resultado = await generarPreguntas({
            contexto: { pais: texto(pais, 60), categoria: texto(categoria, 60), tema: texto(tema, 120), alcance: texto(alcance, 20) || 'tema' },
            fuentes: limpias,
            cantidad,
            evitar: (Array.isArray(evitar) ? evitar : []).slice(-25).map((e) => texto(e, 200)).filter(Boolean),
        });
        res.json(resultado);
    } catch (error) {
        console.error('Error generando preguntas con IA:', error.message);
        const estado = [429, 502, 503].includes(error.estado) ? error.estado : 502;
        res.status(estado).json({
            message: estado === 429 ? 'La IA alcanzó su límite gratuito por ahora. Intenta de nuevo en unos minutos.' : (error.message || 'No se pudo generar el reto con IA'),
        });
    }
});

// ---------- Asistente de preguntas libres ----------
const LIMITE_DIARIO = () => Math.max(1, Number.parseInt(process.env.AI_LIMITE_DIARIO, 10) || 50);

async function estadisticas(idUsuario) {
    const [[f]] = await connection.query(
        `SELECT COUNT(*) AS total, COALESCE(SUM(es_favorita), 0) AS favoritas,
                COALESCE(SUM(DATE(fecha) = CURDATE()), 0) AS hoy
         FROM consultas_ia WHERE id_usuario = ?`, [idUsuario]);
    return { total: Number(f.total), favoritas: Number(f.favoritas), usadasHoy: Number(f.hoy), limite: LIMITE_DIARIO() };
}

// POST /api/ia/consultar  { pregunta, extension?, nivel?, previo? }
router.post('/consultar', requiereSesion, async (req, res) => {
    try {
        const pregunta = texto(req.body.pregunta, 1200);
        if (pregunta.length < 3) return res.status(400).json({ message: 'Escribe una pregunta un poco más completa.' });

        if (!estadoIA().configurada) return res.status(503).json({ message: 'La IA aún no está configurada en el servidor.' });

        const antes = await estadisticas(req.usuario.id);
        if (antes.usadasHoy >= antes.limite) return res.status(429).json({ message: `Llegaste al límite de ${antes.limite} consultas de hoy. ¡Vuelve mañana!`, ...antes });
        if (!permitido(req.usuario.id)) return res.status(429).json({ message: 'Estás preguntando muy rápido. Espera unos minutos e inténtalo de nuevo.' });

        const previo = req.body.previo?.pregunta ? { pregunta: texto(req.body.previo.pregunta, 400), respuesta: texto(req.body.previo.respuesta, 1500) } : null;
        const { respuesta, recursos, siguientes, modelo } = await conversar({
            pregunta,
            extension: ['breve', 'normal', 'detallada'].includes(req.body.extension) ? req.body.extension : 'normal',
            nivel: ['simple', 'normal', 'avanzado'].includes(req.body.nivel) ? req.body.nivel : 'normal',
            previo,
        });

        const [ins] = await connection.query('INSERT INTO consultas_ia (id_usuario, origen, pregunta, respuesta) VALUES (?, ?, ?, ?)', [req.usuario.id, 'texto', pregunta, respuesta]);
        const stats = await estadisticas(req.usuario.id);
        res.json({ id: ins.insertId, respuesta, recursos, siguientes, modelo, fecha: new Date().toISOString(), ...stats });
    } catch (error) {
        console.error('Error en el asistente de IA:', error.message);
        const estado = [429, 502, 503].includes(error.estado) ? error.estado : 502;
        res.status(estado).json({ message: estado === 429 ? 'La IA alcanzó su límite gratuito por ahora. Intenta de nuevo en unos minutos.' : (error.message || 'No se pudo obtener la respuesta de la IA') });
    }
});

// GET /api/ia/historial -> consultas del usuario y sus cifras
router.get('/historial', requiereSesion, async (req, res) => {
    try {
        const [filas] = await connection.query(
            `SELECT id_consulta AS id, origen, pregunta, respuesta, es_favorita AS favorita, fecha
             FROM consultas_ia WHERE id_usuario = ? ORDER BY fecha DESC, id_consulta DESC LIMIT 100`, [req.usuario.id]);
        res.json({ consultas: filas.map((f) => ({ ...f, favorita: Boolean(f.favorita) })), ...(await estadisticas(req.usuario.id)) });
    } catch (error) {
        console.error('Error leyendo el historial:', error.message);
        res.status(500).json({ message: 'No se pudo leer tu historial' });
    }
});

// PUT /api/ia/historial/:id/favorita  { favorita: true|false }
router.put('/historial/:id/favorita', requiereSesion, async (req, res) => {
    try {
        const [r] = await connection.query('UPDATE consultas_ia SET es_favorita = ? WHERE id_consulta = ? AND id_usuario = ?', [req.body.favorita ? 1 : 0, req.params.id, req.usuario.id]);
        if (!r.affectedRows) return res.status(404).json({ message: 'Consulta no encontrada' });
        res.json(await estadisticas(req.usuario.id));
    } catch (error) {
        res.status(500).json({ message: 'No se pudo actualizar la consulta' });
    }
});

// DELETE /api/ia/historial/:id
router.delete('/historial/:id', requiereSesion, async (req, res) => {
    try {
        await connection.query('DELETE FROM consultas_ia WHERE id_consulta = ? AND id_usuario = ?', [req.params.id, req.usuario.id]);
        res.json(await estadisticas(req.usuario.id));
    } catch (error) {
        res.status(500).json({ message: 'No se pudo borrar la consulta' });
    }
});

export default router;
