// ======================================================
// HISTORIA SIN FRONTERAS - MÉXICO
// JAVASCRIPT COMPLETO
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
        subtitulo: "Sabores que cuentan historias",
        icono: "🌮",
        mensaje: "¡Descubre los sabores tradicionales de México!",
        imagen: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47",
        dato: "La gastronomía mexicana es reconocida por su gran variedad de ingredientes, técnicas y tradiciones.",
        regiones: "Oaxaca • Yucatán • Puebla • Jalisco",
        sobre: "La comida mexicana combina ingredientes indígenas y tradiciones que se han transmitido durante generaciones.",
        pregunta: "¿Cuál de estos alimentos es uno de los más representativos de la gastronomía mexicana?",
        opciones: [
            "🌮 Taco",
            "🍕 Pizza",
            "🍣 Sushi",
            "🥐 Croissant"
        ],
        correcta: "🌮 Taco",
        audio: "La gastronomía mexicana es una de las más reconocidas del mundo."
    },

    musica: {
        titulo: "Música y bailes",
        subtitulo: "Ritmos que cuentan historias",
        icono: "🎺",
        mensaje: "¡Conoce los sonidos tradicionales de México!",
        imagen: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
        dato: "El mariachi es uno de los géneros musicales más representativos de México.",
        regiones: "Jalisco • Veracruz • Oaxaca • Yucatán",
        sobre: "La música mexicana incluye mariachi, sones, música norteña y muchas otras expresiones regionales.",
        pregunta: "¿Cuál es una de las expresiones musicales más representativas de México?",
        opciones: [
            "🎺 Mariachi",
            "🎻 Música celta",
            "🥁 Samba",
            "🎹 Blues"
        ],
        correcta: "🎺 Mariachi",
        audio: "El mariachi es una expresión musical tradicional de México."
    },

    tradiciones: {
        titulo: "Tradiciones",
        subtitulo: "Costumbres que pasan de generación en generación",
        icono: "🎊",
        mensaje: "¡Descubre las tradiciones mexicanas!",
        imagen: "https://images.unsplash.com/photo-1509537257950-20f875b036b8",
        dato: "Las tradiciones mexicanas combinan elementos indígenas y españoles.",
        regiones: "Todo México",
        sobre: "México posee numerosas tradiciones que forman parte de la identidad cultural de sus comunidades.",
        pregunta: "¿Cuál es una tradición mexicana muy conocida?",
        opciones: [
            "💀 Día de Muertos",
            "🎄 Navidad nórdica",
            "🎎 Hanami",
            "🏮 Festival chino"
        ],
        correcta: "💀 Día de Muertos",
        audio: "El Día de Muertos es una de las tradiciones culturales más conocidas de México."
    },

    fiestas: {
        titulo: "Fiestas mexicanas",
        subtitulo: "Celebraciones llenas de color",
        icono: "🎉",
        mensaje: "¡Conoce algunas de las celebraciones más importantes de México!",
        imagen: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5",
        dato: "Las fiestas mexicanas suelen incluir música, comida, danzas y reuniones familiares.",
        regiones: "Todo México",
        sobre: "Las celebraciones mexicanas reflejan la diversidad cultural y las tradiciones de sus comunidades.",
        pregunta: "¿Qué celebración mexicana honra a familiares y seres queridos fallecidos?",
        opciones: [
            "💀 Día de Muertos",
            "🎆 Año Nuevo",
            "🎃 Halloween",
            "🍂 Acción de Gracias"
        ],
        correcta: "💀 Día de Muertos",
        audio: "El Día de Muertos es una celebración tradicional mexicana."
    },

    vestimenta: {
        titulo: "Vestimenta típica",
        subtitulo: "Ropa que representa diferentes regiones",
        icono: "👗",
        mensaje: "¡Descubre los colores y diseños de la vestimenta mexicana!",
        imagen: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f",
        dato: "La vestimenta tradicional mexicana cambia según la región y las comunidades.",
        regiones: "Oaxaca • Chiapas • Yucatán • Puebla",
        sobre: "Los textiles tradicionales pueden incluir bordados, colores y diseños relacionados con la identidad de cada comunidad.",
        pregunta: "¿Qué elemento es característico de muchas prendas tradicionales mexicanas?",
        opciones: [
            "🧵 Bordados",
            "🧥 Trajes de nieve",
            "👔 Corbatas europeas",
            "🥾 Botas de esquí"
        ],
        correcta: "🧵 Bordados",
        audio: "Los bordados son elementos frecuentes en diferentes prendas tradicionales mexicanas."
    },

    arte: {
        titulo: "Arte y literatura",
        subtitulo: "Creatividad que refleja la historia",
        icono: "🎨",
        mensaje: "¡Explora el arte mexicano!",
        imagen: "https://images.unsplash.com/photo-1549490349-8643362247b5",
        dato: "El arte mexicano incluye pintura mural, literatura, escultura, artesanías y muchas otras expresiones.",
        regiones: "Ciudad de México • Oaxaca • Puebla • Jalisco",
        sobre: "El arte mexicano ha representado acontecimientos históricos, costumbres y aspectos de la vida cotidiana.",
        pregunta: "¿Cuál de estos es una expresión artística?",
        opciones: [
            "🎨 Pintura mural",
            "🚗 Automóvil",
            "📱 Teléfono",
            "✈️ Avión"
        ],
        correcta: "🎨 Pintura mural",
        audio: "La pintura mural es una importante expresión del arte mexicano."
    },

    monumentos: {
        titulo: "Monumentos",
        subtitulo: "Lugares que cuentan historias",
        icono: "🏛️",
        mensaje: "¡Conoce algunos lugares históricos de México!",
        imagen: "https://images.unsplash.com/photo-1518638150340-f706e86654de",
        dato: "México cuenta con numerosos sitios arqueológicos y monumentos históricos.",
        regiones: "Yucatán • Ciudad de México • Oaxaca • Chiapas",
        sobre: "Los monumentos y sitios arqueológicos permiten conocer diferentes etapas de la historia mexicana.",
        pregunta: "¿Cuál de estos lugares se encuentra en México?",
        opciones: [
            "🏛️ Chichén Itzá",
            "🗼 Torre Eiffel",
            "🏰 Castillo de Windsor",
            "🗿 Moái de Rapa Nui"
        ],
        correcta: "🏛️ Chichén Itzá",
        audio: "Chichén Itzá es uno de los sitios arqueológicos más conocidos de México."
    },


    // ==================================================
    // HISTORIA
    // ==================================================

    civilizaciones: {
        titulo: "Civilizaciones prehispánicas",
        subtitulo: "Grandes culturas antes de la llegada de los españoles",
        icono: "🏛️",
        mensaje: "¡Descubre las grandes civilizaciones que habitaron México!",
        imagen: "https://images.unsplash.com/photo-1518638150340-f706e86654de",
        dato: "Entre las civilizaciones mesoamericanas destacaron los mayas, mexicas, zapotecas y muchas otras.",
        regiones: "Yucatán • Oaxaca • Valle de México • Chiapas",
        sobre: "Las culturas prehispánicas desarrollaron conocimientos de agricultura, arquitectura, astronomía, escritura y organización social.",
        pregunta: "¿Cuál de estas fue una civilización que habitó Mesoamérica?",
        opciones: [
            "🏛️ Maya",
            "🏰 Romana",
            "⚔️ Vikinga",
            "🏯 Japonesa"
        ],
        correcta: "🏛️ Maya",
        audio: "Los mayas fueron una de las grandes civilizaciones de Mesoamérica."
    },

    conquista: {
        titulo: "Conquista de México",
        subtitulo: "Un momento decisivo de la historia",
        icono: "⚔️",
        mensaje: "¡Aprende sobre uno de los acontecimientos más importantes de la historia mexicana!",
        imagen: "https://images.unsplash.com/photo-1518638150340-f706e86654de",
        dato: "La conquista del Imperio mexica ocurrió a comienzos del siglo XVI.",
        regiones: "Valle de México • Veracruz • Tlaxcala",
        sobre: "La conquista transformó profundamente la sociedad, la política y la cultura de los territorios que posteriormente formarían México.",
        pregunta: "¿En qué siglo ocurrió la conquista del Imperio mexica?",
        opciones: [
            "📅 Siglo XVI",
            "📅 Siglo X",
            "📅 Siglo XVIII",
            "📅 Siglo XX"
        ],
        correcta: "📅 Siglo XVI",
        audio: "La conquista del Imperio mexica ocurrió durante el siglo dieciséis."
    },

    colonial: {
        titulo: "Época colonial",
        subtitulo: "México durante el dominio español",
        icono: "🏰",
        mensaje: "¡Conoce cómo era la sociedad durante la época colonial!",
        imagen: "https://images.unsplash.com/photo-1531058020387-3be344556be6",
        dato: "Durante el periodo colonial se mezclaron diferentes culturas, costumbres y formas de organización.",
        regiones: "Nueva España",
        sobre: "Durante la época colonial surgieron nuevas formas de organización política, económica, social y cultural.",
        pregunta: "¿Qué grupos culturales se mezclaron durante la época colonial?",
        opciones: [
            "🌎 Indígena y española",
            "🌎 Africana y japonesa",
            "🌎 China y romana",
            "🌎 Griega y egipcia"
        ],
        correcta: "🌎 Indígena y española",
        audio: "Durante la época colonial se produjo una mezcla de diferentes culturas."
    },

    independencia: {
        titulo: "Independencia de México",
        subtitulo: "El camino hacia una nación independiente",
        icono: "🇲🇽",
        mensaje: "¡Conoce el proceso de independencia de México!",
        imagen: "https://images.unsplash.com/photo-1548013146-72479768bada",
        dato: "El movimiento de Independencia comenzó en 1810.",
        regiones: "Guanajuato • Querétaro • Ciudad de México",
        sobre: "La Independencia fue un proceso político y social que terminó con el dominio español sobre México.",
        pregunta: "¿En qué año comenzó el movimiento de Independencia de México?",
        opciones: [
            "🇲🇽 1810",
            "🇲🇽 1492",
            "🇲🇽 1910",
            "🇲🇽 1821"
        ],
        correcta: "🇲🇽 1810",
        audio: "El movimiento de Independencia de México comenzó en mil ochocientos diez."
    },

    personajes: {
        titulo: "Personajes históricos",
        subtitulo: "Personas que marcaron la historia",
        icono: "👤",
        mensaje: "¡Conoce algunos personajes importantes de la historia de México!",
        imagen: "https://images.unsplash.com/photo-1544967082-d9d25d867d66",
        dato: "Miguel Hidalgo fue uno de los principales líderes del inicio de la Independencia.",
        regiones: "Guanajuato • Querétaro • Ciudad de México",
        sobre: "Diferentes personajes participaron en procesos importantes como la Independencia y la Revolución Mexicana.",
        pregunta: "¿Quién fue uno de los líderes del inicio de la Independencia de México?",
        opciones: [
            "Miguel Hidalgo",
            "Napoleón Bonaparte",
            "Julio César",
            "George Washington"
        ],
        correcta: "Miguel Hidalgo",
        audio: "Miguel Hidalgo fue uno de los líderes del inicio de la Independencia de México."
    },

    revolucion: {
        titulo: "Revolución Mexicana",
        subtitulo: "Un movimiento que transformó al país",
        icono: "⚔️",
        mensaje: "¡Aprende sobre la Revolución Mexicana!",
        imagen: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65",
        dato: "La Revolución Mexicana comenzó en 1910.",
        regiones: "Todo México",
        sobre: "La Revolución Mexicana fue un proceso social y político que produjo importantes cambios en el país.",
        pregunta: "¿En qué año comenzó la Revolución Mexicana?",
        opciones: [
            "📅 1910",
            "📅 1810",
            "📅 1821",
            "📅 1492"
        ],
        correcta: "📅 1910",
        audio: "La Revolución Mexicana comenzó en mil novecientos diez."
    }
};


