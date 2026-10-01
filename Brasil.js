/* =====================================================
   HISTORIA SIN FRONTERAS
   BRASIL - Código completo corregido
   ===================================================== */

const CLAVE = "historiaSinFronterasBrasil";

const TOTAL_CATEGORIAS = 14;
const PREGUNTAS_POR_CATEGORIA = 5;

/* Orden oficial de las categorías (para el botón Siguiente) */
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


/* =====================================================
   DATOS DE BRASIL
   ===================================================== */

const categorias = {

    "Gastronomía": {
        titulo: "Gastronomía brasileña",
        subtitulo: "Sabores y comidas tradicionales de Brasil",
        descripcion: "La gastronomía brasileña combina influencias indígenas, africanas y portuguesas.",
        dato: "La feijoada es uno de los platos más conocidos de Brasil.",
        preguntas: [
            ["¿Cuál es un plato tradicional brasileño?", ["Feijoada", "Paella", "Sushi", "Tacos"], 0],
            ["¿Qué alimento es muy utilizado en la cocina brasileña?", ["Yuca", "Oliva", "Cebada", "Trigo sarraceno"], 0],
            ["¿Qué bebida se prepara tradicionalmente con café en Brasil?", ["Café brasileño", "Té verde", "Chicha", "Mate"], 0],
            ["¿Qué plato se prepara principalmente con frijoles negros y carne?", ["Feijoada", "Ceviche", "Arepa", "Ramen"], 0],
            ["¿Cuál es un postre brasileño conocido?", ["Brigadeiro", "Baklava", "Mochi", "Croissant"], 0]
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
            ["¿En qué celebración destaca especialmente la música de samba?", ["Carnaval", "Halloween", "Oktoberfest", "Diwali"], 0],
            ["¿La música brasileña refleja principalmente qué característica?", ["Diversidad cultural", "Uniformidad cultural", "Aislamiento", "Ausencia de tradiciones"], 0]
        ]
    },

    "Tradiciones": {
        titulo: "Tradiciones de Brasil",
        subtitulo: "Costumbres y expresiones culturales",
        descripcion: "Las tradiciones brasileñas reflejan la mezcla de culturas indígenas, africanas y europeas.",
        dato: "La capoeira combina elementos de lucha, música, movimiento y tradición.",
        preguntas: [
            ["¿Qué expresión cultural combina lucha y música?", ["Capoeira", "Karate", "Sumo", "Esgrima"], 0],
            ["¿Qué celebración es muy importante en Brasil?", ["Carnaval", "Navidad nórdica", "Oktoberfest", "Hanami"], 0],
            ["¿Qué elemento acompaña tradicionalmente la capoeira?", ["Música", "Nieve", "Ópera italiana", "Gaitas escocesas"], 0],
            ["¿Qué culturas han influido en las tradiciones brasileñas?", ["Indígena, africana y europea", "Solo asiática", "Solo europea", "Solo africana"], 0],
            ["¿La capoeira nació principalmente en qué país?", ["Brasil", "Portugal", "España", "Argentina"], 0]
        ]
    },

    "Fiestas": {
        titulo: "Fiestas brasileñas",
        subtitulo: "Celebraciones llenas de música y color",
        descripcion: "Brasil es conocido internacionalmente por sus grandes celebraciones y festividades.",
        dato: "El Carnaval brasileño atrae a millones de personas cada año.",
        preguntas: [
            ["¿Cuál es una de las fiestas más famosas de Brasil?", ["Carnaval", "Oktoberfest", "San Fermín", "Diwali"], 0],
            ["¿Qué ciudad es famosa por su Carnaval?", ["Río de Janeiro", "Madrid", "Roma", "Tokio"], 0],
            ["¿Qué desfiles son característicos del Carnaval de Río?", ["Escuelas de samba", "Desfiles militares", "Carreras de caballos", "Desfiles de hielo"], 0],
            ["¿Qué elemento destaca durante el Carnaval?", ["Música y disfraces", "Nieve", "Silencio", "Trajes medievales europeos"], 0],
            ["¿El Carnaval brasileño es principalmente una celebración de qué?", ["Cultura y música", "Invierno", "Cosecha europea", "Año nuevo chino"], 0]
        ]
    },

    "Vestimenta": {
        titulo: "Vestimenta brasileña",
        subtitulo: "Ropa y expresiones culturales",
        descripcion: "La vestimenta tradicional y festiva de Brasil cambia según la región y la celebración.",
        dato: "En las celebraciones brasileñas son comunes los trajes coloridos y decorados.",
        preguntas: [
            ["¿Cómo suelen ser muchos trajes del Carnaval?", ["Coloridos y llamativos", "Completamente negros", "Solo blancos", "Uniformes militares"], 0],
            ["¿La vestimenta brasileña puede variar según qué aspecto?", ["La región", "La edad del planeta", "La estación lunar", "La longitud del río"], 0],
            ["¿Qué aparece frecuentemente en los trajes de Carnaval?", ["Adornos", "Armaduras medievales", "Abrigos de nieve", "Kimonos japoneses"], 0],
            ["¿La vestimenta forma parte de qué?", ["La identidad cultural", "La economía mundial", "La astronomía", "La geología"], 0],
            ["¿Qué característica puede tener la vestimenta festiva brasileña?", ["Colores vivos", "Solo gris", "Solo marrón", "Ausencia de decoración"], 0]
        ]
    },

    "Arte": {
        titulo: "Arte brasileño",
        subtitulo: "Arte, literatura y expresiones creativas",
        descripcion: "El arte brasileño refleja la diversidad cultural y las diferentes etapas históricas del país.",
        dato: "El modernismo brasileño tuvo una gran influencia en el arte y la literatura.",
        preguntas: [
            ["¿Qué movimiento tuvo importancia en el arte brasileño del siglo XX?", ["Modernismo", "Renacimiento italiano", "Impresionismo francés exclusivamente", "Barroco japonés"], 0],
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
            ["¿Qué representa el Cristo Redentor?", ["Un monumento religioso", "Un castillo medieval", "Una estación de tren", "Un puerto"], 0],
            ["¿Cuál es la capital de Brasil?", ["Brasilia", "Río de Janeiro", "São Paulo", "Salvador"], 0],
            ["¿Qué ciudad es una de las más grandes de Brasil?", ["São Paulo", "Quito", "Lima", "Bogotá"], 0],
            ["¿El Cristo Redentor está situado sobre qué montaña?", ["Corcovado", "Pan de Azúcar", "Everest", "Andes"], 0]
        ]
    },

    "Pueblos originarios": {
        titulo: "Pueblos originarios",
        subtitulo: "Las culturas indígenas de Brasil",
        descripcion: "Brasil posee una gran diversidad de pueblos indígenas con diferentes lenguas, tradiciones y formas de vida.",
        dato: "Existen numerosos pueblos indígenas en diferentes regiones de Brasil.",
        preguntas: [
            ["¿Quiénes habitaban Brasil antes de la llegada portuguesa?", ["Pueblos indígenas", "Romanos", "Vikingos", "Persas"], 0],
            ["¿Los pueblos indígenas poseen diferentes qué?", ["Lenguas y culturas", "Monedas europeas", "Castillos", "Imperios romanos"], 0],
            ["¿Qué región alberga numerosos pueblos indígenas?", ["Amazonía", "Sahara", "Alpes", "Siberia"], 0],
            ["¿Qué elemento forma parte de las culturas indígenas?", ["Tradiciones", "Solo tecnología moderna", "Ferrocarriles", "Fábricas"], 0],
            ["¿Por qué son importantes los pueblos indígenas?", ["Forman parte de la historia y diversidad cultural", "No tienen relación con Brasil", "Llegaron en el siglo XX", "Solo pertenecen a Europa"], 0]
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
            ["¿Qué producto tuvo gran importancia durante la colonización?", ["Azúcar", "Petróleo", "Acero", "Algodón industrial moderno"], 0],
            ["¿Qué ciudad fue importante durante la época colonial?", ["Salvador", "Londres", "París", "Berlín"], 0]
        ]
    },

    "Imperio de Brasil": {
        titulo: "Imperio de Brasil",
        subtitulo: "Brasil después de la independencia",
        descripcion: "Brasil fue un imperio durante gran parte del siglo XIX, con dos emperadores principales.",
        dato: "Pedro II fue el segundo y último emperador de Brasil.",
        preguntas: [
            ["¿Quién fue el primer emperador de Brasil?", ["Pedro I", "Pedro II", "Getúlio Vargas", "Juscelino Kubitschek"], 0],
            ["¿Quién fue el segundo emperador?", ["Pedro II", "Pedro I", "Tiradentes", "Deodoro"], 0],
            ["¿Durante qué siglo existió principalmente el Imperio de Brasil?", ["Siglo XIX", "Siglo XV", "Siglo XXI", "Siglo X"], 0],
            ["¿Quién fue el último emperador de Brasil?", ["Pedro II", "Pedro I", "Napoleón", "Simón Bolívar"], 0],
            ["¿Qué ocurrió con la monarquía brasileña en 1889?", ["Fue reemplazada por una república", "Se expandió", "Se trasladó a Portugal", "Se convirtió en colonia"], 0]
        ]
    },

    "Independencia": {
        titulo: "Independencia de Brasil",
        subtitulo: "El proceso de separación de Portugal",
        descripcion: "Brasil declaró su independencia de Portugal en 1822.",
        dato: "Pedro proclamó la independencia de Brasil el 7 de septiembre de 1822.",
        preguntas: [
            ["¿En qué año declaró Brasil su independencia?", ["1822", "1810", "1889", "1500"], 0],
            ["¿De qué país se independizó Brasil?", ["Portugal", "España", "Francia", "Inglaterra"], 0],
            ["¿Quién proclamó la independencia?", ["Pedro", "Pedro II", "Vargas", "Tiradentes"], 0],
            ["¿Qué fecha se celebra como Día de la Independencia?", ["7 de septiembre", "20 de julio", "12 de octubre", "1 de mayo"], 0],
            ["¿Qué ocurrió después de la independencia?", ["Brasil se convirtió en un imperio", "Brasil volvió a ser colonia", "Brasil se unió a España", "Brasil dejó de existir"], 0]
        ]
    },

    "Personajes históricos": {
        titulo: "Personajes históricos de Brasil",
        subtitulo: "Personas importantes de la historia brasileña",
        descripcion: "Brasil ha tenido numerosos personajes importantes en su historia política, social y cultural.",
        dato: "Pedro I tuvo un papel fundamental en la independencia brasileña.",
        preguntas: [
            ["¿Quién proclamó la independencia de Brasil?", ["Pedro I", "Pedro II", "Vargas", "Colón"], 0],
            ["¿Quién fue el segundo emperador?", ["Pedro II", "Pedro I", "Deodoro", "Bolívar"], 0],
            ["¿Quién fue un importante presidente brasileño del siglo XX?", ["Getúlio Vargas", "Napoleón", "San Martín", "Hernán Cortés"], 0],
            ["¿Qué personaje está relacionado con la independencia?", ["Pedro I", "Julio César", "Luis XIV", "George Washington"], 0],
            ["¿Qué emperador gobernó Brasil durante gran parte del siglo XIX?", ["Pedro II", "Pedro I", "Vargas", "Deodoro"], 0]
        ]
    },

    "Conflictos importantes": {
        titulo: "Conflictos importantes",
        subtitulo: "Conflictos que marcaron la historia de Brasil",
        descripcion: "Brasil participó en diferentes conflictos que influyeron en su historia política y territorial.",
        dato: "La Guerra de la Triple Alianza fue uno de los conflictos más importantes de Sudamérica durante el siglo XIX.",
        preguntas: [
            ["¿Qué guerra enfrentó a Paraguay contra una alianza formada por varios países?", ["Guerra de la Triple Alianza", "Guerra Fría", "Primera Guerra Mundial", "Guerra de Crimea"], 0],
            ["¿Qué país fue derrotado en la Guerra de la Triple Alianza?", ["Paraguay", "España", "Portugal", "Francia"], 0],
            ["¿En qué siglo ocurrió la Guerra de la Triple Alianza?", ["Siglo XIX", "Siglo XV", "Siglo XX", "Siglo XXI"], 0],
            ["¿Brasil participó en qué alianza durante ese conflicto?", ["Triple Alianza", "Triple Entente", "OTAN", "Pacto de Varsovia"], 0],
            ["¿Los conflictos históricos pueden afectar qué aspecto?", ["Territorio y política", "Solo la gastronomía", "Solo la música", "Solo el clima"], 0]
        ]
    },

    "Brasil contemporáneo": {
        titulo: "Brasil contemporáneo",
        subtitulo: "Brasil en la época moderna",
        descripcion: "Brasil es actualmente una república federal y uno de los países más grandes y poblados del mundo.",
        dato: "Brasilia es la capital de Brasil desde 1960.",
        preguntas: [
            ["¿Cuál es la capital actual de Brasil?", ["Brasilia", "Río de Janeiro", "São Paulo", "Salvador"], 0],
            ["¿Qué forma de gobierno tiene Brasil actualmente?", ["República federal", "Monarquía absoluta", "Imperio", "Colonia"], 0],
            ["¿Desde qué año Brasil tiene como capital a Brasilia?", ["1960", "1822", "1889", "1500"], 0],
            ["¿Brasil pertenece a qué continente?", ["América del Sur", "Europa", "Asia", "África"], 0],
            ["¿Cuál es una característica del Brasil actual?", ["Gran diversidad cultural", "Ausencia de ciudades", "Monarquía", "Ser una colonia"], 0]
        ]
    }
};


