// Canadá: categorías y temas (ideas clave, dato curioso y lugares). La teoría ampliada está en canada-extra-1..4.js
window.PAIS = {
    iso: 'CA',
    nombre: 'Canadá',
    bandera: '🇨🇦',
    banderaImg: 'https://flagcdn.com/w160/ca.png',
    categorias: [
        {
            id: 'historia', nombre: 'Historia', icono: '🏛️', temas: [
                {
                    id: 'pueblos-originarios', titulo: 'Primeras Naciones, inuit y métis', icono: '🪶', wiki: ['Indigenous peoples in Canada', 'L\'Anse aux Meadows'],
                    dato: 'Los vikingos llegaron a Terranova hacia el año 1000, y en L\'Anse aux Meadows se conservan los restos de su poblado.',
                    lugares: 'L\'Anse aux Meadows (Terranova), SGang Gwaay (Haida Gwaii), Museo Canadiense de la Historia (Gatineau), Head-Smashed-In Buffalo Jump (Alberta)',
                    ideas: [
                        { e: '🪶', t: 'Tres grupos', d: 'Primeras Naciones, inuit y métis son los pueblos indígenas reconocidos por la Constitución.' },
                        { e: '🌲', t: 'Costa del Pacífico', d: 'Pueblos como los haida tallaron mástiles totémicos y grandes canoas.' },
                        { e: '🐃', t: 'Pueblos de las praderas', d: 'Cazaban bisontes y usaban tipis.' },
                        { e: '⛵', t: 'Vikingos', d: 'Fundaron un campamento en Terranova hace unos mil años.' }
                    ]
                },
                {
                    id: 'nueva-francia-colonia', titulo: 'Nueva Francia y la colonia británica', icono: '⚜️', wiki: ['New France', 'Battle of the Plains of Abraham'],
                    dato: 'Québec fue fundada en 1608 por Samuel de Champlain y su casco antiguo es hoy Patrimonio Mundial.',
                    lugares: 'Ciudad de Québec (Plaza Real), Llanuras de Abraham, Fortaleza de Louisbourg, Montreal (Vieux-Montréal)',
                    ideas: [
                        { e: '⛵', t: 'Jacques Cartier', d: 'En 1534 reclama tierras en nombre de Francia y explora el río San Lorenzo.' },
                        { e: '🦫', t: 'Comercio de pieles', d: 'Franceses y pueblos indígenas intercambiaban pieles de castor.' },
                        { e: '⚔️', t: '1759', d: 'Los británicos vencen a los franceses en las Llanuras de Abraham.' },
                        { e: '🍁', t: 'Lealistas', d: 'Miles de colonos fieles a Gran Bretaña llegaron desde Estados Unidos tras 1776.' }
                    ]
                },
                {
                    id: 'confederacion', titulo: 'La Confederación de 1867', icono: '🍁', wiki: ['Canadian Confederation', 'John A. Macdonald'],
                    dato: 'Canadá nació el 1 de julio de 1867 con cuatro provincias: Ontario, Québec, Nueva Escocia y Nuevo Brunswick.',
                    lugares: 'Colinas del Parlamento (Ottawa), Charlottetown (Casa de la Confederación), Monumento de Vimy (Francia), Muelle 21 (Halifax)',
                    ideas: [
                        { e: '🍁', t: '1 de julio de 1867', d: 'Nace el Dominio de Canadá, hoy celebrado como el Día de Canadá.' },
                        { e: '🚂', t: 'Ferrocarril del Pacífico', d: 'Se completó en 1885 y unió el país de costa a costa.' },
                        { e: '🗺️', t: 'Más provincias', d: 'Se fueron sumando hasta llegar a diez provincias y tres territorios.' },
                        { e: '🎖️', t: 'Vimy, 1917', d: 'Batalla de la Primera Guerra Mundial que reforzó la identidad nacional.' }
                    ]
                },
                {
                    id: 'canada-moderno', titulo: 'Canadá moderno y reconciliación', icono: '📜', wiki: ['Canadian Charter of Rights and Freedoms', 'Truth and Reconciliation Commission of Canada'],
                    dato: 'La bandera con la hoja de arce se izó por primera vez el 15 de febrero de 1965.',
                    lugares: 'Museo Canadiense de los Derechos Humanos (Winnipeg), Parlamento, Centro Nacional para la Verdad y la Reconciliación (Winnipeg)',
                    ideas: [
                        { e: '🍁', t: 'Bandera de 1965', d: 'La hoja de arce reemplazó a la antigua bandera con la Union Jack.' },
                        { e: '📖', t: 'Carta de Derechos, 1982', d: 'La Constitución se "repatría" y se aprueba la Carta de Derechos y Libertades.' },
                        { e: '🏥', t: 'Salud pública', d: 'El sistema de salud universal nació en Saskatchewan y se extendió a todo el país.' },
                        { e: '🤝', t: 'Reconciliación', d: 'Desde 2015 se trabaja para reparar el daño de las escuelas residenciales indígenas.' }
                    ]
                }
            ]
        },
        {
            id: 'cultura', nombre: 'Cultura', icono: '🌍', temas: [
                {
                    id: 'diversidad', titulo: 'Bilingüe y multicultural', icono: '🤝', wiki: ['Multiculturalism in Canada', 'Official bilingualism in Canada'],
                    dato: 'Alrededor de una de cada cuatro personas que viven en Canadá nació en otro país.',
                    lugares: 'Montreal, Toronto (Kensington Market), Vancouver (Chinatown), Winnipeg, Muelle 21 (Halifax)',
                    ideas: [
                        { e: '🗣️', t: 'Dos lenguas oficiales', d: 'Inglés y francés son oficiales a nivel federal desde 1969.' },
                        { e: '⚜️', t: 'Québec', d: 'La única provincia de mayoría francófona, con una cultura propia muy viva.' },
                        { e: '🌎', t: 'Multiculturalismo', d: 'Política oficial desde 1971 que reconoce el aporte de todas las culturas.' },
                        { e: '🪶', t: 'Lenguas indígenas', d: 'Se hablan más de 70 lenguas indígenas, como cree, inuktitut y ojibwa.' }
                    ]
                },
                {
                    id: 'regiones', titulo: 'Regiones y paisajes', icono: '🏔️', wiki: ['Geography of Canada', 'Canadian Rockies'],
                    dato: 'Canadá es el segundo país más grande del mundo y tiene más lagos que cualquier otro.',
                    lugares: 'Montañas Rocosas (Banff, Jasper), Grandes Lagos, Bahía de Fundy, Ártico canadiense, Praderas',
                    ideas: [
                        { e: '🗺️', t: '10 provincias y 3 territorios', d: 'Nunavut, el más nuevo, se creó en 1999.' },
                        { e: '🏔️', t: 'Rocosas', d: 'Cordillera del oeste con lagos color turquesa.' },
                        { e: '🌾', t: 'Praderas', d: 'Grandes llanuras de trigo en Alberta, Saskatchewan y Manitoba.' },
                        { e: '🧊', t: 'Ártico', d: 'Tierra de tundra, hielo y noches polares.' }
                    ]
                }
            ]
        },
        {
            id: 'gastronomia', nombre: 'Gastronomía', icono: '🍽️', temas: [
                {
                    id: 'poutine-tourtiere', titulo: 'Poutine, tourtière y dulces canadienses', icono: '🍟', wiki: ['Poutine', 'Tourtière'],
                    dato: 'La poutine, papas fritas con cuajada de queso y salsa gravy, nació en zonas rurales de Québec en los años 50.',
                    lugares: 'Montreal, Québec, Warwick (Quebec), Nanaimo (Columbia Británica), Mercado Jean-Talon',
                    ideas: [
                        { e: '🍟', t: 'Poutine', d: 'Papas fritas con cuajada de queso y salsa gravy caliente.' },
                        { e: '🥧', t: 'Tourtière', d: 'Pastel de carne típico de Navidad en Québec.' },
                        { e: '🍫', t: 'Nanaimo bar', d: 'Barra de tres capas con chocolate, crema y coco, nacida en Nanaimo.' },
                        { e: '🍩', t: 'Tim Hortons', d: 'Cadena de cafés y donas creada en 1964 en Ontario.' }
                    ]
                },
                {
                    id: 'jarabe-arce-salmon', titulo: 'Jarabe de arce, salmón y bagels', icono: '🍁', wiki: ['Maple syrup', 'Montreal-style bagel'],
                    dato: 'Canadá produce cerca de tres cuartas partes del jarabe de arce del mundo, casi todo en Québec.',
                    lugares: 'Cabañas de azúcar (Québec), Costa del Pacífico (salmón), Montreal (bagels), Provincias Atlánticas (langosta)',
                    ideas: [
                        { e: '🍁', t: 'Jarabe de arce', d: 'Se hierve la savia de arce en primavera hasta que se vuelve dulce.' },
                        { e: '🐟', t: 'Salmón del Pacífico', d: 'Plato típico de la costa oeste, ahumado o a la parrilla.' },
                        { e: '🥯', t: 'Bagels de Montreal', d: 'Más pequeños y dulces que los de Nueva York, cocidos en horno de leña.' },
                        { e: '🦞', t: 'Langosta del Atlántico', d: 'Especialidad de Nueva Escocia y la Isla del Príncipe Eduardo.' }
                    ]
                }
            ]
        },
        {
            id: 'musica', nombre: 'Música', icono: '🎶', temas: [
                {
                    id: 'musica-canadiense', titulo: 'Voces canadienses', icono: '🎤', wiki: ['Music of Canada', 'Leonard Cohen'],
                    dato: '"Hallelujah", de Leonard Cohen, es una de las canciones canadienses más versionadas del mundo.',
                    lugares: 'Montreal, Toronto (Massey Hall), Vancouver, Festival de Jazz de Montreal, Ottawa',
                    ideas: [
                        { e: '🎤', t: 'Céline Dion', d: 'Cantante de Québec, ganó Eurovisión en 1988 y es una de las voces más vendidas.' },
                        { e: '🎸', t: 'Neil Young y Joni Mitchell', d: 'Grandes cantautores del folk-rock.' },
                        { e: '🎹', t: 'Oscar Peterson y Glenn Gould', d: 'Pianistas de jazz y de música clásica de fama mundial.' },
                        { e: '🏆', t: 'Premios Juno', d: 'Se entregan desde 1970 a los mejores músicos del país.' }
                    ]
                },
                {
                    id: 'folk-celta-inuit', titulo: 'Violín celta, cantos inuit y folk', icono: '🎻', wiki: ['Cape Breton fiddling', 'Inuit throat singing'],
                    dato: 'En el canto de garganta inuit (katajjaq), dos mujeres se enfrentan cara a cara en un juego de sonidos y ritmo.',
                    lugares: 'Cabo Bretón (Nueva Escocia), Nunavut, Festival de Folk de Winnipeg, Québec',
                    ideas: [
                        { e: '🎻', t: 'Violín de Cabo Bretón', d: 'Música celta llevada por inmigrantes escoceses.' },
                        { e: '🗣️', t: 'Katajjaq', d: 'Canto de garganta de las mujeres inuit, a modo de juego.' },
                        { e: '🪘', t: 'Tambores nativos', d: 'Cantos y tambores de pow-wow que acompañan las danzas.' },
                        { e: '🎶', t: 'Folk de Québec', d: 'Canciones tradicionales con violín, acordeón y cucharas.' }
                    ]
                }
            ]
        },
        {
            id: 'bailes', nombre: 'Bailes', icono: '💃', temas: [
                {
                    id: 'jig-stepdance', titulo: 'Jig métis y baile de zapateo', icono: '👞', wiki: ['Red River Jig', 'Step dance'],
                    dato: 'El Red River Jig es un baile métis de zapateo veloz que mezcla pasos indígenas y europeos.',
                    lugares: 'Winnipeg, Cabo Bretón, Festival Louis Riel (Manitoba), Edmonton (danza ucraniana)',
                    ideas: [
                        { e: '👞', t: 'Red River Jig', d: 'Baile de los métis con zapateo, violín y mucha energía.' },
                        { e: '🎻', t: 'Step dance', d: 'Zapateo de influencia escocesa e irlandesa, típico de Cabo Bretón.' },
                        { e: '🇺🇦', t: 'Danza ucraniana', d: 'Canadá tiene una de las mayores comunidades ucranianas fuera de Ucrania.' },
                        { e: '💃', t: 'Cuadrilla', d: 'El square dance se baila en fiestas rurales de todo el país.' }
                    ]
                },
                {
                    id: 'powwow-ballet', titulo: 'Danza de aro, pow-wow y ballet', icono: '🩰', wiki: ['Hoop dance', 'Royal Winnipeg Ballet'],
                    dato: 'En la danza del aro, el bailarín forma figuras de animales y del universo con varios aros a la vez.',
                    lugares: 'Winnipeg (Royal Winnipeg Ballet), Toronto (National Ballet), Montreal (Cirque du Soleil), Calgary',
                    ideas: [
                        { e: '⭕', t: 'Danza del aro', d: 'Danza indígena que cuenta historias con círculos.' },
                        { e: '🪶', t: 'Pow-wow', d: 'Reunión con danzas, trajes de plumas y tambores.' },
                        { e: '🩰', t: 'Ballet', d: 'Royal Winnipeg Ballet (1939) y National Ballet of Canada (1951).' },
                        { e: '🎪', t: 'Cirque du Soleil', d: 'Circo con danza y acrobacias creado en Québec en 1984.' }
                    ]
                }
            ]
        },
        {
            id: 'arte', nombre: 'Arte', icono: '🎨', temas: [
                {
                    id: 'group-of-seven', titulo: 'Grupo de los Siete y Emily Carr', icono: '🖼️', wiki: ['Group of Seven (artists)', 'Emily Carr'],
                    dato: 'El Grupo de los Siete (1920) pintó los bosques, lagos y montañas de Canadá con colores intensos.',
                    lugares: 'McMichael Canadian Art Collection (Ontario), Galería Nacional de Canadá (Ottawa), Art Gallery of Ontario, Algonquin Park',
                    ideas: [
                        { e: '🖼️', t: 'Grupo de los Siete', d: 'Pintores como Lawren Harris y A. Y. Jackson crearon un arte "canadiense".' },
                        { e: '🌲', t: 'Tom Thomson', d: 'Pintor del Parque Algonquin cuya obra inspiró al grupo.' },
                        { e: '🪵', t: 'Emily Carr', d: 'Pintó mástiles totémicos y bosques de la costa oeste.' },
                        { e: '🏛️', t: 'Galerías', d: 'Ottawa, Toronto y Montreal tienen grandes museos de arte.' }
                    ]
                },
                {
                    id: 'arte-inuit-haida', titulo: 'Arte inuit y haida', icono: '🗿', wiki: ['Inuit art', 'Haida art'],
                    dato: 'Un inuksuk es una pila de piedras en forma de figura humana que sirve de guía y de mensaje en la tundra.',
                    lugares: 'Kinngait (Cape Dorset), Haida Gwaii, Museo de Antropología de la UBC (Vancouver), Winnipeg Art Gallery',
                    ideas: [
                        { e: '🗿', t: 'Esculturas inuit', d: 'Tallas en piedra jabón, hueso y marfil de animales del Ártico.' },
                        { e: '🪵', t: 'Mástiles totémicos', d: 'Tallados de la costa del Pacífico que cuentan linajes e historias.' },
                        { e: '🎨', t: 'Norval Morrisseau', d: 'Fundó el estilo "Woodland" de pintura anishinaabe.' },
                        { e: '⛺', t: 'Inuksuk', d: 'Pilas de piedras que orientan a viajeros del Ártico.' }
                    ]
                }
            ]
        },
        {
            id: 'literatura', nombre: 'Literatura', icono: '📚', temas: [
                {
                    id: 'atwood-munro-montgomery', titulo: 'Anne, Atwood y Alice Munro', icono: '📖', wiki: ['Margaret Atwood', 'Alice Munro'],
                    dato: 'Alice Munro, maestra del cuento, recibió el Premio Nobel de Literatura en 2013.',
                    lugares: 'Isla del Príncipe Eduardo (Casa de Tejas Verdes), Wingham (Ontario), Toronto, Bibliotheque et Archives nationales',
                    ideas: [
                        { e: '🧡', t: 'Ana de las Tejas Verdes', d: 'Novela de L. M. Montgomery (1908) sobre una niña huérfana en la Isla del Príncipe Eduardo.' },
                        { e: '📕', t: 'Margaret Atwood', d: 'Autora de "El cuento de la criada" (1985) y dos veces ganadora del Booker.' },
                        { e: '🏆', t: 'Alice Munro', d: 'Nobel 2013 por sus cuentos de la vida cotidiana en pueblos pequeños.' },
                        { e: '🐯', t: 'Yann Martel', d: 'Autor de "La vida de Pi" (2001), ganador del Booker 2002.' }
                    ]
                },
                {
                    id: 'cohen-quebec-indigena', titulo: 'Cohen, Québec y voces indígenas', icono: '✍️', wiki: ['Leonard Cohen', 'Thomas King (author)'],
                    dato: 'Leonard Cohen fue poeta y novelista antes de ser cantautor y nació en Montreal.',
                    lugares: 'Montreal (Plateau), Biblioteca Nacional de Québec, Feria del Libro de Montreal, Toronto',
                    ideas: [
                        { e: '🖋️', t: 'Leonard Cohen', d: 'Poeta de Montreal que escribió "Hallelujah".' },
                        { e: '⚜️', t: 'Literatura quebequense', d: 'Gabrielle Roy, Michel Tremblay y Marie-Claire Blais escribieron en francés.' },
                        { e: '🪶', t: 'Escritores indígenas', d: 'Thomas King y Tomson Highway cuentan historias de las Primeras Naciones.' },
                        { e: '🌍', t: 'Voces nuevas', d: 'Michael Ondaatje ("El paciente inglés") y Rohinton Mistry escriben desde la experiencia inmigrante.' }
                    ]
                }
            ]
        },
        {
            id: 'tradiciones', nombre: 'Tradiciones', icono: '🌿', temas: [
                {
                    id: 'hockey-lacrosse', titulo: 'Hockey, lacrosse y deportes de invierno', icono: '🏒', wiki: ['Ice hockey', 'Lacrosse'],
                    dato: 'El hockey sobre hielo es el deporte nacional de invierno y el lacrosse, de origen indígena, es el deporte nacional de verano.',
                    lugares: 'Salón de la Fama del Hockey (Toronto), Bell Centre (Montreal), Canal Rideau (Ottawa), Calgary',
                    ideas: [
                        { e: '🏒', t: 'Hockey', d: 'El primer partido en pista cubierta se jugó en Montreal en 1875.' },
                        { e: '🏆', t: 'Copa Stanley', d: 'Trofeo donado en 1892 por lord Stanley, gobernador general.' },
                        { e: '🥍', t: 'Lacrosse', d: 'Juego creado por pueblos indígenas, con un palo con red y una pelota.' },
                        { e: '🏃', t: 'Terry Fox', d: 'En 1980 inició su "Maratón de la Esperanza" para la investigación del cáncer.' }
                    ]
                },
                {
                    id: 'potlatch-tradiciones', titulo: 'Potlatch, tambores y tradiciones indígenas', icono: '🎁', wiki: ['Potlatch', 'Inuksuk'],
                    dato: 'El gobierno canadiense prohibió el potlatch entre 1885 y 1951, pero las comunidades lo mantuvieron vivo.',
                    lugares: 'Museo Real de Columbia Británica (Victoria), U\'mista Cultural Centre (Alert Bay), Iqaluit, Wanuskewin (Saskatchewan)',
                    ideas: [
                        { e: '🎁', t: 'Potlatch', d: 'Fiesta de la costa del Pacífico donde se reparten regalos y se honran linajes.' },
                        { e: '🧡', t: 'Día de la Camisa Naranja', d: 'El 30 de septiembre se recuerda a los niños de las escuelas residenciales.' },
                        { e: '🥁', t: 'Círculos y tambores', d: 'Reuniones para escuchar, cantar y compartir conocimientos.' },
                        { e: '⛺', t: 'Vida en el Norte', d: 'Los inuit desarrollaron tecnologías para vivir en el Ártico: trineos, kayaks e iglús.' }
                    ]
                }
            ]
        },
        {
            id: 'fiestas', nombre: 'Fiestas', icono: '🎉', temas: [
                {
                    id: 'canada-day-stampede', titulo: 'Día de Canadá y Calgary Stampede', icono: '🎆', wiki: ['Canada Day', 'Calgary Stampede'],
                    dato: 'El Calgary Stampede, "el mayor espectáculo al aire libre de la Tierra", se celebra cada julio con rodeo y carros de chuckwagon.',
                    lugares: 'Ottawa (Colinas del Parlamento), Calgary (Stampede Park), Vancouver, Toronto',
                    ideas: [
                        { e: '🎆', t: 'Día de Canadá', d: 'Cada 1 de julio hay desfiles, música y fuegos artificiales.' },
                        { e: '🍁', t: 'Rojo y blanco', d: 'La gente se viste con los colores de la bandera.' },
                        { e: '🤠', t: 'Calgary Stampede', d: 'Diez días de rodeo, conciertos y feria desde 1912.' },
                        { e: '⚜️', t: 'Fiesta nacional de Québec', d: 'El 24 de junio se celebra la identidad francófona.' }
                    ]
                },
                {
                    id: 'carnaval-quebec-acciones', titulo: 'Carnaval de Québec y Acción de Gracias', icono: '⛄', wiki: ['Quebec Winter Carnival', 'Thanksgiving (Canada)'],
                    dato: 'El Carnaval de Invierno de Québec tiene como mascota a Bonhomme, un muñeco de nieve con gorro rojo y faja flechada.',
                    lugares: 'Ciudad de Québec (Plaza Real), Toronto (Caribana), Montreal (Festival de Jazz), Ottawa (Winterlude)',
                    ideas: [
                        { e: '⛄', t: 'Bonhomme Carnaval', d: 'Muñeco de nieve símbolo del carnaval de invierno.' },
                        { e: '🦃', t: 'Acción de Gracias', d: 'Se celebra el segundo lunes de octubre, antes que en EE. UU.' },
                        { e: '🌴', t: 'Caribana', d: 'Desfile caribeño en Toronto desde 1967.' },
                        { e: '🌺', t: 'Día del Recuerdo', d: 'El 11 de noviembre se usa una amapola roja para recordar a los caídos.' }
                    ]
                }
            ]
        },
        {
            id: 'vestimenta', nombre: 'Vestimenta típica', icono: '👗', temas: [
                {
                    id: 'parka-inuit', titulo: 'Parkas, amautis y abrigos del Norte', icono: '🧥', wiki: ['Parka', 'Amauti'],
                    dato: 'El amauti es la parka inuit de las mujeres, con una gran capucha donde se lleva al bebé abrigado junto a la madre.',
                    lugares: 'Iqaluit (Nunavut), Museo Nacional (Ottawa), Museo de la Bahía de Hudson, Yellowknife',
                    ideas: [
                        { e: '🧥', t: 'Parka', d: 'Abrigo con capucha que los inuit hacían con piel de caribú y foca.' },
                        { e: '👢', t: 'Kamik', d: 'Botas de piel impermeables y calientes para la nieve.' },
                        { e: '🧶', t: 'Toque', d: 'Gorro de lana típico del invierno canadiense.' },
                        { e: '🔴', t: 'Manta de la Bahía de Hudson', d: 'Manta de lana con franjas de colores, símbolo canadiense desde 1779.' }
                    ]
                },
                {
                    id: 'ceinture-fleche-mountie', titulo: 'Faja flechada y uniforme de la Policía Montada', icono: '🧣', wiki: ['Ceinture fléchée', 'Royal Canadian Mounted Police'],
                    dato: 'La faja flechada, tejida a mano, era usada por los voyageurs y hoy es símbolo de la cultura métis y quebequense.',
                    lugares: 'Montreal, Winnipeg, Regina (Museo de la RCMP), Ottawa',
                    ideas: [
                        { e: '🧣', t: 'Faja flechada', d: 'Cinturón tejido de colores, de la cultura métis y de Québec.' },
                        { e: '🔴', t: 'Policía Montada', d: 'La RCMP usa una túnica roja ("serge") en ceremonias.' },
                        { e: '🪶', t: 'Atuendos de pow-wow', d: 'Plumas, cascabeles y cuentas bordadas con significados propios.' },
                        { e: '🧵', t: 'Cuentas métis', d: 'Los métis son famosos por sus bordados de flores con cuentas.' }
                    ]
                }
            ]
        },
        {
            id: 'monumentos', nombre: 'Monumentos', icono: '🏰', temas: [
                {
                    id: 'parlamento-torre-cn', titulo: 'Parlamento, Torre CN y Québec histórico', icono: '🏛️', wiki: ['Parliament Hill', 'CN Tower'],
                    dato: 'La Torre CN de Toronto, de 553 metros, fue la estructura autoportante más alta del mundo de 1976 a 2007.',
                    lugares: 'Colinas del Parlamento (Ottawa), Torre CN (Toronto), Château Frontenac (Québec), Basílica de Notre-Dame (Montreal)',
                    ideas: [
                        { e: '🏛️', t: 'Parlamento', d: 'Edificios neogóticos en Ottawa, con la Torre de la Paz de 92 metros.' },
                        { e: '🗼', t: 'Torre CN', d: 'Símbolo de Toronto con un piso de vidrio sobre el vacío.' },
                        { e: '🏰', t: 'Québec', d: 'Ciudad amurallada, Patrimonio Mundial desde 1985.' },
                        { e: '⛪', t: 'Notre-Dame de Montreal', d: 'Basílica de interior azul estrellado.' }
                    ]
                },
                {
                    id: 'niagara-parques', titulo: 'Cataratas del Niágara y parques nacionales', icono: '💦', wiki: ['Niagara Falls', 'Banff National Park'],
                    dato: 'Banff, creado en 1885, es el primer parque nacional de Canadá.',
                    lugares: 'Cataratas del Niágara (Ontario), Banff y Lago Louise (Alberta), Gros Morne (Terranova), Bahía de Fundy',
                    ideas: [
                        { e: '💦', t: 'Niágara', d: 'Las cataratas Herradura caen unos 57 metros entre Canadá y EE. UU.' },
                        { e: '🏔️', t: 'Banff y Lago Louise', d: 'Parque de las Rocosas con aguas turquesa.' },
                        { e: '🌊', t: 'Bahía de Fundy', d: 'Tiene las mareas más altas del mundo.' },
                        { e: '🦌', t: 'Fauna', d: 'Osos, alces, castores y ballenas viven en sus parques y costas.' }
                    ]
                }
            ]
        }
    ]
};
