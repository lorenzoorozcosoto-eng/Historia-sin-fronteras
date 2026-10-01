/* ============================================================
   HISTORIA SIN FRONTERAS - ITALIA
   JAVASCRIPT COMPLETO

   14 CATEGORÍAS x 5 PREGUNTAS = 70 PREGUNTAS

   SISTEMA:
   - 5 vidas
   - Al llegar a 0 vidas se bloquea la pantalla
   - Reto de recuperación: 5 preguntas
   - Mínimo 3 aciertos para recuperar las 5 vidas
   - 10 puntos por respuesta correcta
   - Respuestas mezcladas
   - Guardado con LocalStorage
   - Avance automático entre categorías
   - Reto final de 30 preguntas
   - Al terminar el reto final comienza una nueva ronda
============================================================ */


/* ============================================================
   1. CONFIGURACIÓN
============================================================ */

const CLAVE_GUARDADO = "historiaSinFronterasItalia_v1";

const MAX_VIDAS = 5;

const ACIERTOS_MINIMOS_RECUPERACION = 3;

const nombresTemas = [
    "gastronomia",
    "musica",
    "tradiciones",
    "fiestas",
    "vestimenta",
    "arte",
    "monumentos",
    "pueblos-originarios",
    "imperio-romano",
    "edad-media",
    "unificacion-italiana",
    "personajes-historicos",
    "conflictos-importantes",
    "italia-contemporanea"
];


/* ============================================================
   2. FUNCIÓN PARA CREAR PREGUNTAS
============================================================ */

function q(pregunta, opciones, correcta) {
    return {
        pregunta: pregunta,
        opciones: opciones,
        correcta: correcta
    };
}


/* ============================================================
   3. MEZCLAR LISTAS
============================================================ */