/* =====================================================
   30 PREGUNTAS DEL RETO FINAL
   ===================================================== */

const preguntasRetoFinal = [
    {
        pregunta: "¿Cuál es el plato nacional más representativo de Brasil?",
        opciones: ["Feijoada", "Ceviche", "Asado", "Empanadas"],
        correcta: 0
    },
    {
        pregunta: "¿De qué región de Brasil es originario el açaí?",
        opciones: ["Sur", "Nordeste", "Amazonas", "Centro-Oeste"],
        correcta: 2
    },
    {
        pregunta: "¿Qué bebida típica brasileña se elabora con caña de azúcar?",
        opciones: ["Tequila", "Cachaça", "Pisco", "Ron"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál de estos platos es típico de Bahía y tiene fuerte influencia africana?",
        opciones: ["Churrasco", "Moqueca", "Pão de queijo", "Brigadeiro"],
        correcta: 1
    },
    {
        pregunta: "El pão de queijo es originario principalmente de qué estado?",
        opciones: ["São Paulo", "Minas Gerais", "Rio de Janeiro", "Bahia"],
        correcta: 1
    },
    {
        pregunta: "¿Qué ritmo musical brasileño nació en las favelas de Río de Janeiro?",
        opciones: ["Samba", "Tango", "Cumbia", "Merengue"],
        correcta: 0
    },
    {
        pregunta: "¿Quién es considerado el rey del bossa nova?",
        opciones: ["Pelé", "Tom Jobim", "Ayrton Senna", "Oscar Niemeyer"],
        correcta: 1
    },
    {
        pregunta: "El Carnaval de Río de Janeiro es famoso por sus desfiles de:",
        opciones: ["Comparsas de tango", "Escuelas de samba", "Bandas de mariachi", "Grupos de capoeira"],
        correcta: 1
    },
    {
        pregunta: "¿En qué mes se celebra tradicionalmente el Carnaval en Brasil?",
        opciones: ["Diciembre", "Febrero o marzo", "Julio", "Septiembre"],
        correcta: 1
    },
    {
        pregunta: "La capoeira es una mezcla de lucha, danza y música que surgió entre:",
        opciones: ["Inmigrantes italianos", "Esclavos africanos", "Indígenas amazónicos", "Colonos portugueses"],
        correcta: 1
    },
    {
        pregunta: "¿Qué instrumento de percusión es emblemático de la samba?",
        opciones: ["Guitarra", "Surdo", "Violín", "Flauta"],
        correcta: 1
    },
    {
        pregunta: "El traje típico de las baianas (de Bahía) se caracteriza por:",
        opciones: ["Sombrero de charro", "Faldas amplias y turbantes", "Poncho de lana", "Traje de torero"],
        correcta: 1
    },
    {
        pregunta: "¿Quién fue el arquitecto brasileño más famoso del siglo XX, creador de Brasília?",
        opciones: ["Lúcio Costa", "Oscar Niemeyer", "Roberto Burle Marx", "Paulo Mendes da Rocha"],
        correcta: 1
    },
    {
        pregunta: "El Cristo Redentor de Río de Janeiro fue inaugurado en:",
        opciones: ["1900", "1931", "1960", "1985"],
        correcta: 1
    },
    {
        pregunta: "¿Qué estilo artístico caracteriza muchas de las obras de Oscar Niemeyer?",
        opciones: ["Gótico", "Modernismo con curvas", "Barroco colonial", "Art Nouveau"],
        correcta: 1
    },
    {
        pregunta: "¿Cómo se llamaban los pueblos indígenas que habitaban la costa brasileña cuando llegaron los portugueses?",
        opciones: ["Aztecas", "Tupí-guaraní", "Incas", "Mapuches"],
        correcta: 1
    },
    {
        pregunta: "¿En qué año llegó Pedro Álvares Cabral a las costas de Brasil?",
        opciones: ["1492", "1500", "1521", "1530"],
        correcta: 1
    },
    {
        pregunta: "El primer nombre que los portugueses dieron a la tierra que hoy es Brasil fue:",
        opciones: ["Terra de Vera Cruz", "Nueva Lusitania", "América Portuguesa", "Indias Occidentales"],
        correcta: 0
    },
    {
        pregunta: "¿Qué producto natural dio origen al nombre “Brasil”?",
        opciones: ["El café", "El palo-brasil (madera roja)", "El oro", "El azúcar"],
        correcta: 1
    },
    {
        pregunta: "Durante la colonia, la principal actividad económica del Nordeste brasileño fue:",
        opciones: ["La minería de plata", "El cultivo de caña de azúcar", "La ganadería", "El cultivo de trigo"],
        correcta: 1
    },
    {
        pregunta: "¿Quién proclamó la Independencia de Brasil el 7 de septiembre de 1822?",
        opciones: ["Dom Pedro II", "Dom Pedro I", "Tiradentes", "Getúlio Vargas"],
        correcta: 1
    },
    {
        pregunta: "La frase célebre de la Independencia de Brasil fue:",
        opciones: ["¡Libertad o muerte!", "¡Independencia o Muerte!", "¡Viva la República!", "¡Brasil libre!"],
        correcta: 1
    },
    {
        pregunta: "¿Quién fue el último emperador de Brasil?",
        opciones: ["Dom Pedro I", "Dom Pedro II", "Dom João VI", "Deodoro da Fonseca"],
        correcta: 1
    },
    {
        pregunta: "La Ley Áurea, que abolió la esclavitud en Brasil, fue firmada en 1888 por:",
        opciones: ["Dom Pedro II", "La Princesa Isabel", "Getúlio Vargas", "José Bonifácio"],
        correcta: 1
    },
    {
        pregunta: "Tiradentes fue el líder más conocido de qué movimiento independentista?",
        opciones: ["Inconfidência Mineira", "Revolución Farroupilha", "Cabanagem", "Balaiada"],
        correcta: 0
    },
    {
        pregunta: "¿En qué guerra luchó Brasil junto a Argentina y Uruguay contra Paraguay (1864-1870)?",
        opciones: ["Guerra del Pacífico", "Guerra de la Triple Alianza", "Guerra de los Farrapos", "Guerra del Chaco"],
        correcta: 1
    },
    {
        pregunta: "Brasília se convirtió en la capital de Brasil en el año:",
        opciones: ["1822", "1889", "1960", "1985"],
        correcta: 2
    },
    {
        pregunta: "El período de dictadura militar en Brasil se extendió aproximadamente entre:",
        opciones: ["1930-1945", "1964-1985", "1985-2002", "1945-1964"],
        correcta: 1
    },
    {
        pregunta: "¿Quién fue el presidente brasileño que impulsó la construcción de Brasília?",
        opciones: ["Getúlio Vargas", "Juscelino Kubitschek", "Fernando Henrique Cardoso", "Lula da Silva"],
        correcta: 1
    },
    {
        pregunta: "Brasil es el país más grande de América del Sur y el único de lengua oficial:",
        opciones: ["Española", "Portuguesa", "Francesa", "Inglesa"],
        correcta: 1
    }
];


/* =====================================================
   ESTADO DEL JUEGO
   ===================================================== */

let estado = {
    puntos: 0,
    vidas: 5,
    correctas: 0,
    retos: 0,
    categoriasCompletadas: [],
    categoriaActual: "Gastronomía",
    preguntaActual: 0,
    respondida: false,
    mejorRetoFinal: {
        correctas: 0,
        puntos: 0,
        porcentaje: 0
    }
};


/* =====================================================
   ELEMENTOS HTML
   ===================================================== */

const puntosHTML = document.getElementById("puntos");
const corazonesHTML = document.getElementById("corazones");
const numeroVidasHTML = document.getElementById("numeroVidas");

const preguntaHTML = document.getElementById("pregunta");
const opcionesHTML = document.getElementById("opciones");

const contadorPreguntaHTML = document.getElementById("contadorPregunta");
const mensajeRespuestaHTML = document.getElementById("mensajeRespuesta");
const botonSiguiente = document.getElementById("botonSiguiente");

const tituloCategoria = document.getElementById("tituloCategoria");
const subtituloCategoria = document.getElementById("subtituloCategoria");
const descripcionCategoria = document.getElementById("descripcionCategoria");
const datoInteresante = document.getElementById("datoInteresante");

const porcentajeHTML = document.getElementById("porcentaje");
const retosCompletadosHTML = document.getElementById("retosCompletados");
const correctasHTML = document.getElementById("correctas");
const textoCategorias = document.getElementById("textoCategorias");
const textoExplora = document.getElementById("textoExplora");

const modalRecuperacion = document.getElementById("modalRecuperacion");
const modalRetoFinal = document.getElementById("modalRetoFinal");


/* =====================================================
   UTILIDAD: MEZCLAR ARRAY (Fisher-Yates)
   ===================================================== */

function mezclarArray(array) {
    const copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}


/* =====================================================
   CARGAR PROGRESO
   ===================================================== */

function cargarProgreso() {
    const guardado = localStorage.getItem(CLAVE);

    if (guardado) {
        try {
            const datos = JSON.parse(guardado);
            estado = { ...estado, ...datos };
        } catch (error) {
            console.log("No se pudo cargar el progreso.");
        }
    }

    estado.vidas = Math.max(0, estado.vidas);
    actualizarTodo();
    actualizarBotonesCategorias();
}


/* =====================================================
   GUARDAR PROGRESO
   ===================================================== */

function guardar() {
    localStorage.setItem(CLAVE, JSON.stringify(estado));
}


/* =====================================================
   CORAZONES
   ===================================================== */

function actualizarVidas() {
    corazonesHTML.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        const corazon = document.createElement("span");
        corazon.className = "corazon";
        corazon.textContent = i < estado.vidas ? "❤️" : "♡";
        corazonesHTML.appendChild(corazon);
    }

    numeroVidasHTML.textContent = estado.vidas;
}


