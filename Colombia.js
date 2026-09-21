/* =========================================================
   HISTORIA SIN FRONTERAS
   JAVASCRIPT COMPLETO
   HISTORIA + CULTURA
========================================================= */

let puntos = 0;
let vidas = 3;
let racha = 0;
let temaActual = "gastronomia";
let respuestaSeleccionada = false;


/* =========================================================
   TEMAS
========================================================= */

const temas = {

    /* =====================================================
       HISTORIA
    ===================================================== */

    "primeras-civilizaciones": {
        titulo: "Primeras civilizaciones",
        subtitulo: "Los primeros pueblos de Colombia",
        icono: "🏛️",

        texto: "Antes de la llegada de los españoles, diferentes pueblos indígenas habitaban el territorio colombiano, como los muiscas, taironas, quimbayas y zenúes.",

        imagen: "https://static.wixstatic.com/media/326526_e40839e9c75140be8a619508207b437c~mv2.jpg/v1/fill/w_600,h_856,al_c,q_85,enc_avif,quality_auto/326526_e40839e9c75140be8a619508207b437c~mv2.jpg",

        dato: "Los muiscas destacaron por su trabajo con el oro y sus conocimientos agrícolas.",

        regiones: [
            "Muiscas",
            "Taironas",
            "Quimbayas",
            "Zenúes"
        ],

        pregunta: "¿Cuál de estos fue un pueblo indígena de Colombia?",

        opciones: [
            "Muiscas",
            "Romanos",
            "Vikingos",
            "Egipcios"
        ],

        correcta: "Muiscas",

        audio: "Las primeras civilizaciones de Colombia estuvieron formadas por diferentes pueblos indígenas que habitaron el territorio mucho antes de la llegada de los españoles. Entre ellos encontramos a los muiscas, los taironas, los quimbayas y los zenúes. Estos pueblos desarrollaron diferentes formas de organización social, agricultura, comercio, artesanías y conocimientos sobre la naturaleza. Los muiscas, por ejemplo, cultivaban productos como el maíz y la papa, y también se destacaron por su trabajo con el oro. Los taironas habitaron principalmente la Sierra Nevada de Santa Marta y construyeron caminos y terrazas para vivir y cultivar. Los quimbayas fueron reconocidos por sus habilidades en la orfebrería. Conocer estas sociedades nos permite entender que Colombia ya tenía una gran diversidad cultural antes de la llegada de los europeos."
    },


    "conquista": {
        titulo: "Conquista",
        subtitulo: "La llegada de los españoles",
        icono: "⚔️",

        texto: "La conquista española comenzó durante el siglo XVI. Los españoles exploraron diferentes regiones del territorio y establecieron nuevos asentamientos.",

        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStv2iAuiVjLeu0VsjKdCcoNtoOXs-FR59s4ctPqlSFfw&s=10",

        dato: "Gonzalo Jiménez de Quesada participó en una expedición que llegó al territorio muisca.",

        regiones: [
            "Siglo XVI",
            "Exploración",
            "Conquista"
        ],

        pregunta: "¿Durante qué siglo comenzó la conquista española?",

        opciones: [
            "Siglo XVI",
            "Siglo X",
            "Siglo XVIII",
            "Siglo XX"
        ],

        correcta: "Siglo XVI",

        audio: "La conquista española fue un proceso que comenzó en el territorio colombiano durante el siglo XVI. Diferentes expediciones españolas recorrieron varias regiones y entraron en contacto con los pueblos indígenas que ya habitaban el territorio. Uno de los encuentros más importantes ocurrió en la región donde vivían los muiscas. La llegada de los españoles produjo grandes cambios políticos, sociales, económicos y culturales. Se crearon nuevos asentamientos y comenzó el dominio de la Corona española. Sin embargo, este proceso también tuvo consecuencias muy graves para muchos pueblos indígenas debido a los enfrentamientos, las enfermedades y la explotación. Estudiar la conquista permite comprender cómo el encuentro entre diferentes culturas transformó profundamente la historia de Colombia."
    },


    "epoca-colonial": {
        titulo: "Época colonial",
        subtitulo: "Colombia bajo el dominio español",
        icono: "🚢",

        texto: "Durante la época colonial, el territorio colombiano formó parte del Imperio español. Se establecieron nuevas ciudades, instituciones y actividades económicas.",

        imagen: "https://daniels737.wordpress.com/wp-content/uploads/2015/11/colonial.jpg",

        dato: "Cartagena de Indias fue uno de los principales puertos del Caribe durante la época colonial.",

        regiones: [
            "Colonia",
            "Cartagena",
            "España"
        ],

        pregunta: "¿Qué país dominó Colombia durante la época colonial?",

        opciones: [
            "España",
            "Francia",
            "Italia",
            "Japón"
        ],

        correcta: "España",

        audio: "Durante la época colonial, el territorio colombiano estuvo bajo el dominio de la Corona española. Durante este periodo se fundaron ciudades, se establecieron nuevas instituciones y se desarrollaron actividades económicas como la agricultura, la minería y el comercio. La sociedad colonial estaba organizada de manera desigual y las personas tenían diferentes posiciones según su origen y condición. También llegaron nuevas costumbres, alimentos, animales, formas de vestir, idiomas y expresiones religiosas. Al mismo tiempo, las culturas indígenas y africanas aportaron sus propias tradiciones, conocimientos y formas de expresión. De esta mezcla surgieron muchas de las características culturales que todavía podemos encontrar en Colombia. Cartagena de Indias tuvo un papel muy importante porque fue uno de los principales puertos españoles del Caribe."
    },


    "independencia": {
        titulo: "Independencia",
        subtitulo: "El camino hacia la libertad",
        icono: "🚩",

        texto: "El proceso de independencia de Colombia comenzó a principios del siglo XIX. Uno de sus momentos decisivos fue la Batalla de Boyacá.",

        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsa35QHllhNLYsizjDh2yC8tBI9ycQC7gRRnO8lKoxooXRYdw5qwUjU9c&s=10",

        dato: "La Batalla de Boyacá ocurrió el 7 de agosto de 1819.",

        regiones: [
            "1810",
            "1819",
            "Independencia"
        ],

        pregunta: "¿En qué año ocurrió la Batalla de Boyacá?",

        opciones: [
            "1819",
            "1810",
            "1900",
            "1700"
        ],

        correcta: "1819",

        audio: "La independencia de Colombia fue un proceso mediante el cual el territorio dejó de estar bajo el dominio español. Uno de los acontecimientos más recordados ocurrió el 20 de julio de 1810 en Santa Fe de Bogotá, pero la independencia no se logró en un solo día. Durante varios años hubo enfrentamientos y diferentes movimientos que buscaban cambiar el sistema de gobierno. Un momento decisivo ocurrió el 7 de agosto de 1819, cuando se produjo la Batalla de Boyacá. La victoria de las fuerzas independentistas fue fundamental para avanzar hacia la liberación del territorio. Entre los personajes más importantes de este proceso se encuentran Simón Bolívar y Francisco de Paula Santander. Por eso, la independencia representa uno de los procesos más importantes de la historia de Colombia."
    },


    "personajes-historicos": {
        titulo: "Personajes históricos",
        subtitulo: "Personas importantes de nuestra historia",
        icono: "👤",

        texto: "Colombia tiene personajes históricos importantes. Simón Bolívar fue una figura destacada de los procesos de independencia de varios territorios de América del Sur.",

        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTigGj2ClL-39BHoUMO3ul5jAlopnIZvzoMS-QvM8CWHg&s=10",

        dato: "Simón Bolívar es conocido como el Libertador.",

        regiones: [
            "Bolívar",
            "Santander",
            "La Pola"
        ],

        pregunta: "¿Cómo es conocido Simón Bolívar?",

        opciones: [
            "El Libertador",
            "El Navegante",
            "El Explorador",
            "El Científico"
        ],

        correcta: "El Libertador",

        audio: "La historia de Colombia cuenta con muchos personajes que tuvieron participación en diferentes momentos importantes del país. Simón Bolívar fue una de las figuras principales de los procesos de independencia de varios territorios de América del Sur y es conocido como el Libertador. Francisco de Paula Santander también tuvo un papel importante durante la independencia y en la organización política de la nueva nación. Otra figura destacada fue Policarpa Salavarrieta, conocida como La Pola, quien se convirtió en un símbolo de la participación de las mujeres durante la época de independencia. Además de ellos, Colombia ha tenido importantes científicos, escritores, artistas, políticos y defensores de los derechos humanos. Conocer a estos personajes ayuda a comprender que la historia es construida por muchas personas con diferentes ideas y aportes."
    },


    "conflictos-importantes": {
        titulo: "Conflictos importantes",
        subtitulo: "Momentos de conflicto en Colombia",
        icono: "💥",

        texto: "A lo largo de su historia, Colombia ha vivido diferentes conflictos políticos y sociales que han influido en el desarrollo del país.",

        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ9zJL5KWKwUICnNmDKSUFY2Rrw_MJy4W6iVTyu-jnWXL-ynTS-xAbWDg&s=10",

        dato: "La historia reciente de Colombia también ha estado marcada por procesos de búsqueda de paz.",

        regiones: [
            "Conflictos",
            "Sociedad",
            "Paz"
        ],

        pregunta: "¿Qué ayuda a comprender el estudio de los conflictos históricos?",

        opciones: [
            "Los cambios políticos y sociales",
            "Solo la gastronomía",
            "Solo los deportes",
            "El clima mundial"
        ],

        correcta: "Los cambios políticos y sociales",

        audio: "A lo largo de su historia, Colombia ha vivido diferentes conflictos políticos y sociales. Durante el siglo XIX ocurrieron varias guerras civiles relacionadas con las diferencias entre grupos políticos y las formas de organizar el país. Durante el siglo XX también existieron periodos de violencia política y, posteriormente, un conflicto armado interno que produjo importantes consecuencias sociales. Muchas personas tuvieron que abandonar sus hogares y diferentes comunidades fueron afectadas. Sin embargo, la historia de Colombia no está formada solamente por conflictos. También existen procesos de diálogo, negociaciones y esfuerzos para construir la paz. Estudiar estos acontecimientos permite comprender mejor los cambios que ha vivido la sociedad colombiana y la importancia de buscar soluciones mediante el diálogo, la convivencia y el respeto."
    },


    /* =====================================================
       CULTURA
    ===================================================== */

    "gastronomia": {
        titulo: "Gastronomía",
        subtitulo: "Sabores que cuentan historias",
        icono: "🍴",

        texto: "La gastronomía colombiana tiene una gran diversidad regional. Cada región posee platos y preparaciones que reflejan sus tradiciones.",

        imagen: "https://s3.amazonaws.com/rtvc-assets-senalcolombia.gov.co/s3fs-public/styles/imagen_noticia/public/field/image/Sin%20ti%CC%81tulo-1_10.jpg?itok=NTFf8IdV",

        dato: "La arepa se consume en diferentes regiones de Colombia y puede prepararse de muchas formas.",

        regiones: [
            "Caribe",
            "Andina",
            "Pacífica",
            "Orinoquía",
            "Amazonía"
        ],

        pregunta: "¿Cuál de estos platos es típico de Colombia?",

        opciones: [
            "Sushi",
            "Arepa",
            "Pizza",
            "Tacos"
        ],

        correcta: "Arepa",

        audio: "La gastronomía colombiana tiene una gran diversidad regional. La arepa es uno de sus alimentos tradicionales y se prepara de diferentes maneras según la región."
    },


    "musica-y-bailes": {
        titulo: "Música y bailes",
        subtitulo: "Ritmos que representan a Colombia",
        icono: "🎵",

        texto: "Colombia tiene una gran variedad de ritmos y bailes. La cumbia, el vallenato, el joropo y la salsa forman parte de la diversidad musical del país.",

        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAYnED_O3ABSjr7p5iBcCWM39LFrwpHxMr1lOHt96oViLYmWbumlgC0C6J&s=10",

        dato: "La cumbia es uno de los ritmos colombianos más conocidos internacionalmente.",

        regiones: [
            "Cumbia",
            "Vallenato",
            "Joropo",
            "Salsa"
        ],

        pregunta: "¿Cuál de estos es un ritmo tradicional colombiano?",

        opciones: [
            "Cumbia",
            "Polka",
            "Flamenco",
            "Vals vienés"
        ],

        correcta: "Cumbia",

        audio: "La música colombiana tiene muchos ritmos. La cumbia y el vallenato son algunos de los más representativos y forman parte de la diversidad cultural del país."
    },


    "tradiciones": {
        titulo: "Tradiciones",
        subtitulo: "Costumbres transmitidas entre generaciones",
        icono: "🌸",

        texto: "Las tradiciones colombianas incluyen celebraciones, costumbres familiares, música, gastronomía y actividades propias de cada región.",

        imagen: "https://www2.claro.com.co/portal/recursos/co/cpp/promociones/imagenes/1642089730685-6-01-Tradiciones-colombianas-%20que-debes-conocer.jpg",

        dato: "Muchas tradiciones colombianas se relacionan con las celebraciones de cada región.",

        regiones: [
            "Costumbres",
            "Familia",
            "Celebraciones"
        ],

        pregunta: "¿Cómo se transmiten muchas tradiciones?",

        opciones: [
            "De generación en generación",
            "Solo por internet",
            "Solo por televisión",
            "Nunca se transmiten"
        ],

        correcta: "De generación en generación",

        audio: "Las tradiciones colombianas son expresiones culturales que se transmiten de generación en generación. Incluyen costumbres familiares, celebraciones, música, comida y diferentes formas de compartir en comunidad."
    },


    "religiones": {
    titulo: "Religiones",
    subtitulo: "Diversidad de creencias",
    icono: "🪷",

    texto: "En Colombia existen diferentes creencias y expresiones religiosas. La libertad religiosa permite practicar diferentes creencias respetando a los demás.",

    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7-n85POLi6S2bCK42Zn5ksWiY6w4AKWk8JbuX7FAKoeiDLFEp9cg8fhc&s=10",

    dato: "La diversidad religiosa forma parte de la diversidad cultural de Colombia.",

    regiones: [
        "Creencias",
        "Religión",
        "Respeto"
    ],

    pregunta: "¿Qué permite la libertad religiosa?",

    opciones: [
        "Practicar diferentes creencias",
        "Prohibir todas las religiones",
        "Eliminar las tradiciones",
        "Obligar una sola creencia"
    ],

    correcta: "Practicar diferentes creencias",

    audio: "En Colombia existen diferentes creencias y expresiones religiosas. La libertad religiosa permite que las personas practiquen sus creencias y también promueve el respeto hacia las creencias de los demás."
},

    "vestimenta-tipica": {
        titulo: "Vestimenta típica",
        subtitulo: "Ropa tradicional de diferentes regiones",
        icono: "👕",

        texto: "La vestimenta tradicional colombiana varía según la región y las actividades culturales. Algunas prendas se utilizan especialmente durante fiestas y bailes.",

        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6SizAr8zDTEcM6wM9sEZlJPJudxvzKeCJNrw6UWvspw&s=10",

        dato: "Los trajes de los bailes tradicionales suelen tener colores y accesorios característicos.",

        regiones: [
            "Regiones",
            "Bailes",
            "Fiestas"
        ],

        pregunta: "¿La vestimenta tradicional puede variar según qué factor?",

        opciones: [
            "La región",
            "El planeta",
            "El océano",
            "La luna"
        ],

        correcta: "La región",

        audio: "La vestimenta tradicional colombiana cambia según la región y las actividades culturales. Algunos trajes son utilizados especialmente durante fiestas, celebraciones y bailes tradicionales."
    },


    "arte-y-literatura": {
        titulo: "Arte y literatura",
        subtitulo: "Creatividad y expresión cultural",
        icono: "🎨",

        texto: "El arte y la literatura colombiana reflejan diferentes aspectos de la sociedad y la cultura. Colombia ha tenido importantes escritores y artistas.",

        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaPaijjidbaTok7A6BqLu7ReLNMYAgAJAi5liH4jOdmw&s=10",

        dato: "Gabriel García Márquez fue un escritor colombiano ganador del Premio Nobel de Literatura.",

        regiones: [
            "Arte",
            "Literatura",
            "Escritores"
        ],

        pregunta: "¿Qué escritor colombiano recibió el Premio Nobel de Literatura?",

        opciones: [
            "Gabriel García Márquez",
            "Pablo Picasso",
            "William Shakespeare",
            "Leonardo da Vinci"
        ],

        correcta: "Gabriel García Márquez",

        audio: "El arte y la literatura colombiana son formas de expresar ideas, historias y aspectos de nuestra cultura. Colombia ha tenido importantes escritores y artistas. Gabriel García Márquez fue un reconocido escritor colombiano y recibió el Premio Nobel de Literatura."
    },


    "monumentos": {
        titulo: "Monumentos",
        subtitulo: "Lugares que cuentan nuestra historia",
        icono: "🏛️",

        texto: "Colombia posee monumentos y lugares históricos que forman parte de su patrimonio cultural y ayudan a conservar la memoria del país.",

        imagen: "https://colombia.co/sites/default/files/marca-pais/media/images/monumento-de-boyaca.webp",

        dato: "El Santuario de Las Lajas es uno de los lugares arquitectónicos más conocidos de Colombia.",

        regiones: [
            "Patrimonio",
            "Historia",
            "Arquitectura"
        ],

        pregunta: "¿Qué ayudan a conservar los monumentos históricos?",

        opciones: [
            "La memoria y el patrimonio",
            "Solo los deportes",
            "Solo la economía",
            "El clima"
        ],

        correcta: "La memoria y el patrimonio",

        audio: "Los monumentos y lugares históricos ayudan a conservar la memoria y el patrimonio cultural. Colombia cuenta con diferentes lugares que representan acontecimientos, tradiciones y características importantes de su historia."
    },


    "fiestas": {
        titulo: "Fiestas",
        subtitulo: "Celebraciones llenas de cultura",
        icono: "🎉",

        texto: "Las fiestas colombianas reúnen música, bailes, gastronomía y tradiciones. Algunas celebraciones son propias de determinadas regiones.",

        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nYahfsxxvHMcfY5cLfmXy9At2ZmBVOiuRKN78s3khRFcLfRN4nvD6T0&s=10",

        dato: "El Carnaval de Barranquilla es una de las celebraciones culturales más importantes de Colombia.",

        regiones: [
            "Fiestas",
            "Baile",
            "Música"
        ],

        pregunta: "¿En qué ciudad se celebra el Carnaval de?",

        opciones: [
            "Barranquilla",
            "Bogotá",
            "Cali",
            "Pasto"
        ],

        correcta: "Barranquilla",

        audio: "Las fiestas colombianas son espacios para compartir música, bailes, tradiciones y expresiones culturales. Una de las celebraciones más conocidas es el Carnaval de Barranquilla, que reúne diferentes manifestaciones culturales y atrae a muchas personas."
    }

};


