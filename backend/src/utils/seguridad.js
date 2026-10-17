import crypto from 'node:crypto';

// ---------- Contraseñas (scrypt, viene con Node: no necesita librerías) ----------
export function hashContrasena(contrasena) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.scryptSync(contrasena, salt, 64).toString('hex');
    return `${salt}:${hash}`;
}

export function verificarContrasena(contrasena, guardada) {
    if (!guardada || !guardada.includes(':')) return false;
    const [salt, hash] = guardada.split(':');
    const intento = crypto.scryptSync(contrasena, salt, 64);
    const esperado = Buffer.from(hash, 'hex');
    return esperado.length === intento.length && crypto.timingSafeEqual(esperado, intento);
}

// ---------- Token de sesión firmado (HMAC-SHA256) ----------
const secreto = () => process.env.JWT_SECRET || 'cambia-este-secreto';
const DURACION_MS = 7 * 24 * 60 * 60 * 1000;

const firmar = (data) => crypto.createHmac('sha256', secreto()).update(data).digest('base64url');

export function crearToken(payload) {
    const cuerpo = Buffer.from(JSON.stringify({ ...payload, exp: Date.now() + DURACION_MS })).toString('base64url');
    return `${cuerpo}.${firmar(cuerpo)}`;
}

export function leerToken(token) {
    if (!token || !token.includes('.')) return null;
    const [cuerpo, firma] = token.split('.');
    const esperada = firmar(cuerpo);
    if (firma.length !== esperada.length || !crypto.timingSafeEqual(Buffer.from(firma), Buffer.from(esperada))) return null;
    const datos = JSON.parse(Buffer.from(cuerpo, 'base64url').toString());
    return datos.exp > Date.now() ? datos : null;
}

// Middleware: exige sesión iniciada (header Authorization: Bearer <token>)
export function requiereSesion(req, res, next) {
    const datos = leerToken((req.headers.authorization || '').replace('Bearer ', ''));
    if (!datos) return res.status(401).json({ message: 'Debes iniciar sesión' });
    req.usuario = datos;
    next();
}