/* =====================================================
   ACTUALIZAR PANEL DERECHO
   ===================================================== */

function actualizarPanel() {
    puntosHTML.textContent = estado.puntos;
    retosCompletadosHTML.textContent = estado.retos;
    correctasHTML.textContent = estado.correctas;

    const porcentaje = Math.round(
        (estado.categoriasCompletadas.length / TOTAL_CATEGORIAS) * 100
    );

    porcentajeHTML.textContent = porcentaje + "%";

    textoCategorias.textContent =
        `Has completado ${estado.categoriasCompletadas.length} de ${TOTAL_CATEGORIAS} categorías.`;

    const estadoProgresoEl = document.getElementById("estadoProgreso");
    if (estadoProgresoEl) {
        estadoProgresoEl.textContent =
            porcentaje >= 100 ? "Aventura completada" : "Aventura en progreso";
    }
}


/* =====================================================
   ACTUALIZAR TODO
   ===================================================== */

function actualizarTodo() {
    actualizarVidas();
    actualizarPanel();
    actualizarInformacion();
}


/* =====================================================
   INFORMACIÓN DE CATEGORÍA
   ===================================================== */

function actualizarInformacion() {
    const categoria = categorias[estado.categoriaActual];
    if (!categoria) return;

    tituloCategoria.textContent = categoria.titulo;
    subtituloCategoria.textContent = categoria.subtitulo;
    descripcionCategoria.textContent = categoria.descripcion;
    datoInteresante.textContent = categoria.dato;

    if (textoExplora) {
        textoExplora.textContent =
            `Descubre la historia y cultura de Brasil mediante ${estado.categoriaActual.toLowerCase()}.`;
    }
}


