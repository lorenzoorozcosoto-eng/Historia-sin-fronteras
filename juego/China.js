/* ============================================================
   HISTORIA SIN FRONTERAS - CHINA

   14 categorías x 5 preguntas = 70 preguntas
   5 vidas
   +10 puntos por respuesta correcta
   -1 vida por respuesta incorrecta
   Bloqueo al llegar a 0 vidas
   Reto de recuperación
   Reto final de 30 preguntas
   Historial de rondas
============================================================ */


/* ============================================================
   1. CONFIGURACIÓN
============================================================ */

const CLAVE_GUARDADO = "historiaSinFronterasChina_v1";

const MAX_VIDAS = 5;
const PUNTOS_CORRECTA = 10;
const ACIERTOS_MINIMOS_RECUPERACION = 3;

const nombresTemas = [
    "primerasCivilizaciones",
    "dinastiaQin",
    "dinastiaHan",
    "dinastiaTang",
    "dinastiaMing",
    "dinastiaQing",
    "republicaChina",
    "gastronomia",
    "musica",
    "tradiciones",
    "fiestas",
    "vestimenta",
    "arte",
    "monumentos"
];


/* ============================================================
   2. FUNCIONES GENERALES
============================================================ */

function q(pregunta, opciones, correcta) {
    return {
        pregunta,
        opciones,
        correcta
    };
}


function mezclar(lista) {
    const copia = [...lista];

    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    return copia;
}


function obtener(id) {
    return document.getElementById(id);
}


/* ============================================================
   3. INFORMACIÓN Y 70 PREGUNTAS
============================================================ */

