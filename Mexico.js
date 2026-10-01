/* ============================================================
   HISTORIA SIN FRONTERAS - MÉXICO
   13 categorías x 5 preguntas = 65 preguntas
   5 vidas, bloqueo al llegar a 0, reto de recuperación,
   reto final de 30 preguntas, historial de rondas.
============================================================ */

/* 1. CONFIGURACIÓN */

const CLAVE_GUARDADO = "historiaSinFronterasMexico_v2";
const MAX_VIDAS = 5;
const PUNTOS_CORRECTA = 10;
const ACIERTOS_MINIMOS_RECUPERACION = 3;

const nombresTemas = [
    "civilizaciones", "conquista", "colonial",
    "independencia", "personajes", "revolucion",
    "gastronomia", "musica", "tradiciones",
    "fiestas", "vestimenta", "arte", "monumentos"
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


/* 2. INFORMACIÓN Y PREGUNTAS */

const temas = {

    "civilizaciones": {
        titulo: "Civilizaciones prehispánicas",
        subtitulo: "Grandes culturas antes de la llegada de los españoles",
        icono: "🏛️",
        mensaje: "Descubre las grandes civilizaciones que habitaron México.",
        regiones: ["Yucatán", "Oaxaca", "Valle de México", "Chiapas"],
        dato: "Entre las civilizaciones mesoamericanas destacaron los mayas, mexicas, zapotecas y muchas otras.",
        preguntas: [
            q("¿Cuál de estas fue una civilización que habitó Mesoamérica?", ["Maya", "Romana", "Vikinga", "Japonesa"], "Maya"),
            q("¿Qué civilización construyó Tenochtitlán?", ["Mexica (azteca)", "Inca", "Egipcia", "Griega"], "Mexica (azteca)"),
            q("¿En qué región se desarrolló principalmente la cultura maya?", ["Península de Yucatán", "Desierto de Sonora", "Norte de México", "Baja California"], "Península de Yucatán"),
            q("¿Qué conocimiento desarrollaron las culturas prehispánicas?", ["Agricultura, arquitectura y astronomía", "Solo la navegación oceánica", "La imprenta moderna", "La electricidad"], "Agricultura, arquitectura y astronomía"),
            q("¿Qué sitio arqueológico es famoso por su pirámide del Sol?", ["Teotihuacán", "Machu Picchu", "Coliseo", "Acrópolis"], "Teotihuacán")
        ]
    },

    "conquista": {
        titulo: "Conquista de México",
        subtitulo: "Un momento decisivo de la historia",
        icono: "⚔️",
        mensaje: "Aprende sobre uno de los acontecimientos más importantes de la historia mexicana.",
        regiones: ["Valle de México", "Veracruz", "Tlaxcala"],
        dato: "La conquista del Imperio mexica ocurrió a comienzos del siglo XVI.",
        preguntas: [
            q("¿En qué siglo ocurrió la conquista del Imperio mexica?", ["Siglo XVI", "Siglo X", "Siglo XVIII", "Siglo XX"], "Siglo XVI"),
            q("¿Quién lideró la expedición española que llegó a México?", ["Hernán Cortés", "Cristóbal Colón", "Francisco Pizarro", "Magallanes"], "Hernán Cortés"),
            q("¿Cómo se llamaba el emperador mexica en el momento de la conquista?", ["Moctezuma", "Atahualpa", "Cuauhtémoc únicamente", "Nezahualcóyotl"], "Moctezuma"),
            q("¿Qué ciudad fue la capital del Imperio mexica?", ["Tenochtitlán", "Cuzco", "Tikal", "Palenque"], "Tenochtitlán"),
            q("Una consecuencia de la conquista fue:", ["La transformación de las sociedades indígenas", "La desaparición inmediata de toda la población", "La creación de internet", "La independencia inmediata"], "La transformación de las sociedades indígenas")
        ]
    },

    "colonial": {
        titulo: "Época colonial",
        subtitulo: "México durante el dominio español",
        icono: "🏰",
        mensaje: "Conoce cómo era la sociedad durante la época colonial.",
        regiones: ["Nueva España"],
        dato: "Durante el periodo colonial se mezclaron diferentes culturas, costumbres y formas de organización.",
        preguntas: [
            q("¿Qué grupos culturales se mezclaron principalmente durante la época colonial?", ["Indígena y española", "Africana y japonesa", "China y romana", "Griega y egipcia"], "Indígena y española"),
            q("¿Cómo se llamó el territorio colonial que incluía México?", ["Nueva España", "Nueva Granada", "Virreinato del Perú", "Brasil colonial"], "Nueva España"),
            q("¿Cuál fue una actividad económica importante durante la colonia?", ["Minería de plata", "Programación", "Industria espacial", "Cine digital"], "Minería de plata"),
            q("Durante la colonia existieron diferencias sociales entre:", ["Los diferentes grupos de la sociedad", "Los planetas", "Los continentes", "Los océanos"], "Los diferentes grupos de la sociedad"),
            q("¿Qué país europeo controlaba el territorio mexicano durante la colonia?", ["España", "Francia", "Inglaterra", "Portugal"], "España")
        ]
    },

    "independencia": {
        titulo: "Independencia de México",
        subtitulo: "El camino hacia una nación independiente",
        icono: "🇲🇽",
        mensaje: "Conoce el proceso de independencia de México.",
        regiones: ["Guanajuato", "Querétaro", "Ciudad de México"],
        dato: "El movimiento de Independencia comenzó en 1810.",
        preguntas: [
            q("¿En qué año comenzó el movimiento de Independencia de México?", ["1810", "1492", "1910", "1821"], "1810"),
            q("¿Quién fue uno de los líderes del inicio de la Independencia?", ["Miguel Hidalgo", "Napoleón Bonaparte", "Julio César", "George Washington"], "Miguel Hidalgo"),
            q("¿En qué año se consumó la Independencia de México?", ["1821", "1810", "1910", "1847"], "1821"),
            q("¿Qué documento o plan fue importante en la consumación de la Independencia?", ["Plan de Iguala", "Constitución de Cádiz únicamente", "Tratado de Guadalupe", "Plan de Ayala"], "Plan de Iguala"),
            q("La Independencia de México terminó con:", ["El dominio español sobre el territorio", "La conquista española", "La Revolución Mexicana", "La llegada de los mayas"], "El dominio español sobre el territorio")
        ]
    },

    "personajes": {
        titulo: "Personajes históricos",
        subtitulo: "Personas que marcaron la historia",
        icono: "👤",
        mensaje: "Conoce algunos personajes importantes de la historia de México.",
        regiones: ["Todo México"],
        dato: "Miguel Hidalgo fue uno de los principales líderes del inicio de la Independencia.",
        preguntas: [
            q("¿Quién fue Miguel Hidalgo?", ["Un líder del inicio de la Independencia", "Un emperador azteca", "Un conquistador español", "Un presidente del siglo XX"], "Un líder del inicio de la Independencia"),
            q("¿Quién fue José María Morelos?", ["Un líder de la Independencia", "Un pintor muralista", "Un músico de mariachi", "Un conquistador"], "Un líder de la Independencia"),
            q("¿Quién fue Benito Juárez?", ["Un presidente liberal y defensor de la República", "Un emperador azteca", "Un conquistador", "Un cantante"], "Un presidente liberal y defensor de la República"),
            q("¿Quién fue Emiliano Zapata?", ["Un líder de la Revolución Mexicana", "Un virrey español", "Un emperador mexica", "Un explorador"], "Un líder de la Revolución Mexicana"),
            q("¿Quién fue Frida Kahlo?", ["Una importante pintora mexicana", "Una presidenta", "Una conquistadora", "Una líder independentista"], "Una importante pintora mexicana")
        ]
    },

    "revolucion": {
        titulo: "Revolución Mexicana",
        subtitulo: "Un movimiento que transformó al país",
        icono: "⚔️",
        mensaje: "Aprende sobre la Revolución Mexicana.",
        regiones: ["Todo México"],
        dato: "La Revolución Mexicana comenzó en 1910.",
        preguntas: [
            q("¿En qué año comenzó la Revolución Mexicana?", ["1910", "1810", "1821", "1492"], "1910"),
            q("¿Quién fue Francisco I. Madero?", ["Un líder político de la Revolución", "Un emperador azteca", "Un conquistador", "Un virrey"], "Un líder político de la Revolución"),
            q("¿Qué líder revolucionario es famoso por su frase 'Tierra y Libertad'?", ["Emiliano Zapata", "Hernán Cortés", "Miguel Hidalgo", "Moctezuma"], "Emiliano Zapata"),
            q("¿Quién fue Pancho Villa?", ["Un líder revolucionario del norte", "Un presidente colonial", "Un emperador maya", "Un explorador español"], "Un líder revolucionario del norte"),
            q("La Revolución Mexicana produjo:", ["Importantes cambios sociales y políticos", "La conquista española", "La llegada de los mayas", "La independencia de España en 1810"], "Importantes cambios sociales y políticos")
        ]
    },

    "gastronomia": {
        titulo: "Gastronomía",
        subtitulo: "Sabores que cuentan historias",
        icono: "🌮",
        mensaje: "Descubre los sabores tradicionales de México.",
        regiones: ["Oaxaca", "Yucatán", "Puebla", "Jalisco"],
        dato: "La gastronomía mexicana es reconocida por su gran variedad de ingredientes, técnicas y tradiciones.",
        preguntas: [
            q("¿Cuál de estos alimentos es uno de los más representativos de la gastronomía mexicana?", ["Taco", "Pizza", "Sushi", "Croissant"], "Taco"),
            q("¿Qué ingrediente es fundamental en la gastronomía mexicana?", ["Maíz", "Arroz basmati", "Trigo sarraceno", "Cebada"], "Maíz"),
            q("¿Qué plato típico de Puebla es famoso internacionalmente?", ["Mole poblano", "Paella", "Sushi", "Hamburguesa"], "Mole poblano"),
            q("¿Qué bebida tradicional se elabora a partir del agave?", ["Tequila y mezcal", "Vino tinto", "Cerveza alemana", "Té verde"], "Tequila y mezcal"),
            q("¿Qué región es famosa por su cocina yucateca?", ["Yucatán", "Sonora", "Baja California", "Chihuahua"], "Yucatán")
        ]
    },

    "musica": {
        titulo: "Música y bailes",
        subtitulo: "Ritmos que cuentan historias",
        icono: "🎺",
        mensaje: "Conoce los sonidos tradicionales de México.",
        regiones: ["Jalisco", "Veracruz", "Oaxaca", "Yucatán"],
        dato: "El mariachi es uno de los géneros musicales más representativos de México.",
        preguntas: [
            q("¿Cuál es una de las expresiones musicales más representativas de México?", ["Mariachi", "Música celta", "Samba", "Blues"], "Mariachi"),
            q("¿De qué estado es originario el mariachi?", ["Jalisco", "Yucatán", "Chiapas", "Sonora"], "Jalisco"),
            q("¿Qué ritmo es característico de Veracruz?", ["Son jarocho", "Tango", "Flamenco", "Reggae"], "Son jarocho"),
            q("¿Qué instrumento es típico del mariachi?", ["Violín, trompeta y guitarrón", "Didgeridoo", "Sitar", "Bagpipes"], "Violín, trompeta y guitarrón"),
            q("La música norteña se asocia principalmente con:", ["El norte de México", "La península de Yucatán", "El centro de Europa", "El sur de Asia"], "El norte de México")
        ]
    },

    "tradiciones": {
        titulo: "Tradiciones",
        subtitulo: "Costumbres que pasan de generación en generación",
        icono: "🎊",
        mensaje: "Descubre las tradiciones mexicanas.",
        regiones: ["Todo México"],
        dato: "Las tradiciones mexicanas combinan elementos indígenas y españoles.",
        preguntas: [
            q("¿Cuál es una tradición mexicana muy conocida?", ["Día de Muertos", "Navidad nórdica", "Hanami", "Festival chino"], "Día de Muertos"),
            q("¿En qué fechas se celebra principalmente el Día de Muertos?", ["1 y 2 de noviembre", "25 de diciembre", "4 de julio", "1 de mayo"], "1 y 2 de noviembre"),
            q("¿Qué se coloca en los altares del Día de Muertos?", ["Ofrendas con comida, flores y fotografías", "Solo regalos de Navidad", "Solo juguetes", "Solo velas europeas"], "Ofrendas con comida, flores y fotografías"),
            q("Las tradiciones se transmiten principalmente:", ["De generación en generación", "Solo por internet", "Únicamente en las escuelas", "Solo por televisión"], "De generación en generación"),
            q("La diversidad de tradiciones mexicanas se relaciona con:", ["La diversidad cultural y regional", "Un único pueblo", "Una sola región", "Un solo idioma"], "La diversidad cultural y regional")
        ]
    },

    "fiestas": {
        titulo: "Fiestas mexicanas",
        subtitulo: "Celebraciones llenas de color",
        icono: "🎉",
        mensaje: "Conoce algunas de las celebraciones más importantes de México.",
        regiones: ["Todo México"],
        dato: "Las fiestas mexicanas suelen incluir música, comida, danzas y reuniones familiares.",
        preguntas: [
            q("¿Qué celebración mexicana honra a familiares y seres queridos fallecidos?", ["Día de Muertos", "Año Nuevo", "Halloween", "Acción de Gracias"], "Día de Muertos"),
            q("¿Qué fiesta se celebra el 15 y 16 de septiembre?", ["Independencia de México", "Día de Muertos", "Navidad", "Día del Trabajo"], "Independencia de México"),
            q("¿Qué elemento es característico de muchas fiestas mexicanas?", ["Piñatas, música y comida", "Solo desfiles militares", "Solo fuegos artificiales europeos", "Solo juegos de mesa"], "Piñatas, música y comida"),
            q("Las fiestas patronales suelen estar relacionadas con:", ["Santos y tradiciones locales", "Solo eventos deportivos", "Solo conciertos de rock", "Solo ferias tecnológicas"], "Santos y tradiciones locales"),
            q("¿Qué color de flor se asocia tradicionalmente al Día de Muertos?", ["Cempasúchil (naranja/amarillo)", "Rosa", "Azul", "Blanco únicamente"], "Cempasúchil (naranja/amarillo)")
        ]
    },

    "vestimenta": {
        titulo: "Vestimenta típica",
        subtitulo: "Ropa que representa diferentes regiones",
        icono: "👗",
        mensaje: "Descubre los colores y diseños de la vestimenta mexicana.",
        regiones: ["Oaxaca", "Chiapas", "Yucatán", "Puebla"],
        dato: "La vestimenta tradicional mexicana cambia según la región y las comunidades.",
        preguntas: [
            q("¿Qué elemento es característico de muchas prendas tradicionales mexicanas?", ["Bordados", "Trajes de nieve", "Corbatas europeas", "Botas de esquí"], "Bordados"),
            q("¿Qué prenda tradicional se asocia con el charro?", ["Traje de charro", "Kimono", "Sari", "Kilt"], "Traje de charro"),
            q("¿Qué estado es famoso por sus huipiles y textiles?", ["Oaxaca y Chiapas", "Sonora", "Baja California", "Nuevo León"], "Oaxaca y Chiapas"),
            q("El rebozo es:", ["Una prenda tradicional de las mujeres", "Un sombrero de hombre", "Un calzado", "Un instrumento musical"], "Una prenda tradicional de las mujeres"),
            q("La vestimenta tradicional ayuda a representar:", ["La identidad cultural", "Solo la moda internacional", "Únicamente el clima", "Los avances tecnológicos"], "La identidad cultural")
        ]
    },

    "arte": {
        titulo: "Arte y literatura",
        subtitulo: "Creatividad que refleja la historia",
        icono: "🎨",
        mensaje: "Explora el arte mexicano.",
        regiones: ["Ciudad de México", "Oaxaca", "Puebla", "Jalisco"],
        dato: "El arte mexicano incluye pintura mural, literatura, escultura, artesanías y muchas otras expresiones.",
        preguntas: [
            q("¿Cuál de estos es una expresión artística mexicana importante?", ["Pintura mural", "Automóvil", "Teléfono", "Avión"], "Pintura mural"),
            q("¿Quién fue Diego Rivera?", ["Un importante muralista mexicano", "Un conquistador", "Un emperador azteca", "Un presidente colonial"], "Un importante muralista mexicano"),
            q("¿Quién fue Frida Kahlo?", ["Una importante pintora mexicana", "Una líder independentista", "Una conquistadora", "Una emperatriz"], "Una importante pintora mexicana"),
            q("¿Qué escritor mexicano recibió el Premio Nobel de Literatura?", ["Octavio Paz", "Gabriel García Márquez", "Mario Vargas Llosa", "Pablo Neruda"], "Octavio Paz"),
            q("El muralismo mexicano se desarrolló principalmente en el:", ["Siglo XX", "Siglo XVI", "Siglo X", "Siglo XIX únicamente"], "Siglo XX")
        ]
    },

    "monumentos": {
        titulo: "Monumentos",
        subtitulo: "Lugares que cuentan historias",
        icono: "🏛️",
        mensaje: "Conoce algunos lugares históricos de México.",
        regiones: ["Yucatán", "Ciudad de México", "Oaxaca", "Chiapas"],
        dato: "México cuenta con numerosos sitios arqueológicos y monumentos históricos.",
        preguntas: [
            q("¿Cuál de estos lugares se encuentra en México?", ["Chichén Itzá", "Torre Eiffel", "Castillo de Windsor", "Moái de Rapa Nui"], "Chichén Itzá"),
            q("¿Dónde se encuentra Teotihuacán?", ["Cerca de la Ciudad de México", "En Yucatán", "En Oaxaca", "En Chiapas"], "Cerca de la Ciudad de México"),
            q("¿Qué ciudad colonial es famosa por su centro histórico y es Patrimonio de la Humanidad?", ["Guanajuato o Puebla", "Nueva York", "Tokio", "Sídney"], "Guanajuato o Puebla"),
            q("¿Qué sitio maya es famoso por su Castillo (pirámide de Kukulkán)?", ["Chichén Itzá", "Teotihuacán", "Monte Albán", "Palenque únicamente"], "Chichén Itzá"),
            q("Los monumentos y sitios arqueológicos permiten conocer:", ["Diferentes etapas de la historia mexicana", "Solo la moda actual", "Únicamente el clima", "Los avances tecnológicos modernos"], "Diferentes etapas de la historia mexicana")
        ]
    }
};


/* 3. RETO DE RECUPERACIÓN (5 preguntas, mínimo 3 aciertos) */

const preguntasRecuperacionBase = [
    q("¿Cuál de estos alimentos es representativo de México?", ["Taco", "Sushi", "Pizza", "Croissant"], "Taco"),
    q("¿En qué año comenzó la Independencia de México?", ["1810", "1492", "1910", "1821"], "1810"),
    q("¿Cuál es una tradición mexicana muy conocida?", ["Día de Muertos", "Hanami", "Oktoberfest", "Thanksgiving"], "Día de Muertos"),
    q("¿Quién fue Miguel Hidalgo?", ["Un líder de la Independencia", "Un emperador azteca", "Un conquistador", "Un muralista"], "Un líder de la Independencia"),
    q("¿Cuál de estos sitios se encuentra en México?", ["Chichén Itzá", "Torre Eiffel", "Coliseo", "Machu Picchu"], "Chichén Itzá")
];


/* 4. RETO FINAL - 30 PREGUNTAS */

const preguntasFinales = [
    q("¿Cuál de estas fue una civilización mesoamericana?", ["Maya", "Romana", "Vikinga", "Japonesa"], "Maya"),
    q("¿Qué civilización construyó Tenochtitlán?", ["Mexica (azteca)", "Inca", "Egipcia", "Griega"], "Mexica (azteca)"),
    q("¿En qué siglo ocurrió la conquista del Imperio mexica?", ["Siglo XVI", "Siglo X", "Siglo XVIII", "Siglo XX"], "Siglo XVI"),
    q("¿Quién lideró la expedición española a México?", ["Hernán Cortés", "Cristóbal Colón", "Francisco Pizarro", "Magallanes"], "Hernán Cortés"),
    q("¿Cómo se llamó el territorio colonial de México?", ["Nueva España", "Nueva Granada", "Virreinato del Perú", "Brasil"], "Nueva España"),
    q("¿En qué año comenzó la Independencia de México?", ["1810", "1492", "1910", "1821"], "1810"),
    q("¿Quién fue uno de los líderes del inicio de la Independencia?", ["Miguel Hidalgo", "Napoleón", "Julio César", "Washington"], "Miguel Hidalgo"),
    q("¿En qué año se consumó la Independencia?", ["1821", "1810", "1910", "1847"], "1821"),
    q("¿Quién fue Benito Juárez?", ["Un presidente liberal", "Un emperador azteca", "Un conquistador", "Un cantante"], "Un presidente liberal"),
    q("¿En qué año comenzó la Revolución Mexicana?", ["1910", "1810", "1821", "1492"], "1910"),
    q("¿Quién es famoso por la frase 'Tierra y Libertad'?", ["Emiliano Zapata", "Hernán Cortés", "Miguel Hidalgo", "Moctezuma"], "Emiliano Zapata"),
    q("¿Cuál de estos alimentos es representativo de México?", ["Taco", "Pizza", "Sushi", "Croissant"], "Taco"),
    q("¿Qué ingrediente es fundamental en la gastronomía mexicana?", ["Maíz", "Arroz basmati", "Trigo sarraceno", "Cebada"], "Maíz"),
    q("¿Cuál es una expresión musical muy representativa de México?", ["Mariachi", "Música celta", "Samba", "Blues"], "Mariachi"),
    q("¿De qué estado es originario el mariachi?", ["Jalisco", "Yucatán", "Chiapas", "Sonora"], "Jalisco"),
    q("¿Cuál es una tradición mexicana muy conocida?", ["Día de Muertos", "Hanami", "Oktoberfest", "Thanksgiving"], "Día de Muertos"),
    q("¿En qué fechas se celebra el Día de Muertos?", ["1 y 2 de noviembre", "25 de diciembre", "4 de julio", "1 de mayo"], "1 y 2 de noviembre"),
    q("¿Qué celebración se realiza el 15 y 16 de septiembre?", ["Independencia de México", "Día de Muertos", "Navidad", "Día del Trabajo"], "Independencia de México"),
    q("¿Qué elemento es característico de prendas tradicionales mexicanas?", ["Bordados", "Trajes de nieve", "Corbatas", "Botas de esquí"], "Bordados"),
    q("¿Quién fue Diego Rivera?", ["Un muralista mexicano", "Un conquistador", "Un emperador", "Un virrey"], "Un muralista mexicano"),
    q("¿Quién fue Frida Kahlo?", ["Una pintora mexicana", "Una líder independentista", "Una conquistadora", "Una emperatriz"], "Una pintora mexicana"),
    q("¿Qué escritor mexicano recibió el Nobel de Literatura?", ["Octavio Paz", "García Márquez", "Vargas Llosa", "Neruda"], "Octavio Paz"),
    q("¿Cuál de estos sitios se encuentra en México?", ["Chichén Itzá", "Torre Eiffel", "Coliseo", "Machu Picchu"], "Chichén Itzá"),
    q("¿Dónde se encuentra Teotihuacán?", ["Cerca de la Ciudad de México", "En Yucatán", "En Oaxaca", "En Chiapas"], "Cerca de la Ciudad de México"),
    q("¿Qué sitio maya es famoso por la pirámide de Kukulkán?", ["Chichén Itzá", "Teotihuacán", "Monte Albán", "Tenochtitlán"], "Chichén Itzá"),
    q("¿Quién fue Francisco I. Madero?", ["Un líder de la Revolución", "Un emperador azteca", "Un conquistador", "Un virrey"], "Un líder de la Revolución"),
    q("¿Quién fue Pancho Villa?", ["Un líder revolucionario del norte", "Un presidente colonial", "Un emperador maya", "Un explorador"], "Un líder revolucionario del norte"),
    q("¿Qué plato típico de Puebla es famoso?", ["Mole poblano", "Paella", "Sushi", "Hamburguesa"], "Mole poblano"),
    q("¿Qué bebida se elabora a partir del agave?", ["Tequila y mezcal", "Vino tinto", "Cerveza alemana", "Té verde"], "Tequila y mezcal"),
    q("La Revolución Mexicana produjo:", ["Cambios sociales y políticos importantes", "La conquista española", "La llegada de los mayas", "La independencia en 1810"], "Cambios sociales y políticos importantes")
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

    let categoriasCompletadas = 0;
    nombresTemas.forEach(nombre => {
        if (estadoPreguntas[nombre] && estadoPreguntas[nombre].completado) {
            categoriasCompletadas++;
        }
    });

    const porcentaje = Math.round((categoriasCompletadas / nombresTemas.length) * 100);
    set("porcentaje", porcentaje + "%");

    const circulo = obtener("circuloProgreso");
    if (circulo) {
        const circunferencia = 2 * Math.PI * 50;
        circulo.style.strokeDasharray = circunferencia;
        circulo.style.strokeDashoffset = circunferencia * (1 - porcentaje / 100);
    }

    if (porcentaje === 100) {
        set("mensajeProgreso", "¡Completaste todas las categorías! 🎉");
    } else if (categoriasCompletadas === 0) {
        set("mensajeProgreso", "¡Empieza a explorar! 🚀");
    } else {
        set("mensajeProgreso", `Has completado ${categoriasCompletadas} de ${nombresTemas.length} categorías.`);
    }

    const desbloqueado = nombresTemas.every(nombre =>
        estadoPreguntas[nombre] && estadoPreguntas[nombre].completado
    );
    retoFinalDesbloqueado = desbloqueado;

    const botonFinal = obtener("btnRetoFinal");
    if (botonFinal) {
        botonFinal.disabled = !desbloqueado;
        botonFinal.textContent = desbloqueado
            ? "🏆 Comenzar Reto Final de México"
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
    document.querySelectorAll(".menu-btn, .menu button").forEach(btn => {
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
    if (!temas[nombreTema]) return;

    temaActual = nombreTema;
    const tema = temas[nombreTema];

    if ("speechSynthesis" in window) window.speechSynthesis.cancel();

    const titulo = obtener("tituloTema");
    const subtitulo = obtener("subtituloTema");
    const icono = obtener("iconoTema");
    const mensaje = obtener("mensajeBot") || obtener("mensaje");
    const dato = obtener("datoCurioso") || obtener("datoTexto") || obtener("datoTema");
    const regiones = obtener("regiones");
    const imagen = obtener("imagenTema");
    const sobre = obtener("sobreTexto");

    if (titulo) titulo.textContent = tema.titulo;
    if (subtitulo) subtitulo.textContent = tema.subtitulo;
    if (icono) icono.textContent = tema.icono;
    if (mensaje) mensaje.textContent = tema.mensaje;
    if (dato) dato.textContent = tema.dato;
    if (sobre) sobre.textContent = tema.dato;

    if (regiones) {
        if (Array.isArray(tema.regiones)) {
            regiones.innerHTML = "";
            tema.regiones.forEach(nombre => {
                const span = document.createElement("span");
                span.textContent = nombre;
                regiones.appendChild(span);
            });
        } else {
            regiones.textContent = tema.regiones;
        }
    }

    if (imagen && tema.imagen) imagen.src = tema.imagen;

    cargarPregunta();
    actualizarInterfaz();
}


/* 13. CARGAR PREGUNTA */

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

    const preguntaHTML = obtener("preguntaReto") || obtener("pregunta");
    const opcionesHTML = obtener("opcionesReto") || obtener("opciones");
    const resultadoHTML = obtener("resultado");
    const botonSiguiente = obtener("botonSiguiente");
    const numeroPregunta = obtener("numeroPregunta");

    if (!preguntaHTML || !opcionesHTML) return;

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
        numeroPregunta.textContent = `Pregunta ${estado.respondidas.length + 1} de ${tema.preguntas.length}`;
    }

    mezclar(pregunta.opciones).forEach(opcion => {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.className = "opcion";
        boton.textContent = opcion;
        boton.addEventListener("click", () => comprobarRespuesta(opcion));
        opcionesHTML.appendChild(boton);
    });
}


/* 14. COMPROBAR RESPUESTA */

function comprobarRespuesta(respuesta) {
    if (!temaActual || juegoBloqueadoPorVidas) return;

    const tema = temas[temaActual];
    const estado = estadoPreguntas[temaActual];
    const pregunta = tema.preguntas[indicePregunta];
    if (!pregunta || estado.respondidas.includes(indicePregunta)) return;

    const contenedorOpciones = obtener("opcionesReto") || obtener("opciones");
    const botones = contenedorOpciones ? contenedorOpciones.querySelectorAll(".opcion") : [];

    botones.forEach(boton => {
        boton.disabled = true;
        if (boton.textContent === pregunta.correcta) boton.classList.add("correcta");
    });

    const resultado = obtener("resultado");
    const botonSiguiente = obtener("botonSiguiente");
    const botonSeleccionado = [...botones].find(b => b.textContent === respuesta);

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
            resultado.textContent = `❌ Incorrecto. La respuesta correcta es: ${pregunta.correcta}`;
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

    if (juegoBloqueadoPorVidas) {
        setTimeout(() => abrirModalRecuperacion(), 700);
    }
}


/* 15. SIGUIENTE PREGUNTA */

function siguientePregunta() {
    if (juegoBloqueadoPorVidas) {
        abrirModalRecuperacion();
        return;
    }
    if (!temaActual) return;

    const estado = estadoPreguntas[temaActual];
    const tema = temas[temaActual];

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

    if (destino === null) {
        comenzarRetoFinal();
        return;
    }

    const boton = document.querySelector(`.menu-btn[data-tema="${destino}"], button[data-tema="${destino}"]`);
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

    const preguntaHTML = obtener("preguntaReto") || obtener("pregunta");
    const opcionesHTML = obtener("opcionesReto") || obtener("opciones");
    const resultadoHTML = obtener("resultado");
    const botonSiguiente = obtener("botonSiguiente");
    const numeroPregunta = obtener("numeroPregunta");

    if (preguntaHTML) preguntaHTML.textContent = "🎉 ¡Categoría completada!";
    if (opcionesHTML) {
        opcionesHTML.innerHTML = `<div class="tema-completado">Has completado todas las preguntas de esta categoría.</div>`;
    }
    if (resultadoHTML) {
        resultadoHTML.textContent = "¡Excelente trabajo!";
        resultadoHTML.className = "resultado";
    }
    if (numeroPregunta) numeroPregunta.textContent = `Pregunta ${cantidadPreguntas} de ${cantidadPreguntas}`;
    if (botonSiguiente) {
        botonSiguiente.disabled = false;
        botonSiguiente.textContent = retoFinalDesbloqueado ? "🏆 Ir al Reto Final" : "Siguiente categoría →";
    }
}


/* 17. AUDIO */

function reproducirAudio() {
    if (!("speechSynthesis" in window)) {
        alert("Tu navegador no permite reproducir audio.");
        return;
    }

    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        return;
    }

    const tema = temaActual ? temas[temaActual] : null;
    const texto = tema
        ? `${tema.titulo}. ${tema.mensaje} ${tema.dato}`
        : "Explora la historia y cultura de México.";

    const voz = new SpeechSynthesisUtterance(texto);
    voz.lang = "es-MX";
    voz.rate = 0.95;
    window.speechSynthesis.speak(voz);
}

// Alias por compatibilidad
function escuchar() {
    reproducirAudio();
}


/* 18-24. RECUPERACIÓN DE VIDAS (igual que Marruecos) */

function abrirModalRecuperacion() {
    if (recuperacionActiva) return;
    const modal = obtener("modalRecuperacion");
    const inicio = obtener("inicioRecuperacion");
    const caja = obtener("preguntaRecuperacionBox");
    if (!modal) return;

    if (inicio && htmlInicioRecuperacion) inicio.innerHTML = htmlInicioRecuperacion;
    if (caja) caja.style.display = "none";
    if (inicio) inicio.style.display = "block";
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

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
        preguntaHTML.textContent = `Pregunta ${indiceRecuperacion + 1} de ${preguntasRecuperacion.length}: ${pregunta.pregunta}`;
    }
    if (opcionesHTML) opcionesHTML.innerHTML = "";
    if (resultadoHTML) {
        resultadoHTML.textContent = "";
        resultadoHTML.className = "resultado-recuperacion";
    }
    if (botonContinuar) {
        botonContinuar.disabled = true;
        botonContinuar.textContent = indiceRecuperacion === preguntasRecuperacion.length - 1 ? "Terminar" : "Continuar →";
    }

    mezclar(pregunta.opciones).forEach(opcion => {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.className = "opcion-recuperacion";
        boton.textContent = opcion;
        boton.addEventListener("click", () => comprobarRespuestaRecuperacion(opcion));
        if (opcionesHTML) opcionesHTML.appendChild(boton);
    });
}

