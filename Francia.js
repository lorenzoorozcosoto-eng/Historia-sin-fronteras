/* ============================================================
   HISTORIA SIN FRONTERAS - FRANCIA
   14 CATEGORÍAS
   5 PREGUNTAS POR CATEGORÍA = 70
   RETO FINAL = 30 PREGUNTAS
============================================================ */

const CLAVE_GUARDADO = "historiaSinFronterasFrancia_v1";

const MAX_VIDAS = 5;


/* ============================================================
   TEMAS
============================================================ */

const temas = {

    gastronomia: {

        titulo: "Gastronomía",
        subtitulo: "Sabores y tradiciones de Francia",
        icono: "🍽️",
        imagen: "🥐",

        dato:
            "La gastronomía francesa es reconocida por su variedad regional y por preparaciones como el croissant, el queso, el pan y diferentes platos tradicionales.",

        regiones: [
            "París",
            "Lyon",
            "Provenza",
            "Normandía"
        ],

        preguntas: [

            {
                pregunta: "¿Cuál de estos alimentos es muy representativo de Francia?",
                opciones: ["Croissant", "Sushi", "Taco", "Ceviche"],
                correcta: "Croissant"
            },

            {
                pregunta: "¿Qué alimento tiene una gran importancia en la gastronomía francesa?",
                opciones: ["Queso", "Mango", "Yuca", "Coco"],
                correcta: "Queso"
            },

            {
                pregunta: "¿Qué producto es tradicional en muchas panaderías francesas?",
                opciones: ["Baguette", "Arepa", "Tortilla", "Naan"],
                correcta: "Baguette"
            },

            {
                pregunta: "¿Qué ciudad francesa es conocida por su importante tradición gastronómica?",
                opciones: ["Lyon", "Oslo", "Lisboa", "Berlín"],
                correcta: "Lyon"
            },

            {
                pregunta: "¿Por qué la gastronomía francesa presenta diferencias regionales?",
                opciones: [
                    "Por los productos y tradiciones de cada región",
                    "Porque todas las regiones tienen la misma comida",
                    "Porque Francia no tiene productos locales",
                    "Porque solo consume comida extranjera"
                ],
                correcta: "Por los productos y tradiciones de cada región"
            }

        ]
    },


    musica: {

        titulo: "Música",
        subtitulo: "La música francesa a través del tiempo",
        icono: "🎵",
        imagen: "🎼",

        dato:
            "Francia ha tenido una importante tradición musical y ha dado origen a numerosos compositores, intérpretes y estilos musicales.",

        regiones: [
            "París",
            "Lyon",
            "Marsella",
            "Nantes"
        ],

        preguntas: [

            {
                pregunta: "¿Cuál de estos compositores fue francés?",
                opciones: ["Claude Debussy", "Bach", "Mozart", "Beethoven"],
                correcta: "Claude Debussy"
            },

            {
                pregunta: "¿Qué tipo de música está relacionada con compositores como Debussy?",
                opciones: ["Música clásica", "Reguetón", "Salsa", "Country"],
                correcta: "Música clásica"
            },

            {
                pregunta: "¿Qué ciudad ha sido un importante centro musical francés?",
                opciones: ["París", "Oslo", "Berlín", "Roma"],
                correcta: "París"
            },

            {
                pregunta: "¿Cuál de estos es un instrumento musical?",
                opciones: ["Piano", "Baguette", "Croissant", "Torre"],
                correcta: "Piano"
            },

            {
                pregunta: "¿La música forma parte de la cultura francesa?",
                opciones: ["Sí", "No", "Solo históricamente", "Solo en París"],
                correcta: "Sí"
            }

        ]
    },


    tradiciones: {

        titulo: "Tradiciones",
        subtitulo: "Costumbres francesas",
        icono: "🎭",
        imagen: "🎭",

        dato:
            "Las tradiciones francesas están relacionadas con la gastronomía, las celebraciones, la familia, el arte y las costumbres regionales.",

        regiones: [
            "París",
            "Provenza",
            "Bretaña",
            "Normandía"
        ],

        preguntas: [

            {
                pregunta: "¿Qué producto forma parte de muchas tradiciones gastronómicas francesas?",
                opciones: ["Pan", "Coco", "Yuca", "Plátano"],
                correcta: "Pan"
            },

            {
                pregunta: "¿Qué valor cultural puede estar presente en las tradiciones regionales?",
                opciones: [
                    "Identidad cultural",
                    "Solo tecnología",
                    "Solo deporte",
                    "Solo comercio"
                ],
                correcta: "Identidad cultural"
            },

            {
                pregunta: "¿Las tradiciones francesas son iguales en todas las regiones?",
                opciones: [
                    "No, existen diferencias regionales",
                    "Sí, completamente",
                    "Solo en verano",
                    "Solo en París"
                ],
                correcta: "No, existen diferencias regionales"
            },

            {
                pregunta: "¿Cuál es una región francesa?",
                opciones: ["Provenza", "Baviera", "Cataluña", "Lombardía"],
                correcta: "Provenza"
            },

            {
                pregunta: "¿Qué elementos pueden formar parte de una tradición?",
                opciones: [
                    "Comida, música y celebraciones",
                    "Solo videojuegos",
                    "Solo tecnología",
                    "Solo deportes"
                ],
                correcta: "Comida, música y celebraciones"
            }

        ]
    },


    fiestas: {

        titulo: "Fiestas",
        subtitulo: "Celebraciones francesas",
        icono: "🎉",
        imagen: "🎊",

        dato:
            "Francia celebra numerosas festividades nacionales y regionales relacionadas con su historia y cultura.",

        regiones: [
            "París",
            "Niza",
            "Marsella",
            "Lyon"
        ],

        preguntas: [

            {
                pregunta: "¿Qué día se celebra la Fiesta Nacional de Francia?",
                opciones: [
                    "14 de julio",
                    "3 de octubre",
                    "4 de julio",
                    "1 de mayo"
                ],
                correcta: "14 de julio"
            },

            {
                pregunta: "¿Qué acontecimiento histórico está relacionado con el 14 de julio?",
                opciones: [
                    "La toma de la Bastilla",
                    "La caída del Muro de Berlín",
                    "La reunificación alemana",
                    "La llegada a la Luna"
                ],
                correcta: "La toma de la Bastilla"
            },

            {
                pregunta: "¿En qué ciudad se realizan grandes celebraciones del 14 de julio?",
                opciones: ["París", "Berlín", "Roma", "Madrid"],
                correcta: "París"
            },

            {
                pregunta: "¿Qué elemento suele aparecer en las celebraciones nacionales?",
                opciones: ["Fuegos artificiales", "Solo silencio", "Solo exámenes", "Solo deportes"],
                correcta: "Fuegos artificiales"
            },

            {
                pregunta: "¿El 14 de julio es una fecha importante para Francia?",
                opciones: ["Sí", "No", "Solo históricamente", "Solo en París"],
                correcta: "Sí"
            }

        ]
    },


    vestimenta: {

        titulo: "Vestimenta",
        subtitulo: "Moda e identidad francesa",
        icono: "👗",
        imagen: "👒",

        dato:
            "Francia, especialmente París, ha tenido una gran influencia internacional en la moda y el diseño.",

        regiones: [
            "París",
            "Provenza",
            "Bretaña",
            "Alsacia"
        ],

        preguntas: [

            {
                pregunta: "¿Qué ciudad francesa es famosa mundialmente por la moda?",
                opciones: ["París", "Berlín", "Roma", "Madrid"],
                correcta: "París"
            },

            {
                pregunta: "¿Qué actividad está relacionada con la moda?",
                opciones: ["Diseño", "Astronomía", "Minería", "Agricultura"],
                correcta: "Diseño"
            },

            {
                pregunta: "¿Qué representa la vestimenta tradicional?",
                opciones: [
                    "Identidad cultural",
                    "Solo tecnología",
                    "Solo economía",
                    "Solo política"
                ],
                correcta: "Identidad cultural"
            },

            {
                pregunta: "¿Francia ha tenido influencia internacional en la moda?",
                opciones: ["Sí", "No", "Solo en el siglo XVIII", "Solo en una región"],
                correcta: "Sí"
            },

            {
                pregunta: "¿Qué ciudad es considerada un importante centro mundial de la moda?",
                opciones: ["París", "Marsella", "Lille", "Nantes"],
                correcta: "París"
            }

        ]
    },


    arte: {

        titulo: "Arte y literatura",
        subtitulo: "Grandes obras y artistas franceses",
        icono: "🎨",
        imagen: "🖼️",

        dato:
            "Francia ha tenido una enorme influencia en el arte y la literatura europea. Entre sus figuras destacan Victor Hugo, Claude Monet y otros grandes artistas.",

        regiones: [
            "París",
            "Giverny",
            "Lyon",
            "Marsella"
        ],

        preguntas: [

            {
                pregunta: "¿Quién escribió Los Miserables?",
                opciones: ["Victor Hugo", "Molière", "Voltaire", "Descartes"],
                correcta: "Victor Hugo"
            },

            {
                pregunta: "¿Qué artista francés estuvo relacionado con el impresionismo?",
                opciones: ["Claude Monet", "Picasso", "Van Gogh", "Dalí"],
                correcta: "Claude Monet"
            },

            {
                pregunta: "¿Qué movimiento artístico estuvo relacionado con Monet?",
                opciones: ["Impresionismo", "Cubismo", "Surrealismo", "Pop art"],
                correcta: "Impresionismo"
            },

            {
                pregunta: "¿En qué área destacó Victor Hugo?",
                opciones: ["Literatura", "Astronomía", "Medicina", "Física"],
                correcta: "Literatura"
            },

            {
                pregunta: "¿Qué puede transmitir una obra de arte?",
                opciones: [
                    "Ideas y emociones",
                    "Solo números",
                    "Solo fechas",
                    "Solo leyes"
                ],
                correcta: "Ideas y emociones"
            }

        ]
    },


    monumentos: {

        titulo: "Monumentos",
        subtitulo: "Lugares que cuentan la historia de Francia",
        icono: "🏛️",
        imagen: "🗼",

        dato:
            "Francia posee numerosos monumentos históricos y culturales, entre ellos la Torre Eiffel, el Arco del Triunfo y el Palacio de Versalles.",

        regiones: [
            "París",
            "Versalles",
            "Normandía",
            "Lyon"
        ],

        preguntas: [

            {
                pregunta: "¿En qué ciudad se encuentra la Torre Eiffel?",
                opciones: ["París", "Lyon", "Marsella", "Niza"],
                correcta: "París"
            },

            {
                pregunta: "¿Qué monumento es uno de los símbolos más conocidos de Francia?",
                opciones: ["Torre Eiffel", "Big Ben", "Coliseo", "Puerta de Brandeburgo"],
                correcta: "Torre Eiffel"
            },

            {
                pregunta: "¿Dónde se encuentra el Palacio de Versalles?",
                opciones: ["Versalles", "Roma", "Madrid", "Berlín"],
                correcta: "Versalles"
            },

            {
                pregunta: "¿Qué monumento se encuentra en París?",
                opciones: ["Arco del Triunfo", "Coliseo", "Big Ben", "Sagrada Familia"],
                correcta: "Arco del Triunfo"
            },

            {
                pregunta: "¿Qué importancia tienen los monumentos históricos?",
                opciones: [
                    "Conservan parte de la memoria histórica",
                    "Solo sirven como decoración",
                    "No tienen importancia cultural",
                    "Solo son edificios modernos"
                ],
                correcta: "Conservan parte de la memoria histórica"
            }

        ]
    },


    monarquia: {

        titulo: "Monarquía francesa",
        subtitulo: "Francia antes de la Revolución",
        icono: "👑",
        imagen: "👑",

        dato:
            "Francia tuvo durante siglos una monarquía. Antes de la Revolución Francesa, el rey tenía un papel central en el gobierno del país.",

        regiones: [
            "París",
            "Versalles",
            "Francia"
        ],

        preguntas: [

            {
                pregunta: "¿Qué sistema político tuvo Francia antes de la Revolución Francesa?",
                opciones: ["Monarquía", "República moderna", "Federación", "Dictadura militar"],
                correcta: "Monarquía"
            },

            {
                pregunta: "¿Qué rey francés es conocido por el apodo de Rey Sol?",
                opciones: ["Luis XIV", "Luis XVI", "Napoleón", "Carlos X"],
                correcta: "Luis XIV"
            },

            {
                pregunta: "¿Qué famoso palacio estuvo relacionado con la monarquía francesa?",
                opciones: ["Versalles", "Buckingham", "Praga", "Sanssouci"],
                correcta: "Versalles"
            },

            {
                pregunta: "¿Qué rey estaba en el poder cuando comenzó la Revolución Francesa?",
                opciones: ["Luis XVI", "Luis XIV", "Carlos Magno", "Napoleón"],
                correcta: "Luis XVI"
            },

            {
                pregunta: "¿Qué ocurrió con la monarquía durante la Revolución Francesa?",
                opciones: [
                    "Fue abolida",
                    "Se fortaleció",
                    "Se trasladó a Italia",
                    "Se convirtió en imperio inmediatamente"
                ],
                correcta: "Fue abolida"
            }

        ]
    },


    revolucion: {

        titulo: "Revolución Francesa",
        subtitulo: "Un acontecimiento que transformó Francia",
        icono: "⚔️",
        imagen: "🇫🇷",

        dato:
            "La Revolución Francesa comenzó en 1789 y produjo grandes cambios políticos y sociales en Francia.",

        regiones: [
            "París",
            "Versalles",
            "Francia"
        ],

        preguntas: [

            {
                pregunta: "¿En qué año comenzó la Revolución Francesa?",
                opciones: ["1789", "1776", "1815", "1914"],
                correcta: "1789"
            },

            {
                pregunta: "¿Qué acontecimiento ocurrió el 14 de julio de 1789?",
                opciones: [
                    "La toma de la Bastilla",
                    "La coronación de Napoleón",
                    "La caída del Muro de Berlín",
                    "La firma del Tratado de Versalles"
                ],
                correcta: "La toma de la Bastilla"
            },

            {
                pregunta: "¿Qué lema se relaciona con la Revolución Francesa?",
                opciones: [
                    "Libertad, igualdad y fraternidad",
                    "Paz, tierra y pan",
                    "Orden y progreso",
                    "Unidad y fuerza"
                ],
                correcta: "Libertad, igualdad y fraternidad"
            },

            {
                pregunta: "¿Qué grupo social fue especialmente importante en los cambios revolucionarios?",
                opciones: [
                    "La burguesía",
                    "Los astronautas",
                    "Los navegantes",
                    "Los emperadores extranjeros"
                ],
                correcta: "La burguesía"
            },

            {
                pregunta: "¿Qué sistema fue cuestionado durante la Revolución Francesa?",
                opciones: ["La monarquía", "La democracia moderna", "La Unión Europea", "La ONU"],
                correcta: "La monarquía"
            }

        ]
    },


    napoleon: {

        titulo: "Napoleón Bonaparte",
        subtitulo: "Francia y el Imperio napoleónico",
        icono: "🦅",
        imagen: "👑",

        dato:
            "Napoleón Bonaparte fue un militar y gobernante francés que llegó a convertirse en emperador y tuvo una gran influencia en Europa.",

        regiones: [
            "Córcega",
            "París",
            "Francia",
            "Europa"
        ],

        preguntas: [

            {
                pregunta: "¿Quién fue Napoleón Bonaparte?",
                opciones: [
                    "Militar y gobernante francés",
                    "Pintor español",
                    "Rey inglés",
                    "Científico alemán"
                ],
                correcta: "Militar y gobernante francés"
            },

            {
                pregunta: "¿Qué título asumió Napoleón en 1804?",
                opciones: ["Emperador", "Presidente", "Papa", "Rey de Inglaterra"],
                correcta: "Emperador"
            },

            {
                pregunta: "¿Qué código legal está relacionado con Napoleón?",
                opciones: [
                    "Código Napoleónico",
                    "Código Romano",
                    "Código Industrial",
                    "Código Atlántico"
                ],
                correcta: "Código Napoleónico"
            },

            {
                pregunta: "¿En qué continente tuvo gran parte de sus campañas militares?",
                opciones: ["Europa", "Oceanía", "América del Sur", "Antártida"],
                correcta: "Europa"
            },

            {
                pregunta: "¿En qué isla murió Napoleón?",
                opciones: ["Santa Elena", "Córcega", "Sicilia", "Creta"],
                correcta: "Santa Elena"
            }

        ]
    },


    "primera-guerra": {

        titulo: "Primera Guerra Mundial",
        subtitulo: "Francia durante la guerra de 1914-1918",
        icono: "⚔️",
        imagen: "🌍",

        dato:
            "La Primera Guerra Mundial se desarrolló entre 1914 y 1918. Francia fue uno de los principales países aliados.",

        regiones: [
            "Francia",
            "Europa",
            "Verdún",
            "París"
        ],

        preguntas: [

            {
                pregunta: "¿En qué año comenzó la Primera Guerra Mundial?",
                opciones: ["1914", "1918", "1939", "1945"],
                correcta: "1914"
            },

            {
                pregunta: "¿En qué año terminó la Primera Guerra Mundial?",
                opciones: ["1918", "1914", "1933", "1945"],
                correcta: "1918"
            },

            {
                pregunta: "¿Francia participó en la Primera Guerra Mundial?",
                opciones: ["Sí", "No", "Solo al final", "Solo en 1918"],
                correcta: "Sí"
            },

            {
                pregunta: "¿Qué batalla fue una de las más importantes en territorio francés?",
                opciones: ["Verdún", "Waterloo", "Stalingrado", "Hastings"],
                correcta: "Verdún"
            },

            {
                pregunta: "¿En qué continente ocurrió gran parte del conflicto?",
                opciones: ["Europa", "Asia", "Oceanía", "América"],
                correcta: "Europa"
            }

        ]
    },


    "segunda-guerra": {

        titulo: "Segunda Guerra Mundial",
        subtitulo: "Francia entre 1939 y 1945",
        icono: "🕊️",
        imagen: "🌍",

        dato:
            "Durante la Segunda Guerra Mundial Francia fue ocupada por Alemania y posteriormente liberada por las fuerzas aliadas y la Resistencia francesa.",

        regiones: [
            "Francia",
            "París",
            "Normandía",
            "Europa"
        ],

        preguntas: [

            {
                pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?",
                opciones: ["1939", "1914", "1945", "1961"],
                correcta: "1939"
            },

            {
                pregunta: "¿En qué año terminó la Segunda Guerra Mundial?",
                opciones: ["1945", "1939", "1949", "1989"],
                correcta: "1945"
            },

            {
                pregunta: "¿Qué país ocupó gran parte de Francia durante la guerra?",
                opciones: ["Alemania", "Italia", "España", "Portugal"],
                correcta: "Alemania"
            },

            {
                pregunta: "¿Qué desembarco de 1944 fue importante para la liberación de Francia?",
                opciones: ["Normandía", "Sicilia", "Dunkerque", "Calais"],
                correcta: "Normandía"
            },

            {
                pregunta: "¿Qué movimiento participó en la lucha contra la ocupación?",
                opciones: ["La Resistencia francesa", "La Liga Hanseática", "La OTAN", "La ONU"],
                correcta: "La Resistencia francesa"
            }

        ]
    },


    "francia-posguerra": {

        titulo: "Francia después de la guerra",
        subtitulo: "Reconstrucción y cambios políticos",
        icono: "🌍",
        imagen: "🇫🇷",

        dato:
            "Después de la Segunda Guerra Mundial, Francia tuvo que reconstruirse y participó en el proceso de cooperación e integración europea.",

        regiones: [
            "París",
            "Francia",
            "Europa"
        ],

        preguntas: [

            {
                pregunta: "¿Qué necesitó Francia después de la Segunda Guerra Mundial?",
                opciones: [
                    "Reconstrucción",
                    "Nueva colonización europea",
                    "Construcción de un imperio romano",
                    "Aislamiento total"
                ],
                correcta: "Reconstrucción"
            },

            {
                pregunta: "¿Francia participó en la integración europea?",
                opciones: ["Sí", "No", "Solo antes de 1900", "Solo durante la guerra"],
                correcta: "Sí"
            },

            {
                pregunta: "¿Qué organización nació en 1957 y estuvo relacionada con la integración europea?",
                opciones: [
                    "Comunidad Económica Europea",
                    "ONU",
                    "OTAN",
                    "UNESCO"
                ],
                correcta: "Comunidad Económica Europea"
            },

            {
                pregunta: "¿Qué país es vecino de Francia?",
                opciones: ["España", "Japón", "Brasil", "Australia"],
                correcta: "España"
            },

            {
                pregunta: "¿Qué proceso ayudó a aumentar la cooperación entre países europeos?",
                opciones: [
                    "Integración europea",
                    "Aislamiento",
                    "Colonización",
                    "Guerra permanente"
                ],
                correcta: "Integración europea"
            }

        ]
    },


    personajes: {

        titulo: "Personajes históricos",
        subtitulo: "Personas que dejaron huella en Francia",
        icono: "👤",
        imagen: "👥",

        dato:
            "Francia ha tenido numerosos personajes importantes en la política, la literatura, el arte y la historia.",

        regiones: [
            "París",
            "Francia",
            "Córcega",
            "Normandía"
        ],

        preguntas: [

            {
                pregunta: "¿Quién fue Napoleón Bonaparte?",
                opciones: [
                    "Militar y emperador francés",
                    "Pintor",
                    "Astronauta",
                    "Rey inglés"
                ],
                correcta: "Militar y emperador francés"
            },

            {
                pregunta: "¿Quién escribió Los Miserables?",
                opciones: ["Victor Hugo", "Molière", "Monet", "Napoleón"],
                correcta: "Victor Hugo"
            },

            {
                pregunta: "¿Quién fue Juana de Arco?",
                opciones: [
                    "Una figura histórica francesa",
                    "Una reina española",
                    "Una científica alemana",
                    "Una escritora italiana"
                ],
                correcta: "Una figura histórica francesa"
            },

            {
                pregunta: "¿Quién fue Claude Monet?",
                opciones: [
                    "Pintor",
                    "Militar",
                    "Rey",
                    "Filósofo"
                ],
                correcta: "Pintor"
            },

            {
                pregunta: "¿Qué personaje estuvo relacionado con la Revolución Francesa?",
                opciones: [
                    "Luis XVI",
                    "Bach",
                    "Einstein",
                    "Shakespeare"
                ],
                correcta: "Luis XVI"
            }

        ]
    }

};