const temas = {

    /* ========================================================
       HISTORIA 1
    ======================================================== */

    "primerasCivilizaciones": {

        titulo: "Primeras civilizaciones",

        subtitulo:
            "Conoce los primeros pueblos y civilizaciones que se desarrollaron en el territorio chino.",

        icono: "🏺",

        mensaje:
            "La civilización china posee una historia muy antigua y se desarrolló alrededor de importantes ríos como el Amarillo y el Yangtsé.",

        regiones: [
            "Río Amarillo",
            "Río Yangtsé",
            "Henan",
            "Shaanxi"
        ],

        dato:
            "El río Amarillo fue una de las zonas fundamentales para el desarrollo de las primeras sociedades agrícolas de China.",

        preguntas: [

            q(
                "¿Qué río fue fundamental para el desarrollo de las primeras civilizaciones chinas?",
                [
                    "Río Amarillo",
                    "Río Amazonas",
                    "Río Nilo",
                    "Río Danubio"
                ],
                "Río Amarillo"
            ),

            q(
                "¿Qué dinastía es considerada tradicionalmente la primera dinastía de China?",
                [
                    "Xia",
                    "Ming",
                    "Qing",
                    "Han"
                ],
                "Xia"
            ),

            q(
                "¿Qué antigua civilización se desarrolló en la región del río Amarillo?",
                [
                    "Civilización china",
                    "Civilización inca",
                    "Civilización maya",
                    "Civilización romana"
                ],
                "Civilización china"
            ),

            q(
                "¿Qué tipo de actividad fue importante para las primeras comunidades chinas?",
                [
                    "Agricultura",
                    "Industria espacial",
                    "Automovilismo",
                    "Producción de computadores"
                ],
                "Agricultura"
            ),

            q(
                "¿Cuál de estos ríos es uno de los más importantes de China?",
                [
                    "Yangtsé",
                    "Támesis",
                    "Rin",
                    "Sena"
                ],
                "Yangtsé"
            )
        ]
    },


    /* ========================================================
       HISTORIA 2
    ======================================================== */

    "dinastiaQin": {

        titulo: "Dinastía Qin",

        subtitulo:
            "Explora la dinastía que unificó gran parte del territorio chino en el siglo III a. C.",

        icono: "👑",

        mensaje:
            "La dinastía Qin unificó China bajo el gobierno de Qin Shi Huang y dejó importantes obras y transformaciones administrativas.",

        regiones: [
            "Xi'an",
            "Shaanxi",
            "China central",
            "Monte Li"
        ],

        dato:
            "Qin Shi Huang es conocido como el primer emperador de una China unificada.",

        preguntas: [

            q(
                "¿Quién fue el primer emperador de una China unificada?",
                [
                    "Qin Shi Huang",
                    "Confucio",
                    "Sun Yat-sen",
                    "Mao Zedong"
                ],
                "Qin Shi Huang"
            ),

            q(
                "¿Qué dinastía unificó China en el año 221 a. C.?",
                [
                    "Qin",
                    "Han",
                    "Tang",
                    "Ming"
                ],
                "Qin"
            ),

            q(
                "¿Qué famoso ejército fue construido para acompañar al emperador Qin Shi Huang en su mausoleo?",
                [
                    "Ejército de Terracota",
                    "Ejército de Jade",
                    "Ejército de Bronce Romano",
                    "Ejército de los Guerreros Azules"
                ],
                "Ejército de Terracota"
            ),

            q(
                "¿Qué ciudad está relacionada con el mausoleo de Qin Shi Huang?",
                [
                    "Xi'an",
                    "Shanghái",
                    "Hong Kong",
                    "Beijing"
                ],
                "Xi'an"
            ),

            q(
                "¿Qué característica tuvo el gobierno de Qin Shi Huang?",
                [
                    "Centralización del poder",
                    "Ausencia de gobierno",
                    "Democracia moderna",
                    "Gobierno exclusivamente religioso"
                ],
                "Centralización del poder"
            )
        ]
    },


    /* ========================================================
       HISTORIA 3
    ======================================================== */

    "dinastiaHan": {

        titulo: "Dinastía Han",

        subtitulo:
            "Conoce una de las dinastías más importantes de la antigua China.",

        icono: "🐉",

        mensaje:
            "La dinastía Han gobernó durante varios siglos y estuvo relacionada con importantes avances culturales y comerciales.",

        regiones: [
            "Chang'an",
            "Luoyang",
            "Asia Central",
            "Río Amarillo"
        ],

        dato:
            "Durante la dinastía Han se desarrollaron importantes intercambios relacionados con la Ruta de la Seda.",

        preguntas: [

            q(
                "¿Qué dinastía sucedió a la dinastía Qin?",
                [
                    "Han",
                    "Ming",
                    "Qing",
                    "Tang"
                ],
                "Han"
            ),

            q(
                "¿Qué ruta comercial tuvo gran importancia durante la dinastía Han?",
                [
                    "Ruta de la Seda",
                    "Ruta del Ámbar",
                    "Ruta del Atlántico",
                    "Ruta del Mediterráneo"
                ],
                "Ruta de la Seda"
            ),

            q(
                "¿Qué producto chino se convirtió en uno de los principales productos comercializados por la Ruta de la Seda?",
                [
                    "Seda",
                    "Café",
                    "Cacao",
                    "Papas"
                ],
                "Seda"
            ),

            q(
                "¿Qué pensador influyó profundamente en la sociedad china durante y después de la dinastía Han?",
                [
                    "Confucio",
                    "Aristóteles",
                    "Sócrates",
                    "Platón"
                ],
                "Confucio"
            ),

            q(
                "¿Qué explorador y enviado Han realizó viajes hacia Asia Central?",
                [
                    "Zhang Qian",
                    "Marco Polo",
                    "Cristóbal Colón",
                    "Zheng He"
                ],
                "Zhang Qian"
            )
        ]
    },


    /* ========================================================
       HISTORIA 4
    ======================================================== */

    "dinastiaTang": {

        titulo: "Dinastía Tang",

        subtitulo:
            "Descubre una época de expansión, comercio y desarrollo cultural.",

        icono: "🏯",

        mensaje:
            "La dinastía Tang es conocida por su desarrollo cultural, artístico y comercial y por la importancia de Chang'an.",

        regiones: [
            "Chang'an",
            "Xi'an",
            "Asia Central",
            "Río Amarillo"
        ],

        dato:
            "Chang'an, capital de la dinastía Tang, fue una de las grandes ciudades del mundo medieval.",

        preguntas: [

            q(
                "¿Qué ciudad fue la capital de la dinastía Tang?",
                [
                    "Chang'an",
                    "Beijing",
                    "Nanjing",
                    "Hong Kong"
                ],
                "Chang'an"
            ),

            q(
                "¿Qué característica destacó durante la dinastía Tang?",
                [
                    "Intercambio cultural y comercial",
                    "Aislamiento absoluto",
                    "Ausencia de comercio",
                    "Desaparición de las artes"
                ],
                "Intercambio cultural y comercial"
            ),

            q(
                "¿Qué forma de arte tuvo gran importancia durante la dinastía Tang?",
                [
                    "Poesía",
                    "Cine digital",
                    "Fotografía moderna",
                    "Videojuegos"
                ],
                "Poesía"
            ),

            q(
                "¿Con qué ruta comercial estuvo conectada la dinastía Tang?",
                [
                    "Ruta de la Seda",
                    "Ruta del Pacífico",
                    "Ruta del Caribe",
                    "Ruta del Ártico"
                ],
                "Ruta de la Seda"
            ),

            q(
                "¿En qué actual ciudad se encontraba Chang'an?",
                [
                    "Xi'an",
                    "Shenzhen",
                    "Shanghái",
                    "Guangzhou"
                ],
                "Xi'an"
            )
        ]
    },


    /* ========================================================
       HISTORIA 5
    ======================================================== */

    "dinastiaMing": {

        titulo: "Dinastía Ming",

        subtitulo:
            "Conoce la dinastía Ming y algunas de sus grandes obras y exploraciones.",

        icono: "🏮",

        mensaje:
            "La dinastía Ming gobernó China entre los siglos XIV y XVII y estuvo relacionada con importantes construcciones, comercio y expediciones marítimas.",

        regiones: [
            "Beijing",
            "Nanjing",
            "Zhejiang",
            "Mar de China"
        ],

        dato:
            "Durante la dinastía Ming se construyeron y ampliaron importantes partes de la Gran Muralla.",

        preguntas: [

            q(
                "¿Qué famosa construcción se encuentra en Beijing y fue utilizada como palacio imperial durante las dinastías Ming y Qing?",
                [
                    "Ciudad Prohibida",
                    "Coliseo",
                    "Partenón",
                    "Taj Mahal"
                ],
                "Ciudad Prohibida"
            ),

            q(
                "¿Qué famoso navegante realizó grandes expediciones durante la dinastía Ming?",
                [
                    "Zheng He",
                    "Marco Polo",
                    "Zhang Qian",
                    "Qin Shi Huang"
                ],
                "Zheng He"
            ),

            q(
                "¿Qué dinastía construyó y amplió importantes secciones de la Gran Muralla?",
                [
                    "Ming",
                    "Han",
                    "Qin solamente",
                    "Xia"
                ],
                "Ming"
            ),

            q(
                "¿Cuál fue una de las capitales de la dinastía Ming?",
                [
                    "Beijing",
                    "Roma",
                    "Tokio",
                    "Delhi"
                ],
                "Beijing"
            ),

            q(
                "¿Qué tipo de porcelana se hizo especialmente famosa durante la dinastía Ming?",
                [
                    "Porcelana china",
                    "Porcelana romana",
                    "Porcelana egipcia",
                    "Porcelana inca"
                ],
                "Porcelana china"
            )
        ]
    },


    /* ========================================================
       HISTORIA 6
    ======================================================== */

    "dinastiaQing": {

        titulo: "Dinastía Qing",

        subtitulo:
            "Conoce la última dinastía imperial de China.",

        icono: "👑",

        mensaje:
            "La dinastía Qing fue la última dinastía imperial de China y gobernó hasta comienzos del siglo XX.",

        regiones: [
            "Beijing",
            "Manchuria",
            "Shenyang",
            "China oriental"
        ],

        dato:
            "La dinastía Qing terminó en 1912, después de la Revolución de 1911.",

        preguntas: [

            q(
                "¿Cuál fue la última dinastía imperial de China?",
                [
                    "Qing",
                    "Han",
                    "Tang",
                    "Ming"
                ],
                "Qing"
            ),

            q(
                "¿De qué región procedían los gobernantes de la dinastía Qing?",
                [
                    "Manchuria",
                    "Japón",
                    "India",
                    "Corea"
                ],
                "Manchuria"
            ),

            q(
                "¿En qué año terminó la dinastía Qing?",
                [
                    "1912",
                    "1949",
                    "1899",
                    "1800"
                ],
                "1912"
            ),

            q(
                "¿Qué emperatriz tuvo gran influencia política durante los últimos años de la dinastía Qing?",
                [
                    "Cixi",
                    "Wu Zetian",
                    "Yang Guifei",
                    "Mulan"
                ],
                "Cixi"
            ),

            q(
                "¿Qué dinastía sucedió a la Ming?",
                [
                    "Qing",
                    "Han",
                    "Tang",
                    "Qin"
                ],
                "Qing"
            )
        ]
    },


    /* ========================================================
       HISTORIA 7
    ======================================================== */

    "republicaChina": {

        titulo: "China moderna",

        subtitulo:
            "Conoce algunos acontecimientos que marcaron la transformación política de China durante los siglos XX y XXI.",

        icono: "🌏",

        mensaje:
            "China experimentó importantes transformaciones políticas durante el siglo XX, incluyendo el fin del sistema imperial y la fundación de la República Popular China en 1949.",

        regiones: [
            "Beijing",
            "Nanjing",
            "Shanghái",
            "Taiwán"
        ],

        dato:
            "La República Popular China fue proclamada el 1 de octubre de 1949.",

        preguntas: [

            q(
                "¿Qué revolución puso fin al sistema imperial chino?",
                [
                    "Revolución de 1911",
                    "Revolución Francesa",
                    "Revolución Industrial",
                    "Revolución Rusa"
                ],
                "Revolución de 1911"
            ),

            q(
                "¿Quién fue una figura importante de la Revolución de 1911?",
                [
                    "Sun Yat-sen",
                    "Qin Shi Huang",
                    "Confucio",
                    "Zheng He"
                ],
                "Sun Yat-sen"
            ),

            q(
                "¿En qué año fue proclamada la República Popular China?",
                [
                    "1949",
                    "1911",
                    "1937",
                    "1976"
                ],
                "1949"
            ),

            q(
                "¿Qué ciudad es la capital de China actualmente?",
                [
                    "Beijing",
                    "Shanghái",
                    "Xi'an",
                    "Nanjing"
                ],
                "Beijing"
            ),

            q(
                "¿Qué fecha corresponde a la fundación de la República Popular China?",
                [
                    "1 de octubre de 1949",
                    "1 de enero de 1911",
                    "4 de mayo de 1919",
                    "10 de octubre de 1945"
                ],
                "1 de octubre de 1949"
            )
        ]
    },


    /* ========================================================
       CULTURA 8
    ======================================================== */

    "gastronomia": {

        titulo: "Gastronomía",

        subtitulo:
            "Descubre algunos de los sabores y platos tradicionales de China.",

        icono: "🥢",

        mensaje:
            "La gastronomía china es muy diversa y cambia según las regiones, ingredientes y tradiciones culinarias.",

        regiones: [
            "Sichuan",
            "Guangdong",
            "Beijing",
            "Shanghai"
        ],

        dato:
            "El té ocupa un lugar importante en la cultura y gastronomía china.",

        preguntas: [

            q(
                "¿Qué utensilios se utilizan tradicionalmente para comer muchos platos chinos?",
                [
                    "Palillos",
                    "Tenedores de dos manos",
                    "Cuchillos de madera gigantes",
                    "Cucharas de piedra"
                ],
                "Palillos"
            ),

            q(
                "¿Qué plato es conocido internacionalmente como una especialidad de Beijing?",
                [
                    "Pato laqueado de Beijing",
                    "Paella",
                    "Pizza",
                    "Ceviche"
                ],
                "Pato laqueado de Beijing"
            ),

            q(
                "¿Qué alimento es fundamental en muchas regiones de China?",
                [
                    "Arroz",
                    "Maíz solamente",
                    "Trigo sarraceno solamente",
                    "Papa únicamente"
                ],
                "Arroz"
            ),

            q(
                "¿Qué tipo de comida es famosa por sus sabores picantes en Sichuan?",
                [
                    "Cocina de Sichuan",
                    "Cocina nórdica",
                    "Cocina italiana",
                    "Cocina mexicana"
                ],
                "Cocina de Sichuan"
            ),

            q(
                "¿Qué bebida tiene una larga tradición en China?",
                [
                    "Té",
                    "Café colombiano",
                    "Mate",
                    "Chocolate caliente"
                ],
                "Té"
            )
        ]
    },


    /* ========================================================
       CULTURA 9
    ======================================================== */

    "musica": {

        titulo: "Música y artes escénicas",

        subtitulo:
            "Conoce instrumentos, géneros y expresiones musicales tradicionales de China.",

        icono: "🎵",

        mensaje:
            "La música tradicional china incluye instrumentos como el guqin, el erhu y diferentes tipos de percusión.",

        regiones: [
            "Beijing",
            "Jiangsu",
            "Sichuan",
            "Guangdong"
        ],

        dato:
            "El guqin es un instrumento tradicional de cuerda relacionado con la cultura de los estudiosos chinos.",

        preguntas: [

            q(
                "¿Cuál de estos es un instrumento tradicional chino de cuerda?",
                [
                    "Guqin",
                    "Guitarra eléctrica",
                    "Acordeón",
                    "Violín barroco"
                ],
                "Guqin"
            ),

            q(
                "¿Qué instrumento tradicional chino tiene dos cuerdas y se toca con un arco?",
                [
                    "Erhu",
                    "Guqin",
                    "Pipa",
                    "Dizi"
                ],
                "Erhu"
            ),

            q(
                "¿Qué instrumento chino se parece a un laúd y tiene cuatro cuerdas?",
                [
                    "Pipa",
                    "Erhu",
                    "Guqin",
                    "Dizi"
                ],
                "Pipa"
            ),

            q(
                "¿Qué forma de teatro combina música, canto, actuación y acrobacia?",
                [
                    "Ópera de Pekín",
                    "Teatro griego",
                    "Ópera italiana",
                    "Kabuki japonés"
                ],
                "Ópera de Pekín"
            ),

            q(
                "¿Qué elemento es importante en muchas presentaciones tradicionales chinas?",
                [
                    "Percusión",
                    "Guitarras eléctricas solamente",
                    "Baterías electrónicas únicamente",
                    "Pianos exclusivamente"
                ],
                "Percusión"
            )
        ]
    },


    /* ========================================================
       CULTURA 10
    ======================================================== */

    "tradiciones": {

        titulo: "Tradiciones",

        subtitulo:
            "Conoce algunas costumbres y tradiciones culturales de China.",

        icono: "🏮",

        mensaje:
            "Las tradiciones chinas incluyen prácticas familiares, ceremonias, artes, gastronomía y festividades con una larga historia.",

        regiones: [
            "Beijing",
            "Sichuan",
            "Guangdong",
            "Yunnan"
        ],

        dato:
            "La caligrafía china es una importante expresión artística y cultural.",

        preguntas: [

            q(
                "¿Qué filosofía tuvo una gran influencia histórica en la sociedad china?",
                [
                    "Confucianismo",
                    "Feudalismo europeo",
                    "Humanismo renacentista",
                    "Romanticismo"
                ],
                "Confucianismo"
            ),

            q(
                "¿Qué práctica artística tradicional utiliza pincel y tinta?",
                [
                    "Caligrafía china",
                    "Fotografía",
                    "Cine",
                    "Escultura digital"
                ],
                "Caligrafía china"
            ),

            q(
                "¿Qué animal es uno de los símbolos más conocidos de la cultura china?",
                [
                    "Dragón",
                    "Pingüino",
                    "Canguro",
                    "Bisonte"
                ],
                "Dragón"
            ),

            q(
                "¿Qué práctica tradicional china se relaciona con movimientos corporales y concentración?",
                [
                    "Tai chi",
                    "Flamenco",
                    "Ballet ruso",
                    "Haka"
                ],
                "Tai chi"
            ),

            q(
                "Las tradiciones chinas se caracterizan principalmente por:",
                [
                    "Una gran diversidad histórica y cultural",
                    "Una sola costumbre",
                    "La ausencia de celebraciones",
                    "Una única expresión artística"
                ],
                "Una gran diversidad histórica y cultural"
            )
        ]
    },


    /* ========================================================
       CULTURA 11
    ======================================================== */

    "fiestas": {

        titulo: "Fiestas",

        subtitulo:
            "Descubre algunas de las celebraciones tradicionales más importantes de China.",

        icono: "🎉",

        mensaje:
            "China cuenta con numerosas festividades tradicionales relacionadas con el calendario lunar, la familia y diferentes costumbres culturales.",

        regiones: [
            "Todo China",
            "Beijing",
            "Shanghai",
            "Guangzhou"
        ],

        dato:
            "El Festival de Primavera corresponde a la celebración tradicional del Año Nuevo chino.",

        preguntas: [

            q(
                "¿Qué festival corresponde al Año Nuevo tradicional chino?",
                [
                    "Festival de Primavera",
                    "Festival de Otoño",
                    "Festival del Sol",
                    "Festival del Mar"
                ],
                "Festival de Primavera"
            ),

            q(
                "¿Qué animal forma parte del ciclo zodiacal chino?",
                [
                    "Dragón",
                    "Elefante",
                    "Tigre de Bengala solamente",
                    "Pingüino"
                ],
                "Dragón"
            ),

            q(
                "¿Qué festival se celebra tradicionalmente en el decimoquinto día del primer mes lunar?",
                [
                    "Festival de los Faroles",
                    "Festival de la Primavera",
                    "Festival del Barco del Dragón",
                    "Festival de Medio Otoño"
                ],
                "Festival de los Faroles"
            ),

            q(
                "¿Qué festival está relacionado con las carreras de barcos de dragón?",
                [
                    "Festival del Barco del Dragón",
                    "Festival de Primavera",
                    "Festival de los Faroles",
                    "Festival de Medio Otoño"
                ],
                "Festival del Barco del Dragón"
            ),

            q(
                "¿Qué festival se relaciona tradicionalmente con la contemplación de la luna?",
                [
                    "Festival de Medio Otoño",
                    "Festival de Primavera",
                    "Festival de los Faroles",
                    "Festival del Barco del Dragón"
                ],
                "Festival de Medio Otoño"
            )
        ]
    },


    /* ========================================================
       CULTURA 12
    ======================================================== */

    "vestimenta": {

        titulo: "Vestimenta",

        subtitulo:
            "Conoce prendas tradicionales que forman parte de la historia cultural china.",

        icono: "👘",

        mensaje:
            "La vestimenta tradicional china ha cambiado a lo largo de las diferentes dinastías y regiones.",

        regiones: [
            "Beijing",
            "Shanghai",
            "Guangdong",
            "Sichuan"
        ],

        dato:
            "El hanfu es un término utilizado para referirse a formas tradicionales de vestimenta asociadas históricamente con los chinos Han.",

        preguntas: [

            q(
                "¿Qué nombre recibe de forma general una tradición de vestimenta histórica asociada a los chinos Han?",
                [
                    "Hanfu",
                    "Kimono",
                    "Sari",
                    "Poncho"
                ],
                "Hanfu"
            ),

            q(
                "¿Qué prenda moderna tradicional china es conocida por su cuello alto y diseño ajustado?",
                [
                    "Qipao",
                    "Kimono",
                    "Hanbok",
                    "Sari"
                ],
                "Qipao"
            ),

            q(
                "¿Qué elemento aparece con frecuencia en diseños tradicionales chinos?",
                [
                    "Dragones",
                    "Copos de nieve solamente",
                    "Pirámides",
                    "Castillos medievales europeos"
                ],
                "Dragones"
            ),

            q(
                "¿Qué color ha tenido un importante significado tradicional en China?",
                [
                    "Rojo",
                    "Gris exclusivamente",
                    "Negro únicamente",
                    "Verde solamente"
                ],
                "Rojo"
            ),

            q(
                "La vestimenta tradicional china puede representar:",
                [
                    "Identidad cultural e historia",
                    "Solo riqueza económica",
                    "Únicamente deportes",
                    "Solo protección contra la lluvia"
                ],
                "Identidad cultural e historia"
            )
        ]
    },


    /* ========================================================
       CULTURA 13
    ======================================================== */

    "arte": {

        titulo: "Arte y literatura",

        subtitulo:
            "Explora algunas de las principales expresiones artísticas y literarias de China.",

        icono: "🎨",

        mensaje:
            "El arte chino incluye pintura, caligrafía, cerámica, escultura y numerosas expresiones literarias.",

        regiones: [
            "Beijing",
            "Xi'an",
            "Jingdezhen",
            "Dunhuang"
        ],

        dato:
            "La caligrafía china es reconocida por UNESCO como patrimonio cultural inmaterial.",

        preguntas: [

            q(
                "¿Qué arte utiliza caracteres escritos como expresión estética?",
                [
                    "Caligrafía china",
                    "Fotografía",
                    "Cine",
                    "Danza moderna"
                ],
                "Caligrafía china"
            ),

            q(
                "¿Qué material hizo famosa a China en diferentes periodos históricos?",
                [
                    "Porcelana",
                    "Plástico",
                    "Aluminio",
                    "Cemento"
                ],
                "Porcelana"
            ),

            q(
                "¿Qué ciudad es famosa históricamente por su producción de porcelana?",
                [
                    "Jingdezhen",
                    "Madrid",
                    "Roma",
                    "Londres"
                ],
                "Jingdezhen"
            ),

            q(
                "¿Qué escritor chino escribió la novela clásica 'Romance de los Tres Reinos'?",
                [
                    "Luo Guanzhong",
                    "Confucio",
                    "Lu Xun",
                    "Mo Yan"
                ],
                "Luo Guanzhong"
            ),

            q(
                "¿Cuál de estas es una de las grandes novelas clásicas de China?",
                [
                    "Sueño en el Pabellón Rojo",
                    "Don Quijote",
                    "La Odisea",
                    "La Divina Comedia"
                ],
                "Sueño en el Pabellón Rojo"
            )
        ]
    },


    /* ========================================================
       CULTURA 14
    ======================================================== */

    "monumentos": {

        titulo: "Monumentos y lugares culturales",

        subtitulo:
            "Explora algunos de los lugares históricos y culturales más representativos de China.",

        icono: "🏯",

        mensaje:
            "China posee numerosos lugares históricos, arquitectónicos y naturales reconocidos por su importancia cultural.",

        regiones: [
            "Beijing",
            "Xi'an",
            "Dunhuang",
            "Shenyang"
        ],

        dato:
            "La Gran Muralla, la Ciudad Prohibida y el mausoleo del primer emperador Qin forman parte del patrimonio mundial reconocido por UNESCO. :contentReference[oaicite:1]{index=1}",

        preguntas: [

            q(
                "¿Cuál es uno de los monumentos más famosos de China?",
                [
                    "Gran Muralla China",
                    "Coliseo Romano",
                    "Torre Eiffel",
                    "Machu Picchu"
                ],
                "Gran Muralla China"
            ),

            q(
                "¿Dónde se encuentra la Ciudad Prohibida?",
                [
                    "Beijing",
                    "Shanghai",
                    "Xi'an",
                    "Guangzhou"
                ],
                "Beijing"
            ),

            q(
                "¿Dónde se encuentra el famoso Ejército de Terracota?",
                [
                    "Xi'an",
                    "Beijing",
                    "Hong Kong",
                    "Shenzhen"
                ],
                "Xi'an"
            ),

            q(
                "¿Qué complejo fue el palacio imperial de las dinastías Ming y Qing en Beijing?",
                [
                    "Ciudad Prohibida",
                    "Templo de Shaolin",
                    "Palacio de Potala",
                    "Templo del Cielo solamente"
                ],
                "Ciudad Prohibida"
            ),

            q(
                "¿Qué lugar está relacionado directamente con Qin Shi Huang?",
                [
                    "Mausoleo del primer emperador Qin",
                    "Ciudad Prohibida",
                    "Templo del Cielo",
                    "Palacio de Verano"
                ],
                "Mausoleo del primer emperador Qin"
            )
        ]
    }

};