// ======================================================
// 2. VARIABLES DEL JUEGO
// ======================================================

let temaActual = "gastronomia";
let puntos = 0;
let vidas = 5;

let respuestaContestada = false;

let retosCompletados = 0;
let respuestasCorrectas = 0;

const totalRetos = Object.keys(temas).length;


// ======================================================
// 3. VARIABLES DE RECUPERACIÓN
// ======================================================

let respuestaRecuperacion = null;
let recuperacionContestada = false;

const preguntaRecuperacion = {
    pregunta: "¿Cuál de estos elementos es representativo de la cultura mexicana?",
    opciones: [
        "🌮 Tacos",
        "🍣 Sushi",
        "🍕 Pizza",
        "🥐 Croissant"
    ],
    correcta: "🌮 Tacos"
};


// ======================================================
// 4. CAMBIAR DE TEMA
// ======================================================

function cambiarTema(nombre, boton = null) {

    if (vidas <= 0) {
        mostrarModalRecuperacion();
        return;
    }

    if (!temas[nombre]) {
        return;
    }

    temaActual = nombre;
    respuestaContestada = false;

    const tema = temas[nombre];

    const icono = document.getElementById("iconoTema");
    if (icono) {
        icono.textContent = tema.icono;
    }

    const titulo = document.getElementById("tituloTema");
    if (titulo) {
        titulo.textContent = tema.titulo;
    }

    const subtitulo = document.getElementById("subtituloTema");
    if (subtitulo) {
        subtitulo.textContent = tema.subtitulo;
    }

    const mensaje =
        document.getElementById("mensajeRobot") ||
        document.getElementById("mensaje");

    if (mensaje) {
        mensaje.textContent = tema.mensaje;
    }

    const imagen = document.getElementById("imagenTema");
    if (imagen) {
        imagen.src = tema.imagen;
        imagen.alt = tema.titulo;
    }

    const dato =
        document.getElementById("datoTema") ||
        document.getElementById("datoTexto");

    if (dato) {
        dato.textContent = tema.dato;
    }

    const regiones =
        document.getElementById("regionesTema") ||
        document.getElementById("regiones");

    if (regiones) {
        regiones.textContent = tema.regiones;
    }

    const sobre = document.getElementById("sobreTexto");
    if (sobre) {
        sobre.textContent = tema.sobre;
    }

    const pregunta = document.getElementById("pregunta");
    if (pregunta) {
        pregunta.textContent = tema.pregunta;
    }

    crearOpciones(tema);

    const resultado = document.getElementById("resultado");
    if (resultado) {
        resultado.textContent = "";
        resultado.className = "resultado";
    }

    const siguiente =
        document.getElementById("botonSiguiente");

    if (siguiente) {
        siguiente.disabled = true;
    }

    document
        .querySelectorAll(".menu button, .menu-seccion button")
        .forEach(btn => btn.classList.remove("activo"));

    if (boton) {
        boton.classList.add("activo");
    }
}


