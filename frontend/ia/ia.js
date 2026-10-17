// Asistente de IA: preguntas libres e historial guardado en la base de datos.
(() => {
  const $ = (id) => document.getElementById(id);
  const API = () => window.Sesion.API;
  const CONSEJOS = [
    'Prueba preguntar: "Resume la importancia de los códices mayas y su sistema numérico."',
    'Prueba con: "¿Por qué el maíz es tan importante en la cultura mexicana?"',
    'Sube la foto de una pirámide, una pintura o una escultura y pídele a la IA que te cuente su historia.',
    'Puedes pedir una respuesta "Muy sencilla" en Opciones si quieres un resumen fácil de entender.',
    'Pregunta por comparaciones: "¿En qué se parecen y en qué se diferencian los mayas y los mexicas?"',
  ];

  let historial = [];
  let filtro = 'all';
  let stats = { total: 0, favoritas: 0, usadasHoy: 0, limite: 50 };
  let ultima = null;         // { id, pregunta, respuesta, favorita } de la respuesta que se ve en pantalla
  let enviando = false;

  // ---------- Utilidades ----------
  const esc = (t) => String(t ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  async function api(ruta, opciones = {}) {
    const resp = await fetch(`${API()}${ruta}`, { ...opciones, headers: window.Sesion.cabeceras() });
    const json = await resp.json().catch(() => ({}));
    if (!resp.ok) throw Object.assign(new Error(json.message || 'Ocurrió un error'), { estado: resp.status, datos: json });
    return json;
  }

  // Markdown sencillo y seguro: primero se escapa todo el HTML y después se aplican los estilos
  function markdown(texto) {
    const inline = (t) => esc(t).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/(^|[^*])\*(?!\s)(.+?)\*(?!\*)/g, '$1<em>$2</em>');
    const lineas = String(texto).replace(/\r/g, '').split('\n');
    let html = '';
    let lista = null;
    const cerrar = () => { if (lista) { html += `</${lista}>`; lista = null; } };
    for (const crudo of lineas) {
      const l = crudo.trim();
      let m;
      if (!l) { cerrar(); continue; }
      if ((m = l.match(/^#{1,4}\s+(.*)$/))) { cerrar(); html += `<h3>${inline(m[1])}</h3>`; }
      else if ((m = l.match(/^[-*•]\s+(.*)$/))) { if (lista !== 'ul') { cerrar(); html += '<ul>'; lista = 'ul'; } html += `<li>${inline(m[1])}</li>`; }
      else if ((m = l.match(/^\d+[.)]\s+(.*)$/))) { if (lista !== 'ol') { cerrar(); html += '<ol>'; lista = 'ol'; } html += `<li>${inline(m[1])}</li>`; }
      else { cerrar(); html += `<p>${inline(l)}</p>`; }
    }
    cerrar();
    return html;
  }
  const textoPlano = (md) => String(md).replace(/[#*_`]/g, '').replace(/\s+\n/g, '\n');

  function aviso(texto) {
    const caja = $('avisoError');
    caja.hidden = !texto;
    caja.textContent = texto || '';
  }

  function fechaBonita(iso) {
    const d = new Date(iso);
    const hoy = new Date();
    const ayer = new Date(); ayer.setDate(hoy.getDate() - 1);
    const hora = d.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
    if (d.toDateString() === hoy.toDateString()) return `Hoy, ${hora}`;
    if (d.toDateString() === ayer.toDateString()) return `Ayer, ${hora}`;
    return `${d.toLocaleDateString('es-CO', { day: 'numeric', month: 'short' })}, ${hora}`;
  }

  function toast(texto) {
    let t = document.getElementById('toastIA');
    if (!t) {
      t = document.createElement('div');
      t.id = 'toastIA';
      t.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#2d2a5a;color:#fff;padding:10px 20px;border-radius:30px;font-size:14px;z-index:3000;box-shadow:0 6px 20px rgba(0,0,0,.25)';
      document.body.appendChild(t);
    }
    t.textContent = texto;
    t.style.display = 'block';
    clearTimeout(t._f);
    t._f = setTimeout(() => { t.style.display = 'none'; }, 2200);
  }

  // ---------- Vistas ----------
  const TITULOS = {
    'nueva-pregunta': ['Asistente AI: Tu Puerta al Conocimiento', 'Escribe tu consulta para explorar la historia, el arte y la cultura'],
    'consultas-pasadas': ['Mis Consultas Pasadas', 'Revisa y repasa tus búsquedas anteriores e historia explorada'],
  };

  function cambiarVista(nombre) {
    document.querySelectorAll('.view-section').forEach((s) => s.classList.remove('active'));
    document.querySelectorAll('.nav-link[data-view]').forEach((l) => l.classList.toggle('active', l.dataset.view === nombre));
    $(`view-${nombre}`)?.classList.add('active');
    $('viewTitle').textContent = TITULOS[nombre][0];
    $('viewSubtitle').textContent = TITULOS[nombre][1];
    if (nombre === 'consultas-pasadas') cargarHistorial();
  }

  // ---------- Cifras internas (el límite diario lo aplica el servidor) ----------
  const actualizarStats = (datos) => {
    for (const k of ['total', 'favoritas', 'usadasHoy', 'limite']) if (datos && datos[k] !== undefined) stats[k] = datos[k];
    const f = document.getElementById('favFilterCount');
    if (f) f.textContent = stats.favoritas;
  };

  // ---------- Enviar una pregunta ----------
  async function enviar({ texto, origen = 'texto' }) {
    if (enviando) return;
    texto = (texto || '').trim();
    if (texto.length < 3) { aviso('Escribe una pregunta un poco más completa antes de enviar.'); $('userInput').focus(); return; }
    aviso('');
    enviando = true;
    cambiarVista('nueva-pregunta');

    const boton = $('sendBtn');
    boton.disabled = true;
    boton.innerHTML = 'Pensando...';
    const tarjeta = $('responseContainer');
    tarjeta.style.display = 'flex';
    $('preguntaHecha').textContent = texto;
    $('responseBody').innerHTML = '<div class="cargando-ia">La IA está buscando y ordenando la información…</div>';
    $('timestamp').textContent = 'Pensando…';
    tarjeta.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    try {
      const r = await api('/ia/consultar', {
        method: 'POST',
        body: JSON.stringify({
          pregunta: texto,
          origen,
          extension: $('optExtension').value,
          nivel: $('optNivel').value,
          previo: ultima ? { pregunta: ultima.pregunta, respuesta: ultima.respuesta } : undefined,
        }),
      });
      ultima = { id: r.id, pregunta: texto, respuesta: r.respuesta, favorita: false };
      $('responseBody').innerHTML = markdown(r.respuesta);
      $('timestamp').textContent = 'Justo ahora';
      $('favBtn').classList.remove('activo');
      $('favBtn').innerHTML = 'Favorita';
      $('likeBtn').classList.remove('activo');
      $('tipText').textContent = CONSEJOS[Math.floor(Math.random() * CONSEJOS.length)];
      historial.unshift({ id: r.id, origen, pregunta: texto, respuesta: r.respuesta, favorita: false, fecha: r.fecha });
      actualizarStats(r);
      pintarRecursos(r.recursos, r.siguientes, texto);
      $('userInput').value = '';
    } catch (error) {
      tarjeta.style.display = 'none';
      aviso(error.message);
      if (error.datos?.usadasHoy !== undefined) actualizarStats(error.datos);
    } finally {
      enviando = false;
      boton.disabled = false;
      boton.innerHTML = 'Enviar Pregunta';
    }
  }

  const enviarEscrita = () => enviar({ texto: $('userInput').value });

  // ---------- Acciones de la respuesta ----------
  async function alternarFavorita(id, valor) {
    const datos = await api(`/ia/historial/${id}/favorita`, { method: 'PUT', body: JSON.stringify({ favorita: valor }) });
    const h = historial.find((x) => x.id === id);
    if (h) h.favorita = valor;
    actualizarStats(datos);
  }

  $('favBtn').addEventListener('click', async () => {
    if (!ultima) return;
    try {
      ultima.favorita = !ultima.favorita;
      await alternarFavorita(ultima.id, ultima.favorita);
      $('favBtn').classList.toggle('activo', ultima.favorita);
      $('favBtn').innerHTML = ultima.favorita ? 'Guardada' : 'Favorita';
      toast(ultima.favorita ? 'Guardada en favoritas' : 'Quitada de favoritas');
    } catch (e) { ultima.favorita = !ultima.favorita; aviso(e.message); }
  });
  $('likeBtn').addEventListener('click', (ev) => { ev.currentTarget.classList.toggle('activo'); ev.currentTarget.innerHTML = ev.currentTarget.classList.contains('activo') ? 'Te gustó' : 'Me gusta'; });
  $('copyBtn').addEventListener('click', async () => {
    if (!ultima) return;
    try { await navigator.clipboard.writeText(textoPlano(ultima.respuesta)); toast('Respuesta copiada'); } catch { toast('No se pudo copiar'); }
  });

  // ---------- Recursos recomendados (según la pregunta hecha) ----------
  // Los enlaces son búsquedas (Wikipedia, YouTube, Google Arts & Culture) con los términos que propone la IA: así no hay direcciones inventadas.
  function pintarRecursos(recursos = [], siguientes = [], pregunta = '') {
    const terminos = recursos.length ? recursos : [pregunta.replace(/[¿?¡!]/g, '').slice(0, 80)];
    $('recursosVacio').hidden = true;
    $('recursosLista').innerHTML = terminos.map((t) => {
      const q = encodeURIComponent(t);
      return `<div class="recurso">
        <div class="recurso-titulo">${esc(t)}</div>
        <div class="recurso-enlaces">
          <a href="https://es.wikipedia.org/w/index.php?search=${q}" target="_blank" rel="noopener noreferrer">Leer</a>
          <a href="https://www.youtube.com/results?search_query=${q}" target="_blank" rel="noopener noreferrer">Videos</a>
          <a href="https://artsandculture.google.com/search?q=${q}" target="_blank" rel="noopener noreferrer">Arte y museos</a>
        </div></div>`;
    }).join('');
    $('siguientesBloque').hidden = !siguientes.length;
    $('siguientesLista').innerHTML = siguientes.map((p) => `<li data-pregunta="${esc(p)}"><span>${esc(p)}</span></li>`).join('');
  }
  $('siguientesLista').addEventListener('click', (ev) => {
    const li = ev.target.closest('li[data-pregunta]');
    if (li) enviar({ texto: li.dataset.pregunta });
  });

  // ---------- Opciones de la respuesta ----------
  $('btnOpciones').addEventListener('click', () => {
    const panel = $('panelOpciones');
    panel.hidden = !panel.hidden;
    $('btnOpciones').classList.toggle('activo', !panel.hidden);
  });
  // ---------- Historial ----------
  async function cargarHistorial() {
    try {
      const r = await api('/ia/historial');
      historial = r.consultas;
      actualizarStats(r);
    } catch (e) { aviso(e.message); }
    pintarHistorial();
  }

  function pintarHistorial() {
    const cont = $('historyListContainer');
    const buscar = $('historySearch').value.toLowerCase();
    const lista = historial.filter((h) => (h.pregunta + ' ' + h.respuesta).toLowerCase().includes(buscar) && (filtro === 'fav' ? h.favorita : true));
    if (!lista.length) {
      cont.innerHTML = `<div class="card text-center" style="padding: 30px; color: #8f8fa8;"><p>${historial.length ? 'No hay consultas que coincidan.' : 'Aún no has hecho consultas. ¡Haz tu primera pregunta!'}</p></div>`;
      return;
    }
    cont.innerHTML = lista.map((h) => `
      <div class="history-item" data-id="${h.id}">
        <div class="history-item-header">
          <span class="history-q">${esc(h.pregunta)}</span>
          <span class="history-date">${esc(fechaBonita(h.fecha))}</span>
        </div>
        <div class="history-a markdown">${markdown(h.respuesta || '')}</div>
        <div class="history-item-footer">
          <button class="btn-link" data-accion="repetir">Repetir consulta</button>
          <span>
            <button class="btn-icon borrar" data-accion="borrar" title="Borrar">Borrar</button>
            <button class="btn-icon ${h.favorita ? 'active' : ''}" data-accion="fav" title="Favorita">${h.favorita ? 'Guardada' : 'Favorita'}</button>
          </span>
        </div>
      </div>`).join('');
  }

  $('historyListContainer').addEventListener('click', async (ev) => {
    const boton = ev.target.closest('[data-accion]');
    if (!boton) return;
    const id = Number(boton.closest('.history-item').dataset.id);
    const h = historial.find((x) => x.id === id);
    try {
      if (boton.dataset.accion === 'fav') { await alternarFavorita(id, !h.favorita); pintarHistorial(); }
      if (boton.dataset.accion === 'borrar') {
        if (!confirm('¿Borrar esta consulta de tu historial?')) return;
        actualizarStats(await api(`/ia/historial/${id}`, { method: 'DELETE' }));
        historial = historial.filter((x) => x.id !== id);
        pintarHistorial();
      }
      if (boton.dataset.accion === 'repetir') enviar({ texto: h.pregunta.replace(/\s*📷$/, '') });
    } catch (e) { aviso(e.message); }
  });
  $('historySearch').addEventListener('input', pintarHistorial);
  document.querySelectorAll('.filter-btn').forEach((b) => b.addEventListener('click', () => {
    filtro = b.dataset.filtro;
    document.querySelectorAll('.filter-btn').forEach((x) => x.classList.toggle('active', x === b));
    pintarHistorial();
  }));

  // ---------- Conexiones generales ----------
  $('sendBtn').addEventListener('click', enviarEscrita);
  $('userInput').addEventListener('keydown', (ev) => { if (ev.key === 'Enter' && (ev.ctrlKey || ev.metaKey)) { ev.preventDefault(); enviarEscrita(); } });

  document.querySelectorAll('.nav-link[data-view]').forEach((l) => l.addEventListener('click', (ev) => { ev.preventDefault(); cambiarVista(l.dataset.view); }));
  // ---------- Inicio ----------
  (async () => {
    try {
      const estado = await (await fetch(`${API()}/ia/estado`)).json();
      if (!estado.configurada) aviso('El asistente aún no está configurado: falta la clave de la IA en el servidor (archivo .env).');
    } catch { aviso('No hay conexión con el servidor. Abre la página desde http://localhost:4000 con el backend encendido.'); }
    try { const r = await api('/ia/historial'); historial = r.consultas; actualizarStats(r); } catch { /* se mostrará al abrir el historial */ }
    $('tipText').textContent = CONSEJOS[Math.floor(Math.random() * CONSEJOS.length)];
  })();
})();
