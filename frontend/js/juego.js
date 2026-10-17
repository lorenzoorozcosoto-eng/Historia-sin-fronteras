// Reto tipo Duolingo / Kahoot. Ocupa todo el espacio bajo la barra superior (no es una ventana emergente).
// Las preguntas las crea la IA del servidor a partir de la teoría del tema; si la IA no está disponible,
// se generan preguntas locales con la misma teoría para que el juego siempre funcione.

(() => {
    const MAX_VIDAS = 5;
    const PUNTOS_BASE = 10;
    const SEGUNDOS = 20;
    const FORMAS = ['▲', '◆', '●', '■'];
    const $ = (id) => document.getElementById(id);
    const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const mezclar = (l) => {
        const c = [...l];
        for (let i = c.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [c[i], c[j]] = [c[j], c[i]]; }
        return c;
    };
    const norm = (t) => String(t).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9ñ\s]/g, ' ').replace(/\s+/g, ' ').trim();

    let ctx = null;      // datos de la página de país
    let e = null;        // estado de la ronda
    let temporizador = null;
    let estadoIA = null; // { configurada, proveedor, modelo }
    let relojEspera = null;

    // ---------- Entrada y salida ----------
    function abrir(contexto) {
        ctx = contexto;
        document.querySelector('.app').classList.add('jugando');
        $('juego').hidden = false;
        $('juego').scrollIntoView({ block: 'start' });
        pantallaInicio();
    }

    function cerrar() {
        detenerTiempo();
        clearInterval(relojEspera);
        ctx.pro.guardar();
        $('juego').hidden = true;
        document.querySelector('.app').classList.remove('jugando');
        ctx.pro.pintar();
        ctx.alSalir?.();
        window.scrollTo(0, 0);
    }

    async function consultarIA() {
        if (estadoIA) return estadoIA;
        try {
            const r = await fetch(`${window.Sesion.API}/ia/estado`);
            estadoIA = await r.json();
        } catch { estadoIA = { configurada: false }; }
        return estadoIA;
    }

    // ---------- Cuenta regresiva de vidas ----------
    // Mientras no haya vidas, muestra cuánto falta; al llegar a 0 vuelve a la pantalla de inicio con las vidas completas.
    function vigilarEspera() {
        clearInterval(relojEspera);
        relojEspera = setInterval(() => {
            if (!ctx || $('juego').hidden) return clearInterval(relojEspera);
            const falta = ctx.pro.segundosParaVidas();
            document.querySelectorAll('.js-espera').forEach((el) => { el.textContent = ctx.pro.formato(falta); });
            cabecera(e?.fase === 'resultado' ? 1 : 0);
            if (ctx.pro.vidas() > 0 && (e.fase === 'inicio' || e.fase === 'resultado')) { clearInterval(relojEspera); pantallaInicio(); }
        }, 1000);
    }

    // ---------- Cabecera y pie ----------
    function cabecera(progreso = 0) {
        $('jProgreso').style.width = `${Math.round(progreso * 100)}%`;
        $('jVidas').textContent = ctx.pro.vidas();
        $('jPuntos').textContent = ctx.pro.puntos();
        $('jRacha').textContent = e ? e.racha : 0;
    }

    function limpiarPie() { $('juegoPie').innerHTML = ''; $('juegoPie').className = 'j-pie'; }

    $('juego').addEventListener('click', (ev) => {
        if (ev.target.closest('[data-salir]')) confirmarSalida();
    });

    // alTerminar: qué hacer cuando ya salió (por ejemplo, abrir otro tema del menú)
    function confirmarSalida(alTerminar) {
        const salir = () => { cerrar(); alTerminar?.(); };
        if (!ctx || $('juego').hidden) return alTerminar?.();
        if (!e || e.fase === 'inicio' || e.fase === 'resultado') return salir();
        if ($('juego').querySelector('.j-confirma')) return;
        const caja = document.createElement('div');
        caja.className = 'j-confirma';
        caja.innerHTML = `<div class="j-confirma-caja" role="alertdialog" aria-label="Salir del reto">
            <h2>¿Salir del reto?</h2>
            <p>Se guardan los puntos y las vidas que llevas, pero esta ronda se termina.</p>
            <div class="j-acciones"><button type="button" class="j-btn-sec" data-seguir>Seguir jugando</button><button type="button" class="j-btn-pri rojo" data-fuera>Salir</button></div>
        </div>`;
        $('juego').appendChild(caja);
        caja.querySelector('[data-seguir]').focus();
        caja.querySelector('[data-seguir]').onclick = () => caja.remove();
        caja.querySelector('[data-fuera]').onclick = () => { caja.remove(); salir(); };
    }

    // ---------- Pantalla de inicio ----------
    async function pantallaInicio() {
        detenerTiempo();
        e = { fase: 'inicio', racha: 0 };
        limpiarPie();
        cabecera(0);
        const t = ctx.tema;
        const sinVidas = ctx.pro.vidas() <= 0;
        const ia = await consultarIA();

        const alcances = [
            ['tema', '', 'Este tema', t.titulo],
            ['categoria', '', 'Toda la categoría', t.categoria.nombre],
            ['pais', '', `Todo ${ctx.PAIS.nombre}`, 'Mezcla de todos los temas'],
        ];
        $('juegoCuerpo').innerHTML = sinVidas ? `
            <div class="j-inicio">
                <div class="j-icono">💔</div>
                <h1>¡Te quedaste sin vidas!</h1>
                <div class="j-espera">Tus vidas se restablecen en <b class="js-espera">${ctx.pro.formato(ctx.pro.segundosParaVidas())}</b></div>
                <p>No puedes hacer más retos hasta que se restablezcan. Mientras tanto, repasa la teoría: lectura, historieta, mapa mental o tarjetas.</p>
                <div class="j-acciones"><button type="button" class="j-btn-pri" data-salir>Ir a repasar la teoría</button></div>
            </div>` : `
            <div class="j-inicio">
                <div class="j-icono"></div>
                <h1>¡Reto con IA!</h1>
                <p>La inteligencia artificial lee la teoría y crea preguntas distintas cada vez.</p>
                <div class="j-detecta" aria-label="Lo que se detectó">
                    <span><small>País</small> ${esc(ctx.PAIS.nombre)}</span>
                    <span><small>Categoría</small> ${esc(t.categoria.nombre)}</span>
                    <span><small>Subcategoría</small> ${esc(t.titulo)}</span>
                </div>
                <h2>¿Qué quieres practicar?</h2>
                <div class="j-alcances" role="radiogroup">
                    ${alcances.map(([v, i, n, d], k) => `
                        <label class="j-alcance"><input type="radio" name="alcance" value="${v}" ${k === 0 ? 'checked' : ''}>
                            <span><b>${i} ${esc(n)}</b><small>${esc(d)}</small></span></label>`).join('')}
                </div>
                <div class="j-opciones">
                    <div class="j-cuantas" role="radiogroup" aria-label="Número de preguntas">Preguntas:
                        ${[6, 8, 10].map((n) => `<label><input type="radio" name="cantidad" value="${n}" ${n === 8 ? 'checked' : ''}><span>${n}</span></label>`).join('')}
                    </div>
                    <label class="j-tiempo"><input type="checkbox" id="jTiempo"> Con tiempo (${SEGUNDOS} s por pregunta, más puntos si respondes rápido)</label>
                </div>
                <p class="j-ia-estado ${ia.configurada ? 'ok' : ''}">${ia.configurada ? `IA lista (${esc(ia.proveedor)})` : 'La IA no está configurada: se usarán preguntas hechas con la teoría del tema.'}</p>
                <div class="j-acciones"><button type="button" class="j-btn-sec" data-salir>Salir</button><button type="button" class="j-btn-pri" id="jComenzar">Comenzar</button></div>
            </div>`;
        if (sinVidas) vigilarEspera(); else clearInterval(relojEspera);
        if (sinVidas) return;
        $('jComenzar').focus();
        $('jComenzar').onclick = () => {
            clearInterval(relojEspera);
            const alcance = document.querySelector('input[name="alcance"]:checked').value;
            comenzar({
                alcance,
                cantidad: Number(document.querySelector('input[name="cantidad"]:checked').value),
                tiempo: $('jTiempo').checked,
                modo: 'reto',
            });
        };
    }

    // ---------- Preparar preguntas ----------
    function textoSecciones(t) {
        return t.secciones.map((s) => ({ titulo: `${t.titulo}${s.titulo ? ` — ${s.titulo}` : ''}`, texto: s.texto.join(' ') }));
    }

    function fuentesPara(alcance) {
        const t = ctx.tema;
        if (alcance === 'tema') {
            return [...textoSecciones(t), { titulo: `${t.titulo} — ideas clave y dato curioso`, texto: `${t.ideas.map((i) => `${i.t}: ${i.d}`).join(' ')} Dato curioso: ${t.dato}` }];
        }
        const temas = alcance === 'categoria' ? ctx.temas.filter((x) => x.categoria.id === t.categoria.id) : ctx.temas;
        const salida = [];
        let total = 0;
        for (const s of mezclar(temas.flatMap(textoSecciones))) {
            if (total + s.texto.length > 9000 || salida.length >= 12) continue;
            salida.push(s);
            total += s.texto.length;
        }
        return salida;
    }

    const claveEvitar = () => `evitar_${ctx.PAIS.iso}`;
    const leerEvitar = () => { try { return JSON.parse(localStorage.getItem(claveEvitar())) || []; } catch { return []; } };
    const guardarEvitar = (lista) => { try { localStorage.setItem(claveEvitar(), JSON.stringify(lista.slice(-25))); } catch { /* sin almacenamiento */ } };

    async function comenzar({ alcance, cantidad, tiempo, modo }) {
        if (ctx.pro.vidas() <= 0) return pantallaInicio(); // sin vidas no se juega
        e = { fase: 'cargando', alcance, cantidad, tiempo, modo, preguntas: [], i: 0, aciertos: 0, racha: 0, mejorRacha: 0, puntosRonda: 0, errores: 0, usaIA: false, aviso: '' };
        limpiarPie();
        cabecera(0);
        $('juegoCuerpo').innerHTML = `<div class="j-cargando"><div class="j-robot"></div><h2 id="jMensaje">Leyendo la teoría…</h2><div class="j-puntos"><i></i><i></i><i></i></div></div>`;
        const mensajes = ['Leyendo la teoría…', 'Pensando preguntas nuevas…', 'Mezclando tipos de preguntas…', 'Revisando que todo salga del texto…'];
        let k = 0;
        const rotar = setInterval(() => { k = (k + 1) % mensajes.length; if ($('jMensaje')) $('jMensaje').textContent = mensajes[k]; }, 1800);

        const fuentes = fuentesPara(alcance);
        try {
            const ia = await consultarIA();
            if (!ia.configurada || !window.Sesion?.token) throw new Error('sin-ia');
            const r = await fetch(`${window.Sesion.API}/ia/preguntas`, {
                method: 'POST',
                headers: window.Sesion.cabeceras(),
                body: JSON.stringify({
                    iso: ctx.PAIS.iso, pais: ctx.PAIS.nombre, categoria: ctx.tema.categoria.nombre,
                    tema: alcance === 'tema' ? ctx.tema.titulo : '', alcance, cantidad, fuentes, evitar: leerEvitar(),
                }),
            });
            const json = await r.json().catch(() => ({}));
            if (!r.ok) throw new Error(json.message || 'Error de la IA');
            e.preguntas = json.preguntas;
            e.usaIA = true;
        } catch (err) {
            e.preguntas = preguntasLocales(alcance, cantidad);
            e.aviso = err.message === 'sin-ia' ? '' : `No se pudo usar la IA (${err.message}). Se usaron preguntas hechas con la teoría del tema.`;
        } finally {
            clearInterval(rotar);
        }
        guardarEvitar([...leerEvitar(), ...e.preguntas.map((p) => p.enunciado)]);
        siguiente();
    }

    // Preguntas locales (respaldo): salen de las ideas clave y del banco de preguntas del tema
    function preguntasLocales(alcance, cantidad) {
        const t = ctx.tema;
        const temas = alcance === 'tema' ? [t] : alcance === 'categoria' ? ctx.temas.filter((x) => x.categoria.id === t.categoria.id) : ctx.temas;
        const todasIdeas = ctx.temas.flatMap((x) => x.ideas);
        const pool = [];
        for (const tm of temas) {
            for (const [enunciado, ops] of (tm.preguntas || [])) {
                const m = mezclar(ops);
                pool.push({ tipo: 'opcion', enunciado, opciones: m, correcta: m.indexOf(ops[0]), explicacion: '', cita: '' });
            }
            tm.ideas.forEach((idea, n) => {
                const otras = mezclar(tm.ideas.filter((_, k) => k !== n)).concat(mezclar(todasIdeas.filter((x) => !tm.ideas.includes(x))));
                const tit = mezclar([idea.t, ...otras.slice(0, 3).map((x) => x.t)]);
                pool.push({ tipo: 'opcion', enunciado: `¿A qué idea de «${tm.titulo}» corresponde esto? «${idea.d}»`, opciones: tit, correcta: tit.indexOf(idea.t), explicacion: `${idea.t}: ${idea.d}`, cita: '' });
                const verdadera = Math.random() < 0.5;
                const falsa = otras[0];
                pool.push({ tipo: 'vf', enunciado: `En «${tm.titulo}»: ${idea.t} → ${verdadera ? idea.d : falsa.d}`, opciones: ['Verdadero', 'Falso'], correcta: verdadera ? 0 : 1, explicacion: `${idea.t}: ${idea.d}`, cita: '' });
            });
            pool.push({ tipo: 'relacionar', enunciado: `Une cada idea de «${tm.titulo}» con su descripción`, opciones: [], correcta: -1, pares: tm.ideas.map((i) => ({ izq: i.t, der: i.d })), explicacion: '', cita: '' });
        }
        const elegidas = [];
        const usados = new Set();
        const mezcla = mezclar(pool);
        // se intenta repartir los tipos de pregunta
        for (const tipo of ['relacionar', 'vf', 'opcion', 'vf', 'opcion']) {
            const p = mezcla.find((x) => x.tipo === tipo && !usados.has(x));
            if (p && elegidas.length < cantidad) { elegidas.push(p); usados.add(p); }
        }
        for (const p of mezcla) { if (elegidas.length >= cantidad) break; if (!usados.has(p)) { elegidas.push(p); usados.add(p); } }
        return mezclar(elegidas);
    }

    // ---------- Jugar ----------
    function siguiente() {
        if (e.i >= e.preguntas.length) return pantallaResultado();
        e.fase = 'pregunta';
        e.respondida = false;
        limpiarPie();
        cabecera(e.i / e.preguntas.length);
        const p = e.preguntas[e.i];
        const insignia = e.usaIA ? '<span class="j-insignia ia">Pregunta creada por IA</span>' : '<span class="j-insignia">Del banco del tema</span>';
        const aviso = e.i === 0 && e.aviso ? `<p class="j-aviso">${esc(e.aviso)}</p>` : '';
        let cuerpo = '';
        if (p.tipo === 'vf') {
            cuerpo = `<div class="j-vf">
                <button type="button" class="j-resp vf-v" data-i="0"><span class="j-forma">✔</span> Verdadero</button>
                <button type="button" class="j-resp vf-f" data-i="1"><span class="j-forma">✖</span> Falso</button></div>`;
        } else if (p.tipo === 'relacionar') {
            const der = mezclar(p.pares.map((x, i) => ({ t: x.der, i })));
            cuerpo = `<div class="j-pares">
                <div class="j-col">${p.pares.map((x, i) => `<button type="button" class="j-par izq" data-i="${i}">${esc(x.izq)}</button>`).join('')}</div>
                <div class="j-col">${der.map((x) => `<button type="button" class="j-par der" data-i="${x.i}">${esc(x.t)}</button>`).join('')}</div></div>
                <p class="j-ayuda">Toca un concepto y luego su descripción.</p>`;
        } else {
            cuerpo = `<div class="j-opciones-grid">${p.opciones.map((o, i) => `<button type="button" class="j-resp k${i}" data-i="${i}"><span class="j-forma">${FORMAS[i]}</span><span>${esc(o)}</span></button>`).join('')}</div>`;
        }
        const etiqueta = { opcion: 'Elige la respuesta', vf: '¿Verdadero o falso?', completar: 'Completa la frase', relacionar: 'Relaciona' }[p.tipo];
        $('juegoCuerpo').innerHTML = `
            <div class="j-pregunta">
                <div class="j-meta"><span class="j-tipo">${etiqueta}</span>${insignia}<span class="j-num">${e.i + 1} / ${e.preguntas.length}</span></div>
                ${e.tiempo ? '<div class="j-tiempo-barra"><div id="jTiempoRelleno"></div></div>' : ''}
                <h2 class="j-enunciado">${esc(p.enunciado).replace('_____', '<span class="j-hueco">_____</span>')}</h2>
                ${aviso}${cuerpo}
            </div>`;
        if (p.tipo === 'relacionar') prepararPares(p); else prepararOpciones(p);
        if (e.tiempo) iniciarTiempo();
    }

    function prepararOpciones(p) {
        document.querySelectorAll('.j-resp').forEach((b) => {
            b.onclick = () => responder(Number(b.dataset.i) === p.correcta, b, p);
        });
    }

    function prepararPares(p) {
        let elegido = null;
        let errores = 0;
        let hechos = 0;
        const izq = [...document.querySelectorAll('.j-par.izq')];
        const der = [...document.querySelectorAll('.j-par.der')];
        izq.forEach((b) => {
            b.onclick = () => {
                if (b.classList.contains('listo') || e.respondida) return;
                izq.forEach((x) => x.classList.remove('sel'));
                b.classList.add('sel');
                elegido = b;
            };
        });
        der.forEach((b) => {
            b.onclick = () => {
                if (b.classList.contains('listo') || !elegido || e.respondida) return;
                if (elegido.dataset.i === b.dataset.i) {
                    [elegido, b].forEach((x) => { x.classList.remove('sel'); x.classList.add('listo'); });
                    elegido = null;
                    if (++hechos === p.pares.length) responder(errores === 0, null, p);
                } else {
                    errores++;
                    b.classList.add('mal');
                    elegido.classList.add('mal');
                    const par = [b, elegido];
                    setTimeout(() => par.forEach((x) => x.classList.remove('mal')), 500);
                }
            };
        });
    }

    // ---------- Tiempo ----------
    function iniciarTiempo() {
        const inicio = Date.now();
        e.inicioPregunta = inicio;
        temporizador = setInterval(() => {
            const restante = Math.max(0, 1 - (Date.now() - inicio) / (SEGUNDOS * 1000));
            const barra = $('jTiempoRelleno');
            if (barra) { barra.style.width = `${restante * 100}%`; barra.classList.toggle('poco', restante < 0.3); }
            if (restante <= 0) { detenerTiempo(); if (!e.respondida) responder(false, null, e.preguntas[e.i], true); }
        }, 100);
    }
    function detenerTiempo() { clearInterval(temporizador); temporizador = null; }

    // ---------- Responder ----------
    function responder(acerto, boton, p, sinTiempo = false) {
        if (e.respondida) return;
        e.respondida = true;
        detenerTiempo();
        document.querySelectorAll('.j-resp').forEach((b) => {
            b.disabled = true;
            if (Number(b.dataset.i) === p.correcta) b.classList.add('correcta');
        });
        if (boton && !acerto) boton.classList.add('incorrecta');
        document.querySelectorAll('.j-par').forEach((b) => { b.disabled = true; });

        let ganados = 0;
        if (acerto) {
            e.aciertos++;
            e.racha++;
            e.mejorRacha = Math.max(e.mejorRacha, e.racha);
            if (e.modo === 'reto') {
                const rapido = e.tiempo ? Math.round(5 * Math.max(0, 1 - (Date.now() - e.inicioPregunta) / (SEGUNDOS * 1000))) : 0;
                ganados = PUNTOS_BASE + Math.min(e.racha - 1, 5) * 2 + rapido;
                ctx.pro.sumarPuntos(ganados);
                ctx.pro.sumarCorrecta();
                e.puntosRonda += ganados;
            }
        } else {
            e.racha = 0;
            e.errores++;
            if (e.modo === 'reto') ctx.pro.perderVida();
        }
        cabecera((e.i + 1) / e.preguntas.length);

        const correctaTexto = p.tipo === 'relacionar' ? p.pares.map((x) => `${x.izq} → ${x.der}`).join(' · ') : p.opciones[p.correcta];
        const sinVidas = e.modo === 'reto' && ctx.pro.vidas() <= 0;
        const pie = $('juegoPie');
        pie.className = `j-pie ${acerto ? 'ok' : 'mal'} visible`;
        pie.innerHTML = `
            <div class="j-pie-caja">
                <div class="j-pie-icono" aria-hidden="true"></div>
                <div class="j-pie-texto" role="status" aria-live="polite">
                    <strong>${acerto ? (e.racha >= 3 ? `¡Increíble! Racha de ${e.racha}` : '¡Correcto!') : (sinTiempo ? '¡Se acabó el tiempo!' : 'Casi…')}${ganados ? ` <span class="j-mas">+${ganados}</span>` : ''}</strong>
                    ${acerto ? '' : `<p>Respuesta correcta: <b>${esc(correctaTexto)}</b></p>`}
                    ${p.explicacion ? `<p>${esc(p.explicacion)}</p>` : ''}
                    ${p.cita ? `<p class="j-cita">En el texto: «${esc(p.cita)}»</p>` : ''}
                    ${!acerto && e.modo === 'reto' ? (sinVidas ? `<p class="j-vida">Perdiste tu última vida 💔. No podrás hacer más retos hasta que se restablezcan, en 5 minutos.</p>` : `<p class="j-vida">Perdiste una vida ❤️ (te quedan ${ctx.pro.vidas()})</p>`) : ''}
                </div>
                <button type="button" class="j-btn-pri" id="jContinuar">${sinVidas || e.i === e.preguntas.length - 1 ? 'Ver resultado' : 'Continuar'}</button>
            </div>`;
        $('jContinuar').focus();
        $('jContinuar').onclick = () => { e.i++; if (sinVidas) { e.sinVidas = true; pantallaResultado(); } else siguiente(); };
    }

    document.addEventListener('keydown', (ev) => {
        if (!ctx || $('juego').hidden) return;
        const continuar = $('jContinuar');
        if (ev.key === 'Enter' && continuar && document.activeElement !== continuar) { ev.preventDefault(); continuar.click(); }
        // atajos 1-4 para elegir opción
        if (e?.fase === 'pregunta' && !e.respondida && /^[1-4]$/.test(ev.key)) document.querySelectorAll('.j-resp')[Number(ev.key) - 1]?.click();
    });

    // ---------- Resultado ----------
    async function pantallaResultado() {
        detenerTiempo();
        e.fase = 'resultado';
        limpiarPie();
        cabecera(1);
        const total = e.preguntas.length;
        const pct = Math.round((e.aciertos / total) * 100);
        const estrellas = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 50 ? 1 : 0;
        let titulo; let detalle; let icono;
        let completoTema = false;

        if (e.modo === 'recuperacion') {
            const ok = e.aciertos >= 3;
            if (ok) ctx.pro.restaurarVidas();
            icono = ok ? '' : '';
            titulo = ok ? '¡Vidas recuperadas!' : 'Aún no alcanzas';
            detalle = ok ? `Tienes de nuevo ${MAX_VIDAS} vidas.` : 'Necesitas 3 aciertos. Repasa la teoría e inténtalo otra vez.';
        } else {
            completoTema = e.alcance === 'tema' && !e.sinVidas && pct >= 60;
            if (completoTema) ctx.pro.completar(ctx.tema.id, e.aciertos, total);
            icono = e.sinVidas ? '' : '';
            titulo = e.sinVidas ? 'Te quedaste sin vidas' : (pct >= 90 ? '¡Eres un experto!' : pct >= 60 ? '¡Muy bien!' : 'Sigue practicando');
            detalle = completoTema ? 'Este tema queda como completado.'
                : e.sinVidas ? 'No podrás hacer más retos hasta que se restablezcan. Repasa la teoría mientras tanto.'
                    : e.alcance === 'tema' ? 'Necesitas al menos 60 % de aciertos para completar el tema.' : 'Los puntos ya suman a tu progreso.';
        }
        const nuevasInsignias = await ctx.pro.guardar(completoTema ? { id: ctx.tema.id, correctas: e.aciertos, total } : undefined, {
            mejorRacha: e.mejorRacha,
            rondaPerfecta: e.modo === 'reto' && e.aciertos === total && total >= 5,
        });
        ctx.pro.pintar();
        cabecera(1);

        $('juegoCuerpo').innerHTML = `
            <div class="j-resultado">
                ${icono ? `<div class="j-icono">${icono}</div>` : ''}
                <h1>${titulo}</h1>
                <div class="j-estrellas" aria-label="${estrellas} de 3 estrellas">${[1, 2, 3].map((n) => `<span class="${n <= estrellas ? 'on' : ''}">★</span>`).join('')}</div>
                <div class="j-datos">
                    <div><strong>${e.aciertos}/${total}</strong><span>Correctas</span></div>
                    <div><strong>${pct}%</strong><span>Aciertos</span></div>
                    <div><strong>⭐ ${e.puntosRonda}</strong><span>Puntos ganados</span></div>
                    <div><strong>${e.mejorRacha}</strong><span>Mejor racha</span></div>
                </div>
                <p>${esc(detalle)}</p>
                ${(nuevasInsignias || []).map((i) => `<div class="j-insignia-nueva"><span class="j-insignia-icono">${esc(i.icono)}</span><div><small>¡Nueva insignia!</small><b>${esc(i.nombre)}</b><span>${esc(i.descripcion)}${i.puntos ? ` · +${i.puntos} puntos` : ''}</span></div></div>`).join('')}
                ${e.sinVidas && e.modo === 'reto' ? `<div class="j-espera">Tus vidas se restablecen en <b class="js-espera">${ctx.pro.formato(ctx.pro.segundosParaVidas())}</b></div>` : ''}
                <div class="j-acciones">
                    <button type="button" class="j-btn-sec" data-salir>Salir</button>
                    ${e.modo === 'reto' && ctx.pro.vidas() > 0 ? '<button type="button" class="j-btn-pri" id="jOtra">Otra ronda con preguntas nuevas</button>' : ''}
                    ${e.modo === 'recuperacion' && e.aciertos < 3 ? '<button type="button" class="j-btn-pri" id="jOtra">Intentar de nuevo</button>' : ''}
                    ${e.modo === 'recuperacion' && e.aciertos >= 3 ? '<button type="button" class="j-btn-pri" id="jOtra">Volver al reto</button>' : ''}
                </div>
            </div>`;
        if (e.sinVidas && e.modo === 'reto') {
            vigilarEspera();
        }
        const otra = $('jOtra');
        if (otra) {
            otra.focus();
            otra.onclick = () => {
                if (e.modo === 'recuperacion' && e.aciertos >= 3) return pantallaInicio();
                comenzar({ alcance: e.alcance, cantidad: e.cantidad, tiempo: e.tiempo, modo: e.modo });
            };
        }
    }

    window.Juego = { abrir, salir: confirmarSalida, activo: () => Boolean(ctx) && !$('juego').hidden };
})();
