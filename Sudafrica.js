/* ============================================================
   HISTORIA SIN FRONTERAS - SUDÁFRICA

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

const CLAVE_GUARDADO = "historiaSinFronterasSudafrica_v1";

const MAX_VIDAS = 5;
const PUNTOS_CORRECTA = 10;
const ACIERTOS_MINIMOS_RECUPERACION = 3;

const nombresTemas = [
    "primerosPueblos",
    "colonizacion",
    "epocaColonial",
    "apartheid",
    "nelsonMandela",
    "republica",
    "actualidad",
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

    "primerosPueblos": {

        titulo: "Primeros pueblos",

        subtitulo:
            "Conoce a los primeros pueblos y comunidades que habitaron el territorio de Sudáfrica.",

        icono: "🪨",

        mensaje:
            "Sudáfrica posee una historia muy antigua relacionada con los pueblos San, Khoikhoi y posteriormente comunidades bantúes.",

        regiones: [
            "Cabo",
            "Kalahari",
            "KwaZulu-Natal",
            "Limpopo"
        ],

        dato:
            "Los pueblos San se encuentran entre las comunidades indígenas más antiguas del sur de África.",

        preguntas: [

            q(
                "¿Qué pueblo indígena es reconocido por su antigua presencia en el sur de África?",
                [
                    "San",
                    "Vikingos",
                    "Incas",
                    "Mayas"
                ],
                "San"
            ),

            q(
                "¿Qué nombre reciben tradicionalmente varios grupos indígenas cazadores-recolectores del sur de África?",
                [
                    "San",
                    "Romanos",
                    "Celtas",
                    "Etruscos"
                ],
                "San"
            ),

            q(
                "¿Qué grupo de pueblos llegó al sur de África durante migraciones bantúes?",
                [
                    "Pueblos de lenguas bantúes",
                    "Vikingos",
                    "Griegos",
                    "Persas"
                ],
                "Pueblos de lenguas bantúes"
            ),

            q(
                "¿Cuál de estos pueblos estuvo relacionado históricamente con el pastoreo en el sur de África?",
                [
                    "Khoikhoi",
                    "Romanos",
                    "Incas",
                    "Egipcios"
                ],
                "Khoikhoi"
            ),

            q(
                "¿Qué actividad era característica de muchos grupos San tradicionales?",
                [
                    "Caza y recolección",
                    "Construcción de barcos oceánicos",
                    "Industria ferroviaria",
                    "Comercio de seda"
                ],
                "Caza y recolección"
            )
        ]
    },


    /* ========================================================
       HISTORIA 2
    ======================================================== */

    "colonizacion": {

        titulo: "Colonización",

        subtitulo:
            "Conoce la llegada de los europeos y los primeros procesos de colonización.",

        icono: "⛵",

        mensaje:
            "La llegada europea transformó profundamente la historia política, económica y social de Sudáfrica.",

        regiones: [
            "Ciudad del Cabo",
            "Cabo de Buena Esperanza",
            "Costa sur"
        ],

        dato:
            "Los portugueses exploraron la costa del sur de África antes del establecimiento de colonias europeas permanentes.",

        preguntas: [

            q(
                "¿Qué navegante portugués llegó al extremo sur de África en 1488?",
                [
                    "Bartolomeu Dias",
                    "Cristóbal Colón",
                    "Hernán Cortés",
                    "Fernando de Magallanes"
                ],
                "Bartolomeu Dias"
            ),

            q(
                "¿Cómo se llamó inicialmente el Cabo de Buena Esperanza?",
                [
                    "Cabo de las Tormentas",
                    "Cabo de la Esperanza",
                    "Cabo del Sur",
                    "Cabo Real"
                ],
                "Cabo de las Tormentas"
            ),

            q(
                "¿Qué compañía neerlandesa estableció un asentamiento en el Cabo en 1652?",
                [
                    "Compañía Neerlandesa de las Indias Orientales",
                    "Compañía Británica de África",
                    "Compañía Francesa del Atlántico",
                    "Compañía Portuguesa Oriental"
                ],
                "Compañía Neerlandesa de las Indias Orientales"
            ),

            q(
                "¿Quién estableció el asentamiento neerlandés en el Cabo en 1652?",
                [
                    "Jan van Riebeeck",
                    "Nelson Mandela",
                    "Cecil Rhodes",
                    "Shaka Zulu"
                ],
                "Jan van Riebeeck"
            ),

            q(
                "¿Qué potencia europea tomó el control británico de la Colonia del Cabo a finales del siglo XVIII y nuevamente a comienzos del XIX?",
                [
                    "Gran Bretaña",
                    "España",
                    "Portugal",
                    "Italia"
                ],
                "Gran Bretaña"
            )
        ]
    },


    /* ========================================================
       HISTORIA 3
    ======================================================== */

    "epocaColonial": {

        titulo: "Época colonial",

        subtitulo:
            "Explora los cambios políticos y territoriales durante el periodo colonial.",

        icono: "🏛️",

        mensaje:
            "Durante los siglos XVIII y XIX aumentaron los conflictos y transformaciones entre comunidades africanas y poderes coloniales.",

        regiones: [
            "Cabo",
            "Natal",
            "Transvaal",
            "Estado Libre de Orange"
        ],

        dato:
            "Durante el siglo XIX se produjeron importantes conflictos y desplazamientos relacionados con la expansión colonial y los estados africanos de la región.",

        preguntas: [

            q(
                "¿Qué pueblo estableció un poderoso reino en el sureste de África durante el siglo XIX?",
                [
                    "Zulu",
                    "Inca",
                    "Maya",
                    "Vikingo"
                ],
                "Zulu"
            ),

            q(
                "¿Quién fue un importante líder del reino zulú?",
                [
                    "Shaka Zulu",
                    "Jan van Riebeeck",
                    "Nelson Mandela",
                    "Desmond Tutu"
                ],
                "Shaka Zulu"
            ),

            q(
                "¿Qué guerra enfrentó al Reino Zulú con Gran Bretaña en 1879?",
                [
                    "Guerra Anglo-Zulú",
                    "Guerra de los Bóeres",
                    "Guerra de Crimea",
                    "Guerra de los Cien Años"
                ],
                "Guerra Anglo-Zulú"
            ),

            q(
                "¿Qué conflicto enfrentó principalmente a los británicos y a los bóeres entre 1899 y 1902?",
                [
                    "Segunda Guerra Anglo-Bóer",
                    "Guerra Anglo-Zulú",
                    "Guerra de Crimea",
                    "Guerra del Cabo"
                ],
                "Segunda Guerra Anglo-Bóer"
            ),

            q(
                "¿Cómo eran conocidos principalmente los descendientes de colonos neerlandeses en el sur de África?",
                [
                    "Bóeres",
                    "Samuráis",
                    "Vikingos",
                    "Incas"
                ],
                "Bóeres"
            )
        ]
    },


    /* ========================================================
       HISTORIA 4
    ======================================================== */

    "apartheid": {

        titulo: "Apartheid",

        subtitulo:
            "Conoce el sistema de segregación racial que marcó gran parte de la historia reciente de Sudáfrica.",

        icono: "⚖️",

        mensaje:
            "El apartheid fue un sistema institucional de segregación racial establecido oficialmente en Sudáfrica desde 1948.",

        regiones: [
            "Johannesburgo",
            "Ciudad del Cabo",
            "Soweto",
            "Pretoria"
        ],

        dato:
            "La palabra apartheid proviene del afrikáans y se relaciona con la idea de separación.",

        preguntas: [

            q(
                "¿Qué fue el apartheid?",
                [
                    "Un sistema institucional de segregación racial",
                    "Un festival cultural",
                    "Una religión",
                    "Un idioma"
                ],
                "Un sistema institucional de segregación racial"
            ),

            q(
                "¿En qué año llegó al poder el Partido Nacional e inició formalmente la legislación del apartheid?",
                [
                    "1948",
                    "1910",
                    "1961",
                    "1994"
                ],
                "1948"
            ),

            q(
                "¿Qué zona residencial de Johannesburgo se convirtió en símbolo de la lucha contra el apartheid?",
                [
                    "Soweto",
                    "Waterfront",
                    "Bo-Kaap",
                    "Sandton"
                ],
                "Soweto"
            ),

            q(
                "¿Qué organización lideró gran parte de la lucha política contra el apartheid?",
                [
                    "Congreso Nacional Africano (ANC)",
                    "ONU",
                    "OTAN",
                    "Unión Europea"
                ],
                "Congreso Nacional Africano (ANC)"
            ),

            q(
                "¿Qué acontecimiento ocurrió en Soweto en 1976?",
                [
                    "Una gran protesta estudiantil",
                    "La elección de Mandela",
                    "La independencia del país",
                    "La fundación de Pretoria"
                ],
                "Una gran protesta estudiantil"
            )
        ]
    },


    /* ========================================================
       HISTORIA 5
    ======================================================== */

    "nelsonMandela": {

        titulo: "Nelson Mandela",

        subtitulo:
            "Conoce la vida política de una de las figuras más importantes de la historia contemporánea de Sudáfrica.",

        icono: "✊",

        mensaje:
            "Nelson Mandela fue una figura central de la lucha contra el apartheid y se convirtió en presidente de Sudáfrica en 1994.",

        regiones: [
            "Mvezo",
            "Johannesburgo",
            "Robben Island",
            "Pretoria"
        ],

        dato:
            "Nelson Mandela pasó 27 años en prisión antes de ser liberado en 1990.",

        preguntas: [

            q(
                "¿Quién fue Nelson Mandela?",
                [
                    "Líder de la lucha contra el apartheid y presidente de Sudáfrica",
                    "Un explorador portugués",
                    "Un músico tradicional",
                    "Un rey medieval"
                ],
                "Líder de la lucha contra el apartheid y presidente de Sudáfrica"
            ),

            q(
                "¿En qué año fue liberado Nelson Mandela de prisión?",
                [
                    "1990",
                    "1980",
                    "1994",
                    "2000"
                ],
                "1990"
            ),

            q(
                "¿En qué año se convirtió Mandela en presidente de Sudáfrica?",
                [
                    "1994",
                    "1990",
                    "1989",
                    "2001"
                ],
                "1994"
            ),

            q(
                "¿En qué isla estuvo encarcelado Mandela durante muchos años?",
                [
                    "Robben Island",
                    "Madagascar",
                    "Mauricio",
                    "Zanzíbar"
                ],
                "Robben Island"
            ),

            q(
                "¿Qué premio recibió Nelson Mandela junto con F. W. de Klerk en 1993?",
                [
                    "Premio Nobel de la Paz",
                    "Premio Pulitzer",
                    "Óscar",
                    "Premio Cervantes"
                ],
                "Premio Nobel de la Paz"
            )
        ]
    },


    /* ========================================================
       HISTORIA 6
    ======================================================== */

    "republica": {

        titulo: "Independencia y República",

        subtitulo:
            "Conoce la formación de la Unión Sudafricana y el establecimiento de la República.",

        icono: "🇿🇦",

        mensaje:
            "Sudáfrica pasó por diferentes etapas políticas hasta convertirse en una república en 1961.",

        regiones: [
            "Pretoria",
            "Ciudad del Cabo",
            "Bloemfontein"
        ],

        dato:
            "La Unión Sudafricana se creó en 1910 y la República de Sudáfrica se estableció en 1961.",

        preguntas: [

            q(
                "¿En qué año se creó la Unión Sudafricana?",
                [
                    "1910",
                    "1948",
                    "1961",
                    "1994"
                ],
                "1910"
            ),

            q(
                "¿En qué año se convirtió Sudáfrica en una república?",
                [
                    "1961",
                    "1910",
                    "1948",
                    "1994"
                ],
                "1961"
            ),

            q(
                "¿Qué día se celebra actualmente como Día de la Libertad en Sudáfrica?",
                [
                    "27 de abril",
                    "1 de enero",
                    "11 de febrero",
                    "16 de junio"
                ],
                "27 de abril"
            ),

            q(
                "¿Qué ocurrió en Sudáfrica en 1994?",
                [
                    "Se celebraron las primeras elecciones nacionales democráticas con participación de todos los grupos raciales",
                    "Comenzó el apartheid",
                    "Se creó la Unión Sudafricana",
                    "Llegaron los primeros portugueses"
                ],
                "Se celebraron las primeras elecciones nacionales democráticas con participación de todos los grupos raciales"
            ),

            q(
                "¿Quién fue elegido presidente después de las elecciones de 1994?",
                [
                    "Nelson Mandela",
                    "F. W. de Klerk",
                    "Thabo Mbeki",
                    "Desmond Tutu"
                ],
                "Nelson Mandela"
            )
        ]
    },


    /* ========================================================
       HISTORIA 7
    ======================================================== */

    "actualidad": {

        titulo: "Sudáfrica contemporánea",

        subtitulo:
            "Conoce algunos aspectos de la Sudáfrica actual.",

        icono: "🌍",

        mensaje:
            "Sudáfrica es un país diverso que combina diferentes culturas, lenguas, paisajes y tradiciones.",

        regiones: [
            "Johannesburgo",
            "Ciudad del Cabo",
            "Pretoria",
            "Durban"
        ],

        dato:
            "Sudáfrica reconoce once idiomas oficiales a nivel nacional.",

        preguntas: [

            q(
                "¿Cuántos idiomas oficiales reconoce Sudáfrica a nivel nacional?",
                [
                    "11",
                    "5",
                    "8",
                    "15"
                ],
                "11"
            ),

            q(
                "¿Cuál es una de las capitales administrativas de Sudáfrica?",
                [
                    "Pretoria",
                    "Johannesburgo",
                    "Durban",
                    "Soweto"
                ],
                "Pretoria"
            ),

            q(
                "¿Qué ciudad es conocida por su famosa Montaña de la Mesa?",
                [
                    "Ciudad del Cabo",
                    "Pretoria",
                    "Johannesburgo",
                    "Bloemfontein"
                ],
                "Ciudad del Cabo"
            ),

            q(
                "¿En qué continente se encuentra Sudáfrica?",
                [
                    "África",
                    "Asia",
                    "Europa",
                    "América"
                ],
                "África"
            ),

            q(
                "¿Qué ciudad es uno de los principales centros económicos de Sudáfrica?",
                [
                    "Johannesburgo",
                    "Kimberley",
                    "Mthatha",
                    "Polokwane"
                ],
                "Johannesburgo"
            )
        ]
    },


    /* ========================================================
       CULTURA 8
    ======================================================== */

    "gastronomia": {

        titulo: "Gastronomía",

        subtitulo:
            "Descubre sabores y platos tradicionales de Sudáfrica.",

        icono: "🍲",

        mensaje:
            "La cocina sudafricana combina influencias africanas, europeas, asiáticas y de comunidades locales.",

        regiones: [
            "Johannesburgo",
            "Ciudad del Cabo",
            "Durban",
            "KwaZulu-Natal"
        ],

        dato:
            "El braai es una importante tradición gastronómica y social relacionada con cocinar a la parrilla.",

        preguntas: [

            q(
                "¿Qué es un braai?",
                [
                    "Una tradición de cocinar a la parrilla",
                    "Un baile",
                    "Una prenda",
                    "Un instrumento"
                ],
                "Una tradición de cocinar a la parrilla"
            ),

            q(
                "¿Qué plato sudafricano consiste en carne picada condimentada y horneada con una cobertura de huevo?",
                [
                    "Bobotie",
                    "Sushi",
                    "Cuscús",
                    "Paella"
                ],
                "Bobotie"
            ),

            q(
                "¿Qué alimento es muy popular en Sudáfrica y está hecho a base de harina de maíz?",
                [
                    "Pap",
                    "Tortilla española",
                    "Pasta",
                    "Croissant"
                ],
                "Pap"
            ),

            q(
                "¿Qué tipo de comida tiene una fuerte presencia en la cultura de Durban?",
                [
                    "Curry",
                    "Sushi",
                    "Tacos mexicanos",
                    "Pasta italiana"
                ],
                "Curry"
            ),

            q(
                "¿Qué bebida tradicional sudafricana se prepara con miel y tiene raíces de comunidades khoikhoi?",
                [
                    "Mead de miel",
                    "Té verde japonés",
                    "Mate",
                    "Café turco"
                ],
                "Mead de miel"
            )
        ]
    },


    /* ========================================================
       CULTURA 9
    ======================================================== */

    "musica": {

        titulo: "Música y bailes",

        subtitulo:
            "Conoce los ritmos y expresiones musicales de Sudáfrica.",

        icono: "🎵",

        mensaje:
            "La música sudafricana incluye estilos tradicionales y modernos como el mbube, el isicathamiya y el amapiano.",

        regiones: [
            "Johannesburgo",
            "Soweto",
            "KwaZulu-Natal",
            "Ciudad del Cabo"
        ],

        dato:
            "El amapiano es un género musical que se desarrolló en Sudáfrica y alcanzó gran popularidad internacional.",

        preguntas: [

            q(
                "¿Qué género musical sudafricano se hizo especialmente popular en el siglo XXI?",
                [
                    "Amapiano",
                    "Tango",
                    "Flamenco",
                    "Fado"
                ],
                "Amapiano"
            ),

            q(
                "¿Qué estilo coral sudafricano está asociado con grupos masculinos y armonías vocales?",
                [
                    "Isicathamiya",
                    "Ópera italiana",
                    "Reggae jamaicano",
                    "Tango"
                ],
                "Isicathamiya"
            ),

            q(
                "¿Qué género musical tradicional sudafricano fue popularizado internacionalmente por grupos como Ladysmith Black Mambazo?",
                [
                    "Isicathamiya",
                    "Salsa",
                    "Country",
                    "Flamenco"
                ],
                "Isicathamiya"
            ),

            q(
                "¿Qué instrumento de percusión es fundamental en muchas tradiciones musicales africanas?",
                [
                    "Tambor",
                    "Arpa",
                    "Clavecín",
                    "Acordeón"
                ],
                "Tambor"
            ),

            q(
                "¿Qué ciudad es uno de los grandes centros de la música urbana sudafricana?",
                [
                    "Johannesburgo",
                    "Pretoria solamente",
                    "Bloemfontein solamente",
                    "Kimberley solamente"
                ],
                "Johannesburgo"
            )
        ]
    },


    /* ========================================================
       CULTURA 10
    ======================================================== */

    "tradiciones": {

        titulo: "Tradiciones",

        subtitulo:
            "Conoce algunas costumbres y expresiones culturales de Sudáfrica.",

        icono: "🪅",

        mensaje:
            "Las tradiciones sudafricanas reflejan la diversidad de pueblos y comunidades que forman el país.",

        regiones: [
            "KwaZulu-Natal",
            "Limpopo",
            "Mpumalanga",
            "Cabo"
        ],

        dato:
            "La diversidad cultural sudafricana se refleja en sus idiomas, música, gastronomía y celebraciones.",

        preguntas: [

            q(
                "¿Qué palabra zulú significa aproximadamente 'humanidad hacia los demás' y se relaciona con una filosofía social?",
                [
                    "Ubuntu",
                    "Braai",
                    "Amapiano",
                    "Boerewors"
                ],
                "Ubuntu"
            ),

            q(
                "¿Qué concepto destaca la importancia de la comunidad y las relaciones humanas?",
                [
                    "Ubuntu",
                    "Apartheid",
                    "Imperialismo",
                    "Colonialismo"
                ],
                "Ubuntu"
            ),

            q(
                "¿Qué práctica culinaria también funciona como actividad social tradicional?",
                [
                    "Braai",
                    "Haka",
                    "Flamenco",
                    "Oktoberfest"
                ],
                "Braai"
            ),

            q(
                "¿Qué grupo cultural es conocido por sus tradicionales danzas de guerreros?",
                [
                    "Zulu",
                    "Inuit",
                    "Samurái",
                    "Vikingo"
                ],
                "Zulu"
            ),

            q(
                "Las tradiciones sudafricanas se caracterizan principalmente por:",
                [
                    "Una gran diversidad cultural",
                    "Una sola cultura uniforme",
                    "La ausencia de música",
                    "Una única lengua"
                ],
                "Una gran diversidad cultural"
            )
        ]
    },


    /* ========================================================
       CULTURA 11
    ======================================================== */

    "fiestas": {

        titulo: "Fiestas",

        subtitulo:
            "Descubre celebraciones nacionales y culturales de Sudáfrica.",

        icono: "🎉",

        mensaje:
            "Las celebraciones sudafricanas incluyen fechas históricas, culturales y familiares.",

        regiones: [
            "Todo Sudáfrica",
            "Soweto",
            "KwaZulu-Natal",
            "Ciudad del Cabo"
        ],

        dato:
            "El Día de la Libertad se celebra cada 27 de abril para recordar las elecciones democráticas de 1994.",

        preguntas: [

            q(
                "¿Cuándo se celebra el Día de la Libertad en Sudáfrica?",
                [
                    "27 de abril",
                    "16 de junio",
                    "9 de agosto",
                    "24 de septiembre"
                ],
                "27 de abril"
            ),

            q(
                "¿Qué se conmemora el 16 de junio?",
                [
                    "Día de la Juventud",
                    "Día de la Libertad",
                    "Día Nacional de la Mujer",
                    "Día del Patrimonio"
                ],
                "Día de la Juventud"
            ),

            q(
                "¿Qué acontecimiento histórico está relacionado con el Día de la Juventud?",
                [
                    "Las protestas estudiantiles de Soweto de 1976",
                    "La llegada de Mandela a la presidencia",
                    "La creación de la Unión Africana",
                    "La llegada de Bartolomeu Dias"
                ],
                "Las protestas estudiantiles de Soweto de 1976"
            ),

            q(
                "¿Qué se celebra el 24 de septiembre en Sudáfrica?",
                [
                    "Día del Patrimonio",
                    "Día de la Libertad",
                    "Día de la Juventud",
                    "Día del Trabajo"
                ],
                "Día del Patrimonio"
            ),

            q(
                "¿Qué se celebra el 9 de agosto?",
                [
                    "Día Nacional de la Mujer",
                    "Día del Patrimonio",
                    "Día de la Libertad",
                    "Día de la Juventud"
                ],
                "Día Nacional de la Mujer"
            )
        ]
    },


    /* ========================================================
       CULTURA 12
    ======================================================== */

    "vestimenta": {

        titulo: "Vestimenta",

        subtitulo:
            "Conoce prendas y expresiones de vestimenta tradicional sudafricana.",

        icono: "👗",

        mensaje:
            "La vestimenta tradicional varía según el grupo cultural y puede utilizarse en ceremonias y celebraciones.",

        regiones: [
            "KwaZulu-Natal",
            "Limpopo",
            "Eastern Cape",
            "Lesoto"
        ],

        dato:
            "Las cuentas de colores tienen una gran importancia decorativa y cultural en diferentes comunidades del sur de África.",

        preguntas: [

            q(
                "¿Qué elemento aparece con frecuencia en prendas y accesorios tradicionales sudafricanos?",
                [
                    "Cuentas de colores",
                    "Armaduras metálicas",
                    "Sombreros de cowboy",
                    "Kimonos japoneses"
                ],
                "Cuentas de colores"
            ),

            q(
                "¿Qué pueblo es conocido por sus coloridos trabajos de cuentas?",
                [
                    "Zulu",
                    "Vikingo",
                    "Inca",
                    "Romano"
                ],
                "Zulu"
            ),

            q(
                "¿Qué tipo de prendas tradicionales pueden utilizarse durante ceremonias culturales?",
                [
                    "Vestidos, mantas y accesorios tradicionales",
                    "Solo uniformes escolares",
                    "Solo trajes deportivos",
                    "Únicamente ropa occidental"
                ],
                "Vestidos, mantas y accesorios tradicionales"
            ),

            q(
                "¿Qué material se utiliza frecuentemente en collares y adornos tradicionales?",
                [
                    "Cuentas",
                    "Circuitos electrónicos",
                    "Acero industrial",
                    "Papel periódico"
                ],
                "Cuentas"
            ),

            q(
                "La vestimenta tradicional sudafricana puede representar:",
                [
                    "Identidad cultural y pertenencia",
                    "Solo riqueza económica",
                    "Únicamente una moda extranjera",
                    "Solo protección contra la lluvia"
                ],
                "Identidad cultural y pertenencia"
            )
        ]
    },


    /* ========================================================
       CULTURA 13
    ======================================================== */

    "arte": {

        titulo: "Arte y literatura",

        subtitulo:
            "Descubre expresiones artísticas y literarias de Sudáfrica.",

        icono: "🎨",

        mensaje:
            "El arte sudafricano refleja tanto las tradiciones antiguas como las experiencias sociales y políticas del país.",

        regiones: [
            "Ciudad del Cabo",
            "Johannesburgo",
            "Soweto",
            "KwaZulu-Natal"
        ],

        dato:
            "Sudáfrica posee una importante tradición de arte rupestre asociada a los pueblos San.",

        preguntas: [

            q(
                "¿Qué tipo de arte antiguo puede encontrarse en diferentes zonas de Sudáfrica?",
                [
                    "Arte rupestre",
                    "Arte digital únicamente",
                    "Arte renacentista italiano",
                    "Arte japonés"
                ],
                "Arte rupestre"
            ),

            q(
                "¿Qué pueblo realizó muchas pinturas y grabados rupestres del sur de África?",
                [
                    "San",
                    "Romanos",
                    "Vikingos",
                    "Incas"
                ],
                "San"
            ),

            q(
                "¿Qué escritora sudafricana ganó el Premio Nobel de Literatura en 1991?",
                [
                    "Nadine Gordimer",
                    "J. K. Rowling",
                    "Gabriel García Márquez",
                    "Jane Austen"
                ],
                "Nadine Gordimer"
            ),

            q(
                "¿Qué escritor sudafricano recibió el Premio Nobel de Literatura en 2003?",
                [
                    "J. M. Coetzee",
                    "Pablo Neruda",
                    "Ernest Hemingway",
                    "Victor Hugo"
                ],
                "J. M. Coetzee"
            ),

            q(
                "¿Qué temática aparece con frecuencia en el arte sudafricano contemporáneo?",
                [
                    "Historia, identidad y sociedad",
                    "Solo paisajes europeos",
                    "Únicamente deportes",
                    "Solo astronomía"
                ],
                "Historia, identidad y sociedad"
            )
        ]
    },


    /* ========================================================
       CULTURA 14
    ======================================================== */

    "monumentos": {

        titulo: "Monumentos y lugares culturales",

        subtitulo:
            "Explora algunos de los lugares históricos y naturales más representativos de Sudáfrica.",

        icono: "🏞️",

        mensaje:
            "Sudáfrica cuenta con importantes lugares históricos, culturales y naturales.",

        regiones: [
            "Ciudad del Cabo",
            "Robben Island",
            "Johannesburgo",
            "Parque Kruger"
        ],

        dato:
            "Robben Island, donde estuvo encarcelado Nelson Mandela, es Patrimonio Mundial de la UNESCO.",

        preguntas: [

            q(
                "¿Dónde estuvo encarcelado Nelson Mandela durante muchos años?",
                [
                    "Robben Island",
                    "Isla de Pascua",
                    "Madagascar",
                    "Mauricio"
                ],
                "Robben Island"
            ),

            q(
                "¿Qué montaña es uno de los símbolos de Ciudad del Cabo?",
                [
                    "Montaña de la Mesa",
                    "Monte Everest",
                    "Kilimanjaro",
                    "Aconcagua"
                ],
                "Montaña de la Mesa"
            ),

            q(
                "¿Qué parque nacional es famoso por su fauna africana?",
                [
                    "Parque Nacional Kruger",
                    "Yellowstone",
                    "Galápagos",
                    "Doñana"
                ],
                "Parque Nacional Kruger"
            ),

            q(
                "¿En qué ciudad se encuentra el complejo conocido como Apartheid Museum?",
                [
                    "Johannesburgo",
                    "Durban",
                    "Pretoria",
                    "Bloemfontein"
                ],
                "Johannesburgo"
            ),

            q(
                "¿Qué lugar está relacionado directamente con la historia de Nelson Mandela?",
                [
                    "Robben Island",
                    "Montaña de la Mesa",
                    "Parque Kruger",
                    "Cañón del Blyde"
                ],
                "Robben Island"
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
        "¿En qué año se celebraron las primeras elecciones nacionales democráticas con participación de todos los grupos raciales?",
        [
            "1994",
            "1948",
            "1961",
            "1910"
        ],
        "1994"
    ),

    q(
        "¿Qué sistema de segregación racial existió oficialmente desde 1948?",
        [
            "Apartheid",
            "Feudalismo",
            "Colonialismo",
            "Mercantilismo"
        ],
        "Apartheid"
    ),

    q(
        "¿Quién fue elegido presidente de Sudáfrica en 1994?",
        [
            "Nelson Mandela",
            "Jan van Riebeeck",
            "Shaka Zulu",
            "Cecil Rhodes"
        ],
        "Nelson Mandela"
    ),

    q(
        "¿Qué comida sudafricana se prepara tradicionalmente a la parrilla?",
        [
            "Braai",
            "Sushi",
            "Paella",
            "Cuscús"
        ],
        "Braai"
    ),

    q(
        "¿Cuántos idiomas oficiales reconoce Sudáfrica?",
        [
            "11",
            "5",
            "3",
            "15"
        ],
        "11"
    )

];


/* ============================================================
   5. RETO FINAL
   30 PREGUNTAS
============================================================ */

const preguntasFinales = [

    q(
        "¿Qué pueblo indígena es reconocido por su antigua presencia en el sur de África?",
        [
            "San",
            "Vikingos",
            "Incas",
            "Mayas"
        ],
        "San"
    ),

    q(
        "¿Qué grupo de pueblos estuvo relacionado con migraciones bantúes hacia el sur de África?",
        [
            "Pueblos de lenguas bantúes",
            "Romanos",
            "Vikingos",
            "Griegos"
        ],
        "Pueblos de lenguas bantúes"
    ),

    q(
        "¿Qué navegante portugués llegó al extremo sur de África en 1488?",
        [
            "Bartolomeu Dias",
            "Cristóbal Colón",
            "Hernán Cortés",
            "Marco Polo"
        ],
        "Bartolomeu Dias"
    ),

    q(
        "¿Cómo se llamó inicialmente el Cabo de Buena Esperanza?",
        [
            "Cabo de las Tormentas",
            "Cabo Real",
            "Cabo del Sur",
            "Cabo de África"
        ],
        "Cabo de las Tormentas"
    ),

    q(
        "¿Quién estableció el asentamiento neerlandés del Cabo en 1652?",
        [
            "Jan van Riebeeck",
            "Nelson Mandela",
            "Shaka Zulu",
            "Desmond Tutu"
        ],
        "Jan van Riebeeck"
    ),

    q(
        "¿Qué líder fue fundamental en la formación del reino zulú?",
        [
            "Shaka Zulu",
            "Nelson Mandela",
            "F. W. de Klerk",
            "Jan van Riebeeck"
        ],
        "Shaka Zulu"
    ),

    q(
        "¿Qué guerra enfrentó al Reino Zulú y Gran Bretaña en 1879?",
        [
            "Guerra Anglo-Zulú",
            "Segunda Guerra Anglo-Bóer",
            "Guerra de Crimea",
            "Guerra del Cabo"
        ],
        "Guerra Anglo-Zulú"
    ),

    q(
        "¿Qué fue el apartheid?",
        [
            "Un sistema institucional de segregación racial",
            "Una fiesta nacional",
            "Un idioma",
            "Una danza"
        ],
        "Un sistema institucional de segregación racial"
    ),

    q(
        "¿En qué año comenzó oficialmente la legislación del apartheid?",
        [
            "1948",
            "1910",
            "1961",
            "1994"
        ],
        "1948"
    ),

    q(
        "¿Qué organización lideró gran parte de la lucha política contra el apartheid?",
        [
            "Congreso Nacional Africano (ANC)",
            "OTAN",
            "ONU",
            "Unión Europea"
        ],
        "Congreso Nacional Africano (ANC)"
    ),

    q(
        "¿Qué ocurrió en Soweto en 1976?",
        [
            "Una gran protesta estudiantil",
            "La elección de Mandela",
            "La independencia",
            "La creación de la República"
        ],
        "Una gran protesta estudiantil"
    ),

    q(
        "¿Cuántos años estuvo Nelson Mandela encarcelado?",
        [
            "27 años",
            "10 años",
            "15 años",
            "40 años"
        ],
        "27 años"
    ),

    q(
        "¿En qué año fue liberado Nelson Mandela?",
        [
            "1990",
            "1980",
            "1994",
            "2000"
        ],
        "1990"
    ),

    q(
        "¿En qué año fue elegido presidente Nelson Mandela?",
        [
            "1994",
            "1990",
            "1989",
            "2001"
        ],
        "1994"
    ),

    q(
        "¿En qué isla estuvo encarcelado Mandela?",
        [
            "Robben Island",
            "Madagascar",
            "Mauricio",
            "Zanzíbar"
        ],
        "Robben Island"
    ),

    q(
        "¿Qué premio recibió Mandela junto con F. W. de Klerk en 1993?",
        [
            "Premio Nobel de la Paz",
            "Premio Pulitzer",
            "Premio Cervantes",
            "Óscar"
        ],
        "Premio Nobel de la Paz"
    ),

    q(
        "¿En qué año se creó la Unión Sudafricana?",
        [
            "1910",
            "1948",
            "1961",
            "1994"
        ],
        "1910"
    ),

    q(
        "¿En qué año se convirtió Sudáfrica en una república?",
        [
            "1961",
            "1910",
            "1948",
            "1994"
        ],
        "1961"
    ),

    q(
        "¿Qué se celebra el 27 de abril?",
        [
            "Día de la Libertad",
            "Día de la Juventud",
            "Día del Patrimonio",
            "Día Nacional de la Mujer"
        ],
        "Día de la Libertad"
    ),

    q(
        "¿Cuántos idiomas oficiales reconoce Sudáfrica?",
        [
            "11",
            "5",
            "8",
            "15"
        ],
        "11"
    ),

    q(
        "¿Qué es un braai?",
        [
            "Una tradición de cocinar a la parrilla",
            "Un baile",
            "Un instrumento",
            "Una prenda"
        ],
        "Una tradición de cocinar a la parrilla"
    ),

    q(
        "¿Qué género musical sudafricano se hizo muy popular en el siglo XXI?",
        [
            "Amapiano",
            "Tango",
            "Fado",
            "Flamenco"
        ],
        "Amapiano"
    ),

    q(
        "¿Qué concepto representa una filosofía relacionada con la humanidad y la comunidad?",
        [
            "Ubuntu",
            "Apartheid",
            "Colonialismo",
            "Imperialismo"
        ],
        "Ubuntu"
    ),

    q(
        "¿Qué se conmemora el 16 de junio?",
        [
            "Día de la Juventud",
            "Día de la Libertad",
            "Día del Patrimonio",
            "Día del Trabajo"
        ],
        "Día de la Juventud"
    ),

    q(
        "¿Qué se celebra el 24 de septiembre?",
        [
            "Día del Patrimonio",
            "Día de la Libertad",
            "Día de la Juventud",
            "Día Nacional de la Mujer"
        ],
        "Día del Patrimonio"
    ),

    q(
        "¿Qué escritora sudafricana recibió el Nobel de Literatura en 1991?",
        [
            "Nadine Gordimer",
            "Jane Austen",
            "J. K. Rowling",
            "Toni Morrison"
        ],
        "Nadine Gordimer"
    ),

    q(
        "¿Qué escritor sudafricano recibió el Nobel de Literatura en 2003?",
        [
            "J. M. Coetzee",
            "Pablo Neruda",
            "Ernest Hemingway",
            "Victor Hugo"
        ],
        "J. M. Coetzee"
    ),

    q(
        "¿Qué montaña es uno de los símbolos de Ciudad del Cabo?",
        [
            "Montaña de la Mesa",
            "Kilimanjaro",
            "Everest",
            "Aconcagua"
        ],
        "Montaña de la Mesa"
    ),

    q(
        "¿Qué parque nacional es famoso por su fauna africana?",
        [
            "Parque Nacional Kruger",
            "Yellowstone",
            "Galápagos",
            "Doñana"
        ],
        "Parque Nacional Kruger"
    ),

    q(
        "¿Qué lugar está directamente relacionado con el encarcelamiento de Nelson Mandela?",
        [
            "Robben Island",
            "Montaña de la Mesa",
            "Parque Kruger",
            "Durban"
        ],
        "Robben Island"
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

        racha = Number(datos.racha) || 0;

        respuestasCorrectas =
            Number(datos.respuestasCorrectas) || 0;

        retosCompletados =
            Number(datos.retosCompletados) || 0;

        juegoBloqueadoPorVidas =
            Boolean(datos.juegoBloqueadoPorVidas);


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


        estadoPreguntas = crearEstadoInicial();

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
    set("respuestasCorrectas", respuestasCorrectas);
    set("retosCompletados", retosCompletados);


    let categoriasCompletadas = 0;


    nombresTemas.forEach(nombre => {

        if (
            estadoPreguntas[nombre] &&
            estadoPreguntas[nombre].completado
        ) {

            categoriasCompletadas++;

        }

    });


    const porcentaje = Math.round(
        (categoriasCompletadas / nombresTemas.length) * 100
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
            "¡Empieza a explorar! 🚀"
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
                ? "🏆 Comenzar Reto Final de Sudáfrica"
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

        if (!estado.respondidas.includes(i)) {

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


    if (imagen && tema.imagen) {

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
        obtenerSiguientePregunta(temaActual);


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


    if (!preguntaHTML || !opcionesHTML) {

        console.error(
            "No se encontraron preguntaReto u opcionesReto."
        );

        return;
    }


    preguntaHTML.textContent =
        pregunta.pregunta;


    opcionesHTML.innerHTML = "";


    if (resultadoHTML) {

        resultadoHTML.textContent = "";

        resultadoHTML.className =
            "resultado";

    }


    if (botonSiguiente) {

        botonSiguiente.disabled = true;

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
                document.createElement("button");


            boton.type = "button";

            boton.className =
                "opcion";

            boton.textContent =
                opcion;


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
   15. COMPROBAR RESPUESTA NORMAL
============================================================ */

function comprobarRespuesta(respuesta) {

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
                boton.textContent === respuesta
        );


    if (respuesta === pregunta.correcta) {

        puntos += PUNTOS_CORRECTA;

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

            juegoBloqueadoPorVidas = true;

        }

    }


    estado.respondidas.push(
        indicePregunta
    );


    guardarProgreso();

    actualizarInterfaz();


    if (botonSiguiente) {

        botonSiguiente.disabled = false;

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
                (indiceActual + i) %
                nombresTemas.length
            ];


        if (
            estadoPreguntas[nombre] &&
            !estadoPreguntas[nombre].completado
        ) {

            destino = nombre;

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

        estado.completado = true;

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
            : "Explora la historia y cultura de Sudáfrica.";


    const voz =
        new SpeechSynthesisUtterance(
            texto
        );


    voz.lang = "es-ES";

    voz.rate = 0.95;


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


    indiceRecuperacion = 0;

    aciertosRecuperacion = 0;

    recuperacionActiva = true;


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

        boton.disabled = true;


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

    recuperacionActiva = false;


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
                    ¡Sigue aprendiendo!
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

        boton.disabled = true;


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
            "¿Seguro que quieres borrar todo tu progreso en Sudáfrica?"
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
        "El progreso de Sudáfrica se reinició correctamente."
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


        /*
           Si el usuario recarga la página
           teniendo 0 vidas, el juego queda
           bloqueado inmediatamente.
        */

        if (
            juegoBloqueadoPorVidas
        ) {

            abrirModalRecuperacion();

        }

    }

);

