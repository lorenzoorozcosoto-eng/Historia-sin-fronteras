import { Router } from 'express';
import { connection } from '../../config/mysql/dbmysql.js';
import { hashContrasena, verificarContrasena, crearToken, requiereSesion } from '../../utils/seguridad.js';

const router = Router();

const REGEX_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REGEX_USUARIO = /^[A-Za-z0-9_.]{3,40}$/;

const CONSULTA = `SELECT u.id_usuario, u.id_rol, r.nombre AS rol, u.nombre_completo, u.correo, u.nombre_usuario,
                         u.avatar, u.puntos_totales, g.nombre AS rango, u.contrasena_hash, u.estado
                  FROM usuarios u
                  JOIN roles r ON r.id_rol = u.id_rol
                  JOIN rangos g ON g.id_rango = u.id_rango`;

async function buscarUsuario(condicion, ...valores) {
    const [filas] = await connection.query(`${CONSULTA} WHERE ${condicion}`, valores);
    return filas[0];
}

function responderSesion(res, u, codigo = 200) {
    res.status(codigo).json({
        token: crearToken({ id: u.id_usuario, rol: u.id_rol }),
        usuario: {
            id: u.id_usuario, rol: u.rol, nombreCompleto: u.nombre_completo, correo: u.correo,
            nombreUsuario: u.nombre_usuario, avatar: u.avatar, puntos: u.puntos_totales, rango: u.rango,
        },
    });
}

// GET /api/auth/config -> id de cliente de Google (público) para el botón del front
router.get('/config', (req, res) => {
    res.json({ googleClientId: process.env.GOOGLE_CLIENT_ID || null });
});

// POST /api/auth/registro
router.post('/registro', async (req, res) => {
    try {
        const { nombreCompleto, correo, nombreUsuario, contrasena, confirmarContrasena, aceptoTerminos } = req.body;

        if (!nombreCompleto?.trim() || !correo || !nombreUsuario || !contrasena)
            return res.status(400).json({ message: 'Completa todos los campos' });
        if (!REGEX_CORREO.test(correo)) return res.status(400).json({ message: 'El correo no es válido' });
        if (!REGEX_USUARIO.test(nombreUsuario))
            return res.status(400).json({ message: 'El usuario debe tener de 3 a 40 letras, números, "_" o "."' });
        if (contrasena.length < 6) return res.status(400).json({ message: 'La contraseña debe tener mínimo 6 caracteres' });
        if (contrasena !== confirmarContrasena) return res.status(400).json({ message: 'Las contraseñas no coinciden' });
        if (!aceptoTerminos) return res.status(400).json({ message: 'Debes aceptar los términos y condiciones' });

        const correoMin = correo.toLowerCase();
        if (await buscarUsuario('u.correo = ?', correoMin))
            return res.status(409).json({ message: 'Ya existe una cuenta con ese correo' });
        if (await buscarUsuario('u.nombre_usuario = ?', nombreUsuario))
            return res.status(409).json({ message: 'Ese nombre de usuario ya está en uso' });

        const [r] = await connection.query(
            `INSERT INTO usuarios (nombre_completo, correo, nombre_usuario, contrasena_hash, acepto_terminos)
             VALUES (?, ?, ?, ?, 1)`,
            [nombreCompleto.trim(), correoMin, nombreUsuario, hashContrasena(contrasena)]
        );
        responderSesion(res, await buscarUsuario('u.id_usuario = ?', r.insertId), 201);
    } catch (error) {
        console.error('Error en registro:', error.message);
        res.status(500).json({ message: 'No se pudo crear la cuenta' });
    }
});

// POST /api/auth/login  (con correo o con nombre de usuario)
router.post('/login', async (req, res) => {
    try {
        const { identificador, contrasena } = req.body;
        if (!identificador || !contrasena) return res.status(400).json({ message: 'Escribe tu correo y contraseña' });

        const u = await buscarUsuario('u.correo = ? OR u.nombre_usuario = ?', identificador.toLowerCase(), identificador);
        if (!u || !verificarContrasena(contrasena, u.contrasena_hash))
            return res.status(401).json({ message: 'Correo o contraseña incorrectos' });
        if (u.estado !== 'activo') return res.status(403).json({ message: 'Tu cuenta no está activa' });

        await connection.query('UPDATE usuarios SET ultimo_acceso = NOW() WHERE id_usuario = ?', [u.id_usuario]);
        responderSesion(res, u);
    } catch (error) {
        console.error('Error en login:', error.message);
        res.status(500).json({ message: 'No se pudo iniciar sesión' });
    }
});

// POST /api/auth/google  { credential } -> inicia sesión o crea la cuenta con Google
router.post('/google', async (req, res) => {
    try {
        const clientId = process.env.GOOGLE_CLIENT_ID;
        if (!clientId) return res.status(503).json({ message: 'Google aún no está configurado en el servidor' });
        if (!req.body.credential) return res.status(400).json({ message: 'Falta la credencial de Google' });

        // Google comprueba que el token es auténtico y no ha vencido
        const resp = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(req.body.credential)}`);
        const g = await resp.json();
        if (!resp.ok || g.aud !== clientId || String(g.email_verified) !== 'true')
            return res.status(401).json({ message: 'No se pudo validar la cuenta de Google' });

        const correo = g.email.toLowerCase();
        let u = await buscarUsuario('u.correo = ?', correo);

        if (u) {
            if (u.estado !== 'activo') return res.status(403).json({ message: 'Tu cuenta no está activa' });
            await connection.query(
                'UPDATE usuarios SET google_id = COALESCE(google_id, ?), ultimo_acceso = NOW() WHERE id_usuario = ?',
                [g.sub, u.id_usuario]
            );
        } else {
            // Nombre de usuario libre, a partir del correo
            const base = correo.split('@')[0].replace(/[^A-Za-z0-9_.]/g, '').slice(0, 30) || 'usuario';
            let nombreUsuario = base;
            for (let i = 1; await buscarUsuario('u.nombre_usuario = ?', nombreUsuario); i++) nombreUsuario = `${base}${i}`;

            const [r] = await connection.query(
                `INSERT INTO usuarios (nombre_completo, correo, nombre_usuario, contrasena_hash, google_id, avatar, acepto_terminos)
                 VALUES (?, ?, ?, NULL, ?, ?, 1)`,
                [g.name || base, correo, nombreUsuario, g.sub, g.picture || null]
            );
            u = await buscarUsuario('u.id_usuario = ?', r.insertId);
        }
        responderSesion(res, u);
    } catch (error) {
        console.error('Error con Google:', error.message);
        res.status(500).json({ message: 'No se pudo iniciar sesión con Google' });
    }
});

// GET /api/auth/yo -> datos del usuario de la sesión actual
router.get('/yo', requiereSesion, async (req, res) => {
    const u = await buscarUsuario('u.id_usuario = ?', req.usuario.id);
    if (!u) return res.status(404).json({ message: 'Usuario no encontrado' });
    responderSesion(res, u);
});

export default router;
