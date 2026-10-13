/* =========================================================
   HISTORIA SIN FRONTERAS - BRASIL
   JAVASCRIPT COMPLETO Y CORREGIDO
========================================================= */

const CLAVE = "historiaSinFronterasBrasil";
const TOTAL_CATEGORIAS = 14;
const PREGUNTAS_POR_CATEGORIA = 5;

const ORDEN_CATEGORIAS = [
    "Gastronomía",
    "Música",
    "Tradiciones",
    "Fiestas",
    "Vestimenta",
    "Arte",
    "Monumentos",
    "Pueblos originarios",
    "Colonización portuguesa",
    "Imperio de Brasil",
    "Independencia",
    "Personajes históricos",
    "Conflictos importantes",
    "Brasil contemporáneo"
];

/* =========================================================
   PREGUNTAS DE LAS 14 CATEGORÍAS
========================================================= */

const categorias = {

    "Gastronomía": {
        titulo: "Gastronomía brasileña",
        subtitulo: "Sabores y comidas tradicionales de Brasil",
        descripcion: "La gastronomía brasileña combina influencias indígenas, africanas y portuguesas.",
        dato: "La feijoada es uno de los platos más conocidos de Brasil.",
        preguntas: [
            ["¿Cuál es un plato tradicional brasileño?", ["Feijoada", "Paella", "Sushi", "Tacos"], 0],
            ["¿Qué alimento es muy utilizado en la cocina brasileña?", ["Yuca", "Oliva", "Cebada", "Trigo"], 0],
            ["¿Qué bebida se relaciona con la producción agrícola de Brasil?", ["Café", "Té verde", "Chicha", "Mate"], 0],
            ["¿Qué plato se prepara principalmente con frijoles negros y carne?", ["Feijoada", "Ceviche", "Arepa", "Ramen"], 0],
            ["¿Cuál es un dulce brasileño conocido?", ["Brigadeiro", "Baklava", "Mochi", "Croissant"], 0]
        ]
    },

    "Música": {
        titulo: "Música brasileña",
        subtitulo: "Ritmos que forman parte de la identidad de Brasil",
        descripcion: "Brasil posee una gran diversidad musical, con ritmos como la samba y la bossa nova.",
        dato: "La samba es uno de los géneros más relacionados con Brasil.",
        preguntas: [
            ["¿Qué ritmo musical es muy representativo de Brasil?", ["Samba", "Tango", "Flamenco", "Polka"], 0],
            ["¿Qué género brasileño combina elementos de samba y jazz?", ["Bossa nova", "Reggae", "Country", "Rock"], 0],
            ["¿Qué instrumento de percusión aparece frecuentemente en la samba?", ["Tambor", "Violín", "Arpa", "Oboe"], 0],
            ["¿En qué celebración destaca especialmente la samba?", ["Carnaval", "Halloween", "Oktoberfest", "Diwali"], 0],
            ["¿Qué característica representa la música brasileña?", ["Diversidad cultural", "Uniformidad", "Aislamiento", "Ausencia de tradiciones"], 0]
        ]
    },

    "Tradiciones": {
        titulo: "Tradiciones de Brasil",
        subtitulo: "Costumbres y expresiones culturales",
        descripcion: "Las tradiciones brasileñas reflejan la mezcla de culturas indígenas, africanas y europeas.",
        dato: "La capoeira combina elementos de lucha, música y tradición.",
        preguntas: [
            ["¿Qué expresión cultural combina lucha y música?", ["Capoeira", "Karate", "Sumo", "Esgrima"], 0],
            ["¿Qué celebración es muy importante en Brasil?", ["Carnaval", "Oktoberfest", "Hanami", "Diwali"], 0],
            ["¿Qué acompaña tradicionalmente la capoeira?", ["Música", "Nieve", "Ópera italiana", "Gaitas escocesas"], 0],
            ["¿Qué culturas han influido en las tradiciones brasileñas?", ["Indígena, africana y europea", "Solo asiática", "Solo europea", "Solo africana"], 0],
            ["¿En qué país se desarrolló la capoeira?", ["Brasil", "Portugal", "España", "Argentina"], 0]
        ]
    },

    "Fiestas": {
        titulo: "Fiestas brasileñas",
        subtitulo: "Celebraciones llenas de música y color",
        descripcion: "Brasil es conocido por sus grandes celebraciones y festividades.",
        dato: "El Carnaval brasileño es una de las celebraciones más conocidas del país.",
        preguntas: [
            ["¿Cuál es una de las fiestas más famosas de Brasil?", ["Carnaval", "Oktoberfest", "San Fermín", "Diwali"], 0],
            ["¿Qué ciudad es famosa por su Carnaval?", ["Río de Janeiro", "Madrid", "Roma", "Tokio"], 0],
            ["¿Qué desfiles son característicos del Carnaval de Río?", ["Escuelas de samba", "Desfiles militares", "Carreras", "Desfiles de hielo"], 0],
            ["¿Qué elemento destaca durante el Carnaval?", ["Música y disfraces", "Nieve", "Silencio", "Trajes medievales"], 0],
            ["¿Qué caracteriza principalmente al Carnaval brasileño?", ["Cultura y música", "Invierno", "Cosecha europea", "Año nuevo chino"], 0]
        ]
    },

    "Vestimenta": {
        titulo: "Vestimenta brasileña",
        subtitulo: "Ropa y expresiones culturales",
        descripcion: "La vestimenta tradicional y festiva de Brasil cambia según la región y la celebración.",
        dato: "En las celebraciones brasileñas son comunes los trajes coloridos y decorados.",
        preguntas: [
            ["¿Cómo suelen ser muchos trajes del Carnaval?", ["Coloridos y llamativos", "Completamente negros", "Solo blancos", "Militares"], 0],
            ["¿Según qué puede variar la vestimenta brasileña?", ["La región", "La estación lunar", "La longitud del río", "El planeta"], 0],
            ["¿Qué aparece frecuentemente en los trajes de Carnaval?", ["Adornos", "Armaduras", "Abrigos de nieve", "Kimonos"], 0],
            ["¿La vestimenta forma parte de qué?", ["La identidad cultural", "La astronomía", "La geología", "La química"], 0],
            ["¿Qué característica puede tener la vestimenta festiva?", ["Colores vivos", "Solo gris", "Solo marrón", "Sin decoración"], 0]
        ]
    },

    "Arte": {
        titulo: "Arte brasileño",
        subtitulo: "Arte, literatura y expresiones creativas",
        descripcion: "El arte brasileño refleja la diversidad cultural y las diferentes etapas históricas del país.",
        dato: "El modernismo brasileño tuvo gran importancia durante el siglo XX.",
        preguntas: [
            ["¿Qué movimiento tuvo importancia en el arte brasileño del siglo XX?", ["Modernismo", "Renacimiento italiano", "Barroco japonés", "Arte medieval"], 0],
            ["¿Qué expresa frecuentemente el arte brasileño?", ["Diversidad cultural", "Una sola cultura", "Ausencia de historia", "Solo paisajes europeos"], 0],
            ["¿Qué área forma parte de las expresiones artísticas?", ["Literatura", "Astronomía", "Química", "Geología"], 0],
            ["¿Qué característica puede encontrarse en el arte brasileño?", ["Mezcla de influencias", "Ausencia de influencias", "Solo influencia asiática", "Solo influencia africana"], 0],
            ["¿En qué siglo tuvo gran desarrollo el modernismo brasileño?", ["XX", "X", "XV", "XVIII"], 0]
        ]
    },

    "Monumentos": {
        titulo: "Monumentos de Brasil",
        subtitulo: "Lugares representativos del país",
        descripcion: "Brasil cuenta con numerosos lugares históricos, culturales y turísticos.",
        dato: "El Cristo Redentor se encuentra en Río de Janeiro.",
        preguntas: [
            ["¿Dónde se encuentra el Cristo Redentor?", ["Río de Janeiro", "Brasilia", "Salvador", "Recife"], 0],
            ["¿Qué representa el Cristo Redentor?", ["Un monumento religioso", "Un castillo", "Una estación", "Un puerto"], 0],
            ["¿Cuál es la capital de Brasil?", ["Brasilia", "Río de Janeiro", "São Paulo", "Salvador"], 0],
            ["¿Qué ciudad es una de las más grandes de Brasil?", ["São Paulo", "Quito", "Lima", "Bogotá"], 0],
            ["¿Sobre qué montaña se encuentra el Cristo Redentor?", ["Corcovado", "Pan de Azúcar", "Everest", "Andes"], 0]
        ]
    },

    "Pueblos originarios": {
        titulo: "Pueblos originarios",
        subtitulo: "Las culturas indígenas de Brasil",
        descripcion: "Brasil posee una gran diversidad de pueblos indígenas con diferentes lenguas y tradiciones.",
        dato: "La Amazonía brasileña alberga numerosos pueblos indígenas.",
        preguntas: [
            ["¿Quiénes habitaban Brasil antes de la llegada portuguesa?", ["Pueblos indígenas", "Romanos", "Vikingos", "Persas"], 0],
            ["¿Qué poseen los pueblos indígenas?", ["Lenguas y culturas", "Castillos", "Imperios romanos", "Monedas europeas"], 0],
            ["¿Qué región alberga numerosos pueblos indígenas?", ["Amazonía", "Sahara", "Alpes", "Siberia"], 0],
            ["¿Qué forma parte de las culturas indígenas?", ["Tradiciones", "Fábricas", "Ferrocarriles", "Tecnología moderna"], 0],
            ["¿Por qué son importantes los pueblos indígenas?", ["Forman parte de la historia y diversidad cultural", "No tienen relación con Brasil", "Llegaron en el siglo XX", "Pertenecen a Europa"], 0]
        ]
    },

    "Colonización portuguesa": {
        titulo: "Colonización portuguesa",
        subtitulo: "La llegada y presencia portuguesa",
        descripcion: "Portugal inició la colonización de Brasil a partir del siglo XVI.",
        dato: "El portugués se convirtió en la lengua predominante de Brasil.",
        preguntas: [
            ["¿Qué país colonizó Brasil?", ["Portugal", "España", "Francia", "Italia"], 0],
            ["¿En qué siglo comenzó la colonización portuguesa?", ["Siglo XVI", "Siglo X", "Siglo XIX", "Siglo XX"], 0],
            ["¿Qué idioma se convirtió en predominante?", ["Portugués", "Español", "Francés", "Italiano"], 0],
            ["¿Qué actividad económica tuvo importancia durante la colonización?", ["Producción de azúcar", "Automóviles", "Industria espacial", "Computadoras"], 0],
            ["¿Qué país mantuvo el control colonial de Brasil?", ["Portugal", "Inglaterra", "Alemania", "Italia"], 0]
        ]
    },

    "Imperio de Brasil": {
        titulo: "Imperio de Brasil",
        subtitulo: "Brasil durante el periodo imperial",
        descripcion: "Brasil fue un imperio independiente desde 1822 hasta 1889.",
        dato: "Pedro I fue el primer emperador de Brasil.",
        preguntas: [
            ["¿Cuándo comenzó el Imperio de Brasil?", ["1822", "1500", "1889", "1930"], 0],
            ["¿Quién fue el primer emperador de Brasil?", ["Pedro I", "Pedro II", "Getúlio Vargas", "Tiradentes"], 0],
            ["¿Quién fue el segundo emperador de Brasil?", ["Pedro II", "Pedro I", "Dom João VI", "José Bonifácio"], 0],
            ["¿En qué año terminó el Imperio de Brasil?", ["1889", "1822", "1808", "1900"], 0],
            ["¿Qué sistema político tuvo Brasil durante este periodo?", ["Monarquía", "República", "Colonia española", "Dictadura militar"], 0]
        ]
    },

    "Independencia": {
        titulo: "Independencia de Brasil",
        subtitulo: "El proceso de separación de Portugal",
        descripcion: "Brasil declaró su independencia de Portugal en 1822.",
        dato: "Pedro de Alcântara proclamó la independencia de Brasil.",
        preguntas: [
            ["¿En qué año declaró Brasil su independencia?", ["1822", "1889", "1500", "1939"], 0],
            ["¿De qué país se independizó Brasil?", ["Portugal", "España", "Francia", "Inglaterra"], 0],
            ["¿Quién proclamó la independencia de Brasil?", ["Pedro I", "Pedro II", "Tiradentes", "Getúlio Vargas"], 0],
            ["¿Dónde se relaciona tradicionalmente el grito de independencia?", ["Río Ipiranga", "Río Amazonas", "Río Paraná", "Río de Janeiro"], 0],
            ["¿Qué acontecimiento ocurrió en 1822?", ["La independencia de Brasil", "La abolición de la esclavitud", "El fin del Imperio", "La República"], 0]
        ]
    },

    "Personajes históricos": {
        titulo: "Personajes históricos",
        subtitulo: "Personas importantes en la historia de Brasil",
        descripcion: "Diversas figuras políticas y sociales han influido en la historia brasileña.",
        dato: "Pedro I tuvo un papel importante en la independencia de Brasil.",
        preguntas: [
            ["¿Quién proclamó la independencia de Brasil?", ["Pedro I", "Pedro II", "Vargas", "Tiradentes"], 0],
            ["¿Quién fue el segundo emperador de Brasil?", ["Pedro II", "Pedro I", "Dom João VI", "Juscelino Kubitschek"], 0],
            ["¿Quién fue una figura importante de la historia brasileña relacionada con la independencia?", ["Tiradentes", "Napoleón", "Simón Bolívar", "George Washington"], 0],
            ["¿Quién fue presidente durante parte de la Era Vargas?", ["Getúlio Vargas", "Pedro I", "Pedro II", "Tiradentes"], 0],
            ["¿Qué son los personajes históricos?", ["Personas que influyeron en acontecimientos históricos", "Solo deportistas", "Solo músicos", "Solo científicos extranjeros"], 0]
        ]
    },

    "Conflictos importantes": {
        titulo: "Conflictos importantes",
        subtitulo: "Conflictos y cambios políticos de Brasil",
        descripcion: "Brasil ha vivido diferentes conflictos internos y externos a lo largo de su historia.",
        dato: "La Guerra de la Triple Alianza fue uno de los conflictos internacionales importantes de Sudamérica en el siglo XIX.",
        preguntas: [
            ["¿Qué conflicto enfrentó a la Triple Alianza contra Paraguay?", ["Guerra de la Triple Alianza", "Guerra del Pacífico", "Guerra de Crimea", "Primera Guerra Mundial"], 0],
            ["¿Contra qué país luchó la Triple Alianza?", ["Paraguay", "Chile", "Perú", "Bolivia"], 0],
            ["¿En qué siglo ocurrió la Guerra de la Triple Alianza?", ["Siglo XIX", "Siglo XV", "Siglo XX", "Siglo XXI"], 0],
            ["¿Qué consecuencias pueden producir los conflictos históricos?", ["Cambios políticos y sociales", "Solo cambios deportivos", "Ninguna", "Solo cambios climáticos"], 0],
            ["¿Por qué es importante estudiar los conflictos históricos?", ["Para comprender los cambios de una sociedad", "Para olvidar la historia", "Solo para aprender geografía", "Para evitar estudiar historia"], 0]
        ]
    },

    "Brasil contemporáneo": {
        titulo: "Brasil contemporáneo",
        subtitulo: "Brasil en la época actual",
        descripcion: "Brasil es actualmente una república federal y una de las principales economías de América Latina.",
        dato: "Brasilia es la capital de Brasil desde 1960.",
        preguntas: [
            ["¿Cuál es la capital de Brasil?", ["Brasilia", "Río de Janeiro", "São Paulo", "Salvador"], 0],
            ["¿Qué sistema político tiene Brasil actualmente?", ["República federal", "Monarquía", "Imperio", "Colonia"], 0],
            ["¿Desde qué año Brasilia es la capital?", ["1960", "1822", "1889", "1500"], 0],
            ["¿Qué idioma predomina en Brasil?", ["Portugués", "Español", "Francés", "Italiano"], 0],
            ["¿En qué continente se encuentra Brasil?", ["América del Sur", "Europa", "Asia", "África"], 0]
        ]
    }
};