// ======================================================
// 5. CREAR OPCIONES
// ======================================================

function crearOpciones(tema) {

    const contenedor =
        document.getElementById("opciones");

    if (!contenedor) {
        return;
    }

    contenedor.innerHTML = "";

    const opcionesMezcladas = [...tema.opciones];

    opcionesMezcladas.sort(() => Math.random() - 0.5);

    opcionesMezcladas.forEach(opcion => {

        const boton =
            document.createElement("button");

        boton.type = "button";
        boton.className = "opcion";
        boton.textContent = opcion;

        if (vidas <= 0) {
            boton.disabled = true;
        }

        boton.addEventListener("click", () => {

            comprobarRespuesta(
                opcion,
                boton,
                tema
            );

        });

        contenedor.appendChild(boton);

    });
}


// ======================================================
// 6. COMPROBAR RESPUESTA NORMAL
// ======================================================

function comprobarRespuesta(respuesta, boton, tema) {

    if (vidas <= 0) {
        mostrarModalRecuperacion();
        return;
    }

    if (respuestaContestada) {
        return;
    }

    respuestaContestada = true;

    const botones =
        document.querySelectorAll("#opciones button");

    botones.forEach(btn => {
        btn.disabled = true;
    });

    const resultado =
        document.getElementById("resultado");


    // ==================================================
    // RESPUESTA CORRECTA
    // ==================================================

    if (respuesta === tema.correcta) {

        boton.classList.add("correcta");

        puntos += 10;
        respuestasCorrectas++;
        retosCompletados++;

        const puntosElemento =
            document.getElementById("puntos");

        if (puntosElemento) {
            puntosElemento.textContent = puntos;
        }

        if (resultado) {
            resultado.textContent =
                "✅ ¡Correcto! +10 puntos 🎉";

            resultado.className =
                "resultado correcto";
        }

        const tarjetaPuntos =
            document.querySelector(".puntos");

        if (tarjetaPuntos) {

            tarjetaPuntos.classList.add("animar");

            setTimeout(() => {
                tarjetaPuntos.classList.remove("animar");
            }, 500);
        }
    }


    // ==================================================
    // RESPUESTA INCORRECTA
    // ==================================================

    else {

        boton.classList.add("incorrecta");

        vidas--;

        if (vidas < 0) {
            vidas = 0;
        }

        retosCompletados++;

        actualizarVidas();

        if (resultado) {

            resultado.innerHTML =
                `❌ Respuesta incorrecta.<br>
                La respuesta correcta era:
                <strong>${tema.correcta}</strong>`;

            resultado.className =
                "resultado incorrecto";
        }

        botones.forEach(btn => {

            if (btn.textContent === tema.correcta) {
                btn.classList.add("correcta");
            }

        });

        if (vidas === 0) {

            const siguiente =
                document.getElementById("botonSiguiente");

            if (siguiente) {
                siguiente.disabled = true;
            }

            setTimeout(() => {
                mostrarModalRecuperacion();
            }, 700);
        }
    }

    actualizarProgreso();

    const siguiente =
        document.getElementById("botonSiguiente");

    if (siguiente) {
        siguiente.disabled = vidas <= 0;
    }
}


