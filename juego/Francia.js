/* =========================================================
   HISTORIA SIN FRONTERAS - FRANCIA
   JAVASCRIPT COMPLETO Y CORREGIDO
   14 CATEGORÍAS - 5 PREGUNTAS CADA UNA
========================================================= */

const CLAVE = "historiaSinFronterasFrancia";

const PREGUNTAS_POR_CATEGORIA = 5;


/* =========================================================
   ESTADO DEL JUEGO
========================================================= */

let estado = {
    vidas: 5,
    puntos: 0,
    correctas: 0,
    categoriaActual: "civilizaciones",
    preguntaActual: 0,
    respondida: false,
    categoriasCompletadas: [],
    mejorRetoFinal: {
        correctas: 0,
        puntos: 0,
        porcentaje: 0
    }
};


/* =========================================================
   DATOS DE LAS CATEGORÍAS
========================================================= */

const categorias = {

    civilizaciones: {
        titulo: "Civilizaciones antiguas",
        icono: "🏛️",
        subtitulo: "Conoce los pueblos que habitaron el territorio de Francia antes de las grandes dinastías.",
        imagen: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80",
        alt: "París, Francia",
        lugares: "Galia · Lutetia · Provenza · Normandía · Alsacia",
        audio: "Francia posee una historia milenaria. Antes de la llegada de los romanos, gran parte de su territorio estaba habitado por pueblos galos de origen celta.",
        dato: "Los galos, de origen celta, habitaron gran parte del territorio de la actual Francia antes de la conquista romana.",
        preguntas: [
            [
                "¿Qué pueblo habitó gran parte del territorio de la actual Francia antes de la conquista romana?",
                ["Los galos", "Los vikingos", "Los incas", "Los egipcios"],
                0
            ],
            [
                "¿A qué cultura pertenecían principalmente los galos?",
                ["Celta", "China", "Griega", "Persa"],
                0
            ],
            [
                "¿Cómo llamaron los romanos al territorio que incluía gran parte de la actual Francia?",
                ["Galia", "Hispania", "Britania", "Germania"],
                0
            ],
            [
                "¿Qué ciudad romana se encontraba en el lugar donde actualmente está París?",
                ["Lutetia", "Roma", "Atenas", "Cartago"],
                0
            ],
            [
                "¿Qué pueblo conquistó la Galia en el siglo I a. C.?",
                ["Los romanos", "Los persas", "Los egipcios", "Los vikingos"],
                0
            ]
        ]
    },

    dinastias: {
        titulo: "Dinastías",
        icono: "👑",
        subtitulo: "Conoce las principales dinastías que gobernaron Francia.",
        imagen: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=1200&q=80",
        alt: "Palacio francés",
        lugares: "París · Reims · Versalles · Île-de-France",
        audio: "Francia fue gobernada durante siglos por distintas dinastías. Entre ellas estuvieron los Merovingios, Carolingios, Capetos, Valois y Borbones.",
        dato: "Entre las principales dinastías francesas estuvieron los Merovingios, Carolingios, Capetos, Valois y Borbones.",
        preguntas: [
            [
                "¿Cuál fue una de las primeras dinastías de los reyes francos?",
                ["Merovingia", "Borbónica", "Tudor", "Habsburgo"],
                0
            ],
            [
                "¿Qué famoso gobernante perteneció a la dinastía carolingia?",
                ["Carlomagno", "Luis XIV", "Napoleón", "Robespierre"],
                0
            ],
            [
                "¿Qué dinastía comenzó con Hugo Capeto?",
                ["Capetos", "Merovingios", "Tudor", "Romanov"],
                0
            ],
            [
                "¿Qué dinastía gobernó Francia antes de los Borbones?",
                ["Valois", "Tudor", "Habsburgo", "Plantagenet"],
                0
            ],
            [
                "¿Qué dinastía estuvo relacionada con Luis XIV?",
                ["Borbones", "Merovingios", "Valois", "Carolingios"],
                0
            ]
        ]
    },

    imperio: {
        titulo: "Francia y el Imperio",
        icono: "⚔️",
        subtitulo: "Descubre la expansión francesa y el Imperio napoleónico.",
        imagen: "https://images.unsplash.com/photo-1547981609-4b6bf67a8305?w=1200&q=80",
        alt: "Arquitectura histórica de Francia",
        lugares: "París · Waterloo · Europa · Arco del Triunfo",
        audio: "Durante comienzos del siglo XIX, Napoleón Bonaparte dirigió el Primer Imperio francés y extendió la influencia francesa por gran parte de Europa.",
        dato: "Napoleón Bonaparte llegó a controlar gran parte de Europa durante comienzos del siglo XIX.",
        preguntas: [
            [
                "¿Quién fue el principal líder del Primer Imperio francés?",
                ["Napoleón Bonaparte", "Luis XVI", "Carlomagno", "Clodoveo I"],
                0
            ],
            [
                "¿En qué año fue coronado emperador Napoleón Bonaparte?",
                ["1804", "1789", "1815", "1848"],
                0
            ],
            [
                "¿Dónde fue derrotado definitivamente Napoleón en 1815?",
                ["Waterloo", "Versalles", "París", "Lyon"],
                0
            ],
            [
                "¿Qué código legal impulsó Napoleón?",
                ["Código Napoleónico", "Código Romano", "Código Carolingio", "Código Feudal"],
                0
            ],
            [
                "¿Qué continente concentró gran parte de las campañas militares napoleónicas?",
                ["Europa", "América", "Oceanía", "Antártida"],
                0
            ]
        ]
    },

    protectorado: {
        titulo: "Protectorado",
        icono: "🛡️",
        subtitulo: "Conoce los protectorados establecidos por Francia durante su expansión colonial.",
        imagen: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1200&q=80",
        alt: "Paisaje del norte de África",
        lugares: "Marruecos · Túnez · Magreb · África del Norte",
        audio: "Durante su expansión colonial, Francia estableció protectorados en diferentes territorios, especialmente durante los siglos XIX y XX.",
        dato: "Francia estableció protectorados en diferentes territorios durante los siglos XIX y XX.",
        preguntas: [
            [
                "¿Qué era un protectorado?",
                [
                    "Un territorio bajo protección y control político de otro Estado",
                    "Una ciudad independiente",
                    "Un reino medieval",
                    "Una organización religiosa"
                ],
                0
            ],
            [
                "¿Cuál de estos territorios estuvo bajo protectorado francés?",
                ["Marruecos", "Japón", "Brasil", "Canadá"],
                0
            ],
            [
                "¿En qué continente estuvo ubicado el protectorado francés de Marruecos?",
                ["África", "Europa", "Asia", "Oceanía"],
                0
            ],
            [
                "¿Qué región del norte de África estuvo vinculada al dominio francés?",
                ["Magreb", "Escandinavia", "Balcánica", "Siberia"],
                0
            ],
            [
                "¿Qué proceso puso fin a muchos protectorados franceses?",
                ["La descolonización", "La Revolución Industrial", "La Edad Media", "El Renacimiento"],
                0
            ]
        ]
    },

    independencia: {
        titulo: "Independencia",
        icono: "📜",
        subtitulo: "Conoce los procesos de independencia y descolonización relacionados con Francia.",
        imagen: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1200&q=80",
        alt: "Bandera de Francia",
        lugares: "África · Asia · Vietnam · Senegal",
        audio: "Durante el siglo XX, varios territorios que habían estado bajo dominio francés desarrollaron procesos de independencia y descolonización.",
        dato: "Durante el siglo XX varios territorios bajo dominio francés alcanzaron su independencia.",
        preguntas: [
            [
                "¿Qué proceso permitió a muchos territorios dejar el dominio colonial europeo?",
                ["Descolonización", "Industrialización", "Feudalismo", "Renacimiento"],
                0
            ],
            [
                "¿En qué continente se produjeron varios procesos de independencia de colonias francesas?",
                ["África", "Europa", "Antártida", "Oceanía"],
                0
            ],
            [
                "¿Qué país obtuvo su independencia de Francia en 1954?",
                ["Vietnam", "Canadá", "Brasil", "Italia"],
                0
            ],
            [
                "¿Qué país africano fue colonia francesa y obtuvo su independencia en 1960?",
                ["Senegal", "España", "Japón", "Portugal"],
                0
            ],
            [
                "¿Qué ocurrió con muchos territorios franceses después de la Segunda Guerra Mundial?",
                [
                    "Avanzaron procesos de descolonización",
                    "Se convirtieron en provincias romanas",
                    "Fueron gobernados por Napoleón",
                    "Desaparecieron"
                ],
                0
            ]
        ]
    },

    monarquia: {
        titulo: "Monarquía",
        icono: "🏰",
        subtitulo: "Conoce las diferentes etapas de la monarquía francesa.",
        imagen: "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=1200&q=80",
        alt: "Palacio de Versalles",
        lugares: "Versalles · París · Reims · Île-de-France",
        audio: "La monarquía francesa tuvo una larga historia y diferentes dinastías. Uno de sus periodos más conocidos fue el de la monarquía absoluta.",
        dato: "La monarquía francesa tuvo una larga historia antes de la instauración de la república.",
        preguntas: [
            [
                "¿Qué sistema político gobernó Francia durante gran parte de su historia?",
                ["Monarquía", "Democracia moderna", "República socialista", "Imperio romano"],
                0
            ],
            [
                "¿Qué rey francés fue conocido como el Rey Sol?",
                ["Luis XIV", "Luis XVI", "Carlos X", "Enrique IV"],
                0
            ],
            [
                "¿Qué famoso palacio estuvo relacionado con la monarquía francesa?",
                ["Versalles", "Louvre", "Notre Dame", "Bastilla"],
                0
            ],
            [
                "¿Quién fue el último rey de Francia antes de la Primera República?",
                ["Luis XVI", "Luis XIV", "Carlos Magno", "Napoleón"],
                0
            ],
            [
                "¿Qué acontecimiento puso fin a la monarquía absoluta en el contexto de 1789?",
                ["Revolución Francesa", "Revolución Industrial", "Primera Guerra Mundial", "Tratado de Versalles"],
                0
            ]
        ]
    },

    actual: {
        titulo: "Francia actual",
        icono: "📍",
        subtitulo: "Conoce algunos aspectos de la Francia contemporánea.",
        imagen: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80",
        alt: "París actual",
        lugares: "París · Lyon · Marsella · Francia metropolitana",
        audio: "Actualmente, Francia es una república ubicada principalmente en Europa y forma parte de organizaciones europeas e internacionales.",
        dato: "Francia es una república y forma parte de importantes organizaciones europeas e internacionales.",
        preguntas: [
            [
                "¿Qué sistema político tiene Francia actualmente?",
                ["República", "Monarquía absoluta", "Imperio", "Teocracia"],
                0
            ],
            [
                "¿Cuál es la capital de Francia?",
                ["París", "Lyon", "Marsella", "Niza"],
                0
            ],
            [
                "¿A qué organización europea pertenece Francia?",
                ["Unión Europea", "ASEAN", "MERCOSUR", "Unión Africana"],
                0
            ],
            [
                "¿Cuál es la moneda utilizada actualmente en Francia?",
                ["Euro", "Franco francés", "Dólar", "Libra"],
                0
            ],
            [
                "¿En qué continente se encuentra la Francia metropolitana?",
                ["Europa", "África", "Asia", "América"],
                0
            ]
        ]
    },

    gastronomia: {
        titulo: "Gastronomía",
        icono: "🍽️",
        subtitulo: "Descubre algunos alimentos y preparaciones representativas de Francia.",
        imagen: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80",
        alt: "Panadería francesa",
        lugares: "París · Lyon · Provenza · Burdeos",
        audio: "La gastronomía francesa es conocida por sus panes, quesos, postres y preparaciones regionales. También tiene una importante tradición culinaria.",
        dato: "La gastronomía francesa es reconocida por sus panes, quesos, postres y preparaciones regionales.",
        preguntas: [
            [
                "¿Cuál de estos alimentos es tradicional de la gastronomía francesa?",
                ["Croissant", "Sushi", "Taco", "Ceviche"],
                0
            ],
            [
                "¿Qué producto es muy representativo de Francia?",
                ["Queso", "Arepa", "Tortilla de maíz", "Kimchi"],
                0
            ],
            [
                "¿Qué preparación francesa es conocida por llevar caracoles?",
                ["Escargots", "Paella", "Sushi", "Ramen"],
                0
            ],
            [
                "¿Qué postre francés tiene forma de torre hecha tradicionalmente con profiteroles?",
                ["Croquembouche", "Tiramisú", "Baklava", "Mochi"],
                0
            ],
            [
                "¿Qué bebida caliente es común en los desayunos franceses?",
                ["Café", "Mate", "Chai", "Chocolate azteca"],
                0
            ]
        ]
    },

    musica: {
        titulo: "Música",
        icono: "🎵",
        subtitulo: "Conoce la diversidad de la música francesa.",
        imagen: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=1200&q=80",
        alt: "Instrumentos musicales",
        lugares: "París · Lyon · Marsella · Toulouse",
        audio: "Francia posee una amplia tradición musical que incluye música clásica, chanson francesa, ópera y estilos contemporáneos.",
        dato: "La música francesa incluye tradición clásica, chanson y numerosos estilos contemporáneos.",
        preguntas: [
            [
                "¿Qué género tradicional está asociado con la canción francesa?",
                ["Chanson", "Reggae", "K-pop", "Samba"],
                0
            ],
            [
                "¿Qué compositor francés escribió Boléro?",
                ["Maurice Ravel", "Beethoven", "Mozart", "Bach"],
                0
            ],
            [
                "¿Qué instrumento pertenece a la familia de cuerda?",
                ["Violín", "Trompeta", "Flauta", "Trombón"],
                0
            ],
            [
                "¿Cuál es un elemento importante de la música francesa?",
                ["La chanson", "El flamenco", "El tango argentino", "La samba"],
                0
            ],
            [
                "¿Qué ciudad francesa es conocida por su importante actividad cultural y musical?",
                ["París", "Lyon", "Dijon", "Cannes"],
                0
            ]
        ]
    },

    tradiciones: {
        titulo: "Tradiciones",
        icono: "🎭",
        subtitulo: "Descubre costumbres y tradiciones de diferentes regiones francesas.",
        imagen: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&q=80",
        alt: "Tradiciones francesas",
        lugares: "Provenza · Bretaña · Alsacia · Burdeos",
        audio: "Las regiones francesas conservan diferentes costumbres, celebraciones, comidas y expresiones culturales que forman parte de su identidad.",
        dato: "Las distintas regiones francesas conservan numerosas costumbres culturales.",
        preguntas: [
            [
                "¿Qué tradición gastronómica francesa está relacionada con compartir pan?",
                ["La cultura de la baguette", "La ceremonia del té", "El mate", "La parrillada"],
                0
            ],
            [
                "¿Qué idioma se habla principalmente en Francia?",
                ["Francés", "Alemán", "Italiano", "Portugués"],
                0
            ],
            [
                "¿Qué región francesa es conocida por sus tradiciones relacionadas con el vino?",
                ["Burdeos", "Siberia", "Andalucía", "Baviera"],
                0
            ],
            [
                "¿Qué prenda tradicional se relaciona con algunas regiones francesas?",
                ["Trajes regionales", "Kimono", "Sari", "Hanbok"],
                0
            ],
            [
                "¿Qué elemento forma parte de muchas celebraciones tradicionales?",
                ["Música y comida", "Solo deportes", "Solo comercio", "Solo política"],
                0
            ]
        ]
    },

    fiestas: {
        titulo: "Fiestas",
        icono: "🎉",
        subtitulo: "Conoce algunas de las celebraciones más importantes de Francia.",
        imagen: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
        alt: "Celebración en Francia",
        lugares: "París · Niza · Marsella · Lyon",
        audio: "Francia celebra diferentes festividades nacionales y regionales. Una de las fechas más importantes es el 14 de julio.",
        dato: "El Día de la Bastilla se celebra cada 14 de julio y es una de las fechas nacionales más importantes de Francia.",
        preguntas: [
            [
                "¿Cuándo se celebra el Día de la Bastilla?",
                ["14 de julio", "1 de enero", "25 de diciembre", "11 de noviembre"],
                0
            ],
            [
                "¿Qué acontecimiento recuerda principalmente el Día de la Bastilla?",
                ["La Revolución Francesa", "La coronación de Napoleón", "La Segunda Guerra Mundial", "La creación de la Unión Europea"],
                0
            ],
            [
                "¿Qué celebración se realiza el 25 de diciembre?",
                ["Navidad", "Bastilla", "Carnaval de Niza", "Fiesta de la Música"],
                0
            ],
            [
                "¿Qué ciudad es famosa por su carnaval?",
                ["Niza", "Brest", "Lille", "Rouen"],
                0
            ],
            [
                "¿Qué fiesta francesa está relacionada con la música?",
                ["Fiesta de la Música", "Fiesta del Queso", "Fiesta del Imperio", "Fiesta de Napoleón"],
                0
            ]
        ]
    },

    vestimenta: {
        titulo: "Vestimenta",
        icono: "👕",
        subtitulo: "Conoce la relación de Francia con la moda y las vestimentas regionales.",
        imagen: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&q=80",
        alt: "Moda francesa",
        lugares: "París · Lyon · Provenza · Bretaña",
        audio: "Francia es reconocida internacionalmente por su tradición en la moda. París es uno de los principales centros de la alta costura.",
        dato: "París es considerada una de las principales capitales mundiales de la moda.",
        preguntas: [
            [
                "¿Por qué es conocida internacionalmente Francia en relación con la vestimenta?",
                ["Por su tradición de moda", "Por los kimonos", "Por los saris", "Por los ponchos"],
                0
            ],
            [
                "¿Cuál es una de las principales capitales de la moda?",
                ["París", "Roma únicamente", "Tokio únicamente", "Lima"],
                0
            ],
            [
                "¿Qué tipo de vestimenta representa algunas costumbres regionales?",
                ["Traje tradicional", "Uniforme espacial", "Kimono japonés", "Sari indio"],
                0
            ],
            [
                "¿Qué actividad está estrechamente relacionada con la moda francesa?",
                ["Diseño de moda", "Agricultura", "Minería", "Pesca"],
                0
            ],
            [
                "¿Qué ciudad francesa es especialmente reconocida por la alta costura?",
                ["París", "Marsella", "Nantes", "Toulouse"],
                0
            ]
        ]
    },

    arte: {
        titulo: "Arte y artesanía",
        icono: "🎨",
        subtitulo: "Explora la tradición artística francesa.",
        imagen: "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=1200&q=80",
        alt: "Arte francés",
        lugares: "París · Louvre · Montmartre · Provenza",
        audio: "Francia ha sido escenario de importantes movimientos artísticos y literarios. También conserva una amplia tradición artesanal.",
        dato: "Francia ha sido escenario de importantes movimientos artísticos y literarios.",
        preguntas: [
            [
                "¿Cuál de estos museos se encuentra en París?",
                ["Museo del Louvre", "Museo del Prado", "Museo Británico", "Museo del Hermitage"],
                0
            ],
            [
                "¿Qué famoso pintor francés fue representante del impresionismo?",
                ["Claude Monet", "Pablo Picasso", "Diego Rivera", "Van Gogh"],
                0
            ],
            [
                "¿Qué movimiento artístico se desarrolló con fuerza en Francia durante el siglo XIX?",
                ["Impresionismo", "Cubismo mexicano", "Renacimiento egipcio", "Arte maya"],
                0
            ],
            [
                "¿Qué escritor francés escribió Los miserables?",
                ["Victor Hugo", "Miguel de Cervantes", "William Shakespeare", "Homero"],
                0
            ],
            [
                "¿Qué disciplina artística trabaja principalmente con materiales para crear objetos?",
                ["Artesanía", "Astronomía", "Matemáticas", "Geografía"],
                0
            ]
        ]
    },

    monumentos: {
        titulo: "Monumentos",
        icono: "🏛️",
        subtitulo: "Descubre algunos de los monumentos más representativos de Francia.",
        imagen: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80",
        alt: "Torre Eiffel en París",
        lugares: "Torre Eiffel · Versalles · Louvre · Mont-Saint-Michel",
        audio: "Francia posee numerosos monumentos históricos. Entre los más conocidos están la Torre Eiffel, el Palacio de Versalles y el Mont-Saint-Michel.",
        dato: "La Torre Eiffel fue construida para la Exposición Universal de 1889.",
        preguntas: [
            [
                "¿Cuál es uno de los monumentos más famosos de Francia?",
                ["Torre Eiffel", "Coliseo", "Taj Mahal", "Big Ben"],
                0
            ],
            [
                "¿En qué ciudad se encuentra la Torre Eiffel?",
                ["París", "Lyon", "Niza", "Marsella"],
                0
            ],
            [
                "¿Qué antiguo palacio fue residencia de los reyes franceses?",
                ["Versalles", "Louvre", "Bastilla", "Mont-Saint-Michel"],
                0
            ],
            [
                "¿Qué famoso museo se encuentra en el antiguo palacio del Louvre?",
                ["Museo del Louvre", "Museo del Prado", "Museo Británico", "Museo Nacional de China"],
                0
            ],
            [
                "¿Qué monumento medieval se encuentra sobre una isla rocosa?",
                ["Mont-Saint-Michel", "Torre Eiffel", "Arco del Triunfo", "Panteón"],
                0
            ]
        ]
    }
};


