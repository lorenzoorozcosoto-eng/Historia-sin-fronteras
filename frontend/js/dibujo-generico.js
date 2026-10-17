// Ilustraciones automáticas para los países sin escenas propias: crea personajes con los colores de la bandera
// y arma 4 escenas por tema según la categoría (historia, cultura, gastronomía, música, etc.).
(() => {
    const D = window.Dibujo, I = window.DibujoItems, P = window.PAIS;
    if (!D || !I || !P) return;
    const { f, trazo } = D;
    const c1 = P.colores?.[0] || '#2e7be6', c2 = P.colores?.[1] || '#d8362f', c3 = P.colores?.[2] || '#f2c230';
    const piel = P.piel || 'media';
    const pieles = [piel, piel === 'clara' ? 'media' : 'clara', piel === 'oscura' ? 'morena' : 'oscura'];

    // personajes con los colores de la bandera
    Object.assign(D.ROLES, {
        g_h: { piel: pieles[0], pelo: '#2a1b12', peloT: 'corto', ropa: c1, pant: '#37425a', det: 'franja', pose: 'baja' },
        g_m: { piel: pieles[0], pelo: '#2a1b12', peloT: 'largo', ropa: c2, falda: c1, det: 'bordado' },
        g_h2: { piel: pieles[1], pelo: '#5a3a1a', peloT: 'corto', ropa: c2, pant: '#4a3a2c', det: 'botones' },
        g_m2: { piel: pieles[2], pelo: '#15100c', peloT: 'trenzas', ropa: c3, falda: c2, det: 'bordado' },
        g_viejo: { piel: pieles[1], pelo: '#e8e8e8', peloT: 'cano', ropa: '#6b5b4a', pant: '#4a3a2c', det: 'cuello', barba: true },
        g_rey: { piel: pieles[0], pelo: '#2a1b12', peloT: 'largo', ropa: c1, pant: c3, tocado: 'diadema', det: 'franja' },
        g_soldado: { piel: pieles[0], pelo: '#2a1b12', peloT: 'corto', ropa: c1, pant: '#e8e2cf', tocado: 'tricornio', det: 'botones' },
        g_cocinero: { piel: pieles[1], pelo: '#2a1b12', peloT: 'corto', ropa: '#fffaf0', pant: '#37425a', tocado: 'gorro_cocina', det: 'delantal', bigote: true },
        g_cocinera: { piel: pieles[0], pelo: '#15100c', peloT: 'trenzas', ropa: '#fffaf0', falda: c2, det: 'delantal' },
        g_musico: { piel: pieles[0], pelo: '#2a1b12', peloT: 'corto', ropa: c3, pant: '#2a2a33', tocado: 'cinta', det: 'franja', pose: 'sostiene' },
        g_baila: { piel: pieles[0], pelo: '#15100c', peloT: 'largo', ropa: '#fffaf0', falda: c2, det: 'encaje', flor: true, pose: 'abre' },
        g_baila2: { piel: pieles[1], pelo: '#2a1b12', peloT: 'corto', ropa: c1, pant: '#fffaf0', det: 'panuelo', pose: 'arriba' },
        g_artista: { piel: pieles[1], pelo: '#2a1b12', peloT: 'corto', ropa: '#4a8ad8', pant: '#37425a', tocado: 'boina', det: 'delantal', pose: 'señala' },
        g_escritor: { piel: pieles[1], pelo: '#2a1b12', peloT: 'corto', ropa: '#6b5b4a', pant: '#2f3548', det: 'cuello', lentes: true, pose: 'sostiene' },
        g_escritora: { piel: pieles[0], pelo: '#2a1b12', peloT: 'largo', ropa: '#8a3d63', falda: '#3a2f55', det: 'cuello', pose: 'sostiene' },
        g_tejedora: { piel: pieles[2], pelo: '#15100c', peloT: 'trenzas', ropa: '#fbf6ea', falda: c1, det: 'bordado', pose: 'sostiene' },
        g_guia: { piel: pieles[0], pelo: '#2a1b12', peloT: 'corto', ropa: '#3c6d3a', pant: '#4a3a2c', tocado: 'explorador', det: 'bandana', pose: 'señala' },
    });

    // bandera del país (imagen) como objeto de escena
    I.bandera_pais = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0V-92" stroke="#7a4f2a" stroke-width="3.4"/><image href="${P.banderaImg}" x="0" y="-92" width="58" height="38" preserveAspectRatio="none"/><rect x="0" y="-92" width="58" height="38" fill="none" stroke="#2a2a33" stroke-width="1.5"/></g>`;
    I.libros_g = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})">${[[-20, 34, c1], [-4, 42, c2], [12, 30, c3], [26, 38, '#6b5b4a']].map(([dx, h, c]) => `<rect x="${dx - 7}" y="${-h}" width="14" height="${h}" ${f(c)}/>`).join('')}</g>`;
    I.sol_g = (x, y, s) => I.sol(x, y, s, {});

    // plantillas por categoría: cada una devuelve 4 escenas
    const E = (alt, cielo, suelo, items, gente, delante) => ({ alt, cielo, suelo, items, gente, ...(delante ? { delante } : {}) });
    const plantillas = {
        historia: [
            (t) => [
                E(t, 'dia', 'tierra', [['montes', 200, 205, 1.1], ['choza', 330, 244, .85]], [['g_h', 110, 272, 1.1, { pose: 'señala' }], ['g_m2', 230, 274, 1]]),
                E(t, 'dia', 'pasto', [['piramide', 215, 226, .9], ['palmeras', 60, 238, .8]], [['g_rey', 130, 272, 1.1, { pose: 'arriba' }], ['g_h2', 300, 274, 1, { flip: 1 }]]),
                E(t, 'noche', 'tierra', [['luna', 330, 60, .8], ['fuego', 200, 258, 1.2]], [['g_h', 110, 274, 1.1], ['g_m', 290, 276, 1.05, { flip: 1 }]]),
                E(t, 'atardecer', 'pasto', [['montes', 200, 205, 1], ['bandera_pais', 330, 270, 1]], [['g_viejo', 140, 272, 1.1, { pose: 'señala' }], ['g_h2', 240, 276, 1]]),
            ],
            (t) => [
                E(t, 'dia', 'agua', [['barco', 160, 216, 1.2], ['montes', 330, 200, .6]], [['g_soldado', 320, 264, 1.05, { flip: 1, pose: 'señala' }]]),
                E(t, 'dia', 'pasto', [['castillo', 215, 226, 1]], [['g_rey', 110, 272, 1.1, { pose: 'arriba' }], ['g_soldado', 320, 276, 1, { flip: 1 }]]),
                E(t, 'humo', 'piedra', [['canon', 90, 262, 1.1], ['fuego', 330, 232, 1]], [['g_soldado', 170, 272, 1.1, { pose: 'arriba' }], ['g_soldado', 260, 274, 1.05, { flip: 1 }]]),
                E(t, 'dia', 'piedra', [['ciudad_colonial', 215, 214, .8], ['bandera_pais', 330, 270, .9]], [['g_viejo', 110, 272, 1.1, { pose: 'señala' }], ['g_m', 290, 276, 1, { flip: 1 }]]),
            ],
            (t) => [
                E(t, 'interior', 'ninguno', [['ventana', 70, 190, 1.1], ['ventana', 330, 190, 1.1]], [['g_h', 120, 262, 1.1, { pose: 'señala' }], ['g_h2', 290, 264, 1.05, { flip: 1 }]], [['mesa', 200, 288, 1.3, { w: 80 }], ['documento', 200, 246, 1.3]]),
                E(t, 'dia', 'calle', [['edificio', 300, 212, .9], ['bandera_pais', 80, 268, 1]], [['g_h2', 170, 274, 1.1, { pose: 'arriba' }], ['g_m', 240, 276, 1]]),
                E(t, 'dia', 'piedra', [['pancarta', 200, 240, 1.2, { texto: t.slice(0, 18).toUpperCase(), fs: 10 }]], [['g_h', 100, 272, 1.1, { pose: 'arriba' }], ['g_m2', 300, 274, 1, { flip: 1, pose: 'arriba' }]]),
                E(t, 'dia', 'pasto', [['montes', 200, 205, 1.1], ['bandera_pais', 300, 268, 1.1]], [['g_h', 110, 272, 1.1, { pose: 'arriba' }], ['nina', 190, 278, 1], ['g_m', 250, 274, 1.05]]),
            ],
        ],
        cultura: (t) => [
            E(t, 'dia', 'pasto', [['montes', 200, 205, 1.1], ['arbol', 330, 245, 1]], [['g_h', 90, 272, 1.1], ['g_m', 180, 274, 1.05], ['g_h2', 270, 274, 1.05, { flip: 1 }]]),
            E(t, 'dia', 'calle', [['ciudad_colonial', 215, 214, .8], ['nubes', 80, 60, .9]], [['g_m2', 120, 276, 1.05, { pose: 'señala' }], ['nino', 300, 278, 1, { flip: 1, pose: 'arriba' }]]),
            E(t, 'dia', 'piedra', [['edificio', 215, 214, 1], ['bandera_pais', 80, 268, .9]], [['g_h', 120, 274, 1.1], ['g_viejo', 290, 276, 1, { flip: 1 }]]),
            E(t, 'atardecer', 'pasto', [['palmeras', 340, 238, 1], ['sol', 90, 70, 1]], [['nina', 130, 278, 1.05, { pose: 'arriba' }], ['g_m', 220, 274, 1.05], ['nino', 290, 278, 1, { flip: 1 }]]),
        ],
        gastronomia: (t) => [
            E(t, 'cocina', 'ninguno', [['cazuela', 200, 252, 2]], [['g_cocinera', 80, 270, 1.05, { pose: 'señala' }], ['nino', 325, 276, 1, { flip: 1, pose: 'arriba' }]]),
            E(t, 'cocina', 'ninguno', [['frutas', 130, 254, 1.8], ['pan_muerto', 290, 254, 1.6]], [['g_cocinero', 210, 274, 1.05, { pose: 'sostiene' }]]),
            E(t, 'dia', 'calle', [['puesto', 200, 232, 1.2]], [['g_m', 110, 276, 1.05, { pose: 'sostiene' }], ['g_h2', 300, 276, 1, { flip: 1 }]]),
            E(t, 'interior', 'ninguno', [['ventana', 330, 190, 1.1]], [['g_m', 110, 262, 1.1], ['nina', 190, 270, 1], ['g_h', 255, 266, 1.05]], [['mesa', 200, 290, 1.6, { w: 90 }], ['cazuela', 200, 258, 1.1]]),
        ],
        musica: (t) => [
            E(t, 'noche', 'piso', [['escenario', 200, 240, 1.2], ['reflector', 70, 140, 1]], [['g_musico', 200, 262, 1.2]]),
            E(t, 'dia', 'pasto', [['tambor', 110, 268, 1.2], ['musica', 300, 120, 1.4]], [['g_musico', 210, 272, 1.1, { pose: 'sostiene', obj: 'guitarra' }]]),
            E(t, 'atardecer', 'calle', [['arpa', 90, 266, 1.2], ['musica', 310, 120, 1.3]], [['g_musico', 180, 272, 1.1], ['g_m', 260, 274, 1.05, { flip: 1, pose: 'arriba' }]]),
            E(t, 'noche', 'piso', [['escenario', 200, 240, 1.3], ['reflector', 330, 140, 1]], [['g_m', 140, 262, 1.1, { pose: 'arriba' }], ['g_musico', 260, 264, 1.1, { flip: 1 }]]),
        ],
        bailes: (t) => [
            E(t, 'atardecer', 'pasto', [['montes', 200, 205, 1]], [['g_baila2', 140, 270, 1.15], ['g_baila', 265, 270, 1.15, { flip: 1 }]]),
            E(t, 'dia', 'piedra', [['papel_picado', 200, 90, 1.2]], [['g_baila', 120, 274, 1.1], ['g_baila2', 220, 274, 1.1, { flip: 1 }], ['g_m2', 310, 276, 1, { flip: 1, pose: 'arriba' }]]),
            E(t, 'noche', 'piso', [['escenario', 200, 240, 1.3], ['musica', 330, 130, 1.3]], [['g_baila', 160, 262, 1.15], ['g_baila2', 250, 262, 1.15, { flip: 1 }]]),
            E(t, 'dia', 'calle', [['tambor', 90, 268, 1.2], ['papel_picado', 240, 90, 1]], [['nina', 160, 278, 1.1, { pose: 'abre' }], ['nino', 260, 278, 1.1, { flip: 1, pose: 'arriba' }]]),
        ],
        arte: (t) => [
            E(t, 'interior', 'ninguno', [['caballete', 120, 262, 1.2], ['ventana', 330, 190, 1.1]], [['g_artista', 215, 264, 1.15]]),
            E(t, 'interior', 'ninguno', [['cuadro', 130, 215, 1.4], ['cuadro', 270, 215, 1.2]], [['nina', 200, 274, 1.05, { pose: 'señala' }]]),
            E(t, 'dia', 'piedra', [['mural', 210, 220, 1.2]], [['g_artista', 90, 274, 1.1], ['g_m', 320, 276, 1, { flip: 1 }]]),
            E(t, 'dia', 'piedra', [['edificio', 210, 214, 1.1]], [['nino', 90, 278, 1.05, { pose: 'arriba' }], ['g_artista', 320, 276, 1, { flip: 1, pose: 'señala' }]]),
        ],
        literatura: (t) => [
            E(t, 'interior', 'ninguno', [['ventana', 70, 190, 1.1], ['libros_g', 330, 266, 1.2]], [['g_escritor', 200, 262, 1.15]], [['escritorio', 200, 290, 1.1]]),
            E(t, 'interior', 'ninguno', [['estante', 90, 250, 1.1], ['estante', 330, 250, 1.1]], [['g_escritora', 180, 268, 1.1], ['nina', 255, 274, 1.05, { pose: 'sostiene' }]]),
            E(t, 'noche', 'piso', [['luna', 330, 60, .8], ['libro', 120, 262, 1.5]], [['g_escritor', 250, 270, 1.1, { pose: 'señala' }]]),
            E(t, 'dia', 'pasto', [['arbol', 330, 245, 1.1]], [['nino', 130, 276, 1.05, { pose: 'sostiene' }], ['g_escritora', 220, 272, 1.1]]),
        ],
        tradiciones: (t) => [
            E(t, 'noche', 'tierra', [['fuego', 200, 258, 1.3], ['luna', 330, 60, .8]], [['g_viejo', 110, 272, 1.1, { pose: 'sostiene' }], ['g_m', 290, 274, 1.05, { flip: 1 }]]),
            E(t, 'dia', 'pasto', [['choza', 330, 244, .9], ['arbol', 70, 245, 1]], [['g_h', 140, 272, 1.1, { pose: 'señala' }], ['nino', 230, 278, 1]]),
            E(t, 'atardecer', 'tierra', [['montes', 200, 205, 1.1], ['cazuela', 330, 266, 1]], [['g_m2', 120, 274, 1.1, { pose: 'sostiene' }], ['g_h2', 230, 274, 1.05]]),
            E(t, 'dia', 'piedra', [['edificio', 215, 214, .9]], [['g_viejo', 110, 272, 1.1], ['nina', 200, 278, 1.05, { pose: 'arriba' }], ['g_m', 290, 274, 1.05, { flip: 1 }]]),
        ],
        fiestas: (t) => [
            E(t, 'noche', 'calle', [['fuegos', 200, 90, 1.5], ['papel_picado', 200, 70, 1.1]], [['g_h', 100, 274, 1.1, { pose: 'arriba' }], ['g_m', 200, 276, 1.05, { pose: 'abre' }], ['g_h2', 300, 274, 1.05, { flip: 1, pose: 'arriba' }]]),
            E(t, 'dia', 'calle', [['papel_picado', 200, 90, 1.3], ['edificio', 330, 210, .7]], [['g_baila', 130, 274, 1.1], ['g_baila2', 230, 276, 1.1, { flip: 1 }]]),
            E(t, 'dia', 'piedra', [['puesto', 90, 240, 1], ['bandera_pais', 330, 268, 1]], [['nina', 200, 278, 1.05, { pose: 'arriba' }], ['nino', 270, 278, 1.05]]),
            E(t, 'noche', 'calle', [['fuegos', 200, 90, 1.6], ['luna', 70, 60, .7]], [['g_m', 130, 276, 1.05, { pose: 'arriba' }], ['nino', 230, 278, 1, { pose: 'arriba' }], ['g_h', 310, 276, 1.05, { flip: 1 }]]),
        ],
        vestimenta: (t) => [
            E(t, 'dia', 'pasto', [['montes', 200, 205, 1]], [['g_m', 130, 272, 1.2, { pose: 'abre' }], ['g_h', 260, 272, 1.2, { flip: 1 }]]),
            E(t, 'interior', 'ninguno', [['telar', 130, 262, 1.4], ['ventana', 330, 190, 1.1]], [['g_tejedora', 250, 270, 1.15]]),
            E(t, 'dia', 'calle', [['mostrador', 150, 256, 1.2], ['huipil', 120, 238, 1]], [['g_m2', 300, 274, 1.05, { flip: 1 }]]),
            E(t, 'dia', 'piedra', [['papel_picado', 200, 90, 1.1]], [['g_m', 100, 276, 1.05], ['g_h', 190, 274, 1.05], ['g_m2', 280, 276, 1.05, { flip: 1 }]]),
        ],
        monumentos: (t) => [
            E(t, 'dia', 'piedra', [['edificio', 215, 214, 1.2]], [['g_guia', 90, 274, 1.1, { pose: 'señala' }], ['nina', 320, 278, 1, { flip: 1, pose: 'arriba' }]]),
            E(t, 'dia', 'pasto', [['montes', 200, 205, 1.1], ['castillo', 215, 232, .9]], [['g_guia', 100, 274, 1.1, { pose: 'señala' }]]),
            E(t, 'atardecer', 'piedra', [['catedral', 215, 214, 1], ['palmeras', 340, 238, .8]], [['nino', 100, 278, 1.05, { pose: 'arriba' }], ['g_m', 320, 276, 1, { flip: 1 }]]),
            E(t, 'dia', 'pasto', [['columna_angel', 120, 262, 1.2], ['bandera_pais', 320, 268, 1]], [['g_guia', 220, 274, 1.1, { pose: 'señala' }]]),
        ],
    };

    // asigna escenas a cada tema
    const V = window.VINETAS = window.VINETAS || {};
    let hist = 0;
    P.categorias.forEach((cat) => cat.temas.forEach((t) => {
        if (V[t.id]) return;
        const pl = plantillas[cat.id] || plantillas.cultura;
        V[t.id] = Array.isArray(pl) ? pl[Math.min(hist++, pl.length - 1)](t.titulo) : pl(t.titulo);
    }));
})();