/* ============================================================
   RETO FINAL - 30 PREGUNTAS
============================================================ */

const preguntasFinales = [

    {
        pregunta: "¿Cuál es la capital de Francia?",
        opciones: ["París", "Lyon", "Marsella", "Niza"],
        correcta: "París"
    },

    {
        pregunta: "¿En qué año comenzó la Revolución Francesa?",
        opciones: ["1789", "1815", "1914", "1945"],
        correcta: "1789"
    },

    {
        pregunta: "¿Qué monumento es símbolo de París?",
        opciones: ["Torre Eiffel", "Coliseo", "Big Ben", "Puerta de Brandeburgo"],
        correcta: "Torre Eiffel"
    },

    {
        pregunta: "¿Qué día se celebra la Fiesta Nacional francesa?",
        opciones: ["14 de julio", "3 de octubre", "4 de julio", "1 de enero"],
        correcta: "14 de julio"
    },

    {
        pregunta: "¿Qué ocurrió el 14 de julio de 1789?",
        opciones: ["Toma de la Bastilla", "Caída del Muro", "Reunificación", "Coronación de Napoleón"],
        correcta: "Toma de la Bastilla"
    },

    {
        pregunta: "¿Quién escribió Los Miserables?",
        opciones: ["Victor Hugo", "Monet", "Napoleón", "Luis XIV"],
        correcta: "Victor Hugo"
    },

    {
        pregunta: "¿Qué pintor francés estuvo relacionado con el impresionismo?",
        opciones: ["Claude Monet", "Picasso", "Dalí", "Van Gogh"],
        correcta: "Claude Monet"
    },

    {
        pregunta: "¿Quién fue Napoleón Bonaparte?",
        opciones: [
            "Militar y gobernante francés",
            "Pintor",
            "Rey inglés",
            "Científico"
        ],
        correcta: "Militar y gobernante francés"
    },

    {
        pregunta: "¿En qué año se proclamó Napoleón emperador?",
        opciones: ["1804", "1789", "1815", "1871"],
        correcta: "1804"
    },

    {
        pregunta: "¿Dónde murió Napoleón?",
        opciones: ["Santa Elena", "Córcega", "París", "Roma"],
        correcta: "Santa Elena"
    },

    {
        pregunta: "¿Cuándo comenzó la Primera Guerra Mundial?",
        opciones: ["1914", "1918", "1939", "1945"],
        correcta: "1914"
    },

    {
        pregunta: "¿Cuándo terminó la Primera Guerra Mundial?",
        opciones: ["1918", "1914", "1939", "1945"],
        correcta: "1918"
    },

    {
        pregunta: "¿Cuándo comenzó la Segunda Guerra Mundial?",
        opciones: ["1939", "1914", "1945", "1961"],
        correcta: "1939"
    },

    {
        pregunta: "¿Cuándo terminó la Segunda Guerra Mundial?",
        opciones: ["1945", "1939", "1918", "1989"],
        correcta: "1945"
    },

    {
        pregunta: "¿Qué país ocupó Francia durante gran parte de la Segunda Guerra Mundial?",
        opciones: ["Alemania", "España", "Italia", "Portugal"],
        correcta: "Alemania"
    },

    {
        pregunta: "¿Qué desembarco fue importante para la liberación de Francia?",
        opciones: ["Normandía", "Sicilia", "Calais", "Brest"],
        correcta: "Normandía"
    },

    {
        pregunta: "¿Qué sistema político existía antes de la Revolución Francesa?",
        opciones: ["Monarquía", "República moderna", "Federación", "Democracia directa"],
        correcta: "Monarquía"
    },

    {
        pregunta: "¿Qué rey fue conocido como el Rey Sol?",
        opciones: ["Luis XIV", "Luis XVI", "Carlos X", "Napoleón"],
        correcta: "Luis XIV"
    },

    {
        pregunta: "¿Qué rey gobernaba cuando comenzó la Revolución Francesa?",
        opciones: ["Luis XVI", "Luis XIV", "Carlos Magno", "Napoleón"],
        correcta: "Luis XVI"
    },

    {
        pregunta: "¿Cuál es uno de los lemas de la Revolución Francesa?",
        opciones: [
            "Libertad, igualdad y fraternidad",
            "Orden y progreso",
            "Paz y tierra",
            "Unidad y fuerza"
        ],
        correcta: "Libertad, igualdad y fraternidad"
    },

    {
        pregunta: "¿Qué alimento es muy representativo de Francia?",
        opciones: ["Baguette", "Sushi", "Arepa", "Taco"],
        correcta: "Baguette"
    },

    {
        pregunta: "¿Qué alimento es muy conocido en la pastelería francesa?",
        opciones: ["Croissant", "Arepa", "Empanada", "Tamal"],
        correcta: "Croissant"
    },

    {
        pregunta: "¿Qué ciudad es famosa por su influencia en la moda?",
        opciones: ["París", "Marsella", "Lyon", "Nantes"],
        correcta: "París"
    },

    {
        pregunta: "¿Qué palacio está relacionado con la monarquía francesa?",
        opciones: ["Versalles", "Buckingham", "El Escorial", "Praga"],
        correcta: "Versalles"
    },

    {
        pregunta: "¿Qué ciudad alberga la Torre Eiffel?",
        opciones: ["París", "Lyon", "Niza", "Marsella"],
        correcta: "París"
    },

    {
        pregunta: "¿Qué artista fue uno de los representantes del impresionismo?",
        opciones: ["Claude Monet", "Miguel Ángel", "Picasso", "Velázquez"],
        correcta: "Claude Monet"
    },

    {
        pregunta: "¿Qué escritor francés creó Los Miserables?",
        opciones: ["Victor Hugo", "Goethe", "Dante", "Shakespeare"],
        correcta: "Victor Hugo"
    },

    {
        pregunta: "¿Francia participó en la integración europea después de la Segunda Guerra Mundial?",
        opciones: ["Sí", "No", "Solo durante la guerra", "Solo antes de 1900"],
        correcta: "Sí"
    },

    {
        pregunta: "¿Qué representa un monumento histórico?",
        opciones: [
            "Parte de la memoria histórica y cultural",
            "Solo decoración",
            "Solo tecnología",
            "Solo entretenimiento"
        ],
        correcta: "Parte de la memoria histórica y cultural"
    },

    {
        pregunta: "¿Qué país pertenece a Europa y comparte frontera con Francia?",
        opciones: ["España", "Japón", "Brasil", "Australia"],
        correcta: "España"
    }

];


