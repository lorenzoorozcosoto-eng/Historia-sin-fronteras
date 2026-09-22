 /* ============================================================
   HISTORIA SIN FRONTERAS - ALEMANIA
   JAVASCRIPT COMPLETO Y CORREGIDO

   14 CATEGORÍAS
   5 PREGUNTAS POR CATEGORÍA
   70 PREGUNTAS EN TOTAL
============================================================ */


/* ============================================================
   1. CONFIGURACIÓN
============================================================ */

const CLAVE_GUARDADO =
    "historiaSinFronterasAlemania_v3";

const MAX_VIDAS = 5;


/* ============================================================
   2. TEMAS Y PREGUNTAS
============================================================ */

const temas = {


    /* ========================================================
       CULTURA - GASTRONOMÍA
    ======================================================== */

    gastronomia: {

        titulo: "Gastronomía",
        subtitulo: "Sabores que cuentan historias",
        icono: "🍽️",

        imagen: "🥨",

        dato:
            "La gastronomía alemana es diversa y cambia según la región. Algunos alimentos tradicionales son el pretzel, las salchichas y diferentes preparaciones con papa.",

        regiones: [
            "Baviera",
            "Berlín",
            "Sajonia",
            "Renania"
        ],

        preguntas: [

            {
                pregunta:
                    "¿Cuál de estos alimentos es muy representativo de la gastronomía alemana?",

                opciones: [
                    "Pretzel",
                    "Sushi",
                    "Tacos",
                    "Paella"
                ],

                correcta: "Pretzel"
            },

            {
                pregunta:
                    "¿Cómo se conoce en Alemania a muchas de sus salchichas tradicionales?",

                opciones: [
                    "Bratwurst",
                    "Croissant",
                    "Tortilla",
                    "Ravioli"
                ],

                correcta: "Bratwurst"
            },

            {
                pregunta:
                    "¿Qué alimento aparece con frecuencia en diferentes platos tradicionales alemanes?",

                opciones: [
                    "Papa",
                    "Coco",
                    "Mango",
                    "Yuca"
                ],

                correcta: "Papa"
            },

            {
                pregunta:
                    "¿Qué alimento alemán tiene una forma característica retorcida?",

                opciones: [
                    "Pretzel",
                    "Bratwurst",
                    "Sopa",
                    "Strudel"
                ],

                correcta: "Pretzel"
            },

            {
                pregunta:
                    "¿Por qué la gastronomía alemana presenta diferencias entre regiones?",

                opciones: [
                    "Por las tradiciones y productos locales",
                    "Porque todos los platos son iguales",
                    "Porque no existen comidas regionales",
                    "Porque solo se consume comida extranjera"
                ],

                correcta:
                    "Por las tradiciones y productos locales"
            }

        ]
    },


    /* ========================================================
       CULTURA - MÚSICA
    ======================================================== */

    musica: {

        titulo: "Música",
        subtitulo: "Melodías que forman parte de su historia",
        icono: "🎵",

        imagen: "🎼",

        dato:
            "Alemania ha tenido una importante influencia en la música clásica europea gracias a compositores como Johann Sebastian Bach y Ludwig van Beethoven.",

        regiones: [
            "Leipzig",
            "Bonn",
            "Berlín",
            "Weimar"
        ],

        preguntas: [

            {
                pregunta:
                    "¿Quién fue Johann Sebastian Bach?",

                opciones: [
                    "Un compositor",
                    "Un rey",
                    "Un explorador",
                    "Un pintor"
                ],

                correcta: "Un compositor"
            },

            {
                pregunta:
                    "¿En qué ciudad alemana nació Ludwig van Beethoven?",

                opciones: [
                    "Bonn",
                    "Múnich",
                    "Hamburgo",
                    "Dresde"
                ],

                correcta: "Bonn"
            },

            {
                pregunta:
                    "¿En qué ciudad desarrolló Bach una parte importante de su carrera?",

                opciones: [
                    "Leipzig",
                    "Madrid",
                    "Roma",
                    "París"
                ],

                correcta: "Leipzig"
            },

            {
                pregunta:
                    "¿Qué tipo de música está muy relacionada con Bach y Beethoven?",

                opciones: [
                    "Música clásica",
                    "Reguetón",
                    "Salsa",
                    "Rock moderno"
                ],

                correcta: "Música clásica"
            },

            {
                pregunta:
                    "¿Cuál de estos compositores fue alemán?",

                opciones: [
                    "Beethoven",
                    "Mozart",
                    "Vivaldi",
                    "Chopin"
                ],

                correcta: "Beethoven"
            }

        ]
    },


    /* ========================================================
       CULTURA - TRADICIONES
    ======================================================== */

    tradiciones: {

        titulo: "Tradiciones",
        subtitulo: "Costumbres que pasan de generación en generación",
        icono: "🥨",

        imagen: "🎭",

        dato:
            "Las tradiciones alemanas varían según la región y suelen estar relacionadas con la música, la gastronomía, las celebraciones y las costumbres locales.",

        regiones: [
            "Baviera",
            "Sajonia",
            "Renania",
            "Berlín"
        ],

        preguntas: [

            {
                pregunta:
                    "¿Qué celebración tradicional alemana es conocida internacionalmente?",

                opciones: [
                    "Oktoberfest",
                    "Carnaval de Río",
                    "Día de Muertos",
                    "Hanami"
                ],

                correcta: "Oktoberfest"
            },

            {
                pregunta:
                    "¿Qué elemento suele estar presente en muchas celebraciones tradicionales alemanas?",

                opciones: [
                    "Música",
                    "Solo deportes",
                    "Solo videojuegos",
                    "Solo películas"
                ],

                correcta: "Música"
            },

            {
                pregunta:
                    "¿Por qué las tradiciones pueden variar entre regiones alemanas?",

                opciones: [
                    "Por la diversidad cultural regional",
                    "Porque Alemania no tiene regiones",
                    "Porque todas las ciudades tienen la misma historia",
                    "Porque las tradiciones son recientes"
                ],

                correcta:
                    "Por la diversidad cultural regional"
            },

            {
                pregunta:
                    "¿Qué región alemana es especialmente conocida por sus tradiciones folclóricas?",

                opciones: [
                    "Baviera",
                    "Sicilia",
                    "Cataluña",
                    "Escocia"
                ],

                correcta: "Baviera"
            },

            {
                pregunta:
                    "¿Qué combinación aparece con frecuencia en celebraciones tradicionales alemanas?",

                opciones: [
                    "Música y gastronomía",
                    "Videojuegos y tecnología",
                    "Cine y fotografía",
                    "Deportes acuáticos"
                ],

                correcta: "Música y gastronomía"
            }

        ]
    },


    /* ========================================================
       CULTURA - FIESTAS
    ======================================================== */

    fiestas: {

        titulo: "Fiestas",
        subtitulo: "Celebraciones llenas de cultura y tradición",
        icono: "🎉",

        imagen: "🎊",

        dato:
            "El Oktoberfest es una de las celebraciones alemanas más conocidas y se realiza tradicionalmente en la ciudad de Múnich.",

        regiones: [
            "Múnich",
            "Baviera",
            "Berlín",
            "Colonia"
        ],

        preguntas: [

            {
                pregunta:
                    "¿En qué ciudad se celebra tradicionalmente el Oktoberfest?",

                opciones: [
                    "Múnich",
                    "Bonn",
                    "Hamburgo",
                    "Dresde"
                ],

                correcta: "Múnich"
            },

            {
                pregunta:
                    "¿Cuál es una de las fiestas alemanas más conocidas internacionalmente?",

                opciones: [
                    "Oktoberfest",
                    "Carnaval de Venecia",
                    "Diwali",
                    "Hanami"
                ],

                correcta: "Oktoberfest"
            },

            {
                pregunta:
                    "¿Qué elemento cultural es frecuente durante muchas fiestas tradicionales?",

                opciones: [
                    "Música",
                    "Solo silencio",
                    "Solo lectura",
                    "Solo pintura"
                ],

                correcta: "Música"
            },

            {
                pregunta:
                    "¿En qué región se encuentra Múnich?",

                opciones: [
                    "Baviera",
                    "Sajonia",
                    "Brandeburgo",
                    "Hesse"
                ],

                correcta: "Baviera"
            },

            {
                pregunta:
                    "¿Qué elementos caracterizan muchas celebraciones tradicionales alemanas?",

                opciones: [
                    "Música, gastronomía y tradiciones",
                    "Solo videojuegos",
                    "Solo actividades escolares",
                    "Solo deportes"
                ],

                correcta:
                    "Música, gastronomía y tradiciones"
            }

        ]
    },


    /* ========================================================
       CULTURA - VESTIMENTAS
    ======================================================== */

    vestimentas: {

        titulo: "Vestimentas",
        subtitulo: "Ropa tradicional e identidad regional",
        icono: "👗",

        imagen: "👒",

        dato:
            "El Dirndl y los Lederhosen son prendas tradicionales asociadas especialmente con Baviera y con algunas celebraciones culturales.",

        regiones: [
            "Baviera",
            "Alpes",
            "Múnich"
        ],

        preguntas: [

            {
                pregunta:
                    "¿Cómo se llama una vestimenta tradicional femenina asociada con Baviera?",

                opciones: [
                    "Dirndl",
                    "Kimono",
                    "Sari",
                    "Poncho"
                ],

                correcta: "Dirndl"
            },

            {
                pregunta:
                    "¿Qué son los Lederhosen?",

                opciones: [
                    "Pantalones tradicionales",
                    "Un tipo de sombrero",
                    "Un instrumento musical",
                    "Un plato"
                ],

                correcta: "Pantalones tradicionales"
            },

            {
                pregunta:
                    "¿Con qué región alemana se relacionan especialmente el Dirndl y los Lederhosen?",

                opciones: [
                    "Baviera",
                    "Berlín",
                    "Hamburgo",
                    "Sajonia"
                ],

                correcta: "Baviera"
            },

            {
                pregunta:
                    "¿En qué tipo de ocasiones pueden utilizarse estas prendas tradicionales?",

                opciones: [
                    "Celebraciones y festividades",
                    "Solo en oficinas",
                    "Solo en hospitales",
                    "Solo en escuelas"
                ],

                correcta:
                    "Celebraciones y festividades"
            },

            {
                pregunta:
                    "¿Qué representan las vestimentas tradicionales?",

                opciones: [
                    "Parte de la identidad y cultura regional",
                    "Una obligación para todos los alemanes",
                    "Un uniforme militar moderno",
                    "Una moda exclusivamente extranjera"
                ],

                correcta:
                    "Parte de la identidad y cultura regional"
            }

        ]
    },


    /* ========================================================
       CULTURA - ARTE
    ======================================================== */

    arte: {

        titulo: "Arte",
        subtitulo: "Literatura y creatividad alemana",
        icono: "🎨",

        imagen: "📚",

        dato:
            "Alemania ha aportado importantes figuras a la literatura y al arte europeo, entre ellas Johann Wolfgang von Goethe y los hermanos Grimm.",

        regiones: [
            "Weimar",
            "Berlín",
            "Leipzig",
            "Dresde"
        ],

        preguntas: [

            {
                pregunta:
                    "¿Quién fue Johann Wolfgang von Goethe?",

                opciones: [
                    "Escritor",
                    "Astronauta",
                    "Futbolista",
                    "Rey"
                ],

                correcta: "Escritor"
            },

            {
                pregunta:
                    "¿Quiénes recopilaron muchos cuentos tradicionales conocidos?",

                opciones: [
                    "Los hermanos Grimm",
                    "Los hermanos Wright",
                    "Los hermanos Lumière",
                    "Los hermanos Marx"
                ],

                correcta: "Los hermanos Grimm"
            },

            {
                pregunta:
                    "¿Qué ciudad alemana está muy relacionada con Goethe y la literatura?",

                opciones: [
                    "Weimar",
                    "Múnich",
                    "Bremen",
                    "Colonia"
                ],

                correcta: "Weimar"
            },

            {
                pregunta:
                    "¿A qué área pertenece principalmente la obra de Goethe?",

                opciones: [
                    "Literatura",
                    "Astronomía",
                    "Medicina",
                    "Ingeniería"
                ],

                correcta: "Literatura"
            },

            {
                pregunta:
                    "¿Qué tipo de historias recopilaron los hermanos Grimm?",

                opciones: [
                    "Cuentos tradicionales",
                    "Informes científicos",
                    "Manuales militares",
                    "Noticias deportivas"
                ],

                correcta: "Cuentos tradicionales"
            }

        ]
    },


    /* ========================================================
       CULTURA - MONUMENTOS
    ======================================================== */

    monumentos: {

        titulo: "Monumentos",
        subtitulo: "Lugares que conservan la memoria",
        icono: "🏛️",

        imagen: "🏰",

        dato:
            "Alemania cuenta con monumentos históricos y culturales que permiten conocer diferentes etapas de su historia.",

        regiones: [
            "Berlín",
            "Colonia",
            "Múnich",
            "Dresde"
        ],

        preguntas: [

            {
                pregunta:
                    "¿Cuál es uno de los monumentos más conocidos de Berlín?",

                opciones: [
                    "Puerta de Brandeburgo",
                    "Coliseo",
                    "Torre Eiffel",
                    "Big Ben"
                ],

                correcta: "Puerta de Brandeburgo"
            },

            {
                pregunta:
                    "¿En qué ciudad se encuentra la Puerta de Brandeburgo?",

                opciones: [
                    "Berlín",
                    "Bonn",
                    "Leipzig",
                    "Hamburgo"
                ],

                correcta: "Berlín"
            },

            {
                pregunta:
                    "¿Qué importancia pueden tener los monumentos históricos?",

                opciones: [
                    "Conservar la memoria histórica",
                    "Servir solamente como decoración",
                    "No tienen relación con la historia",
                    "Solo funcionan como viviendas"
                ],

                correcta:
                    "Conservar la memoria histórica"
            },

            {
                pregunta:
                    "¿En qué ciudad se encuentra la famosa catedral de Colonia?",

                opciones: [
                    "Colonia",
                    "Berlín",
                    "Múnich",
                    "Bremen"
                ],

                correcta: "Colonia"
            },

            {
                pregunta:
                    "¿Qué pueden representar los monumentos de Alemania?",

                opciones: [
                    "Historia y cultura",
                    "Solo deportes",
                    "Solo tecnología",
                    "Solo gastronomía"
                ],

                correcta: "Historia y cultura"
            }

        ]
    },


    /* ========================================================
       HISTORIA - IMPERIO ALEMÁN
    ======================================================== */

    "imperio-aleman": {

        titulo: "Imperio alemán",
        subtitulo: "La unificación de Alemania",
        icono: "👑",

        imagen: "👑",

        dato:
            "El Imperio alemán fue proclamado en 1871 después del proceso de unificación de varios Estados alemanes.",

        regiones: [
            "Prusia",
            "Baviera",
            "Sajonia",
            "Brandeburgo"
        ],

        preguntas: [

            {
                pregunta:
                    "¿En qué año fue proclamado el Imperio alemán?",

                opciones: [
                    "1871",
                    "1815",
                    "1914",
                    "1945"
                ],

                correcta: "1871"
            },

            {
                pregunta:
                    "¿Qué proceso estuvo relacionado con la creación del Imperio alemán?",

                opciones: [
                    "La unificación alemana",
                    "La Revolución Industrial inglesa",
                    "La independencia de Estados Unidos",
                    "La Revolución francesa"
                ],

                correcta:
                    "La unificación alemana"
            },

            {
                pregunta:
                    "¿Qué Estado tuvo un papel importante en la unificación alemana?",

                opciones: [
                    "Prusia",
                    "Portugal",
                    "Grecia",
                    "Noruega"
                ],

                correcta: "Prusia"
            },

            {
                pregunta:
                    "¿En qué siglo se proclamó el Imperio alemán?",

                opciones: [
                    "Siglo XIX",
                    "Siglo XVII",
                    "Siglo XX",
                    "Siglo XVI"
                ],

                correcta: "Siglo XIX"
            },

            {
                pregunta:
                    "¿Qué ocurrió en 1871?",

                opciones: [
                    "Se proclamó el Imperio alemán",
                    "Cayó el Muro de Berlín",
                    "Terminó la Segunda Guerra Mundial",
                    "Se produjo la reunificación alemana"
                ],

                correcta:
                    "Se proclamó el Imperio alemán"
            }

        ]
    },


    /* ========================================================
       HISTORIA - PRIMERA GUERRA MUNDIAL
    ======================================================== */

    "primera-guerra": {

        titulo: "Primera Guerra Mundial",
        subtitulo: "Alemania en el conflicto de 1914-1918",
        icono: "⚔️",

        imagen: "⚔️",

        dato:
            "La Primera Guerra Mundial se desarrolló entre 1914 y 1918 y Alemania participó como una de las Potencias Centrales.",

        regiones: [
            "Europa",
            "Francia",
            "Bélgica",
            "Alemania"
        ],

        preguntas: [

            {
                pregunta:
                    "¿En qué año comenzó la Primera Guerra Mundial?",

                opciones: [
                    "1914",
                    "1918",
                    "1939",
                    "1945"
                ],

                correcta: "1914"
            },

            {
                pregunta:
                    "¿En qué año terminó la Primera Guerra Mundial?",

                opciones: [
                    "1918",
                    "1914",
                    "1933",
                    "1945"
                ],

                correcta: "1918"
            },

            {
                pregunta:
                    "¿En qué continente se desarrolló gran parte de la Primera Guerra Mundial?",

                opciones: [
                    "Europa",
                    "América",
                    "Oceanía",
                    "África"
                ],

                correcta: "Europa"
            },

            {
                pregunta:
                    "¿Qué país participó en la Primera Guerra Mundial?",

                opciones: [
                    "Alemania",
                    "Canadá solamente",
                    "Brasil solamente",
                    "Japón solamente"
                ],

                correcta: "Alemania"
            },

            {
                pregunta:
                    "¿Cuál fue el periodo general de la Primera Guerra Mundial?",

                opciones: [
                    "1914-1918",
                    "1939-1945",
                    "1961-1989",
                    "1871-1910"
                ],

                correcta: "1914-1918"
            }

        ]
    },


    /* ========================================================
       HISTORIA - SEGUNDA GUERRA MUNDIAL
    ======================================================== */

    "segunda-guerra": {

        titulo: "Segunda Guerra Mundial",
        subtitulo: "Alemania y el conflicto de 1939-1945",
        icono: "🕊️",

        imagen: "🌍",

        dato:
            "La Segunda Guerra Mundial comenzó en 1939 y terminó en 1945. Fue un conflicto de gran escala que afectó a numerosos países.",

        regiones: [
            "Europa",
            "Alemania",
            "Polonia",
            "Francia"
        ],

        preguntas: [

            {
                pregunta:
                    "¿En qué año comenzó la Segunda Guerra Mundial?",

                opciones: [
                    "1939",
                    "1914",
                    "1945",
                    "1961"
                ],

                correcta: "1939"
            },

            {
                pregunta:
                    "¿En qué año terminó la Segunda Guerra Mundial?",

                opciones: [
                    "1945",
                    "1939",
                    "1949",
                    "1989"
                ],

                correcta: "1945"
            },

            {
                pregunta:
                    "¿En qué continente se desarrollaron importantes acontecimientos de la guerra?",

                opciones: [
                    "Europa",
                    "Oceanía",
                    "Antártida",
                    "América del Sur únicamente"
                ],

                correcta: "Europa"
            },

            {
                pregunta:
                    "¿Cuánto duró aproximadamente la Segunda Guerra Mundial?",

                opciones: [
                    "6 años",
                    "2 años",
                    "15 años",
                    "20 años"
                ],

                correcta: "6 años"
            },

            {
                pregunta:
                    "¿Cuál fue el periodo de la Segunda Guerra Mundial?",

                opciones: [
                    "1939-1945",
                    "1914-1918",
                    "1945-1961",
                    "1961-1989"
                ],

                correcta: "1939-1945"
            }

        ]
    },


    /* ========================================================
       HISTORIA - MURO DE BERLÍN
    ======================================================== */

    "muro-berlin": {

        titulo: "Muro de Berlín",
        subtitulo: "Un símbolo de la división alemana",
        icono: "🧱",

        imagen: "🧱",

        dato:
            "El Muro de Berlín comenzó a construirse en 1961 y cayó en 1989, convirtiéndose en uno de los símbolos más conocidos de la Guerra Fría.",

        regiones: [
            "Berlín",
            "Alemania Oriental",
            "Alemania Occidental"
        ],

        preguntas: [

            {
                pregunta:
                    "¿En qué año comenzó la construcción del Muro de Berlín?",

                opciones: [
                    "1961",
                    "1945",
                    "1989",
                    "1990"
                ],

                correcta: "1961"
            },

            {
                pregunta:
                    "¿En qué año cayó el Muro de Berlín?",

                opciones: [
                    "1989",
                    "1961",
                    "1975",
                    "1990"
                ],

                correcta: "1989"
            },

            {
                pregunta:
                    "¿En qué ciudad estaba ubicado el famoso muro?",

                opciones: [
                    "Berlín",
                    "Múnich",
                    "Bonn",
                    "Hamburgo"
                ],

                correcta: "Berlín"
            },

            {
                pregunta:
                    "¿Qué representaba principalmente el Muro de Berlín?",

                opciones: [
                    "La división de Alemania",
                    "La unión de Europa",
                    "La independencia de Francia",
                    "La creación del Imperio alemán"
                ],

                correcta:
                    "La división de Alemania"
            },

            {
                pregunta:
                    "¿Durante aproximadamente cuánto tiempo existió el Muro de Berlín?",

                opciones: [
                    "28 años",
                    "5 años",
                    "60 años",
                    "100 años"
                ],

                correcta: "28 años"
            }

        ]
    },


    /* ========================================================
       HISTORIA - REUNIFICACIÓN
    ======================================================== */

    reunificacion: {

        titulo: "Reunificación",
        subtitulo: "El camino hacia una Alemania unida",
        icono: "🤝",

        imagen: "🇩🇪",

        dato:
            "La reunificación alemana se produjo en 1990, después de décadas de división entre Alemania Oriental y Alemania Occidental.",

        regiones: [
            "Alemania Oriental",
            "Alemania Occidental",
            "Berlín",
            "Europa"
        ],

        preguntas: [

            {
                pregunta:
                    "¿En qué año ocurrió la reunificación alemana?",

                opciones: [
                    "1990",
                    "1989",
                    "1961",
                    "1945"
                ],

                correcta: "1990"
            },

            {
                pregunta:
                    "¿Qué día se celebra actualmente como el Día de la Unidad Alemana?",

                opciones: [
                    "3 de octubre",
                    "9 de noviembre",
                    "1 de enero",
                    "25 de diciembre"
                ],

                correcta: "3 de octubre"
            },

            {
                pregunta:
                    "¿Qué dos partes se reunificaron?",

                opciones: [
                    "Alemania Oriental y Alemania Occidental",
                    "Baviera y Prusia",
                    "Berlín y Múnich",
                    "Francia y Alemania"
                ],

                correcta:
                    "Alemania Oriental y Alemania Occidental"
            },

            {
                pregunta:
                    "¿Qué acontecimiento ocurrió antes de la reunificación alemana?",

                opciones: [
                    "La caída del Muro de Berlín",
                    "La Primera Guerra Mundial",
                    "La proclamación del Imperio alemán",
                    "La fundación de Roma"
                ],

                correcta:
                    "La caída del Muro de Berlín"
            },

            {
                pregunta:
                    "¿Qué ocurrió con Alemania en 1990?",

                opciones: [
                    "Se reunificó",
                    "Se dividió nuevamente",
                    "Se convirtió en un imperio",
                    "Dejó de existir"
                ],

                correcta: "Se reunificó"
            }

        ]
    },


    /* ========================================================
       HISTORIA - PERSONAJES
    ======================================================== */

    personajes: {

        titulo: "Personajes",
        subtitulo: "Personas que dejaron huella en Alemania",
        icono: "👤",

        imagen: "👥",

        dato:
            "Alemania ha sido el lugar de origen o desarrollo de importantes figuras de la música, la literatura y otras áreas culturales.",

        regiones: [
            "Bonn",
            "Leipzig",
            "Weimar",
            "Berlín"
        ],

        preguntas: [

            {
                pregunta:
                    "¿Cuál de estos personajes fue un famoso compositor alemán?",

                opciones: [
                    "Beethoven",
                    "Cervantes",
                    "Shakespeare",
                    "Dante"
                ],

                correcta: "Beethoven"
            },

            {
                pregunta:
                    "¿Quién escribió importantes obras literarias como Fausto?",

                opciones: [
                    "Goethe",
                    "Bach",
                    "Beethoven",
                    "Einstein"
                ],

                correcta: "Goethe"
            },

            {
                pregunta:
                    "¿Quién fue Johann Sebastian Bach?",

                opciones: [
                    "Compositor",
                    "Pintor",
                    "Rey",
                    "Explorador"
                ],

                correcta: "Compositor"
            },

            {
                pregunta:
                    "¿En qué área destacó Goethe principalmente?",

                opciones: [
                    "Literatura",
                    "Fútbol",
                    "Astronomía",
                    "Arquitectura"
                ],

                correcta: "Literatura"
            },

            {
                pregunta:
                    "¿Qué pareja está relacionada con la música clásica alemana?",

                opciones: [
                    "Bach y Beethoven",
                    "Goethe y Grimm",
                    "Lutero y Goethe",
                    "Einstein y Grimm"
                ],

                correcta: "Bach y Beethoven"
            }

        ]
    },


    /* ========================================================
       HISTORIA - ESTADOS FEDERADOS
    ======================================================== */

    "estados-federados": {

        titulo: "Estados federados",
        subtitulo: "La organización territorial de Alemania",
        icono: "🗺️",

        imagen: "🇩🇪",

        dato:
            "Alemania es una república federal formada por 16 estados federados, conocidos en alemán como Länder.",

        regiones: [
            "Baviera",
            "Sajonia",
            "Berlín",
            "Hesse"
        ],

        preguntas: [

            {
                pregunta:
                    "¿Cuántos estados federados tiene Alemania?",

                opciones: [
                    "16",
                    "10",
                    "20",
                    "25"
                ],

                correcta: "16"
            },

            {
                pregunta:
                    "¿Cuál de estos es un estado federado de Alemania?",

                opciones: [
                    "Baviera",
                    "Cataluña",
                    "Lombardía",
                    "Escocia"
                ],

                correcta: "Baviera"
            },

            {
                pregunta:
                    "¿Cuál de estos también es un estado federado alemán?",

                opciones: [
                    "Sajonia",
                    "Andalucía",
                    "Normandía",
                    "Toscana"
                ],

                correcta: "Sajonia"
            },

            {
                pregunta:
                    "¿Berlín es un estado federado de Alemania?",

                opciones: [
                    "Sí",
                    "No",
                    "Solo durante el verano",
                    "Solo históricamente"
                ],

                correcta: "Sí"
            },

            {
                pregunta:
                    "¿Qué significa que Alemania sea un Estado federal?",

                opciones: [
                    "Que está formada por estados federados",
                    "Que solo tiene una ciudad",
                    "Que no tiene regiones",
                    "Que no tiene gobierno nacional"
                ],

                correcta:
                    "Que está formada por estados federados"
            }

        ]
    }

};


