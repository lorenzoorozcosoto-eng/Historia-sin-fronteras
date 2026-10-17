// Guyana: categorías y temas; historia, ideas, lugares y preguntas por tema.
function tema(id, titulo, icono, wiki, dato, historia, ideas, lugares, preguntas) {
    return { id, titulo, icono, wiki, dato, historia, ideas, lugares, preguntas };
}
window.PAIS = {
    iso: 'GY', nombre: 'Guyana', bandera: '🇬🇾', banderaImg: 'https://flagcdn.com/w160/gy.png',
    categorias: [        {
            id: 'historia', nombre: 'Historia', icono: '🏛️', temas: [
                tema('amerindios', 'Pueblos amerindios', '🪶', ['Indigenous peoples in Guyana', 'Guyana'],
                    'Guyana reconoce nueve pueblos indígenas, entre ellos macushi, lokono, wapishana, warao y wai wai.',
                    [
                        'Los pueblos indígenas han vivido en el territorio guyanés desde mucho antes de la colonización europea. Sus comunidades pertenecen a familias lingüísticas y tradiciones diversas; no forman una sola cultura. Los macushi, wapishana y wai wai, por ejemplo, tienen presencia importante en el interior y las sabanas del Rupununi.',
                        'La vida indígena se relaciona con el conocimiento de ríos, bosques y sabanas, y con actividades como agricultura, pesca, caza y elaboración de objetos. Hoy las comunidades mantienen lenguas y prácticas propias, participan en la vida nacional y defienden sus territorios y formas de organización ante cambios económicos y ambientales.'
                    ],
                    [
                        { e: '🌿', t: 'Nueve pueblos', d: 'Guyana reconoce nueve pueblos indígenas con identidades propias.' },
                        { e: '🗣️', t: 'Lenguas vivas', d: 'Sus idiomas pertenecen a distintas familias lingüísticas.' },
                        { e: '🛶', t: 'Ríos y bosques', d: 'El territorio sostiene saberes de pesca, cultivo y navegación.' },
                        { e: '🧺', t: 'Conocimiento', d: 'La cestería y técnicas locales transmiten saberes generacionales.' }
                    ],
                    'Rupununi, Región del Alto Takutu-Alto Essequibo, río Essequibo',
                    [
                        ['¿Cuántos pueblos indígenas reconoce Guyana?', ['Nueve', 'Dos', 'Seis', 'Veinte']],
                        ['¿Qué región tiene extensas sabanas indígenas?', ['Rupununi', 'Sahara', 'Patagonia', 'Pampa argentina']],
                        ['¿Cuál es un pueblo indígena de Guyana?', ['Macushi', 'Inca', 'Mapuche', 'Taíno de Cuba']],
                        ['¿Qué refleja su diversidad?', ['Varias lenguas e identidades', 'Una única cultura idéntica', 'Solo tradiciones europeas', 'La ausencia de historia']]
                    ]),
                tema('colonia-esclavitud', 'Colonia holandesa y británica; esclavitud y rebelión de Berbice', '⛓️', ['History of Guyana', 'Berbice Slave Uprising'],
                    'La rebelión de Berbice comenzó el 23 de febrero de 1763 y fue encabezada por Cuffy.',
                    [
                        'Los neerlandeses establecieron colonias en Essequibo, Berbice y Demerara, donde organizaron plantaciones de azúcar y otros cultivos. El sistema dependía del trabajo forzado de africanos esclavizados y desplazó a comunidades indígenas. En el siglo XVIII, las posesiones pasaron gradualmente al control británico; en 1831 quedaron reunidas como Guayana Británica.',
                        'El 23 de febrero de 1763 comenzó en Berbice una gran rebelión de personas esclavizadas contra el régimen neerlandés. Cuffy, también llamado Kofi, fue uno de sus principales dirigentes. La revuelta duró más de un año antes de ser derrotada; su recuerdo permanece central en la memoria anticolonial guyanesa y la fecha se convirtió después en Republic Day.'
                    ],
                    [
                        { e: '🇳🇱', t: 'Colonias neerlandesas', d: 'Essequibo, Demerara y Berbice fueron enclaves de plantación.' },
                        { e: '🌱', t: 'Plantaciones', d: 'El azúcar dependía del trabajo esclavizado.' },
                        { e: '✊', t: 'Cuffy', d: 'Dirigió la rebelión iniciada en Berbice en 1763.' },
                        { e: '📅', t: '23 de febrero', d: 'La rebelión se recuerda en Republic Day.' }
                    ],
                    'New Amsterdam, río Berbice, monumento a Cuffy en Georgetown',
                    [
                        ['¿En qué año comenzó la rebelión de Berbice?', ['1763', '1838', '1966', '1498']],
                        ['¿Quién fue uno de sus dirigentes?', ['Cuffy', 'Cheddi Jagan', 'Walter Raleigh', 'Aubrey Williams']],
                        ['¿Qué potencia estableció las primeras colonias de plantación?', ['Los neerlandeses', 'Los incas', 'Los otomanos', 'Los japoneses']],
                        ['¿Qué día comenzó la rebelión?', ['23 de febrero', '26 de mayo', '1 de enero', '12 de octubre']]
                    ]),                tema('servidumbre-abolicion', 'Abolición y trabajadores contratados', '🚢', ['Indentured labour', 'Indian indenture system'],
                    'La esclavitud fue abolida en las colonias británicas en 1833; el aprendizaje obligatorio terminó en Guayana Británica en 1838.',
                    [
                        'Gran Bretaña aprobó la abolición en sus colonias en 1833, pero la libertad plena se aplicó gradualmente. En Guayana Británica, el periodo de aprendizaje impuesto a los antiguos esclavizados concluyó en 1838. La emancipación transformó el trabajo en las plantaciones y llevó a muchas familias afrodescendientes a crear aldeas independientes.',
                        'Los propietarios azucareros recurrieron entonces a trabajadores contratados, especialmente de India, mediante contratos de varios años y condiciones duras. También llegaron portugueses de Madeira y, en menor número, personas de China y otras islas caribeñas. La contratación terminó en el siglo XX, pero la migración dejó una huella profunda en la población, las religiones y la cocina guyanesa.'
                    ],
                    [
                        { e: '📜', t: 'Abolición', d: 'El Imperio británico legisló el fin de la esclavitud en 1833.' },
                        { e: '🕊️', t: '1838', d: 'Terminó el aprendizaje forzoso y comenzó la libertad plena.' },
                        { e: '🚢', t: 'Migración india', d: 'Llegaron trabajadores contratados para las plantaciones.' },
                        { e: '🌍', t: 'Nueva sociedad', d: 'La migración plural transformó la cultura guyanesa.' }
                    ],
                    'Plantaciones azucareras de Demerara, Georgetown, Museo Nacional de Guyana',
                    [
                        ['¿En qué año terminó el aprendizaje impuesto?', ['1838', '1763', '1966', '1914']],
                        ['¿De dónde llegaron muchos trabajadores contratados?', ['India', 'Canadá', 'Japón', 'Noruega']],
                        ['¿Qué cultivo se vinculó especialmente a las plantaciones?', ['Caña de azúcar', 'Trigo alpino', 'Aceituna', 'Centeno']],
                        ['¿Qué cambio siguió a la emancipación?', ['Se desarrollaron aldeas afrodescendientes libres', 'Se restableció la esclavitud', 'Desapareció la agricultura', 'Guyana dejó de tener migración']]
                    ]),
                tema('independencia', 'Independencia y República Cooperativa', '🇬🇾', ['Guyana', 'History of Guyana'],
                    'Guyana obtuvo la independencia el 26 de mayo de 1966 y se proclamó república el 23 de febrero de 1970.',
                    [
                        'Durante el siglo XX crecieron los sindicatos y los partidos que reclamaban autogobierno. Cheddi Jagan y Forbes Burnham fueron figuras destacadas. Tras elecciones y negociaciones con el Reino Unido, la Guayana Británica se convirtió en el Estado independiente de Guyana el 26 de mayo de 1966, manteniendo inicialmente al monarca británico como jefe de Estado.',
                        'El 23 de febrero de 1970 el país pasó a ser la República Cooperativa de Guyana y dejó de tener al monarca británico como jefe de Estado. Ese día coincidió con el aniversario de la rebelión de Berbice. La independencia abrió una etapa de construcción nacional: Guyana buscó combinar su herencia caribeña, sus distintas comunidades y su posición sudamericana.'
                    ],
                    [
                        { e: '🗳️', t: 'Autogobierno', d: 'Sindicatos y partidos impulsaron las demandas de independencia.' },
                        { e: '📅', t: '1966', d: 'La independencia se obtuvo el 26 de mayo.' },
                        { e: '🏛️', t: 'República', d: 'En 1970 Guyana se convirtió en República Cooperativa.' },
                        { e: '🤝', t: 'Identidad nacional', d: 'El nuevo Estado reunió herencias diversas.' }
                    ],
                    'Georgetown, Parlamento de Guyana, monumento a la independencia',
                    [
                        ['¿En qué fecha se independizó Guyana?', ['26 de mayo de 1966', '23 de febrero de 1970', '1 de agosto de 1838', '4 de julio de 1776']],
                        ['¿Cómo se denomina el Estado guyanés desde 1970?', ['República Cooperativa de Guyana', 'Reino de Guyana', 'Federación Andina', 'República de las Guayanas Unidas']],
                        ['¿Qué figuras fueron importantes en la política del siglo XX?', ['Cheddi Jagan y Forbes Burnham', 'Cuffy y Accara', 'Wilson Harris y Martin Carter', 'Aubrey Williams y Philip Moore']],
                        ['¿Qué conmemora también el 23 de febrero?', ['La rebelión de Berbice', 'La independencia de 1966', 'La abolición de 1833', 'La publicación de una novela']]
                    ])
            ]
        },        {
            id: 'cultura', nombre: 'Cultura', icono: '🎎', temas: [
                tema('seis-pueblos', 'Los seis pueblos de Guyana', '🤝', ['Culture of Guyana', 'Demographics of Guyana'],
                    'La expresión «seis pueblos» agrupa las principales ascendencias de Guyana: indígenas, africana, india, europea, china y mixta.',
                    [
                        'La población guyanesa se formó mediante encuentros y migraciones de distintos periodos. Las comunidades indígenas son originarias del territorio; la colonización trajo población europea y personas africanas esclavizadas, y después de la emancipación llegaron trabajadores contratados de India, Portugal, China y el Caribe. Sus descendientes conformaron una sociedad diversa.',
                        '«Seis pueblos» es una forma educativa de nombrar las principales ascendencias, no seis grupos cerrados ni culturas uniformes. En la vida cotidiana se cruzan historias y tradiciones: fiestas cristianas, hindúes y musulmanas comparten el calendario, mientras comidas, música y modos de hablar combinan influencias caribeñas e indígenas.'
                    ],
                    [
                        { e: '🪶', t: 'Indígenas', d: 'Pueblos originarios mantienen culturas y lenguas propias.' },
                        { e: '🌍', t: 'Migraciones', d: 'Llegadas sucesivas conformaron las comunidades guyanesas.' },
                        { e: '🎊', t: 'Fiestas plurales', d: 'Distintas tradiciones religiosas comparten el calendario.' },
                        { e: '🍲', t: 'Cruces culturales', d: 'La cocina y la música reúnen influencias diversas.' }
                    ],
                    'Georgetown, mercado Stabroek, Museo Nacional de Guyana',
                    [
                        ['¿Qué significa «seis pueblos» en Guyana?', ['Agrupa ascendencias principales de la población', 'Nombra seis provincias antiguas', 'Describe seis lenguas oficiales', 'Se refiere solo a seis familias indígenas']],
                        ['¿Cuál es una comunidad originaria de Guyana?', ['Pueblos indígenas', 'Colonos neerlandeses', 'Trabajadores portugueses', 'Inmigrantes chinos']],
                        ['¿Qué migración llegó especialmente tras la emancipación?', ['Trabajadores contratados de India', 'Colonos vikingos', 'Población inca', 'Pescadores japoneses']],
                        ['¿Qué expresa la diversidad guyanesa?', ['La convivencia de varias herencias culturales', 'Una sola tradición inmutable', 'La desaparición de toda migración', 'La ausencia de religiones distintas']]
                    ]),
                tema('criollo-lenguas', 'Inglés, criollo guyanés y lenguas amerindias', '🗣️', ['Guyanese Creole', 'Indigenous languages of the Americas'],
                    'El inglés es la lengua oficial de Guyana, pero el criollo guyanés se usa ampliamente en la conversación cotidiana.',
                    [
                        'El inglés es la lengua oficial y principal de la educación, la administración y los medios nacionales. El criollo guyanés, una lengua de base inglesa con influencias africanas, indígenas y de otros idiomas, se habla ampliamente en la vida diaria. Sus formas varían según región, comunidad y situación; es una variedad propia, no «inglés mal hablado».',
                        'En las comunidades indígenas continúan hablándose macushi, wapishana, lokono, wai wai y warao, entre otras lenguas. El portugués también se oye en zonas fronterizas y entre familias migrantes. La diversidad lingüística muestra la historia de Guyana y hace importante transmitir las lenguas ancestrales y garantizar servicios públicos comprensibles.'
                    ],
                    [
                        { e: '🇬🇧', t: 'Lengua oficial', d: 'El inglés se usa en educación y administración.' },
                        { e: '🗣️', t: 'Criollo guyanés', d: 'Variedad de base inglesa extendida en la conversación.' },
                        { e: '🌱', t: 'Lenguas indígenas', d: 'Macushi, wapishana, lokono y otras siguen vivas.' },
                        { e: '🧭', t: 'Diversidad regional', d: 'Las lenguas reflejan comunidades y trayectorias distintas.' }
                    ],
                    'Georgetown, Rupununi, comunidades indígenas del interior',
                    [
                        ['¿Cuál es la lengua oficial de Guyana?', ['Inglés', 'Español', 'Neerlandés', 'Hindi']],
                        ['¿Qué caracteriza al criollo guyanés?', ['Lengua de base inglesa usada cotidianamente', 'Variedad del portugués', 'Lengua exclusivamente escrita', 'Idioma oficial de Brasil']],
                        ['¿Cuál es una lengua indígena de Guyana?', ['Macushi', 'Quechua', 'Náhuatl', 'Mapudungun']],
                        ['¿Qué refleja la diversidad lingüística?', ['La historia plural de sus comunidades', 'Que todas las familias hablan igual', 'Que no hay lenguas ancestrales', 'Que el inglés no es oficial']]
                    ])
            ]
        },        {
            id: 'gastronomia', nombre: 'Gastronomía', icono: '🍽️', temas: [
                tema('pepperpot-cookup', 'Pepperpot, cook-up rice y casabe', '🍲', ['Guyana', 'Cassava bread'],
                    'El pepperpot suele prepararse con cassareep, salsa oscura de yuca, y es popular en Navidad.',
                    [
                        'El pepperpot es un guiso de cocción lenta asociado a la tradición amerindia. Su sabor y color característicos proceden del cassareep, un concentrado de yuca amarga cocida que ayuda a conservar y sazonar la preparación. Se hace con carne y especias, y muchas familias lo sirven en Navidad, con variaciones familiares.',
                        'El cook-up rice combina arroz, legumbres y, según la receta, leche de coco, carne o pescado. El casabe, pan plano y seco de yuca, forma parte de la cocina indígena y se conserva bien. Estos alimentos muestran cómo ingredientes locales y prácticas transmitidas en casa se hicieron parte de la mesa nacional.'
                    ],
                    [
                        { e: '🌿', t: 'Cassareep', d: 'Concentrado de yuca que da sabor y color al pepperpot.' },
                        { e: '🎄', t: 'Pepperpot', d: 'Guiso de cocción lenta servido a menudo en Navidad.' },
                        { e: '🍚', t: 'Cook-up rice', d: 'Arroz con legumbres y otros ingredientes en una olla.' },
                        { e: '🫓', t: 'Casabe', d: 'Pan seco de yuca vinculado a tradiciones indígenas.' }
                    ],
                    'Georgetown, mercados locales, restaurantes de cocina guyanesa',
                    [
                        ['¿Qué da sabor y color al pepperpot?', ['Cassareep de yuca', 'Salsa de tomate italiana', 'Queso azul', 'Miso de soja']],
                        ['¿Con qué celebración se asocia el pepperpot?', ['Navidad', 'Año Nuevo chino', 'Hanukkah', 'Día de San Patricio']],
                        ['¿Qué suele combinar el cook-up rice?', ['Arroz y legumbres', 'Trigo y aceitunas', 'Maíz y chocolate', 'Papas y cebada']],
                        ['¿De qué se prepara el casabe?', ['Yuca', 'Trigo', 'Avena', 'Arroz integral']]
                    ]),
                tema('curry-roti', 'Curry, roti y la cocina indoguyanesa', '🫓', ['Culture of Guyana', 'Guyana'],
                    'El roti y el curry guyaneses reflejan la herencia indoguyanesa, descendiente en gran parte de trabajadores contratados de India.',
                    [
                        'La cocina indoguyanesa se desarrolló a partir de tradiciones culinarias que trajeron migrantes del subcontinente indio desde el siglo XIX. Sus familias adaptaron especias, legumbres y métodos de cocción a los productos disponibles en Guyana. Las recetas cambiaron entre generaciones y se mezclaron con prácticas culinarias criollas y caribeñas.',
                        'El roti es un pan plano que acompaña curries de pollo, cabra, pescado o verduras. Entre las variedades están el dhal puri, relleno de arvejas partidas molidas, y el paratha, de textura hojaldrada. Se come en hogares, puestos y celebraciones; la comida cuenta una historia de migración, adaptación e intercambio.'
                    ],
                    [
                        { e: '🌶️', t: 'Especias', d: 'Mezclas aromáticas distinguen los curries guyaneses.' },
                        { e: '🫓', t: 'Roti', d: 'Pan plano que acompaña guisos y curries.' },
                        { e: '🫘', t: 'Dhal puri', d: 'Roti relleno con arvejas partidas molidas.' },
                        { e: '🧳', t: 'Herencia migrante', d: 'Recetas adaptadas por familias llegadas desde India.' }
                    ],
                    'Georgetown, Berbice, mercados y restaurantes de cocina indoguyanesa',
                    [
                        ['¿Qué pan acompaña el curry guyanés?', ['Roti', 'Baguette', 'Tortilla mexicana', 'Pita griega']],
                        ['¿Qué puede rellenar el dhal puri?', ['Arvejas partidas molidas', 'Queso cheddar', 'Manzana rallada', 'Cacao']],
                        ['¿Qué comunidad transmitió parte importante de esta cocina?', ['Indoguyanesa', 'Inca', 'Maorí', 'Vikinga']],
                        ['¿Qué explica la adaptación de estas recetas?', ['Encuentro de tradiciones y productos locales', 'Ausencia de migraciones', 'Prohibición de las especias', 'Influencia exclusiva europea']]
                    ])
            ]
        },        {
            id: 'musica', nombre: 'Música', icono: '🎺', temas: [
                tema('chutney', 'Música chutney e india', '🥁', ['Chutney music', 'Guyanese music'],
                    'La música chutney surgió en el Caribe anglófono de canciones y ritmos de comunidades de origen indio; en Guyana también se interpreta con tassa.',
                    [
                        'Las músicas indoguyanesas combinan prácticas familiares y religiosas de origen surasiático con instrumentos y ritmos caribeños. El chutney, desarrollado en el Caribe, mezcla elementos de canciones tradicionales del sur de Asia con calipso, soca y otros géneros populares. En Guyana se escucha en fiestas comunitarias, reuniones y celebraciones.',
                        'Los conjuntos pueden usar voz, armonio, dholak y tambor tassa, además de instrumentos modernos. Las letras alternan idiomas y temas de amor, vida cotidiana y humor. La música evidencia que una tradición migrante cambia en contacto con nuevas generaciones y con el paisaje musical del Caribe.'
                    ],
                    [
                        { e: '🎶', t: 'Chutney', d: 'Género caribeño que mezcla tradiciones musicales.' },
                        { e: '🥁', t: 'Tassa', d: 'Tambor presente en celebraciones indoguyanesas.' },
                        { e: '🎹', t: 'Armonio', d: 'Teclado usado en música de raíz india.' },
                        { e: '🔀', t: 'Fusión', d: 'Canciones e idiomas se transforman con ritmos caribeños.' }
                    ],
                    'Georgetown, Berbice, celebraciones indoguyanesas',
                    [
                        ['¿Qué género combina tradiciones surasiáticas y caribeñas?', ['Chutney', 'Polca bávara', 'Flamenco', 'Bluegrass']],
                        ['¿Qué percusión puede acompañar la música indoguyanesa?', ['Tassa', 'Marimba guatemalteca', 'Bodhrán irlandés', 'Koto japonés']],
                        ['¿Qué tipo de instrumento es el armonio?', ['Teclado', 'Viento metálico', 'Cuerda frotada', 'Tambor de marco']],
                        ['¿Qué muestra la música chutney?', ['Intercambio y transformación cultural', 'Separación total del Caribe', 'Desaparición de toda música india', 'Tradición exclusivamente europea']]
                    ]),
                tema('calipso-soca', 'Calipso, soca y steelpan', '🎷', ['Calypso music', 'Soca music', 'Steelpan'],
                    'El steelpan se originó en Trinidad y Tobago y forma parte de los sonidos caribeños que también se disfrutan en Guyana.',
                    [
                        'Calipso y soca son géneros caribeños que circulan ampliamente en Guyana. El calipso es conocido por canciones narrativas y de comentario social; la soca se desarrolló después con ritmos más acelerados y pensados para el baile. Artistas guyaneses participan en escenas regionales y festivales junto a músicos de islas vecinas.',
                        'El steelpan, también llamado steel drum, nació en Trinidad y Tobago durante el siglo XX y se fabrica a partir de tambores metálicos afinados. Sus melodías se escuchan en conjuntos y celebraciones caribeñas, incluida Guyana. Junto a guitarras, percusión y voces, estos estilos muestran la pertenencia guyanesa a un espacio musical común.'
                    ],
                    [
                        { e: '🎤', t: 'Calipso', d: 'Canciones que narran historias y comentan la sociedad.' },
                        { e: '💃', t: 'Soca', d: 'Género caribeño enérgico, pensado para bailar.' },
                        { e: '🥁', t: 'Steelpan', d: 'Instrumento metálico afinado, nacido en Trinidad y Tobago.' },
                        { e: '🏝️', t: 'Caribe musical', d: 'Guyana comparte circuitos y fiestas con la región.' }
                    ],
                    'Georgetown, festivales de música caribeña, Linden',
                    [
                        ['¿Dónde se originó el steelpan?', ['Trinidad y Tobago', 'Guyana francesa', 'Jamaica', 'Barbados']],
                        ['¿Qué es el steelpan?', ['Instrumento metálico afinado', 'Tambor de madera con cuerdas', 'Flauta de bambú', 'Teclado electrónico']],
                        ['¿Qué caracteriza a menudo al calipso?', ['Narración y comentario social', 'Solo cantos de ópera', 'Únicamente música instrumental', 'Canciones sin relación con la vida cotidiana']],
                        ['¿Qué vínculo musical comparte Guyana?', ['Circuitos culturales del Caribe', 'Tradición alpina', 'Folclor siberiano', 'Música exclusivamente andina']]
                    ])
            ]
        },        {
            id: 'bailes', nombre: 'Bailes', icono: '💃', temas: [
                tema('danza-india', 'Danzas indias: kathak y tassa', '🪷', ['Kathak', 'Tassa'],
                    'Kathak es una forma de danza clásica del norte de India; en Guyana también hay danzas y procesiones acompañadas por tassa.',
                    [
                        'La danza indoguyanesa comprende expresiones religiosas, sociales y escénicas que las comunidades han transmitido y adaptado. Kathak, una forma clásica del norte de India, usa desplazamientos, giros, gestos expresivos y percusión rítmica; su práctica requiere entrenamiento y no debe confundirse con los bailes populares de fiesta.',
                        'En celebraciones hindúes y bodas también hay bailes comunitarios con música de tassa, un conjunto de tambores de origen surasiático. El chutney y la soca suman repertorios contemporáneos. Así, la danza en Guyana puede ser devoción, relato escénico y diversión compartida.'
                    ],
                    [
                        { e: '🪷', t: 'Kathak', d: 'Danza clásica del norte de India con giros y gestos.' },
                        { e: '🥁', t: 'Ritmo tassa', d: 'Tambores que acompañan fiestas y procesiones.' },
                        { e: '💍', t: 'Bodas', d: 'Las celebraciones reúnen baile, música y comunidad.' },
                        { e: '🎭', t: 'Diversidad', d: 'Conviven danza clásica, devoción y baile popular.' }
                    ],
                    'Georgetown, templos hindúes, celebraciones de bodas',
                    [
                        ['¿De qué región de India procede el kathak?', ['Del norte', 'Del sur de Chile', 'Del Japón medieval', 'De los Andes']],
                        ['¿Qué tambores acompañan procesiones indoguyanesas?', ['Tassa', 'Gaitas escocesas', 'Balalaikas', 'Arpas celtas']],
                        ['¿Qué elementos usa el kathak?', ['Giros, gestos y ritmo', 'Acrobacias con caballos', 'Máscaras venecianas', 'Canto sin movimiento']],
                        ['¿En qué ocasiones puede haber danza comunitaria?', ['Bodas y celebraciones', 'Solo en parlamentos', 'Únicamente en cosechas de trigo', 'Exclusivamente en museos']]
                    ]),
                tema('masquerade-kwekwe', 'Masquerade y Kwe-Kwe', '🎭', ['Culture of Guyana', 'Guyanese music'],
                    'Kwe-Kwe es una celebración afro-guyanesa tradicional asociada a las vísperas de una boda.',
                    [
                        'La masquerade guyanesa es una tradición de música, baile y personajes enmascarados vinculada históricamente a comunidades afrodescendientes. Los intérpretes pueden recorrer calles o patios acompañados por tambores, flautas y otros instrumentos. Las máscaras y el vestuario convierten la actuación en expresión comunitaria festiva, con variantes locales.',
                        'Kwe-Kwe, también escrito kweh-kweh, reúne cantos, percusión y baile en una celebración tradicional previa a una boda afro-guyanesa. Familiares y amistades participan mientras las canciones ofrecen consejo, humor y comentarios sobre la pareja. Ambas expresiones transmiten memoria y pertenencia; no son espectáculos idénticos ni se limitan a una coreografía fija.'
                    ],
                    [
                        { e: '🎭', t: 'Máscaras', d: 'Personajes y vestuario dan forma a la masquerade.' },
                        { e: '🥁', t: 'Percusión', d: 'Tambores y flautas pueden acompañar el recorrido.' },
                        { e: '💍', t: 'Kwe-Kwe', d: 'Celebración comunitaria previa a una boda afro-guyanesa.' },
                        { e: '🎶', t: 'Cantos', d: 'Las canciones transmiten consejo, humor y memoria.' }
                    ],
                    'Georgetown, comunidades afro-guyanesas, fiestas de bodas',
                    [
                        ['¿A qué celebración se asocia el Kwe-Kwe?', ['A las vísperas de una boda', 'A la coronación de un rey', 'Al inicio de la cosecha de arroz', 'A la fundación de Georgetown']],
                        ['¿Qué caracteriza a la masquerade guyanesa?', ['Baile y personajes enmascarados', 'Desfile de barcos de guerra', 'Ceremonia de té', 'Torneo de ajedrez']],
                        ['¿Qué puede acompañar la masquerade?', ['Tambores y flautas', 'Campanas únicamente', 'Orquesta sin instrumentos', 'Órgano de tubos exclusivamente']],
                        ['¿Qué función tienen las canciones del Kwe-Kwe?', ['Compartir consejo, humor y memoria', 'Sustituir los votos civiles', 'Narrar la historia medieval europea', 'Enseñar navegación espacial']]
                    ])
            ]
        },        {
            id: 'arte', nombre: 'Arte', icono: '🎨', temas: [
                tema('arte-amerindio', 'Artesanía amerindia', '🧺', ['Indigenous peoples in Guyana', 'Amerindian'],
                    'Las cestas indígenas guyanesas se elaboran con fibras vegetales locales y cumplen funciones cotidianas además de artísticas.',
                    [
                        'La artesanía indígena guyanesa incluye cestería, tallas, tejidos y objetos elaborados con materiales del entorno. Cada comunidad conserva técnicas y diseños propios, que se aprenden observando y practicando en familia. Las piezas pueden servir para transportar, almacenar o procesar alimentos, además de expresar identidad y conocimiento del territorio.',
                        'La elaboración exige reconocer plantas, recolectar fibras y prepararlas con cuidado. Los motivos y las formas responden a usos concretos y tradiciones locales, no son meros adornos genéricos. Hoy artesanas y artesanos también venden obras en mercados y cooperativas; su trabajo ofrece ingresos y ayuda a mantener saberes comunitarios.'
                    ],
                    [
                        { e: '🧺', t: 'Cestería', d: 'Fibras vegetales se trenzan en piezas resistentes.' },
                        { e: '🌿', t: 'Materiales locales', d: 'El conocimiento de plantas guía la elaboración.' },
                        { e: '🔶', t: 'Diseños propios', d: 'Cada comunidad conserva motivos y técnicas particulares.' },
                        { e: '👐', t: 'Saber transmitido', d: 'El aprendizaje familiar mantiene vivas las prácticas.' }
                    ],
                    'Rupununi, mercados de Georgetown, comunidades del interior',
                    [
                        ['¿Qué material se usa para muchas cestas indígenas?', ['Fibras vegetales', 'Hielo tallado', 'Acero únicamente', 'Vidrio volcánico']],
                        ['¿Qué función pueden tener las piezas de cestería?', ['Transportar o almacenar alimentos', 'Servir solo como monedas', 'Reemplazar puentes', 'Navegación espacial']],
                        ['¿Cómo suelen transmitirse las técnicas artesanales?', ['Aprendizaje entre generaciones', 'Solo manuales importados', 'Votación parlamentaria', 'Fábricas automáticas']],
                        ['¿Qué refleja la elección de materiales locales?', ['Conocimiento del entorno', 'Desconocimiento de las plantas', 'Ausencia de técnicas', 'Desconexión del territorio']]
                    ]),
                tema('pintores-guyaneses', 'Pintores guyaneses: Aubrey Williams y Philip Moore', '🖼️', ['Aubrey Williams', 'Philip Moore (artist)'],
                    'Aubrey Williams nació en Georgetown en 1926 y combinó referencias caribeñas e indígenas con lenguajes modernos de pintura.',
                    [
                        'El arte moderno de Guyana reúne artistas que exploraron memoria, paisaje e identidades caribeñas. Aubrey Williams (1926–1990), nacido en Georgetown, estudió agricultura y trabajó en el interior antes de dedicarse al arte. Su pintura abstracta integra colores intensos y referencias a culturas indígenas, al paisaje amazónico y a experiencias de su país.',
                        'Philip Moore (1921–2012), artista de la región de Corentyne, destacó por la escultura, el dibujo y su compromiso con la comunidad. Junto con otros creadores amplió la presencia de Guyana en el arte caribeño. Sus obras muestran cómo la creación contemporánea dialoga con tradiciones locales, religión, historia colonial y cambios sociales.'
                    ],
                    [
                        { e: '🎨', t: 'Aubrey Williams', d: 'Pintor abstracto inspirado por paisaje y culturas indígenas.' },
                        { e: '🗿', t: 'Philip Moore', d: 'Artista de Corentyne conocido por escultura y dibujo.' },
                        { e: '🌈', t: 'Abstracción', d: 'Color y forma expresan memoria y paisaje.' },
                        { e: '🌎', t: 'Arte caribeño', d: 'Artistas guyaneses dialogan con movimientos regionales.' }
                    ],
                    'Georgetown, National Gallery of Art (Castellani House), Corentyne',
                    [
                        ['¿En qué ciudad nació Aubrey Williams?', ['Georgetown', 'Londres', 'Nueva Delhi', 'Paramaribo']],
                        ['¿Qué forma artística destacó en Philip Moore?', ['Escultura', 'Ópera', 'Arquitectura gótica', 'Grabado japonés exclusivamente']],
                        ['¿Qué influyó en la pintura de Williams?', ['Paisaje y culturas indígenas', 'Escenas alpinas solamente', 'Arquitectura romana', 'Pintura de hielo ártico']],
                        ['¿Qué región se relaciona con Philip Moore?', ['Corentyne', 'Titicaca', 'Yucatán', 'Patagonia']]
                    ])
            ]
        },        {
            id: 'literatura', nombre: 'Literatura', icono: '📚', temas: [
                tema('wilson-harris', 'Wilson Harris y la novela guyanesa', '📖', ['Wilson Harris', 'Palace of the Peacock'],
                    'Wilson Harris publicó The Palace of the Peacock en 1960, primera novela de su ciclo conocido como la trilogía de Guyana.',
                    [
                        'Wilson Harris (1921–2018), nacido en New Amsterdam, trabajó como agrimensor en el interior de Guyana antes de convertirse en novelista y ensayista. Su experiencia de los ríos, bosques y sabanas nutrió una obra que explora huellas de la colonización, la memoria y el encuentro entre culturas.',
                        'The Palace of the Peacock, publicada en 1960, es la primera novela de una serie temprana que suele llamarse la trilogía de Guyana. Harris mezcla paisajes reconocibles con mito, sueño y símbolos; sus historias piden leer la historia colonial desde voces múltiples. Su escritura influyó en la literatura caribeña y en debates sobre identidad.'
                    ],
                    [
                        { e: '✍️', t: 'Wilson Harris', d: 'Novelista guyanés nacido en New Amsterdam en 1921.' },
                        { e: '🌳', t: 'Interior', d: 'Ríos y bosques conocidos en sus viajes nutren su ficción.' },
                        { e: '📘', t: '1960', d: 'Publicación de The Palace of the Peacock.' },
                        { e: '💭', t: 'Mito y memoria', d: 'Su novela mezcla historia, sueño y símbolos.' }
                    ],
                    'New Amsterdam, Georgetown, bibliotecas y espacios literarios guyaneses',
                    [
                        ['¿En qué año se publicó The Palace of the Peacock?', ['1960', '1838', '1970', '2001']],
                        ['¿Dónde nació Wilson Harris?', ['New Amsterdam', 'Georgetown', 'Linden', 'Lethem']],
                        ['¿Qué experiencia inspiró parte de su obra?', ['Viajes como agrimensor por el interior', 'Vida como marino en el Mediterráneo', 'Excavaciones en Roma', 'Viajes por los Andes']],
                        ['¿Qué combina su escritura?', ['Historia, mito y símbolos', 'Informes estadísticos solamente', 'Diálogos teatrales únicamente', 'Recetas sin narración']]
                    ]),
                tema('poesia-guyanesa', 'Poesía guyanesa: Grace Nichols, David Dabydeen y A. J. Seymour', '🪶', ['Grace Nichols', 'David Dabydeen', 'A. J. Seymour'],
                    'La revista literaria Kyk-Over-Al, fundada en 1945 y editada por A. J. Seymour, dio espacio a poesía del Caribe anglófono.',
                    [
                        'La poesía guyanesa del siglo XX ayudó a expresar la vida colonial, la diversidad cultural y la búsqueda de una voz nacional. A. J. Seymour editó Kyk-Over-Al, cuyo primer número apareció en 1945 y que conectó a escritores de Guyana y el Caribe. Martin Carter y otros poetas hicieron de la escritura un espacio de reflexión social.',
                        'En generaciones posteriores, Grace Nichols y David Dabydeen llevaron experiencias guyanesas a públicos internacionales. Nichols trabaja con ritmos y voces del Caribe, mientras Dabydeen escribe poesía, narrativa y ensayo sobre memoria, diáspora y migración. Estas obras muestran que la poesía local es un diálogo cambiante entre territorio, historia y desplazamiento.'
                    ],
                    [
                        { e: '📰', t: 'Kyk-Over-Al', d: 'Revista de literatura caribeña iniciada en 1945.' },
                        { e: '🪶', t: 'A. J. Seymour', d: 'Editor que impulsó la poesía guyanesa.' },
                        { e: '🌺', t: 'Grace Nichols', d: 'Poeta que trabaja con ritmos y voces caribeñas.' },
                        { e: '🧳', t: 'David Dabydeen', d: 'Su obra aborda memoria, diáspora y migración.' }
                    ],
                    'Georgetown, bibliotecas nacionales, University of Guyana',
                    [
                        ['¿En qué año apareció Kyk-Over-Al?', ['1945', '1763', '1833', '1966']],
                        ['¿Quién editó la revista Kyk-Over-Al?', ['A. J. Seymour', 'Cuffy', 'Philip Moore', 'Forbes Burnham']],
                        ['¿Qué poeta guyanesa explora voces y ritmos caribeños?', ['Grace Nichols', 'Emily Dickinson', 'Sor Juana Inés de la Cruz', 'Anna Ajmátova']],
                        ['¿Qué temas aparecen en la obra de David Dabydeen?', ['Memoria, diáspora y migración', 'Mitología nórdica solamente', 'Exploración espacial', 'La corte medieval francesa']]
                    ])
            ]
        },        {
            id: 'tradiciones', nombre: 'Tradiciones', icono: '🪅', temas: [
                tema('rodeo-rupununi', 'Rodeo de Rupununi y la sabana', '🐎', ['Guyana'],
                    'El rodeo de Rupununi se celebra tradicionalmente durante el fin de semana de Pascua en Lethem, al sur de Guyana.',
                    [
                        'Rupununi es una región de sabanas, ríos y comunidades indígenas y ganaderas en el interior guyanés. El rodeo de Lethem reúne a habitantes de Guyana y del norte de Brasil para celebrar habilidades ligadas al trabajo ganadero, entre ellas montar a caballo y manejar el ganado. Las destrezas de vaqueros locales forman parte de la cultura de la sabana.',
                        'El evento suele organizarse durante el fin de semana de Pascua y combina competencias, música, baile, comida y encuentro regional. Más que una demostración deportiva, expresa una relación histórica con la sabana y el ganado, además de una frontera cultural porosa entre comunidades. El rodeo también impulsa el turismo y depende de la participación local.'
                    ],
                    [
                        { e: '🌾', t: 'Rupununi', d: 'Amplia sabana del interior de Guyana.' },
                        { e: '🤠', t: 'Vaqueros', d: 'Destrezas ecuestres reflejan la vida ganadera local.' },
                        { e: '🐂', t: 'Rodeo', d: 'Competencias muestran el manejo tradicional del ganado.' },
                        { e: '🐣', t: 'Pascua', d: 'El encuentro de Lethem se organiza en esas fechas.' }
                    ],
                    'Lethem, sabana del Rupununi, río Takutu',
                    [
                        ['¿En qué localidad se organiza el rodeo de Rupununi?', ['Lethem', 'Georgetown', 'New Amsterdam', 'Bartica']],
                        ['¿En qué época suele celebrarse?', ['Fin de semana de Pascua', 'Mitad del invierno boreal', 'Navidad siempre', 'Primer día de septiembre']],
                        ['¿Qué actividad está ligada a las competencias?', ['Manejo del ganado y destrezas ecuestres', 'Carreras de trineos', 'Pesca en hielo', 'Esgrima medieval']],
                        ['¿Qué paisaje caracteriza a Rupununi?', ['Sabanas', 'Glaciares', 'Desierto polar', 'Bosques boreales']]
                    ]),
                tema('cricket', 'El críquet, pasión nacional', '🏏', ['West Indies Cricket Team'],
                    'En el críquet internacional, Guyana compite como parte del equipo de las Indias Occidentales junto a otras naciones caribeñas.',
                    [
                        'El críquet llegó a Guayana Británica bajo el dominio británico y se difundió por escuelas, clubes y comunidades. Con el tiempo pasó a ser uno de los deportes más populares del país. Se juega en patios y campos locales, además de competiciones organizadas, y reúne a personas de distintos orígenes en torno a equipos y torneos.',
                        'Guyana integra el sistema regional de críquet de las Indias Occidentales, que representa a varios territorios caribeños en partidos internacionales. En Georgetown, el terreno Bourda fue durante mucho tiempo escenario de encuentros destacados. Los jugadores guyaneses forman parte de una historia deportiva compartida con aficiones que cruzan fronteras nacionales.'
                    ],
                    [
                        { e: '🏏', t: 'Juego británico', d: 'El críquet se difundió durante la época colonial.' },
                        { e: '🏟️', t: 'Bourda', d: 'Histórico campo de críquet en Georgetown.' },
                        { e: '🏝️', t: 'Indias Occidentales', d: 'Guyana compite en el equipo regional caribeño.' },
                        { e: '🤝', t: 'Afición común', d: 'El deporte reúne comunidades y cruza fronteras.' }
                    ],
                    'Bourda, Georgetown, Providence National Stadium',
                    [
                        ['¿Qué deporte es popular en Guyana?', ['Críquet', 'Hockey sobre hielo', 'Esquí alpino', 'Sumo']],
                        ['¿Cómo participa Guyana en el críquet internacional?', ['Como parte de las Indias Occidentales', 'En la selección de India', 'En el equipo de Inglaterra', 'Como parte de Brasil']],
                        ['¿En qué ciudad está el campo Bourda?', ['Georgetown', 'Lethem', 'Bartica', 'Linden']],
                        ['¿Qué herencia contribuyó a difundir el críquet?', ['La británica', 'La inca', 'La otomana', 'La polinesia']]
                    ])
            ]
        },        {
            id: 'fiestas', nombre: 'Fiestas', icono: '🎉', temas: [
                tema('mashramani', 'Mashramani', '🎊', ['Mashramani'],
                    'Mashramani se celebra el 23 de febrero para conmemorar que Guyana se convirtió en república en 1970.',
                    [
                        'Mashramani, conocido popularmente como Mash, es la fiesta nacional de la república guyanesa. Se celebra el 23 de febrero, aniversario del paso a la República Cooperativa de Guyana en 1970 y fecha también asociada a la rebelión de Berbice. Su nombre suele explicarse como una palabra amerindia relacionada con una celebración posterior al trabajo comunitario.',
                        'En Georgetown y otras localidades hay desfiles, carrozas, música, disfraces, concursos y baile. Escuelas, grupos culturales y comunidades presentan expresiones distintas del país. La fiesta combina una ceremonia cívica moderna con formas festivas caribeñas, y su carácter inclusivo hace visible la diversidad de la sociedad guyanesa.'
                    ],
                    [
                        { e: '📅', t: '23 de febrero', d: 'Fecha anual de las celebraciones de Mashramani.' },
                        { e: '🏛️', t: 'República', d: 'Conmemora el cambio político de 1970.' },
                        { e: '🎭', t: 'Disfraces', d: 'Desfiles y vestuarios llenan las calles de color.' },
                        { e: '🎺', t: 'Música y carrozas', d: 'Grupos comunitarios desfilan con ritmos caribeños.' }
                    ],
                    'Georgetown, avenida de la República, Linden',
                    [
                        ['¿Qué día se celebra Mashramani?', ['23 de febrero', '26 de mayo', '14 de julio', '1 de noviembre']],
                        ['¿Qué acontecimiento conmemora?', ['La proclamación de la república en 1970', 'La llegada de los neerlandeses', 'La abolición británica de 1833', 'La publicación de una novela']],
                        ['¿Qué puede verse durante Mashramani?', ['Desfiles y carrozas', 'Competiciones de esquí', 'Barcos vikingos', 'Carreras de camellos']],
                        ['¿Cómo suele explicarse el nombre?', ['Celebración después del trabajo comunitario', 'Día de la independencia de India', 'Cosecha de trigo', 'Festival de la luna llena']]
                    ]),
                tema('phagwah-diwali', 'Phagwah y Diwali', '🪔', ['Holi', 'Diwali'],
                    'En Guyana, Phagwah y Diwali son fiestas hindúes de gran participación pública; Phagwah se conoce también como Holi.',
                    [
                        'Phagwah, la celebración guyanesa de Holi, anuncia la llegada de la primavera en el calendario hindú. Incluye cantos, reuniones, polvos de colores y agua, con los que participantes se saludan y juegan. Aunque tiene raíces religiosas del sur de Asia, en Guyana la fiesta reúne a vecinos de diferentes comunidades en espacios públicos.',
                        'Diwali, el festival hindú de las luces, suele celebrarse con lámparas de arcilla, luces decorativas, oraciones y reuniones familiares. Su fecha cambia cada año porque sigue un calendario lunisolar. Phagwah y Diwali forman parte de la vida nacional junto con fiestas cristianas y musulmanas; su reconocimiento muestra el pluralismo religioso.'
                    ],
                    [
                        { e: '🌈', t: 'Phagwah', d: 'Fiesta de colores conocida también como Holi.' },
                        { e: '🪔', t: 'Diwali', d: 'Celebración de luces y reuniones familiares.' },
                        { e: '🗓️', t: 'Calendario móvil', d: 'Diwali cambia de fecha según el calendario lunisolar.' },
                        { e: '🤝', t: 'Celebración compartida', d: 'Personas de varias comunidades participan en las fiestas.' }
                    ],
                    'Georgetown, mandires hindúes, comunidades de Berbice y Essequibo',
                    [
                        ['¿Qué otro nombre recibe Phagwah?', ['Holi', 'Navidad', 'Eid al-Fitr', 'Hanukkah']],
                        ['¿Qué símbolo caracteriza a Diwali?', ['Lámparas y luces', 'Máscaras venecianas', 'Trineos', 'Faros marítimos']],
                        ['¿Por qué cambia la fecha de Diwali?', ['Sigue un calendario lunisolar', 'Se fija siempre el 23 de febrero', 'Depende de las mareas', 'Se celebra cada cuatro años']],
                        ['¿Qué representan estas festividades en Guyana?', ['Tradiciones hindúes celebradas públicamente', 'La desaparición de la diversidad', 'La independencia de 1966', 'El inicio del año escolar']]
                    ])
            ]
        },        {
            id: 'vestimenta', nombre: 'Vestimenta típica', icono: '👗', temas: [
                tema('traje-indoguyanes', 'Sari, shalwar y vestimenta indoguyanesa', '👘', ['Sari', 'Shalwar kameez', 'Indo-Guyanese'],
                    'El sari y el shalwar kameez son prendas surasiáticas que muchas familias indoguyanesas usan en fiestas y bodas.',
                    [
                        'La vestimenta indoguyanesa refleja vínculos históricos con India y la adaptación de esas tradiciones a una sociedad caribeña. El sari es una pieza larga de tela que se drapea alrededor del cuerpo; el shalwar kameez combina pantalón holgado con túnica. Existen numerosos estilos, telas y maneras de vestir, no un traje único.',
                        'En bodas, Diwali, Phagwah y otras ocasiones, mujeres y hombres pueden elegir atuendos festivos de diversos estilos; algunas prendas se usan a diario y otras en ceremonias. Los colores, bordados y accesorios dependen de preferencias familiares y práctica religiosa. La ropa expresa pertenencia y elección personal, pero no define a toda una comunidad.'
                    ],
                    [
                        { e: '🧵', t: 'Sari', d: 'Tela larga que se drapea de distintas maneras.' },
                        { e: '👚', t: 'Shalwar kameez', d: 'Conjunto de pantalón holgado y túnica.' },
                        { e: '💍', t: 'Celebraciones', d: 'Hay atuendos festivos en bodas y fiestas religiosas.' },
                        { e: '🌈', t: 'Estilos diversos', d: 'Telas, colores y accesorios varían entre familias.' }
                    ],
                    'Georgetown, templos hindúes, celebraciones de Phagwah y Diwali',
                    [
                        ['¿Qué es un sari?', ['Una tela larga que se drapea', 'Un sombrero de plumas', 'Una bota de cuero', 'Un instrumento musical']],
                        ['¿Qué prendas forman el shalwar kameez?', ['Pantalón holgado y túnica', 'Falda y casco', 'Abrigo y botas de nieve', 'Toga y sandalias romanas']],
                        ['¿En qué ocasiones se usan atuendos festivos?', ['Bodas y celebraciones religiosas', 'Solo en partidos de críquet', 'Únicamente en labores agrícolas', 'Exclusivamente en invierno']],
                        ['¿Qué recordar sobre estas prendas?', ['Hay diversos estilos, no un único traje uniforme', 'Todas las personas las usan a diario', 'Solo existe un color permitido', 'Son exclusivas de una familia']]
                    ]),
                tema('traje-amerindio-afro', 'Vestimenta amerindia y afroguyanesa', '🧶', ['Indigenous peoples in Guyana', 'Afro-Guyanese people'],
                    'No existe un único traje amerindio o afroguyanés: prendas y adornos cambian según comunidad, ocasión y elección personal.',
                    [
                        'Las comunidades indígenas conservan formas de vestir y adornarse relacionadas con materiales locales, el clima y la vida comunitaria. En algunas celebraciones se usan tejidos, bandas, adornos de cuentas o plumas, pero cada nación tiene historias y preferencias propias. Una pieza ceremonial no representa el atuendo diario de todas las personas indígenas.',
                        'La población afroguyanesa tiene estilos cotidianos y festivos diversos, formados en una historia de esclavitud, emancipación y vida comunitaria. En ocasiones culturales pueden aparecer colores vivos, pañuelos, vestidos o elementos de masquerade, pero no hay un uniforme único que represente a todas las familias. La ropa comunica memoria e identidad sin reducir una comunidad a estereotipos.'
                    ],
                    [
                        { e: '🪶', t: 'Diversidad indígena', d: 'Adornos y prendas varían según nación y ocasión.' },
                        { e: '📿', t: 'Materiales locales', d: 'Cuentas y fibras aparecen en algunas expresiones festivas.' },
                        { e: '🎭', t: 'Masquerade', d: 'El vestuario escénico acompaña baile y música afro-guyaneses.' },
                        { e: '🧵', t: 'Identidad propia', d: 'La ropa expresa memoria sin crear un uniforme común.' }
                    ],
                    'Rupununi, comunidades del interior, Georgetown',
                    [
                        ['¿Existe un solo traje para todos los pueblos indígenas?', ['No, las prendas varían según comunidad y ocasión', 'Sí, es idéntico en todo Guyana', 'Sí, pero solo para la vida diaria', 'No existen prendas festivas']],
                        ['¿Qué puede aparecer en algunos adornos indígenas?', ['Cuentas y fibras', 'Plumas de pingüino antártico', 'Cristal de hielo', 'Escamas de dragón']],
                        ['¿Qué acompaña a veces la vestimenta de masquerade?', ['Baile y música', 'Esquí', 'Partido de polo', 'Desfile naval']],
                        ['¿Qué comunica la vestimenta tradicional?', ['Memoria e identidad diversas', 'Una cultura uniforme e inmutable', 'Ausencia de creatividad', 'Una única religión nacional']]
                    ])
            ]
        },        {
            id: 'monumentos', nombre: 'Monumentos', icono: '🗼', temas: [
                tema('kaieteur', 'Cataratas Kaieteur', '🌊', ['Kaieteur Falls', 'Kaieteur National Park'],
                    'Kaieteur cae 226 metros en un solo salto sobre el río Potaro; los saltos posteriores elevan su altura total a 251 metros.',
                    [
                        'Kaieteur Falls se encuentra sobre el río Potaro, en el interior boscoso de Guyana. La caída principal mide 226 metros hasta la primera ruptura; si se cuentan los rápidos y saltos inferiores, la altura total llega a 251 metros. Su combinación de altura y volumen de agua la convierte en una de las cascadas de un solo salto más poderosas del mundo.',
                        'Los pueblos indígenas de la región conocían las cataratas antes de la llegada de exploradores europeos. El geólogo británico Charles Barrington Brown las observó en 1870 y regresó para medirlas. Hoy el Parque Nacional Kaieteur protege el entorno, hogar de especies como el gallito de las rocas guayanés y la rana dorada, y recibe visitantes mediante vuelos y caminatas guiadas.'
                    ],
                    [
                        { e: '📏', t: '226 metros', d: 'Altura de la caída principal de Kaieteur.' },
                        { e: '🏞️', t: 'Río Potaro', d: 'La cascada se precipita sobre este río guyanés.' },
                        { e: '🧭', t: '1870', d: 'El geólogo Charles Barrington Brown la observó ese año.' },
                        { e: '🐸', t: 'Parque nacional', d: 'El entorno protege especies y bosque tropical.' }
                    ],
                    'Parque Nacional Kaieteur, río Potaro, Georgetown',
                    [
                        ['¿Cuál es la altura del salto principal de Kaieteur?', ['226 metros', '74 metros', '1.000 metros', '26 metros']],
                        ['¿En qué río se encuentran las cataratas?', ['Potaro', 'Támesis', 'Amazonas', 'Orinoco']],
                        ['¿En qué año las observó Charles Barrington Brown?', ['1870', '1763', '1966', '1838']],
                        ['¿Qué parque protege las cataratas?', ['Parque Nacional Kaieteur', 'Yellowstone', 'Tikal', 'Parque del Manu']]
                    ]),
                tema('georgetown', 'Georgetown: catedral de San Jorge y mercado Stabroek', '🏙️', ["St. George's Cathedral, Georgetown", 'Stabroek Market'],
                    'La catedral anglicana de San Jorge de Georgetown es una estructura de madera del siglo XIX; el mercado Stabroek se reconoce por su torre del reloj.',
                    [
                        'Georgetown, capital de Guyana, se desarrolló en la costa atlántica junto a la desembocadura del río Demerara. Su trazado conserva canales, avenidas arboladas y edificios de madera asociados a la época colonial. La catedral anglicana de San Jorge, consagrada en 1894, es célebre por su estructura de madera y su gran altura, y sigue siendo un hito urbano.',
                        'Stabroek Market es un concurrido mercado cubierto junto al Demerara, con estructura de hierro y una torre de reloj visible en el perfil de la ciudad. Allí se venden alimentos, ropa y productos cotidianos; el edificio es también un centro de encuentro y transporte. La catedral y el mercado muestran la arquitectura monumental y la vida diaria de Georgetown.'
                    ],
                    [
                        { e: '⛪', t: 'Catedral de San Jorge', d: 'Templo anglicano de madera consagrado en 1894.' },
                        { e: '🕰️', t: 'Torre del reloj', d: 'Elemento reconocible del mercado Stabroek.' },
                        { e: '🛍️', t: 'Mercado vivo', d: 'Sus puestos ofrecen productos de la vida cotidiana.' },
                        { e: '🌳', t: 'Capital costera', d: 'Canales y avenidas arboladas cruzan Georgetown.' }
                    ],
                    'Catedral de San Jorge, mercado Stabroek, Parlamento, Georgetown',
                    [
                        ['¿En qué ciudad están la catedral de San Jorge y Stabroek Market?', ['Georgetown', 'Lethem', 'Bartica', 'Linden']],
                        ['¿De qué material es célebre la catedral anglicana?', ['Madera', 'Mármol exclusivamente', 'Hielo', 'Adobe preincaico']],
                        ['¿Qué elemento caracteriza Stabroek Market?', ['Una torre de reloj', 'Una pirámide escalonada', 'Un faro romano', 'Una cúpula de cristal']],
                        ['¿En qué año fue consagrada la catedral de San Jorge?', ['1894', '1763', '1966', '1838']]
                    ])
            ]
        }
    ]
};