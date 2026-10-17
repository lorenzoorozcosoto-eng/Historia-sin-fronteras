// Genera database/esquema.sql: la estructura de todas las tablas y los datos de referencia
// (regiones, países, rangos, niveles, categorías, roles, logros). NO exporta usuarios ni progreso.
// Uso: npm run exportar-bd   (lee la base indicada en backend/.env)
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { connection } from '../src/config/mysql/dbmysql.js';

const SALIDA = fileURLToPath(new URL('./esquema.sql', import.meta.url));
// tablas cuyos datos forman parte del catálogo de la aplicación
const CON_DATOS = ['roles', 'regiones', 'paises', 'categorias', 'niveles', 'rangos', 'logros'];

const q = (v) => {
    if (v === null || v === undefined) return 'NULL';
    if (typeof v === 'number') return String(v);
    if (typeof v === 'boolean') return v ? '1' : '0';
    if (v instanceof Date) return `'${v.toISOString().slice(0, 19).replace('T', ' ')}'`;
    if (Buffer.isBuffer(v)) return `0x${v.toString('hex')}`;
    return `'${String(v).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\r/g, '\\r').replace(/\n/g, '\\n')}'`;
};

const [filas] = await connection.query('SHOW FULL TABLES');
const tablas = filas.filter((f) => Object.values(f)[1] === 'BASE TABLE').map((f) => Object.values(f)[0]);
const vistas = filas.filter((f) => Object.values(f)[1] === 'VIEW').map((f) => Object.values(f)[0]);

let sql = '-- Esquema de Historia Sin Fronteras (generado con npm run exportar-bd)\n';
sql += 'SET NAMES utf8mb4;\nSET FOREIGN_KEY_CHECKS = 0;\n\n';

for (const t of tablas) {
    const [[r]] = await connection.query(`SHOW CREATE TABLE \`${t}\``);
    let ddl = r['Create Table']
        .replace(/CREATE TABLE/, 'CREATE TABLE IF NOT EXISTS')
        .replace(/ AUTO_INCREMENT=\d+/g, '')
        .replace(/current_timestamp\(\)/gi, 'CURRENT_TIMESTAMP')
        .replace(/DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP/gi, 'DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP')
        .replace(/utf8mb4_general_ci/g, 'utf8mb4_unicode_ci');
    sql += `${ddl};\n\n`;
}
for (const t of CON_DATOS.filter((x) => tablas.includes(x))) {
    const [datos] = await connection.query(`SELECT * FROM \`${t}\``);
    if (!datos.length) continue;
    const cols = Object.keys(datos[0]).map((c) => `\`${c}\``).join(', ');
    sql += `-- Datos de ${t}\n`;
    for (const d of datos) sql += `INSERT IGNORE INTO \`${t}\` (${cols}) VALUES (${Object.values(d).map(q).join(', ')});\n`;
    sql += '\n';
}
for (const v of vistas) {
    const [[r]] = await connection.query(`SHOW CREATE VIEW \`${v}\``);
    const def = r['Create View'].replace(/^CREATE .*? VIEW/i, 'CREATE OR REPLACE VIEW').replace(/current_timestamp\(\)/gi, 'CURRENT_TIMESTAMP');
    sql += `${def};\n\n`;
}
sql += 'SET FOREIGN_KEY_CHECKS = 1;\n';
fs.writeFileSync(SALIDA, sql);
console.log(`Listo: ${tablas.length} tablas y ${vistas.length} vista(s) en ${SALIDA}`);
process.exit(0);
