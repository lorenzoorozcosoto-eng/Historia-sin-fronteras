/* =========================================================
   HISTORIA SIN FRONTERAS
   SISTEMA COMPLETO DE NIVELES
========================================================= */


/* =========================================================
   CONFIGURACIÓN
========================================================= */

const VIDAS_INICIALES = 10;
const PREGUNTAS_POR_NIVEL = 20;

let nivelActual = 1;
let vidas = VIDAS_INICIALES;
let preguntaActual = 0;
let preguntasNivel = [];
let respuestasCorrectas = 0;


/* =========================================================
   MEZCLAR ELEMENTOS
========================================================= */

function mezclar(array) {
    return [...array].sort(() => Math.random() - 0.5);
}


/* =========================================================
   BANCO DE PREGUNTAS
========================================================= */

const bancoPreguntas = {

    /* =====================================================
       NIVEL 1
    ===================================================== */

    1: [

        {
            pais: "🇨🇴 Colombia",
            categoria: "Historia",
            pregunta: "¿En qué año se inició el proceso de independencia de Colombia?",
            opciones: ["1810", "1821", "1808", "1830"],
            correcta: "1810"
        },

        {
            pais: "🇲🇽 México",
            categoria: "Historia",
            pregunta: "¿Cómo se conoce el movimiento iniciado en México en 1810 contra el dominio español?",
            opciones: [
                "Guerra de Independencia",
                "Revolución Mexicana",
                "Guerra de Reforma",
                "Movimiento Liberal"
            ],
            correcta: "Guerra de Independencia"
        },

        {
            pais: "🇵🇪 Perú",
            categoria: "Cultura",
            pregunta: "¿Cuál de estos lugares es uno de los principales símbolos históricos del Perú?",
            opciones: [
                "Machu Picchu",
                "Taj Mahal",
                "Coliseo Romano",
                "Torre Eiffel"
            ],
            correcta: "Machu Picchu"
        },

        {
            pais: "🇪🇬 Egipto",
            categoria: "Historia",
            pregunta: "¿Qué río fue fundamental para el desarrollo del antiguo Egipto?",
            opciones: [
                "Nilo",
                "Amazonas",
                "Danubio",
                "Yangtsé"
            ],
            correcta: "Nilo"
        },

        {
            pais: "🇬🇷 Grecia",
            categoria: "Historia",
            pregunta: "¿Cuál fue una de las principales ciudades-estado de la antigua Grecia?",
            opciones: [
                "Atenas",
                "Roma",
                "París",
                "Londres"
            ],
            correcta: "Atenas"
        },

        {
            pais: "🇮🇹 Italia",
            categoria: "Historia",
            pregunta: "¿Qué antigua ciudad italiana quedó sepultada por la erupción del Vesubio?",
            opciones: [
                "Pompeya",
                "Venecia",
                "Milán",
                "Turín"
            ],
            correcta: "Pompeya"
        },

        {
            pais: "🇫🇷 Francia",
            categoria: "Historia",
            pregunta: "¿En qué país ocurrió la Revolución Francesa?",
            opciones: [
                "Francia",
                "España",
                "Italia",
                "Portugal"
            ],
            correcta: "Francia"
        },

        {
            pais: "🇯🇵 Japón",
            categoria: "Cultura",
            pregunta: "¿Cuál de estas tradiciones pertenece a la cultura japonesa?",
            opciones: [
                "Ceremonia del té",
                "Tango",
                "Flamenco",
                "Carnaval de Río"
            ],
            correcta: "Ceremonia del té"
        },

        {
            pais: "🇨🇳 China",
            categoria: "Historia",
            pregunta: "¿Cuál es una de las construcciones históricas más conocidas de China?",
            opciones: [
                "Gran Muralla China",
                "Torre Eiffel",
                "Machu Picchu",
                "Coliseo Romano"
            ],
            correcta: "Gran Muralla China"
        },

        {
            pais: "🇮🇳 India",
            categoria: "Cultura",
            pregunta: "¿Cuál de estos monumentos famosos se encuentra en India?",
            opciones: [
                "Taj Mahal",
                "Big Ben",
                "Partenón",
                "Machu Picchu"
            ],
            correcta: "Taj Mahal"
        },

        {
            pais: "🇪🇸 España",
            categoria: "Cultura",
            pregunta: "¿Qué expresión cultural es tradicional de España?",
            opciones: [
                "Flamenco",
                "Tango",
                "Cumbia",
                "Samba"
            ],
            correcta: "Flamenco"
        },

        {
            pais: "🇧🇷 Brasil",
            categoria: "Cultura",
            pregunta: "¿Qué celebración brasileña es famosa por sus desfiles y música?",
            opciones: [
                "Carnaval",
                "Oktoberfest",
                "Hanami",
                "Día de Muertos"
            ],
            correcta: "Carnaval"
        },

        {
            pais: "🇦🇷 Argentina",
            categoria: "Cultura",
            pregunta: "¿Qué baile es especialmente representativo de Argentina?",
            opciones: [
                "Tango",
                "Flamenco",
                "Cumbia",
                "Samba"
            ],
            correcta: "Tango"
        },

        {
            pais: "🇺🇸 Estados Unidos",
            categoria: "Historia",
            pregunta: "¿En qué año se declaró la independencia de Estados Unidos?",
            opciones: [
                "1776",
                "1810",
                "1492",
                "1789"
            ],
            correcta: "1776"
        },

        {
            pais: "🇨🇦 Canadá",
            categoria: "Geografía",
            pregunta: "¿Cuál es la capital de Canadá?",
            opciones: [
                "Ottawa",
                "Toronto",
                "Vancouver",
                "Montreal"
            ],
            correcta: "Ottawa"
        },

        {
            pais: "🇦🇺 Australia",
            categoria: "Geografía",
            pregunta: "¿Cuál es la capital de Australia?",
            opciones: [
                "Canberra",
                "Sídney",
                "Melbourne",
                "Perth"
            ],
            correcta: "Canberra"
        },

        {
            pais: "🇨🇴 Colombia",
            categoria: "Cultura",
            pregunta: "¿Cuál de estos ritmos es representativo de Colombia?",
            opciones: [
                "Cumbia",
                "Tango",
                "Flamenco",
                "Samba"
            ],
            correcta: "Cumbia"
        },

        {
            pais: "🇲🇽 México",
            categoria: "Cultura",
            pregunta: "¿Qué celebración mexicana honra la memoria de las personas fallecidas?",
            opciones: [
                "Día de Muertos",
                "Carnaval",
                "Hanami",
                "Año Nuevo Lunar"
            ],
            correcta: "Día de Muertos"
        },

        {
            pais: "🇵🇪 Perú",
            categoria: "Historia",
            pregunta: "¿Qué pueblo desarrolló un gran imperio en los Andes antes de la llegada de los españoles?",
            opciones: [
                "Los incas",
                "Los romanos",
                "Los vikingos",
                "Los egipcios"
            ],
            correcta: "Los incas"
        },

        {
            pais: "🇬🇷 Grecia",
            categoria: "Cultura",
            pregunta: "¿En qué país tienen su origen los antiguos Juegos Olímpicos?",
            opciones: [
                "Grecia",
                "Italia",
                "Francia",
                "España"
            ],
            correcta: "Grecia"
        }

    ],


    /* =====================================================
       NIVEL 2
    ===================================================== */

    2: [

        {
            pais: "🇨🇴 Colombia",
            categoria: "Historia",
            pregunta: "¿Qué documento estuvo relacionado con la declaración de independencia de Colombia?",
            opciones: [
                "Acta de Independencia",
                "Carta Magna",
                "Constitución de Cádiz",
                "Tratado de Versalles"
            ],
            correcta: "Acta de Independencia"
        },

        {
            pais: "🇲🇽 México",
            categoria: "Historia",
            pregunta: "¿Qué personaje dio el llamado que inició el movimiento de independencia de México?",
            opciones: [
                "Miguel Hidalgo",
                "Benito Juárez",
                "Porfirio Díaz",
                "Emiliano Zapata"
            ],
            correcta: "Miguel Hidalgo"
        },

        {
            pais: "🇵🇪 Perú",
            categoria: "Historia",
            pregunta: "¿Qué personaje participó en la independencia del Perú?",
            opciones: [
                "José de San Martín",
                "Simón Bolívar",
                "Miguel Hidalgo",
                "George Washington"
            ],
            correcta: "José de San Martín"
        },

        {
            pais: "🇦🇷 Argentina",
            categoria: "Historia",
            pregunta: "¿Qué acontecimiento ocurrió en Argentina en 1810?",
            opciones: [
                "Revolución de Mayo",
                "Revolución Francesa",
                "Independencia de México",
                "Guerra del Pacífico"
            ],
            correcta: "Revolución de Mayo"
        },

        {
            pais: "🇧🇷 Brasil",
            categoria: "Historia",
            pregunta: "¿De qué país se independizó Brasil?",
            opciones: [
                "Portugal",
                "España",
                "Francia",
                "Inglaterra"
            ],
            correcta: "Portugal"
        },

        {
            pais: "🇪🇬 Egipto",
            categoria: "Historia",
            pregunta: "¿Cuál era una de las funciones principales de las pirámides egipcias?",
            opciones: [
                "Servir como tumbas",
                "Servir como teatros",
                "Servir como mercados",
                "Servir como puertos"
            ],
            correcta: "Servir como tumbas"
        },

        {
            pais: "🇬🇷 Grecia",
            categoria: "Historia",
            pregunta: "¿Qué ciudad-estado griega fue conocida por su organización militar?",
            opciones: [
                "Esparta",
                "Atenas",
                "Corinto",
                "Mileto"
            ],
            correcta: "Esparta"
        },

        {
            pais: "🇮🇹 Italia",
            categoria: "Historia",
            pregunta: "¿Qué pueblo antiguo construyó un gran imperio con centro en Roma?",
            opciones: [
                "Los romanos",
                "Los egipcios",
                "Los incas",
                "Los mayas"
            ],
            correcta: "Los romanos"
        },

        {
            pais: "🇫🇷 Francia",
            categoria: "Historia",
            pregunta: "¿Qué acontecimiento es considerado uno de los símbolos de la Revolución Francesa?",
            opciones: [
                "La toma de la Bastilla",
                "La llegada a América",
                "La Revolución Industrial",
                "La caída de Roma"
            ],
            correcta: "La toma de la Bastilla"
        },

        {
            pais: "🇯🇵 Japón",
            categoria: "Historia",
            pregunta: "¿Cómo se llamaban los guerreros tradicionales de Japón?",
            opciones: [
                "Samuráis",
                "Vikingos",
                "Legionarios",
                "Caballeros"
            ],
            correcta: "Samuráis"
        },

        {
            pais: "🇨🇳 China",
            categoria: "Historia",
            pregunta: "¿Cuál de estos inventos se desarrolló en la antigua China?",
            opciones: [
                "El papel",
                "La imprenta moderna",
                "El teléfono",
                "El automóvil"
            ],
            correcta: "El papel"
        },

        {
            pais: "🇮🇳 India",
            categoria: "Historia",
            pregunta: "¿Qué líder fue importante en la independencia de India mediante la resistencia no violenta?",
            opciones: [
                "Mahatma Gandhi",
                "Nelson Mandela",
                "Abraham Lincoln",
                "Julio César"
            ],
            correcta: "Mahatma Gandhi"
        },

        {
            pais: "🇪🇸 España",
            categoria: "Historia",
            pregunta: "¿Qué reino musulmán permaneció en la península ibérica hasta 1492?",
            opciones: [
                "Reino de Granada",
                "Reino de Aragón",
                "Reino de Castilla",
                "Reino de Navarra"
            ],
            correcta: "Reino de Granada"
        },

        {
            pais: "🇺🇸 Estados Unidos",
            categoria: "Historia",
            pregunta: "¿Qué documento declaró la independencia de las Trece Colonias?",
            opciones: [
                "Declaración de Independencia",
                "Constitución de 1812",
                "Tratado de París",
                "Carta de Derechos"
            ],
            correcta: "Declaración de Independencia"
        },

        {
            pais: "🇨🇦 Canadá",
            categoria: "Historia",
            pregunta: "¿Qué grupos forman parte de la historia originaria de Canadá?",
            opciones: [
                "Pueblos indígenas",
                "Romanos",
                "Incas",
                "Vikingos"
            ],
            correcta: "Pueblos indígenas"
        },

        {
            pais: "🇦🇺 Australia",
            categoria: "Historia",
            pregunta: "¿Qué pueblos habitaban Australia antes de la colonización europea?",
            opciones: [
                "Pueblos aborígenes",
                "Romanos",
                "Aztecas",
                "Incas"
            ],
            correcta: "Pueblos aborígenes"
        },

        {
            pais: "🇨🇴 Colombia",
            categoria: "Historia",
            pregunta: "¿Qué personaje fue conocido como El Libertador?",
            opciones: [
                "Simón Bolívar",
                "Miguel Hidalgo",
                "José de San Martín",
                "Antonio Nariño"
            ],
            correcta: "Simón Bolívar"
        },

        {
            pais: "🇲🇽 México",
            categoria: "Historia",
            pregunta: "¿Qué civilización desarrolló importantes ciudades y conocimientos en Mesoamérica?",
            opciones: [
                "Los mayas",
                "Los romanos",
                "Los vikingos",
                "Los egipcios"
            ],
            correcta: "Los mayas"
        },

        {
            pais: "🇧🇷 Brasil",
            categoria: "Cultura",
            pregunta: "¿Cuál es el idioma oficial de Brasil?",
            opciones: [
                "Portugués",
                "Español",
                "Francés",
                "Inglés"
            ],
            correcta: "Portugués"
        },

        {
            pais: "🇦🇷 Argentina",
            categoria: "Cultura",
            pregunta: "¿Qué bebida tradicional se consume ampliamente en Argentina?",
            opciones: [
                "Mate",
                "Té verde",
                "Café turco",
                "Chocolate"
            ],
            correcta: "Mate"
        }

    ],


    /* =====================================================
       NIVEL 3
    ===================================================== */

    3: [

        {
            pais: "🇨🇴 Colombia",
            categoria: "Historia",
            pregunta: "¿Por qué es importante el 20 de julio de 1810 en la historia de Colombia?",
            opciones: [
                "Porque inició un proceso que llevó a la independencia",
                "Porque terminó la Segunda Guerra Mundial",
                "Porque se fundó Bogotá",
                "Porque comenzó la colonización española"
            ],
            correcta: "Porque inició un proceso que llevó a la independencia"
        },

        {
            pais: "🇲🇽 México",
            categoria: "Historia",
            pregunta: "¿Cuál fue una de las causas del movimiento de independencia de México?",
            opciones: [
                "El descontento con el dominio colonial",
                "La llegada de los romanos",
                "La desaparición de los mayas",
                "La Revolución Industrial inglesa"
            ],
            correcta: "El descontento con el dominio colonial"
        },

        {
            pais: "🇵🇪 Perú",
            categoria: "Geografía e Historia",
            pregunta: "¿Cómo influyeron los Andes en las sociedades antiguas del Perú?",
            opciones: [
                "Influyeron en la agricultura, transporte y organización territorial",
                "Impidieron completamente la agricultura",
                "Solo fueron utilizados para navegación",
                "No tuvieron ninguna influencia"
            ],
            correcta: "Influyeron en la agricultura, transporte y organización territorial"
        },

        {
            pais: "🇦🇷 Argentina",
            categoria: "Historia",
            pregunta: "¿Qué consecuencia tuvo la Revolución de Mayo?",
            opciones: [
                "Impulsó la autonomía de las Provincias Unidas",
                "Creó el Imperio Romano",
                "Terminó la Revolución Francesa",
                "Inició la colonización de América"
            ],
            correcta: "Impulsó la autonomía de las Provincias Unidas"
        },

        {
            pais: "🇧🇷 Brasil",
            categoria: "Historia",
            pregunta: "¿Qué característica tuvo Brasil después de independizarse?",
            opciones: [
                "Mantuvo una monarquía durante un período",
                "Se convirtió inmediatamente en una república",
                "Fue gobernado por Roma",
                "Se dividió en ciudades-estado"
            ],
            correcta: "Mantuvo una monarquía durante un período"
        },

        {
            pais: "🇪🇬 Egipto",
            categoria: "Historia",
            pregunta: "¿Por qué el río Nilo fue tan importante para el antiguo Egipto?",
            opciones: [
                "Permitió disponer de agua y favoreció la agricultura",
                "Servía únicamente como frontera",
                "Era utilizado para construir pirámides",
                "No tenía importancia económica"
            ],
            correcta: "Permitió disponer de agua y favoreció la agricultura"
        },

        {
            pais: "🇬🇷 Grecia",
            categoria: "Historia",
            pregunta: "¿Cuál era una diferencia importante entre Atenas y Esparta?",
            opciones: [
                "Atenas destacó en la vida política y cultural, mientras Esparta en la militar",
                "Ambas tenían exactamente la misma organización",
                "Esparta se dedicaba principalmente al comercio marítimo",
                "Atenas no tenía participación política"
            ],
            correcta: "Atenas destacó en la vida política y cultural, mientras Esparta en la militar"
        },

        {
            pais: "🇮🇹 Italia",
            categoria: "Historia",
            pregunta: "¿Qué contribuyó a la expansión del Imperio romano?",
            opciones: [
                "Su organización militar y política",
                "La ausencia de ejército",
                "El aislamiento de sus ciudades",
                "La desaparición de sus leyes"
            ],
            correcta: "Su organización militar y política"
        },

        {
            pais: "🇫🇷 Francia",
            categoria: "Historia",
            pregunta: "¿Qué principio estuvo relacionado con las ideas de la Revolución Francesa?",
            opciones: [
                "La igualdad ante la ley",
                "El poder exclusivo de los reyes",
                "La desaparición de los ciudadanos",
                "El aislamiento de Francia"
            ],
            correcta: "La igualdad ante la ley"
        },

        {
            pais: "🇯🇵 Japón",
            categoria: "Historia",
            pregunta: "¿Qué ocurrió durante la Restauración Meiji?",
            opciones: [
                "Japón experimentó una transformación y modernización",
                "Japón regresó completamente al aislamiento",
                "Japón fue conquistado por Roma",
                "Desapareció la cultura japonesa"
            ],
            correcta: "Japón experimentó una transformación y modernización"
        },

        {
            pais: "🇨🇳 China",
            categoria: "Historia",
            pregunta: "¿Qué importancia tuvo la Ruta de la Seda?",
            opciones: [
                "Facilitó intercambios comerciales y culturales",
                "Solo servía para transportar ejércitos",
                "Separó completamente a Asia de Europa",
                "Fue una muralla defensiva"
            ],
            correcta: "Facilitó intercambios comerciales y culturales"
        },

        {
            pais: "🇮🇳 India",
            categoria: "Historia",
            pregunta: "¿Qué estrategia fue característica de la lucha liderada por Gandhi?",
            opciones: [
                "La resistencia no violenta",
                "La conquista militar",
                "El aislamiento cultural",
                "La expansión territorial"
            ],
            correcta: "La resistencia no violenta"
        },

        {
            pais: "🇪🇸 España",
            categoria: "Historia",
            pregunta: "¿Qué ocurrió en 1492 en la historia de España?",
            opciones: [
                "Terminó la Reconquista y comenzó el viaje de Colón",
                "Comenzó la Revolución Francesa",
                "Se fundó Roma",
                "Terminó el Imperio romano"
            ],
            correcta: "Terminó la Reconquista y comenzó el viaje de Colón"
        },

        {
            pais: "🇺🇸 Estados Unidos",
            categoria: "Historia",
            pregunta: "¿Qué motivó principalmente la ruptura de las Trece Colonias con Gran Bretaña?",
            opciones: [
                "El rechazo a medidas y nuevos impuestos británicos",
                "La llegada de los incas",
                "La Revolución Francesa",
                "La caída de Roma"
            ],
            correcta: "El rechazo a medidas y nuevos impuestos británicos"
        },

        {
            pais: "🇨🇦 Canadá",
            categoria: "Historia",
            pregunta: "¿Por qué los pueblos indígenas son importantes para la historia de Canadá?",
            opciones: [
                "Son parte fundamental de la historia y cultura del territorio",
                "Llegaron después de la colonización europea",
                "No tuvieron presencia histórica",
                "Solo participaron en la época moderna"
            ],
            correcta: "Son parte fundamental de la historia y cultura del territorio"
        },

        {
            pais: "🇦🇺 Australia",
            categoria: "Historia",
            pregunta: "¿Qué efecto tuvo la colonización europea sobre Australia?",
            opciones: [
                "Produjo importantes cambios territoriales, sociales y culturales",
                "No produjo ningún cambio",
                "Eliminó completamente la geografía del país",
                "Solo cambió el idioma"
            ],
            correcta: "Produjo importantes cambios territoriales, sociales y culturales"
        },

        {
            pais: "🇨🇴 Colombia",
            categoria: "Cultura",
            pregunta: "¿Qué influencias ayudaron a formar la cumbia colombiana?",
            opciones: [
                "Influencias indígenas, africanas y europeas",
                "Únicamente influencias europeas",
                "Únicamente influencias asiáticas",
                "Únicamente influencias africanas"
            ],
            correcta: "Influencias indígenas, africanas y europeas"
        },

        {
            pais: "🇲🇽 México",
            categoria: "Cultura",
            pregunta: "¿Qué representa principalmente el Día de Muertos?",
            opciones: [
                "La memoria y homenaje a las personas fallecidas",
                "El inicio del año escolar",
                "Una celebración deportiva",
                "La independencia de España"
            ],
            correcta: "La memoria y homenaje a las personas fallecidas"
        },

        {
            pais: "🇧🇷 Brasil",
            categoria: "Cultura",
            pregunta: "¿Qué elementos son característicos del Carnaval brasileño?",
            opciones: [
                "Desfiles, música y diversas tradiciones",
                "Únicamente ceremonias religiosas",
                "Solamente competencias deportivas",
                "Únicamente comidas tradicionales"
            ],
            correcta: "Desfiles, música y diversas tradiciones"
        },

        {
            pais: "🇯🇵 Japón",
            categoria: "Cultura",
            pregunta: "¿Qué es el hanami en la cultura japonesa?",
            opciones: [
                "La contemplación de las flores, especialmente los cerezos",
                "Una ceremonia militar",
                "Una danza brasileña",
                "Una comida tradicional"
            ],
            correcta: "La contemplación de las flores, especialmente los cerezos"
        }

    ]

};


