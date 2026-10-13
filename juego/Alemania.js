/* ============================================================
   HISTORIA SIN FRONTERAS - ALEMANIA
   JAVASCRIPT COMPLETO Y CORREGIDO

   14 CATEGORÍAS x 5 PREGUNTAS = 70 PREGUNTAS

   SISTEMA:
   - 5 vidas (al llegar a 0 se bloquea la pantalla)
   - Reto de recuperación (5 preguntas, mínimo 3 aciertos)
   - Puntos y progreso (LocalStorage)
   - Reto final de 30 preguntas
   - Historial de rondas y panel derecho que se limpia
============================================================ */


/* ============================================================
   1. CONFIGURACIÓN
============================================================ */

const CLAVE_GUARDADO = "historiaSinFronterasAlemania_v4";
const MAX_VIDAS = 5;
const ACIERTOS_MINIMOS_RECUPERACION = 3;

const nombresTemas = [
    "gastronomia", "musica", "tradiciones", "fiestas", "vestimentas",
    "arte", "monumentos", "imperio-aleman", "primera-guerra",
    "segunda-guerra", "muro-berlin", "reunificacion", "personajes",
    "estados-federados"
];

/* Ayuda para escribir preguntas más corto */
function q(pregunta, opciones, correcta) {
    return { pregunta, opciones, correcta };
}

/* Mezclar una lista */
function mezclar(lista) {
    const copia = [...lista];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}


/* ============================================================
   2. INFORMACIÓN Y 70 PREGUNTAS
============================================================ */

