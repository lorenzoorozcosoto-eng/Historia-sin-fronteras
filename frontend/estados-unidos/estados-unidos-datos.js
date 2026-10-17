// Estados Unidos: categorías y temas (ideas clave, dato curioso y lugares). La teoría ampliada está en estados-unidos-extra-1..4.js
window.PAIS = {
    iso: 'US',
    nombre: 'Estados Unidos',
    bandera: '🇺🇸',
    banderaImg: 'https://flagcdn.com/w160/us.png',
    categorias: [
        {
            id: 'historia', nombre: 'Historia', icono: '🏛️', temas: [
                {
                    id: 'pueblos-nativos', titulo: 'Pueblos nativos americanos', icono: '🪶', wiki: ['Cahokia', 'Native Americans in the United States'],
                    dato: 'Cahokia, cerca de la actual St. Louis, llegó a tener unos 15.000 habitantes hacia el año 1100, más que muchas ciudades europeas de la época.',
                    lugares: 'Cahokia Mounds (Illinois), Mesa Verde (Colorado), Chaco Canyon (Nuevo México), Museo Nacional del Indígena Americano (Washington)',
                    ideas: [
                        { e: '🏔️', t: 'Mesa Verde', d: 'Viviendas en acantilados construidas por los pueblos ancestrales puebloanos.' },
                        { e: '🪶', t: 'Muchas naciones', d: 'Sioux, navajo, cherokee, apache, iroqueses y cientos más con lenguas propias.' },
                        { e: '🤝', t: 'Confederación iroquesa', d: 'Seis naciones unidas bajo una constitución oral, muy anterior a 1776.' },
                        { e: '📜', t: '574 tribus', d: 'Hoy hay 574 tribus reconocidas por el gobierno federal.' }
                    ]
                },
                {
                    id: 'colonias-independencia', titulo: 'Colonias e Independencia', icono: '🔔', wiki: ['Thirteen Colonies', 'United States Declaration of Independence'],
                    dato: 'La Declaración de Independencia se adoptó el 4 de julio de 1776, aunque la mayoría de los delegados la firmó en agosto.',
                    lugares: 'Jamestown (Virginia), Plymouth (Massachusetts), Independence Hall (Filadelfia), Mount Vernon',
                    ideas: [
                        { e: '⛵', t: 'Jamestown, 1607', d: 'Primera colonia inglesa permanente en América del Norte.' },
                        { e: '🚢', t: 'Mayflower, 1620', d: 'Los peregrinos fundan Plymouth, en Massachusetts.' },
                        { e: '📜', t: '4 de julio de 1776', d: 'Las trece colonias declaran su independencia de Gran Bretaña.' },
                        { e: '⭐', t: 'Constitución de 1787', d: 'Establece un gobierno federal con tres poderes.' }
                    ]
                },
                {
                    id: 'expansion-guerra-civil', titulo: 'Expansión y Guerra Civil', icono: '⚔️', wiki: ['American Civil War', 'Abraham Lincoln'],
                    dato: 'La Compra de Luisiana, en 1803, duplicó el tamaño del país por unos 15 millones de dólares.',
                    lugares: 'Gettysburg (Pensilvania), Monumento a Lincoln (Washington), Fort Sumter (Carolina del Sur), Springfield (Illinois)',
                    ideas: [
                        { e: '🗺️', t: 'Compra de Luisiana', d: 'Estados Unidos compra a Francia un enorme territorio en 1803.' },
                        { e: '🚂', t: 'Hacia el oeste', d: 'Colonos, ferrocarriles y la fiebre del oro de 1848 empujan la frontera.' },
                        { e: '⚔️', t: 'Guerra Civil, 1861-1865', d: 'El Norte y el Sur se enfrentan por la esclavitud y la unión del país.' },
                        { e: '✊', t: 'Abolición', d: 'La Proclama de Emancipación (1863) y la 13.ª Enmienda (1865) ponen fin a la esclavitud.' }
                    ]
                },
                {
                    id: 'siglo-xx', titulo: 'Inmigración, derechos y siglo XX', icono: '🚀', wiki: ['Ellis Island', 'Civil rights movement'],
                    dato: 'Entre 1892 y 1954, unos 12 millones de inmigrantes pasaron por Ellis Island, la puerta de entrada de Nueva York.',
                    lugares: 'Ellis Island (Nueva York), Memorial Martin Luther King Jr. (Washington), Centro Espacial Kennedy (Florida), Montgomery (Alabama)',
                    ideas: [
                        { e: '🚢', t: 'Ellis Island', d: 'Entrada de millones de inmigrantes europeos.' },
                        { e: '🗳️', t: '1920', d: 'La 19.ª Enmienda reconoce el voto de las mujeres.' },
                        { e: '✊', t: 'Derechos civiles', d: 'Martin Luther King Jr. y otros líderes lucharon contra la segregación en los años 50 y 60.' },
                        { e: '🌕', t: '20 de julio de 1969', d: 'Apolo 11 lleva a los primeros humanos a la Luna.' }
                    ]
                }
            ]
        },
        {
            id: 'cultura', nombre: 'Cultura', icono: '🌍', temas: [
                {
                    id: 'diversidad', titulo: 'Un país de inmigrantes', icono: '🤝', wiki: ['Demographics of the United States', 'Hispanic and Latino Americans'],
                    dato: 'Más de 60 millones de personas en Estados Unidos se identifican como hispanas o latinas, y el español es el idioma más hablado después del inglés.',
                    lugares: 'Nueva York (Queens), Miami (Little Havana), Los Ángeles, San Francisco (Chinatown), Museo Nacional de la Historia Afroamericana',
                    ideas: [
                        { e: '🗽', t: 'Crisol de culturas', d: 'Millones de personas llegaron de Europa, África, Asia y América Latina.' },
                        { e: '🇲🇽', t: 'Latinos', d: 'Son el mayor grupo minoritario del país, con aportes en música, comida y trabajo.' },
                        { e: '✊', t: 'Afroamericanos', d: 'Descendientes de personas esclavizadas que transformaron la música y la cultura.' },
                        { e: '🗣️', t: 'Muchas lenguas', d: 'Se hablan más de 350 idiomas en el país.' }
                    ]
                },
                {
                    id: 'regiones', titulo: 'Regiones y paisajes', icono: '🏔️', wiki: ['Geography of the United States', 'Grand Canyon'],
                    dato: 'El Gran Cañón, formado por el río Colorado, mide unos 446 km de largo y más de 1.500 metros de profundidad.',
                    lugares: 'Gran Cañón (Arizona), Montañas Rocosas, Grandes Lagos, Río Misisipi, Denali (Alaska)',
                    ideas: [
                        { e: '🗺️', t: '50 estados', d: 'Cuatro husos horarios en el territorio continental, más Alaska y Hawái.' },
                        { e: '🏔️', t: 'Montañas Rocosas', d: 'Gran cordillera del oeste que atraviesa varios estados.' },
                        { e: '🌊', t: 'Misisipi y Grandes Lagos', d: 'Sistemas de agua dulce que fueron rutas de comercio.' },
                        { e: '🌋', t: 'Alaska y Hawái', d: 'Alaska tiene el Denali (6.190 m) y Hawái tiene volcanes activos.' }
                    ]
                }
            ]
        },
        {
            id: 'gastronomia', nombre: 'Gastronomía', icono: '🍽️', temas: [
                {
                    id: 'hamburguesa-bbq', titulo: 'Hamburguesas, perros calientes y barbacoa', icono: '🍔', wiki: ['Hamburger', 'Barbecue in the United States'],
                    dato: 'Los estadounidenses comen miles de millones de hamburguesas al año y el 4 de julio se consumen unos 150 millones de perros calientes.',
                    lugares: 'Nueva Haven (Connecticut), Texas (barbacoa), Kansas City, Memphis, Coney Island (Nueva York)',
                    ideas: [
                        { e: '🍔', t: 'Hamburguesa', d: 'Carne molida en pan, popularizada en el siglo XX con cadenas de comida rápida.' },
                        { e: '🌭', t: 'Hot dog', d: 'Salchicha en pan, típica de estadios de béisbol y de la fiesta del 4 de julio.' },
                        { e: '🔥', t: 'Barbacoa', d: 'Carne cocida lenta con humo; cada región tiene su estilo.' },
                        { e: '🥧', t: 'Apple pie', d: 'Pastel de manzana, símbolo de la cocina tradicional estadounidense.' }
                    ]
                },
                {
                    id: 'thanksgiving-regional', titulo: 'Thanksgiving y cocinas regionales', icono: '🦃', wiki: ['Thanksgiving (United States)', 'Cajun cuisine'],
                    dato: 'El Día de Acción de Gracias se celebra el cuarto jueves de noviembre con pavo, puré de papa, salsa de arándanos y pastel de calabaza.',
                    lugares: 'Plymouth (Massachusetts), Nueva Orleans, Boston, Chicago, Texas',
                    ideas: [
                        { e: '🦃', t: 'Pavo de Acción de Gracias', d: 'Plato central de la cena familiar de noviembre.' },
                        { e: '🍲', t: 'Gumbo cajún', d: 'Guiso de Luisiana con mariscos, arroz y especias.' },
                        { e: '🍕', t: 'Pizza', d: 'La de Nueva York se come doblada; la de Chicago es profunda.' },
                        { e: '🍁', t: 'Jarabe de arce', d: 'Se produce en Vermont y Nueva Inglaterra y se come con panqueques.' }
                    ]
                }
            ]
        },
        {
            id: 'musica', nombre: 'Música', icono: '🎶', temas: [
                {
                    id: 'jazz-blues', titulo: 'Jazz y blues', icono: '🎷', wiki: ['Jazz', 'Louis Armstrong'],
                    dato: 'El jazz nació a fines del siglo XIX y comienzos del XX en Nueva Orleans, mezclando música africana, europea y caribeña.',
                    lugares: 'Nueva Orleans (French Quarter), Delta del Misisipi, Harlem (Nueva York), Kansas City, Chicago',
                    ideas: [
                        { e: '🎺', t: 'Nueva Orleans', d: 'Cuna del jazz, con bandas de metales y desfiles.' },
                        { e: '🎤', t: 'Louis Armstrong', d: 'Trompetista y cantante que revolucionó el jazz.' },
                        { e: '🎸', t: 'Blues', d: 'Música afroamericana del Delta del Misisipi, base del rock.' },
                        { e: '🎹', t: 'Duke Ellington', d: 'Compositor y director de una de las grandes orquestas.' }
                    ]
                },
                {
                    id: 'rock-country-hiphop', titulo: 'Rock, country y hip hop', icono: '🎸', wiki: ['Hip-hop', 'Country music'],
                    dato: 'El hip hop nació en 1973 en el Bronx, Nueva York, en una fiesta del DJ Kool Herc.',
                    lugares: 'Nashville (Tennessee), Memphis (Graceland), Detroit (Motown), El Bronx (Nueva York), Broadway',
                    ideas: [
                        { e: '🎸', t: 'Rock and roll', d: 'Elvis Presley y Chuck Berry lo popularizaron en los años 50.' },
                        { e: '🤠', t: 'Country', d: 'Música de guitarras y cuentos del campo, con capital en Nashville.' },
                        { e: '🎤', t: 'Hip hop', d: 'Rap, DJ, breakdance y graffiti nacidos en el Bronx.' },
                        { e: '🎭', t: 'Broadway', d: 'Teatro musical con espectáculos famosos en Nueva York.' }
                    ]
                }
            ]
        },
        {
            id: 'bailes', nombre: 'Bailes', icono: '💃', temas: [
                {
                    id: 'swing-claque', titulo: 'Swing, lindy hop y claqué', icono: '🕺', wiki: ['Lindy Hop', 'Tap dance'],
                    dato: 'El lindy hop nació en los años 20 en el salón Savoy de Harlem y se inspiró en el vuelo de Charles Lindbergh.',
                    lugares: 'Savoy Ballroom (Harlem), Apollo Theater (Nueva York), Nueva Orleans, Broadway',
                    ideas: [
                        { e: '🕺', t: 'Lindy hop', d: 'Baile acrobático de pareja, nacido en Harlem.' },
                        { e: '👞', t: 'Claqué', d: 'Baile en que los zapatos marcan el ritmo con chapas de metal.' },
                        { e: '🎷', t: 'Era del swing', d: 'Orquestas de los años 30 y 40 llenaban salones de baile.' },
                        { e: '🌟', t: 'Fred Astaire y Gene Kelly', d: 'Bailarines que brillaron en las películas musicales.' }
                    ]
                },
                {
                    id: 'country-hiphop-baile', titulo: 'Baile country, hip hop y pow-wow', icono: '🤠', wiki: ['Square dance', 'Breakdancing'],
                    dato: 'El pow-wow es una reunión de naciones nativas con danzas, cantos y tambores que se celebra en todo el país.',
                    lugares: 'Gathering of Nations (Albuquerque), Nashville, Bronx (Nueva York), Texas',
                    ideas: [
                        { e: '🤠', t: 'Square dance', d: 'Baile tradicional de cuadrilla, con un "caller" que dirige los pasos.' },
                        { e: '🤸', t: 'Breakdance', d: 'Acrobacias en el suelo nacidas con el hip hop.' },
                        { e: '🪘', t: 'Pow-wow', d: 'Reunión de danzas y cantos de los pueblos nativos.' },
                        { e: '💃', t: 'Line dance', d: 'Baile en filas con pasos repetidos, típico del country.' }
                    ]
                }
            ]
        },
        {
            id: 'arte', nombre: 'Arte', icono: '🎨', temas: [
                {
                    id: 'pop-art-expresionismo', titulo: 'Pop art y expresionismo abstracto', icono: '🖼️', wiki: ['Andy Warhol', 'Jackson Pollock'],
                    dato: 'Andy Warhol convirtió en arte las latas de sopa Campbell\'s en 1962.',
                    lugares: 'MoMA y Met (Nueva York), Museo Guggenheim, Art Institute of Chicago, National Gallery (Washington)',
                    ideas: [
                        { e: '🥫', t: 'Pop art', d: 'Arte que usa imágenes de la publicidad y de la cultura popular.' },
                        { e: '🎨', t: 'Jackson Pollock', d: 'Pintaba goteando pintura sobre grandes lienzos en el suelo.' },
                        { e: '🌃', t: 'Edward Hopper', d: 'Pintor de la soledad urbana, autor de "Nighthawks" (1942).' },
                        { e: '🌸', t: 'Georgia O\'Keeffe', d: 'Pintora de flores gigantes y paisajes del desierto.' }
                    ]
                },
                {
                    id: 'hollywood-cine', titulo: 'Hollywood y el cine', icono: '🎬', wiki: ['Hollywood', 'Academy Awards'],
                    dato: 'La primera entrega de los premios Óscar fue en 1929 y duró unos 15 minutos.',
                    lugares: 'Hollywood Boulevard (Los Ángeles), Paseo de la Fama, Estudios Universal, Teatro Dolby',
                    ideas: [
                        { e: '🎬', t: 'Hollywood', d: 'Barrio de Los Ángeles donde se asentaron los grandes estudios desde 1910.' },
                        { e: '🏆', t: 'Premios Óscar', d: 'Se entregan desde 1929 a lo mejor del cine.' },
                        { e: '🐭', t: 'Disney', d: 'Mickey Mouse nació en 1928 y revolucionó la animación.' },
                        { e: '🎞️', t: 'Steven Spielberg', d: 'Director de "Tiburón", "E.T." y "La lista de Schindler".' }
                    ]
                }
            ]
        },
        {
            id: 'literatura', nombre: 'Literatura', icono: '📚', temas: [
                {
                    id: 'twain-poe-dickinson', titulo: 'Twain, Poe, Whitman y Dickinson', icono: '📖', wiki: ['Mark Twain', 'Edgar Allan Poe'],
                    dato: 'Mark Twain, de nombre real Samuel Clemens, tomó su seudónimo de una voz de los barqueros del Misisipi que significa "dos brazas de profundidad".',
                    lugares: 'Hannibal (Misuri), Amherst (Casa de Emily Dickinson), Baltimore (Casa de Poe), Concord (Massachusetts)',
                    ideas: [
                        { e: '🛶', t: 'Mark Twain', d: 'Autor de "Las aventuras de Tom Sawyer" (1876) y "Huckleberry Finn" (1884).' },
                        { e: '🐦‍⬛', t: 'Edgar Allan Poe', d: 'Maestro del misterio y del terror, autor de "El cuervo" (1845).' },
                        { e: '🌿', t: 'Walt Whitman', d: 'Poeta de "Hojas de hierba" (1855), que cantó a la democracia.' },
                        { e: '✉️', t: 'Emily Dickinson', d: 'Poeta de Massachusetts que escribió unos 1.800 poemas.' }
                    ]
                },
                {
                    id: 'hemingway-morrison', titulo: 'Hemingway, Morrison y los Nobel', icono: '🏆', wiki: ['Toni Morrison', 'Ernest Hemingway'],
                    dato: 'Toni Morrison fue la primera mujer afroamericana en ganar el Nobel de Literatura, en 1993.',
                    lugares: 'Oak Park (Illinois, casa de Hemingway), Key West (Florida), Lorain (Ohio), Biblioteca del Congreso',
                    ideas: [
                        { e: '🐟', t: 'Hemingway', d: 'Autor de "El viejo y el mar" y Nobel de Literatura 1954.' },
                        { e: '📕', t: 'Toni Morrison', d: 'Autora de "Beloved" (1987) sobre la herencia de la esclavitud.' },
                        { e: '🌃', t: 'Scott Fitzgerald', d: '"El gran Gatsby" (1925) retrata la era del jazz.' },
                        { e: '✊', t: 'Renacimiento de Harlem', d: 'Movimiento de los años 20 con Langston Hughes y otros escritores afroamericanos.' }
                    ]
                }
            ]
        },
        {
            id: 'tradiciones', nombre: 'Tradiciones', icono: '🌿', temas: [
                {
                    id: 'deportes-americanos', titulo: 'Béisbol, fútbol americano y baloncesto', icono: '⚾', wiki: ['Baseball', 'Super Bowl'],
                    dato: 'El baloncesto fue inventado en 1891 por James Naismith en Springfield, Massachusetts, con un cesto de duraznos.',
                    lugares: 'Salón de la Fama del Béisbol (Cooperstown), Springfield (Baloncesto), Estadios de la NFL, Madison Square Garden',
                    ideas: [
                        { e: '⚾', t: 'Béisbol', d: '"El pasatiempo nacional", con la Serie Mundial desde 1903.' },
                        { e: '🏈', t: 'Fútbol americano', d: 'El Super Bowl, desde 1967, es el evento deportivo más visto del país.' },
                        { e: '🏀', t: 'Baloncesto', d: 'Inventado en 1891; la NBA fue creada en 1946.' },
                        { e: '🏒', t: 'Hockey', d: 'La NHL reúne equipos de EE. UU. y Canadá.' }
                    ]
                },
                {
                    id: 'cowboy-oeste', titulo: 'Cowboys y el Lejano Oeste', icono: '🤠', wiki: ['Cowboy', 'Rodeo'],
                    dato: 'Los vaqueros del siglo XIX conducían manadas de ganado por rutas como la Chisholm Trail, de Texas a Kansas.',
                    lugares: 'Fort Worth Stockyards (Texas), Cheyenne (Wyoming), Dodge City (Kansas), Ruta 66',
                    ideas: [
                        { e: '🤠', t: 'Vaquero', d: 'Pastor de ganado a caballo en las grandes llanuras.' },
                        { e: '🐂', t: 'Rodeo', d: 'Competencia de monta de toros y caballos, con raíces en el trabajo del rancho.' },
                        { e: '🛣️', t: 'Ruta 66', d: 'Carretera de 1926 que unía Chicago con Los Ángeles.' },
                        { e: '🏜️', t: 'Oeste', d: 'Territorio de pueblos nativos, colonos, mineros y ferrocarriles.' }
                    ]
                }
            ]
        },
        {
            id: 'fiestas', nombre: 'Fiestas', icono: '🎉', temas: [
                {
                    id: 'cuatro-julio', titulo: 'El 4 de julio', icono: '🎆', wiki: ['Independence Day (United States)', 'Fireworks'],
                    dato: 'Cada 4 de julio se celebran desfiles, barbacoas y fuegos artificiales en casi todas las ciudades del país.',
                    lugares: 'Washington (National Mall), Boston (Esplanade), Nueva York (Macy\'s Fireworks), Filadelfia',
                    ideas: [
                        { e: '🎆', t: 'Fuegos artificiales', d: 'Se lanzan desde la noche del 4 de julio en todo el país.' },
                        { e: '🇺🇸', t: 'Banderas', d: 'La bandera tiene 50 estrellas y 13 franjas.' },
                        { e: '🎶', t: 'Desfiles', d: 'Bandas, carros alegóricos y familias en las calles.' },
                        { e: '🌭', t: 'Barbacoas', d: 'Reuniones al aire libre con hamburguesas y perros calientes.' }
                    ]
                },
                {
                    id: 'halloween-thanksgiving', titulo: 'Halloween, Acción de Gracias y Mardi Gras', icono: '🎃', wiki: ['Halloween', 'Mardi Gras in New Orleans'],
                    dato: 'Halloween llegó con los inmigrantes irlandeses, que adaptaron antiguas tradiciones celtas.',
                    lugares: 'Salem (Massachusetts), Nueva Orleans (Mardi Gras), Plymouth, Desfile de Macy\'s (Nueva York)',
                    ideas: [
                        { e: '🎃', t: 'Halloween', d: 'El 31 de octubre los niños se disfrazan y piden dulces.' },
                        { e: '🦃', t: 'Acción de Gracias', d: 'Cuarto jueves de noviembre; es fiesta familiar desde 1863.' },
                        { e: '🎭', t: 'Mardi Gras', d: 'Carnaval de Nueva Orleans con desfiles, collares y música.' },
                        { e: '🎅', t: 'Navidad', d: 'Se decora con luces y árboles; el Rockefeller Center tiene uno famoso.' }
                    ]
                }
            ]
        },
        {
            id: 'vestimenta', nombre: 'Vestimenta típica', icono: '👗', temas: [
                {
                    id: 'jeans-cowboy', titulo: 'Jeans, sombrero y botas vaqueras', icono: '👖', wiki: ['Jeans', 'Cowboy hat'],
                    dato: 'Los jeans con remaches fueron patentados en 1873 por Levi Strauss y Jacob Davis, en San Francisco.',
                    lugares: 'San Francisco (Levi\'s), Fort Worth, Nashville, Museo Nacional del Cowboy (Oklahoma)',
                    ideas: [
                        { e: '👖', t: 'Blue jeans', d: 'Pantalón de tela resistente creado para los mineros y trabajadores.' },
                        { e: '🤠', t: 'Sombrero Stetson', d: 'Creado por John B. Stetson en 1865, es símbolo del Oeste.' },
                        { e: '🥾', t: 'Botas vaqueras', d: 'Calzado con tacón para el estribo, hoy parte de la moda.' },
                        { e: '🧢', t: 'Gorra de béisbol', d: 'Prenda cotidiana de los estadounidenses.' }
                    ]
                },
                {
                    id: 'trajes-nativos-navajo', titulo: 'Trajes nativos y joyería navajo', icono: '💎', wiki: ['Navajo Nation', 'Navajo silversmithing'],
                    dato: 'Los navajo (diné) crean joyas de plata con turquesa y mantas tejidas muy valoradas en todo el mundo.',
                    lugares: 'Navajo Nation (Arizona/Nuevo México), Monument Valley, Santa Fe, Museo Heard (Phoenix)',
                    ideas: [
                        { e: '🪶', t: 'Tocados de plumas', d: 'Cada pluma tiene un significado en la nación que la usa.' },
                        { e: '👞', t: 'Mocasines', d: 'Calzado de cuero blando creado por pueblos nativos.' },
                        { e: '💎', t: 'Plata y turquesa', d: 'Joyas tradicionales del suroeste.' },
                        { e: '🧶', t: 'Tejidos navajo', d: 'Mantas y alfombras tejidas a mano en telares verticales.' }
                    ]
                }
            ]
        },
        {
            id: 'monumentos', nombre: 'Monumentos', icono: '🏰', temas: [
                {
                    id: 'libertad-washington', titulo: 'Estatua de la Libertad y Washington D. C.', icono: '🗽', wiki: ['Statue of Liberty', 'Lincoln Memorial'],
                    dato: 'La Estatua de la Libertad fue un regalo de Francia, inaugurado en 1886; su estructura interna fue diseñada por Gustave Eiffel.',
                    lugares: 'Isla de la Libertad (Nueva York), Lincoln Memorial, Monumento a Washington, Capitolio, Casa Blanca',
                    ideas: [
                        { e: '🗽', t: 'Estatua de la Libertad', d: 'Regalo de Francia que mide 93 metros con su pedestal.' },
                        { e: '🏛️', t: 'Capitolio', d: 'Sede del Congreso, con su gran cúpula blanca.' },
                        { e: '🏠', t: 'Casa Blanca', d: 'Residencia del presidente desde 1800.' },
                        { e: '🕯️', t: 'Lincoln Memorial', d: 'Monumento de 1922 donde King dio su discurso "Tengo un sueño".' }
                    ]
                },
                {
                    id: 'parques-nacionales', titulo: 'Parques nacionales y Mount Rushmore', icono: '🏞️', wiki: ['Yellowstone National Park', 'Mount Rushmore'],
                    dato: 'Yellowstone, creado en 1872, es considerado el primer parque nacional del mundo.',
                    lugares: 'Yellowstone, Gran Cañón, Yosemite, Mount Rushmore, Golden Gate (San Francisco)',
                    ideas: [
                        { e: '🌋', t: 'Yellowstone', d: 'Géiseres como el Old Faithful, bisontes y lobos.' },
                        { e: '🏞️', t: 'Yosemite', d: 'Gran valle de granito con cascadas y secuoyas gigantes.' },
                        { e: '🗿', t: 'Mount Rushmore', d: 'Rostros de cuatro presidentes tallados en granito entre 1927 y 1941.' },
                        { e: '🌉', t: 'Golden Gate', d: 'Puente colgante rojo de San Francisco inaugurado en 1937.' }
                    ]
                }
            ]
        }
    ]
};