// ======================================================
// 7. ACTUALIZAR VIDAS
// ======================================================

function actualizarVidas() {

    const elemento =
        document.getElementById("vidas");

    if (elemento) {
        elemento.textContent = vidas;
    }
}


// ======================================================
// 8. ACTUALIZAR PROGRESO
// ======================================================

function actualizarProgreso() {

    const porcentaje =
        Math.round(
            (retosCompletados / totalRetos) * 100
        );

    const porcentajeElemento =
        document.getElementById("porcentaje");

    if (porcentajeElemento) {
        porcentajeElemento.textContent =
            porcentaje + "%";
    }

    const retosElemento =
        document.getElementById("retosCompletados");

    if (retosElemento) {
        retosElemento.textContent =
            retosCompletados;
    }

    const correctasElemento =
        document.getElementById("respuestasCorrectas");

    if (correctasElemento) {
        correctasElemento.textContent =
            respuestasCorrectas;
    }

    const circulo =
        document.getElementById("circuloProgreso");

    if (circulo) {

        const longitud = 314;

        const avance =
            longitud -
            (longitud * porcentaje / 100);

        circulo.style.strokeDashoffset =
            avance;
    }

    const mensaje =
        document.getElementById("mensajeProgreso");

    if (mensaje) {

        if (porcentaje === 0) {

            mensaje.textContent =
                "¡Comienza tu aventura por México! 🇲🇽";

        } else if (porcentaje < 50) {

            mensaje.textContent =
                "¡Vas muy bien! Sigue aprendiendo 📚";

        } else if (porcentaje < 100) {

            mensaje.textContent =
                "¡Ya casi completas todos los retos! 🚀";

        } else {

            mensaje.textContent =
                "¡Felicitaciones! Completaste todos los retos 🏆";
        }
    }
}