/* ============================================================
   3. ESTADO DEL JUEGO
============================================================ */

let temaActual = "gastronomia";

let puntos = 0;

let vidas = MAX_VIDAS;

let respuestasCorrectas = 0;

let retosCompletados = 0;

let respuestaContestada = false;

let juegoBloqueadoPorVidas = false;

let preguntaActual = null;

let indicePregunta = 0;

let estadoPreguntas = {};

let retoRecuperacionActivo = false;

let retoRecuperacionSuperado = false;


/* ============================================================
   4. TOTAL DE PREGUNTAS
============================================================ */

const TOTAL_PREGUNTAS =
    Object.values(temas)
        .reduce(
            (total, tema) =>
                total + tema.preguntas.length,
            0
        );


/* ============================================================
   5. CREAR ESTADO INICIAL
============================================================ */

function crearEstadoInicial() {

    const estado = {};

    Object.keys(temas).forEach(nombre => {

        estado[nombre] = {

            respondidas: [],

            completada: false,

            preguntaActual: 0

        };

    });

    return estado;
}


/* ============================================================
   6. GUARDAR PROGRESO
============================================================ */

function guardarProgreso() {

    try {

        const datos = {

            temaActual,

            puntos,

            vidas,

            respuestasCorrectas,

            retosCompletados,

            estadoPreguntas

        };

        localStorage.setItem(
            CLAVE_GUARDADO,
            JSON.stringify(datos)
        );

    } catch (error) {

        console.warn(
            "No fue posible guardar el progreso.",
            error
        );

    }

}