/* =========================================================
   DIFICULTAD DEL NIVEL
========================================================= */

function obtenerDificultad() {

    if (nivelActual <= 5) {
        return "Básica";
    }

    if (nivelActual <= 10) {
        return "Intermedia";
    }

    if (nivelActual <= 15) {
        return "Avanzada";
    }

    if (nivelActual <= 20) {
        return "Experta";
    }

    return "Maestra";
}


/* =========================================================
   MOSTRAR PANTALLA
========================================================= */

function mostrarPantalla(idPantalla) {

    const pantallas = document.querySelectorAll(".pantalla");

    pantallas.forEach(pantalla => {

        pantalla.classList.remove("activa");

        pantalla.style.display = "none";

    });


    const pantalla = document.getElementById(idPantalla);

    if (pantalla) {

        pantalla.classList.add("activa");
        pantalla.style.display = "block";

    }
}


/* =========================================================
   CREAR PREGUNTAS DEL NIVEL
========================================================= */

function crearPreguntasNivel() {

    const preguntas = bancoPreguntas[nivelActual];


    if (!preguntas) {

        console.error(
            "El nivel " + nivelActual + " todavía no tiene preguntas."
        );

        return [];

    }


    if (preguntas.length < PREGUNTAS_POR_NIVEL) {

        console.error(
            "El nivel " + nivelActual +
            " necesita 20 preguntas."
        );

        return [];

    }


    let seleccionadas =
        mezclar(preguntas).slice(
            0,
            PREGUNTAS_POR_NIVEL
        );


    seleccionadas = seleccionadas.map(pregunta => {

        let opcionesMezcladas;


        /*
           Mezclamos las respuestas.

           Además evitamos que la respuesta correcta
           aparezca siempre como primera opción.
        */

        do {

            opcionesMezcladas =
                mezclar(pregunta.opciones);

        } while (
            opcionesMezcladas[0] === pregunta.correcta
        );


        return {

            ...pregunta,

            opciones: opcionesMezcladas

        };

    });


    return seleccionadas;
}


