// Escenas ilustradas de las historietas de Canadá: 4 por tema.
window.VINETAS = {

    'pueblos-originarios': [
        { alt: 'Los pueblos de la costa y sus mástiles totémicos', cielo: 'dia', suelo: 'pasto', items: [['totem', 210, 262, 1.2], ['bosque_nieve', 200, 205, .9]], gente: [['haida', 100, 274, 1.1, { pose: 'señala' }], ['haida_mujer', 320, 276, 1, { flip: 1 }]] },
        { alt: 'Cazadores de bisontes en las praderas', cielo: 'dia', suelo: 'pasto', items: [['tipi', 90, 252, 1], ['bisonte', 290, 262, 1.2]], gente: [['nativo_llanura', 190, 272, 1.15, { pose: 'señala' }]] },
        { alt: 'Los inuit y el Ártico', cielo: 'dia', suelo: 'ninguno', items: [['nieve_suelo', 200, 248, 1.3], ['iglu', 120, 252, 1], ['inuksuk', 320, 262, 1.1]], gente: [['inuit', 220, 270, 1.15, { pose: 'señala' }], ['inuit_nino', 280, 276, .95]] },
        { alt: 'Los vikingos en Terranova', cielo: 'dia', suelo: 'agua', items: [['barco', 150, 218, 1], ['habitation', 330, 238, .7]], gente: [['conquistador', 90, 262, 1, { pose: 'señala' }]] },
    ],

    'nueva-francia-colonia': [
        { alt: 'Jacques Cartier llega al río San Lorenzo', cielo: 'dia', suelo: 'agua', items: [['barco_cartier', 160, 218, 1.2], ['bosque_arces', 330, 232, .7]], gente: [['cartier', 320, 262, 1.05, { flip: 1, pose: 'señala' }]] },
        { alt: 'Champlain funda Québec', cielo: 'dia', suelo: 'piedra', items: [['habitation', 220, 236, 1.2], ['rio', 70, 205, .8]], gente: [['champlain', 110, 272, 1.15, { pose: 'arriba' }], ['algonquino', 320, 274, 1, { flip: 1 }]] },
        { alt: 'El comercio de pieles en canoa', cielo: 'dia', suelo: 'agua', items: [['canoa_grande', 200, 250, 1.1], ['bosque_arces', 210, 205, .8]], gente: [['voyageur', 170, 244, .9, { pose: 'sostiene' }], ['algonquino', 250, 246, .9]] },
        { alt: 'La batalla de las Llanuras de Abraham', cielo: 'humo', suelo: 'pasto', items: [['llanuras_abraham', 200, 232, 1.1], ['canon_c', 90, 264, 1.1], ['bandera', 335, 240, 1]], gente: [['wolfe', 170, 272, 1.15, { pose: 'arriba' }], ['montcalm', 260, 274, 1.1, { flip: 1, pose: 'arriba' }]] },
    ],

    confederacion: [
        { alt: 'Se funda la Confederación en 1867', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 70, 190, 1.1], ['ventana', 330, 190, 1.1]], gente: [['macdonald', 130, 262, 1.1, { pose: 'señala' }], ['champlain', 280, 264, 1.05, { flip: 1 }]], delante: [['mesa', 200, 288, 1.3, { w: 80 }], ['documento', 200, 246, 1.3]] },
        { alt: 'El ferrocarril del Pacífico', cielo: 'dia', suelo: 'tierra', items: [['rocosas', 200, 215, 1.2], ['tren_pacifico', 250, 262, 1]], gente: [['obrero_ferrocarril', 90, 274, 1.1, { pose: 'sostiene' }]] },
        { alt: 'Louis Riel y los métis', cielo: 'atardecer', suelo: 'pasto', items: [['llanuras_abraham', 200, 232, 1], ['bandera', 335, 240, .9]], gente: [['riel', 170, 272, 1.2, { pose: 'arriba' }], ['metis', 260, 274, 1.1, { flip: 1 }]] },
        { alt: 'El Monumento de Vimy', cielo: 'dia', suelo: 'pasto', items: [['vimy', 210, 252, 1.3]], gente: [['soldado_vimy', 90, 274, 1.1, { pose: 'arriba' }], ['soldado_vimy', 320, 276, 1, { flip: 1 }]] },
    ],

    'canada-moderno': [
        { alt: 'La bandera de la hoja de arce de 1965', cielo: 'dia', suelo: 'pasto', items: [['parlamento', 220, 232, .9]], gente: [['trudeau', 110, 272, 1.1, { pose: 'arriba', obj: 'bandera_ca' }], ['inmigrante_ca', 330, 276, 1, { flip: 1 }]] },
        { alt: 'Dos lenguas oficiales', cielo: 'dia', suelo: 'calle', items: [['letrero', 200, 220, 1.4, { texto: 'ENGLISH / FRANÇAIS' }]], gente: [['quebecois', 110, 274, 1.1, { pose: 'arriba' }], ['inmigrante_ca', 290, 276, 1.05, { flip: 1, pose: 'arriba' }]] },
        { alt: 'La Carta de Derechos y Libertades', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 330, 190, 1.1], ['bandera', 70, 262, .9]], gente: [['trudeau', 170, 264, 1.15, { pose: 'sostiene' }]], delante: [['documento', 200, 262, 1.1]] },
        { alt: 'Reconciliación y Día de la Camisa Naranja', cielo: 'dia', suelo: 'pasto', items: [['tipi', 330, 252, .8]], gente: [['inuit_nino', 110, 278, 1.1, { pose: 'arriba' }], ['algonquino', 200, 274, 1.1], ['nina', 270, 278, 1.05]] },
    ],

    diversidad: [
        { alt: 'Una ciudad de inmigrantes', cielo: 'dia', suelo: 'calle', items: [['torre_cn', 80, 262, .8], ['banderas_ca', 250, 120, .6]], gente: [['inmigrante_ca', 150, 276, 1.1, { pose: 'arriba' }], ['mlk', 230, 278, 1], ['tejedora_navajo', 310, 276, 1, { flip: 1 }]] },
        { alt: 'Québec y el francés', cielo: 'dia', suelo: 'piedra', items: [['casas_quebec', 210, 214, 1]], gente: [['quebecois', 110, 274, 1.1, { pose: 'señala' }], ['quebecoise', 320, 276, 1, { flip: 1 }]] },
        { alt: 'Lenguas indígenas', cielo: 'dia', suelo: 'pasto', items: [['tipi', 90, 252, .9], ['iglu', 330, 252, .8]], gente: [['algonquino', 160, 272, 1.1, { pose: 'señala' }], ['inuit_mujer', 250, 274, 1.1, { flip: 1 }]] },
        { alt: 'Niños de todo el mundo en la escuela', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 330, 190, 1.1], ['estante', 80, 250, 1]], gente: [['nino', 150, 276, 1.05, { pose: 'arriba' }], ['inuit_nino', 220, 278, 1.05], ['nina', 290, 278, 1.05, { flip: 1 }]] },
    ],

    regiones: [
        { alt: 'Las Montañas Rocosas y sus lagos', cielo: 'dia', suelo: 'agua', items: [['rocosas', 200, 205, 1.2], ['lago_canada', 200, 250, .9]], gente: [['turista_ca', 330, 266, 1, { flip: 1, pose: 'señala' }]] },
        { alt: 'Las praderas de trigo', cielo: 'dia', suelo: 'pasto', items: [['trigo', 200, 262, 1.3]], gente: [['vaquero_ca', 100, 274, 1.1, { pose: 'señala' }]] },
        { alt: 'El otoño de los arces', cielo: 'atardecer', suelo: 'pasto', items: [['bosque_arces', 200, 240, 1.3]], gente: [['familia_ca', 150, 274, 1.1, { pose: 'sostiene' }], ['nina', 260, 278, 1]] },
        { alt: 'La aurora boreal en el Ártico', cielo: 'noche', suelo: 'ninguno', items: [['aurora', 200, 100, 1.1], ['nieve_suelo', 200, 248, 1.3], ['iglu', 100, 252, .8]], gente: [['inuit', 250, 270, 1.15, { pose: 'arriba' }]] },
    ],

    'poutine-tourtiere': [
        { alt: 'Una poutine humeante', cielo: 'cocina', suelo: 'ninguno', items: [['poutine', 200, 252, 2.3]], gente: [['cocinero_ca', 80, 272, 1.05, { pose: 'señala' }], ['nino', 325, 276, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'La tourtière de Nochebuena', cielo: 'interior', suelo: 'ninguno', items: [['tourtiere', 200, 254, 2.3], ['arbol_navidad', 330, 262, 1]], gente: [['quebecoise', 90, 270, 1.05, { pose: 'sostiene' }]] },
        { alt: 'Barras Nanaimo y BeaverTails', cielo: 'cocina', suelo: 'ninguno', items: [['barra_nanaimo', 140, 254, 2], ['castor', 310, 258, .9]], gente: [['cocinero_ca', 220, 274, 1, { pose: 'sostiene' }]] },
        { alt: 'Un café con donas', cielo: 'dia', suelo: 'calle', items: [['cafe_donas', 200, 256, 2.2]], gente: [['patinador', 90, 276, 1.05, { pose: 'arriba' }]] },
    ],

    'jarabe-arce-salmon': [
        { alt: 'La cabaña de azúcar', cielo: 'dia', suelo: 'ninguno', items: [['nieve_suelo', 200, 248, 1.3], ['cabana_azucar', 220, 244, 1.1], ['arce', 80, 250, 1]], gente: [['productor_arce', 140, 274, 1.1, { pose: 'sostiene' }]] },
        { alt: 'Recogiendo la savia del arce', cielo: 'dia', suelo: 'ninguno', items: [['nieve_suelo', 200, 248, 1.3], ['arce', 210, 252, 1.4]], gente: [['productor_arce', 120, 274, 1.1, { pose: 'sostiene', obj: 'balde' }], ['nina', 300, 278, 1, { flip: 1 }]] },
        { alt: 'Salmón del Pacífico', cielo: 'dia', suelo: 'agua', items: [['salmon', 160, 262, 1.6], ['totem', 330, 262, .8]], gente: [['haida', 80, 266, 1, { pose: 'señala' }]] },
        { alt: 'Langosta del Atlántico y bagels de Montreal', cielo: 'cocina', suelo: 'ninguno', items: [['langosta', 130, 256, 1.8], ['bagel', 290, 252, 1.6]], gente: [['cocinero_ca', 210, 274, 1, { pose: 'sostiene' }]] },
    ],

    'musica-canadiense': [
        { alt: 'Leonard Cohen y Hallelujah', cielo: 'noche', suelo: 'piso', items: [['escenario_ca', 200, 240, 1.2], ['reflector', 70, 140, 1]], gente: [['cantautor', 200, 262, 1.2]] },
        { alt: 'Céline Dion canta', cielo: 'noche', suelo: 'piso', items: [['escenario_ca', 200, 240, 1.3], ['reflector', 330, 140, 1]], gente: [['cantante_ca', 200, 262, 1.2]] },
        { alt: 'Oscar Peterson y el jazz de Montreal', cielo: 'noche', suelo: 'piso', items: [['piano', 150, 262, 1.5], ['luna', 330, 60, .7]], gente: [['pianista', 250, 270, 1.15]] },
        { alt: 'Los Premios Juno', cielo: 'noche', suelo: 'piso', items: [['escenario_ca', 200, 240, 1.3], ['copa_stanley_g', 330, 262, .6]], gente: [['cantante_ca', 130, 264, 1.1], ['cantautor', 260, 266, 1.1, { flip: 1 }]] },
    ],

    'folk-celta-inuit': [
        { alt: 'El violín de Cabo Bretón', cielo: 'atardecer', suelo: 'pasto', items: [['olas_fundy', 200, 250, 1.1], ['casas_quebec', 330, 214, .5]], gente: [['violinista', 170, 272, 1.2]] },
        { alt: 'Canto de garganta inuit', cielo: 'dia', suelo: 'ninguno', items: [['nieve_suelo', 200, 248, 1.3], ['iglu', 330, 252, .8]], gente: [['garganta_inuit', 150, 270, 1.2, { pose: 'dos' }], ['inuit_mujer', 250, 270, 1.2, { flip: 1, pose: 'dos' }]] },
        { alt: 'Tambores de pow-wow', cielo: 'atardecer', suelo: 'tierra', items: [['tambor_pow', 110, 268, 1.4], ['tipi', 330, 252, .9]], gente: [['algonquino', 220, 272, 1.15, { pose: 'sostiene' }]] },
        { alt: 'Un kitchen party con música', cielo: 'interior', suelo: 'piso', items: [['ventana', 330, 190, 1.1], ['musica', 90, 130, 1.4]], gente: [['violinista_h', 160, 268, 1.1], ['bailarin_zapateo', 260, 270, 1.1, { flip: 1 }]] },
    ],

    'jig-stepdance': [
        { alt: 'El Red River Jig de los métis', cielo: 'dia', suelo: 'pasto', items: [['banderines', 200, 70, 1.2]], gente: [['metis', 150, 272, 1.2, { pose: 'abre' }], ['violinista_h', 270, 274, 1.1, { flip: 1 }]] },
        { alt: 'Step dance de Cabo Bretón', cielo: 'interior', suelo: 'piso', items: [['ventana', 70, 190, 1.1]], gente: [['bailarin_zapateo', 180, 266, 1.2, { pose: 'abre' }], ['violinista', 270, 268, 1.1, { flip: 1 }]] },
        { alt: 'Danza ucraniana en las praderas', cielo: 'dia', suelo: 'pasto', items: [['trigo', 200, 262, 1]], gente: [['bailarin_zapateo', 130, 272, 1.1, { pose: 'arriba' }], ['quebecoise', 260, 274, 1.1, { flip: 1, pose: 'abre' }]] },
        { alt: 'Cuadrilla en una fiesta rural', cielo: 'noche', suelo: 'piso', items: [['banderines', 200, 70, 1.2]], gente: [['vaquero_ca', 110, 272, 1.1, { pose: 'arriba' }], ['quebecoise', 200, 274, 1.1, { pose: 'abre' }], ['quebecois', 290, 274, 1.1, { flip: 1, pose: 'arriba' }]] },
    ],

    'powwow-ballet': [
        { alt: 'La danza del aro', cielo: 'atardecer', suelo: 'tierra', items: [['tipi', 330, 252, .8]], gente: [['hoop', 190, 272, 1.25, { pose: 'dos' }]] },
        { alt: 'El vestido de jingle', cielo: 'dia', suelo: 'tierra', items: [['tambor_pow', 90, 268, 1.3]], gente: [['bailarina_jingle', 190, 272, 1.25, { pose: 'abre' }], ['algonquino', 290, 274, 1.1, { flip: 1 }]] },
        { alt: 'Ballet en Winnipeg y Toronto', cielo: 'noche', suelo: 'piso', items: [['escenario_ca', 200, 240, 1.3]], gente: [['bailarina_ballet', 150, 262, 1.15, { pose: 'abre' }], ['bailarina_ballet', 260, 262, 1.15, { flip: 1, pose: 'abre' }]] },
        { alt: 'Cirque du Soleil', cielo: 'noche', suelo: 'piso', items: [['circo_carpa', 210, 232, 1.2], ['reflector', 70, 140, 1]], gente: [['acrobata', 110, 274, 1.1, { pose: 'dos' }], ['acrobata', 320, 276, 1, { flip: 1, pose: 'arriba' }]] },
    ],

    'group-of-seven': [
        { alt: 'El Grupo de los Siete pinta al aire libre', cielo: 'dia', suelo: 'agua', items: [['lago_canada', 200, 250, 1], ['bosque_arces', 200, 205, .9], ['caballete', 90, 262, 1.1]], gente: [['pintor_g7', 160, 272, 1.15, { pose: 'señala' }]] },
        { alt: 'Tom Thomson y su canoa', cielo: 'atardecer', suelo: 'agua', items: [['canoa_abedul', 200, 252, 1.2], ['bosque_nieve', 200, 205, .9]], gente: [['pintor_g7', 200, 232, .9, { pose: 'sostiene', obj: 'remo' }]] },
        { alt: 'Emily Carr y los mástiles', cielo: 'dia', suelo: 'pasto', items: [['totem', 120, 262, 1.2], ['caballete', 310, 264, 1.1]], gente: [['emily_carr', 220, 272, 1.15, { pose: 'señala' }]] },
        { alt: 'Una galería con paisajes canadienses', cielo: 'interior', suelo: 'ninguno', items: [['cuadro', 130, 215, 1.3], ['cuadro', 270, 215, 1.1]], gente: [['nina', 200, 274, 1.05, { pose: 'arriba' }]] },
    ],

    'arte-inuit-haida': [
        { alt: 'Una escultura inuit en piedra', cielo: 'dia', suelo: 'ninguno', items: [['nieve_suelo', 200, 248, 1.3], ['oso_polar', 300, 262, 1.1]], gente: [['escultor_inuit', 150, 272, 1.2, { pose: 'sostiene' }]] },
        { alt: 'El inuksuk guía a los viajeros', cielo: 'dia', suelo: 'ninguno', items: [['nieve_suelo', 200, 248, 1.3], ['inuksuk', 200, 262, 1.8]], gente: [['inuit', 90, 272, 1.1, { pose: 'señala' }], ['inuit_nino', 320, 278, 1, { flip: 1 }]] },
        { alt: 'Tallando un mástil totémico', cielo: 'dia', suelo: 'pasto', items: [['totem', 220, 262, 1.3], ['bosque_nieve', 200, 205, .8]], gente: [['tallador', 120, 274, 1.15, { pose: 'señala' }]] },
        { alt: 'Pinturas anishinaabe de colores', cielo: 'interior', suelo: 'ninguno', items: [['cuadro_abstracto', 200, 232, 1.4]], gente: [['algonquino', 90, 274, 1.1, { pose: 'señala' }], ['nina', 320, 278, 1, { flip: 1, pose: 'arriba' }]] },
    ],

    'atwood-munro-montgomery': [
        { alt: 'Ana de las Tejas Verdes', cielo: 'dia', suelo: 'pasto', items: [['casa_tejas_verdes', 220, 238, 1.1], ['arbol', 70, 245, 1]], gente: [['anne', 140, 272, 1.15, { pose: 'abre' }]] },
        { alt: 'Margaret Atwood y El cuento de la criada', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 330, 190, 1.1]], gente: [['escritora_ca', 150, 264, 1.15], ['criada', 260, 266, 1.15, { flip: 1 }]] },
        { alt: 'Alice Munro y sus cuentos', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 70, 190, 1.1], ['biblioteca', 330, 262, .7]], gente: [['escritora_ca', 200, 264, 1.15, { pose: 'señala' }]], delante: [['escritorio', 200, 290, 1.1]] },
        { alt: 'El Premio Nobel de Literatura', cielo: 'interior', suelo: 'ninguno', items: [['nobel_podio', 200, 262, 1.1]], gente: [['escritora_ca', 120, 264, 1.1, { pose: 'arriba' }]] },
    ],

    'cohen-quebec-indigena': [
        { alt: 'Leonard Cohen, poeta de Montreal', cielo: 'atardecer', suelo: 'calle', items: [['mural_cohen', 90, 262, 1.2], ['casas_quebec', 300, 214, .7]], gente: [['cantautor', 210, 274, 1.15, { obj: 'libro_us' }]] },
        { alt: 'La literatura en francés de Québec', cielo: 'interior', suelo: 'ninguno', items: [['biblioteca', 90, 262, .9], ['ventana', 330, 190, 1.1]], gente: [['quebecois', 190, 268, 1.1, { pose: 'sostiene', obj: 'libro_us' }], ['quebecoise', 270, 270, 1.05, { flip: 1 }]] },
        { alt: 'Voces indígenas: Thomas King y Tomson Highway', cielo: 'atardecer', suelo: 'pasto', items: [['tipi', 330, 252, .8]], gente: [['algonquino', 140, 272, 1.15, { pose: 'sostiene', obj: 'libro_us' }], ['hoop', 240, 274, 1.1]] },
        { alt: 'La Feria del Libro de Montreal', cielo: 'interior', suelo: 'ninguno', items: [['biblioteca', 90, 262, .9], ['biblioteca', 330, 262, .9]], gente: [['nina', 180, 274, 1.05, { pose: 'sostiene' }], ['escritora_ca', 260, 270, 1.05]] },
    ],

    'hockey-lacrosse': [
        { alt: 'El hockey sobre hielo', cielo: 'interior', suelo: 'ninguno', items: [['rink', 200, 252, 1.3], ['portero_red', 330, 262, .9]], gente: [['jugador_hockey', 140, 262, 1.1, { pose: 'arriba' }], ['arquero_hockey', 270, 264, 1.05, { flip: 1 }]] },
        { alt: 'La Copa Stanley', cielo: 'noche', suelo: 'piso', items: [['escenario_ca', 200, 240, 1.2], ['copa_stanley_g', 330, 264, 1.2]], gente: [['jugador_hockey', 150, 264, 1.15, { pose: 'dos' }]] },
        { alt: 'El lacrosse, juego de los pueblos indígenas', cielo: 'dia', suelo: 'pasto', items: [['arbol', 330, 245, 1]], gente: [['jugador_lacrosse', 140, 272, 1.2], ['jugador_lacrosse', 250, 274, 1.15, { flip: 1 }]] },
        { alt: 'El Maratón de la Esperanza de Terry Fox', cielo: 'dia', suelo: 'calle', items: [['rocosas', 200, 205, 1], ['bandera', 335, 240, 1]], gente: [['terry_fox', 180, 274, 1.2]] },
    ],

    'potlatch-tradiciones': [
        { alt: 'El potlatch: dar regalos', cielo: 'atardecer', suelo: 'pasto', items: [['totem', 320, 262, 1.1], ['bulto', 200, 270, 1.2]], gente: [['haida', 120, 274, 1.15, { pose: 'sostiene' }], ['haida_mujer', 240, 276, 1.05]] },
        { alt: 'Tambores y círculos de palabra', cielo: 'atardecer', suelo: 'tierra', items: [['tambor_pow', 200, 268, 1.4]], gente: [['algonquino', 100, 274, 1.1], ['hoop', 300, 276, 1.05, { flip: 1 }]] },
        { alt: 'Vida en el Norte: trineo de perros', cielo: 'dia', suelo: 'ninguno', items: [['nieve_suelo', 200, 248, 1.3], ['trineo_perros', 220, 262, 1.2]], gente: [['inuit', 320, 270, 1.1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'La camisa naranja: cada niño importa', cielo: 'dia', suelo: 'pasto', items: [['tipi', 330, 252, .8]], gente: [['inuit_nino', 130, 278, 1.15, { pose: 'arriba' }], ['nina', 210, 278, 1.1], ['algonquino', 290, 274, 1.1, { flip: 1 }]] },
    ],

    'canada-day-stampede': [
        { alt: 'El Día de Canadá en Ottawa', cielo: 'noche', suelo: 'pasto', items: [['parlamento', 220, 232, .9], ['fuegos', 200, 90, 1.5]], gente: [['familia_ca', 100, 274, 1.1, { pose: 'arriba' }], ['nina', 330, 278, 1, { flip: 1, pose: 'arriba', obj: 'bandera_ca' }]] },
        { alt: 'Desfile con banderas rojas y blancas', cielo: 'dia', suelo: 'calle', items: [['banderas_ca', 200, 110, .7]], gente: [['mountie', 120, 274, 1.1], ['nino', 230, 278, 1, { pose: 'arriba', obj: 'bandera_ca' }], ['familia_ca', 310, 276, 1, { flip: 1 }]] },
        { alt: 'El Calgary Stampede', cielo: 'dia', suelo: 'tierra', items: [['rodeo_toro', 220, 266, 1.3]], gente: [['vaquero_ca', 90, 274, 1.1, { pose: 'arriba' }]] },
        { alt: 'La carrera de chuckwagons', cielo: 'dia', suelo: 'tierra', items: [['rodeo_chuckwagon', 190, 266, 1.4], ['caballo', 300, 262, 1.1]], gente: [['vaquero_ca', 90, 274, 1.05, { pose: 'arriba' }]] },
    ],

    'carnaval-quebec-acciones': [
        { alt: 'Bonhomme Carnaval', cielo: 'noche', suelo: 'ninguno', items: [['nieve_suelo', 200, 248, 1.3], ['palacio_hielo', 100, 250, 1], ['luna', 330, 60, .7]], gente: [['bonhomme', 220, 270, 1.3, { pose: 'dos' }]] },
        { alt: 'Carreras de canoas sobre el hielo', cielo: 'dia', suelo: 'ninguno', items: [['nieve_suelo', 200, 248, 1.3], ['canoa_abedul', 220, 256, 1.1]], gente: [['quebecois', 130, 270, 1.1, { pose: 'arriba' }], ['patinador', 320, 276, 1, { flip: 1 }]] },
        { alt: 'La cena de Acción de Gracias canadiense', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 330, 190, 1.1], ['pavo', 200, 252, 1.7]], gente: [['familia_ca', 100, 264, 1.1], ['quebecois', 290, 266, 1.05, { flip: 1 }]], delante: [['mesa', 200, 290, 1.6, { w: 90 }]] },
        { alt: 'La amapola roja del Día del Recuerdo', cielo: 'dia', suelo: 'pasto', items: [['vimy', 210, 252, 1.1], ['amapola', 330, 262, 1.6]], gente: [['soldado_vimy', 110, 274, 1.1, { pose: 'baja' }], ['nina', 280, 278, 1, { flip: 1, pose: 'sostiene' }]] },
    ],

    'parka-inuit': [
        { alt: 'La parka de piel de caribú', cielo: 'dia', suelo: 'ninguno', items: [['nieve_suelo', 200, 248, 1.3], ['iglu', 330, 252, .8]], gente: [['inuit', 170, 272, 1.25, { pose: 'señala' }]] },
        { alt: 'El amauti con bebé', cielo: 'dia', suelo: 'ninguno', items: [['nieve_suelo', 200, 248, 1.3], ['amauti_g', 90, 266, 1]], gente: [['inuit_mujer', 220, 272, 1.25, { pose: 'sostiene' }]] },
        { alt: 'Kamiks para caminar en la nieve', cielo: 'dia', suelo: 'ninguno', items: [['nieve_suelo', 200, 248, 1.3], ['kamik_g', 140, 262, 1.6]], gente: [['inuit_nino', 280, 278, 1.2, { pose: 'arriba' }]] },
        { alt: 'La manta a rayas de la Bahía de Hudson', cielo: 'interior', suelo: 'ninguno', items: [['hudson_manta', 190, 262, 1.8]], gente: [['familia_ca', 90, 270, 1.05, { pose: 'sostiene' }], ['nino', 320, 276, 1]] },
    ],

    'ceinture-fleche-mountie': [
        { alt: 'La faja flechada de los voyageurs', cielo: 'dia', suelo: 'agua', items: [['canoa_abedul', 220, 252, 1.1], ['faja_g', 100, 262, 1.1]], gente: [['voyageur', 230, 232, 1.1, { pose: 'sostiene' }]] },
        { alt: 'La Policía Montada', cielo: 'dia', suelo: 'pasto', items: [['parlamento', 220, 232, .8], ['caballo', 110, 262, 1.1]], gente: [['mountie', 220, 274, 1.25, { pose: 'sostiene' }]] },
        { alt: 'Regalía de pow-wow con plumas y cuentas', cielo: 'atardecer', suelo: 'tierra', items: [['tambor_pow', 90, 268, 1.2]], gente: [['hoop', 180, 272, 1.15], ['bailarina_jingle', 270, 274, 1.1, { flip: 1 }]] },
        { alt: 'Bordados métis de flores', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 330, 190, 1.1]], gente: [['metis', 150, 266, 1.15, { pose: 'sostiene' }], ['haida_mujer', 250, 268, 1.1, { flip: 1 }]] },
    ],

    'parlamento-torre-cn': [
        { alt: 'Las Colinas del Parlamento en Ottawa', cielo: 'dia', suelo: 'pasto', items: [['parlamento', 215, 232, 1.2]], gente: [['mountie', 90, 274, 1.1], ['turista_ca', 330, 276, 1, { flip: 1, pose: 'señala', obj: 'camara' }]] },
        { alt: 'La Torre CN de Toronto', cielo: 'atardecer', suelo: 'calle', items: [['torre_cn', 210, 262, 1.2], ['ciudad_ny', 90, 214, .5]], gente: [['turista_ca', 330, 278, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'El Château Frontenac de Québec', cielo: 'dia', suelo: 'piedra', items: [['chateau_frontenac', 215, 232, 1.1], ['muralla_quebec', 100, 240, .6]], gente: [['quebecoise', 330, 276, 1, { flip: 1 }]] },
        { alt: 'La Basílica de Notre-Dame de Montreal', cielo: 'dia', suelo: 'piedra', items: [['notre_dame_mtl', 215, 232, 1.2]], gente: [['quebecois', 90, 276, 1.05, { pose: 'señala' }], ['nina', 330, 278, 1, { flip: 1, pose: 'arriba' }]] },
    ],

    'niagara-parques': [
        { alt: 'Las Cataratas del Niágara', cielo: 'dia', suelo: 'agua', items: [['cataratas_niagara', 200, 238, 1.3]], gente: [['turista_ca', 90, 276, 1.05, { pose: 'señala' }]] },
        { alt: 'Banff y el lago Louise', cielo: 'dia', suelo: 'agua', items: [['rocosas', 200, 205, 1.2], ['lago_canada', 200, 252, .9]], gente: [['guardabosques_ca', 330, 266, 1, { flip: 1, pose: 'señala' }]] },
        { alt: 'Las mareas de la Bahía de Fundy', cielo: 'atardecer', suelo: 'agua', items: [['olas_fundy', 200, 236, 1.2]], gente: [['turista_ca', 110, 266, 1.05, { pose: 'arriba' }]] },
        { alt: 'Fauna: alces y osos', cielo: 'dia', suelo: 'pasto', items: [['bosque_nieve', 200, 205, 1], ['alce', 110, 264, 1.2], ['oso_polar', 300, 262, .9]], gente: [['guardabosques_ca', 210, 276, 1, { pose: 'señala' }]] },
    ],
};