function comprobarRespuestaRecuperacion(respuesta) {
    if (!recuperacionActiva) return;
    const pregunta = preguntasRecuperacion[indiceRecuperacion];
    if (!pregunta) return;

    const botones = document.querySelectorAll("#opcionesRecuperacion button");
    botones.forEach(boton => {
        boton.disabled = true;
        if (boton.textContent === pregunta.correcta) boton.classList.add("correcta");
        else if (boton.textContent === respuesta) boton.classList.add("incorrecta");
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
        resultado.textContent = `❌ Incorrecto. La respuesta correcta es: ${pregunta.correcta}`;
        resultado.className = "resultado-recuperacion incorrecto";
    }
    if (botonContinuar) botonContinuar.disabled = false;
}

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
                <button type="button" class="boton-recuperar" onclick="cerrarModalRecuperacion()">Continuar</button>`;
        }
    } else {
        if (inicio) {
            inicio.style.display = "block";
            inicio.innerHTML = `
                <div class="icono-modal">💔</div>
                <h2>Aún no recuperas tus vidas</h2>
                <p>Acertaste ${aciertosRecuperacion} de ${preguntasRecuperacionBase.length}. Necesitas al menos ${ACIERTOS_MINIMOS_RECUPERACION}.</p>
                <button type="button" class="boton-recuperar" onclick="comenzarRetoRecuperacion()">🎯 Intentar de nuevo</button>`;
        }
    }
    if (modal) modal.style.display = "flex";
}

function cerrarModalRecuperacion() {
    if (juegoBloqueadoPorVidas) return;
    const modal = obtener("modalRecuperacion");
    if (modal) modal.style.display = "none";
    document.body.style.overflow = "";
    if (temaActual) cargarPregunta();
}


/* 25-30. RETO FINAL */

function comenzarRetoFinal() {
    const todasCompletadas = nombresTemas.every(n => estadoPreguntas[n] && estadoPreguntas[n].completado);
    if (!todasCompletadas) {
        alert("Debes completar todas las categorías antes de comenzar el reto final.");
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
        botonSiguiente.textContent = indicePreguntaFinal === preguntasFinalesMezcladas.length - 1 ? "Ver resultado" : "Siguiente →";
    }

    mezclar(pregunta.opciones).forEach(opcion => {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.className = "opcion-final";
        boton.textContent = opcion;
        boton.addEventListener("click", () => comprobarRespuestaFinal(opcion));
        if (opcionesHTML) opcionesHTML.appendChild(boton);
    });
}

function comprobarRespuestaFinal(respuesta) {
    if (!retoFinalActivo) return;
    const pregunta = preguntasFinalesMezcladas[indicePreguntaFinal];
    if (!pregunta) return;

    const botones = document.querySelectorAll("#opcionesFinal button");
    botones.forEach(boton => {
        boton.disabled = true;
        if (boton.textContent === pregunta.correcta) boton.classList.add("correcta");
        else if (boton.textContent === respuesta) boton.classList.add("incorrecta");
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
        resultado.textContent = `❌ Incorrecto. La respuesta correcta es: ${pregunta.correcta}`;
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

function siguientePreguntaFinal() {
    if (!retoFinalActivo) return;
    indicePreguntaFinal++;
    if (indicePreguntaFinal >= preguntasFinalesMezcladas.length) {
        finalizarRetoFinal();
        return;
    }
    cargarPreguntaFinal();
}

function finalizarRetoFinal() {
    retoFinalActivo = false;
    const modal = obtener("modalRetoFinal");
    const aventura = obtener("aventuraCompletada");
    const resultadoPuntos = obtener("resultadoPuntosFinales");
    const resultadoCorrectas = obtener("resultadoCorrectasFinales");

    if (modal) modal.style.display = "none";
    if (aventura) aventura.style.display = "flex";
    if (resultadoPuntos) resultadoPuntos.textContent = puntosFinales;
    if (resultadoCorrectas) resultadoCorrectas.textContent = `${respuestasFinales} / ${preguntasFinales.length}`;

    historial.rondas++;
    historial.puntosTotales += puntos + puntosFinales;
    historial.correctasTotales += respuestasCorrectas + respuestasFinales;

    iniciarNuevaRonda();
}

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

function cerrarRetoFinal() {
    const modal = obtener("modalRetoFinal");
    if (modal) modal.style.display = "none";
    retoFinalActivo = false;
}


/* 31. REINICIAR PROGRESO */

function reiniciarProgreso() {
    const confirmar = confirm("¿Seguro que quieres borrar todo tu progreso en México?");
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

    if (juegoBloqueadoPorVidas) {
        abrirModalRecuperacion();
    }
});