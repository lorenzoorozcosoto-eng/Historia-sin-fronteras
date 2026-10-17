// Contenido de México: categorías → temas.
// Cada tema tiene una historia y 4 "ideas clave" (e = emoji, t = título, d = descripción corta).
// Con ellas se arman automáticamente la historieta, el mapa mental, las tarjetas y el juego de parejas.
// Las preguntas se escriben con la respuesta correcta primero; el orden se mezcla al jugar.
window.PAIS = {
    iso: 'MX',
    nombre: 'México',
    bandera: '🇲🇽',
    banderaImg: 'https://flagcdn.com/w160/mx.png',
    categorias: [
        {
            id: 'historia', nombre: 'Historia', icono: '🏛️', temas: [
                {
                    id: 'prehispanica', titulo: 'Civilizaciones prehispánicas', icono: '🗿', wiki: ['Teotihuacan'],
                    dato: 'Los mayas desarrollaron un sistema de numeración que ya usaba el cero, siglos antes de que llegara a Europa.',
                    historia: [
                        'Mucho antes de que existiera México, el territorio ya estaba habitado por grandes culturas. Los olmecas (1200–400 a. C.), considerados la "cultura madre" de Mesoamérica, esculpieron enormes cabezas de piedra. Después florecieron Teotihuacán, la ciudad de las pirámides, y los mayas, grandes astrónomos y matemáticos del sur y de la península de Yucatán.',
                        'En el siglo XIV los mexicas (aztecas) fundaron Tenochtitlán en un islote del lago de Texcoco, en 1325 según la tradición. Esa ciudad llegó a ser una de las más grandes del mundo, con canales, mercados y templos. Los pueblos mesoamericanos cultivaban maíz, frijol y calabaza, tenían calendarios muy precisos y escribían con códices y glifos.'
                    ],
                    ideas: [
                        { e: '🗿', t: 'Olmecas', d: 'Cultura madre de Mesoamérica; esculpieron cabezas colosales.' },
                        { e: '🔭', t: 'Mayas', d: 'Astrónomos y matemáticos; usaron el cero y un calendario exacto.' },
                        { e: '🔺', t: 'Teotihuacán', d: 'Ciudad de las pirámides del Sol y de la Luna.' },
                        { e: '🌊', t: 'Tenochtitlán', d: 'Capital mexica fundada en 1325 sobre un lago.' }
                    ],
                    lugares: 'Teotihuacán, Palenque, Tikal (región maya), Templo Mayor',
                    preguntas: [
                        ['¿Qué ciudad fundaron los mexicas sobre un lago?', ['Tenochtitlán', 'Cuzco', 'Tikal', 'Roma']],
                        ['¿Qué cultura es considerada la "cultura madre" de Mesoamérica?', ['Olmeca', 'Inca', 'Vikinga', 'Egipcia']],
                        ['¿Qué avance matemático usaron los mayas?', ['El número cero', 'La calculadora', 'El ábaco chino', 'La imprenta']]
                    ]
                },
                {
                    id: 'conquista', titulo: 'Conquista y Nueva España', icono: '⚔️', wiki: ['Fall of Tenochtitlan', 'Hernán Cortés'],
                    dato: 'Los españoles se aliaron con pueblos como los tlaxcaltecas, enemigos de los mexicas; sin ellos la conquista habría sido muy difícil.',
                    historia: [
                        'En 1519 Hernán Cortés llegó a las costas de Veracruz con unos 550 hombres. Se alió con pueblos que vivían sometidos a los mexicas, como los tlaxcaltecas, y llegó a Tenochtitlán, donde fue recibido por el emperador Moctezuma II. Tras meses de tensión, la guerra terminó el 13 de agosto de 1521 con la caída de la ciudad y la captura de Cuauhtémoc, último tlatoani.',
                        'Sobre las ruinas de Tenochtitlán se levantó la Ciudad de México, capital del Virreinato de la Nueva España (1535–1821). Durante tres siglos se mezclaron pueblos indígenas, españoles y africanos. Esa mezcla dio origen a una cultura nueva: el idioma español, la religión católica y las tradiciones indígenas se combinaron en la comida, la música y las fiestas.'
                    ],
                    ideas: [
                        { e: '⛵', t: '1519', d: 'Hernán Cortés desembarca en Veracruz.' },
                        { e: '🤝', t: 'Alianzas', d: 'Los tlaxcaltecas y otros pueblos se unen a los españoles.' },
                        { e: '🏹', t: '1521', d: 'Cae Tenochtitlán y es capturado Cuauhtémoc.' },
                        { e: '👑', t: 'Nueva España', d: 'Virreinato que duró casi tres siglos (1535–1821).' }
                    ],
                    lugares: 'Veracruz, Tlaxcala, Centro Histórico de la Ciudad de México',
                    preguntas: [
                        ['¿En qué año cayó Tenochtitlán?', ['1521', '1492', '1810', '1910']],
                        ['¿Cómo se llamó el territorio español en lo que hoy es México?', ['Nueva España', 'Nueva Granada', 'Brasil', 'La Florida']],
                        ['¿Quién fue el último tlatoani mexica?', ['Cuauhtémoc', 'Hidalgo', 'Juárez', 'Zapata']]
                    ]
                },
                {
                    id: 'independencia', titulo: 'Independencia de México', icono: '🔔', wiki: ['Mexican War of Independence', 'Miguel Hidalgo y Costilla'],
                    dato: 'El Grito de Dolores no ocurrió el 16 de septiembre por casualidad: Hidalgo se adelantó porque la conspiración había sido descubierta.',
                    historia: [
                        'En la madrugada del 16 de septiembre de 1810, el sacerdote Miguel Hidalgo tocó las campanas de Dolores (Guanajuato) y llamó al pueblo a levantarse contra el dominio español: es el Grito de Dolores. Lo siguieron José María Morelos, Ignacio Allende, Josefa Ortiz de Domínguez y muchos otros. Hidalgo y Morelos fueron capturados y fusilados, pero la lucha continuó.',
                        'Después de once años de guerra, Vicente Guerrero y Agustín de Iturbide se unieron bajo el Plan de Iguala y el Ejército Trigarante entró a la Ciudad de México el 27 de septiembre de 1821, consumando la independencia. México comenzó entonces su vida como nación libre, con grandes retos políticos.'
                    ],
                    ideas: [
                        { e: '🔔', t: 'Grito de Dolores', d: '16 de septiembre de 1810, inicio de la guerra.' },
                        { e: '👤', t: 'Héroes', d: 'Hidalgo, Morelos, Allende, Josefa Ortiz y Guerrero.' },
                        { e: '📜', t: 'Plan de Iguala', d: 'Acuerdo de 1821 que hizo posible la independencia.' },
                        { e: '🇲🇽', t: '1821', d: 'El Ejército Trigarante entra a la capital.' }
                    ],
                    lugares: 'Dolores Hidalgo (Guanajuato), Alhóndiga de Granaditas, Iguala',
                    preguntas: [
                        ['¿Quién dio el Grito de Dolores?', ['Miguel Hidalgo', 'Benito Juárez', 'Porfirio Díaz', 'Hernán Cortés']],
                        ['¿En qué año comenzó la guerra de Independencia?', ['1810', '1521', '1910', '1857']],
                        ['¿En qué año se consumó la independencia?', ['1821', '1810', '1867', '1917']]
                    ]
                },
                {
                    id: 'revolucion', titulo: 'Revolución Mexicana', icono: '🐎', wiki: ['Emiliano Zapata', 'Mexican Revolution'],
                    dato: 'La Constitución de 1917, nacida de la Revolución, fue de las primeras del mundo en reconocer derechos sociales y laborales.',
                    historia: [
                        'Durante más de treinta años gobernó Porfirio Díaz (el "Porfiriato"). Había progreso económico, pero también mucha desigualdad y falta de libertades. En 1910 Francisco I. Madero llamó a levantarse con el Plan de San Luis y comenzó la Revolución Mexicana.',
                        'Emiliano Zapata, en el sur, exigía "Tierra y Libertad" para los campesinos; Francisco "Pancho" Villa lideraba a los revolucionarios del norte. Tras años de guerra se promulgó la Constitución de 1917, que estableció la educación pública, el reparto de tierras y derechos para los trabajadores. La Revolución cambió la política, el arte y la identidad del país.'
                    ],
                    ideas: [
                        { e: '📣', t: '1910', d: 'Madero convoca al levantamiento contra Porfirio Díaz.' },
                        { e: '🌽', t: 'Zapata', d: 'Líder del sur: "Tierra y Libertad".' },
                        { e: '🐎', t: 'Pancho Villa', d: 'Líder revolucionario del norte del país.' },
                        { e: '📖', t: 'Constitución de 1917', d: 'Reconoce derechos sociales, educación y reparto de tierras.' }
                    ],
                    lugares: 'Chihuahua, Morelos, Querétaro (Constitución de 1917), Museo de la Revolución',
                    preguntas: [
                        ['¿En qué año comenzó la Revolución Mexicana?', ['1910', '1810', '1821', '1521']],
                        ['¿Qué lema se asocia a Emiliano Zapata?', ['Tierra y Libertad', 'Libertad o muerte', 'Paz y Orden', 'Viva el rey']],
                        ['¿Qué documento se promulgó en 1917?', ['La Constitución', 'El Plan de Iguala', 'El Grito de Dolores', 'La Reforma agraria del 1500']]
                    ]
                }
            ]
        },
        {
            id: 'cultura', nombre: 'Cultura', icono: '🎎', temas: [
                {
                    id: 'mestizaje', titulo: 'Identidad mestiza', icono: '🤝', wiki: ['Mestizo', 'Casta painting'],
                    dato: 'Hoy se hablan en México 68 lenguas indígenas, además del español.',
                    historia: [
                        'La identidad mexicana nació de la mezcla de tres raíces: la indígena, la española y la africana. Esa mezcla se llama mestizaje y se nota en el idioma, la comida, la música, la religión y las fiestas. Durante la Colonia se pintaron cuadros de castas que mostraban las combinaciones entre los distintos grupos.',
                        'Después de la Revolución, el Estado impulsó la idea del "mexicano mestizo" como símbolo nacional. Hoy se reconoce además que México es un país pluricultural: conviven pueblos indígenas, comunidades afromexicanas y una gran diversidad regional.'
                    ],
                    ideas: [
                        { e: '🌎', t: 'Raíz indígena', d: 'Lenguas, maíz, cosmovisión y arte de los pueblos originarios.' },
                        { e: '🏰', t: 'Raíz española', d: 'Idioma español, religión católica y arquitectura colonial.' },
                        { e: '🥁', t: 'Raíz africana', d: 'Música, ritmos y tradiciones, sobre todo en la Costa Chica y Veracruz.' },
                        { e: '🎨', t: 'Cuadros de castas', d: 'Pinturas coloniales que mostraban la mezcla de los pueblos.' }
                    ],
                    lugares: 'Todo el país; Costa Chica de Guerrero y Oaxaca (afromexicanos)',
                    preguntas: [
                        ['¿Cómo se llama la mezcla de culturas que formó a México?', ['Mestizaje', 'Aislamiento', 'Exilio', 'Migración']],
                        ['¿Cuántas lenguas indígenas se hablan en México aproximadamente?', ['68', '5', '12', '200']],
                        ['¿Cuál NO es una de las tres raíces culturales de México?', ['Asiática', 'Indígena', 'Española', 'Africana']]
                    ]
                },
                {
                    id: 'pueblos', titulo: 'Pueblos originarios y lenguas', icono: '🪶', wiki: ['Huichol people', 'Indigenous peoples of Mexico'],
                    dato: 'El náhuatl, la lengua de los mexicas, nos dejó palabras como chocolate, tomate, aguacate y chicle.',
                    historia: [
                        'México tiene 68 pueblos indígenas reconocidos, entre ellos los nahuas, mayas, zapotecas, mixtecos, otomíes, tarahumaras (rarámuri) y huicholes (wixárika). Cada pueblo tiene su lengua, su música, su vestimenta y su forma de entender el mundo y la naturaleza.',
                        'Estas culturas mantienen vivas sus tradiciones: los rarámuri son famosos por correr distancias enormes, los huicholes crean arte con chaquira y estambre, y los mayas conservan su lengua en la península de Yucatán. Proteger sus lenguas y territorios es una parte importante de la cultura de México.'
                    ],
                    ideas: [
                        { e: '🗣️', t: 'Lenguas', d: 'El náhuatl, maya y zapoteco están entre las más habladas.' },
                        { e: '🏃', t: 'Rarámuri', d: 'Corredores de resistencia de la Sierra Tarahumara.' },
                        { e: '🧵', t: 'Huicholes', d: 'Arte con chaquira y estambre lleno de simbolismo.' },
                        { e: '🍫', t: 'Palabras del náhuatl', d: 'Chocolate, tomate, aguacate y chicle vienen de allí.' }
                    ],
                    lugares: 'Sierra Tarahumara, Sierra de Nayarit y Jalisco, Yucatán, Oaxaca',
                    preguntas: [
                        ['¿De qué lengua vienen las palabras "chocolate" y "tomate"?', ['Náhuatl', 'Latín', 'Inglés', 'Árabe']],
                        ['¿Qué pueblo es famoso por correr largas distancias?', ['Rarámuri', 'Huicholes', 'Mayas', 'Olmecas']],
                        ['¿Con qué materiales crean arte los huicholes?', ['Chaquira y estambre', 'Cristal y acero', 'Mármol', 'Papel de arroz']]
                    ]
                }
            ]
        },
        {
            id: 'gastronomia', nombre: 'Gastronomía', icono: '🌮', temas: [
                {
                    id: 'maiz-tacos', titulo: 'El maíz, la tortilla y los tacos', icono: '🌮', wiki: ['Taco'],
                    dato: 'La cocina mexicana es Patrimonio Cultural Inmaterial de la Humanidad (UNESCO, 2010).',
                    historia: [
                        'El maíz fue domesticado en México hace unos 9.000 años y es la base de la alimentación. Según el Popol Vuh maya, los dioses formaron a los seres humanos con masa de maíz. Con la nixtamalización, un proceso que cuece el grano con cal, se obtiene la masa para hacer tortillas, tamales y atole.',
                        'El taco consiste en una tortilla doblada con un relleno. Hay tacos al pastor (herencia de los inmigrantes libaneses), de carnitas, de suadero, de pescado y muchos más. La cocina mexicana, con maíz, frijol, chile y calabaza, fue declarada Patrimonio Cultural Inmaterial de la Humanidad en 2010.'
                    ],
                    ideas: [
                        { e: '🌽', t: 'Maíz', d: 'Domesticado en México hace unos 9.000 años.' },
                        { e: '🫓', t: 'Tortilla', d: 'Se hace con masa de maíz nixtamalizado.' },
                        { e: '🌮', t: 'Tacos', d: 'Tortilla con relleno: pastor, carnitas, pescado...' },
                        { e: '🏆', t: 'UNESCO 2010', d: 'La cocina mexicana es Patrimonio de la Humanidad.' }
                    ],
                    lugares: 'Todo el país; tacos al pastor en la Ciudad de México',
                    preguntas: [
                        ['¿Cuál es el ingrediente base de la tortilla mexicana?', ['Maíz', 'Arroz', 'Trigo sarraceno', 'Avena']],
                        ['¿Qué reconocimiento recibió la cocina mexicana en 2010?', ['Patrimonio Cultural Inmaterial (UNESCO)', 'Premio Nobel', 'Medalla olímpica', 'Ninguno']],
                        ['¿Cómo se llama el proceso de cocer el maíz con cal?', ['Nixtamalización', 'Fermentación', 'Pasteurización', 'Destilación']]
                    ]
                },
                {
                    id: 'mole', titulo: 'El mole y el chocolate', icono: '🍫', wiki: ['Mole sauce', 'Mole poblano'],
                    dato: 'Un mole puede llevar más de 20 ingredientes, entre ellos chiles, especias, nueces y chocolate.',
                    historia: [
                        'La palabra mole viene del náhuatl "molli", que significa salsa. El mole poblano, el más famoso, mezcla chiles, especias, almendras, ajonjolí y chocolate. Según la leyenda nació en un convento de Puebla, aunque en realidad es el resultado de la fusión de ingredientes indígenas y europeos.',
                        'El cacao, de donde sale el chocolate, era tan valioso para mayas y mexicas que se usaba como moneda y se bebía en ceremonias. Hoy el mole se sirve en bodas, bautizos y fiestas, y cada región tiene el suyo: Oaxaca es famosa por sus siete moles.'
                    ],
                    ideas: [
                        { e: '🌶️', t: 'Origen', d: 'Del náhuatl "molli": salsa.' },
                        { e: '🍫', t: 'Cacao', d: 'Bebida sagrada y moneda entre mayas y mexicas.' },
                        { e: '⛪', t: 'Puebla', d: 'La tradición cuenta que nació en un convento poblano.' },
                        { e: '🎉', t: 'Fiestas', d: 'Se sirve en bodas, bautizos y celebraciones.' }
                    ],
                    lugares: 'Puebla, Oaxaca (los siete moles)',
                    preguntas: [
                        ['¿Qué significa "mole" en náhuatl?', ['Salsa', 'Fuego', 'Maíz', 'Fiesta']],
                        ['¿Qué ingrediente de origen mesoamericano se usa en el mole poblano?', ['Chocolate', 'Soya', 'Queso azul', 'Wasabi']],
                        ['¿Qué estado es famoso por sus siete moles?', ['Oaxaca', 'Sonora', 'Baja California', 'Nuevo León']]
                    ]
                }
            ]
        },
        {
            id: 'musica', nombre: 'Música', icono: '🎺', temas: [
                {
                    id: 'mariachi', titulo: 'El mariachi', icono: '🎺', wiki: ['Mariachi'],
                    dato: 'En 2011 la UNESCO declaró al mariachi Patrimonio Cultural Inmaterial de la Humanidad.',
                    historia: [
                        'El mariachi nació en el occidente de México, en Jalisco, a partir de grupos campesinos que tocaban violines, guitarras y arpas. Con el tiempo se añadieron las trompetas y el traje de charro, y en el siglo XX el cine de oro mexicano lo hizo famoso en todo el mundo.',
                        'Un mariachi típico tiene violines, trompetas, guitarra, vihuela y guitarrón. Interpreta rancheras, boleros y sones como "El Rey", "Cielito Lindo" y "Las Mañanitas". Cada septiembre, en Guadalajara, se celebra el Encuentro Internacional del Mariachi y la Charrería.'
                    ],
                    ideas: [
                        { e: '🎻', t: 'Instrumentos', d: 'Violines, trompetas, guitarra, vihuela y guitarrón.' },
                        { e: '📍', t: 'Jalisco', d: 'Cuna del mariachi, en el occidente de México.' },
                        { e: '🎬', t: 'Cine de oro', d: 'Hizo famoso al mariachi en todo el mundo.' },
                        { e: '🏆', t: 'UNESCO 2011', d: 'Patrimonio Cultural Inmaterial de la Humanidad.' }
                    ],
                    lugares: 'Plaza de los Mariachis (Guadalajara y Ciudad de México), Tlaquepaque',
                    preguntas: [
                        ['¿De qué estado es originario el mariachi?', ['Jalisco', 'Yucatán', 'Chiapas', 'Sonora']],
                        ['¿Qué instrumento NO es típico del mariachi?', ['Sitar', 'Trompeta', 'Violín', 'Guitarrón']],
                        ['¿Cuál es una canción famosa de mariachi?', ['Cielito Lindo', 'La Marsellesa', 'Waka Waka', 'Despacito']]
                    ]
                },
                {
                    id: 'son-jarocho', titulo: 'El son jarocho', icono: '🪕', wiki: ['Son jarocho'],
                    dato: '"La Bamba" es un son jarocho tradicional de Veracruz; la versión de rock de Ritchie Valens (1958) la hizo famosa en el mundo, aunque se parece poco al son tradicional.',
                    historia: [
                        'El son jarocho es la música tradicional del sur de Veracruz. Nace de la mezcla de ritmos españoles, indígenas y africanos. Se toca con jarana, requinto, arpa y se acompaña con el zapateado sobre una tarima, una plataforma de madera que funciona como instrumento de percusión.',
                        'Las letras suelen ser versos improvisados, llamados décimas, que hablan del amor, la naturaleza y la vida diaria. Canciones como "La Bamba", "El Cascabel" y "La Bruja" son sones jarochos. En los fandangos, la comunidad entera baila, canta y toca alrededor de la tarima.'
                    ],
                    ideas: [
                        { e: '🪕', t: 'Jarana', d: 'Guitarra pequeña, el instrumento más característico.' },
                        { e: '👞', t: 'Tarima', d: 'Plataforma de madera sobre la que se zapatea.' },
                        { e: '🎤', t: 'Décimas', d: 'Versos improvisados que se cantan en el son.' },
                        { e: '🎶', t: 'La Bamba', d: 'El son jarocho más conocido del mundo.' }
                    ],
                    lugares: 'Veracruz: Tlacotalpan, Los Tuxtlas',
                    preguntas: [
                        ['¿De qué estado es el son jarocho?', ['Veracruz', 'Chihuahua', 'Zacatecas', 'Baja California']],
                        ['¿Cómo se llama la fiesta donde se toca, canta y baila el son?', ['Fandango', 'Carnaval', 'Concierto sinfónico', 'Ópera']],
                        ['¿Cuál de estas canciones es un son jarocho?', ['La Bamba', 'Cielito Lindo', 'Las Mañanitas', 'Guantanamera']]
                    ]
                }
            ]
        },
        {
            id: 'bailes', nombre: 'Bailes', icono: '💃', temas: [
                {
                    id: 'jarabe-tapatio', titulo: 'Jarabe tapatío', icono: '💃', wiki: ['Jarabe tapatío', 'Jarabe Tapatío'],
                    dato: 'Se le conoce en el mundo como el "Baile del sombrero mexicano" (Mexican Hat Dance).',
                    historia: [
                        'El jarabe tapatío es considerado el baile nacional de México. Se originó en Jalisco en el siglo XIX, y "tapatío" es el nombre de quienes nacen en Guadalajara. Representa el cortejo entre un charro y una china poblana: él la corteja con zapateados y ella le responde con giros de su falda.',
                        'En 1919 la bailarina rusa Anna Pávlova lo conoció en México y lo llevó a Europa y Estados Unidos; desde entonces es símbolo del país. Se baila con el traje de charro y el vestido de china poblana en fiestas patrias y festivales.'
                    ],
                    ideas: [
                        { e: '🏷️', t: 'Baile nacional', d: 'Considerado el baile representativo de México.' },
                        { e: '💑', t: 'Cortejo', d: 'Un charro y una china poblana se enamoran bailando.' },
                        { e: '👞', t: 'Zapateado', d: 'Pasos rápidos de los pies en el suelo.' },
                        { e: '🎩', t: 'Sombrero', d: 'El baile termina junto al sombrero del charro.' }
                    ],
                    lugares: 'Guadalajara (Jalisco); fiestas patrias en todo el país',
                    preguntas: [
                        ['¿Cuál es considerado el baile nacional de México?', ['Jarabe tapatío', 'Tango', 'Flamenco', 'Samba']],
                        ['¿De qué estado se originó el jarabe tapatío?', ['Jalisco', 'Tabasco', 'Coahuila', 'Campeche']],
                        ['¿Qué representa el baile?', ['El cortejo entre un charro y una china poblana', 'Una batalla', 'La cosecha del café', 'Una despedida']]
                    ]
                },
                {
                    id: 'voladores', titulo: 'Danza de los voladores', icono: '🪂', wiki: ['Danza de los Voladores', 'Voladores de Papantla', 'Papantla flyers'],
                    dato: 'Los voladores giran 13 veces cada uno; 4 × 13 = 52, los años del ciclo del calendario mesoamericano.',
                    historia: [
                        'La danza de los voladores es un ritual del pueblo totonaca, de Veracruz. Cinco hombres suben a un poste de entre 18 y 40 metros: uno toca la flauta y el tambor en la cima, y los otros cuatro se lanzan atados con cuerdas, girando cabeza abajo hasta llegar al suelo.',
                        'Cada volador da 13 vueltas, lo que suma 52 en total, igual que los 52 años del siglo mesoamericano. El ritual honra a los dioses para pedir lluvia y fertilidad. En 2009 la UNESCO lo declaró Patrimonio Cultural Inmaterial de la Humanidad.'
                    ],
                    ideas: [
                        { e: '🌲', t: 'El tronco', d: 'Un poste de unos 30 metros del que se lanzan.' },
                        { e: '🎶', t: 'El músico', d: 'En la punta toca flauta y tambor.' },
                        { e: '🔢', t: '13 × 4 = 52', d: 'Las vueltas suman los 52 años del ciclo mesoamericano.' },
                        { e: '🌧️', t: 'Ritual', d: 'Se baila para pedir lluvia y buenas cosechas.' }
                    ],
                    lugares: 'Papantla (Veracruz), Museo Nacional de Antropología (Ciudad de México)',
                    preguntas: [
                        ['¿Qué pueblo realiza la danza de los voladores?', ['Totonaca', 'Maya yucateco', 'Rarámuri', 'Mexica']],
                        ['¿Cuántos hombres participan en el ritual?', ['Cinco', 'Dos', 'Diez', 'Veinte']],
                        ['¿A cuántos años equivalen las 52 vueltas?', ['Al ciclo del calendario mesoamericano', 'A la edad del volador', 'A una década', 'No significan nada']]
                    ]
                }
            ]
        },
        {
            id: 'arte', nombre: 'Arte', icono: '🎨', temas: [
                {
                    id: 'muralismo', titulo: 'El muralismo mexicano', icono: '🖼️', wiki: ['Diego Rivera', 'Mexican muralism'],
                    dato: 'El mural "Sueño de una tarde dominical en la Alameda Central" de Diego Rivera mide casi 15 metros de largo.',
                    historia: [
                        'Después de la Revolución, el gobierno quiso llevar la historia y la cultura al pueblo, y para eso encargó pinturas gigantes en muros de edificios públicos. Nació así el muralismo mexicano, con tres grandes maestros: Diego Rivera, José Clemente Orozco y David Alfaro Siqueiros.',
                        'Rivera pintó la historia de México en el Palacio Nacional; Orozco, escenas intensas en el Hospicio Cabañas de Guadalajara; y Siqueiros experimentó con nuevas técnicas y materiales. Sus murales mostraban a campesinos, obreros e indígenas como protagonistas de la historia y marcaron el arte de todo el continente.'
                    ],
                    ideas: [
                        { e: '🧱', t: 'Murales', d: 'Pinturas gigantes en muros de edificios públicos.' },
                        { e: '👨‍🎨', t: 'Los tres grandes', d: 'Rivera, Orozco y Siqueiros.' },
                        { e: '🏛️', t: 'Palacio Nacional', d: 'Allí Rivera pintó la historia de México.' },
                        { e: '👥', t: 'El pueblo', d: 'Campesinos y obreros como protagonistas del arte.' }
                    ],
                    lugares: 'Palacio Nacional, Museo Mural Diego Rivera, Hospicio Cabañas (Guadalajara)',
                    preguntas: [
                        ['¿Quién pintó murales en el Palacio Nacional sobre la historia de México?', ['Diego Rivera', 'Pablo Picasso', 'Leonardo da Vinci', 'Van Gogh']],
                        ['¿Qué es un mural?', ['Una pintura grande hecha sobre un muro', 'Una escultura de bronce', 'Una canción', 'Una fotografía pequeña']],
                        ['¿Cuál NO fue uno de los tres grandes muralistas?', ['Rufino Tamayo', 'José Clemente Orozco', 'David Alfaro Siqueiros', 'Diego Rivera']]
                    ]
                },
                {
                    id: 'frida', titulo: 'Frida Kahlo', icono: '🌺', wiki: ['Frida Kahlo'],
                    dato: 'Una gran parte de las obras de Frida son autorretratos: decía que se pintaba a sí misma porque era la persona que mejor conocía.',
                    historia: [
                        'Frida Kahlo (1907–1954) nació en Coyoacán, Ciudad de México. A los 18 años sufrió un grave accidente de tránsito que le dejó dolor para toda la vida. Mientras se recuperaba empezó a pintar, y convirtió su vida, su cuerpo y sus emociones en arte.',
                        'Sus cuadros, llenos de símbolos mexicanos, flores, animales y colores intensos, se inspiran en el arte popular. Pintó obras como "Las dos Fridas" y "La columna rota". Se casó con el muralista Diego Rivera. Hoy es un ícono mundial; su casa en Coyoacán, la Casa Azul, es museo.'
                    ],
                    ideas: [
                        { e: '🏠', t: 'La Casa Azul', d: 'Su casa natal en Coyoacán, hoy museo.' },
                        { e: '🪞', t: 'Autorretratos', d: 'Pintó muchas veces su propio rostro.' },
                        { e: '🌺', t: 'Arte popular', d: 'Flores, animales y colores de la cultura mexicana.' },
                        { e: '💔', t: 'Resistencia', d: 'Convirtió el dolor y la enfermedad en arte.' }
                    ],
                    lugares: 'Museo Frida Kahlo (Casa Azul), Coyoacán, Ciudad de México',
                    preguntas: [
                        ['¿Cómo se llama el museo que fue la casa de Frida Kahlo?', ['La Casa Azul', 'La Casa Blanca', 'El Castillo', 'La Hacienda Roja']],
                        ['¿Qué tipo de obra pintó Frida con más frecuencia?', ['Autorretratos', 'Paisajes marinos', 'Batallas', 'Bodegones de frutas']],
                        ['¿Con qué muralista estuvo casada?', ['Diego Rivera', 'Orozco', 'Siqueiros', 'Tamayo']]
                    ]
                }
            ]
        },
        {
            id: 'literatura', nombre: 'Literatura', icono: '📚', temas: [
                {
                    id: 'sor-juana', titulo: 'Sor Juana Inés de la Cruz', icono: '✒️', wiki: ['Juana Inés de la Cruz', 'Sor Juana'],
                    dato: 'Según la tradición, Sor Juana aprendió a leer a los 3 años y pidió disfrazarse de hombre para ir a la universidad, algo que no le permitieron.',
                    historia: [
                        'Juana Inés de Asbaje (1648 o 1651–1695) nació en San Miguel Nepantla. Desde niña fue una lectora extraordinaria. Para poder estudiar y escribir con libertad ingresó al convento de San Jerónimo, donde reunió una de las bibliotecas más grandes de la Nueva España.',
                        'Escribió poesía, teatro y ensayos. Su poema "Primero sueño" y su "Respuesta a Sor Filotea" defienden el derecho de las mujeres a estudiar. Es llamada la "Décima Musa" y es una de las figuras más importantes de la literatura en español. Su rostro aparece en los billetes de 200 pesos.'
                    ],
                    ideas: [
                        { e: '📖', t: 'Niña prodigio', d: 'Aprendió a leer a los 3 años.' },
                        { e: '⛪', t: 'Convento', d: 'Entró a San Jerónimo para poder estudiar.' },
                        { e: '✒️', t: 'Obra', d: 'Poesía, teatro y ensayos, como "Primero sueño".' },
                        { e: '⚖️', t: 'Derecho a estudiar', d: 'Defendió la educación de las mujeres.' }
                    ],
                    lugares: 'San Miguel Nepantla, Ex Convento de San Jerónimo (Claustro de Sor Juana)',
                    preguntas: [
                        ['¿Por qué ingresó Sor Juana al convento?', ['Para poder estudiar y escribir', 'Para viajar a España', 'Para ser militar', 'Por un castigo']],
                        ['¿Qué apodo se le dio a Sor Juana?', ['La Décima Musa', 'La Reina del Sur', 'La Gran Dama', 'La Pluma de Oro']],
                        ['¿En qué siglo vivió Sor Juana?', ['Siglo XVII', 'Siglo XIX', 'Siglo XV', 'Siglo XX']]
                    ]
                },
                {
                    id: 'octavio-paz', titulo: 'Octavio Paz y Juan Rulfo', icono: '🏆', wiki: ['Octavio Paz', 'Juan Rulfo'],
                    dato: 'Juan Rulfo escribió solo dos libros, "Pedro Páramo" y "El llano en llamas", pero revolucionó la novela latinoamericana.',
                    historia: [
                        'Octavio Paz (1914–1998) fue poeta y ensayista. Su libro "El laberinto de la soledad" (1950) reflexiona sobre qué significa ser mexicano. En 1990 recibió el Premio Nobel de Literatura, el primer mexicano en lograrlo.',
                        'Juan Rulfo (1917–1986) nació en Jalisco. Con "Pedro Páramo" (1955), una novela donde los vivos y los muertos conversan en el pueblo de Comala, abrió el camino a escritores como Gabriel García Márquez. Otros autores importantes son Carlos Fuentes, Elena Poniatowska y Rosario Castellanos.'
                    ],
                    ideas: [
                        { e: '🏆', t: 'Nobel 1990', d: 'Octavio Paz, primer mexicano con el Nobel de Literatura.' },
                        { e: '🧩', t: 'El laberinto de la soledad', d: 'Ensayo sobre la identidad del mexicano.' },
                        { e: '👻', t: 'Pedro Páramo', d: 'Novela de Juan Rulfo ambientada en Comala.' },
                        { e: '✍️', t: 'Más autores', d: 'Carlos Fuentes, Elena Poniatowska, Rosario Castellanos.' }
                    ],
                    lugares: 'Biblioteca de México, Casa de las Letras, Sayula (Jalisco, tierra de Rulfo)',
                    preguntas: [
                        ['¿Qué escritor mexicano ganó el Nobel de Literatura en 1990?', ['Octavio Paz', 'Juan Rulfo', 'Carlos Fuentes', 'Gabriel García Márquez']],
                        ['¿Cómo se llama la novela de Juan Rulfo ambientada en Comala?', ['Pedro Páramo', 'Don Quijote', 'Cien años de soledad', 'La Odisea']],
                        ['¿De qué trata "El laberinto de la soledad"?', ['De la identidad del mexicano', 'De un viaje espacial', 'De cocina', 'De deportes']]
                    ]
                }
            ]
        },
        {
            id: 'tradiciones', nombre: 'Tradiciones', icono: '🪅', temas: [
                {
                    id: 'charreria', titulo: 'La charrería', icono: '🤠', wiki: ['Charrería', 'Charro'],
                    dato: 'La charrería fue declarada Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO en 2016.',
                    historia: [
                        'La charrería es el deporte y tradición nacional de México. Nació en las haciendas ganaderas de Jalisco y el centro del país, donde los vaqueros trabajaban con el ganado a caballo. Con el tiempo, esas habilidades se convirtieron en competencias llamadas suertes charras.',
                        'Entre las suertes están la cala de caballo, el lazo de toros y la escaramuza, en la que mujeres con vestidos tradicionales hacen coreografías a caballo. El charro viste sombrero ancho, chaqueta corta, pantalón con botonadura y botas. El Día del Charro se celebra el 14 de septiembre.'
                    ],
                    ideas: [
                        { e: '🐴', t: 'Origen', d: 'Haciendas ganaderas, donde se trabajaba a caballo.' },
                        { e: '🪢', t: 'Suertes charras', d: 'Competencias como el lazo y la cala de caballo.' },
                        { e: '👒', t: 'Escaramuza', d: 'Mujeres que hacen coreografías a caballo.' },
                        { e: '🏆', t: 'UNESCO 2016', d: 'Patrimonio Cultural Inmaterial de la Humanidad.' }
                    ],
                    lugares: 'Lienzos charros de Jalisco, Zacatecas y Ciudad de México',
                    preguntas: [
                        ['¿Cuál es el deporte nacional de México?', ['La charrería', 'El curling', 'El cricket', 'El rugby']],
                        ['¿Cómo se llama la modalidad de mujeres charras?', ['Escaramuza', 'Maratón', 'Slalom', 'Esgrima']],
                        ['¿En qué año fue declarada patrimonio por la UNESCO?', ['2016', '1821', '1950', '1990']]
                    ]
                },
                {
                    id: 'alebrijes', titulo: 'Artesanías y alebrijes', icono: '🐉', wiki: ['Alebrije'],
                    dato: 'Los alebrijes los inventó en los años 30 Pedro Linares, quien soñó con criaturas fantásticas que gritaban "¡Alebrijes!".',
                    historia: [
                        'México tiene una de las tradiciones artesanales más ricas del mundo: cerámica de Talavera de Puebla, textiles de Oaxaca y Chiapas, plata de Taxco, cobre de Santa Clara del Cobre, vidrio soplado y miles de objetos hechos a mano que mantienen técnicas de siglos.',
                        'Los alebrijes son figuras de animales fantásticos pintadas con colores muy vivos. Nacieron en la Ciudad de México con Pedro Linares, que los hacía en cartonería. En Oaxaca, los artesanos de Arrazola y San Martín Tilcajete los tallan en madera de copal. En la película "Coco" aparecen como guías de los espíritus.'
                    ],
                    ideas: [
                        { e: '🏺', t: 'Talavera', d: 'Cerámica pintada de Puebla.' },
                        { e: '🧵', t: 'Textiles', d: 'Telares tradicionales de Oaxaca y Chiapas.' },
                        { e: '🐉', t: 'Alebrijes', d: 'Animales fantásticos de colores brillantes.' },
                        { e: '🧑‍🎨', t: 'Pedro Linares', d: 'Creó los primeros alebrijes en cartonería.' }
                    ],
                    lugares: 'Arrazola y San Martín Tilcajete (Oaxaca), Puebla, Taxco',
                    preguntas: [
                        ['¿Qué son los alebrijes?', ['Figuras de animales fantásticos muy coloridas', 'Un tipo de taco', 'Un baile', 'Una moneda']],
                        ['¿Qué artesanía es típica de Puebla?', ['Talavera', 'Kimono', 'Cristal de Murano', 'Porcelana china']],
                        ['¿Quién creó los primeros alebrijes?', ['Pedro Linares', 'Diego Rivera', 'Frida Kahlo', 'Juan Rulfo']]
                    ]
                }
            ]
        },
        {
            id: 'fiestas', nombre: 'Fiestas', icono: '🎉', temas: [
                {
                    id: 'dia-muertos', titulo: 'Día de Muertos', icono: '💀', wiki: ['Day of the Dead'],
                    dato: 'Se cree que la flor de cempasúchil guía a las almas con su color y su aroma hasta su ofrenda.',
                    historia: [
                        'El Día de Muertos se celebra el 1 y 2 de noviembre. Viene de la fusión de antiguas creencias mesoamericanas, para las que la muerte era parte de la vida, con el calendario católico de Todos los Santos. No es una fiesta triste: es un momento para recordar con alegría a quienes ya no están.',
                        'Las familias arman altares con fotografías, velas, flores de cempasúchil, pan de muerto, calaveritas de azúcar y la comida favorita del difunto. Se cree que las almas regresan a visitar a sus seres queridos. En 2008 la UNESCO declaró la festividad Patrimonio Cultural Inmaterial de la Humanidad.'
                    ],
                    ideas: [
                        { e: '📅', t: '1 y 2 de noviembre', d: 'Se recuerda a niños (1) y a adultos (2).' },
                        { e: '🌼', t: 'Cempasúchil', d: 'La flor que guía a las almas.' },
                        { e: '🍞', t: 'Pan de muerto', d: 'Pan dulce típico de la ofrenda.' },
                        { e: '🕯️', t: 'Altar', d: 'Fotos, velas y la comida favorita del difunto.' }
                    ],
                    lugares: 'Janitzio y Pátzcuaro (Michoacán), Mixquic, Oaxaca, Ciudad de México',
                    preguntas: [
                        ['¿Qué días se celebra el Día de Muertos?', ['1 y 2 de noviembre', '25 de diciembre', '15 de septiembre', '1 de enero']],
                        ['¿Qué flor se usa para guiar a las almas?', ['Cempasúchil', 'Rosa', 'Tulipán', 'Orquídea']],
                        ['¿Cómo se siente la fiesta en México?', ['Es un recuerdo alegre de los seres queridos', 'Es solo de tristeza', 'Se celebra con fuegos artificiales de Año Nuevo', 'Es una competencia deportiva']]
                    ]
                },
                {
                    id: 'guelaguetza', titulo: 'La Guelaguetza', icono: '💃', wiki: ['Guelaguetza'],
                    dato: '"Guelaguetza" significa "ofrenda recíproca" o "compartir" en zapoteco.',
                    historia: [
                        'La Guelaguetza es el gran festival de Oaxaca. Se celebra los dos lunes siguientes al 16 de julio, en un auditorio sobre el Cerro del Fortín. Reúne a delegaciones de las ocho regiones del estado, que bailan con sus trajes tradicionales y reparten regalos como frutas, pan y artesanías al público.',
                        'Sus raíces están en ceremonias indígenas dedicadas a la diosa del maíz Centéotl, que luego se fusionaron con las fiestas de la Virgen del Carmen. La palabra viene del zapoteco y habla de compartir: la comunidad entrega algo y recibe algo a cambio. Es una de las fiestas más coloridas del país.'
                    ],
                    ideas: [
                        { e: '📍', t: 'Oaxaca', d: 'Se celebra en la ciudad de Oaxaca, en el Cerro del Fortín.' },
                        { e: '🗓️', t: 'En julio', d: 'Los dos lunes después del 16 de julio.' },
                        { e: '🎁', t: 'Compartir', d: 'Los bailarines regalan frutas, pan y artesanías.' },
                        { e: '🌽', t: 'Raíces', d: 'Nació en ceremonias dedicadas a la diosa del maíz.' }
                    ],
                    lugares: 'Cerro del Fortín, Oaxaca de Juárez',
                    preguntas: [
                        ['¿En qué estado se celebra la Guelaguetza?', ['Oaxaca', 'Nayarit', 'Tamaulipas', 'Colima']],
                        ['¿Qué significa "Guelaguetza"?', ['Ofrenda recíproca o compartir', 'Guerra', 'Música', 'Cosecha']],
                        ['¿Qué hacen los bailarines al final?', ['Reparten regalos al público', 'Cierran el teatro', 'Cantan ópera', 'Pintan murales']]
                    ]
                }
            ]
        },
        {
            id: 'vestimenta', nombre: 'Vestimenta típica', icono: '👗', temas: [
                {
                    id: 'huipil', titulo: 'El huipil y los trajes indígenas', icono: '🧵', wiki: ['Huipil'],
                    dato: 'Un huipil puede tardar meses en tejerse y sus dibujos cuentan la historia y el origen de quien lo lleva.',
                    historia: [
                        'El huipil es una blusa o túnica tradicional que usan las mujeres indígenas desde hace más de dos mil años. Se teje en telar de cintura con algodón o lana y se borda con flores, animales y figuras geométricas. Cada pueblo tiene sus propios diseños y colores.',
                        'Los dibujos del huipil son un lenguaje: indican la comunidad de origen, el estado civil y las creencias de quien lo viste. Los trajes de Oaxaca, Chiapas y Yucatán son muy reconocidos. Hoy diseñadores de moda se inspiran en ellos, y se promueve que los artesanos reciban un pago justo y que su trabajo no sea copiado.'
                    ],
                    ideas: [
                        { e: '👚', t: 'Huipil', d: 'Blusa o túnica tradicional de las mujeres indígenas.' },
                        { e: '🧶', t: 'Telar de cintura', d: 'Técnica de tejido que se usa desde hace siglos.' },
                        { e: '🌸', t: 'Bordados', d: 'Flores, animales y figuras geométricas.' },
                        { e: '🗺️', t: 'Identidad', d: 'Los diseños indican de qué pueblo es quien lo viste.' }
                    ],
                    lugares: 'Oaxaca, Chiapas (Zinacantán), Yucatán',
                    preguntas: [
                        ['¿Qué es un huipil?', ['Una blusa o túnica tradicional', 'Un sombrero', 'Un instrumento', 'Un baile']],
                        ['¿En qué se teje tradicionalmente?', ['Telar de cintura', 'Máquina de vapor', 'Impresora 3D', 'Telar eléctrico']],
                        ['¿Qué indican los dibujos del huipil?', ['La comunidad de origen', 'El precio', 'El año', 'La temperatura']]
                    ]
                },
                {
                    id: 'china-poblana', titulo: 'China poblana y traje de charro', icono: '👒', wiki: ['China Poblana', 'Charro'],
                    dato: 'El vestido de la china poblana lleva lentejuelas y bordados de águilas y nopales.',
                    historia: [
                        'La china poblana es un traje femenino nacido en Puebla durante la época colonial. Lleva una blusa bordada, una falda de castor adornada con lentejuelas, rebozo y listones de colores. Se dice que su origen está en Mirra, una joven de la India que llegó a la Nueva España y se hizo famosa en Puebla por su vestimenta.',
                        'El traje de charro, su pareja masculina, tiene un sombrero ancho, chaqueta corta, pantalón ajustado con botonadura de plata y botas. Ambos trajes se usan en el jarabe tapatío, en fiestas patrias y en el mariachi. Cada región también tiene su propio traje típico, como el de tehuana en Oaxaca y el de jarocha en Veracruz.'
                    ],
                    ideas: [
                        { e: '👗', t: 'China poblana', d: 'Falda de castor con lentejuelas, blusa bordada y rebozo.' },
                        { e: '🤠', t: 'Charro', d: 'Sombrero ancho, chaqueta corta y botonadura de plata.' },
                        { e: '🦅', t: 'Bordados', d: 'Con símbolos nacionales: águila y nopal.' },
                        { e: '🌸', t: 'Trajes regionales', d: 'Tehuana (Oaxaca), jarocha (Veracruz) y más.' }
                    ],
                    lugares: 'Puebla; desfiles de septiembre en todo el país',
                    preguntas: [
                        ['¿De qué ciudad es el traje de china poblana?', ['Puebla', 'Monterrey', 'Cancún', 'Tijuana']],
                        ['¿Qué lleva el traje de charro?', ['Sombrero ancho y botonadura de plata', 'Corbata y traje de lana', 'Bata y gorro', 'Sandalias de playa']],
                        ['¿Con qué baile se usan ambos trajes?', ['Jarabe tapatío', 'Tango', 'Vals vienés', 'Hip hop']]
                    ]
                }
            ]
        },
        {
            id: 'monumentos', nombre: 'Monumentos', icono: '🗼', temas: [
                {
                    id: 'chichen-itza', titulo: 'Chichén Itzá', icono: '🔺', wiki: ['El Castillo, Chichen Itza', 'Chichen Itza'],
                    dato: 'En los equinoccios, la sombra de la escalinata forma una "serpiente" que desciende por la pirámide de Kukulkán.',
                    historia: [
                        'Chichén Itzá, en Yucatán, fue una de las ciudades más importantes del mundo maya entre los siglos VII y XII. Su edificio más famoso es la pirámide de Kukulkán, "El Castillo", de 24 metros de altura, dedicada a la serpiente emplumada. Tiene 365 escalones, uno por cada día del año.',
                        'En el sitio también están el Juego de Pelota más grande de Mesoamérica, el Observatorio (El Caracol) y el Cenote Sagrado. En 1988 fue declarada Patrimonio de la Humanidad por la UNESCO y en 2007 fue elegida una de las Nuevas Siete Maravillas del Mundo.'
                    ],
                    ideas: [
                        { e: '🔺', t: 'El Castillo', d: 'Pirámide de Kukulkán, de unos 24 metros de altura.' },
                        { e: '🐍', t: 'La serpiente', d: 'En el equinoccio, la sombra forma una serpiente.' },
                        { e: '⚽', t: 'Juego de pelota', d: 'El más grande de Mesoamérica.' },
                        { e: '🌟', t: 'Maravilla', d: 'Elegida una de las Nuevas Siete Maravillas en 2007.' }
                    ],
                    lugares: 'Yucatán, cerca de Valladolid y Mérida',
                    preguntas: [
                        ['¿A quién está dedicada la pirámide de Chichén Itzá?', ['Kukulkán, la serpiente emplumada', 'Zeus', 'Ra', 'Odín']],
                        ['¿En qué estado está Chichén Itzá?', ['Yucatán', 'Sonora', 'Durango', 'Hidalgo']],
                        ['¿Cuántos escalones tiene El Castillo contando la plataforma superior?', ['365', '100', '52', '1000']]
                    ]
                },
                {
                    id: 'angel-independencia', titulo: 'Ángel de la Independencia', icono: '🪽', wiki: ['Angel of Independence'],
                    dato: 'El Ángel se cayó durante el terremoto de 1957 y fue restaurado; hoy en su base descansan héroes de la Independencia.',
                    historia: [
                        'El Ángel de la Independencia es el monumento más emblemático de la Ciudad de México, sobre el Paseo de la Reforma. Fue inaugurado en 1910 por el presidente Porfirio Díaz para conmemorar los cien años del inicio de la Independencia. Mide 36 metros y la figura dorada es la Victoria Alada.',
                        'En su interior, a los pies de la columna, descansan los restos de héroes como Miguel Hidalgo, Ignacio Allende, Vicente Guerrero y Josefa Ortiz de Domínguez. Es el lugar donde se reúnen los aficionados a celebrar los triunfos deportivos y un punto de encuentro de grandes manifestaciones y celebraciones.'
                    ],
                    ideas: [
                        { e: '🗓️', t: '1910', d: 'Inaugurado para celebrar el centenario de la Independencia.' },
                        { e: '🪽', t: 'La Victoria Alada', d: 'Figura dorada que corona la columna.' },
                        { e: '⚰️', t: 'Los héroes', d: 'Allí descansan Hidalgo, Allende y Guerrero, entre otros.' },
                        { e: '📍', t: 'Paseo de la Reforma', d: 'Avenida principal de la Ciudad de México.' }
                    ],
                    lugares: 'Paseo de la Reforma, Ciudad de México',
                    preguntas: [
                        ['¿Qué celebra el Ángel de la Independencia?', ['El centenario del inicio de la Independencia', 'Un campeonato de fútbol', 'La Revolución', 'La llegada de Cortés']],
                        ['¿En qué avenida está?', ['Paseo de la Reforma', 'Champs-Élysées', 'Broadway', 'Avenida 9 de Julio']],
                        ['¿Quiénes descansan al pie del monumento?', ['Héroes de la Independencia', 'Presidentes modernos', 'Emperadores aztecas', 'Futbolistas']]
                    ]
                }
            ]
        }
    ]
};