/* ============================================================
   PREGUNTAS DE RECUPERACIÓN
============================================================ */

const preguntasRecuperacion = [

    {
        pregunta: "¿En qué año comenzó la Revolución Francesa?",
        opciones: ["1789", "1815", "1914", "1945"],
        correcta: "1789"
    },

    {
        pregunta: "¿Cuál es la capital de Francia?",
        opciones: ["París", "Lyon", "Niza", "Marsella"],
        correcta: "París"
    },

    {
        pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?",
        opciones: ["1939", "1914", "1945", "1961"],
        correcta: "1939"
    },

    {
        pregunta: "¿Qué monumento se encuentra en París?",
        opciones: ["Torre Eiffel", "Coliseo", "Big Ben", "Puerta de Brandeburgo"],
        correcta: "Torre Eiffel"
    }

];


/* ============================================================
   ESTADO
============================================================ */

let temaActual = "gastronomia";

let puntos = 0;

let vidas = MAX_VIDAS;

let respuestasCorrectas = 0;

let indicePregunta = 0;

let preguntaActual = null;

let respuestaContestada = false;

let estadoPreguntas = {};

let juegoBloqueadoPorVidas = false;

let retoRecuperacionActivo = false;

let retoRecuperacionSuperado = false;

let indicePreguntaFinal = 0;