function mezclar(lista) {

    const copia = [...lista];

    for (let i = copia.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    return copia;
}


/* ============================================================
   4. INFORMACIÓN Y 70 PREGUNTAS
============================================================ */

const temas = {


    /* ========================================================
       CULTURA 1 - GASTRONOMÍA
    ======================================================== */

    gastronomia: {

        titulo: "Gastronomía italiana",

        subtitulo: "Sabores y comidas tradicionales de Italia",

        icono: "🍝",

        imagen:
            "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",

        dato:
            "La gastronomía italiana es conocida internacionalmente por alimentos como la pasta, la pizza y el gelato.",

        sobreTexto:
            "La gastronomía italiana posee una gran variedad de platos regionales y ha influido en la alimentación de muchos países.",

        audio:
            "La gastronomía italiana incluye alimentos muy conocidos como la pasta, la pizza, el risotto y el gelato. Cada región posee preparaciones y tradiciones propias.",

        preguntas: [

            q(
                "¿Cuál de estos alimentos es tradicional de Italia?",
                ["Pizza", "Sushi", "Tacos", "Cuscús"],
                "Pizza"
            ),

            q(
                "¿Qué alimento es uno de los más representativos de la gastronomía italiana?",
                ["Pasta", "Arepa", "Sushi", "Curry"],
                "Pasta"
            ),

            q(
                "¿Qué es el risotto?",
                ["Un plato de arroz", "Una sopa", "Un postre", "Una bebida"],
                "Un plato de arroz"
            ),

            q(
                "¿Qué postre italiano es conocido mundialmente?",
                ["Tiramisú", "Baklava", "Mochi", "Flan mexicano"],
                "Tiramisú"
            ),

            q(
                "¿Qué ingrediente es común en muchas preparaciones italianas?",
                ["Aceite de oliva", "Salsa de soja", "Curry", "Leche de coco"],
                "Aceite de oliva"
            )
        ]
    },


    /* ========================================================
       CULTURA 2 - MÚSICA
    ======================================================== */

    musica: {

        titulo: "Música italiana",

        subtitulo: "Ópera y tradiciones musicales de Italia",

        icono: "🎵",

        imagen:
            "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b",

        dato:
            "Italia tuvo un papel fundamental en el desarrollo de la ópera.",

        sobreTexto:
            "La música italiana incluye una importante tradición de ópera, música clásica y expresiones populares.",

        audio:
            "Italia es uno de los países más importantes en la historia de la ópera y ha sido cuna de grandes compositores y músicos.",

        preguntas: [

            q(
                "¿Qué género musical nació y se desarrolló fuertemente en Italia?",
                ["Ópera", "Reguetón", "Jazz", "Blues"],
                "Ópera"
            ),

            q(
                "¿Quién compuso la ópera La Traviata?",
                ["Giuseppe Verdi", "Leonardo da Vinci", "Dante Alighieri", "Galileo Galilei"],
                "Giuseppe Verdi"
            ),

            q(
                "¿Qué compositor italiano escribió muchas óperas famosas?",
                ["Giacomo Puccini", "Miguel Ángel", "Julio César", "Marco Polo"],
                "Giacomo Puccini"
            ),

            q(
                "¿Qué instrumento tiene una gran tradición en la música italiana?",
                ["Mandolina", "Sitar", "Didyeridú", "Koto"],
                "Mandolina"
            ),

            q(
                "¿Cuál de estos pertenece al mundo de la música?",
                ["Ópera", "Arquitectura", "Escultura", "Pintura"],
                "Ópera"
            )
        ]
    },


    /* ========================================================
       CULTURA 3 - TRADICIONES
    ======================================================== */

    tradiciones: {

        titulo: "Tradiciones italianas",

        subtitulo: "Costumbres y expresiones culturales",

        icono: "🎭",

        imagen:
            "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",

        dato:
            "Las tradiciones italianas cambian según las regiones y ciudades.",

        sobreTexto:
            "Las tradiciones italianas incluyen celebraciones religiosas, reuniones familiares, gastronomía y costumbres regionales.",

        audio:
            "Las tradiciones italianas son diversas y cambian según cada región. La familia, la comida y las celebraciones tienen gran importancia cultural.",

        preguntas: [

            q(
                "¿Las tradiciones italianas son iguales en todo el país?",
                [
                    "No, existen diferencias regionales",
                    "Sí, son exactamente iguales",
                    "Solo existen en Roma",
                    "No existen tradiciones"
                ],
                "No, existen diferencias regionales"
            ),

            q(
                "¿Qué elemento tiene gran importancia en muchas tradiciones italianas?",
                ["La familia", "Solo la tecnología", "Solo los deportes", "Solo la política"],
                "La familia"
            ),

            q(
                "¿Qué elemento suele estar presente en celebraciones tradicionales?",
                ["Comida", "Solo exámenes", "Solo trabajo", "Solo tecnología"],
                "Comida"
            ),

            q(
                "¿Qué religión ha tenido una importante influencia histórica en Italia?",
                ["Cristianismo", "Sintoísmo", "Hinduismo", "Budismo"],
                "Cristianismo"
            ),

            q(
                "¿Qué ciudad está especialmente relacionada con el Carnaval de máscaras?",
                ["Venecia", "Milán", "Turín", "Nápoles"],
                "Venecia"
            )
        ]
    },


    /* ========================================================
       CULTURA 4 - FIESTAS
    ======================================================== */

    fiestas: {

        titulo: "Fiestas italianas",

        subtitulo: "Celebraciones populares y culturales",

        icono: "🎉",

        imagen:
            "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",

        dato:
            "Italia celebra numerosas fiestas religiosas, históricas y regionales.",

        sobreTexto:
            "Las fiestas italianas reúnen música, comida, tradiciones y actividades comunitarias.",

        audio:
            "Italia tiene numerosas celebraciones. Algunas están relacionadas con la religión, otras con acontecimientos históricos y muchas con tradiciones regionales.",

        preguntas: [

            q(
                "¿En qué ciudad se celebra el famoso Carnaval de máscaras?",
                ["Venecia", "Roma", "Milán", "Florencia"],
                "Venecia"
            ),

            q(
                "¿Qué fiesta nacional italiana se celebra el 2 de junio?",
                [
                    "Día de la República",
                    "Navidad",
                    "Día de la Unidad",
                    "Carnaval"
                ],
                "Día de la República"
            ),

            q(
                "¿Qué celebración religiosa es importante en Italia?",
                ["Navidad", "Halloween", "Thanksgiving", "Hanami"],
                "Navidad"
            ),

            q(
                "¿Las fiestas regionales ayudan a conservar las tradiciones?",
                ["Sí", "No", "Solo fuera de Italia", "Nunca"],
                "Sí"
            ),

            q(
                "¿Qué elemento suele formar parte de muchas fiestas?",
                ["Música", "Solo exámenes", "Solo política", "Solo trabajo"],
                "Música"
            )
        ]
    },


    /* ========================================================
       CULTURA 5 - VESTIMENTA
    ======================================================== */

    vestimenta: {

        titulo: "Vestimenta italiana",

        subtitulo: "Moda y vestimentas tradicionales",

        icono: "👗",

        imagen:
            "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",

        dato:
            "Italia es reconocida mundialmente por su tradición en la moda y el diseño.",

        sobreTexto:
            "La vestimenta italiana combina tradiciones regionales con una importante industria moderna de la moda.",

        audio:
            "Italia tiene una importante tradición en moda. Ciudades como Milán son reconocidas internacionalmente por sus eventos y diseñadores.",

        preguntas: [

            q(
                "¿Qué ciudad italiana es reconocida mundialmente por la moda?",
                ["Milán", "Roma", "Pisa", "Nápoles"],
                "Milán"
            ),

            q(
                "¿Qué caracteriza a muchas prendas tradicionales italianas?",
                [
                    "Varían según la región",
                    "Son iguales en todo el país",
                    "Solo son deportivas",
                    "Solo son militares"
                ],
                "Varían según la región"
            ),

            q(
                "¿Qué actividad está fuertemente relacionada con la moda italiana?",
                ["Diseño", "Agricultura", "Minería", "Pesca"],
                "Diseño"
            ),

            q(
                "¿Italia es reconocida internacionalmente por su industria de la moda?",
                ["Sí", "No", "Solo durante la Edad Media", "Nunca"],
                "Sí"
            ),

            q(
                "¿Qué ciudad organiza importantes eventos relacionados con la moda?",
                ["Milán", "Bolonia", "Pisa", "Palermo"],
                "Milán"
            )
        ]
    },


    /* ========================================================
       CULTURA 6 - ARTE
    ======================================================== */

    arte: {

        titulo: "Arte italiano",

        subtitulo: "Renacimiento y grandes artistas",

        icono: "🎨",

        imagen:
            "https://images.unsplash.com/photo-1577083552431-6e5fd01988b5",

        dato:
            "Italia fue uno de los principales centros del Renacimiento europeo.",

        sobreTexto:
            "El arte italiano tuvo una enorme influencia durante el Renacimiento y produjo obras de artistas como Leonardo da Vinci y Miguel Ángel.",

        audio:
            "Italia fue uno de los principales centros del Renacimiento. Leonardo da Vinci, Miguel Ángel y Rafael son algunos de sus artistas más conocidos.",

        preguntas: [

            q(
                "¿En qué movimiento artístico tuvo Italia un papel fundamental?",
                ["Renacimiento", "Surrealismo", "Pop Art", "Impresionismo japonés"],
                "Renacimiento"
            ),

            q(
                "¿Quién pintó la Mona Lisa?",
                ["Leonardo da Vinci", "Miguel Ángel", "Rafael", "Donatello"],
                "Leonardo da Vinci"
            ),

            q(
                "¿Quién pintó los frescos de la Capilla Sixtina?",
                ["Miguel Ángel", "Leonardo da Vinci", "Rafael", "Botticelli"],
                "Miguel Ángel"
            ),

            q(
                "¿Qué artista italiano creó la escultura David?",
                ["Miguel Ángel", "Galileo", "Dante", "Verdi"],
                "Miguel Ángel"
            ),

            q(
                "¿Qué ciudad fue uno de los grandes centros del Renacimiento?",
                ["Florencia", "Nápoles", "Turín", "Palermo"],
                "Florencia"
            )
        ]
    },


    /* ========================================================
       CULTURA 7 - MONUMENTOS
    ======================================================== */

    monumentos: {

        titulo: "Monumentos italianos",

        subtitulo: "Lugares históricos y arquitectónicos",

        icono: "🏛️",

        imagen:
            "https://images.unsplash.com/photo-1529260830199-42c24126f198",

        dato:
            "Italia posee una gran cantidad de monumentos y sitios históricos.",

        sobreTexto:
            "Los monumentos italianos permiten conocer diferentes etapas de la historia del país y de Europa.",

        audio:
            "Italia posee monumentos muy conocidos como el Coliseo, la Torre de Pisa y la Basílica de San Pedro.",

        preguntas: [

            q(
                "¿En qué ciudad se encuentra el Coliseo?",
                ["Roma", "Milán", "Florencia", "Venecia"],
                "Roma"
            ),

            q(
                "¿En qué ciudad se encuentra la famosa torre inclinada?",
                ["Pisa", "Roma", "Turín", "Nápoles"],
                "Pisa"
            ),

            q(
                "¿Qué es el Coliseo?",
                ["Un antiguo anfiteatro", "Una universidad", "Un castillo medieval", "Un palacio moderno"],
                "Un antiguo anfiteatro"
            ),

            q(
                "¿Dónde se encuentra la Basílica de San Pedro?",
                ["Ciudad del Vaticano", "Milán", "Florencia", "Pisa"],
                "Ciudad del Vaticano"
            ),

            q(
                "¿Qué pueden enseñar los monumentos históricos?",
                [
                    "Historia y cultura",
                    "Solo matemáticas",
                    "Solo deportes",
                    "Solo química"
                ],
                "Historia y cultura"
            )
        ]
    },


    /* ========================================================
       HISTORIA 8 - PUEBLOS ORIGINARIOS
    ======================================================== */

    "pueblos-originarios": {

        titulo: "Pueblos originarios",

        subtitulo: "Los pueblos que habitaron la península itálica",

        icono: "🏺",

        imagen:
            "https://images.unsplash.com/photo-1552832230-c0197dd311b5",

        dato:
            "Antes del dominio romano existieron diferentes pueblos en la península itálica.",

        sobreTexto:
            "La península itálica estuvo habitada por diferentes pueblos antes y durante el crecimiento de Roma.",

        audio:
            "Entre los pueblos antiguos de la península itálica estuvieron los etruscos, latinos, samnitas y otros grupos.",

        preguntas: [

            q(
                "¿Qué pueblo tuvo una importante presencia en el centro de Italia antes de Roma?",
                ["Etruscos", "Vikingos", "Aztecas", "Incas"],
                "Etruscos"
            ),

            q(
                "¿En qué región se desarrolló principalmente la civilización etrusca?",
                ["Etruria", "Sicilia exclusivamente", "Cerdeña exclusivamente", "Alpes suizos"],
                "Etruria"
            ),

            q(
                "¿Los latinos estuvieron relacionados con los orígenes de Roma?",
                ["Sí", "No", "Solo después de la Edad Media", "Solo durante el siglo XX"],
                "Sí"
            ),

            q(
                "¿Qué ciudad se convirtió posteriormente en el centro de un gran imperio?",
                ["Roma", "Pisa", "Venecia", "Milán"],
                "Roma"
            ),

            q(
                "¿La península itálica estuvo habitada por diferentes pueblos?",
                ["Sí", "No", "Solo por romanos", "Solo por griegos"],
                "Sí"
            )
        ]
    },


    /* ========================================================
       HISTORIA 9 - IMPERIO ROMANO
    ======================================================== */

    "imperio-romano": {

        titulo: "Imperio romano",

        subtitulo: "Roma y la expansión de su poder",

        icono: "🏛️",

        imagen:
            "https://images.unsplash.com/photo-1552832230-c0197dd311b5",

        dato:
            "El Imperio romano llegó a controlar grandes territorios alrededor del mar Mediterráneo.",

        sobreTexto:
            "Roma pasó de ser una ciudad a convertirse en el centro de uno de los imperios más importantes de la Antigüedad.",

        audio:
            "Roma desarrolló un poderoso Estado que llegó a controlar grandes territorios de Europa, África del Norte y Asia occidental.",

        preguntas: [

            q(
                "¿Cuál fue el centro del Imperio romano?",
                ["Roma", "Atenas", "París", "Londres"],
                "Roma"
            ),

            q(
                "¿Qué mar fue fundamental para la expansión romana?",
                ["Mar Mediterráneo", "Mar Caribe", "Mar Báltico", "Mar del Norte"],
                "Mar Mediterráneo"
            ),

            q(
                "¿Cuál era una importante vía de comunicación romana?",
                ["Las calzadas", "Los ferrocarriles", "Los aviones", "Los metros"],
                "Las calzadas"
            ),

            q(
                "¿Qué idioma tuvo gran importancia en el Imperio romano de Occidente?",
                ["Latín", "Inglés", "Alemán", "Japonés"],
                "Latín"
            ),

            q(
                "¿Qué estructura romana se utilizaba para espectáculos públicos?",
                ["Anfiteatro", "Rascacielos", "Estación espacial", "Faro moderno"],
                "Anfiteatro"
            )
        ]
    },


    /* ========================================================
       HISTORIA 10 - EDAD MEDIA
    ======================================================== */

    "edad-media": {

        titulo: "Italia en la Edad Media",

        subtitulo: "Ciudades, comercio y transformaciones medievales",

        icono: "⚔️",

        imagen:
            "https://images.unsplash.com/photo-1531572753322-ad063cecc140",

        dato:
            "Durante la Edad Media surgieron y crecieron importantes ciudades italianas.",

        sobreTexto:
            "Durante la Edad Media, Italia estuvo dividida en diferentes territorios y ciudades-Estado con gran importancia comercial y política.",

        audio:
            "Durante la Edad Media, ciudades como Venecia, Florencia y Génova adquirieron gran importancia comercial y política.",

        preguntas: [

            q(
                "¿Qué ciudad italiana se destacó por su comercio marítimo?",
                ["Venecia", "Roma exclusivamente", "Turín", "Pisa solamente"],
                "Venecia"
            ),

            q(
                "¿Qué ciudad fue un importante centro comercial medieval?",
                ["Génova", "Madrid", "París", "Berlín"],
                "Génova"
            ),

            q(
                "¿Italia estaba políticamente unificada durante gran parte de la Edad Media?",
                ["No", "Sí completamente", "Solo durante el siglo XX", "Sí desde Roma"],
                "No"
            ),

            q(
                "¿Qué ciudad se convirtió en un importante centro cultural?",
                ["Florencia", "Nápoles solamente", "Turín solamente", "Palermo solamente"],
                "Florencia"
            ),

            q(
                "¿Qué actividad fue importante para varias ciudades italianas?",
                ["Comercio", "Exploración espacial", "Industria digital", "Automovilismo moderno"],
                "Comercio"
            )
        ]
    },


    /* ========================================================
       HISTORIA 11 - UNIFICACIÓN ITALIANA
    ======================================================== */

    "unificacion-italiana": {

        titulo: "Unificación italiana",

        subtitulo: "El proceso que llevó a la creación de Italia",

        icono: "🇮🇹",

        imagen:
            "https://images.unsplash.com/photo-1529260830199-42c24126f198",

        dato:
            "La unificación italiana fue un proceso político y militar desarrollado principalmente durante el siglo XIX.",

        sobreTexto:
            "La unificación italiana, conocida como Risorgimento, reunió diferentes Estados de la península bajo un mismo reino.",

        audio:
            "La unificación italiana fue un proceso del siglo XIX en el que diferentes territorios de la península fueron incorporándose al Reino de Italia.",

        preguntas: [

            q(
                "¿Durante qué siglo ocurrió principalmente la unificación italiana?",
                ["Siglo XIX", "Siglo XV", "Siglo XX", "Siglo XIII"],
                "Siglo XIX"
            ),

            q(
                "¿Cómo se conoce el proceso de unificación italiana?",
                ["Risorgimento", "Renacimiento", "Ilustración", "Reforma"],
                "Risorgimento"
            ),

            q(
                "¿Quién fue una figura importante del proceso de unificación?",
                ["Giuseppe Garibaldi", "Julio César", "Leonardo da Vinci", "Dante"],
                "Giuseppe Garibaldi"
            ),

            q(
                "¿Quién fue proclamado rey del nuevo Reino de Italia?",
                ["Víctor Manuel II", "Julio César", "Napoleón", "Garibaldi"],
                "Víctor Manuel II"
            ),

            q(
                "¿En qué año se proclamó el Reino de Italia?",
                ["1861", "1871", "1914", "1945"],
                "1861"
            )
        ]
    },


    /* ========================================================
       HISTORIA 12 - PERSONAJES HISTÓRICOS
    ======================================================== */

    "personajes-historicos": {

        titulo: "Personajes históricos",

        subtitulo: "Personas importantes de la historia italiana",

        icono: "👤",

        imagen:
            "https://images.unsplash.com/photo-1552832230-c0197dd311b5",

        dato:
            "Italia ha sido cuna de artistas, científicos, escritores y figuras políticas importantes.",

        sobreTexto:
            "Personajes como Leonardo da Vinci, Galileo Galilei, Dante Alighieri y Giuseppe Garibaldi dejaron una importante huella histórica.",

        audio:
            "Entre los personajes destacados de Italia se encuentran Leonardo da Vinci, Galileo Galilei, Dante Alighieri y Giuseppe Garibaldi.",

        preguntas: [

            q(
                "¿Quién pintó la Mona Lisa?",
                ["Leonardo da Vinci", "Galileo Galilei", "Dante", "Garibaldi"],
                "Leonardo da Vinci"
            ),

            q(
                "¿Quién fue un importante científico italiano relacionado con la astronomía?",
                ["Galileo Galilei", "Miguel Ángel", "Verdi", "Garibaldi"],
                "Galileo Galilei"
            ),

            q(
                "¿Quién escribió La Divina Comedia?",
                ["Dante Alighieri", "Leonardo da Vinci", "Galileo", "Garibaldi"],
                "Dante Alighieri"
            ),

            q(
                "¿Quién fue una figura importante de la unificación italiana?",
                ["Giuseppe Garibaldi", "Dante", "Galileo", "Verdi"],
                "Giuseppe Garibaldi"
            ),

            q(
                "¿Quién compuso óperas como La Traviata?",
                ["Giuseppe Verdi", "Leonardo da Vinci", "Galileo", "Dante"],
                "Giuseppe Verdi"
            )
        ]
    },


    /* ========================================================
       HISTORIA 13 - CONFLICTOS IMPORTANTES
    ======================================================== */

    "conflictos-importantes": {

        titulo: "Conflictos importantes",

        subtitulo: "Italia durante los grandes conflictos del siglo XX",

        icono: "⚔️",

        imagen:
            "https://images.unsplash.com/photo-1519070994522-88c6b7563306",

        dato:
            "Italia participó en importantes conflictos europeos durante el siglo XX.",

        sobreTexto:
            "Italia participó en la Primera y Segunda Guerra Mundial, además de experimentar importantes cambios políticos durante el siglo XX.",

        audio:
            "Italia participó en la Primera Guerra Mundial y en la Segunda Guerra Mundial. Estos conflictos tuvieron importantes consecuencias para el país.",

        preguntas: [

            q(
                "¿En qué año comenzó la Primera Guerra Mundial?",
                ["1914", "1918", "1939", "1945"],
                "1914"
            ),

            q(
                "¿En qué año terminó la Primera Guerra Mundial?",
                ["1918", "1914", "1939", "1945"],
                "1918"
            ),

            q(
                "¿En qué año comenzó la Segunda Guerra Mundial?",
                ["1939", "1914", "1941", "1945"],
                "1939"
            ),

            q(
                "¿En qué año terminó la Segunda Guerra Mundial?",
                ["1945", "1939", "1918", "1950"],
                "1945"
            ),

            q(
                "¿Qué ocurrió en Italia después de la Segunda Guerra Mundial?",
                [
                    "Se convirtió en una república",
                    "Se convirtió en un imperio",
                    "Fue anexada por Alemania",
                    "Dejó de existir"
                ],
                "Se convirtió en una república"
            )
        ]
    },


    /* ========================================================
       HISTORIA 14 - ITALIA CONTEMPORÁNEA
    ======================================================== */

    "italia-contemporanea": {

        titulo: "Italia contemporánea",

        subtitulo: "Italia desde la República hasta la actualidad",

        icono: "🏙️",

        imagen:
            "https://images.unsplash.com/photo-1529260830199-42c24126f198",

        dato:
            "Italia se convirtió en república en 1946.",

        sobreTexto:
            "La Italia contemporánea se caracteriza por su sistema republicano, su participación en Europa y su diversidad cultural.",

        audio:
            "Después de la Segunda Guerra Mundial, Italia se convirtió en una república en 1946. Actualmente forma parte de la Unión Europea.",

        preguntas: [

            q(
                "¿En qué año se convirtió Italia en una república?",
                ["1946", "1861", "1914", "1960"],
                "1946"
            ),

            q(
                "¿Qué sistema político tiene Italia actualmente?",
                ["República", "Monarquía absoluta", "Imperio", "Feudalismo"],
                "República"
            ),

            q(
                "¿Italia forma parte de la Unión Europea?",
                ["Sí", "No", "Solo desde 2020", "Nunca"],
                "Sí"
            ),

            q(
                "¿Cuál es la capital de Italia?",
                ["Roma", "Milán", "Venecia", "Florencia"],
                "Roma"
            ),

            q(
                "¿Qué moneda utiliza Italia?",
                ["Euro", "Dólar", "Libra", "Peso"],
                "Euro"
            )
        ]
    }

};


/* ============================================================
   5. RETO DE RECUPERACIÓN
============================================================ */

const preguntasRecuperacionBase = [

    q(
        "¿Cuál es la capital de Italia?",
        ["Roma", "Milán", "Venecia", "Florencia"],
        "Roma"
    ),

    q(
        "¿En qué año se proclamó el Reino de Italia?",
        ["1861", "1871", "1946", "1914"],
        "1861"
    ),

    q(
        "¿Quién pintó la Mona Lisa?",
        ["Leonardo da Vinci", "Miguel Ángel", "Galileo", "Dante"],
        "Leonardo da Vinci"
    ),

    q(
        "¿En qué ciudad se encuentra el Coliseo?",
        ["Roma", "Pisa", "Milán", "Venecia"],
        "Roma"
    ),

    q(
        "¿En qué año se convirtió Italia en una república?",
        ["1946", "1861", "1918", "1960"],
        "1946"
    )

];


/* ============================================================
   6. RETO FINAL - 30 PREGUNTAS
============================================================ */

const preguntasFinales = [

    q(
        "¿Cuál es la capital de Italia?",
        ["Roma", "Milán", "Venecia", "Florencia"],
        "Roma"
    ),

    q(
        "¿Cuál es un alimento tradicional italiano?",
        ["Pizza", "Sushi", "Tacos", "Cuscús"],
        "Pizza"
    ),

    q(
        "¿Qué alimento es muy representativo de Italia?",
        ["Pasta", "Sushi", "Curry", "Arepa"],
        "Pasta"
    ),

    q(
        "¿Qué es el risotto?",
        ["Un plato de arroz", "Una bebida", "Un postre", "Una sopa"],
        "Un plato de arroz"
    ),

    q(
        "¿Qué postre italiano es conocido mundialmente?",
        ["Tiramisú", "Mochi", "Baklava", "Brownie"],
        "Tiramisú"
    ),

    q(
        "¿Qué género musical tuvo un gran desarrollo en Italia?",
        ["Ópera", "Reguetón", "Jazz", "Rock"],
        "Ópera"
    ),

    q(
        "¿Quién compuso La Traviata?",
        ["Giuseppe Verdi", "Galileo Galilei", "Dante", "Garibaldi"],
        "Giuseppe Verdi"
    ),

    q(
        "¿Qué ciudad es reconocida mundialmente por la moda?",
        ["Milán", "Roma", "Pisa", "Nápoles"],
        "Milán"
    ),

    q(
        "¿En qué ciudad se celebra el famoso Carnaval de máscaras?",
        ["Venecia", "Roma", "Milán", "Turín"],
        "Venecia"
    ),

    q(
        "¿Qué movimiento artístico tuvo gran desarrollo en Italia?",
        ["Renacimiento", "Pop Art", "Surrealismo", "Cubismo"],
        "Renacimiento"
    ),

    q(
        "¿Quién pintó la Mona Lisa?",
        ["Leonardo da Vinci", "Miguel Ángel", "Rafael", "Donatello"],
        "Leonardo da Vinci"
    ),

    q(
        "¿Quién pintó los frescos de la Capilla Sixtina?",
        ["Miguel Ángel", "Leonardo da Vinci", "Rafael", "Botticelli"],
        "Miguel Ángel"
    ),

    q(
        "¿En qué ciudad se encuentra el Coliseo?",
        ["Roma", "Milán", "Florencia", "Venecia"],
        "Roma"
    ),

    q(
        "¿En qué ciudad se encuentra la Torre inclinada?",
        ["Pisa", "Roma", "Turín", "Nápoles"],
        "Pisa"
    ),

    q(
        "¿Qué pueblo antiguo tuvo una importante presencia en el centro de Italia?",
        ["Etruscos", "Incas", "Aztecas", "Vikingos"],
        "Etruscos"
    ),

    q(
        "¿Cuál fue el centro del Imperio romano?",
        ["Roma", "Atenas", "París", "Londres"],
        "Roma"
    ),

    q(
        "¿Qué idioma tuvo gran importancia en el Imperio romano de Occidente?",
        ["Latín", "Inglés", "Alemán", "Francés"],
        "Latín"
    ),

    q(
        "¿Qué ciudad medieval se destacó por su comercio marítimo?",
        ["Venecia", "Berlín", "Madrid", "Londres"],
        "Venecia"
    ),

    q(
        "¿Durante qué siglo ocurrió principalmente la unificación italiana?",
        ["Siglo XIX", "Siglo XV", "Siglo XX", "Siglo XIII"],
        "Siglo XIX"
    ),

    q(
        "¿Cómo se conoce el proceso de unificación italiana?",
        ["Risorgimento", "Renacimiento", "Reforma", "Ilustración"],
        "Risorgimento"
    ),

    q(
        "¿Quién fue una figura importante de la unificación italiana?",
        ["Giuseppe Garibaldi", "Leonardo da Vinci", "Galileo", "Dante"],
        "Giuseppe Garibaldi"
    ),

    q(
        "¿En qué año se proclamó el Reino de Italia?",
        ["1861", "1871", "1914", "1945"],
        "1861"
    ),

    q(
        "¿Quién escribió La Divina Comedia?",
        ["Dante Alighieri", "Leonardo da Vinci", "Galileo", "Garibaldi"],
        "Dante Alighieri"
    ),

    q(
        "¿Quién fue un importante científico italiano?",
        ["Galileo Galilei", "Garibaldi", "Verdi", "Dante"],
        "Galileo Galilei"
    ),

    q(
        "¿En qué año comenzó la Primera Guerra Mundial?",
        ["1914", "1918", "1939", "1945"],
        "1914"
    ),

    q(
        "¿En qué año terminó la Segunda Guerra Mundial?",
        ["1945", "1939", "1918", "1950"],
        "1945"
    ),

    q(
        "¿En qué año se convirtió Italia en una república?",
        ["1946", "1861", "1918", "1960"],
        "1946"
    ),

    q(
        "¿Italia forma parte de la Unión Europea?",
        ["Sí", "No", "Solo desde 2020", "Nunca"],
        "Sí"
    ),

    q(
        "¿Qué moneda utiliza Italia?",
        ["Euro", "Dólar", "Libra", "Peso"],
        "Euro"
    ),

    q(
        "¿Qué país posee dentro de su territorio a la Ciudad del Vaticano?",
        ["Italia", "Francia", "España", "Alemania"],
        "Italia"
    )

];


/* ============================================================
   7. VARIABLES DEL JUEGO
============================================================ */

let temaActual = null;

let indicePregunta = 0;

let puntos = 0;

let vidas = MAX_VIDAS;

let respuestasCorrectas = 0;

let retosCompletados = 0;

let juegoBloqueadoPorVidas = false;


/* RETO DE RECUPERACIÓN */

let preguntasRecuperacion = [];

let indiceRecuperacion = 0;

let recuperacionActiva = false;

let aciertosRecuperacion = 0;


/* RETO FINAL */

let retoFinalDesbloqueado = false;

let retoFinalActivo = false;

let indicePreguntaFinal = 0;

let puntosFinales = 0;

let respuestasFinales = 0;


/* ESTADO */

let estadoPreguntas = {};


/* HISTORIAL */

let historial = {
    rondas: 0,
    puntosTotales: 0,
    correctasTotales: 0
};


/* ============================================================
   8. CREAR ESTADO INICIAL
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
   9. CARGAR PROGRESO
============================================================ */

function cargarProgreso() {

    try {

        const guardado = localStorage.getItem(CLAVE_GUARDADO);

        if (!guardado) {

            estadoPreguntas = crearEstadoInicial();

            guardarProgreso();

            return;
        }


        const datos = JSON.parse(guardado);


        estadoPreguntas =
            datos.estadoPreguntas || crearEstadoInicial();


        nombresTemas.forEach(nombre => {

            if (!estadoPreguntas[nombre]) {

                estadoPreguntas[nombre] = {
                    respondidas: [],
                    completado: false
                };

            }

        });


        puntos = Number(datos.puntos) || 0;

        vidas =
            typeof datos.vidas === "number"
                ? datos.vidas
                : MAX_VIDAS;

        respuestasCorrectas =
            Number(datos.respuestasCorrectas) || 0;

        retosCompletados =
            Number(datos.retosCompletados) || 0;


        retoFinalDesbloqueado =
            Boolean(datos.retoFinalDesbloqueado);


        juegoBloqueadoPorVidas =
            Boolean(datos.juegoBloqueadoPorVidas);


        historial =
            datos.historial || {
                rondas: 0,
                puntosTotales: 0,
                correctasTotales: 0
            };


        if (vidas < 0) vidas = 0;

        if (vidas > MAX_VIDAS) vidas = MAX_VIDAS;


        if (vidas === 0) {

            juegoBloqueadoPorVidas = true;

        }

    } catch (error) {

        console.error(
            "Error al cargar el progreso:",
            error
        );

        estadoPreguntas = crearEstadoInicial();

        puntos = 0;

        vidas = MAX_VIDAS;

        respuestasCorrectas = 0;

        retosCompletados = 0;

        juegoBloqueadoPorVidas = false;

        retoFinalDesbloqueado = false;

        historial = {
            rondas: 0,
            puntosTotales: 0,
            correctasTotales: 0
        };

    }

}


/* ============================================================
   10. GUARDAR PROGRESO
============================================================ */

function guardarProgreso() {

    try {

        const datos = {

            estadoPreguntas,

            puntos,

            vidas,

            respuestasCorrectas,

            retosCompletados,

            juegoBloqueadoPorVidas,

            retoFinalDesbloqueado,

            historial

        };


        localStorage.setItem(
            CLAVE_GUARDADO,
            JSON.stringify(datos)
        );

    } catch (error) {

        console.error(
            "No se pudo guardar el progreso:",
            error
        );

    }

}


/* ============================================================
   11. ACTUALIZAR INTERFAZ
============================================================ */

function actualizarInterfaz() {


    /* PUNTOS */

    const elementoPuntos =
        document.getElementById("puntos");

    if (elementoPuntos) {

        elementoPuntos.textContent = puntos;

    }


    /* VIDAS */

    const elementoNumeroVidas =
        document.getElementById("numeroVidas");

    if (elementoNumeroVidas) {

        elementoNumeroVidas.textContent = vidas;

    }


    const corazones =
        document.getElementById("corazones");

    if (corazones) {

        corazones.textContent =
            "❤️".repeat(vidas) +
            "♡".repeat(MAX_VIDAS - vidas);

    }


    /* CATEGORÍAS COMPLETADAS */

    let categoriasCompletadas = 0;


    nombresTemas.forEach(nombre => {

        if (
            estadoPreguntas[nombre] &&
            estadoPreguntas[nombre].completado
        ) {

            categoriasCompletadas++;

        }

    });


    /* PORCENTAJE */

    const porcentaje = Math.round(
        (categoriasCompletadas /
            nombresTemas.length) * 100
    );


    const elementoPorcentaje =
        document.getElementById("porcentaje");

    if (elementoPorcentaje) {

        elementoPorcentaje.textContent =
            porcentaje + "%";

    }


    /* TEXTO CATEGORÍAS */

    const textoCategorias =
        document.getElementById("textoCategorias");

    if (textoCategorias) {

        textoCategorias.textContent =
            `Has completado ${categoriasCompletadas} de ${nombresTemas.length} categorías.`;

    }


    /* RETOS COMPLETADOS */

    const elementoRetos =
        document.getElementById("retosCompletados");

    if (elementoRetos) {

        elementoRetos.textContent =
            retosCompletados;

    }


    /* CORRECTAS */

    const elementoCorrectas =
        document.getElementById("correctas");

    if (elementoCorrectas) {

        elementoCorrectas.textContent =
            respuestasCorrectas;

    }


    /* ESTADO */

    const estadoProgreso =
        document.getElementById("estadoProgreso");

    if (estadoProgreso) {

        if (porcentaje === 100) {

            estadoProgreso.textContent =
                "¡Aventura completada!";

        } else {

            estadoProgreso.textContent =
                "Aventura en progreso";

        }

    }


    /* RETO FINAL */

    const todasCompletadas =
        nombresTemas.every(nombre =>
            estadoPreguntas[nombre] &&
            estadoPreguntas[nombre].completado
        );


    retoFinalDesbloqueado =
        todasCompletadas;


    const botonFinal =
        document.getElementById("btnRetoFinal");


    if (botonFinal) {

        botonFinal.disabled =
            !todasCompletadas;

        botonFinal.textContent =
            todasCompletadas
                ? "🏆 Comenzar reto final"
                : "🔒 Reto final bloqueado";

    }


    guardarProgreso();

}


/* ============================================================
   12. OBTENER SIGUIENTE PREGUNTA
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

        if (!estado.respondidas.includes(i)) {

            return i;

        }

    }


    return null;

}


/* ============================================================
   13. CAMBIAR TEMA
============================================================ */

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


    document.querySelectorAll(".categoria")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    if (boton) {

        boton.classList.add("active");

    }

}


