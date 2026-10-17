// Escenas ilustradas de las historietas de Guyana: 4 por tema.
window.VINETAS = {

    amerindios: [
        { alt: 'Los pueblos indígenas de Guyana', cielo: 'dia', suelo: 'pasto', items: [['selva', 200, 205, 1.1], ['benab', 320, 240, .9]], gente: [['amerindio', 110, 272, 1.15, { pose: 'señala' }], ['amerindia', 215, 274, 1.05]] },
        { alt: 'Las lenguas indígenas siguen vivas', cielo: 'dia', suelo: 'pasto', items: [['montes', 200, 205, 1, { c: '#6f9f7a' }], ['burbuja', 130, 130, 1.1, { t: '🌿' }], ['burbuja', 285, 124, 1.1, { t: '♪' }]], gente: [['amerindio', 130, 272, 1.1, { pose: 'arriba' }], ['amerindia', 275, 274, 1.05, { flip: 1 }]] },
        { alt: 'Los ríos y bosques de Guyana', cielo: 'dia', suelo: 'agua', items: [['selva', 200, 196, 1.2], ['canoa', 160, 250, 1.1], ['guacamayo', 335, 232, 1]], gente: [['amerindio', 160, 246, .8, { pose: 'sostiene', obj: 'remo' }]] },
        { alt: 'Conocimientos que pasan de generación en generación', cielo: 'dia', suelo: 'pasto', items: [['benab', 115, 238, 1], ['yuca', 300, 262, 1.3], ['canasto', 250, 268, 1]], gente: [['amerindia', 195, 274, 1.1, { pose: 'sostiene', obj: 'cesta' }]] },
    ],

    'colonia-esclavitud': [
        { alt: 'Colonias neerlandesas en Essequibo, Berbice y Demerara', cielo: 'dia', suelo: 'arena', items: [['fuerte_holandes', 310, 214, .95], ['rio', 200, 214, 1.1], ['barco', 120, 226, .95]], gente: [['holandes', 160, 274, 1.1, { pose: 'señala' }], ['amerindio', 285, 276, 1, { flip: 1 }]] },
        { alt: 'Plantaciones de caña de azúcar', cielo: 'dia', suelo: 'tierra', items: [['casa_plantacion', 100, 214, 1], ['canaveral', 305, 214, 1.1]], gente: [['trabajador', 210, 272, 1.1], ['afroguyanesa', 260, 276, 1, { flip: 1, pose: 'sostiene' }]] },
        { alt: 'Cuffy lidera la rebelión de Berbice en 1763', cielo: 'atardecer', suelo: 'pasto', items: [['selva', 200, 205, 1.1], ['cadenas_rotas', 335, 264, .9]], gente: [['cuffy', 200, 270, 1.2], ['afroguyanes', 110, 274, 1.05, { pose: 'dos' }], ['afroguyanesa', 295, 276, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'El 23 de febrero se recuerda la rebelión de 1763', cielo: 'dia', suelo: 'piedra', items: [['monumento_1763', 215, 238, 1.1]], gente: [['afroguyanes', 115, 272, 1.05, { pose: 'arriba' }], ['afroguyanesa', 310, 276, 1, { flip: 1, pose: 'arriba' }]], delante: [['calendario', 75, 140, 1.1]] },
    ],

    'servidumbre-abolicion': [
        { alt: 'La abolición de la esclavitud', cielo: 'dia', suelo: 'pasto', items: [['casa_plantacion', 340, 214, .75], ['cadenas_rotas', 95, 264, 1.1]], gente: [['afroguyanes', 190, 272, 1.15, { pose: 'arriba' }], ['afroguyanesa', 265, 276, 1.05, { pose: 'dos' }]] },
        { alt: 'El año 1838, fin del aprendizaje', cielo: 'dia', suelo: 'piedra', items: [['cartel', 205, 240, 1.3, { t: '1838' }]], gente: [['afroguyanes', 90, 272, 1.1, { pose: 'señala' }], ['afroguyanesa', 330, 276, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'Trabajadores de la India llegan en barco', cielo: 'dia', suelo: 'piedra', items: [['rio', 200, 212, 1.1], ['barco', 140, 226, 1]], gente: [['indoguyana', 255, 274, 1.1], ['indoguyanes', 320, 276, 1.05, { flip: 1, obj: 'maleta' }]] },
        { alt: 'Una nueva sociedad con varios pueblos', cielo: 'atardecer', suelo: 'pasto', items: [['casa_madera', 335, 214, .8], ['palmeras', 60, 232, .75]], gente: [['afroguyanes', 150, 272, 1.1, { pose: 'señala' }], ['indoguyana', 225, 275, 1.1], ['amerindio', 285, 276, 1, { flip: 1 }]] },
    ],

    independencia: [
        { alt: 'Guyana avanza hacia el autogobierno', cielo: 'dia', suelo: 'piedra', items: [['parlamento', 215, 232, 1.15]], gente: [['ministro', 100, 272, 1.1, { pose: 'señala' }], ['ministra', 335, 276, 1, { flip: 1 }]] },
        { alt: 'La bandera de Guyana se iza en 1966', cielo: 'dia', suelo: 'pasto', items: [['fuegos', 110, 110, .8], ['bandera_guyana', 235, 262, 1.15], ['cartel', 75, 246, .7, { t: '1966' }]], gente: [['ministro', 160, 274, 1.1, { pose: 'arriba' }], ['ministra', 335, 276, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'La República Cooperativa de Guyana', cielo: 'dia', suelo: 'piedra', items: [['cartel', 205, 240, 1.3, { t: '1970' }], ['bandera_guyana', 80, 252, .95]], gente: [['ministro', 310, 272, 1.1, { flip: 1, pose: 'sostiene', obj: 'libro' }]] },
        { alt: 'Un pueblo, una nación, un destino', cielo: 'dia', suelo: 'pasto', items: [['lema', 200, 224, 1.05]], gente: [['amerindio', 95, 274, .95], ['afroguyanes', 160, 274, .95], ['indoguyana', 225, 275, .95], ['chino_guy', 290, 274, .95]] },
    ],

    'seis-pueblos': [
        { alt: 'Los pueblos indígenas, primeros habitantes', cielo: 'dia', suelo: 'pasto', items: [['selva', 200, 205, 1.1], ['benab', 335, 240, .8]], gente: [['amerindio', 120, 272, 1.15, { pose: 'señala' }], ['amerindia', 225, 274, 1.05]] },
        { alt: 'Llegan gentes de África, India, China y Portugal', cielo: 'dia', suelo: 'piedra', items: [['rio', 200, 212, 1.1], ['barco', 110, 226, .9]], gente: [['portugues', 190, 274, 1.05, { obj: 'maleta' }], ['chino_guy', 255, 276, 1.05], ['indoguyanes', 320, 276, 1, { flip: 1 }]] },
        { alt: 'Fiestas de todos los pueblos', cielo: 'atardecer', suelo: 'pasto', items: [['banderines', 200, 120, 1.1], ['fuegos', 90, 100, .6]], gente: [['indoguyana', 130, 274, 1.1, { pose: 'arriba' }], ['afroguyanesa', 210, 276, 1.05, { pose: 'arriba' }], ['amerindia', 285, 276, 1.05, { flip: 1, pose: 'arriba' }]] },
        { alt: 'Mezclas culturales en la mesa', cielo: 'cocina', suelo: 'ninguno', items: [['mesa', 200, 258, .95], ['pepperpot', 140, 214, .55], ['plato_roti', 215, 214, .6], ['cook_up', 285, 214, .55]], gente: [['afroguyanesa', 80, 274, 1.05, { pose: 'señala' }], ['cocinera_india', 335, 276, 1, { flip: 1, pose: 'sostiene' }]] },
    ],

    'criollo-lenguas': [
        { alt: 'El inglés, lengua oficial', cielo: 'interior', suelo: 'ninguno', items: [['pizarra', 205, 190, 1.2, { t: 'Hello' }]], gente: [['maestra', 105, 266, 1.1, { pose: 'señala' }], ['nino', 320, 272, 1, { flip: 1 }]] },
        { alt: 'El criollo guyanés se habla en la calle', cielo: 'atardecer', suelo: 'calle', items: [['casa_madera', 335, 212, .8], ['burbuja', 140, 128, 1, { t: 'How yuh do?' }], ['burbuja', 260, 122, 1, { t: 'Fine, fine!' }]], gente: [['afroguyanes', 135, 272, 1.1], ['indoguyana', 250, 276, 1.05, { flip: 1 }]] },
        { alt: 'Las lenguas indígenas', cielo: 'dia', suelo: 'pasto', items: [['selva', 200, 205, 1.1], ['burbuja', 150, 128, 1.05, { t: '🌿' }], ['burbuja', 275, 124, 1.05, { t: '🐆' }]], gente: [['amerindio', 150, 272, 1.1, { pose: 'arriba' }], ['amerindia', 270, 274, 1.05, { flip: 1 }]] },
        { alt: 'Cada región tiene su propia manera de hablar', cielo: 'dia', suelo: 'pasto', items: [['mapa_guyana', 115, 262, 1.2]], gente: [['amerindia', 235, 274, 1.1, { pose: 'señala' }], ['afroguyanes', 315, 276, 1.05, { flip: 1 }]] },
    ],

    'pepperpot-cookup': [
        { alt: 'El cassareep, base del pepperpot', cielo: 'cocina', suelo: 'ninguno', items: [['cassareep', 135, 254, 1.9], ['yuca', 285, 262, 1.4]], gente: [['amerindia', 215, 274, 1.05, { pose: 'sostiene' }]] },
        { alt: 'El pepperpot, plato de Navidad', cielo: 'cocina', suelo: 'ninguno', items: [['pepperpot', 205, 254, 2.1]], gente: [['afroguyanesa', 85, 274, 1.05, { pose: 'señala' }], ['nino', 335, 276, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'Cook-up rice con coco y carne', cielo: 'cocina', suelo: 'ninguno', items: [['cook_up', 205, 254, 2.2]], gente: [['cocinero_g', 85, 274, 1.05, { pose: 'sostiene' }], ['nino', 335, 276, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'El casabe, pan de yuca', cielo: 'dia', suelo: 'pasto', items: [['benab', 330, 238, .85], ['casabe', 135, 262, 2.1], ['yuca', 250, 266, 1.2]], gente: [['amerindia', 195, 274, 1.05, { pose: 'sostiene', obj: 'cesta' }]] },
    ],

    'curry-roti': [
        { alt: 'Las especias de la cocina indoguyanesa', cielo: 'cocina', suelo: 'ninguno', items: [['especias', 215, 254, 1.65]], gente: [['cocinera_india', 80, 274, 1.05, { pose: 'señala' }]] },
        { alt: 'Roti con curry', cielo: 'cocina', suelo: 'ninguno', items: [['plato_roti', 200, 254, 2.2]], gente: [['cocinera_india', 80, 274, 1.05, { pose: 'sostiene' }], ['nino', 335, 276, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'Dhal puri, un roti relleno', cielo: 'cocina', suelo: 'ninguno', items: [['dhal_puri', 205, 254, 2.2], ['fuego', 340, 262, .75]], gente: [['indoguyanes', 85, 274, 1.05, { pose: 'sostiene' }]] },
        { alt: 'Una herencia que viajó desde la India', cielo: 'dia', suelo: 'calle', items: [['puesto', 215, 238, 1.2], ['rio', 70, 214, .5]], gente: [['cocinera_india', 120, 274, 1.1, { pose: 'señala' }], ['indoguyanes', 330, 276, 1, { flip: 1 }]] },
    ],

    chutney: [
        { alt: 'La música chutney', cielo: 'noche', suelo: 'piso', items: [['escenario', 205, 232, 1.1], ['reflector', 95, 190, .9]], gente: [['cantante_india', 205, 262, 1.15]] },
        { alt: 'La tassa suena con fuerza', cielo: 'atardecer', suelo: 'tierra', items: [['banderines', 200, 118, 1.15]], gente: [['tassero', 135, 272, 1.15], ['tassero', 280, 274, 1.1, { flip: 1 }]] },
        { alt: 'El armonio acompaña los cantos', cielo: 'interior', suelo: 'ninguno', items: [['armonio', 210, 262, 1.7], ['ventana', 345, 190, 1]], gente: [['musico_indio', 100, 266, 1.1], ['indoguyana', 320, 270, 1, { flip: 1 }]] },
        { alt: 'Fusión de ritmos en la fiesta', cielo: 'noche', suelo: 'piso', items: [['steelpan', 90, 262, 1.2], ['altavoz', 340, 256, 1], ['musica', 205, 110, 1]], gente: [['tassero', 205, 270, 1.1], ['afroguyanes', 280, 274, 1.05, { flip: 1, pose: 'arriba' }]] },
    ],

    'calipso-soca': [
        { alt: 'El calipso cuenta historias cantadas', cielo: 'atardecer', suelo: 'arena', items: [['palmeras', 335, 235, 1.1], ['musica', 90, 110, .9]], gente: [['cantante_calipso', 200, 272, 1.15]] },
        { alt: 'La soca pone a bailar a todos', cielo: 'noche', suelo: 'piso', items: [['escenario', 205, 232, 1.1], ['altavoz', 345, 256, 1], ['fuegos', 80, 100, .6]], gente: [['afroguyanesa', 160, 262, 1.1, { pose: 'arriba' }], ['afroguyanes', 255, 264, 1.1, { pose: 'dos' }]] },
        { alt: 'El steelpan, tambor de acero', cielo: 'atardecer', suelo: 'arena', items: [['steelpan', 215, 260, 1.8], ['palmeras', 340, 235, .9]], gente: [['steelpanista', 120, 272, 1.15]] },
        { alt: 'Una música del Caribe', cielo: 'dia', suelo: 'arena', items: [['palmeras', 335, 236, 1.1], ['barco', 95, 198, .55], ['musica', 200, 100, 1]], gente: [['cantante_calipso', 150, 272, 1.1], ['steelpanista', 235, 274, 1.05, { flip: 1 }]] },
    ],

    'danza-india': [
        { alt: 'El kathak, danza clásica de la India', cielo: 'noche', suelo: 'piso', items: [['escenario', 205, 232, 1.1], ['reflector', 330, 190, .9]], gente: [['bailarina_kathak', 205, 262, 1.2]] },
        { alt: 'El ritmo de la tassa', cielo: 'atardecer', suelo: 'tierra', items: [['banderines', 200, 118, 1.1]], gente: [['tassero', 125, 272, 1.15], ['bailarina_kathak', 275, 274, 1.1, { flip: 1 }]] },
        { alt: 'Danzas en las bodas', cielo: 'dia', suelo: 'pasto', items: [['rangoli', 205, 258, 1.2], ['diyas', 335, 262, .8]], gente: [['novia_india', 160, 272, 1.1, { pose: 'abre' }], ['novio_indio', 250, 274, 1.1, { flip: 1 }]] },
        { alt: 'Una diversidad de movimientos', cielo: 'atardecer', suelo: 'pasto', items: [['banderines', 200, 122, 1.1]], gente: [['bailarina_kathak', 110, 274, 1.05], ['afroguyanesa', 200, 276, 1.05, { pose: 'arriba' }], ['amerindia', 290, 276, 1.05, { flip: 1, pose: 'abre' }]] },
    ],

    'masquerade-kwekwe': [
        { alt: 'Máscaras y trajes de masquerade', cielo: 'dia', suelo: 'calle', items: [['mascara_fest', 70, 150, 1.1], ['banderines', 270, 112, .9]], gente: [['masquerade', 165, 274, 1.15], ['masquerade', 275, 276, 1.05, { flip: 1 }]] },
        { alt: 'La percusión marca el paso', cielo: 'dia', suelo: 'calle', items: [['tambor', 330, 262, 1.3], ['musica', 90, 110, .9]], gente: [['masquerade', 160, 274, 1.2, { pose: 'arriba' }], ['afroguyanes', 255, 276, 1.05, { flip: 1, pose: 'sostiene' }]] },
        { alt: 'El Kwe-Kwe, fiesta previa a la boda', cielo: 'noche', suelo: 'tierra', items: [['fuego', 205, 246, 1.1], ['luna', 330, 60, 1]], gente: [['afroguyanesa', 120, 270, 1.05, { pose: 'arriba' }], ['afroguyanes', 290, 270, 1.05, { flip: 1, pose: 'arriba' }], ['afroguyanesa', 205, 280, 1.1, { pose: 'dos' }]] },
        { alt: 'Los cantos tradicionales', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 70, 190, 1.1], ['musica', 300, 120, 1]], gente: [['afroguyanesa', 175, 266, 1.15, { pose: 'abre' }], ['afroguyanes', 265, 270, 1.05, { flip: 1 }]] },
    ],

    'arte-amerindio': [
        { alt: 'Cestería amerindia', cielo: 'dia', suelo: 'pasto', items: [['benab', 115, 238, .95], ['canasto', 270, 266, 1.9]], gente: [['amerindia', 195, 274, 1.1, { pose: 'sostiene', obj: 'cesta' }]] },
        { alt: 'Fibras y plantas del bosque', cielo: 'dia', suelo: 'pasto', items: [['selva', 200, 205, 1.1], ['canasto', 320, 268, 1.1]], gente: [['amerindio', 170, 272, 1.1, { pose: 'sostiene' }], ['amerindia', 250, 274, 1.05, { flip: 1 }]] },
        { alt: 'Diseños propios en cada pieza', cielo: 'dia', suelo: 'tierra', items: [['canasto', 140, 266, 2.1], ['canasto', 300, 268, 1.4]], gente: [['amerindia', 230, 274, 1.05, { pose: 'señala' }]] },
        { alt: 'El saber se enseña a los más jóvenes', cielo: 'dia', suelo: 'pasto', items: [['benab', 120, 238, 1]], gente: [['amerindia_vieja', 205, 274, 1.1, { pose: 'sostiene', obj: 'cesta' }], ['nina', 285, 278, .95, { flip: 1 }]] },
    ],

    'pintores-guyaneses': [
        { alt: 'Aubrey Williams y sus colores intensos', cielo: 'interior', suelo: 'ninguno', items: [['lienzo_abstracto', 270, 255, 1.4], ['ventana', 70, 190, 1.1]], gente: [['aubrey', 140, 268, 1.15]] },
        { alt: 'Philip Moore y el monumento de 1763', cielo: 'dia', suelo: 'piedra', items: [['monumento_1763', 270, 238, 1.1]], gente: [['escultor', 140, 272, 1.15, { pose: 'señala' }]] },
        { alt: 'La abstracción en el arte', cielo: 'interior', suelo: 'ninguno', items: [['lienzo_abstracto', 110, 255, 1.2], ['lienzo_abstracto', 300, 255, 1.2]], gente: [['aubrey', 205, 268, 1.1, { pose: 'arriba' }]] },
        { alt: 'Arte del Caribe', cielo: 'dia', suelo: 'arena', items: [['palmeras', 335, 236, 1.1], ['caballete', 105, 250, 1.2]], gente: [['aubrey', 215, 272, 1.1, { pose: 'sostiene', obj: 'pincel' }]] },
    ],

    'wilson-harris': [
        { alt: 'Wilson Harris, escritor guyanés', cielo: 'interior', suelo: 'ninguno', items: [['escritorio', 120, 250, 1.1], ['estante', 335, 232, 1], ['ventana', 220, 190, .9]], gente: [['harris', 210, 268, 1.15, { pose: 'sostiene', obj: 'libro' }]] },
        { alt: 'El interior de Guyana en sus novelas', cielo: 'dia', suelo: 'agua', items: [['selva', 200, 196, 1.2], ['canoa', 150, 250, 1.1]], gente: [['harris', 150, 246, .75, { pose: 'sostiene' }]] },
        { alt: 'El palacio del pavo real, 1960', cielo: 'dia', suelo: 'pasto', items: [['cartel', 85, 240, .9, { t: '1960' }], ['pavo_real', 280, 262, 1.5]], gente: [['harris', 185, 272, 1.1, { pose: 'señala' }]] },
        { alt: 'Mito y memoria', cielo: 'noche', suelo: 'pasto', items: [['luna', 320, 60, 1.2], ['selva', 200, 205, 1.1]], gente: [['harris', 150, 270, 1.15, { pose: 'arriba' }]] },
    ],

    'poesia-guyanesa': [
        { alt: 'La revista Kyk-Over-Al', cielo: 'interior', suelo: 'ninguno', items: [['revista_kyk', 205, 262, 2], ['ventana', 340, 190, 1]], gente: [['seymour', 90, 268, 1.1, { pose: 'señala' }]] },
        { alt: 'A. J. Seymour, poeta y editor', cielo: 'interior', suelo: 'ninguno', items: [['escritorio', 120, 250, 1.1], ['estante', 335, 232, 1]], gente: [['seymour', 215, 268, 1.15, { pose: 'sostiene', obj: 'pluma' }]] },
        { alt: 'Grace Nichols lee sus poemas', cielo: 'noche', suelo: 'piso', items: [['escenario', 205, 232, 1.1], ['atril', 285, 258, 1.2]], gente: [['grace_nichols', 160, 262, 1.15]] },
        { alt: 'David Dabydeen y sus versos', cielo: 'interior', suelo: 'ninguno', items: [['libro_abierto', 300, 262, 1.6], ['ventana', 85, 190, 1.1]], gente: [['dabydeen', 190, 268, 1.15]] },
    ],

    'rodeo-rupununi': [
        { alt: 'La sabana de Rupununi', cielo: 'dia', suelo: 'pasto', items: [['sabana', 200, 206, 1.1], ['termitero', 70, 222, 1], ['vaca', 305, 246, 1]], gente: [['vaquero', 180, 274, 1.1, { pose: 'señala' }]] },
        { alt: 'Los vaqueros y sus caballos', cielo: 'dia', suelo: 'pasto', items: [['montes', 200, 205, 1, { c: '#7f9f6a' }], ['caballo', 290, 256, 1.2]], gente: [['vaquero', 160, 274, 1.15], ['vaquera', 225, 276, 1.05]] },
        { alt: 'El rodeo en el corral', cielo: 'dia', suelo: 'tierra', items: [['corral', 200, 226, 1.1], ['vaca', 130, 262, 1.1]], gente: [['vaquero', 285, 274, 1.15, { flip: 1, pose: 'arriba', obj: 'lazo' }]] },
        { alt: 'La fiesta de Pascua en la sabana', cielo: 'atardecer', suelo: 'pasto', items: [['banderines', 200, 120, 1.15], ['sabana', 200, 206, 1.1]], gente: [['vaquero', 130, 274, 1.1, { pose: 'arriba' }], ['vaquera', 215, 276, 1.05, { pose: 'dos' }], ['amerindia', 285, 276, 1.05, { flip: 1 }]] },
    ],

    cricket: [
        { alt: 'Un juego traído de Gran Bretaña', cielo: 'dia', suelo: 'pasto', items: [['estadio_cricket', 200, 210, 1], ['wicket', 200, 250, 1.2]], gente: [['britanico', 105, 274, 1.1, { pose: 'señala' }], ['cricketer', 300, 276, 1.1, { flip: 1 }]] },
        { alt: 'El campo de Bourda en Georgetown', cielo: 'dia', suelo: 'pasto', items: [['estadio_cricket', 200, 210, 1], ['wicket', 255, 252, 1.3]], gente: [['cricketer', 160, 274, 1.15], ['cricketer_lanza', 330, 262, .95, { flip: 1 }]] },
        { alt: 'El equipo de las Indias Occidentales', cielo: 'dia', suelo: 'pasto', items: [['estadio_cricket', 200, 210, 1], ['trofeo', 330, 262, 1.4]], gente: [['cricketer', 110, 274, 1.1, { pose: 'arriba' }], ['cricketer_lanza', 215, 276, 1.1]] },
        { alt: 'Una afición que une a todos', cielo: 'dia', suelo: 'pasto', items: [['estadio_cricket', 200, 210, 1.05], ['banderines', 200, 125, 1.1]], gente: [['afroguyanes', 120, 274, 1.1, { pose: 'arriba' }], ['indoguyana', 205, 276, 1.1, { pose: 'arriba' }], ['amerindia', 285, 276, 1.05, { flip: 1, pose: 'arriba' }]] },
    ],

    mashramani: [
        { alt: 'Mashramani se celebra el 23 de febrero', cielo: 'dia', suelo: 'calle', items: [['carroza', 250, 252, 1.05], ['banderines', 200, 112, 1.1]], gente: [['mash_bailarina', 100, 274, 1.1]], delante: [['calendario', 70, 140, .9]] },
        { alt: 'La República se celebra con banderas', cielo: 'dia', suelo: 'calle', items: [['bandera_guyana', 105, 262, 1.2], ['bandera_guyana', 300, 262, 1.2], ['confeti', 205, 160, 1.4]], gente: [['ciudadano', 200, 274, 1.1, { pose: 'arriba' }]] },
        { alt: 'Disfraces con plumas y colores', cielo: 'atardecer', suelo: 'calle', items: [['confeti', 205, 150, 1.5]], gente: [['mash_bailarin', 130, 272, 1.15], ['mash_bailarina', 265, 276, 1.15, { flip: 1 }]] },
        { alt: 'Música y carrozas en el desfile', cielo: 'dia', suelo: 'calle', items: [['carroza', 195, 252, 1.15], ['banderines', 200, 112, 1.1], ['steelpan', 345, 262, .9]], gente: [['mash_bailarin', 80, 274, 1.05], ['steelpanista', 285, 276, 1.05, { flip: 1 }]] },
    ],

    'phagwah-diwali': [
        { alt: 'Phagwah, la fiesta de los colores', cielo: 'dia', suelo: 'pasto', items: [['polvo_holi', 205, 232, 1.3]], gente: [['indoguyana', 130, 274, 1.1, { pose: 'arriba' }], ['indoguyanes', 285, 276, 1.1, { flip: 1, pose: 'sostiene', obj: 'cuenco_abir' }]] },
        { alt: 'Diwali, la fiesta de las luces', cielo: 'noche', suelo: 'piedra', items: [['templo_hindu', 105, 224, .95], ['luces', 270, 120, 1], ['diyas', 285, 262, 1.1]], gente: [['indoguyana', 200, 274, 1.1, { pose: 'sostiene', obj: 'diya' }]] },
        { alt: 'Las fechas dependen del calendario lunar', cielo: 'noche', suelo: 'pasto', items: [['luna_llena', 305, 75, 1.5], ['rangoli', 135, 262, 1]], gente: [['indoguyanes', 230, 272, 1.1, { pose: 'señala' }]] },
        { alt: 'Una celebración que se comparte', cielo: 'atardecer', suelo: 'pasto', items: [['fuegos', 90, 100, .7], ['diyas', 330, 262, 1], ['polvo_holi', 215, 220, 1]], gente: [['afroguyanesa', 140, 276, 1.05, { pose: 'arriba' }], ['indoguyana', 215, 276, 1.1, { pose: 'arriba' }], ['amerindio', 280, 276, 1.05, { flip: 1, pose: 'arriba' }]] },
    ],

    'traje-indoguyanes': [
        { alt: 'El sari, una prenda elegante', cielo: 'interior', suelo: 'ninguno', items: [['rollos_tela', 305, 262, 1.2], ['ventana', 70, 190, 1.1]], gente: [['indoguyana', 185, 268, 1.2, { pose: 'abre' }]] },
        { alt: 'Shalwar kameez y kurta', cielo: 'dia', suelo: 'pasto', items: [['palmeras', 340, 235, .9]], gente: [['indoguyana_shalwar', 150, 274, 1.15, { pose: 'abre' }], ['indoguyanes', 260, 276, 1.1, { flip: 1 }]] },
        { alt: 'Ropa para las bodas y las fiestas', cielo: 'atardecer', suelo: 'pasto', items: [['rangoli', 205, 262, 1.1], ['diyas', 335, 262, .8]], gente: [['novia_india', 150, 272, 1.15], ['novio_indio', 250, 274, 1.1, { flip: 1 }]] },
        { alt: 'Muchos estilos y colores', cielo: 'dia', suelo: 'pasto', items: [['banderines', 200, 120, 1.1]], gente: [['indoguyana', 110, 274, 1.05], ['indoguyana_shalwar', 200, 276, 1.05], ['indoguyanes', 285, 276, 1.05, { flip: 1 }]] },
    ],

    'traje-amerindio-afro': [
        { alt: 'La vestimenta de los pueblos indígenas', cielo: 'dia', suelo: 'pasto', items: [['selva', 200, 205, 1.1]], gente: [['amerindio', 130, 272, 1.15, { pose: 'señala' }], ['amerindia', 235, 274, 1.05]] },
        { alt: 'Materiales del bosque para hacer ropa y adornos', cielo: 'dia', suelo: 'pasto', items: [['benab', 115, 238, .95], ['canasto', 330, 268, 1.1]], gente: [['amerindia', 210, 274, 1.15, { pose: 'sostiene', obj: 'cesta' }]] },
        { alt: 'Trajes del masquerade', cielo: 'dia', suelo: 'calle', items: [['banderines', 200, 115, 1.1]], gente: [['masquerade', 140, 274, 1.2], ['masquerade', 270, 276, 1.1, { flip: 1 }]] },
        { alt: 'Cada pueblo tiene su identidad', cielo: 'dia', suelo: 'pasto', items: [['banderines', 200, 120, 1.1]], gente: [['afroguyanesa', 110, 274, 1.05], ['afroguyanes', 190, 276, 1.05], ['amerindia', 270, 276, 1.05, { flip: 1 }]] },
    ],

    kaieteur: [
        { alt: 'Las cataratas Kaieteur caen 226 metros', cielo: 'dia', suelo: 'pasto', items: [['kaieteur', 200, 215, 1.15]], gente: [['guia_kaieteur', 120, 276, 1.05]] },
        { alt: 'El río Potaro alimenta la catarata', cielo: 'dia', suelo: 'agua', items: [['selva', 200, 196, 1.2], ['canoa', 145, 250, 1.1]], gente: [['amerindio', 145, 246, .78, { pose: 'sostiene', obj: 'remo' }]] },
        { alt: 'En 1870 un explorador europeo las describe', cielo: 'dia', suelo: 'pasto', items: [['kaieteur', 270, 215, .9], ['cartel', 90, 240, .8, { t: '1870' }]], gente: [['explorador_brown', 170, 274, 1.15]] },
        { alt: 'Parque nacional con vida única', cielo: 'dia', suelo: 'pasto', items: [['kaieteur', 205, 215, 1], ['sapo_dorado', 335, 262, 1.4], ['vencejos', 100, 90, 1]], gente: [['guia_kaieteur', 105, 276, 1.05, { flip: 1 }]] },
    ],

    georgetown: [
        { alt: 'La catedral de San Jorge', cielo: 'dia', suelo: 'pasto', items: [['catedral_san_jorge', 215, 220, 1.15], ['palmeras', 70, 235, .8]], gente: [['guia_kaieteur', 330, 276, 1, { flip: 1, pose: 'señala' }]] },
        { alt: 'La torre del reloj del mercado Stabroek', cielo: 'dia', suelo: 'calle', items: [['torre_reloj', 215, 215, 1.2]], gente: [['ciudadano', 110, 274, 1.1, { pose: 'señala' }], ['indoguyana', 330, 276, 1, { flip: 1 }]] },
        { alt: 'Un mercado lleno de vida', cielo: 'dia', suelo: 'calle', items: [['mercado_stabroek', 215, 212, 1], ['frutas', 100, 262, 1.2]], gente: [['afroguyanesa', 190, 274, 1.1, { pose: 'sostiene' }], ['indoguyanes', 310, 276, 1.05, { flip: 1 }]] },
        { alt: 'Georgetown, capital junto al mar', cielo: 'atardecer', suelo: 'calle', items: [['casa_madera', 120, 214, 1], ['palmeras', 330, 235, 1], ['rio', 340, 212, .5]], gente: [['ciudadano', 235, 276, 1.1, { pose: 'arriba' }]] },
    ],
};