/* =========================================================
   RETO FINAL - 30 PREGUNTAS
========================================================= */

const preguntasRetoFinal = [
    ["¿Cuál es la capital de Brasil?", ["Brasilia", "Río de Janeiro", "São Paulo", "Salvador"], 0],
    ["¿Qué país colonizó Brasil?", ["Portugal", "España", "Francia", "Inglaterra"], 0],
    ["¿En qué año se independizó Brasil?", ["1822", "1889", "1500", "1960"], 0],
    ["¿Cuál es un plato tradicional brasileño?", ["Feijoada", "Paella", "Sushi", "Tacos"], 0],
    ["¿Qué ritmo musical es representativo de Brasil?", ["Samba", "Tango", "Flamenco", "Polka"], 0],
    ["¿Qué expresión cultural combina lucha y música?", ["Capoeira", "Karate", "Sumo", "Esgrima"], 0],
    ["¿Dónde se encuentra el Cristo Redentor?", ["Río de Janeiro", "Brasilia", "Recife", "Salvador"], 0],
    ["¿Cuántos años duró aproximadamente el Imperio de Brasil?", ["67 años", "20 años", "100 años", "150 años"], 0],
    ["¿Quién fue el primer emperador de Brasil?", ["Pedro I", "Pedro II", "Vargas", "Tiradentes"], 0],
    ["¿Quién fue el segundo emperador de Brasil?", ["Pedro II", "Pedro I", "Vargas", "José Bonifácio"], 0],
    ["¿En qué año terminó el Imperio de Brasil?", ["1889", "1822", "1900", "1930"], 0],
    ["¿Qué celebración es famosa en Brasil?", ["Carnaval", "Oktoberfest", "Hanami", "Diwali"], 0],
    ["¿Qué ciudad es famosa por su Carnaval?", ["Río de Janeiro", "Brasilia", "São Paulo", "Recife"], 0],
    ["¿Qué bebida se relaciona con la producción agrícola de Brasil?", ["Café", "Té verde", "Mate", "Chicha"], 0],
    ["¿Qué región posee numerosos pueblos indígenas?", ["Amazonía", "Sahara", "Alpes", "Siberia"], 0],
    ["¿Qué idioma predomina en Brasil?", ["Portugués", "Español", "Francés", "Italiano"], 0],
    ["¿Qué movimiento artístico tuvo importancia en Brasil?", ["Modernismo", "Renacimiento", "Romanticismo alemán", "Barroco japonés"], 0],
    ["¿Qué guerra enfrentó a la Triple Alianza contra Paraguay?", ["Guerra de la Triple Alianza", "Guerra del Pacífico", "Guerra de Crimea", "Guerra de los Cien Años"], 0],
    ["¿En qué siglo ocurrió la Guerra de la Triple Alianza?", ["Siglo XIX", "Siglo XV", "Siglo XX", "Siglo XXI"], 0],
    ["¿Qué representa la vestimenta tradicional?", ["Identidad cultural", "Astronomía", "Geología", "Economía mundial"], 0],
    ["¿Desde qué año Brasilia es capital de Brasil?", ["1960", "1889", "1822", "1500"], 0],
    ["¿En qué continente está Brasil?", ["América del Sur", "Europa", "Asia", "África"], 0],
    ["¿Qué país está al norte de Brasil?", ["Venezuela", "España", "Italia", "Alemania"], 0],
    ["¿Qué océano baña la costa brasileña?", ["Atlántico", "Pacífico", "Índico", "Ártico"], 0],
    ["¿Qué monumento se encuentra en el monte Corcovado?", ["Cristo Redentor", "Torre Eiffel", "Big Ben", "Coliseo"], 0],
    ["¿Qué culturas influyeron en la cultura brasileña?", ["Indígena, africana y europea", "Solo asiática", "Solo europea", "Solo africana"], 0],
    ["¿Qué celebración destaca por sus escuelas de samba?", ["Carnaval", "Oktoberfest", "Hanami", "Diwali"], 0],
    ["¿Quién proclamó la independencia de Brasil?", ["Pedro I", "Pedro II", "Vargas", "Tiradentes"], 0],
    ["¿Qué sistema político tiene Brasil actualmente?", ["República federal", "Monarquía", "Imperio", "Colonia"], 0],
    ["¿Qué río es uno de los más importantes de Brasil?", ["Amazonas", "Nilo", "Danubio", "Támesis"], 0]
];