/* =========================================================
   INICIAR NIVEL
========================================================= */

function iniciarNivel() {

    vidas = VIDAS_INICIALES;

    preguntaActual = 0;

    respuestasCorrectas = 0;


    preguntasNivel =
        crearPreguntasNivel();


    if (
        preguntasNivel.length !==
        PREGUNTAS_POR_NIVEL
    ) {

        alert(
            "El Nivel " +
            nivelActual +
            " todavía no tiene 20 preguntas."
        );

        return;

    }


    actualizarVidas();

    mostrarPregunta();

}


/* =========================================================
   ACTUALIZAR CORAZONES
========================================================= */

function actualizarVidas() {

    const elemento =
        document.getElementById("vidas");


    if (!elemento) {
        return;
    }


    let corazones = "";


    for (
        let i = 0;
        i < VIDAS_INICIALES;
        i++
    ) {

        if (i < vidas) {

            corazones += "❤️";

        } else {

            corazones += "🩶";

        }

    }


    elemento.textContent =
        corazones;
}


/* =========================================================
   MOSTRAR PREGUNTA
========================================================= */

function mostrarPregunta() {

    if (
        preguntaActual >=
        preguntasNivel.length
    ) {

        finalizarNivel();

        return;

    }


    const pregunta =
        preguntasNivel[preguntaActual];


    const tituloNivel =
        document.getElementById("tituloNivel");

    const numeroPregunta =
        document.getElementById("numeroPregunta");

    const paisPregunta =
        document.getElementById("paisPregunta");

    const categoria =
        document.getElementById("categoria");

    const textoPregunta =
        document.getElementById("pregunta");

    const respuestas =
        document.getElementById("respuestas");

    const barraProgreso =
        document.getElementById("barraProgreso");


    /* Nivel */

    if (tituloNivel) {

        tituloNivel.textContent =
            "Nivel " + nivelActual;

    }


    /* Número de pregunta */

    if (numeroPregunta) {

        numeroPregunta.textContent =
            "Pregunta " +
            (preguntaActual + 1) +
            " de " +
            PREGUNTAS_POR_NIVEL;

    }


    /* País */

    if (paisPregunta) {

        paisPregunta.textContent =
            pregunta.pais;

    }


    /* Categoría */

    if (categoria) {

        categoria.textContent =
            pregunta.categoria +
            " · " +
            obtenerDificultad();

    }


    /* Pregunta */

    if (textoPregunta) {

        textoPregunta.textContent =
            pregunta.pregunta;

    }


    /* Barra de progreso */

    if (barraProgreso) {

        const progreso =
            (
                (preguntaActual + 1) /
                PREGUNTAS_POR_NIVEL
            ) * 100;


        barraProgreso.style.width =
            progreso + "%";

    }


    /* Respuestas */

    if (respuestas) {

        respuestas.innerHTML = "";


        pregunta.opciones.forEach(
            (opcion, indice) => {

                const boton =
                    document.createElement("button");


                boton.className =
                    "opcion";


                boton.textContent =
                    String.fromCharCode(
                        65 + indice
                    ) +
                    ". " +
                    opcion;


                boton.onclick =
                    function () {

                        comprobarRespuesta(
                            opcion,
                            boton
                        );

                    };


                respuestas.appendChild(
                    boton
                );

            }
        );

    }


    actualizarVidas();

}


