// ======================================================
// HISTORIA SIN FRONTERAS - ALEMANIA
// JavaScript organizado
// ======================================================


// ======================================================
// 1. TEMAS
// ======================================================

const temas = {

    // ==================================================
    // CULTURA
    // ==================================================

    gastronomia: {
        titulo: "Gastronomía",
        subtitulo: "Sabores tradicionales de Alemania",
        icono: "🥨",

        mensaje: "¡Descubre los sabores tradicionales de Alemania!",

        imagen: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",

        dato: "La gastronomía alemana incluye platos regionales y productos tradicionales como panes, salchichas y pretzels.",

        regiones: "Baviera • Berlín • Sajonia • Renania",

        sobre: "La gastronomía alemana cambia según la región y forma parte importante de sus tradiciones culturales.",

        pregunta: "¿Cuál de estos alimentos es muy representativo de Alemania?",

        opciones: [
            "🥨 Pretzel",
            "🌮 Taco",
            "🍣 Sushi",
            "🥐 Croissant"
        ],

        correcta: "🥨 Pretzel",

        audio: "El pretzel es uno de los alimentos tradicionales más conocidos de Alemania."
    },


    musica: {
        titulo: "Música",
        subtitulo: "Grandes compositores y tradiciones musicales",
        icono: "🎼",

        mensaje: "¡Descubre la importancia de la música en la cultura alemana!",

        imagen: "https://images.unsplash.com/photo-1507838153414-b4b713384a76",

        dato: "Alemania tiene una importante tradición musical relacionada con compositores como Johann Sebastian Bach y Ludwig van Beethoven.",

        regiones: "Leipzig • Bonn • Berlín • Múnich",

        sobre: "La música clásica ocupa un lugar importante en la cultura alemana y cuenta con grandes compositores reconocidos internacionalmente.",

        pregunta: "¿Cuál de estos compositores está relacionado con la tradición musical alemana?",

        opciones: [
            "🎼 Johann Sebastian Bach",
            "🎸 Bob Marley",
            "🎤 Elvis Presley",
            "🎹 Astor Piazzolla"
        ],

        correcta: "🎼 Johann Sebastian Bach",

        audio: "Johann Sebastian Bach es uno de los compositores más importantes de la tradición musical alemana."
    },


    tradiciones: {
        titulo: "Tradiciones",
        subtitulo: "Costumbres que forman parte de la cultura",
        icono: "🎊",

        mensaje: "¡Conoce algunas tradiciones de Alemania!",

        imagen: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5",

        dato: "Alemania cuenta con numerosas tradiciones regionales y celebraciones populares.",

        regiones: "Baviera • Colonia • Berlín • Renania",

        sobre: "Las tradiciones alemanas varían entre regiones y están relacionadas con fiestas, música, gastronomía y costumbres locales.",

        pregunta: "¿Cuál de estas celebraciones es tradicionalmente asociada con Alemania?",

        opciones: [
            "🎉 Oktoberfest",
            "🎎 Hanami",
            "🪅 Día de Muertos",
            "🎭 Carnaval de Río"
        ],

        correcta: "🎉 Oktoberfest",

        audio: "El Oktoberfest es una de las celebraciones más conocidas asociadas con Alemania."
    },


    fiestas: {
        titulo: "Fiestas",
        subtitulo: "Celebraciones llenas de tradición",
        icono: "🎉",

        mensaje: "¡Descubre las fiestas tradicionales alemanas!",

        imagen: "https://images.unsplash.com/photo-1508854710579-5cecc3a2c2b1",

        dato: "Alemania celebra numerosas fiestas tradicionales durante todo el año.",

        regiones: "Múnich • Colonia • Berlín • Baviera",

        sobre: "Las fiestas alemanas reúnen música, comida, actividades culturales y tradiciones regionales.",

        pregunta: "¿En qué ciudad se celebra tradicionalmente el Oktoberfest?",

        opciones: [
            "🏙️ Múnich",
            "🏙️ Berlín",
            "🏙️ Hamburgo",
            "🏙️ Frankfurt"
        ],

        correcta: "🏙️ Múnich",

        audio: "El Oktoberfest se celebra tradicionalmente en Múnich."
    },


    vestimenta: {
        titulo: "Vestimenta típica",
        subtitulo: "Ropa tradicional de diferentes regiones",
        icono: "👗",

        mensaje: "¡Conoce la vestimenta tradicional alemana!",

        imagen: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d",

        dato: "Algunas regiones de Alemania conservan prendas tradicionales como el Dirndl y el Lederhosen.",

        regiones: "Baviera • Tirol bávaro • Regiones alpinas",

        sobre: "La vestimenta tradicional puede variar según la región y se utiliza especialmente durante algunas celebraciones.",

        pregunta: "¿Cuál de estas prendas está asociada con la vestimenta tradicional bávara?",

        opciones: [
            "👗 Dirndl",
            "🥋 Kimono",
            "👘 Sari",
            "🧥 Poncho"
        ],

        correcta: "👗 Dirndl",

        audio: "El Dirndl es una prenda tradicional asociada especialmente con Baviera."
    },


    arte: {
        titulo: "Arte y literatura",
        subtitulo: "Poetas, escritores y artistas",
        icono: "🎨",

        mensaje: "¡Descubre el arte y la literatura alemana!",

        imagen: "https://images.unsplash.com/photo-1549490349-8643362247b5",

        dato: "Alemania tiene una larga tradición literaria y artística, con figuras como Goethe y los hermanos Grimm.",

        regiones: "Weimar • Berlín • Frankfurt • Kassel",

        sobre: "La literatura alemana ha producido importantes escritores, poetas y recopiladores de historias que han influido en la cultura mundial.",

        pregunta: "¿Quién fue un importante escritor y poeta alemán?",

        opciones: [
            "📖 Johann Wolfgang von Goethe",
            "📖 William Shakespeare",
            "📖 Miguel de Cervantes",
            "📖 Gabriel García Márquez"
        ],

        correcta: "📖 Johann Wolfgang von Goethe",

        audio: "Johann Wolfgang von Goethe fue uno de los escritores y poetas más importantes de Alemania."
    },


    monumentos: {
        titulo: "Monumentos",
        subtitulo: "Lugares que cuentan historias",
        icono: "🏰",

        mensaje: "¡Conoce algunos monumentos importantes de Alemania!",

        imagen: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",

        dato: "Alemania posee numerosos edificios y lugares históricos reconocidos por su valor cultural.",

        regiones: "Berlín • Baviera • Colonia • Sajonia",

        sobre: "Los monumentos alemanes reflejan diferentes periodos de su historia y forman parte de su patrimonio cultural.",

        pregunta: "¿Cuál de estos monumentos se encuentra en Alemania?",

        opciones: [
            "🏰 Puerta de Brandeburgo",
            "🗼 Torre Eiffel",
            "🏛️ Coliseo Romano",
            "🗿 Moái"
        ],

        correcta: "🏰 Puerta de Brandeburgo",

        audio: "La Puerta de Brandeburgo se encuentra en Berlín, Alemania."
    },


    // ==================================================
    // HISTORIA
    // ==================================================

    imperio: {
        titulo: "Imperio alemán",
        subtitulo: "La formación de un Estado alemán",
        icono: "👑",

        mensaje: "¡Descubre una etapa importante de la historia alemana!",

        imagen: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",

        dato: "El Imperio alemán fue proclamado en 1871.",

        regiones: "Berlín • Prusia • Alemania",

        sobre: "La unificación alemana del siglo XIX llevó a la creación del Imperio alemán en 1871.",

        pregunta: "¿En qué año fue proclamado el Imperio alemán?",

        opciones: [
            "📅 1871",
            "📅 1648",
            "📅 1914",
            "📅 1945"
        ],

        correcta: "📅 1871",

        audio: "El Imperio alemán fue proclamado en mil ochocientos setenta y uno."
    },


    primeraGuerra: {
        titulo: "Primera Guerra Mundial",
        subtitulo: "Alemania en un conflicto mundial",
        icono: "🌍",

        mensaje: "¡Conoce el papel de Alemania durante la Primera Guerra Mundial!",

        imagen: "https://images.unsplash.com/photo-1461360228754-6e81c478b882",

        dato: "La Primera Guerra Mundial comenzó en 1914 y terminó en 1918.",

        regiones: "Europa",

        sobre: "Alemania participó en la Primera Guerra Mundial como una de las principales potencias de las Potencias Centrales.",

        pregunta: "¿En qué año comenzó la Primera Guerra Mundial?",

        opciones: [
            "📅 1914",
            "📅 1939",
            "📅 1871",
            "📅 1945"
        ],

        correcta: "📅 1914",

        audio: "La Primera Guerra Mundial comenzó en mil novecientos catorce."
    },


    segundaGuerra: {
        titulo: "Segunda Guerra Mundial",
        subtitulo: "Un periodo decisivo de la historia",
        icono: "🌍",

        mensaje: "¡Aprende sobre este importante acontecimiento histórico!",

        imagen: "https://images.unsplash.com/photo-1500534623283-312aade485b7",

        dato: "La Segunda Guerra Mundial comenzó en 1939 y terminó en 1945.",

        regiones: "Europa • Alemania",

        sobre: "La Segunda Guerra Mundial tuvo enormes consecuencias políticas, sociales y económicas para Alemania y Europa.",

        pregunta: "¿En qué año terminó la Segunda Guerra Mundial?",

        opciones: [
            "📅 1945",
            "📅 1918",
            "📅 1933",
            "📅 1950"
        ],

        correcta: "📅 1945",

        audio: "La Segunda Guerra Mundial terminó en mil novecientos cuarenta y cinco."
    },


    berlin: {
        titulo: "Muro de Berlín",
        subtitulo: "Una ciudad dividida",
        icono: "🧱",

        mensaje: "¡Conoce la historia del Muro de Berlín!",

        imagen: "https://images.unsplash.com/photo-1560969184-10fe8719e047",

        dato: "El Muro de Berlín fue construido en 1961 y cayó en 1989.",

        regiones: "Berlín",

        sobre: "El Muro de Berlín se convirtió en uno de los símbolos más importantes de la división de Alemania durante la Guerra Fría.",

        pregunta: "¿En qué año cayó el Muro de Berlín?",

        opciones: [
            "📅 1989",
            "📅 1961",
            "📅 1945",
            "📅 1990"
        ],

        correcta: "📅 1989",

        audio: "El Muro de Berlín cayó en mil novecientos ochenta y nueve."
    },


    reunificacion: {
        titulo: "Reunificación alemana",
        subtitulo: "Alemania vuelve a estar unida",
        icono: "🇩🇪",

        mensaje: "¡Descubre cómo Alemania volvió a estar unida!",

        imagen: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",

        dato: "La reunificación alemana ocurrió el 3 de octubre de 1990.",

        regiones: "Berlín • Alemania Oriental • Alemania Occidental",

        sobre: "La reunificación unió nuevamente a Alemania Oriental y Alemania Occidental.",

        pregunta: "¿En qué año ocurrió la reunificación alemana?",

        opciones: [
            "🇩🇪 1990",
            "🇩🇪 1989",
            "🇩🇪 1949",
            "🇩🇪 1918"
        ],

        correcta: "🇩🇪 1990",

        audio: "La reunificación alemana ocurrió en mil novecientos noventa."
    },


    personajes: {
        titulo: "Personajes históricos",
        subtitulo: "Personas que dejaron huella",
        icono: "👤",

        mensaje: "¡Conoce algunos personajes importantes de Alemania!",

        imagen: "https://images.unsplash.com/photo-1505664194779-8beaceb93744",

        dato: "Alemania ha sido hogar de importantes escritores, científicos, músicos y pensadores.",

        regiones: "Bonn • Weimar • Leipzig • Berlín",

        sobre: "Personajes como Goethe, Bach, Beethoven y otros han dejado una importante huella en la cultura europea.",

        pregunta: "¿Cuál de estos personajes fue un famoso compositor alemán?",

        opciones: [
            "🎼 Ludwig van Beethoven",
            "🎨 Pablo Picasso",
            "📖 Miguel de Cervantes",
            "🎭 William Shakespeare"
        ],

        correcta: "🎼 Ludwig van Beethoven",

        audio: "Ludwig van Beethoven fue uno de los compositores más importantes relacionados con Alemania."
    },


    estados: {
        titulo: "Estados federados",
        subtitulo: "La organización territorial de Alemania",
        icono: "🗺️",

        mensaje: "¡Descubre cómo está organizada Alemania!",

        imagen: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",

        dato: "Alemania está formada por 16 estados federados.",

        regiones: "Baviera • Sajonia • Berlín • Hamburgo",

        sobre: "Alemania es un Estado federal compuesto por 16 estados federados, cada uno con características y tradiciones propias.",

        pregunta: "¿Cuántos estados federados tiene Alemania?",

        opciones: [
            "🗺️ 16",
            "🗺️ 10",
            "🗺️ 20",
            "🗺️ 25"
        ],

        correcta: "🗺️ 16",

        audio: "Alemania está formada por dieciséis estados federados."
    }
};


