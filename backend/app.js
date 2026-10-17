import './src/config/env.js';
import Server from './src/server/express.server.js';
import { dbConnectMysql } from './src/config/mysql/dbmysql.js';
import { migrar, migrarProgresoTemas } from './src/config/mysql/migraciones.js';
import { prepararInsignias } from './src/services/insignias.js';


async function main() {
    try {
        // Conexión a la base de datos
        //await dbConnectMongoose();
        await dbConnectMysql();
        await migrar();
        await migrarProgresoTemas();
        await prepararInsignias();


        const server = new Server();
        await server.start();
    } catch (error) {
        console.error('Error al iniciar la aplicación:', error.message);
        process.exit(1);
    }
}

// Manejo de errores e inicio del servidor
main().catch(
    (error) => {
        console.error('Error fatal:', error);
        process.exit(1);
    }
);