const temas = {

    gastronomia: {
        titulo: "Gastronomía alemana",
        subtitulo: "Sabores y comidas tradicionales de Alemania",
        icono: "🍽️",
        imagen: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
        dato: "La gastronomía alemana incluye panes, salchichas, pretzels y diferentes platos regionales.",
        regiones: "Baviera, Sajonia, Renania y otras regiones",
        sobreTexto: "La gastronomía alemana se caracteriza por la variedad de platos regionales y por alimentos tradicionales como el pretzel y las salchichas.",
        audio: "La gastronomía alemana reúne diferentes comidas tradicionales de sus regiones. Entre ellas destacan los pretzels, las salchichas, los panes y otros platos típicos.",
        preguntas: [
            q("¿Cuál de estos alimentos es tradicional de Alemania?", ["Pretzel", "Sushi", "Tacos", "Cuscús"], "Pretzel"),
            q("¿Qué es la bratwurst?", ["Una salchicha", "Un postre", "Una bebida", "Un pan dulce"], "Una salchicha"),
            q("¿Qué alimento es conocido por tener forma de lazo?", ["Pretzel", "Pizza", "Tarta", "Sopa"], "Pretzel"),
            q("¿Cuál es un alimento muy asociado con la gastronomía alemana?", ["Salchicha", "Arepa", "Paella", "Ramen"], "Salchicha"),
            q("¿Qué tipo de alimento tiene gran importancia en la tradición alemana?", ["Pan", "Arroz", "Tortilla de maíz", "Cuscús"], "Pan")
        ]
    },

    musica: {
        titulo: "Música alemana",
        subtitulo: "Grandes compositores y tradiciones musicales",
        icono: "🎵",
        imagen: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b",
        dato: "Alemania ha sido cuna de importantes compositores de la música clásica.",
        regiones: "Todo el territorio alemán",
        sobreTexto: "La música alemana ha tenido una gran influencia en la historia de la música occidental.",
        audio: "Alemania ha sido el lugar de origen o desarrollo de importantes compositores, especialmente dentro de la música clásica.",
        preguntas: [
            q("¿Quién compuso muchas obras importantes de música barroca?", ["Johann Sebastian Bach", "Pablo Picasso", "Albert Einstein", "Otto von Bismarck"], "Johann Sebastian Bach"),
            q("¿Quién compuso la Novena Sinfonía?", ["Ludwig van Beethoven", "Johann Gutenberg", "Goethe", "Bismarck"], "Ludwig van Beethoven"),
            q("¿A qué tipo de música pertenecen muchas obras de Bach y Beethoven?", ["Música clásica", "Reguetón", "Jazz moderno", "Rock"], "Música clásica"),
            q("¿Cuál de estos compositores nació en Bonn?", ["Beethoven", "Bach", "Mozart", "Vivaldi"], "Beethoven"),
            q("¿Qué compositor alemán es conocido por obras como 'Fausto'?", ["No fue compositor; fue Goethe", "Bach", "Beethoven", "Wagner"], "No fue compositor; fue Goethe")
        ]
    },

    tradiciones: {
        titulo: "Tradiciones",
        subtitulo: "Costumbres y expresiones culturales",
        icono: "🎭",
        imagen: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
        dato: "Alemania posee tradiciones diferentes según cada región.",
        regiones: "Baviera, Renania, Sajonia y otras regiones",
        sobreTexto: "Las tradiciones alemanas incluyen celebraciones regionales, música, gastronomía y costumbres familiares.",
        audio: "Las tradiciones alemanas varían según las regiones. Muchas están relacionadas con fiestas, música, vestimenta y gastronomía.",
        preguntas: [
            q("¿Qué tradición alemana está relacionada con una gran fiesta en Múnich?", ["Oktoberfest", "Carnaval de Río", "Hanami", "Diwali"], "Oktoberfest"),
            q("¿En qué ciudad se celebra tradicionalmente el Oktoberfest?", ["Múnich", "Berlín", "Hamburgo", "Bonn"], "Múnich"),
            q("¿Qué elemento puede formar parte de celebraciones tradicionales alemanas?", ["Música folclórica", "Danza hawaiana exclusivamente", "Tango argentino", "Kabuki"], "Música folclórica"),
            q("¿Las tradiciones alemanas son iguales en todas las regiones?", ["No, existen diferencias regionales", "Sí, todas son exactamente iguales", "Solo existen en Berlín", "No existen tradiciones regionales"], "No, existen diferencias regionales"),
            q("¿Qué aspecto forma parte de muchas tradiciones culturales?", ["Comida y celebraciones", "Solo tecnología", "Solo deportes", "Solo política"], "Comida y celebraciones")
        ]
    },

    fiestas: {
        titulo: "Fiestas",
        subtitulo: "Celebraciones populares alemanas",
        icono: "🎉",
        imagen: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
        dato: "Alemania celebra numerosas fiestas tradicionales y culturales.",
        regiones: "Diferentes regiones de Alemania",
        sobreTexto: "Las fiestas alemanas combinan música, gastronomía, tradiciones regionales y encuentros comunitarios.",
        audio: "Alemania tiene numerosas fiestas tradicionales. Una de las más conocidas internacionalmente es el Oktoberfest.",
        preguntas: [
            q("¿Cuál es una de las fiestas alemanas más conocidas internacionalmente?", ["Oktoberfest", "Carnaval de Venecia", "Día de Muertos", "Songkran"], "Oktoberfest"),
            q("¿En qué ciudad se realiza el Oktoberfest?", ["Múnich", "Frankfurt", "Berlín", "Colonia"], "Múnich"),
            q("¿En qué mes comienza normalmente el Oktoberfest?", ["Septiembre", "Enero", "Mayo", "Diciembre"], "Septiembre"),
            q("¿Qué elemento es común en muchas fiestas tradicionales?", ["Música", "Solo exámenes", "Solo discursos políticos", "Solo actividades escolares"], "Música"),
            q("¿Las fiestas regionales ayudan a conservar la cultura?", ["Sí", "No", "Solo en otros países", "Nunca"], "Sí")
        ]
    },

    vestimentas: {
        titulo: "Vestimentas",
        subtitulo: "Ropa tradicional de las regiones alemanas",
        icono: "👗",
        imagen: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
        dato: "El Dirndl y los Lederhosen son prendas tradicionales especialmente relacionadas con Baviera.",
        regiones: "Principalmente Baviera y regiones alpinas",
        sobreTexto: "Las vestimentas tradicionales forman parte de la identidad cultural de algunas regiones alemanas.",
        audio: "Entre las vestimentas tradicionales alemanas destacan el Dirndl y los Lederhosen, especialmente asociados con Baviera.",
        preguntas: [
            q("¿Cuál es una vestimenta tradicional femenina alemana?", ["Dirndl", "Kimono", "Sari", "Hanbok"], "Dirndl"),
            q("¿Cuál es una vestimenta tradicional masculina?", ["Lederhosen", "Kimono", "Poncho", "Sombrero vueltiao"], "Lederhosen"),
            q("¿Con qué región se relacionan especialmente estas prendas?", ["Baviera", "Andalucía", "Sicilia", "Patagonia"], "Baviera"),
            q("¿Qué significa aproximadamente Lederhosen?", ["Pantalones de cuero", "Camisa blanca", "Zapatos tradicionales", "Sombrero alemán"], "Pantalones de cuero"),
            q("¿En qué tipo de eventos pueden utilizarse actualmente estas prendas?", ["Fiestas y festivales tradicionales", "Solo en oficinas", "Solo en escuelas", "Solo en hospitales"], "Fiestas y festivales tradicionales")
        ]
    },

    arte: {
        titulo: "Arte",
        subtitulo: "Movimientos y expresiones artísticas",
        icono: "🎨",
        imagen: "https://images.unsplash.com/photo-1561214115-f2f134cc4912",
        dato: "Alemania tuvo una gran influencia en el arte moderno gracias a movimientos como la Bauhaus.",
        regiones: "Weimar, Dessau y Berlín",
        sobreTexto: "El arte alemán ha contribuido a diferentes movimientos artísticos y de diseño.",
        audio: "Alemania tuvo una importante influencia en el arte moderno. La Bauhaus fue especialmente importante para el diseño, la arquitectura y las artes.",
        preguntas: [
            q("¿Qué escuela artística alemana tuvo gran influencia en el diseño moderno?", ["Bauhaus", "Renacimiento", "Impresionismo francés", "Cubismo español"], "Bauhaus"),
            q("¿En qué ciudad comenzó la Bauhaus?", ["Weimar", "Múnich", "Hamburgo", "Bonn"], "Weimar"),
            q("¿Qué disciplinas relacionó la Bauhaus?", ["Arte, diseño y arquitectura", "Solo literatura", "Solo música", "Solo agricultura"], "Arte, diseño y arquitectura"),
            q("¿La Bauhaus influyó en el diseño moderno?", ["Sí", "No", "Solo en la música", "Solo en la gastronomía"], "Sí"),
            q("¿Cuál de estos pertenece al campo artístico?", ["Arquitectura", "Agricultura", "Meteorología", "Contabilidad"], "Arquitectura")
        ]
    },

    monumentos: {
        titulo: "Monumentos",
        subtitulo: "Lugares históricos y arquitectónicos",
        icono: "🏛️",
        imagen: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f",
        dato: "Alemania posee monumentos históricos reconocidos internacionalmente.",
        regiones: "Berlín, Baviera y otras regiones",
        sobreTexto: "Los monumentos alemanes permiten conocer diferentes etapas de su historia y cultura.",
        audio: "Alemania cuenta con numerosos monumentos. Entre los más conocidos están la Puerta de Brandeburgo y el castillo de Neuschwanstein.",
        preguntas: [
            q("¿Cuál es uno de los monumentos más conocidos de Berlín?", ["Puerta de Brandeburgo", "Torre Eiffel", "Coliseo", "Big Ben"], "Puerta de Brandeburgo"),
            q("¿Dónde se encuentra el castillo de Neuschwanstein?", ["Baviera", "Berlín", "Hamburgo", "Sajonia"], "Baviera"),
            q("¿En qué ciudad se encuentra la Puerta de Brandeburgo?", ["Berlín", "Múnich", "Bonn", "Colonia"], "Berlín"),
            q("¿Qué es Neuschwanstein?", ["Un castillo", "Una universidad", "Un río", "Un estadio"], "Un castillo"),
            q("¿Qué pueden enseñar los monumentos históricos?", ["Aspectos de la historia y cultura", "Solo matemáticas", "Solo deportes", "Solo química"], "Aspectos de la historia y cultura")
        ]
    },

    "imperio-aleman": {
        titulo: "Imperio Alemán",
        subtitulo: "La formación del Imperio en 1871",
        icono: "👑",
        imagen: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
        dato: "El Imperio alemán fue proclamado en 1871 después de la unificación de varios Estados alemanes.",
        regiones: "Estados alemanes",
        sobreTexto: "La unificación alemana llevó a la creación del Imperio alemán en 1871.",
        audio: "El Imperio alemán fue proclamado en 1871. La unificación política reunió numerosos Estados alemanes.",
        preguntas: [
            q("¿En qué año se proclamó el Imperio alemán?", ["1871", "1914", "1945", "1989"], "1871"),
            q("¿Quién fue una figura clave en la unificación alemana?", ["Otto von Bismarck", "Albert Einstein", "Beethoven", "Goethe"], "Otto von Bismarck"),
            q("¿Qué proceso ocurrió antes de la creación del Imperio alemán?", ["Unificación alemana", "Reunificación de 1990", "Caída del Muro", "Segunda Guerra Mundial"], "Unificación alemana"),
            q("¿Qué cargo ocupó Bismarck en el Imperio alemán?", ["Canciller", "Rey de Francia", "Papa", "Presidente de Estados Unidos"], "Canciller"),
            q("¿Qué familia gobernó el Imperio alemán?", ["Hohenzollern", "Tudor", "Borbón", "Romanov"], "Hohenzollern")
        ]
    },

    "primera-guerra": {
        titulo: "Primera Guerra Mundial",
        subtitulo: "Alemania entre 1914 y 1918",
        icono: "⚔️",
        imagen: "https://images.unsplash.com/photo-1580136608260-7b5e7f5f6e43",
        dato: "La Primera Guerra Mundial ocurrió entre 1914 y 1918.",
        regiones: "Europa",
        sobreTexto: "Alemania participó en la Primera Guerra Mundial, conflicto que terminó en 1918.",
        audio: "La Primera Guerra Mundial comenzó en 1914 y terminó en 1918. Alemania formó parte de las Potencias Centrales.",
        preguntas: [
            q("¿En qué año comenzó la Primera Guerra Mundial?", ["1914", "1918", "1939", "1945"], "1914"),
            q("¿En qué año terminó la Primera Guerra Mundial?", ["1918", "1914", "1933", "1945"], "1918"),
            q("¿Alemania participó en la Primera Guerra Mundial?", ["Sí", "No", "Solo después de 1945", "Solo como observador"], "Sí"),
            q("¿Qué grupo integró Alemania durante la guerra?", ["Potencias Centrales", "Triple Entente", "Aliados de 1945", "OTAN"], "Potencias Centrales"),
            q("¿Qué tratado se relaciona con el final de la guerra y Alemania?", ["Tratado de Versalles", "Tratado de Roma", "Tratado de París de 1951", "Tratado de Maastricht"], "Tratado de Versalles")
        ]
    },

    "segunda-guerra": {
        titulo: "Segunda Guerra Mundial",
        subtitulo: "Alemania entre 1939 y 1945",
        icono: "🌍",
        imagen: "https://images.unsplash.com/photo-1519070994522-88c6b7563306",
        dato: "La Segunda Guerra Mundial comenzó en 1939 y terminó en 1945.",
        regiones: "Europa y otras regiones del mundo",
        sobreTexto: "La Segunda Guerra Mundial fue un conflicto global ocurrido entre 1939 y 1945.",
        audio: "La Segunda Guerra Mundial comenzó en 1939 y terminó en 1945. Alemania fue una de las principales potencias del conflicto.",
        preguntas: [
            q("¿En qué año comenzó la Segunda Guerra Mundial?", ["1939", "1914", "1941", "1945"], "1939"),
            q("¿En qué año terminó la Segunda Guerra Mundial?", ["1945", "1939", "1941", "1950"], "1945"),
            q("¿En qué continente tuvo una parte central del conflicto?", ["Europa", "América del Sur", "Oceanía", "Antártida"], "Europa"),
            q("¿Qué ocurrió con Alemania al terminar la guerra?", ["Fue ocupada y posteriormente dividida", "Se convirtió en un imperio mundial", "No tuvo cambios", "Se trasladó a otro continente"], "Fue ocupada y posteriormente dividida"),
            q("¿Qué organización internacional fue creada en 1945?", ["ONU", "OTAN", "Unión Europea", "Unión Africana"], "ONU")
        ]
    },

    "muro-berlin": {
        titulo: "Muro de Berlín",
        subtitulo: "Un símbolo de la Guerra Fría",
        icono: "🧱",
        imagen: "https://images.unsplash.com/photo-1560969184-10fe8719e047",
        dato: "El Muro de Berlín fue construido en 1961 y cayó en 1989.",
        regiones: "Berlín",
        sobreTexto: "El Muro de Berlín separó Berlín Oriental y Berlín Occidental durante la Guerra Fría.",
        audio: "El Muro de Berlín fue construido en 1961 y cayó el 9 de noviembre de 1989. Se convirtió en uno de los principales símbolos de la Guerra Fría.",
        preguntas: [
            q("¿En qué año comenzó la construcción del Muro de Berlín?", ["1961", "1945", "1989", "1990"], "1961"),
            q("¿En qué año cayó el Muro de Berlín?", ["1989", "1961", "1990", "1949"], "1989"),
            q("¿Qué separaba el Muro de Berlín?", ["Berlín Oriental y Berlín Occidental", "Alemania y Francia", "Baviera y Sajonia", "Europa y Asia"], "Berlín Oriental y Berlín Occidental"),
            q("¿El Muro de Berlín estuvo relacionado con qué conflicto internacional?", ["Guerra Fría", "Primera Guerra Mundial", "Guerra de Crimea", "Guerra de los Cien Años"], "Guerra Fría"),
            q("¿Qué fecha se relaciona con la caída del Muro?", ["9 de noviembre de 1989", "3 de octubre de 1990", "8 de mayo de 1945", "11 de noviembre de 1918"], "9 de noviembre de 1989")
        ]
    },

    reunificacion: {
        titulo: "Reunificación alemana",
        subtitulo: "Alemania vuelve a estar unida",
        icono: "🤝",
        imagen: "https://images.unsplash.com/photo-1521292270410-a8c4d716d518",
        dato: "La reunificación alemana se produjo oficialmente el 3 de octubre de 1990.",
        regiones: "Alemania Oriental y Alemania Occidental",
        sobreTexto: "La reunificación unió nuevamente a Alemania Oriental y Alemania Occidental.",
        audio: "La reunificación alemana ocurrió oficialmente el 3 de octubre de 1990, después de la caída del Muro de Berlín.",
        preguntas: [
            q("¿En qué año se produjo la reunificación alemana?", ["1990", "1989", "1949", "1991"], "1990"),
            q("¿Qué fecha se celebra como Día de la Unidad Alemana?", ["3 de octubre", "9 de noviembre", "1 de enero", "8 de mayo"], "3 de octubre"),
            q("¿Qué acontecimiento ocurrió antes de la reunificación?", ["Caída del Muro de Berlín", "Primera Guerra Mundial", "Creación del Imperio alemán", "Tratado de Versalles"], "Caída del Muro de Berlín"),
            q("¿Qué dos Estados se reunificaron?", ["RFA y RDA", "Francia y Alemania", "Baviera y Prusia", "Austria y Alemania"], "RFA y RDA"),
            q("¿Qué representa la reunificación alemana?", ["La unión de Alemania Oriental y Occidental", "La división de Alemania", "La creación del Imperio alemán", "El inicio de la Primera Guerra Mundial"], "La unión de Alemania Oriental y Occidental")
        ]
    },

    personajes: {
        titulo: "Personajes",
        subtitulo: "Personas importantes de la historia y cultura alemana",
        icono: "👤",
        imagen: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
        dato: "Alemania ha sido el hogar de científicos, escritores, músicos y políticos importantes.",
        regiones: "Diversas regiones alemanas",
        sobreTexto: "Numerosos personajes alemanes han contribuido a la ciencia, la literatura, la música y la historia.",
        audio: "Entre los personajes destacados están Bismarck, Bach, Beethoven, Goethe, Einstein y Nietzsche.",
        preguntas: [
            q("¿Quién fue una figura clave de la unificación alemana?", ["Otto von Bismarck", "Albert Einstein", "Beethoven", "Goethe"], "Otto von Bismarck"),
            q("¿Quién desarrolló la teoría de la relatividad?", ["Albert Einstein", "Bach", "Bismarck", "Goethe"], "Albert Einstein"),
            q("¿Quién escribió 'Fausto'?", ["Johann Wolfgang von Goethe", "Einstein", "Bismarck", "Beethoven"], "Johann Wolfgang von Goethe"),
            q("¿Quién fue un importante compositor alemán?", ["Johann Sebastian Bach", "Otto von Bismarck", "Albert Einstein", "Karl Marx"], "Johann Sebastian Bach"),
            q("¿Quién escribió obras filosóficas como 'Así habló Zaratustra'?", ["Friedrich Nietzsche", "Goethe", "Bach", "Bismarck"], "Friedrich Nietzsche")
        ]
    },

    "estados-federados": {
        titulo: "Estados federados",
        subtitulo: "Los 16 Länder de Alemania",
        icono: "🗺️",
        imagen: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
        dato: "Alemania está formada por 16 estados federados llamados Länder.",
        regiones: "16 estados federados",
        sobreTexto: "Alemania es una república federal compuesta por 16 estados federados.",
        audio: "Alemania está organizada como una república federal formada por 16 estados federados, conocidos en alemán como Länder.",
        preguntas: [
            q("¿Cuántos estados federados tiene Alemania?", ["16", "10", "12", "20"], "16"),
            q("¿Cómo se llaman los estados federados en alemán?", ["Länder", "Kantones", "Provincias", "Departamentos"], "Länder"),
            q("¿Baviera es un estado federado de Alemania?", ["Sí", "No", "Es una ciudad de Francia", "Es un país independiente"], "Sí"),
            q("¿Cuál es la capital de Alemania?", ["Berlín", "Múnich", "Hamburgo", "Bonn"], "Berlín"),
            q("¿Qué tipo de organización política tiene Alemania?", ["República federal", "Monarquía absoluta", "Imperio", "Confederación sin gobierno"], "República federal")
        ]
    }
};