// ======================================================
// 2. VARIABLES DEL JUEGO
// ======================================================

let temaActual = "gastronomia";

let puntos = 0;

let vidas = 3;

let respuestaContestada = false;

let retosCompletados = 0;

let respuestasCorrectas = 0;

const totalRetos = Object.keys(temas).length;


// ======================================================
// 3. CAMBIAR DE TEMA
// ======================================================

function cambiarTema(nombre, boton = null) {

    if (!temas[nombre]) {
        return;
    }

    temaActual = nombre;

    const tema = temas[nombre];

    respuestaContestada = false;


    // TÍTULO

    document.getElementById("iconoTema").textContent =
        tema.icono;

    document.getElementById("tituloTema").textContent =
        tema.titulo;

    document.getElementById("subtituloTema").textContent =
        tema.subtitulo;


    // MENSAJE

    const mensaje =
        document.getElementById("mensajeRobot");

    if (mensaje) {
        mensaje.textContent =
            tema.mensaje;
    }


    // IMAGEN

    const imagen =
        document.getElementById("imagenTema");

    if (imagen) {

        imagen.src =
            tema.imagen;

        imagen.alt =
            tema.titulo;
    }


    // DATO

    const dato =
        document.getElementById("datoTema");

    if (dato) {

        dato.textContent =
            tema.dato;
    }


    // REGIONES

    const regiones =
        document.getElementById("regionesTema");

    if (regiones) {

        regiones.textContent =
            tema.regiones;
    }


    // SOBRE EL TEMA

    const sobre =
        document.getElementById("sobreTexto");

    if (sobre) {

        sobre.textContent =
            tema.sobre;
    }


    // PREGUNTA

    const pregunta =
        document.getElementById("pregunta");

    if (pregunta) {

        pregunta.textContent =
            tema.pregunta;
    }


    // CREAR RESPUESTAS

    crearOpciones(tema);


    // LIMPIAR RESULTADO

    const resultado =
        document.getElementById("resultado");

    if (resultado) {

        resultado.textContent = "";

        resultado.className =
            "resultado";
    }


    // DESACTIVAR SIGUIENTE

    const siguiente =
        document.getElementById("botonSiguiente");

    if (siguiente) {

        siguiente.disabled = true;
    }


    // MENÚ ACTIVO

    document
        .querySelectorAll(".menu button")
        .forEach(btn =>
            btn.classList.remove("activo")
        );


    if (boton) {

        boton.classList.add("activo");

    } else {

        document
            .querySelectorAll(".menu button")
            .forEach(btn => {

                if (
                    btn.textContent
                        .toLowerCase()
                        .includes(
                            tema.titulo.toLowerCase()
                        )
                ) {

                    btn.classList.add("activo");

                }

            });

    }
}