let preguntaFinalActual = null;

let respuestaFinalContestada = false;


/* ============================================================
   TOTAL
============================================================ */

const TOTAL_PREGUNTAS =
    Object.values(temas)
        .reduce(
            (total, tema) =>
                total + tema.preguntas.length,
            0
        );


/* ============================================================
   ESTADO INICIAL
============================================================ */

function crearEstadoInicial() {

    const estado = {};

    Object.keys(temas).forEach(nombre => {

        estado[nombre] = {
            respondidas: [],
            completada: false
        };

    });

    return estado;
}


/* ============================================================
   ELEMENTO
============================================================ */

function obtenerElemento(id) {

    return document.getElementById(id);

}


/* ============================================================
   GUARDAR
============================================================ */

function guardarProgreso() {

    const datos = {

        temaActual,
        puntos,
        vidas,
        respuestasCorrectas,
        estadoPreguntas

    };

    localStorage.setItem(
        CLAVE_GUARDADO,
        JSON.stringify(datos)
    );

}


/* ============================================================
   CARGAR
============================================================ */

function cargarProgreso() {

    const guardado =
        localStorage.getItem(
            CLAVE_GUARDADO
        );

    if (!guardado) {

        estadoPreguntas =
            crearEstadoInicial();

        return;

    }

    try {

        const datos =
            JSON.parse(guardado);

        estadoPreguntas =
            crearEstadoInicial();

        if (datos.estadoPreguntas) {

            Object.keys(temas).forEach(nombre => {

                if (datos.estadoPreguntas[nombre]) {

                    estadoPreguntas[nombre] = {

                        respondidas:
                            Array.isArray(
                                datos.estadoPreguntas[nombre].respondidas
                            )
                                ? datos.estadoPreguntas[nombre].respondidas
                                : [],

                        completada:
                            Boolean(
                                datos.estadoPreguntas[nombre].completada
                            )

                    };

                }

            });

        }

        temaActual =
            temas[datos.temaActual]
                ? datos.temaActual
                : "gastronomia";

        puntos =
            Number.isFinite(datos.puntos)
                ? Math.max(0, datos.puntos)
                : 0;

        vidas =
            Number.isFinite(datos.vidas)
                ? Math.max(
                    0,
                    Math.min(
                        MAX_VIDAS,
                        datos.vidas
                    )
                )
                : MAX_VIDAS;

        respuestasCorrectas =
            Number.isFinite(
                datos.respuestasCorrectas
            )
                ? Math.max(
                    0,
                    datos.respuestasCorrectas
                )
                : 0;

    } catch (error) {

        localStorage.removeItem(
            CLAVE_GUARDADO
        );

        estadoPreguntas =
            crearEstadoInicial();

        puntos = 0;
        vidas = MAX_VIDAS;
        respuestasCorrectas = 0;

    }

}