/* ============================================================
   3. RETO DE RECUPERACIÓN (5 preguntas, mínimo 3 aciertos)
============================================================ */

const preguntasRecuperacionBase = [
    q("¿En qué año cayó el Muro de Berlín?", ["1989", "1961", "1990", "1945"], "1989"),
    q("¿Cuántos estados federados tiene Alemania?", ["16", "10", "12", "20"], "16"),
    q("¿Quién fue una figura importante de la unificación alemana?", ["Otto von Bismarck", "Albert Einstein", "Johann Sebastian Bach", "Martin Luther King"], "Otto von Bismarck"),
    q("¿Dónde se celebra tradicionalmente el Oktoberfest?", ["Múnich", "Berlín", "Hamburgo", "Bonn"], "Múnich"),
    q("¿En qué año se produjo oficialmente la reunificación alemana?", ["1990", "1989", "1949", "1991"], "1990")
];


/* ============================================================
   4. RETO FINAL - 30 PREGUNTAS
============================================================ */

const preguntasFinales = [
    q("¿En qué año se proclamó el Imperio alemán?", ["1871", "1914", "1945", "1989"], "1871"),
    q("¿Quién fue una figura clave de la unificación alemana?", ["Otto von Bismarck", "Albert Einstein", "Beethoven", "Goethe"], "Otto von Bismarck"),
    q("¿Cuántos estados federados tiene Alemania?", ["16", "10", "12", "20"], "16"),
    q("¿En qué año comenzó la Primera Guerra Mundial?", ["1914", "1918", "1939", "1945"], "1914"),
    q("¿En qué año terminó la Primera Guerra Mundial?", ["1918", "1914", "1939", "1945"], "1918"),
    q("¿En qué año comenzó la Segunda Guerra Mundial?", ["1939", "1914", "1941", "1945"], "1939"),
    q("¿En qué año terminó la Segunda Guerra Mundial?", ["1945", "1939", "1941", "1950"], "1945"),
    q("¿En qué año se comenzó a construir el Muro de Berlín?", ["1961", "1949", "1989", "1990"], "1961"),
    q("¿En qué año cayó el Muro de Berlín?", ["1989", "1961", "1990", "1945"], "1989"),
    q("¿En qué año se produjo la reunificación alemana?", ["1990", "1989", "1949", "1991"], "1990"),
    q("¿Qué ciudad quedó dividida durante la Guerra Fría?", ["Berlín", "Múnich", "Bonn", "Hamburgo"], "Berlín"),
    q("¿Qué ocurrió el 9 de noviembre de 1989?", ["Caída del Muro de Berlín", "Inicio de la Primera Guerra Mundial", "Creación del Imperio alemán", "Inicio de la Segunda Guerra Mundial"], "Caída del Muro de Berlín"),
    q("¿Cuándo se celebra el Día de la Unidad Alemana?", ["3 de octubre", "9 de noviembre", "1 de enero", "8 de mayo"], "3 de octubre"),
    q("¿Dónde se celebra tradicionalmente el Oktoberfest?", ["Múnich", "Berlín", "Hamburgo", "Bonn"], "Múnich"),
    q("¿Cuál es una vestimenta tradicional femenina alemana?", ["Dirndl", "Kimono", "Sari", "Hanbok"], "Dirndl"),
    q("¿Cuál es una vestimenta tradicional masculina alemana?", ["Lederhosen", "Kimono", "Poncho", "Sari"], "Lederhosen"),
    q("¿Qué escuela alemana influyó en el diseño moderno?", ["Bauhaus", "Renacimiento", "Barroco italiano", "Cubismo"], "Bauhaus"),
    q("¿Dónde comenzó la Bauhaus?", ["Weimar", "Berlín", "Múnich", "Hamburgo"], "Weimar"),
    q("¿Cuál es un famoso monumento de Berlín?", ["Puerta de Brandeburgo", "Torre Eiffel", "Coliseo", "Big Ben"], "Puerta de Brandeburgo"),
    q("¿Qué es Neuschwanstein?", ["Un castillo", "Un río", "Una universidad", "Un museo"], "Un castillo"),
    q("¿Quién fue un famoso compositor alemán?", ["Johann Sebastian Bach", "Albert Einstein", "Otto von Bismarck", "Goethe"], "Johann Sebastian Bach"),
    q("¿Quién compuso la Novena Sinfonía?", ["Ludwig van Beethoven", "Albert Einstein", "Goethe", "Bismarck"], "Ludwig van Beethoven"),
    q("¿Quién escribió 'Fausto'?", ["Johann Wolfgang von Goethe", "Bach", "Einstein", "Beethoven"], "Johann Wolfgang von Goethe"),
    q("¿Quién desarrolló la teoría de la relatividad?", ["Albert Einstein", "Bismarck", "Goethe", "Beethoven"], "Albert Einstein"),
    q("¿Quién escribió 'Así habló Zaratustra'?", ["Friedrich Nietzsche", "Goethe", "Bach", "Bismarck"], "Friedrich Nietzsche"),
    q("¿Cuál es un alimento tradicional alemán?", ["Pretzel", "Sushi", "Tacos", "Cuscús"], "Pretzel"),
    q("¿Qué es la bratwurst?", ["Una salchicha", "Un postre", "Una bebida", "Un tipo de pan"], "Una salchicha"),
    q("¿Cómo se llaman los estados federados alemanes?", ["Länder", "Provincias", "Cantones", "Departamentos"], "Länder"),
    q("¿Qué significan RFA y RDA en la historia alemana?", ["República Federal de Alemania y República Democrática Alemana", "Regiones Federales Alemanas", "Reinos Federales Alemanes", "Repúblicas Francesas Alemanas"], "República Federal de Alemania y República Democrática Alemana"),
    q("¿Qué ciudad volvió a ser la capital de Alemania reunificada?", ["Berlín", "Bonn", "Múnich", "Hamburgo"], "Berlín")
];


