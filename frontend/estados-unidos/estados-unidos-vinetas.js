// Escenas ilustradas de las historietas de Estados Unidos: 4 por tema.
window.VINETAS = {

    'pueblos-nativos': [
        { alt: 'Cahokia, la gran ciudad de los montículos', cielo: 'dia', suelo: 'pasto', items: [['monticulo', 210, 236, 1.3]], gente: [['puebloano', 90, 274, 1.1, { pose: 'señala' }], ['nativa', 330, 276, 1, { flip: 1 }]] },
        { alt: 'Las viviendas de Mesa Verde', cielo: 'dia', suelo: 'tierra', items: [['mesa_verde', 210, 236, 1.2]], gente: [['puebloano', 110, 274, 1.1, { pose: 'arriba' }]] },
        { alt: 'Cazadores de bisontes en las llanuras', cielo: 'dia', suelo: 'pasto', items: [['tipi', 90, 252, 1], ['bisonte', 290, 262, 1.2]], gente: [['nativo_llanura', 190, 272, 1.15, { pose: 'señala' }]] },
        { alt: 'Naciones y tratados', cielo: 'atardecer', suelo: 'pasto', items: [['tipi', 320, 252, .9]], gente: [['nativo_llanura', 120, 272, 1.15], ['nativa', 220, 276, 1.05], ['washington', 290, 274, 1, { flip: 1 }]] },
    ],

    'colonias-independencia': [
        { alt: 'El Mayflower llega a Plymouth', cielo: 'dia', suelo: 'agua', items: [['mayflower', 160, 216, 1.2]], gente: [['peregrino', 320, 262, 1.05, { flip: 1, pose: 'señala' }]] },
        { alt: 'Jamestown, la primera colonia', cielo: 'dia', suelo: 'pasto', items: [['fuerte_jamestown', 210, 236, 1.1]], gente: [['peregrino', 90, 274, 1.05], ['nativa', 320, 276, 1, { flip: 1 }]] },
        { alt: 'La Declaración de Independencia', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 70, 190, 1.1], ['ventana', 330, 190, 1.1]], gente: [['jefferson', 120, 262, 1.1, { pose: 'señala' }], ['franklin', 285, 264, 1.05, { flip: 1 }]], delante: [['mesa', 200, 288, 1.3, { w: 80 }], ['documento', 200, 246, 1.3]] },
        { alt: 'Washington y la Campana de la Libertad', cielo: 'dia', suelo: 'piedra', items: [['independence_hall', 220, 216, .9], ['liberty_bell', 80, 262, 1.1]], gente: [['washington', 330, 274, 1.1, { flip: 1, pose: 'arriba' }]] },
    ],

    'expansion-guerra-civil': [
        { alt: 'Carretas hacia el Oeste', cielo: 'atardecer', suelo: 'pasto', items: [['carreta', 220, 262, 1.2], ['desierto_oeste', 200, 215, 1]], gente: [['colono_oeste', 100, 274, 1.1, { pose: 'señala' }], ['colona', 320, 276, 1, { flip: 1 }]] },
        { alt: 'La fiebre del oro', cielo: 'dia', suelo: 'tierra', items: [['montes', 200, 205, 1, { c: '#a9a39a' }], ['oro_barras', 320, 266, 1.1]], gente: [['minero_us', 140, 272, 1.15]] },
        { alt: 'Lincoln y la Guerra Civil', cielo: 'humo', suelo: 'pasto', items: [['canon', 90, 262, 1], ['bandera', 335, 238, 1]], gente: [['soldado_union', 170, 272, 1.1, { pose: 'arriba' }], ['lincoln', 255, 270, 1.15, { flip: 1 }], ['soldado_sur', 320, 276, 1, { flip: 1 }]] },
        { alt: 'Harriet Tubman guía hacia la libertad', cielo: 'noche', suelo: 'pasto', items: [['luna', 330, 60, .8], ['arbol', 90, 245, 1]], gente: [['tubman', 160, 272, 1.2, { pose: 'señala' }], ['afro_h', 250, 274, 1.05]] },
    ],

    'siglo-xx': [
        { alt: 'Los inmigrantes llegan a Ellis Island', cielo: 'dia', suelo: 'agua', items: [['barco_vapor', 130, 218, 1.1], ['ellis_island', 320, 214, .8]], gente: [['inmigrante_us', 200, 262, 1], ['inmigrante_mujer_us', 250, 264, 1]] },
        { alt: 'Las sufragistas y el voto de las mujeres', cielo: 'dia', suelo: 'calle', items: [['capitolio', 300, 214, .6]], gente: [['sufragista', 110, 274, 1.15, { pose: 'arriba' }], ['sufragista', 200, 276, 1.1, { pose: 'arriba' }]] },
        { alt: 'Rosa Parks y Martin Luther King Jr.', cielo: 'dia', suelo: 'calle', items: [['bus_rosa', 220, 262, 1]], gente: [['rosa_parks', 90, 274, 1.1], ['mlk', 330, 274, 1.1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'Apolo 11 llega a la Luna', cielo: 'noche', suelo: 'ninguno', items: [['luna_apolo', 200, 262, 1.2], ['cohete_saturno', 90, 240, .8]], gente: [['astronauta', 240, 266, 1.15, { pose: 'arriba', obj: 'bandera_us' }]] },
    ],

    diversidad: [
        { alt: 'La Estatua de la Libertad da la bienvenida', cielo: 'dia', suelo: 'agua', items: [['estatua_libertad', 220, 236, 1.1], ['barco_vapor', 80, 220, .8]], gente: [['inmigrante_us', 330, 266, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'Barrios de todo el mundo', cielo: 'dia', suelo: 'calle', items: [['ciudad_ny', 200, 214, .9], ['papel_picado', 200, 90, 1.1]], gente: [['inmigrante_us', 110, 276, 1], ['mlk', 200, 278, 1], ['tejedora_navajo', 290, 276, 1, { flip: 1 }]] },
        { alt: 'Comida y música latinas', cielo: 'atardecer', suelo: 'calle', items: [['musica', 300, 120, 1.4]], gente: [['mariachi', 130, 274, 1.1], ['bailarina_swing', 250, 276, 1.05, { flip: 1, pose: 'abre' }]] },
        { alt: 'Niños de muchas culturas', cielo: 'dia', suelo: 'pasto', items: [['banderas_us', 200, 100, .6]], gente: [['nino', 90, 276, 1.05, { pose: 'arriba' }], ['nina', 180, 278, 1.05], ['nina', 260, 278, 1.05], ['nina', 330, 276, 1, { flip: 1, pose: 'arriba' }]] },
    ],

    regiones: [
        { alt: 'El Gran Cañón', cielo: 'dia', suelo: 'tierra', items: [['gran_canon', 200, 232, 1.3]], gente: [['turista', 90, 274, 1.1, { pose: 'señala' }]] },
        { alt: 'Las Montañas Rocosas', cielo: 'dia', suelo: 'pasto', items: [['montes', 200, 205, 1.2, { c: '#8f9bb8' }], ['cabana', 330, 244, .8]], gente: [['guardabosques', 110, 274, 1.1, { pose: 'señala' }]] },
        { alt: 'Los desiertos del suroeste', cielo: 'atardecer', suelo: 'arena', items: [['desierto_oeste', 200, 215, 1.1], ['cactus', 90, 262, 1], ['cactus', 330, 262, .8]], gente: [['cowboy', 210, 272, 1.1]] },
        { alt: 'Hielo y volcanes: Alaska y Hawái', cielo: 'dia', suelo: 'agua', items: [['montes', 100, 205, .8, { c: '#8f9bb8' }], ['volcan', 300, 208, .9], ['palmeras', 350, 232, .8]], gente: [['guardabosques', 200, 262, 1, { pose: 'señala' }]] },
    ],

    'hamburguesa-bbq': [
        { alt: 'Una hamburguesa clásica', cielo: 'cocina', suelo: 'ninguno', items: [['hamburguesa', 200, 252, 2.4]], gente: [['cocinero_parrilla_us', 80, 272, 1.05, { pose: 'señala' }], ['nino', 325, 276, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'Perros calientes en el estadio', cielo: 'dia', suelo: 'piedra', items: [['hot_dog', 200, 258, 2.4], ['estadio_beisbol', 330, 214, .6]], gente: [['beisbolista', 90, 272, 1.05, { pose: 'señala' }]] },
        { alt: 'Barbacoa de Texas', cielo: 'atardecer', suelo: 'tierra', items: [['ahumador_bbq', 120, 262, 1.5], ['parrilla_us', 290, 262, 1]], gente: [['cowboy', 205, 274, 1.1, { pose: 'señala' }]] },
        { alt: 'Pastel de manzana', cielo: 'cocina', suelo: 'ninguno', items: [['pastel_manzana', 200, 254, 2.4]], gente: [['familia_madre', 85, 272, 1.05, { pose: 'sostiene' }]] },
    ],

    'thanksgiving-regional': [
        { alt: 'La cena de Acción de Gracias', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 330, 190, 1.1], ['pavo', 200, 252, 1.8]], gente: [['familia_madre', 100, 262, 1.1], ['familia_padre', 295, 264, 1.1, { flip: 1 }]], delante: [['mesa', 200, 290, 1.6, { w: 90 }]] },
        { alt: 'Plymouth: colonos y wampanoag', cielo: 'dia', suelo: 'pasto', items: [['pavo', 200, 262, 1.2]], gente: [['peregrino', 110, 272, 1.1, { pose: 'señala' }], ['nativo_llanura', 290, 272, 1.1, { flip: 1 }]] },
        { alt: 'Gumbo y cocina cajún', cielo: 'cocina', suelo: 'ninguno', items: [['cazuela', 200, 252, 1.8], ['balcon_nola', 340, 232, .5]], gente: [['cocinera', 85, 270, 1.05, { pose: 'señala' }]] },
        { alt: 'Pizza de Nueva York', cielo: 'dia', suelo: 'calle', items: [['ciudad_ny', 200, 214, .8], ['pizza', 120, 262, 2]], gente: [['cocinero_parrilla_us', 280, 274, 1.1, { pose: 'sostiene' }]] },
    ],

    'jazz-blues': [
        { alt: 'Una banda de jazz en Nueva Orleans', cielo: 'atardecer', suelo: 'calle', items: [['balcon_nola', 90, 214, 1.1], ['trompeta_g', 320, 240, .8]], gente: [['jazzista', 190, 272, 1.2], ['blues_man', 270, 274, 1.1, { flip: 1 }]] },
        { alt: 'Louis Armstrong y su trompeta', cielo: 'noche', suelo: 'piso', items: [['escenario', 200, 240, 1.3], ['reflector', 70, 140, 1]], gente: [['jazzista', 200, 262, 1.25]] },
        { alt: 'El blues del Delta del Misisipi', cielo: 'atardecer', suelo: 'tierra', items: [['cabana', 100, 240, .9], ['luna', 330, 60, .7]], gente: [['blues_man', 230, 272, 1.2]] },
        { alt: 'Jazz en Harlem', cielo: 'noche', suelo: 'calle', items: [['ciudad_ny', 200, 214, .8], ['saxofon', 330, 262, 1.1]], gente: [['jazzista', 120, 274, 1.1], ['bailarina_swing', 230, 276, 1.05, { flip: 1, pose: 'abre' }]] },
    ],

    'rock-country-hiphop': [
        { alt: 'Elvis y el rock and roll', cielo: 'noche', suelo: 'piso', items: [['escenario', 200, 240, 1.3], ['reflector', 330, 140, 1]], gente: [['elvis', 200, 262, 1.2]] },
        { alt: 'Country en Nashville', cielo: 'noche', suelo: 'calle', items: [['banjo', 90, 262, 1.3], ['luna', 330, 60, .7]], gente: [['cantante_country', 200, 274, 1.15]] },
        { alt: 'El hip hop nace en el Bronx', cielo: 'noche', suelo: 'calle', items: [['graffiti', 200, 220, 1.1], ['tocadiscos', 330, 262, 1.2]], gente: [['dj', 110, 274, 1.1], ['rapero', 250, 276, 1.1, { flip: 1 }]] },
        { alt: 'Broadway, el teatro musical', cielo: 'noche', suelo: 'calle', items: [['ciudad_ny', 200, 214, .9], ['reflector', 70, 140, 1]], gente: [['actor', 130, 274, 1.1, { pose: 'arriba' }], ['actriz', 250, 276, 1.1, { flip: 1, pose: 'arriba' }]] },
    ],

    'swing-claque': [
        { alt: 'El lindy hop en el Savoy', cielo: 'interior', suelo: 'piso', items: [['ventana', 70, 190, 1.1], ['musica', 330, 130, 1.4]], gente: [['bailarin_swing', 150, 270, 1.2, { pose: 'abre' }], ['bailarina_swing', 260, 270, 1.2, { flip: 1, pose: 'abre' }]] },
        { alt: 'El claqué en Broadway', cielo: 'noche', suelo: 'piso', items: [['escenario', 200, 240, 1.3], ['reflector', 70, 140, 1]], gente: [['claquista', 200, 262, 1.2]] },
        { alt: 'La era del swing y las grandes orquestas', cielo: 'noche', suelo: 'piso', items: [['escenario', 200, 240, 1.3], ['saxofon', 90, 262, 1.1]], gente: [['jazzista', 150, 262, 1.1], ['bailarin_swing', 260, 264, 1.1, { flip: 1 }]] },
        { alt: 'Cantando bajo la lluvia', cielo: 'humo', suelo: 'calle', items: [['lluvia', 200, 40, 1.4]], gente: [['claquista', 200, 274, 1.2, { pose: 'arriba' }]] },
    ],

    'country-hiphop-baile': [
        { alt: 'El square dance', cielo: 'dia', suelo: 'pasto', items: [['carreta', 330, 262, .8]], gente: [['cowboy', 120, 272, 1.1, { pose: 'arriba' }], ['colona', 210, 274, 1.1, { pose: 'abre' }], ['cowboy', 290, 274, 1.05, { flip: 1, pose: 'arriba' }]] },
        { alt: 'Breakdance en la calle', cielo: 'dia', suelo: 'calle', items: [['graffiti', 200, 220, 1.1], ['boombox', 330, 262, 1.2]], gente: [['breaker', 120, 274, 1.15, { pose: 'dos' }], ['dj', 250, 276, 1.05]] },
        { alt: 'Danzas de pow-wow', cielo: 'atardecer', suelo: 'tierra', items: [['tambor_pow', 90, 268, 1.3], ['tipi', 330, 252, .9]], gente: [['bailarin_pow', 200, 272, 1.2, { pose: 'dos' }]] },
        { alt: 'Line dance de country', cielo: 'interior', suelo: 'piso', items: [['musica', 330, 130, 1.3]], gente: [['cowboy', 100, 268, 1.1], ['cantante_country', 190, 268, 1.1, { pose: 'arriba' }], ['cowboy', 280, 268, 1.1, { flip: 1 }]] },
    ],

    'pop-art-expresionismo': [
        { alt: 'Pollock salpica la pintura', cielo: 'interior', suelo: 'ninguno', items: [['cuadro_abstracto', 300, 262, 1.3], ['ventana', 70, 190, 1.1]], gente: [['pollock', 160, 264, 1.2]] },
        { alt: 'Las latas de Warhol', cielo: 'interior', suelo: 'ninguno', items: [['lata_sopa', 200, 262, 1.8]], gente: [['warhol', 90, 270, 1.1, { pose: 'señala' }]] },
        { alt: 'Nighthawks de Edward Hopper', cielo: 'noche', suelo: 'calle', items: [['cuadro_cafe', 210, 230, 1.2]], gente: [['pintora_us', 90, 274, 1.1, { pose: 'señala' }]] },
        { alt: 'El MoMA y los museos de Nueva York', cielo: 'dia', suelo: 'piedra', items: [['edificio', 210, 214, 1.1]], gente: [['nina', 90, 276, 1.05, { pose: 'arriba' }], ['pintora_us', 320, 276, 1, { flip: 1 }]] },
    ],

    'hollywood-cine': [
        { alt: 'El letrero de Hollywood', cielo: 'dia', suelo: 'pasto', items: [['cartel_hollywood', 210, 230, 1.2], ['palmeras', 340, 238, 1]], gente: [['turista', 100, 276, 1.05, { pose: 'señala' }]] },
        { alt: 'Rodando una película', cielo: 'interior', suelo: 'ninguno', items: [['claqueta', 300, 262, 1.6], ['reflector', 70, 140, 1]], gente: [['director', 130, 262, 1.15, { obj: 'megafono' }], ['actriz', 220, 266, 1.1]] },
        { alt: 'Los premios Óscar', cielo: 'noche', suelo: 'piso', items: [['escenario', 200, 240, 1.2], ['oscar', 330, 262, 1.6]], gente: [['actor', 130, 262, 1.15, { pose: 'arriba' }], ['actriz', 260, 264, 1.1]] },
        { alt: 'Mickey y la animación', cielo: 'interior', suelo: 'ninguno', items: [['pantalla', 200, 216, 1.4]], gente: [['nino', 90, 276, 1.05, { pose: 'arriba' }], ['nina', 320, 278, 1, { flip: 1 }]] },
    ],

    'twain-poe-dickinson': [
        { alt: 'Mark Twain y el río Misisipi', cielo: 'atardecer', suelo: 'agua', items: [['barco_vapor', 150, 220, 1.1]], gente: [['twain', 320, 264, 1.1, { flip: 1, pose: 'sostiene', obj: 'pluma' }]] },
        { alt: 'Poe y el cuervo', cielo: 'noche', suelo: 'piso', items: [['luna', 330, 60, .8], ['ventana', 70, 190, 1.1]], gente: [['poe', 190, 266, 1.15, { pose: 'sostiene', obj: 'libro_us' }]] },
        { alt: 'Walt Whitman y Hojas de hierba', cielo: 'dia', suelo: 'pasto', items: [['arbol', 330, 245, 1.1]], gente: [['twain', 160, 272, 1.15, { pose: 'arriba' }]] },
        { alt: 'Emily Dickinson escribe', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 330, 190, 1.1]], gente: [['dickinson', 190, 264, 1.2, { pose: 'sostiene', obj: 'pluma' }]], delante: [['escritorio', 200, 290, 1.1]] },
    ],

    'hemingway-morrison': [
        { alt: 'Hemingway y El viejo y el mar', cielo: 'dia', suelo: 'agua', items: [['barco', 150, 216, .9]], gente: [['hemingway', 300, 266, 1.15, { flip: 1, pose: 'sostiene' }]] },
        { alt: 'Fitzgerald y la era del jazz', cielo: 'noche', suelo: 'calle', items: [['ciudad_ny', 200, 214, .9], ['luna', 330, 60, .7]], gente: [['actor', 130, 274, 1.1, { pose: 'arriba' }], ['actriz', 240, 276, 1.05, { flip: 1 }]] },
        { alt: 'Toni Morrison y el Nobel', cielo: 'interior', suelo: 'ninguno', items: [['nobel_podio', 200, 262, 1.1]], gente: [['morrison', 130, 264, 1.15, { pose: 'arriba' }]] },
        { alt: 'El Renacimiento de Harlem', cielo: 'atardecer', suelo: 'calle', items: [['ciudad_ny', 200, 214, .8], ['pila_libros', 320, 270, 1]], gente: [['jazzista', 130, 274, 1.1, { pose: 'sostiene', obj: 'libro_us' }], ['morrison', 230, 276, 1.05]] },
    ],

    'deportes-americanos': [
        { alt: 'Béisbol en el estadio', cielo: 'dia', suelo: 'pasto', items: [['estadio_beisbol', 210, 214, 1.2]], gente: [['beisbolista', 130, 272, 1.2, { pose: 'arriba' }], ['hincha_us', 290, 276, 1, { flip: 1 }]] },
        { alt: 'Fútbol americano y Super Bowl', cielo: 'noche', suelo: 'pasto', items: [['estadio_futbol_am', 210, 214, 1.2], ['fuegos', 200, 90, 1.1]], gente: [['quarterback', 150, 272, 1.2, { pose: 'arriba' }]] },
        { alt: 'Baloncesto: nace en Springfield', cielo: 'interior', suelo: 'piso', items: [['aro_baloncesto', 330, 262, 1.2]], gente: [['baloncestista', 150, 270, 1.2, { pose: 'arriba' }], ['nino', 250, 276, 1]] },
        { alt: 'El Dream Team olímpico', cielo: 'dia', suelo: 'piso', items: [['trofeo', 330, 262, 1.2]], gente: [['baloncestista', 120, 272, 1.1, { pose: 'dos' }], ['baloncestista', 220, 274, 1.1, { pose: 'arriba' }]] },
    ],

    'cowboy-oeste': [
        { alt: 'El vaquero y su caballo', cielo: 'atardecer', suelo: 'tierra', items: [['desierto_oeste', 200, 215, 1.1], ['caballo', 290, 262, 1.2]], gente: [['cowboy', 130, 272, 1.15, { pose: 'señala' }]] },
        { alt: 'Arreo de ganado hacia Kansas', cielo: 'dia', suelo: 'pasto', items: [['vaca', 90, 264, 1], ['vaca', 160, 270, .9], ['bisonte', 320, 262, .9]], gente: [['cowboy', 230, 274, 1.1, { pose: 'arriba' }]] },
        { alt: 'El rodeo', cielo: 'dia', suelo: 'tierra', items: [['rodeo_toro', 220, 266, 1.3]], gente: [['rodeo_jinete', 215, 222, .9, { pose: 'arriba' }], ['cowboy', 80, 274, 1]] },
        { alt: 'La Ruta 66', cielo: 'atardecer', suelo: 'calle', items: [['ruta66', 90, 262, 1.2], ['desierto_oeste', 280, 215, 1]], gente: [['turista', 200, 276, 1.1, { pose: 'señala' }]] },
    ],

    'cuatro-julio': [
        { alt: 'Fuegos artificiales del 4 de julio', cielo: 'noche', suelo: 'pasto', items: [['fuegos', 200, 100, 1.6], ['banderas_us', 200, 262, .8]], gente: [['familia_padre', 110, 274, 1.1, { pose: 'arriba' }], ['nina', 280, 278, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'Desfile con banderas', cielo: 'dia', suelo: 'calle', items: [['bandera', 80, 238, 1.1], ['edificio', 330, 210, .8]], gente: [['tio_sam', 180, 274, 1.15, { pose: 'señala' }], ['nino', 260, 278, 1, { pose: 'arriba', obj: 'bandera_us' }]] },
        { alt: 'Barbacoa de familia', cielo: 'dia', suelo: 'pasto', items: [['parrilla_us', 140, 262, 1.3], ['mesa_picnic', 300, 266, 1.2]], gente: [['familia_padre', 210, 274, 1.1, { pose: 'sostiene' }]] },
        { alt: 'Se firma la Declaración en Filadelfia', cielo: 'dia', suelo: 'piedra', items: [['independence_hall', 210, 216, 1.1], ['liberty_bell', 80, 264, 1]], gente: [['patriota', 330, 276, 1, { flip: 1, pose: 'arriba' }]] },
    ],

    'halloween-thanksgiving': [
        { alt: 'Truco o trato', cielo: 'noche', suelo: 'calle', items: [['calabaza', 90, 266, 1.4], ['guirnalda_halloween', 200, 60, 1.2], ['luna', 330, 60, .8]], gente: [['bruja', 180, 274, 1.1], ['fantasma', 260, 276, 1.1, { pose: 'dos' }]] },
        { alt: 'Una calabaza tallada', cielo: 'noche', suelo: 'pasto', items: [['calabaza', 200, 262, 2.4], ['luna', 330, 60, .8]], gente: [['nino', 90, 276, 1.05, { pose: 'arriba' }]] },
        { alt: 'El desfile de Macy\'s en Acción de Gracias', cielo: 'dia', suelo: 'calle', items: [['globo_macys', 200, 140, 1.3], ['ciudad_ny', 330, 214, .6]], gente: [['nina', 110, 278, 1.05, { pose: 'arriba' }], ['familia_padre', 280, 276, 1.05, { flip: 1 }]] },
        { alt: 'Mardi Gras en Nueva Orleans', cielo: 'atardecer', suelo: 'calle', items: [['carroza_mardi_gras', 210, 264, 1], ['balcon_nola', 70, 214, .8]], gente: [['mardi_gras', 130, 274, 1.1, { pose: 'arriba' }], ['jazzista', 310, 276, 1, { flip: 1, pose: 'sostiene' }]] },
    ],

    'jeans-cowboy': [
        { alt: 'Levi Strauss y los jeans', cielo: 'dia', suelo: 'calle', items: [['jeans', 200, 262, 2.4]], gente: [['inmigrante_us', 90, 274, 1.1, { pose: 'señala' }]] },
        { alt: 'Mineros con pantalones resistentes', cielo: 'dia', suelo: 'tierra', items: [['montes', 200, 205, 1, { c: '#a9a39a' }], ['jeans', 320, 266, 1.2]], gente: [['minero_us', 140, 272, 1.15]] },
        { alt: 'El sombrero Stetson y las botas', cielo: 'dia', suelo: 'tierra', items: [['sombrero_cowboy_g', 130, 262, 1.6], ['botas_vaqueras', 300, 266, 1.4]], gente: [['cowboy', 215, 274, 1.1, { pose: 'señala' }]] },
        { alt: 'Moda callejera y zapatillas', cielo: 'dia', suelo: 'calle', items: [['ciudad_ny', 200, 214, .8]], gente: [['breaker', 120, 276, 1.1], ['beisbolista', 220, 276, 1.05], ['rapero', 300, 276, 1, { flip: 1 }]] },
    ],

    'trajes-nativos-navajo': [
        { alt: 'Tocado de plumas de águila', cielo: 'dia', suelo: 'pasto', items: [['tipi', 330, 252, .9]], gente: [['nativo_llanura', 160, 272, 1.25]] },
        { alt: 'Joyas de plata y turquesa', cielo: 'dia', suelo: 'tierra', items: [['collar_turquesa', 130, 262, 1.8], ['desierto_oeste', 280, 215, .8]], gente: [['tejedora_navajo', 280, 274, 1.1, { pose: 'sostiene' }]] },
        { alt: 'La tejedora navajo', cielo: 'dia', suelo: 'tierra', items: [['telar_navajo', 150, 262, 1.5], ['desierto_oeste', 290, 215, .8]], gente: [['tejedora_navajo', 260, 274, 1.15]] },
        { alt: 'Los code talkers', cielo: 'humo', suelo: 'pasto', items: [['palmeras', 340, 238, 1], ['bandera', 80, 238, 1]], gente: [['navajo_h', 190, 272, 1.15, { pose: 'sostiene' }], ['soldado_union', 260, 274, 1, { flip: 1 }]] },
    ],

    'libertad-washington': [
        { alt: 'La Estatua de la Libertad', cielo: 'dia', suelo: 'agua', items: [['estatua_libertad', 220, 240, 1.2], ['barco_vapor', 80, 222, .8]], gente: [['turista', 330, 266, 1, { flip: 1, pose: 'señala' }]] },
        { alt: 'El Capitolio y la Casa Blanca', cielo: 'dia', suelo: 'pasto', items: [['capitolio', 130, 232, .9], ['casa_blanca', 320, 232, .8]], gente: [['presidente_us', 215, 276, 1.05, { pose: 'señala' }]] },
        { alt: 'El monumento a Washington y el National Mall', cielo: 'dia', suelo: 'pasto', items: [['obelisco_washington', 210, 262, 1.2], ['lincoln_memorial', 90, 232, .5]], gente: [['nina', 320, 278, 1.05, { flip: 1, pose: 'arriba' }]] },
        { alt: 'Tengo un sueño: el Lincoln Memorial', cielo: 'dia', suelo: 'piedra', items: [['lincoln_memorial', 210, 232, 1.2]], gente: [['mlk', 110, 274, 1.15, { pose: 'arriba' }], ['rosa_parks', 320, 276, 1, { flip: 1 }]] },
    ],

    'parques-nacionales': [
        { alt: 'El géiser Old Faithful', cielo: 'dia', suelo: 'tierra', items: [['geiser', 210, 252, 1.4], ['bisonte', 330, 262, .8]], gente: [['guardabosques', 90, 274, 1.1, { pose: 'señala' }]] },
        { alt: 'Yosemite y sus paredes de granito', cielo: 'dia', suelo: 'pasto', items: [['yosemite', 210, 226, 1.2]], gente: [['turista', 100, 276, 1.05, { pose: 'señala', obj: 'camara' }]] },
        { alt: 'Mount Rushmore', cielo: 'dia', suelo: 'pasto', items: [['rushmore', 210, 232, 1.2]], gente: [['escultor', 90, 274, 1.1, { pose: 'señala' }]] },
        { alt: 'El puente Golden Gate', cielo: 'atardecer', suelo: 'agua', items: [['golden_gate', 210, 232, 1.2]], gente: [['turista', 330, 266, 1, { flip: 1, pose: 'arriba' }]] },
    ],
};