/* =========================================================
   NORMALIZAR TEXTO
========================================================= */

function limpiarTexto(texto) {

    return texto
        .toString()
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

}


/* =========================================================
   CAMBIAR TEMA
========================================================= */

function cambiarTema(nombre) {

    /* Detener audio anterior */
    if ("speechSynthesis" in window) {
        speechSynthesis.cancel();
    }

    const tema = temas[nombre];

    if (!tema) {
        console.error("Tema no encontrado:", nombre);
        return;
    }

    temaActual = nombre;
    respuestaSeleccionada = false;


    /* TÍTULO */

    const titulo = document.querySelector(".titulo-tema h2");

    if (titulo) {
        titulo.textContent = tema.titulo;
    }


    /* SUBTÍTULO */

    const subtitulo = document.querySelector(".titulo-tema p");

    if (subtitulo) {
        subtitulo.textContent = tema.subtitulo;
    }


    /* ICONO */

    const icono = document.querySelector(".icono-tema");

    if (icono) {
        icono.textContent = tema.icono;
    }


    /* MENSAJE DEL BOT */

    const mensaje = document.getElementById("mensajeBot");

    if (mensaje) {
        mensaje.textContent = tema.texto;
    }


    /* IMAGEN */

    const imagen = document.querySelector(".imagen-contenedor img");

    if (imagen) {

        imagen.src = tema.imagen;
        imagen.alt = tema.titulo;

        imagen.onerror = function () {
            this.style.display = "none";
        };

        imagen.style.display = "block";
    }


    /* DATO CURIOSO */

    const dato = document.querySelector(".dato-curioso p");

    if (dato) {
        dato.textContent = tema.dato;
    }


    /* REGIONES / ETIQUETAS */

    const regiones = document.querySelector(".regiones");

    if (regiones) {

        regiones.innerHTML = "";

        tema.regiones.forEach(function (region) {

            const span = document.createElement("span");

            span.textContent = region;

            regiones.appendChild(span);

        });
    }


    /* PREGUNTA */

    const pregunta = document.querySelector(".titulo-reto p");

    if (pregunta) {
        pregunta.textContent = tema.pregunta;
    }


    /* OPCIONES */

    crearOpciones(tema);


    /* RESULTADO */

    const resultado = document.getElementById("resultado");

    if (resultado) {

        resultado.textContent = "";

        resultado.className = "resultado";
    }


    /* BOTÓN SIGUIENTE */

    const siguiente = document.getElementById("botonSiguiente");

    if (siguiente) {
        siguiente.disabled = true;
    }


    /* BOTÓN ACTIVO */

    marcarTemaActivo(nombre);

}