/* ============================================================
   CAMBIAR TEMA
============================================================ */

function cambiarTema(nombre, boton) {

    if (!temas[nombre]) {
        return;
    }

    if (vidas <= 0) {

        mostrarAvisoSinVidas();

        return;

    }

    temaActual = nombre;

    document
        .querySelectorAll(".menu-btn")
        .forEach(btn =>
            btn.classList.remove("activo")
        );

    if (boton) {

        boton.classList.add("activo");

    }

    cargarTema();

    guardarProgreso();

}


/* ============================================================
   CARGAR TEMA
============================================================ */

function cargarTema() {

    const tema =
        temas[temaActual];

    if (!tema) {
        return;
    }

    obtenerElemento(
        "tituloTema"
    ).textContent =
        tema.titulo;

    obtenerElemento(
        "subtituloTema"
    ).textContent =
        tema.subtitulo;

    obtenerElemento(
        "iconoTema"
    ).textContent =
        tema.icono;

    obtenerElemento(
        "imagenTema"
    ).textContent =
        tema.imagen;

    obtenerElemento(
        "datoCurioso"
    ).textContent =
        tema.dato;

    const regiones =
        obtenerElemento(
            "regiones"
        );

    regiones.innerHTML = "";

    tema.regiones.forEach(region => {

        const span =
            document.createElement(
                "span"
            );

        span.className =
            "region-tag";

        span.textContent =
            region;

        regiones.appendChild(span);

    });

    cargarPregunta();

}