/* =========================================================
   RETO FINAL
========================================================= */

const preguntasRetoFinal = [

    [
        "¿Cuál es la capital de Francia?",
        ["París", "Lyon", "Marsella", "Niza"],
        0
    ],

    [
        "¿Qué pueblo habitó gran parte de la antigua Galia?",
        ["Los galos", "Los incas", "Los egipcios", "Los aztecas"],
        0
    ],

    [
        "¿Quién fue el principal líder del Primer Imperio francés?",
        ["Napoleón Bonaparte", "Luis XVI", "Carlomagno", "Clodoveo"],
        0
    ],

    [
        "¿Qué dinastía estuvo relacionada con Luis XIV?",
        ["Borbones", "Valois", "Merovingios", "Carolingios"],
        0
    ],

    [
        "¿Qué acontecimiento comenzó en Francia en 1789?",
        ["Revolución Francesa", "Revolución Industrial", "Primera Guerra Mundial", "Renacimiento"],
        0
    ],

    [
        "¿Qué monumento se encuentra en París?",
        ["Torre Eiffel", "Coliseo", "Partenón", "Big Ben"],
        0
    ],

    [
        "¿Qué día se celebra la fiesta nacional francesa?",
        ["14 de julio", "20 de julio", "5 de mayo", "1 de noviembre"],
        0
    ],

    [
        "¿Cuál es la moneda actual de Francia?",
        ["Euro", "Franco", "Dólar", "Libra"],
        0
    ],

    [
        "¿Qué producto es representativo de la gastronomía francesa?",
        ["Queso", "Sushi", "Arepa", "Taco"],
        0
    ],

    [
        "¿Qué famoso palacio está relacionado con la monarquía francesa?",
        ["Versalles", "Buckingham", "El Escorial", "Alhambra"],
        0
    ]
];