/* =====================================================
   CARGAR PREGUNTA  (con opciones mezcladas)
   ===================================================== */

let indiceCorrectoActual = 0;

function cargarPregunta() {
    const categoria = categorias[estado.categoriaActual];
    if (!categoria) return;

    const pregunta = categoria.preguntas[estado.preguntaActual];
    if (!pregunta) return;

    estado.respondida = false;

    preguntaHTML.textContent = pregunta[0];
    opcionesHTML.innerHTML = "";
    mensajeRespuestaHTML.textContent = "";
    mensajeRespuestaHTML.style.color = "";
    botonSiguiente.disabled = true;
    botonSiguiente.textContent = "Siguiente →";

    contadorPreguntaHTML.textContent =
        `${estado.preguntaActual + 1} / ${PREGUNTAS_POR_CATEGORIA}`;

    // Mezclar las opciones
    const opcionesOriginales = pregunta[1];
    const indiceOriginalCorrecto = pregunta[2];
    const opcionesMezcladas = mezclarArray(opcionesOriginales);

    // Guardar el nuevo índice de la respuesta correcta
    indiceCorrectoActual = opcionesMezcladas.indexOf(opcionesOriginales[indiceOriginalCorrecto]);

    opcionesMezcladas.forEach((opcion, indice) => {
        const boton = document.createElement("button");
        boton.className = "opcion";
        boton.textContent = opcion;
        boton.addEventListener("click", () => responder(indice));
        opcionesHTML.appendChild(boton);
    });
}


