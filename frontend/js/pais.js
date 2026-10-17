// Página de país: temas por categoría, formas de aprender, reto y progreso.
// Los datos del país vienen de window.PAIS (ver mexico/mexico-datos.js).

(() => {
    const PAIS = window.PAIS;
    const MAX_VIDAS = 5;
    const PUNTOS_ACIERTO = 10;
    const ACIERTOS_PARA_COMPLETAR = 2;
    const ESPERA_VIDAS_MS = 5 * 60 * 1000; // sin vidas: a los 5 minutos se restablecen
    const ACIERTOS_PARA_VIDAS = 3;

    const $ = (id) => document.getElementById(id);
    const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const mezclar = (lista) => {
        const copia = [...lista];
        for (let i = copia.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copia[i], copia[j]] = [copia[j], copia[i]];
        }
        return copia;
    };

    // Une cada tema con su información ampliada (secciones, línea de tiempo, más datos y fuentes)
    const EXTRA = window.PAIS_EXTRA || {};
    const todosLosTemas = PAIS.categorias.flatMap((c) => c.temas.map((t) => {
        const e = EXTRA[t.id] || {};
        const secciones = e.secciones || t.secciones || [{ titulo: null, texto: t.historia || [] }];
        return { ...t, ...e, categoria: c, secciones, historia: secciones.flatMap((x) => x.texto) };
    }));
    const usuario = window.Sesion?.usuario;
    const CLAVE = `progreso_${usuario?.id ?? 'anon'}_${PAIS.iso}`;

    // ---------- Progreso (servidor + copia local) ----------
    let progreso = { puntos: 0, vidas: MAX_VIDAS, correctas: 0, temas: {} };

    const mmss = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

    // Segundos que faltan para que se restablezcan las vidas (0 si ya hay vidas)
    function segundosParaVidas() {
        if (progreso.vidas > 0) { delete progreso.vidasListasEn; return 0; }
        if (!progreso.vidasListasEn) progreso.vidasListasEn = Date.now() + ESPERA_VIDAS_MS;
        return Math.max(0, Math.ceil((progreso.vidasListasEn - Date.now()) / 1000));
    }

    function cargarLocal() {
        try { return JSON.parse(localStorage.getItem(CLAVE)) || null; } catch { return null; }
    }

    async function cargarProgreso() {
        const local = cargarLocal();
        if (local) progreso = { ...progreso, ...local };
        pintarProgreso();
        if (!window.Sesion?.token) return;
        try {
            const r = await fetch(`${window.Sesion.API}/progreso/${PAIS.iso}`, { headers: window.Sesion.cabeceras() });
            if (r.ok) {
                const servidor = await r.json();
                // Si el servidor aún no tiene nada pero hay datos locales, se conservan
                if (servidor.puntos || Object.keys(servidor.temas).length || !local) progreso = servidor;
                if (progreso.vidas <= 0 && servidor.segundosParaVidas > 0) progreso.vidasListasEn = Date.now() + servidor.segundosParaVidas * 1000;
                pintarProgreso();
                pintarMenu();
            }
        } catch { /* sin conexión: se usa la copia local */ }
    }

    // Devuelve las insignias nuevas que el servidor entregó al guardar (o una lista vacía)
    async function guardarProgreso(tema, extra = {}) {
        try { localStorage.setItem(CLAVE, JSON.stringify(progreso)); } catch { /* sin almacenamiento */ }
        if (!window.Sesion?.token) return [];
        try {
            const cuerpo = { puntos: progreso.puntos, vidas: progreso.vidas, correctas: progreso.correctas, ...extra };
            if (tema) Object.assign(cuerpo, { tema: tema.id, temaCorrectas: tema.correctas, temaTotal: tema.total });
            const r = await fetch(`${window.Sesion.API}/progreso/${PAIS.iso}`, {
                method: 'PUT', headers: window.Sesion.cabeceras(), body: JSON.stringify(cuerpo),
            });
            const json = await r.json().catch(() => ({}));
            return Array.isArray(json.nuevasInsignias) ? json.nuevasInsignias : [];
        } catch { return []; /* se reintentará en el próximo guardado */ }
    }

    // Un tema se completa con 60 % de aciertos o más en un reto
    const completado = (id) => { const t = progreso.temas[id]; return Boolean(t) && (t.total ? t.correctas / t.total >= 0.6 : t.correctas >= ACIERTOS_PARA_COMPLETAR); };

    function pintarProgreso() {
        const hechos = todosLosTemas.filter((t) => completado(t.id)).length;
        const pct = Math.round((hechos / todosLosTemas.length) * 100);
        $('puntos').textContent = progreso.puntos;
        $('vidas').textContent = progreso.vidas;
        $('vidas').classList.toggle('pocas', progreso.vidas <= 1);
        $('porcentaje').textContent = `${pct}%`;
        $('retosCompletados').textContent = `${hechos}/${todosLosTemas.length}`;
        $('respuestasCorrectas').textContent = progreso.correctas;
        $('anilloAvance').style.strokeDashoffset = 314 - (314 * pct) / 100;

        const sinVidas = progreso.vidas <= 0;
        const falta = segundosParaVidas();
        $('btnReto').textContent = sinVidas ? `SIN VIDAS · ${mmss(falta)}` : 'EMPEZAR RETO';
        $('btnReto').disabled = sinVidas;
        $('retoNota').textContent = sinVidas
            ? `Te quedaste sin vidas. No puedes hacer más retos hasta que se restablezcan, en ${mmss(falta)}. Mientras tanto repasa la teoría.`
            : `Reto con IA sobre «${temaActual.titulo}»: preguntas nuevas cada vez.`;
        $('vidasEspera').textContent = sinVidas ? `${mmss(falta)}` : '';
        $('vidasEspera').title = sinVidas ? 'Tiempo para que se restablezcan tus vidas' : '';
    }

    // ---------- Menú ----------
    let temaActual = todosLosTemas[0];

    function pintarMenu() {
        $('menuTemas').innerHTML = PAIS.categorias.map((c) => `
            <h3>${esc(c.nombre)}</h3>
            ${c.temas.map((t) => `
                <button type="button" class="menu-btn ${t.id === temaActual.id ? 'activo' : ''}" data-tema="${t.id}">
                    ${esc(t.titulo)}
                    <span class="check">${completado(t.id) ? 'Completado' : ''}</span>
                </button>`).join('')}`).join('');
    }

    $('menuTemas').addEventListener('click', (e) => {
        const boton = e.target.closest('[data-tema]');
        if (!boton) return;
        const ir = () => {
            mostrarTema(boton.dataset.tema);
            $('menuTemas').classList.remove('abierto');
            $('contenido').scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
        if (window.Juego?.activo()) window.Juego.salir(ir); else ir();
    });
    $('menuToggle').addEventListener('click', () => $('menuTemas').classList.toggle('abierto'));

    // ---------- Imagen del tema (Wikipedia / Wikimedia Commons) ----------
    async function buscarImagen(titulos) {
        for (const titulo of titulos) {
            const clave = `wikiimg2_${titulo}`;
            try {
                const guardada = localStorage.getItem(clave);
                if (guardada) return guardada;
            } catch { /* nada */ }
            try {
                const r = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(titulo)}`);
                if (!r.ok) continue;
                const j = await r.json();
                const url = j.thumbnail?.source || j.originalimage?.source;
                if (url) {
                    // Wikimedia solo sirve tamaños fijos de miniatura; 960 px es uno de ellos
                    const reducida = url.replace(/\/\d+px-/, '/960px-');
                    try { localStorage.setItem(clave, reducida); } catch { /* nada */ }
                    return reducida;
                }
            } catch { /* se prueba el siguiente título */ }
        }
        return null;
    }

    // Imágenes ya elegidas para cada tema (js/imagenes-temas.json): evitan depender de búsquedas en vivo
    const paisSlug = location.pathname.split('/').filter(Boolean).slice(-2, -1)[0] || '';
    let imagenesFijas = null;
    async function imagenGuardada(idTema) {
        if (!imagenesFijas) {
            imagenesFijas = fetch('../js/imagenes-temas.json').then((r) => (r.ok ? r.json() : {})).catch(() => ({}));
        }
        const m = await imagenesFijas;
        return m[paisSlug + '/' + idTema] || null;
    }

    // ---------- Mostrar un tema ----------
    let modoActual = 'lectura';

    function mostrarTema(id) {
        detenerAudio();
        temaActual = todosLosTemas.find((t) => t.id === id) || todosLosTemas[0];
        $('categoriaTema').textContent = `${temaActual.categoria.nombre}`;
        $('tituloTema').textContent = `${temaActual.titulo}`;
        $('datoCurioso').textContent = temaActual.dato;
        $('lugaresTema').textContent = temaActual.lugares;

        const img = $('imagenTema');
        img.hidden = true;
        img.classList.remove('lista');
        $('imagenFallback').hidden = false;
        $('imagenFallback').textContent = '';
        $('pieImagen').textContent = '';
        const fondo = $('imagenFondo') || (() => {
            const d = document.createElement('div'); d.id = 'imagenFondo'; d.className = 'imagen-fondo'; d.setAttribute('aria-hidden', 'true');
            img.parentNode.insertBefore(d, img); return d;
        })();
        fondo.style.backgroundImage = 'none';
        const solicitado = temaActual.id;
        imagenGuardada(temaActual.id).then((fija) => fija || buscarImagen(temaActual.wiki)).then((url) => {
            if (!url || solicitado !== temaActual.id) return;
            img.onload = () => {
                if (solicitado !== temaActual.id) return;
                fondo.style.backgroundImage = `url("${url}")`;
                img.hidden = false; img.classList.add('lista'); $('imagenFallback').hidden = true;
                $('pieImagen').textContent = `${temaActual.titulo} · Imagen: Wikimedia Commons`;
            };
            img.onerror = () => { img.hidden = true; fondo.style.backgroundImage = 'none'; $('imagenFallback').hidden = false; };
            img.alt = temaActual.titulo;
            img.decoding = 'async';
            img.src = url;
        });

        pintarMenu();
        pintarProgreso();
        pintarModo(modoActual);
    }

    // ---------- Formas de aprender ----------
    $('modos').addEventListener('click', (e) => {
        const b = e.target.closest('[data-modo]');
        if (!b) return;
        modoActual = b.dataset.modo;
        pintarModo(modoActual);
    });

    function pintarModo(modo) {
        detenerAudio();
        document.querySelectorAll('#modos button').forEach((b) => {
            const activo = b.dataset.modo === modo;
            b.classList.toggle('activo', activo);
            b.setAttribute('aria-selected', activo);
        });
        const panel = $('panelModo');
        const t = temaActual;
        ({ lectura, audio, historieta, mapa, tarjetas, parejas }[modo])(panel, t);
    }

    function seccionesHtml(t) {
        return t.secciones.map((sec) => `
            <section class="seccion">
                ${sec.titulo ? `<h3>${esc(sec.titulo)}</h3>` : ''}
                ${sec.texto.map((p) => `<p>${esc(p)}</p>`).join('')}
            </section>`).join('');
    }

    function lectura(panel, t) {
        panel.innerHTML = `
            <div class="lectura">
                <div class="resumen"><strong>Lo más importante</strong>
                    <ul>${t.ideas.map((i) => `<li><b>${esc(i.t)}:</b> ${esc(i.d)}</li>`).join('')}</ul>
                </div>
                ${seccionesHtml(t)}
                ${t.linea ? `
                <section class="seccion">
                    <h3>Línea de tiempo</h3>
                    <ol class="linea">${t.linea.map(([cuando, que]) => `<li><b>${esc(cuando)}</b><span>${esc(que)}</span></li>`).join('')}</ol>
                </section>` : ''}
                ${t.masDatos ? `
                <section class="seccion">
                    <h3>Más datos interesantes</h3>
                    <ul class="mas-datos">${t.masDatos.map((d) => `<li>${esc(d)}</li>`).join('')}</ul>
                </section>` : ''}
                ${t.fuentes ? `
                <section class="seccion fuentes">
                    <h3>Para profundizar</h3>
                    <ul>${t.fuentes.map(([n, u]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(n)}</a></li>`).join('')}</ul>
                </section>` : ''}
                <p class="nota-fuentes">${esc(PAIS.notaFuentes || 'Información contrastada con fuentes como el INAH, la UNESCO, el INEGI y la SEP.')} Cuando las fuentes no coinciden en una fecha o una cifra, se indica en el texto.</p>
            </div>`;
    }

    // --- Escuchar ---
    let lecturaActiva = false;
    function detenerAudio() {
        lecturaActiva = false;
        if ('speechSynthesis' in window) speechSynthesis.cancel();
    }

    // Parte un texto en frases cortas: las voces del navegador se cortan con textos muy largos
    function frases(texto) {
        const partes = texto.match(/[^.!?;:]+[.!?;:]*s*/g) || [texto];
        const grupos = [];
        let actual = '';
        for (const p of partes) {
            if ((actual + p).length > 180 && actual) { grupos.push(actual.trim()); actual = ''; }
            actual += p;
        }
        if (actual.trim()) grupos.push(actual.trim());
        return grupos;
    }

    function audio(panel, t) {
        if (!('speechSynthesis' in window)) {
            panel.innerHTML = '<p class="aviso">Tu navegador no puede leer en voz alta. Usa la lectura o la historieta.</p>';
            return;
        }
        panel.innerHTML = `
            <div class="audio-controles">
                <button type="button" id="audPlay">Escuchar</button>
                <button type="button" class="sec" id="audPausa">Pausa</button>
                <button type="button" class="sec" id="audStop">Detener</button>
                <label>Velocidad
                    <select id="audVel"><option value="0.75">Lenta</option><option value="1" selected>Normal</option><option value="1.25">Rápida</option></select>
                </label>
            </div>
            <p class="ayuda">Toca cualquier párrafo para empezar a escuchar desde ahí.</p>
            <div class="audio-texto">${seccionesHtml(t)}</div>`;

        const parrafos = [...panel.querySelectorAll('.audio-texto p')];
        // Lista de lo que se va a leer: el título de cada sección y luego sus párrafos, en frases cortas
        const textos = t.secciones.flatMap((x) => x.texto);
        const lectura = [];
        let ultimoTitulo = null;
        parrafos.forEach((el, idx) => {
            const h = el.closest('.seccion').querySelector('h3');
            if (h && h !== ultimoTitulo) { lectura.push({ el, texto: `${h.textContent}.` }); ultimoTitulo = h; }
            frases(textos[idx]).forEach((f) => lectura.push({ el, texto: f }));
        });

        const hablar = (i) => {
            if (!lecturaActiva || i >= lectura.length) { lecturaActiva = false; parrafos.forEach((p) => p.classList.remove('leyendo')); return; }
            parrafos.forEach((p) => p.classList.toggle('leyendo', p === lectura[i].el));
            if (i === 0 || lectura[i].el !== lectura[i - 1].el) lectura[i].el.scrollIntoView({ block: 'center', behavior: 'smooth' });
            const voz = new SpeechSynthesisUtterance(lectura[i].texto);
            voz.lang = 'es-MX';
            voz.rate = Number($('audVel').value);
            const elegida = speechSynthesis.getVoices().find((v) => v.lang.startsWith('es'));
            if (elegida) voz.voice = elegida;
            voz.onend = () => hablar(i + 1);
            speechSynthesis.speak(voz);
        };
        const desde = (i) => { speechSynthesis.cancel(); lecturaActiva = true; hablar(i); };
        $('audPlay').onclick = () => desde(0);
        $('audPausa').onclick = () => { speechSynthesis.speaking && !speechSynthesis.paused ? speechSynthesis.pause() : speechSynthesis.resume(); };
        $('audStop').onclick = () => { detenerAudio(); parrafos.forEach((p) => p.classList.remove('leyendo')); };
        parrafos.forEach((p) => p.addEventListener('click', () => desde(lectura.findIndex((c) => c.el === p))));
    }

    // --- Historieta: viñetas ilustradas (portada + una escena por idea + cierre) ---
    function historieta(panel, t) {
        const escenas = window.VINETAS?.[t.id];
        const conDibujo = Boolean(escenas && window.Dibujo);
        let vinetas;
        if (conDibujo) {
            const portada = { ...escenas[0], gente: [...(escenas[0].gente || []), ['nina', 30, 294, .72, { pose: 'abre' }]] };
            const cierre = { ...escenas[3], gente: [...(escenas[3].gente || []), ['nino', 372, 294, .72, { flip: 1, pose: 'arriba' }]], delante: [...(escenas[3].delante || []), ['bombilla', 352, 118, 1.7]] };
            vinetas = [
                { e: portada, g: `¡Hoy descubriremos: ${t.titulo}!`, p: 'Inicio' },
                ...t.ideas.map((i, n) => ({ e: escenas[n], g: i.d, p: i.t })),
                { e: cierre, g: `¿Sabías que...? ${t.dato}`, p: 'Dato curioso' },
            ];
        } else {
            vinetas = [
                { e: t.icono, g: `¡Hoy descubriremos: ${t.titulo}!`, p: 'Inicio' },
                ...t.ideas.map((i) => ({ e: i.e, g: i.d, p: i.t })),
                { e: '', g: `¿Sabías que...? ${t.dato}`, p: 'Dato curioso' },
            ];
        }
        panel.innerHTML = `<div class="historieta">${vinetas.map((v, n) => `
            <article class="vineta">
                <span class="vineta-numero">${n + 1}</span>
                <div class="vineta-escena">${conDibujo ? window.Dibujo.escena(v.e) : v.e}</div>
                <div class="vineta-globo">${esc(v.g)}</div>
                <div class="vineta-pie">${esc(v.p)}</div>
            </article>`).join('')}</div>`;
    }

    // --- Mapa mental ---
    function mapa(panel, t) {
        const pos = [[20, 22], [80, 22], [20, 78], [80, 78]];
        panel.innerHTML = `
            <div class="mapa-mental">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    ${pos.map(([x, y]) => `<line x1="50" y1="50" x2="${x}" y2="${y}"></line>`).join('')}
                </svg>
                <div class="nodo centro"><b>${esc(t.titulo)}</b></div>
                ${t.ideas.map((i, n) => `
                    <div class="nodo" style="left:${pos[n][0]}%;top:${pos[n][1]}%">
                        <b>${esc(i.t)}</b>${esc(i.d)}
                    </div>`).join('')}
            </div>`;
    }

    // --- Tarjetas: un concepto a la vez ---
    function tarjetas(panel, t) {
        let n = 0;
        const dibujar = () => {
            const i = t.ideas[n];
            panel.innerHTML = `
                <div class="tarjetas">
                    <div class="tarjeta-giro" id="tarjeta" tabindex="0" role="button" aria-label="Voltear tarjeta">
                        <div class="tarjeta-cara">
                            <div class="cara frente"><b>${esc(i.t)}</b></div>
                            <div class="cara dorso">${esc(i.d)}</div>
                        </div>
                    </div>
                    <small>Toca la tarjeta para ver la respuesta</small>
                    <div class="tarjetas-nav">
                        <button type="button" id="tAnt" ${n === 0 ? 'disabled' : ''}>← Anterior</button>
                        <span>${n + 1} de ${t.ideas.length}</span>
                        <button type="button" id="tSig" ${n === t.ideas.length - 1 ? 'disabled' : ''}>Siguiente →</button>
                    </div>
                </div>`;
            const carta = $('tarjeta');
            const voltear = () => carta.classList.toggle('vuelta');
            carta.onclick = voltear;
            carta.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); voltear(); } };
            $('tAnt').onclick = () => { n--; dibujar(); };
            $('tSig').onclick = () => { n++; dibujar(); };
        };
        dibujar();
    }

    // --- Parejas: juego de memoria sin tiempo ---
    function parejas(panel, t) {
        const cartas = mezclar(t.ideas.flatMap((i, n) => [
            { par: n, html: `<span><b>${esc(i.t)}</b></span>` },
            { par: n, html: `<span>${esc(i.d)}</span>` },
        ]));
        let abiertas = [];
        let encontradas = 0;
        let intentos = 0;
        panel.innerHTML = `
            <p class="parejas-info">Une cada <b>idea</b> con su <b>explicación</b>. Sin prisa: no hay tiempo límite.</p>
            <div class="parejas-tablero">${cartas.map((c, k) => `<button type="button" class="pareja oculta" data-k="${k}" aria-label="Carta ${k + 1}">?</button>`).join('')}</div>
            <p class="parejas-mensaje" id="parMsg">Intentos: 0 · Parejas: 0 de ${t.ideas.length}</p>`;

        panel.querySelector('.parejas-tablero').onclick = (e) => {
            const b = e.target.closest('.pareja');
            if (!b || abiertas.length === 2 || !b.classList.contains('oculta')) return;
            b.classList.remove('oculta');
            b.classList.add('elegida');
            b.innerHTML = cartas[b.dataset.k].html;
            abiertas.push(b);
            if (abiertas.length < 2) return;
            intentos++;
            const [a, c] = abiertas;
            if (cartas[a.dataset.k].par === cartas[c.dataset.k].par) {
                [a, c].forEach((x) => { x.classList.remove('elegida'); x.classList.add('lista'); });
                encontradas++;
                abiertas = [];
            } else {
                [a, c].forEach((x) => { x.classList.remove('elegida'); x.classList.add('fallo'); });
                setTimeout(() => {
                    [a, c].forEach((x) => { x.classList.remove('fallo'); x.classList.add('oculta'); x.textContent = '?'; });
                    abiertas = [];
                }, 1400);
            }
            $('parMsg').textContent = encontradas === t.ideas.length
                ? `¡Muy bien! Lo lograste en ${intentos} intentos.`
                : `Intentos: ${intentos} · Parejas: ${encontradas} de ${t.ideas.length}`;
        };
    }

    // ---------- Reto con IA (ver js/juego.js) ----------
    const modalVerMas = $('modalVerMas');
    const abrir = (m) => { m.classList.add('abierto'); m.setAttribute('aria-hidden', 'false'); };
    const cerrar = (m) => { m.classList.remove('abierto'); m.setAttribute('aria-hidden', 'true'); };
    document.querySelectorAll('.modal').forEach((m) => {
        m.addEventListener('click', (ev) => { if (ev.target === m || ev.target.hasAttribute('data-cerrar')) cerrar(m); });
    });
    document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') document.querySelectorAll('.modal.abierto').forEach(cerrar); });

    // Funciones que el juego usa para leer y guardar el progreso
    const pro = {
        vidas: () => progreso.vidas,
        puntos: () => progreso.puntos,
        sumarPuntos: (n) => { progreso.puntos += n; pintarProgreso(); },
        sumarCorrecta: () => { progreso.correctas++; pintarProgreso(); },
        perderVida: () => {
            progreso.vidas = Math.max(0, progreso.vidas - 1);
            if (progreso.vidas === 0) progreso.vidasListasEn = Date.now() + ESPERA_VIDAS_MS;
            pintarProgreso();
            return progreso.vidas;
        },
        restaurarVidas: () => { progreso.vidas = MAX_VIDAS; delete progreso.vidasListasEn; pintarProgreso(); },
        segundosParaVidas: () => segundosParaVidas(),
        formato: mmss,
        completar: (id, correctas, total) => { progreso.temas[id] = { correctas: Math.max(correctas, progreso.temas[id]?.correctas ?? 0), total }; },
        guardar: (tema, extra) => guardarProgreso(tema, extra),
        pintar: () => { pintarProgreso(); pintarMenu(); },
    };

    $('btnReto').addEventListener('click', () => {
        if (progreso.vidas <= 0) return; // sin vidas no se juega
        detenerAudio();
        window.Juego.abrir({ PAIS, tema: temaActual, temas: todosLosTemas, pro, alSalir: () => pintarProgreso() });
    });

    // ---------- Ver más ----------
    $('btnVerMas').addEventListener('click', () => {
        const hechos = todosLosTemas.filter((t) => completado(t.id)).length;
        $('verMasContenido').innerHTML = `
            <div class="resumen-avance">
                <div><strong>${hechos}/${todosLosTemas.length}</strong><span>Retos completados</span></div>
                <div><strong>${progreso.correctas}</strong><span>Respuestas correctas</span></div>
                <div><strong>⭐ ${progreso.puntos}</strong><span>Puntos</span></div>
                <div><strong>❤️ ${progreso.vidas}</strong><span>Vidas</span></div>
            </div>
            <ul class="lista-avance">
                ${PAIS.categorias.map((c) => `
                    <li class="cat">${esc(c.nombre)}</li>
                    ${c.temas.map((t) => {
                        const a = progreso.temas[t.id];
                        return `<li>${esc(t.titulo)}<span class="estado">${completado(t.id) ? `Completado ${a.correctas}/${a.total}` : 'Pendiente'}</span></li>`;
                    }).join('')}`).join('')}
            </ul>`;
        abrir($('modalVerMas'));
    });

    // ---------- Reloj de vidas ----------
    setInterval(() => {
        if (progreso.vidas > 0) return;
        if (segundosParaVidas() <= 0) {
            progreso.vidas = MAX_VIDAS;
            delete progreso.vidasListasEn;
            guardarProgreso();
        }
        pintarProgreso();
    }, 1000);

    // ---------- Inicio ----------
    $('verMasTitulo').textContent = `Tu avance en ${PAIS.nombre}`;
    $('nombrePais').textContent = PAIS.nombre;
    $('banderaPais').src = PAIS.banderaImg;
    $('banderaPais').alt = `Bandera de ${PAIS.nombre}`;
    mostrarTema(todosLosTemas[0].id);
    cargarProgreso();
    if ('speechSynthesis' in window) speechSynthesis.getVoices();
    window.addEventListener('beforeunload', detenerAudio);
})();