/* =========================================================
   ELEMENTOS
========================================================= */

let headerIcon;
let headerTitle;
let headerSubtitle;

let points;
let lives;

let questionText;
let options;
let btnNext;
let feedback;
let qNumber;

let correctCount;
let btnGuardarProgreso;
let btnRetoFinal;


/* =========================================================
   OBTENER ELEMENTOS
========================================================= */

function obtenerElementos() {

    headerIcon = document.getElementById("headerIcon");
    headerTitle = document.getElementById("headerTitle");
    headerSubtitle = document.getElementById("headerSubtitle");

    points = document.getElementById("points");
    lives = document.getElementById("lives");

    questionText = document.getElementById("questionText");
    options = document.getElementById("options");
    btnNext = document.getElementById("btnNext");
    feedback = document.getElementById("feedback");
    qNumber = document.getElementById("qNumber");

    correctCount = document.getElementById("correctCount");
    btnGuardarProgreso = document.getElementById("btnGuardarProgreso");
    btnRetoFinal = document.getElementById("btnRetoFinal");
}


/* =========================================================
   CREAR CONTENIDO COMPLETO PARA CADA CATEGORÍA
========================================================= */

function crearContenidoCategoria(nombreCategoria) {

    const contenido = document.getElementById(nombreCategoria);

    if (!contenido) return;

    const categoria = categorias[nombreCategoria];

    if (!categoria) return;

    /*
       Civilizaciones ya tiene la estructura completa
       en el HTML. No la reemplazamos.
    */
    if (nombreCategoria === "civilizaciones") {

        actualizarContenidoCivilizaciones(categoria);

        return;
    }

    /*
       Las demás categorías reciben automáticamente
       la misma estructura.
    */

    contenido.innerHTML = `

        <div class="card welcome-card">

            <div class="welcome-icon">
                ${categoria.icono}
            </div>

            <div>
                <h3>${categoria.titulo}</h3>

                <p>
                    ${categoria.subtitulo}
                </p>
            </div>

        </div>


        <img
            class="banner"
            src="${categoria.imagen}"
            alt="${categoria.alt}"
        >


        <div class="audio-card">

            <button
                type="button"
                class="btn-audio"
                data-audio="${nombreCategoria}">
                🔊 Escuchar información
            </button>

            <p class="audio-text">
                ${categoria.audio}
            </p>

        </div>


        <div class="info-grid">

            <div class="info-card">

                <div class="label">
                    💡 Dato interesante
                </div>

                <p>
                    ${categoria.dato}
                </p>

            </div>


            <div class="info-card">

                <div class="label">
                    📍 Lugares relacionados
                </div>

                <p>
                    ${categoria.lugares}
                </p>

            </div>

        </div>


        <div class="reto-card">

            <div class="reto-header">

                <span class="left">
                    🎯 Mini reto
                </span>

                <span class="right">
                    Pregunta
                    <span class="contadorCategoria">
                        1
                    </span>
                    de 5
                </span>

            </div>


            <div class="quizAreaCategoria">

                <div
                    class="question-text preguntaCategoria">
                </div>


                <div
                    class="options opcionesCategoria">
                </div>


                <button
                    type="button"
                    class="btn btn-primary botonSiguienteCategoria"
                    disabled>
                    Siguiente
                </button>


                <div class="feedback feedbackCategoria">
                </div>

            </div>

        </div>
    `;


    configurarAudioCategoria(contenido);

    configurarQuizCategoria(
        nombreCategoria,
        contenido
    );
}


