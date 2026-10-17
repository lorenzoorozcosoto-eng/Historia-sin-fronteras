// Insignias, rangos y resumen del progreso general de cada usuario.
import { connection } from '../config/mysql/dbmysql.js';

// Temas con contenido por país (los países que aún no tienen contenido no cuentan en el progreso general)
export const TEMAS_POR_PAIS = { MX: 24, CO: 24, AR: 24, PE: 24, BR: 24, US: 24, CA: 24, GT: 13, GY: 24, VE: 13, CN: 13, IN: 13, RU: 13, ID: 13, PK: 13, NG: 13, BD: 13, JP: 13, ET: 13, PH: 13, EG: 13, CD: 13, VN: 13, IR: 13, TR: 13, DE: 13, TH: 13, GB: 13, FR: 13, IT: 13, ES: 13, ZA: 13, KR: 13, TZ: 13, MM: 13, KE: 13, IQ: 13, AF: 13, UZ: 13, MY: 13, SA: 13, YE: 13, NP: 13, LK: 13, KZ: 13, SY: 13, KH: 13, IL: 13, JO: 13, LB: 13, KP: 13, MN: 13, PS: 13, GE: 13, AM: 13, AZ: 13, CY: 13, SG: 13, TJ: 13, KG: 13, LA: 13, OM: 13, KW: 13, QA: 13, BH: 13, AE: 13, TM: 13, BT: 13, BN: 13, MV: 13, TL: 13, PL: 13, UA: 13, NL: 13, BE: 13, SE: 13, GR: 13, PT: 13, RO: 13, CZ: 13, HU: 13, AT: 13, CH: 13, RS: 13, BG: 13, DK: 13, FI: 13, NO: 13, IE: 13, BY: 13, SK: 13, HR: 13, BA: 13, AL: 13, LT: 13, SI: 13, LV: 13, EE: 13, MK: 13, MD: 13, ME: 13, LU: 13, MT: 13, IS: 13, AD: 13, MC: 13, LI: 13, SM: 13, VA: 13, DZ: 13, SD: 13, UG: 13, MA: 13, AO: 13, GH: 13, MZ: 13, CI: 13, MG: 13, CM: 13, NE: 13, ML: 13, MW: 13, ZM: 13, SN: 13, TD: 13, SO: 13, ZW: 13, BF: 13, GN: 13, RW: 13, BJ: 13, BI: 13, TN: 13, SS: 13, SL: 13, LY: 13, LR: 13, CF: 13, TG: 13, ER: 13, CU: 13, EC: 13, BO: 13, CL: 13, UY: 13, PY: 13, CR: 13, PA: 13, HN: 13, NI: 13, SV: 13, DO: 13, HT: 13, JM: 13, TT: 13, SR: 13, BZ: 13, BS: 13, BB: 13, LC: 13, GD: 13, VC: 13, DM: 13, KN: 13, AG: 13, AU: 13, NZ: 13, PG: 13, FJ: 13, WS: 13, TO: 13, VU: 13, SB: 13, KI: 13, NR: 13, TV: 13, PW: 13, FM: 13, MH: 13, MR: 13, NA: 13, BW: 13, LS: 13, GM: 13, GA: 13, GW: 13, GQ: 13, CG: 13, DJ: 13, SZ: 13, CV: 13, KM: 13, MU: 13, SC: 13, ST: 13 };
// Países que se crean en la base si aún no existen: [id_region, nombre, bandera, página]
export const CATALOGO = {
    ST: [1, 'Santo Tomé y Príncipe', '🇸🇹', 'santo-tome-y-principe.html'],
    SC: [1, 'Seychelles', '🇸🇨', 'seychelles.html'],
    MU: [1, 'Mauricio', '🇲🇺', 'mauricio.html'],
    KM: [1, 'Comoras', '🇰🇲', 'comoras.html'],
    CV: [1, 'Cabo Verde', '🇨🇻', 'cabo-verde.html'],
    SZ: [1, 'Esuatini', '🇸🇿', 'esuatini.html'],
    DJ: [1, 'Yibuti', '🇩🇯', 'yibuti.html'],
    CG: [1, 'República del Congo', '🇨🇬', 'republica-del-congo.html'],
    GQ: [1, 'Guinea Ecuatorial', '🇬🇶', 'guinea-ecuatorial.html'],
    GW: [1, 'Guinea-Bisáu', '🇬🇼', 'guinea-bisau.html'],
    GA: [1, 'Gabón', '🇬🇦', 'gabon.html'],
    GM: [1, 'Gambia', '🇬🇲', 'gambia.html'],
    LS: [1, 'Lesoto', '🇱🇸', 'lesoto.html'],
    BW: [1, 'Botsuana', '🇧🇼', 'botsuana.html'],
    NA: [1, 'Namibia', '🇳🇦', 'namibia.html'],
    MR: [1, 'Mauritania', '🇲🇷', 'mauritania.html'],
    MH: [5, 'Islas Marshall', '🇲🇭', 'islas-marshall.html'],
    FM: [5, 'Micronesia', '🇫🇲', 'micronesia.html'],
    PW: [5, 'Palaos', '🇵🇼', 'palaos.html'],
    TV: [5, 'Tuvalu', '🇹🇻', 'tuvalu.html'],
    NR: [5, 'Nauru', '🇳🇷', 'nauru.html'],
    KI: [5, 'Kiribati', '🇰🇮', 'kiribati.html'],
    SB: [5, 'Islas Salomón', '🇸🇧', 'islas-salomon.html'],
    VU: [5, 'Vanuatu', '🇻🇺', 'vanuatu.html'],
    TO: [5, 'Tonga', '🇹🇴', 'tonga.html'],
    WS: [5, 'Samoa', '🇼🇸', 'samoa.html'],
    FJ: [5, 'Fiyi', '🇫🇯', 'fiyi.html'],
    PG: [5, 'Papúa Nueva Guinea', '🇵🇬', 'papua-nueva-guinea.html'],
    NZ: [5, 'Nueva Zelanda', '🇳🇿', 'nueva-zelanda.html'],
    AU: [5, 'Australia', '🇦🇺', 'australia.html'],
    AG: [2, 'Antigua y Barbuda', '🇦🇬', 'antigua-y-barbuda.html'],
    KN: [2, 'San Cristóbal y Nieves', '🇰🇳', 'san-cristobal-y-nieves.html'],
    DM: [2, 'Dominica', '🇩🇲', 'dominica.html'],
    VC: [2, 'San Vicente y las Granadinas', '🇻🇨', 'san-vicente-y-las-granadinas.html'],
    GD: [2, 'Granada', '🇬🇩', 'granada.html'],
    LC: [2, 'Santa Lucía', '🇱🇨', 'santa-lucia.html'],
    BB: [2, 'Barbados', '🇧🇧', 'barbados.html'],
    BS: [2, 'Bahamas', '🇧🇸', 'bahamas.html'],
    BZ: [2, 'Belice', '🇧🇿', 'belice.html'],
    TT: [2, 'Trinidad y Tobago', '🇹🇹', 'trinidad-y-tobago.html'],
    JM: [2, 'Jamaica', '🇯🇲', 'jamaica.html'],
    HT: [2, 'Haití', '🇭🇹', 'haiti.html'],
    DO: [2, 'República Dominicana', '🇩🇴', 'republica-dominicana.html'],
    SV: [2, 'El Salvador', '🇸🇻', 'el-salvador.html'],
    NI: [2, 'Nicaragua', '🇳🇮', 'nicaragua.html'],
    HN: [2, 'Honduras', '🇭🇳', 'honduras.html'],
    PA: [2, 'Panamá', '🇵🇦', 'panama.html'],
    CR: [2, 'Costa Rica', '🇨🇷', 'costa-rica.html'],
    CU: [2, 'Cuba', '🇨🇺', 'cuba.html'],
    ER: [1, 'Eritrea', '🇪🇷', 'eritrea.html'],
    TG: [1, 'Togo', '🇹🇬', 'togo.html'],
    CF: [1, 'República Centroafricana', '🇨🇫', 'republica-centroafricana.html'],
    LR: [1, 'Liberia', '🇱🇷', 'liberia.html'],
    LY: [1, 'Libia', '🇱🇾', 'libia.html'],
    SL: [1, 'Sierra Leona', '🇸🇱', 'sierra-leona.html'],
    SS: [1, 'Sudán del Sur', '🇸🇸', 'sudan-del-sur.html'],
    TN: [1, 'Túnez', '🇹🇳', 'tunez.html'],
    BI: [1, 'Burundi', '🇧🇮', 'burundi.html'],
    BJ: [1, 'Benín', '🇧🇯', 'benin.html'],
    RW: [1, 'Ruanda', '🇷🇼', 'ruanda.html'],
    GN: [1, 'Guinea', '🇬🇳', 'guinea.html'],
    BF: [1, 'Burkina Faso', '🇧🇫', 'burkina-faso.html'],
    ZW: [1, 'Zimbabue', '🇿🇼', 'zimbabue.html'],
    SO: [1, 'Somalia', '🇸🇴', 'somalia.html'],
    TD: [1, 'Chad', '🇹🇩', 'chad.html'],
    SN: [1, 'Senegal', '🇸🇳', 'senegal.html'],
    ZM: [1, 'Zambia', '🇿🇲', 'zambia.html'],
    MW: [1, 'Malaui', '🇲🇼', 'malaui.html'],
    ML: [1, 'Malí', '🇲🇱', 'mali.html'],
    NE: [1, 'Níger', '🇳🇪', 'niger.html'],
    CM: [1, 'Camerún', '🇨🇲', 'camerun.html'],
    MG: [1, 'Madagascar', '🇲🇬', 'madagascar.html'],
    CI: [1, 'Costa de Marfil', '🇨🇮', 'costa-de-marfil.html'],
    MZ: [1, 'Mozambique', '🇲🇿', 'mozambique.html'],
    GH: [1, 'Ghana', '🇬🇭', 'ghana.html'],
    AO: [1, 'Angola', '🇦🇴', 'angola.html'],
    MA: [1, 'Marruecos', '🇲🇦', 'marruecos.html'],
    UG: [1, 'Uganda', '🇺🇬', 'uganda.html'],
    SD: [1, 'Sudán', '🇸🇩', 'sudan.html'],
    DZ: [1, 'Argelia', '🇩🇿', 'argelia.html'],
    VA: [4, 'Ciudad del Vaticano', '🇻🇦', 'ciudad-del-vaticano.html'],
    SM: [4, 'San Marino', '🇸🇲', 'san-marino.html'],
    LI: [4, 'Liechtenstein', '🇱🇮', 'liechtenstein.html'],
    MC: [4, 'Mónaco', '🇲🇨', 'monaco.html'],
    AD: [4, 'Andorra', '🇦🇩', 'andorra.html'],
    IS: [4, 'Islandia', '🇮🇸', 'islandia.html'],
    MT: [4, 'Malta', '🇲🇹', 'malta.html'],
    LU: [4, 'Luxemburgo', '🇱🇺', 'luxemburgo.html'],
    ME: [4, 'Montenegro', '🇲🇪', 'montenegro.html'],
    MD: [4, 'Moldavia', '🇲🇩', 'moldavia.html'],
    MK: [4, 'Macedonia del Norte', '🇲🇰', 'macedonia-del-norte.html'],
    EE: [4, 'Estonia', '🇪🇪', 'estonia.html'],
    LV: [4, 'Letonia', '🇱🇻', 'letonia.html'],
    SI: [4, 'Eslovenia', '🇸🇮', 'eslovenia.html'],
    LT: [4, 'Lituania', '🇱🇹', 'lituania.html'],
    AL: [4, 'Albania', '🇦🇱', 'albania.html'],
    BA: [4, 'Bosnia y Herzegovina', '🇧🇦', 'bosnia-y-herzegovina.html'],
    HR: [4, 'Croacia', '🇭🇷', 'croacia.html'],
    SK: [4, 'Eslovaquia', '🇸🇰', 'eslovaquia.html'],
    BY: [4, 'Bielorrusia', '🇧🇾', 'bielorrusia.html'],
    IE: [4, 'Irlanda', '🇮🇪', 'irlanda.html'],
    NO: [4, 'Noruega', '🇳🇴', 'noruega.html'],
    FI: [4, 'Finlandia', '🇫🇮', 'finlandia.html'],
    DK: [4, 'Dinamarca', '🇩🇰', 'dinamarca.html'],
    BG: [4, 'Bulgaria', '🇧🇬', 'bulgaria.html'],
    RS: [4, 'Serbia', '🇷🇸', 'serbia.html'],
    CH: [4, 'Suiza', '🇨🇭', 'suiza.html'],
    AT: [4, 'Austria', '🇦🇹', 'austria.html'],
    HU: [4, 'Hungría', '🇭🇺', 'hungria.html'],
    CZ: [4, 'Chequia', '🇨🇿', 'chequia.html'],
    RO: [4, 'Rumanía', '🇷🇴', 'rumania.html'],
    PT: [4, 'Portugal', '🇵🇹', 'portugal.html'],
    GR: [4, 'Grecia', '🇬🇷', 'grecia.html'],
    SE: [4, 'Suecia', '🇸🇪', 'suecia.html'],
    BE: [4, 'Bélgica', '🇧🇪', 'belgica.html'],
    NL: [4, 'Países Bajos', '🇳🇱', 'paises-bajos.html'],
    UA: [4, 'Ucrania', '🇺🇦', 'ucrania.html'],
    PL: [4, 'Polonia', '🇵🇱', 'polonia.html'],
    TL: [3, 'Timor Oriental', '🇹🇱', 'timor-oriental.html'],
    MV: [3, 'Maldivas', '🇲🇻', 'maldivas.html'],
    BN: [3, 'Brunéi', '🇧🇳', 'brunei.html'],
    BT: [3, 'Bután', '🇧🇹', 'butan.html'],
    TM: [3, 'Turkmenistán', '🇹🇲', 'turkmenistan.html'],
    AE: [3, 'Emiratos Árabes Unidos', '🇦🇪', 'emiratos-arabes-unidos.html'],
    BH: [3, 'Baréin', '🇧🇭', 'barein.html'],
    QA: [3, 'Catar', '🇶🇦', 'catar.html'],
    KW: [3, 'Kuwait', '🇰🇼', 'kuwait.html'],
    OM: [3, 'Omán', '🇴🇲', 'oman.html'],
    LA: [3, 'Laos', '🇱🇦', 'laos.html'],
    KG: [3, 'Kirguistán', '🇰🇬', 'kirguistan.html'],
    TJ: [3, 'Tayikistán', '🇹🇯', 'tayikistan.html'],
    SG: [3, 'Singapur', '🇸🇬', 'singapur.html'],
    CY: [3, 'Chipre', '🇨🇾', 'chipre.html'],
    AZ: [3, 'Azerbaiyán', '🇦🇿', 'azerbaiyan.html'],
    AM: [3, 'Armenia', '🇦🇲', 'armenia.html'],
    GE: [3, 'Georgia', '🇬🇪', 'georgia.html'],
    PS: [3, 'Palestina', '🇵🇸', 'palestina.html'],
    MN: [3, 'Mongolia', '🇲🇳', 'mongolia.html'],
    KP: [3, 'Corea del Norte', '🇰🇵', 'corea-del-norte.html'],
    LB: [3, 'Líbano', '🇱🇧', 'libano.html'],
    JO: [3, 'Jordania', '🇯🇴', 'jordania.html'],
    IL: [3, 'Israel', '🇮🇱', 'israel.html'],
    KH: [3, 'Camboya', '🇰🇭', 'camboya.html'],
    SY: [3, 'Siria', '🇸🇾', 'siria.html'],
    KZ: [3, 'Kazajistán', '🇰🇿', 'kazajistan.html'],
    LK: [3, 'Sri Lanka', '🇱🇰', 'sri-lanka.html'],
    NP: [3, 'Nepal', '🇳🇵', 'nepal.html'],
    YE: [3, 'Yemen', '🇾🇪', 'yemen.html'],
    SA: [3, 'Arabia Saudí', '🇸🇦', 'arabia-saudi.html'],
    MY: [3, 'Malasia', '🇲🇾', 'malasia.html'],
    UZ: [3, 'Uzbekistán', '🇺🇿', 'uzbekistan.html'],
    AF: [3, 'Afganistán', '🇦🇫', 'afganistan.html'],
    IQ: [3, 'Irak', '🇮🇶', 'irak.html'],
    KE: [1, 'Kenia', '🇰🇪', 'kenia.html'],
    MM: [3, 'Birmania (Myanmar)', '🇲🇲', 'birmania.html'],
    TZ: [1, 'Tanzania', '🇹🇿', 'tanzania.html'],
    KR: [3, 'Corea del Sur', '🇰🇷', 'corea-del-sur.html'],
    ZA: [1, 'Sudáfrica', '🇿🇦', 'sudafrica.html'],
    ES: [4, 'España', '🇪🇸', 'espana.html'],
    IT: [4, 'Italia', '🇮🇹', 'italia.html'],
    FR: [4, 'Francia', '🇫🇷', 'francia.html'],
    GB: [4, 'Reino Unido', '🇬🇧', 'reino-unido.html'],
    TH: [3, 'Tailandia', '🇹🇭', 'tailandia.html'],
    DE: [4, 'Alemania', '🇩🇪', 'alemania.html'],
    TR: [3, 'Turquía', '🇹🇷', 'turquia.html'],
    IR: [3, 'Irán', '🇮🇷', 'iran.html'],
    VN: [3, 'Vietnam', '🇻🇳', 'vietnam.html'],
    CD: [1, 'República Democrática del Congo', '🇨🇩', 'republica-democratica-del-congo.html'],
    EG: [1, 'Egipto', '🇪🇬', 'egipto.html'],
    PH: [3, 'Filipinas', '🇵🇭', 'filipinas.html'],
    ET: [1, 'Etiopía', '🇪🇹', 'etiopia.html'],
    JP: [3, 'Japón', '🇯🇵', 'japon.html'],
    BD: [3, 'Bangladés', '🇧🇩', 'banglades.html'],
    NG: [1, 'Nigeria', '🇳🇬', 'nigeria.html'],
    PK: [3, 'Pakistán', '🇵🇰', 'pakistan.html'],
    ID: [3, 'Indonesia', '🇮🇩', 'indonesia.html'],
    RU: [4, 'Rusia', '🇷🇺', 'rusia.html'],
    IN: [3, 'India', '🇮🇳', 'india.html'],
    CN: [3, 'China', '🇨🇳', 'china.html'],
    PY: [2, 'Paraguay', '🇵🇾', 'paraguay.html'],
    UY: [2, 'Uruguay', '🇺🇾', 'uruguay.html'],
    BO: [2, 'Bolivia', '🇧🇴', 'bolivia.html'],
    CL: [2, 'Chile', '🇨🇱', 'chile.html'],
    EC: [2, 'Ecuador', '🇪🇨', 'ecuador.html'],
    SR: [2, 'Surinam', '🇸🇷', 'surinam.html'],
    GY: [2, 'Guyana', '🇬🇾', 'guyana.html'],
    VE: [2, 'Venezuela', '🇻🇪', 'venezuela.html'],
    GT: ['MX', 'Guatemala', '🇬🇹', 'guatemala.html'], // la región se toma del país indicado (América del Norte)
};
const TOTAL_TEMAS = Object.values(TEMAS_POR_PAIS).reduce((a, b) => a + b, 0);

