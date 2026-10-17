// Sesión compartida: protege las páginas, muestra el perfil (configuración / cerrar sesión)
// y hace que "Inicio" lleve al mapa cuando ya se inició sesión.

(() => {
    const API = (location.hostname === 'localhost' || location.hostname === '127.0.0.1') && location.port !== '4000' ? 'http://localhost:4000/api' : '/api';
    const PAGINAS_PUBLICAS = ['inicio', 'iniciosesion', 'registro'];
    const carpeta = location.pathname.split('/').filter(Boolean).slice(-2, -1)[0] || '';
    const esPublica = PAGINAS_PUBLICAS.includes(carpeta);

    const leer = (clave) => { try { return localStorage.getItem(clave); } catch { return null; } };
    const guardar = (clave, valor) => { try { localStorage.setItem(clave, valor); } catch { /* sin almacenamiento */ } };

    const token = leer('token');
    let usuario = null;
    try { usuario = JSON.parse(leer('usuario')); } catch { /* sin usuario */ }
    const conSesion = Boolean(token && usuario);

    // Las fotos subidas viven en el servidor (/uploads/...); las de Google son enlaces completos
    const origenServidor = API.replace(/\/api$/, '');
    const urlAvatar = (a) => (!a ? '' : a.startsWith('/') ? origenServidor + a : a);

    window.Sesion = {
        API,
        token,
        usuario,
        conSesion,
        urlAvatar,
        // Guarda los datos nuevos del usuario (por ejemplo, tras editar el perfil)
        guardarUsuario(nuevo) {
            try { localStorage.setItem('usuario', JSON.stringify(nuevo)); } catch { /* sin almacenamiento */ }
            window.Sesion.usuario = nuevo;
        },
        cabeceras: () => ({ 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }),
        cerrar() {
            try { localStorage.removeItem('token'); localStorage.removeItem('usuario'); } catch { /* nada */ }
            location.href = '../iniciosesion/iniciosesion.html';
        },
    };

    // Páginas privadas: sin sesión se vuelve al inicio de sesión
    if (!esPublica && !conSesion) {
        location.replace('../iniciosesion/iniciosesion.html');
        return;
    }

    // ---------- Preferencias de accesibilidad ----------
    const prefs = (() => { try { return JSON.parse(leer('preferencias')) || {}; } catch { return {}; } })();
    const aplicarPrefs = () => {
        document.documentElement.classList.toggle('pref-lectura-facil', Boolean(prefs.lecturaFacil));
        document.documentElement.classList.toggle('pref-sin-movimiento', Boolean(prefs.sinMovimiento));
        document.documentElement.classList.toggle('pref-texto-grande', Boolean(prefs.textoGrande));
    };
    aplicarPrefs();
    window.Sesion.prefs = prefs;

    const estilo = document.createElement('style');
    estilo.textContent = `
        .pref-lectura-facil body, .pref-lectura-facil button, .pref-lectura-facil input { font-family: 'Lexend','Verdana',sans-serif !important; letter-spacing:.04em; word-spacing:.12em; line-height:1.8; }
        .pref-texto-grande body { font-size: 112%; }
        .pref-sin-movimiento *, .pref-sin-movimiento *::before, .pref-sin-movimiento *::after { animation: none !important; transition: none !important; }
        .perfil-wrap { position: relative; font-family: 'Poppins', sans-serif; z-index: 3000; }
        .perfil-wrap.flotante { position: fixed; top: 12px; right: 16px; }
        .perfil-boton { display:flex; align-items:center; gap:8px; background:#fff; border:2px solid #e3e8f0; border-radius:40px; padding:4px 12px 4px 4px; cursor:pointer; box-shadow:0 2px 8px rgba(0,0,0,.1); font:inherit; }
        .perfil-avatar { width:34px; height:34px; border-radius:50%; background:linear-gradient(135deg,#4A90FF,#2ECC71); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700; overflow:hidden; }
        .perfil-avatar img { width:100%; height:100%; object-fit:cover; }
        .perfil-nombre { font-weight:600; font-size:13px; color:#24324A; max-width:110px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
        .perfil-menu { display:none; position:absolute; right:0; top:48px; width:230px; background:#fff; border-radius:16px; box-shadow:0 10px 30px rgba(0,0,0,.2); padding:10px; }
        .perfil-menu.abierto { display:block; }
        .perfil-menu .datos { padding:8px 10px 10px; border-bottom:1px solid #eee; margin-bottom:6px; font-size:13px; color:#555; }
        .perfil-menu .datos strong { display:block; color:#24324A; font-size:14px; }
        .perfil-menu button { width:100%; text-align:left; background:none; border:none; padding:10px; border-radius:10px; cursor:pointer; font:inherit; font-size:14px; color:#24324A; }
        .perfil-menu button:hover { background:#f1f5ff; }
        .perfil-menu button.salir { color:#c62828; }
        .modal-config { position:fixed; inset:0; background:rgba(0,0,0,.5); display:none; align-items:center; justify-content:center; z-index:4000; font-family:'Poppins',sans-serif; }
        .modal-config.abierto { display:flex; }
        .modal-config .caja { background:#fff; border-radius:20px; padding:26px; width:min(420px,92vw); }
        .modal-config h2 { margin-bottom:14px; color:#24324A; }
        .modal-config label { display:flex; gap:10px; align-items:flex-start; padding:10px 0; border-bottom:1px solid #eee; cursor:pointer; color:#333; font-size:14px; }
        .modal-config label small { display:block; color:#777; }
        .modal-config .cerrar { margin-top:16px; width:100%; padding:12px; border:none; border-radius:12px; background:#4A90FF; color:#fff; font-size:15px; cursor:pointer; }
    `;
    document.head.appendChild(estilo);

    // ---------- Perfil ----------
    function crearPerfil() {
        const usuario = window.Sesion.usuario; // se vuelve a leer: puede cambiar al editar el perfil
        const inicial = (usuario.nombreCompleto || usuario.nombreUsuario || '?').trim()[0].toUpperCase();
        const contenedor = document.getElementById('perfil-widget') || (() => {
            const d = document.createElement('div');
            d.className = 'flotante';
            d.id = 'perfil-widget';
            document.body.appendChild(d);
            return d;
        })();
        contenedor.classList.add('perfil-wrap');
        contenedor.innerHTML = `
            <button class="perfil-boton" type="button" aria-haspopup="true" aria-label="Abrir menú del perfil">
                <span class="perfil-avatar">${usuario.avatar ? `<img src="${urlAvatar(usuario.avatar)}" alt="" referrerpolicy="no-referrer">` : inicial}</span>
                <span class="perfil-nombre"></span>
            </button>
            <div class="perfil-menu">
                <div class="datos"><strong></strong><span class="rango"></span></div>
                <button type="button" data-accion="perfil">Mi perfil</button>
                <button type="button" data-accion="config">Configuración</button>
                <button type="button" data-accion="salir" class="salir">Cerrar sesión</button>
            </div>`;
        contenedor.querySelector('.perfil-nombre').textContent = usuario.nombreUsuario;
        contenedor.querySelector('.datos strong').textContent = usuario.nombreCompleto;
        contenedor.querySelector('.rango').textContent = `${usuario.rango || 'Explorador'} · ${usuario.correo}`;

        const menu = contenedor.querySelector('.perfil-menu');
        contenedor.querySelector('.perfil-boton').addEventListener('click', (e) => { e.stopPropagation(); menu.classList.toggle('abierto'); });
        document.addEventListener('click', () => menu.classList.remove('abierto'));
        contenedor.querySelector('[data-accion="salir"]').addEventListener('click', () => window.Sesion.cerrar());
        contenedor.querySelector('[data-accion="perfil"]').addEventListener('click', () => { location.href = '../perfil/perfil.html'; });
        contenedor.querySelector('[data-accion="config"]').addEventListener('click', () => { menu.classList.remove('abierto'); abrirConfig(); });
    }

    function abrirConfig() {
        let modal = document.getElementById('modal-config');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'modal-config';
            modal.className = 'modal-config';
            modal.innerHTML = `
                <div class="caja" role="dialog" aria-label="Configuración">
                    <h2>Configuración</h2>
                    <label><input type="checkbox" data-pref="lecturaFacil"><span>Lectura fácil<small>Letra más separada y clara (ayuda con dislexia).</small></span></label>
                    <label><input type="checkbox" data-pref="textoGrande"><span>Texto más grande</span></label>
                    <label><input type="checkbox" data-pref="sinMovimiento"><span>Sin animaciones<small>Menos distracciones y movimiento en pantalla.</small></span></label>
                    <button class="cerrar" type="button">Listo</button>
                </div>`;
            document.body.appendChild(modal);
            modal.querySelectorAll('[data-pref]').forEach((c) => {
                c.checked = Boolean(prefs[c.dataset.pref]);
                c.addEventListener('change', () => { prefs[c.dataset.pref] = c.checked; guardar('preferencias', JSON.stringify(prefs)); aplicarPrefs(); });
            });
            modal.querySelector('.cerrar').addEventListener('click', () => modal.classList.remove('abierto'));
            modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('abierto'); });
        }
        modal.classList.add('abierto');
    }

    window.Sesion.pintarPerfil = () => { if (conSesion && !esPublica) crearPerfil(); };

    document.addEventListener('DOMContentLoaded', () => {
        if (conSesion && !esPublica) crearPerfil();

        // Con la sesión iniciada, "Inicio" y "Iniciar sesión" llevan al mapa
        if (conSesion) {
            document.querySelectorAll('a[href$="inicio/inicio.html"], a[href$="iniciosesion/iniciosesion.html"]').forEach((a) => {
                if (carpeta === 'iniciosesion' || carpeta === 'registro') return;
                a.setAttribute('href', a.getAttribute('href').replace(/(inicio|iniciosesion)\/(inicio|iniciosesion)\.html$/, 'explorarmapa/explorarmapa.html'));
            });
            if (carpeta === 'inicio') {
                document.querySelectorAll('a.btn-outline-light').forEach((a) => { a.textContent = 'Ir al mapa'; });
            }
        }
    });
})();