/* =====================================================
   RESPONDER
   ===================================================== */

function responder(indice) {
    if (estado.respondida) return;

    if (estado.vidas <= 0) {
        abrirRecuperacion();
        return;
    }

    estado.respondida = true;

    const botones = document.querySelectorAll(".opcion");

    botones.forEach((boton, i) => {
        boton.disabled = true;
        if (i === indiceCorrectoActual) boton.classList.add("correcta");
        if (i === indice && i !== indiceCorrectoActual) boton.classList.add("incorrecta");
    });

    if (indice === indiceCorrectoActual) {
        estado.puntos += 10;
        estado.correctas++;
        estado.retos++;
        mensajeRespuestaHTML.textContent = "✅ ¡Respuesta correcta! +10 puntos";
        mensajeRespuestaHTML.style.color = "#2d8a50";
    } else {
        estado.vidas--;
        estado.retos++;
        mensajeRespuestaHTML.textContent = "❌ Respuesta incorrecta. Perdiste 1 vida.";
        mensajeRespuestaHTML.style.color = "#c84450";
    }

    actualizarTodo();
    guardar();
    botonSiguiente.disabled = false;

    botonSiguiente.textContent =
        estado.vidas <= 0 ? "Recuperar vida ❤️" : "Siguiente →";
}