/* ============================================================
   5. VARIABLES DEL JUEGO
============================================================ */

let temaActual = null;
let indicePregunta = 0;

let puntos = 0;
let vidas = MAX_VIDAS;
let respuestasCorrectas = 0;
let retosCompletados = 0;

let juegoBloqueadoPorVidas = false;

let retoFinalDesbloqueado = false;
let retoFinalActivo = false;

let indicePreguntaFinal = 0;
let puntosFinales = 0;
let respuestasFinales = 0;

let preguntasRecuperacion = [];
let indiceRecuperacion = 0;
let recuperacionActiva = false;
let aciertosRecuperacion = 0;
let htmlInicioRecuperacion = "";

let estadoPreguntas = {};

/* Historial: se guarda cuando terminas una ronda completa */
let historial = { rondas: 0, puntosTotales: 0, correctasTotales: 0 };


/* ============================================================
   6. ESTADO INICIAL
============================================================ */

function crearEstadoInicial() {
    const estado = {};
    nombresTemas.forEach(nombre => {
        estado[nombre] = { respondidas: [], completado: false };
    });
    return estado;
}


/* ============================================================
   7. CARGAR PROGRESO
============================================================ */

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

        // Asegurar que existan todas las categorías
        nombresTemas.forEach(nombre => {
            if (!estadoPreguntas[nombre]) {
                estadoPreguntas[nombre] = { respondidas: [], completado: false };
            }
        });

        puntos = Number(datos.puntos) || 0;
        vidas = typeof datos.vidas === "number" ? datos.vidas : MAX_VIDAS;
        respuestasCorrectas = Number(datos.respuestasCorrectas) || 0;
        retosCompletados = Number(datos.retosCompletados) || 0;
        retoFinalDesbloqueado = Boolean(datos.retoFinalDesbloqueado);
        juegoBloqueadoPorVidas = Boolean(datos.juegoBloqueadoPorVidas);
        historial = datos.historial || { rondas: 0, puntosTotales: 0, correctasTotales: 0 };

        if (vidas < 0) vidas = 0;
        if (vidas > MAX_VIDAS) vidas = MAX_VIDAS;

        // Coherencia: sin vidas = bloqueado
        if (vidas === 0) juegoBloqueadoPorVidas = true;

    } catch (error) {
        console.error("Error al cargar el progreso:", error);

        estadoPreguntas = crearEstadoInicial();
        puntos = 0;
        vidas = MAX_VIDAS;
        respuestasCorrectas = 0;
        retosCompletados = 0;
        retoFinalDesbloqueado = false;
        juegoBloqueadoPorVidas = false;
        historial = { rondas: 0, puntosTotales: 0, correctasTotales: 0 };
    }
}