/* =========================================================
   CREAR OPCIONES
========================================================= */

function crearOpciones(tema) {

    const contenedor = document.querySelector(".opciones");

    if (!contenedor) {
        return;
    }

    contenedor.innerHTML = "";

    const opciones = [...tema.opciones];


    /* MEZCLAR OPCIONES */

    for (let i = opciones.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [opciones[i], opciones[j]] =
        [opciones[j], opciones[i]];

    }


    /* CREAR BOTONES */

    opciones.forEach(function (respuesta) {

        const boton = document.createElement("button");

        boton.className = "opcion";

        boton.dataset.respuesta = respuesta;

        boton.innerHTML = `
            <span class="imagen-opcion">
                ${obtenerEmoji(respuesta)}
            </span>

            <span>
                ${respuesta}
            </span>

            <span class="circulo"></span>
        `;


        boton.addEventListener("click", function () {

            seleccionarRespuesta(this);

        });


        contenedor.appendChild(boton);

    });

}


/* =========================================================
   EMOJIS DE LAS OPCIONES
========================================================= */

function obtenerEmoji(respuesta) {

    const texto = limpiarTexto(respuesta);


    /* Gastronomía */

    if (texto === "arepa") return "🫓";
    if (texto === "sushi") return "🍣";
    if (texto === "pizza") return "🍕";
    if (texto === "tacos") return "🌮";


    /* Música */

    if (texto === "cumbia") return "💃";
    if (texto === "polka") return "🎵";
    if (texto === "flamenco") return "💃";
    if (texto === "vals vienes") return "🎶";


    /* Historia */

    if (texto === "muiscas") return "🏛️";
    if (texto === "romanos") return "🏺";
    if (texto === "vikingos") return "⚔️";
    if (texto === "egipcios") return "🐪";


    /* Países */

    if (texto === "espana") return "🇪🇸";
    if (texto === "francia") return "🇫🇷";
    if (texto === "italia") return "🇮🇹";
    if (texto === "japon") return "🇯🇵";


    /* Fechas */

    if (texto.includes("1819")) return "📅";
    if (texto.includes("1810")) return "📅";


    /* Personajes */

    if (texto.includes("libertador")) return "⭐";
    if (texto.includes("navegante")) return "⛵";
    if (texto.includes("explorador")) return "🧭";
    if (texto.includes("cientifico")) return "🔬";


    /* Fiestas */

    if (texto.includes("barranquilla")) return "🎉";
    if (texto.includes("bogota")) return "🏙️";
    if (texto.includes("cali")) return "🌆";
    if (texto.includes("pasto")) return "🏙️";


    /* Respuestas generales */

    if (texto.includes("generacion")) return "👨‍👩‍👧‍👦";
    if (texto.includes("region")) return "🗺️";
    if (texto.includes("memoria")) return "📚";
    if (texto.includes("cambios politicos")) return "🏛️";
    if (texto.includes("practicar diferentes")) return "🙏";
    if (texto.includes("gabriel garcia")) return "📖";


    return "🌎";

}


