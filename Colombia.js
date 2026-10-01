/* ============================================================
   HISTORIA SIN FRONTERAS - COLOMBIA
   14 categorías × 5 preguntas = 70 preguntas
   5 vidas · bloqueo al llegar a 0 · reto de recuperación
   Reto final de 30 preguntas · historial de rondas
============================================================ */


/* ------------------------------------------------------------
   1. CONFIGURACIÓN
------------------------------------------------------------ */

const CLAVE_GUARDADO = "historiaSinFronterasColombia_v2";
const MAX_VIDAS = 5;
const PUNTOS_CORRECTA = 10;
const ACIERTOS_MINIMOS_RECUPERACION = 3;

const nombresTemas = [
  "primeras-civilizaciones",
  "conquista",
  "epoca-colonial",
  "independencia",
  "personajes-historicos",
  "conflictos-importantes",
  "gastronomia",
  "musica-y-bailes",
  "tradiciones",
  "religiones",
  "vestimenta-tipica",
  "arte-y-literatura",
  "monumentos",
  "fiestas"
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


/* ------------------------------------------------------------
   2. TEMAS Y 70 PREGUNTAS
   (Opcional: agrega imagen: "URL" a un tema para cambiar la foto)
------------------------------------------------------------ */

const temas = {

  "primeras-civilizaciones": {
    titulo: "Primeras civilizaciones",
    subtitulo: "Conoce los pueblos que habitaron Colombia antes de la llegada de los españoles.",
    icono: "🏺",
    mensaje: "Descubre las grandes culturas indígenas que dejaron una importante huella en Colombia.",
    regiones: ["Andina", "Caribe", "Pacífica"],
    dato: "Los pueblos indígenas desarrollaron sistemas de agricultura, comercio, arte y organización social.",
    preguntas: [
      q("¿Qué pueblo indígena habitó principalmente el altiplano Cundiboyacense?", ["Muisca", "Tairona", "Wayuu", "Emberá"], "Muisca"),
      q("¿Qué pueblo indígena construyó la Ciudad Perdida?", ["Tairona", "Muisca", "Quimbaya", "Zenú"], "Tairona"),
      q("¿Por qué fueron reconocidos los Quimbaya?", ["Por su orfebrería", "Por sus barcos", "Por sus pirámides egipcias", "Por sus castillos"], "Por su orfebrería"),
      q("¿En qué región se desarrolló principalmente la cultura Zenú?", ["Caribe", "Amazonía", "Orinoquía", "Andina"], "Caribe"),
      q("¿Dónde se encuentra el Parque Arqueológico de San Agustín?", ["Huila", "Atlántico", "La Guajira", "Antioquia"], "Huila")
    ]
  },

  "conquista": {
    titulo: "Conquista",
    subtitulo: "Conoce el proceso de llegada y expansión española en el territorio colombiano.",
    icono: "⛵",
    mensaje: "La conquista transformó profundamente la historia de los pueblos que habitaban el territorio.",
    regiones: ["Caribe", "Andina"],
    dato: "Santa Marta fue fundada en 1525 y es una de las ciudades más antiguas fundadas por los españoles en América.",
    preguntas: [
      q("¿En qué año fue fundada Santa Marta?", ["1525", "1492", "1600", "1810"], "1525"),
      q("¿Quién dirigió la expedición española que llegó al territorio del pueblo Muisca?", ["Gonzalo Jiménez de Quesada", "Simón Bolívar", "Francisco de Paula Santander", "Antonio Nariño"], "Gonzalo Jiménez de Quesada"),
      q("¿En qué año fue fundada Cartagena de Indias por los españoles?", ["1533", "1492", "1605", "1819"], "1533"),
      q("¿Qué pueblo indígena habitaba gran parte del altiplano Cundiboyacense?", ["Muisca", "Tairona", "Wayuu", "Pijao"], "Muisca"),
      q("Una consecuencia de la conquista fue:", ["La transformación de las sociedades indígenas", "La desaparición inmediata de toda población indígena", "La creación de internet", "La independencia de Colombia"], "La transformación de las sociedades indígenas")
    ]
  },

  "epoca-colonial": {
    titulo: "Época colonial",
    subtitulo: "Explora cómo se organizó el territorio durante el dominio español.",
    icono: "🏰",
    mensaje: "Durante la época colonial se establecieron nuevas instituciones, formas de gobierno y actividades económicas.",
    regiones: ["Todo el territorio colonial"],
    dato: "El territorio colombiano hizo parte del Virreinato de la Nueva Granada.",
    preguntas: [
      q("¿Cómo se llamó el territorio colonial que incluía gran parte de la actual Colombia?", ["Virreinato de la Nueva Granada", "Imperio Inca", "Virreinato de México", "República de Colombia"], "Virreinato de la Nueva Granada"),
      q("¿Cuál fue una actividad económica importante durante la colonia?", ["Minería", "Programación", "Industria espacial", "Cine digital"], "Minería"),
      q("¿Qué ciudad se convirtió en un importante puerto colonial?", ["Cartagena de Indias", "Bogotá", "Pasto", "Manizales"], "Cartagena de Indias"),
      q("Durante la colonia existieron diferencias sociales entre:", ["Los diferentes grupos de la sociedad", "Los planetas", "Los continentes", "Los océanos"], "Los diferentes grupos de la sociedad"),
      q("¿Qué país europeo controlaba el territorio colombiano durante la colonia?", ["España", "Francia", "Italia", "Portugal"], "España")
    ]
  },

  "independencia": {
    titulo: "Independencia",
    subtitulo: "Conoce los acontecimientos que llevaron a la independencia de Colombia.",
    icono: "🇨🇴",
    mensaje: "La independencia fue un proceso histórico que transformó el territorio y dio paso a una nueva organización política.",
    regiones: ["Nueva Granada"],
    dato: "La Batalla de Boyacá ocurrió el 7 de agosto de 1819.",
    preguntas: [
      q("¿Qué ocurrió el 20 de julio de 1810?", ["El inicio del proceso de independencia en Santa Fe", "La batalla de Boyacá", "La separación de Panamá", "La Constitución de 1991"], "El inicio del proceso de independencia en Santa Fe"),
      q("¿Quién fue uno de los principales líderes militares de la independencia?", ["Simón Bolívar", "Gabriel García Márquez", "Fernando Botero", "Jorge Eliécer Gaitán"], "Simón Bolívar"),
      q("¿Cuándo ocurrió la Batalla de Boyacá?", ["1819", "1810", "1825", "1903"], "1819"),
      q("¿Qué mujer participó activamente en la independencia?", ["Policarpa Salavarrieta", "Débora Arango", "Shakira", "Caterine Ibargüen"], "Policarpa Salavarrieta"),
      q("¿Qué proceso siguió a la independencia de España?", ["La construcción de una nueva organización política", "La conquista española", "La llegada de los conquistadores", "La fundación de Roma"], "La construcción de una nueva organización política")
    ]
  },

  "personajes-historicos": {
    titulo: "Personajes históricos",
    subtitulo: "Conoce personas que dejaron una huella importante en la historia de Colombia.",
    icono: "👤",
    mensaje: "Muchos personajes contribuyeron a los procesos políticos, sociales y culturales del país.",
    regiones: ["Todo Colombia"],
    dato: "Policarpa Salavarrieta es uno de los personajes femeninos más reconocidos de la independencia.",
    preguntas: [
      q("¿Quién fue Simón Bolívar?", ["Un líder de la independencia", "Un pintor colombiano", "Un cantante", "Un escritor del siglo XXI"], "Un líder de la independencia"),
      q("¿Quién fue Francisco de Paula Santander?", ["Un líder político y militar de la independencia", "Un músico", "Un chef", "Un arquitecto"], "Un líder político y militar de la independencia"),
      q("¿Quién fue Policarpa Salavarrieta?", ["Una mujer vinculada al proceso de independencia", "Una reina española", "Una cantante", "Una pintora contemporánea"], "Una mujer vinculada al proceso de independencia"),
      q("¿Quién fue Antonio Nariño?", ["Un político y precursor de la independencia", "Un deportista", "Un cantante", "Un científico espacial"], "Un político y precursor de la independencia"),
      q("¿Quién fue Jorge Eliécer Gaitán?", ["Un líder político colombiano", "Un pintor", "Un músico vallenato", "Un explorador español"], "Un líder político colombiano")
    ]
  },

  "conflictos-importantes": {
    titulo: "Conflictos importantes",
    subtitulo: "Conoce algunos conflictos que marcaron la historia colombiana.",
    icono: "⚔️",
    mensaje: "Los conflictos internos han tenido diferentes causas y consecuencias a lo largo de la historia.",
    regiones: ["Todo Colombia"],
    dato: "La Guerra de los Mil Días ocurrió entre 1899 y 1902.",
    preguntas: [
      q("¿Entre qué años ocurrió la Guerra de los Mil Días?", ["1899-1902", "1810-1819", "1930-1935", "2000-2005"], "1899-1902"),
      q("¿En qué año se produjo la separación de Panamá de Colombia?", ["1903", "1810", "1886", "1991"], "1903"),
      q("¿Cómo se conoce al periodo de violencia política ocurrido principalmente a mediados del siglo XX?", ["La Violencia", "La Colonia", "La Conquista", "La Regeneración"], "La Violencia"),
      q("¿Qué acontecimiento ocurrió en 2016 relacionado con el conflicto armado?", ["La firma del acuerdo de paz entre el Gobierno y las FARC-EP", "La independencia de Colombia", "La fundación de Cartagena", "La separación de Panamá"], "La firma del acuerdo de paz entre el Gobierno y las FARC-EP"),
      q("Los conflictos internos pueden producir:", ["Consecuencias sociales, económicas y políticas", "Únicamente cambios deportivos", "Solamente cambios climáticos", "Ninguna consecuencia"], "Consecuencias sociales, económicas y políticas")
    ]
  },

  "gastronomia": {
    titulo: "Gastronomía",
    subtitulo: "Descubre algunos sabores tradicionales de las regiones colombianas.",
    icono: "🍲",
    mensaje: "La gastronomía colombiana refleja la diversidad cultural y regional del país.",
    regiones: ["Caribe", "Andina", "Pacífica"],
    dato: "La arepa tiene muchas preparaciones diferentes según la región.",
    preguntas: [
      q("¿Cuál de estos platos es tradicional de Antioquia?", ["Bandeja paisa", "Ajiaco santafereño", "Mote de queso", "Mamona"], "Bandeja paisa"),
      q("¿Qué plato es especialmente representativo de Bogotá?", ["Ajiaco", "Sancocho de gallina", "Arroz con coco", "Mamona"], "Ajiaco"),
      q("¿Qué alimento es muy representativo de la gastronomía colombiana?", ["Arepa", "Sushi", "Pizza napolitana", "Croissant"], "Arepa"),
      q("¿Qué ingrediente es característico del arroz con coco?", ["Coco", "Chocolate", "Café", "Manzana"], "Coco"),
      q("El sancocho es principalmente:", ["Una preparación tradicional con caldo y diferentes ingredientes", "Un postre", "Una bebida", "Un tipo de pan"], "Una preparación tradicional con caldo y diferentes ingredientes")
    ]
  },

  "musica-y-bailes": {
    titulo: "Música y bailes",
    subtitulo: "Explora los ritmos y danzas tradicionales de Colombia.",
    icono: "💃",
    mensaje: "Colombia posee una gran diversidad de ritmos musicales y danzas tradicionales.",
    regiones: ["Caribe", "Pacífica", "Andina"],
    dato: "La cumbia es uno de los ritmos colombianos más reconocidos internacionalmente.",
    preguntas: [
      q("¿Qué ritmo es uno de los más representativos de la región Caribe?", ["Cumbia", "Bambuco", "Joropo", "Pasillo"], "Cumbia"),
      q("¿Qué género musical es especialmente asociado con la región Caribe colombiana?", ["Vallenato", "Bambuco", "Carranga", "Guabina"], "Vallenato"),
      q("¿Qué danza es característica de la región Pacífica?", ["Currulao", "Bambuco", "Pasillo", "Torbellino"], "Currulao"),
      q("¿Qué baile colombiano se caracteriza por movimientos enérgicos y es tradicional de la región Caribe?", ["Mapalé", "Vals", "Tango", "Flamenco"], "Mapalé"),
      q("¿Qué ritmo es representativo de la región Andina?", ["Bambuco", "Reggae", "Samba brasileña", "Tango"], "Bambuco")
    ]
  },

  "tradiciones": {
    titulo: "Tradiciones",
    subtitulo: "Conoce costumbres que forman parte de la identidad cultural colombiana.",
    icono: "🎭",
    mensaje: "Las tradiciones se transmiten entre generaciones y ayudan a conservar la identidad cultural.",
    regiones: ["Todo el país"],
    dato: "El Día de las Velitas se celebra principalmente el 7 de diciembre.",
    preguntas: [
      q("¿Cuándo se celebra tradicionalmente el Día de las Velitas?", ["7 de diciembre", "20 de julio", "1 de mayo", "12 de octubre"], "7 de diciembre"),
      q("¿Qué tradición cultural es muy conocida en Antioquia?", ["Desfile de Silleteros", "Carnaval de Negros y Blancos", "Festival Vallenato", "Feria de Cali"], "Desfile de Silleteros"),
      q("Las tradiciones culturales se transmiten principalmente:", ["De generación en generación", "Solo por internet", "Únicamente en las escuelas", "Solo por televisión"], "De generación en generación"),
      q("La tradición oral permite:", ["Transmitir historias, conocimientos y costumbres", "Eliminar las culturas", "Cambiar los idiomas automáticamente", "Crear mapas digitales"], "Transmitir historias, conocimientos y costumbres"),
      q("La diversidad de tradiciones colombianas se relaciona con:", ["La diversidad cultural y regional", "Un único pueblo", "Una sola región", "Un solo idioma"], "La diversidad cultural y regional")
    ]
  },

  "religiones": {
    titulo: "Religiones",
    subtitulo: "Conoce la diversidad religiosa y espiritual presente en Colombia.",
    icono: "🕊️",
    mensaje: "La historia colombiana incluye diferentes formas de entender la espiritualidad y la religión.",
    regiones: ["Todo el país"],
    dato: "La Constitución de 1991 reconoce la libertad de cultos en Colombia.",
    preguntas: [
      q("¿Qué establece la Constitución colombiana sobre la libertad religiosa?", ["Reconoce la libertad de cultos", "Prohíbe todas las religiones", "Establece una religión obligatoria para todos", "Prohíbe las creencias indígenas"], "Reconoce la libertad de cultos"),
      q("¿Cuál ha sido históricamente una religión con gran presencia en Colombia?", ["Catolicismo", "Sintoísmo", "Hinduismo", "Budismo"], "Catolicismo"),
      q("Las comunidades indígenas pueden conservar:", ["Sus propias tradiciones espirituales", "Únicamente tradiciones extranjeras", "Ninguna tradición", "Solo costumbres deportivas"], "Sus propias tradiciones espirituales"),
      q("La diversidad religiosa significa que:", ["Existen diferentes creencias y prácticas religiosas", "Todas las personas tienen exactamente las mismas creencias", "No existen religiones", "Solo existe una tradición cultural"], "Existen diferentes creencias y prácticas religiosas"),
      q("La libertad religiosa está relacionada con:", ["El respeto por diferentes creencias", "La eliminación de culturas", "La prohibición de tradiciones", "La desaparición de idiomas"], "El respeto por diferentes creencias")
    ]
  },

  "vestimenta-tipica": {
    titulo: "Vestimenta típica",
    subtitulo: "Descubre prendas y accesorios tradicionales de diferentes regiones.",
    icono: "👒",
    mensaje: "La vestimenta tradicional refleja la identidad, historia y costumbres de diferentes comunidades.",
    regiones: ["Caribe", "Andina", "Pacífica"],
    dato: "El sombrero vueltiao es uno de los símbolos culturales más conocidos de Colombia.",
    preguntas: [
      q("¿De qué región es especialmente representativo el sombrero vueltiao?", ["Caribe", "Amazonía", "Orinoquía", "Pacífica"], "Caribe"),
      q("¿Con qué material se fabrica tradicionalmente el sombrero vueltiao?", ["Caña flecha", "Algodón industrial", "Lana de oveja", "Cuero"], "Caña flecha"),
      q("¿Qué prenda es característica de algunas zonas frías de la región Andina?", ["Ruana", "Pollera", "Guayabera", "Sombrero vueltiao"], "Ruana"),
      q("La vestimenta tradicional Wayuu pertenece principalmente a:", ["La Guajira", "Amazonas", "Nariño", "Boyacá"], "La Guajira"),
      q("La vestimenta tradicional ayuda a representar:", ["La identidad cultural", "Solo la moda internacional", "Únicamente el clima", "Los avances tecnológicos"], "La identidad cultural")
    ]
  },

  "arte-y-literatura": {
    titulo: "Arte y literatura",
    subtitulo: "Conoce artistas y escritores importantes de Colombia.",
    icono: "🎨",
    mensaje: "El arte y la literatura colombiana han alcanzado reconocimiento nacional e internacional.",
    regiones: ["Todo Colombia"],
    dato: "Gabriel García Márquez recibió el Premio Nobel de Literatura en 1982.",
    preguntas: [
      q("¿Quién escribió Cien años de soledad?", ["Gabriel García Márquez", "Fernando Botero", "José Asunción Silva", "Jorge Isaacs"], "Gabriel García Márquez"),
      q("¿Qué artista colombiano es reconocido por sus figuras de formas voluminosas?", ["Fernando Botero", "Gabriel García Márquez", "Jorge Isaacs", "Rafael Pombo"], "Fernando Botero"),
      q("¿Quién fue Débora Arango?", ["Una importante pintora colombiana", "Una cantante", "Una presidenta", "Una exploradora"], "Una importante pintora colombiana"),
      q("¿Qué escritor colombiano recibió el Premio Nobel de Literatura?", ["Gabriel García Márquez", "Jorge Isaacs", "Rafael Pombo", "José Asunción Silva"], "Gabriel García Márquez"),
      q("¿Cuál de estas actividades pertenece a las artes visuales?", ["Pintura", "Agricultura", "Minería", "Pesca"], "Pintura")
    ]
  },

  "monumentos": {
    titulo: "Monumentos",
    subtitulo: "Descubre lugares históricos y culturales importantes de Colombia.",
    icono: "🏛️",
    mensaje: "Colombia posee numerosos lugares que conservan su patrimonio histórico y cultural.",
    regiones: ["Sierra Nevada", "Cartagena", "Nariño", "Zipaquirá"],
    dato: "La Ciudad Perdida se encuentra en la Sierra Nevada de Santa Marta.",
    preguntas: [
      q("¿Dónde se encuentra la Ciudad Perdida?", ["Sierra Nevada de Santa Marta", "Bogotá", "Valle del Cauca", "Amazonas"], "Sierra Nevada de Santa Marta"),
      q("¿En qué ciudad se encuentra el Castillo de San Felipe de Barajas?", ["Cartagena", "Medellín", "Cali", "Pereira"], "Cartagena"),
      q("¿Dónde se encuentra el Santuario de Las Lajas?", ["Nariño", "Atlántico", "Antioquia", "Cesar"], "Nariño"),
      q("¿Dónde se encuentra la Catedral de Sal?", ["Zipaquirá", "Santa Marta", "Cartagena", "Cali"], "Zipaquirá"),
      q("¿Qué sitio arqueológico es famoso por sus esculturas monumentales?", ["San Agustín", "Cartagena", "Medellín", "Barranquilla"], "San Agustín")
    ]
  },

  "fiestas": {
    titulo: "Fiestas",
    subtitulo: "Conoce algunas de las celebraciones culturales más importantes del país.",
    icono: "🎉",
    mensaje: "Las fiestas colombianas reúnen música, danza, gastronomía y tradiciones regionales.",
    regiones: ["Barranquilla", "Medellín", "Pasto", "Valledupar", "Cali"],
    dato: "El Carnaval de Barranquilla es una de las celebraciones culturales más importantes de Colombia.",
    preguntas: [
      q("¿En qué ciudad se celebra el Carnaval de Barranquilla?", ["Barranquilla", "Bogotá", "Cali", "Pasto"], "Barranquilla"),
      q("¿Dónde se celebra la Feria de las Flores?", ["Medellín", "Cartagena", "Pasto", "Santa Marta"], "Medellín"),
      q("¿En qué ciudad se celebra el Carnaval de Negros y Blancos?", ["Pasto", "Cali", "Bogotá", "Manizales"], "Pasto"),
      q("¿Dónde se realiza el Festival de la Leyenda Vallenata?", ["Valledupar", "Medellín", "Bogotá", "Popayán"], "Valledupar"),
      q("¿Qué ciudad es reconocida por su Feria de Cali?", ["Cali", "Pereira", "Cartagena", "Tunja"], "Cali")
    ]
  }
};


/* ------------------------------------------------------------
   3. RETO DE RECUPERACIÓN
   (5 preguntas · mínimo 3 aciertos)
------------------------------------------------------------ */

const preguntasRecuperacionBase = [
  q("¿En qué año ocurrió la Batalla de Boyacá?", ["1819", "1810", "1903", "1991"], "1819"),
  q("¿Qué ritmo colombiano es especialmente representativo de la región Caribe?", ["Cumbia", "Bambuco", "Currulao", "Pasillo"], "Cumbia"),
  q("¿Quién escribió Cien años de soledad?", ["Gabriel García Márquez", "Fernando Botero", "Simón Bolívar", "Antonio Nariño"], "Gabriel García Márquez"),
  q("¿En qué ciudad se celebra el Carnaval de Barranquilla?", ["Barranquilla", "Bogotá", "Cali", "Pasto"], "Barranquilla"),
  q("¿Qué plato es muy representativo de Bogotá?", ["Ajiaco", "Bandeja paisa", "Mamona", "Arroz con coco"], "Ajiaco")
];


/* ------------------------------------------------------------
   4. RETO FINAL · 30 PREGUNTAS
------------------------------------------------------------ */

const preguntasFinales = [
  q("¿Qué pueblo indígena habitó el altiplano Cundiboyacense?", ["Muisca", "Tairona", "Wayuu", "Quimbaya"], "Muisca"),
  q("¿Qué pueblo está relacionado con la Ciudad Perdida?", ["Tairona", "Muisca", "Zenú", "Quimbaya"], "Tairona"),
  q("¿En qué año fue fundada Santa Marta?", ["1525", "1533", "1810", "1903"], "1525"),
  q("¿Quién dirigió la expedición española hacia el territorio Muisca?", ["Gonzalo Jiménez de Quesada", "Simón Bolívar", "Santander", "Antonio Nariño"], "Gonzalo Jiménez de Quesada"),
  q("¿Qué territorio colonial incluyó gran parte de la actual Colombia?", ["Virreinato de la Nueva Granada", "Imperio romano", "Virreinato del Perú", "Nueva España"], "Virreinato de la Nueva Granada"),
  q("¿Cuál fue una actividad económica importante durante la colonia?", ["Minería", "Programación", "Cine", "Aviación"], "Minería"),
  q("¿Qué ocurrió el 20 de julio de 1810?", ["Un acontecimiento relacionado con el inicio de la independencia", "La separación de Panamá", "La Constitución de 1991", "La Guerra de los Mil Días"], "Un acontecimiento relacionado con el inicio de la independencia"),
  q("¿Quién fue Simón Bolívar?", ["Líder de la independencia", "Pintor", "Escritor", "Músico"], "Líder de la independencia"),
  q("¿En qué año ocurrió la Batalla de Boyacá?", ["1819", "1810", "1825", "1903"], "1819"),
  q("¿Quién fue Policarpa Salavarrieta?", ["Una mujer vinculada a la independencia", "Una pintora", "Una cantante", "Una reina"], "Una mujer vinculada a la independencia"),
  q("¿Quién fue Francisco de Paula Santander?", ["Un líder político y militar", "Un músico", "Un escritor", "Un pintor"], "Un líder político y militar"),
  q("¿Entre qué años ocurrió la Guerra de los Mil Días?", ["1899-1902", "1810-1819", "1903-1910", "1930-1940"], "1899-1902"),
  q("¿En qué año se separó Panamá de Colombia?", ["1903", "1819", "1886", "1991"], "1903"),
  q("¿Qué ocurrió en 2016 relacionado con el conflicto armado?", ["Se firmó un acuerdo de paz entre el Gobierno y las FARC-EP", "Se fundó Bogotá", "Se produjo la independencia", "Se fundó Cartagena"], "Se firmó un acuerdo de paz entre el Gobierno y las FARC-EP"),
  q("¿Cuál es un plato tradicional de Antioquia?", ["Bandeja paisa", "Ajiaco", "Arroz con coco", "Mote de queso"], "Bandeja paisa"),
  q("¿Qué plato es muy representativo de Bogotá?", ["Ajiaco", "Bandeja paisa", "Mamona", "Arroz con coco"], "Ajiaco"),
  q("¿Qué alimento tiene muchas preparaciones regionales en Colombia?", ["Arepa", "Sushi", "Croissant", "Pasta"], "Arepa"),
  q("¿Qué ritmo es representativo de la región Caribe?", ["Cumbia", "Bambuco", "Currulao", "Pasillo"], "Cumbia"),
  q("¿Qué género musical está asociado especialmente con el Caribe colombiano?", ["Vallenato", "Bambuco", "Pasillo", "Guabina"], "Vallenato"),
  q("¿Qué ritmo es característico de la región Pacífica?", ["Currulao", "Bambuco", "Joropo", "Pasillo"], "Currulao"),
  q("¿Cuándo se celebra tradicionalmente el Día de las Velitas?", ["7 de diciembre", "20 de julio", "12 de octubre", "1 de enero"], "7 de diciembre"),
  q("¿Qué tradición es muy conocida en Antioquia?", ["Desfile de Silleteros", "Carnaval de Negros y Blancos", "Feria de Cali", "Festival Vallenato"], "Desfile de Silleteros"),
  q("¿Qué reconoce la Constitución de 1991 en materia religiosa?", ["Libertad de cultos", "Una única religión obligatoria", "Prohibición de religiones", "Prohibición de tradiciones indígenas"], "Libertad de cultos"),
  q("¿Cuál ha sido históricamente una religión con gran presencia en Colombia?", ["Catolicismo", "Sintoísmo", "Budismo", "Hinduismo"], "Catolicismo"),
  q("¿Con qué material se fabrica tradicionalmente el sombrero vueltiao?", ["Caña flecha", "Lana", "Cuero", "Seda"], "Caña flecha"),
  q("¿Qué prenda es característica de algunas zonas frías de la región Andina?", ["Ruana", "Pollera", "Guayabera", "Sombrero vueltiao"], "Ruana"),
  q("¿Quién escribió Cien años de soledad?", ["Gabriel García Márquez", "Fernando Botero", "Jorge Isaacs", "Rafael Pombo"], "Gabriel García Márquez"),
  q("¿Qué artista colombiano es conocido por sus figuras voluminosas?", ["Fernando Botero", "Débora Arango", "Gabo", "Rafael Pombo"], "Fernando Botero"),
  q("¿Dónde se encuentra la Catedral de Sal?", ["Zipaquirá", "Cartagena", "Medellín", "Pasto"], "Zipaquirá"),
  q("¿En qué ciudad se celebra el Carnaval de Negros y Blancos?", ["Pasto", "Cali", "Bogotá", "Barranquilla"], "Pasto")
];


/* ------------------------------------------------------------
   5. ESTADO DEL JUEGO
------------------------------------------------------------ */

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


/* ------------------------------------------------------------
   6. ESTADO INICIAL Y PERSISTENCIA
------------------------------------------------------------ */

function crearEstadoInicial() {
  const estado = {};
  nombresTemas.forEach(nombre => {
    estado[nombre] = { respondidas: [], completado: false };
  });
  return estado;
}

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


/* ------------------------------------------------------------
   7. INTERFAZ
------------------------------------------------------------ */

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

  // Progreso general
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

  // Botón reto final
  const desbloqueado = nombresTemas.every(
    nombre => estadoPreguntas[nombre] && estadoPreguntas[nombre].completado
  );
  retoFinalDesbloqueado = desbloqueado;

  const botonFinal = obtener("btnRetoFinal");
  if (botonFinal) {
    botonFinal.disabled = !desbloqueado;
    botonFinal.textContent = desbloqueado
      ? "🏆 Comenzar Reto Final de Colombia"
      : "🔒 Reto Final Bloqueado";
  }

  guardarProgreso();
}


