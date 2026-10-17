// Crea las tablas la primera vez que la aplicación se conecta a una base vacía
// (por ejemplo, una base nueva en Aiven). Si la tabla usuarios ya existe, no toca nada.
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { connection } from './dbmysql.js';

const ARCHIVO = fileURLToPath(new URL('../../../database/esquema.sql', import.meta.url));

export async function aplicarEsquema() {
    const sentencias = fs.readFileSync(ARCHIVO, 'utf8')
        .split(/;\s*\n/)
        .map((s) => s.replace(/^(\s*--[^\n]*\n)+/g, '').trim())
        .filter(Boolean);
    const con = await connection.getConnection();
    try {
        for (const s of sentencias) await con.query(s);
    } finally {
        con.release();
    }
    return sentencias.length;
}

export async function asegurarEsquema() {
    const [r] = await connection.query(
        "SELECT COUNT(*) AS n FROM information_schema.tables WHERE table_schema = DATABASE() AND table_name = 'usuarios'");
    if (r[0].n > 0) return false;
    const n = await aplicarEsquema();
    console.log(`Base de datos vacía: se crearon las tablas (${n} sentencias).`);
    return true;
}