/* =========================================================
   SELECCIONAR RESPUESTA
========================================================= */

function seleccionarRespuesta(boton) {

    if (respuestaSeleccionada) {
        return;
    }

    respuestaSeleccionada = true;


    const tema = temas[temaActual];

    const respuestaUsuario =
        boton.dataset.respuesta;

    const respuestaCorrecta =
        tema.correcta;


    /* DESACTIVAR TODAS LAS OPCIONES */

    const botones =
        document.querySelectorAll(".opcion");

    botones.forEach(function (opcion) {

        opcion.disabled = true;

    });


    /* COMPARAR RESPUESTA */

    if (
        limpiarTexto(respuestaUsuario) ===
        limpiarTexto(respuestaCorrecta)
    ) {


        /* =========================
           RESPUESTA CORRECTA
        ========================= */

        boton.classList.add("correcta");

        puntos += 10;

        racha++;


        mostrarResultado(
            "✅ ¡Correcto! +10 puntos",
            "correcto"
        );


    } else {


        /* =========================
           RESPUESTA INCORRECTA
        ========================= */

        boton.classList.add("incorrecta");

        vidas--;

        racha = 0;


        /* MOSTRAR RESPUESTA CORRECTA */

        botones.forEach(function (opcion) {

            if (
                limpiarTexto(opcion.dataset.respuesta) ===
                limpiarTexto(respuestaCorrecta)
            ) {

                opcion.classList.add("correcta");

            }

        });


        mostrarResultado(
            "❌ Incorrecto. La respuesta correcta es: " +
            respuestaCorrecta,
            "incorrecto"
        );


        if (vidas < 0) {
            vidas = 0;
        }

    }


    actualizarMarcadores();


    /* ACTIVAR SIGUIENTE */

    const siguiente =
        document.getElementById("botonSiguiente");

    if (siguiente) {
        siguiente.disabled = false;
    }

}