/* ------------------------------------------------------------
   8. TEMAS Y PREGUNTAS NORMALES
------------------------------------------------------------ */

function obtenerSiguientePregunta(nombreTema) {
  if (!temas[nombreTema]) return null;

  const estado = estadoPreguntas[nombreTema];
  const preguntas = temas[nombreTema].preguntas;

  for (let i = 0; i < preguntas.length; i++) {
    if (!estado.respondidas.includes(i)) return i;
  }
  return null;
}

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
    boton.addEventListener("click", () => comprobarRespuesta(opcion));
    opcionesHTML.appendChild(boton);
  });
}

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
  const botonSeleccionado = [...botones].find(boton => boton.textContent === respuesta);

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

  const boton = document.querySelector(`.menu-btn[data-tema="${destino}"]`);
  cambiarTema(destino, boton);
  if (boton) boton.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

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
    opcionesHTML.innerHTML = `
      <div class="tema-completado">
        Has completado todas las preguntas de esta categoría.
      </div>`;
  }

  if (resultadoHTML) {
    resultadoHTML.textContent = "¡Excelente trabajo!";
    resultadoHTML.className = "resultado";
  }

  if (numeroPregunta) {
    numeroPregunta.textContent = `Pregunta ${cantidadPreguntas} de ${cantidadPreguntas}`;
  }

  if (botonSiguiente) {
    botonSiguiente.disabled = false;
    botonSiguiente.textContent = retoFinalDesbloqueado
      ? "🏆 Ir al Reto Final"
      : "Siguiente categoría →";
  }
}