/* ============================================================
   SIGUIENTE PREGUNTA DISPONIBLE
============================================================ */

function obtenerIndiceDisponible() {

    const estado =
        estadoPreguntas[temaActual];

    const tema =
        temas[temaActual];

    if (!estado || !tema) {
        return -1;
    }

    for (
        let i = 0;
        i < tema.preguntas.length;
        i++
    ) {

        if (
            !estado.respondidas.includes(i)
        ) {

            return i;

        }

    }

    return -1;

}


/* ============================================================
   CARGAR PREGUNTA
============================================================ */

function cargarPregunta() {

    const tema =
        temas[temaActual];

    const estado =
        estadoPreguntas[temaActual];

    if (!tema || !estado) {
        return;
    }

    const indice =
        obtenerIndiceDisponible();

    respuestaContestada = false;

    if (indice === -1) {

        estado.completada = true;

        mostrarCategoriaCompletada();

        verificarTodasCategorias();

        return;

    }

    indicePregunta = indice;

    preguntaActual =
        tema.preguntas[indice];

    obtenerElemento(
        "preguntaReto"
    ).textContent =
        preguntaActual.pregunta;

    obtenerElemento(
        "numeroPregunta"
    ).textContent =
        `Pregunta ${indice + 1} de 5`;

    obtenerElemento(
        "resultado"
    ).textContent = "";

    obtenerElemento(
        "resultado"
    ).className =
        "resultado";

    const opciones =
        obtenerElemento(
            "opcionesReto"
        );

    opciones.innerHTML = "";

    preguntaActual.opciones.forEach(
        opcion => {

            const boton =
                document.createElement(
                    "button"
                );

            boton.type = "button";

            boton.className =
                "opcion";

            boton.textContent =
                opcion;

            boton.onclick = () =>
                comprobarRespuesta(
                    opcion,
                    boton
                );

            opciones.appendChild(
                boton
            );

        }
    );

    obtenerElemento(
        "botonSiguiente"
    ).disabled = true;

    actualizarMensajeBot();

}


/* ============================================================
   COMPROBAR RESPUESTA
============================================================ */

function comprobarRespuesta(
    respuesta,
    boton
) {

    if (respuestaContestada) {
        return;
    }

    if (vidas <= 0) {

        mostrarAvisoSinVidas();

        return;

    }

    respuestaContestada = true;

    const correcta =
        respuesta ===
        preguntaActual.correcta;

    const botones =
        document.querySelectorAll(
            "#opcionesReto .opcion"
        );

    botones.forEach(btn => {

        btn.disabled = true;

        if (
            btn.textContent ===
            preguntaActual.correcta
        ) {

            btn.classList.add(
                "correcta"
            );

        }

    });


    const resultado =
        obtenerElemento(
            "resultado"
        );


    if (correcta) {

        boton.classList.add(
            "correcta"
        );

        puntos += 10;

        respuestasCorrectas++;

        resultado.className =
            "resultado correcto";

        resultado.textContent =
            "✅ ¡Correcto! +10 puntos";

    } else {

        boton.classList.add(
            "incorrecta"
        );

        vidas--;

        resultado.className =
            "resultado incorrecto";

        resultado.textContent =
            `❌ Incorrecto. La respuesta era: ${preguntaActual.correcta}`;

    }


    const estado =
        estadoPreguntas[temaActual];

    if (
        !estado.respondidas.includes(
            indicePregunta
        )
    ) {

        estado.respondidas.push(
            indicePregunta
        );

    }


    if (
        estado.respondidas.length === 5
    ) {

        estado.completada = true;

    }


    actualizarMarcadores();

    guardarProgreso();


    if (vidas <= 0) {

        setTimeout(
            mostrarAvisoSinVidas,
            500
        );

        return;

    }


    obtenerElemento(
        "botonSiguiente"
    ).disabled = false;

}


/* ============================================================
   SIGUIENTE
============================================================ */

function siguientePregunta() {

    if (!respuestaContestada) {
        return;
    }

    if (vidas <= 0) {

        mostrarAvisoSinVidas();

        return;

    }

    cargarPregunta();

}


/* ============================================================
   CATEGORÍA COMPLETADA
============================================================ */

function mostrarCategoriaCompletada() {

    const tema =
        temas[temaActual];

    obtenerElemento(
        "preguntaReto"
    ).innerHTML =
        `🎉 ¡Terminaste ${tema.titulo}!`;

    obtenerElemento(
        "opcionesReto"
    ).innerHTML = "";

    obtenerElemento(
        "resultado"
    ).textContent =
        "Puedes elegir otra subcategoría.";

    obtenerElemento(
        "numeroPregunta"
    ).textContent =
        "5 de 5 completadas";

    obtenerElemento(
        "botonSiguiente"
    ).disabled = true;

    actualizarMensajeBot(
        `¡Excelente! Terminaste ${tema.titulo}. Elige otra categoría.`
    );

}


/* ============================================================
   VERIFICAR TODAS LAS CATEGORÍAS
============================================================ */

function verificarTodasCategorias() {

    const todas =
        Object.values(
            estadoPreguntas
        ).every(
            estado =>
                estado.completada
        );

    if (!todas) {
        return;
    }

    setTimeout(
        mostrarAvisoRetoFinal,
        700
    );

}


/* ============================================================
   MOSTRAR RETO FINAL
============================================================ */

function mostrarAvisoRetoFinal() {

    const modal =
        obtenerElemento(
            "modalRetoFinal"
        );

    if (!modal) {
        return;
    }

    modal.classList.add(
        "visible"
    );

}


/* ============================================================
   INICIAR RETO FINAL
============================================================ */

function iniciarRetoFinal() {

    const modal =
        obtenerElemento(
            "modalRetoFinal"
        );

    modal.classList.remove(
        "visible"
    );

    indicePreguntaFinal = 0;

    cargarPreguntaFinal();

    obtenerElemento(
        "modalPreguntasFinales"
    ).classList.add(
        "visible"
    );

}