/* ============================================================
   4. RETO DE RECUPERACIÓN
   5 preguntas - mínimo 3 aciertos
============================================================ */

const preguntasRecuperacionBase = [

    q(
        "¿Cuál es la capital de China?",
        [
            "Beijing",
            "Shanghai",
            "Xi'an",
            "Nanjing"
        ],
        "Beijing"
    ),

    q(
        "¿Qué dinastía fue la última dinastía imperial de China?",
        [
            "Qing",
            "Ming",
            "Han",
            "Tang"
        ],
        "Qing"
    ),

    q(
        "¿Quién fue el primer emperador de una China unificada?",
        [
            "Qin Shi Huang",
            "Confucio",
            "Sun Yat-sen",
            "Zheng He"
        ],
        "Qin Shi Huang"
    ),

    q(
        "¿Qué construcción es uno de los símbolos más conocidos de China?",
        [
            "Gran Muralla China",
            "Coliseo Romano",
            "Torre Eiffel",
            "Partenón"
        ],
        "Gran Muralla China"
    ),

    q(
        "¿Qué bebida tiene una larga tradición en China?",
        [
            "Té",
            "Mate",
            "Café",
            "Chocolate"
        ],
        "Té"
    )

];


/* ============================================================
   5. RETO FINAL
   30 PREGUNTAS
============================================================ */

