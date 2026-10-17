import { Router } from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { connection } from '../../config/mysql/dbmysql.js';
import { requiereSesion, hashContrasena, verificarContrasena } from '../../utils/seguridad.js';

const router = Router();

const REGEX_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REGEX_USUARIO = /^[A-Za-z0-9_.]{3,40}$/;

// Las fotos de perfil se guardan en backend/uploads/avatares y se sirven desde /uploads
export const CARPETA_UPLOADS = fileURLToPath(new URL('../../../uploads', import.meta.url));
const CARPETA_AVATARES = path.join(CARPETA_UPLOADS, 'avatares');
fs.mkdirSync(CARPETA_AVATARES, { recursive: true });

const CONSULTA = `SELECT u.id_usuario, r.nombre AS rol, u.nombre_completo, u.correo, u.nombre_usuario, u.avatar,
                         u.puntos_totales, g.nombre AS rango, u.fecha_registro, u.google_id,
                         (u.contrasena_hash IS NOT NULL) AS tiene_contrasena
                  FROM usuarios u
                  JOIN roles r ON r.id_rol = u.id_rol
                  JOIN rangos g ON g.id_rango = u.id_rango
                  WHERE u.id_usuario = ?`;

async function datosUsuario(id) {
    const [[u]] = await connection.query(CONSULTA, [id]);
    if (!u) return null;
    return {
        id: u.id_usuario, rol: u.rol, nombreCompleto: u.nombre_completo, correo: u.correo,
        nombreUsuario: u.nombre_usuario, avatar: u.avatar, puntos: u.puntos_totales, rango: u.rango,
        fechaRegistro: u.fecha_registro, conGoogle: Boolean(u.google_id), tieneContrasena: Boolean(u.tiene_contrasena),
    };
}

// GET /api/perfil -> mis datos
router.get('/', requiereSesion, async (req, res) => {
    const usuario = await datosUsuario(req.usuario.id);
    if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json({ usuario });
});

// PUT /api/perfil  { nombreCompleto, correo, nombreUsuario }
router.put('/', requiereSesion, async (req, res) => {
    try {
        const nombreCompleto = String(req.body.nombreCompleto ?? '').trim();
        const correo = String(req.body.correo ?? '').trim().toLowerCase();
        const nombreUsuario = String(req.body.nombreUsuario ?? '').trim();

        if (nombreCompleto.length < 3 || nombreCompleto.length > 120) return res.status(400).json({ message: 'Escribe tu nombre completo (de 3 a 120 letras).' });
        if (!REGEX_CORREO.test(correo) || correo.length > 150) return res.status(400).json({ message: 'El correo no es válido.' });
        if (!REGEX_USUARIO.test(nombreUsuario)) return res.status(400).json({ message: 'El usuario debe tener de 3 a 40 letras, números, "_" o ".".' });

        const [repetidos] = await connection.query(
            'SELECT correo, nombre_usuario FROM usuarios WHERE (correo = ? OR nombre_usuario = ?) AND id_usuario <> ?',
            [correo, nombreUsuario, req.usuario.id]);
        if (repetidos.some((r) => r.correo === correo)) return res.status(409).json({ message: 'Ese correo ya está en uso por otra cuenta.' });
        if (repetidos.length) return res.status(409).json({ message: 'Ese nombre de usuario ya está en uso.' });

        await connection.query('UPDATE usuarios SET nombre_completo = ?, correo = ?, nombre_usuario = ? WHERE id_usuario = ?',
            [nombreCompleto, correo, nombreUsuario, req.usuario.id]);
        res.json({ usuario: await datosUsuario(req.usuario.id), message: 'Datos actualizados' });
    } catch (error) {
        console.error('Error actualizando el perfil:', error.message);
        res.status(500).json({ message: 'No se pudieron guardar los cambios.' });
    }
});

