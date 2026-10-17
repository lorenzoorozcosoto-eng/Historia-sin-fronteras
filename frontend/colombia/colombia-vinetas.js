// Escenas ilustradas de las historietas de Colombia: 4 por tema (una por cada idea clave).
// Formato: { cielo, suelo, items:[[objeto,x,y,escala,opciones]], gente:[[rol,x,y,escala,opciones]], delante:[...] }
window.VINETAS = {

    precolombinas: [
        { alt: 'Los primeros habitantes cerca de una cueva', cielo: 'dia', suelo: 'tierra', items: [['montes', 200, 205, 1.1, { c: '#9aa8c4' }], ['maiz', 330, 250, 1]], gente: [['indigena', 90, 268, 1.05, { pose: 'señala' }], ['muisca', 250, 270, 1]] },
        { alt: 'Estatuas de piedra de San Agustín', cielo: 'dia', suelo: 'pasto', items: [['montes', 200, 205, 1], ['estatua_agustin', 120, 262, 1.3], ['estatua_agustin', 270, 262, 1.1]], gente: [['indigena', 335, 270, 1, { flip: 1 }]] },
        { alt: 'Ciudad Perdida entre la selva', cielo: 'dia', suelo: 'pasto', items: [['selva', 200, 205, 1.1], ['terrazas', 200, 262, 1]], gente: [['tayrona', 90, 270, 1.05, { pose: 'señala' }], ['tayrona', 330, 270, 1, { flip: 1 }]] },
        { alt: 'La ceremonia de El Dorado en la laguna', cielo: 'atardecer', suelo: 'pasto', items: [['laguna', 200, 240, 1.2], ['balsa_muisca', 200, 244, 1]], gente: [['muisca_cacique', 75, 268, 1.05, { pose: 'arriba' }], ['muisca', 335, 268, 1, { flip: 1 }]] },
    ],

    'conquista-colonia': [
        { alt: 'Los barcos españoles llegan al Caribe', cielo: 'dia', suelo: 'agua', items: [['barco', 150, 214, 1.2], ['palmeras', 350, 230, 1]], gente: [['conquistador_col', 300, 266, 1.05, { pose: 'señala' }]] },
        { alt: 'Se funda Bogotá', cielo: 'dia', suelo: 'pasto', items: [['montes', 200, 205, 1.1], ['iglesia', 330, 222, .8]], gente: [['conquistador_col', 150, 268, 1.1, { pose: 'arriba' }], ['muisca', 250, 270, 1, { flip: 1 }]] },
        { alt: 'La ciudad amurallada de Cartagena', cielo: 'dia', suelo: 'piedra', items: [['muralla', 200, 214, 1], ['barco', 330, 190, .6]], gente: [['conquistador_col', 105, 270, 1, { pose: 'señala' }], ['afro', 300, 274, 1, { flip: 1 }]] },
        { alt: 'La Expedición Botánica de Mutis', cielo: 'dia', suelo: 'pasto', items: [['selva', 200, 205, 1], ['mesa', 280, 276, 1.1, { w: 70 }]], gente: [['escritor', 120, 268, 1.1, { pose: 'señala' }], ['pintor', 210, 270, 1]], delante: [['libro_abierto', 285, 252, 1.2]] },
    ],

    independencia: [
        { alt: 'El florero de Llorente y el grito del 20 de julio', cielo: 'dia', suelo: 'piedra', items: [['iglesia', 215, 214, 1.1]], gente: [['insurgente', 110, 270, 1.05, { pose: 'arriba' }], ['pola', 290, 272, 1, { flip: 1 }], ['campesino', 345, 276, .95, { flip: 1, pose: 'arriba' }]], delante: [['vela', 70, 285, 1]] },
        { alt: 'La Pola, heroína de la libertad', cielo: 'atardecer', suelo: 'piedra', items: [['iglesia', 300, 214, .9]], gente: [['pola', 150, 270, 1.15, { pose: 'arriba' }], ['soldado', 70, 272, 1]] },
        { alt: 'Bolívar cruza el páramo de Pisba', cielo: 'dia', suelo: 'pasto', items: [['paramo', 200, 218, 1.2], ['caballo', 105, 262, 1]], gente: [['libertador', 235, 270, 1.1, { pose: 'señala' }], ['soldado', 315, 274, 1, { flip: 1 }], ['soldado', 50, 278, .95]] },
        { alt: 'La Batalla del Puente de Boyacá', cielo: 'humo', suelo: 'pasto', items: [['montes', 200, 205, 1.1], ['canon', 90, 262, 1], ['bandera', 335, 238, 1]], gente: [['libertador', 210, 270, 1.1, { pose: 'arriba' }], ['soldado', 285, 272, 1, { flip: 1 }]] },
    ],

    republica: [
        { alt: 'Se redacta una constitución', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 70, 190, 1.1], ['ventana', 330, 190, 1.1]], gente: [['escritor', 120, 262, 1.1, { pose: 'señala' }], ['libertador', 285, 262, 1.05, { flip: 1 }]], delante: [['mesa', 200, 286, 1.3, { w: 80 }], ['documento', 200, 244, 1.3]] },
        { alt: 'Plantaciones de café y trenes', cielo: 'dia', suelo: 'pasto', items: [['cafetal', 200, 232, 1.1]], gente: [['cafetero', 90, 270, 1.05, { pose: 'señala' }], ['paisa_mujer', 315, 274, 1, { flip: 1 }]] },
        { alt: 'El Bogotazo del 9 de abril', cielo: 'humo', suelo: 'calle', items: [['catedral', 250, 212, .95], ['humo', 90, 150, 1, { c: '#3a3340' }], ['fuego', 340, 232, 1.1]], gente: [['campesino', 100, 270, 1, { pose: 'arriba' }], ['soldado', 175, 274, 1]] },
        { alt: 'La paz y la Constitución de 1991', cielo: 'dia', suelo: 'pasto', items: [['montes', 200, 205, 1.1], ['bandera', 305, 238, 1.1]], gente: [['pola', 110, 270, 1.05, { pose: 'arriba' }], ['campesino', 200, 274, 1], ['afro_hombre', 255, 274, 1]], delante: [['mariposas_amarillas', 120, 190, 1]] },
    ],

    diversidad: [
        { alt: 'Los pueblos indígenas de Colombia', cielo: 'dia', suelo: 'pasto', items: [['montes', 200, 205, 1.1], ['choza', 330, 240, .85]], gente: [['tayrona', 90, 270, 1.05], ['wayuu', 185, 272, 1], ['indigena', 270, 270, 1.05, { flip: 1 }]] },
        { alt: 'Las comunidades afrocolombianas', cielo: 'atardecer', suelo: 'arena', items: [['palmeras', 340, 240, 1.1], ['tambor_alegre', 80, 266, 1]], gente: [['afro', 195, 272, 1.05, { pose: 'arriba' }], ['afro_hombre', 270, 270, 1.05, { flip: 1 }]] },
        { alt: 'Palenque, el pueblo de la libertad', cielo: 'dia', suelo: 'tierra', items: [['choza', 120, 240, .9], ['choza', 300, 244, .85]], gente: [['afro', 205, 274, 1.1, { pose: 'señala' }], ['afro_hombre', 345, 278, .95, { flip: 1 }]] },
        { alt: 'Niños de todas las regiones juntos', cielo: 'dia', suelo: 'pasto', items: [['montes', 200, 205, 1]], gente: [['nino', 85, 272, 1.05, { pose: 'arriba' }], ['wayuu', 175, 274, 1], ['afro', 255, 274, 1], ['paisa', 335, 272, 1, { flip: 1 }]] },
    ],

    regiones: [
        { alt: 'La Sierra Nevada frente al mar', cielo: 'dia', suelo: 'arena', items: [['montes', 200, 195, 1.2, { c: '#a8bcd8' }], ['palmeras', 335, 240, 1]], gente: [['nino', 110, 272, 1.1, { pose: 'señala' }]] },
        { alt: 'El Valle de Cocora y sus palmas de cera', cielo: 'dia', suelo: 'pasto', items: [['palma_cera', 120, 270, 1.2], ['palma_cera', 280, 262, .95], ['montes', 200, 205, .8]], gente: [['cafetero', 205, 276, 1]] },
        { alt: 'El río de los cinco colores', cielo: 'dia', suelo: 'pasto', items: [['selva', 200, 205, 1.1], ['rio_colores', 200, 256, 1.1]], gente: [['nina', 95, 274, 1.05, { pose: 'señala' }]] },
        { alt: 'Ballenas jorobadas en el Pacífico', cielo: 'atardecer', suelo: 'agua', items: [['ballena', 190, 232, 1.2], ['palmeras', 355, 215, .7]], gente: [['nino', 70, 262, 1, { pose: 'arriba' }]] },
    ],

    'bandeja-ajiaco': [
        { alt: 'Una bandeja paisa servida', cielo: 'cocina', suelo: 'ninguno', items: [['bandeja', 200, 250, 1.8]], gente: [['cocinera', 75, 270, 1.05, { pose: 'señala' }], ['paisa', 335, 270, 1, { flip: 1 }]] },
        { alt: 'La cocina de los arrieros', cielo: 'dia', suelo: 'tierra', items: [['fuego', 200, 250, 1], ['cazuela', 200, 240, 1]], gente: [['paisa', 100, 270, 1.05, { pose: 'señala' }], ['paisa_mujer', 300, 274, 1, { flip: 1 }]] },
        { alt: 'El ajiaco santafereño', cielo: 'cocina', suelo: 'ninguno', items: [['olla_ajiaco', 200, 250, 1.8]], gente: [['cocinera', 90, 270, 1.05], ['nino', 320, 274, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'Sancocho, tamales y más', cielo: 'cocina', suelo: 'ninguno', items: [['cazuela', 120, 250, 1.3], ['frutas', 280, 250, 1.3]], gente: [['cocinera', 200, 274, 1.05, { pose: 'sostiene' }]] },
    ],

    'arepas-costa': [
        { alt: 'Arepas en la plancha', cielo: 'cocina', suelo: 'ninguno', items: [['comal', 200, 250, 1.4], ['arepa', 170, 242, 1.4], ['arepa', 230, 242, 1.4]], gente: [['cocinera', 75, 270, 1.05, { pose: 'sostiene' }]] },
        { alt: 'Arepa de huevo del Caribe', cielo: 'dia', suelo: 'arena', items: [['palmeras', 340, 235, 1], ['arepa', 160, 250, 2]], gente: [['costeno', 260, 270, 1.05, { flip: 1, pose: 'señala' }]] },
        { alt: 'Pescado frito con patacones', cielo: 'dia', suelo: 'arena', items: [['barco', 90, 200, .7], ['frutas', 250, 252, 1.3]], gente: [['costeno', 150, 270, 1.05], ['cocinera', 330, 274, 1, { flip: 1 }]] },
        { alt: 'Un tinto en la mañana', cielo: 'dia', suelo: 'pasto', items: [['cafetal', 200, 232, 1]], gente: [['cafetero', 150, 270, 1.1, { pose: 'sostiene', obj: 'cafe' }], ['paisa_mujer', 260, 274, 1]] },
    ],

    cumbia: [
        { alt: 'Los tambores y las gaitas', cielo: 'noche', suelo: 'arena', items: [['luna', 330, 60, .8], ['tambor_alegre', 110, 266, 1.2], ['gaitas', 290, 266, 1.1]], gente: [['afro_hombre', 200, 272, 1.05, { pose: 'sostiene' }]] },
        { alt: 'La pareja de cumbia con velas', cielo: 'noche', suelo: 'arena', items: [['luna', 320, 60, .7]], gente: [['cumbiambera', 150, 270, 1.15, { obj: 'vela', pose: 'arriba' }], ['costeno', 255, 270, 1.1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'Un conjunto de cumbia', cielo: 'noche', suelo: 'arena', items: [['escenario', 200, 240, 1.2]], gente: [['afro_hombre', 110, 262, 1], ['costeno', 200, 262, 1], ['afro', 290, 262, 1]] },
        { alt: 'La cumbia viaja por América', cielo: 'dia', suelo: 'calle', items: [['musica', 200, 130, 1.6]], gente: [['cumbiambera', 100, 272, 1.05, { pose: 'arriba' }], ['vallenato', 300, 272, 1.05, { flip: 1 }]] },
    ],

    vallenato: [
        { alt: 'Un juglar con su acordeón', cielo: 'atardecer', suelo: 'tierra', items: [['montes', 200, 205, 1], ['palmeras', 340, 238, 1]], gente: [['vallenato', 150, 270, 1.2, { pose: 'sostiene' }]] },
        { alt: 'Caja, guacharaca y acordeón', cielo: 'dia', suelo: 'tierra', items: [['acordeon_grande', 120, 260, 1.4], ['tambor_alegre', 300, 266, 1.1]], gente: [['costeno', 215, 272, 1.05, { pose: 'sostiene' }]] },
        { alt: 'Francisco el Hombre y el diablo', cielo: 'noche', suelo: 'tierra', items: [['luna', 70, 55, .8], ['fuego', 340, 250, 1.1]], gente: [['vallenato', 130, 270, 1.15, { pose: 'sostiene' }], ['conquistador_col', 300, 270, 1, { flip: 1 }]] },
        { alt: 'El Festival de la Leyenda Vallenata', cielo: 'noche', suelo: 'piso', items: [['escenario', 200, 240, 1.3], ['reflector', 70, 140, 1]], gente: [['vallenato', 200, 260, 1.15, { pose: 'sostiene' }], ['cumbiambera', 310, 266, 1, { flip: 1 }]] },
    ],

    bambuco: [
        { alt: 'El tiple y la guitarra', cielo: 'dia', suelo: 'pasto', items: [['montes', 200, 205, 1.1], ['tiple_grande', 330, 260, 1.1]], gente: [['paisa', 150, 270, 1.15, { pose: 'sostiene', obj: 'tiple' }]] },
        { alt: 'El baile del bambuco', cielo: 'dia', suelo: 'pasto', items: [['montes', 200, 205, 1.1]], gente: [['paisa', 145, 270, 1.15, { pose: 'arriba' }], ['paisa_mujer', 260, 270, 1.15, { flip: 1, pose: 'abre' }]] },
        { alt: 'Fiestas de San Pedro en Neiva', cielo: 'atardecer', suelo: 'calle', items: [['iglesia', 300, 214, .9], ['papel_picado', 200, 100, 1.2]], gente: [['reina', 110, 272, 1.1], ['paisa', 200, 274, 1.05]] },
        { alt: 'El compositor Jorge Villamil', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 70, 190, 1.1]], gente: [['escritor', 190, 262, 1.15, { pose: 'sostiene', obj: 'tiple' }]], delante: [['musica', 300, 190, 1.4]] },
    ],

    joropo: [
        { alt: 'El llanero y su caballo', cielo: 'atardecer', suelo: 'pasto', items: [['caballo', 270, 262, 1.3]], gente: [['llanero', 120, 270, 1.15, { pose: 'señala' }]] },
        { alt: 'El arpa llanera', cielo: 'dia', suelo: 'pasto', items: [['arpa_llanera', 120, 266, 1.4], ['tambor_alegre', 330, 266, .9]], gente: [['llanero', 230, 272, 1.1, { pose: 'sostiene' }]] },
        { alt: 'Se baila el joropo', cielo: 'dia', suelo: 'pasto', items: [['palmeras', 340, 235, 1.1]], gente: [['llanero', 140, 270, 1.15, { pose: 'arriba' }], ['campesina', 250, 270, 1.15, { flip: 1 }]] },
        { alt: 'Coleo en la sabana', cielo: 'dia', suelo: 'tierra', items: [['caballo', 200, 262, 1.4]], gente: [['llanero', 195, 220, .9, { pose: 'arriba' }], ['llanero', 330, 274, 1, { flip: 1 }]] },
    ],

    botero: [
        { alt: 'Un pintor en su taller', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 330, 190, 1.1], ['caballete', 120, 262, 1.2]], gente: [['pintor', 215, 262, 1.15, { pose: 'señala' }]], delante: [['pincel_paleta', 300, 280, 1]] },
        { alt: 'Figuras de formas redondas', cielo: 'interior', suelo: 'ninguno', items: [['escultura_gorda', 140, 262, 1.1], ['escultura_gorda', 260, 262, 1.3]], gente: [['nina', 335, 274, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'La Plaza Botero en Medellín', cielo: 'dia', suelo: 'piedra', items: [['escultura_gorda', 110, 262, 1.3], ['escultura_gorda', 270, 262, 1.1], ['edificio', 350, 205, .7]], gente: [['nino', 200, 276, 1, { pose: 'arriba' }]] },
        { alt: 'Una pintura de la historia de Colombia', cielo: 'interior', suelo: 'ninguno', items: [['cuadro', 200, 215, 1.6]], gente: [['nina', 90, 270, 1.05, { pose: 'señala' }], ['pintor', 320, 270, 1.05, { flip: 1 }]] },
    ],

    'museo-oro': [
        { alt: 'El Museo del Oro en Bogotá', cielo: 'dia', suelo: 'piedra', items: [['edificio', 200, 214, 1.1]], gente: [['nina', 90, 274, 1.05, { pose: 'señala' }], ['nino', 320, 276, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'La Balsa Muisca', cielo: 'interior', suelo: 'ninguno', items: [['vitrina', 200, 240, 2.2], ['balsa_muisca', 200, 232, 1]], gente: [['nina', 90, 272, 1.05, { pose: 'señala' }]] },
        { alt: 'Piezas de oro precolombinas', cielo: 'interior', suelo: 'ninguno', items: [['vitrina', 120, 250, 1.3], ['pieza_oro', 120, 240, 1], ['vitrina', 290, 250, 1.3], ['pieza_oro', 290, 240, .9]], gente: [['nino', 205, 276, 1.05, { pose: 'arriba' }]] },
        { alt: 'Los orfebres antiguos trabajan el oro', cielo: 'dia', suelo: 'tierra', items: [['fuego', 120, 250, 1], ['choza', 330, 240, .85]], gente: [['orfebre', 215, 270, 1.15]], delante: [['pieza_oro', 270, 290, .5]] },
    ],

    'garcia-marquez': [
        { alt: 'Aracataca y su niño escritor', cielo: 'dia', suelo: 'calle', items: [['ciudad_colonial', 250, 214, .7], ['mompox', 100, 214, .6]], gente: [['nino', 160, 272, 1.1, { pose: 'sostiene' }]] },
        { alt: 'Macondo y las mariposas amarillas', cielo: 'dia', suelo: 'pasto', items: [['macondo', 200, 250, 1], ['mariposas_amarillas', 200, 130, 1.4]], gente: [['campesino', 330, 276, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'García Márquez escribe', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 70, 190, 1.1], ['pila_libros', 330, 266, 1.1]], gente: [['escritor_gabo', 200, 262, 1.15, { pose: 'señala' }]], delante: [['escritorio', 200, 290, 1.1], ['libro_abierto', 200, 255, 1]] },
        { alt: 'El Premio Nobel de Literatura', cielo: 'interior', suelo: 'ninguno', items: [['nobel_podio', 200, 262, 1.1]], gente: [['escritor_gabo', 120, 262, 1.1, { pose: 'arriba' }], ['frida', 300, 268, 1, { flip: 1 }]] },
    ],

    clasicos: [
        { alt: 'Crónicas y poetas de la Colonia', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 70, 190, 1.1], ['estante', 335, 250, 1]], gente: [['monja', 140, 268, 1.1, { pose: 'sostiene' }], ['conquistador_col', 250, 268, 1, { flip: 1 }]] },
        { alt: 'La novela María en el Valle del Cauca', cielo: 'atardecer', suelo: 'pasto', items: [['montes', 200, 205, 1.1], ['arbol', 330, 245, 1]], gente: [['pola', 130, 270, 1.1, { pose: 'sostiene' }], ['paisa', 240, 272, 1.05, { flip: 1 }]] },
        { alt: 'La vorágine en la selva', cielo: 'dia', suelo: 'pasto', items: [['selva', 200, 205, 1.2], ['rio', 200, 240, 1]], gente: [['escritor', 150, 270, 1.1, { pose: 'señala' }], ['indigena', 290, 272, 1, { flip: 1 }]] },
        { alt: 'Una biblioteca para todos', cielo: 'interior', suelo: 'ninguno', items: [['estante', 90, 250, 1.1], ['estante', 330, 250, 1.1]], gente: [['nina', 180, 272, 1.05, { pose: 'sostiene' }], ['escritora', 255, 270, 1.05]], delante: [['pila_libros', 200, 290, .9]] },
    ],

    cafe: [
        { alt: 'La planta de café con frutos rojos', cielo: 'dia', suelo: 'pasto', items: [['montes', 200, 205, 1.1], ['cafetal', 200, 240, 1.2]], gente: [['cafetero', 335, 276, 1, { flip: 1, pose: 'señala' }]] },
        { alt: 'Recolectando los granos a mano', cielo: 'dia', suelo: 'pasto', items: [['cafetal', 200, 236, 1.2]], gente: [['cafetero', 120, 272, 1.1, { pose: 'arriba' }], ['paisa_mujer', 285, 274, 1.05]], delante: [['bulto', 200, 292, 1]] },
        { alt: 'Secando y tostando el café', cielo: 'dia', suelo: 'tierra', items: [['granos', 150, 268, 2], ['granos', 250, 276, 1.8]], gente: [['cafetero', 335, 270, 1, { flip: 1, pose: 'señala' }]] },
        { alt: 'Un jeep Willys en el Paisaje Cultural Cafetero', cielo: 'dia', suelo: 'tierra', items: [['montes', 200, 205, 1.1], ['bulto', 120, 270, 1.4], ['bulto', 150, 270, 1.3]], gente: [['cafetero', 260, 272, 1.1, { pose: 'sostiene', obj: 'cafe' }]] },
    ],

    artesanias: [
        { alt: 'El sombrero vueltiao zenú', cielo: 'dia', suelo: 'arena', items: [['sombrero_vueltiao', 200, 260, 2.2], ['palmeras', 350, 232, 1]], gente: [['costeno', 80, 272, 1.05, { pose: 'señala' }]] },
        { alt: 'Tejiendo la mochila wayuu', cielo: 'dia', suelo: 'arena', items: [['mochila_wayuu', 280, 272, 1.7]], gente: [['wayuu', 135, 272, 1.15, { pose: 'sostiene' }]] },
        { alt: 'Cerámica de La Chamba', cielo: 'dia', suelo: 'tierra', items: [['cazuela', 120, 262, 1.3], ['cazuela', 290, 270, 1.1], ['comal', 205, 276, 1.2]], gente: [['tejedora', 335, 272, 1, { flip: 1 }]] },
        { alt: 'Feria Expoartesanías', cielo: 'interior', suelo: 'ninguno', items: [['mostrador', 120, 255, 1.2], ['mochila_wayuu', 110, 238, .7], ['sombrero_vueltiao', 240, 245, .9]], gente: [['nina', 320, 274, 1.05, { flip: 1, pose: 'arriba' }]] },
    ],

    carnaval: [
        { alt: 'Los disfraces del carnaval', cielo: 'dia', suelo: 'calle', items: [['papel_picado', 200, 90, 1.3]], gente: [['marimonda', 100, 272, 1.1, { pose: 'arriba' }], ['reina', 205, 274, 1.1], ['marimonda', 305, 274, 1.1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'La Batalla de Flores', cielo: 'dia', suelo: 'calle', items: [['edificio', 330, 205, .8], ['papel_picado', 150, 95, 1.1]], gente: [['reina', 140, 272, 1.15, { pose: 'abre' }], ['cumbiambera', 250, 274, 1.05, { pose: 'arriba' }]] },
        { alt: 'La cumbia en el carnaval', cielo: 'atardecer', suelo: 'calle', items: [['tambor_alegre', 90, 268, 1.1], ['musica', 310, 130, 1.3]], gente: [['cumbiambera', 175, 272, 1.1, { obj: 'vela', pose: 'arriba' }], ['costeno', 255, 272, 1.1, { flip: 1 }]] },
        { alt: 'El entierro de Joselito Carnaval', cielo: 'noche', suelo: 'calle', items: [['luna', 320, 60, .8], ['vela', 100, 275, 1.1], ['vela', 300, 275, 1.1]], gente: [['costeno', 150, 272, 1.1], ['reina', 250, 274, 1.1, { flip: 1 }]] },
    ],

    'feria-flores': [
        { alt: 'Los campesinos del corregimiento de Santa Elena', cielo: 'dia', suelo: 'pasto', items: [['montes', 200, 205, 1.1], ['silleta', 285, 268, 1]], gente: [['silletero', 130, 270, 1.15, { pose: 'señala' }]] },
        { alt: 'Una silleta llena de flores', cielo: 'dia', suelo: 'calle', items: [['silleta', 200, 270, 2]], gente: [['silletero', 85, 272, 1.1, { pose: 'señala' }], ['paisa_mujer', 335, 274, 1, { flip: 1 }]] },
        { alt: 'El desfile de silleteros', cielo: 'dia', suelo: 'calle', items: [['edificio', 320, 205, .8]], gente: [['silletero', 110, 272, 1.15], ['silletero', 220, 274, 1.1, { flip: 1 }]], delante: [['silleta', 110, 262, .55], ['silleta', 220, 262, .5]] },
        { alt: 'Orquídeas, la flor nacional', cielo: 'dia', suelo: 'pasto', items: [['cempasuchil', 130, 260, 1.8], ['camino_flores', 280, 262, 1.1]], gente: [['nina', 220, 274, 1.05, { pose: 'sostiene', obj: 'flores' }]] },
    ],

    'ruana-carriel': [
        { alt: 'La ruana de Nobsa', cielo: 'dia', suelo: 'pasto', items: [['montes', 200, 205, 1.1, { c: '#9aa8c4' }]], gente: [['campesino', 150, 270, 1.15, { pose: 'señala' }], ['campesina', 260, 272, 1.1, { flip: 1 }]] },
        { alt: 'El carriel del arriero paisa', cielo: 'dia', suelo: 'tierra', items: [['montes', 200, 205, 1.1], ['bulto', 330, 270, 1.2]], gente: [['paisa', 150, 270, 1.2, { pose: 'señala' }]] },
        { alt: 'Trajes de cada región', cielo: 'dia', suelo: 'pasto', items: [['montes', 200, 205, 1]], gente: [['costeno', 80, 272, 1], ['paisa', 165, 270, 1], ['llanero', 245, 270, 1], ['wayuu', 325, 272, 1]] },
        { alt: 'Ruana y sombrero para el frío', cielo: 'humo', suelo: 'pasto', items: [['paramo', 200, 220, 1.2]], gente: [['campesino', 200, 272, 1.15, { pose: 'sostiene' }]] },
    ],

    'pollera-wayuu': [
        { alt: 'La pollera de colores', cielo: 'dia', suelo: 'arena', items: [['palmeras', 340, 238, 1]], gente: [['cumbiambera', 150, 270, 1.2, { pose: 'abre' }]] },
        { alt: 'La mujer wayuu y su manto', cielo: 'dia', suelo: 'arena', items: [['montes', 200, 215, 1, { c: '#d1a56a' }], ['choza', 330, 244, .85]], gente: [['wayuu', 150, 272, 1.2, { pose: 'sostiene' }]] },
        { alt: 'Los diseños kanasü en la mochila', cielo: 'dia', suelo: 'arena', items: [['mochila_wayuu', 120, 266, 1.8], ['mochila_wayuu', 290, 270, 1.3]], gente: [['wayuu', 205, 274, 1.1, { pose: 'señala' }]] },
        { alt: 'El palabrero wayuu resuelve conflictos', cielo: 'atardecer', suelo: 'arena', items: [['choza', 90, 244, .9]], gente: [['indigena', 190, 270, 1.15, { pose: 'arriba' }], ['wayuu', 290, 274, 1.05, { flip: 1 }]] },
    ],

    cartagena: [
        { alt: 'Las murallas de Cartagena', cielo: 'dia', suelo: 'piedra', items: [['muralla', 200, 214, 1.1], ['barco', 340, 180, .6]], gente: [['nina', 100, 276, 1.05, { pose: 'señala' }]] },
        { alt: 'El Castillo de San Felipe de Barajas', cielo: 'dia', suelo: 'pasto', items: [['castillo_san_felipe', 200, 240, 1.1]], gente: [['conquistador_col', 80, 272, 1, { pose: 'señala' }], ['soldado', 330, 274, 1, { flip: 1 }]] },
        { alt: 'Calles coloniales de colores', cielo: 'dia', suelo: 'calle', items: [['cartagena_calle', 200, 215, 1.2]], gente: [['afro', 120, 276, 1.05, { pose: 'sostiene' }], ['nino', 280, 278, 1, { pose: 'arriba' }]] },
        { alt: 'Piratas atacan la ciudad', cielo: 'humo', suelo: 'agua', items: [['barco', 120, 220, 1.1], ['barco', 310, 210, .8], ['canon', 60, 258, .8]], gente: [['soldado', 210, 262, 1, { pose: 'arriba' }]] },
    ],

    zipaquira: [
        { alt: 'La mina de sal de los muiscas', cielo: 'gris', suelo: 'piedra', items: [['catedral_sal', 200, 262, .9]], gente: [['muisca', 90, 272, 1, { pose: 'señala' }], ['minero', 320, 274, 1, { flip: 1 }]] },
        { alt: 'La Catedral de Sal por dentro', cielo: 'noche', suelo: 'piedra', items: [['catedral_sal', 200, 268, 1.2]], gente: [['nina', 95, 276, 1.05, { pose: 'arriba' }], ['nino', 310, 276, 1, { flip: 1 }]] },
        { alt: 'Monserrate sobre Bogotá', cielo: 'dia', suelo: 'pasto', items: [['montes', 200, 195, 1.2], ['iglesia', 270, 205, .6]], gente: [['nina', 110, 272, 1.1, { pose: 'señala' }]] },
        { alt: 'Villa de Leyva y su plaza', cielo: 'dia', suelo: 'piedra', items: [['ciudad_colonial', 270, 212, .8], ['iglesia', 105, 214, .9]], gente: [['nino', 195, 278, 1.05, { pose: 'arriba' }]] },
    ],
};