/* ============================================================
   14. CARGAR TEMA
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


    indicePregunta =
        obtenerSiguientePregunta(nombreTema);


    /* TÍTULO */

    const titulo =
        document.getElementById(
            "tituloCategoria"
        );


    if (titulo) {

        titulo.textContent =
            tema.titulo;

    }


    /* SUBTÍTULO */

    const subtitulo =
        document.getElementById(
            "subtituloCategoria"
        );


    if (subtitulo) {

        subtitulo.textContent =
            tema.subtitulo;

    }


    /* DATO */

    const dato =
        document.getElementById(
            "datoInteresante"
        );


    if (dato) {

        dato.textContent =
            tema.dato;

    }


    /* DESCRIPCIÓN */

    const descripcion =
        document.getElementById(
            "descripcionCategoria"
        );


    if (descripcion) {

        descripcion.textContent =
            tema.sobreTexto;

    }


    /* CARGAR PREGUNTA */

    cargarPregunta();


    actualizarInterfaz();

}


/* ============================================================
   15. CARGAR PREGUNTA NORMAL
============================================================ */

function cargarPregunta() {

    if (!temaActual) return;


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
        document.getElementById(
            "preguntaReto"
        );


    const opcionesHTML =
        document.getElementById(
            "opcionesReto"
        );


    const mensajeHTML =
        document.getElementById(
            "mensajeRespuesta"
        );


    const botonSiguiente =
        document.getElementById(
            "botonSiguiente"
        );


    const contador =
        document.getElementById(
            "contadorPregunta"
        );


    if (!preguntaHTML || !opcionesHTML) {

        console.error(
            "No se encontraron los elementos del reto."
        );

        return;

    }


    preguntaHTML.textContent =
        pregunta.pregunta;


    opcionesHTML.innerHTML = "";


    if (mensajeHTML) {

        mensajeHTML.textContent = "";

        mensajeHTML.className =
            "mensaje-respuesta";

    }


    if (botonSiguiente) {

        botonSiguiente.disabled = true;

        botonSiguiente.textContent =
            "Siguiente →";

    }


    if (contador) {

        contador.textContent =
            `${estado.respondidas.length + 1} / ${tema.preguntas.length}`;

    }


    /* MEZCLAR OPCIONES */

    const opcionesMezcladas =
        mezclar(pregunta.opciones);


    opcionesMezcladas.forEach(opcion => {

        const boton =
            document.createElement("button");


        boton.type = "button";

        boton.className = "opcion";

        boton.textContent = opcion;


        boton.addEventListener(
            "click",
            function () {

                comprobarRespuesta(opcion);

            }
        );


        opcionesHTML.appendChild(boton);

    });

}