/* =========================================================
   ACTUALIZAR CIVILIZACIONES
========================================================= */

function actualizarContenidoCivilizaciones(categoria) {

    const contenido =
        document.getElementById("civilizaciones");

    if (!contenido) return;

    const banner =
        contenido.querySelector(".banner");

    if (banner) {
        banner.src = categoria.imagen;
        banner.alt = categoria.alt;
    }

    const datos =
        contenido.querySelectorAll(".info-card");

    if (datos.length >= 2) {

        datos[0].querySelector("p").textContent =
            categoria.dato;

        datos[1].querySelector("p").textContent =
            categoria.lugares;
    }

    /*
       Agregamos audio si no existe.
    */

    let audioCard =
        contenido.querySelector(".audio-card");

    if (!audioCard) {

        const infoGrid =
            contenido.querySelector(".info-grid");

        if (infoGrid) {

            audioCard =
                document.createElement("div");

            audioCard.className = "audio-card";

            audioCard.innerHTML = `

                <button
                    type="button"
                    class="btn-audio"
                    data-audio="civilizaciones">
                    🔊 Escuchar información
                </button>

                <p class="audio-text">
                    ${categoria.audio}
                </p>
            `;

            infoGrid.parentNode.insertBefore(
                audioCard,
                infoGrid
            );
        }
    }

    configurarAudioCategoria(contenido);
}