/* ============================================================
   CARGAR PREGUNTA FINAL
============================================================ */

function cargarPreguntaFinal() {

    preguntaFinalActual =
        preguntasFinales[
            indicePreguntaFinal
        ];

    respuestaFinalContestada =
        false;

    obtenerElemento(
        "numeroFinal"
    ).textContent =
        indicePreguntaFinal + 1;

    obtenerElemento(
        "preguntaFinal"
    ).textContent =
        preguntaFinalActual.pregunta;

    obtenerElemento(
        "resultadoFinalPregunta"
    ).textContent = "";

    obtenerElemento(
        "resultadoFinalPregunta"
    ).className =
        "resultado";

    obtenerElemento(
        "btnSiguienteFinal"
    ).disabled = true;

    const contenedor =
        obtenerElemento(
            "opcionesFinales"
        );

    contenedor.innerHTML = "";

    preguntaFinalActual.opciones.forEach(
        opcion => {

            const boton =
                document.createElement(
                    "button"
                );

            boton.type = "button";

            boton.className =
                "opcion";

            boton.textContent =
                opcion;

            boton.onclick = () =>
                comprobarPreguntaFinal(
                    opcion,
                    boton
                );

            contenedor.appendChild(
                boton
            );

        }
    );

}


/* ============================================================
   COMPROBAR FINAL
============================================================ */

function comprobarPreguntaFinal(
    respuesta,
    boton
) {

    if (respuestaFinalContestada) {
        return;
    }

    respuestaFinalContestada = true;

    const correcta =
        respuesta ===
        preguntaFinalActual.correcta;

    const botones =
        document.querySelectorAll(
            "#opcionesFinales .opcion"
        );

    botones.forEach(btn => {

        btn.disabled = true;

        if (
            btn.textContent ===
            preguntaFinalActual.correcta
        ) {

            btn.classList.add(
                "correcta"
            );

        }

    });


    const resultado =
        obtenerElemento(
            "resultadoFinalPregunta"
        );


    if (correcta) {

        boton.classList.add(
            "correcta"
        );

        puntos += 10;

        respuestasCorrectas++;

        resultado.className =
            "resultado correcto";

        resultado.textContent =
            "✅ ¡Correcto! +10 puntos";

    } else {

        boton.classList.add(
            "incorrecta"
        );

        resultado.className =
            "resultado incorrecto";

        resultado.textContent =
            `❌ Incorrecto. Era: ${preguntaFinalActual.correcta}`;

    }


    actualizarMarcadores();

    guardarProgreso();


    obtenerElemento(
        "btnSiguienteFinal"
    ).disabled = false;

}


/* ============================================================
   SIGUIENTE FINAL
============================================================ */

function siguientePreguntaFinal() {

    if (!respuestaFinalContestada) {
        return;
    }

    indicePreguntaFinal++;

    if (
        indicePreguntaFinal >=
        preguntasFinales.length
    ) {

        terminarRetoFinal();

        return;

    }

    cargarPreguntaFinal();

}


/* ============================================================
   TERMINAR RETO FINAL
============================================================ */

function terminarRetoFinal() {

    obtenerElemento(
        "modalPreguntasFinales"
    ).classList.remove(
        "visible"
    );


    const porcentaje =
        Math.round(
            (
                respuestasCorrectas /
                (TOTAL_PREGUNTAS + 30)
            ) * 100
        );


    obtenerElemento(
        "puntosFinales"
    ).textContent =
        puntos;


    obtenerElemento(
        "correctasFinales"
    ).textContent =
        respuestasCorrectas;


    obtenerElemento(
        "textoResultadoFinal"
    ).textContent =
        `Has terminado toda la aventura de Francia. Tu progreso general es del ${porcentaje}%.`;


    obtenerElemento(
        "modalResultadoFinal"
    ).classList.add(
        "visible"
    );


    localStorage.setItem(
        CLAVE_GUARDADO + "_completado",
        "true"
    );

}


/* ============================================================
   CERRAR RESULTADO FINAL
============================================================ */

function cerrarResultadoFinal() {

    obtenerElemento(
        "modalResultadoFinal"
    ).classList.remove(
        "visible"
    );

}


/* ============================================================
   RECUPERACIÓN
============================================================ */

function mostrarAvisoSinVidas() {

    if (vidas > 0) {
        return;
    }

    juegoBloqueadoPorVidas = true;

    const modal =
        obtenerElemento(
            "modalRecuperacion"
        );

    if (!modal) {
        return;
    }

    obtenerElemento(
        "inicioRecuperacion"
    ).style.display =
        "block";

    obtenerElemento(
        "preguntaRecuperacionBox"
    ).style.display =
        "none";

    obtenerElemento(
        "resultadoRecuperacion"
    ).textContent = "";

    modal.classList.add(
        "visible"
    );

}


/* ============================================================
   COMENZAR RECUPERACIÓN
============================================================ */

function comenzarRetoRecuperacion() {

    retoRecuperacionActivo = true;

    retoRecuperacionSuperado = false;

    obtenerElemento(
        "inicioRecuperacion"
    ).style.display =
        "none";

    const box =
        obtenerElemento(
            "preguntaRecuperacionBox"
        );

    box.style.display =
        "block";

    box.classList.add(
        "activa"
    );

    cargarPreguntaRecuperacion();

}


/* ============================================================
   CARGAR RECUPERACIÓN
============================================================ */

function cargarPreguntaRecuperacion() {

    const pregunta =
        preguntasRecuperacion[
            Math.floor(
                Math.random() *
                preguntasRecuperacion.length
            )
        ];


    obtenerElemento(
        "preguntaRecuperacion"
    ).textContent =
        pregunta.pregunta;


    obtenerElemento(
        "resultadoRecuperacion"
    ).textContent = "";


    const contenedor =
        obtenerElemento(
            "opcionesRecuperacion"
        );

    contenedor.innerHTML = "";


    preguntasRecuperacionPreguntaActual =
        pregunta;


    pregunta.opciones.forEach(
        opcion => {

            const boton =
                document.createElement(
                    "button"
                );

            boton.className =
                "opcion-recuperacion";

            boton.textContent =
                opcion;

            boton.onclick = () =>
                comprobarRecuperacion(
                    opcion,
                    boton
                );

            contenedor.appendChild(
                boton
            );

        }
    );

}


/* ============================================================
   VARIABLE RECUPERACIÓN
============================================================ */

let preguntasRecuperacionPreguntaActual = null;


/* ============================================================
   COMPROBAR RECUPERACIÓN
============================================================ */

