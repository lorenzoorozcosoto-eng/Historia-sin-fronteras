import { connection } from './dbmysql.js';

// Cambios a la tabla usuarios para permitir cuentas de Google (se pueden repetir sin problema)
export async function migrar() {
    const [cols] = await connection.query(
        `SELECT COLUMN_NAME FROM information_schema.COLUMNS
         WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'usuarios'`
    );
    const nombres = cols.map((c) => c.COLUMN_NAME);

    if (!nombres.includes('google_id')) {
        await connection.query('ALTER TABLE usuarios ADD COLUMN google_id VARCHAR(40) NULL UNIQUE AFTER contrasena_hash');
    }
    // Quien entra con Google no tiene contraseña propia
    await connection.query('ALTER TABLE usuarios MODIFY contrasena_hash VARCHAR(255) NULL');
}

// Temas completados por usuario y país (para el porcentaje de progreso)
export async function migrarProgresoTemas() {
    await connection.query(`
        CREATE TABLE IF NOT EXISTS progreso_tema (
            id_usuario INT UNSIGNED NOT NULL,
            id_pais SMALLINT UNSIGNED NOT NULL,
            tema VARCHAR(60) NOT NULL,
            correctas TINYINT UNSIGNED NOT NULL DEFAULT 0,
            total TINYINT UNSIGNED NOT NULL DEFAULT 0,
            fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id_usuario, id_pais, tema),
            CONSTRAINT fk_ptema_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios (id_usuario) ON DELETE CASCADE,
            CONSTRAINT fk_ptema_pais FOREIGN KEY (id_pais) REFERENCES paises (id_pais) ON DELETE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`);

    // Momento en que se acabaron las vidas: a los 5 minutos se restablecen solas
    const [col] = await connection.query(
        `SELECT 1 FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'progreso_pais' AND COLUMN_NAME = 'vidas_agotadas_en'`
    );
    if (!col.length) await connection.query('ALTER TABLE progreso_pais ADD COLUMN vidas_agotadas_en DATETIME NULL');
}