// ======================================================
// 9. ESCUCHAR
// ======================================================

function escuchar() {

    const tema = temas[temaActual];

    if (!tema) {
        return;
    }

    if (!("speechSynthesis" in window)) {

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

    voz.lang = "es-MX";
    voz.rate = 0.9;
    voz.pitch = 1;

    window.speechSynthesis.speak(voz);
}


// ======================================================
// 10. SIGUIENTE TEMA
// ======================================================

function siguienteTema() {

    if (vidas <= 0) {
        mostrarModalRecuperacion();
        return;
    }

    const nombres =
        Object.keys(temas);

    const posicion =
        nombres.indexOf(temaActual);

    let siguiente =
        posicion + 1;

    if (siguiente >= nombres.length) {
        siguiente = 0;
    }

    cambiarTema(
        nombres[siguiente]
    );
}


// ======================================================
// 11. MOSTRAR MODAL DE VIDAS AGOTADAS
// ======================================================

function mostrarModalRecuperacion() {

    const modal =
        document.getElementById(
            "modalRecuperacion"
        );

    if (!modal) {

        console.error(
            "No existe #modalRecuperacion en el HTML."
        );

        return;
    }

    modal.style.display = "flex";

    document.body.style.overflow = "hidden";

    const modalReto =
        document.getElementById(
            "modalRetoRecuperacion"
        );

    if (modalReto) {
        modalReto.style.display = "none";
    }
}


// ======================================================
// 12. INICIAR RECUPERACIÓN
// ======================================================

function iniciarRecuperacion() {

    const modal =
        document.getElementById(
            "modalRecuperacion"
        );

    const modalReto =
        document.getElementById(
            "modalRetoRecuperacion"
        );

    if (modal) {
        modal.style.display = "none";
    }

    if (modalReto) {
        modalReto.style.display = "flex";
    }

    document.body.style.overflow = "hidden";

    crearRetoRecuperacion();
}


// ======================================================
// 13. CREAR RETO DE RECUPERACIÓN
// ======================================================

function crearRetoRecuperacion() {

    const pregunta =
        document.getElementById(
            "preguntaRecuperacion"
        );

    const contenedor =
        document.getElementById(
            "opcionesRecuperacion"
        );

    const resultado =
        document.getElementById(
            "resultadoRecuperacion"
        );

    const botonResponder =
        document.getElementById(
            "btnResponderRecuperacion"
        );

    if (
        !pregunta ||
        !contenedor ||
        !resultado ||
        !botonResponder
    ) {

        console.error(
            "Faltan elementos del reto de recuperación en el HTML."
        );

        return;
    }

    respuestaRecuperacion = null;
    recuperacionContestada = false;

    pregunta.textContent =
        preguntaRecuperacion.pregunta;

    contenedor.innerHTML = "";

    resultado.textContent = "";
    resultado.className =
        "resultado-recuperacion";

    botonResponder.disabled = true;


    preguntaRecuperacion.opciones.forEach(opcion => {

        const boton =
            document.createElement("button");

        boton.type = "button";
        boton.className =
            "opcion-recuperacion";

        boton.textContent = opcion;

        boton.addEventListener("click", () => {

            if (recuperacionContestada) {
                return;
            }

            contenedor
                .querySelectorAll(
                    ".opcion-recuperacion"
                )
                .forEach(btn => {

                    btn.classList.remove(
                        "seleccionada"
                    );

                });

            boton.classList.add(
                "seleccionada"
            );

            respuestaRecuperacion =
                opcion;

            botonResponder.disabled =
                false;
        });

        contenedor.appendChild(boton);
    });
}


// ======================================================
// 14. RESPONDER RECUPERACIÓN
// ======================================================

function responderRecuperacion() {

    if (!respuestaRecuperacion) {
        return;
    }

    if (recuperacionContestada) {
        return;
    }

    recuperacionContestada = true;

    const botones =
        document.querySelectorAll(
            "#opcionesRecuperacion .opcion-recuperacion"
        );

    const botonResponder =
        document.getElementById(
            "btnResponderRecuperacion"
        );

    const resultado =
        document.getElementById(
            "resultadoRecuperacion"
        );

    botones.forEach(btn => {
        btn.disabled = true;
    });

    if (botonResponder) {
        botonResponder.disabled = true;
    }


    // ==================================================
    // CORRECTA
    // ==================================================

    if (
        respuestaRecuperacion ===
        preguntaRecuperacion.correcta
    ) {

        // RECUPERAR LAS 5 VIDAS
        vidas = 5;

        actualizarVidas();

        botones.forEach(btn => {

            if (
                btn.textContent ===
                preguntaRecuperacion.correcta
            ) {

                btn.classList.add(
                    "correcta"
                );
            }
        });

        if (resultado) {

            resultado.textContent =
                "🎉 ¡Correcto! Recuperaste las 5 vidas. ¡Puedes continuar!";

            resultado.className =
                "resultado-recuperacion mostrar correcta";
        }

        setTimeout(() => {

            cerrarRetoRecuperacion();

        }, 1200);

    }


    // ==================================================
    // INCORRECTA
    // ==================================================

    else {

        vidas = 0;

        actualizarVidas();

        botones.forEach(btn => {

            if (
                btn.textContent ===
                respuestaRecuperacion
            ) {

                btn.classList.add(
                    "incorrecta"
                );
            }

            if (
                btn.textContent ===
                preguntaRecuperacion.correcta
            ) {

                btn.classList.add(
                    "correcta"
                );
            }
        });

        if (resultado) {

            resultado.textContent =
                "❌ Incorrecto. Inténtalo nuevamente.";

            resultado.className =
                "resultado-recuperacion mostrar incorrecta";
        }

        setTimeout(() => {

            crearRetoRecuperacion();

        }, 1500);
    }
}


// ======================================================
// 15. CERRAR RETO DE RECUPERACIÓN
// ======================================================

function cerrarRetoRecuperacion() {

    const modalReto =
        document.getElementById(
            "modalRetoRecuperacion"
        );

    if (modalReto) {
        modalReto.style.display = "none";
    }

    document.body.style.overflow = "";

    respuestaContestada = false;

    const resultado =
        document.getElementById("resultado");

    if (resultado) {

        resultado.textContent = "";

        resultado.className =
            "resultado";
    }

    // Volver a crear las opciones del mismo tema
    if (temas[temaActual]) {

        crearOpciones(
            temas[temaActual]
        );
    }

    const siguiente =
        document.getElementById(
            "botonSiguiente"
        );

    if (siguiente) {
        siguiente.disabled = true;
    }
}


// ======================================================
// 16. INICIAR TODO
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        // Siempre comienza con 5 vidas
        vidas = 5;

        actualizarVidas();

        actualizarProgreso();

        // Cargar primer tema
        cambiarTema("gastronomia");

        // Conectar botón de recuperación
        const btnIniciar =
            document.getElementById(
                "btnIniciarRecuperacion"
            );

        if (btnIniciar) {

            btnIniciar.addEventListener(
                "click",
                iniciarRecuperacion
            );
        }

        // Conectar botón responder
        const btnResponder =
            document.getElementById(
                "btnResponderRecuperacion"
            );

        if (btnResponder) {

            btnResponder.addEventListener(
                "click",
                responderRecuperacion
            );
        }

    }
);
