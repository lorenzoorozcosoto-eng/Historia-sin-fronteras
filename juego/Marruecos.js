/* ============================================================
   HISTORIA SIN FRONTERAS - MARRUECOS
   14 categorías x 5 preguntas = 70 preguntas
   5 vidas, bloqueo al llegar a 0, reto de recuperación,
   reto final de 30 preguntas, historial de rondas.
============================================================ */

/* 1. CONFIGURACIÓN */

const CLAVE_GUARDADO = "historiaSinFronterasMarruecos_v2";
const MAX_VIDAS = 5;
const PUNTOS_CORRECTA = 10;
const ACIERTOS_MINIMOS_RECUPERACION = 3;

const nombresTemas = [
    "civilizaciones", "dinastias", "andalus",
    "protectorado", "independencia", "monarquia", "actualidad",
    "gastronomia", "musica", "tradiciones", "fiestas",
    "vestimenta", "arte", "monumentos"
];

function q(pregunta, opciones, correcta) {
    return { pregunta, opciones, correcta };
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


/* 2. INFORMACIÓN Y 70 PREGUNTAS */

const temas = {

    "civilizaciones": {
        titulo: "Civilizaciones antiguas",
        subtitulo: "Conoce los pueblos que habitaron el territorio de Marruecos antes de las grandes dinastías.",
        icono: "🏛️",
        mensaje: "Desde los bereberes hasta la influencia fenicia y romana, Marruecos tiene una historia milenaria.",
        regiones: ["Atlas", "Rif", "Costa mediterránea", "Sahara"],
        dato: "Los bereberes (amazigh) son el pueblo indígena de África del Norte y habitan Marruecos desde hace miles de años.",
        preguntas: [
            q("¿Cuál es el pueblo indígena originario de Marruecos?", ["Bereberes (Amazigh)", "Árabes", "Fenicios", "Romanos"], "Bereberes (Amazigh)"),
            q("¿Qué civilización antigua estableció colonias comerciales en la costa de Marruecos?", ["Fenicios", "Incas", "Mayas", "Vikingos"], "Fenicios"),
            q("¿Cómo se llamaba la ciudad romana importante en el norte de Marruecos?", ["Volubilis", "Cartago", "Alejandría", "Pompeya"], "Volubilis"),
            q("¿Qué pueblo dominó gran parte del Magreb antes de la llegada del islam?", ["Bereberes", "Persas", "Otomanos", "Mongoles"], "Bereberes"),
            q("La antigua ciudad de Lixus se encuentra cerca de:", ["Larache", "Marrakech", "Fez", "Agadir"], "Larache")
        ]
    },

    "dinastias": {
        titulo: "Dinastías",
        subtitulo: "Explora las grandes dinastías que gobernaron Marruecos a lo largo de la historia.",
        icono: "👑",
        mensaje: "Desde los Idrisíes hasta los Alauíes, las dinastías han marcado la identidad del país.",
        regiones: ["Fez", "Marrakech", "Meknes", "Rabat"],
        dato: "La dinastía alauí, que reina actualmente, llegó al poder en el siglo XVII.",
        preguntas: [
            q("¿Cuál fue la primera dinastía islámica de Marruecos?", ["Idrisí", "Almorávide", "Almohade", "Mariní"], "Idrisí"),
            q("¿Qué dinastía fundó la ciudad de Marrakech?", ["Almorávide", "Idrisí", "Saadí", "Alauí"], "Almorávide"),
            q("¿Qué dinastía unificó el Magreb y Al-Ándalus en el siglo XII?", ["Almohade", "Mariní", "Wattasí", "Saadí"], "Almohade"),
            q("¿Qué dinastía construyó la Madraza Bou Inania de Fez?", ["Mariní", "Almorávide", "Idrisí", "Alauí"], "Mariní"),
            q("¿Qué dinastía reina actualmente en Marruecos?", ["Alauí", "Saadí", "Mariní", "Almohade"], "Alauí")
        ]
    },

    "andalus": {
        titulo: "Marruecos y Al-Ándalus",
        subtitulo: "Descubre la estrecha relación histórica entre Marruecos y la península ibérica musulmana.",
        icono: "🕌",
        mensaje: "Durante siglos existió un intenso intercambio cultural, político y comercial entre ambos territorios.",
        regiones: ["Estrecho de Gibraltar", "Fez", "Córdoba", "Granada"],
        dato: "Tras la caída de Granada en 1492, muchos musulmanes y judíos andalusíes se refugiaron en Marruecos.",
        preguntas: [
            q("¿Qué dinastía marroquí controló gran parte de Al-Ándalus?", ["Almorávide y Almohade", "Idrisí", "Saadí", "Wattasí"], "Almorávide y Almohade"),
            q("¿Qué ciudad andalusí fue capital del califato y estuvo muy ligada a Marruecos?", ["Córdoba", "Sevilla", "Toledo", "Zaragoza"], "Córdoba"),
            q("Tras 1492, muchos andalusíes se establecieron principalmente en:", ["Fez y Tánger", "El Cairo", "Estambul", "Bagdad"], "Fez y Tánger"),
            q("¿Qué estilo arquitectónico se compartió entre Marruecos y Al-Ándalus?", ["Arte hispanomusulmán", "Gótico", "Románico", "Barroco"], "Arte hispanomusulmán"),
            q("El Estrecho de Gibraltar separa Marruecos de:", ["España", "Francia", "Italia", "Portugal"], "España")
        ]
    },

    "protectorado": {
        titulo: "Protectorado",
        subtitulo: "Conoce el periodo en el que Marruecos estuvo bajo control de Francia y España.",
        icono: "📜",
        mensaje: "Entre 1912 y 1956 Marruecos estuvo dividido entre el protectorado francés y el español.",
        regiones: ["Rabat", "Casablanca", "Tánger", "Tetuán"],
        dato: "El Tratado de Fez de 1912 estableció el protectorado francés sobre la mayor parte de Marruecos.",
        preguntas: [
            q("¿En qué año se firmó el Tratado de Fez que estableció el protectorado?", ["1912", "1900", "1956", "1880"], "1912"),
            q("¿Qué dos países europeos controlaron Marruecos durante el protectorado?", ["Francia y España", "Francia e Italia", "España y Portugal", "Inglaterra y Francia"], "Francia y España"),
            q("¿Qué ciudad fue la capital del protectorado francés?", ["Rabat", "Marrakech", "Fez", "Agadir"], "Rabat"),
            q("¿Qué zona de Marruecos estuvo bajo control español?", ["Norte (Rif) y sur (Sáhara)", "Solo el Atlas", "Solo la costa atlántica", "Todo el país"], "Norte (Rif) y sur (Sáhara)"),
            q("¿Qué ciudad internacional existió durante el protectorado?", ["Tánger", "Casablanca", "Meknes", "Ouarzazate"], "Tánger")
        ]
    },

    "independencia": {
        titulo: "Independencia",
        subtitulo: "Conoce el proceso que llevó a la independencia de Marruecos en 1956.",
        icono: "🇲🇦",
        mensaje: "La independencia marcó el fin del protectorado y el inicio de la soberanía plena del país.",
        regiones: ["Todo Marruecos"],
        dato: "Mohammed V fue una figura clave en la lucha por la independencia y regresó del exilio en 1955.",
        preguntas: [
            q("¿En qué año obtuvo Marruecos su independencia?", ["1956", "1912", "1945", "1960"], "1956"),
            q("¿Quién fue el sultán clave en el proceso de independencia?", ["Mohammed V", "Hassan II", "Mohammed VI", "Yusuf ibn Tachfin"], "Mohammed V"),
            q("¿A dónde fue exiliado Mohammed V por las autoridades francesas?", ["Madagascar", "Egipto", "España", "Argelia"], "Madagascar"),
            q("¿Qué movimiento nacionalista impulsó la independencia?", ["Istiqlal", "FLN", "ANC", "Sinn Féin"], "Istiqlal"),
            q("Tras la independencia, Mohammed V se convirtió en:", ["Rey de Marruecos", "Presidente", "Califa", "Emir"], "Rey de Marruecos")
        ]
    },

    "monarquia": {
        titulo: "Monarquía",
        subtitulo: "Explora la institución monárquica y la dinastía alauí en Marruecos.",
        icono: "👑",
        mensaje: "Marruecos es una monarquía constitucional con una dinastía que reina desde el siglo XVII.",
        regiones: ["Rabat", "Fez", "Marrakech"],
        dato: "El actual rey es Mohammed VI, quien ascendió al trono en 1999.",
        preguntas: [
            q("¿Qué dinastía reina actualmente en Marruecos?", ["Alauí", "Saadí", "Mariní", "Almohade"], "Alauí"),
            q("¿Quién es el rey actual de Marruecos?", ["Mohammed VI", "Hassan II", "Mohammed V", "Abdallah"], "Mohammed VI"),
            q("¿En qué año ascendió al trono Mohammed VI?", ["1999", "1961", "1956", "2000"], "1999"),
            q("¿Quién fue el padre de Mohammed VI?", ["Hassan II", "Mohammed V", "Yusuf", "Ismail"], "Hassan II"),
            q("La monarquía marroquí es de tipo:", ["Constitucional", "Absoluta sin límites", "Electiva", "Federal"], "Constitucional")
        ]
    },

    "actualidad": {
        titulo: "Marruecos actual",
        subtitulo: "Conoce algunos aspectos de la Marruecos contemporánea.",
        icono: "🌍",
        mensaje: "Hoy Marruecos es un país moderno que combina tradición y desarrollo económico.",
        regiones: ["Casablanca", "Rabat", "Tánger", "Marrakech"],
        dato: "Casablanca es la ciudad más grande y el principal centro económico de Marruecos.",
        preguntas: [
            q("¿Cuál es la capital política de Marruecos?", ["Rabat", "Casablanca", "Fez", "Marrakech"], "Rabat"),
            q("¿Cuál es la ciudad más grande y el centro económico del país?", ["Casablanca", "Rabat", "Fez", "Agadir"], "Casablanca"),
            q("¿Qué estrecho separa Marruecos de Europa?", ["Estrecho de Gibraltar", "Estrecho de Magallanes", "Canal de Suez", "Estrecho de Bering"], "Estrecho de Gibraltar"),
            q("¿Qué idioma es oficial junto al árabe en Marruecos?", ["Amazigh (bereber)", "Francés", "Español", "Inglés"], "Amazigh (bereber)"),
            q("Marruecos forma parte del continente:", ["África", "Europa", "Asia", "América"], "África")
        ]
    },

    "gastronomia": {
        titulo: "Gastronomía marroquí",
        subtitulo: "Sabores y aromas que cuentan historias.",
        icono: "🍲",
        mensaje: "La cocina marroquí es famosa por sus especias, el cuscús y el tajine.",
        regiones: ["Marrakech", "Fez", "Casablanca", "Rabat"],
        dato: "El cuscús es considerado el plato nacional de Marruecos y se come tradicionalmente los viernes.",
        preguntas: [
            q("¿Cuál es el plato nacional más representativo de Marruecos?", ["Cuscús", "Paella", "Sushi", "Pizza"], "Cuscús"),
            q("¿Qué es un tajine?", ["Un guiso cocinado en una olla de barro cónica", "Un postre", "Una bebida", "Un tipo de pan"], "Un guiso cocinado en una olla de barro cónica"),
            q("¿Qué especia es muy característica de la cocina marroquí?", ["Comino y azafrán", "Curry indio", "Wasabi", "Pimentón húngaro"], "Comino y azafrán"),
            q("¿Qué bebida se ofrece tradicionalmente a los visitantes?", ["Té a la menta", "Café espresso", "Mate", "Chocolate caliente"], "Té a la menta"),
            q("¿Qué postre de hojaldre y almendras es típico de Marruecos?", ["Pastilla o bastela", "Tiramisú", "Cheesecake", "Baklava turco únicamente"], "Pastilla o bastela")
        ]
    },

    "musica": {
        titulo: "Música",
        subtitulo: "Descubre los ritmos y estilos musicales de Marruecos.",
        icono: "🎵",
        mensaje: "Desde el andalusí hasta el gnawa y el chaabi, la música refleja la diversidad cultural.",
        regiones: ["Fez", "Marrakech", "Essaouira", "Rif"],
        dato: "La música gnawa tiene raíces africanas y se caracteriza por el uso del guembri y las qraqeb.",
        preguntas: [
            q("¿Qué estilo musical tiene raíces africanas y se asocia a rituales?", ["Gnawa", "Flamenco", "Samba", "Reggae"], "Gnawa"),
            q("¿Qué instrumento de cuerda es típico de la música gnawa?", ["Guembri", "Guitarra eléctrica", "Violín", "Arpa"], "Guembri"),
            q("¿Qué tradición musical proviene de Al-Ándalus?", ["Música andalusí", "Rock", "Jazz", "Hip-hop"], "Música andalusí"),
            q("¿Qué festival internacional de música se celebra en Essaouira?", ["Festival Gnawa", "Tomorrowland", "Coachella", "Oktoberfest"], "Festival Gnawa"),
            q("El chaabi es un estilo de música:", ["Popular marroquí", "Clásica europea", "Ópera", "Electrónica"], "Popular marroquí")
        ]
    },

    "tradiciones": {
        titulo: "Tradiciones",
        subtitulo: "Conoce costumbres que forman parte de la identidad cultural marroquí.",
        icono: "🪅",
        mensaje: "Las tradiciones se viven en la hospitalidad, las celebraciones y la vida cotidiana.",
        regiones: ["Todo el país"],
        dato: "Ofrecer té a la menta es un gesto de hospitalidad muy importante en la cultura marroquí.",
        preguntas: [
            q("¿Qué gesto de hospitalidad es muy importante en Marruecos?", ["Ofrecer té a la menta", "Dar la mano solo una vez", "No mirar a los ojos", "Evitar hablar"], "Ofrecer té a la menta"),
            q("¿Qué se celebra al final del ramadán?", ["Aid al-Fitr", "Navidad", "Halloween", "Año Nuevo chino"], "Aid al-Fitr"),
            q("El hammam es una tradición de:", ["Baño público o privado", "Danza", "Cocina", "Música"], "Baño público o privado"),
            q("¿Qué se hace tradicionalmente en las bodas marroquíes?", ["Ceremonias elaboradas con música y henna", "Solo firmar un documento", "Nada especial", "Viajar inmediatamente"], "Ceremonias elaboradas con música y henna"),
            q("La henna se usa tradicionalmente para:", ["Decorar las manos en celebraciones", "Cocinar", "Construir casas", "Fabricar ropa"], "Decorar las manos en celebraciones")
        ]
    },

    "fiestas": {
        titulo: "Fiestas",
        subtitulo: "Conoce algunas de las celebraciones más importantes de Marruecos.",
        icono: "🎉",
        mensaje: "Las fiestas religiosas y populares reúnen a las familias y comunidades.",
        regiones: ["Todo el país", "Marrakech", "Fez", "Imilchil"],
        dato: "El Aid al-Adha (Fiesta del Cordero) es una de las celebraciones más importantes del año.",
        preguntas: [
            q("¿Qué fiesta se celebra al final del mes de ramadán?", ["Aid al-Fitr", "Aid al-Adha", "Mawlid", "Ashura"], "Aid al-Fitr"),
            q("¿Cómo se conoce también al Aid al-Adha?", ["Fiesta del Cordero", "Fiesta de la Primavera", "Fiesta del Sol", "Fiesta del Mar"], "Fiesta del Cordero"),
            q("¿Qué festival de matrimonio bereber es famoso en el Atlas?", ["Moussem de Imilchil", "Carnaval de Río", "Oktoberfest", "Día de Muertos"], "Moussem de Imilchil"),
            q("El Mawlid celebra el nacimiento de:", ["El profeta Mahoma", "Un rey antiguo", "Un santo cristiano", "Un filósofo griego"], "El profeta Mahoma"),
            q("Durante el ramadán, los musulmanes:", ["Ayunan desde el alba hasta el atardecer", "Comen todo el día", "No rezan", "Viajan obligatoriamente"], "Ayunan desde el alba hasta el atardecer")
        ]
    },

    "vestimenta": {
        titulo: "Vestimenta",
        subtitulo: "Descubre las prendas tradicionales de Marruecos.",
        icono: "👘",
        mensaje: "La vestimenta tradicional refleja la identidad, el clima y las costumbres de cada región.",
        regiones: ["Todo el país", "Atlas", "Sahara", "Ciudades"],
        dato: "La chilaba (djellaba) es una prenda larga con capucha muy usada por hombres y mujeres.",
        preguntas: [
            q("¿Cómo se llama la prenda larga con capucha típica de Marruecos?", ["Chilaba o djellaba", "Kimono", "Sari", "Poncho"], "Chilaba o djellaba"),
            q("¿Qué prenda femenina elaborada se usa en ocasiones especiales?", ["Caftán", "Jeans", "Traje de chaqueta", "Chándal"], "Caftán"),
            q("¿Qué calzado tradicional de cuero se fabrica en Fez y Marrakech?", ["Babuchas", "Zapatillas deportivas", "Botas de goma", "Sandalias griegas"], "Babuchas"),
            q("El turbante o rezza se usa especialmente en:", ["El sur y el desierto", "Solo en la costa", "Únicamente en Europa", "Nunca en Marruecos"], "El sur y el desierto"),
            q("La vestimenta tradicional ayuda a representar:", ["La identidad cultural", "Solo la moda internacional", "Únicamente el clima", "Los avances tecnológicos"], "La identidad cultural")
        ]
    },

    "arte": {
        titulo: "Arte y artesanía",
        subtitulo: "Conoce las expresiones artísticas y artesanales de Marruecos.",
        icono: "🎨",
        mensaje: "La artesanía marroquí es reconocida mundialmente por su calidad y belleza.",
        regiones: ["Fez", "Marrakech", "Essaouira", "Safi"],
        dato: "Fez es famosa por sus curtidurías tradicionales y su cerámica azul.",
        preguntas: [
            q("¿Por qué es especialmente conocida la ciudad de Fez en artesanía?", ["Curtidurías y cerámica", "Relojes suizos", "Coches", "Electrónica"], "Curtidurías y cerámica"),
            q("¿Qué material se usa en la famosa artesanía de zellige?", ["Mosaico de azulejos", "Plástico", "Vidrio moderno", "Acero"], "Mosaico de azulejos"),
            q("¿Qué ciudad es famosa por su madera tallada y marquetería?", ["Essaouira y Fez", "Nueva York", "Tokio", "Sídney"], "Essaouira y Fez"),
            q("Los tejidos y alfombras bereberes se elaboran principalmente en:", ["El Atlas y el Rif", "Solo en casinos", "Fábricas europeas", "El Ártico"], "El Atlas y el Rif"),
            q("¿Qué metal se trabaja tradicionalmente en joyería y objetos decorativos?", ["Plata y latón", "Uranio", "Titanio", "Plástico"], "Plata y latón")
        ]
    },

    "monumentos": {
        titulo: "Monumentos",
        subtitulo: "Descubre lugares históricos y culturales importantes de Marruecos.",
        icono: "🕌",
        mensaje: "Marruecos posee un patrimonio arquitectónico excepcional reconocido por la UNESCO.",
        regiones: ["Marrakech", "Fez", "Meknes", "Volubilis", "Casablanca"],
        dato: "La mezquita Hassan II de Casablanca tiene uno de los minaretes más altos del mundo.",
        preguntas: [
            q("¿En qué ciudad se encuentra la Koutoubia?", ["Marrakech", "Rabat", "Tánger", "Agadir"], "Marrakech"),
            q("¿Qué ciudad es conocida como la capital espiritual y tiene una medina Patrimonio de la Humanidad?", ["Fez", "Casablanca", "Agadir", "Dakhla"], "Fez"),
            q("¿Dónde se encuentra la mezquita Hassan II?", ["Casablanca", "Fez", "Marrakech", "Meknes"], "Casablanca"),
            q("¿Qué yacimiento romano es famoso en Marruecos?", ["Volubilis", "Pompeya", "Éfeso", "Machu Picchu"], "Volubilis"),
            q("¿Qué puerta monumental es símbolo de Meknes?", ["Bab Mansour", "Arco de Triunfo", "Puerta de Brandeburgo", "Torre Eiffel"], "Bab Mansour")
        ]
    }
};


/* 3. RETO DE RECUPERACIÓN (5 preguntas, mínimo 3 aciertos) */

const preguntasRecuperacionBase = [
    q("¿Cuál es el plato nacional más representativo de Marruecos?", ["Cuscús", "Paella", "Sushi", "Pizza"], "Cuscús"),
    q("¿En qué año obtuvo Marruecos su independencia?", ["1956", "1912", "1945", "1960"], "1956"),
    q("¿Qué dinastía reina actualmente en Marruecos?", ["Alauí", "Saadí", "Mariní", "Almohade"], "Alauí"),
    q("¿Cómo se llama la prenda larga con capucha típica de Marruecos?", ["Chilaba o djellaba", "Kimono", "Sari", "Poncho"], "Chilaba o djellaba"),
    q("¿En qué ciudad se encuentra la Koutoubia?", ["Marrakech", "Rabat", "Tánger", "Agadir"], "Marrakech")
];


/* 4. RETO FINAL - 30 PREGUNTAS */

const preguntasFinales = [
    q("¿Cuál es el pueblo indígena originario de Marruecos?", ["Bereberes (Amazigh)", "Árabes", "Fenicios", "Romanos"], "Bereberes (Amazigh)"),
    q("¿Qué civilización antigua estableció colonias en la costa marroquí?", ["Fenicios", "Incas", "Mayas", "Vikingos"], "Fenicios"),
    q("¿Cuál fue la primera dinastía islámica de Marruecos?", ["Idrisí", "Almorávide", "Almohade", "Mariní"], "Idrisí"),
    q("¿Qué dinastía fundó Marrakech?", ["Almorávide", "Idrisí", "Saadí", "Alauí"], "Almorávide"),
    q("¿Qué dinastías controlaron gran parte de Al-Ándalus?", ["Almorávide y Almohade", "Idrisí", "Saadí", "Wattasí"], "Almorávide y Almohade"),
    q("¿En qué año se firmó el Tratado de Fez?", ["1912", "1900", "1956", "1880"], "1912"),
    q("¿Qué dos países controlaron Marruecos durante el protectorado?", ["Francia y España", "Francia e Italia", "España y Portugal", "Inglaterra y Francia"], "Francia y España"),
    q("¿En qué año obtuvo Marruecos la independencia?", ["1956", "1912", "1945", "1960"], "1956"),
    q("¿Quién fue el sultán clave en la independencia?", ["Mohammed V", "Hassan II", "Mohammed VI", "Yusuf"], "Mohammed V"),
    q("¿Qué dinastía reina actualmente?", ["Alauí", "Saadí", "Mariní", "Almohade"], "Alauí"),
    q("¿Quién es el rey actual de Marruecos?", ["Mohammed VI", "Hassan II", "Mohammed V", "Abdallah"], "Mohammed VI"),
    q("¿Cuál es la capital política de Marruecos?", ["Rabat", "Casablanca", "Fez", "Marrakech"], "Rabat"),
    q("¿Cuál es la ciudad más grande de Marruecos?", ["Casablanca", "Rabat", "Fez", "Agadir"], "Casablanca"),
    q("¿Cuál es el plato nacional de Marruecos?", ["Cuscús", "Paella", "Sushi", "Pizza"], "Cuscús"),
    q("¿Qué es un tajine?", ["Un guiso en olla de barro cónica", "Un postre", "Una bebida", "Un pan"], "Un guiso en olla de barro cónica"),
    q("¿Qué bebida se ofrece como gesto de hospitalidad?", ["Té a la menta", "Café solo", "Mate", "Refresco"], "Té a la menta"),
    q("¿Qué estilo musical tiene raíces africanas?", ["Gnawa", "Flamenco", "Samba", "Rock"], "Gnawa"),
    q("¿Qué instrumento es típico de la música gnawa?", ["Guembri", "Guitarra", "Violín", "Arpa"], "Guembri"),
    q("¿Cómo se llama la prenda larga con capucha?", ["Chilaba o djellaba", "Kimono", "Sari", "Poncho"], "Chilaba o djellaba"),
    q("¿Qué prenda femenina se usa en ocasiones especiales?", ["Caftán", "Jeans", "Traje", "Chándal"], "Caftán"),
    q("¿Por qué es famosa Fez en artesanía?", ["Curtidurías y cerámica", "Relojes", "Coches", "Electrónica"], "Curtidurías y cerámica"),
    q("¿Qué material se usa en el zellige?", ["Mosaico de azulejos", "Plástico", "Vidrio", "Acero"], "Mosaico de azulejos"),
    q("¿En qué ciudad está la Koutoubia?", ["Marrakech", "Rabat", "Tánger", "Agadir"], "Marrakech"),
    q("¿Dónde se encuentra la mezquita Hassan II?", ["Casablanca", "Fez", "Marrakech", "Meknes"], "Casablanca"),
    q("¿Qué yacimiento romano es famoso en Marruecos?", ["Volubilis", "Pompeya", "Éfeso", "Machu Picchu"], "Volubilis"),
    q("¿Qué fiesta se celebra al final del ramadán?", ["Aid al-Fitr", "Aid al-Adha", "Navidad", "Halloween"], "Aid al-Fitr"),
    q("¿Cómo se conoce al Aid al-Adha?", ["Fiesta del Cordero", "Fiesta de la Primavera", "Fiesta del Sol", "Fiesta del Mar"], "Fiesta del Cordero"),
    q("¿Qué idioma es oficial junto al árabe?", ["Amazigh (bereber)", "Francés", "Español", "Inglés"], "Amazigh (bereber)"),
    q("¿Qué estrecho separa Marruecos de Europa?", ["Estrecho de Gibraltar", "Magallanes", "Suez", "Bering"], "Estrecho de Gibraltar"),
    q("Tras 1492, muchos andalusíes se refugiaron en:", ["Fez y Tánger", "El Cairo", "Estambul", "Bagdad"], "Fez y Tánger")
];


/* 5. VARIABLES DEL JUEGO */

let temaActual = null;
let indicePregunta = 0;

let puntos = 0;
let vidas = MAX_VIDAS;
let racha = 0;
let respuestasCorrectas = 0;
let retosCompletados = 0;

let juegoBloqueadoPorVidas = false;

let retoFinalDesbloqueado = false;
let retoFinalActivo = false;
let indicePreguntaFinal = 0;
let puntosFinales = 0;
let respuestasFinales = 0;
let preguntasFinalesMezcladas = [];

let preguntasRecuperacion = [];
let indiceRecuperacion = 0;
let recuperacionActiva = false;
let aciertosRecuperacion = 0;
let htmlInicioRecuperacion = "";

let estadoPreguntas = {};
let historial = { rondas: 0, puntosTotales: 0, correctasTotales: 0 };


/* 6. ESTADO INICIAL */

function crearEstadoInicial() {
    const estado = {};
    nombresTemas.forEach(nombre => {
        estado[nombre] = { respondidas: [], completado: false };
    });
    return estado;
}


/* 7. CARGAR PROGRESO */

function cargarProgreso() {
    try {
        const guardado = localStorage.getItem(CLAVE_GUARDADO);

        if (!guardado) {
            estadoPreguntas = crearEstadoInicial();
            guardarProgreso();
            return;
        }

        const datos = JSON.parse(guardado);

        estadoPreguntas = datos.estadoPreguntas || crearEstadoInicial();

        nombresTemas.forEach(nombre => {
            if (!estadoPreguntas[nombre]) {
                estadoPreguntas[nombre] = { respondidas: [], completado: false };
            }
        });

        puntos = Number(datos.puntos) || 0;
        vidas = typeof datos.vidas === "number" ? datos.vidas : MAX_VIDAS;
        racha = Number(datos.racha) || 0;
        respuestasCorrectas = Number(datos.respuestasCorrectas) || 0;
        retosCompletados = Number(datos.retosCompletados) || 0;
        juegoBloqueadoPorVidas = Boolean(datos.juegoBloqueadoPorVidas);
        historial = datos.historial || { rondas: 0, puntosTotales: 0, correctasTotales: 0 };

        if (vidas < 0) vidas = 0;
        if (vidas > MAX_VIDAS) vidas = MAX_VIDAS;
        if (vidas === 0) juegoBloqueadoPorVidas = true;

    } catch (error) {
        console.error("Error al cargar el progreso:", error);

        estadoPreguntas = crearEstadoInicial();
        puntos = 0;
        vidas = MAX_VIDAS;
        racha = 0;
        respuestasCorrectas = 0;
        retosCompletados = 0;
        juegoBloqueadoPorVidas = false;
        historial = { rondas: 0, puntosTotales: 0, correctasTotales: 0 };
    }
}


/* 8. GUARDAR PROGRESO */

function guardarProgreso() {
    try {
        localStorage.setItem(CLAVE_GUARDADO, JSON.stringify({
            estadoPreguntas,
            puntos,
            vidas,
            racha,
            respuestasCorrectas,
            retosCompletados,
            juegoBloqueadoPorVidas,
            historial
        }));
    } catch (error) {
        console.error("No se pudo guardar el progreso:", error);
    }
}


/* 9. ACTUALIZAR INTERFAZ */

function actualizarInterfaz() {

    const set = (id, valor) => {
        const el = obtener(id);
        if (el) el.textContent = valor;
    };

    set("puntos", puntos);
    set("vidas", vidas);
    set("racha", racha);
    set("respuestasCorrectas", respuestasCorrectas);
    set("retosCompletados", retosCompletados);
    set("rondasCompletadas", historial.rondas);
    set("puntosTotales", historial.puntosTotales);

    /* Progreso general */

    let categoriasCompletadas = 0;

    nombresTemas.forEach(nombre => {
        if (estadoPreguntas[nombre] && estadoPreguntas[nombre].completado) {
            categoriasCompletadas++;
        }
    });

    const porcentaje = Math.round(
        (categoriasCompletadas / nombresTemas.length) * 100
    );

    set("porcentaje", porcentaje + "%");

    const circulo = obtener("circuloProgreso");

    if (circulo) {
        const circunferencia = 2 * Math.PI * 50;
        circulo.style.strokeDasharray = circunferencia;
        circulo.style.strokeDashoffset =
            circunferencia * (1 - porcentaje / 100);
    }

    if (porcentaje === 100) {
        set("mensajeProgreso", "¡Completaste todas las categorías! 🎉");
    } else if (categoriasCompletadas === 0) {
        set("mensajeProgreso", "¡Empieza a explorar! 🚀");
    } else {
        set("mensajeProgreso",
            `Has completado ${categoriasCompletadas} de ${nombresTemas.length} categorías.`);
    }

    /* Botón reto final */

    const desbloqueado = nombresTemas.every(nombre =>
        estadoPreguntas[nombre] && estadoPreguntas[nombre].completado
    );

    retoFinalDesbloqueado = desbloqueado;

    const botonFinal = obtener("btnRetoFinal");

    if (botonFinal) {
        botonFinal.disabled = !desbloqueado;
        botonFinal.textContent = desbloqueado
            ? "🏆 Comenzar Reto Final de Marruecos"
            : "🔒 Reto Final Bloqueado";
    }

    guardarProgreso();
}


/* 10. OBTENER SIGUIENTE PREGUNTA */

function obtenerSiguientePregunta(nombreTema) {

    if (!temas[nombreTema]) return null;

    const estado = estadoPreguntas[nombreTema];
    const preguntas = temas[nombreTema].preguntas;

    for (let i = 0; i < preguntas.length; i++) {
        if (!estado.respondidas.includes(i)) return i;
    }

    return null;
}


/* 11. CAMBIAR TEMA */

function marcarMenu(slug) {
    document.querySelectorAll(".menu-btn").forEach(btn => {
        btn.classList.toggle("activo", btn.getAttribute("data-tema") === slug);
    });
}

function cambiarTema(nombreTema, boton) {

    if (!temas[nombreTema]) {
        console.error("Tema no encontrado:", nombreTema);
        return;
    }

    if (juegoBloqueadoPorVidas) {
        abrirModalRecuperacion();
        return;
    }

    cargarTema(nombreTema);
    marcarMenu(nombreTema);
}


/* 12. CARGAR TEMA */

function cargarTema(nombreTema) {

    if (!temas[nombreTema]) {
        console.error("No existe el tema:", nombreTema);
        return;
    }

    temaActual = nombreTema;

    const tema = temas[nombreTema];

    // Detener audio al cambiar de categoría
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    const estadoAudio = obtener("estadoAudio");
    if (estadoAudio) estadoAudio.textContent = "▶";

    const titulo = obtener("tituloTema");
    const subtitulo = obtener("subtituloTema");
    const icono = obtener("iconoTema");
    const mensaje = obtener("mensajeBot");
    const dato = obtener("datoCurioso");
    const regiones = obtener("regiones");
    const imagen = obtener("imagenTema");

    if (titulo) titulo.textContent = tema.titulo;
    if (subtitulo) subtitulo.textContent = tema.subtitulo;
    if (icono) icono.textContent = tema.icono;
    if (mensaje) mensaje.textContent = tema.mensaje;
    if (dato) dato.textContent = tema.dato;

    if (regiones) {
        regiones.innerHTML = "";
        tema.regiones.forEach(nombre => {
            const span = document.createElement("span");
            span.textContent = nombre;
            regiones.appendChild(span);
        });
    }

    if (imagen && tema.imagen) imagen.src = tema.imagen;

    cargarPregunta();
    actualizarInterfaz();
}


/* 13. CARGAR PREGUNTA NORMAL */

function cargarPregunta() {

    if (!temaActual) return;

    if (juegoBloqueadoPorVidas) {
        abrirModalRecuperacion();
        return;
    }

    const tema = temas[temaActual];
    const estado = estadoPreguntas[temaActual];

    if (estado.respondidas.length >= tema.preguntas.length) {
        finalizarTema();
        return;
    }

    const siguiente = obtenerSiguientePregunta(temaActual);

    if (siguiente === null) {
        finalizarTema();
        return;
    }

    indicePregunta = siguiente;

    const pregunta = tema.preguntas[indicePregunta];

    const preguntaHTML = obtener("preguntaReto");
    const opcionesHTML = obtener("opcionesReto");
    const resultadoHTML = obtener("resultado");
    const botonSiguiente = obtener("botonSiguiente");
    const numeroPregunta = obtener("numeroPregunta");

    if (!preguntaHTML || !opcionesHTML) {
        console.error("No se encontraron preguntaReto u opcionesReto.");
        return;
    }

    preguntaHTML.textContent = pregunta.pregunta;
    opcionesHTML.innerHTML = "";

    if (resultadoHTML) {
        resultadoHTML.textContent = "";
        resultadoHTML.className = "resultado";
    }

    if (botonSiguiente) {
        botonSiguiente.disabled = true;
        botonSiguiente.textContent = "Siguiente →";
    }

    if (numeroPregunta) {
        numeroPregunta.textContent =
            `Pregunta ${estado.respondidas.length + 1} de ${tema.preguntas.length}`;
    }

    mezclar(pregunta.opciones).forEach(opcion => {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.className = "opcion";
        boton.textContent = opcion;
        boton.addEventListener("click", function () {
            comprobarRespuesta(opcion);
        });
        opcionesHTML.appendChild(boton);
    });
}


/* 14. COMPROBAR RESPUESTA */

function comprobarRespuesta(respuesta) {

    if (!temaActual) return;
    if (juegoBloqueadoPorVidas) return;

    const tema = temas[temaActual];
    const estado = estadoPreguntas[temaActual];
    const pregunta = tema.preguntas[indicePregunta];

    if (!pregunta) return;

    if (estado.respondidas.includes(indicePregunta)) return;

    const botones = document.querySelectorAll("#opcionesReto .opcion");

    botones.forEach(boton => {
        boton.disabled = true;
        if (boton.textContent === pregunta.correcta) {
            boton.classList.add("correcta");
        }
    });

    const resultado = obtener("resultado");
    const botonSiguiente = obtener("botonSiguiente");

    const botonSeleccionado =
        [...botones].find(boton => boton.textContent === respuesta);

    if (respuesta === pregunta.correcta) {

        puntos += PUNTOS_CORRECTA;
        respuestasCorrectas++;
        racha++;

        if (resultado) {
            resultado.textContent = "✅ ¡Respuesta correcta! +10 puntos";
            resultado.className = "resultado correcto";
        }

    } else {

        vidas--;
        racha = 0;

        if (botonSeleccionado) botonSeleccionado.classList.add("incorrecta");

        if (resultado) {
            resultado.textContent =
                `❌ Incorrecto. La respuesta correcta es: ${pregunta.correcta}`;
            resultado.className = "resultado incorrecto";
        }

        if (vidas <= 0) {
            vidas = 0;
            juegoBloqueadoPorVidas = true;
        }
    }

    estado.respondidas.push(indicePregunta);

    guardarProgreso();
    actualizarInterfaz();

    if (botonSiguiente) botonSiguiente.disabled = false;

    // Sin vidas: bloquear la pantalla
    if (juegoBloqueadoPorVidas) {
        setTimeout(() => {
            abrirModalRecuperacion();
        }, 700);
    }
}


/* 15. SIGUIENTE PREGUNTA / SIGUIENTE CATEGORÍA */

function siguientePregunta() {

    if (juegoBloqueadoPorVidas) {
        abrirModalRecuperacion();
        return;
    }

    if (!temaActual) return;

    const estado = estadoPreguntas[temaActual];
    const tema = temas[temaActual];

    // Categoría ya completada: pasar a la siguiente (o al reto final)
    if (estado.completado) {
        irASiguienteCategoria();
        return;
    }

    if (estado.respondidas.length >= tema.preguntas.length) {
        finalizarTema();
        return;
    }

    cargarPregunta();
}


function irASiguienteCategoria() {

    const indiceActual = nombresTemas.indexOf(temaActual);

    let destino = null;

    for (let i = 1; i <= nombresTemas.length; i++) {
        const nombre = nombresTemas[(indiceActual + i) % nombresTemas.length];
        if (!estadoPreguntas[nombre].completado) {
            destino = nombre;
            break;
        }
    }

    // Ya completó las 14: abrir el reto final
    if (destino === null) {
        comenzarRetoFinal();
        return;
    }

    const boton = document.querySelector(`.menu-btn[data-tema="${destino}"]`);

    cambiarTema(destino, boton);

    if (boton) boton.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

/* 16. FINALIZAR TEMA */

function finalizarTema() {

    if (!temaActual) return;

    const estado = estadoPreguntas[temaActual];
    const cantidadPreguntas = temas[temaActual].preguntas.length;

    if (estado.respondidas.length < cantidadPreguntas) return;

    if (!estado.completado) {
        estado.completado = true;
        retosCompletados++;
        guardarProgreso();
    }

    actualizarInterfaz();

    const preguntaHTML = obtener("preguntaReto");
    const opcionesHTML = obtener("opcionesReto");
    const resultadoHTML = obtener("resultado");
    const botonSiguiente = obtener("botonSiguiente");
    const numeroPregunta = obtener("numeroPregunta");

    if (preguntaHTML) preguntaHTML.textContent = "🎉 ¡Categoría completada!";

    if (opcionesHTML) {
        opcionesHTML.innerHTML =
            `<div class="tema-completado">
                Has completado todas las preguntas de esta categoría.
            </div>`;
    }

    if (resultadoHTML) {
        resultadoHTML.textContent = "¡Excelente trabajo!";
        resultadoHTML.className = "resultado";
    }

    if (numeroPregunta) {
        numeroPregunta.textContent =
            `Pregunta ${cantidadPreguntas} de ${cantidadPreguntas}`;
    }

    if (botonSiguiente) {
        botonSiguiente.disabled = false;
        botonSiguiente.textContent = retoFinalDesbloqueado
            ? "🏆 Ir al Reto Final"
            : "Siguiente categoría →";
    }
}


/* 17. AUDIO */

function reproducirAudio() {

    if (!("speechSynthesis" in window)) {
        alert("Tu navegador no permite reproducir audio.");
        return;
    }

    const estadoAudio = obtener("estadoAudio");

    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        if (estadoAudio) estadoAudio.textContent = "▶";
        return;
    }

    const tema = temaActual ? temas[temaActual] : null;

    const texto = tema
        ? `${tema.titulo}. ${tema.mensaje} ${tema.dato}`
        : "Explora la historia y cultura de Marruecos.";

    const voz = new SpeechSynthesisUtterance(texto);
    voz.lang = "es-ES";
    voz.rate = 0.95;

    voz.onstart = () => { if (estadoAudio) estadoAudio.textContent = "⏹"; };
    voz.onend = () => { if (estadoAudio) estadoAudio.textContent = "▶"; };

    window.speechSynthesis.speak(voz);
}


/* 18. MODAL DE RECUPERACIÓN (BLOQUEA LA PANTALLA) */

function abrirModalRecuperacion() {

    if (recuperacionActiva) return;

    const modal = obtener("modalRecuperacion");
    const inicio = obtener("inicioRecuperacion");
    const caja = obtener("preguntaRecuperacionBox");

    if (!modal) return;

    if (inicio && htmlInicioRecuperacion) {
        inicio.innerHTML = htmlInicioRecuperacion;
    }

    if (caja) caja.style.display = "none";
    if (inicio) inicio.style.display = "block";

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}


/* 19. COMENZAR RETO DE RECUPERACIÓN */

function comenzarRetoRecuperacion() {

    const inicio = obtener("inicioRecuperacion");
    const caja = obtener("preguntaRecuperacionBox");
    const modal = obtener("modalRecuperacion");

    preguntasRecuperacion = mezclar(preguntasRecuperacionBase);
    indiceRecuperacion = 0;
    aciertosRecuperacion = 0;
    recuperacionActiva = true;

    if (inicio) inicio.style.display = "none";
    if (caja) caja.style.display = "block";
    if (modal) modal.style.display = "flex";

    cargarPreguntaRecuperacion();
}


/* 20. CARGAR PREGUNTA DE RECUPERACIÓN */

function cargarPreguntaRecuperacion() {

    if (!recuperacionActiva) return;

    const pregunta = preguntasRecuperacion[indiceRecuperacion];

    if (!pregunta) {
        terminarRecuperacion();
        return;
    }

    const preguntaHTML = obtener("preguntaRecuperacion");
    const opcionesHTML = obtener("opcionesRecuperacion");
    const resultadoHTML = obtener("resultadoRecuperacion");
    const botonContinuar = obtener("btnContinuarRecuperacion");

    if (preguntaHTML) {
        preguntaHTML.textContent =
            `Pregunta ${indiceRecuperacion + 1} de ${preguntasRecuperacion.length}: ${pregunta.pregunta}`;
    }

    if (opcionesHTML) opcionesHTML.innerHTML = "";

    if (resultadoHTML) {
        resultadoHTML.textContent = "";
        resultadoHTML.className = "resultado-recuperacion";
    }

    if (botonContinuar) {
        botonContinuar.disabled = true;
        botonContinuar.textContent =
            indiceRecuperacion === preguntasRecuperacion.length - 1
                ? "Terminar"
                : "Continuar →";
    }

    mezclar(pregunta.opciones).forEach(opcion => {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.className = "opcion-recuperacion";
        boton.textContent = opcion;
        boton.addEventListener("click", () => {
            comprobarRespuestaRecuperacion(opcion);
        });
        if (opcionesHTML) opcionesHTML.appendChild(boton);
    });
}


/* 21. COMPROBAR RECUPERACIÓN */

function comprobarRespuestaRecuperacion(respuesta) {

    if (!recuperacionActiva) return;

    const pregunta = preguntasRecuperacion[indiceRecuperacion];
    if (!pregunta) return;

    const botones = document.querySelectorAll("#opcionesRecuperacion button");

    botones.forEach(boton => {
        boton.disabled = true;

        if (boton.textContent === pregunta.correcta) {
            boton.classList.add("correcta");
        } else if (boton.textContent === respuesta) {
            boton.classList.add("incorrecta");
        }
    });

    const resultado = obtener("resultadoRecuperacion");
    const botonContinuar = obtener("btnContinuarRecuperacion");

    if (respuesta === pregunta.correcta) {

        aciertosRecuperacion++;

        if (resultado) {
            resultado.textContent = "✅ ¡Correcto!";
            resultado.className = "resultado-recuperacion correcto";
        }

    } else if (resultado) {
        resultado.textContent =
            `❌ Incorrecto. La respuesta correcta es: ${pregunta.correcta}`;
        resultado.className = "resultado-recuperacion incorrecto";
    }

    if (botonContinuar) botonContinuar.disabled = false;
}


/* 22. CONTINUAR RECUPERACIÓN */

function continuarDespuesRecuperacion() {

    if (!recuperacionActiva) return;

    const resultado = obtener("resultadoRecuperacion");
    if (!resultado || !resultado.textContent) return;

    indiceRecuperacion++;

    if (indiceRecuperacion >= preguntasRecuperacion.length) {
        terminarRecuperacion();
        return;
    }

    cargarPreguntaRecuperacion();
}


/* 23. TERMINAR RECUPERACIÓN */

function terminarRecuperacion() {

    recuperacionActiva = false;

    const modal = obtener("modalRecuperacion");
    const caja = obtener("preguntaRecuperacionBox");
    const inicio = obtener("inicioRecuperacion");

    if (caja) caja.style.display = "none";

    const aprobado = aciertosRecuperacion >= ACIERTOS_MINIMOS_RECUPERACION;

    if (aprobado) {

        vidas = MAX_VIDAS;
        juegoBloqueadoPorVidas = false;

        guardarProgreso();
        actualizarInterfaz();

        if (inicio) {
            inicio.style.display = "block";
            inicio.innerHTML = `
                <div class="icono-modal">❤️</div>
                <h2>¡Vidas recuperadas!</h2>
                <p>Acertaste ${aciertosRecuperacion} de ${preguntasRecuperacionBase.length}. ¡Sigue aprendiendo!</p>
                <button type="button" class="boton-recuperar" onclick="cerrarModalRecuperacion()">
                    Continuar
                </button>`;
        }

    } else {

        // Sigue bloqueado: puede intentarlo otra vez
        if (inicio) {
            inicio.style.display = "block";
            inicio.innerHTML = `
                <div class="icono-modal">💔</div>
                <h2>Aún no recuperas tus vidas</h2>
                <p>Acertaste ${aciertosRecuperacion} de ${preguntasRecuperacionBase.length}.
                   Necesitas al menos ${ACIERTOS_MINIMOS_RECUPERACION} para continuar.</p>
                <button type="button" class="boton-recuperar" onclick="comenzarRetoRecuperacion()">
                    🎯 Intentar de nuevo
                </button>`;
        }
    }

    if (modal) modal.style.display = "flex";
}


/* 24. CERRAR MODAL (solo si ya recuperó las vidas) */

function cerrarModalRecuperacion() {

    if (juegoBloqueadoPorVidas) return;

    const modal = obtener("modalRecuperacion");
    if (modal) modal.style.display = "none";

    document.body.style.overflow = "";

    if (temaActual) cargarPregunta();
}


/* 25. COMENZAR RETO FINAL */

function comenzarRetoFinal() {

    const todasCompletadas = nombresTemas.every(nombre =>
        estadoPreguntas[nombre] && estadoPreguntas[nombre].completado
    );

    if (!todasCompletadas) {
        alert("Debes completar las 14 categorías antes de comenzar el reto final.");
        return;
    }

    if (juegoBloqueadoPorVidas) {
        abrirModalRecuperacion();
        return;
    }

    retoFinalDesbloqueado = true;
    retoFinalActivo = true;
    indicePreguntaFinal = 0;
    puntosFinales = 0;
    respuestasFinales = 0;
    preguntasFinalesMezcladas = mezclar(preguntasFinales);

    const modal = obtener("modalRetoFinal");
    if (modal) modal.style.display = "flex";

    actualizarMarcadoresFinal();
    cargarPreguntaFinal();
}


/* 26. CARGAR PREGUNTA FINAL */

function cargarPreguntaFinal() {

    if (!retoFinalActivo) return;

    const pregunta = preguntasFinalesMezcladas[indicePreguntaFinal];

    if (!pregunta) {
        finalizarRetoFinal();
        return;
    }

    const preguntaHTML = obtener("preguntaFinal");
    const opcionesHTML = obtener("opcionesFinal");
    const resultadoHTML = obtener("resultadoFinal");
    const numeroPregunta = obtener("numeroPreguntaFinal");
    const botonSiguiente = obtener("btnSiguienteFinal");

    if (preguntaHTML) preguntaHTML.textContent = pregunta.pregunta;
    if (opcionesHTML) opcionesHTML.innerHTML = "";

    if (resultadoHTML) {
        resultadoHTML.textContent = "";
        resultadoHTML.className = "resultado-final";
    }

    if (numeroPregunta) numeroPregunta.textContent = indicePreguntaFinal + 1;

    if (botonSiguiente) {
        botonSiguiente.disabled = true;
        botonSiguiente.textContent =
            indicePreguntaFinal === preguntasFinalesMezcladas.length - 1
                ? "Ver resultado"
                : "Siguiente →";
    }

    mezclar(pregunta.opciones).forEach(opcion => {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.className = "opcion-final";
        boton.textContent = opcion;
        boton.addEventListener("click", () => {
            comprobarRespuestaFinal(opcion);
        });
        if (opcionesHTML) opcionesHTML.appendChild(boton);
    });
}


/* 27. COMPROBAR RESPUESTA FINAL */

function comprobarRespuestaFinal(respuesta) {

    if (!retoFinalActivo) return;

    const pregunta = preguntasFinalesMezcladas[indicePreguntaFinal];
    if (!pregunta) return;

    const botones = document.querySelectorAll("#opcionesFinal button");

    botones.forEach(boton => {
        boton.disabled = true;

        if (boton.textContent === pregunta.correcta) {
            boton.classList.add("correcta");
        } else if (boton.textContent === respuesta) {
            boton.classList.add("incorrecta");
        }
    });

    const resultado = obtener("resultadoFinal");
    const botonSiguiente = obtener("btnSiguienteFinal");

    if (respuesta === pregunta.correcta) {

        puntosFinales += PUNTOS_CORRECTA;
        respuestasFinales++;

        if (resultado) {
            resultado.textContent = "✅ ¡Correcto! +10 puntos";
            resultado.className = "resultado-final correcto";
        }

    } else if (resultado) {
        resultado.textContent =
            `❌ Incorrecto. La respuesta correcta es: ${pregunta.correcta}`;
        resultado.className = "resultado-final incorrecto";
    }

    actualizarMarcadoresFinal();

    if (botonSiguiente) botonSiguiente.disabled = false;
}

function actualizarMarcadoresFinal() {
    const p = obtener("puntosFinales");
    const c = obtener("respuestasFinales");
    if (p) p.textContent = puntosFinales;
    if (c) c.textContent = respuestasFinales;
}


/* 28. SIGUIENTE PREGUNTA FINAL */

function siguientePreguntaFinal() {

    if (!retoFinalActivo) return;

    indicePreguntaFinal++;

    if (indicePreguntaFinal >= preguntasFinalesMezcladas.length) {
        finalizarRetoFinal();
        return;
    }

    cargarPreguntaFinal();
}


/* 29. FINALIZAR RETO FINAL (guarda historial y limpia el panel) */

function finalizarRetoFinal() {

    retoFinalActivo = false;

    const modal = obtener("modalRetoFinal");
    const aventura = obtener("aventuraCompletada");
    const resultadoPuntos = obtener("resultadoPuntosFinales");
    const resultadoCorrectas = obtener("resultadoCorrectasFinales");

    if (modal) modal.style.display = "none";
    if (aventura) aventura.style.display = "flex";

    if (resultadoPuntos) resultadoPuntos.textContent = puntosFinales;

    if (resultadoCorrectas) {
        resultadoCorrectas.textContent =
            `${respuestasFinales} / ${preguntasFinales.length}`;
    }

    // 1. Guardar la ronda en el historial
    historial.rondas++;
    historial.puntosTotales += puntos + puntosFinales;
    historial.correctasTotales += respuestasCorrectas + respuestasFinales;

    // 2. Limpiar el panel derecho y las categorías
    iniciarNuevaRonda();
}


/* NUEVA RONDA: deja todo limpio para volver a empezar */

function iniciarNuevaRonda() {

    estadoPreguntas = crearEstadoInicial();

    puntos = 0;
    vidas = MAX_VIDAS;
    racha = 0;
    respuestasCorrectas = 0;
    retosCompletados = 0;

    juegoBloqueadoPorVidas = false;
    retoFinalDesbloqueado = false;
    retoFinalActivo = false;

    guardarProgreso();
    actualizarInterfaz();

    cargarTema(nombresTemas[0]);
    marcarMenu(nombresTemas[0]);
}

function cerrarAventura() {
    const aventura = obtener("aventuraCompletada");
    if (aventura) aventura.style.display = "none";
}


/* 30. CERRAR RETO FINAL */

function cerrarRetoFinal() {

    const modal = obtener("modalRetoFinal");
    if (modal) modal.style.display = "none";

    retoFinalActivo = false;
}


/* 31. REINICIAR TODO EL PROGRESO */

function reiniciarProgreso() {

    const confirmar = confirm(
        "¿Seguro que quieres borrar todo tu progreso en Marruecos?"
    );

    if (!confirmar) return;

    localStorage.removeItem(CLAVE_GUARDADO);

    estadoPreguntas = crearEstadoInicial();
    temaActual = null;
    indicePregunta = 0;

    puntos = 0;
    vidas = MAX_VIDAS;
    racha = 0;
    respuestasCorrectas = 0;
    retosCompletados = 0;

    juegoBloqueadoPorVidas = false;
    retoFinalDesbloqueado = false;
    retoFinalActivo = false;

    indicePreguntaFinal = 0;
    puntosFinales = 0;
    respuestasFinales = 0;

    preguntasRecuperacion = [];
    indiceRecuperacion = 0;
    recuperacionActiva = false;
    aciertosRecuperacion = 0;

    historial = { rondas: 0, puntosTotales: 0, correctasTotales: 0 };

    document.body.style.overflow = "";

    guardarProgreso();
    actualizarInterfaz();

    alert("El progreso se reinició correctamente.");

    iniciarNuevaRonda();
}


/* 32. INICIALIZACIÓN */

document.addEventListener("DOMContentLoaded", function () {

    const inicio = obtener("inicioRecuperacion");
    if (inicio) htmlInicioRecuperacion = inicio.innerHTML;

    cargarProgreso();
    actualizarInterfaz();

    cargarTema(nombresTemas[0]);
    marcarMenu(nombresTemas[0]);

    // Si recargó la página con 0 vidas, bloquear de inmediato
    if (juegoBloqueadoPorVidas) {
        abrirModalRecuperacion();
    }
});