/* ============================================================
   16. COMPROBAR RESPUESTA
============================================================ */

function comprobarRespuesta(respuesta) {

    if (!temaActual) return;


    if (juegoBloqueadoPorVidas) return;


    const tema =
        temas[temaActual];


    const estado =
        estadoPreguntas[temaActual];


    const pregunta =
        tema.preguntas[indicePregunta];


    if (!pregunta) return;


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


    const mensaje =
        document.getElementById(
            "mensajeRespuesta"
        );


    const botonSeleccionado =
        [...botones].find(
            boton =>
                boton.textContent === respuesta
        );


    if (respuesta === pregunta.correcta) {


        /* CORRECTA */

        puntos += 10;

        respuestasCorrectas++;


        if (mensaje) {

            mensaje.textContent =
                "¡Correcto! 🎉";

            mensaje.className =
                "mensaje-respuesta correcto";

        }


    } else {


        /* INCORRECTA */

        vidas--;


        if (botonSeleccionado) {

            botonSeleccionado.classList.add(
                "incorrecta"
            );

        }


        if (mensaje) {

            mensaje.textContent =
                `Incorrecto. La respuesta correcta es: ${pregunta.correcta}`;

            mensaje.className =
                "mensaje-respuesta incorrecto";

        }


        if (vidas <= 0) {

            vidas = 0;

            juegoBloqueadoPorVidas =
                true;

        }

    }


    /* MARCAR PREGUNTA RESPONDIDA */

    estado.respondidas.push(
        indicePregunta
    );


    guardarProgreso();

    actualizarInterfaz();


    const botonSiguiente =
        document.getElementById(
            "botonSiguiente"
        );


    if (botonSiguiente) {

        botonSiguiente.disabled = false;

    }


    /* SI SE QUEDÓ SIN VIDAS */

    if (juegoBloqueadoPorVidas) {

        if (botonSiguiente) {

            botonSiguiente.disabled = true;

        }


        setTimeout(() => {

            abrirModalRecuperacion();

        }, 700);

    }

}