/* ============================================================
   8. GUARDAR PROGRESO
============================================================ */

function guardarProgreso() {
    try {
        const datos = {
            estadoPreguntas,
            puntos,
            vidas,
            respuestasCorrectas,
            retosCompletados,
            retoFinalDesbloqueado,
            juegoBloqueadoPorVidas,
            historial
        };
        localStorage.setItem(CLAVE_GUARDADO, JSON.stringify(datos));
    } catch (error) {
        console.error("No se pudo guardar el progreso:", error);
    }
}


/* ============================================================
   9. ACTUALIZAR INTERFAZ
============================================================ */

function actualizarInterfaz() {

    const elementoPuntos = document.getElementById("puntos");
    const elementoVidas = document.getElementById("vidas");
    const elementoCorrectas = document.getElementById("respuestasCorrectas");
    const elementoRetos = document.getElementById("retosCompletados");
    const elRondas = document.getElementById("rondasCompletadas");
    const elPuntosTotales = document.getElementById("puntosTotales");

    if (elementoPuntos) elementoPuntos.textContent = puntos;

    if (elementoVidas) {
        elementoVidas.textContent =
            "❤️".repeat(vidas) + "♡".repeat(MAX_VIDAS - vidas);
    }

    if (elementoCorrectas) elementoCorrectas.textContent = respuestasCorrectas;
    if (elementoRetos) elementoRetos.textContent = retosCompletados;
    if (elRondas) elRondas.textContent = historial.rondas;
    if (elPuntosTotales) elPuntosTotales.textContent = historial.puntosTotales;


    /* ---------------- PROGRESO GENERAL ---------------- */

    let categoriasCompletadas = 0;

    nombresTemas.forEach(nombre => {
        if (estadoPreguntas[nombre] && estadoPreguntas[nombre].completado) {
            categoriasCompletadas++;
        }
    });

    const porcentaje = Math.round(
        (categoriasCompletadas / nombresTemas.length) * 100
    );

    const elementoPorcentaje = document.getElementById("porcentaje");
    const circulo = document.getElementById("circuloProgreso");
    const mensaje = document.getElementById("mensajeProgreso");

    if (elementoPorcentaje) elementoPorcentaje.textContent = porcentaje + "%";

    if (circulo) {
        circulo.style.setProperty("--progreso", porcentaje + "%");
        circulo.style.background =
            `conic-gradient(#6c63ff ${porcentaje}%, #e6e6e6 ${porcentaje}%)`;
    }

    if (mensaje) {
        if (porcentaje === 100) {
            mensaje.textContent = "¡Completaste todas las categorías! 🎉";
        } else if (categoriasCompletadas === 0) {
            mensaje.textContent = "¡Empieza a explorar! 🚀";
        } else {
            mensaje.textContent =
                `Has completado ${categoriasCompletadas} de ${nombresTemas.length} categorías.`;
        }
    }


    /* ---------------- BOTÓN RETO FINAL ---------------- */

    const botonFinal = document.getElementById("btnRetoFinal");

    const desbloqueado = nombresTemas.every(nombre =>
        estadoPreguntas[nombre] && estadoPreguntas[nombre].completado
    );

    retoFinalDesbloqueado = desbloqueado;

    if (botonFinal) {
        botonFinal.disabled = !desbloqueado;
        botonFinal.textContent = desbloqueado
            ? "🏆 Comenzar Reto Final"
            : "🔒 Reto Final Bloqueado";
    }

    guardarProgreso();
}


/* ============================================================
   10. OBTENER SIGUIENTE PREGUNTA
============================================================ */

function obtenerSiguientePregunta(nombreTema) {

    if (!temas[nombreTema]) return null;

    const estado = estadoPreguntas[nombreTema];
    const preguntas = temas[nombreTema].preguntas;

    for (let i = 0; i < preguntas.length; i++) {
        if (!estado.respondidas.includes(i)) return i;
    }

    return null;
}


/* ============================================================
   11. CAMBIAR TEMA
============================================================ */

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

    document.querySelectorAll(".menu-btn").forEach(btn => {
        btn.classList.remove("activo");
    });

    if (boton) boton.classList.add("activo");
}


/* ============================================================
   12. CARGAR TEMA
============================================================ */

