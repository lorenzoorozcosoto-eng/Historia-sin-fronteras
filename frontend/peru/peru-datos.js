// Perú: categorías y temas (ideas clave, dato curioso y lugares). La teoría ampliada está en peru-extra-1..4.js
window.PAIS = {
    iso: 'PE',
    nombre: 'Perú',
    bandera: '🇵🇪',
    banderaImg: 'https://flagcdn.com/w160/pe.png',
    categorias: [
        {
            id: 'historia', nombre: 'Historia', icono: '🏛️', temas: [
                {
                    id: 'culturas-preincas', titulo: 'Culturas preincas', icono: '🗿', wiki: ['Caral', 'Chavín de Huántar'],
                    dato: 'Caral, en el valle de Supe, tiene unos 5.000 años y es una de las ciudades más antiguas de América.',
                    lugares: 'Caral (Lima), Chavín de Huántar (Áncash), Líneas de Nazca (Ica), Huaca Rajada (Lambayeque)',
                    ideas: [
                        { e: '🏜️', t: 'Caral', d: 'Ciudad con pirámides de hace unos 5.000 años, Patrimonio Mundial desde 2009.' },
                        { e: '🐆', t: 'Chavín', d: 'Centro religioso de la sierra con galerías de piedra y cabezas clavas.' },
                        { e: '🦅', t: 'Nazca', d: 'Cultura de la costa sur conocida por sus enormes figuras en el desierto.' },
                        { e: '👑', t: 'Moche', d: 'Reino costero con grandes pirámides de adobe, cerámica y orfebrería.' }
                    ]
                },
                {
                    id: 'imperio-inca', titulo: 'El Imperio inca', icono: '☀️', wiki: ['Inca Empire', 'Machu Picchu'],
                    dato: 'Los incas no tenían escritura: llevaban sus cuentas con cuerdas anudadas llamadas quipus.',
                    lugares: 'Cusco, Sacsayhuamán, Ollantaytambo, Valle Sagrado, Camino Inca',
                    ideas: [
                        { e: '☀️', t: 'Tawantinsuyo', d: 'Nombre quechua del imperio: "las cuatro regiones" unidas desde el Cusco.' },
                        { e: '👑', t: 'Pachacútec', d: 'Inca que expandió el imperio a mediados del siglo XV.' },
                        { e: '🛣️', t: 'Qhapaq Ñan', d: 'Red de caminos de más de 30.000 km que unía el imperio.' },
                        { e: '🪢', t: 'Quipus', d: 'Cuerdas con nudos que servían para contar y registrar datos.' }
                    ]
                },
                {
                    id: 'conquista-virreinato', titulo: 'Conquista y Virreinato', icono: '⚔️', wiki: ['Francisco Pizarro', 'Túpac Amaru II'],
                    dato: 'Atahualpa llenó una habitación de oro y dos de plata como rescate, pero fue ejecutado de todas formas en 1533.',
                    lugares: 'Cajamarca (Cuarto del Rescate), Lima (Plaza Mayor), Cusco, Ayacucho',
                    ideas: [
                        { e: '🐎', t: 'Cajamarca, 1532', d: 'Francisco Pizarro captura al inca Atahualpa.' },
                        { e: '🏙️', t: 'Lima, 1535', d: 'Pizarro funda la "Ciudad de los Reyes", capital del virreinato.' },
                        { e: '👑', t: 'Virreinato del Perú', d: 'Fue el centro del poder español en Sudamérica durante siglos.' },
                        { e: '✊', t: 'Túpac Amaru II', d: 'Líder de la gran rebelión indígena de 1780 en Cusco.' }
                    ]
                },
                {
                    id: 'independencia-republica', titulo: 'Independencia y República', icono: '🔔', wiki: ['José de San Martín', 'Battle of Ayacucho'],
                    dato: 'La independencia se proclamó en Lima el 28 de julio de 1821, y esa fecha es hoy la fiesta nacional.',
                    lugares: 'Plaza de Armas de Lima, Pampa de la Quinua (Ayacucho), Museo Nacional de Arqueología, Antigua Aduana',
                    ideas: [
                        { e: '🔔', t: '28 de julio de 1821', d: 'San Martín proclama la independencia del Perú.' },
                        { e: '⚔️', t: 'Ayacucho, 1824', d: 'La batalla que terminó con el dominio español en Sudamérica.' },
                        { e: '⚓', t: 'Guerra del Pacífico', d: 'Entre 1879 y 1884 Perú, Bolivia y Chile se enfrentaron.' },
                        { e: '🗳️', t: 'Voto femenino', d: 'Las mujeres votaron por primera vez en 1956.' }
                    ]
                }
            ]
        },
        {
            id: 'cultura', nombre: 'Cultura', icono: '🌍', temas: [
                {
                    id: 'diversidad', titulo: 'Un país de muchas lenguas y pueblos', icono: '🤝', wiki: ['Quechua people', 'Demographics of Peru'],
                    dato: 'En Perú se hablan 48 lenguas originarias, 44 de ellas en la Amazonía.',
                    lugares: 'Cusco, Puno (Titicaca), Iquitos, Chincha (cultura afroperuana), Barrio Chino de Lima',
                    ideas: [
                        { e: '🗣️', t: 'Quechua y aimara', d: 'Lenguas andinas oficiales junto al castellano en las zonas donde predominan.' },
                        { e: '🌳', t: 'Pueblos amazónicos', d: 'Asháninka, shipibo-konibo, awajún y muchos más.' },
                        { e: '🥁', t: 'Afroperuanos', d: 'Herederos de personas africanas traídas en la Colonia; dieron ritmos y cocina.' },
                        { e: '🍜', t: 'Chinos y japoneses', d: 'Los inmigrantes dejaron la cocina chifa y nikkei.' }
                    ]
                },
                {
                    id: 'regiones', titulo: 'Costa, sierra y selva', icono: '🏔️', wiki: ['Geography of Peru', 'Huascarán'],
                    dato: 'Perú tiene tres regiones naturales y comparte el lago navegable más alto del mundo, el Titicaca, con Bolivia.',
                    lugares: 'Huascarán, Lago Titicaca, Cañón del Colca, Reserva Nacional de Paracas, Amazonas',
                    ideas: [
                        { e: '🏖️', t: 'Costa', d: 'Franja desértica junto al Pacífico, con valles fértiles.' },
                        { e: '🏔️', t: 'Sierra', d: 'Los Andes, con picos nevados como el Huascarán (6.768 m).' },
                        { e: '🌴', t: 'Selva', d: 'Amazonía, más de la mitad del territorio, con biodiversidad extraordinaria.' },
                        { e: '🦙', t: 'Fauna andina', d: 'Llamas, alpacas, vicuñas y cóndores.' }
                    ]
                }
            ]
        },
        {
            id: 'gastronomia', nombre: 'Gastronomía', icono: '🍽️', temas: [
                {
                    id: 'ceviche-lomo', titulo: 'Ceviche y platos de la costa', icono: '🐟', wiki: ['Ceviche', 'Peruvian cuisine'],
                    dato: 'En 2023 la UNESCO inscribió el ceviche como Patrimonio Cultural Inmaterial de la Humanidad.',
                    lugares: 'Lima (Miraflores, Barranco), Mercado de Surquillo, Chorrillos, Callao',
                    ideas: [
                        { e: '🐟', t: 'Ceviche', d: 'Pescado crudo marinado en limón, con ají, cebolla y camote.' },
                        { e: '🥩', t: 'Lomo saltado', d: 'Plato de fusión con carne salteada, cebolla, tomate y papas fritas.' },
                        { e: '🌶️', t: 'Ají amarillo', d: 'Ají base de muchos platos como el ají de gallina.' },
                        { e: '🍥', t: 'Cocina chifa y nikkei', d: 'Mezclas con sabores chinos y japoneses.' }
                    ]
                },
                {
                    id: 'papa-quinua-pisco', titulo: 'Papa, quinua y pisco', icono: '🥔', wiki: ['Potato', 'Pisco'],
                    dato: 'Perú es el origen de la papa y conserva más de 4.000 variedades nativas.',
                    lugares: 'Centro Internacional de la Papa (Lima), Valle Sagrado (Cusco), Ica (pisco), Mercado de San Pedro (Cusco)',
                    ideas: [
                        { e: '🥔', t: 'Papa', d: 'Cultivada hace miles de años en los Andes y hoy alimento mundial.' },
                        { e: '🌾', t: 'Quinua', d: 'Grano andino muy nutritivo, llamado "grano madre" por los incas.' },
                        { e: '🍸', t: 'Pisco', d: 'Destilado de uva, base del pisco sour, bebida nacional.' },
                        { e: '🥤', t: 'Chicha morada', d: 'Bebida de maíz morado con frutas y especias.' }
                    ]
                }
            ]
        },
        {
            id: 'musica', nombre: 'Música', icono: '🎶', temas: [
                {
                    id: 'musica-andina', titulo: 'Huayno y música andina', icono: '🎶', wiki: ['Huayno', 'El cóndor pasa'],
                    dato: '"El cóndor pasa", compuesta por Daniel Alomía Robles en 1913, es una de las melodías peruanas más conocidas del mundo.',
                    lugares: 'Cusco, Ayacucho, Huancayo, Puno',
                    ideas: [
                        { e: '🪈', t: 'Quena y zampoña', d: 'Flautas andinas hechas de caña.' },
                        { e: '🪕', t: 'Charango', d: 'Pequeña guitarra de cinco órdenes de cuerdas.' },
                        { e: '🎤', t: 'Huayno', d: 'Género más popular de la sierra, con letras de amor y vida cotidiana.' },
                        { e: '🦅', t: 'El cóndor pasa', d: 'Melodía andina que dio la vuelta al mundo.' }
                    ]
                },
                {
                    id: 'vals-afroperuano', titulo: 'Vals criollo y ritmo afroperuano', icono: '🥁', wiki: ['Chabuca Granda', 'Susana Baca'],
                    dato: 'El cajón peruano, una caja de madera sobre la que se sienta el músico, fue declarado Patrimonio Cultural de la Nación en 2001.',
                    lugares: 'Barrios Altos (Lima), El Carmen (Chincha), Casa de la Literatura, Rímac',
                    ideas: [
                        { e: '🥁', t: 'Cajón', d: 'Instrumento afroperuano de percusión que se toca sentado encima.' },
                        { e: '🎤', t: 'Chabuca Granda', d: 'Compositora de "La flor de la canela", himno del vals limeño.' },
                        { e: '🎶', t: 'Vals criollo', d: 'Música de Lima, con guitarra y cajón.' },
                        { e: '🏆', t: 'Susana Baca', d: 'Cantante que llevó el son afroperuano al mundo y ganó Grammy Latino.' }
                    ]
                }
            ]
        },
        {
            id: 'bailes', nombre: 'Bailes', icono: '💃', temas: [
                {
                    id: 'marinera', titulo: 'La marinera', icono: '💃', wiki: ['Marinera', 'Trujillo, Peru'],
                    dato: 'Trujillo celebra cada enero el Concurso Nacional de Marinera desde 1960.',
                    lugares: 'Trujillo (La Libertad), Lima, Piura, Chiclayo',
                    ideas: [
                        { e: '🧣', t: 'Pañuelo', d: 'Los bailarines agitan un pañuelo blanco en un cortejo elegante.' },
                        { e: '🐎', t: 'Caballo de paso', d: 'En la costa norte el baile se acompaña de caballos de paso peruano.' },
                        { e: '🏆', t: 'Concurso', d: 'En el concurso de Trujillo compiten parejas de todo el país.' },
                        { e: '🇵🇪', t: 'Baile nacional', d: 'Se la considera símbolo del Perú desde 1986.' }
                    ]
                },
                {
                    id: 'danza-tijeras', titulo: 'La danza de las tijeras', icono: '✂️', wiki: ['Scissors dance', 'Ayacucho Region'],
                    dato: 'La UNESCO inscribió la danza de las tijeras en 2010 como Patrimonio Cultural Inmaterial de la Humanidad.',
                    lugares: 'Ayacucho, Huancavelica, Apurímac, Cusco',
                    ideas: [
                        { e: '✂️', t: 'Tijeras de metal', d: 'El danzante hace sonar dos piezas de metal a modo de tijeras mientras baila.' },
                        { e: '🎻', t: 'Arpa y violín', d: 'Los músicos acompañan con arpa y violín.' },
                        { e: '🏔️', t: 'Origen andino', d: 'Se baila en los Andes sureños en honor a los apus (montañas sagradas).' },
                        { e: '🤸', t: 'Destreza', d: 'Los danzantes compiten haciendo piruetas y pruebas de fuerza.' }
                    ]
                }
            ]
        },
        {
            id: 'arte', nombre: 'Arte', icono: '🎨', temas: [
                {
                    id: 'escuela-cusquena', titulo: 'Escuela cusqueña y textiles', icono: '🖼️', wiki: ['Cusco School', 'Paracas culture'],
                    dato: 'En el cuadro de la Última Cena de la Catedral del Cusco, los pintores indígenas incluyeron un cuy asado como plato principal.',
                    lugares: 'Catedral del Cusco, Museo de Arte de Lima (MALI), Museo Larco, Museo Inka (Cusco)',
                    ideas: [
                        { e: '🖼️', t: 'Escuela cusqueña', d: 'Pintura de los siglos XVII y XVIII que mezcla estilo europeo y mirada andina.' },
                        { e: '🧶', t: 'Textiles Paracas', d: 'Mantos bordados hace unos 2.000 años en el desierto del sur.' },
                        { e: '🏺', t: 'Cerámica', d: 'Los huacos moche y nazca son piezas muy conocidas.' },
                        { e: '🖌️', t: 'Retablos', d: 'Cajas de colores con escenas de la vida andina.' }
                    ]
                },
                {
                    id: 'nazca-sipan', titulo: 'Líneas de Nazca y el Señor de Sipán', icono: '🦜', wiki: ['Nazca Lines', 'Lord of Sipán'],
                    dato: 'Las figuras de Nazca son tan grandes que se ven completas solo desde el aire.',
                    lugares: 'Pampa de Nazca (Ica), Museo Tumbas Reales de Sipán (Lambayeque), Huaca Rajada, Museo Larco (Lima)',
                    ideas: [
                        { e: '🐒', t: 'Geoglifos', d: 'Dibujos de colibríes, monos y arañas hechos en el suelo del desierto.' },
                        { e: '⚱️', t: 'Señor de Sipán', d: 'Tumba real moche hallada en 1987, con ricas joyas de oro y plata.' },
                        { e: '🦎', t: 'Patrimonio', d: 'Las líneas de Nazca son Patrimonio Mundial desde 1994.' },
                        { e: '🥇', t: 'Orfebrería', d: 'Los moche trabajaban oro, plata y cobre con gran técnica.' }
                    ]
                }
            ]
        },
        {
            id: 'literatura', nombre: 'Literatura', icono: '📚', temas: [
                {
                    id: 'vargas-llosa', titulo: 'Mario Vargas Llosa', icono: '📖', wiki: ['Mario Vargas Llosa', 'The Time of the Hero'],
                    dato: 'En 2010 Mario Vargas Llosa recibió el Premio Nobel de Literatura.',
                    lugares: 'Arequipa (ciudad natal), Colegio Militar Leoncio Prado (Callao), Lima, Biblioteca Nacional',
                    ideas: [
                        { e: '🏆', t: 'Premio Nobel 2010', d: 'Reconocido por su cartografía de las estructuras del poder.' },
                        { e: '📕', t: 'La ciudad y los perros', d: 'Primera gran novela, de 1963, ambientada en un colegio militar.' },
                        { e: '🌆', t: 'Conversación en La Catedral', d: 'Retrata el Perú de la dictadura del general Odría.' },
                        { e: '✍️', t: 'Obra y ensayo', d: 'Escribió novelas, ensayos y artículos periodísticos.' }
                    ]
                },
                {
                    id: 'garcilaso-vallejo', titulo: 'Garcilaso, Vallejo y Arguedas', icono: '📚', wiki: ['César Vallejo', 'José María Arguedas'],
                    dato: 'César Vallejo, nacido en Santiago de Chuco, es considerado uno de los grandes poetas del siglo XX en español.',
                    lugares: 'Cusco (Casa Garcilaso), Santiago de Chuco, Museo de la Nación, Andahuaylas',
                    ideas: [
                        { e: '📜', t: 'Inca Garcilaso', d: 'Mestizo cusqueño que escribió los "Comentarios reales" (1609).' },
                        { e: '🖋️', t: 'César Vallejo', d: 'Poeta de "Los heraldos negros" y "Trilce".' },
                        { e: '🏔️', t: 'José María Arguedas', d: 'Escritor de "Los ríos profundos" y defensor de las culturas andinas.' },
                        { e: '😄', t: 'Ricardo Palma', d: 'Autor de las "Tradiciones peruanas", relatos breves de la historia con humor.' }
                    ]
                }
            ]
        },
        {
            id: 'tradiciones', nombre: 'Tradiciones', icono: '🌿', temas: [
                {
                    id: 'ayni-pachamama', titulo: 'Ayllu, ayni y Pachamama', icono: '🤲', wiki: ['Ayllu', 'Pachamama'],
                    dato: 'El ayni es una forma de ayuda mutua: hoy te ayudo yo con la cosecha y mañana me ayudas tú.',
                    lugares: 'Comunidades del Valle Sagrado, Isla Taquile, Chinchero, Pisac',
                    ideas: [
                        { e: '🏘️', t: 'Ayllu', d: 'Comunidad andina que comparte tierra y trabajo.' },
                        { e: '🤝', t: 'Ayni y minka', d: 'Ayuda recíproca y trabajo comunitario.' },
                        { e: '🌎', t: 'Pachamama', d: 'La Madre Tierra, a quien se ofrecen pagos y gratitud.' },
                        { e: '🍃', t: 'Hoja de coca', d: 'Planta sagrada usada en rituales y como infusión desde hace milenios.' }
                    ]
                },
                {
                    id: 'artesania', titulo: 'Artesanía peruana', icono: '🧶', wiki: ['Taquile', 'Peruvian handicrafts'],
                    dato: 'En la isla Taquile, en el lago Titicaca, los hombres tejen y la gran mayoría de los habitantes se viste con prendas hechas por ellos.',
                    lugares: 'Isla Taquile (Puno), Pisac (Cusco), Chulucanas (Piura), Ayacucho (retablos)',
                    ideas: [
                        { e: '🧶', t: 'Tejidos de Taquile', d: 'Prendas con simbolismo, reconocidas por la UNESCO en 2008.' },
                        { e: '🎁', t: 'Retablo ayacuchano', d: 'Cajita de madera con figuras de masa y escenas andinas.' },
                        { e: '🏺', t: 'Cerámica de Chulucanas', d: 'Piezas de barro de color negro y marrón con técnica antigua.' },
                        { e: '🥭', t: 'Mate burilado', d: 'Calabaza tallada con escenas de la vida cotidiana.' }
                    ]
                }
            ]
        },
        {
            id: 'fiestas', nombre: 'Fiestas', icono: '🎉', temas: [
                {
                    id: 'inti-raymi', titulo: 'Inti Raymi, la fiesta del Sol', icono: '☀️', wiki: ['Inti Raymi'],
                    dato: 'El Inti Raymi se celebra cada 24 de junio en Sacsayhuamán, en el solsticio de invierno del hemisferio sur.',
                    lugares: 'Qorikancha, Plaza de Armas del Cusco, Sacsayhuamán',
                    ideas: [
                        { e: '☀️', t: 'Fiesta del Sol', d: 'Los incas agradecían al dios Sol por la luz y la cosecha.' },
                        { e: '👑', t: 'El Inca', d: 'Un actor representa al Sapa Inca, que dirige el ritual.' },
                        { e: '🚶', t: 'Procesión', d: 'La comitiva sale del Qorikancha hasta Sacsayhuamán.' },
                        { e: '📅', t: 'Recuperada', d: 'Se volvió a representar en 1944, basada en crónicas.' }
                    ]
                },
                {
                    id: 'senor-milagros', titulo: 'Señor de los Milagros', icono: '🟣', wiki: ['Lord of Miracles', 'Lima'],
                    dato: 'La procesión del Señor de los Milagros llena Lima de color morado cada octubre.',
                    lugares: 'Santuario de Las Nazarenas (Lima), Centro histórico de Lima, Plaza Mayor',
                    ideas: [
                        { e: '🟣', t: 'Color morado', d: 'Miles de fieles se visten de morado durante octubre.' },
                        { e: '🖼️', t: 'Imagen en un muro', d: 'Nació de una pintura hecha en el siglo XVII por un esclavizado de origen africano.' },
                        { e: '🧁', t: 'Turrón de Doña Pepa', d: 'Dulce típico que se come durante estas fiestas.' },
                        { e: '🙏', t: 'Procesión', d: 'Es una de las más grandes de Latinoamérica.' }
                    ]
                }
            ]
        },
        {
            id: 'vestimenta', nombre: 'Vestimenta típica', icono: '👗', temas: [
                {
                    id: 'chullo-poncho', titulo: 'El chullo y el poncho', icono: '🧢', wiki: ['Chullo', 'Poncho'],
                    dato: 'El chullo tiene orejeras y suele tejerse con lana de oveja o alpaca; en algunas comunidades los colores indican si la persona está soltera o casada.',
                    lugares: 'Cusco, Puno, Pisac, Taquile',
                    ideas: [
                        { e: '🧢', t: 'Chullo', d: 'Gorro de lana con orejeras, típico de los Andes.' },
                        { e: '🧥', t: 'Poncho', d: 'Manto abierto para el frío de la altura.' },
                        { e: '🦙', t: 'Lana de alpaca', d: 'Una de las fibras más suaves y cálidas.' },
                        { e: '🎨', t: 'Tintes naturales', d: 'Los tejedores usan plantas e insectos como la cochinilla.' }
                    ]
                },
                {
                    id: 'pollera-shipibo', titulo: 'Polleras andinas y diseños shipibo', icono: '👗', wiki: ['Shipibo-Conibo people', 'Pollera'],
                    dato: 'Los diseños geométricos de los shipibo-konibo, llamados kené, se pintan en telas, cerámica y rostros.',
                    lugares: 'Pucallpa (Ucayali), Cusco, Puno, Mercado de Pisac',
                    ideas: [
                        { e: '👗', t: 'Pollera', d: 'Falda ancha y de capas usada por las mujeres de la sierra.' },
                        { e: '🎩', t: 'Sombrero', d: 'Cada región tiene su forma y color de sombrero.' },
                        { e: '🔶', t: 'Kené', d: 'Diseños geométricos de los shipibo-konibo de la Amazonía.' },
                        { e: '💎', t: 'Joyas', d: 'Collares y aretes de plata y semillas.' }
                    ]
                }
            ]
        },
        {
            id: 'monumentos', nombre: 'Monumentos', icono: '🏰', temas: [
                {
                    id: 'machu-picchu', titulo: 'Machu Picchu', icono: '⛰️', wiki: ['Machu Picchu', 'Hiram Bingham III'],
                    dato: 'Machu Picchu fue elegida en 2007 como una de las nuevas siete maravillas del mundo.',
                    lugares: 'Machu Picchu, Camino Inca, Aguas Calientes, Huayna Picchu',
                    ideas: [
                        { e: '⛰️', t: 'Ciudadela inca', d: 'Construida hacia 1450, a unos 2.430 metros de altura.' },
                        { e: '🌄', t: 'Terrazas', d: 'Los andenes servían para cultivar y sostener la montaña.' },
                        { e: '🧭', t: 'Hiram Bingham', d: 'En 1911 la dio a conocer al mundo, aunque la gente local la conocía.' },
                        { e: '🌍', t: 'Patrimonio', d: 'Es Patrimonio Mundial desde 1983.' }
                    ]
                },
                {
                    id: 'cusco-lima-chan-chan', titulo: 'Cusco, Lima y Chan Chan', icono: '🏛️', wiki: ['Cusco', 'Chan Chan'],
                    dato: 'Chan Chan, la capital del reino Chimú, es la ciudad de adobe más grande de América.',
                    lugares: 'Sacsayhuamán, Qorikancha, Centro histórico de Lima, Chan Chan (Trujillo), Kuélap',
                    ideas: [
                        { e: '🏛️', t: 'Cusco', d: 'Antigua capital inca con muros de piedra que sostienen iglesias coloniales.' },
                        { e: '🏙️', t: 'Lima histórica', d: 'Plaza Mayor, catedral y balcones coloniales; Patrimonio Mundial.' },
                        { e: '🧱', t: 'Chan Chan', d: 'Ciudad chimú de adobe con relieves de peces y aves.' },
                        { e: '🏰', t: 'Kuélap', d: 'Fortaleza chachapoya en las montañas del norte.' }
                    ]
                }
            ]
        }
    ]
};