/* ============================================================
   7. CARGAR PROGRESO
============================================================ */

function cargarProgreso() {

    try {

        const guardado =
            localStorage.getItem(CLAVE_GUARDADO);

        if (!guardado) {

            estadoPreguntas =
                crearEstadoInicial();

            vidas = MAX_VIDAS;

            return;

        }


        const datos =
            JSON.parse(guardado);


        if (
            datos.estadoPreguntas &&
            typeof datos.estadoPreguntas === "object"
        ) {

            estadoPreguntas =
                crearEstadoInicial();


            Object.keys(temas).forEach(nombre => {

                if (
                    datos.estadoPreguntas[nombre]
                ) {

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
                            ),

                        preguntaActual:
                            Number.isInteger(
                                datos.estadoPreguntas[nombre].preguntaActual
                            )
                                ? datos.estadoPreguntas[nombre].preguntaActual
                                : 0

                    };

                }

            });

        } else {

            estadoPreguntas =
                crearEstadoInicial();

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
                    Math.min(MAX_VIDAS, datos.vidas)
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


        retosCompletados =
            Number.isFinite(
                datos.retosCompletados
            )
                ? Math.max(
                    0,
                    datos.retosCompletados
                )
                : 0;


    } catch (error) {

        console.warn(
            "El progreso guardado estaba dañado. Se iniciará una partida nueva."
        );

        localStorage.removeItem(
            CLAVE_GUARDADO
        );

        estadoPreguntas =
            crearEstadoInicial();

        vidas = MAX_VIDAS;

    }

}