/* =========================================================
   AUDIO
========================================================= */

let vozActiva = null;

function configurarAudioCategoria(contenido) {

    const boton =
        contenido.querySelector(".btn-audio");

    if (!boton) return;

    boton.addEventListener("click", () => {

        const categoria =
            categorias[estado.categoriaActual];

        if (!categoria) return;

        if ("speechSynthesis" in window) {

            if (speechSynthesis.speaking) {

                speechSynthesis.cancel();

                boton.textContent =
                    "🔊 Escuchar información";

                vozActiva = null;

                return;
            }

            const voz =
                new SpeechSynthesisUtterance(
                    categoria.audio
                );

            voz.lang = "es-ES";
            voz.rate = 0.95;
            voz.pitch = 1;

            voz.onstart = () => {

                boton.textContent =
                    "⏹️ Detener audio";

                vozActiva = voz;
            };

            voz.onend = () => {

                boton.textContent =
                    "🔊 Escuchar información";

                vozActiva = null;
            };

            speechSynthesis.speak(voz);

        } else {

            alert(
                "Tu navegador no permite reproducir este audio."
            );
        }
    });
}


/* =========================================================
   CONFIGURAR QUIZ DE CADA CATEGORÍA
========================================================= */

function configurarQuizCategoria(
    nombreCategoria,
    contenido
) {

    const preguntaElemento =
        contenido.querySelector(
            ".preguntaCategoria"
        );

    const opcionesElemento =
        contenido.querySelector(
            ".opcionesCategoria"
        );

    const siguiente =
        contenido.querySelector(
            ".botonSiguienteCategoria"
        );

    const feedbackElemento =
        contenido.querySelector(
            ".feedbackCategoria"
        );

    const contador =
        contenido.querySelector(
            ".contadorCategoria"
        );


    function mostrarPreguntaLocal() {

        const categoria =
            categorias[nombreCategoria];

        const pregunta =
            categoria.preguntas[
                estado.preguntaActual
            ];

        if (!pregunta) return;

        estado.respondida = false;


        if (preguntaElemento) {

            preguntaElemento.textContent =
                pregunta[0];
        }


        if (contador) {

            contador.textContent =
                estado.preguntaActual + 1;
        }


        if (opcionesElemento) {

            opcionesElemento.innerHTML = "";

            pregunta[1].forEach(
                (respuesta, indice) => {

                    const boton =
                        document.createElement("button");

                    boton.type = "button";

                    boton.className =
                        "option";

                    boton.textContent =
                        respuesta;

                    boton.addEventListener(
                        "click",
                        () => {

                            comprobarRespuestaLocal(
                                nombreCategoria,
                                indice,
                                boton
                            );

                        }
                    );

                    opcionesElemento.appendChild(
                        boton
                    );
                }
            );
        }


        if (feedbackElemento) {

            feedbackElemento.textContent = "";

            feedbackElemento.className =
                "feedback feedbackCategoria";
        }


        if (siguiente) {
            siguiente.disabled = true;
        }
    }


    function comprobarRespuestaLocal(
        nombre,
        indice,
        botonSeleccionado
    ) {

        if (estado.respondida) return;

        if (estado.vidas <= 0) {

            mostrarRecuperacion();

            return;
        }

        const pregunta =
            categorias[nombre].preguntas[
                estado.preguntaActual
            ];

        const correcta = pregunta[2];

        estado.respondida = true;


        opcionesElemento
            .querySelectorAll(".option")
            .forEach(boton => {

                boton.disabled = true;

            });


        if (indice === correcta) {

            botonSeleccionado.classList.add(
                "correct"
            );

            estado.puntos += 10;
            estado.correctas++;


            if (feedbackElemento) {

                feedbackElemento.textContent =
                    "✓ ¡Respuesta correcta! +10 puntos";

                feedbackElemento.className =
                    "feedback feedbackCategoria correct";
            }

        } else {

            botonSeleccionado.classList.add(
                "incorrect"
            );


            const botones =
                opcionesElemento.querySelectorAll(
                    ".option"
                );

            if (botones[correcta]) {

                botones[correcta].classList.add(
                    "correct"
                );
            }


            estado.vidas--;


            if (feedbackElemento) {

                feedbackElemento.textContent =
                    "✗ Respuesta incorrecta. Has perdido una vida.";

                feedbackElemento.className =
                    "feedback feedbackCategoria incorrect";
            }


            if (estado.vidas <= 0) {

                actualizarPanel();

                guardarProgreso();

                bloquearJuegoCategoria(
                    contenido
                );

                return;
            }
        }


        actualizarPanel();

        guardarProgreso();


        if (siguiente) {
            siguiente.disabled = false;
        }
    }


    if (siguiente) {

        siguiente.addEventListener(
            "click",
            () => {

                if (!estado.respondida) return;


                estado.preguntaActual++;


                if (
                    estado.preguntaActual >=
                    categorias[nombreCategoria].preguntas.length
                ) {

                    completarCategoriaNueva(
                        nombreCategoria,
                        contenido
                    );

                    return;
                }


                mostrarPreguntaLocal();

            }
        );
    }


    mostrarPreguntaLocal();
}