/* =========================================================
   PREGUNTAS DE RECUPERACIÓN
========================================================= */

const preguntasRecuperacion = [
    {
        pregunta: "¿Cuál es la capital de Brasil?",
        opciones: ["Brasilia", "Río de Janeiro", "São Paulo", "Salvador"],
        correcta: "Brasilia"
    },
    {
        pregunta: "¿En qué año se independizó Brasil?",
        opciones: ["1889", "1822", "1500", "1960"],
        correcta: "1822"
    },
    {
        pregunta: "¿Qué país colonizó Brasil?",
        opciones: ["Francia", "España", "Portugal", "Italia"],
        correcta: "Portugal"
    },
    {
        pregunta: "¿Qué ritmo musical es representativo de Brasil?",
        opciones: ["Polka", "Tango", "Flamenco", "Samba"],
        correcta: "Samba"
    },
    {
        pregunta: "¿Qué monumento se encuentra en Río de Janeiro?",
        opciones: ["Big Ben", "Torre Eiffel", "Cristo Redentor", "Coliseo"],
        correcta: "Cristo Redentor"
    }
];


/* =========================================================
   ESTADO DEL JUEGO
========================================================= */

let estado = {
    vidas: 5,
    puntos: 0,
    correctas: 0,
    categoriaActual: "Gastronomía",
    preguntaActual: 0,
    respondida: false,
    categoriasCompletadas: [],
    mejorRetoFinal: {
        correctas: 0,
        puntos: 0,
        porcentaje: 0
    }
};