/* ============================================================
   17. SIGUIENTE PREGUNTA
============================================================ */

function siguientePregunta() {

    if (juegoBloqueadoPorVidas) {

        abrirModalRecuperacion();

        return;

    }


    if (!temaActual) return;


    const estado =
        estadoPreguntas[temaActual];


    const tema =
        temas[temaActual];


    /* SI TERMINÓ LA CATEGORÍA */

    if (estado.completado) {

        irASiguienteCategoria();

        return;

    }


    /* SI RESPONDIÓ LAS 5 */

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
   18. IR A LA SIGUIENTE CATEGORÍA
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
                (indiceActual + i) %
                nombresTemas.length
            ];


        if (
            !estadoPreguntas[nombre].completado
        ) {

            destino = nombre;

            break;

        }

    }


    /* TODAS COMPLETADAS */

    if (destino === null) {

        comenzarRetoFinal();

        return;

    }


    const boton =
        document.querySelector(
            `.categoria[data-categoria="${obtenerNombreBoton(destino)}"]`
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
   19. CONVERTIR CLAVE A NOMBRE DE BOTÓN
============================================================ */

function obtenerNombreBoton(clave) {

    const nombres = {

        "gastronomia": "Gastronomía",

        "musica": "Música",

        "tradiciones": "Tradiciones",

        "fiestas": "Fiestas",

        "vestimenta": "Vestimenta",

        "arte": "Arte",

        "monumentos": "Monumentos",

        "pueblos-originarios": "Pueblos originarios",

        "imperio-romano": "Imperio romano",

        "edad-media": "Edad Media",

        "unificacion-italiana": "Unificación italiana",

        "personajes-historicos": "Personajes históricos",

        "conflictos-importantes": "Conflictos importantes",

        "italia-contemporanea": "Italia contemporánea"

    };


    return nombres[clave] || clave;

}


/* ============================================================
   20. FINALIZAR CATEGORÍA
============================================================ */

function finalizarTema() {

    if (!temaActual) return;


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

        estado.completado = true;

        retosCompletados++;

    }


    guardarProgreso();

    actualizarInterfaz();


    const preguntaHTML =
        document.getElementById(
            "preguntaReto"
        );


    const opcionesHTML =
        document.getElementById(
            "opcionesReto"
        );


    const mensajeHTML =
        document.getElementById(
            "mensajeRespuesta"
        );


    const botonSiguiente =
        document.getElementById(
            "botonSiguiente"
        );


    const contador =
        document.getElementById(
            "contadorPregunta"
        );


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


    if (mensajeHTML) {

        mensajeHTML.textContent =
            "¡Excelente trabajo!";

        mensajeHTML.className =
            "mensaje-respuesta correcto";

    }


    if (contador) {

        contador.textContent =
            `${cantidadPreguntas} / ${cantidadPreguntas}`;

    }


    if (botonSiguiente) {

        botonSiguiente.disabled = false;


        const todasCompletadas =
            nombresTemas.every(nombre =>
                estadoPreguntas[nombre] &&
                estadoPreguntas[nombre].completado
            );


        botonSiguiente.textContent =
            todasCompletadas
                ? "🏆 Ir al reto final"
                : "Siguiente categoría →";

    }

}