// Insignias nuevas (las 6 que ya traía la base se conservan). "manual" = las otorga el reto (ronda perfecta, racha).
const NUEVAS = [
    ['Semilla de historia', 'Alcanza 100 puntos.', '🌱', 'puntos', 100, 10],
    ['Cazador de datos', 'Alcanza 500 puntos.', '🏹', 'puntos', 500, 30],
    ['Maestro del pasado', 'Alcanza 3.000 puntos.', '🏛️', 'puntos', 3000, 200],
    ['Leyenda de la historia', 'Alcanza 6.000 puntos.', '👑', 'puntos', 6000, 400],
    ['Estudioso', 'Completa 12 temas.', '📚', 'contenidos_completados', 12, 80],
    ['Ronda perfecta', 'Acierta todas las preguntas de un reto.', '🎯', 'manual', 0, 20],
    ['Imparable', 'Acierta 5 preguntas seguidas.', '⚡', 'manual', 0, 20],
];

export async function prepararInsignias() {
    for (const [iso, [regionRef, nombre, bandera, pagina]] of Object.entries(CATALOGO)) {
        let region = regionRef;
        if (typeof regionRef === 'string') {
            const [r] = await connection.query('SELECT id_region FROM paises WHERE codigo_iso = ? LIMIT 1', [regionRef]);
            if (!r[0]) continue;
            region = r[0].id_region;
        }
        await connection.query(
            `INSERT INTO paises (id_region, codigo_iso, nombre, bandera, pagina_url, disponible)
             SELECT ?, ?, ?, ?, ?, 0 FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM paises WHERE codigo_iso = ?)`,
            [region, iso, nombre, bandera, pagina, iso]);
    }
    // los países con contenido completo quedan habilitados en el mapa
    await connection.query('UPDATE paises SET disponible = 1 WHERE codigo_iso IN (?)', [Object.keys(TEMAS_POR_PAIS)]);
    for (const [nombre, descripcion, icono, criterio, valor, recompensa] of NUEVAS) {
        await connection.query(
            `INSERT IGNORE INTO logros (nombre, descripcion, icono, criterio, valor_requerido, puntos_recompensa)
             VALUES (?, ?, ?, ?, ?, ?)`, [nombre, descripcion, icono, criterio, valor, recompensa]);
    }
}