let indiceCorrectoActual = 0;
let preguntaRecuperacionActual = null;
let recuperacionRespondida = false;

let estadoFinal = {
    preguntaActual: 0,
    puntos: 0,
    correctas: 0,
    respondida: false
};

let indiceCorrectoFinal = 0;


/* =========================================================
   FUNCIONES AUXILIARES
========================================================= */

function mezclarArray(array) {
    const copia = [...array];

    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    return copia;
}


/* =========================================================
   CARGAR ELEMENTOS DEL HTML
========================================================= */

const tituloTema = document.getElementById("tituloCategoria");
const subtituloTema = document.getElementById("subtituloCategoria");
const datoCurioso = document.getElementById("datoInteresante");
const descripcionElemento = document.getElementById("descripcionCategoria");

const preguntaReto = document.getElementById("preguntaReto");
const opcionesReto = document.getElementById("opcionesReto");
const resultado = document.getElementById("mensajeRespuesta");
const botonSiguiente = document.getElementById("botonSiguiente");
const numeroPregunta = document.getElementById("contadorPregunta");

const puntosElemento = document.getElementById("puntos");
const vidasElemento = document.getElementById("numeroVidas");
const porcentajeElemento = document.getElementById("porcentaje");
const retosCompletadosElemento = document.getElementById("retosCompletados");
const respuestasCorrectasElemento = document.getElementById("correctas");

const modalRecuperacion = document.getElementById("modalRecuperacion");
const preguntaRecuperacion = document.getElementById("preguntaRecuperacion");
const opcionesRecuperacion = document.getElementById("opcionesRecuperacion");
const mensajeRecuperacion = document.getElementById("mensajeRecuperacion");
const btnIniciarRecuperacion = document.getElementById("btnIniciarRecuperacion");

const modalRetoFinal = document.getElementById("modalRetoFinal");
const btnRetoFinal = document.getElementById("btnRetoFinal");

const btnEscuchar = document.getElementById("btnEscuchar");


/* =========================================================
   GUARDAR PROGRESO
========================================================= */

function guardar() {
    localStorage.setItem(CLAVE, JSON.stringify(estado));
}


/* =========================================================
   CARGAR PROGRESO
========================================================= */

function cargarProgreso() {

    const guardado = localStorage.getItem(CLAVE);

    if (!guardado) {
        guardar();
        return;
    }

    try {

        const datos = JSON.parse(guardado);

        estado = {
            ...estado,
            ...datos
        };

        if (!Array.isArray(estado.categoriasCompletadas)) {
            estado.categoriasCompletadas = [];
        }

        if (!estado.mejorRetoFinal) {
            estado.mejorRetoFinal = {
                correctas: 0,
                puntos: 0,
                porcentaje: 0
            };
        }

        if (!categorias[estado.categoriaActual]) {
            estado.categoriaActual = "Gastronomía";
        }

        estado.vidas = Number(estado.vidas);

        if (!Number.isFinite(estado.vidas)) {
            estado.vidas = 5;
        }

        estado.vidas = Math.max(0, Math.min(5, estado.vidas));

        estado.preguntaActual = Number(estado.preguntaActual) || 0;

        if (
            estado.preguntaActual >=
            PREGUNTAS_POR_CATEGORIA
        ) {
            estado.preguntaActual = 0;
        }

    } catch (error) {

        console.error("Error cargando progreso:", error);

        estado = {
            vidas: 5,
            puntos: 0,
            correctas: 0,
            categoriaActual: "Gastronomía",
            preguntaActual: 0,
            respondida: false,
            categoriasCompletadas: [],
            mejorRetoFinal: {
                correctas: 0,
                puntos: 0,
                porcentaje: 0
            }
        };

        guardar();
    }
}