/* =====================================================
   SIGUIENTE PREGUNTA / SIGUIENTE CATEGORÍA
   ===================================================== */

function siguientePregunta() {
    // Si estamos en la pantalla de "Categoría completada", pasar a la siguiente categoría
    if (botonSiguiente.dataset.accion === "siguiente-categoria") {
        irASiguienteCategoria();
        return;
    }

    if (!estado.respondida) return;

    if (estado.vidas <= 0) {
        abrirRecuperacion();
        return;
    }

    const categoria = categorias[estado.categoriaActual];
    estado.preguntaActual++;

    if (estado.preguntaActual >= categoria.preguntas.length) {
        completarCategoria();
        return;
    }

    cargarPregunta();
}

botonSiguiente.addEventListener("click", siguientePregunta);


/* =====================================================
   COMPLETAR CATEGORÍA
   ===================================================== */

function completarCategoria() {
    if (!estado.categoriasCompletadas.includes(estado.categoriaActual)) {
        estado.categoriasCompletadas.push(estado.categoriaActual);
    }

    guardar();
    actualizarPanel();
    mostrarCategoriaCompletada();
}


/* =====================================================
   MOSTRAR CATEGORÍA COMPLETADA
   (ahora el botón Siguiente lleva a la siguiente subcategoría)
   ===================================================== */

function mostrarCategoriaCompletada() {
    preguntaHTML.textContent = "🎉 ¡Categoría completada!";

    opcionesHTML.innerHTML = `
        <div class="categoria-final">
            Has completado todas las preguntas
            de <strong>${estado.categoriaActual}</strong>.
            <br><br>
            ¡Excelente trabajo!
        </div>
    `;

    contadorPreguntaHTML.textContent = "5 / 5";
    mensajeRespuestaHTML.textContent = "Pulsa Siguiente para continuar con la siguiente categoría.";
    mensajeRespuestaHTML.style.color = "#2d8a50";

    // Activamos el botón Siguiente para ir a la siguiente categoría
    botonSiguiente.disabled = false;
    botonSiguiente.textContent = "Siguiente categoría →";
    botonSiguiente.dataset.accion = "siguiente-categoria";

    actualizarPanel();
    actualizarBotonesCategorias();
    comprobarFinal();
}


/* =====================================================
   IR A LA SIGUIENTE CATEGORÍA
   ===================================================== */

function irASiguienteCategoria() {
    // Quitar la marca de acción especial
    delete botonSiguiente.dataset.accion;

    const indiceActual = ORDEN_CATEGORIAS.indexOf(estado.categoriaActual);
    let siguienteIndice = indiceActual + 1;

    // Si ya es la última, no avanzamos (el reto final se abre solo)
    if (siguienteIndice >= ORDEN_CATEGORIAS.length) {
        mensajeRespuestaHTML.textContent = "¡Has terminado todas las categorías! Completa el Reto Final.";
        botonSiguiente.disabled = true;
        return;
    }

    const siguienteNombre = ORDEN_CATEGORIAS[siguienteIndice];
    cambiarCategoria(siguienteNombre);
}


/* =====================================================
   CAMBIAR CATEGORÍA
   ===================================================== */

document.querySelectorAll(".categoria").forEach(boton => {
    boton.addEventListener("click", () => {
        const nuevaCategoria = boton.dataset.categoria;
        cambiarCategoria(nuevaCategoria);
    });
});

function cambiarCategoria(nombre) {
    if (!categorias[nombre]) return;

    // Limpiar cualquier acción especial del botón
    delete botonSiguiente.dataset.accion;

    estado.categoriaActual = nombre;
    estado.preguntaActual = 0;
    estado.respondida = false;

    document.querySelectorAll(".categoria").forEach(boton => {
        boton.classList.remove("active");
        if (boton.dataset.categoria === nombre) {
            boton.classList.add("active");
        }
    });

    actualizarInformacion();
    cargarPregunta();
}


/* =====================================================
   CATEGORÍAS COMPLETADAS (chulitos)
   ===================================================== */

function actualizarBotonesCategorias() {
    document.querySelectorAll(".categoria").forEach(boton => {
        const nombre = boton.dataset.categoria;
        if (estado.categoriasCompletadas.includes(nombre)) {
            boton.innerHTML = "✅ " + nombre;
        } else {
            boton.innerHTML = nombre;
        }
    });
}


/* =====================================================
   RECUPERACIÓN DE VIDA
   ===================================================== */