/* ============================================================
   21. AUDIO
============================================================ */

function reproducirAudio() {

    if (!temaActual) return;


    const tema =
        temas[temaActual];


    if (!tema) return;


    const texto =
        `${tema.titulo}. ${tema.subtitulo}. ${tema.audio}`;


    if (
        "speechSynthesis" in window
    ) {

        window.speechSynthesis.cancel();


        const mensaje =
            new SpeechSynthesisUtterance(
                texto
            );


        mensaje.lang = "es-ES";

        mensaje.rate = 0.9;

        mensaje.pitch = 1;


        window.speechSynthesis.speak(
            mensaje
        );

    } else {

        alert(
            "Tu navegador no permite reproducir audio."
        );

    }

}


/* ============================================================
   22. MODAL DE RECUPERACIÓN
============================================================ */

function abrirModalRecuperacion() {

    const modal =
        document.getElementById(
            "modalRecuperacion"
        );


    if (!modal) return;


    modal.style.display = "flex";


    document.body.style.overflow =
        "hidden";


    const pregunta =
        document.getElementById(
            "preguntaRecuperacion"
        );


    const opciones =
        document.getElementById(
            "opcionesRecuperacion"
        );


    const mensaje =
        document.getElementById(
            "mensajeRecuperacion"
        );


    const boton =
        document.getElementById(
            "btnIniciarRecuperacion"
        );


    if (pregunta) {

        pregunta.textContent =
            "Has perdido todas tus vidas. Completa el reto de recuperación para continuar.";

    }


    if (opciones) {

        opciones.innerHTML = "";

    }


    if (mensaje) {

        mensaje.textContent =
            "Necesitas al menos 3 aciertos de 5 preguntas para recuperar tus 5 vidas.";

    }


    if (boton) {

        boton.textContent =
            "❤️ Comenzar reto de recuperación";

        boton.disabled = false;

    }

}


/* ============================================================
   23. COMENZAR RECUPERACIÓN
============================================================ */

function comenzarRetoRecuperacion() {

    preguntasRecuperacion =
        mezclar(
            preguntasRecuperacionBase
        );


    indiceRecuperacion = 0;

    aciertosRecuperacion = 0;

    recuperacionActiva = true;


    const mensaje =
        document.getElementById(
            "mensajeRecuperacion"
        );


    if (mensaje) {

        mensaje.textContent = "";

    }


    const boton =
        document.getElementById(
            "btnIniciarRecuperacion"
        );


    if (boton) {

        boton.style.display =
            "none";

    }


    cargarPreguntaRecuperacion();

}


/* ============================================================
   24. CARGAR PREGUNTA DE RECUPERACIÓN
============================================================ */

