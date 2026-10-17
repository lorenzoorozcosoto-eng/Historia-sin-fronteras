// Argentina: categorías y temas (ideas clave, dato curioso y lugares). La teoría ampliada está en argentina-extra-1..4.js
window.PAIS = {
    iso: 'AR',
    nombre: 'Argentina',
    bandera: '🇦🇷',
    banderaImg: 'https://flagcdn.com/w160/ar.png',
    categorias: [
        {
            id: 'historia', nombre: 'Historia', icono: '🏛️', temas: [
                {
                    id: 'pueblos-originarios', titulo: 'Pueblos originarios', icono: '🗿', wiki: ['Cueva de las Manos', 'Mapuche'],
                    dato: 'En la Cueva de las Manos, en la Patagonia, hay pinturas de manos hechas hace unos 9.000 años.',
                    lugares: 'Cueva de las Manos (Santa Cruz), Quilmes (Tucumán), Quebrada de Humahuaca, Museo Etnográfico (Buenos Aires)',
                    ideas: [
                        { e: '✋', t: 'Cueva de las Manos', d: 'Arte rupestre de cazadores patagónicos, Patrimonio Mundial desde 1999.' },
                        { e: '🏔️', t: 'Diaguitas y quilmes', d: 'Pueblos del noroeste que cultivaban en terrazas y construyeron la ciudad de Quilmes.' },
                        { e: '🐴', t: 'Mapuches y tehuelches', d: 'Pueblos del sur y la Patagonia con cultura propia y gran conocimiento del territorio.' },
                        { e: '🌽', t: 'Guaraníes', d: 'Pueblo del nordeste, agricultor y de lengua guaraní, aún hablada en Corrientes y Misiones.' }
                    ]
                },
                {
                    id: 'colonia-virreinato', titulo: 'Colonia y Virreinato del Río de la Plata', icono: '⛵', wiki: ['Viceroyalty of the Río de la Plata', 'Buenos Aires'],
                    dato: 'Buenos Aires fue fundada dos veces: en 1536 por Pedro de Mendoza y definitivamente en 1580 por Juan de Garay.',
                    lugares: 'Cabildo de Buenos Aires, Manzana de las Luces, Misiones jesuíticas de San Ignacio Miní, Colonia del Sacramento (Uruguay)',
                    ideas: [
                        { e: '⛵', t: '1536 y 1580', d: 'Primera y segunda fundación de Buenos Aires, junto al Río de la Plata.' },
                        { e: '⛪', t: 'Misiones jesuíticas', d: 'Pueblos guaraníes organizados por los jesuitas, como San Ignacio Miní.' },
                        { e: '👑', t: '1776', d: 'Se crea el Virreinato del Río de la Plata con capital en Buenos Aires.' },
                        { e: '⚔️', t: 'Invasiones inglesas', d: 'En 1806 y 1807 los porteños rechazaron dos ataques británicos.' }
                    ]
                },
                {
                    id: 'independencia', titulo: 'Independencia de Argentina', icono: '🔔', wiki: ['May Revolution', 'José de San Martín'],
                    dato: 'San Martín cruzó los Andes en 1817 con unos 5.000 hombres, mulas y cañones, para liberar a Chile y llegar a Perú.',
                    lugares: 'Casa Histórica de Tucumán, Plaza de Mayo, Cabildo de Buenos Aires, Mendoza (Cerro de la Gloria)',
                    ideas: [
                        { e: '🔔', t: 'Revolución de Mayo', d: 'El 25 de mayo de 1810 se forma en Buenos Aires la Primera Junta de gobierno.' },
                        { e: '📜', t: '9 de julio de 1816', d: 'El Congreso de Tucumán declara la independencia de las Provincias Unidas.' },
                        { e: '⛰️', t: 'Cruce de los Andes', d: 'El Ejército de los Andes liberó Chile y luego navegó hacia Perú.' },
                        { e: '🌐', t: 'Manuel Belgrano', d: 'Creó la bandera celeste y blanca en 1812 a orillas del río Paraná.' }
                    ]
                },
                {
                    id: 'organizacion-nacional', titulo: 'Organización nacional y siglo XX', icono: '📜', wiki: ['Constitution of Argentina', 'Eva Perón'],
                    dato: 'En 1853 se sancionó la Constitución Nacional, todavía vigente con reformas, la última en 1994.',
                    lugares: 'Casa Rosada, Congreso de la Nación, Museo del Bicentenario, Plaza de Mayo',
                    ideas: [
                        { e: '📜', t: 'Constitución de 1853', d: 'Establece una república federal con tres poderes.' },
                        { e: '🚢', t: 'Inmigración masiva', d: 'Entre 1880 y 1930 llegaron millones de europeos a trabajar y vivir.' },
                        { e: '🗳️', t: 'Voto', d: 'Ley Sáenz Peña (1912) y voto femenino (1947) ampliaron la participación.' },
                        { e: '🕊️', t: 'Democracia desde 1983', d: 'Tras la dictadura de 1976-1983, el país recuperó la democracia.' }
                    ]
                }
            ]
        },
        {
            id: 'cultura', nombre: 'Cultura', icono: '🌍', temas: [
                {
                    id: 'inmigracion-diversidad', titulo: 'Un país de inmigrantes', icono: '🤝', wiki: ['Immigration to Argentina', 'Demographics of Argentina'],
                    dato: 'Buenos Aires tiene un barrio chino, uno coreano y varios barrios históricos de italianos, españoles y judíos.',
                    lugares: 'Museo de la Inmigración (Buenos Aires), Colonia Galesa (Chubut), Barrio Chino, Villa General Belgrano',
                    ideas: [
                        { e: '🚢', t: 'Hotel de Inmigrantes', d: 'Lugar donde dormían y comían los recién llegados a Buenos Aires.' },
                        { e: '🇮🇹', t: 'Italianos y españoles', d: 'Fueron los grupos más numerosos y marcaron la lengua y la cocina.' },
                        { e: '🏴', t: 'Galeses en la Patagonia', d: 'Llegaron en 1865 al Chubut y fundaron Puerto Madryn y Gaiman.' },
                        { e: '🗣️', t: 'Lunfardo y voseo', d: 'El habla rioplatense mezcla palabras de muchos orígenes y usa "vos".' }
                    ]
                },
                {
                    id: 'regiones', titulo: 'Regiones y paisajes', icono: '🏔️', wiki: ['Pampas', 'Patagonia'],
                    dato: 'Argentina tiene el Aconcagua, la montaña más alta de América, con 6.961 metros.',
                    lugares: 'Aconcagua, Pampa húmeda, Cataratas del Iguazú, Glaciar Perito Moreno, Ushuaia',
                    ideas: [
                        { e: '🌾', t: 'La Pampa', d: 'Llanura fértil donde se cultiva trigo, soja y se cría ganado.' },
                        { e: '🧊', t: 'Patagonia', d: 'Región austral de estepa, lagos, bosques y glaciares.' },
                        { e: '🏔️', t: 'Los Andes', d: 'Cordillera en el oeste con el Aconcagua, techo de América.' },
                        { e: '💦', t: 'Iguazú', d: 'Cataratas en la selva misionera, compartidas con Brasil.' }
                    ]
                }
            ]
        },
        {
            id: 'gastronomia', nombre: 'Gastronomía', icono: '🍽️', temas: [
                {
                    id: 'asado-empanadas', titulo: 'El asado y las empanadas', icono: '🥩', wiki: ['Asado', 'Empanada'],
                    dato: 'El asado se hace sobre brasas, a fuego lento, y es una reunión familiar de domingo.',
                    lugares: 'Parrillas de Buenos Aires, Salta (empanadas salteñas), Tucumán (empanadas tucumanas), Mendoza',
                    ideas: [
                        { e: '🔥', t: 'Parrilla', d: 'Cortes como vacío, asado de tira, chorizo y morcilla cocidos a la parrilla.' },
                        { e: '🥟', t: 'Empanadas', d: 'Masa rellena de carne, pollo o humita; cada provincia tiene su receta.' },
                        { e: '🌿', t: 'Chimichurri', d: 'Salsa de perejil, ajo y vinagre para acompañar la carne.' },
                        { e: '🍝', t: 'Pastas e influencia italiana', d: 'Ñoquis el día 29, milanesas y pizza argentina.' }
                    ]
                },
                {
                    id: 'mate-dulce-leche', titulo: 'Mate, dulce de leche y alfajores', icono: '🧉', wiki: ['Mate (drink)', 'Dulce de leche'],
                    dato: 'Los argentinos toman en promedio unos 6 a 7 kilos de yerba mate por persona al año.',
                    lugares: 'Misiones (yerba mate), Mar del Plata (alfajores), Buenos Aires (cafés notables), Córdoba',
                    ideas: [
                        { e: '🧉', t: 'Mate', d: 'Infusión de yerba mate que se comparte en ronda con bombilla.' },
                        { e: '🍮', t: 'Dulce de leche', d: 'Crema de leche y azúcar, base de alfajores, flanes y helados.' },
                        { e: '🍪', t: 'Alfajores', d: 'Galletas rellenas, con chocolate o dulce de leche; los de Mar del Plata son famosos.' },
                        { e: '🍷', t: 'Malbec', d: 'Mendoza produce vinos reconocidos en el mundo, sobre todo Malbec.' }
                    ]
                }
            ]
        },
        {
            id: 'musica', nombre: 'Música', icono: '🎶', temas: [
                {
                    id: 'tango', titulo: 'El tango', icono: '🎻', wiki: ['Tango', 'Carlos Gardel'],
                    dato: 'En 2009 la UNESCO declaró al tango Patrimonio Cultural Inmaterial de la Humanidad, junto con Uruguay.',
                    lugares: 'Caminito (La Boca), Café Tortoni (Buenos Aires), Museo Casa Carlos Gardel, Milongas porteñas',
                    ideas: [
                        { e: '🎹', t: 'Origen rioplatense', d: 'Nació a fines del siglo XIX en los barrios populares de Buenos Aires y Montevideo.' },
                        { e: '🪗', t: 'Bandoneón', d: 'Instrumento alemán de fuelles que se volvió el sonido del tango.' },
                        { e: '🎤', t: 'Carlos Gardel', d: 'Cantor que llevó el tango al mundo en las décadas de 1920 y 1930.' },
                        { e: '🎼', t: 'Astor Piazzolla', d: 'Compositor que renovó el tango con el "tango nuevo".' }
                    ]
                },
                {
                    id: 'rock-folklore', titulo: 'Folklore y rock nacional', icono: '🎸', wiki: ['Mercedes Sosa', 'Argentine rock'],
                    dato: 'Mercedes Sosa, "la Negra", es una de las voces más queridas de América Latina.',
                    lugares: 'Festival Nacional de Folklore de Cosquín (Córdoba), Teatro Colón, Estadio Luna Park, Tucumán',
                    ideas: [
                        { e: '🎤', t: 'Mercedes Sosa', d: 'Cantante tucumana del Nuevo Cancionero que cantó a toda Latinoamérica.' },
                        { e: '🎸', t: 'Rock nacional', d: 'Movimiento nacido a fines de los 60 con Charly García, Spinetta y Soda Stereo.' },
                        { e: '🪕', t: 'Guitarra y bombo', d: 'Instrumentos básicos del folklore argentino.' },
                        { e: '⛺', t: 'Cosquín', d: 'Festival folklórico más importante, cada enero, desde 1961.' }
                    ]
                }
            ]
        },
        {
            id: 'bailes', nombre: 'Bailes', icono: '💃', temas: [
                {
                    id: 'zamba-chacarera', titulo: 'Zamba y chacarera', icono: '💃', wiki: ['Zamba', 'Chacarera'],
                    dato: 'La zamba es baile nacional desde 1997 y se baila con pañuelo en la mano.',
                    lugares: 'Santiago del Estero (capital de la chacarera), Salta, Tucumán, Cosquín',
                    ideas: [
                        { e: '🧣', t: 'Pañuelo', d: 'En la zamba la pareja mueve el pañuelo en un cortejo suave.' },
                        { e: '🥁', t: 'Chacarera', d: 'Baile alegre en parejas sueltas, con zapateo y escobillado.' },
                        { e: '🏜️', t: 'Origen', d: 'Nacieron en el norte del país con mezcla de influencias indígenas, africanas y españolas.' },
                        { e: '🌎', t: 'Día de la Zamba', d: 'Se celebra cada año el 29 de septiembre en homenaje a Gustavo "Cuchi" Leguizamón.' }
                    ]
                },
                {
                    id: 'malambo', titulo: 'El malambo y el tango en baile', icono: '🕺', wiki: ['Malambo', 'Argentine tango'],
                    dato: 'El malambo es una competencia de zapateo en la que los bailarines demuestran velocidad y resistencia.',
                    lugares: 'Laborde (Córdoba), Festival de Jesús María, Buenos Aires (milongas), La Boca',
                    ideas: [
                        { e: '👞', t: 'Zapateo', d: 'Golpes de bota y de boleadoras al ritmo de la guitarra.' },
                        { e: '🐎', t: 'Gaucho', d: 'El malambo nació entre los gauchos de la llanura.' },
                        { e: '💃', t: 'Tango salón', d: 'Se baila abrazado, con caminata y figuras como el ocho.' },
                        { e: '🏆', t: 'Campeonatos', d: 'Cada año hay un campeonato mundial de baile de tango en Buenos Aires.' }
                    ]
                }
            ]
        },
        {
            id: 'arte', nombre: 'Arte', icono: '🎨', temas: [
                {
                    id: 'quinquela', titulo: 'La Boca y Quinquela Martín', icono: '🎨', wiki: ['Benito Quinquela Martín', 'La Boca'],
                    dato: 'Las casas de chapa de Caminito se pintaron con restos de pintura de los barcos del puerto.',
                    lugares: 'Caminito (La Boca), Museo Quinquela Martín, Fundación Proa, Usina del Arte',
                    ideas: [
                        { e: '🎨', t: 'Quinquela Martín', d: 'Pintor del puerto que mostró el trabajo de obreros y barcos.' },
                        { e: '🏠', t: 'Caminito', d: 'Calle museo de casas coloridas, ícono del barrio de La Boca.' },
                        { e: '🖼️', t: 'MALBA', d: 'Museo de Arte Latinoamericano de Buenos Aires, inaugurado en 2001.' },
                        { e: '🖌️', t: 'Berni y Xul Solar', d: 'Artistas que mostraron al país con humor, crítica y fantasía.' }
                    ]
                },
                {
                    id: 'teatro-colon', titulo: 'El Teatro Colón', icono: '🎭', wiki: ['Teatro Colón', 'Buenos Aires'],
                    dato: 'El Teatro Colón, inaugurado en 1908, es considerado uno de los mejores teatros de ópera del mundo por su acústica.',
                    lugares: 'Teatro Colón, Teatro Gran Rex, Palacio Barolo, Avenida Corrientes',
                    ideas: [
                        { e: '🎭', t: '1908', d: 'Se inaugura la sala actual en la Ciudad de Buenos Aires.' },
                        { e: '🎶', t: 'Acústica', d: 'Su forma de herradura da un sonido excepcional.' },
                        { e: '💃', t: 'Ballet y ópera', d: 'Allí actuaron figuras como Nijinsky y Maria Callas.' },
                        { e: '🏙️', t: 'Avenida Corrientes', d: 'Calle de los teatros, librerías y pizzerías de Buenos Aires.' }
                    ]
                }
            ]
        },
        {
            id: 'literatura', nombre: 'Literatura', icono: '📚', temas: [
                {
                    id: 'borges', titulo: 'Jorge Luis Borges', icono: '📖', wiki: ['Jorge Luis Borges', 'Ficciones'],
                    dato: 'Borges fue director de la Biblioteca Nacional y perdió la vista casi por completo a los 55 años.',
                    lugares: 'Biblioteca Nacional (Buenos Aires), Librería El Ateneo Grand Splendid, Fundación Internacional Jorge Luis Borges',
                    ideas: [
                        { e: '📖', t: 'Ficciones', d: 'Libro de cuentos de 1944 con laberintos, espejos y bibliotecas infinitas.' },
                        { e: '♾️', t: 'El Aleph', d: 'Cuento sobre un punto desde el cual se ve todo el universo.' },
                        { e: '🏛️', t: 'Biblioteca', d: 'Fue director de la Biblioteca Nacional desde 1955.' },
                        { e: '🌐', t: 'Fama mundial', d: 'Es uno de los escritores más influyentes del siglo XX.' }
                    ]
                },
                {
                    id: 'martin-fierro-cortazar', titulo: 'Martín Fierro y Cortázar', icono: '📚', wiki: ['Martín Fierro', 'Julio Cortázar'],
                    dato: 'El poema "Martín Fierro" (1872) de José Hernández es considerado el poema nacional de los argentinos.',
                    lugares: 'Museo José Hernández (Buenos Aires), Feria del Libro de Buenos Aires, Casa de Cortázar (Banfield)',
                    ideas: [
                        { e: '🐎', t: 'Martín Fierro', d: 'Poema sobre un gaucho perseguido y las injusticias de la frontera.' },
                        { e: '🧩', t: 'Rayuela', d: 'Novela de Cortázar de 1963 que se puede leer en distinto orden.' },
                        { e: '✍️', t: 'Alfonsina Storni', d: 'Poeta y feminista, autora de "Voy a dormir".' },
                        { e: '📅', t: 'Feria del Libro', d: 'Una de las más grandes de habla hispana, cada año en Buenos Aires.' }
                    ]
                }
            ]
        },
        {
            id: 'tradiciones', nombre: 'Tradiciones', icono: '🌿', temas: [
                {
                    id: 'gaucho', titulo: 'El gaucho y la estancia', icono: '🐎', wiki: ['Gaucho', 'Estancia'],
                    dato: 'El Día de la Tradición se celebra el 10 de noviembre, por el nacimiento de José Hernández.',
                    lugares: 'San Antonio de Areco, Museo Gauchesco Ricardo Güiraldes, Estancias de la pampa, Lobos',
                    ideas: [
                        { e: '🐎', t: 'Jinete de la pampa', d: 'Habitante de las llanuras que vivía del ganado y del caballo.' },
                        { e: '🔥', t: 'Fogón', d: 'Reunión alrededor del fuego con asado, mate y guitarra.' },
                        { e: '🪢', t: 'Boleadoras y lazo', d: 'Herramientas para cazar y manejar el ganado.' },
                        { e: '🏡', t: 'San Antonio de Areco', d: 'Pueblo considerado capital de la tradición gaucha.' }
                    ]
                },
                {
                    id: 'futbol', titulo: 'El fútbol, una pasión nacional', icono: '⚽', wiki: ['Argentina national football team', 'Diego Maradona'],
                    dato: 'Argentina ganó el Mundial de fútbol en 1978, 1986 y 2022.',
                    lugares: 'La Bombonera (Boca Juniors), Estadio Monumental (River), Museo del Deporte, Rosario',
                    ideas: [
                        { e: '🏆', t: 'Mundiales', d: 'Tres títulos: 1978, 1986 y 2022.' },
                        { e: '⚽', t: 'Maradona', d: 'Capitán campeón en 1986, ídolo nacional.' },
                        { e: '🌟', t: 'Messi', d: 'Capitán campeón en Qatar 2022 y ganador de varios Balones de Oro.' },
                        { e: '🆚', t: 'Superclásico', d: 'Boca Juniors contra River Plate, el partido más famoso del país.' }
                    ]
                }
            ]
        },
        {
            id: 'fiestas', nombre: 'Fiestas', icono: '🎉', temas: [
                {
                    id: 'carnaval-humahuaca', titulo: 'Carnaval de la Quebrada de Humahuaca', icono: '🎭', wiki: ['Quebrada de Humahuaca', 'Pachamama'],
                    dato: 'El carnaval de Humahuaca comienza con el "desentierro del diablo", figura que se libera por unos días.',
                    lugares: 'Humahuaca (Jujuy), Tilcara, Purmamarca, Cerro de los Siete Colores',
                    ideas: [
                        { e: '😈', t: 'Desentierro', d: 'Se desentierra un muñeco que simboliza el diablo y se lo vuelve a enterrar al final.' },
                        { e: '🌎', t: 'Pachamama', d: 'Ofrendas a la Madre Tierra con coca, chicha y flores.' },
                        { e: '🎨', t: 'Patrimonio', d: 'La Quebrada fue declarada Patrimonio Mundial en 2003.' },
                        { e: '💧', t: 'Agua y harina', d: 'Se juega con agua, serpentinas y harina durante la fiesta.' }
                    ]
                },
                {
                    id: 'vendimia', titulo: 'Fiesta Nacional de la Vendimia', icono: '🍇', wiki: ['Fiesta Nacional de la Vendimia', 'Mendoza Province'],
                    dato: 'Se celebra desde 1936 en Mendoza y elige a una reina nacional de la vendimia.',
                    lugares: 'Mendoza, Teatro Griego Frank Romero Day, Bodegas de Luján de Cuyo y Maipú, Valle de Uco',
                    ideas: [
                        { e: '🍇', t: 'Vendimia', d: 'Cosecha de la uva que se celebra con desfiles de carros.' },
                        { e: '👑', t: 'Reina', d: 'Cada año se elige una reina entre candidatas de los departamentos.' },
                        { e: '🎆', t: 'Acto central', d: 'Se hace en un anfiteatro con música, baile y fuegos artificiales.' },
                        { e: '🍷', t: 'Bodegas', d: 'Mendoza produce la mayor parte del vino argentino.' }
                    ]
                }
            ]
        },
        {
            id: 'vestimenta', nombre: 'Vestimenta típica', icono: '👗', temas: [
                {
                    id: 'traje-gaucho', titulo: 'El traje gaucho', icono: '🧢', wiki: ['Gaucho', 'Bombachas de campo'],
                    dato: 'La bombacha de campo es un pantalón ancho que llegó al país con la ropa de soldados turcos y fue adoptada por los gauchos.',
                    lugares: 'San Antonio de Areco, Museo Gauchesco, Feria de Mataderos (Buenos Aires)',
                    ideas: [
                        { e: '👖', t: 'Bombacha', d: 'Pantalón ancho, cómodo para montar.' },
                        { e: '🎩', t: 'Sombrero y pañuelo', d: 'Protegen del sol y del polvo.' },
                        { e: '🥾', t: 'Botas y espuelas', d: 'Calzado de cuero para el trabajo a caballo.' },
                        { e: '🪢', t: 'Faja y cuchillo', d: 'La faja sostiene la bombacha y el cuchillo es herramienta de trabajo.' }
                    ]
                },
                {
                    id: 'poncho-norte', titulo: 'Poncho salteño y trajes del norte', icono: '🧶', wiki: ['Poncho', 'Salta'],
                    dato: 'Los Gauchos de Güemes de Salta usan un poncho rojo y negro en homenaje a su héroe, Martín Miguel de Güemes.',
                    lugares: 'Salta, Cachi, Jujuy, Tilcara',
                    ideas: [
                        { e: '🧥', t: 'Poncho', d: 'Prenda de lana para el frío de la montaña.' },
                        { e: '🔴', t: 'Poncho rojo', d: 'Símbolo de las milicias gauchas de Güemes.' },
                        { e: '🧶', t: 'Tejidos de lana', d: 'Ovejas y llamas dan lana para ponchos, mantas y ruanas.' },
                        { e: '👒', t: 'Sombrero de ala', d: 'Se usa en las fiestas folklóricas.' }
                    ]
                }
            ]
        },
        {
            id: 'monumentos', nombre: 'Monumentos', icono: '🏰', temas: [
                {
                    id: 'buenos-aires-monumentos', titulo: 'Obelisco y Casa Rosada', icono: '🗼', wiki: ['Obelisco de Buenos Aires', 'Casa Rosada'],
                    dato: 'El Obelisco mide 67,5 metros y se levantó en 1936 por los 400 años de la primera fundación de Buenos Aires.',
                    lugares: 'Obelisco, Casa Rosada, Catedral Metropolitana, Plaza de Mayo, Cementerio de la Recoleta',
                    ideas: [
                        { e: '🗼', t: 'Obelisco', d: 'Ícono de la ciudad en la Avenida 9 de Julio.' },
                        { e: '🏛️', t: 'Casa Rosada', d: 'Sede del poder ejecutivo, de color rosa, frente a la Plaza de Mayo.' },
                        { e: '⛪', t: 'Catedral', d: 'Allí se encuentra el mausoleo del General San Martín.' },
                        { e: '🪦', t: 'La Recoleta', d: 'Cementerio famoso por sus panteones, donde está Eva Perón.' }
                    ]
                },
                {
                    id: 'iguazu-glaciares', titulo: 'Iguazú y los glaciares', icono: '💦', wiki: ['Iguazu Falls', 'Perito Moreno Glacier'],
                    dato: 'El glaciar Perito Moreno tiene frentes de hasta 60 metros de altura y es famoso porque se ha mantenido bastante estable mientras muchos glaciares retroceden.',
                    lugares: 'Garganta del Diablo (Iguazú), Glaciar Perito Moreno (El Calafate), Fitz Roy (El Chaltén), Península Valdés',
                    ideas: [
                        { e: '💦', t: 'Cataratas del Iguazú', d: 'Casi 275 saltos de agua rodeados de selva.' },
                        { e: '🧊', t: 'Perito Moreno', d: 'Glaciar del Parque Nacional Los Glaciares, Patrimonio Mundial desde 1981.' },
                        { e: '🐋', t: 'Península Valdés', d: 'Lugar donde llegan ballenas francas australes a reproducirse.' },
                        { e: '⛰️', t: 'Fitz Roy', d: 'Montaña de granito, símbolo de la Patagonia.' }
                    ]
                }
            ]
        }
    ]
};
