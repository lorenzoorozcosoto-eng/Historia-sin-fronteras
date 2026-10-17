// Crea las tablas y los datos de referencia en la base indicada en backend/.env (por ejemplo, Aiven).
// Uso: npm run importar-bd
import { aplicarEsquema } from '../src/config/mysql/esquema.js';
import { connection } from '../src/config/mysql/dbmysql.js';

const [existe] = await connection.query(
    "SELECT COUNT(*) AS n FROM information_schema.tables WHERE table_schema = DATABASE() AND table_name = 'usuarios'");
if (existe[0].n > 0 && !process.argv.includes('--forzar')) {
    console.log('La base ya tiene tablas. No se cambió nada (usa --forzar para repetir; solo crea lo que falte).');
} else {
    console.log(`Listo: ${await aplicarEsquema()} sentencias aplicadas.`);
}
process.exit(0);