/* =========================================================
   COMPROBAR RESPUESTA
========================================================= */

function comprobarRespuesta(
    opcionSeleccionada,
    boton
) {

    const pregunta =
        preguntasNivel[preguntaActual];


    const botones =
        document.querySelectorAll(
            ".opcion"
        );


    /* Desactivar todos los botones */

    botones.forEach(boton => {

        boton.disabled = true;

    });


    /* =====================================================
       RESPUESTA CORRECTA
    ===================================================== */

    if (
        opcionSeleccionada ===
        pregunta.correcta
    ) {

        respuestasCorrectas++;


        boton.classList.add(
            "correcta"
        );


        mostrarMensaje(
            "¡Correcto! 🎉",
            "correcto"
        );


        setTimeout(() => {

            preguntaActual++;

            mostrarPregunta();

        }, 900);


        return;

    }


    /* =====================================================
       RESPUESTA INCORRECTA
    ===================================================== */

    boton.classList.add(
        "incorrecta"
    );


    vidas--;


    actualizarVidas();


    mostrarMensaje(
        "Respuesta incorrecta ❌",
        "incorrecto"
    );


    /* Todavía quedan vidas */

    if (vidas > 0) {

        setTimeout(() => {

            preguntaActual++;

            mostrarPregunta();

        }, 1000);


    } else {

        /* Se acabaron las vidas */

        setTimeout(() => {

            perderNivel();

        }, 1000);

    }

}