/* =========================================================
   VIDAS
========================================================= */

function actualizarVidas() {

    if (vidasElemento) {
        vidasElemento.textContent = estado.vidas;
    }

    const corazones = document.getElementById("corazones");

    if (corazones) {

        let texto = "";

        for (let i = 0; i < 5; i++) {
            texto += i < estado.vidas ? "❤️ " : "🖤 ";
        }

        corazones.textContent = texto;
    }
}


/* =========================================================
   PANEL DERECHO
========================================================= */

function actualizarPanel() {

    if (puntosElemento) {
        puntosElemento.textContent = estado.puntos;
    }

    if (vidasElemento) {
        vidasElemento.textContent = estado.vidas;
    }

    if (respuestasCorrectasElemento) {
        respuestasCorrectasElemento.textContent = estado.correctas;
    }

    const porcentaje = Math.round(
        (estado.categoriasCompletadas.length /
            TOTAL_CATEGORIAS) *
        100
    );

    if (porcentajeElemento) {
        porcentajeElemento.textContent = `${porcentaje}%`;
    }

    if (retosCompletadosElemento) {
        retosCompletadosElemento.textContent =
            estado.categoriasCompletadas.length;
    }

    const textoCategorias =
        document.getElementById("textoCategorias");

    if (textoCategorias) {
        textoCategorias.textContent =
            `Has completado ${estado.categoriasCompletadas.length} de ${TOTAL_CATEGORIAS} categorías.`;
    }

    const estadoProgreso =
        document.getElementById("estadoProgreso");

    if (estadoProgreso) {

        if (porcentaje === 0) {
            estadoProgreso.textContent =
                "Aventura en progreso";
        }

        else if (porcentaje < 50) {
            estadoProgreso.textContent =
                "¡Buen comienzo!";
        }

        else if (porcentaje < 100) {
            estadoProgreso.textContent =
                "¡Vas muy bien!";
        }

        else {
            estadoProgreso.textContent =
                "🏆 ¡Aventura completada!";
        }
    }
}


/* =========================================================
   INFORMACIÓN DE CATEGORÍA
========================================================= */

function actualizarInformacion() {

    const categoria =
        categorias[estado.categoriaActual];

    if (!categoria) return;

    if (tituloTema) {
        tituloTema.textContent = categoria.titulo;
    }

    if (subtituloTema) {
        subtituloTema.textContent =
            categoria.subtitulo;
    }

    if (datoCurioso) {
        datoCurioso.textContent =
            categoria.dato;
    }

    if (descripcionElemento) {
        descripcionElemento.textContent =
            categoria.descripcion;
    }
}


/* =========================================================
   BOTONES DE CATEGORÍAS
========================================================= */

function actualizarBotonesCategorias() {

    document
        .querySelectorAll(".categoria")
        .forEach(boton => {

            const nombre =
                boton.dataset.categoria;

            boton.classList.toggle(
                "active",
                nombre === estado.categoriaActual
            );

            boton.classList.toggle(
                "completada",
                estado.categoriasCompletadas.includes(nombre)
            );
        });
}


/* =========================================================
   CARGAR PREGUNTA
========================================================= */

function cargarPregunta() {

    const categoria =
        categorias[estado.categoriaActual];

    if (!categoria) return;

    if (estado.vidas <= 0) {
        mostrarAvisoSinVidas();
        return;
    }

    if (
        estado.preguntaActual >=
        categoria.preguntas.length
    ) {
        completarCategoria();
        return;
    }

    estado.respondida = false;

    const datos =
        categoria.preguntas[estado.preguntaActual];

    const textoPregunta = datos[0];
    const opciones = datos[1];
    const indiceOriginal = datos[2];

    if (preguntaReto) {
        preguntaReto.textContent =
            textoPregunta;
        preguntaReto.style.display =
            "block";
    }

    if (numeroPregunta) {
        numeroPregunta.textContent =
            `${estado.preguntaActual + 1} / ${PREGUNTAS_POR_CATEGORIA}`;
    }

    if (resultado) {
        resultado.textContent = "";
        resultado.className =
            "mensaje-respuesta";
    }

    if (botonSiguiente) {
        botonSiguiente.disabled = true;
        botonSiguiente.textContent =
            "Siguiente →";
    }

    if (!opcionesReto) {
        console.error(
            "No existe #opcionesReto en el HTML."
        );
        return;
    }

    opcionesReto.innerHTML = "";

    const respuestaCorrecta =
        opciones[indiceOriginal];

    const opcionesMezcladas =
        mezclarArray(opciones);

    indiceCorrectoActual =
        opcionesMezcladas.indexOf(
            respuestaCorrecta
        );

    opcionesMezcladas.forEach(
        (opcion, indiceOpcion) => {

            const boton =
                document.createElement("button");

            boton.type = "button";
            boton.className = "opcion";
            boton.textContent = opcion;

            boton.addEventListener(
                "click",
                () => {
                    comprobarRespuesta(
                        indiceOpcion,
                        boton
                    );
                }
            );

            opcionesReto.appendChild(boton);
        }
    );
}


/* =========================================================
   COMPROBAR RESPUESTA
========================================================= */

function comprobarRespuesta(
    indice,
    botonSeleccionado
) {

    if (estado.respondida) return;

    if (estado.vidas <= 0) {
        mostrarAvisoSinVidas();
        return;
    }

    estado.respondida = true;

    const botones =
        opcionesReto.querySelectorAll(".opcion");

    botones.forEach(
        (boton, i) => {

            boton.disabled = true;

            if (i === indiceCorrectoActual) {
                boton.classList.add("correcta");
            }

            if (
                i === indice &&
                i !== indiceCorrectoActual
            ) {
                boton.classList.add("incorrecta");
            }
        }
    );

    if (indice === indiceCorrectoActual) {

        estado.puntos += 10;
        estado.correctas++;

        if (resultado) {
            resultado.className =
                "mensaje-respuesta correcto";

            resultado.textContent =
                "✅ ¡Correcto! +10 puntos";
        }

    } else {

        estado.vidas--;

        const categoria =
            categorias[estado.categoriaActual];

        const pregunta =
            categoria.preguntas[
                estado.preguntaActual
            ];

        if (resultado) {

            resultado.className =
                "mensaje-respuesta incorrecto";

            resultado.textContent =
                `❌ Incorrecto. La respuesta correcta era: ${pregunta[1][pregunta[2]]}`;
        }

        actualizarVidas();
    }

    if (botonSiguiente) {
        botonSiguiente.disabled = false;
    }

    actualizarPanel();
    actualizarVidas();
    guardar();

    if (estado.vidas <= 0) {

        if (botonSiguiente) {
            botonSiguiente.disabled = true;
        }

        setTimeout(() => {
            mostrarAvisoSinVidas();
        }, 600);
    }
}