const preguntaRecuperacion = document.getElementById("preguntaRecuperacion");
const opcionesRecuperacion = document.getElementById("opcionesRecuperacion");
const mensajeRecuperacion = document.getElementById("mensajeRecuperacion");
const btnIniciarRecuperacion = document.getElementById("btnIniciarRecuperacion");

let recuperacionRespondida = false;

function abrirRecuperacion() {
    modalRecuperacion.classList.add("mostrar");
    recuperacionRespondida = false;
    mensajeRecuperacion.textContent = "";
    btnIniciarRecuperacion.style.display = "none";
    cargarPreguntaRecuperacion();
}

function cargarPreguntaRecuperacion() {
    const preguntas = [
        {
            pregunta: "¿Cuál es la capital de Brasil?",
            opciones: ["Brasilia", "Río de Janeiro", "São Paulo", "Salvador"],
            correcta: 0
        },
        {
            pregunta: "¿En qué año se independizó Brasil?",
            opciones: ["1822", "1810", "1889", "1500"],
            correcta: 0
        },
        {
            pregunta: "¿Qué idioma es oficial en Brasil?",
            opciones: ["Portugués", "Español", "Francés", "Inglés"],
            correcta: 0
        }
    ];

    const pregunta = preguntas[Math.floor(Math.random() * preguntas.length)];

    // Mezclar opciones de recuperación
    const opcionesMezcladas = mezclarArray(pregunta.opciones);
    const indiceCorrecto = opcionesMezcladas.indexOf(pregunta.opciones[pregunta.correcta]);

    preguntaRecuperacion.textContent = pregunta.pregunta;
    opcionesRecuperacion.innerHTML = "";

    opcionesMezcladas.forEach((opcion, indice) => {
        const boton = document.createElement("button");
        boton.className = "recuperacion-opcion";
        boton.textContent = opcion;

        boton.addEventListener("click", () => {
            if (recuperacionRespondida) return;
            recuperacionRespondida = true;

            if (indice === indiceCorrecto) {
                mensajeRecuperacion.textContent = "✅ ¡Correcto! Has recuperado una vida.";
                mensajeRecuperacion.style.color = "#2d8a50";
                btnIniciarRecuperacion.style.display = "inline-block";
            } else {
                mensajeRecuperacion.textContent = "❌ No es correcto. Inténtalo nuevamente.";
                mensajeRecuperacion.style.color = "#c84450";
                recuperacionRespondida = false;
            }
        });

        opcionesRecuperacion.appendChild(boton);
    });
}

btnIniciarRecuperacion.addEventListener("click", () => {
    estado.vidas = 1;
    guardar();
    actualizarVidas();
    modalRecuperacion.classList.remove("mostrar");
    botonSiguiente.textContent = "Siguiente →";
    botonSiguiente.disabled = false;
    cargarPregunta();
});


/* =====================================================
   RETO FINAL
   ===================================================== */

let estadoFinal = {
    preguntaActual: 0,
    puntos: 0,
    correctas: 0,
    respondida: false
};

let indiceCorrectoFinal = 0;

function comprobarFinal() {
    if (estado.categoriasCompletadas.length === TOTAL_CATEGORIAS) {
        modalRetoFinal.classList.add("mostrar");
    }
}

document.getElementById("btnRetoFinal").addEventListener("click", () => {
    modalRetoFinal.classList.remove("mostrar");
    iniciarRetoFinal();
});

function iniciarRetoFinal() {
    estadoFinal = {
        preguntaActual: 0,
        puntos: 0,
        correctas: 0,
        respondida: false
    };

    modalRetoFinal.innerHTML = `
        <div class="modal-contenido reto-final-estilo">
            <button class="cerrar-modal" id="cerrarRetoFinal">×</button>

            <div class="codigo-pais">BR</div>

            <h2 class="titulo-reto">Reto Final de Brasil</h2>

            <p class="descripcion-reto">
                ¡Has completado las 14 categorías! Ahora demuestra todo lo que aprendiste sobre la historia y cultura de Brasil.
            </p>

            <div class="badge-pregunta">
                Pregunta <span id="numPreguntaFinal">1</span> / 30
            </div>

            <div class="caja-pregunta">
                <h3 id="preguntaFinal">Cargando pregunta...</h3>
            </div>

            <div id="opcionesFinal" class="grid-opciones"></div>

            <div class="stats-reto">
                <div class="stat-card">
                    <div class="stat-icon">⭐</div>
                    <strong id="puntosFinal">0</strong>
                    <span>Puntos</span>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">🎯</div>
                    <strong id="correctasFinal">0</strong>
                    <span>Correctas</span>
                </div>
            </div>

            <div class="footer-reto">
                <div id="mensajeFinal" class="mensaje-final"></div>
                <button id="btnSiguienteFinal" class="btn-siguiente" disabled>
                    Siguiente →
                </button>
            </div>
        </div>
    `;

    modalRetoFinal.classList.add("mostrar");

    document.getElementById("cerrarRetoFinal").addEventListener("click", () => {
        modalRetoFinal.classList.remove("mostrar");
    });

    document.getElementById("btnSiguienteFinal").addEventListener("click", siguientePreguntaFinal);

    mostrarPreguntaFinal();
}