function cargarPreguntaRecuperacion() {

    if (!recuperacionActiva) return;


    const pregunta =
        preguntasRecuperacion[
            indiceRecuperacion
        ];


    if (!pregunta) {

        terminarRecuperacion();

        return;

    }


    const preguntaHTML =
        document.getElementById(
            "preguntaRecuperacion"
        );


    const opcionesHTML =
        document.getElementById(
            "opcionesRecuperacion"
        );


    const mensajeHTML =
        document.getElementById(
            "mensajeRecuperacion"
        );


    if (preguntaHTML) {

        preguntaHTML.textContent =
            `${indiceRecuperacion + 1}. ${pregunta.pregunta}`;

    }


    if (opcionesHTML) {

        opcionesHTML.innerHTML = "";

    }


    if (mensajeHTML) {

        mensajeHTML.textContent = "";

    }


    const opcionesMezcladas =
        mezclar(
            pregunta.opciones
        );


    opcionesMezcladas.forEach(opcion => {

        const boton =
            document.createElement("button");


        boton.type = "button";

        boton.className = "opcion";

        boton.textContent = opcion;


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
   25. COMPROBAR RECUPERACIÓN
============================================================ */

function comprobarRespuestaRecuperacion(
    respuesta
) {

    if (!recuperacionActiva) return;


    const pregunta =
        preguntasRecuperacion[
            indiceRecuperacion
        ];


    if (!pregunta) return;


    const botones =
        document.querySelectorAll(
            "#opcionesRecuperacion .opcion"
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


        if (
            boton.textContent ===
            respuesta &&
            respuesta !== pregunta.correcta
        ) {

            boton.classList.add(
                "incorrecta"
            );

        }

    });


    const mensaje =
        document.getElementById(
            "mensajeRecuperacion"
        );


    if (
        respuesta === pregunta.correcta
    ) {

        aciertosRecuperacion++;


        if (mensaje) {

            mensaje.textContent =
                "¡Correcto! 🎉";

            mensaje.className =
                "correcto";

        }

    } else {

        if (mensaje) {

            mensaje.textContent =
                `Incorrecto. La respuesta correcta es: ${pregunta.correcta}`;

            mensaje.className =
                "incorrecto";

        }

    }


    setTimeout(() => {

        indiceRecuperacion++;


        if (
            indiceRecuperacion >=
            preguntasRecuperacion.length
        ) {

            terminarRecuperacion();

        } else {

            cargarPreguntaRecuperacion();

        }

    }, 900);

}


/* ============================================================
   26. TERMINAR RECUPERACIÓN
============================================================ */

function terminarRecuperacion() {

    recuperacionActiva = false;


    const mensaje =
        document.getElementById(
            "mensajeRecuperacion"
        );


    const boton =
        document.getElementById(
            "btnIniciarRecuperacion"
        );


    if (
        aciertosRecuperacion >=
        ACIERTOS_MINIMOS_RECUPERACION
    ) {


        /* RECUPERÓ */

        vidas = MAX_VIDAS;

        juegoBloqueadoPorVidas =
            false;


        guardarProgreso();

        actualizarInterfaz();


        if (mensaje) {

            mensaje.innerHTML =
                `❤️ <strong>¡Vidas recuperadas!</strong><br>
                 Acertaste ${aciertosRecuperacion} de 5 preguntas.<br>
                 Ya puedes continuar tu aventura por Italia.`;

            mensaje.className =
                "correcto";

        }


        if (boton) {

            boton.style.display =
                "block";

            boton.textContent =
                "Continuar";

            boton.onclick =
                cerrarModalRecuperacion;

        }


    } else {


        /* NO RECUPERÓ */

        juegoBloqueadoPorVidas =
            true;


        if (mensaje) {

            mensaje.innerHTML =
                `💔 Acertaste ${aciertosRecuperacion} de 5.<br>
                 Necesitas al menos ${ACIERTOS_MINIMOS_RECUPERACION} aciertos para recuperar tus vidas.`;

            mensaje.className =
                "incorrecto";

        }


        if (boton) {

            boton.style.display =
                "block";

            boton.textContent =
                "Intentar de nuevo";

            boton.onclick =
                comenzarRetoRecuperacion;

        }

    }


    guardarProgreso();

}


/* ============================================================
   27. CERRAR MODAL DE RECUPERACIÓN
============================================================ */

function cerrarModalRecuperacion() {

    if (juegoBloqueadoPorVidas) {

        return;

    }


    const modal =
        document.getElementById(
            "modalRecuperacion"
        );


    if (modal) {

        modal.style.display =
            "none";

    }


    document.body.style.overflow =
        "";


    const boton =
        document.getElementById(
            "btnIniciarRecuperacion"
        );


    if (boton) {

        boton.style.display =
            "block";

        boton.textContent =
            "❤️ Comenzar reto de recuperación";

        boton.onclick =
            comenzarRetoRecuperacion;

    }


    if (temaActual) {

        cargarPregunta();

    }

}


/* ============================================================
   28. CREAR INTERFAZ DEL RETO FINAL
============================================================ */

function crearInterfazRetoFinal() {

    const modal =
        document.getElementById(
            "modalRetoFinal"
        );


    if (!modal) return;


    const contenido =
        modal.querySelector(
            ".modal-contenido"
        );


    if (!contenido) return;


    contenido.innerHTML = `

        <div class="modal-icon">🏆</div>

        <h2>¡Reto final de Italia!</h2>

        <p id="textoRetoFinal">
            Has completado las 14 categorías.
            Ahora demuestra todo lo que aprendiste.
        </p>

        <div class="pregunta-final">

            <span id="contadorFinal">
                1 / 30
            </span>

            <h3 id="preguntaFinal">
                Cargando pregunta...
            </h3>

            <div id="opcionesFinal"
                 class="opciones">
            </div>

            <p id="mensajeFinal"></p>

            <button id="botonFinalSiguiente"
                    disabled>
                Siguiente →
            </button>

        </div>

    `;


    const boton =
        document.getElementById(
            "botonFinalSiguiente"
        );


    if (boton) {

        boton.addEventListener(
            "click",
            siguientePreguntaFinal
        );

    }

}


/* ============================================================
   29. COMENZAR RETO FINAL
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


    retoFinalDesbloqueado = true;

    retoFinalActivo = true;

    indicePreguntaFinal = 0;

    puntosFinales = 0;

    respuestasFinales = 0;


    crearInterfazRetoFinal();


    const modal =
        document.getElementById(
            "modalRetoFinal"
        );


    if (modal) {

        modal.style.display =
            "flex";

    }


    document.body.style.overflow =
        "hidden";


    cargarPreguntaFinal();

}


/* ============================================================
   30. CARGAR PREGUNTA FINAL
============================================================ */

function cargarPreguntaFinal() {

    if (!retoFinalActivo) return;


    const pregunta =
        preguntasFinales[
            indicePreguntaFinal
        ];


    if (!pregunta) {

        finalizarRetoFinal();

        return;

    }


    const preguntaHTML =
        document.getElementById(
            "preguntaFinal"
        );


    const opcionesHTML =
        document.getElementById(
            "opcionesFinal"
        );


    const mensajeHTML =
        document.getElementById(
            "mensajeFinal"
        );


    const contador =
        document.getElementById(
            "contadorFinal"
        );


    const boton =
        document.getElementById(
            "botonFinalSiguiente"
        );


    if (preguntaHTML) {

        preguntaHTML.textContent =
            pregunta.pregunta;

    }


    if (opcionesHTML) {

        opcionesHTML.innerHTML = "";

    }


    if (mensajeHTML) {

        mensajeHTML.textContent = "";

    }


    if (contador) {

        contador.textContent =
            `${indicePreguntaFinal + 1} / ${preguntasFinales.length}`;

    }


    if (boton) {

        boton.disabled = true;

        boton.textContent =
            indicePreguntaFinal ===
            preguntasFinales.length - 1
                ? "Terminar reto"
                : "Siguiente →";

    }


    mezclar(
        pregunta.opciones
    ).forEach(opcion => {

        const botonOpcion =
            document.createElement("button");


        botonOpcion.type = "button";

        botonOpcion.className =
            "opcion";


        botonOpcion.textContent =
            opcion;


        botonOpcion.addEventListener(
            "click",
            () => {

                comprobarRespuestaFinal(
                    opcion
                );

            }
        );


        if (opcionesHTML) {

            opcionesHTML.appendChild(
                botonOpcion
            );

        }

    });

}


/* ============================================================
   31. COMPROBAR RESPUESTA FINAL
============================================================ */

function comprobarRespuestaFinal(
    respuesta
) {

    if (!retoFinalActivo) return;


    const pregunta =
        preguntasFinales[
            indicePreguntaFinal
        ];


    if (!pregunta) return;


    const botones =
        document.querySelectorAll(
            "#opcionesFinal .opcion"
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


        if (
            boton.textContent ===
            respuesta &&
            respuesta !== pregunta.correcta
        ) {

            boton.classList.add(
                "incorrecta"
            );

        }

    });


    const mensaje =
        document.getElementById(
            "mensajeFinal"
        );


    const boton =
        document.getElementById(
            "botonFinalSiguiente"
        );


    if (
        respuesta ===
        pregunta.correcta
    ) {

        puntosFinales += 10;

        respuestasFinales++;


        if (mensaje) {

            mensaje.textContent =
                "¡Correcto! 🎉";

            mensaje.className =
                "correcto";

        }

    } else {

        if (mensaje) {

            mensaje.textContent =
                `Incorrecto. La respuesta correcta es: ${pregunta.correcta}`;

            mensaje.className =
                "incorrecto";

        }

    }


    if (boton) {

        boton.disabled = false;

    }

}


/* ============================================================
   32. SIGUIENTE PREGUNTA FINAL
============================================================ */

function siguientePreguntaFinal() {

    if (!retoFinalActivo) return;


    indicePreguntaFinal++;


    if (
        indicePreguntaFinal >=
        preguntasFinales.length
    ) {

        finalizarRetoFinal();

        return;

    }


    cargarPreguntaFinal();

}


/* ============================================================
   33. FINALIZAR RETO FINAL
============================================================ */

function finalizarRetoFinal() {

    retoFinalActivo = false;


    const modal =
        document.getElementById(
            "modalRetoFinal"
        );


    if (modal) {

        modal.style.display =
            "none";

    }


    document.body.style.overflow =
        "";


    /* GUARDAR HISTORIAL */

    historial.rondas++;


    historial.puntosTotales +=
        puntos + puntosFinales;


    historial.correctasTotales +=
        respuestasCorrectas +
        respuestasFinales;


    guardarProgreso();


    /* MENSAJE FINAL */

    setTimeout(() => {

        alert(
            `🏆 ¡Reto final completado!\n\n` +
            `Puntos del reto final: ${puntosFinales}\n` +
            `Respuestas correctas: ${respuestasFinales} de ${preguntasFinales.length}\n\n` +
            `¡Terminaste toda la aventura por Italia! 🇮🇹`
        );


        iniciarNuevaRonda();

    }, 200);

}


/* ============================================================
   34. INICIAR NUEVA RONDA
============================================================ */

function iniciarNuevaRonda() {

    estadoPreguntas =
        crearEstadoInicial();


    puntos = 0;

    vidas = MAX_VIDAS;

    respuestasCorrectas = 0;

    retosCompletados = 0;


    juegoBloqueadoPorVidas =
        false;

    retoFinalDesbloqueado =
        false;

    retoFinalActivo =
        false;


    temaActual = null;

    indicePregunta = 0;


    guardarProgreso();

    actualizarInterfaz();


    /* Volver a gastronomía */

    const primerBoton =
        document.querySelector(
            '.categoria[data-categoria="Gastronomía"]'
        );


    document.querySelectorAll(
        ".categoria"
    ).forEach(btn => {

        btn.classList.remove(
            "active"
        );

    });


    if (primerBoton) {

        primerBoton.classList.add(
            "active"
        );

    }


    cargarTema(
        "gastronomia"
    );

}


/* ============================================================
   35. CERRAR RETO FINAL
============================================================ */

function cerrarRetoFinal() {

    const modal =
        document.getElementById(
            "modalRetoFinal"
        );


    if (modal) {

        modal.style.display =
            "none";

    }


    retoFinalActivo = false;

    document.body.style.overflow =
        "";

}


/* ============================================================
   36. REINICIAR PROGRESO
============================================================ */

function reiniciarProgreso() {

    const confirmar =
        confirm(
            "¿Seguro que quieres borrar todo tu progreso en Italia?"
        );


    if (!confirmar) return;


    localStorage.removeItem(
        CLAVE_GUARDADO
    );


    estadoPreguntas =
        crearEstadoInicial();


    temaActual = null;

    indicePregunta = 0;

    puntos = 0;

    vidas = MAX_VIDAS;

    respuestasCorrectas = 0;

    retosCompletados = 0;

    juegoBloqueadoPorVidas =
        false;

    retoFinalDesbloqueado =
        false;

    retoFinalActivo =
        false;

    indicePreguntaFinal = 0;

    puntosFinales = 0;

    respuestasFinales = 0;

    preguntasRecuperacion = [];

    indiceRecuperacion = 0;

    recuperacionActiva = false;

    aciertosRecuperacion = 0;


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
        "El progreso de Italia se reinició correctamente."
    );


    iniciarNuevaRonda();

}


