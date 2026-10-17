// Mi perfil: editar datos, subir foto y cambiar la contraseña.
(() => {
    const $ = (id) => document.getElementById(id);
    const API = window.Sesion.API;
    let perfil = null;

    async function api(ruta, opciones = {}) {
        let resp;
        try {
            resp = await fetch(`${API}/perfil${ruta}`, { ...opciones, headers: window.Sesion.cabeceras() });
        } catch {
            throw new Error('No hay conexión con el servidor. ¿Está encendido "npm run dev"?');
        }
        const json = await resp.json().catch(() => ({}));
        if (!resp.ok) throw new Error(json.message || 'Ocurrió un error');
        return json;
    }

    function mensaje(id, texto, tipo = '') {
        const m = $(id);
        m.textContent = texto;
        m.className = `mensaje ${tipo}`;
    }

    // ---------- Pintar los datos ----------
    function pintar(u) {
        perfil = u;
        $('nombreCompleto').value = u.nombreCompleto;
        $('correo').value = u.correo;
        $('nombreUsuario').value = u.nombreUsuario;

        $('resNombre').textContent = u.nombreCompleto;
        $('resUsuario').textContent = `@${u.nombreUsuario} · ${u.correo}`;
        $('resRango').textContent = `${u.rango}`;
        $('resPuntos').textContent = `⭐ ${Number(u.puntos).toLocaleString('es-CO')} puntos`;
        $('resRol').textContent = `${u.rol}`;
        $('resDesde').textContent = `Miembro desde ${new Date(u.fechaRegistro).toLocaleDateString('es-CO', { month: 'long', year: 'numeric' })}`;

        const foto = window.Sesion.urlAvatar(u.avatar);
        $('fotoImg').hidden = !foto;
        if (foto) $('fotoImg').src = foto;
        $('fotoInicial').textContent = (u.nombreCompleto || u.nombreUsuario || '?').trim()[0].toUpperCase();
        $('btnQuitarFoto').hidden = !u.avatar;

        // Cuentas de Google sin contraseña: pueden crear una sin escribir la actual
        $('bloqueActual').hidden = !u.tieneContrasena;
        $('notaContrasena').textContent = u.tieneContrasena
            ? 'Usa una contraseña de mínimo 6 caracteres que no uses en otros sitios.'
            : 'Entraste con Google y aún no tienes contraseña. Puedes crear una para entrar también con tu correo.';
        $('btnClave').textContent = u.tieneContrasena ? 'Cambiar contraseña' : 'Crear contraseña';
    }

    // Mantiene sincronizados el almacenamiento del navegador y el menú de perfil de la barra superior
    function sincronizarSesion(u) {
        window.Sesion.guardarUsuario({
            id: u.id, rol: u.rol, nombreCompleto: u.nombreCompleto, correo: u.correo,
            nombreUsuario: u.nombreUsuario, avatar: u.avatar, puntos: u.puntos, rango: u.rango,
        });
        window.Sesion.pintarPerfil?.();
    }

    // ---------- Datos personales ----------
    $('formDatos').addEventListener('submit', async (ev) => {
        ev.preventDefault();
        mensaje('msgDatos', '');
        ['nombreCompleto', 'correo', 'nombreUsuario'].forEach((c) => $(c).classList.remove('invalido'));
        const datos = {
            nombreCompleto: $('nombreCompleto').value.trim(),
            correo: $('correo').value.trim(),
            nombreUsuario: $('nombreUsuario').value.trim(),
        };
        if (datos.nombreCompleto.length < 3) { $('nombreCompleto').classList.add('invalido'); return mensaje('msgDatos', 'Escribe tu nombre completo.', 'error'); }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.correo)) { $('correo').classList.add('invalido'); return mensaje('msgDatos', 'El correo no es válido.', 'error'); }
        if (!/^[A-Za-z0-9_.]{3,40}$/.test(datos.nombreUsuario)) { $('nombreUsuario').classList.add('invalido'); return mensaje('msgDatos', 'El usuario debe tener de 3 a 40 letras, números, "_" o ".".', 'error'); }

        $('btnGuardar').disabled = true;
        try {
            const r = await api('', { method: 'PUT', body: JSON.stringify(datos) });
            pintar(r.usuario);
            sincronizarSesion(r.usuario);
            mensaje('msgDatos', 'Datos guardados.', 'ok');
        } catch (e) { mensaje('msgDatos', e.message, 'error'); }
        $('btnGuardar').disabled = false;
    });
    $('btnDeshacer').addEventListener('click', () => { pintar(perfil); mensaje('msgDatos', ''); });

    // ---------- Contraseña ----------
    $('formContrasena').addEventListener('submit', async (ev) => {
        ev.preventDefault();
        mensaje('msgClave', '');
        const cuerpo = { actual: $('actual').value, nueva: $('nueva').value, confirmar: $('confirmar').value };
        if (perfil.tieneContrasena && !cuerpo.actual) return mensaje('msgClave', 'Escribe tu contraseña actual.', 'error');
        if (cuerpo.nueva.length < 6) return mensaje('msgClave', 'La nueva contraseña debe tener mínimo 6 caracteres.', 'error');
        if (cuerpo.nueva !== cuerpo.confirmar) return mensaje('msgClave', 'Las contraseñas nuevas no coinciden.', 'error');

        $('btnClave').disabled = true;
        try {
            const r = await api('/contrasena', { method: 'PUT', body: JSON.stringify(cuerpo) });
            $('formContrasena').reset();
            pintar(r.usuario);
            mensaje('msgClave', `${r.message}.`, 'ok');
        } catch (e) { mensaje('msgClave', e.message, 'error'); }
        $('btnClave').disabled = false;
    });
    $('verClaves').addEventListener('change', (ev) => {
        ['actual', 'nueva', 'confirmar'].forEach((c) => { $(c).type = ev.target.checked ? 'text' : 'password'; });
    });

    // ---------- Foto ----------
    // La imagen se recorta en cuadrado y se reduce a 256 px (JPEG) antes de subirla
    function prepararFoto(archivo) {
        return new Promise((ok, fallo) => {
            const url = URL.createObjectURL(archivo);
            const img = new Image();
            img.onload = () => {
                const lado = Math.min(img.width, img.height);
                const lienzo = document.createElement('canvas');
                lienzo.width = lienzo.height = 256;
                const g = lienzo.getContext('2d');
                g.fillStyle = '#fff';
                g.fillRect(0, 0, 256, 256);
                g.drawImage(img, (img.width - lado) / 2, (img.height - lado) / 2, lado, lado, 0, 0, 256, 256);
                URL.revokeObjectURL(url);
                ok(lienzo.toDataURL('image/jpeg', 0.88).split(',')[1]);
            };
            img.onerror = () => { URL.revokeObjectURL(url); fallo(new Error('No se pudo leer la imagen.')); };
            img.src = url;
        });
    }

    $('btnSubirFoto').addEventListener('click', () => $('archivoFoto').click());
    $('foto').addEventListener('click', () => $('archivoFoto').click());
    $('archivoFoto').addEventListener('change', async (ev) => {
        const archivo = ev.target.files[0];
        ev.target.value = '';
        if (!archivo) return;
        if (!['image/jpeg', 'image/png', 'image/webp'].includes(archivo.type)) return mensaje('msgFoto', 'Solo se aceptan imágenes JPG, PNG o WEBP.', 'error');
        if (archivo.size > 15 * 1024 * 1024) return mensaje('msgFoto', 'La imagen es demasiado pesada (máximo 15 MB).', 'error');
        mensaje('msgFoto', 'Subiendo foto…');
        try {
            const base64 = await prepararFoto(archivo);
            const r = await api('/avatar', { method: 'PUT', body: JSON.stringify({ imagen: { base64 } }) });
            pintar(r.usuario);
            sincronizarSesion(r.usuario);
            mensaje('msgFoto', 'Foto actualizada.', 'ok');
        } catch (e) { mensaje('msgFoto', e.message, 'error'); }
    });
    $('btnQuitarFoto').addEventListener('click', async () => {
        try {
            const r = await api('/avatar', { method: 'DELETE' });
            pintar(r.usuario);
            sincronizarSesion(r.usuario);
            mensaje('msgFoto', 'Foto eliminada.', 'ok');
        } catch (e) { mensaje('msgFoto', e.message, 'error'); }
    });

    $('btnSalir').addEventListener('click', () => window.Sesion.cerrar());

    // ---------- Inicio ----------
    (async () => {
        try {
            const r = await api('');
            pintar(r.usuario);
            sincronizarSesion(r.usuario);
        } catch (e) {
            mensaje('msgDatos', e.message, 'error');
            // Si el servidor no responde, al menos se muestran los datos guardados en el navegador
            const u = window.Sesion.usuario;
            if (u) pintar({ ...u, fechaRegistro: new Date(), tieneContrasena: true, conGoogle: false });
        }
    })();
})();