function mostrarPreguntaFinal() {
    const p = preguntasRetoFinal[estadoFinal.preguntaActual];

    document.getElementById("numPreguntaFinal").textContent = estadoFinal.preguntaActual + 1;
    document.getElementById("preguntaFinal").textContent = p.pregunta;
    document.getElementById("mensajeFinal").textContent = "";
    document.getElementById("btnSiguienteFinal").disabled = true;
    document.getElementById("btnSiguienteFinal").textContent = "Siguiente →";

    const contenedor = document.getElementById("opcionesFinal");
    contenedor.innerHTML = "";

    // Mezclar opciones del reto final
    const opcionesMezcladas = mezclarArray(p.opciones);
    indiceCorrectoFinal = opcionesMezcladas.indexOf(p.opciones[p.correcta]);

    opcionesMezcladas.forEach((opcion, i) => {
        const btn = document.createElement("button");
        btn.className = "opcion-reto";
        btn.textContent = opcion;
        btn.addEventListener("click", () => responderFinal(i));
        contenedor.appendChild(btn);
    });

    estadoFinal.respondida = false;
}

function responderFinal(indice) {
    if (estadoFinal.respondida) return;
    estadoFinal.respondida = true;

    const botones = document.querySelectorAll(".opcion-reto");

    botones.forEach((btn, i) => {
        btn.disabled = true;
        if (i === indiceCorrectoFinal) btn.classList.add("correcta");
        if (i === indice && i !== indiceCorrectoFinal) btn.classList.add("incorrecta");
    });

    if (indice === indiceCorrectoFinal) {
        estadoFinal.puntos += 10;
        estadoFinal.correctas++;
        document.getElementById("mensajeFinal").textContent = "✅ ¡Correcto!";
        document.getElementById("mensajeFinal").style.color = "#2d8a50";
    } else {
        document.getElementById("mensajeFinal").textContent = "❌ Incorrecto";
        document.getElementById("mensajeFinal").style.color = "#c84450";
    }

    document.getElementById("puntosFinal").textContent = estadoFinal.puntos;
    document.getElementById("correctasFinal").textContent = estadoFinal.correctas;
    document.getElementById("btnSiguienteFinal").disabled = false;

    if (estadoFinal.preguntaActual === 29) {
        document.getElementById("btnSiguienteFinal").textContent = "Ver resultados 🏆";
    }
}

function siguientePreguntaFinal() {
    if (!estadoFinal.respondida) return;

    estadoFinal.preguntaActual++;

    if (estadoFinal.preguntaActual >= 30) {
        mostrarResultadosFinal();
        return;
    }

    mostrarPreguntaFinal();
}

function mostrarResultadosFinal() {
    const porcentaje = Math.round((estadoFinal.correctas / 30) * 100);

    // Guardar el mejor resultado del reto final
    if (porcentaje > (estado.mejorRetoFinal?.porcentaje || 0)) {
        estado.mejorRetoFinal = {
            correctas: estadoFinal.correctas,
            puntos: estadoFinal.puntos,
            porcentaje: porcentaje
        };
    }

    // Sumar puntos del reto final al total (se mantienen)
    estado.puntos += estadoFinal.puntos;
    estado.correctas += estadoFinal.correctas;

    let mensaje = "";
    if (porcentaje >= 90) mensaje = "¡Increíble! Eres un experto en Brasil 🇧🇷";
    else if (porcentaje >= 70) mensaje = "¡Muy bien! Conoces muy bien la historia y cultura de Brasil.";
    else if (porcentaje >= 50) mensaje = "Buen trabajo. Sigue explorando para mejorar.";
    else mensaje = "Sigue practicando. ¡La próxima vez lo harás mejor!";

    modalRetoFinal.innerHTML = `
        <div class="modal-contenido resultados-final">
            <div class="codigo-pais">BR</div>
            <h2 class="titulo-reto">¡Reto Final completado!</h2>
            
            <div class="resultado-numeros">
                <div class="stat-card">
                    <strong>${estadoFinal.correctas}</strong>
                    <span>Correctas</span>
                </div>
                <div class="stat-card">
                    <strong>${estadoFinal.puntos}</strong>
                    <span>Puntos</span>
                </div>
                <div class="stat-card">
                    <strong>${porcentaje}%</strong>
                    <span>Aciertos</span>
                </div>
            </div>

            <p class="mensaje-resultado">${mensaje}</p>

            <p style="margin: 12px 0; font-size: 0.95rem; color: #555;">
                Se ha guardado tu resultado. Las categorías se reiniciarán a 0 % para que puedas volver a practicar.
            </p>

            <button id="btnCerrarResultados" class="btn-siguiente">
                Volver a empezar →
            </button>
        </div>
    `;

    // ===== ESTE ES EL REINICIO QUE NECESITAS =====
    document.getElementById("btnCerrarResultados").addEventListener("click", () => {
        // Se mantienen: puntos, correctas, retos y el mejor resultado del reto
        // Se reinician solo las categorías
        estado.categoriasCompletadas = [];
        estado.categoriaActual = "Gastronomía";
        estado.preguntaActual = 0;
        estado.respondida = false;

        guardar();                       // Guarda el estado con categorías en 0
        actualizarBotonesCategorias();   // Quita todos los ✅
        actualizarPanel();               // Porcentaje vuelve a 0%
        actualizarVidas();
        actualizarInformacion();
        cargarPregunta();

        // Marca Gastronomía como activa
        document.querySelectorAll(".categoria").forEach(boton => {
            boton.classList.remove("active");
            if (boton.dataset.categoria === "Gastronomía") {
                boton.classList.add("active");
            }
        });

        modalRetoFinal.classList.remove("mostrar");
    });
}

/* =====================================================
   INICIO
   ===================================================== */

cargarProgreso();
cargarPregunta();