// Cuenta temas completados (60 % de aciertos o más) y países completados
async function contarAvance(idUsuario) {
    const [filas] = await connection.query(
        `SELECT p.codigo_iso AS iso, COUNT(*) AS n
         FROM progreso_tema pt JOIN paises p ON p.id_pais = pt.id_pais
         WHERE pt.id_usuario = ? AND pt.total > 0 AND pt.correctas / pt.total >= 0.6
         GROUP BY p.codigo_iso`, [idUsuario]);
    const porPais = Object.fromEntries(filas.map((f) => [f.iso, Number(f.n)]));
    const temas = Object.values(porPais).reduce((a, b) => a + b, 0);
    const paises = Object.entries(TEMAS_POR_PAIS).filter(([iso, total]) => (porPais[iso] || 0) >= total).length;
    return { porPais, temas, paises };
}

// Actualiza la racha de días jugando y el rango según los puntos
export async function actualizarActividad(idUsuario) {
    await connection.query(
        `UPDATE usuarios SET
            racha_dias = CASE
                WHEN ultima_actividad = CURDATE() THEN racha_dias
                WHEN ultima_actividad = CURDATE() - INTERVAL 1 DAY THEN racha_dias + 1
                ELSE 1 END,
            ultima_actividad = CURDATE(),
            id_rango = (SELECT id_rango FROM rangos WHERE puntos_minimos <= puntos_totales ORDER BY puntos_minimos DESC LIMIT 1)
         WHERE id_usuario = ?`, [idUsuario]);
}