/* =========================================================
   COMPLETAR CATEGORÍA NUEVA
========================================================= */

function completarCategoriaNueva(
    nombreCategoria,
    contenido
) {

    if (
        !estado.categoriasCompletadas.includes(
            nombreCategoria
        )
    ) {

        estado.categoriasCompletadas.push(
            nombreCategoria
        );
    }


    guardarProgreso();

    actualizarPanel();


    const pregunta =
        contenido.querySelector(
            ".preguntaCategoria"
        );

    const opciones =
        contenido.querySelector(
            ".opcionesCategoria"
        );

    const feedbackElemento =
        contenido.querySelector(
            ".feedbackCategoria"
        );

    const siguiente =
        contenido.querySelector(
            ".botonSiguienteCategoria"
        );


    if (pregunta) {

        pregunta.textContent =
            "🎉 ¡Categoría completada!";
    }


    if (opciones) {
        opciones.innerHTML = "";
    }


    if (feedbackElemento) {

        feedbackElemento.textContent =
            "Has respondido las 5 preguntas de esta categoría.";

        feedbackElemento.className =
            "feedback feedbackCategoria correct";
    }


    if (siguiente) {
        siguiente.disabled = true;
    }


    actualizarPanel();


    if (
        estado.categoriasCompletadas.length ===
        Object.keys(categorias).length
    ) {

        setTimeout(() => {

            mostrarRetoFinal();

        }, 700);
    }
}


/* =========================================================
   BLOQUEAR CATEGORÍA POR VIDAS
========================================================= */

function bloquearJuegoCategoria(contenido) {

    const pregunta =
        contenido.querySelector(
            ".preguntaCategoria"
        );

    const opciones =
        contenido.querySelector(
            ".opcionesCategoria"
        );

    const feedbackElemento =
        contenido.querySelector(
            ".feedbackCategoria"
        );

    const siguiente =
        contenido.querySelector(
            ".botonSiguienteCategoria"
        );


    if (pregunta) {

        pregunta.textContent =
            "❤️ Te has quedado sin vidas";
    }


    if (opciones) {
        opciones.innerHTML = "";
    }


    if (siguiente) {
        siguiente.disabled = true;
    }


    if (feedbackElemento) {

        feedbackElemento.innerHTML = `
            <div class="recuperacion-mensaje">

                <strong>
                    ❤️ Recuperación de vida
                </strong>

                <p>
                    Has perdido todas tus vidas.
                    Recupera una para continuar.
                </p>

                <button
                    type="button"
                    class="btn-recuperar"
                    id="recuperarVidaAutomatico">
                    Recuperar vida
                </button>

            </div>
        `;

        feedbackElemento.className =
            "feedback feedbackCategoria incorrect";


        const boton =
            document.getElementById(
                "recuperarVidaAutomatico"
            );

        if (boton) {

            boton.addEventListener(
                "click",
                recuperarVida
            );
        }
    }


    mostrarRecuperacion();
}


/* =========================================================
   CARGAR CATEGORÍA
========================================================= */

function cargarCategoria(nombreCategoria) {

    if (!categorias[nombreCategoria]) {

        console.log(
            "Categoría no encontrada:",
            nombreCategoria
        );

        return;
    }


    estado.categoriaActual =
        nombreCategoria;

    estado.preguntaActual = 0;
    estado.respondida = false;


    const categoria =
        categorias[nombreCategoria];


    document
        .querySelectorAll(".category-content")
        .forEach(elemento => {

            elemento.classList.remove(
                "active"
            );

        });


    const contenido =
        document.getElementById(
            nombreCategoria
        );


    if (contenido) {

        contenido.classList.add("active");

        crearContenidoCategoria(
            nombreCategoria
        );
    }


    document
        .querySelectorAll(".nav-item")
        .forEach(item => {

            item.classList.remove("active");

            if (
                item.dataset.category ===
                nombreCategoria
            ) {

                item.classList.add("active");
            }

        });


    if (headerIcon) {

        headerIcon.textContent =
            categoria.icono;
    }


    if (headerTitle) {

        headerTitle.textContent =
            categoria.titulo;
    }


    if (headerSubtitle) {

        headerSubtitle.textContent =
            categoria.subtitulo;
    }


    actualizarPanel();
}


