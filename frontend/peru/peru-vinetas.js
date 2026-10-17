// Escenas ilustradas de las historietas de Perú: 4 por tema.
window.VINETAS = {

    'culturas-preincas': [
        { alt: 'La ciudad de Caral', cielo: 'dia', suelo: 'arena', items: [['huaca', 210, 224, 1.1], ['montes', 60, 195, .7, { c: '#c9a36a' }]], gente: [['poblador_caral', 90, 272, 1.05, { pose: 'señala' }], ['poblador_caral', 330, 274, 1, { flip: 1 }]] },
        { alt: 'Chavín de Huántar', cielo: 'dia', suelo: 'piedra', items: [['muro_inca', 210, 232, .9], ['montes', 200, 195, 1.1]], gente: [['sacerdote_chavin', 100, 272, 1.1, { pose: 'arriba' }]] },
        { alt: 'Las líneas de Nazca vistas desde el cielo', cielo: 'dia', suelo: 'arena', items: [['desierto_lineas', 200, 262, 1.4], ['nazca_colibri', 200, 240, .8], ['nazca_mono', 330, 250, .6]], gente: [['guia', 70, 272, 1, { pose: 'señala' }]] },
        { alt: 'El Señor de Sipán y los moche', cielo: 'dia', suelo: 'arena', items: [['huaca', 120, 230, .8], ['mascara_oro', 300, 262, 1.2]], gente: [['senor_sipan', 215, 272, 1.15]] },
    ],

    'imperio-inca': [
        { alt: 'El Sapa Inca y el Sol', cielo: 'dia', suelo: 'pasto', items: [['sol_inca', 100, 70, 1], ['montes', 200, 205, 1.1]], gente: [['inca', 220, 270, 1.2, { pose: 'arriba' }], ['inca_noble', 310, 274, 1, { flip: 1 }]] },
        { alt: 'El Qhapaq Ñan y los chasquis', cielo: 'dia', suelo: 'tierra', items: [['nevado', 200, 210, 1.1], ['puente_colgante', 200, 262, 1]], gente: [['chasqui', 110, 272, 1.1], ['chasqui', 320, 276, 1, { flip: 1 }]] },
        { alt: 'Los quipus, cuentas con nudos', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 330, 190, 1.1]], gente: [['inca_noble', 150, 264, 1.15, { pose: 'sostiene', obj: 'quipu' }], ['quechua', 260, 270, 1]] },
        { alt: 'Sacsayhuamán y los muros incas', cielo: 'dia', suelo: 'pasto', items: [['muro_inca', 210, 236, 1.2], ['llama', 340, 262, .8]], gente: [['quechua', 100, 272, 1.1, { pose: 'señala' }]] },
    ],

    'conquista-virreinato': [
        { alt: 'Pizarro captura a Atahualpa en Cajamarca', cielo: 'dia', suelo: 'pasto', items: [['montes', 200, 205, 1.1, { c: '#9aa8c4' }]], gente: [['pizarro', 280, 270, 1.15, { flip: 1, pose: 'señala' }], ['inca', 120, 270, 1.15]] },
        { alt: 'El Cuarto del Rescate lleno de oro', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 70, 190, 1.1], ['mascara_oro', 300, 262, 1.2]], gente: [['inca', 150, 262, 1.15, { pose: 'arriba' }], ['pizarro', 235, 266, 1.05, { flip: 1 }]] },
        { alt: 'Lima, la Ciudad de los Reyes', cielo: 'dia', suelo: 'piedra', items: [['catedral_lima', 215, 214, 1.1], ['balcon_limeno', 60, 250, .6]], gente: [['virrey', 100, 272, 1.05, { pose: 'señala' }], ['dama', 320, 276, 1, { flip: 1 }]] },
        { alt: 'La rebelión de Túpac Amaru II', cielo: 'atardecer', suelo: 'pasto', items: [['nevado', 200, 210, 1.1], ['bandera', 330, 238, .9]], gente: [['tupac_amaru', 190, 270, 1.2, { pose: 'arriba' }], ['quechua', 90, 274, 1.05], ['quechua_mujer', 300, 276, 1, { flip: 1 }]] },
    ],

    'independencia-republica': [
        { alt: 'San Martín proclama la independencia en Lima', cielo: 'dia', suelo: 'piedra', items: [['catedral_lima', 215, 214, 1], ['plaza_armas', 70, 266, .8]], gente: [['sanmartin', 110, 270, 1.15, { pose: 'arriba', obj: 'bandera_peru' }], ['soldado_p', 320, 274, 1, { flip: 1 }]] },
        { alt: 'La batalla de Ayacucho', cielo: 'humo', suelo: 'pasto', items: [['nevado', 200, 210, 1], ['canon_colonial', 90, 266, 1], ['bandera', 335, 238, 1]], gente: [['soldado_p', 190, 272, 1.1, { pose: 'arriba' }], ['sanmartin', 260, 272, 1.1, { flip: 1 }]] },
        { alt: 'El monitor Huáscar y el almirante Grau', cielo: 'dia', suelo: 'agua', items: [['barco_guerra', 200, 218, 1.2]], gente: [['soldado_p', 330, 262, 1, { flip: 1, pose: 'señala' }]] },
        { alt: 'Las mujeres votan por primera vez', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 70, 190, 1.1], ['bandera', 335, 250, 1]], gente: [['criolla_votante', 150, 268, 1.1, { pose: 'sostiene' }], ['quechua_mujer', 255, 270, 1.05, { flip: 1 }]], delante: [['documento', 200, 262, 1.1]] },
    ],

    diversidad: [
        { alt: 'Los pueblos quechuas de los Andes', cielo: 'dia', suelo: 'pasto', items: [['nevado', 200, 210, 1.1], ['llama', 330, 262, .8]], gente: [['quechua', 110, 272, 1.1, { pose: 'señala' }], ['quechua_mujer', 215, 274, 1.05]] },
        { alt: 'Los pueblos de la Amazonía', cielo: 'dia', suelo: 'pasto', items: [['selva_peru', 200, 205, 1.1], ['guacamayo', 330, 262, 1]], gente: [['amazonico', 110, 272, 1.1, { pose: 'señala' }], ['shipibo', 230, 274, 1.05]] },
        { alt: 'La cultura afroperuana', cielo: 'atardecer', suelo: 'arena', items: [['cajon', 90, 266, 1.2], ['palmeras', 340, 240, 1]], gente: [['afroperuano', 200, 272, 1.1, { pose: 'arriba' }], ['afroperuana', 270, 274, 1.05]] },
        { alt: 'La cocina chifa y nikkei', cielo: 'cocina', suelo: 'ninguno', items: [['lomo_saltado', 130, 252, 1.8], ['ceviche', 290, 252, 1.4]], gente: [['cevichero', 210, 274, 1.05, { pose: 'sostiene' }]] },
    ],

    regiones: [
        { alt: 'La costa del Pacífico', cielo: 'dia', suelo: 'arena', items: [['palmeras', 330, 235, 1.1], ['barco', 90, 195, .6]], gente: [['pescador', 170, 272, 1.1, { pose: 'señala' }]] },
        { alt: 'La sierra y los nevados', cielo: 'dia', suelo: 'pasto', items: [['nevado', 200, 210, 1.3], ['llama', 320, 262, .9]], gente: [['nino_andino', 110, 274, 1.1, { pose: 'arriba' }]] },
        { alt: 'El lago Titicaca y las islas de totora', cielo: 'atardecer', suelo: 'agua', items: [['balsa_totora', 140, 250, 1], ['nevado', 300, 205, .8]], gente: [['quechua', 150, 244, .8, { pose: 'sostiene' }]] },
        { alt: 'La selva amazónica', cielo: 'dia', suelo: 'agua', items: [['selva_peru', 200, 205, 1.2], ['guacamayo', 80, 250, 1]], gente: [['amazonico', 320, 266, 1.05, { flip: 1, pose: 'señala' }]] },
    ],

    'ceviche-lomo': [
        { alt: 'El ceviche, plato bandera', cielo: 'cocina', suelo: 'ninguno', items: [['ceviche', 200, 252, 2]], gente: [['cevichero', 80, 272, 1.1, { pose: 'señala' }], ['nino', 330, 276, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'Pescadores en el mar peruano', cielo: 'dia', suelo: 'agua', items: [['barco', 170, 218, 1.1], ['palmeras', 350, 225, .7]], gente: [['pescador', 320, 262, 1.05, { flip: 1, pose: 'arriba' }]] },
        { alt: 'Lomo saltado: sabor de fusión', cielo: 'cocina', suelo: 'ninguno', items: [['lomo_saltado', 200, 252, 2], ['fuego', 340, 260, .8]], gente: [['cocinera_p', 85, 272, 1.05, { pose: 'sostiene' }]] },
        { alt: 'El mercado y los ajíes', cielo: 'dia', suelo: 'calle', items: [['mostrador', 150, 256, 1.3], ['frutas', 120, 238, 1], ['chiles', 190, 238, 1]], gente: [['cocinera_p', 300, 274, 1.05, { flip: 1 }]] },
    ],

    'papa-quinua-pisco': [
        { alt: 'Las papas nativas de los Andes', cielo: 'dia', suelo: 'pasto', items: [['andenes', 200, 250, 1.1], ['papas', 90, 268, 1.8]], gente: [['quechua', 320, 274, 1.05, { flip: 1, pose: 'señala' }]] },
        { alt: 'La quinua, el grano madre', cielo: 'dia', suelo: 'tierra', items: [['quinua', 200, 262, 2], ['nevado', 200, 190, .8]], gente: [['quechua_mujer', 90, 274, 1.1, { pose: 'sostiene' }]] },
        { alt: 'El chuño y el cuy', cielo: 'dia', suelo: 'tierra', items: [['cuy', 130, 262, 1.8], ['papas', 280, 266, 1.5]], gente: [['nino_andino', 335, 276, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'El pisco sour', cielo: 'cocina', suelo: 'ninguno', items: [['pisco_sour', 200, 258, 2.2], ['frutas', 90, 258, 1]], gente: [['cevichero', 320, 274, 1.05, { flip: 1, pose: 'señala' }]] },
    ],

    'musica-andina': [
        { alt: 'La quena y la zampoña', cielo: 'dia', suelo: 'pasto', items: [['nevado', 200, 210, 1.1], ['zampona', 320, 262, 1.4]], gente: [['musico_andino', 150, 272, 1.15]] },
        { alt: 'El charango', cielo: 'atardecer', suelo: 'pasto', items: [['llama', 320, 262, .8]], gente: [['musico_andino', 160, 272, 1.15, { obj: 'charango' }], ['quechua_mujer', 250, 274, 1.05]] },
        { alt: 'Un huayno en la fiesta', cielo: 'dia', suelo: 'pasto', items: [['papel_picado', 200, 90, 1.2]], gente: [['quechua', 130, 272, 1.1, { pose: 'arriba' }], ['quechua_mujer', 240, 274, 1.1, { flip: 1, pose: 'abre' }]] },
        { alt: 'El cóndor pasa', cielo: 'dia', suelo: 'pasto', items: [['nevado', 200, 215, 1.2], ['condor', 190, 100, 1.3]], gente: [['musico_andino', 100, 276, 1.05, { pose: 'arriba' }]] },
    ],

    'vals-afroperuano': [
        { alt: 'El cajón peruano', cielo: 'noche', suelo: 'piso', items: [['cajon', 130, 264, 1.5], ['luna', 330, 60, .7]], gente: [['afroperuano', 240, 272, 1.15, { pose: 'sostiene' }]] },
        { alt: 'Un vals criollo en Barrios Altos', cielo: 'atardecer', suelo: 'calle', items: [['balcon_limeno', 130, 214, 1], ['balcon_limeno', 300, 214, .9]], gente: [['criollo', 215, 272, 1.15]] },
        { alt: 'Chabuca Granda y la flor de la canela', cielo: 'noche', suelo: 'piso', items: [['escenario', 200, 240, 1.2], ['reflector', 70, 140, 1]], gente: [['afroperuana', 200, 262, 1.15, { pose: 'sostiene' }]] },
        { alt: 'Festejo y quijada de burro', cielo: 'atardecer', suelo: 'arena', items: [['cajon', 90, 266, 1.3], ['musica', 310, 130, 1.4]], gente: [['afroperuano', 190, 272, 1.1, { pose: 'arriba' }], ['afroperuana', 260, 274, 1.1, { flip: 1, pose: 'abre' }]] },
    ],

    marinera: [
        { alt: 'La marinera con pañuelos', cielo: 'dia', suelo: 'arena', items: [['palmeras', 340, 235, 1]], gente: [['marinera_h', 140, 270, 1.2], ['marinera_m', 265, 270, 1.2, { flip: 1 }]] },
        { alt: 'La marinera norteña en Trujillo', cielo: 'dia', suelo: 'calle', items: [['iglesia', 305, 214, .8], ['caballo', 80, 262, 1]], gente: [['marinera_h', 180, 272, 1.15], ['marinera_m', 250, 272, 1.15, { flip: 1 }]] },
        { alt: 'El Concurso Nacional de Marinera', cielo: 'noche', suelo: 'piso', items: [['escenario', 200, 240, 1.3], ['trofeo', 330, 262, 1.1]], gente: [['marinera_h', 160, 264, 1.1], ['marinera_m', 245, 264, 1.1, { flip: 1 }]] },
        { alt: 'Niños aprenden a bailar', cielo: 'interior', suelo: 'piso', items: [['ventana', 330, 190, 1.1]], gente: [['nina', 150, 274, 1.1, { pose: 'abre', obj: 'panuelo' }], ['nino', 255, 274, 1.1, { flip: 1, pose: 'arriba' }]] },
    ],

    'danza-tijeras': [
        { alt: 'El danzante de tijeras', cielo: 'dia', suelo: 'tierra', items: [['nevado', 200, 210, 1]], gente: [['danzante_tijeras', 200, 272, 1.25, { pose: 'dos', obj: 'tijeras' }]] },
        { alt: 'Arpa y violín', cielo: 'dia', suelo: 'tierra', items: [['arpa', 100, 266, 1.2]], gente: [['musico_andino', 220, 272, 1.1, { pose: 'sostiene', obj: 'guitarra' }], ['danzante_tijeras', 320, 274, 1, { flip: 1 }]] },
        { alt: 'El duelo atipanakuy', cielo: 'atardecer', suelo: 'tierra', items: [['montes', 200, 205, 1]], gente: [['danzante_tijeras', 140, 272, 1.2, { pose: 'arriba' }], ['danzante_tijeras', 270, 272, 1.2, { flip: 1, pose: 'arriba' }]] },
        { alt: 'Los apus, montañas sagradas', cielo: 'noche', suelo: 'tierra', items: [['nevado', 200, 215, 1.2], ['luna', 330, 60, .7]], gente: [['danzante_tijeras', 100, 276, 1.1, { pose: 'dos' }]] },
    ],

    'escuela-cusquena': [
        { alt: 'Un pintor cusqueño', cielo: 'interior', suelo: 'ninguno', items: [['caballete', 120, 262, 1.2], ['ventana', 330, 190, 1.1]], gente: [['pintor_cusco', 215, 264, 1.15]] },
        { alt: 'La Última Cena con cuy', cielo: 'interior', suelo: 'ninguno', items: [['cuadro', 200, 210, 1.7], ['cuy', 200, 270, 1.4]], gente: [['nina', 80, 274, 1, { pose: 'señala' }]] },
        { alt: 'Mantos bordados de Paracas', cielo: 'interior', suelo: 'ninguno', items: [['telar', 150, 262, 1.4]], gente: [['tejedora_p', 270, 272, 1.15]] },
        { alt: 'Huacos y cerámica antigua', cielo: 'interior', suelo: 'ninguno', items: [['huaco', 120, 262, 1.5], ['huaco', 280, 262, 1.3]], gente: [['nina', 200, 274, 1.05, { pose: 'arriba' }]] },
    ],

    'nazca-sipan': [
        { alt: 'El colibrí de Nazca', cielo: 'dia', suelo: 'arena', items: [['desierto_lineas', 200, 262, 1.5], ['nazca_colibri', 200, 240, 1]], gente: [['guia', 330, 274, 1, { flip: 1, pose: 'señala' }]] },
        { alt: 'María Reiche y las líneas', cielo: 'dia', suelo: 'arena', items: [['desierto_lineas', 200, 262, 1.5], ['nazca_mono', 250, 245, .7]], gente: [['escritora', 120, 272, 1.1, { pose: 'sostiene' }]] },
        { alt: 'La tumba del Señor de Sipán', cielo: 'interior', suelo: 'ninguno', items: [['mascara_oro', 120, 262, 1.4], ['huaco', 290, 262, 1.2]], gente: [['senor_sipan', 205, 266, 1.15]] },
        { alt: 'El descubrimiento de Walter Alva', cielo: 'dia', suelo: 'arena', items: [['huaca', 210, 224, 1.1]], gente: [['guia', 110, 272, 1.1, { pose: 'arriba' }], ['escritor_p', 310, 274, 1, { flip: 1, pose: 'señala' }]] },
    ],

    'vargas-llosa': [
        { alt: 'Arequipa, la ciudad blanca', cielo: 'dia', suelo: 'piedra', items: [['volcan', 120, 208, .8], ['iglesia', 290, 214, .9]], gente: [['nino', 190, 276, 1.05, { pose: 'sostiene' }]] },
        { alt: 'El colegio militar y La ciudad y los perros', cielo: 'dia', suelo: 'tierra', items: [['edificio', 215, 214, 1.1]], gente: [['soldado_p', 90, 272, 1, { pose: 'baja' }], ['escritor_p', 320, 274, 1.05, { flip: 1, pose: 'sostiene', obj: 'libro_p' }]] },
        { alt: 'Vargas Llosa escribe', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 70, 190, 1.1], ['pila_libros', 330, 266, 1]], gente: [['escritor_p', 200, 262, 1.15, { pose: 'señala' }]], delante: [['escritorio', 200, 290, 1.1]] },
        { alt: 'El Premio Nobel de Literatura', cielo: 'interior', suelo: 'ninguno', items: [['nobel_podio', 200, 262, 1.1]], gente: [['escritor_p', 110, 262, 1.1, { pose: 'arriba' }], ['dama', 310, 268, 1, { flip: 1 }]] },
    ],

    'garcilaso-vallejo': [
        { alt: 'El Inca Garcilaso escribe los Comentarios reales', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 70, 190, 1.1]], gente: [['garcilaso', 200, 262, 1.15, { pose: 'sostiene' }]], delante: [['escritorio', 200, 290, 1.1], ['libro_abierto', 200, 255, 1]] },
        { alt: 'Ricardo Palma y las tradiciones', cielo: 'dia', suelo: 'piedra', items: [['balcon_limeno', 130, 214, 1], ['iglesia', 300, 214, .8]], gente: [['escritor_p', 215, 272, 1.1, { pose: 'señala' }]] },
        { alt: 'César Vallejo, poeta universal', cielo: 'noche', suelo: 'calle', items: [['luna', 330, 60, .8], ['edificio', 80, 210, .8]], gente: [['vallejo', 200, 272, 1.15, { pose: 'sostiene', obj: 'libro_p' }]] },
        { alt: 'Arguedas y los ríos profundos', cielo: 'dia', suelo: 'pasto', items: [['nevado', 200, 210, 1.1], ['rio_amazonas', 200, 250, 1]], gente: [['escritor_p', 100, 274, 1.1, { pose: 'sostiene', obj: 'libro_p' }], ['quechua', 320, 276, 1, { flip: 1 }]] },
    ],

    'ayni-pachamama': [
        { alt: 'La minka y el trabajo comunitario', cielo: 'dia', suelo: 'pasto', items: [['andenes', 200, 250, 1.1]], gente: [['quechua', 100, 272, 1.1, { pose: 'arriba' }], ['quechua_mujer', 200, 274, 1.05], ['quechua', 300, 274, 1, { flip: 1 }]] },
        { alt: 'El ayni: hoy por ti, mañana por mí', cielo: 'dia', suelo: 'tierra', items: [['milpa', 205, 232, .8]], gente: [['quechua', 150, 272, 1.15, { pose: 'sostiene' }], ['quechua', 260, 272, 1.15, { flip: 1, pose: 'sostiene' }]] },
        { alt: 'El pago a la Pachamama', cielo: 'atardecer', suelo: 'tierra', items: [['nevado', 200, 210, 1.1], ['cazuela', 200, 266, 1]], gente: [['quechua_mujer', 110, 274, 1.1, { pose: 'baja' }], ['quechua', 300, 274, 1.05, { flip: 1 }]] },
        { alt: 'La hoja de coca sagrada', cielo: 'dia', suelo: 'pasto', items: [['selva_peru', 200, 205, 1], ['bulto', 330, 270, 1]], gente: [['quechua', 150, 272, 1.1, { pose: 'señala' }]] },
    ],

    artesania: [
        { alt: 'Tejedores de la isla Taquile', cielo: 'dia', suelo: 'pasto', items: [['titicaca', 200, 225, 1], ['telar', 300, 262, 1]], gente: [['quechua', 130, 272, 1.1, { pose: 'sostiene' }]] },
        { alt: 'Retablo ayacuchano', cielo: 'interior', suelo: 'ninguno', items: [['cuadro', 200, 215, 1.5]], gente: [['pintor_cusco', 90, 270, 1.1, { pose: 'señala' }], ['nina', 320, 276, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'Cerámica de Chulucanas', cielo: 'dia', suelo: 'tierra', items: [['huaco', 130, 262, 1.5], ['cazuela', 280, 266, 1.2]], gente: [['tejedora_p', 210, 274, 1.05]] },
        { alt: 'Colores naturales para teñir lana', cielo: 'dia', suelo: 'tierra', items: [['tinte', 120, 264, 1.4], ['alpaca', 290, 264, 1]], gente: [['quechua_mujer', 205, 274, 1.1, { pose: 'sostiene' }]] },
    ],

    'inti-raymi': [
        { alt: 'La fiesta del Sol en el Cusco', cielo: 'dia', suelo: 'piedra', items: [['sol_inca', 330, 70, 1], ['templo_sol', 160, 214, .9]], gente: [['quechua_mujer', 90, 276, 1], ['quechua', 250, 274, 1.05]] },
        { alt: 'El Inca en Sacsayhuamán', cielo: 'dia', suelo: 'pasto', items: [['muro_inca', 210, 232, 1.2]], gente: [['inca', 200, 270, 1.25, { pose: 'arriba' }]] },
        { alt: 'Danza y ofrendas', cielo: 'dia', suelo: 'pasto', items: [['nevado', 200, 210, 1]], gente: [['quechua_mujer', 110, 274, 1.1, { pose: 'abre' }], ['inca_noble', 210, 272, 1.1], ['quechua', 305, 274, 1.05, { flip: 1, pose: 'arriba' }]] },
        { alt: 'Miles de personas en la explanada', cielo: 'dia', suelo: 'pasto', items: [['muro_inca', 210, 232, 1.2], ['llama', 330, 262, .7]], gente: [['quechua', 60, 276, .95], ['quechua_mujer', 130, 278, .95], ['quechua', 280, 276, .95, { flip: 1 }]] },
    ],

    'senor-milagros': [
        { alt: 'El muro que resistió el terremoto', cielo: 'humo', suelo: 'piedra', items: [['iglesia', 215, 214, 1.1]], gente: [['afroperuano', 90, 272, 1.05, { pose: 'sostiene' }], ['cura', 320, 274, 1, { flip: 1 }]] },
        { alt: 'La procesión de octubre', cielo: 'atardecer', suelo: 'calle', items: [['anda_morada', 200, 262, 1.3], ['catedral_lima', 330, 214, .6]], gente: [['cargador', 110, 274, 1.05], ['devota', 300, 276, 1, { flip: 1 }]] },
        { alt: 'Las sahumadoras y el incienso', cielo: 'dia', suelo: 'calle', items: [['humo', 220, 150, 1, { c: '#b8a8d8' }], ['balcon_limeno', 330, 214, .8]], gente: [['devota', 140, 274, 1.1, { pose: 'sostiene' }], ['devota', 220, 276, 1.05]] },
        { alt: 'Turrón de Doña Pepa', cielo: 'cocina', suelo: 'ninguno', items: [['turron', 200, 252, 2.4], ['flores_moradas', 330, 256, 1]], gente: [['afroperuana', 85, 272, 1.1, { pose: 'sostiene' }]] },
    ],

    'chullo-poncho': [
        { alt: 'El chullo de colores', cielo: 'dia', suelo: 'pasto', items: [['nevado', 200, 210, 1]], gente: [['nino_andino', 130, 274, 1.2, { pose: 'arriba' }], ['quechua', 260, 272, 1.15, { flip: 1 }]] },
        { alt: 'El poncho y la lliclla', cielo: 'dia', suelo: 'tierra', items: [['llama', 320, 262, .9]], gente: [['quechua', 110, 272, 1.15, { pose: 'baja' }], ['quechua_mujer', 215, 274, 1.1]] },
        { alt: 'Tejiendo con lana de alpaca', cielo: 'dia', suelo: 'pasto', items: [['alpaca', 90, 264, 1.1], ['telar', 290, 264, 1.2]], gente: [['tejedora_p', 190, 274, 1.1]] },
        { alt: 'Tintes naturales: la cochinilla', cielo: 'dia', suelo: 'tierra', items: [['tinte', 150, 264, 1.5], ['nopal', 300, 262, 1]], gente: [['quechua_mujer', 230, 274, 1.1, { pose: 'sostiene' }]] },
    ],

    'pollera-shipibo': [
        { alt: 'La pollera de colores', cielo: 'dia', suelo: 'pasto', items: [['nevado', 200, 210, 1]], gente: [['quechua_mujer', 130, 272, 1.2, { pose: 'abre' }], ['quechua_mujer', 260, 274, 1.1, { flip: 1 }]] },
        { alt: 'Los diseños kené de los shipibo', cielo: 'dia', suelo: 'pasto', items: [['selva_peru', 200, 205, 1.1], ['rio_amazonas', 200, 250, 1]], gente: [['shipibo', 150, 272, 1.2, { pose: 'sostiene' }], ['amazonico', 260, 274, 1.1]] },
        { alt: 'Sombreros de cada región', cielo: 'dia', suelo: 'calle', items: [['mostrador', 200, 258, 1.4]], gente: [['quechua_mujer', 90, 274, 1.05], ['guia', 320, 276, 1, { flip: 1 }]] },
        { alt: 'Moda con alpaca y algodón pima', cielo: 'interior', suelo: 'ninguno', items: [['alpaca', 330, 266, 1]], gente: [['dama', 120, 268, 1.1, { pose: 'abre' }], ['tejedora_p', 230, 270, 1.05]] },
    ],

    'machu-picchu': [
        { alt: 'La ciudadela entre las nubes', cielo: 'dia', suelo: 'pasto', items: [['nubes', 100, 70, 1], ['machu_picchu', 200, 250, 1.25]], gente: [['nina', 90, 278, 1, { pose: 'señala' }]] },
        { alt: 'Las terrazas de cultivo', cielo: 'dia', suelo: 'pasto', items: [['andenes', 200, 250, 1.2], ['llama', 330, 262, .8]], gente: [['quechua', 100, 276, 1.05, { pose: 'señala' }]] },
        { alt: 'Hiram Bingham y el niño guía', cielo: 'dia', suelo: 'pasto', items: [['selva_peru', 200, 205, 1.1]], gente: [['guia', 150, 270, 1.15, { pose: 'señala' }], ['nino_andino', 260, 276, 1.05, { flip: 1, pose: 'arriba' }]] },
        { alt: 'El Camino Inca', cielo: 'atardecer', suelo: 'tierra', items: [['nevado', 200, 210, 1.1], ['puerta_inca', 330, 250, .9]], gente: [['nino', 100, 274, 1.1, { pose: 'arriba' }], ['nina', 180, 276, 1.05]] },
    ],

    'cusco-lima-chan-chan': [
        { alt: 'La piedra de los doce ángulos', cielo: 'dia', suelo: 'piedra', items: [['muro_inca', 210, 236, 1.3]], gente: [['guia', 100, 272, 1.1, { pose: 'señala' }], ['nina', 320, 276, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'Lima colonial', cielo: 'dia', suelo: 'piedra', items: [['catedral_lima', 215, 214, 1.1], ['balcon_limeno', 60, 250, .6]], gente: [['dama', 100, 276, 1], ['nino', 330, 278, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'Chan Chan, ciudad de adobe', cielo: 'dia', suelo: 'arena', items: [['chan_chan', 210, 232, 1.2]], gente: [['moche', 90, 272, 1.05, { pose: 'señala' }]] },
        { alt: 'La fortaleza de Kuélap', cielo: 'dia', suelo: 'pasto', items: [['kuelap', 200, 238, 1.2], ['nubes', 80, 60, .9]], gente: [['guia', 110, 274, 1.05, { pose: 'arriba' }]] },
    ],
};