function comprobarRecuperacion(
    respuesta,
    boton
) {

    if (
        !retoRecuperacionActivo ||
        retoRecuperacionSuperado
    ) {
        return;
    }


    const correcta =
        respuesta ===
        preguntasRecuperacionPreguntaActual.correcta;


    if (correcta) {

        retoRecuperacionSuperado =
            true;


        document
            .querySelectorAll(
                "#opcionesRecuperacion .opcion-recuperacion"
            )
            .forEach(btn => {

                btn.disabled = true;

                if (
                    btn.textContent ===
                    preguntasRecuperacionPreguntaActual.correcta
                ) {

                    btn.classList.add(
                        "correcta"
                    );

                }

            });


        boton.classList.add(
            "correcta"
        );


        obtenerElemento(
            "resultadoRecuperacion"
        ).className =
            "resultado-recuperacion correcto";


        obtenerElemento(
            "resultadoRecuperacion"
        ).textContent =
            "🎉 ¡Correcto! Has recuperado tus 5 vidas.";


        const continuar =
            obtenerElemento(
                "btnContinuarRecuperacion"
            );

        continuar.style.display =
            "inline-block";


    } else {

        boton.disabled = true;

        boton.classList.add(
            "incorrecta"
        );


        obtenerElemento(
            "resultadoRecuperacion"
        ).className =
            "resultado-recuperacion incorrecto";


        obtenerElemento(
            "resultadoRecuperacion"
        ).textContent =
            "❌ Incorrecto. Intenta con otra opción.";

    }

}


/* ============================================================
   CONTINUAR
============================================================ */

function continuarDespuesRecuperacion() {

    if (!retoRecuperacionSuperado) {
        return;
    }


    vidas = MAX_VIDAS;

    juegoBloqueadoPorVidas = false;

    retoRecuperacionActivo = false;

    retoRecuperacionSuperado = false;


    obtenerElemento(
        "modalRecuperacion"
    ).classList.remove(
        "visible"
    );


    actualizarMarcadores();

    cargarPregunta();

    guardarProgreso();

    actualizarMensajeBot(
        "❤️‍🩹 ¡Vidas recuperadas! Puedes continuar."
    );

}


/* ============================================================
   MARCADORES
============================================================ */

function actualizarMarcadores() {

    obtenerElemento(
        "puntos"
    ).textContent =
        puntos;


    obtenerElemento(
        "vidas"
    ).textContent =
        vidas;


    actualizarProgreso();

}


/* ============================================================
   PROGRESO
============================================================ */

function actualizarProgreso() {

    let total =
        0;


    Object.values(
        estadoPreguntas
    ).forEach(
        estado => {

            total +=
                estado.respondidas.length;

        }
    );


    const porcentaje =
        Math.round(
            (
                total /
                TOTAL_PREGUNTAS
            ) * 100
        );


    obtenerElemento(
        "porcentaje"
    ).textContent =
        `${porcentaje}%`;


    obtenerElemento(
        "retosCompletados"
    ).textContent =
        total;


    obtenerElemento(
        "respuestasCorrectas"
    ).textContent =
        respuestasCorrectas;


    const circulo =
        obtenerElemento(
            "circuloProgreso"
        );


    const radio = 50;

    const circunferencia =
        2 *
        Math.PI *
        radio;


    circulo.style.strokeDasharray =
        circunferencia;


    circulo.style.strokeDashoffset =
        circunferencia *
        (
            1 -
            porcentaje / 100
        );


    let mensaje =
        "¡Comienza tu aventura!";


    if (porcentaje >= 25 && porcentaje < 50) {

        mensaje =
            "¡Vas avanzando muy bien!";

    } else if (
        porcentaje >= 50 &&
        porcentaje < 75
    ) {

        mensaje =
            "¡Ya conoces bastante de Francia!";

    } else if (
        porcentaje >= 75 &&
        porcentaje < 100
    ) {

        mensaje =
            "¡Estás muy cerca de completar Francia!";

    } else if (
        porcentaje >= 100
    ) {

        mensaje =
            "🏆 ¡Completaste las categorías!";

    }


    obtenerElemento(
        "mensajeProgreso"
    ).textContent =
        mensaje;

}


/* ============================================================
   MENSAJE BOT
============================================================ */

function actualizarMensajeBot(
    mensajePersonalizado = null
) {

    const mensaje =
        obtenerElemento(
            "mensajeBot"
        );


    if (!mensaje) {
        return;
    }


    if (mensajePersonalizado) {

        mensaje.textContent =
            mensajePersonalizado;

        return;

    }


    const estado =
        estadoPreguntas[temaActual];


    const completadas =
        estado
            ? estado.respondidas.length
            : 0;


    mensaje.textContent =
        `Has completado ${completadas} de 5 preguntas de esta categoría.`;

}


/* ============================================================
   AUDIO
============================================================ */

function escuchar() {

    if (
        !("speechSynthesis" in window)
    ) {

        alert(
            "Tu navegador no permite reproducir audio."
        );

        return;

    }


    const tema =
        temas[temaActual];


    speechSynthesis.cancel();


    const voz =
        new SpeechSynthesisUtterance(
            `${tema.titulo}. ${tema.dato}`
        );


    voz.lang = "es-ES";

    voz.rate = 0.9;

    voz.pitch = 1;


    speechSynthesis.speak(
        voz
    );

}


/* ============================================================
   REINICIAR FRANCIA
============================================================ */

function reiniciarFrancia() {

    localStorage.removeItem(
        CLAVE_GUARDADO
    );

    localStorage.removeItem(
        CLAVE_GUARDADO + "_completado"
    );

    location.reload();

}


/* ============================================================
   FUNCIONES GLOBALES
============================================================ */

window.cambiarTema =
    cambiarTema;

window.siguientePregunta =
    siguientePregunta;

window.iniciarRetoFinal =
    iniciarRetoFinal;

window.siguientePreguntaFinal =
    siguientePreguntaFinal;

window.comenzarRetoRecuperacion =
    comenzarRetoRecuperacion;

window.continuarDespuesRecuperacion =
    continuarDespuesRecuperacion;

window.cerrarResultadoFinal =
    cerrarResultadoFinal;

window.escuchar =
    escuchar;

window.reiniciarFrancia =
    reiniciarFrancia;


/* ============================================================
   INICIAR
============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        cargarProgreso();

        actualizarMarcadores();

        document
            .querySelectorAll(
                ".menu-btn"
            )
            .forEach(btn => {

                btn.classList.remove(
                    "activo"
                );

                if (
                    btn.dataset.tema ===
                    temaActual
                ) {

                    btn.classList.add(
                        "activo"
                    );

                }

            });


        cargarTema();


        if (vidas <= 0) {

            setTimeout(
                mostrarAvisoSinVidas,
                500
            );

        }

    }
);


/* ============================================================
   GUARDAR AL SALIR
============================================================ */

window.addEventListener(
    "beforeunload",
    () => {

        guardarProgreso();

        if (
            "speechSynthesis" in window
        ) {

            speechSynthesis.cancel();

        }

    }
);