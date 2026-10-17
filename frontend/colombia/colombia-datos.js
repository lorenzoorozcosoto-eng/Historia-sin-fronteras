// Colombia: categorías y temas (ideas clave, dato curioso y lugares). La teoría ampliada está en colombia-extra-1..4.js
window.PAIS = {
    iso: 'CO',
    nombre: 'Colombia',
    bandera: '🇨🇴',
    banderaImg: 'https://flagcdn.com/w160/co.png',
    categorias: [
        {
            id: 'historia', nombre: 'Historia', icono: '🏛️', temas: [
                {
                    id: 'precolombinas', titulo: 'Culturas prehispánicas', icono: '🗿', wiki: ['Muisca', 'Lost City (Colombia)'],
                    dato: 'La Balsa Muisca, una pequeña barca de oro hallada en 1969, es una de las piezas que inspiraron la leyenda de El Dorado.',
                    lugares: 'Parque Arqueológico de San Agustín, Tierradentro, Ciudad Perdida (Teyuna), Laguna de Guatavita',
                    ideas: [
                        { e: '🗿', t: 'San Agustín', d: 'Centro de grandes esculturas de piedra y tumbas del sur de Colombia.' },
                        { e: '🌄', t: 'Tayrona', d: 'Pueblo de la Sierra Nevada de Santa Marta que construyó Ciudad Perdida.' },
                        { e: '👑', t: 'Muiscas', d: 'Confederación del altiplano cundiboyacense, expertos en agricultura, sal y oro.' },
                        { e: '🏆', t: 'El Dorado', d: 'Leyenda del cacique cubierto de oro en la Laguna de Guatavita.' }
                    ]
                },
                {
                    id: 'conquista-colonia', titulo: 'Conquista y Nueva Granada', icono: '⚔️', wiki: ['New Kingdom of Granada', 'Cartagena, Colombia'],
                    dato: 'Santa Marta, fundada en 1525, es la ciudad más antigua de Colombia que aún sigue habitada.',
                    lugares: 'Santa Marta, Cartagena de Indias, Bogotá (La Candelaria), Villa de Leyva',
                    ideas: [
                        { e: '⛵', t: '1525', d: 'Rodrigo de Bastidas funda Santa Marta, la primera ciudad española duradera.' },
                        { e: '🏙️', t: '1538', d: 'Gonzalo Jiménez de Quesada funda Santafé de Bogotá.' },
                        { e: '👑', t: 'Virreinato', d: 'Se crea el Virreinato de la Nueva Granada en 1717 (restablecido en 1739).' },
                        { e: '🌿', t: 'Expedición Botánica', d: 'José Celestino Mutis dirige desde 1783 el gran estudio de las plantas del reino.' }
                    ]
                },
                {
                    id: 'independencia', titulo: 'Independencia de Colombia', icono: '🔔', wiki: ['Battle of Boyacá', 'Simón Bolívar'],
                    dato: 'El 20 de julio de 1810, el pleito por un florero prestado desató el primer grito de independencia en Bogotá.',
                    lugares: 'Casa del Florero (Bogotá), Puente de Boyacá, Pantano de Vargas, Plaza de Bolívar',
                    ideas: [
                        { e: '🏺', t: '20 de julio de 1810', d: 'El incidente del florero de Llorente da inicio a la independencia en Santafé.' },
                        { e: '⛰️', t: 'Paso del páramo de Pisba', d: 'Bolívar cruza los Andes en 1819 con su ejército para sorprender a los realistas.' },
                        { e: '⚔️', t: 'Batalla de Boyacá', d: 'El 7 de agosto de 1819 se asegura la independencia de la Nueva Granada.' },
                        { e: '🌎', t: 'Gran Colombia', d: 'Nace en 1819 la república que unía Colombia, Venezuela y, luego, Ecuador.' }
                    ]
                },
                {
                    id: 'republica', titulo: 'La República y la Colombia moderna', icono: '📜', wiki: ['Bogotazo', 'Colombian peace process'],
                    dato: 'La Constitución de 1991 reconoció por primera vez que Colombia es un país multicultural y de muchas etnias.',
                    lugares: 'Capitolio Nacional y Plaza de Bolívar (Bogotá), Teatro Colón, Museo Nacional de Colombia',
                    ideas: [
                        { e: '🌋', t: 'Siglo XIX', d: 'De la Gran Colombia a la República de Colombia (1886) tras guerras civiles.' },
                        { e: '🕯️', t: '9 de abril de 1948', d: 'El asesinato de Jorge Eliécer Gaitán provoca el Bogotazo.' },
                        { e: '📖', t: 'Constitución de 1991', d: 'Reconoce la diversidad étnica y cultural y los derechos fundamentales.' },
                        { e: '🕊️', t: 'Acuerdo de paz', d: 'En 2016 se firma el acuerdo con las FARC para terminar décadas de conflicto.' }
                    ]
                }
            ]
        },
        {
            id: 'cultura', nombre: 'Cultura', icono: '🎎', temas: [
                {
                    id: 'diversidad', titulo: 'Un país de muchos pueblos', icono: '🤝', wiki: ['San Basilio de Palenque', 'Indigenous peoples in Colombia'],
                    dato: 'San Basilio de Palenque habla el palenquero, el único idioma criollo de base española que aún se conserva en América.',
                    lugares: 'San Basilio de Palenque (Bolívar), Sierra Nevada de Santa Marta, La Guajira, Chocó',
                    ideas: [
                        { e: '🪶', t: 'Pueblos indígenas', d: 'El censo de 2018 contó 115 pueblos indígenas en el país.' },
                        { e: '🥁', t: 'Afrocolombianos', d: 'Palenqueros, raizales y comunidades del Pacífico aportan música, lengua y tradiciones.' },
                        { e: '🗣️', t: 'Muchas lenguas', d: 'Además del español, se hablan decenas de lenguas indígenas, el palenquero y el criollo de San Andrés.' },
                        { e: '🏛️', t: 'Palenque', d: 'La UNESCO protege su espacio cultural como patrimonio de la humanidad.' }
                    ]
                },
                {
                    id: 'regiones', titulo: 'Regiones y biodiversidad', icono: '🦜', wiki: ['Caño Cristales', 'Geography of Colombia'],
                    dato: 'Caño Cristales, el "río de los cinco colores", se tiñe de rojo, amarillo, verde, azul y negro por una planta acuática.',
                    lugares: 'Caño Cristales (Meta), Parque Tayrona, Valle de Cocora (Quindío), Leticia (Amazonas), San Andrés',
                    ideas: [
                        { e: '⛰️', t: 'Tres cordilleras', d: 'Los Andes se dividen en Occidental, Central y Oriental al entrar a Colombia.' },
                        { e: '🗺️', t: 'Seis regiones', d: 'Caribe, Andina, Pacífica, Orinoquía, Amazonía e Insular.' },
                        { e: '🦜', t: 'Megadiverso', d: 'Es de los países con más especies de aves y orquídeas del mundo.' },
                        { e: '🌈', t: 'Caño Cristales', d: 'Río colorido de la Serranía de la Macarena.' }
                    ]
                }
            ]
        },
        {
            id: 'gastronomia', nombre: 'Gastronomía', icono: '🍲', temas: [
                {
                    id: 'bandeja-ajiaco', titulo: 'Bandeja paisa y ajiaco santafereño', icono: '🍲', wiki: ['Bandeja paisa', 'Ajiaco'],
                    dato: 'El ajiaco bogotano se perfuma con las guascas, una hierba que no se come en casi ningún otro lugar del mundo.',
                    lugares: 'Medellín y Antioquia (bandeja paisa), Bogotá y Boyacá (ajiaco), Plaza de Mercado de Paloquemao',
                    ideas: [
                        { e: '🍽️', t: 'Bandeja paisa', d: 'Plato abundante de Antioquia: fríjoles, arroz, carne, chicharrón, huevo y arepa.' },
                        { e: '🥔', t: 'Ajiaco', d: 'Sopa bogotana con tres clases de papa, pollo y mazorca.' },
                        { e: '🌿', t: 'Guascas', d: 'La hierba que da su sabor único al ajiaco.' },
                        { e: '🌽', t: 'Maíz y papa', d: 'Ingredientes de origen indígena de la cocina andina.' }
                    ]
                },
                {
                    id: 'arepas-costa', titulo: 'Arepas, sancocho y sabores de la costa', icono: '🫓', wiki: ['Arepa', 'Sancocho'],
                    dato: 'La arepa, hecha de maíz, se come desde hace siglos y cada región tiene su versión: de huevo, de choclo, rellena…',
                    lugares: 'Cartagena (cocina caribeña), Cali (sancocho), Valle del Cauca, Tolima (lechona y tamales)',
                    ideas: [
                        { e: '🫓', t: 'Arepa', d: 'Tortilla de maíz que acompaña casi todas las comidas.' },
                        { e: '🍲', t: 'Sancocho', d: 'Caldo espeso con carne o pescado, plátano, yuca y papa.' },
                        { e: '🥥', t: 'Arroz con coco', d: 'Plato típico del Caribe, acompañado de pescado frito.' },
                        { e: '🍹', t: 'Frutas exóticas', d: 'Lulo, maracuyá, guanábana y borojó se toman en jugos.' }
                    ]
                }
            ]
        },
        {
            id: 'musica', nombre: 'Música', icono: '🎶', temas: [
                {
                    id: 'cumbia', titulo: 'La cumbia, ritmo del Caribe', icono: '🥁', wiki: ['Cumbia', 'Totó la Momposina'],
                    dato: 'La cumbia nació en la costa Caribe colombiana y de allí se extendió a casi toda América Latina.',
                    lugares: 'Barranquilla, Cartagena, Mompox, Plaza de la Paz (Cartagena), San Jacinto',
                    ideas: [
                        { e: '🥁', t: 'Tambores', d: 'Tambor alegre, llamador y tambora llevan el ritmo, herencia africana.' },
                        { e: '🎶', t: 'Gaitas', d: 'Flautas indígenas que tocan la melodía.' },
                        { e: '💃', t: 'Baile', d: 'La pareja gira con velas y pañuelos, mezcla de las tres culturas.' },
                        { e: '🌎', t: 'Conquista el mundo', d: 'Se extiende por América Latina desde mediados del siglo XX.' }
                    ]
                },
                {
                    id: 'vallenato', titulo: 'El vallenato', icono: '🪗', wiki: ['Vallenato', 'Francisco el Hombre'],
                    dato: 'En 2015 la UNESCO declaró las músicas vallenatas tradicionales Patrimonio Cultural Inmaterial de la Humanidad.',
                    lugares: 'Valledupar (Cesar), La Guajira, Magdalena, Aracataca',
                    ideas: [
                        { e: '🪗', t: 'Acordeón', d: 'Instrumento de la melodía, llegado de Europa.' },
                        { e: '🥁', t: 'Caja y guacharaca', d: 'La caja (de origen africano) y la guacharaca (indígena) marcan el ritmo.' },
                        { e: '🎼', t: 'Cuatro aires', d: 'Son, paseo, merengue y puya.' },
                        { e: '🏆', t: 'Festival de la Leyenda Vallenata', d: 'Se celebra en Valledupar desde 1968 con un concurso de acordeoneros.' }
                    ]
                }
            ]
        },
        {
            id: 'bailes', nombre: 'Bailes', icono: '💃', temas: [
                {
                    id: 'bambuco', titulo: 'El bambuco y las danzas andinas', icono: '💃', wiki: ['Bambuco', 'Tiple'],
                    dato: 'Cada año, en las fiestas de San Pedro en Neiva, se elige a la Reina Nacional del Bambuco.',
                    lugares: 'Neiva (Huila), Ibagué (Tolima), Pasto, Popayán',
                    ideas: [
                        { e: '🎻', t: 'Música andina', d: 'Se toca con tiple, bandola y guitarra.' },
                        { e: '💃', t: 'Pareja enamorada', d: 'El baile cuenta un cortejo con pasos y giros elegantes.' },
                        { e: '🏔️', t: 'Región andina', d: 'Nació en las montañas del centro y sur del país.' },
                        { e: '👑', t: 'Reinado Nacional del Bambuco', d: 'Se celebra en Neiva durante el Festival de San Pedro.' }
                    ]
                },
                {
                    id: 'joropo', titulo: 'El joropo llanero', icono: '🤠', wiki: ['Joropo', 'Llanos'],
                    dato: 'El joropo se baila con zapateo vigoroso, y el arpa llanera lleva la melodía y el bajo a la vez.',
                    lugares: 'Villavicencio (Meta), Yopal (Casanare), Arauca, Parque Los Ocarros',
                    ideas: [
                        { e: '🎼', t: 'Arpa, cuatro y maracas', d: 'Los tres instrumentos clásicos del joropo.' },
                        { e: '👞', t: 'Zapateo', d: 'Golpes rápidos de los pies que marcan el ritmo.' },
                        { e: '🐎', t: 'Vida llanera', d: 'Habla del trabajo con el ganado y la sabana.' },
                        { e: '🌾', t: 'Orinoquía', d: 'Se baila en los Llanos de Colombia y Venezuela.' }
                    ]
                }
            ]
        },
        {
            id: 'arte', nombre: 'Arte', icono: '🎨', temas: [
                {
                    id: 'botero', titulo: 'Fernando Botero', icono: '🎨', wiki: ['Fernando Botero'],
                    dato: 'En la Plaza Botero de Medellín hay 23 esculturas de bronce al aire libre que cualquiera puede tocar.',
                    lugares: 'Plaza Botero y Museo de Antioquia (Medellín), Museo Botero (Bogotá)',
                    ideas: [
                        { e: '🧑‍🎨', t: 'Estilo propio', d: 'Sus figuras de formas voluminosas se llaman "boterismo".' },
                        { e: '🗿', t: 'Esculturas', d: 'Gatos, caballos y mujeres de bronce que adornan plazas del mundo.' },
                        { e: '🏛️', t: 'Museo Botero', d: 'En Bogotá, con obras donadas por el propio artista en el año 2000.' },
                        { e: '🌐', t: 'Fama mundial', d: 'Expuso en Europa, América y Asia.' }
                    ]
                },
                {
                    id: 'museo-oro', titulo: 'Museo del Oro y la orfebrería', icono: '🥇', wiki: ['Gold Museum, Bogotá', 'Muisca raft'],
                    dato: 'Muchos objetos de oro se hacían con la técnica de la cera perdida y con una aleación de oro y cobre llamada tumbaga.',
                    lugares: 'Museo del Oro (Bogotá), Museo del Oro Quimbaya (Armenia), Museo del Oro Zenú (Cartagena)',
                    ideas: [
                        { e: '🥇', t: 'Orfebrería', d: 'Los pueblos prehispánicos hicieron figuras de oro de gran detalle.' },
                        { e: '🏺', t: 'Cera perdida', d: 'Técnica para fundir el metal en moldes de cera.' },
                        { e: '🛶', t: 'Balsa Muisca', d: 'Pieza símbolo del museo y de la leyenda de El Dorado.' },
                        { e: '🏛️', t: 'Museo del Oro', d: 'En Bogotá, guarda decenas de miles de piezas de oro.' }
                    ]
                }
            ]
        },
        {
            id: 'literatura', nombre: 'Literatura', icono: '📚', temas: [
                {
                    id: 'garcia-marquez', titulo: 'Gabriel García Márquez', icono: '🏆', wiki: ['Gabriel García Márquez', 'One Hundred Years of Solitude'],
                    dato: 'En "Cien años de soledad" la gente vive hechos mágicos como algo normal: esa mezcla se llama realismo mágico.',
                    lugares: 'Casa Museo Gabriel García Márquez (Aracataca), Cartagena, Mompox, Zipaquirá',
                    ideas: [
                        { e: '🏆', t: 'Nobel de Literatura 1982', d: 'Es el único colombiano con el Nobel de Literatura.' },
                        { e: '📖', t: 'Cien años de soledad', d: 'Novela de 1967 sobre la familia Buendía y el pueblo de Macondo.' },
                        { e: '✨', t: 'Realismo mágico', d: 'Estilo donde lo extraordinario aparece en la vida cotidiana.' },
                        { e: '🏘️', t: 'Aracataca', d: 'Pueblo del Magdalena donde nació en 1927 e inspiró a Macondo.' }
                    ]
                },
                {
                    id: 'clasicos', titulo: 'Pombo, Isaacs, Silva y Rivera', icono: '✒️', wiki: ['Rafael Pombo', 'José Asunción Silva'],
                    dato: 'Rafael Pombo escribió cuentos en verso como "Rin Rin Renacuajo", que muchos niños colombianos aprenden de memoria.',
                    lugares: 'Casa de Poesía Silva (Bogotá), Biblioteca Luis Ángel Arango, Hacienda El Paraíso (Valle del Cauca)',
                    ideas: [
                        { e: '🐸', t: 'Rafael Pombo', d: 'Poeta de fábulas infantiles como "Rin Rin Renacuajo".' },
                        { e: '💞', t: 'María', d: 'Novela romántica de Jorge Isaacs publicada en 1867.' },
                        { e: '🌌', t: 'José Asunción Silva', d: 'Poeta del modernismo, autor del "Nocturno".' },
                        { e: '🌳', t: 'La vorágine', d: 'Novela de José Eustasio Rivera (1924) sobre la selva y el caucho.' }
                    ]
                }
            ]
        },
        {
            id: 'tradiciones', nombre: 'Tradiciones', icono: '🪅', temas: [
                {
                    id: 'cafe', titulo: 'La cultura cafetera', icono: '☕', wiki: ['Coffee Cultural Landscape of Colombia', 'Colombian coffee'],
                    dato: 'Para tomar una taza de café de Colombia, los granos se recogen uno por uno, a mano, cuando están maduros.',
                    lugares: 'Salento y Valle de Cocora (Quindío), Manizales, Parque Nacional del Café (Montenegro), Santa Rosa de Cabal',
                    ideas: [
                        { e: '☕', t: 'Café arábico', d: 'Colombia produce café suave de alta calidad.' },
                        { e: '🏞️', t: 'Paisaje Cultural Cafetero', d: 'La UNESCO lo declaró Patrimonio Mundial en 2011.' },
                        { e: '🧑‍🌾', t: 'Recolección a mano', d: 'Se cosechan solo los granos rojos maduros.' },
                        { e: '🏛️', t: 'Federación de Cafeteros', d: 'Creada en 1927 para apoyar a las familias productoras.' }
                    ]
                },
                {
                    id: 'artesanias', titulo: 'Artesanías: sombrero vueltiao y mochilas', icono: '👒', wiki: ['Sombrero vueltiao', 'Mochila (bag)'],
                    dato: 'El sombrero vueltiao se teje con caña flecha y se reconoce por sus dibujos blancos y negros en espiral.',
                    lugares: 'San Andrés de Sotavento y Tuchín (Córdoba), Sierra Nevada de Santa Marta, Uribia (La Guajira), La Chamba (Tolima)',
                    ideas: [
                        { e: '👒', t: 'Sombrero vueltiao', d: 'Tejido por el pueblo zenú y símbolo cultural de Colombia.' },
                        { e: '🎒', t: 'Mochila arhuaca', d: 'Tejida con lana o algodón con diseños que representan su cosmovisión.' },
                        { e: '🌾', t: 'Caña flecha', d: 'Planta con la que se tejen los sombreros.' },
                        { e: '🏺', t: 'Cerámica', d: 'Barro negro de La Chamba, en el Tolima.' }
                    ]
                }
            ]
        },
        {
            id: 'fiestas', nombre: 'Fiestas', icono: '🎉', temas: [
                {
                    id: 'carnaval', titulo: 'Carnaval de Barranquilla', icono: '🎭', wiki: ['Barranquilla Carnival', 'Marimonda'],
                    dato: 'El carnaval termina con el "entierro de Joselito", donde se llora de broma por el fin de la fiesta.',
                    lugares: 'Vía 40 (Barranquilla), Casa del Carnaval, Museo del Caribe',
                    ideas: [
                        { e: '🌸', t: 'Batalla de Flores', d: 'Desfile inaugural, nacido en 1903 para celebrar la paz.' },
                        { e: '🎭', t: 'Marimonda y congo', d: 'Disfraces tradicionales de la fiesta.' },
                        { e: '💃', t: 'Danzas', d: 'Cumbia, garabato y otras danzas llenan las calles.' },
                        { e: '🏆', t: 'Patrimonio UNESCO', d: 'Fue proclamado Obra Maestra del Patrimonio Oral e Inmaterial en 2003.' }
                    ]
                },
                {
                    id: 'feria-flores', titulo: 'Feria de las Flores y los silleteros', icono: '🌸', wiki: ['Feria de las Flores', 'Silletero'],
                    dato: 'Los silleteros desfilan con silletas de flores que pueden pesar decenas de kilos cargadas en la espalda.',
                    lugares: 'Medellín, corregimiento de Santa Elena, Parque Arví, Jardín Botánico de Medellín',
                    ideas: [
                        { e: '🌸', t: 'Fiesta de agosto', d: 'Se celebra en Medellín cada año con exposiciones y desfiles.' },
                        { e: '🧑‍🌾', t: 'Silleteros', d: 'Campesinos de Santa Elena que cultivan y cargan las flores.' },
                        { e: '🪑', t: 'Silleta', d: 'Armazón de madera adornado de flores que se lleva a la espalda.' },
                        { e: '🏔️', t: 'Raíces antiguas', d: 'Antes cargaban personas en silletas por los caminos de montaña.' }
                    ]
                }
            ]
        },
        {
            id: 'vestimenta', nombre: 'Vestimenta típica', icono: '👗', temas: [
                {
                    id: 'ruana-carriel', titulo: 'Ruana, sombrero aguadeño y carriel', icono: '🧥', wiki: ['Ruana', 'Carriel'],
                    dato: 'El carriel es un bolso de cuero donde los arrieros antioqueños guardaban de todo, desde un cuchillo hasta un cuaderno.',
                    lugares: 'Boyacá y Cundinamarca (ruana), Aguadas (Caldas), Medellín y Antioquia (carriel)',
                    ideas: [
                        { e: '🧥', t: 'Ruana', d: 'Manta de lana que abriga del frío de las montañas.' },
                        { e: '👒', t: 'Sombrero aguadeño', d: 'Sombrero de palma de iraca tejido a mano en Aguadas, Caldas.' },
                        { e: '👜', t: 'Carriel', d: 'Bolso de cuero típico de Antioquia.' },
                        { e: '🧑‍🌾', t: 'Vestimenta andina', d: 'Se asocia al campesino de la zona cafetera y de las montañas.' }
                    ]
                },
                {
                    id: 'pollera-wayuu', titulo: 'Pollera colorá y manta wayuu', icono: '👗', wiki: ['Wayuu people', 'Pollera colorada'],
                    dato: 'Las mujeres wayuu se pintan el rostro con una mezcla de arcilla para protegerse del sol del desierto.',
                    lugares: 'Barranquilla y Cartagena (cumbia), Uribia y Riohacha (La Guajira), Cabo de la Vela',
                    ideas: [
                        { e: '👗', t: 'Pollera colorá', d: 'Falda ancha y colorida de las bailarinas de cumbia.' },
                        { e: '🕯️', t: 'Velas y pañuelos', d: 'Accesorios del baile tradicional de la cumbia.' },
                        { e: '🌵', t: 'Manta guajira', d: 'Vestido largo y colorido de las mujeres wayuu.' },
                        { e: '🎨', t: 'Pintura facial', d: 'Protege la piel y es parte de su identidad.' }
                    ]
                }
            ]
        },
        {
            id: 'monumentos', nombre: 'Monumentos', icono: '🗼', temas: [
                {
                    id: 'cartagena', titulo: 'Cartagena de Indias', icono: '🏰', wiki: ['Cartagena, Colombia', 'Castillo San Felipe de Barajas'],
                    dato: 'Las murallas de Cartagena miden unos 11 kilómetros y se construyeron para defender la ciudad de los piratas.',
                    lugares: 'Ciudad Amurallada, Castillo de San Felipe de Barajas, Torre del Reloj, Getsemaní, Islas del Rosario',
                    ideas: [
                        { e: '🏰', t: 'Murallas', d: 'Rodean el centro histórico para protegerlo de los ataques.' },
                        { e: '🏴‍☠️', t: 'Piratas', d: 'Ataques como el de Francis Drake en 1586 llevaron a fortificarla.' },
                        { e: '⛲', t: 'Castillo de San Felipe', d: 'La mayor fortaleza española construida en América.' },
                        { e: '🏆', t: 'UNESCO 1984', d: 'Su puerto, fortificaciones y monumentos son Patrimonio de la Humanidad.' }
                    ]
                },
                {
                    id: 'zipaquira', titulo: 'Catedral de Sal de Zipaquirá', icono: '⛪', wiki: ['Salt Cathedral of Zipaquirá'],
                    dato: 'La catedral está dentro de una mina de sal, a unos 200 metros bajo tierra, y sus muros son de sal.',
                    lugares: 'Zipaquirá (Cundinamarca), Parque de la Sal, Museo de la Sal',
                    ideas: [
                        { e: '⛪', t: 'Bajo tierra', d: 'Está construida en el interior de una mina de sal.' },
                        { e: '✝️', t: 'Las tres naves', d: 'Representan el nacimiento, la vida y la muerte de Jesús.' },
                        { e: '🧂', t: 'La sal muisca', d: 'Los muiscas ya extraían sal de esta región.' },
                        { e: '🏅', t: 'Maravilla de Colombia', d: 'En 2007 fue elegida "primera maravilla de Colombia".' }
                    ]
                }
            ]
        }
    ]
};