const preguntasFinales = [

    q(
        "¿Qué río fue fundamental para el desarrollo de las primeras civilizaciones chinas?",
        [
            "Río Amarillo",
            "Río Nilo",
            "Río Amazonas",
            "Río Danubio"
        ],
        "Río Amarillo"
    ),

    q(
        "¿Cuál es considerada tradicionalmente la primera dinastía de China?",
        [
            "Xia",
            "Qing",
            "Ming",
            "Han"
        ],
        "Xia"
    ),

    q(
        "¿Quién fue el primer emperador de una China unificada?",
        [
            "Qin Shi Huang",
            "Sun Yat-sen",
            "Confucio",
            "Mao Zedong"
        ],
        "Qin Shi Huang"
    ),

    q(
        "¿En qué año se unificó China bajo la dinastía Qin?",
        [
            "221 a. C.",
            "1911",
            "1949",
            "476 d. C."
        ],
        "221 a. C."
    ),

    q(
        "¿Qué ejército se encuentra relacionado con el mausoleo de Qin Shi Huang?",
        [
            "Ejército de Terracota",
            "Ejército de Jade",
            "Ejército Romano",
            "Ejército Mongol"
        ],
        "Ejército de Terracota"
    ),

    q(
        "¿Qué dinastía sucedió a la Qin?",
        [
            "Han",
            "Ming",
            "Qing",
            "Tang"
        ],
        "Han"
    ),

    q(
        "¿Qué ruta comercial tuvo gran importancia durante la dinastía Han?",
        [
            "Ruta de la Seda",
            "Ruta del Ámbar",
            "Ruta del Atlántico",
            "Ruta del Caribe"
        ],
        "Ruta de la Seda"
    ),

    q(
        "¿Qué producto dio nombre a la famosa Ruta de la Seda?",
        [
            "Seda",
            "Arroz",
            "Té",
            "Porcelana"
        ],
        "Seda"
    ),

    q(
        "¿Qué ciudad fue capital de la dinastía Tang?",
        [
            "Chang'an",
            "Beijing",
            "Shanghai",
            "Nanjing"
        ],
        "Chang'an"
    ),

    q(
        "¿Qué dinastía estuvo relacionada con importantes intercambios culturales y comerciales?",
        [
            "Tang",
            "Qing",
            "Xia",
            "Qin solamente"
        ],
        "Tang"
    ),

    q(
        "¿Qué famoso navegante realizó expediciones durante la dinastía Ming?",
        [
            "Zheng He",
            "Zhang Qian",
            "Marco Polo",
            "Confucio"
        ],
        "Zheng He"
    ),

    q(
        "¿Qué dinastía construyó y amplió importantes secciones de la Gran Muralla?",
        [
            "Ming",
            "Han",
            "Tang",
            "Xia"
        ],
        "Ming"
    ),

    q(
        "¿Qué dinastía fue la última dinastía imperial de China?",
        [
            "Qing",
            "Ming",
            "Han",
            "Tang"
        ],
        "Qing"
    ),

    q(
        "¿En qué año terminó la dinastía Qing?",
        [
            "1912",
            "1949",
            "1800",
            "221 a. C."
        ],
        "1912"
    ),

    q(
        "¿Quién fue una figura importante de la Revolución de 1911?",
        [
            "Sun Yat-sen",
            "Qin Shi Huang",
            "Zheng He",
            "Confucio"
        ],
        "Sun Yat-sen"
    ),

    q(
        "¿En qué año fue proclamada la República Popular China?",
        [
            "1949",
            "1911",
            "1937",
            "1976"
        ],
        "1949"
    ),

    q(
        "¿Cuál es la capital de China?",
        [
            "Beijing",
            "Shanghai",
            "Xi'an",
            "Guangzhou"
        ],
        "Beijing"
    ),

    q(
        "¿Qué alimento es fundamental en muchas regiones de China?",
        [
            "Arroz",
            "Cacao",
            "Papa exclusivamente",
            "Maíz solamente"
        ],
        "Arroz"
    ),

    q(
        "¿Qué bebida tiene una larga tradición en China?",
        [
            "Té",
            "Mate",
            "Café",
            "Chocolate"
        ],
        "Té"
    ),

    q(
        "¿Qué instrumento chino tiene dos cuerdas y se toca con un arco?",
        [
            "Erhu",
            "Guqin",
            "Pipa",
            "Dizi"
        ],
        "Erhu"
    ),

    q(
        "¿Qué instrumento tradicional chino se parece a un laúd?",
        [
            "Pipa",
            "Erhu",
            "Guqin",
            "Dizi"
        ],
        "Pipa"
    ),

    q(
        "¿Qué filosofía tuvo gran influencia histórica en China?",
        [
            "Confucianismo",
            "Romanticismo",
            "Humanismo renacentista",
            "Feudalismo europeo"
        ],
        "Confucianismo"
    ),

    q(
        "¿Qué festival corresponde al Año Nuevo tradicional chino?",
        [
            "Festival de Primavera",
            "Festival de Medio Otoño",
            "Festival de los Faroles",
            "Festival del Barco del Dragón"
        ],
        "Festival de Primavera"
    ),

    q(
        "¿Qué festival está relacionado con las carreras de barcos de dragón?",
        [
            "Festival del Barco del Dragón",
            "Festival de Primavera",
            "Festival de los Faroles",
            "Festival de Medio Otoño"
        ],
        "Festival del Barco del Dragón"
    ),

    q(
        "¿Qué práctica artística utiliza pincel y tinta?",
        [
            "Caligrafía china",
            "Fotografía",
            "Cine",
            "Danza moderna"
        ],
        "Caligrafía china"
    ),

    q(
        "¿Qué ciudad es famosa históricamente por su producción de porcelana?",
        [
            "Jingdezhen",
            "Beijing",
            "Shanghai",
            "Xi'an"
        ],
        "Jingdezhen"
    ),

    q(
        "¿Qué construcción es uno de los símbolos más famosos de China?",
        [
            "Gran Muralla China",
            "Coliseo Romano",
            "Torre Eiffel",
            "Partenón"
        ],
        "Gran Muralla China"
    ),

    q(
        "¿Dónde se encuentra la Ciudad Prohibida?",
        [
            "Beijing",
            "Shanghai",
            "Xi'an",
            "Guangzhou"
        ],
        "Beijing"
    ),

    q(
        "¿Dónde se encuentra el Ejército de Terracota?",
        [
            "Xi'an",
            "Beijing",
            "Hong Kong",
            "Shenzhen"
        ],
        "Xi'an"
    ),

    q(
        "¿Qué lugar está relacionado directamente con Qin Shi Huang?",
        [
            "Mausoleo del primer emperador Qin",
            "Torre de Shanghai",
            "Palacio de Verano",
            "Templo del Cielo"
        ],
        "Mausoleo del primer emperador Qin"
    )

];