// Entrega las insignias que ya se merecen y devuelve las nuevas
export async function otorgarInsignias(idUsuario, { mejorRacha = 0, rondaPerfecta = false } = {}) {
    const nuevas = [];
    for (let vuelta = 0; vuelta < 3; vuelta++) { // las recompensas suman puntos y pueden desbloquear otra insignia
        const [[u]] = await connection.query('SELECT puntos_totales, racha_dias FROM usuarios WHERE id_usuario = ?', [idUsuario]);
        const avance = await contarAvance(idUsuario);
        const [pendientes] = await connection.query(
            `SELECT l.* FROM logros l
             WHERE NOT EXISTS (SELECT 1 FROM usuario_logro ul WHERE ul.id_usuario = ? AND ul.id_logro = l.id_logro)`, [idUsuario]);
        let otorgadas = 0;
        for (const l of pendientes) {
            const cumple = {
                puntos: () => u.puntos_totales >= l.valor_requerido,
                contenidos_completados: () => avance.temas >= l.valor_requerido,
                paises_completados: () => avance.paises >= l.valor_requerido,
                racha_dias: () => u.racha_dias >= l.valor_requerido,
                manual: () => (l.nombre === 'Ronda perfecta' ? rondaPerfecta : l.nombre === 'Imparable' ? mejorRacha >= 5 : false),
            }[l.criterio]?.() ?? false;
            if (!cumple) continue;
            await connection.query('INSERT IGNORE INTO usuario_logro (id_usuario, id_logro) VALUES (?, ?)', [idUsuario, l.id_logro]);
            if (l.puntos_recompensa) await connection.query('UPDATE usuarios SET puntos_totales = puntos_totales + ? WHERE id_usuario = ?', [l.puntos_recompensa, idUsuario]);
            nuevas.push({ id: l.id_logro, nombre: l.nombre, icono: l.icono, descripcion: l.descripcion, puntos: l.puntos_recompensa });
            otorgadas++;
        }
        if (!otorgadas) break;
    }
    if (nuevas.length) await actualizarActividad(idUsuario);
    return nuevas;
}