/* =========================================================
   SIGUIENTE PREGUNTA
========================================================= */

function siguientePregunta() {

    if (!estado.respondida) return;

    if (estado.vidas <= 0) {
        mostrarAvisoSinVidas();
        return;
    }

    estado.preguntaActual++;

    const categoria =
        categorias[estado.categoriaActual];

    if (
        estado.preguntaActual >=
        categoria.preguntas.length
    ) {

        completarCategoria();
        return;
    }

    guardar();
    cargarPregunta();
}


/* =========================================================
   COMPLETAR CATEGORÍA
========================================================= */

function completarCategoria() {

    const nombre =
        estado.categoriaActual;

    if (
        !estado.categoriasCompletadas.includes(
            nombre
        )
    ) {

        estado.categoriasCompletadas.push(
            nombre
        );
    }

    estado.preguntaActual = 0;
    estado.respondida = false;

    guardar();

    actualizarPanel();
    actualizarBotonesCategorias();

    if (preguntaReto) {

        preguntaReto.innerHTML = `
            <div class="categoria-completada">
                <div class="icono-completado">🎉</div>
                <h3>¡Categoría completada!</h3>
                <p>
                    Has terminado las 5 preguntas de
                    <strong>${nombre}</strong>.
                </p>
                <p>
                    Selecciona otra categoría para continuar.
                </p>
            </div>
        `;
    }

    if (opcionesReto) {
        opcionesReto.innerHTML = "";
    }

    if (numeroPregunta) {
        numeroPregunta.textContent = "5 / 5";
    }

    if (botonSiguiente) {
        botonSiguiente.disabled = true;
    }

    comprobarFinal();
}


/* =========================================================
   CAMBIAR CATEGORÍA
========================================================= */

function cambiarCategoria(nombre) {

    if (!categorias[nombre]) return;

    if (estado.vidas <= 0) {
        mostrarAvisoSinVidas();
        return;
    }

    estado.categoriaActual = nombre;
    estado.preguntaActual = 0;
    estado.respondida = false;

    actualizarInformacion();
    actualizarBotonesCategorias();
    cargarPregunta();

    guardar();
}


/* =========================================================
   BLOQUEAR JUEGO
========================================================= */

function bloquearJuegoPorVidas() {

    if (opcionesReto) {

        opcionesReto
            .querySelectorAll(".opcion")
            .forEach(boton => {
                boton.disabled = true;
            });
    }

    if (botonSiguiente) {
        botonSiguiente.disabled = true;
    }
}


/* =========================================================
   MOSTRAR RECUPERACIÓN
========================================================= */

function mostrarAvisoSinVidas() {

    if (estado.vidas > 0) return;

    bloquearJuegoPorVidas();

    if (!modalRecuperacion) {
        console.error(
            "No existe #modalRecuperacion en el HTML."
        );
        return;
    }

    modalRecuperacion.classList.add("mostrar");

    iniciarPreguntaRecuperacion();
}


/* =========================================================
   INICIAR RECUPERACIÓN
========================================================= */

function iniciarPreguntaRecuperacion() {

    recuperacionRespondida = false;

    const pregunta =
        preguntasRecuperacion[
            Math.floor(
                Math.random() *
                preguntasRecuperacion.length
            )
        ];

    preguntaRecuperacionActual =
        pregunta;

    if (preguntaRecuperacion) {
        preguntaRecuperacion.textContent =
            pregunta.pregunta;
    }

    if (mensajeRecuperacion) {
        mensajeRecuperacion.textContent =
            "Responde correctamente para recuperar tus 5 vidas.";

        mensajeRecuperacion.style.color = "";
    }

    if (btnIniciarRecuperacion) {
        btnIniciarRecuperacion.style.display =
            "none";
    }

    if (!opcionesRecuperacion) return;

    opcionesRecuperacion.innerHTML = "";

    const opcionesMezcladas =
        mezclarArray(pregunta.opciones);

    const indiceCorrecto =
        opcionesMezcladas.indexOf(
            pregunta.correcta
        );

    opcionesMezcladas.forEach(
        (opcion, indice) => {

            const boton =
                document.createElement("button");

            boton.type = "button";
            boton.className =
                "recuperacion-opcion";

            boton.textContent = opcion;

            boton.addEventListener(
                "click",
                () => {

                    comprobarRecuperacion(
                        indice,
                        indiceCorrecto,
                        boton
                    );
                }
            );

            opcionesRecuperacion.appendChild(
                boton
            );
        }
    );
}


/* =========================================================
   COMPROBAR RECUPERACIÓN
========================================================= */

function comprobarRecuperacion(
    indice,
    indiceCorrecto,
    boton
) {

    if (recuperacionRespondida) return;

    const botones =
        opcionesRecuperacion.querySelectorAll(
            ".recuperacion-opcion"
        );

    if (indice === indiceCorrecto) {

        recuperacionRespondida = true;

        botones.forEach(
            (btn, i) => {

                btn.disabled = true;

                if (i === indiceCorrecto) {
                    btn.classList.add("correcta");
                }
            }
        );

        estado.vidas = 5;

        guardar();
        actualizarVidas();
        actualizarPanel();

        if (mensajeRecuperacion) {

            mensajeRecuperacion.textContent =
                "🎉 ¡Correcto! Has recuperado tus 5 vidas.";

            mensajeRecuperacion.style.color =
                "#2d8a50";
        }

        if (btnIniciarRecuperacion) {

            btnIniciarRecuperacion.style.display =
                "inline-block";

            btnIniciarRecuperacion.textContent =
                "Continuar →";
        }

    } else {

        boton.disabled = true;

        boton.classList.add("incorrecta");

        if (mensajeRecuperacion) {

            mensajeRecuperacion.textContent =
                "❌ Incorrecto. Intenta con otra opción.";

            mensajeRecuperacion.style.color =
                "#c84450";
        }
    }
}