// ======================================================
// 4. CREAR OPCIONES
// ======================================================

function crearOpciones(tema) {

    const contenedor =
        document.getElementById("opciones");

    if (!contenedor) {
        return;
    }

    contenedor.innerHTML = "";


    // COPIAR RESPUESTAS

    const opcionesMezcladas =
        [...tema.opciones];


    // ==================================================
    // MEZCLAR RESPUESTAS
    // ==================================================

    opcionesMezcladas.sort(
        () => Math.random() - 0.5
    );


    // ==================================================
    // CREAR BOTONES
    // ==================================================

    opcionesMezcladas.forEach(opcion => {

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

                comprobarRespuesta(
                    opcion,
                    boton,
                    tema
                );

            }
        );


        contenedor.appendChild(boton);

    });
}


// ======================================================
// 5. COMPROBAR RESPUESTA
// ======================================================

function comprobarRespuesta(
    respuesta,
    boton,
    tema
) {

    // Evitar doble respuesta

    if (respuestaContestada) {
        return;
    }

    respuestaContestada = true;


    // Desactivar botones

    const botones =
        document.querySelectorAll(
            "#opciones button"
        );

    botones.forEach(btn => {

        btn.disabled = true;

    });


    const resultado =
        document.getElementById(
            "resultado"
        );


    // ==================================================
    // CORRECTA
    // ==================================================

    if (respuesta === tema.correcta) {

        boton.classList.add(
            "correcta"
        );


        // +10 PUNTOS

        puntos += 10;

        respuestasCorrectas++;

        retosCompletados++;


        // ACTUALIZAR PUNTOS

        const puntosElemento =
            document.getElementById(
                "puntos"
            );

        if (puntosElemento) {

            puntosElemento.textContent =
                puntos;

        }


        // MENSAJE

        if (resultado) {

            resultado.textContent =
                "✅ ¡Correcto! +10 puntos 🎉";

            resultado.className =
                "resultado correcto";
        }


        // ANIMACIÓN

        const tarjetaPuntos =
            document.querySelector(
                ".puntos"
            );

        if (tarjetaPuntos) {

            tarjetaPuntos.classList.add(
                "animar"
            );


            setTimeout(() => {

                tarjetaPuntos.classList.remove(
                    "animar"
                );

            }, 500);

        }

    }


    // ==================================================
    // INCORRECTA
    // ==================================================

    else {

        boton.classList.add(
            "incorrecta"
        );


        // QUITAR VIDA

        vidas--;

        if (vidas < 0) {

            vidas = 0;

        }


        retosCompletados++;


        // ACTUALIZAR VIDAS

        const vidasElemento =
            document.getElementById(
                "vidas"
            );

        if (vidasElemento) {

            vidasElemento.textContent =
                vidas;

        }


        // MENSAJE

        if (resultado) {

            resultado.innerHTML =
                `❌ Respuesta incorrecta.<br>
                La respuesta correcta era:
                <strong>${tema.correcta}</strong>`;

            resultado.className =
                "resultado incorrecto";

        }


        // MARCAR RESPUESTA CORRECTA

        botones.forEach(btn => {

            if (
                btn.textContent ===
                tema.correcta
            ) {

                btn.classList.add(
                    "correcta"
                );

            }

        });

    }


    // ACTUALIZAR PROGRESO

    actualizarProgreso();


    // ACTIVAR SIGUIENTE

    const siguiente =
        document.getElementById(
            "botonSiguiente"
        );

    if (siguiente) {

        siguiente.disabled = false;

    }
}