/* =========================================================
   MOSTRAR RESULTADO
========================================================= */

function mostrarResultado(texto, clase) {

    const resultado =
        document.getElementById("resultado");

    if (!resultado) {
        return;
    }

    resultado.textContent = texto;

    resultado.className =
        "resultado " + clase;

}


/* =========================================================
   ACTUALIZAR PUNTOS, VIDAS Y RACHA
========================================================= */

function actualizarMarcadores() {

    const puntosElemento =
        document.getElementById("puntos");

    const vidasElemento =
        document.getElementById("vidas");

    const rachaElemento =
        document.getElementById("racha");


    /* PUNTOS */

    if (puntosElemento) {
        puntosElemento.textContent = puntos;
    }


    /* VIDAS */

    if (vidasElemento) {

        if (vidas > 0) {

            vidasElemento.textContent =
                "❤️".repeat(vidas);

        } else {

            vidasElemento.textContent =
                "🖤🖤🖤";

        }

    }


    /* RACHA */

    if (rachaElemento) {
        rachaElemento.textContent = racha;
    }

}


/* =========================================================
   MARCAR BOTÓN ACTIVO
========================================================= */

function marcarTemaActivo(nombre) {

    const botones =
        document.querySelectorAll(".menu button");


    botones.forEach(function (boton) {

        boton.classList.remove("activo");


        const texto =
            limpiarTexto(boton.textContent);


        let activo = false;


        if (
            nombre === "primeras-civilizaciones" &&
            texto.includes("primeras civilizaciones")
        ) {
            activo = true;
        }


        else if (
            nombre === "conquista" &&
            texto.includes("conquista")
        ) {
            activo = true;
        }


        else if (
            nombre === "epoca-colonial" &&
            texto.includes("epoca colonial")
        ) {
            activo = true;
        }


        else if (
            nombre === "independencia" &&
            texto.includes("independencia")
        ) {
            activo = true;
        }


        else if (
            nombre === "personajes-historicos" &&
            texto.includes("personajes historicos")
        ) {
            activo = true;
        }


        else if (
            nombre === "conflictos-importantes" &&
            texto.includes("conflictos importantes")
        ) {
            activo = true;
        }


        else if (
            nombre === "gastronomia" &&
            texto.includes("gastronomia")
        ) {
            activo = true;
        }


        else if (
            nombre === "musica-y-bailes" &&
            texto.includes("musica y bailes")
        ) {
            activo = true;
        }


        else if (
            nombre === "tradiciones" &&
            texto.includes("tradiciones")
        ) {
            activo = true;
        }


        else if (
            nombre === "religiones" &&
            texto.includes("religiones")
        ) {
            activo = true;
        }


        else if (
            nombre === "vestimenta-tipica" &&
            texto.includes("vestimenta tipica")
        ) {
            activo = true;
        }


        else if (
            nombre === "arte-y-literatura" &&
            texto.includes("arte y literatura")
        ) {
            activo = true;
        }


        else if (
            nombre === "monumentos" &&
            texto.includes("monumentos")
        ) {
            activo = true;
        }


        else if (
            nombre === "fiestas" &&
            texto.includes("fiestas")
        ) {
            activo = true;
        }


        if (activo) {
            boton.classList.add("activo");
        }

    });

}


