/* ============================================================
   HISTORIA SIN FRONTERAS - COLOMBIA
   JAVASCRIPT COMPLETO

   14 CATEGORÍAS
   5 PREGUNTAS POR CATEGORÍA
   SISTEMA DE 5 VIDAS
   RETO DE RECUPERACIÓN
============================================================ */


/* ============================================================
   1. CONFIGURACIÓN
============================================================ */

const CLAVE_GUARDADO =
    "historiaSinFronterasColombia_v7";

const MAX_VIDAS = 5;


/* ============================================================
   2. TEMAS Y PREGUNTAS
============================================================ */

const temas = {

    /* ========================================================
       HISTORIA - PRIMERAS CIVILIZACIONES
    ======================================================== */

    "primeras-civilizaciones": {

        titulo: "Primeras civilizaciones",
        subtitulo: "Los pueblos que habitaron Colombia antes de la llegada de los españoles",
        icono: "🏺",
        imagen: "🏺",

        dato:
            "Antes de la llegada de los españoles, el territorio colombiano estaba habitado por diferentes pueblos indígenas como los muiscas, taironas, quimbayas y zenúes.",

        regiones: [
            "Altiplano Cundiboyacense",
            "Sierra Nevada de Santa Marta",
            "Valle del Cauca",
            "Región Caribe"
        ],

        preguntas: [

            {
                pregunta:
                    "¿Qué pueblo indígena habitó principalmente el Altiplano Cundiboyacense?",

                opciones: [
                    "Muiscas",
                    "Taironas",
                    "Quimbayas",
                    "Zenúes"
                ],

                correcta: "Muiscas"
            },

            {
                pregunta:
                    "¿En qué región se desarrolló principalmente la cultura tairona?",

                opciones: [
                    "Sierra Nevada de Santa Marta",
                    "Altiplano Cundiboyacense",
                    "Valle del río Cauca",
                    "Llanos Orientales"
                ],

                correcta: "Sierra Nevada de Santa Marta"
            },

            {
                pregunta:
                    "¿Por qué son especialmente conocidos los quimbayas?",

                opciones: [
                    "Por su orfebrería",
                    "Por sus grandes murallas",
                    "Por sus barcos de navegación oceánica",
                    "Por sus construcciones de hielo"
                ],

                correcta: "Por su orfebrería"
            },

            {
                pregunta:
                    "¿Qué desarrollaron los zenúes para controlar el agua?",

                opciones: [
                    "Canales de drenaje y manejo del agua",
                    "Acueductos romanos",
                    "Represas industriales",
                    "Puertos marítimos modernos"
                ],

                correcta:
                    "Canales de drenaje y manejo del agua"
            },

            {
                pregunta:
                    "¿Cuál fue una actividad fundamental para muchos pueblos indígenas de la Colombia prehispánica?",

                opciones: [
                    "Agricultura",
                    "Producción industrial",
                    "Fabricación de automóviles",
                    "Extracción de petróleo"
                ],

                correcta: "Agricultura"
            }

        ]
    },


    /* ========================================================
       HISTORIA - CONQUISTA
    ======================================================== */

    conquista: {

        titulo: "Conquista",
        subtitulo: "La llegada de los españoles al territorio colombiano",
        icono: "⛵",
        imagen: "🧭",

        dato:
            "Durante el siglo XVI los españoles exploraron y conquistaron diferentes territorios de la actual Colombia, generando grandes transformaciones sociales y culturales.",

        regiones: [
            "Caribe",
            "Altiplano Cundiboyacense",
            "Santa Marta",
            "Cartagena"
        ],

        preguntas: [

            {
                pregunta:
                    "¿En qué siglo comenzó la conquista española del territorio colombiano?",

                opciones: [
                    "Siglo XVI",
                    "Siglo XV",
                    "Siglo XVII",
                    "Siglo XVIII"
                ],

                correcta: "Siglo XVI"
            },

            {
                pregunta:
                    "¿Qué conquistador español estuvo relacionado con la exploración del territorio muisca?",

                opciones: [
                    "Gonzalo Jiménez de Quesada",
                    "Pedro de Heredia",
                    "Sebastián de Belalcázar",
                    "Rodrigo de Bastidas"
                ],

                correcta:
                    "Gonzalo Jiménez de Quesada"
            },

            {
                pregunta:
                    "¿En qué región se encontraba gran parte del territorio muisca?",

                opciones: [
                    "Altiplano Cundiboyacense",
                    "Sierra Nevada de Santa Marta",
                    "Llanos Orientales",
                    "Amazonía"
                ],

                correcta:
                    "Altiplano Cundiboyacense"
            },

            {
                pregunta:
                    "¿Qué establecieron los españoles en diferentes lugares durante la conquista?",

                opciones: [
                    "Nuevos asentamientos y poblaciones",
                    "Repúblicas independientes",
                    "Industrias modernas",
                    "Sistemas democráticos actuales"
                ],

                correcta:
                    "Nuevos asentamientos y poblaciones"
            },

            {
                pregunta:
                    "¿Cuál fue una consecuencia de la conquista española?",

                opciones: [
                    "Transformaciones políticas, sociales y culturales",
                    "La desaparición inmediata de todas las culturas indígenas",
                    "La industrialización del territorio",
                    "La creación inmediata de la República de Colombia"
                ],

                correcta:
                    "Transformaciones políticas, sociales y culturales"
            }

        ]
    },


    /* ========================================================
       HISTORIA - ÉPOCA COLONIAL
    ======================================================== */

    "epoca-colonial": {

        titulo: "Época colonial",
        subtitulo: "Colombia bajo el dominio español",
        icono: "🏰",
        imagen: "⛪",

        dato:
            "Durante la época colonial, el territorio colombiano estuvo bajo el dominio de España y se desarrollaron actividades económicas, instituciones y expresiones culturales propias de ese periodo.",

        regiones: [
            "Cartagena",
            "Bogotá",
            "Popayán",
            "Santa Marta"
        ],

        preguntas: [

            {
                pregunta:
                    "¿Qué potencia europea dominó el territorio colombiano durante la época colonial?",

                opciones: [
                    "España",
                    "Portugal",
                    "Francia",
                    "Países Bajos"
                ],

                correcta: "España"
            },

            {
                pregunta:
                    "¿Cuál fue uno de los principales puertos coloniales del Caribe colombiano?",

                opciones: [
                    "Cartagena de Indias",
                    "Tunja",
                    "Popayán",
                    "Bogotá"
                ],

                correcta: "Cartagena de Indias"
            },

            {
                pregunta:
                    "¿Cuál fue una actividad económica importante durante la época colonial?",

                opciones: [
                    "Minería",
                    "Industria automotriz",
                    "Programación informática",
                    "Industria aeroespacial"
                ],

                correcta: "Minería"
            },

            {
                pregunta:
                    "¿Qué tipo de instituciones existieron durante el periodo colonial?",

                opciones: [
                    "Instituciones coloniales",
                    "Instituciones republicanas modernas",
                    "Instituciones digitales",
                    "Instituciones industriales"
                ],

                correcta: "Instituciones coloniales"
            },

            {
                pregunta:
                    "¿Qué grupos tuvieron influencia en la cultura colonial de Colombia?",

                opciones: [
                    "Indígenas, españoles y africanos",
                    "Solamente españoles",
                    "Solamente indígenas",
                    "Solamente africanos"
                ],

                correcta:
                    "Indígenas, españoles y africanos"
            }

        ]
    },


    /* ========================================================
       HISTORIA - INDEPENDENCIA
    ======================================================== */

    independencia: {

        titulo: "Independencia",
        subtitulo: "El proceso que llevó a la independencia de Colombia",
        icono: "🇨🇴",
        imagen: "🗡️",

        dato:
            "El proceso de independencia de Colombia comenzó a desarrollarse a comienzos del siglo XIX y tuvo acontecimientos importantes como el 20 de julio de 1810 y la Batalla de Boyacá.",

        regiones: [
            "Bogotá",
            "Boyacá",
            "Cundinamarca",
            "Nueva Granada"
        ],

        preguntas: [

            {
                pregunta:
                    "¿En qué año ocurrió la Batalla de Boyacá?",

                opciones: [
                    "1819",
                    "1810",
                    "1821",
                    "1830"
                ],

                correcta: "1819"
            },

            {
                pregunta:
                    "¿Qué fecha se relaciona con el inicio del proceso de independencia de Colombia?",

                opciones: [
                    "20 de julio de 1810",
                    "7 de agosto de 1819",
                    "12 de octubre de 1492",
                    "11 de noviembre de 1811"
                ],

                correcta:
                    "20 de julio de 1810"
            },

            {
                pregunta:
                    "¿Cuál de estos personajes tuvo un papel importante en la independencia?",

                opciones: [
                    "Simón Bolívar",
                    "José Celestino Mutis",
                    "Jorge Isaacs",
                    "Gabriel García Márquez"
                ],

                correcta: "Simón Bolívar"
            },

            {
                pregunta:
                    "¿Cuál fue una batalla decisiva para la independencia de la Nueva Granada?",

                opciones: [
                    "Batalla de Boyacá",
                    "Batalla de Palonegro",
                    "Batalla de La Humareda",
                    "Batalla de Peralonso"
                ],

                correcta: "Batalla de Boyacá"
            },

            {
                pregunta:
                    "¿En qué siglo se desarrolló principalmente el proceso de independencia de Colombia?",

                opciones: [
                    "Siglo XIX",
                    "Siglo XVI",
                    "Siglo XVII",
                    "Siglo XX"
                ],

                correcta: "Siglo XIX"
            }

        ]
    },


    /* ========================================================
       HISTORIA - PERSONAJES HISTÓRICOS
    ======================================================== */

    "personajes-historicos": {

        titulo: "Personajes históricos",
        subtitulo: "Personas que dejaron huella en la historia de Colombia",
        icono: "👤",
        imagen: "📜",

        dato:
            "La historia de Colombia cuenta con personajes que participaron en procesos políticos, científicos, sociales y culturales.",

        regiones: [
            "Bogotá",
            "Boyacá",
            "Santander",
            "Nueva Granada"
        ],

        preguntas: [

            {
                pregunta:
                    "¿Con qué título es conocido Simón Bolívar?",

                opciones: [
                    "El Libertador",
                    "El Sabio",
                    "El Precursor",
                    "El Hombre de las Leyes"
                ],

                correcta: "El Libertador"
            },

            {
                pregunta:
                    "¿Quién fue conocida como La Pola?",

                opciones: [
                    "Policarpa Salavarrieta",
                    "Manuela Sáenz",
                    "Antonia Santos",
                    "Mercedes Ábrego"
                ],

                correcta:
                    "Policarpa Salavarrieta"
            },

            {
                pregunta:
                    "¿Qué personaje fue importante en la organización política de la nueva república?",

                opciones: [
                    "Francisco de Paula Santander",
                    "José Celestino Mutis",
                    "Jorge Isaacs",
                    "Rafael Pombo"
                ],

                correcta:
                    "Francisco de Paula Santander"
            },

            {
                pregunta:
                    "¿Qué personaje participó en los procesos de independencia de varios territorios de Sudamérica?",

                opciones: [
                    "Simón Bolívar",
                    "Francisco José de Caldas",
                    "Jorge Isaacs",
                    "José Celestino Mutis"
                ],

                correcta: "Simón Bolívar"
            },

            {
                pregunta:
                    "¿Qué mujer es reconocida como símbolo de la independencia de Colombia?",

                opciones: [
                    "Policarpa Salavarrieta",
                    "Débora Arango",
                    "María Cano",
                    "Soledad Acosta"
                ],

                correcta:
                    "Policarpa Salavarrieta"
            }

        ]
    },


    /* ========================================================
       HISTORIA - CONFLICTOS IMPORTANTES
    ======================================================== */

    "conflictos-importantes": {

        titulo: "Conflictos importantes",
        subtitulo: "Comprender los conflictos para conocer la historia",
        icono: "🕊️",
        imagen: "🤝",

        dato:
            "Los conflictos forman parte de la historia de las sociedades. Estudiarlos permite comprender sus causas, consecuencias y los procesos utilizados para construir la paz.",

        regiones: [
            "Colombia",
            "Región Andina",
            "Región Caribe",
            "Región Pacífica"
        ],

        preguntas: [

            {
                pregunta:
                    "¿Qué permite comprender el estudio de los conflictos históricos?",

                opciones: [
                    "Cambios políticos y sociales",
                    "Solamente cambios climáticos",
                    "Solamente avances tecnológicos",
                    "Solamente cambios en el transporte"
                ],

                correcta:
                    "Cambios políticos y sociales"
            },

            {
                pregunta:
                    "¿Cuál puede ser un mecanismo para resolver conflictos?",

                opciones: [
                    "Diálogo y negociación",
                    "Imposición y rechazo",
                    "Aislamiento y confrontación",
                    "Exclusión y discriminación"
                ],

                correcta:
                    "Diálogo y negociación"
            },

            {
                pregunta:
                    "¿A quiénes pueden afectar los conflictos sociales?",

                opciones: [
                    "A las comunidades y relaciones sociales",
                    "Solamente a los edificios",
                    "Solamente a los recursos naturales",
                    "Solamente a las carreteras"
                ],

                correcta:
                    "A las comunidades y relaciones sociales"
            },

            {
                pregunta:
                    "¿Qué busca la construcción de paz?",

                opciones: [
                    "Mejorar la convivencia y atender las causas de los conflictos",
                    "Aumentar las diferencias",
                    "Evitar cualquier tipo de diálogo",
                    "Mantener las confrontaciones"
                ],

                correcta:
                    "Mejorar la convivencia y atender las causas de los conflictos"
            },

            {
                pregunta:
                    "¿Qué debe analizarse para comprender históricamente un conflicto?",

                opciones: [
                    "Causas, consecuencias y contexto",
                    "Solamente nombres",
                    "Solamente fechas",
                    "Solamente lugares"
                ],

                correcta:
                    "Causas, consecuencias y contexto"
            }

        ]
    },


    /* ========================================================
       CULTURA - GASTRONOMÍA
    ======================================================== */

    gastronomia: {

        titulo: "Gastronomía",
        subtitulo: "Sabores que cuentan historias",
        icono: "🍽️",
        imagen: "🫓",

        dato:
            "La gastronomía colombiana es diversa y refleja las tradiciones de las diferentes regiones del país.",

        regiones: [
            "Caribe",
            "Andina",
            "Pacífica",
            "Orinoquía"
        ],

        preguntas: [

            {
                pregunta:
                    "¿Cuál de estos alimentos es representativo de la gastronomía colombiana?",

                opciones: [
                    "Arepa",
                    "Sushi",
                    "Ramen",
                    "Croissant"
                ],

                correcta: "Arepa"
            },

            {
                pregunta:
                    "¿Cuál de estos platos está relacionado con la región Caribe colombiana?",

                opciones: [
                    "Arroz con coco",
                    "Ajiaco santafereño",
                    "Mute santandereano",
                    "Lechona tolimense"
                ],

                correcta:
                    "Arroz con coco"
            },

            {
                pregunta:
                    "¿Cuál de estos ingredientes es fundamental en muchas preparaciones tradicionales colombianas?",

                opciones: [
                    "Maíz",
                    "Alga nori",
                    "Wasabi",
                    "Aceituna negra"
                ],

                correcta: "Maíz"
            },

            {
                pregunta:
                    "¿Con qué lugar se relaciona especialmente el ajiaco santafereño?",

                opciones: [
                    "Bogotá y la región Andina",
                    "Región Caribe",
                    "Región Amazónica",
                    "Región Orinoquía"
                ],

                correcta:
                    "Bogotá y la región Andina"
            },

            {
                pregunta:
                    "¿Qué característica destaca en la gastronomía colombiana?",

                opciones: [
                    "La diversidad de preparaciones regionales",
                    "La existencia de un único plato nacional",
                    "El uso exclusivo de ingredientes importados",
                    "La ausencia de comidas regionales"
                ],

                correcta:
                    "La diversidad de preparaciones regionales"
            }

        ]
    },


    /* ========================================================
       CULTURA - MÚSICA Y BAILES
    ======================================================== */

    "musica-y-bailes": {

        titulo: "Música y bailes",
        subtitulo: "Ritmos que representan la diversidad de Colombia",
        icono: "🎵",
        imagen: "💃",

        dato:
            "La música y los bailes colombianos reflejan la diversidad cultural del país y las tradiciones de sus diferentes regiones.",

        regiones: [
            "Caribe",
            "Pacífico",
            "Andina",
            "Orinoquía"
        ],

        preguntas: [

            {
                pregunta:
                    "¿Cuál de estos es un ritmo tradicional colombiano?",

                opciones: [
                    "Cumbia",
                    "Tango",
                    "Flamenco",
                    "Fado"
                ],

                correcta: "Cumbia"
            },

            {
                pregunta:
                    "¿Cuál de estos géneros está especialmente relacionado con la región Caribe?",

                opciones: [
                    "Vallenato",
                    "Tango",
                    "Pasodoble",
                    "Flamenco"
                ],

                correcta: "Vallenato"
            },

            {
                pregunta:
                    "¿Cuál de estos instrumentos es característico del vallenato?",

                opciones: [
                    "Acordeón",
                    "Arpa celta",
                    "Marimba africana",
                    "Violín clásico"
                ],

                correcta: "Acordeón"
            },

            {
                pregunta:
                    "¿En qué región colombiana es tradicional el joropo?",

                opciones: [
                    "Orinoquía",
                    "Caribe",
                    "Pacífico",
                    "Amazonía"
                ],

                correcta: "Orinoquía"
            },

            {
                pregunta:
                    "¿Qué ciudad colombiana es reconocida por su tradición salsera?",

                opciones: [
                    "Cali",
                    "Pasto",
                    "Tunja",
                    "Riohacha"
                ],

                correcta: "Cali"
            }

        ]
    },


    /* ========================================================
       CULTURA - TRADICIONES
    ======================================================== */

    tradiciones: {

        titulo: "Tradiciones",
        subtitulo: "Costumbres que pasan de generación en generación",
        icono: "🎭",
        imagen: "🪅",

        dato:
            "Las tradiciones colombianas incluyen celebraciones, comidas, música, costumbres y expresiones culturales que se transmiten entre generaciones.",

        regiones: [
            "Caribe",
            "Andina",
            "Pacífica",
            "Amazonía"
        ],

        preguntas: [

            {
                pregunta:
                    "¿Cómo se transmiten muchas tradiciones culturales?",

                opciones: [
                    "De generación en generación",
                    "Solamente por internet",
                    "Solamente por los medios de comunicación",
                    "Solamente en las escuelas"
                ],

                correcta:
                    "De generación en generación"
            },

            {
                pregunta:
                    "¿Qué pueden incluir las tradiciones culturales?",

                opciones: [
                    "Celebraciones, comida, música y costumbres",
                    "Solamente leyes",
                    "Solamente deportes",
                    "Solamente tecnología"
                ],

                correcta:
                    "Celebraciones, comida, música y costumbres"
            },

            {
                pregunta:
                    "¿Qué ayudan a conservar las tradiciones?",

                opciones: [
                    "La identidad y la memoria cultural",
                    "Solamente la industria",
                    "Solamente la tecnología",
                    "Solamente las carreteras"
                ],

                correcta:
                    "La identidad y la memoria cultural"
            },

            {
                pregunta:
                    "¿De qué pueden depender las diferencias entre las tradiciones colombianas?",

                opciones: [
                    "De las regiones y comunidades",
                    "Solamente del clima",
                    "Solamente del tamaño de las ciudades",
                    "Solamente de la edad de las personas"
                ],

                correcta:
                    "De las regiones y comunidades"
            },

            {
                pregunta:
                    "¿Por qué es importante conservar las tradiciones?",

                opciones: [
                    "Porque ayudan a mantener la memoria y la identidad",
                    "Porque eliminan todas las diferencias",
                    "Porque reemplazan las costumbres",
                    "Porque hacen iguales a todas las regiones"
                ],

                correcta:
                    "Porque ayudan a mantener la memoria y la identidad"
            }

        ]
    },


    /* ========================================================
       CULTURA - RELIGIONES
    ======================================================== */

    religiones: {

        titulo: "Religiones",
        subtitulo: "Diversidad de creencias y expresiones culturales",
        icono: "🕊️",
        imagen: "⛪",

        dato:
            "La libertad religiosa permite que las personas puedan practicar diferentes creencias, siempre dentro del respeto hacia los demás.",

        regiones: [
            "Andina",
            "Caribe",
            "Pacífica",
            "Amazonía"
        ],

        preguntas: [

            {
                pregunta:
                    "¿Qué permite la libertad religiosa?",

                opciones: [
                    "La existencia de diferentes creencias",
                    "La obligación de seguir una sola creencia",
                    "La prohibición de todas las prácticas religiosas",
                    "La eliminación de las expresiones culturales"
                ],

                correcta:
                    "La existencia de diferentes creencias"
            },

            {
                pregunta:
                    "¿Cuál es un valor importante para la convivencia entre diferentes creencias?",

                opciones: [
                    "Respeto",
                    "Intolerancia",
                    "Discriminación",
                    "Exclusión"
                ],

                correcta: "Respeto"
            },

            {
                pregunta:
                    "¿De qué forma hace parte la diversidad religiosa de la sociedad?",

                opciones: [
                    "De la diversidad cultural",
                    "De la industria",
                    "De la tecnología",
                    "De los deportes"
                ],

                correcta:
                    "De la diversidad cultural"
            },

            {
                pregunta:
                    "¿Qué pueden tener las comunidades religiosas?",

                opciones: [
                    "Creencias, prácticas y celebraciones",
                    "Una sola celebración obligatoria",
                    "Las mismas prácticas en todos los casos",
                    "Una única tradición para todas las comunidades"
                ],

                correcta:
                    "Creencias, prácticas y celebraciones"
            },

            {
                pregunta:
                    "¿Cuál es una actitud adecuada frente a diferentes creencias?",

                opciones: [
                    "Reconocer y respetar las diferencias",
                    "Imponer las propias creencias",
                    "Excluir a quienes piensan diferente",
                    "Desacreditar otras creencias"
                ],

                correcta:
                    "Reconocer y respetar las diferencias"
            }

        ]
    },


    /* ========================================================
       CULTURA - VESTIMENTA TÍPICA
    ======================================================== */

    "vestimenta-tipica": {

        titulo: "Vestimenta típica",
        subtitulo: "Ropa que representa tradiciones e identidad",
        icono: "👗",
        imagen: "👒",

        dato:
            "La vestimenta tradicional colombiana varía según la región y suele estar relacionada con fiestas, bailes y otras expresiones culturales.",

        regiones: [
            "Caribe",
            "Andina",
            "Pacífica",
            "Llanos"
        ],

        preguntas: [

            {
                pregunta:
                    "¿Qué puede influir en la vestimenta típica de una región?",

                opciones: [
                    "La región y el contexto cultural",
                    "La tecnología",
                    "El tamaño de la ciudad",
                    "La industria"
                ],

                correcta:
                    "La región y el contexto cultural"
            },

            {
                pregunta:
                    "¿En qué ocasiones se utiliza especialmente la vestimenta tradicional?",

                opciones: [
                    "Fiestas, bailes y eventos culturales",
                    "En fábricas industriales",
                    "En laboratorios",
                    "Solamente en oficinas"
                ],

                correcta:
                    "Fiestas, bailes y eventos culturales"
            },

            {
                pregunta:
                    "¿Qué elementos pueden formar parte de una vestimenta tradicional?",

                opciones: [
                    "Colores, prendas y accesorios",
                    "Solamente zapatos",
                    "Solamente un color",
                    "Solamente materiales modernos"
                ],

                correcta:
                    "Colores, prendas y accesorios"
            },

            {
                pregunta:
                    "¿Qué puede expresar la vestimenta tradicional?",

                opciones: [
                    "Identidad cultural",
                    "Tecnología",
                    "Economía",
                    "Política"
                ],

                correcta: "Identidad cultural"
            },

            {
                pregunta:
                    "¿Con qué expresión cultural se relaciona especialmente la vestimenta típica?",

                opciones: [
                    "Bailes tradicionales",
                    "Programación",
                    "Astronomía",
                    "Ciencias naturales"
                ],

                correcta: "Bailes tradicionales"
            }

        ]
    },


    /* ========================================================
       CULTURA - ARTE Y LITERATURA
    ======================================================== */

    "arte-y-literatura": {

        titulo: "Arte y literatura",
        subtitulo: "Creatividad y expresión cultural de Colombia",
        icono: "🎨",
        imagen: "📚",

        dato:
            "El arte y la literatura colombiana han producido importantes obras y autores que forman parte de la cultura nacional e internacional.",

        regiones: [
            "Bogotá",
            "Caribe",
            "Antioquia",
            "Región Andina"
        ],

        preguntas: [

            {
                pregunta:
                    "¿Qué escritor colombiano recibió el Premio Nobel de Literatura?",

                opciones: [
                    "Gabriel García Márquez",
                    "Jorge Isaacs",
                    "Rafael Pombo",
                    "José Asunción Silva"
                ],

                correcta:
                    "Gabriel García Márquez"
            },

            {
                pregunta:
                    "¿Quién escribió Cien años de soledad?",

                opciones: [
                    "Gabriel García Márquez",
                    "Jorge Isaacs",
                    "Álvaro Mutis",
                    "José Eustasio Rivera"
                ],

                correcta:
                    "Gabriel García Márquez"
            },

            {
                pregunta:
                    "¿Qué pueden expresar el arte y la literatura?",

                opciones: [
                    "Ideas, experiencias y elementos culturales",
                    "Solamente información económica",
                    "Solamente datos científicos",
                    "Solamente leyes"
                ],

                correcta:
                    "Ideas, experiencias y elementos culturales"
            },

            {
                pregunta:
                    "¿Cuál de estas actividades pertenece principalmente a la literatura?",

                opciones: [
                    "Escribir novelas",
                    "Construir carreteras",
                    "Fabricar máquinas",
                    "Realizar experimentos químicos"
                ],

                correcta:
                    "Escribir novelas"
            },

            {
                pregunta:
                    "¿En qué año recibió Gabriel García Márquez el Premio Nobel de Literatura?",

                opciones: [
                    "1982",
                    "1972",
                    "1992",
                    "2002"
                ],

                correcta: "1982"
            }

        ]
    },


    /* ========================================================
       CULTURA - MONUMENTOS
    ======================================================== */

    monumentos: {

        titulo: "Monumentos",
        subtitulo: "Lugares que conservan la memoria de Colombia",
        icono: "🏛️",
        imagen: "⛪",

        dato:
            "Los monumentos y lugares históricos permiten conservar la memoria y conocer diferentes aspectos de la historia y la cultura colombiana.",

        regiones: [
            "Nariño",
            "Bogotá",
            "Cartagena",
            "Antioquia"
        ],

        preguntas: [

            {
                pregunta:
                    "¿Qué ayudan a conservar los monumentos históricos?",

                opciones: [
                    "La memoria y el patrimonio",
                    "Solamente el comercio",
                    "Solamente la tecnología",
                    "Solamente los deportes"
                ],

                correcta:
                    "La memoria y el patrimonio"
            },

            {
                pregunta:
                    "¿En qué departamento se encuentra el Santuario de Las Lajas?",

                opciones: [
                    "Nariño",
                    "Antioquia",
                    "Atlántico",
                    "Meta"
                ],

                correcta: "Nariño"
            },

            {
                pregunta:
                    "¿Qué puede representar un monumento histórico?",

                opciones: [
                    "Historia y cultura",
                    "Solamente una construcción moderna",
                    "Solamente comercio",
                    "Solamente tecnología"
                ],

                correcta:
                    "Historia y cultura"
            },

            {
                pregunta:
                    "¿Qué aspecto se puede apreciar especialmente en un monumento?",

                opciones: [
                    "Arquitectura",
                    "Programación",
                    "Química",
                    "Astronomía"
                ],

                correcta: "Arquitectura"
            },

            {
                pregunta:
                    "¿Qué permiten conocer los lugares históricos?",

                opciones: [
                    "Aspectos del pasado",
                    "El futuro con exactitud",
                    "Solamente la tecnología",
                    "Solamente el clima"
                ],

                correcta: "Aspectos del pasado"
            }

        ]
    },


    /* ========================================================
       CULTURA - FIESTAS
    ======================================================== */

    fiestas: {

        titulo: "Fiestas",
        subtitulo: "Celebraciones que reúnen música, tradición y cultura",
        icono: "🎉",
        imagen: "🎊",

        dato:
            "Las fiestas tradicionales colombianas reúnen música, danzas, gastronomía, expresiones artísticas y costumbres de diferentes regiones.",

        regiones: [
            "Barranquilla",
            "Pasto",
            "Medellín",
            "Cali"
        ],

        preguntas: [

            {
                pregunta:
                    "¿En qué ciudad se celebra el Carnaval de Barranquilla?",

                opciones: [
                    "Barranquilla",
                    "Pasto",
                    "Medellín",
                    "Cali"
                ],

                correcta: "Barranquilla"
            },

            {
                pregunta:
                    "¿Cuál de estas celebraciones se realiza tradicionalmente en Pasto?",

                opciones: [
                    "Carnaval de Negros y Blancos",
                    "Feria de las Flores",
                    "Feria de Cali",
                    "Festival Vallenato"
                ],

                correcta:
                    "Carnaval de Negros y Blancos"
            },

            {
                pregunta:
                    "¿En qué ciudad se celebra la Feria de las Flores?",

                opciones: [
                    "Medellín",
                    "Cartagena",
                    "Bogotá",
                    "Santa Marta"
                ],

                correcta: "Medellín"
            },

            {
                pregunta:
                    "¿En qué ciudad se realiza la Feria de Cali?",

                opciones: [
                    "Cali",
                    "Pasto",
                    "Tunja",
                    "Sincelejo"
                ],

                correcta: "Cali"
            },

            {
                pregunta:
                    "¿Qué elementos suelen combinar las fiestas tradicionales colombianas?",

                opciones: [
                    "Música, danza, gastronomía y costumbres",
                    "Solamente deportes",
                    "Solamente tecnología",
                    "Solamente actividades académicas"
                ],

                correcta:
                    "Música, danza, gastronomía y costumbres"
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
            localStorage.getItem(
                CLAVE_GUARDADO
            );


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

    if (vidas <= 0) {

        mostrarAvisoSinVidas();

        return;

    }


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
            `Explora ${tema.titulo.toLowerCase()} y descubre datos importantes de Colombia.`;

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


    respuestaContestada = false;


    const indice =
        obtenerIndicePreguntaDisponible(
            temaActual
        );


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


    estado.preguntaActual =
        indice;


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


    if (vidas <= 0) {

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


        bloquearJuegoPorVidas();

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

    if (vidas <= 0) {

        return;

    }


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
            (
                totalRespondidas /
                TOTAL_PREGUNTAS
            ) * 100
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

        }

        else if (
            porcentajeSeguro < 25
        ) {

            mensaje.textContent =
                "¡Buen comienzo! Sigue explorando.";

        }

        else if (
            porcentajeSeguro < 50
        ) {

            mensaje.textContent =
                "¡Vas avanzando muy bien!";

        }

        else if (
            porcentajeSeguro < 75
        ) {

            mensaje.textContent =
                "¡Ya conoces bastante de Colombia!";

        }

        else if (
            porcentajeSeguro < 100
        ) {

            mensaje.textContent =
                "¡Estás muy cerca de completar la aventura!";

        }

        else {

            mensaje.textContent =
                "🏆 ¡Completaste toda la aventura de Colombia!";

        }

    }

}


/* ============================================================
   23. BLOQUEAR JUEGO POR VIDAS
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


    document.body.style.overflow =
        "hidden";

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


    if (vidas > 0) {

        document.body.style.overflow =
            "";

    }


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
                "¿En qué año ocurrió la Batalla de Boyacá?",

            opciones: [
                "1810",
                "1819",
                "1821",
                "1830"
            ],

            correcta: "1819"
        },


        {
            pregunta:
                "¿Cuál es un ritmo tradicional de Colombia?",

            opciones: [
                "Cumbia",
                "Tango",
                "Flamenco",
                "Fado"
            ],

            correcta: "Cumbia"
        },


        {
            pregunta:
                "¿En qué departamento se encuentra el Santuario de Las Lajas?",

            opciones: [
                "Nariño",
                "Antioquia",
                "Atlántico",
                "Cesar"
            ],

            correcta: "Nariño"
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

    botonSeleccionado.disabled =
        true;


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


    juegoBloqueadoPorVidas =
        false;


    retoRecuperacionActivo =
        false;


    retoRecuperacionSuperado =
        false;


    actualizarMarcadores();


    cerrarModalRecuperacion();


    const botonesMenu =
        document.querySelectorAll(
            ".menu-btn"
        );


    botonesMenu.forEach(boton => {

        boton.classList.remove(
            "bloqueado-vidas"
        );

    });


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


    voz.lang =
        "es-ES";


    voz.rate =
        0.9;


    voz.pitch =
        1;


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
============================================================ */

function reiniciarColombia() {

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


window.reiniciarColombia =
    reiniciarColombia;


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

        if (vidas > 0) {

            cargarTema();

        }


        /* ----------------------------------------
           BOTÓN COMENZAR RECUPERACIÓN
        ----------------------------------------- */

        const btnComenzar =
            obtenerElemento(
                "btnComenzarRecuperacion"
            );


        if (btnComenzar) {

            btnComenzar.addEventListener(
                "click",
                comenzarRetoRecuperacion
            );

        }


        /* ----------------------------------------
           BOTÓN CONTINUAR
        ----------------------------------------- */

        const btnContinuar =
            obtenerElemento(
                "btnContinuarRecuperacion"
            );


        if (btnContinuar) {

            btnContinuar.addEventListener(
                "click",
                continuarDespuesRecuperacion
            );

        }


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