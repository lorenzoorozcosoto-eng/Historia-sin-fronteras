import { Router } from 'express';
import { connection } from '../../config/mysql/dbmysql.js';
import { requiereSesion } from '../../utils/seguridad.js';
import { actualizarActividad, otorgarInsignias, resumenUsuario } from '../../services/insignias.js';

const router = Router();
const MAX_VIDAS = 5;
const ESPERA_VIDAS_SEG = 5 * 60; // a los 5 minutos de quedarse sin vidas se restablecen

async function idPais(iso) {
    const [f] = await connection.query('SELECT id_pais FROM paises WHERE codigo_iso = ?', [String(iso).toUpperCase()]);
    return f[0]?.id_pais;
}

async function leer(idUsuario, pais) {
    let [[fila]] = await connection.query(
        `SELECT puntos, vidas, respuestas_correctas, vidas_agotadas_en,
                TIMESTAMPDIFF(SECOND, vidas_agotadas_en, NOW()) AS espera
         FROM progreso_pais WHERE id_usuario = ? AND id_pais = ?`, [idUsuario, pais]);
    let vidas = fila?.vidas ?? MAX_VIDAS;
    let segundosParaVidas = 0;

    if (fila && vidas <= 0) {
        if (fila.vidas_agotadas_en === null) {
            // Sin vidas pero sin hora registrada (datos anteriores): la espera empieza ahora
            await connection.query('UPDATE progreso_pais SET vidas_agotadas_en = NOW() WHERE id_usuario = ? AND id_pais = ?', [idUsuario, pais]);
            segundosParaVidas = ESPERA_VIDAS_SEG;
        } else if (fila.espera >= ESPERA_VIDAS_SEG) {
            // Pasaron 5 minutos: se restablecen las vidas
            vidas = MAX_VIDAS;
            await connection.query('UPDATE progreso_pais SET vidas = ?, vidas_agotadas_en = NULL WHERE id_usuario = ? AND id_pais = ?', [MAX_VIDAS, idUsuario, pais]);
        } else {
            segundosParaVidas = ESPERA_VIDAS_SEG - Math.max(0, fila.espera);
        }
    }
    const [temas] = await connection.query(
        'SELECT tema, correctas, total FROM progreso_tema WHERE id_usuario = ? AND id_pais = ?', [idUsuario, pais]);
    return {
        puntos: fila?.puntos ?? 0,
        vidas,
        segundosParaVidas,
        correctas: fila?.respuestas_correctas ?? 0,
        temas: Object.fromEntries(temas.map((t) => [t.tema, { correctas: t.correctas, total: t.total }])),
    };
}

// Para otras rutas (por ejemplo la IA): ¿cuántas vidas tiene el usuario en ese país? (restablece si ya pasaron 5 minutos)
export async function vidasDisponibles(idUsuario, iso) {
    const pais = await idPais(iso);
    if (!pais) return { vidas: MAX_VIDAS, segundosParaVidas: 0 };
    const { vidas, segundosParaVidas } = await leer(idUsuario, pais);
    return { vidas, segundosParaVidas };
}

// GET /api/progreso/resumen -> puntos, rango, países, insignias y progreso general (para el inicio)
router.get('/resumen', requiereSesion, async (req, res) => {
    try {
        res.json(await resumenUsuario(req.usuario.id));
    } catch (error) {
        console.error('Error leyendo el resumen:', error.message);
        res.status(500).json({ message: 'No se pudo leer tu progreso' });
    }
});

// GET /api/progreso/:iso -> puntos, vidas y temas completados del usuario en ese país
router.get('/:iso', requiereSesion, async (req, res) => {
    try {
        const pais = await idPais(req.params.iso);
        if (!pais) return res.status(404).json({ message: 'País no encontrado' });
        res.json(await leer(req.usuario.id, pais));
    } catch (error) {
        console.error('Error leyendo progreso:', error.message);
        res.status(500).json({ message: 'No se pudo leer el progreso' });
    }
});

// PUT /api/progreso/:iso  { puntos, vidas, correctas, tema?, temaCorrectas?, temaTotal? }
router.put('/:iso', requiereSesion, async (req, res) => {
    try {
        const pais = await idPais(req.params.iso);
        if (!pais) return res.status(404).json({ message: 'País no encontrado' });
        const entero = (v, max) => Math.max(0, Math.min(max, Number.parseInt(v, 10) || 0));
        const { puntos, vidas, correctas, tema, temaCorrectas, temaTotal, mejorRacha, rondaPerfecta } = req.body;
        const id = req.usuario.id;

        const [[antes]] = await connection.query(
            'SELECT puntos FROM progreso_pais WHERE id_usuario = ? AND id_pais = ?', [id, pais]);
        const nuevosPuntos = entero(puntos, 1_000_000);

        await connection.query(
            `INSERT INTO progreso_pais (id_usuario, id_pais, puntos, vidas, respuestas_correctas)
             VALUES (?, ?, ?, ?, ?)
             ON DUPLICATE KEY UPDATE puntos = VALUES(puntos), vidas = VALUES(vidas), respuestas_correctas = VALUES(respuestas_correctas)`,
            [id, pais, nuevosPuntos, entero(vidas, MAX_VIDAS), entero(correctas, 100000)]
        );
        // Al llegar a 0 vidas se anota la hora; con vidas, se borra
        await connection.query(
            `UPDATE progreso_pais SET vidas_agotadas_en = CASE WHEN vidas <= 0 THEN COALESCE(vidas_agotadas_en, NOW()) ELSE NULL END
             WHERE id_usuario = ? AND id_pais = ?`, [id, pais]);
        // El total del usuario suma lo ganado en este país
        await connection.query('UPDATE usuarios SET puntos_totales = puntos_totales + ? WHERE id_usuario = ?',
            [Math.max(0, nuevosPuntos - (antes?.puntos ?? 0)), id]);

        if (tema && /^[a-z0-9-]{1,60}$/.test(tema)) {
            await connection.query(
                `INSERT INTO progreso_tema (id_usuario, id_pais, tema, correctas, total) VALUES (?, ?, ?, ?, ?)
                 ON DUPLICATE KEY UPDATE correctas = GREATEST(correctas, VALUES(correctas)), total = VALUES(total), fecha = NOW()`,
                [id, pais, tema, entero(temaCorrectas, 255), entero(temaTotal, 255)]
            );
        }
        await actualizarActividad(id);
        const nuevasInsignias = await otorgarInsignias(id, { mejorRacha: entero(mejorRacha, 1000), rondaPerfecta: rondaPerfecta === true });
        res.json({ ...(await leer(id, pais)), nuevasInsignias });
    } catch (error) {
        console.error('Error guardando progreso:', error.message);
        res.status(500).json({ message: 'No se pudo guardar el progreso' });
    }
});

export default router;
