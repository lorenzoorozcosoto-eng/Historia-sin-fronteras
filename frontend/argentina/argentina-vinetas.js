// Escenas ilustradas de las historietas de Argentina: 4 por tema.
window.VINETAS = {

    'pueblos-originarios': [
        { alt: 'La Cueva de las Manos', cielo: 'dia', suelo: 'tierra', items: [['cueva_manos', 200, 252, 1.3]], gente: [['mano_cueva', 70, 272, 1, { pose: 'señala' }], ['indigena_pampa', 335, 272, 1, { flip: 1 }]] },
        { alt: 'Cazadores de guanacos en la Patagonia', cielo: 'dia', suelo: 'pasto', items: [['montes', 200, 205, 1, { c: '#b9a58c' }], ['guanaco', 260, 262, 1.2]], gente: [['indigena_pampa', 110, 270, 1.1, { pose: 'señala', obj: 'lanza' }]] },
        { alt: 'El pucará de Tilcara y los pueblos del noroeste', cielo: 'dia', suelo: 'tierra', items: [['quebrada', 200, 220, 1], ['pucara', 205, 250, .9]], gente: [['indigena_noroeste', 95, 274, 1.05, { pose: 'señala' }], ['indigena_noroeste', 320, 274, 1, { flip: 1 }]] },
        { alt: 'Los guaraníes y la selva misionera', cielo: 'dia', suelo: 'pasto', items: [['selva', 200, 205, 1.1], ['choza', 330, 240, .85]], gente: [['indigena', 130, 270, 1.1, { pose: 'señala' }], ['indigena', 250, 272, 1]] },
    ],

    'colonia-virreinato': [
        { alt: 'Los barcos de Pedro de Mendoza en el Río de la Plata', cielo: 'dia', suelo: 'agua', items: [['barco', 150, 215, 1.2], ['rio', 330, 200, .8]], gente: [['conquistador', 320, 268, 1.05, { pose: 'señala', flip: 1 }]] },
        { alt: 'Las misiones jesuíticas guaraníes', cielo: 'dia', suelo: 'tierra', items: [['iglesia', 205, 214, 1.2], ['selva', 60, 205, .8]], gente: [['cura', 310, 270, 1.05, { flip: 1 }], ['indigena', 105, 272, 1, { pose: 'señala' }]] },
        { alt: 'El virrey en Buenos Aires', cielo: 'dia', suelo: 'piedra', items: [['cabildo', 205, 214, 1.1]], gente: [['virrey', 100, 270, 1.1, { pose: 'señala' }], ['criolla', 320, 274, 1, { flip: 1 }]] },
        { alt: 'La Reconquista de Buenos Aires', cielo: 'humo', suelo: 'calle', items: [['cabildo', 300, 212, .9], ['canon', 90, 262, 1.1]], gente: [['soldado', 190, 272, 1.05, { pose: 'arriba' }], ['insurgente', 250, 274, 1.05]] },
    ],

    independencia: [
        { alt: 'El 25 de mayo de 1810 frente al Cabildo', cielo: 'dia', suelo: 'piedra', items: [['cabildo', 215, 214, 1.1], ['lluvia', 200, 40, 1.4]], gente: [['cabildo', 90, 272, 1, { pose: 'arriba' }], ['criolla', 330, 276, 1, { flip: 1 }]] },
        { alt: 'La bandera de Belgrano', cielo: 'dia', suelo: 'pasto', items: [['rio', 200, 200, 1], ['palmeras', 340, 240, 1]], gente: [['belgrano', 150, 270, 1.15, { pose: 'arriba', obj: 'bandera_arg' }], ['soldado', 250, 274, 1, { flip: 1 }]] },
        { alt: 'Se declara la independencia en Tucumán', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 70, 190, 1.1], ['ventana', 330, 190, 1.1]], gente: [['cabildo', 110, 262, 1.05, { pose: 'señala' }], ['cura', 290, 262, 1.05, { flip: 1 }]], delante: [['mesa', 200, 286, 1.3, { w: 80 }], ['documento', 200, 244, 1.3]] },
        { alt: 'San Martín cruza los Andes', cielo: 'dia', suelo: 'tierra', items: [['aconcagua', 200, 220, 1.2], ['caballo', 110, 262, 1.1], ['canon', 330, 262, .9]], gente: [['sanmartin', 225, 270, 1.15, { pose: 'señala' }], ['soldado', 290, 276, .95, { flip: 1 }]] },
    ],

    'organizacion-nacional': [
        { alt: 'Se sanciona la Constitución de 1853', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 330, 190, 1.1]], gente: [['cabildo', 120, 262, 1.1, { pose: 'señala' }], ['escritor', 270, 262, 1.05, { flip: 1 }]], delante: [['mesa', 200, 286, 1.3, { w: 80 }], ['documento', 200, 244, 1.3]] },
        { alt: 'El tren y los cultivos de la pampa', cielo: 'dia', suelo: 'pasto', items: [['trigo', 200, 262, 1.2], ['ferrocarril', 280, 238, 1]], gente: [['gaucho', 100, 272, 1.1, { pose: 'señala' }]] },
        { alt: 'Escuelas para todos', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 70, 190, 1.1], ['estante', 335, 250, 1]], gente: [['escritora', 150, 268, 1.1, { pose: 'señala' }], ['nino', 260, 276, 1], ['nina', 310, 276, 1]] },
        { alt: 'Las Madres de Plaza de Mayo y la democracia', cielo: 'dia', suelo: 'piedra', items: [['casa_rosada', 210, 214, .9]], gente: [['criolla', 90, 274, 1.05, { pose: 'arriba' }], ['dama', 160, 276, 1], ['campesina', 330, 276, 1, { flip: 1 }]] },
    ],

    'inmigracion-diversidad': [
        { alt: 'Llegan los barcos con inmigrantes', cielo: 'atardecer', suelo: 'agua', items: [['barco', 160, 214, 1.3]], gente: [['inmigrante', 320, 262, 1.05, { flip: 1, pose: 'arriba' }]] },
        { alt: 'El Hotel de Inmigrantes', cielo: 'dia', suelo: 'piedra', items: [['hotel_inmigrantes', 210, 214, 1.1]], gente: [['inmigrante', 90, 272, 1.05, { pose: 'sostiene' }], ['inmigrante_mujer', 330, 274, 1, { flip: 1 }]] },
        { alt: 'Los galeses en la Patagonia', cielo: 'dia', suelo: 'pasto', items: [['montes', 200, 205, 1, { c: '#b9a58c' }], ['ranchito', 320, 240, .9]], gente: [['inmigrante', 130, 270, 1.1, { pose: 'señala' }], ['inmigrante_mujer', 230, 274, 1]] },
        { alt: 'Una merienda con ñoquis y pizza', cielo: 'cocina', suelo: 'ninguno', items: [['gnocchi', 130, 250, 1.8], ['pizza', 280, 244, 1.8]], gente: [['inmigrante_mujer', 205, 276, 1.05, { pose: 'sostiene' }]] },
    ],

    regiones: [
        { alt: 'La pampa infinita', cielo: 'dia', suelo: 'pasto', items: [['pampa', 200, 215, 1.1], ['vaca', 310, 262, 1.1]], gente: [['gaucho', 110, 272, 1.1, { pose: 'señala' }]] },
        { alt: 'El Aconcagua en los Andes', cielo: 'dia', suelo: 'tierra', items: [['aconcagua', 200, 220, 1.3]], gente: [['nino', 100, 274, 1.1, { pose: 'arriba' }], ['nina', 310, 276, 1.05, { flip: 1, pose: 'señala' }]] },
        { alt: 'Los glaciares de la Patagonia', cielo: 'dia', suelo: 'agua', items: [['glaciar', 200, 214, 1.2]], gente: [['guia_glaciar', 90, 270, 1.05, { pose: 'señala' }]] },
        { alt: 'Las cataratas del Iguazú', cielo: 'dia', suelo: 'pasto', items: [['cataratas', 200, 240, 1.2], ['selva', 60, 205, .8]], gente: [['nina', 330, 276, 1.05, { flip: 1, pose: 'señala' }]] },
    ],

    'asado-empanadas': [
        { alt: 'El asado de los domingos', cielo: 'dia', suelo: 'pasto', items: [['parrilla', 200, 262, 1.5], ['arbol', 345, 235, 1]], gente: [['cocinero_parrilla', 85, 272, 1.1, { pose: 'señala' }]] },
        { alt: 'Los gauchos asan carne al palo', cielo: 'atardecer', suelo: 'pasto', items: [['pampa', 200, 215, 1], ['fogon', 200, 262, 1.4]], gente: [['gaucho', 100, 272, 1.1, { pose: 'sostiene', obj: 'asado' }], ['gaucho_poncho', 320, 274, 1.05, { flip: 1 }]] },
        { alt: 'Empanadas recién hechas', cielo: 'cocina', suelo: 'ninguno', items: [['empanadas', 200, 255, 2]], gente: [['cocinera', 80, 270, 1.05, { pose: 'señala' }], ['nino', 325, 276, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'Chimichurri y familia en la mesa', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 330, 190, 1]], gente: [['cocinero_parrilla', 110, 262, 1.1, { pose: 'sostiene' }], ['nina', 190, 270, 1], ['gaucha', 255, 268, 1.05]], delante: [['mesa', 200, 290, 1.5, { w: 90 }]] },
    ],

    'mate-dulce-leche': [
        { alt: 'La ronda de mate', cielo: 'dia', suelo: 'pasto', items: [['arbol', 335, 235, 1.1]], gente: [['gaucho', 100, 272, 1.1, { pose: 'sostiene', obj: 'mate' }], ['criolla', 205, 274, 1.05], ['nino', 270, 276, 1]] },
        { alt: 'El mate y la yerba de Misiones', cielo: 'dia', suelo: 'pasto', items: [['selva', 200, 205, 1.1], ['mate_grande', 300, 262, 1.2]], gente: [['indigena', 120, 270, 1.05, { pose: 'señala' }]] },
        { alt: 'Alfajores y dulce de leche', cielo: 'cocina', suelo: 'ninguno', items: [['alfajores', 200, 252, 2], ['cazuela', 330, 256, 1.2]], gente: [['cocinera', 85, 270, 1.05, { pose: 'señala' }]] },
        { alt: 'La vendimia y el Malbec', cielo: 'atardecer', suelo: 'pasto', items: [['aconcagua', 200, 195, .9], ['vinedo', 200, 252, 1]], gente: [['mendocino', 90, 272, 1.1, { pose: 'sostiene' }]] },
    ],

    tango: [
        { alt: 'El tango nace en el puerto', cielo: 'atardecer', suelo: 'calle', items: [['casas_boca', 220, 214, 1], ['barco', 70, 190, .6]], gente: [['tanguero', 140, 272, 1.1, { pose: 'abre' }], ['tanguera', 235, 272, 1.1, { flip: 1, pose: 'abre' }]] },
        { alt: 'El bandoneón', cielo: 'noche', suelo: 'piso', items: [['bandoneon_grande', 120, 262, 1.4], ['luna', 330, 60, .7]], gente: [['bandoneonista', 260, 272, 1.15]] },
        { alt: 'Carlos Gardel canta', cielo: 'noche', suelo: 'piso', items: [['escenario', 200, 240, 1.3], ['reflector', 70, 140, 1]], gente: [['gardel', 200, 262, 1.2]] },
        { alt: 'Una milonga porteña', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 70, 190, 1.1], ['musica', 330, 120, 1.4]], gente: [['tanguero', 150, 268, 1.1, { pose: 'abre' }], ['tanguera', 245, 268, 1.1, { flip: 1, pose: 'abre' }]] },
    ],

    'rock-folklore': [
        { alt: 'Mercedes Sosa y su voz', cielo: 'noche', suelo: 'piso', items: [['escenario', 200, 240, 1.2], ['reflector', 330, 140, 1]], gente: [['folklorista', 200, 262, 1.2]] },
        { alt: 'El Festival de Cosquín', cielo: 'noche', suelo: 'piso', items: [['escenario', 200, 240, 1.3], ['bombo', 80, 270, 1.2]], gente: [['folklorista', 190, 262, 1.1], ['gaucha', 300, 266, 1, { flip: 1 }]] },
        { alt: 'El rock nacional', cielo: 'noche', suelo: 'piso', items: [['escenario', 200, 240, 1.3], ['reflector', 70, 140, 1.1], ['reflector', 330, 140, 1.1]], gente: [['rockero', 150, 262, 1.1], ['rockero', 250, 262, 1.1, { flip: 1 }]] },
        { alt: 'Música en las plazas', cielo: 'dia', suelo: 'piedra', items: [['musica', 200, 120, 1.6]], gente: [['folklorista', 100, 272, 1.1], ['rockero', 300, 272, 1.1, { flip: 1 }]] },
    ],

    'zamba-chacarera': [
        { alt: 'La zamba con pañuelos', cielo: 'atardecer', suelo: 'pasto', items: [['montes', 200, 205, 1, { c: '#a9798a' }]], gente: [['gaucho', 130, 270, 1.15, { pose: 'arriba', obj: 'panuelo' }], ['bailarina_zamba', 265, 270, 1.15, { flip: 1 }]] },
        { alt: 'La chacarera en una peña', cielo: 'interior', suelo: 'ninguno', items: [['bombo', 80, 270, 1.3], ['ventana', 330, 190, 1.1]], gente: [['gaucho', 170, 266, 1.1, { pose: 'arriba' }], ['bailarina_zamba', 255, 268, 1.1, { flip: 1 }]] },
        { alt: 'Guitarra y bombo legüero', cielo: 'dia', suelo: 'pasto', items: [['bombo', 270, 268, 1.4]], gente: [['folklorista', 140, 272, 1.15]] },
        { alt: 'La zamba en la escuela', cielo: 'interior', suelo: 'piso', items: [['ventana', 330, 190, 1.1]], gente: [['nina', 140, 272, 1.1, { pose: 'abre', obj: 'panuelo' }], ['nino', 260, 272, 1.1, { flip: 1, pose: 'arriba' }]] },
    ],

    malambo: [
        { alt: 'El malambo, duelo de zapateo', cielo: 'atardecer', suelo: 'tierra', items: [['pampa', 200, 215, 1]], gente: [['malambista', 140, 272, 1.2, { pose: 'arriba' }], ['malambista', 265, 272, 1.2, { flip: 1, pose: 'arriba' }]] },
        { alt: 'El Festival de Malambo en Laborde', cielo: 'noche', suelo: 'piso', items: [['escenario', 200, 240, 1.3], ['reflector', 70, 140, 1]], gente: [['malambista', 200, 262, 1.2, { pose: 'dos' }]] },
        { alt: 'Tango de salón', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 70, 190, 1.1]], gente: [['tanguero', 170, 268, 1.15, { pose: 'abre' }], ['tanguera', 255, 268, 1.15, { flip: 1, pose: 'abre' }]] },
        { alt: 'El Mundial de Tango', cielo: 'noche', suelo: 'piso', items: [['trofeo', 330, 262, 1.2], ['reflector', 70, 140, 1]], gente: [['tanguero', 150, 266, 1.1], ['tanguera', 235, 266, 1.1, { flip: 1 }]] },
    ],

    quinquela: [
        { alt: 'Quinquela pinta el puerto', cielo: 'atardecer', suelo: 'calle', items: [['casas_boca', 230, 214, 1], ['caballete', 90, 262, 1.1]], gente: [['pintor_boca', 160, 272, 1.15, { pose: 'señala' }]] },
        { alt: 'Caminito, calle de colores', cielo: 'dia', suelo: 'calle', items: [['casas_boca', 200, 214, 1.15]], gente: [['tanguero', 90, 276, 1, { pose: 'abre' }], ['tanguera', 165, 276, 1, { flip: 1, pose: 'abre' }], ['nino', 320, 278, 1, { pose: 'arriba' }]] },
        { alt: 'Barcos y trabajadores del Riachuelo', cielo: 'humo', suelo: 'agua', items: [['barco', 130, 214, 1.1], ['humo', 250, 120, 1, { c: '#6a6a72' }]], gente: [['campesino', 320, 262, 1.05, { flip: 1, pose: 'arriba' }]] },
        { alt: 'Un museo para todos', cielo: 'interior', suelo: 'ninguno', items: [['cuadro', 130, 215, 1.4], ['cuadro', 270, 215, 1.2]], gente: [['nina', 200, 272, 1.05, { pose: 'señala' }]] },
    ],

    'teatro-colon': [
        { alt: 'El Teatro Colón', cielo: 'dia', suelo: 'piedra', items: [['teatro_colon', 205, 214, 1.15]], gente: [['dama', 90, 276, 1], ['nino', 320, 278, 1, { pose: 'arriba' }]] },
        { alt: 'La ópera en el escenario', cielo: 'noche', suelo: 'piso', items: [['escenario', 200, 240, 1.3], ['reflector', 70, 140, 1]], gente: [['dama', 190, 260, 1.15, { pose: 'arriba' }]] },
        { alt: 'Ballet en el Colón', cielo: 'noche', suelo: 'piso', items: [['escenario', 200, 240, 1.3]], gente: [['bailarina_zamba', 150, 262, 1.1, { pose: 'abre' }], ['bailarina_zamba', 250, 262, 1.1, { flip: 1, pose: 'abre' }]] },
        { alt: 'La avenida Corrientes de noche', cielo: 'noche', suelo: 'calle', items: [['edificio', 120, 210, 1], ['obelisco', 330, 262, .9]], gente: [['nino', 210, 278, 1.05, { pose: 'arriba' }]] },
    ],

    borges: [
        { alt: 'Borges y la biblioteca infinita', cielo: 'interior', suelo: 'ninguno', items: [['libros_borges', 120, 262, 1], ['libros_borges', 300, 262, .9]], gente: [['borges', 210, 266, 1.15, { pose: 'sostiene' }]] },
        { alt: 'El laberinto', cielo: 'interior', suelo: 'ninguno', items: [['laberinto_borges', 200, 258, 1.5]], gente: [['borges', 90, 268, 1.1, { pose: 'señala' }]] },
        { alt: 'El Aleph', cielo: 'noche', suelo: 'piso', items: [['luna_llena', 200, 120, 1.4]], gente: [['borges', 100, 268, 1.1, { pose: 'arriba' }], ['escritor', 310, 268, 1, { flip: 1 }]] },
        { alt: 'La Biblioteca Nacional', cielo: 'dia', suelo: 'piedra', items: [['edificio', 205, 214, 1.1], ['pila_libros', 80, 270, 1]], gente: [['borges', 300, 274, 1.1, { flip: 1, pose: 'señala' }]] },
    ],

    'martin-fierro-cortazar': [
        { alt: 'Martín Fierro en la pampa', cielo: 'atardecer', suelo: 'pasto', items: [['pampa', 200, 215, 1.1], ['caballo', 300, 262, 1.1]], gente: [['gaucho_poncho', 130, 272, 1.15, { pose: 'sostiene', obj: 'guitarra' }]] },
        { alt: 'Rayuela, una novela para jugar', cielo: 'dia', suelo: 'calle', items: [['libro_abierto', 300, 262, 2]], gente: [['nina', 150, 276, 1.1, { pose: 'arriba' }]] },
        { alt: 'Cortázar y sus cuentos fantásticos', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 70, 190, 1.1], ['pila_libros', 330, 266, 1]], gente: [['escritor', 190, 262, 1.15, { pose: 'señala' }]] },
        { alt: 'La Feria del Libro de Buenos Aires', cielo: 'interior', suelo: 'ninguno', items: [['estante', 90, 250, 1.1], ['estante', 330, 250, 1.1]], gente: [['nina', 185, 272, 1.05, { pose: 'sostiene' }], ['escritora', 255, 270, 1.05]], delante: [['pila_libros', 200, 290, .9]] },
    ],

    gaucho: [
        { alt: 'El gaucho y su caballo', cielo: 'atardecer', suelo: 'pasto', items: [['pampa', 200, 215, 1.1], ['caballo', 280, 262, 1.3]], gente: [['gaucho', 120, 272, 1.15, { pose: 'señala' }]] },
        { alt: 'El fogón y el mate', cielo: 'noche', suelo: 'pasto', items: [['luna', 70, 55, .8], ['fogon', 200, 262, 1.5]], gente: [['gaucho', 120, 272, 1.1, { pose: 'sostiene', obj: 'mate' }], ['gaucho_poncho', 290, 274, 1.1, { flip: 1, pose: 'sostiene', obj: 'guitarra' }]] },
        { alt: 'La estancia', cielo: 'dia', suelo: 'pasto', items: [['ranchito', 220, 238, 1.2], ['vaca', 80, 262, 1]], gente: [['gaucha', 330, 276, 1, { flip: 1 }]] },
        { alt: 'San Antonio de Areco y la Fiesta de la Tradición', cielo: 'dia', suelo: 'calle', items: [['iglesia', 305, 214, .8], ['caballo', 110, 262, 1.1]], gente: [['gaucho_poncho', 200, 272, 1.1, { pose: 'arriba' }], ['gaucha', 255, 276, 1]] },
    ],

    futbol: [
        { alt: 'Chicos juegan en el potrero', cielo: 'dia', suelo: 'tierra', items: [['arco', 330, 252, 1.2]], gente: [['nino', 110, 274, 1.1, { pose: 'corre', obj: 'pelota' }], ['nina', 200, 276, 1.05, { pose: 'arriba' }]] },
        { alt: 'Maradona y el Mundial de 1986', cielo: 'dia', suelo: 'pasto', items: [['estadio', 200, 214, 1.2]], gente: [['futbolista', 200, 270, 1.2, { pose: 'arriba', obj: 'copa' }]] },
        { alt: 'Messi campeón del mundo', cielo: 'noche', suelo: 'pasto', items: [['estadio', 200, 214, 1.2], ['fuegos', 200, 90, 1.2]], gente: [['futbolista', 150, 270, 1.2, { pose: 'arriba', obj: 'copa' }], ['futbolista', 260, 272, 1.1, { flip: 1, pose: 'dos' }]] },
        { alt: 'La hinchada argentina', cielo: 'noche', suelo: 'pasto', items: [['estadio', 200, 214, 1.3]], gente: [['hincha', 90, 276, 1.1], ['hincha', 200, 278, 1.1], ['hincha', 310, 276, 1.1]] },
    ],

    'carnaval-humahuaca': [
        { alt: 'La Quebrada de Humahuaca', cielo: 'dia', suelo: 'tierra', items: [['quebrada', 200, 222, 1.2]], gente: [['indigena_noroeste', 130, 274, 1.1, { pose: 'señala' }], ['salteño', 285, 274, 1.05, { flip: 1 }]] },
        { alt: 'El desentierro del diablo', cielo: 'atardecer', suelo: 'tierra', items: [['diablo_carnaval', 200, 262, 1.4], ['papel_picado', 200, 90, 1.2]], gente: [['indigena_noroeste', 90, 274, 1.1, { pose: 'arriba' }], ['salteño', 320, 276, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'La comparsa con quenas y bombos', cielo: 'dia', suelo: 'tierra', items: [['bombo', 90, 268, 1.2], ['papel_picado', 220, 90, 1.2]], gente: [['indigena_noroeste', 190, 274, 1.1, { pose: 'sostiene' }], ['salteño', 280, 274, 1.1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'La ofrenda a la Pachamama', cielo: 'dia', suelo: 'tierra', items: [['montes', 200, 205, 1, { c: '#c9693a' }], ['cazuela', 200, 266, 1.2]], gente: [['indigena_noroeste', 110, 274, 1.1, { pose: 'baja' }], ['indigena_noroeste', 300, 276, 1, { flip: 1 }]] },
    ],

    vendimia: [
        { alt: 'La cosecha de uva', cielo: 'dia', suelo: 'pasto', items: [['vinedo', 200, 252, 1.1], ['aconcagua', 200, 190, .8]], gente: [['mendocino', 100, 274, 1.1, { pose: 'arriba' }], ['campesina', 310, 276, 1, { flip: 1 }]] },
        { alt: 'La bendición de los frutos', cielo: 'dia', suelo: 'piedra', items: [['iglesia', 215, 214, 1.1], ['uvas', 90, 268, 1.4]], gente: [['cura', 310, 270, 1.05, { flip: 1, pose: 'arriba' }]] },
        { alt: 'El desfile de carros', cielo: 'dia', suelo: 'calle', items: [['carroza_flores', 200, 262, 1.5], ['uvas', 330, 266, 1.1]], gente: [['reina_vendimia', 90, 274, 1.1, { pose: 'abre' }]] },
        { alt: 'La Reina de la Vendimia en el Teatro Griego', cielo: 'noche', suelo: 'piso', items: [['escenario', 200, 240, 1.3], ['fuegos', 200, 90, 1.2]], gente: [['reina_vendimia', 200, 262, 1.2, { pose: 'abre' }]] },
    ],

    'traje-gaucho': [
        { alt: 'El sombrero y el pañuelo del gaucho', cielo: 'dia', suelo: 'pasto', items: [['sombrero_gaucho_suelo', 320, 270, 1.8], ['pampa', 200, 215, 1]], gente: [['gaucho', 140, 272, 1.2, { pose: 'señala' }]] },
        { alt: 'La bombacha y la faja', cielo: 'dia', suelo: 'pasto', items: [['pampa', 200, 215, 1]], gente: [['gaucho', 120, 272, 1.2], ['malambista', 270, 272, 1.2, { flip: 1 }]] },
        { alt: 'El poncho contra el frío', cielo: 'humo', suelo: 'pasto', items: [['pampa', 200, 215, 1.1], ['lluvia', 200, 40, 1.4]], gente: [['gaucho_poncho', 200, 274, 1.2, { pose: 'baja' }]] },
        { alt: 'El día de la Tradición', cielo: 'dia', suelo: 'calle', items: [['caballo', 110, 262, 1.1], ['bandera_pampa', 330, 262, 1]], gente: [['gaucho', 220, 272, 1.1, { pose: 'arriba' }], ['gaucha', 280, 276, 1]] },
    ],

    'poncho-norte': [
        { alt: 'El poncho de lana en la montaña', cielo: 'dia', suelo: 'tierra', items: [['quebrada', 200, 222, 1.1]], gente: [['indigena_noroeste', 150, 274, 1.15, { pose: 'sostiene' }]] },
        { alt: 'Los Gauchos de Güemes con poncho rojo', cielo: 'atardecer', suelo: 'tierra', items: [['montes', 200, 205, 1, { c: '#a9798a' }], ['caballo', 120, 262, 1.1]], gente: [['salteño', 240, 272, 1.15, { pose: 'arriba' }], ['salteño', 320, 276, 1, { flip: 1 }]] },
        { alt: 'Tejiendo con lana de llama', cielo: 'dia', suelo: 'tierra', items: [['telar', 270, 260, 1.2], ['guanaco', 90, 268, 1]], gente: [['indigena_noroeste', 190, 274, 1.05, { pose: 'sostiene' }]] },
        { alt: 'Los colores del norte', cielo: 'dia', suelo: 'tierra', items: [['quebrada', 200, 222, 1.1]], gente: [['indigena_noroeste', 100, 274, 1.1], ['salteño', 200, 274, 1.1], ['indigena_noroeste', 300, 276, 1, { flip: 1 }]] },
    ],

    'buenos-aires-monumentos': [
        { alt: 'El Obelisco', cielo: 'dia', suelo: 'calle', items: [['obelisco', 210, 262, 1.4], ['edificio', 70, 210, .8]], gente: [['nina', 320, 278, 1.05, { flip: 1, pose: 'arriba' }]] },
        { alt: 'La Plaza de Mayo y la Casa Rosada', cielo: 'dia', suelo: 'piedra', items: [['casa_rosada', 210, 214, 1.1]], gente: [['dama', 90, 276, 1], ['nino', 320, 278, 1, { flip: 1, pose: 'señala' }]] },
        { alt: 'El Cabildo de Buenos Aires', cielo: 'dia', suelo: 'piedra', items: [['cabildo', 210, 214, 1.2]], gente: [['virrey', 90, 272, 1, { pose: 'señala' }], ['criolla', 320, 276, 1, { flip: 1 }]] },
        { alt: 'El Monumento a la Bandera en Rosario', cielo: 'dia', suelo: 'pasto', items: [['monumento_bandera', 200, 262, 1.5], ['rio', 330, 205, .8]], gente: [['belgrano', 100, 274, 1.1, { pose: 'arriba', obj: 'bandera_arg' }]] },
    ],

    'iguazu-glaciares': [
        { alt: 'La Garganta del Diablo', cielo: 'dia', suelo: 'pasto', items: [['cataratas', 200, 240, 1.3], ['selva', 330, 205, .8]], gente: [['nina', 80, 276, 1.05, { pose: 'señala' }]] },
        { alt: 'El glaciar Perito Moreno', cielo: 'dia', suelo: 'agua', items: [['glaciar', 200, 214, 1.3]], gente: [['guia_glaciar', 320, 266, 1.05, { flip: 1, pose: 'señala' }]] },
        { alt: 'Las ballenas de Península Valdés', cielo: 'atardecer', suelo: 'agua', items: [['ballena_franca', 190, 232, 1.2], ['pinguino', 340, 262, 1]], gente: [['nino', 70, 262, 1, { pose: 'arriba' }]] },
        { alt: 'Ushuaia, el fin del mundo', cielo: 'dia', suelo: 'agua', items: [['montes', 200, 195, 1.2, { c: '#a8bcd8' }], ['barco', 120, 220, .9], ['pinguino', 320, 262, 1.1]], gente: [['guia_glaciar', 250, 270, 1.05, { pose: 'señala' }]] },
    ],
};