/* =========================================================
   CONECTAR BOTONES DEL MENÚ
========================================================= */

function conectarMenu() {

    const botones =
        document.querySelectorAll(".menu button");


    botones.forEach(function (boton) {

        const texto =
            limpiarTexto(boton.textContent);


        let tema = null;


        /* HISTORIA */

        if (
            texto.includes("primeras civilizaciones")
        ) {

            tema = "primeras-civilizaciones";

        }

        else if (
            texto.includes("conquista")
        ) {

            tema = "conquista";

        }

        else if (
            texto.includes("epoca colonial")
        ) {

            tema = "epoca-colonial";

        }

        else if (
            texto.includes("independencia")
        ) {

            tema = "independencia";

        }

        else if (
            texto.includes("personajes historicos")
        ) {

            tema = "personajes-historicos";

        }

        else if (
            texto.includes("conflictos importantes")
        ) {

            tema = "conflictos-importantes";

        }


        /* CULTURA */

        else if (
            texto.includes("gastronomia")
        ) {

            tema = "gastronomia";

        }

        else if (
            texto.includes("musica y bailes")
        ) {

            tema = "musica-y-bailes";

        }

        else if (
            texto.includes("tradiciones")
        ) {

            tema = "tradiciones";

        }

        else if (
            texto.includes("religiones")
        ) {

            tema = "religiones";

        }

        else if (
            texto.includes("vestimenta tipica")
        ) {

            tema = "vestimenta-tipica";

        }

        else if (
            texto.includes("arte y literatura")
        ) {

            tema = "arte-y-literatura";

        }

        else if (
            texto.includes("monumentos")
        ) {

            tema = "monumentos";

        }

        else if (
            texto.includes("fiestas")
        ) {

            tema = "fiestas";

        }


        /* CONECTAR BOTÓN */

        if (tema) {

            boton.addEventListener("click", function () {

                cambiarTema(tema);

            });

        }

    });

}