/* ============================================================
   6. VARIABLES DEL JUEGO
============================================================ */

let temaActual = null;
let indicePregunta = 0;

let puntos = 0;
let vidas = MAX_VIDAS;
let racha = 0;

let respuestasCorrectas = 0;
let retosCompletados = 0;

let juegoBloqueadoPorVidas = false;


/* RETO FINAL */

let retoFinalDesbloqueado = false;
let retoFinalActivo = false;

let indicePreguntaFinal = 0;
let puntosFinales = 0;
let respuestasFinales = 0;

let preguntasFinalesMezcladas = [];


/* RECUPERACIÓN */

let preguntasRecuperacion = [];
let indiceRecuperacion = 0;

let recuperacionActiva = false;
let aciertosRecuperacion = 0;

let htmlInicioRecuperacion = "";


/* ESTADO */

let estadoPreguntas = {};

let historial = {
    rondas: 0,
    puntosTotales: 0,
    correctasTotales: 0
};


/* ============================================================
   7. CREAR ESTADO INICIAL
============================================================ */

function crearEstadoInicial() {

    const estado = {};

    nombresTemas.forEach(nombre => {

        estado[nombre] = {
            respondidas: [],
            completado: false
        };

    });

    return estado;
}


/* ============================================================
   8. CARGAR PROGRESO
============================================================ */

function cargarProgreso() {

    try {

        const guardado =
            localStorage.getItem(CLAVE_GUARDADO);

        if (!guardado) {

            estadoPreguntas =
                crearEstadoInicial();

            guardarProgreso();

            return;
        }


        const datos =
            JSON.parse(guardado);


        estadoPreguntas =
            datos.estadoPreguntas ||
            crearEstadoInicial();


        nombresTemas.forEach(nombre => {

            if (!estadoPreguntas[nombre]) {

                estadoPreguntas[nombre] = {
                    respondidas: [],
                    completado: false
                };

            }

        });


        puntos =
            Number(datos.puntos) || 0;


        vidas =
            typeof datos.vidas === "number"
                ? datos.vidas
                : MAX_VIDAS;


        racha =
            Number(datos.racha) || 0;


        respuestasCorrectas =
            Number(datos.respuestasCorrectas) || 0;


        retosCompletados =
            Number(datos.retosCompletados) || 0;


        juegoBloqueadoPorVidas =
            Boolean(
                datos.juegoBloqueadoPorVidas
            );


        historial =
            datos.historial || {
                rondas: 0,
                puntosTotales: 0,
                correctasTotales: 0
            };


        if (vidas < 0) {
            vidas = 0;
        }


        if (vidas > MAX_VIDAS) {
            vidas = MAX_VIDAS;
        }


        if (vidas === 0) {
            juegoBloqueadoPorVidas = true;
        }

    }

    catch (error) {

        console.error(
            "Error al cargar el progreso:",
            error
        );


        estadoPreguntas =
            crearEstadoInicial();


        puntos = 0;
        vidas = MAX_VIDAS;
        racha = 0;

        respuestasCorrectas = 0;
        retosCompletados = 0;

        juegoBloqueadoPorVidas = false;


        historial = {
            rondas: 0,
            puntosTotales: 0,
            correctasTotales: 0
        };

    }
}


/* ============================================================
   9. GUARDAR PROGRESO
============================================================ */

function guardarProgreso() {

    try {

        localStorage.setItem(
            CLAVE_GUARDADO,
            JSON.stringify({

                estadoPreguntas,

                puntos,

                vidas,

                racha,

                respuestasCorrectas,

                retosCompletados,

                juegoBloqueadoPorVidas,

                historial

            })
        );

    }

    catch (error) {

        console.error(
            "No se pudo guardar el progreso:",
            error
        );

    }
}


/* ============================================================
   10. ACTUALIZAR INTERFAZ
============================================================ */

function actualizarInterfaz() {

    const set = (id, valor) => {

        const el = obtener(id);

        if (el) {
            el.textContent = valor;
        }

    };


    set("puntos", puntos);
    set("vidas", vidas);
    set("racha", racha);
    set(
        "respuestasCorrectas",
        respuestasCorrectas
    );
    set(
        "retosCompletados",
        retosCompletados
    );


    let categoriasCompletadas = 0;


    nombresTemas.forEach(nombre => {

        if (
            estadoPreguntas[nombre] &&
            estadoPreguntas[nombre].completado
        ) {

            categoriasCompletadas++;

        }

    });


    const porcentaje =
        Math.round(
            (
                categoriasCompletadas /
                nombresTemas.length
            ) * 100
        );


    set(
        "porcentaje",
        porcentaje + "%"
    );


    const circulo =
        obtener("circuloProgreso");


    if (circulo) {

        const circunferencia =
            2 * Math.PI * 50;


        circulo.style.strokeDasharray =
            circunferencia;


        circulo.style.strokeDashoffset =
            circunferencia *
            (1 - porcentaje / 100);

    }


    if (porcentaje === 100) {

        set(
            "mensajeProgreso",
            "¡Completaste todas las categorías! 🎉"
        );

    }

    else if (categoriasCompletadas === 0) {

        set(
            "mensajeProgreso",
            "¡Empieza a explorar China! 🚀"
        );

    }

    else {

        set(
            "mensajeProgreso",
            `Has completado ${categoriasCompletadas} de ${nombresTemas.length} categorías.`
        );

    }


    const desbloqueado =
        nombresTemas.every(nombre =>
            estadoPreguntas[nombre] &&
            estadoPreguntas[nombre].completado
        );


    retoFinalDesbloqueado =
        desbloqueado;


    const botonFinal =
        obtener("btnRetoFinal");


    if (botonFinal) {

        botonFinal.disabled =
            !desbloqueado;


        botonFinal.textContent =
            desbloqueado
                ? "🏆 Comenzar Reto Final de China"
                : "🔒 Reto Final Bloqueado";

    }


    guardarProgreso();
}


/* ============================================================
   11. OBTENER SIGUIENTE PREGUNTA
============================================================ */

function obtenerSiguientePregunta(nombreTema) {

    if (!temas[nombreTema]) {
        return null;
    }


    const estado =
        estadoPreguntas[nombreTema];


    const preguntas =
        temas[nombreTema].preguntas;


    for (
        let i = 0;
        i < preguntas.length;
        i++
    ) {

        if (
            !estado.respondidas.includes(i)
        ) {

            return i;

        }

    }


    return null;
}


/* ============================================================
   12. MENÚ
============================================================ */

function marcarMenu(slug) {

    document
        .querySelectorAll(".menu-btn")
        .forEach(btn => {

            btn.classList.toggle(
                "activo",
                btn.getAttribute("data-tema") === slug
            );

        });

}


function cambiarTema(nombreTema, boton) {

    if (!temas[nombreTema]) {

        console.error(
            "Tema no encontrado:",
            nombreTema
        );

        return;
    }


    if (juegoBloqueadoPorVidas) {

        abrirModalRecuperacion();

        return;
    }


    cargarTema(nombreTema);

    marcarMenu(nombreTema);
}


/* ============================================================
   13. CARGAR TEMA
============================================================ */