// ======================================================
// 6. ACTUALIZAR PROGRESO
// ======================================================

function actualizarProgreso() {

    const porcentaje =
        Math.round(
            (retosCompletados /
                totalRetos) *
            100
        );


    // PORCENTAJE

    const porcentajeElemento =
        document.getElementById(
            "porcentaje"
        );

    if (porcentajeElemento) {

        porcentajeElemento.textContent =
            porcentaje + "%";

    }


    // RETOS

    const retosElemento =
        document.getElementById(
            "retosCompletados"
        );

    if (retosElemento) {

        retosElemento.textContent =
            retosCompletados;

    }


    // CORRECTAS

    const correctasElemento =
        document.getElementById(
            "respuestasCorrectas"
        );

    if (correctasElemento) {

        correctasElemento.textContent =
            respuestasCorrectas;

    }


    // ==================================================
    // CÍRCULO
    // ==================================================

    const circulo =
        document.getElementById(
            "circuloProgreso"
        );

    if (circulo) {

        const longitud = 314;

        const avance =
            longitud -
            (
                longitud *
                porcentaje /
                100
            );

        circulo.style.strokeDashoffset =
            avance;

    }


    // ==================================================
    // MENSAJE DE PROGRESO
    // ==================================================

    const mensaje =
        document.getElementById(
            "mensajeProgreso"
        );

    if (mensaje) {

        if (porcentaje === 0) {

            mensaje.textContent =
                "¡Comienza tu aventura por Alemania! 🇩🇪";

        }

        else if (porcentaje < 50) {

            mensaje.textContent =
                "¡Vas muy bien! Sigue aprendiendo 📚";

        }

        else if (porcentaje < 100) {

            mensaje.textContent =
                "¡Ya casi completas todos los retos! 🚀";

        }

        else {

            mensaje.textContent =
                "¡Felicitaciones! Completaste todos los retos 🏆";

        }

    }
}


// ======================================================
// 7. ESCUCHAR
// ======================================================

function escuchar() {

    const tema =
        temas[temaActual];

    if (!tema) {
        return;
    }


    if (
        !("speechSynthesis" in window)
    ) {

        alert(
            "Tu navegador no permite reproducir el audio."
        );

        return;
    }


    window.speechSynthesis.cancel();


    const voz =
        new SpeechSynthesisUtterance(
            tema.audio
        );


    voz.lang = "de-DE";

    voz.rate = 0.9;

    voz.pitch = 1;


    window.speechSynthesis.speak(
        voz
    );
}


// ======================================================
// 8. SIGUIENTE TEMA
// ======================================================

function siguienteTema() {

    const nombres =
        Object.keys(temas);


    const posicion =
        nombres.indexOf(
            temaActual
        );


    let siguiente =
        posicion + 1;


    if (
        siguiente >=
        nombres.length
    ) {

        siguiente = 0;

    }


    cambiarTema(
        nombres[siguiente]
    );
}


// ======================================================
// 9. INICIAR PÁGINA
// ======================================================

window.addEventListener(
    "DOMContentLoaded",
    () => {

        cambiarTema(
            "gastronomia"
        );

        actualizarProgreso();

    }
);