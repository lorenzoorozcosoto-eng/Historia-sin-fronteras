// Conexión del front con el backend (registro, inicio de sesión y Google)

// Si la página no la sirve el backend (Live Server, archivo suelto), se usa el backend en el puerto 4000
const API = (location.hostname === 'localhost' || location.hostname === '127.0.0.1') && location.port !== '4000' ? 'http://localhost:4000/api' : '/api';

const PAGINA_DESTINO = '../explorarmapa/explorarmapa.html';
const PAGINA_ADMIN = '../administrador/administrador.html';

async function pedir(ruta, datos) {
    let resp;
    try {
        resp = await fetch(`${API}${ruta}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos),
        });
    } catch {
        throw new Error('No hay conexión con el servidor. ¿Está corriendo "npm run dev"?');
    }
    const json = await resp.json().catch(() => ({}));
    if (!resp.ok) throw new Error(json.message || 'Ocurrió un error');
    return json;
}

function guardarSesion({ token, usuario }) {
    try {
        localStorage.setItem('token', token);
        localStorage.setItem('usuario', JSON.stringify(usuario));
    } catch { /* sin almacenamiento disponible */ }
    location.href = usuario.rol === 'Administrador' ? PAGINA_ADMIN : PAGINA_DESTINO;
}

function mostrarMensaje(formulario, texto) {
    let caja = formulario.querySelector('.mensaje-auth');
    if (!caja) {
        caja = document.createElement('div');
        caja.className = 'mensaje-auth';
        caja.style.cssText = 'color:#c62828;background:#fdecea;border-radius:8px;padding:8px 12px;margin:10px 0;font-size:14px;';
        formulario.prepend(caja);
    }
    caja.textContent = texto;
}

// Envía un formulario al backend y guarda la sesión
function conectarFormulario(formulario, ruta, leerDatos) {
    formulario.addEventListener('submit', async (e) => {
        e.preventDefault();
        const boton = formulario.querySelector('button[type="submit"]');
        boton.disabled = true;
        try {
            guardarSesion(await pedir(ruta, leerDatos()));
        } catch (error) {
            mostrarMensaje(formulario, error.message);
            boton.disabled = false;
        }
    });
}

// Botón "Continuar con Google" dentro del elemento #boton-google
async function iniciarGoogle(formulario) {
    const contenedor = document.getElementById('boton-google');
    if (!contenedor) return;
    try {
        const { googleClientId } = await (await fetch(`${API}/auth/config`)).json();
        if (!googleClientId) throw new Error('Google no está configurado');

        await new Promise((ok, fallo) => {
            const s = document.createElement('script');
            s.src = 'https://accounts.google.com/gsi/client';
            s.onload = ok;
            s.onerror = fallo;
            document.head.appendChild(s);
        });
        google.accounts.id.initialize({
            client_id: googleClientId,
            callback: async ({ credential }) => {
                try { guardarSesion(await pedir('/auth/google', { credential })); }
                catch (error) { mostrarMensaje(formulario, error.message); }
            },
        });
        google.accounts.id.renderButton(contenedor, { theme: 'outline', size: 'large', text: 'continue_with', width: 280 });
    } catch {
        contenedor.innerHTML = '<button type="button" class="btn-google-pendiente" style="width:100%;padding:10px;border:1px solid #ccc;border-radius:8px;background:#fff;cursor:pointer;">Continuar con Google</button>';
        contenedor.firstChild.onclick = () => mostrarMensaje(formulario, 'El acceso con Google aún no está configurado.');
    }
}

const valor = (formulario, nombre) => formulario.elements[nombre].value.trim();

const formRegistro = document.getElementById('form-registro');
if (formRegistro) {
    conectarFormulario(formRegistro, '/auth/registro', () => ({
        nombreCompleto: valor(formRegistro, 'nombreCompleto'),
        correo: valor(formRegistro, 'correo'),
        nombreUsuario: valor(formRegistro, 'nombreUsuario'),
        contrasena: formRegistro.elements.contrasena.value,
        confirmarContrasena: formRegistro.elements.confirmarContrasena.value,
        aceptoTerminos: formRegistro.elements.aceptoTerminos.checked,
    }));
    iniciarGoogle(formRegistro);
}

const formLogin = document.getElementById('form-login');
if (formLogin) {
    conectarFormulario(formLogin, '/auth/login', () => ({
        identificador: valor(formLogin, 'correo'),
        contrasena: formLogin.elements.contrasena.value,
    }));
    iniciarGoogle(formLogin);
}