/* =========================================================
   ACTUALIZAR PANEL
========================================================= */

function actualizarPanel() {

    if (points) {
        points.textContent =
            estado.puntos;
    }


    if (lives) {
        lives.textContent =
            estado.vidas;
    }


    if (correctCount) {
        correctCount.textContent =
            estado.correctas;
    }


    actualizarProgresoCategorias();
}


/* =========================================================
   PROGRESO
========================================================= */

function actualizarProgresoCategorias() {

    const total =
        Object.keys(categorias).length;

    const completadas =
        estado.categoriasCompletadas.length;

    const porcentaje =
        Math.round(
            (completadas / total) * 100
        );


    const percent =
        document.querySelector(".percent");

    if (percent) {

        percent.textContent =
            porcentaje + "%";
    }


    const mensaje =
        document.querySelector(
            ".completed-msg"
        );


    if (mensaje) {

        if (completadas === 0) {

            mensaje.textContent =
                "Comienza a explorar las categorías.";

        } else if (
            completadas === total
        ) {

            mensaje.textContent =
                "¡Has completado todas las categorías!";

        } else {

            mensaje.textContent =
                `Has completado ${completadas} de ${total} categorías.`;
        }
    }


    const circle =
        document.querySelector(
            ".circle-fg"
        );


    if (circle) {

        const radio = 54;

        const circunferencia =
            2 * Math.PI * radio;

        circle.style.strokeDasharray =
            circunferencia;

        circle.style.strokeDashoffset =
            circunferencia -
            (porcentaje / 100) *
            circunferencia;
    }
}


/* =========================================================
   GUARDAR PROGRESO
========================================================= */

function guardarProgreso() {

    localStorage.setItem(
        CLAVE,
        JSON.stringify(estado)
    );


    if (btnGuardarProgreso) {

        const textoOriginal =
            btnGuardarProgreso.textContent;

        btnGuardarProgreso.textContent =
            "✓ Progreso guardado";


        setTimeout(() => {

            btnGuardarProgreso.textContent =
                textoOriginal;

        }, 1800);
    }
}


/* =========================================================
   CARGAR PROGRESO
========================================================= */

function cargarProgreso() {

    const guardado =
        localStorage.getItem(CLAVE);

    if (!guardado) return;


    try {

        const datos =
            JSON.parse(guardado);


        estado = {

            ...estado,

            ...datos,

            categoriasCompletadas:
                Array.isArray(
                    datos.categoriasCompletadas
                )
                    ? datos.categoriasCompletadas
                    : []

        };

    } catch (error) {

        console.log(
            "No se pudo cargar el progreso."
        );
    }
}


/* =========================================================
   NAVEGACIÓN
========================================================= */

function configurarCategorias() {

    document
        .querySelectorAll(".nav-item")
        .forEach(item => {

            item.addEventListener(
                "click",
                () => {

                    const categoria =
                        item.dataset.category;


                    if (!categorias[categoria]) {

                        console.log(
                            "No existe información para:",
                            categoria
                        );

                        return;
                    }


                    if (estado.vidas <= 0) {

                        mostrarRecuperacion();

                        return;
                    }


                    cargarCategoria(
                        categoria
                    );
                }
            );

        });
}


/* =========================================================
   BOTÓN GUARDAR
========================================================= */

function configurarGuardar() {

    if (!btnGuardarProgreso) return;

    btnGuardarProgreso.addEventListener(
        "click",
        guardarProgreso
    );
}


/* =========================================================
   RECUPERACIÓN DE VIDA
========================================================= */

function mostrarRecuperacion() {

    const modal =
        document.getElementById(
            "modalRecuperacion"
        );


    if (modal) {

        modal.classList.add(
            "mostrar"
        );

        return;
    }


    const existente =
        document.getElementById(
            "recuperacionVidaAutomatico"
        );


    if (existente) return;
}


function recuperarVida() {

    estado.vidas = 1;

    estado.respondida = false;

    guardarProgreso();

    actualizarPanel();


    const modal =
        document.getElementById(
            "modalRecuperacion"
        );


    if (modal) {

        modal.classList.remove(
            "mostrar"
        );
    }


    cargarCategoria(
        estado.categoriaActual
    );
}


/* =========================================================
   RETO FINAL
========================================================= */

let preguntaFinalActual = 0;
let correctasFinal = 0;
let puntosFinal = 0;


function mostrarRetoFinal() {

    const modal =
        document.getElementById(
            "modalRetoFinal"
        );


    if (modal) {

        iniciarRetoFinal();

        return;
    }


    iniciarRetoFinalEnPantalla();
}


/* =========================================================
   INICIAR RETO FINAL
========================================================= */

function iniciarRetoFinal() {

    preguntaFinalActual = 0;
    correctasFinal = 0;
    puntosFinal = 0;


    const modal =
        document.getElementById(
            "modalRetoFinal"
        );


    if (!modal) {

        iniciarRetoFinalEnPantalla();

        return;
    }


    modal.innerHTML = `

        <div class="reto-final-estilo">

            <button
                type="button"
                class="cerrar-modal"
                id="cerrarRetoFinal">
                ×
            </button>


            <small>
                RETO FINAL
            </small>


            <h2>
                🏆 Demuestra lo que aprendiste
            </h2>


            <p id="contadorFinal">
                Pregunta 1 de ${preguntasRetoFinal.length}
            </p>


            <div
                id="preguntaFinal">
            </div>


            <div
                id="opcionesFinal">
            </div>


            <div
                id="feedbackFinal">
            </div>


            <button
                type="button"
                id="btnSiguienteFinal"
                disabled>
                Siguiente
            </button>

        </div>
    `;


    modal.classList.add(
        "mostrar"
    );


    document
        .getElementById(
            "cerrarRetoFinal"
        )
        .addEventListener(
            "click",
            () => {

                modal.classList.remove(
                    "mostrar"
                );

            }
        );


    document
        .getElementById(
            "btnSiguienteFinal"
        )
        .addEventListener(
            "click",
            siguientePreguntaFinal
        );


    mostrarPreguntaFinal();
}


/* =========================================================
   MOSTRAR PREGUNTA FINAL
========================================================= */