/* =========================================================
   SIGUIENTE PREGUNTA
========================================================= */

function siguientePregunta() {

    const lista =
        Object.keys(temas);


    let posicion =
        lista.indexOf(temaActual);


    posicion++;


    if (posicion >= lista.length) {

        posicion = 0;

    }


    cambiarTema(lista[posicion]);

}


/* =========================================================
   AUDIO
========================================================= */

function reproducirAudio() {

    const tema =
        temas[temaActual];


    if (!("speechSynthesis" in window)) {

        alert(
            "Tu navegador no permite reproducir audio."
        );

        return;

    }


    /* Detener audio anterior */

    speechSynthesis.cancel();


    /* Crear voz */

    const voz =
        new SpeechSynthesisUtterance(
            tema.audio
        );


    voz.lang = "es-CO";

    /* Velocidad un poco más lenta para
       que se entienda mejor */

    voz.rate = 0.88;

    voz.pitch = 1;


    const estado =
        document.getElementById("estadoAudio");


    if (estado) {

        estado.textContent =
            "🔊 Reproduciendo...";

    }


    /* Cuando termine */

    voz.onend = function () {

        if (estado) {

            estado.textContent = "▶";

        }

    };


    /* Si ocurre un error */

    voz.onerror = function () {

        if (estado) {

            estado.textContent = "▶";

        }

    };


    /* Reproducir */

    speechSynthesis.speak(voz);

}


/* =========================================================
   BOTÓN VOLVER
========================================================= */

function volverInicio() {

    cambiarTema("gastronomia");

}


/* =========================================================
   INICIAR PROGRAMA
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        conectarMenu();

        actualizarMarcadores();

        cambiarTema("gastronomia");

    }
);