/* ============================================================
   37. INICIALIZACIÓN
============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        cargarProgreso();


        actualizarInterfaz();


        /* BOTONES DE CATEGORÍA */

        document.querySelectorAll(
            ".categoria"
        ).forEach(boton => {

            boton.addEventListener(
                "click",
                function () {

                    const categoria =
                        this.dataset.categoria;


                    const clave =
                        convertirCategoriaAClave(
                            categoria
                        );


                    cambiarTema(
                        clave,
                        this
                    );

                }
            );

        });


        /* BOTÓN SIGUIENTE */

        const botonSiguiente =
            document.getElementById(
                "botonSiguiente"
            );


        if (botonSiguiente) {

            botonSiguiente.addEventListener(
                "click",
                siguientePregunta
            );

        }


        /* AUDIO */

        const btnEscuchar =
            document.getElementById(
                "btnEscuchar"
            );


        if (btnEscuchar) {

            btnEscuchar.addEventListener(
                "click",
                reproducirAudio
            );

        }


        /* GUARDAR PROGRESO */

        const guardar1 =
            document.getElementById(
                "guardarProgreso2"
            );


        if (guardar1) {

            guardar1.addEventListener(
                "click",
                function () {

                    guardarProgreso();

                    alert(
                        "💾 Tu progreso de Italia se guardó correctamente."
                    );

                }
            );

        }


        const guardar2 =
            document.getElementById(
                "guardarelprogreso"
            );


        if (guardar2) {

            guardar2.addEventListener(
                "click",
                function () {

                    guardarProgreso();

                    alert(
                        "💾 Tu progreso de Italia se guardó correctamente."
                    );

                }
            );

        }


        /* RECUPERACIÓN */

        const botonRecuperacion =
            document.getElementById(
                "btnIniciarRecuperacion"
            );


        if (botonRecuperacion) {

            botonRecuperacion.addEventListener(
                "click",
                comenzarRetoRecuperacion
            );

        }


        /* RETO FINAL */

        const botonFinal =
            document.getElementById(
                "btnRetoFinal"
            );


        if (botonFinal) {

            botonFinal.addEventListener(
                "click",
                comenzarRetoFinal
            );

        }


        /* CARGAR PRIMERA CATEGORÍA */

        const primerBoton =
            document.querySelector(
                '.categoria[data-categoria="Gastronomía"]'
            );


        if (primerBoton) {

            primerBoton.classList.add(
                "active"
            );

        }


        cargarTema(
            "gastronomia"
        );


        /* SI RECARGÓ SIN VIDAS */

        if (juegoBloqueadoPorVidas) {

            abrirModalRecuperacion();

        }

    }
);


/* ============================================================
   38. CONVERTIR NOMBRE DE CATEGORÍA A CLAVE
============================================================ */

function convertirCategoriaAClave(
    categoria
) {

    const mapa = {

        "Gastronomía":
            "gastronomia",

        "Música":
            "musica",

        "Tradiciones":
            "tradiciones",

        "Fiestas":
            "fiestas",

        "Vestimenta":
            "vestimenta",

        "Arte":
            "arte",

        "Monumentos":
            "monumentos",

        "Pueblos originarios":
            "pueblos-originarios",

        "Imperio romano":
            "imperio-romano",

        "Edad Media":
            "edad-media",

        "Unificación italiana":
            "unificacion-italiana",

        "Personajes históricos":
            "personajes-historicos",

        "Conflictos importantes":
            "conflictos-importantes",

        "Italia contemporánea":
            "italia-contemporanea"

    };


    return mapa[categoria];

}


/* ============================================================
   39. FUNCIONES DISPONIBLES PARA EL HTML
============================================================ */

window.cambiarTema =
    cambiarTema;

window.cargarTema =
    cargarTema;

window.siguientePregunta =
    siguientePregunta;

window.reproducirAudio =
    reproducirAudio;

window.comenzarRetoRecuperacion =
    comenzarRetoRecuperacion;

window.cerrarModalRecuperacion =
    cerrarModalRecuperacion;

window.comenzarRetoFinal =
    comenzarRetoFinal;

window.siguientePreguntaFinal =
    siguientePreguntaFinal;

window.cerrarRetoFinal =
    cerrarRetoFinal;

window.reiniciarProgreso =
    reiniciarProgreso;

window.iniciarNuevaRonda =
    iniciarNuevaRonda;


/* ============================================================
   FIN DE ITALIA.JS
============================================================ */