function mostrarPreguntaFinal() {

    const pregunta =
        preguntasRetoFinal[
            preguntaFinalActual
        ];


    if (!pregunta) return;


    const preguntaFinal =
        document.getElementById(
            "preguntaFinal"
        );

    const opcionesFinal =
        document.getElementById(
            "opcionesFinal"
        );

    const feedbackFinal =
        document.getElementById(
            "feedbackFinal"
        );

    const contadorFinal =
        document.getElementById(
            "contadorFinal"
        );

    const siguiente =
        document.getElementById(
            "btnSiguienteFinal"
        );


    if (contadorFinal) {

        contadorFinal.textContent =
            `Pregunta ${preguntaFinalActual + 1} de ${preguntasRetoFinal.length}`;
    }


    if (preguntaFinal) {

        preguntaFinal.textContent =
            pregunta[0];
    }


    if (opcionesFinal) {

        opcionesFinal.innerHTML = "";


        pregunta[1].forEach(
            (respuesta, indice) => {

                const boton =
                    document.createElement(
                        "button"
                    );

                boton.type = "button";

                boton.className =
                    "option";

                boton.textContent =
                    respuesta;


                boton.addEventListener(
                    "click",
                    () => {

                        comprobarRespuestaFinal(
                            indice,
                            boton
                        );

                    }
                );


                opcionesFinal.appendChild(
                    boton
                );

            }
        );
    }


    if (feedbackFinal) {

        feedbackFinal.textContent = "";

        feedbackFinal.className =
            "";
    }


    if (siguiente) {

        siguiente.disabled = true;
    }
}


/* =========================================================
   COMPROBAR RETO FINAL
========================================================= */

function comprobarRespuestaFinal(
    indice,
    boton
) {

    const pregunta =
        preguntasRetoFinal[
            preguntaFinalActual
        ];


    const correcta =
        pregunta[2];


    document
        .querySelectorAll(
            "#opcionesFinal .option"
        )
        .forEach(elemento => {

            elemento.disabled = true;

        });


    const feedbackFinal =
        document.getElementById(
            "feedbackFinal"
        );


    if (indice === correcta) {

        boton.classList.add(
            "correct"
        );

        correctasFinal++;

        puntosFinal += 10;


        if (feedbackFinal) {

            feedbackFinal.textContent =
                "✓ ¡Correcto! +10 puntos";

            feedbackFinal.className =
                "feedback correct";
        }

    } else {

        boton.classList.add(
            "incorrect"
        );


        const botones =
            document.querySelectorAll(
                "#opcionesFinal .option"
            );


        if (botones[correcta]) {

            botones[correcta].classList.add(
                "correct"
            );
        }


        if (feedbackFinal) {

            feedbackFinal.textContent =
                "✗ Respuesta incorrecta.";

            feedbackFinal.className =
                "feedback incorrect";
        }
    }


    const siguiente =
        document.getElementById(
            "btnSiguienteFinal"
        );


    if (siguiente) {

        siguiente.disabled = false;
    }
}


/* =========================================================
   SIGUIENTE RETO FINAL
========================================================= */

function siguientePreguntaFinal() {

    preguntaFinalActual++;


    if (
        preguntaFinalActual >=
        preguntasRetoFinal.length
    ) {

        finalizarRetoFinal();

        return;
    }


    mostrarPreguntaFinal();
}


/* =========================================================
   FINALIZAR RETO FINAL
========================================================= */

function finalizarRetoFinal() {

    const porcentaje =
        Math.round(
            (
                correctasFinal /
                preguntasRetoFinal.length
            ) * 100
        );


    estado.mejorRetoFinal = {

        correctas:
            correctasFinal,

        puntos:
            puntosFinal,

        porcentaje:
            porcentaje

    };


    estado.puntos +=
        puntosFinal;


    guardarProgreso();

    actualizarPanel();


    const modal =
        document.getElementById(
            "modalRetoFinal"
        );


    if (!modal) return;


    modal.innerHTML = `

        <div class="reto-final-estilo">

            <div
                style="font-size:50px;">
                🏆
            </div>


            <h2>
                ¡Reto final completado!
            </h2>


            <p>
                Has terminado el reto final de Francia.
            </p>


            <div style="margin:20px 0;">

                <strong>
                    ${correctasFinal}
                    / ${preguntasRetoFinal.length}
                    respuestas correctas
                </strong>


                <br><br>


                <strong>
                    ${porcentaje}% de aciertos
                </strong>


                <br><br>


                <strong>
                    +${puntosFinal} puntos
                </strong>

            </div>


            <button
                type="button"
                id="cerrarFinal">
                Continuar
            </button>

        </div>
    `;


    const cerrar =
        document.getElementById(
            "cerrarFinal"
        );


    if (cerrar) {

        cerrar.addEventListener(
            "click",
            () => {

                modal.classList.remove(
                    "mostrar"
                );

            }
        );
    }
}


/* =========================================================
   RETO FINAL SIN MODAL
========================================================= */

function iniciarRetoFinalEnPantalla() {

    const contenido =
        document.getElementById(
            estado.categoriaActual
        );


    if (!contenido) return;


    const quiz =
        contenido.querySelector(
            ".reto-card"
        );


    if (!quiz) return;


    quiz.innerHTML = `

        <div class="reto-header">

            <span class="left">
                🏆 Reto Final
            </span>

        </div>


        <div class="question-text">

            Has completado todas las categorías.

        </div>


        <p style="margin-top:15px;">

            ¡Excelente trabajo! Ahora puedes realizar
            el Reto Final de Francia.

        </p>

    `;
}


/* =========================================================
   BOTÓN RETO FINAL DEL HTML
========================================================= */

function configurarRetoFinal() {

    if (!btnRetoFinal) return;


    btnRetoFinal.addEventListener(
        "click",
        mostrarRetoFinal
    );
}


/* =========================================================
   INICIAR
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        obtenerElementos();

        cargarProgreso();

        configurarCategorias();

        configurarGuardar();

        configurarRetoFinal();


        if (
            !categorias[
                estado.categoriaActual
            ]
        ) {

            estado.categoriaActual =
                "civilizaciones";
        }


        actualizarPanel();


        cargarCategoria(
            estado.categoriaActual
        );

    }
);