/* ============================================================
   8. ELEMENTOS DEL DOM
============================================================ */

function obtenerElemento(id) {

    return document.getElementById(id);

}


/* ============================================================
   9. CAMBIAR DE TEMA
============================================================ */

function cambiarTema(nombre, boton) {

    if (!temas[nombre]) {

        console.error(
            "No existe la categoría:",
            nombre
        );

        return;

    }


    /* --------------------------------------------
       SI NO HAY VIDAS
    -------------------------------------------- */

    if (vidas <= 0) {

        juegoBloqueadoPorVidas = true;

        mostrarAvisoSinVidas();

        return;

    }


    temaActual = nombre;


    marcarTemaActivo(boton);


    cargarTema();


    guardarProgreso();

}


/* ============================================================
   10. MARCAR BOTÓN ACTIVO
============================================================ */

function marcarTemaActivo(boton) {

    const botones =
        document.querySelectorAll(
            ".menu-btn"
        );


    botones.forEach(btn => {

        btn.classList.remove("activo");

    });


    if (boton) {

        boton.classList.add("activo");

        return;

    }


    const botonTema =
        document.querySelector(
            `.menu-btn[data-tema="${temaActual}"]`
        );


    if (botonTema) {

        botonTema.classList.add("activo");

    }

}


/* ============================================================
   11. CARGAR TEMA
============================================================ */