function cargarTema(nombreTema) {

    if (!temas[nombreTema]) {
        console.error("No existe el tema:", nombreTema);
        return;
    }

    temaActual = nombreTema;

    const tema = temas[nombreTema];

    indicePregunta = obtenerSiguientePregunta(nombreTema);

    const titulo = document.getElementById("tituloTema");
    const subtitulo = document.getElementById("subtituloTema");
    const icono = document.getElementById("iconoTema");
    const imagen = document.getElementById("imagenTema");
    const dato = document.getElementById("datoCurioso");
    const regiones = document.getElementById("regiones");
    const sobre = document.getElementById("sobreTexto");

    if (titulo) titulo.textContent = tema.titulo;
    if (subtitulo) subtitulo.textContent = tema.subtitulo;
    if (icono) icono.textContent = tema.icono;

    if (imagen) {
        if (tema.imagen) {
            imagen.style.backgroundImage = `url("${tema.imagen}")`;
            imagen.style.backgroundSize = "cover";
            imagen.style.backgroundPosition = "center";
            imagen.textContent = "";
        } else {
            imagen.style.backgroundImage = "none";
            imagen.textContent = tema.icono;
        }
    }

    if (dato) dato.textContent = tema.dato;
    if (regiones) regiones.textContent = tema.regiones;
    if (sobre) sobre.textContent = tema.sobreTexto;

    cargarPregunta();
    actualizarInterfaz();
}


