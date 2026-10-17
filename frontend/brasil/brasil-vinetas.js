// Escenas ilustradas de las historietas de Brasil: 4 por tema.
window.VINETAS = {

    'pueblos-indigenas': [
        { alt: 'Los tupí-guaraníes en la costa', cielo: 'dia', suelo: 'arena', items: [['palmeras', 340, 238, 1.1], ['oca', 210, 236, 1]], gente: [['tupi', 90, 272, 1.1, { pose: 'señala' }], ['tupi_mujer', 320, 276, 1, { flip: 1 }]] },
        { alt: 'La selva amazónica y sus pueblos', cielo: 'dia', suelo: 'pasto', items: [['selva_amazonia', 200, 205, 1.2], ['tucan', 330, 250, 1]], gente: [['indigena_pintado', 130, 272, 1.15], ['kayapo', 260, 274, 1.1, { flip: 1 }]] },
        { alt: 'Cerámica de la isla de Marajó', cielo: 'dia', suelo: 'tierra', items: [['cazuela', 130, 262, 1.5], ['cazuela', 290, 266, 1.2]], gente: [['tupi_mujer', 215, 274, 1.1, { pose: 'sostiene' }]] },
        { alt: 'Cocar y pintura corporal', cielo: 'atardecer', suelo: 'tierra', items: [['oca', 320, 238, .8]], gente: [['indigena_pintado', 120, 272, 1.2], ['kayapo', 230, 274, 1.15, { flip: 1 }]] },
    ],

    'colonia-portugal': [
        { alt: 'Cabral llega a la costa de Bahía', cielo: 'dia', suelo: 'agua', items: [['carabela', 150, 214, 1.2], ['palmeras', 350, 225, .8]], gente: [['portugues', 320, 262, 1.05, { flip: 1, pose: 'señala' }]] },
        { alt: 'La cruz de la primera misa', cielo: 'dia', suelo: 'arena', items: [['cruz_cabral', 200, 262, 1.4], ['palmeras', 340, 236, 1]], gente: [['portugues', 110, 272, 1.1], ['tupi', 290, 274, 1.05, { flip: 1 }]] },
        { alt: 'Ingenio de azúcar y trabajo esclavizado', cielo: 'dia', suelo: 'tierra', items: [['ingenio', 220, 232, 1.1], ['canaveral', 80, 262, .7]], gente: [['esclavizado', 150, 274, 1.1, { pose: 'sostiene' }], ['colono', 330, 276, 1, { flip: 1, pose: 'señala' }]] },
        { alt: 'El Quilombo dos Palmares', cielo: 'atardecer', suelo: 'pasto', items: [['quilombo', 200, 238, 1], ['selva_amazonia', 200, 205, .8]], gente: [['zumbi', 150, 272, 1.2], ['afro_mujer', 270, 274, 1.1]] },
    ],

    'independencia-imperio': [
        { alt: 'La corte portuguesa llega a Río', cielo: 'dia', suelo: 'agua', items: [['carabela', 140, 214, 1.2], ['pao_acucar', 330, 220, .6]], gente: [['pedro2', 320, 264, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'El Grito de Ipiranga', cielo: 'dia', suelo: 'pasto', items: [['ipiranga', 200, 232, 1.1], ['caballo', 300, 262, 1.1]], gente: [['dom_pedro', 150, 270, 1.2, { pose: 'arriba' }], ['militar', 80, 276, 1]] },
        { alt: 'Pedro II y el Palacio Imperial', cielo: 'dia', suelo: 'pasto', items: [['palacio_imperial', 210, 214, 1.1]], gente: [['pedro2', 100, 272, 1.1, { pose: 'señala' }], ['dama', 320, 276, 1, { flip: 1 }]] },
        { alt: 'La princesa Isabel firma la Ley Áurea', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 70, 190, 1.1], ['ventana', 330, 190, 1.1]], gente: [['isabel', 130, 262, 1.15, { pose: 'sostiene' }], ['esclavizado', 280, 270, 1.05, { flip: 1, pose: 'arriba' }]], delante: [['mesa', 200, 288, 1.3, { w: 80 }], ['documento', 200, 246, 1.3]] },
    ],

    'republica-moderna': [
        { alt: 'La proclamación de la República', cielo: 'dia', suelo: 'piedra', items: [['palacio_imperial', 215, 214, .9], ['bandera', 335, 240, 1]], gente: [['militar', 100, 272, 1.1, { pose: 'arriba' }], ['presidente', 300, 274, 1.05, { flip: 1 }]] },
        { alt: 'Vargas y los derechos de los trabajadores', cielo: 'dia', suelo: 'calle', items: [['fabrica', 215, 214, 1.1]], gente: [['presidente', 110, 272, 1.15, { pose: 'señala' }], ['obrero', 310, 276, 1.05, { flip: 1, pose: 'arriba' }]] },
        { alt: 'La construcción de Brasília', cielo: 'dia', suelo: 'tierra', items: [['congreso_brasilia', 215, 232, 1], ['catedral_brasilia', 70, 250, .7]], gente: [['arquitecto', 110, 274, 1.1], ['obrero', 320, 276, 1, { flip: 1 }]] },
        { alt: 'Se aprueba la Constitución Ciudadana', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 330, 190, 1.1], ['bandera', 70, 262, .9]], gente: [['presidente', 160, 264, 1.15, { pose: 'arriba' }], ['escritora_br', 265, 268, 1.05, { flip: 1 }]], delante: [['documento', 200, 262, 1.1]] },
    ],

    diversidad: [
        { alt: 'Tres raíces: indígena, africana y europea', cielo: 'dia', suelo: 'pasto', items: [['montes', 200, 205, 1]], gente: [['tupi', 90, 272, 1.1], ['esclavizado', 175, 274, 1.05], ['colono', 255, 272, 1.05], ['afro_mujer', 330, 276, 1, { flip: 1 }]] },
        { alt: 'La comunidad japonesa de Liberdade', cielo: 'dia', suelo: 'calle', items: [['papel_picado', 200, 90, 1.2], ['edificio', 330, 210, .8]], gente: [['inmigrante_jp', 120, 274, 1.1, { pose: 'señala' }], ['nina', 230, 278, 1]] },
        { alt: 'Colonias alemanas e italianas del sur', cielo: 'dia', suelo: 'pasto', items: [['montes', 200, 205, 1, { c: '#9aa8c4' }], ['ranchito', 330, 240, .9]], gente: [['colono', 130, 272, 1.1, { pose: 'sostiene' }], ['dama', 240, 276, 1]] },
        { alt: 'Una lengua común: el portugués', cielo: 'dia', suelo: 'calle', items: [['musica', 200, 120, 1.4]], gente: [['nino', 100, 276, 1.05, { pose: 'arriba' }], ['esclavizado', 200, 276, 1], ['nina', 300, 276, 1.05, { flip: 1, pose: 'arriba' }]] },
    ],

    regiones: [
        { alt: 'La Amazonía y el gran río', cielo: 'dia', suelo: 'agua', items: [['selva_amazonia', 200, 205, 1.2], ['victoria_regia', 90, 258, .9]], gente: [['pescador_br', 320, 266, 1.05, { flip: 1, pose: 'señala' }]] },
        { alt: 'El Pantanal y sus animales', cielo: 'dia', suelo: 'agua', items: [['pantanal', 200, 232, 1.1], ['yacare', 150, 262, 1], ['jaguar', 320, 262, .8]], gente: [['guia_br', 80, 266, 1, { pose: 'señala' }]] },
        { alt: 'Los Lençóis Maranhenses', cielo: 'dia', suelo: 'arena', items: [['dunas', 200, 232, 1.2]], gente: [['nina', 110, 276, 1.05, { pose: 'arriba' }], ['nino', 290, 278, 1, { flip: 1 }]] },
        { alt: 'Fernando de Noronha', cielo: 'dia', suelo: 'agua', items: [['fernando_noronha', 200, 224, 1.2], ['jangada', 80, 252, .8]], gente: [['pescador_br', 330, 266, 1, { flip: 1 }]] },
    ],

    'feijoada-pao-queijo': [
        { alt: 'Una feijoada de sábado', cielo: 'cocina', suelo: 'ninguno', items: [['feijoada', 200, 252, 2.2]], gente: [['baiana', 80, 272, 1.05, { pose: 'sostiene' }], ['nino', 325, 276, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'Pão de queijo en Minas Gerais', cielo: 'cocina', suelo: 'ninguno', items: [['pao_queijo', 200, 254, 2.2]], gente: [['cocinera', 85, 270, 1.05, { pose: 'señala' }]] },
        { alt: 'Brigadeiros para el cumpleaños', cielo: 'cocina', suelo: 'ninguno', items: [['papel_picado', 200, 80, 1.1], ['cacao', 120, 258, 1.3]], gente: [['nina', 230, 276, 1.1, { pose: 'arriba' }], ['cocinera', 320, 272, 1, { flip: 1 }]] },
        { alt: 'El açaí de la Amazonía', cielo: 'dia', suelo: 'agua', items: [['acai', 200, 258, 2.2], ['palmeras', 340, 235, 1]], gente: [['pescador_br', 80, 266, 1.05, { pose: 'señala' }]] },
    ],

    'churrasco-acaraje': [
        { alt: 'El churrasco del sur', cielo: 'atardecer', suelo: 'pasto', items: [['parrilla', 200, 262, 1.4], ['churrasco_espeto', 330, 262, 1]], gente: [['gaucho_br', 90, 272, 1.1, { pose: 'señala' }]] },
        { alt: 'La baiana vende acarajé', cielo: 'dia', suelo: 'calle', items: [['pelourinho', 200, 214, 1], ['acaraje', 90, 266, 1.4]], gente: [['baiana', 240, 274, 1.15, { pose: 'sostiene' }]] },
        { alt: 'Moqueca con leche de coco', cielo: 'cocina', suelo: 'ninguno', items: [['moqueca', 200, 254, 2.2]], gente: [['cocinera', 85, 270, 1.05, { pose: 'señala' }], ['pescador_br', 325, 276, 1, { flip: 1 }]] },
        { alt: 'Caipirinha y guaraná', cielo: 'dia', suelo: 'arena', items: [['caipirinha', 140, 264, 2], ['palmeras', 340, 235, 1]], gente: [['sambista', 250, 272, 1.1, { pose: 'sostiene' }]] },
    ],

    'samba-bossa': [
        { alt: 'La roda de samba', cielo: 'noche', suelo: 'calle', items: [['surdo', 90, 268, 1.2], ['luna', 330, 60, .7]], gente: [['sambista', 180, 272, 1.15, { pose: 'sostiene', obj: 'pandeiro' }], ['ritmista', 270, 274, 1.1, { flip: 1 }]] },
        { alt: 'Los instrumentos del samba', cielo: 'dia', suelo: 'calle', items: [['surdo', 110, 268, 1.4], ['musica', 300, 120, 1.4]], gente: [['ritmista', 200, 274, 1.1, { pose: 'sostiene', obj: 'pandeiro' }]] },
        { alt: 'La bossa nova en Ipanema', cielo: 'atardecer', suelo: 'arena', items: [['palmeras', 340, 235, 1.1], ['copacabana', 200, 254, .9]], gente: [['musico_bossa', 150, 272, 1.15]] },
        { alt: 'Garota de Ipanema', cielo: 'atardecer', suelo: 'arena', items: [['musica', 300, 120, 1.4], ['pao_acucar', 100, 222, .6]], gente: [['musico_bossa', 190, 272, 1.1], ['passista', 270, 274, 1.05, { flip: 1 }]] },
    ],

    'mpb-forro': [
        { alt: 'La MPB y sus voces', cielo: 'noche', suelo: 'piso', items: [['escenario', 200, 240, 1.2], ['reflector', 70, 140, 1]], gente: [['cantor_mpb', 200, 262, 1.2]] },
        { alt: 'El Tropicalismo de 1967', cielo: 'atardecer', suelo: 'calle', items: [['palmeras', 80, 235, 1], ['musica', 300, 120, 1.5]], gente: [['cantor_mpb', 160, 272, 1.1], ['musico_bossa', 250, 272, 1.1, { flip: 1 }]] },
        { alt: 'Luiz Gonzaga y el acordeón del sertão', cielo: 'atardecer', suelo: 'tierra', items: [['montes', 200, 205, 1, { c: '#c28f60' }]], gente: [['forrozeiro', 160, 272, 1.2]] },
        { alt: 'El forró en la fiesta junina', cielo: 'noche', suelo: 'tierra', items: [['banderines', 200, 70, 1.2], ['fogueira', 330, 262, 1]], gente: [['sanfoneiro_dancante', 130, 272, 1.1, { pose: 'arriba' }], ['juninos_mujer', 230, 274, 1.1, { flip: 1 }]] },
    ],

    capoeira: [
        { alt: 'La roda de capoeira', cielo: 'dia', suelo: 'calle', items: [['roda_capoeira', 200, 276, 1.2], ['pelourinho', 200, 212, .9]], gente: [['capoeirista', 150, 270, 1.15, { pose: 'dos' }], ['capoeirista', 260, 270, 1.15, { flip: 1, pose: 'dos' }]] },
        { alt: 'El berimbau marca el ritmo', cielo: 'dia', suelo: 'arena', items: [['berimbau_g', 90, 270, 1.3], ['palmeras', 340, 235, 1]], gente: [['mestre_capoeira', 220, 272, 1.15]] },
        { alt: 'Mestre Bimba y Mestre Pastinha', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 330, 190, 1.1]], gente: [['mestre_capoeira', 130, 264, 1.15], ['capoeirista', 250, 268, 1.1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'Capoeira por el mundo', cielo: 'dia', suelo: 'piedra', items: [['musica', 200, 120, 1.5]], gente: [['capoeirista', 110, 272, 1.1, { pose: 'dos' }], ['nino', 210, 276, 1, { pose: 'arriba' }], ['capoeirista', 300, 274, 1.1, { flip: 1, pose: 'dos' }]] },
    ],

    'frevo-maracatu': [
        { alt: 'El frevo y la sombrinha', cielo: 'dia', suelo: 'calle', items: [['banderines', 200, 70, 1.2]], gente: [['frevista', 130, 272, 1.2], ['frevista', 270, 272, 1.2, { flip: 1 }]] },
        { alt: 'Olinda y sus calles de carnaval', cielo: 'dia', suelo: 'calle', items: [['igreja_barroca', 300, 214, .7], ['banderines', 150, 80, 1]], gente: [['frevista', 140, 274, 1.1, { pose: 'arriba' }], ['passista', 220, 276, 1, { flip: 1, pose: 'abre' }]] },
        { alt: 'El maracatu y su corte', cielo: 'atardecer', suelo: 'calle', items: [['surdo', 90, 268, 1.2]], gente: [['maracatu_rey', 190, 272, 1.15], ['maracatu_reina', 270, 274, 1.15, { flip: 1 }]] },
        { alt: 'Miles bailan en el Galo da Madrugada', cielo: 'noche', suelo: 'calle', items: [['papel_picado', 200, 80, 1.3], ['luna', 330, 60, .7]], gente: [['frevista', 90, 276, 1], ['passista', 190, 278, 1.05, { pose: 'arriba' }], ['frevista', 300, 276, 1, { flip: 1 }]] },
    ],

    'aleijadinho-barroco': [
        { alt: 'Ouro Preto, ciudad del oro', cielo: 'dia', suelo: 'piedra', items: [['ouro_preto', 200, 222, 1.1]], gente: [['minero_br', 100, 274, 1.05, { pose: 'sostiene' }], ['nina', 320, 278, 1, { flip: 1, pose: 'señala' }]] },
        { alt: 'Iglesia barroca con altares dorados', cielo: 'dia', suelo: 'piedra', items: [['igreja_barroca', 215, 214, 1.1], ['oro_barras', 80, 266, 1.2]], gente: [['colono', 330, 276, 1, { flip: 1 }]] },
        { alt: 'Aleijadinho esculpe los profetas', cielo: 'dia', suelo: 'pasto', items: [['profeta_piedra', 150, 262, 1.4], ['profeta_piedra', 290, 262, 1.2]], gente: [['esclavizado', 215, 274, 1.1, { pose: 'sostiene' }]] },
        { alt: 'La Inconfidencia Mineira y Tiradentes', cielo: 'atardecer', suelo: 'piedra', items: [['ouro_preto', 200, 222, .9], ['bandera', 335, 240, 1]], gente: [['zumbi', 130, 272, 1.15, { pose: 'arriba' }], ['colono', 250, 274, 1.05]] },
    ],

    'modernismo-tarsila': [
        { alt: 'La Semana de Arte Moderno', cielo: 'noche', suelo: 'piso', items: [['escenario', 200, 240, 1.3], ['reflector', 70, 140, 1]], gente: [['pintora', 150, 264, 1.1], ['escritor_br', 250, 264, 1.05, { flip: 1 }]] },
        { alt: 'Tarsila y el Abaporu', cielo: 'interior', suelo: 'ninguno', items: [['abaporu', 130, 262, 1.5], ['ventana', 330, 190, 1.1]], gente: [['pintora', 260, 266, 1.15]] },
        { alt: 'Portinari pinta a los trabajadores', cielo: 'interior', suelo: 'ninguno', items: [['caballete', 120, 262, 1.2], ['cuadro', 320, 215, 1.1]], gente: [['pintora', 215, 264, 1.1, { pose: 'señala' }]] },
        { alt: 'El MASP y el arte en São Paulo', cielo: 'dia', suelo: 'piedra', items: [['masp', 210, 222, 1.1]], gente: [['nina', 90, 276, 1.05, { pose: 'arriba' }], ['pintora', 320, 276, 1, { flip: 1 }]] },
    ],

    'machado-de-assis': [
        { alt: 'Machado de Assis escribe', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 70, 190, 1.1], ['pila_libros', 330, 266, 1]], gente: [['escritor_br', 200, 262, 1.15, { pose: 'sostiene', obj: 'libro_br' }]], delante: [['escritorio', 200, 290, 1.1]] },
        { alt: 'Memorias póstumas de Brás Cubas', cielo: 'noche', suelo: 'piedra', items: [['luna', 330, 60, .8], ['libro_abierto', 120, 262, 1.8]], gente: [['escritor_br', 250, 270, 1.1, { pose: 'señala' }]] },
        { alt: 'Dom Casmurro y Capitu', cielo: 'atardecer', suelo: 'piedra', items: [['ciudad_colonial', 330, 210, .6]], gente: [['presidente', 130, 270, 1.1, { pose: 'sostiene' }], ['isabel', 250, 272, 1.1, { flip: 1 }]] },
        { alt: 'La Academia Brasileña de Letras', cielo: 'interior', suelo: 'ninguno', items: [['estante', 90, 250, 1.1], ['estante', 330, 250, 1.1]], gente: [['escritor_br', 160, 268, 1.1], ['escritora_br', 250, 268, 1.1]], delante: [['pila_libros', 200, 290, .9]] },
    ],

    'clarice-rosa-amado': [
        { alt: 'Clarice Lispector', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 330, 190, 1.1]], gente: [['escritora_br', 190, 264, 1.2, { pose: 'sostiene', obj: 'libro_br' }]] },
        { alt: 'El sertão de Guimarães Rosa', cielo: 'atardecer', suelo: 'tierra', items: [['montes', 200, 205, 1.1, { c: '#c28f60' }], ['nopal', 330, 262, 1]], gente: [['vaqueiro', 160, 272, 1.15, { pose: 'señala' }]] },
        { alt: 'Jorge Amado y Bahía', cielo: 'dia', suelo: 'calle', items: [['pelourinho', 200, 214, 1]], gente: [['escritor_br', 110, 274, 1.1, { pose: 'sostiene', obj: 'libro_br' }], ['baiana', 300, 276, 1.05, { flip: 1 }]] },
        { alt: 'La literatura de cordel', cielo: 'dia', suelo: 'calle', items: [['cordel', 200, 130, 1.5], ['mercado_br', 90, 266, 1]], gente: [['forrozeiro', 250, 274, 1.1, { pose: 'señala' }]] },
    ],

    'futbol-brasil': [
        { alt: 'Chicos juegan en la playa', cielo: 'dia', suelo: 'arena', items: [['palmeras', 340, 235, 1.1], ['arco', 90, 258, 1]], gente: [['nino', 170, 276, 1.1, { pose: 'corre', obj: 'pelota' }], ['nina', 250, 278, 1.05, { pose: 'arriba' }]] },
        { alt: 'Pelé y el Mundial de 1958', cielo: 'dia', suelo: 'pasto', items: [['maracana', 200, 214, 1.2]], gente: [['pele', 200, 270, 1.2, { obj: 'copa' }]] },
        { alt: 'El Maracaná', cielo: 'noche', suelo: 'pasto', items: [['maracana', 200, 214, 1.3], ['fuegos', 200, 90, 1.2]], gente: [['futbolista_br', 130, 272, 1.1, { pose: 'arriba' }], ['futbolista_br', 270, 274, 1.1, { flip: 1, pose: 'corre' }]] },
        { alt: 'La hinchada brasileña', cielo: 'noche', suelo: 'pasto', items: [['maracana', 200, 214, 1.3]], gente: [['torcedor', 90, 276, 1.1], ['torcedor', 200, 278, 1.1], ['torcedor', 310, 276, 1.1]] },
    ],

    'candomble-religiosidad': [
        { alt: 'Nuestra Señora Aparecida', cielo: 'atardecer', suelo: 'agua', items: [['barco', 150, 218, .8], ['iglesia', 330, 214, .9]], gente: [['pescador_br', 90, 262, 1.1, { pose: 'sostiene' }], ['fiel', 230, 266, 1, { flip: 1 }]] },
        { alt: 'El terreiro de candomblé', cielo: 'noche', suelo: 'tierra', items: [['surdo', 90, 268, 1.3], ['luna', 330, 60, .7]], gente: [['mae_santo', 200, 272, 1.2], ['baiana', 290, 274, 1.1, { flip: 1 }]] },
        { alt: 'Ofrendas a Iemanjá', cielo: 'atardecer', suelo: 'agua', items: [['cempasuchil', 110, 262, 1.2], ['jangada', 330, 252, .8]], gente: [['fiel', 190, 266, 1.1, { pose: 'sostiene' }], ['mae_santo', 260, 268, 1.1, { flip: 1 }]] },
        { alt: 'El Círio de Nazaré en Belém', cielo: 'dia', suelo: 'calle', items: [['iglesia', 300, 214, .9], ['papel_picado', 150, 90, 1]], gente: [['peregrino', 100, 274, 1.1, { pose: 'sostiene' }], ['fiel', 200, 276, 1.05]] },
    ],

    'carnaval-rio': [
        { alt: 'El desfile en el Sambódromo', cielo: 'noche', suelo: 'calle', items: [['sambodromo', 200, 232, 1.2], ['carro_alegorico', 200, 270, .7]], gente: [['passista', 110, 276, 1.05, { pose: 'abre' }], ['mestre_sala', 300, 276, 1, { flip: 1 }]] },
        { alt: 'La pareja de mestre-sala y porta-bandeira', cielo: 'noche', suelo: 'calle', items: [['luna', 330, 60, .7]], gente: [['mestre_sala', 150, 272, 1.2], ['porta_bandeira', 255, 272, 1.2, { flip: 1 }]] },
        { alt: 'La batería y los ritmistas', cielo: 'noche', suelo: 'calle', items: [['surdo', 90, 268, 1.3], ['surdo', 310, 268, 1.3]], gente: [['ritmista', 160, 274, 1.1], ['ritmista', 245, 274, 1.1, { flip: 1 }]] },
        { alt: 'Los blocos en las calles de Río', cielo: 'dia', suelo: 'calle', items: [['banderines', 200, 70, 1.3], ['pao_acucar', 340, 224, .5]], gente: [['passista', 110, 276, 1.05, { pose: 'arriba' }], ['sambista', 200, 278, 1.05], ['passista', 300, 276, 1.05, { flip: 1, pose: 'abre' }]] },
    ],

    'festa-junina-parintins': [
        { alt: 'Las hogueras de San Juan', cielo: 'noche', suelo: 'tierra', items: [['banderines', 200, 70, 1.3], ['fogueira', 200, 262, 1.4]], gente: [['sanfoneiro_dancante', 100, 274, 1.1, { pose: 'arriba' }], ['juninos_mujer', 310, 276, 1.1, { flip: 1 }]] },
        { alt: 'La quadrilha junina', cielo: 'noche', suelo: 'tierra', items: [['banderines', 200, 70, 1.3]], gente: [['sanfoneiro_dancante', 140, 272, 1.15, { pose: 'arriba' }], ['juninos_mujer', 260, 272, 1.15, { flip: 1, pose: 'abre' }]] },
        { alt: 'Comidas de maíz', cielo: 'cocina', suelo: 'ninguno', items: [['maiz_mazorca', 130, 256, 1.8], ['cazuela', 290, 256, 1.3]], gente: [['cocinera', 215, 272, 1.05, { pose: 'sostiene' }]] },
        { alt: 'El Boi-Bumbá de Parintins', cielo: 'noche', suelo: 'piso', items: [['bumbodromo', 200, 232, 1.2], ['boi', 200, 268, 1.2]], gente: [['indigena_pintado', 90, 276, 1.05, { pose: 'arriba' }], ['tupi_mujer', 320, 278, 1, { flip: 1 }]] },
    ],

    'baiana-vaqueiro': [
        { alt: 'La baiana de Salvador', cielo: 'dia', suelo: 'calle', items: [['pelourinho', 210, 214, 1]], gente: [['baiana', 150, 274, 1.25, { pose: 'sostiene' }]] },
        { alt: 'Collares de cuentas de los orixás', cielo: 'interior', suelo: 'ninguno', items: [['ventana', 330, 190, 1.1]], gente: [['mae_santo', 150, 264, 1.2], ['baiana', 260, 268, 1.1, { flip: 1 }]] },
        { alt: 'El vaqueiro y su traje de cuero', cielo: 'atardecer', suelo: 'tierra', items: [['montes', 200, 205, 1, { c: '#c28f60' }], ['nopal', 330, 262, 1], ['vaca', 80, 264, .9]], gente: [['vaqueiro', 210, 272, 1.2]] },
        { alt: 'El gaúcho del sur', cielo: 'dia', suelo: 'pasto', items: [['pampa', 200, 215, 1.1], ['caballo', 300, 262, 1.2]], gente: [['gaucho_br', 130, 272, 1.15, { pose: 'señala' }]] },
    ],

    'moda-indigena-playa': [
        { alt: 'Pintura corporal con urucú', cielo: 'dia', suelo: 'pasto', items: [['oca', 320, 238, .8]], gente: [['kayapo', 140, 272, 1.2], ['tupi_mujer', 240, 274, 1.1, { flip: 1, pose: 'sostiene' }]] },
        { alt: 'El cocar de plumas', cielo: 'dia', suelo: 'pasto', items: [['selva_amazonia', 200, 205, 1], ['tucan', 330, 250, 1]], gente: [['indigena_pintado', 170, 272, 1.25]] },
        { alt: 'Playa, canga y Havaianas', cielo: 'dia', suelo: 'arena', items: [['copacabana', 200, 258, .9], ['palmeras', 340, 235, 1]], gente: [['nina', 120, 276, 1.1, { pose: 'arriba' }], ['nino', 220, 278, 1.05]] },
        { alt: 'La camiseta amarilla de la selección', cielo: 'dia', suelo: 'pasto', items: [['maracana', 200, 214, 1.1]], gente: [['futbolista_br', 130, 272, 1.15, { pose: 'arriba' }], ['torcedor', 270, 274, 1.1, { flip: 1, pose: 'dos' }]] },
    ],

    'cristo-redentor': [
        { alt: 'El Cristo Redentor sobre Río', cielo: 'dia', suelo: 'pasto', items: [['montes', 200, 205, 1.1, { c: '#6a9a7a' }], ['cristo_redentor', 210, 240, 1.4]], gente: [['nina', 90, 276, 1.05, { pose: 'señala' }]] },
        { alt: 'El Pan de Azúcar y su teleférico', cielo: 'atardecer', suelo: 'agua', items: [['pao_acucar', 210, 222, 1.3]], gente: [['guia_br', 90, 262, 1.05, { pose: 'señala' }]] },
        { alt: 'Copacabana y sus ondas', cielo: 'dia', suelo: 'arena', items: [['copacabana', 200, 252, 1.2], ['palmeras', 340, 232, 1.1]], gente: [['nino', 110, 276, 1.1, { pose: 'arriba' }], ['nina', 250, 278, 1.05]] },
        { alt: 'La escalera Selarón', cielo: 'dia', suelo: 'calle', items: [['escalera_selaron', 210, 262, 1.4]], gente: [['pintora', 90, 276, 1.05, { pose: 'señala' }]] },
    ],

    'brasilia-iguazu-amazonas': [
        { alt: 'Brasília y el Congreso Nacional', cielo: 'dia', suelo: 'piedra', items: [['congreso_brasilia', 215, 226, 1.1], ['catedral_brasilia', 70, 250, .6]], gente: [['arquitecto', 330, 276, 1, { flip: 1, pose: 'señala' }]] },
        { alt: 'La catedral de Niemeyer', cielo: 'atardecer', suelo: 'piedra', items: [['catedral_brasilia', 210, 262, 1.6]], gente: [['arquitecto', 90, 276, 1.05, { pose: 'señala' }], ['nina', 330, 278, 1, { flip: 1, pose: 'arriba' }]] },
        { alt: 'Las cataratas de Foz do Iguaçu', cielo: 'dia', suelo: 'pasto', items: [['cataratas', 200, 240, 1.3], ['selva_amazonia', 330, 205, .6]], gente: [['guia_br', 80, 276, 1, { pose: 'señala' }]] },
        { alt: 'El Teatro Amazonas y el encuentro de aguas', cielo: 'dia', suelo: 'agua', items: [['teatro_amazonas', 120, 222, 1], ['encuentro_aguas', 300, 250, .8]], gente: [['pescador_br', 330, 262, .9, { flip: 1 }]] },
    ],
};