function cargarTema(nombreTema) {

    if (!temas[nombreTema]) {

        console.error(
            "No existe el tema:",
            nombreTema
        );

        return;
    }


    temaActual = nombreTema;


    const tema =
        temas[nombreTema];


    if ("speechSynthesis" in window) {

        window.speechSynthesis.cancel();

    }


    const titulo =
        obtener("tituloTema");

    const subtitulo =
        obtener("subtituloTema");

    const icono =
        obtener("iconoTema");

    const mensaje =
        obtener("mensajeBot");

    const dato =
        obtener("datoCurioso");

    const regiones =
        obtener("regiones");

    const imagen =
        obtener("imagenTema");


    if (titulo) {
        titulo.textContent =
            tema.titulo;
    }


    if (subtitulo) {
        subtitulo.textContent =
            tema.subtitulo;
    }


    if (icono) {
        icono.textContent =
            tema.icono;
    }


    if (mensaje) {
        mensaje.textContent =
            tema.mensaje;
    }


    if (dato) {
        dato.textContent =
            tema.dato;
    }


    if (regiones) {

        regiones.innerHTML = "";


        tema.regiones.forEach(nombre => {

            const span =
                document.createElement("span");


            span.textContent =
                nombre;


            regiones.appendChild(span);

        });

    }


    if (
        imagen &&
        tema.imagen
    ) {

        imagen.src =
            tema.imagen;

    }


    cargarPregunta();

    actualizarInterfaz();
}


/* ============================================================
   14. CARGAR PREGUNTA NORMAL
============================================================ */

function cargarPregunta() {

    if (!temaActual) {
        return;
    }


    if (juegoBloqueadoPorVidas) {

        abrirModalRecuperacion();

        return;
    }


    const tema =
        temas[temaActual];


    const estado =
        estadoPreguntas[temaActual];


    if (
        estado.respondidas.length >=
        tema.preguntas.length
    ) {

        finalizarTema();

        return;
    }


    const siguiente =
        obtenerSiguientePregunta(
            temaActual
        );


    if (siguiente === null) {

        finalizarTema();

        return;
    }


    indicePregunta =
        siguiente;


    const pregunta =
        tema.preguntas[indicePregunta];


    const preguntaHTML =
        obtener("preguntaReto");

    const opcionesHTML =
        obtener("opcionesReto");

    const resultadoHTML =
        obtener("resultado");

    const botonSiguiente =
        obtener("botonSiguiente");

    const numeroPregunta =
        obtener("numeroPregunta");


    if (
        !preguntaHTML ||
        !opcionesHTML
    ) {

        console.error(
            "No se encontraron preguntaReto u opcionesReto."
        );

        return;
    }


    preguntaHTML.textContent =
        pregunta.pregunta;


    opcionesHTML.innerHTML =
        "";


    if (resultadoHTML) {

        resultadoHTML.textContent =
            "";

        resultadoHTML.className =
            "resultado";

    }


    if (botonSiguiente) {

        botonSiguiente.disabled =
            true;

        botonSiguiente.textContent =
            "Siguiente →";

    }


    if (numeroPregunta) {

        numeroPregunta.textContent =
            `Pregunta ${estado.respondidas.length + 1} de ${tema.preguntas.length}`;

    }


    mezclar(pregunta.opciones)
        .forEach(opcion => {

            const boton =
                document.createElement(
                    "button"
                );


            boton.type =
                "button";


            boton.className =
                "opcion";


            boton.textContent =
                opcion;


            boton.addEventListener(
                "click",
                function () {

                    comprobarRespuesta(
                        opcion
                    );

                }
            );


            opcionesHTML.appendChild(
                boton
            );

        });
}


/* ============================================================
   15. COMPROBAR RESPUESTA NORMAL
============================================================ */

function comprobarRespuesta(
    respuesta
) {

    if (!temaActual) {
        return;
    }


    if (juegoBloqueadoPorVidas) {
        return;
    }


    const tema =
        temas[temaActual];


    const estado =
        estadoPreguntas[temaActual];


    const pregunta =
        tema.preguntas[indicePregunta];


    if (!pregunta) {
        return;
    }


    if (
        estado.respondidas.includes(
            indicePregunta
        )
    ) {

        return;
    }


    const botones =
        document.querySelectorAll(
            "#opcionesReto .opcion"
        );


    botones.forEach(boton => {

        boton.disabled = true;


        if (
            boton.textContent ===
            pregunta.correcta
        ) {

            boton.classList.add(
                "correcta"
            );

        }

    });


    const resultado =
        obtener("resultado");


    const botonSiguiente =
        obtener("botonSiguiente");


    const botonSeleccionado =
        [...botones].find(
            boton =>
                boton.textContent ===
                respuesta
        );


    if (
        respuesta ===
        pregunta.correcta
    ) {

        puntos +=
            PUNTOS_CORRECTA;


        respuestasCorrectas++;

        racha++;


        if (resultado) {

            resultado.textContent =
                "✅ ¡Respuesta correcta! +10 puntos";

            resultado.className =
                "resultado correcto";

        }

    }

    else {

        vidas--;

        racha = 0;


        if (botonSeleccionado) {

            botonSeleccionado.classList.add(
                "incorrecta"
            );

        }


        if (resultado) {

            resultado.textContent =
                `❌ Incorrecto. La respuesta correcta es: ${pregunta.correcta}`;

            resultado.className =
                "resultado incorrecto";

        }


        if (vidas <= 0) {

            vidas = 0;

            juegoBloqueadoPorVidas =
                true;

        }

    }


    estado.respondidas.push(
        indicePregunta
    );


    guardarProgreso();

    actualizarInterfaz();


    if (botonSiguiente) {

        botonSiguiente.disabled =
            false;

    }


    if (juegoBloqueadoPorVidas) {

        setTimeout(() => {

            abrirModalRecuperacion();

        }, 700);

    }
}


/* ============================================================
   16. SIGUIENTE PREGUNTA
============================================================ */

function siguientePregunta() {

    if (juegoBloqueadoPorVidas) {

        abrirModalRecuperacion();

        return;
    }


    if (!temaActual) {
        return;
    }


    const estado =
        estadoPreguntas[temaActual];


    const tema =
        temas[temaActual];


    if (estado.completado) {

        irASiguienteCategoria();

        return;
    }


    if (
        estado.respondidas.length >=
        tema.preguntas.length
    ) {

        finalizarTema();

        return;
    }


    cargarPregunta();
}


/* ============================================================
   17. SIGUIENTE CATEGORÍA
============================================================ */

function irASiguienteCategoria() {

    const indiceActual =
        nombresTemas.indexOf(
            temaActual
        );


    let destino = null;


    for (
        let i = 1;
        i <= nombresTemas.length;
        i++
    ) {

        const nombre =
            nombresTemas[
                (
                    indiceActual + i
                ) %
                nombresTemas.length
            ];


        if (
            estadoPreguntas[nombre] &&
            !estadoPreguntas[nombre].completado
        ) {

            destino =
                nombre;

            break;
        }

    }


    if (destino === null) {

        comenzarRetoFinal();

        return;
    }


    const boton =
        document.querySelector(
            `.menu-btn[data-tema="${destino}"]`
        );


    cambiarTema(
        destino,
        boton
    );


    if (boton) {

        boton.scrollIntoView({
            block: "nearest",
            behavior: "smooth"
        });

    }
}


/* ============================================================
   18. FINALIZAR CATEGORÍA
============================================================ */

function finalizarTema() {

    if (!temaActual) {
        return;
    }


    const estado =
        estadoPreguntas[temaActual];


    const cantidadPreguntas =
        temas[temaActual].preguntas.length;


    if (
        estado.respondidas.length <
        cantidadPreguntas
    ) {

        return;
    }


    if (!estado.completado) {

        estado.completado =
            true;

        retosCompletados++;

        guardarProgreso();

    }


    actualizarInterfaz();


    const preguntaHTML =
        obtener("preguntaReto");

    const opcionesHTML =
        obtener("opcionesReto");

    const resultadoHTML =
        obtener("resultado");

    const botonSiguiente =
        obtener("botonSiguiente");

    const numeroPregunta =
        obtener("numeroPregunta");


    if (preguntaHTML) {

        preguntaHTML.textContent =
            "🎉 ¡Categoría completada!";

    }


    if (opcionesHTML) {

        opcionesHTML.innerHTML = `
            <div class="tema-completado">
                Has completado todas las preguntas de esta categoría.
            </div>
        `;

    }


    if (resultadoHTML) {

        resultadoHTML.textContent =
            "¡Excelente trabajo!";

        resultadoHTML.className =
            "resultado";

    }


    if (numeroPregunta) {

        numeroPregunta.textContent =
            `Pregunta ${cantidadPreguntas} de ${cantidadPreguntas}`;

    }


    if (botonSiguiente) {

        botonSiguiente.disabled =
            false;


        botonSiguiente.textContent =
            retoFinalDesbloqueado
                ? "🏆 Ir al Reto Final"
                : "Siguiente categoría →";

    }
}


/* ============================================================
   19. AUDIO
============================================================ */