/* =========================================================
   CONTINUAR DESPUÉS DE RECUPERAR
========================================================= */

if (btnIniciarRecuperacion) {

    btnIniciarRecuperacion.addEventListener(
        "click",
        () => {

            if (estado.vidas !== 5) return;

            if (modalRecuperacion) {
                modalRecuperacion.classList.remove(
                    "mostrar"
                );
            }

            estado.respondida = false;

            guardar();
            actualizarVidas();
            actualizarPanel();
            cargarPregunta();
        }
    );
}


/* =========================================================
   AUDIO
========================================================= */

function reproducirAudio() {

    if (!("speechSynthesis" in window)) {

        alert(
            "Tu navegador no permite reproducir audio."
        );

        return;
    }

    const categoria =
        categorias[estado.categoriaActual];

    if (!categoria) return;

    window.speechSynthesis.cancel();

    const texto =
        `${categoria.titulo}. ${categoria.descripcion}. ${categoria.dato}`;

    const voz =
        new SpeechSynthesisUtterance(texto);

    voz.lang = "es-ES";
    voz.rate = 0.9;
    voz.pitch = 1;

    window.speechSynthesis.speak(voz);
}


if (btnEscuchar) {

    btnEscuchar.addEventListener(
        "click",
        reproducirAudio
    );
}


/* =========================================================
   RETO FINAL
========================================================= */

function comprobarFinal() {

    if (
        estado.categoriasCompletadas.length !==
        TOTAL_CATEGORIAS
    ) {
        return;
    }

    if (!modalRetoFinal) {
        console.error(
            "No existe #modalRetoFinal."
        );
        return;
    }

    modalRetoFinal.classList.add("mostrar");
}


/* =========================================================
   BOTÓN PARA COMENZAR RETO FINAL
========================================================= */

if (btnRetoFinal) {

    btnRetoFinal.addEventListener(
        "click",
        iniciarRetoFinal
    );
}


/* =========================================================
   INICIAR RETO FINAL
========================================================= */

function iniciarRetoFinal() {

    estadoFinal = {
        preguntaActual: 0,
        puntos: 0,
        correctas: 0,
        respondida: false
    };

    if (!modalRetoFinal) return;

    modalRetoFinal.innerHTML = `

        <div class="modal-contenido reto-final-estilo">

            <button
                class="cerrar-modal"
                id="cerrarRetoFinal"
                type="button"
            >
                ×
            </button>

            <div class="codigo-pais">
                BR
            </div>

            <h2 class="titulo-reto">
                Reto Final de Brasil
            </h2>

            <p class="descripcion-reto">
                ¡Has completado las 14 categorías!
                Ahora demuestra todo lo que aprendiste
                sobre la historia y cultura de Brasil.
            </p>

            <div class="badge-pregunta">
                Pregunta
                <span id="numPreguntaFinal">1</span>
                / 30
            </div>

            <div class="caja-pregunta">
                <h3 id="preguntaFinal">
                    Cargando pregunta...
                </h3>
            </div>

            <div
                id="opcionesFinal"
                class="grid-opciones"
            ></div>

            <div class="stats-reto">

                <div class="stat-card">

                    <div class="stat-icon">
                        ⭐
                    </div>

                    <strong id="puntosFinal">
                        0
                    </strong>

                    <span>
                        Puntos
                    </span>

                </div>

                <div class="stat-card">

                    <div class="stat-icon">
                        🎯
                    </div>

                    <strong id="correctasFinal">
                        0
                    </strong>

                    <span>
                        Correctas
                    </span>

                </div>

            </div>

            <div class="footer-reto">

                <div
                    id="mensajeFinal"
                    class="mensaje-final"
                ></div>

                <button
                    id="btnSiguienteFinal"
                    class="btn-siguiente"
                    type="button"
                    disabled
                >
                    Siguiente →
                </button>

            </div>

        </div>
    `;

    modalRetoFinal.classList.add("mostrar");

    const cerrar =
        document.getElementById(
            "cerrarRetoFinal"
        );

    if (cerrar) {

        cerrar.addEventListener(
            "click",
            () => {

                modalRetoFinal.classList.remove(
                    "mostrar"
                );
            }
        );
    }

    cargarPreguntaFinal();
}


/* =========================================================
   CARGAR PREGUNTA FINAL
========================================================= */

function cargarPreguntaFinal() {

    const pregunta =
        preguntasRetoFinal[
            estadoFinal.preguntaActual
        ];

    if (!pregunta) {

        terminarRetoFinal();
        return;
    }

    estadoFinal.respondida = false;

    const preguntaElemento =
        document.getElementById(
            "preguntaFinal"
        );

    const opcionesElemento =
        document.getElementById(
            "opcionesFinal"
        );

    const numeroElemento =
        document.getElementById(
            "numPreguntaFinal"
        );

    const mensajeElemento =
        document.getElementById(
            "mensajeFinal"
        );

    const boton =
        document.getElementById(
            "btnSiguienteFinal"
        );

    if (preguntaElemento) {
        preguntaElemento.textContent =
            pregunta[0];
    }

    if (numeroElemento) {
        numeroElemento.textContent =
            estadoFinal.preguntaActual + 1;
    }

    if (mensajeElemento) {
        mensajeElemento.textContent = "";
        mensajeElemento.className =
            "mensaje-final";
    }

    if (boton) {
        boton.disabled = true;
        boton.textContent =
            "Siguiente →";
    }

    if (!opcionesElemento) return;

    opcionesElemento.innerHTML = "";

    const opciones =
        pregunta[1];

    const correcta =
        opciones[pregunta[2]];

    const mezcladas =
        mezclarArray(opciones);

    indiceCorrectoFinal =
        mezcladas.indexOf(correcta);

    mezcladas.forEach(
        (opcion, indice) => {

            const botonOpcion =
                document.createElement(
                    "button"
                );

            botonOpcion.type = "button";

            botonOpcion.className =
                "opcion-final";

            botonOpcion.textContent =
                opcion;

            botonOpcion.addEventListener(
                "click",
                () => {

                    comprobarRespuestaFinal(
                        indice
                    );
                }
            );

            opcionesElemento.appendChild(
                botonOpcion
            );
        }
    );
}


/* =========================================================
   COMPROBAR RESPUESTA FINAL
========================================================= */

