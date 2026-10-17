// Escenas ilustradas de las historietas de México: 4 por tema (una por cada idea clave).
// La portada y el cierre se arman solos con la primera y la última escena más un niño explorador.
// Formato: { cielo, suelo, items:[[objeto,x,y,escala,opciones]], gente:[[rol,x,y,escala,opciones]], delante:[...] }
window.VINETAS = {

    prehispanica: [
        { alt: 'Cabeza olmeca en la selva', cielo: 'dia', suelo: 'tierra', items: [['selva', 200, 208, 1.1], ['cabeza_olmeca', 205, 240, 1.35]], gente: [['campesino', 78, 266, 1, { pose: 'señala' }], ['sacerdote', 335, 266, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'Astrónomo maya observando las estrellas', cielo: 'noche', suelo: 'piedra', items: [['luna', 330, 60, .8], ['caracol', 215, 218, 1.5]], gente: [['astronomo', 80, 268, 1.05, { pose: 'señala' }], ['rey_maya', 340, 268, 1.05, { flip: 1 }]] },
        { alt: 'Pirámides de Teotihuacán', cielo: 'dia', suelo: 'tierra', items: [['montes', 200, 205, 1.1, { c: '#9aa8c4' }], ['piramide_sol', 205, 222, 1]], gente: [['sacerdote', 70, 272, 1], ['mujer_huipil', 335, 272, 1, { flip: 1 }]] },
        { alt: 'Tenochtitlán sobre el lago', cielo: 'atardecer', suelo: 'agua', items: [['montes', 200, 195, 1, { c: '#7c6aa8' }], ['templo_mayor', 200, 214, .9], ['aguila_nopal', 335, 236, .8], ['canoa', 75, 270, 1]], gente: [['guerrero', 78, 252, .9, { pose: 'baja' }]] },
    ],

    conquista: [
        { alt: 'Los barcos españoles llegan a la costa', cielo: 'dia', suelo: 'arena', items: [['rio', 200, 200, 1.1], ['barco', 120, 214, 1.1], ['palmeras', 355, 240, 1.1]], gente: [['conquistador', 270, 268, 1.05, { pose: 'baja' }]] },
        { alt: 'Una alianza entre españoles y tlaxcaltecas', cielo: 'dia', suelo: 'pasto', items: [['montes', 200, 205, 1.1], ['volcan', 60, 208, .7]], gente: [['conquistador', 150, 266, 1.1, { pose: 'señala', obj: null }], ['tlaxcalteca', 250, 266, 1.1, { flip: 1, pose: 'señala' }]] },
        { alt: 'Cae Tenochtitlán', cielo: 'humo', suelo: 'piedra', items: [['templo_mayor', 205, 208, 1.1], ['humo', 110, 140, 1.2, { c: '#3a3340' }], ['fuego', 305, 214, 1.3], ['fuego', 70, 222, 1]], gente: [['cuauhtemoc', 110, 270, 1.05], ['conquistador', 300, 270, 1.05, { flip: 1 }]] },
        { alt: 'La Ciudad de México en la Nueva España', cielo: 'dia', suelo: 'piedra', items: [['catedral', 160, 212, .95], ['ciudad_colonial', 340, 210, .55]], gente: [['virrey', 70, 270, 1.05, { pose: 'señala' }], ['monja', 250, 272, 1, { flip: 1 }], ['mestiza', 305, 274, .95, { flip: 1 }]] },
    ],

    independencia: [
        { alt: 'El Grito de Dolores', cielo: 'atardecer', suelo: 'piedra', items: [['iglesia', 215, 214, 1.2]], gente: [['cura', 105, 270, 1.05, { pose: 'arriba', obj: 'campana' }], ['campesino', 300, 272, 1, { flip: 1, pose: 'arriba' }], ['campesina', 350, 276, .95, { flip: 1 }], ['campesino', 40, 276, .95]] },
        { alt: 'Los héroes de la Independencia', cielo: 'dia', suelo: 'pasto', items: [['montes', 200, 205, 1.1], ['bandera', 295, 238, 1]], gente: [['insurgente', 80, 270, 1.05, { pose: 'arriba' }], ['mestiza', 165, 272, 1.05], ['cura', 245, 270, 1.05, { pose: 'señala' }]] },
        { alt: 'La firma del Plan de Iguala', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 70, 190, 1.1], ['ventana', 330, 190, 1.1]], gente: [['insurgente', 105, 262, 1.05, { pose: 'señala' }], ['soldado', 295, 262, 1.05, { flip: 1, pose: 'señala' }]], delante: [['mesa', 200, 286, 1.35, { w: 80 }], ['documento', 200, 242, 1.3]] },
        { alt: 'El Ejército Trigarante entra a la ciudad', cielo: 'dia', suelo: 'calle', items: [['catedral', 305, 212, .8], ['canon', 70, 262, 1.1]], gente: [['soldado', 150, 268, 1.05], ['soldado', 205, 274, 1.05], ['insurgente', 255, 268, 1.05, { pose: 'arriba', obj: 'bandera' }]] },
    ],

    revolucion: [
        { alt: 'Madero llama a levantarse', cielo: 'dia', suelo: 'tierra', items: [['pancarta', 200, 240, 1.2, { texto: 'SUFRAGIO EFECTIVO', texto2: 'NO REELECCIÓN', fs: 10 }]], gente: [['revolucionario', 100, 272, 1.05, { pose: 'arriba' }], ['revolucionario', 300, 272, 1.05, { flip: 1, pose: 'arriba' }], ['soldadera', 45, 280, .95]] },
        { alt: 'Zapata y los campesinos', cielo: 'atardecer', suelo: 'pasto', items: [['montes', 200, 205, 1.1], ['milpa', 205, 232, .8], ['pancarta', 335, 250, .75, { texto: 'TIERRA', texto2: 'Y LIBERTAD', fs: 14 }]], gente: [['revolucionario', 140, 272, 1.1, { pose: 'arriba' }], ['campesina', 235, 276, 1], ['campesino', 70, 278, .95]] },
        { alt: 'Pancho Villa a caballo', cielo: 'dia', suelo: 'tierra', items: [['montes', 200, 205, 1.1, { c: '#c28f60' }], ['caballo', 205, 262, 1.4, { c: '#5a3a24' }]], gente: [['revolucionario', 195, 218, .85, { pose: 'arriba' }], ['soldadera', 335, 272, 1, { flip: 1 }]] },
        { alt: 'La Constitución de 1917', cielo: 'interior', suelo: 'ninguno', items: [['bandera', 295, 262, 1.1], ['ventana', 75, 190, 1.1]], gente: [['escritor', 130, 262, 1.1, { pose: 'señala' }], ['soldadera', 270, 266, 1, { flip: 1 }]], delante: [['mesa', 200, 292, 1.3, { w: 70 }], ['documento', 200, 248, 1.4]] },
    ],

    mestizaje: [
        { alt: 'Mujer indígena con maíz', cielo: 'dia', suelo: 'pasto', items: [['piramide', 335, 208, .55], ['maiz', 75, 242, 1.3]], gente: [['mujer_huipil', 205, 272, 1.15, { pose: 'sostiene', obj: 'cesta' }]] },
        { alt: 'La herencia española', cielo: 'dia', suelo: 'piedra', items: [['iglesia', 275, 212, .95]], gente: [['conquistador', 95, 272, 1.05], ['dama', 185, 274, 1.05, { pose: 'abre' }]] },
        { alt: 'La herencia africana', cielo: 'atardecer', suelo: 'arena', items: [['palmeras', 65, 236, 1.2], ['palmeras', 345, 240, 1.1], ['tambor', 155, 274, 1.2]], gente: [['africano', 235, 270, 1.1, { pose: 'arriba' }]] },
        { alt: 'Un cuadro de castas', cielo: 'interior', suelo: 'ninguno', items: [['cuadro', 200, 212, 1.8, { familia: 1 }]], gente: [['pintora', 90, 266, 1.05, { pose: 'sostiene', obj: 'pincel' }], ['artista', 315, 266, 1.05, { flip: 1, pose: 'señala' }]] },
    ],

    pueblos: [
        { alt: 'Conversación en una lengua indígena', cielo: 'dia', suelo: 'tierra', items: [['letrero', 200, 214, 1.1, { texto: 'chocolate', w: 62, fs: 13 }]], gente: [['mujer_huipil', 95, 272, 1.1, { pose: 'abre' }], ['campesino', 310, 272, 1.1, { flip: 1, pose: 'señala' }]] },
        { alt: 'Corredores rarámuri en la sierra', cielo: 'dia', suelo: 'tierra', items: [['montes', 200, 208, 1.4, { c: '#c58a5a' }]], gente: [['corredor', 140, 270, 1.1, { pose: 'corre' }], ['corredor', 265, 258, .9, { pose: 'corre' }]] },
        { alt: 'Arte huichol con chaquira y estambre', cielo: 'dia', suelo: 'tierra', items: [['huipil', 105, 238, 1.3, { c: '#fbf6ea' }], ['estrella', 330, 90, 1.5, { c: '#e8467c' }], ['estrella', 70, 70, 1.2, { c: '#2a8ad8' }]], gente: [['tejedora', 255, 274, 1.15]] },
        { alt: 'Palabras que vienen del náhuatl', cielo: 'cocina', suelo: 'ninguno', gente: [['cocinera', 200, 258, 1.05, { pose: 'abre' }]], delante: [['mesa', 200, 292, 1.7, { w: 80 }], ['frutas', 145, 246, 1.3], ['cacao', 258, 246, 1.1]] },
    ],

    'maiz-tacos': [
        { alt: 'La milpa', cielo: 'dia', suelo: 'pasto', items: [['milpa', 200, 238, 1.1]], gente: [['campesino', 100, 276, 1.15, { pose: 'arriba' }], ['campesina', 320, 278, 1.1, { flip: 1 }]] },
        { alt: 'Haciendo tortillas en el comal', cielo: 'cocina', suelo: 'ninguno', items: [['comal', 255, 262, 1.5]], gente: [['cocinera', 120, 266, 1.15, { pose: 'señala' }]], delante: [['tortillas', 60, 278, 1.2]] },
        { alt: 'Un puesto de tacos', cielo: 'dia', suelo: 'calle', items: [['puesto', 195, 224, 1.4]], gente: [['taquero', 195, 226, 1, { pose: 'arriba' }], ['campesino', 335, 276, 1.05, { flip: 1, obj: 'tortilla', pose: 'sostiene' }]], delante: [['mostrador', 195, 224, 1.4]] },
        { alt: 'La cocina mexicana, patrimonio de la humanidad', cielo: 'interior', suelo: 'ninguno', gente: [['cocinera', 125, 258, 1.1, { pose: 'arriba' }], ['taquero', 285, 258, 1.1, { flip: 1 }]], delante: [['mesa', 200, 294, 1.7, { w: 80 }], ['cazuela', 150, 254, .9], ['trofeo', 205, 254, 1], ['frutas', 255, 254, 1]] },
    ],

    mole: [
        { alt: 'El mole y los chiles', cielo: 'cocina', suelo: 'ninguno', gente: [['cocinera', 200, 258, 1.1, { pose: 'sostiene', obj: 'cazo' }]], delante: [['mesa', 200, 294, 1.8, { w: 85 }], ['cazuela', 130, 250, 1.1], ['chiles', 275, 250, 1.4]] },
        { alt: 'El cacao', cielo: 'dia', suelo: 'pasto', items: [['selva', 200, 208, 1.2], ['cacao', 110, 272, 1.5]], gente: [['mujer_huipil', 260, 274, 1.1, { pose: 'sostiene', obj: 'cesta' }]] },
        { alt: 'El mole en el convento', cielo: 'cocina', suelo: 'ninguno', items: [['cazuela', 285, 266, 1.3], ['fuego', 285, 274, .8]], gente: [['monja', 165, 270, 1.15, { pose: 'sostiene', obj: 'cazo' }]] },
        { alt: 'El mole en las fiestas', cielo: 'atardecer', suelo: 'piedra', items: [['papel_picado', 200, 50, 1.3]], gente: [['campesina', 80, 272, 1.1], ['campesino', 320, 272, 1.1, { flip: 1 }], ['nina', 215, 266, .9]], delante: [['mesa', 200, 292, 1.4, { w: 70 }], ['cazuela', 200, 248, .9]] },
    ],

    mariachi: [
        { alt: 'Un mariachi con sus instrumentos', cielo: 'atardecer', suelo: 'piedra', items: [['musica', 200, 130, 1.3]], gente: [['mariachi', 105, 272, 1.05, { obj: 'violin', pose: 'sostiene' }], ['mariachi', 200, 272, 1.05, { obj: 'trompeta', pose: 'sostiene' }], ['mariachi', 295, 272, 1.05, { flip: 1, obj: 'guitarra', pose: 'sostiene' }]] },
        { alt: 'Jalisco, tierra del mariachi', cielo: 'dia', suelo: 'tierra', items: [['montes', 200, 205, 1.1], ['agave', 60, 238, 1.2], ['agave', 120, 252, 1], ['agave', 340, 240, 1.2]], gente: [['mariachi', 215, 272, 1.15, { obj: 'guitarra', pose: 'sostiene' }]] },
        { alt: 'El mariachi en el cine', cielo: 'interior', suelo: 'ninguno', items: [['pantalla', 200, 212, 1.5]], gente: [['charro', 70, 270, 1.05, { pose: 'señala' }], ['dama', 335, 272, 1.05, { flip: 1 }]] },
        { alt: 'El mariachi, patrimonio de la humanidad', cielo: 'interior', suelo: 'ninguno', items: [['escenario', 200, 262, 1.3], ['trofeo', 345, 270, 1.3]], gente: [['mariachi', 150, 262, 1, { obj: 'trompeta', pose: 'sostiene' }], ['mariachi', 250, 262, 1, { flip: 1, obj: 'violin', pose: 'sostiene' }]] },
    ],

    'son-jarocho': [
        { alt: 'La jarana', cielo: 'dia', suelo: 'arena', items: [['palmeras', 70, 236, 1.2], ['palmeras', 340, 240, 1.15]], gente: [['jarocho', 205, 272, 1.15, { obj: 'jarana', pose: 'sostiene' }]] },
        { alt: 'La tarima', cielo: 'atardecer', suelo: 'arena', items: [['palmeras', 55, 236, 1.1], ['tarima', 205, 270, 1.6]], gente: [['jarocha', 205, 248, 1.1, { pose: 'abre' }], ['jarocho', 315, 276, 1, { flip: 1, obj: 'jarana', pose: 'sostiene' }]] },
        { alt: 'Versos improvisados', cielo: 'noche', suelo: 'arena', items: [['luna_llena', 330, 70, 1], ['musica', 110, 130, 1.1]], gente: [['jarocho', 150, 272, 1.15, { pose: 'arriba' }], ['jarocha', 265, 274, 1.05]] },
        { alt: 'La Bamba', cielo: 'atardecer', suelo: 'arena', items: [['letrero', 200, 120, 1.3, { texto: 'La Bamba', w: 70, fs: 18 }], ['tarima', 205, 272, 1.5]], gente: [['jarocho', 140, 252, 1.05, { pose: 'arriba' }], ['jarocha', 270, 252, 1.05, { flip: 1, pose: 'abre' }]] },
    ],

    'jarabe-tapatio': [
        { alt: 'El baile nacional', cielo: 'dia', suelo: 'piso', items: [['bandera', 55, 264, 1.1]], gente: [['charro', 160, 272, 1.1, { pose: 'arriba' }], ['china', 265, 272, 1.1, { flip: 1, pose: 'abre' }]] },
        { alt: 'El cortejo', cielo: 'atardecer', suelo: 'pasto', items: [['arbol', 60, 232, 1.2], ['corazon', 205, 130, 2.2]], gente: [['charro', 150, 274, 1.1, { pose: 'señala' }], ['china', 260, 274, 1.1, { flip: 1 }]] },
        { alt: 'El zapateado', cielo: 'dia', suelo: 'piso', items: [['tarima', 205, 272, 1.5]], gente: [['charro', 205, 250, 1.15, { pose: 'abre' }], ['china', 320, 276, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'El sombrero al final del baile', cielo: 'atardecer', suelo: 'piso', items: [['sombrero_suelo', 205, 276, 1.3]], gente: [['china', 135, 272, 1.15, { pose: 'abre' }], ['charro', 295, 272, 1.1, { flip: 1, pose: 'señala' }]] },
    ],

    voladores: [
        { alt: 'El árbol sagrado', cielo: 'dia', suelo: 'pasto', items: [['selva', 200, 205, 1.2], ['poste', 205, 262, 1, { alto: 150 }]], gente: [['campesino', 100, 274, 1.1, { pose: 'señala' }], ['anciano', 315, 274, 1.1, { flip: 1 }]] },
        { alt: 'El músico en lo alto del poste', cielo: 'dia', suelo: 'pasto', items: [['nubes', 90, 45, .9], ['poste', 205, 266, 1, { alto: 190 }]], gente: [['voladora', 205, 78, .6, { obj: 'flauta', pose: 'sostiene' }], ['campesina', 80, 278, 1]] },
        { alt: 'Los cuatro voladores', cielo: 'dia', suelo: 'pasto', items: [['poste', 205, 266, 1, { alto: 190 }]], gente: [['voladora', 120, 70, .6, { rot: 150 }], ['voladora', 290, 70, .6, { rot: -150, flip: 1 }], ['voladora', 150, 120, .6, { rot: 170 }], ['voladora', 262, 120, .6, { rot: -170, flip: 1 }], ['campesino', 60, 280, 1]] },
        { alt: 'El ritual para pedir lluvia', cielo: 'gris', suelo: 'pasto', items: [['nubes', 100, 55, 1.1, { c: '#aab4c4' }], ['nubes', 300, 70, 1, { c: '#aab4c4' }], ['lluvia', 200, 90, 1.5], ['poste', 205, 262, 1, { alto: 150 }]], gente: [['anciano', 90, 276, 1.1, { pose: 'arriba' }], ['campesina', 320, 278, 1.05, { flip: 1 }]] },
    ],

    muralismo: [
        { alt: 'Un pintor trabajando en un mural', cielo: 'interior', suelo: 'ninguno', items: [['mural', 215, 214, 1.1]], gente: [['artista', 95, 274, 1.1, { pose: 'arriba', obj: 'pincel' }]] },
        { alt: 'Rivera, Orozco y Siqueiros', cielo: 'interior', suelo: 'ninguno', items: [['mural', 200, 202, .8]], gente: [['artista', 105, 274, 1.1, { ropa: '#d8362f' }], ['artista', 200, 276, 1.1, { ropa: '#2f8f45' }], ['artista', 295, 274, 1.1, { ropa: '#c9a24a', flip: 1 }]] },
        { alt: 'El mural en el Palacio Nacional', cielo: 'dia', suelo: 'piedra', items: [['edificio', 205, 212, 1.3]], gente: [['artista', 95, 276, 1.05, { pose: 'señala' }], ['campesino', 315, 276, 1, { flip: 1 }]] },
        { alt: 'El pueblo mira el mural', cielo: 'interior', suelo: 'ninguno', items: [['mural', 200, 202, 1.15]], gente: [['campesino', 95, 278, 1], ['campesina', 190, 282, 1], ['nina', 285, 278, .9], ['campesino', 345, 278, 1, { flip: 1 }]] },
    ],

    frida: [
        { alt: 'La Casa Azul de Coyoacán', cielo: 'dia', suelo: 'pasto', items: [['casa_azul', 190, 220, 1.35]], gente: [['frida', 335, 276, 1.05, { flip: 1, pose: 'abre' }]] },
        { alt: 'Frida pintando su autorretrato', cielo: 'interior', suelo: 'ninguno', items: [['caballete', 255, 232, 1.5, { retrato: 1 }]], gente: [['frida', 130, 266, 1.15, { pose: 'sostiene', obj: 'pincel' }]] },
        { alt: 'Flores y animales del arte popular', cielo: 'dia', suelo: 'pasto', items: [['cempasuchil', 70, 262, 1.3], ['cempasuchil', 340, 270, 1.2], ['alebrije', 315, 262, .8, { p: ['#2fcf8f', '#ff5d7a', '#ffd34a', '#5ad1ff', '#9b5de5'] }]], gente: [['frida', 190, 272, 1.15, { pose: 'abre' }]] },
        { alt: 'Frida pintando desde la cama', cielo: 'interior', suelo: 'ninguno', items: [['cama_frida', 205, 268, 1.35], ['caballete', 335, 266, .9, { retrato: 1 }]] },
    ],

    'sor-juana': [
        { alt: 'La niña que quería aprender', cielo: 'dia', suelo: 'pasto', items: [['arbol', 70, 232, 1.2], ['arbol', 335, 235, 1.1]], gente: [['nina', 205, 274, 1.15, { pose: 'sostiene', obj: 'libro' }]] },
        { alt: 'La biblioteca del convento', cielo: 'interior', suelo: 'ninguno', items: [['estante', 255, 214, 1.3], ['pila_libros', 80, 272, 1.2]], gente: [['monja', 150, 270, 1.15, { pose: 'sostiene', obj: 'libro' }]] },
        { alt: 'Sor Juana escribiendo', cielo: 'interior', suelo: 'ninguno', items: [['estante', 75, 214, 1.1]], gente: [['monja', 215, 254, 1.15, { pose: 'sostiene', obj: 'pluma' }]], delante: [['escritorio', 215, 290, 1.6]] },
        { alt: 'El derecho a estudiar', cielo: 'interior', suelo: 'ninguno', items: [['estante', 330, 214, 1.1]], gente: [['monja', 140, 270, 1.15, { pose: 'arriba' }], ['nina', 245, 276, .95, { pose: 'sostiene', obj: 'libro' }]] },
    ],

    'octavio-paz': [
        { alt: 'El Premio Nobel', cielo: 'interior', suelo: 'ninguno', items: [['nobel_podio', 250, 270, 1.5]], gente: [['escritor', 110, 270, 1.15, { pose: 'arriba' }]] },
        { alt: 'El laberinto de la soledad', cielo: 'dia', suelo: 'pasto', items: [['laberinto', 175, 252, 1.5]], gente: [['escritor', 320, 276, 1.1, { flip: 1, pose: 'señala' }]] },
        { alt: 'Comala, el pueblo de los muertos', cielo: 'noche', suelo: 'tierra', items: [['luna_llena', 320, 66, 1.1], ['iglesia', 245, 216, .95]], gente: [['campesino', 100, 274, 1.1], ['catrina', 335, 276, 1.05, { flip: 1, pose: 'arriba' }]] },
        { alt: 'Escritores de México', cielo: 'interior', suelo: 'ninguno', items: [['estante', 335, 214, 1.1], ['pila_libros', 60, 274, 1.2]], gente: [['escritora', 135, 272, 1.1, { pose: 'sostiene', obj: 'libro' }], ['escritor', 215, 274, 1.1], ['escritora', 285, 272, 1.05, { flip: 1, pose: 'sostiene', obj: 'pluma' }]] },
    ],

    charreria: [
        { alt: 'La hacienda', cielo: 'atardecer', suelo: 'pasto', items: [['montes', 200, 205, 1.1], ['arbol', 345, 232, 1.2], ['caballo', 150, 262, 1.3]], gente: [['charro', 265, 276, 1.1, { pose: 'señala' }]] },
        { alt: 'El lazo', cielo: 'dia', suelo: 'tierra', items: [['arbol', 60, 230, 1.1], ['caballo', 195, 262, 1.3, { c: '#3a2a20' }]], gente: [['charro', 190, 220, .85, { pose: 'arriba', obj: 'lazo' }]] },
        { alt: 'La escaramuza', cielo: 'dia', suelo: 'tierra', items: [['caballo', 115, 262, 1.15, { c: '#a8653a' }], ['caballo', 285, 262, 1.15, { c: '#e8d8c0', flip: 1 }]], gente: [['charra', 110, 222, .8, { pose: 'arriba' }], ['charra', 290, 222, .8, { pose: 'arriba', flip: 1 }]] },
        { alt: 'La charrería, patrimonio de la humanidad', cielo: 'dia', suelo: 'pasto', items: [['trofeo', 315, 272, 1.6]], gente: [['charro', 125, 274, 1.15, { pose: 'arriba' }], ['charra', 215, 278, 1.05]] },
    ],

    alebrijes: [
        { alt: 'El sueño de Pedro Linares', cielo: 'interior', suelo: 'ninguno', items: [['cama', 130, 268, 1.3], ['sueno', 295, 140, 1.2], ['alebrije', 295, 150, .5]] },
        { alt: 'Alebrijes de colores', cielo: 'dia', suelo: 'pasto', items: [['alebrije', 105, 266, 1.2], ['alebrije', 275, 268, 1.35, { p: ['#5ad1ff', '#ff5d7a', '#9b5de5', '#ffd34a', '#2fcf8f'] }], ['alebrije', 200, 238, .65, { p: ['#ffd34a', '#9b5de5', '#2fcf8f', '#ff5d7a', '#5ad1ff'] }]] },
        { alt: 'Tallando un alebrije en Oaxaca', cielo: 'dia', suelo: 'tierra', items: [['alebrije', 290, 268, 1.1, { p: ['#ff9b3d', '#2fcf8f', '#5ad1ff', '#ff5d7a', '#9b5de5'] }], ['banco', 130, 276, 1.2]], gente: [['campesino', 135, 252, 1.1, { pose: 'sostiene' }]] },
        { alt: 'El gran desfile de alebrijes', cielo: 'noche', suelo: 'calle', items: [['alebrije', 105, 258, 1.7], ['alebrije', 305, 258, 1.6, { p: ['#5ad1ff', '#ffd34a', '#ff5d7a', '#2fcf8f', '#9b5de5'] }]], gente: [['nina', 205, 276, .95, { pose: 'arriba' }]] },
    ],

    'dia-muertos': [
        { alt: 'La ofrenda', cielo: 'interior', suelo: 'ninguno', items: [['papel_picado', 200, 40, 1.3], ['ofrenda', 205, 276, 1.55]] },
        { alt: 'El camino de cempasúchil', cielo: 'noche', suelo: 'tierra', items: [['luna_llena', 60, 60, 1], ['ofrenda', 320, 226, .7], ['camino_flores', 160, 262, 1.2]], gente: [['mujer_huipil', 110, 270, 1.1, { pose: 'sostiene', obj: 'cesta' }]] },
        { alt: 'Pan de muerto y calaveritas', cielo: 'cocina', suelo: 'ninguno', gente: [['cocinera', 135, 260, 1.1, { pose: 'arriba' }], ['nina', 275, 268, .95]], delante: [['mesa', 200, 294, 1.7, { w: 80 }], ['pan_muerto', 160, 250, 1.4], ['calaveras', 245, 250, 1.4]] },
        { alt: 'La Catrina en el panteón', cielo: 'noche', suelo: 'pasto', items: [['luna_llena', 330, 62, 1], ['cempasuchil', 70, 268, 1.2], ['vela', 120, 276, 1], ['vela', 290, 278, 1]], gente: [['catrina', 205, 274, 1.2, { pose: 'abre' }], ['campesina', 100, 280, 1], ['nino', 320, 280, .95, { flip: 1 }]] },
    ],

    guelaguetza: [
        { alt: 'El auditorio del Cerro del Fortín', cielo: 'dia', suelo: 'pasto', items: [['auditorio', 200, 232, 1.55]] },
        { alt: 'La Danza de la Pluma', cielo: 'dia', suelo: 'piedra', gente: [['guerrero', 120, 272, 1.15, { pose: 'arriba' }], ['guerrero', 215, 276, 1.15, { pose: 'arriba', flip: 1 }], ['bailarina_pluma', 310, 272, 1.1, { pose: 'abre' }]] },
        { alt: 'La Flor de Piña', cielo: 'atardecer', suelo: 'piedra', gente: [['bailarina', 135, 272, 1.15, { pose: 'arriba', obj: 'piña' }], ['bailarina', 265, 274, 1.15, { pose: 'arriba', obj: 'piña', flip: 1 }]] },
        { alt: 'Regalos para el público', cielo: 'dia', suelo: 'piedra', items: [['auditorio', 250, 222, .8]], gente: [['tehuana', 115, 274, 1.15, { pose: 'arriba', obj: 'pan' }], ['nina', 215, 280, .95, { pose: 'arriba' }], ['campesino', 335, 280, 1, { flip: 1, pose: 'arriba' }]] },
    ],

    huipil: [
        { alt: 'Tejiendo en telar de cintura', cielo: 'dia', suelo: 'pasto', items: [['arbol', 70, 232, 1.4], ['telar', 215, 270, 1.5]], gente: [['tejedora', 320, 276, 1.1, { flip: 1 }]] },
        { alt: 'Colores de la naturaleza', cielo: 'dia', suelo: 'tierra', items: [['nopal', 335, 240, 1], ['tinte', 205, 270, 1.6]], gente: [['mujer_huipil', 95, 276, 1.15, { pose: 'señala' }]] },
        { alt: 'Bordados del huipil', cielo: 'dia', suelo: 'tierra', items: [['huipil', 100, 246, 1.35, { c: '#fbf6ea' }], ['huipil', 310, 246, 1.35, { c: '#fcefd0' }]], gente: [['tejedora', 205, 278, 1.1, { pose: 'sostiene' }]] },
        { alt: 'Cada huipil tiene su pueblo', cielo: 'dia', suelo: 'pasto', gente: [['mujer_huipil', 85, 274, 1.1], ['tehuana', 200, 276, 1.15], ['campesina', 320, 274, 1.1, { flip: 1 }]] },
    ],

    'china-poblana': [
        { alt: 'La china poblana', cielo: 'dia', suelo: 'piedra', items: [['iglesia', 305, 212, .85]], gente: [['china', 165, 274, 1.25, { pose: 'abre' }]] },
        { alt: 'El traje de charro', cielo: 'dia', suelo: 'pasto', items: [['arbol', 335, 232, 1.2], ['sombrero_suelo', 95, 280, 1]], gente: [['charro', 205, 276, 1.25, { pose: 'arriba' }]] },
        { alt: 'El galeón de Manila', cielo: 'dia', suelo: 'agua', items: [['barco', 205, 252, 1.7]], gente: [['dama', 200, 220, .7, { pose: 'abre' }]] },
        { alt: 'Trajes de cada región', cielo: 'dia', suelo: 'pasto', gente: [['tehuana', 85, 276, 1.15], ['jarocha', 200, 278, 1.15, { pose: 'abre' }], ['china', 320, 276, 1.15, { flip: 1 }]] },
    ],

    'chichen-itza': [
        { alt: 'La pirámide de Kukulkán', cielo: 'dia', suelo: 'tierra', items: [['selva', 200, 205, 1.2], ['castillo', 205, 224, 1.25]], gente: [['nina', 330, 280, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'La serpiente de luz del equinoccio', cielo: 'atardecer', suelo: 'tierra', items: [['castillo', 205, 224, 1.25], ['serpiente_luz', 205, 224, 1.25]], gente: [['rey_maya', 85, 280, 1.05, { pose: 'señala' }]] },
        { alt: 'El juego de pelota', cielo: 'dia', suelo: 'piedra', items: [['cancha', 200, 208, 1.05], ['bola', 205, 262, 1.5]], gente: [['guerrero', 140, 274, 1.1, { pose: 'corre', obj: null }], ['guerrero', 270, 274, 1.1, { pose: 'corre', flip: 1, obj: null }]] },
        { alt: 'Una de las Nuevas Siete Maravillas del Mundo', cielo: 'noche', suelo: 'tierra', items: [['castillo', 205, 226, 1.15], ['estrella', 80, 60, 2.2], ['estrella', 330, 50, 2.5], ['estrella', 330, 110, 1.4], ['estrella', 70, 120, 1.4]], gente: [['nina', 60, 282, .95, { pose: 'arriba' }], ['nino', 345, 282, .95, { flip: 1, pose: 'arriba' }]] },
    ],

    'angel-independencia': [
        { alt: 'El monumento en 1910', cielo: 'noche', suelo: 'calle', items: [['fuegos', 200, 95, 1.3], ['columna_angel', 205, 252, 1.05]], gente: [['dama', 95, 280, 1.05], ['escritor', 315, 280, 1.05, { flip: 1 }]] },
        { alt: 'La Victoria Alada', cielo: 'dia', suelo: 'ninguno', items: [['nubes', 95, 60, 1], ['nubes', 320, 90, .8], ['columna_angel', 205, 330, 1.35]] },
        { alt: 'Los héroes descansan en la base', cielo: 'dia', suelo: 'piedra', items: [['mausoleo', 205, 214, 1.25], ['bandera', 300, 262, .95]], gente: [['insurgente', 85, 276, 1.05], ['mestiza', 160, 280, 1]] },
        { alt: 'El Paseo de la Reforma', cielo: 'dia', suelo: 'calle', items: [['calle_reforma', 200, 220, 1], ['columna_angel', 205, 226, .8]], gente: [['nina', 100, 282, .95, { pose: 'arriba' }], ['nino', 305, 282, .95, { flip: 1, pose: 'señala' }]] },
    ],
};