function reproducirAudio() {

    if (!("speechSynthesis" in window)) {

        alert(
            "Tu navegador no permite reproducir audio."
        );

        return;
    }


    if (
        window.speechSynthesis.speaking
    ) {

        window.speechSynthesis.cancel();

        return;
    }


    const tema =
        temaActual
            ? temas[temaActual]
            : null;


    const texto =
        tema
            ? `${tema.titulo}. ${tema.mensaje} ${tema.dato}`
            : "Explora la historia y cultura de China.";


    const voz =
        new SpeechSynthesisUtterance(
            texto
        );


    voz.lang =
        "es-ES";


    voz.rate =
        0.95;


    window.speechSynthesis.speak(
        voz
    );
}


/* ============================================================
   20. ABRIR MODAL DE RECUPERACIÓN
============================================================ */

function abrirModalRecuperacion() {

    const modal =
        obtener("modalRecuperacion");


    const inicio =
        obtener("inicioRecuperacion");


    const caja =
        obtener("preguntaRecuperacionBox");


    if (!modal) {
        return;
    }


    if (
        !recuperacionActiva &&
        inicio &&
        htmlInicioRecuperacion
    ) {

        inicio.innerHTML =
            htmlInicioRecuperacion;

    }


    if (caja) {

        caja.style.display =
            "none";

    }


    if (inicio) {

        inicio.style.display =
            "block";

    }


    modal.style.display =
        "flex";


    document.body.style.overflow =
        "hidden";
}


/* ============================================================
   21. COMENZAR RECUPERACIÓN
============================================================ */

function comenzarRetoRecuperacion() {

    const inicio =
        obtener("inicioRecuperacion");


    const caja =
        obtener("preguntaRecuperacionBox");


    const modal =
        obtener("modalRecuperacion");


    preguntasRecuperacion =
        mezclar(
            preguntasRecuperacionBase
        );


    indiceRecuperacion =
        0;


    aciertosRecuperacion =
        0;


    recuperacionActiva =
        true;


    if (inicio) {

        inicio.style.display =
            "none";

    }


    if (caja) {

        caja.style.display =
            "block";

    }


    if (modal) {

        modal.style.display =
            "flex";

    }


    cargarPreguntaRecuperacion();
}


/* ============================================================
   22. CARGAR PREGUNTA DE RECUPERACIÓN
============================================================ */

function cargarPreguntaRecuperacion() {

    if (!recuperacionActiva) {
        return;
    }


    const pregunta =
        preguntasRecuperacion[
            indiceRecuperacion
        ];


    if (!pregunta) {

        terminarRecuperacion();

        return;
    }


    const preguntaHTML =
        obtener("preguntaRecuperacion");


    const opcionesHTML =
        obtener("opcionesRecuperacion");


    const resultadoHTML =
        obtener("resultadoRecuperacion");


    const botonContinuar =
        obtener(
            "btnContinuarRecuperacion"
        );


    if (preguntaHTML) {

        preguntaHTML.textContent =
            `Pregunta ${indiceRecuperacion + 1} de ${preguntasRecuperacion.length}: ${pregunta.pregunta}`;

    }


    if (opcionesHTML) {

        opcionesHTML.innerHTML =
            "";

    }


    if (resultadoHTML) {

        resultadoHTML.textContent =
            "";

        resultadoHTML.className =
            "resultado-recuperacion";

    }


    if (botonContinuar) {

        botonContinuar.disabled =
            true;


        botonContinuar.textContent =
            indiceRecuperacion ===
            preguntasRecuperacion.length - 1
                ? "Terminar"
                : "Continuar →";

    }


    mezclar(pregunta.opciones)
        .forEach(opcion => {

            const boton =
                document.createElement(
                    "button"
                );


            boton.type =
                "button";


            boton.className =
                "opcion-recuperacion";


            boton.textContent =
                opcion;


            boton.addEventListener(
                "click",
                () => {

                    comprobarRespuestaRecuperacion(
                        opcion
                    );

                }
            );


            if (opcionesHTML) {

                opcionesHTML.appendChild(
                    boton
                );

            }

        });
}


/* ============================================================
   23. COMPROBAR RECUPERACIÓN
============================================================ */

function comprobarRespuestaRecuperacion(
    respuesta
) {

    if (!recuperacionActiva) {
        return;
    }


    const pregunta =
        preguntasRecuperacion[
            indiceRecuperacion
        ];


    if (!pregunta) {
        return;
    }


    const botones =
        document.querySelectorAll(
            "#opcionesRecuperacion button"
        );


    botones.forEach(boton => {

        boton.disabled =
            true;


        if (
            boton.textContent ===
            pregunta.correcta
        ) {

            boton.classList.add(
                "correcta"
            );

        }

        else if (
            boton.textContent ===
            respuesta
        ) {

            boton.classList.add(
                "incorrecta"
            );

        }

    });


    const resultado =
        obtener(
            "resultadoRecuperacion"
        );


    const botonContinuar =
        obtener(
            "btnContinuarRecuperacion"
        );


    if (
        respuesta ===
        pregunta.correcta
    ) {

        aciertosRecuperacion++;


        if (resultado) {

            resultado.textContent =
                "✅ ¡Correcto!";

            resultado.className =
                "resultado-recuperacion correcto";

        }

    }

    else {

        if (resultado) {

            resultado.textContent =
                `❌ Incorrecto. La respuesta correcta es: ${pregunta.correcta}`;

            resultado.className =
                "resultado-recuperacion incorrecto";

        }

    }


    if (botonContinuar) {

        botonContinuar.disabled =
            false;

    }
}


/* ============================================================
   24. CONTINUAR RECUPERACIÓN
============================================================ */

function continuarDespuesRecuperacion() {

    if (!recuperacionActiva) {
        return;
    }


    const resultado =
        obtener(
            "resultadoRecuperacion"
        );


    if (
        !resultado ||
        !resultado.textContent
    ) {

        return;
    }


    indiceRecuperacion++;


    if (
        indiceRecuperacion >=
        preguntasRecuperacion.length
    ) {

        terminarRecuperacion();

        return;
    }


    cargarPreguntaRecuperacion();
}


/* ============================================================
   25. TERMINAR RECUPERACIÓN
============================================================ */

function terminarRecuperacion() {

    recuperacionActiva =
        false;


    const modal =
        obtener("modalRecuperacion");


    const caja =
        obtener("preguntaRecuperacionBox");


    const inicio =
        obtener("inicioRecuperacion");


    if (caja) {

        caja.style.display =
            "none";

    }


    const aprobado =
        aciertosRecuperacion >=
        ACIERTOS_MINIMOS_RECUPERACION;


    if (aprobado) {

        vidas =
            MAX_VIDAS;


        juegoBloqueadoPorVidas =
            false;


        guardarProgreso();

        actualizarInterfaz();


        if (inicio) {

            inicio.style.display =
                "block";


            inicio.innerHTML = `

                <div class="icono-modal">
                    ❤️
                </div>

                <h2>
                    ¡Vidas recuperadas!
                </h2>

                <p>
                    Acertaste ${aciertosRecuperacion} de ${preguntasRecuperacionBase.length}.
                    ¡Sigue aprendiendo sobre China!
                </p>

                <button
                    type="button"
                    class="boton-recuperar"
                    onclick="cerrarModalRecuperacion()">

                    Continuar

                </button>

            `;

        }

    }

    else {

        juegoBloqueadoPorVidas =
            true;


        guardarProgreso();


        if (inicio) {

            inicio.style.display =
                "block";


            inicio.innerHTML = `

                <div class="icono-modal">
                    💔
                </div>

                <h2>
                    Aún no recuperas tus vidas
                </h2>

                <p>
                    Acertaste ${aciertosRecuperacion}
                    de ${preguntasRecuperacionBase.length}.
                    Necesitas al menos
                    ${ACIERTOS_MINIMOS_RECUPERACION}
                    para continuar.
                </p>

                <button
                    type="button"
                    class="boton-recuperar"
                    onclick="comenzarRetoRecuperacion()">

                    🎯 Intentar de nuevo

                </button>

            `;

        }

    }


    if (modal) {

        modal.style.display =
            "flex";

    }
}


/* ============================================================
   26. CERRAR MODAL DE RECUPERACIÓN
============================================================ */

function cerrarModalRecuperacion() {

    if (juegoBloqueadoPorVidas) {
        return;
    }


    const modal =
        obtener("modalRecuperacion");


    if (modal) {

        modal.style.display =
            "none";

    }


    document.body.style.overflow =
        "";


    if (temaActual) {

        cargarPregunta();

    }
}


/* ============================================================
   27. COMENZAR RETO FINAL
============================================================ */

function comenzarRetoFinal() {

    const todasCompletadas =
        nombresTemas.every(nombre =>

            estadoPreguntas[nombre] &&
            estadoPreguntas[nombre].completado

        );


    if (!todasCompletadas) {

        alert(
            "Debes completar las 14 categorías antes de comenzar el reto final."
        );

        return;
    }


    if (juegoBloqueadoPorVidas) {

        abrirModalRecuperacion();

        return;
    }


    retoFinalDesbloqueado =
        true;


    retoFinalActivo =
        true;


    indicePreguntaFinal =
        0;


    puntosFinales =
        0;


    respuestasFinales =
        0;


    preguntasFinalesMezcladas =
        mezclar(
            preguntasFinales
        );


    const modal =
        obtener("modalRetoFinal");


    if (modal) {

        modal.style.display =
            "flex";

    }


    document.body.style.overflow =
        "hidden";


    actualizarMarcadoresFinal();

    cargarPreguntaFinal();
}