/* ------------------------------------------------------------
   9. AUDIO
------------------------------------------------------------ */

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
    : "Explora la historia y cultura de Colombia.";

  const voz = new SpeechSynthesisUtterance(texto);
  voz.lang = "es-CO";
  voz.rate = 0.95;

  voz.onstart = () => { if (estadoAudio) estadoAudio.textContent = "⏹"; };
  voz.onend = () => { if (estadoAudio) estadoAudio.textContent = "▶"; };

  window.speechSynthesis.speak(voz);
}


/* ------------------------------------------------------------
   10. RETO DE RECUPERACIÓN
------------------------------------------------------------ */

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
        <button type="button" class="boton-recuperar" onclick="cerrarModalRecuperacion()">
          Continuar
        </button>`;
    }
  } else {
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

function cerrarModalRecuperacion() {
  if (juegoBloqueadoPorVidas) return;

  const modal = obtener("modalRecuperacion");
  if (modal) modal.style.display = "none";

  document.body.style.overflow = "";

  if (temaActual) cargarPregunta();
}


/* ------------------------------------------------------------
   11. RETO FINAL
------------------------------------------------------------ */

function comenzarRetoFinal() {
  const todasCompletadas = nombresTemas.every(
    nombre => estadoPreguntas[nombre] && estadoPreguntas[nombre].completado
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
  if (resultadoCorrectas) {
    resultadoCorrectas.textContent = `${respuestasFinales} / ${preguntasFinales.length}`;
  }

  // Guardar ronda en historial
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


/* ------------------------------------------------------------
   12. REINICIO TOTAL
------------------------------------------------------------ */

function reiniciarProgreso() {
  const confirmar = confirm("¿Seguro que quieres borrar todo tu progreso en Colombia?");
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


/* ------------------------------------------------------------
   13. INICIALIZACIÓN
------------------------------------------------------------ */

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