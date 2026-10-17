// Motor de ilustración para las historietas: dibuja escenas y personajes en SVG (estilo caricatura plana).
// Uso: Dibujo.escena({ cielo, suelo, items:[[nombre,x,y,escala,opciones]], gente:[[rol,x,y,escala,opciones]] }) → SVG
// Cada viñeta mide 400 × 300. El suelo empieza en y≈200. Los pies de los personajes se colocan hacia y≈250.

(() => {
    const T = '#3b2a1c'; // color del contorno
    const trazo = `stroke="${T}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"`;
    const f = (c, extra = '') => `fill="${c}" ${trazo} ${extra}`;
    let idUnico = 0;

    // ---------- Cielos y suelos ----------
    const cielos = {
        dia: (id) => `<defs><linearGradient id="c${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5db7f2"/><stop offset="1" stop-color="#dff4ff"/></linearGradient></defs><rect width="400" height="300" fill="url(#c${id})"/>`,
        atardecer: (id) => `<defs><linearGradient id="c${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6b5bc7"/><stop offset=".55" stop-color="#ff9a5a"/><stop offset="1" stop-color="#ffe0a3"/></linearGradient></defs><rect width="400" height="300" fill="url(#c${id})"/>`,
        noche: (id) => `<defs><linearGradient id="c${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0a1538"/><stop offset="1" stop-color="#34478f"/></linearGradient></defs><rect width="400" height="300" fill="url(#c${id})"/>` +
            [[30, 30], [80, 70], [120, 20], [170, 55], [230, 25], [280, 75], [330, 35], [370, 80], [60, 110], [200, 95], [310, 120], [15, 85]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${i % 3 ? 1.4 : 2.2}" fill="#fff7c2"/>`).join(''),
        interior: () => `<rect width="400" height="300" fill="#ecd9b8"/><rect y="215" width="400" height="85" fill="#b5835a"/><path d="M0 215H400" stroke="${T}" stroke-width="2"/>`,
        cocina: () => `<rect width="400" height="300" fill="#f6dcaa"/><rect y="40" width="400" height="12" fill="#d9a066"/><rect y="215" width="400" height="85" fill="#c98f5c"/><path d="M0 215H400" stroke="${T}" stroke-width="2"/>`,
        gris: () => `<rect width="400" height="300" fill="#c9ced6"/>`,
        humo: (id) => `<defs><linearGradient id="c${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a4a5e"/><stop offset="1" stop-color="#e88a4a"/></linearGradient></defs><rect width="400" height="300" fill="url(#c${id})"/>`,
    };

    const suelos = {
        pasto: () => `<rect y="200" width="400" height="100" fill="#6dbb5a"/><path d="M0 200Q100 190 200 200T400 198V215H0Z" fill="#58a449"/><path d="M0 200H400" stroke="${T}" stroke-width="2"/>`,
        tierra: () => `<rect y="200" width="400" height="100" fill="#c9965d"/><path d="M0 200Q100 192 200 201T400 198V214H0Z" fill="#b2814d"/><path d="M0 200H400" stroke="${T}" stroke-width="2"/>`,
        arena: () => `<rect y="200" width="400" height="100" fill="#efd89d"/><path d="M0 200Q120 190 220 203T400 197V212H0Z" fill="#e0c37c"/><path d="M0 200H400" stroke="${T}" stroke-width="2"/>`,
        agua: () => `<rect y="190" width="400" height="110" fill="#3f9fd9"/>${[210, 235, 262, 285].map((y, i) => `<path d="M${(i % 2) * 20} ${y}q20 -8 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" fill="none" stroke="#bfe8ff" stroke-width="2"/>`).join('')}`,
        piso: () => `<rect y="215" width="400" height="85" fill="#b5835a"/><path d="M0 215H400" stroke="${T}" stroke-width="2"/>`,
        piedra: () => `<rect y="205" width="400" height="95" fill="#b3aca0"/>${[0, 1, 2, 3].map((i) => `<path d="M0 ${220 + i * 22}H400" stroke="#8e877b" stroke-width="2"/>`).join('')}<path d="M0 205H400" stroke="${T}" stroke-width="2"/>`,
        calle: () => `<rect y="205" width="400" height="95" fill="#8c8f96"/><path d="M0 250H400" stroke="#f5e27a" stroke-width="3" stroke-dasharray="22 14"/><path d="M0 205H400" stroke="${T}" stroke-width="2"/>`,
        ninguno: () => '',
    };

    // ---------- Personajes ----------
    const PIEL = { clara: '#f3c9a0', media: '#d9a06c', morena: '#b9794a', oscura: '#7b4a2b' };
    const ROLES = {
        nino: { piel: 'media', pelo: '#2a1b12', peloT: 'corto', ropa: '#2e7be6', pant: '#37425a', gorro: 'explorador', mochila: true },
        nina: { piel: 'media', pelo: '#2a1b12', peloT: 'trenzas', ropa: '#e8467c', pant: '#37425a', falda: '#7a4fc9', gorro: 'explorador', mochila: true },
        guerrero: { piel: 'morena', pelo: '#15100c', peloT: 'largo', ropa: '#d9a521', pant: '#c4432e', tocado: 'plumas', det: 'franja', pose: 'baja', obj: 'lanza', taparrabo: true },
        sacerdote: { piel: 'morena', pelo: '#15100c', peloT: 'largo', ropa: '#f2f2f2', pant: '#f2f2f2', det: 'franja', tocado: 'diadema' },
        rey_maya: { piel: 'morena', pelo: '#15100c', peloT: 'largo', ropa: '#1fa37a', pant: '#d9a521', tocado: 'maya', det: 'franja' },
        astronomo: { piel: 'morena', pelo: '#15100c', peloT: 'largo', ropa: '#f4efe2', pant: '#f4efe2', tocado: 'diadema', det: 'franja' },
        tlaxcalteca: { piel: 'morena', pelo: '#15100c', peloT: 'largo', ropa: '#ffffff', pant: '#e2483a', tocado: 'diadema', det: 'franja' },
        cuauhtemoc: { piel: 'morena', pelo: '#15100c', peloT: 'largo', ropa: '#0f9d8a', pant: '#d9a521', tocado: 'plumas', det: 'franja', obj: 'escudo' },
        conquistador: { piel: 'clara', pelo: '#5a3a1a', peloT: 'corto', ropa: '#a9afb8', pant: '#8c4a2f', tocado: 'casco', barba: true, det: 'armadura', obj: 'espada' },
        campesino: { piel: 'media', pelo: '#2a1b12', peloT: 'corto', ropa: '#f7f3e8', pant: '#f7f3e8', tocado: 'paja', bigote: true, det: 'bandana' },
        campesina: { piel: 'media', pelo: '#2a1b12', peloT: 'trenzas', ropa: '#f7f3e8', falda: '#c4432e', tocado: 'ninguno', det: 'bordado', rebozo: '#3a86c8' },
        mujer_huipil: { piel: 'morena', pelo: '#15100c', peloT: 'trenzas', ropa: '#fbf6ea', falda: '#2d5aa8', det: 'bordado' },
        cura: { piel: 'media', pelo: '#e8e8e8', peloT: 'cano', ropa: '#1d1d24', pant: '#1d1d24', det: 'sotana' },
        insurgente: { piel: 'media', pelo: '#2a1b12', peloT: 'corto', ropa: '#2b4a8a', pant: '#e8e2cf', tocado: 'tricornio', bigote: true, det: 'botones' },
        soldado: { piel: 'media', pelo: '#2a1b12', peloT: 'corto', ropa: '#27613b', pant: '#e8e2cf', tocado: 'tricornio', det: 'botones' },
        revolucionario: { piel: 'media', pelo: '#2a1b12', peloT: 'corto', ropa: '#efe7d2', pant: '#efe7d2', tocado: 'sombrerote', bigote: true, det: 'bandolera' },
        soldadera: { piel: 'media', pelo: '#2a1b12', peloT: 'trenzas', ropa: '#e6d8b0', falda: '#9a3b2c', rebozo: '#4a6fa5', tocado: 'ninguno', det: 'bandolera' },
        charro: { piel: 'media', pelo: '#2a1b12', peloT: 'corto', ropa: '#17181d', pant: '#17181d', tocado: 'charro', bigote: true, det: 'botonadura' },
        china: { piel: 'media', pelo: '#15100c', peloT: 'trenzas', ropa: '#fffaf0', falda: '#d8362f', tocado: 'ninguno', det: 'listones', rebozo: '#2f9d62' },
        mariachi: { piel: 'media', pelo: '#2a1b12', peloT: 'corto', ropa: '#1b1d26', pant: '#1b1d26', tocado: 'charro', bigote: true, det: 'botonadura', moño: '#d8362f' },
        jarocho: { piel: 'media', pelo: '#2a1b12', peloT: 'corto', ropa: '#ffffff', pant: '#ffffff', tocado: 'paja', det: 'panuelo' },
        jarocha: { piel: 'media', pelo: '#2a1b12', peloT: 'trenzas', ropa: '#ffffff', falda: '#ffffff', tocado: 'ninguno', det: 'encaje', rebozo: '#f3d8d8', flor: true },
        monja: { piel: 'clara', pelo: '#2a1b12', peloT: 'calvo', ropa: '#2b2b33', falda: '#2b2b33', tocado: 'velo', det: 'sotana' },
        artista: { piel: 'media', pelo: '#2a1b12', peloT: 'corto', ropa: '#4a8ad8', pant: '#37425a', tocado: 'boina', det: 'delantal', bigote: true },
        frida: { piel: 'media', pelo: '#15100c', peloT: 'trenzas', ropa: '#d8362f', falda: '#f0c24b', tocado: 'flores', ceja: true, det: 'bordado', rebozo: '#3a8f5b' },
        catrina: { piel: 'calavera', pelo: '#15100c', peloT: 'largo', ropa: '#4a2a63', falda: '#4a2a63', tocado: 'catrina', det: 'encaje' },
        escritor: { piel: 'media', pelo: '#2a1b12', peloT: 'corto', ropa: '#6b5b4a', pant: '#2f3548', det: 'cuello', lentes: true },
        escritora: { piel: 'media', pelo: '#2a1b12', peloT: 'largo', ropa: '#8a3d63', falda: '#3a2f55', det: 'cuello' },
        cocinera: { piel: 'media', pelo: '#15100c', peloT: 'trenzas', ropa: '#fffaf0', falda: '#d94f6b', tocado: 'ninguno', det: 'delantal' },
        taquero: { piel: 'media', pelo: '#2a1b12', peloT: 'corto', ropa: '#fffaf0', pant: '#37425a', tocado: 'gorro_cocina', det: 'delantal', bigote: true },
        voladora: { piel: 'morena', pelo: '#15100c', peloT: 'largo', ropa: '#d8362f', pant: '#ffffff', tocado: 'cono', det: 'franja' },
        bailarina_pluma: { piel: 'morena', pelo: '#15100c', peloT: 'trenzas', ropa: '#fffaf0', falda: '#d8362f', tocado: 'plumas', det: 'bordado' },
        bailarina: { piel: 'media', pelo: '#15100c', peloT: 'trenzas', ropa: '#fffaf0', falda: '#e89a2c', tocado: 'ninguno', det: 'bordado', flor: true },
        tehuana: { piel: 'morena', pelo: '#15100c', peloT: 'trenzas', ropa: '#e8467c', falda: '#2d6fc4', tocado: 'resplandor', det: 'bordado' },
        corredor: { piel: 'morena', pelo: '#15100c', peloT: 'largo', ropa: '#f2eadb', pant: '#d9ceb9', tocado: 'cinta', det: 'franja', pose: 'corre' },
        tejedora: { piel: 'morena', pelo: '#15100c', peloT: 'trenzas', ropa: '#fbf6ea', falda: '#8a2d3c', det: 'bordado', pose: 'sostiene' },
        mestiza: { piel: 'media', pelo: '#2a1b12', peloT: 'largo', ropa: '#c9573f', falda: '#a9d3a2', det: 'bordado' },
        africano: { piel: 'oscura', pelo: '#15100c', peloT: 'corto', ropa: '#f1c24b', pant: '#f1ecd9', det: 'franja' },
        virrey: { piel: 'clara', pelo: '#e8e8e8', peloT: 'cano', ropa: '#7b1f3a', pant: '#2a1f2f', tocado: 'ninguno', det: 'botones', barba: true },
        dama: { piel: 'clara', pelo: '#3a2517', peloT: 'largo', ropa: '#7a3d8c', falda: '#7a3d8c', det: 'encaje' },
        pintora: { piel: 'media', pelo: '#2a1b12', peloT: 'trenzas', ropa: '#4a8ad8', falda: '#e8d2a0', tocado: 'ninguno', det: 'delantal' },
        charra: { piel: 'media', pelo: '#15100c', peloT: 'trenzas', ropa: '#fffaf0', falda: '#d8362f', tocado: 'charro', det: 'listones' },
        anciano: { piel: 'morena', pelo: '#eaeaea', peloT: 'cano', ropa: '#f2eadb', pant: '#f2eadb', tocado: 'paja', det: 'bandana', barba: true },
    };

    function persona(rol, x, y, s = 1, o = {}) {
        const r = { ...(ROLES[rol] || ROLES.nino), ...o };
        const piel = r.piel === 'calavera' ? '#f7f3ea' : (PIEL[r.piel] || r.piel);
        const flip = r.flip ? -1 : 1;
        const pose = r.pose || 'baja';
        const manga = r.ropa;
        let g = '';

        // piernas / falda
        if (r.falda) {
            g += `<path d="M-17 -44 L-31 -6 Q0 2 31 -6 L17 -44Z" ${f(r.falda)}/>`;
            g += `<path d="M-22 -22 Q0 -14 22 -22" fill="none" stroke="#ffffff55" stroke-width="3"/>`;
            g += `<ellipse cx="-9" cy="-1" rx="8" ry="4" ${f('#3a2a20')}/><ellipse cx="9" cy="-1" rx="8" ry="4" ${f('#3a2a20')}/>`;
        } else if (pose === 'corre') {
            g += `<path d="M-6 -44 L-26 -10 L-18 -2" fill="none" stroke="${T}" stroke-width="14" stroke-linecap="round"/><path d="M-6 -44 L-26 -10 L-18 -2" fill="none" stroke="${r.pant}" stroke-width="10" stroke-linecap="round"/>`;
            g += `<path d="M6 -44 L22 -22 L36 -6" fill="none" stroke="${T}" stroke-width="14" stroke-linecap="round"/><path d="M6 -44 L22 -22 L36 -6" fill="none" stroke="${r.pant}" stroke-width="10" stroke-linecap="round"/>`;
        } else {
            g += `<rect x="-14" y="-46" width="11" height="42" rx="4" ${f(r.pant)}/><rect x="3" y="-46" width="11" height="42" rx="4" ${f(r.pant)}/>`;
            g += `<ellipse cx="-9" cy="-2" rx="9" ry="4.5" ${f('#4a3424')}/><ellipse cx="9" cy="-2" rx="9" ry="4.5" ${f('#4a3424')}/>`;
            if (r.taparrabo) g += `<path d="M-14 -46 L-12 -22 L0 -16 L12 -22 L14 -46Z" ${f(r.ropa === '#d9a521' ? '#c4432e' : '#c4432e')}/>`;
        }

        // mochila (niños exploradores)
        if (r.mochila) g += `<rect x="-24" y="-88" width="14" height="30" rx="5" ${f('#d96a1e')}/>`;

        // torso
        g += `<path d="M-18 -90 Q0 -96 18 -90 L16 -42 Q0 -38 -16 -42Z" ${f(r.ropa)}/>`;
        if (r.det === 'armadura') g += `<path d="M-18 -90 Q0 -96 18 -90 L16 -42 Q0 -38 -16 -42Z" fill="#c9d0da" ${trazo}/><path d="M-12 -80H12M-12 -66H12M-12 -52H12" stroke="#7d8696" stroke-width="2"/>`;
        if (r.det === 'sotana') g += `<path d="M-18 -90 Q0 -96 18 -90 L24 -6 Q0 2 -24 -6Z" ${f(r.ropa)}/><rect x="-5" y="-88" width="10" height="14" fill="#fff" ${trazo}/>`;
        if (r.det === 'bordado') g += `<path d="M-16 -48 l4 -6 l4 6 l4 -6 l4 6 l4 -6 l4 6 l4 -6 l4 6" fill="none" stroke="#d8362f" stroke-width="3"/><circle cx="0" cy="-84" r="5" fill="#d8362f" stroke="${T}" stroke-width="1.5"/>`;
        if (r.det === 'franja') g += `<path d="M-17 -64 L17 -64" stroke="${r.pant}" stroke-width="7"/><path d="M-17 -64 L17 -64" stroke="#ffffff77" stroke-width="2" stroke-dasharray="3 3"/>`;
        if (r.det === 'botonadura' || r.det === 'botones') g += [-14, -6, 2, 10].map((yy) => `<circle cx="-12" cy="${-82 + (yy + 14) * 1.3}" r="1.8" fill="#e7e9ee"/><circle cx="12" cy="${-82 + (yy + 14) * 1.3}" r="1.8" fill="#e7e9ee"/>`).join('') + `<path d="M-4 -90 L0 -80 L4 -90Z" fill="${r.moño || '#c4a15a'}" ${trazo}/>`;
        if (r.det === 'bandolera') g += `<path d="M-15 -90 L15 -48" stroke="${T}" stroke-width="8"/><path d="M-15 -90 L15 -48" stroke="#8a5a2b" stroke-width="5"/><path d="M-10 -78 L-6 -74M-3 -70 L1 -66M4 -62 L8 -58" stroke="#d9b341" stroke-width="3"/>`;
        if (r.det === 'delantal') g += `<path d="M-12 -86 L12 -86 L16 -40 L-16 -40Z" fill="${r.ropa === '#fffaf0' ? '#e86a8a' : '#ffffffcc'}" ${trazo}/>`;
        if (r.det === 'listones') g += [['#2f9d62', -10], ['#fff', 0], ['#d8362f', 10]].map(([c, xx]) => `<path d="M${xx} -90 L${xx + 2} -48" stroke="${c}" stroke-width="3"/>`).join('');
        if (r.det === 'encaje') g += `<path d="M-16 -50 q4 6 8 0 q4 6 8 0 q4 6 8 0 q4 6 8 0" fill="none" stroke="${r.ropa === '#ffffff' ? '#b9b9d0' : '#e9d9ff'}" stroke-width="2.4"/>`;
        if (r.det === 'panuelo') g += `<path d="M-6 -90 L0 -80 L6 -90Z" fill="#d8362f" ${trazo}/>`;
        if (r.det === 'cuello') g += `<path d="M-8 -90 L0 -80 L8 -90Z" fill="#fff" ${trazo}/>`;
        if (window.Dibujo?.detalles?.[r.det]) g += window.Dibujo.detalles[r.det](r, piel);
        if (r.det === 'bandana') g += `<path d="M-7 -91 L0 -82 L7 -91Z" fill="#c4432e" ${trazo}/>`;

        // rebozo (chal)
        if (r.rebozo) g += `<path d="M-19 -90 Q0 -98 19 -90 L22 -58 Q0 -50 -22 -58Z" ${f(r.rebozo)}/><path d="M-20 -62 q5 8 10 0 q5 8 10 0 q5 8 10 0 q5 8 10 0" fill="none" stroke="#ffffff99" stroke-width="2"/>`;

        // brazos
        const mano = (xx, yy) => `<circle cx="${xx}" cy="${yy}" r="5.5" ${f(piel)}/>`;
        const brazo = (x1, y1, x2, y2) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${T}" stroke-width="12" stroke-linecap="round"/><path d="M${x1} ${y1} L${x2} ${y2}" stroke="${manga}" stroke-width="8" stroke-linecap="round"/>${mano(x2, y2)}`;
        const poses = {
            baja: [[-17, -86, -23, -52], [17, -86, 23, -52]],
            arriba: [[-17, -86, -23, -52], [17, -86, 32, -128]],
            dos: [[-17, -86, -32, -128], [17, -86, 32, -128]],
            señala: [[-17, -86, -23, -52], [17, -86, 50, -92]],
            sostiene: [[-17, -86, -12, -62], [17, -86, 12, -62]],
            corre: [[-17, -86, -34, -66], [17, -86, 30, -108]],
            abre: [[-17, -86, -44, -96], [17, -86, 44, -96]],
        };
        const [a, b] = poses[pose] || poses.baja;
        g += brazo(...a) + brazo(...b);

        // objeto sostenido en la mano derecha
        const mx = b[2], my = b[3];
        if (r.obj) g += sostenido(r.obj, mx, my);

        // cabeza
        g += `<rect x="-5" y="-96" width="10" height="9" ${f(piel)}/>`;
        if (r.peloT === 'largo' || r.peloT === 'cano') g += `<path d="M-17 -108 Q-20 -84 -12 -80 L12 -80 Q20 -84 17 -108Z" ${f(r.pelo)}/>`;
        if (r.peloT === 'trenzas') g += `<path d="M-15 -104 Q-22 -86 -17 -70" fill="none" stroke="${T}" stroke-width="9" stroke-linecap="round"/><path d="M-15 -104 Q-22 -86 -17 -70" fill="none" stroke="${r.pelo}" stroke-width="6" stroke-linecap="round"/><path d="M15 -104 Q22 -86 17 -70" fill="none" stroke="${T}" stroke-width="9" stroke-linecap="round"/><path d="M15 -104 Q22 -86 17 -70" fill="none" stroke="${r.pelo}" stroke-width="6" stroke-linecap="round"/><circle cx="-17" cy="-69" r="3" fill="#e8467c"/><circle cx="17" cy="-69" r="3" fill="#e8467c"/>`;
        g += `<circle cx="0" cy="-106" r="16" ${f(piel)}/>`;
        if (r.peloT !== 'calvo') g += `<path d="M-16 -108 Q-14 -126 0 -124 Q14 -126 16 -108 Q10 -116 0 -115 Q-10 -116 -16 -108Z" ${f(r.pelo)}/>`;
        const calav = r.piel === 'calavera';
        // cara
        g += `<circle cx="-6" cy="-106" r="${calav ? 3.6 : 2}" fill="${calav ? '#1a1a22' : '#222'}"/><circle cx="6" cy="-106" r="${calav ? 3.6 : 2}" fill="${calav ? '#1a1a22' : '#222'}"/>`;
        if (calav) g += `<path d="M0 -103 L-1.6 -99 L1.6 -99Z" fill="#1a1a22"/><path d="M-7 -96 H7 M-4 -97 V-94 M0 -97 V-94 M4 -97 V-94" stroke="#1a1a22" stroke-width="1.5"/>`;
        else g += `<path d="M-5 -98 Q0 -94 5 -98" fill="none" stroke="#6a2a22" stroke-width="1.8" stroke-linecap="round"/><circle cx="-10" cy="-100" r="2.6" fill="#ff8a7a" opacity=".5"/><circle cx="10" cy="-100" r="2.6" fill="#ff8a7a" opacity=".5"/>`;
        if (r.ceja) g += `<path d="M-10 -112 Q0 -116 10 -112" fill="none" stroke="#15100c" stroke-width="3"/>`;
        if (r.bigote) g += `<path d="M-8 -100 Q0 -95 8 -100 Q4 -97 0 -98 Q-4 -97 -8 -100Z" fill="${r.pelo}" ${trazo}/>`;
        if (r.barba) g += `<path d="M-12 -100 Q0 -80 12 -100 Q8 -92 0 -92 Q-8 -92 -12 -100Z" fill="${r.pelo}" ${trazo}/>`;
        if (r.lentes) g += `<circle cx="-6" cy="-106" r="5" fill="none" stroke="${T}" stroke-width="1.6"/><circle cx="6" cy="-106" r="5" fill="none" stroke="${T}" stroke-width="1.6"/><path d="M-1 -106H1" stroke="${T}" stroke-width="1.6"/>`;
        if (r.flor) g += `<circle cx="-13" cy="-120" r="5" fill="#ff5d7a" ${trazo}/><circle cx="-13" cy="-120" r="2" fill="#ffd34a"/>`;

        g += sombrero(r.tocado || r.gorro, r);
        return `<g transform="translate(${x} ${y}) rotate(${r.rot || 0}) scale(${flip * s} ${s})">${g}</g>`;
    }

    function sombrero(t, r) {
        switch (t) {
            case 'charro': return `<ellipse cx="0" cy="-118" rx="34" ry="8" ${f('#1d1d24')}/><path d="M-15 -118 Q-14 -144 0 -144 Q14 -144 15 -118Z" ${f('#1d1d24')}/><rect x="-15" y="-125" width="30" height="5" fill="#d8d2c0" ${trazo}/><path d="M-30 -118 q30 10 60 0" fill="none" stroke="#d8d2c0" stroke-width="2.5"/>`;
            case 'sombrerote': return `<ellipse cx="0" cy="-118" rx="38" ry="9" ${f('#e1c27a')}/><path d="M-16 -118 Q-14 -146 0 -146 Q14 -146 16 -118Z" ${f('#e1c27a')}/><rect x="-16" y="-126" width="32" height="5" fill="#8a3a2a" ${trazo}/>`;
            case 'paja': return `<ellipse cx="0" cy="-119" rx="30" ry="7" ${f('#e8cf85')}/><path d="M-14 -119 Q-12 -140 0 -140 Q12 -140 14 -119Z" ${f('#e8cf85')}/><rect x="-14" y="-126" width="28" height="4" fill="#c4432e" ${trazo}/>`;
            case 'plumas': return `<rect x="-17" y="-122" width="34" height="7" fill="#d9a521" ${trazo}/>` + [-28, -14, 0, 14, 28].map((a, i) => `<ellipse cx="0" cy="-150" rx="5" ry="26" transform="rotate(${a} 0 -120)" ${f(['#e2483a', '#19a979', '#f2c230', '#2a8ad8', '#e2483a'][i])}/>`).join('');
            case 'maya': return `<rect x="-17" y="-124" width="34" height="9" fill="#d9a521" ${trazo}/><path d="M-12 -124 L-16 -148 L0 -156 L16 -148 L12 -124Z" ${f('#1fa37a')}/>` + [-20, 0, 20].map((a) => `<ellipse cx="0" cy="-160" rx="4" ry="18" transform="rotate(${a} 0 -128)" ${f('#2fcf8f')}/>`).join('');
            case 'diadema': return `<rect x="-16" y="-120" width="32" height="6" fill="#d9a521" ${trazo}/><circle cx="0" cy="-123" r="4" fill="#e2483a" ${trazo}/>`;
            case 'cinta': return `<rect x="-16" y="-118" width="32" height="5" fill="#d8362f" ${trazo}/>`;
            case 'casco': return `<path d="M-17 -114 Q-17 -138 0 -138 Q17 -138 17 -114Z" ${f('#b5bcc8')}/><path d="M-26 -114 Q0 -106 26 -114 Q0 -120 -26 -114Z" ${f('#a1a9b6')}/><path d="M0 -138 Q-10 -150 8 -150 Q0 -144 0 -138Z" ${f('#c4432e')}/>`;
            case 'tricornio': return `<path d="M-28 -114 L0 -134 L28 -114 L0 -120Z" ${f('#2a2a33')}/><circle cx="0" cy="-124" r="3" fill="#e2483a" ${trazo}/>`;
            case 'velo': return `<path d="M-18 -104 Q-20 -130 0 -130 Q20 -130 18 -104 L22 -62 L-22 -62Z" ${f('#2b2b33')}/><circle cx="0" cy="-106" r="13" ${f('#f3c9a0')}/><circle cx="-5" cy="-106" r="2" fill="#222"/><circle cx="5" cy="-106" r="2" fill="#222"/><path d="M-4 -99 Q0 -96 4 -99" fill="none" stroke="#6a2a22" stroke-width="1.8"/><rect x="-14" y="-122" width="28" height="7" fill="#fff" ${trazo}/>`;
            case 'boina': return `<ellipse cx="2" cy="-124" rx="19" ry="8" ${f('#c0392b')}/><circle cx="2" cy="-132" r="2.5" fill="#c0392b" ${trazo}/>`;
            case 'flores': return [[-14, -122, '#ff5d7a'], [-4, -126, '#ffd34a'], [6, -126, '#ff5d7a'], [15, -121, '#ffb347']].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="5.5" fill="${c}" ${trazo}/><circle cx="${x}" cy="${y}" r="1.8" fill="#fff6a0"/>`).join('') + `<path d="M-20 -118 Q0 -134 20 -118" fill="none" stroke="#3a8f5b" stroke-width="2.5"/>`;
            case 'catrina': return `<ellipse cx="0" cy="-119" rx="36" ry="9" ${f('#3b1f4f')}/><path d="M-16 -119 Q-14 -140 0 -140 Q14 -140 16 -119Z" ${f('#3b1f4f')}/>` + [[-24, -126, '#ff9b3d'], [-10, -144, '#ffd34a'], [8, -145, '#ff5d7a'], [24, -125, '#ff9b3d']].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="6" fill="${c}" ${trazo}/>`).join('') + `<ellipse cx="22" cy="-146" rx="4" ry="16" transform="rotate(25 22 -130)" ${f('#e2483a')}/>`;
            case 'gorro_cocina': return `<path d="M-15 -116 Q-18 -134 -8 -136 Q0 -144 8 -136 Q18 -134 15 -116Z" ${f('#ffffff')}/>`;
            case 'cono': return `<path d="M-15 -118 L0 -150 L15 -118Z" ${f('#e2483a')}/><rect x="-15" y="-122" width="30" height="5" fill="#f2c230" ${trazo}/>`;
            case 'resplandor': return `<path d="M-30 -92 A31 33 0 0 1 30 -92 L19 -97 A19 22 0 0 0 -19 -97 Z" fill="#ffffff" ${trazo}/>` + [-24, -14, 0, 14, 24].map((a) => `<circle cx="${a * 1.15}" cy="${-100 - Math.sqrt(Math.max(0, 900 - a * a)) * 0.95}" r="4" fill="#fff" ${trazo}/>`).join('');
            case 'explorador': return `<path d="M-17 -118 Q0 -140 17 -118Z" ${f('#d9a521')}/><rect x="-24" y="-120" width="48" height="5" rx="2" ${f('#b5851a')}/>`;
            default: return (window.Dibujo?.sombreros?.[t]?.(r)) || '';
        }
    }

    // objetos que se sostienen con la mano (origen: la mano)
    function sostenido(obj, x, y) {
        const o = {
            lanza: `<path d="M${x} ${y + 40} L${x + 2} ${y - 56}" stroke="#7a4f2a" stroke-width="4"/><path d="M${x - 5} ${y - 56} L${x + 2} ${y - 74} L${x + 9} ${y - 56}Z" ${f('#d0d4da')}/>`,
            espada: `<path d="M${x} ${y + 4} L${x + 2} ${y - 44}" stroke="#d0d4da" stroke-width="5"/><path d="M${x - 8} ${y - 2} H${x + 8}" stroke="#d9a521" stroke-width="4"/>`,
            escudo: `<circle cx="${x + 2}" cy="${y + 6}" r="17" ${f('#e2483a')}/><circle cx="${x + 2}" cy="${y + 6}" r="9" fill="#f2c230" ${trazo}/>`,
            libro: `<rect x="${x - 10}" y="${y - 16}" width="22" height="26" rx="2" ${f('#8a3d2b')}/><rect x="${x - 7}" y="${y - 13}" width="16" height="20" fill="#f6ecd2"/>`,
            pluma: `<path d="M${x} ${y} L${x + 18} ${y - 34}" stroke="#f6f1e6" stroke-width="5"/><path d="M${x + 18} ${y - 34} Q${x + 30} ${y - 40} ${x + 22} ${y - 22}Z" fill="#f6f1e6" ${trazo}/>`,
            campana: `<path d="M${x - 10} ${y} Q${x - 10} ${y - 20} ${x} ${y - 20} Q${x + 10} ${y - 20} ${x + 10} ${y}Z" ${f('#e8b53a')}/><circle cx="${x}" cy="${y + 3}" r="3" fill="#8a5a1a"/>`,
            bandera: `<path d="M${x} ${y + 30} L${x} ${y - 64}" stroke="#7a4f2a" stroke-width="4"/><rect x="${x}" y="${y - 62}" width="14" height="30" fill="#1f9e5a" ${trazo}/><rect x="${x + 14}" y="${y - 62}" width="14" height="30" fill="#ffffff" ${trazo}/><rect x="${x + 28}" y="${y - 62}" width="14" height="30" fill="#d8362f" ${trazo}/><circle cx="${x + 21}" cy="${y - 47}" r="4" fill="#9a6a2a"/>`,
            pincel: `<path d="M${x} ${y} L${x + 20} ${y - 30}" stroke="#7a4f2a" stroke-width="4"/><path d="M${x + 20} ${y - 30} L${x + 27} ${y - 41}" stroke="#d8362f" stroke-width="7" stroke-linecap="round"/>`,
            pergamino: `<rect x="${x - 8}" y="${y - 24}" width="26" height="30" rx="3" ${f('#f3e2b6')}/><path d="M${x - 4} ${y - 16}H${x + 14}M${x - 4} ${y - 8}H${x + 14}M${x - 4} ${y}H${x + 10}" stroke="#8a6a3a" stroke-width="1.6"/>`,
            guitarra: `<ellipse cx="${x + 10}" cy="${y - 4}" rx="13" ry="11" ${f('#b5651d')}/><circle cx="${x + 10}" cy="${y - 4}" r="4" fill="#3a1f10"/><path d="M${x + 18} ${y - 12} L${x + 42} ${y - 40}" stroke="${T}" stroke-width="6"/><path d="M${x + 18} ${y - 12} L${x + 42} ${y - 40}" stroke="#5a3a1f" stroke-width="3"/>`,
            trompeta: `<path d="M${x - 8} ${y} L${x + 26} ${y - 8}" stroke="#e8b53a" stroke-width="5"/><path d="M${x + 26} ${y - 14} L${x + 42} ${y - 22} L${x + 42} ${y + 4} L${x + 26} ${y - 2}Z" ${f('#f2c230')}/>`,
            violin: `<ellipse cx="${x + 8}" cy="${y - 2}" rx="9" ry="13" transform="rotate(-30 ${x + 8} ${y - 2})" ${f('#b5651d')}/><path d="M${x + 14} ${y - 12} L${x + 28} ${y - 34}" stroke="#3a1f10" stroke-width="3"/>`,
            flauta: `<path d="M${x - 6} ${y} L${x + 24} ${y - 18}" stroke="${T}" stroke-width="7" stroke-linecap="round"/><path d="M${x - 6} ${y} L${x + 24} ${y - 18}" stroke="#d9b36a" stroke-width="4" stroke-linecap="round"/>`,
            cazo: `<path d="M${x - 12} ${y - 6} H${x + 12} L${x + 8} ${y + 10} H${x - 8}Z" ${f('#8a5a3a')}/><path d="M${x + 10} ${y - 6} L${x + 32} ${y - 22}" stroke="#7a4f2a" stroke-width="4"/>`,
            antorcha: `<path d="M${x} ${y + 6} L${x + 2} ${y - 36}" stroke="#7a4f2a" stroke-width="5"/><path d="M${x + 2} ${y - 36} Q${x - 10} ${y - 54} ${x + 3} ${y - 66} Q${x + 14} ${y - 54} ${x + 2} ${y - 36}Z" ${f('#ff9b2e')}/>`,
            medalla: `<circle cx="${x + 4}" cy="${y + 4}" r="10" ${f('#f2c230')}/><path d="M${x - 2} ${y - 6} L${x + 4} ${y - 14} L${x + 10} ${y - 6}" fill="none" stroke="#2a8ad8" stroke-width="3"/>`,
            tortilla: `<ellipse cx="${x + 4}" cy="${y}" rx="14" ry="6" ${f('#f0d58a')}/>`,
            cesta: `<path d="M${x - 14} ${y - 4} H${x + 14} L${x + 10} ${y + 14} H${x - 10}Z" ${f('#c18a4a')}/><circle cx="${x - 5}" cy="${y - 7}" r="5" fill="#e2483a" ${trazo}/><circle cx="${x + 5}" cy="${y - 8}" r="5" fill="#f2c230" ${trazo}/>`,
            lazo: `<path d="M${x} ${y} Q${x + 30} ${y - 40} ${x + 52} ${y - 8}" fill="none" stroke="#a9753a" stroke-width="2.6"/><ellipse cx="${x + 52}" cy="${y - 2}" rx="10" ry="7" fill="none" stroke="#a9753a" stroke-width="2.6"/>`,
            jarana: `<ellipse cx="${x + 6}" cy="${y - 2}" rx="11" ry="9" ${f('#c2813e')}/><circle cx="${x + 6}" cy="${y - 2}" r="3" fill="#3a1f10"/><path d="M${x + 14} ${y - 8} L${x + 34} ${y - 30}" stroke="${T}" stroke-width="5"/>`,
            sombrero: `<ellipse cx="${x}" cy="${y}" rx="22" ry="6" ${f('#1d1d24')}/><path d="M${x - 10} ${y} Q${x - 9} ${y - 18} ${x} ${y - 18} Q${x + 9} ${y - 18} ${x + 10} ${y}Z" ${f('#1d1d24')}/>`,
            piña: `<ellipse cx="${x}" cy="${y - 6}" rx="9" ry="12" ${f('#e8b83a')}/><path d="M${x - 8} ${y - 18} L${x - 3} ${y - 30} L${x} ${y - 20} L${x + 3} ${y - 30} L${x + 8} ${y - 18}Z" ${f('#2f9d4a')}/>`,
            pan: `<ellipse cx="${x + 4}" cy="${y}" rx="14" ry="9" ${f('#e3b66a')}/><path d="M${x - 2} ${y - 8} V${y + 6}M${x + 10} ${y - 8} V${y + 6}" stroke="#fff3d0" stroke-width="3"/>`,
        };
        return o[obj] || (window.Dibujo?.objetos?.[obj]?.(x, y)) || '';
    }

    // ---------- Escena completa ----------
    function escena(e) {
        const id = ++idUnico;
        const cielo = (cielos[e.cielo || 'dia'] || cielos.dia)(id);
        const suelo = (suelos[e.suelo || 'pasto'] || suelos.pasto)();
        const items = (e.items || []).map(([n, x, y, s = 1, o = {}]) => (window.DibujoItems?.[n] ? window.DibujoItems[n](x, y, s, o) : '')).join('');
        const gente = [...(e.gente || [])].sort((a, b) => a[2] - b[2]).map(([rol, x, y, s = 1, o = {}]) => persona(rol, x, y, s, o)).join('');
        const delante = (e.delante || []).map(([n, x, y, s = 1, o = {}]) => (window.DibujoItems?.[n] ? window.DibujoItems[n](x, y, s, o) : '')).join('');
        return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${(e.alt || 'Ilustración').replace(/"/g, '')}" preserveAspectRatio="xMidYMid slice">${cielo}${suelo}${items}${gente}${delante}</svg>`;
    }

    // Los archivos de cada país añaden aquí sus roles (ROLES), sombreros y detalles de ropa
    window.Dibujo = { escena, persona, trazo, T, f, ROLES, sombreros: {}, detalles: {}, objetos: {} };
})();