/* =========================================================
   MOSTRAR MENSAJE
========================================================= */

function mostrarMensaje(
    texto,
    tipo
) {

    const mensaje =
        document.getElementById("mensaje");


    if (!mensaje) {
        return;
    }


    mensaje.textContent =
        texto;


    mensaje.className =
        "mensaje " + tipo;

}


/* =========================================================
   FINALIZAR NIVEL
========================================================= */

function finalizarNivel() {

    const porcentaje =
        Math.round(
            (
                respuestasCorrectas /
                PREGUNTAS_POR_NIVEL
            ) * 100
        );


    const resumenNivel =
        document.getElementById(
            "resumenNivel"
        );


    const resultadoPreguntas =
        document.getElementById(
            "resultadoPreguntas"
        );


    if (resultadoPreguntas) {

        resultadoPreguntas.textContent =
            respuestasCorrectas +
            " / " +
            PREGUNTAS_POR_NIVEL;

    }


    if (resumenNivel) {

        resumenNivel.textContent =
            "Completaste el Nivel " +
            nivelActual +
            " con " +
            porcentaje +
            "% de respuestas correctas.";

    }


    mostrarPantalla(
        "nivelCompletado"
    );

}


/* =========================================================
   PERDER NIVEL
========================================================= */

function perderNivel() {

    mostrarPantalla(
        "gameOver"
    );

}