// PUT /api/perfil/contrasena  { actual?, nueva, confirmar }
router.put('/contrasena', requiereSesion, async (req, res) => {
    try {
        const { actual, nueva, confirmar } = req.body;
        if (typeof nueva !== 'string' || nueva.length < 6) return res.status(400).json({ message: 'La nueva contraseña debe tener mínimo 6 caracteres.' });
        if (nueva.length > 100) return res.status(400).json({ message: 'La nueva contraseña es demasiado larga.' });
        if (nueva !== confirmar) return res.status(400).json({ message: 'Las contraseñas nuevas no coinciden.' });

        const [[u]] = await connection.query('SELECT contrasena_hash FROM usuarios WHERE id_usuario = ?', [req.usuario.id]);
        // Quien entró con Google y aún no tiene contraseña puede crear una sin escribir la actual
        if (u.contrasena_hash) {
            if (!actual) return res.status(400).json({ message: 'Escribe tu contraseña actual.' });
            if (!verificarContrasena(actual, u.contrasena_hash)) return res.status(401).json({ message: 'La contraseña actual no es correcta.' });
            if (actual === nueva) return res.status(400).json({ message: 'La nueva contraseña debe ser distinta de la actual.' });
        }
        await connection.query('UPDATE usuarios SET contrasena_hash = ? WHERE id_usuario = ?', [hashContrasena(nueva), req.usuario.id]);
        res.json({ message: u.contrasena_hash ? 'Contraseña actualizada' : 'Contraseña creada', usuario: await datosUsuario(req.usuario.id) });
    } catch (error) {
        console.error('Error cambiando la contraseña:', error.message);
        res.status(500).json({ message: 'No se pudo cambiar la contraseña.' });
    }
});

// ---------- Foto de perfil ----------
function tipoDeImagen(b) {
    if (b.length > 12 && b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return 'jpg';
    if (b.length > 12 && b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47) return 'png';
    if (b.length > 12 && b.toString('ascii', 0, 4) === 'RIFF' && b.toString('ascii', 8, 12) === 'WEBP') return 'webp';
    return null;
}

function borrarAvatarAnterior(ruta) {
    if (!ruta || !ruta.startsWith('/uploads/avatares/')) return; // las fotos de Google (enlaces externos) no están en el disco
    const archivo = path.join(CARPETA_AVATARES, path.basename(ruta));
    fs.rm(archivo, { force: true }, () => {});
}

// PUT /api/perfil/avatar  { imagen: { base64 } }
router.put('/avatar', requiereSesion, async (req, res) => {
    try {
        const base64 = String(req.body.imagen?.base64 ?? '');
        if (!/^[A-Za-z0-9+/=]+$/.test(base64) || base64.length < 100) return res.status(400).json({ message: 'La imagen no es válida.' });
        const bytes = Buffer.from(base64, 'base64');
        if (bytes.length > 1_500_000) return res.status(413).json({ message: 'La imagen es demasiado pesada (máximo 1,5 MB).' });
        const ext = tipoDeImagen(bytes);
        if (!ext) return res.status(400).json({ message: 'Solo se aceptan imágenes JPG, PNG o WEBP.' });

        const [[anterior]] = await connection.query('SELECT avatar FROM usuarios WHERE id_usuario = ?', [req.usuario.id]);
        const nombre = `u${req.usuario.id}_${Date.now()}.${ext}`;
        fs.writeFileSync(path.join(CARPETA_AVATARES, nombre), bytes);
        await connection.query('UPDATE usuarios SET avatar = ? WHERE id_usuario = ?', [`/uploads/avatares/${nombre}`, req.usuario.id]);
        borrarAvatarAnterior(anterior?.avatar);
        res.json({ usuario: await datosUsuario(req.usuario.id), message: 'Foto actualizada' });
    } catch (error) {
        console.error('Error guardando la foto:', error.message);
        res.status(500).json({ message: 'No se pudo guardar la foto.' });
    }
});

// DELETE /api/perfil/avatar
router.delete('/avatar', requiereSesion, async (req, res) => {
    try {
        const [[anterior]] = await connection.query('SELECT avatar FROM usuarios WHERE id_usuario = ?', [req.usuario.id]);
        await connection.query('UPDATE usuarios SET avatar = NULL WHERE id_usuario = ?', [req.usuario.id]);
        borrarAvatarAnterior(anterior?.avatar);
        res.json({ usuario: await datosUsuario(req.usuario.id), message: 'Foto eliminada' });
    } catch (error) {
        res.status(500).json({ message: 'No se pudo quitar la foto.' });
    }
});

export default router;