// Datos para el inicio: puntos, rango, países, insignias y progreso general
export async function resumenUsuario(idUsuario) {
    const [[u]] = await connection.query(
        `SELECT u.puntos_totales, u.racha_dias, r.nombre AS rango, r.puntos_minimos
         FROM usuarios u JOIN rangos r ON r.id_rango = u.id_rango WHERE u.id_usuario = ?`, [idUsuario]);
    const [[siguiente]] = await connection.query('SELECT nombre, puntos_minimos FROM rangos WHERE puntos_minimos > ? ORDER BY puntos_minimos LIMIT 1', [u.puntos_totales]);
    const [insignias] = await connection.query(
        `SELECT l.id_logro AS id, l.nombre, l.descripcion, l.icono, l.puntos_recompensa AS puntos, ul.fecha_obtenido AS fecha
         FROM logros l LEFT JOIN usuario_logro ul ON ul.id_logro = l.id_logro AND ul.id_usuario = ?
         ORDER BY (ul.fecha_obtenido IS NULL), l.valor_requerido, l.id_logro`, [idUsuario]);
    const avance = await contarAvance(idUsuario);
    const [pp] = await connection.query(
        `SELECT p.codigo_iso AS iso, pp.puntos FROM progreso_pais pp JOIN paises p ON p.id_pais = pp.id_pais WHERE pp.id_usuario = ?`, [idUsuario]);
    const [[{ disponibles }]] = await connection.query('SELECT COUNT(*) AS disponibles FROM paises WHERE disponible = 1');
    const porPais = {};
    for (const iso of new Set([...pp.map((x) => x.iso), ...Object.keys(avance.porPais)])) {
        porPais[iso] = { puntos: pp.find((x) => x.iso === iso)?.puntos ?? 0, temas: avance.porPais[iso] ?? 0, total: TEMAS_POR_PAIS[iso] ?? 0 };
    }
    const visitados = Object.values(porPais).filter((x) => x.puntos > 0 || x.temas > 0).length;
    return {
        puntos: u.puntos_totales,
        rango: u.rango,
        siguienteRango: siguiente ? { nombre: siguiente.nombre, faltan: siguiente.puntos_minimos - u.puntos_totales, desde: u.puntos_minimos, hasta: siguiente.puntos_minimos } : null,
        rachaDias: u.racha_dias,
        paises: { visitados, disponibles: Number(disponibles) },
        temas: { completados: avance.temas, total: TOTAL_TEMAS },
        progresoGeneral: TOTAL_TEMAS ? Math.min(100, Math.round((avance.temas / TOTAL_TEMAS) * 100)) : 0,
        insignias: insignias.map((i) => ({ ...i, obtenida: Boolean(i.fecha) })),
        porPais,
    };
}