function cargarTema() {

    const tema =
        temas[temaActual];


    if (!tema) {

        return;

    }


    const titulo =
        obtenerElemento("tituloTema");

    const subtitulo =
        obtenerElemento("subtituloTema");

    const icono =
        obtenerElemento("iconoTema");

    const imagen =
        obtenerElemento("imagenTema");

    const dato =
        obtenerElemento("datoCurioso");

    const regiones =
        obtenerElemento("regiones");

    const sobreTexto =
        obtenerElemento("sobreTexto");


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


    if (imagen) {

        imagen.textContent =
            tema.imagen;

    }


    if (dato) {

        dato.textContent =
            tema.dato;

    }


    if (sobreTexto) {

        sobreTexto.textContent =
            `Explora ${tema.titulo.toLowerCase()} y descubre datos importantes de Alemania.`;

    }


    if (regiones) {

        regiones.innerHTML = "";

        tema.regiones.forEach(region => {

            const span =
                document.createElement("span");

            span.className =
                "region-tag";

            span.textContent =
                region;

            regiones.appendChild(span);

        });

    }


    cargarPregunta();

}


/* ============================================================
   12. OBTENER SIGUIENTE PREGUNTA DISPONIBLE
============================================================ */

function obtenerIndicePreguntaDisponible(nombre) {

    const tema =
        temas[nombre];

    const estado =
        estadoPreguntas[nombre];


    if (!tema || !estado) {

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
   13. CARGAR PREGUNTA
============================================================ */

function cargarPregunta() {

    const tema =
        temas[temaActual];

    const estado =
        estadoPreguntas[temaActual];


    if (!tema || !estado) {

        return;

    }


    respuestaContestada = false;


    const indice =
        obtenerIndicePreguntaDisponible(
            temaActual
        );


    /* --------------------------------------------
       CATEGORÍA COMPLETADA
    -------------------------------------------- */

    if (indice === -1) {

        estado.completada = true;

        indicePregunta =
            tema.preguntas.length - 1;


        mostrarCategoriaCompletada();

        actualizarMarcadores();

        guardarProgreso();

        return;

    }


    indicePregunta = indice;

    estado.preguntaActual = indice;


    preguntaActual =
        tema.preguntas[indice];


    const pregunta =
        obtenerElemento("preguntaReto");

    const opciones =
        obtenerElemento("opcionesReto");

    const resultado =
        obtenerElemento("resultado");

    const botonSiguiente =
        obtenerElemento("botonSiguiente");

    const numero =
        obtenerElemento("numeroPregunta");


    if (pregunta) {

        pregunta.textContent =
            preguntaActual.pregunta;

    }


    if (numero) {

        numero.textContent =
            `Pregunta ${indice + 1} de ${tema.preguntas.length}`;

    }


    if (resultado) {

        resultado.textContent = "";

        resultado.className =
            "resultado";

    }


    if (botonSiguiente) {

        botonSiguiente.disabled = true;

    }


    if (opciones) {

        opciones.innerHTML = "";

        crearOpciones(preguntaActual);

    }


    actualizarMensajeBot();

}


/* ============================================================
   14. CREAR OPCIONES
============================================================ */

function crearOpciones(pregunta) {

    const contenedor =
        obtenerElemento("opcionesReto");


    if (!contenedor) {

        return;

    }


    pregunta.opciones.forEach(opcionTexto => {

        const boton =
            document.createElement("button");


        boton.type = "button";

        boton.className =
            "opcion";

        boton.textContent =
            opcionTexto;


        boton.addEventListener(
            "click",
            () => {

                comprobarRespuesta(
                    opcionTexto,
                    boton
                );

            }
        );


        contenedor.appendChild(boton);

    });

}


/* ============================================================
   15. COMPROBAR RESPUESTA
============================================================ */

function comprobarRespuesta(
    respuesta,
    botonSeleccionado
) {

    if (respuestaContestada) {

        return;

    }


    if (vidas <= 0) {

        mostrarAvisoSinVidas();

        return;

    }


    if (!preguntaActual) {

        return;

    }


    respuestaContestada = true;


    const esCorrecta =
        respuesta ===
        preguntaActual.correcta;


    const botones =
        document.querySelectorAll(
            "#opcionesReto .opcion"
        );


    botones.forEach(boton => {

        boton.disabled = true;


        if (
            boton.textContent ===
            preguntaActual.correcta
        ) {

            boton.classList.add(
                "correcta"
            );

        }

    });


    const resultado =
        obtenerElemento("resultado");


    if (esCorrecta) {

        botonSeleccionado.classList.add(
            "correcta"
        );


        puntos += 10;

        respuestasCorrectas++;

        retosCompletados++;


        if (resultado) {

            resultado.className =
                "resultado correcto";

            resultado.textContent =
                "✅ ¡Correcto! Has ganado 10 puntos.";

        }


    } else {

        botonSeleccionado.classList.add(
            "incorrecta"
        );


        perderVida();


        if (resultado) {

            resultado.className =
                "resultado incorrecto";

            resultado.textContent =
                `❌ Respuesta incorrecta. La respuesta era: ${preguntaActual.correcta}.`;
        }

    }


    /* --------------------------------------------
       MARCAR PREGUNTA COMO RESPONDIDA
    -------------------------------------------- */

    const estado =
        estadoPreguntas[temaActual];


    if (
        estado &&
        !estado.respondidas.includes(
            indicePregunta
        )
    ) {

        estado.respondidas.push(
            indicePregunta
        );

    }


    if (
        estado &&
        estado.respondidas.length >=
        temas[temaActual].preguntas.length
    ) {

        estado.completada = true;

    }


    actualizarMarcadores();

    guardarProgreso();


    /* --------------------------------------------
       SI TODAVÍA TIENE VIDAS
    -------------------------------------------- */

    if (vidas > 0) {

        activarSiguiente();

    }

}


/* ============================================================
   16. PERDER VIDA
============================================================ */

function perderVida() {

    vidas--;

    if (vidas < 0) {

        vidas = 0;

    }


    actualizarMarcadores();


    if (vidas === 0) {

        juegoBloqueadoPorVidas = true;

        const botonSiguiente =
            obtenerElemento(
                "botonSiguiente"
            );


        if (botonSiguiente) {

            botonSiguiente.disabled = true;

        }


        guardarProgreso();


        setTimeout(() => {

            mostrarAvisoSinVidas();

        }, 450);

    }

}


/* ============================================================
   17. ACTIVAR SIGUIENTE
============================================================ */

function activarSiguiente() {

    const boton =
        obtenerElemento(
            "botonSiguiente"
        );


    if (!boton) {

        return;

    }


    boton.disabled = false;

}


/* ============================================================
   18. SIGUIENTE PREGUNTA
============================================================ */

function siguientePregunta() {

    if (!respuestaContestada) {

        return;

    }


    if (vidas <= 0) {

        mostrarAvisoSinVidas();

        return;

    }


    const tema =
        temas[temaActual];

    const estado =
        estadoPreguntas[temaActual];


    if (!tema || !estado) {

        return;

    }


    const siguiente =
        obtenerIndicePreguntaDisponible(
            temaActual
        );


    if (siguiente === -1) {

        estado.completada = true;

        mostrarCategoriaCompletada();

        actualizarMarcadores();

        guardarProgreso();

        return;

    }


    cargarPregunta();

}


/* ============================================================
   19. CATEGORÍA COMPLETADA
============================================================ */

function mostrarCategoriaCompletada() {

    const tema =
        temas[temaActual];


    const pregunta =
        obtenerElemento(
            "preguntaReto"
        );

    const opciones =
        obtenerElemento(
            "opcionesReto"
        );

    const resultado =
        obtenerElemento(
            "resultado"
        );

    const botonSiguiente =
        obtenerElemento(
            "botonSiguiente"
        );

    const numero =
        obtenerElemento(
            "numeroPregunta"
        );


    if (pregunta) {

        pregunta.innerHTML =
            `
            <div class="categoria-completada">
                <div class="icono-completado">🎉</div>
                <h3>¡Categoría completada!</h3>
                <p>
                    Has terminado las 5 preguntas de
                    ${tema.titulo}.
                    <br>
                    Puedes elegir otra categoría del menú.
                </p>
            </div>
            `;

    }


    if (opciones) {

        opciones.innerHTML = "";

    }


    if (resultado) {

        resultado.textContent = "";

    }


    if (numero) {

        numero.textContent =
            "5 de 5 completadas";

    }


    if (botonSiguiente) {

        botonSiguiente.disabled = true;

    }


    actualizarMensajeBot(
        `¡Excelente! Terminaste ${tema.titulo}. Elige otra categoría para continuar.`
    );

}


/* ============================================================
   20. ACTUALIZAR MENSAJE DEL ROBOT
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

    const total =
        temas[temaActual].preguntas.length;

    const respondidas =
        estado
            ? estado.respondidas.length
            : 0;


    mensaje.textContent =
        `Responde las preguntas de esta categoría. Has completado ${respondidas} de ${total}.`;

}


/* ============================================================
   21. ACTUALIZAR MARCADORES
============================================================ */

function actualizarMarcadores() {

    const puntosElemento =
        obtenerElemento("puntos");

    const vidasElemento =
        obtenerElemento("vidas");


    if (puntosElemento) {

        puntosElemento.textContent =
            puntos;

    }


    if (vidasElemento) {

        vidasElemento.textContent =
            vidas;

    }


    actualizarProgreso();


    /* --------------------------------------------
       COLOR DE VIDAS
    -------------------------------------------- */

    const vidasStat =
        document.querySelector(
            ".vidas-stat"
        );


    if (vidasStat) {

        vidasStat.classList.remove(
            "vidas-bajas",
            "vidas-cero"
        );


        if (vidas <= 2 && vidas > 0) {

            vidasStat.classList.add(
                "vidas-bajas"
            );

        }


        if (vidas === 0) {

            vidasStat.classList.add(
                "vidas-cero"
            );

        }

    }

}


/* ============================================================
   22. ACTUALIZAR PROGRESO
============================================================ */

function actualizarProgreso() {

    let totalRespondidas = 0;


    Object.keys(temas).forEach(nombre => {

        const estado =
            estadoPreguntas[nombre];


        if (estado) {

            totalRespondidas +=
                estado.respondidas.length;

        }

    });


    const porcentaje =
        Math.round(
            (totalRespondidas /
                TOTAL_PREGUNTAS) *
            100
        );


    const porcentajeSeguro =
        Math.max(
            0,
            Math.min(
                100,
                porcentaje
            )
        );


    const porcentajeElemento =
        obtenerElemento(
            "porcentaje"
        );


    const retosElemento =
        obtenerElemento(
            "retosCompletados"
        );


    const correctasElemento =
        obtenerElemento(
            "respuestasCorrectas"
        );


    const circulo =
        obtenerElemento(
            "circuloProgreso"
        );


    const mensaje =
        obtenerElemento(
            "mensajeProgreso"
        );


    if (porcentajeElemento) {

        porcentajeElemento.textContent =
            `${porcentajeSeguro}%`;

    }


    if (retosElemento) {

        retosElemento.textContent =
            totalRespondidas;

    }


    if (correctasElemento) {

        correctasElemento.textContent =
            respuestasCorrectas;

    }


    if (circulo) {

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
                porcentajeSeguro / 100
            );

    }


    if (mensaje) {

        if (porcentajeSeguro === 0) {

            mensaje.textContent =
                "¡Comienza tu aventura!";

        } else if (
            porcentajeSeguro < 25
        ) {

            mensaje.textContent =
                "¡Buen comienzo! Sigue explorando.";

        } else if (
            porcentajeSeguro < 50
        ) {

            mensaje.textContent =
                "¡Vas avanzando muy bien!";

        } else if (
            porcentajeSeguro < 75
        ) {

            mensaje.textContent =
                "¡Ya conoces bastante de Alemania!";

        } else if (
            porcentajeSeguro < 100
        ) {

            mensaje.textContent =
                "¡Estás muy cerca de completar la aventura!";

        } else {

            mensaje.textContent =
                "🏆 ¡Completaste toda la aventura de Alemania!";

        }

    }

}


/* ============================================================
   23. BLOQUEAR JUEGO
============================================================ */

function bloquearJuegoPorVidas() {

    juegoBloqueadoPorVidas = true;


    const botonesMenu =
        document.querySelectorAll(
            ".menu-btn"
        );


    botonesMenu.forEach(boton => {

        boton.classList.add(
            "bloqueado-vidas"
        );

    });


    const opciones =
        document.querySelectorAll(
            "#opcionesReto .opcion"
        );


    opciones.forEach(opcion => {

        opcion.disabled = true;

    });


    const siguiente =
        obtenerElemento(
            "botonSiguiente"
        );


    if (siguiente) {

        siguiente.disabled = true;

    }

}


/* ============================================================
   24. MOSTRAR AVISO SIN VIDAS
============================================================ */

function mostrarAvisoSinVidas() {

    if (vidas > 0) {

        return;

    }


    bloquearJuegoPorVidas();


    const modal =
        obtenerElemento(
            "modalRecuperacion"
        );


    if (!modal) {

        console.error(
            "No se encontró el modal de recuperación."
        );

        return;

    }


    const inicio =
        obtenerElemento(
            "inicioRecuperacion"
        );


    const preguntaBox =
        obtenerElemento(
            "preguntaRecuperacionBox"
        );


    const resultado =
        obtenerElemento(
            "resultadoRecuperacion"
        );


    const btnContinuar =
        obtenerElemento(
            "btnContinuarRecuperacion"
        );


    if (inicio) {

        inicio.style.display =
            "block";

    }


    if (preguntaBox) {

        preguntaBox.classList.remove(
            "activa"
        );

        preguntaBox.style.display =
            "none";

    }


    if (resultado) {

        resultado.textContent = "";

        resultado.className =
            "resultado-recuperacion";

    }


    if (btnContinuar) {

        btnContinuar.style.display =
            "none";

    }


    retoRecuperacionActivo = false;

    retoRecuperacionSuperado = false;


    modal.classList.add(
        "visible"
    );

}


/* ============================================================
   25. CERRAR MODAL
============================================================ */

function cerrarModalRecuperacion() {

    const modal =
        obtenerElemento(
            "modalRecuperacion"
        );


    if (!modal) {

        return;

    }


    modal.classList.remove(
        "visible"
    );


    /* --------------------------------------------
       SI SIGUE EN 0, CONTINÚA BLOQUEADO
    -------------------------------------------- */

    if (vidas <= 0) {

        juegoBloqueadoPorVidas = true;

    }

}


/* ============================================================
   26. COMENZAR RETO DE RECUPERACIÓN
============================================================ */

function comenzarRetoRecuperacion() {

    if (vidas > 0) {

        cerrarModalRecuperacion();

        return;

    }


    retoRecuperacionActivo = true;

    retoRecuperacionSuperado = false;


    const inicio =
        obtenerElemento(
            "inicioRecuperacion"
        );


    const preguntaBox =
        obtenerElemento(
            "preguntaRecuperacionBox"
        );


    if (inicio) {

        inicio.style.display =
            "none";

    }


    if (preguntaBox) {

        preguntaBox.style.display =
            "block";

        preguntaBox.classList.add(
            "activa"
        );

    }


    cargarPreguntaRecuperacion();

}


/* ============================================================
   27. PREGUNTA DE RECUPERACIÓN
============================================================ */

function cargarPreguntaRecuperacion() {

    const preguntasRecuperacion = [

        {
            pregunta:
                "¿En qué año cayó el Muro de Berlín?",

            opciones: [
                "1961",
                "1989",
                "1990",
                "1945"
            ],

            correcta: "1989"
        },

        {
            pregunta:
                "¿Cuántos estados federados tiene Alemania?",

            opciones: [
                "10",
                "12",
                "16",
                "20"
            ],

            correcta: "16"
        },

        {
            pregunta:
                "¿En qué año se produjo la reunificación alemana?",

            opciones: [
                "1989",
                "1990",
                "1945",
                "1961"
            ],

            correcta: "1990"
        }

    ];


    const pregunta =
        preguntasRecuperacion[
            Math.floor(
                Math.random() *
                preguntasRecuperacion.length
            )
        ];


    const preguntaElemento =
        obtenerElemento(
            "preguntaRecuperacion"
        );


    const opcionesElemento =
        obtenerElemento(
            "opcionesRecuperacion"
        );


    const resultado =
        obtenerElemento(
            "resultadoRecuperacion"
        );


    const btnContinuar =
        obtenerElemento(
            "btnContinuarRecuperacion"
        );


    if (preguntaElemento) {

        preguntaElemento.textContent =
            pregunta.pregunta;

    }


    if (opcionesElemento) {

        opcionesElemento.innerHTML = "";

    }


    if (resultado) {

        resultado.textContent = "";

        resultado.className =
            "resultado-recuperacion";

    }


    if (btnContinuar) {

        btnContinuar.style.display =
            "none";

    }


    pregunta.opciones.forEach(
        opcionTexto => {

            const boton =
                document.createElement(
                    "button"
                );


            boton.type = "button";

            boton.className =
                "opcion-recuperacion";

            boton.textContent =
                opcionTexto;


            boton.addEventListener(
                "click",
                () => {

                    comprobarRecuperacion(
                        opcionTexto,
                        pregunta,
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


/* ============================================================
   28. COMPROBAR RECUPERACIÓN
============================================================ */

function comprobarRecuperacion(
    respuesta,
    pregunta,
    botonSeleccionado
) {

    if (
        !retoRecuperacionActivo ||
        retoRecuperacionSuperado
    ) {

        return;

    }


    const botones =
        document.querySelectorAll(
            "#opcionesRecuperacion .opcion-recuperacion"
        );


    if (
        botonSeleccionado.disabled
    ) {

        return;

    }


    const esCorrecta =
        respuesta ===
        pregunta.correcta;


    if (esCorrecta) {

        retoRecuperacionSuperado =
            true;


        botones.forEach(
            boton => {

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

            }
        );


        botonSeleccionado.classList.add(
            "correcta"
        );


        const resultado =
            obtenerElemento(
                "resultadoRecuperacion"
            );


        if (resultado) {

            resultado.className =
                "resultado-recuperacion correcto";

            resultado.textContent =
                "🎉 ¡Excelente! Has recuperado 5 vidas.";

        }


        const btnContinuar =
            obtenerElemento(
                "btnContinuarRecuperacion"
            );


        if (btnContinuar) {

            btnContinuar.style.display =
                "block";

        }


        return;

    }


    /* --------------------------------------------
       RESPUESTA INCORRECTA
       NO QUITA VIDA
    -------------------------------------------- */

    botonSeleccionado.disabled = true;

    botonSeleccionado.classList.add(
        "incorrecta"
    );


    const resultado =
        obtenerElemento(
            "resultadoRecuperacion"
        );


    if (resultado) {

        resultado.className =
            "resultado-recuperacion incorrecto";

        resultado.textContent =
            "❌ Esa no es la respuesta. Intenta con otra opción.";

    }

}


/* ============================================================
   29. CONTINUAR DESPUÉS DE RECUPERACIÓN
============================================================ */

function continuarDespuesRecuperacion() {

    if (!retoRecuperacionSuperado) {

        return;

    }


    vidas = MAX_VIDAS;

    juegoBloqueadoPorVidas = false;

    retoRecuperacionActivo = false;

    retoRecuperacionSuperado = false;


    actualizarMarcadores();


    cerrarModalRecuperacion();


    const botonTema =
        document.querySelector(
            `.menu-btn[data-tema="${temaActual}"]`
        );


    marcarTemaActivo(
        botonTema
    );


    cargarPregunta();


    guardarProgreso();


    actualizarMensajeBot(
        "❤️‍🩹 ¡Vidas recuperadas! Puedes continuar tu aventura."
    );

}


/* ============================================================
   30. AUDIO
============================================================ */

function reproducirAudio() {

    if (
        !("speechSynthesis" in window)
    ) {

        alert(
            "Tu navegador no permite reproducir audio automáticamente."
        );

        return;

    }


    const tema =
        temas[temaActual];


    if (!tema) {

        return;

    }


    window.speechSynthesis.cancel();


    const texto =
        `${tema.titulo}. ${tema.dato}`;


    const voz =
        new SpeechSynthesisUtterance(
            texto
        );


    voz.lang = "es-ES";

    voz.rate = 0.9;

    voz.pitch = 1;


    window.speechSynthesis.speak(
        voz
    );

}


/* ============================================================
   31. FUNCIÓN ESCUCHAR
============================================================ */

function escuchar() {

    reproducirAudio();

}


/* ============================================================
   32. REINICIAR PARTIDA
   ÚTIL PARA HACER PRUEBAS
============================================================ */

function reiniciarAlemania() {

    localStorage.removeItem(
        CLAVE_GUARDADO
    );

    location.reload();

}


/* ============================================================
   33. HACER FUNCIONES VISIBLES PARA EL HTML
============================================================ */

window.cambiarTema =
    cambiarTema;

window.siguientePregunta =
    siguientePregunta;

window.reproducirAudio =
    reproducirAudio;

window.escuchar =
    escuchar;

window.cerrarModalRecuperacion =
    cerrarModalRecuperacion;

window.comenzarRetoRecuperacion =
    comenzarRetoRecuperacion;

window.continuarDespuesRecuperacion =
    continuarDespuesRecuperacion;

window.reiniciarAlemania =
    reiniciarAlemania;


/* ============================================================
   34. INICIAR JUEGO
============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /* ----------------------------------------
           CARGAR PROGRESO
        ----------------------------------------- */

        cargarProgreso();


        /* ----------------------------------------
           GARANTIZAR VALORES VÁLIDOS
        ----------------------------------------- */

        if (!Number.isFinite(vidas)) {

            vidas = MAX_VIDAS;

        }


        vidas =
            Math.max(
                0,
                Math.min(
                    MAX_VIDAS,
                    vidas
                )
            );


        /* ----------------------------------------
           MARCAR CATEGORÍA
        ----------------------------------------- */

        marcarTemaActivo();


        /* ----------------------------------------
           ACTUALIZAR MARCADORES
        ----------------------------------------- */

        actualizarMarcadores();


        /* ----------------------------------------
           CARGAR TEMA
        ----------------------------------------- */

        cargarTema();


        /* ----------------------------------------
           SI ESTÁ EN 0 VIDAS
        ----------------------------------------- */

        if (vidas <= 0) {

            juegoBloqueadoPorVidas =
                true;


            bloquearJuegoPorVidas();


            setTimeout(
                () => {

                    mostrarAvisoSinVidas();

                },
                500
            );

        }

    }
);


/* ============================================================
   35. GUARDAR ANTES DE SALIR
============================================================ */

window.addEventListener(
    "beforeunload",
    () => {

        guardarProgreso();

        if (
            "speechSynthesis" in window
        ) {

            window.speechSynthesis.cancel();

        }

    }
);