/* ============================================================
   28. CARGAR PREGUNTA FINAL
============================================================ */

function cargarPreguntaFinal() {

    if (!retoFinalActivo) {
        return;
    }


    const pregunta =
        preguntasFinalesMezcladas[
            indicePreguntaFinal
        ];


    if (!pregunta) {

        finalizarRetoFinal();

        return;
    }


    const preguntaHTML =
        obtener("preguntaFinal");


    const opcionesHTML =
        obtener("opcionesFinal");


    const resultadoHTML =
        obtener("resultadoFinal");


    const numeroPregunta =
        obtener("numeroPreguntaFinal");


    const botonSiguiente =
        obtener("btnSiguienteFinal");


    if (preguntaHTML) {

        preguntaHTML.textContent =
            pregunta.pregunta;

    }


    if (opcionesHTML) {

        opcionesHTML.innerHTML =
            "";

    }


    if (resultadoHTML) {

        resultadoHTML.textContent =
            "";

        resultadoHTML.className =
            "resultado-final";

    }


    if (numeroPregunta) {

        numeroPregunta.textContent =
            indicePreguntaFinal + 1;

    }


    if (botonSiguiente) {

        botonSiguiente.disabled =
            true;


        botonSiguiente.textContent =
            indicePreguntaFinal ===
            preguntasFinalesMezcladas.length - 1
                ? "Ver resultado"
                : "Siguiente →";

    }


    mezclar(pregunta.opciones)
        .forEach(opcion => {

            const boton =
                document.createElement(
                    "button"
                );


            boton.type =
                "button";


            boton.className =
                "opcion-final";


            boton.textContent =
                opcion;


            boton.addEventListener(
                "click",
                () => {

                    comprobarRespuestaFinal(
                        opcion
                    );

                }
            );


            if (opcionesHTML) {

                opcionesHTML.appendChild(
                    boton
                );

            }

        });
}


/* ============================================================
   29. COMPROBAR RESPUESTA FINAL
============================================================ */

function comprobarRespuestaFinal(
    respuesta
) {

    if (!retoFinalActivo) {
        return;
    }


    const pregunta =
        preguntasFinalesMezcladas[
            indicePreguntaFinal
        ];


    if (!pregunta) {
        return;
    }


    const botones =
        document.querySelectorAll(
            "#opcionesFinal button"
        );


    botones.forEach(boton => {

        boton.disabled =
            true;


        if (
            boton.textContent ===
            pregunta.correcta
        ) {

            boton.classList.add(
                "correcta"
            );

        }

        else if (
            boton.textContent ===
            respuesta
        ) {

            boton.classList.add(
                "incorrecta"
            );

        }

    });


    const resultado =
        obtener("resultadoFinal");


    const botonSiguiente =
        obtener("btnSiguienteFinal");


    if (
        respuesta ===
        pregunta.correcta
    ) {

        puntosFinales +=
            PUNTOS_CORRECTA;


        respuestasFinales++;


        if (resultado) {

            resultado.textContent =
                "✅ ¡Correcto! +10 puntos";

            resultado.className =
                "resultado-final correcto";

        }

    }

    else {

        if (resultado) {

            resultado.textContent =
                `❌ Incorrecto. La respuesta correcta es: ${pregunta.correcta}`;

            resultado.className =
                "resultado-final incorrecto";

        }

    }


    actualizarMarcadoresFinal();


    if (botonSiguiente) {

        botonSiguiente.disabled =
            false;

    }
}


/* ============================================================
   30. MARCADORES DEL RETO FINAL
============================================================ */

function actualizarMarcadoresFinal() {

    const p =
        obtener("puntosFinales");


    const c =
        obtener("respuestasFinales");


    if (p) {

        p.textContent =
            puntosFinales;

    }


    if (c) {

        c.textContent =
            respuestasFinales;

    }
}


/* ============================================================
   31. SIGUIENTE PREGUNTA FINAL
============================================================ */

function siguientePreguntaFinal() {

    if (!retoFinalActivo) {
        return;
    }


    indicePreguntaFinal++;


    if (
        indicePreguntaFinal >=
        preguntasFinalesMezcladas.length
    ) {

        finalizarRetoFinal();

        return;
    }


    cargarPreguntaFinal();
}


/* ============================================================
   32. FINALIZAR RETO FINAL
============================================================ */

function finalizarRetoFinal() {

    retoFinalActivo =
        false;


    const modal =
        obtener("modalRetoFinal");


    const aventura =
        obtener("aventuraCompletada");


    const resultadoPuntos =
        obtener(
            "resultadoPuntosFinales"
        );


    const resultadoCorrectas =
        obtener(
            "resultadoCorrectasFinales"
        );


    if (modal) {

        modal.style.display =
            "none";

    }


    if (aventura) {

        aventura.style.display =
            "flex";

    }


    if (resultadoPuntos) {

        resultadoPuntos.textContent =
            puntosFinales;

    }


    if (resultadoCorrectas) {

        resultadoCorrectas.textContent =
            `${respuestasFinales} / ${preguntasFinales.length}`;

    }


    historial.rondas++;


    historial.puntosTotales +=
        puntos + puntosFinales;


    historial.correctasTotales +=
        respuestasCorrectas +
        respuestasFinales;


    guardarProgreso();


    iniciarNuevaRonda();
}


/* ============================================================
   33. INICIAR NUEVA RONDA
============================================================ */

function iniciarNuevaRonda() {

    estadoPreguntas =
        crearEstadoInicial();


    puntos = 0;

    vidas = MAX_VIDAS;

    racha = 0;

    respuestasCorrectas = 0;

    retosCompletados = 0;


    juegoBloqueadoPorVidas =
        false;


    retoFinalDesbloqueado =
        false;


    retoFinalActivo =
        false;


    indicePreguntaFinal =
        0;


    puntosFinales =
        0;


    respuestasFinales =
        0;


    guardarProgreso();

    actualizarInterfaz();


    cargarTema(
        nombresTemas[0]
    );


    marcarMenu(
        nombresTemas[0]
    );
}


/* ============================================================
   34. CERRAR AVENTURA
============================================================ */

function cerrarAventura() {

    const aventura =
        obtener(
            "aventuraCompletada"
        );


    if (aventura) {

        aventura.style.display =
            "none";

    }


    document.body.style.overflow =
        "";
}


/* ============================================================
   35. CERRAR RETO FINAL
============================================================ */

function cerrarRetoFinal() {

    const modal =
        obtener("modalRetoFinal");


    if (modal) {

        modal.style.display =
            "none";

    }


    retoFinalActivo =
        false;


    document.body.style.overflow =
        "";
}


/* ============================================================
   36. REINICIAR TODO EL PROGRESO
============================================================ */

function reiniciarProgreso() {

    const confirmar =
        confirm(
            "¿Seguro que quieres borrar todo tu progreso en China?"
        );


    if (!confirmar) {
        return;
    }


    localStorage.removeItem(
        CLAVE_GUARDADO
    );


    estadoPreguntas =
        crearEstadoInicial();


    temaActual =
        null;


    indicePregunta =
        0;


    puntos = 0;

    vidas = MAX_VIDAS;

    racha = 0;

    respuestasCorrectas = 0;

    retosCompletados = 0;


    juegoBloqueadoPorVidas =
        false;


    retoFinalDesbloqueado =
        false;


    retoFinalActivo =
        false;


    indicePreguntaFinal =
        0;


    puntosFinales =
        0;


    respuestasFinales =
        0;


    preguntasRecuperacion =
        [];


    indiceRecuperacion =
        0;


    recuperacionActiva =
        false;


    aciertosRecuperacion =
        0;


    historial = {

        rondas: 0,

        puntosTotales: 0,

        correctasTotales: 0

    };


    document.body.style.overflow =
        "";


    guardarProgreso();

    actualizarInterfaz();


    alert(
        "El progreso de China se reinició correctamente."
    );


    iniciarNuevaRonda();
}


/* ============================================================
   37. INICIALIZACIÓN
============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const inicio =
            obtener(
                "inicioRecuperacion"
            );


        if (inicio) {

            htmlInicioRecuperacion =
                inicio.innerHTML;

        }


        cargarProgreso();


        actualizarInterfaz();


        cargarTema(
            nombresTemas[0]
        );


        marcarMenu(
            nombresTemas[0]
        );


        if (
            juegoBloqueadoPorVidas
        ) {

            abrirModalRecuperacion();

        }

    }

);