function comprobarRespuestaFinal(indice) {

    if (estadoFinal.respondida) return;

    estadoFinal.respondida = true;

    const opcionesElemento =
        document.getElementById(
            "opcionesFinal"
        );

    const botones =
        opcionesElemento.querySelectorAll(
            ".opcion-final"
        );

    botones.forEach(
        (boton, i) => {

            boton.disabled = true;

            if (
                i ===
                indiceCorrectoFinal
            ) {

                boton.classList.add(
                    "correcta"
                );
            }

            if (
                i === indice &&
                i !== indiceCorrectoFinal
            ) {

                boton.classList.add(
                    "incorrecta"
                );
            }
        }
    );

    const mensaje =
        document.getElementById(
            "mensajeFinal"
        );

    if (
        indice ===
        indiceCorrectoFinal
    ) {

        estadoFinal.correctas++;
        estadoFinal.puntos += 10;

        if (mensaje) {

            mensaje.textContent =
                "✅ ¡Correcto! +10 puntos";

            mensaje.className =
                "mensaje-final correcto";
        }

    } else {

        const pregunta =
            preguntasRetoFinal[
                estadoFinal.preguntaActual
            ];

        if (mensaje) {

            mensaje.textContent =
                `❌ Incorrecto. La respuesta correcta era: ${pregunta[1][pregunta[2]]}`;

            mensaje.className =
                "mensaje-final incorrecto";
        }
    }

    const puntosFinal =
        document.getElementById(
            "puntosFinal"
        );

    const correctasFinal =
        document.getElementById(
            "correctasFinal"
        );

    if (puntosFinal) {
        puntosFinal.textContent =
            estadoFinal.puntos;
    }

    if (correctasFinal) {
        correctasFinal.textContent =
            estadoFinal.correctas;
    }

    const boton =
        document.getElementById(
            "btnSiguienteFinal"
        );

    if (boton) {
        boton.disabled = false;
    }
}


/* =========================================================
   SIGUIENTE PREGUNTA FINAL
========================================================= */

function siguientePreguntaFinal() {

    if (!estadoFinal.respondida) return;

    estadoFinal.preguntaActual++;

    if (
        estadoFinal.preguntaActual >=
        preguntasRetoFinal.length
    ) {

        terminarRetoFinal();
        return;
    }

    cargarPreguntaFinal();
}


/* =========================================================
   BOTÓN SIGUIENTE FINAL
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            event.target &&
            event.target.id ===
            "btnSiguienteFinal"
        ) {

            siguientePreguntaFinal();
        }
    }
);


/* =========================================================
   TERMINAR RETO FINAL
========================================================= */

function terminarRetoFinal() {

    const porcentaje =
        Math.round(
            (estadoFinal.correctas /
                preguntasRetoFinal.length) *
            100
        );

    if (
        porcentaje >
        estado.mejorRetoFinal.porcentaje
    ) {

        estado.mejorRetoFinal = {
            correctas:
                estadoFinal.correctas,

            puntos:
                estadoFinal.puntos,

            porcentaje:
                porcentaje
        };
    }

    guardar();

    if (!modalRetoFinal) return;

    modalRetoFinal.innerHTML = `

        <div class="modal-contenido reto-final-estilo">

            <div class="codigo-pais">
                🇧🇷
            </div>

            <h2 class="titulo-reto">
                🎉 ¡Reto final completado!
            </h2>

            <p class="descripcion-reto">
                Terminaste el reto final de Brasil.
            </p>

            <div class="stats-reto">

                <div class="stat-card">

                    <div class="stat-icon">
                        ⭐
                    </div>

                    <strong>
                        ${estadoFinal.puntos}
                    </strong>

                    <span>
                        Puntos
                    </span>

                </div>

                <div class="stat-card">

                    <div class="stat-icon">
                        🎯
                    </div>

                    <strong>
                        ${estadoFinal.correctas}/30
                    </strong>

                    <span>
                        Correctas
                    </span>

                </div>

            </div>

            <div class="mensaje-final correcto">
                Obtuviste ${porcentaje}% de respuestas correctas.
            </div>

            <button
                id="btnTerminarBrasil"
                class="btn-siguiente"
                type="button"
            >
                Finalizar aventura
            </button>

        </div>
    `;

    const btnTerminar =
        document.getElementById(
            "btnTerminarBrasil"
        );

    if (btnTerminar) {

        btnTerminar.addEventListener(
            "click",
            finalizarAventuraBrasil
        );
    }
}


/* =========================================================
   FINALIZAR AVENTURA
   VUELVE EL PROGRESO A CERO
========================================================= */

function finalizarAventuraBrasil() {

    localStorage.removeItem(CLAVE);

    estado = {
        vidas: 5,
        puntos: 0,
        correctas: 0,
        categoriaActual: "Gastronomía",
        preguntaActual: 0,
        respondida: false,
        categoriasCompletadas: [],
        mejorRetoFinal: {
            correctas: 0,
            puntos: 0,
            porcentaje: 0
        }
    };

    if (modalRetoFinal) {
        modalRetoFinal.classList.remove(
            "mostrar"
        );
    }

    actualizarVidas();
    actualizarPanel();
    actualizarInformacion();
    actualizarBotonesCategorias();
    cargarPregunta();

    guardar();
}


/* =========================================================
   BOTÓN SIGUIENTE PRINCIPAL
========================================================= */

if (botonSiguiente) {

    botonSiguiente.addEventListener(
        "click",
        siguientePregunta
    );
}


/* =========================================================
   BOTONES DE CATEGORÍAS
========================================================= */

document
    .querySelectorAll(".categoria")
    .forEach(boton => {

        boton.addEventListener(
            "click",
            () => {

                const categoria =
                    boton.dataset.categoria;

                cambiarCategoria(
                    categoria
                );
            }
        );
    });


/* =========================================================
   INICIAR JUEGO
========================================================= */

function iniciarJuego() {

    cargarProgreso();

    actualizarVidas();
    actualizarPanel();
    actualizarInformacion();
    actualizarBotonesCategorias();

    cargarPregunta();

    if (estado.vidas <= 0) {
        setTimeout(
            mostrarAvisoSinVidas,
            300
        );
    }

    if (
        estado.categoriasCompletadas.length ===
        TOTAL_CATEGORIAS
    ) {

        setTimeout(
            comprobarFinal,
            300
        );
    }
}


/* =========================================================
   INICIO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    iniciarJuego
);