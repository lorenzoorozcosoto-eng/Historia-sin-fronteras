// Brasil: categorías y temas (ideas clave, dato curioso y lugares). La teoría ampliada está en brasil-extra-1..4.js
window.PAIS = {
    iso: 'BR',
    nombre: 'Brasil',
    bandera: '🇧🇷',
    banderaImg: 'https://flagcdn.com/w160/br.png',
    categorias: [
        {
            id: 'historia', nombre: 'Historia', icono: '🏛️', temas: [
                {
                    id: 'pueblos-indigenas', titulo: 'Pueblos indígenas', icono: '🏹', wiki: ['Indigenous peoples in Brazil', 'Tupi people'],
                    dato: 'El censo de 2022 contó casi 1,7 millones de indígenas de 305 pueblos que hablan unas 274 lenguas.',
                    lugares: 'Parque Indígena del Xingú, Alto Río Negro, Museo del Indio (Río de Janeiro), Ilha de Marajó',
                    ideas: [
                        { e: '🏹', t: 'Tupí-guaraní', d: 'Pueblos de la costa que recibieron a los portugueses en 1500.' },
                        { e: '🌳', t: 'Amazonía', d: 'Cientos de pueblos que conocen y protegen la selva.' },
                        { e: '🏺', t: 'Cerámica marajoara', d: 'Pueblo de la isla de Marajó que hizo cerámica decorada hace más de 1.000 años.' },
                        { e: '🗣️', t: 'Lenguas', d: 'Hoy se hablan unas 274 lenguas indígenas.' }
                    ]
                },
                {
                    id: 'colonia-portugal', titulo: 'Colonia portuguesa y esclavitud', icono: '⛵', wiki: ['Pedro Álvares Cabral', 'Quilombo dos Palmares'],
                    dato: 'Brasil fue el país de América que más personas africanas esclavizadas recibió: unos 4,8 millones.',
                    lugares: 'Porto Seguro, Salvador (Pelourinho), Olinda, Serra da Barriga (Quilombo dos Palmares)',
                    ideas: [
                        { e: '⛵', t: '22 de abril de 1500', d: 'Pedro Álvares Cabral llega a las costas de Bahía.' },
                        { e: '🌴', t: 'Palo brasil', d: 'Árbol que dio nombre al país y su primer producto de exportación.' },
                        { e: '🍬', t: 'Caña de azúcar', d: 'Los ingenios del nordeste dependían del trabajo esclavizado.' },
                        { e: '✊', t: 'Quilombo dos Palmares', d: 'Comunidad de personas libres liderada por Zumbi hasta 1694.' }
                    ]
                },
                {
                    id: 'independencia-imperio', titulo: 'Independencia e Imperio', icono: '👑', wiki: ['Independence of Brazil', 'Lei Áurea'],
                    dato: 'Brasil se independizó de Portugal sin una larga guerra: el príncipe Pedro proclamó la independencia el 7 de septiembre de 1822.',
                    lugares: 'Museo Paulista (Ipiranga), Petrópolis (Palacio Imperial), Palacio de São Cristóvão, Río de Janeiro',
                    ideas: [
                        { e: '👑', t: 'La corte llega en 1808', d: 'La familia real portuguesa huye de Napoleón y se instala en Río de Janeiro.' },
                        { e: '🗡️', t: 'Grito de Ipiranga', d: 'Pedro I declara la independencia en 1822 y se convierte en emperador.' },
                        { e: '📜', t: 'Lei Áurea', d: 'La princesa Isabel abolió la esclavitud el 13 de mayo de 1888.' },
                        { e: '🏛️', t: '1889', d: 'Se proclama la República.' }
                    ]
                },
                {
                    id: 'republica-moderna', titulo: 'La República y el Brasil moderno', icono: '📜', wiki: ['Brasília', 'Constitution of Brazil'],
                    dato: 'Brasília se construyó en solo unos tres años y fue inaugurada como capital el 21 de abril de 1960.',
                    lugares: 'Brasília (Praça dos Três Poderes), Museo de la República (Río), Memorial JK, São Paulo',
                    ideas: [
                        { e: '🏭', t: 'Getúlio Vargas', d: 'Gobernó entre 1930 y 1945 y de nuevo de 1951 a 1954; impulsó leyes laborales.' },
                        { e: '🏗️', t: 'Brasília', d: 'Ciudad planeada por Lúcio Costa y Oscar Niemeyer.' },
                        { e: '🪖', t: 'Dictadura', d: 'Gobierno militar entre 1964 y 1985.' },
                        { e: '📖', t: 'Constitución de 1988', d: 'La "Constitución Ciudadana" restableció los derechos y la democracia.' }
                    ]
                }
            ]
        },
        {
            id: 'cultura', nombre: 'Cultura', icono: '🌍', temas: [
                {
                    id: 'diversidad', titulo: 'Un país de mezclas', icono: '🤝', wiki: ['Demographics of Brazil', 'Japanese Brazilians'],
                    dato: 'São Paulo tiene el mayor barrio japonés fuera de Japón, Liberdade, y Brasil tiene la mayor comunidad de origen japonés del mundo fuera de Japón.',
                    lugares: 'Salvador, São Paulo (Liberdade), Santa Catarina (Blumenau), Museo de la Inmigración (São Paulo)',
                    ideas: [
                        { e: '🌍', t: 'Tres raíces', d: 'Indígena, africana y europea se mezclaron durante siglos.' },
                        { e: '🇯🇵', t: 'Japoneses', d: 'Llegaron desde 1908 a trabajar en las haciendas de café.' },
                        { e: '🇮🇹', t: 'Italianos y alemanes', d: 'Fundaron colonias en el sur y en São Paulo.' },
                        { e: '🗣️', t: 'Portugués', d: 'Es el único país de Sudamérica que habla portugués.' }
                    ]
                },
                {
                    id: 'regiones', titulo: 'Amazonía, Pantanal y costas', icono: '🌴', wiki: ['Amazon rainforest', 'Pantanal'],
                    dato: 'Brasil tiene cerca del 60 % de la selva amazónica, la mayor selva tropical del planeta.',
                    lugares: 'Manaos (Amazonas), Pantanal, Fernando de Noronha, Lençóis Maranhenses, Mata Atlántica',
                    ideas: [
                        { e: '🌳', t: 'Amazonía', d: 'Selva y río de más de 6.000 km con miles de especies.' },
                        { e: '🐊', t: 'Pantanal', d: 'El mayor humedal tropical del mundo, hogar de yacarés y jaguares.' },
                        { e: '🏜️', t: 'Lençóis Maranhenses', d: 'Dunas blancas que se llenan de lagunas azules con la lluvia.' },
                        { e: '🏝️', t: 'Costa atlántica', d: 'Más de 7.000 km de playas.' }
                    ]
                }
            ]
        },
        {
            id: 'gastronomia', nombre: 'Gastronomía', icono: '🍽️', temas: [
                {
                    id: 'feijoada-pao-queijo', titulo: 'Feijoada y pão de queijo', icono: '🍲', wiki: ['Feijoada', 'Pão de queijo'],
                    dato: 'El pão de queijo se hace con almidón de yuca y queso, por eso no lleva trigo.',
                    lugares: 'Minas Gerais (pão de queijo), Río de Janeiro (feijoada), São Paulo (Mercado Municipal)',
                    ideas: [
                        { e: '🍲', t: 'Feijoada', d: 'Guiso de frijoles negros con carne de cerdo, que se come con arroz y naranja.' },
                        { e: '🧀', t: 'Pão de queijo', d: 'Panecillo de queso nacido en Minas Gerais.' },
                        { e: '🍫', t: 'Brigadeiro', d: 'Bolita de chocolate y leche condensada, típica de las fiestas infantiles.' },
                        { e: '🫐', t: 'Açaí', d: 'Fruto de una palmera amazónica que se come en bol.' }
                    ]
                },
                {
                    id: 'churrasco-acaraje', titulo: 'Churrasco, acarajé y caipirinha', icono: '🥩', wiki: ['Churrasco', 'Acarajé'],
                    dato: 'El oficio de las baianas de acarajé es Patrimonio Cultural de Brasil desde 2005.',
                    lugares: 'Salvador (Bahía), Rio Grande do Sul (churrasco), Belém (comida amazónica), Pelourinho',
                    ideas: [
                        { e: '🥩', t: 'Churrasco', d: 'Carne asada en grandes espadas, tradición de los gauchos del sur.' },
                        { e: '🧆', t: 'Acarajé', d: 'Bolita de frijol frita en aceite de palma, de origen afrobrasileño.' },
                        { e: '🐟', t: 'Moqueca', d: 'Guiso de pescado con leche de coco y aceite de palma.' },
                        { e: '🍹', t: 'Caipirinha', d: 'Cóctel de cachaça, limón y azúcar; bebida nacional.' }
                    ]
                }
            ]
        },
        {
            id: 'musica', nombre: 'Música', icono: '🎶', temas: [
                {
                    id: 'samba-bossa', titulo: 'Samba y bossa nova', icono: '🥁', wiki: ['Samba', 'Bossa nova'],
                    dato: '"Garota de Ipanema" (1962) es una de las canciones más grabadas del mundo.',
                    lugares: 'Río de Janeiro (Lapa, Ipanema), Salvador, Museo del Samba, Cidade do Samba',
                    ideas: [
                        { e: '🥁', t: 'Samba', d: 'Ritmo afrobrasileño nacido en Río de Janeiro a comienzos del siglo XX.' },
                        { e: '🎸', t: 'Bossa nova', d: 'Estilo suave de 1958, con João Gilberto y Tom Jobim.' },
                        { e: '🏖️', t: 'Garota de Ipanema', d: 'Canción de Jobim y Vinicius de Moraes que dio la vuelta al mundo.' },
                        { e: '🎶', t: 'Instrumentos', d: 'Pandeiro, cavaquinho, surdo, tamborim y cuíca.' }
                    ]
                },
                {
                    id: 'mpb-forro', titulo: 'MPB, tropicalismo y forró', icono: '🎤', wiki: ['Música Popular Brasileira', 'Forró'],
                    dato: 'Luiz Gonzaga, el "Rey del Baião", llevó el acordeón y la música del sertão nordestino a todo Brasil.',
                    lugares: 'Caruaru (Pernambuco), Campina Grande (Paraíba), Salvador, Museo Luiz Gonzaga',
                    ideas: [
                        { e: '🎤', t: 'MPB', d: 'Música Popular Brasileña: Chico Buarque, Elis Regina, Milton Nascimento.' },
                        { e: '🌺', t: 'Tropicália', d: 'Movimiento de 1967 con Caetano Veloso y Gilberto Gil.' },
                        { e: '🪗', t: 'Forró', d: 'Música del nordeste con acordeón, triángulo y zabumba.' },
                        { e: '🎵', t: 'Fiestas juninas', d: 'El forró se baila en las fiestas de San Juan.' }
                    ]
                }
            ]
        },
        {
            id: 'bailes', nombre: 'Bailes', icono: '💃', temas: [
                {
                    id: 'capoeira', titulo: 'Capoeira', icono: '🤸', wiki: ['Capoeira', 'Berimbau'],
                    dato: 'En 2014 la UNESCO inscribió la roda de capoeira como Patrimonio Cultural Inmaterial de la Humanidad.',
                    lugares: 'Salvador (Pelourinho), Forte de Santo Antônio, Museo de la Capoeira, Río de Janeiro',
                    ideas: [
                        { e: '🤸', t: 'Danza y lucha', d: 'Mezcla de baile, acrobacia, música y juego, con raíces africanas.' },
                        { e: '🎶', t: 'Berimbau', d: 'Instrumento de un arco con calabaza que marca el ritmo.' },
                        { e: '⭕', t: 'Roda', d: 'Los jugadores forman una rueda y cantan mientras dos de ellos juegan.' },
                        { e: '🏅', t: 'Mestre Bimba y Pastinha', d: 'Maestros que difundieron la capoeira en el siglo XX.' }
                    ]
                },
                {
                    id: 'frevo-maracatu', titulo: 'Frevo y maracatu', icono: '☂️', wiki: ['Frevo', 'Maracatu'],
                    dato: 'Los bailarines de frevo usan una pequeña sombrilla de colores para mantener el equilibrio.',
                    lugares: 'Recife y Olinda (Pernambuco), Casa do Carnaval, Paço do Frevo',
                    ideas: [
                        { e: '☂️', t: 'Frevo', d: 'Baile frenético de Recife, Patrimonio Inmaterial de la UNESCO desde 2012.' },
                        { e: '🥁', t: 'Maracatu', d: 'Desfile de tambores con reyes, reinas y baianas.' },
                        { e: '🎺', t: 'Orquesta', d: 'El frevo suena con metales rápidos y alegres.' },
                        { e: '🌈', t: 'Carnaval de Pernambuco', d: 'Miles de personas bailan por las calles de Recife y Olinda.' }
                    ]
                }
            ]
        },
        {
            id: 'arte', nombre: 'Arte', icono: '🎨', temas: [
                {
                    id: 'aleijadinho-barroco', titulo: 'Barroco de Minas y Aleijadinho', icono: '⛪', wiki: ['Aleijadinho', 'Ouro Preto'],
                    dato: 'Aleijadinho esculpió los doce profetas de Congonhas en piedra jabón (esteatita) cuando ya tenía una enfermedad que le dañaba las manos.',
                    lugares: 'Ouro Preto, Congonhas (Santuario de Bom Jesus), Mariana, Tiradentes',
                    ideas: [
                        { e: '⛪', t: 'Ouro Preto', d: 'Ciudad del oro, primer sitio brasileño Patrimonio Mundial (1980).' },
                        { e: '🗿', t: 'Aleijadinho', d: 'Antônio Francisco Lisboa, gran escultor y arquitecto barroco del siglo XVIII.' },
                        { e: '✨', t: 'Iglesias doradas', d: 'Altares cubiertos de oro extraído de las minas.' },
                        { e: '🎻', t: 'Mestizaje', d: 'El arte barroco mezcló influencias europeas, africanas e indígenas.' }
                    ]
                },
                {
                    id: 'modernismo-tarsila', titulo: 'Modernismo y Tarsila do Amaral', icono: '🖼️', wiki: ['Tarsila do Amaral', 'Modern Art Week'],
                    dato: '"Abaporu" (1928), de Tarsila do Amaral, es uno de los cuadros brasileños más famosos; su nombre significa "el que come gente" en tupí.',
                    lugares: 'MASP (São Paulo), Museo de Arte Moderno de Río, Teatro Municipal de São Paulo, Pinacoteca',
                    ideas: [
                        { e: '🖼️', t: 'Semana de 1922', d: 'Evento en São Paulo que renovó el arte brasileño.' },
                        { e: '🎨', t: 'Tarsila do Amaral', d: 'Pintora modernista de colores vivos y paisajes tropicales.' },
                        { e: '🧑‍🎨', t: 'Cândido Portinari', d: 'Pintor de los trabajadores y de los murales, como "Guerra e Paz".' },
                        { e: '🏙️', t: 'Arte urbano', d: 'São Paulo tiene uno de los grafitis más reconocidos del mundo.' }
                    ]
                }
            ]
        },
        {
            id: 'literatura', nombre: 'Literatura', icono: '📚', temas: [
                {
                    id: 'machado-de-assis', titulo: 'Machado de Assis', icono: '📖', wiki: ['Machado de Assis', 'Dom Casmurro'],
                    dato: 'Machado de Assis fundó la Academia Brasileña de Letras en 1897 y fue su primer presidente.',
                    lugares: 'Academia Brasileña de Letras (Río), Biblioteca Nacional, Gabinete Real de Lectura, Cosme Velho',
                    ideas: [
                        { e: '📖', t: 'Dom Casmurro', d: 'Novela de 1899 sobre los celos de Bentinho y la duda sobre Capitu.' },
                        { e: '🦋', t: 'Memorias póstumas', d: 'Libro de 1881 narrado por un difunto, de humor irónico.' },
                        { e: '🏛️', t: 'Academia', d: 'Reúne a 40 miembros, los "inmortales".' },
                        { e: '🌍', t: 'Fama mundial', d: 'Es considerado el mayor escritor brasileño.' }
                    ]
                },
                {
                    id: 'clarice-rosa-amado', titulo: 'Clarice, Guimarães Rosa y Jorge Amado', icono: '📚', wiki: ['Clarice Lispector', 'Jorge Amado'],
                    dato: 'La literatura de cordel, folletos de versos que se cuelgan de un cordel, es una tradición popular del nordeste.',
                    lugares: 'Casa de Rui Barbosa, Salvador (Fundación Casa de Jorge Amado), Recife, Feria de São Cristóvão',
                    ideas: [
                        { e: '🖋️', t: 'Clarice Lispector', d: 'Escritora de "La hora de la estrella", nacida en Ucrania y criada en Recife.' },
                        { e: '🏜️', t: 'Guimarães Rosa', d: 'Autor de "Grande Sertão: Veredas" (1956), sobre el interior del país.' },
                        { e: '🌴', t: 'Jorge Amado', d: 'Narró la vida de Bahía en "Gabriela, clavo y canela".' },
                        { e: '📜', t: 'Literatura de cordel', d: 'Versos populares impresos en folletos baratos.' }
                    ]
                }
            ]
        },
        {
            id: 'tradiciones', nombre: 'Tradiciones', icono: '🌿', temas: [
                {
                    id: 'futbol-brasil', titulo: 'El fútbol brasileño', icono: '⚽', wiki: ['Brazil national football team', 'Pelé'],
                    dato: 'Brasil es el único país que ha jugado todos los Mundiales de fútbol y tiene cinco títulos: 1958, 1962, 1970, 1994 y 2002.',
                    lugares: 'Estadio Maracaná (Río), Museo del Fútbol (São Paulo), Estadio Mineirão, Santos',
                    ideas: [
                        { e: '🏆', t: 'Pentacampeón', d: 'Cinco Copas del Mundo, más que cualquier otro país.' },
                        { e: '👑', t: 'Pelé', d: 'El único jugador con tres Mundiales ganados (1958, 1962, 1970).' },
                        { e: '🏟️', t: 'Maracaná', d: 'Estadio inaugurado en 1950 en Río de Janeiro.' },
                        { e: '⭐', t: 'Joga bonito', d: 'Estilo alegre y técnico que caracteriza a los brasileños.' }
                    ]
                },
                {
                    id: 'candomble-religiosidad', titulo: 'Fe, candomblé y sincretismo', icono: '🕊️', wiki: ['Candomblé', 'Our Lady of Aparecida'],
                    dato: 'Cada 2 de febrero, miles de personas llevan ofrendas al mar en Salvador para Iemanjá, la reina de las aguas.',
                    lugares: 'Aparecida (São Paulo), Iglesia de Nosso Senhor do Bonfim (Salvador), Belém (Círio de Nazaré)',
                    ideas: [
                        { e: '🕊️', t: 'Catolicismo', d: 'Brasil es el país con más católicos del mundo.' },
                        { e: '🌊', t: 'Candomblé', d: 'Religión afrobrasileña con orixás como Iemanjá, Oxum y Ogum.' },
                        { e: '⛪', t: 'Nossa Senhora Aparecida', d: 'Patrona del país, celebrada el 12 de octubre.' },
                        { e: '🎗️', t: 'Sincretismo', d: 'Mezcla de santos católicos y deidades africanas.' }
                    ]
                }
            ]
        },
        {
            id: 'fiestas', nombre: 'Fiestas', icono: '🎉', temas: [
                {
                    id: 'carnaval-rio', titulo: 'Carnaval de Río', icono: '🎭', wiki: ['Rio Carnival', 'Sambadrome Marquês de Sapucaí'],
                    dato: 'El Sambódromo de Río, diseñado por Oscar Niemeyer, se inauguró en 1984 y tiene unas 70.000 localidades.',
                    lugares: 'Sambódromo (Marquês de Sapucaí), Cidade do Samba, Lapa, Copacabana',
                    ideas: [
                        { e: '🎭', t: 'Escuelas de samba', d: 'Cada escuela presenta un desfile con carros, disfraces y un samba-enredo.' },
                        { e: '👑', t: 'Rey Momo', d: 'Recibe las llaves de la ciudad al comenzar el carnaval.' },
                        { e: '🏟️', t: 'Sambódromo', d: 'Pasarela de unos 700 metros donde desfilan las escuelas.' },
                        { e: '🎊', t: 'Bloques', d: 'Miles de personas bailan en las calles detrás de camiones de sonido.' }
                    ]
                },
                {
                    id: 'festa-junina-parintins', titulo: 'Fiestas juninas y Parintins', icono: '🔥', wiki: ['Festa Junina', 'Parintins Folklore Festival'],
                    dato: 'En el festival de Parintins, en plena Amazonía, compiten los bueyes rivales Garantido (rojo) y Caprichoso (azul).',
                    lugares: 'Parintins (Amazonas), Caruaru, Campina Grande, Bumbódromo',
                    ideas: [
                        { e: '🔥', t: 'San Juan', d: 'En junio se celebran San Antonio, San Juan y San Pedro con hogueras.' },
                        { e: '💃', t: 'Quadrilha', d: 'Baile de parejas con trajes de campesinos y mucho humor.' },
                        { e: '🌽', t: 'Comidas', d: 'Maíz, pamonha, canjica y pastel de maíz.' },
                        { e: '🐂', t: 'Boi-Bumbá', d: 'Espectáculo de leyendas amazónicas en Parintins.' }
                    ]
                }
            ]
        },
        {
            id: 'vestimenta', nombre: 'Vestimenta típica', icono: '👗', temas: [
                {
                    id: 'baiana-vaqueiro', titulo: 'La baiana y el vaqueiro', icono: '👗', wiki: ['Baiana', 'Vaqueiro'],
                    dato: 'La baiana lleva una falda amplia, un turbante, collares de cuentas y mucho encaje blanco.',
                    lugares: 'Salvador (Bahía), Pelourinho, Mercado Modelo, Vaquejada en Nordeste',
                    ideas: [
                        { e: '👗', t: 'Baiana', d: 'Traje de las mujeres afrobrasileñas de Bahía, ícono de Brasil.' },
                        { e: '🧣', t: 'Turbante y collares', d: 'Los collares de cuentas tienen colores de los orixás.' },
                        { e: '🤠', t: 'Vaqueiro', d: 'Pastor del nordeste con traje completo de cuero para el matorral.' },
                        { e: '🐎', t: 'Gaúcho', d: 'En el sur se usa bombacha, poncho y botas.' }
                    ]
                },
                {
                    id: 'moda-indigena-playa', titulo: 'Pintura corporal, cocares y moda de playa', icono: '🏖️', wiki: ['Body painting', 'Havaianas'],
                    dato: 'Las chanclas Havaianas, creadas en 1962, se inspiran en las sandalias japonesas de paja y se volvieron símbolo de Brasil.',
                    lugares: 'Parque Indígena del Xingú, Copacabana, Ipanema, Museo del Indio',
                    ideas: [
                        { e: '🎨', t: 'Pintura corporal', d: 'Pueblos indígenas pintan su piel con urucú y genipapo.' },
                        { e: '🪶', t: 'Cocar', d: 'Tocado de plumas usado en ceremonias.' },
                        { e: '🩴', t: 'Havaianas', d: 'Chanclas de goma populares en todo el mundo.' },
                        { e: '👙', t: 'Moda de playa', d: 'Bikinis, canga y colores tropicales.' }
                    ]
                }
            ]
        },
        {
            id: 'monumentos', nombre: 'Monumentos', icono: '🏰', temas: [
                {
                    id: 'cristo-redentor', titulo: 'Cristo Redentor y Pan de Azúcar', icono: '✝️', wiki: ['Christ the Redeemer (statue)', 'Sugarloaf Mountain'],
                    dato: 'El Cristo Redentor, inaugurado en 1931, mide 30 metros y se sostiene sobre un pedestal de 8 metros en el cerro del Corcovado.',
                    lugares: 'Cerro del Corcovado, Pan de Azúcar, Parque Nacional da Tijuca, Escalera de Selarón',
                    ideas: [
                        { e: '✝️', t: 'Cristo Redentor', d: 'Estatua de 1931 que abre los brazos sobre Río de Janeiro.' },
                        { e: '🏔️', t: 'Pan de Azúcar', d: 'Peñón de granito de 396 metros al que se sube en teleférico.' },
                        { e: '🌟', t: '7 maravillas', d: 'El Cristo es una de las Nuevas Siete Maravillas del Mundo (2007).' },
                        { e: '🏖️', t: 'Copacabana', d: 'Playa famosa con pavimento de ondas blancas y negras.' }
                    ]
                },
                {
                    id: 'brasilia-iguazu-amazonas', titulo: 'Brasília, Iguazú y Teatro Amazonas', icono: '🏛️', wiki: ['Brasília', 'Teatro Amazonas'],
                    dato: 'Brasília, con forma de avión, es Patrimonio Mundial desde 1987 y es una ciudad moderna con edificios de Oscar Niemeyer.',
                    lugares: 'Catedral de Brasília, Praça dos Três Poderes, Cataratas de Foz do Iguaçu, Teatro Amazonas (Manaos)',
                    ideas: [
                        { e: '🏛️', t: 'Brasília', d: 'Capital planeada en el centro del país, inaugurada en 1960.' },
                        { e: '💦', t: 'Foz do Iguaçu', d: 'Cataratas compartidas con Argentina, Patrimonio Mundial desde 1986.' },
                        { e: '🎭', t: 'Teatro Amazonas', d: 'Ópera inaugurada en 1896 en medio de la selva, en la época del caucho.' },
                        { e: '🌊', t: 'Encuentro de aguas', d: 'Cerca de Manaos, el río Negro y el Solimões corren juntos sin mezclarse.' }
                    ]
                }
            ]
        }
    ]
};