/* ============================================================
   13. CARGAR PREGUNTA NORMAL
============================================================ */

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

    const preguntaHTML = document.getElementById("preguntaReto");
    const opcionesHTML = document.getElementById("opcionesReto");
    const resultadoHTML = document.getElementById("resultado");
    const botonSiguiente = document.getElementById("botonSiguiente");
    const numeroPregunta = document.getElementById("numeroPregunta");

    if (!preguntaHTML || !opcionesHTML) {
        console.error("No se encontraron preguntaReto u opcionesReto.");
        return;
    }

    preguntaHTML.textContent = pregunta.pregunta;
    opcionesHTML.innerHTML = "";

    if (resultadoHTML) {
        resultadoHTML.textContent = "";
        resultadoHTML.className = "";
    }

    if (botonSiguiente) {
        botonSiguiente.disabled = true;
        botonSiguiente.textContent = "Siguiente →";
    }

    if (numeroPregunta) {
        numeroPregunta.textContent =
            `${estado.respondidas.length + 1} / ${tema.preguntas.length}`;
    }

    pregunta.opciones.forEach(opcion => {
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

/* ============================================================
   14. COMPROBAR RESPUESTA
============================================================ */

function comprobarRespuesta(respuesta) {

    if (!temaActual) return;
    if (juegoBloqueadoPorVidas) return;

    const tema = temas[temaActual];
    const estado = estadoPreguntas[temaActual];
    const pregunta = tema.preguntas[indicePregunta];

    if (!pregunta) return;

    // Evitar doble respuesta
    if (estado.respondidas.includes(indicePregunta)) return;

    const botones = document.querySelectorAll("#opcionesReto .opcion");

    botones.forEach(boton => {
        boton.disabled = true;
        if (boton.textContent === pregunta.correcta) {
            boton.classList.add("correcta");
        }
    });

    const resultado = document.getElementById("resultado");
    const botonSiguiente = document.getElementById("botonSiguiente");

    const botonSeleccionado =
        [...botones].find(boton => boton.textContent === respuesta);

    if (respuesta === pregunta.correcta) {

        puntos += 10;
        respuestasCorrectas++;

        if (resultado) {
            resultado.textContent = "¡Correcto! 🎉";
            resultado.className = "correcto";
        }

    } else {

        vidas--;

        if (botonSeleccionado) botonSeleccionado.classList.add("incorrecta");

        if (resultado) {
            resultado.textContent =
                `Incorrecto. La respuesta correcta es: ${pregunta.correcta}`;
            resultado.className = "incorrecto";
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


/* ============================================================
   15. SIGUIENTE PREGUNTA
============================================================ */

function siguientePregunta() {

    if (juegoBloqueadoPorVidas) {
        abrirModalRecuperacion();
        return;
    }

    if (!temaActual) return;

    const estado = estadoPreguntas[temaActual];
    const tema = temas[temaActual];

    // Categoría ya completada: pasar a la siguiente
    if (estado.completado) {
        irASiguienteCategoria();
        return;
    }

    // Respondió todas: mostrar "categoría completada"
    if (estado.respondidas.length >= tema.preguntas.length) {
        finalizarTema();
        return;
    }

    cargarPregunta();
}


function irASiguienteCategoria() {

    const indiceActual = nombresTemas.indexOf(temaActual);

    // Buscar la siguiente sin completar, empezando después de la actual
    let destino = null;

    for (let i = 1; i <= nombresTemas.length; i++) {
        const nombre = nombresTemas[(indiceActual + i) % nombresTemas.length];
        if (!estadoPreguntas[nombre].completado) {
            destino = nombre;
            break;
        }
    }

    // Si ya completó todas: abrir el reto final
    if (destino === null) {
        comenzarRetoFinal();
        return;
    }

    const boton = document.querySelector(`.menu-btn[data-tema="${destino}"]`);

    cambiarTema(destino, boton);

    if (boton) boton.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

/* ============================================================
   16. FINALIZAR TEMA
============================================================ */

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

    const preguntaHTML = document.getElementById("preguntaReto");
    const opcionesHTML = document.getElementById("opcionesReto");
    const resultadoHTML = document.getElementById("resultado");
    const botonSiguiente = document.getElementById("botonSiguiente");
    const numeroPregunta = document.getElementById("numeroPregunta");

    if (preguntaHTML) preguntaHTML.textContent = "🎉 ¡Categoría completada!";

    if (opcionesHTML) {
        opcionesHTML.innerHTML =
            `<div class="tema-completado">
                Has completado todas las preguntas de esta categoría.
            </div>`;
    }

    if (resultadoHTML) resultadoHTML.textContent = "¡Excelente trabajo!";

    if (numeroPregunta) {
        numeroPregunta.textContent = `${cantidadPreguntas} / ${cantidadPreguntas}`;
    }

    // El botón ahora sirve para pasar a la siguiente categoría
    if (botonSiguiente) {
        const todasCompletadas = nombresTemas.every(nombre =>
            estadoPreguntas[nombre] && estadoPreguntas[nombre].completado
        );

        botonSiguiente.disabled = false;
        botonSiguiente.textContent = todasCompletadas
            ? "🏆 Ir al Reto Final"
            : "Siguiente categoría →";
    }
}

/* ============================================================
   17. AUDIO
============================================================ */

function reproducirAudio() {

    if (!temaActual) return;

    const tema = temas[temaActual];
    if (!tema) return;

    const texto = `${tema.titulo}. ${tema.subtitulo}. ${tema.audio}`;

    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();

        const mensaje = new SpeechSynthesisUtterance(texto);
        mensaje.lang = "es-ES";
        mensaje.rate = 0.9;
        mensaje.pitch = 1;

        window.speechSynthesis.speak(mensaje);
    } else {
        alert("Tu navegador no permite reproducir audio.");
    }
}


/* ============================================================
   18. MODAL DE RECUPERACIÓN (BLOQUEA LA PANTALLA)
============================================================ */

function abrirModalRecuperacion() {

    if (recuperacionActiva) return;

    const modal = document.getElementById("modalRecuperacion");
    const inicio = document.getElementById("inicioRecuperacion");
    const caja = document.getElementById("preguntaRecuperacionBox");

    if (!modal) return;

    // Restaurar el contenido original ("¡Te quedaste sin vidas!")
    if (inicio && htmlInicioRecuperacion) {
        inicio.innerHTML = htmlInicioRecuperacion;
    }

    if (caja) caja.style.display = "none";
    if (inicio) inicio.style.display = "block";

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}


/* ============================================================
   19. COMENZAR RETO DE RECUPERACIÓN
============================================================ */

function comenzarRetoRecuperacion() {

    const inicio = document.getElementById("inicioRecuperacion");
    const caja = document.getElementById("preguntaRecuperacionBox");
    const modal = document.getElementById("modalRecuperacion");

    preguntasRecuperacion = mezclar(preguntasRecuperacionBase);
    indiceRecuperacion = 0;
    aciertosRecuperacion = 0;
    recuperacionActiva = true;

    if (inicio) inicio.style.display = "none";
    if (caja) caja.style.display = "block";
    if (modal) modal.style.display = "flex";

    cargarPreguntaRecuperacion();
}


/* ============================================================
   20. CARGAR PREGUNTA DE RECUPERACIÓN
============================================================ */

function cargarPreguntaRecuperacion() {

    if (!recuperacionActiva) return;

    const pregunta = preguntasRecuperacion[indiceRecuperacion];

    if (!pregunta) {
        terminarRecuperacion();
        return;
    }

    const preguntaHTML = document.getElementById("preguntaRecuperacion");
    const opcionesHTML = document.getElementById("opcionesRecuperacion");
    const resultadoHTML = document.getElementById("resultadoRecuperacion");
    const botonContinuar = document.getElementById("btnContinuarRecuperacion");

    if (preguntaHTML) preguntaHTML.textContent = pregunta.pregunta;
    if (opcionesHTML) opcionesHTML.innerHTML = "";

    if (resultadoHTML) {
        resultadoHTML.textContent = "";
        resultadoHTML.className = "";
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
        boton.className = "opcion";
        boton.textContent = opcion;
        boton.addEventListener("click", () => {
            comprobarRespuestaRecuperacion(opcion);
        });
        if (opcionesHTML) opcionesHTML.appendChild(boton);
    });
}


/* ============================================================
   21. COMPROBAR RECUPERACIÓN
============================================================ */

function comprobarRespuestaRecuperacion(respuesta) {

    if (!recuperacionActiva) return;

    const pregunta = preguntasRecuperacion[indiceRecuperacion];
    if (!pregunta) return;

    const botones = document.querySelectorAll("#opcionesRecuperacion .opcion");

    botones.forEach(boton => {
        boton.disabled = true;

        if (boton.textContent === pregunta.correcta) {
            boton.classList.add("correcta");
        } else if (boton.textContent === respuesta) {
            boton.classList.add("incorrecta");
        }
    });

    const resultado = document.getElementById("resultadoRecuperacion");
    const botonContinuar = document.getElementById("btnContinuarRecuperacion");

    if (respuesta === pregunta.correcta) {

        aciertosRecuperacion++;

        if (resultado) {
            resultado.textContent = "¡Correcto! 🎉";
            resultado.className = "correcto";
        }

    } else if (resultado) {
        resultado.textContent =
            `Incorrecto. La respuesta correcta es: ${pregunta.correcta}`;
        resultado.className = "incorrecto";
    }

    if (botonContinuar) botonContinuar.disabled = false;
}


/* ============================================================
   22. CONTINUAR RECUPERACIÓN
============================================================ */

function continuarDespuesRecuperacion() {

    if (!recuperacionActiva) return;

    const resultado = document.getElementById("resultadoRecuperacion");
    if (!resultado || !resultado.textContent) return;

    indiceRecuperacion++;

    if (indiceRecuperacion >= preguntasRecuperacion.length) {
        terminarRecuperacion();
        return;
    }

    cargarPreguntaRecuperacion();
}


/* ============================================================
   23. TERMINAR RECUPERACIÓN
============================================================ */

function terminarRecuperacion() {

    recuperacionActiva = false;

    const modal = document.getElementById("modalRecuperacion");
    const caja = document.getElementById("preguntaRecuperacionBox");
    const inicio = document.getElementById("inicioRecuperacion");

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
                <h3>❤️ ¡Vidas recuperadas!</h3>
                <p>Acertaste ${aciertosRecuperacion} de ${preguntasRecuperacionBase.length}. ¡Sigue aprendiendo!</p>
                <button type="button" onclick="cerrarModalRecuperacion()">
                    Continuar
                </button>`;
        }

    } else {

        // Sigue bloqueado: debe intentarlo otra vez
        if (inicio) {
            inicio.style.display = "block";
            inicio.innerHTML = `
                <h3>💔 Aún no recuperas tus vidas</h3>
                <p>Acertaste ${aciertosRecuperacion} de ${preguntasRecuperacionBase.length}.
                   Necesitas al menos ${ACIERTOS_MINIMOS_RECUPERACION} para continuar.</p>
                <button type="button" onclick="comenzarRetoRecuperacion()">
                    Intentar de nuevo
                </button>`;
        }
    }

    if (modal) modal.style.display = "flex";
}


/* ============================================================
   24. CERRAR MODAL (solo si ya recuperó las vidas)
============================================================ */

function cerrarModalRecuperacion() {

    if (juegoBloqueadoPorVidas) return;

    const modal = document.getElementById("modalRecuperacion");
    if (modal) modal.style.display = "none";

    document.body.style.overflow = "";

    if (temaActual) cargarPregunta();
}


/* ============================================================
   25. COMENZAR RETO FINAL
============================================================ */

function comenzarRetoFinal() {

    const todasCompletadas = nombresTemas.every(nombre =>
        estadoPreguntas[nombre] && estadoPreguntas[nombre].completado
    );

    if (!todasCompletadas) {
        alert("Debes completar las 14 categorías antes de comenzar el reto final.");
        return;
    }

    retoFinalDesbloqueado = true;
    retoFinalActivo = true;
    indicePreguntaFinal = 0;
    puntosFinales = 0;
    respuestasFinales = 0;

    const modal = document.getElementById("modalRetoFinal");
    if (modal) modal.style.display = "flex";

    cargarPreguntaFinal();
}


/* ============================================================
   26. CARGAR PREGUNTA FINAL
============================================================ */

function cargarPreguntaFinal() {

    if (!retoFinalActivo) return;

    const pregunta = preguntasFinales[indicePreguntaFinal];

    if (!pregunta) {
        finalizarRetoFinal();
        return;
    }

    const preguntaHTML = document.getElementById("preguntaFinal");
    const opcionesHTML = document.getElementById("opcionesFinal");
    const resultadoHTML = document.getElementById("resultadoFinal");
    const numeroPregunta = document.getElementById("numeroPreguntaFinal");
    const botonSiguiente = document.getElementById("btnSiguienteFinal");

    if (preguntaHTML) preguntaHTML.textContent = pregunta.pregunta;
    if (opcionesHTML) opcionesHTML.innerHTML = "";

    if (resultadoHTML) {
        resultadoHTML.textContent = "";
        resultadoHTML.className = "";
    }

    if (numeroPregunta) {
        numeroPregunta.textContent =
            `${indicePreguntaFinal + 1} / ${preguntasFinales.length}`;
    }

    if (botonSiguiente) botonSiguiente.disabled = true;

    pregunta.opciones.forEach(opcion => {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.className = "opcion";
        boton.textContent = opcion;
        boton.addEventListener("click", () => {
            comprobarRespuestaFinal(opcion);
        });
        if (opcionesHTML) opcionesHTML.appendChild(boton);
    });
}


/* ============================================================
   27. COMPROBAR RESPUESTA FINAL
============================================================ */

function comprobarRespuestaFinal(respuesta) {

    if (!retoFinalActivo) return;

    const pregunta = preguntasFinales[indicePreguntaFinal];
    if (!pregunta) return;

    const botones = document.querySelectorAll("#opcionesFinal .opcion");

    botones.forEach(boton => {
        boton.disabled = true;

        if (boton.textContent === pregunta.correcta) {
            boton.classList.add("correcta");
        } else if (boton.textContent === respuesta) {
            boton.classList.add("incorrecta");
        }
    });

    const resultado = document.getElementById("resultadoFinal");
    const botonSiguiente = document.getElementById("btnSiguienteFinal");

    if (respuesta === pregunta.correcta) {

        puntosFinales += 10;
        respuestasFinales++;

        if (resultado) {
            resultado.textContent = "¡Correcto! 🎉";
            resultado.className = "correcto";
        }

    } else if (resultado) {
        resultado.textContent =
            `Incorrecto. La respuesta correcta es: ${pregunta.correcta}`;
        resultado.className = "incorrecto";
    }

    if (botonSiguiente) botonSiguiente.disabled = false;
}


/* ============================================================
   28. SIGUIENTE PREGUNTA FINAL
============================================================ */

function siguientePreguntaFinal() {

    if (!retoFinalActivo) return;

    indicePreguntaFinal++;

    if (indicePreguntaFinal >= preguntasFinales.length) {
        finalizarRetoFinal();
        return;
    }

    cargarPreguntaFinal();
}


/* ============================================================
   29. FINALIZAR RETO FINAL (guarda historial y limpia panel)
============================================================ */

function finalizarRetoFinal() {

    retoFinalActivo = false;

    const modal = document.getElementById("modalRetoFinal");
    const aventura = document.getElementById("aventuraCompletada");
    const resultadoPuntos = document.getElementById("resultadoPuntosFinales");
    const resultadoCorrectas = document.getElementById("resultadoCorrectasFinales");

    if (modal) modal.style.display = "none";
    if (aventura) aventura.style.display = "flex";

    if (resultadoPuntos) resultadoPuntos.textContent = puntosFinales;

    if (resultadoCorrectas) {
        resultadoCorrectas.textContent =
            `${respuestasFinales} / ${preguntasFinales.length}`;
    }

    // 1. GUARDAR la ronda en el historial
    historial.rondas++;
    historial.puntosTotales += puntos + puntosFinales;
    historial.correctasTotales += respuestasCorrectas + respuestasFinales;

    // 2. LIMPIAR el panel derecho y las categorías
    iniciarNuevaRonda();
}


/* ============================================================
   NUEVA RONDA: deja todo limpio para volver a empezar
============================================================ */

function iniciarNuevaRonda() {

    estadoPreguntas = crearEstadoInicial();

    puntos = 0;
    vidas = MAX_VIDAS;
    respuestasCorrectas = 0;
    retosCompletados = 0;

    juegoBloqueadoPorVidas = false;
    retoFinalDesbloqueado = false;
    retoFinalActivo = false;

    guardarProgreso();
    actualizarInterfaz();

    cargarTema(nombresTemas[0]);

    document.querySelectorAll(".menu-btn").forEach(btn => {
        btn.classList.remove("activo");
    });

    const primerBoton = document.querySelector(
        `.menu-btn[onclick*="${nombresTemas[0]}"]`
    );
    if (primerBoton) primerBoton.classList.add("activo");
}


/* ============================================================
   30. CERRAR RETO FINAL
============================================================ */

function cerrarRetoFinal() {

    const modal = document.getElementById("modalRetoFinal");
    if (modal) modal.style.display = "none";

    retoFinalActivo = false;
}


/* ============================================================
   31. REINICIAR TODO EL PROGRESO
============================================================ */

function reiniciarProgreso() {

    const confirmar = confirm(
        "¿Seguro que quieres borrar todo tu progreso en Alemania?"
    );

    if (!confirmar) return;

    localStorage.removeItem(CLAVE_GUARDADO);

    estadoPreguntas = crearEstadoInicial();
    temaActual = null;
    indicePregunta = 0;

    puntos = 0;
    vidas = MAX_VIDAS;
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


/* ============================================================
   32. INICIALIZACIÓN
============================================================ */

document.addEventListener("DOMContentLoaded", function () {

    // Guardar el contenido original del modal de "sin vidas"
    const inicio = document.getElementById("inicioRecuperacion");
    if (inicio) htmlInicioRecuperacion = inicio.innerHTML;

    cargarProgreso();
    actualizarInterfaz();

    const primerTema = nombresTemas[0];
    const boton = document.querySelector(`.menu-btn[onclick*="${primerTema}"]`);

    cargarTema(primerTema);

    document.querySelectorAll(".menu-btn").forEach(btn => {
        btn.classList.remove("activo");
    });

    if (boton) boton.classList.add("activo");

    // Si recargó la página con 0 vidas, bloquear de inmediato
    if (juegoBloqueadoPorVidas) {
        abrirModalRecuperacion();
    }
});


/* ============================================================
   33. HACER DISPONIBLES LAS FUNCIONES PARA HTML
============================================================ */

window.cambiarTema = cambiarTema;
window.cargarTema = cargarTema;
window.siguientePregunta = siguientePregunta;
window.reproducirAudio = reproducirAudio;
window.comenzarRetoRecuperacion = comenzarRetoRecuperacion;
window.continuarDespuesRecuperacion = continuarDespuesRecuperacion;
window.cerrarModalRecuperacion = cerrarModalRecuperacion;
window.comenzarRetoFinal = comenzarRetoFinal;
window.siguientePreguntaFinal = siguientePreguntaFinal;
window.cerrarRetoFinal = cerrarRetoFinal;
window.reiniciarProgreso = reiniciarProgreso;
window.iniciarNuevaRonda = iniciarNuevaRonda;


/* ============================================================
   FIN DE ALEMANIA.JS
============================================================ */