/* =========================================================
   SIGUIENTE NIVEL
========================================================= */

function siguienteNivel() {

    nivelActual++;


    /*
       Por ahora tenemos preguntas creadas
       para los niveles 1, 2 y 3.
    */

    if (!bancoPreguntas[nivelActual]) {

        alert(
            "🎉 ¡Excelente!\n\n" +
            "Has completado todos los niveles disponibles.\n\n" +
            "Próximamente podrás agregar nuevos niveles."
        );


        nivelActual--;


        return;

    }


    vidas =
        VIDAS_INICIALES;


    preguntaActual = 0;


    respuestasCorrectas = 0;


    mostrarPantalla(
        "juego"
    );


    iniciarNivel();

}


/* =========================================================
   REINICIAR NIVEL
========================================================= */

function reiniciarNivel() {

    vidas =
        VIDAS_INICIALES;


    preguntaActual = 0;


    respuestasCorrectas = 0;


    mostrarPantalla(
        "juego"
    );


    iniciarNivel();

}


/* =========================================================
   INICIAR JUEGO
========================================================= */

function iniciarJuego() {

    nivelActual = 1;


    vidas =
        VIDAS_INICIALES;


    preguntaActual = 0;


    respuestasCorrectas = 0;


    mostrarPantalla(
        "juego"
    );


    iniciarNivel();

}


/* =========================================================
   VOLVER A EMPEZAR TODO
========================================================= */

function reiniciarJuego() {

    nivelActual = 1;


    vidas =
        VIDAS_INICIALES;


    preguntaActual = 0;


    respuestasCorrectas = 0;


    mostrarPantalla(
        "inicio"
    );

}


/* =========================================================
   INICIAR CUANDO CARGA LA PÁGINA
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
           Al abrir la página solamente
           mostramos la pantalla de inicio.
        */

        mostrarPantalla(
            "inicio"
        );

    }
);