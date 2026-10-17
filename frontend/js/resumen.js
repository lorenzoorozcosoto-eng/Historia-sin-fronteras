// Inicio (mapa): puntos, rango, países, insignias y progreso general del usuario.
(() => {
    const $ = (id) => document.getElementById(id);
    const esc = (t) => String(t ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const formato = (n) => Number(n).toLocaleString('es-CO');

    function pintar(r) {
        window.RESUMEN = r;
        const obtenidas = r.insignias.filter((i) => i.obtenida).length;

        $('pctGeneral').textContent = `${r.progresoGeneral}%`;
        $('circuloGeneral').style.background = `conic-gradient(#28a745 ${r.progresoGeneral}%, #e9ecef 0)`;
        $('rangoNombre').textContent = r.rango;
        $('resPuntos').textContent = formato(r.puntos);
        $('resInsignias').textContent = `${obtenidas}/${r.insignias.length}`;
        $('resPaises').textContent = `${r.paises.visitados}/${r.paises.disponibles}`;
        $('resTemas').textContent = `${r.temas.completados}/${r.temas.total}`;
        $('resRacha').textContent = `${r.rachaDias} ${r.rachaDias === 1 ? 'día' : 'días'}`;

        if (r.siguienteRango) {
            const { desde, hasta, nombre, faltan } = r.siguienteRango;
            const avance = Math.max(0, Math.min(100, ((r.puntos - desde) / (hasta - desde)) * 100));
            $('barraRango').style.width = `${avance}%`;
            $('rangoFalta').textContent = `Te faltan ${formato(faltan)} puntos para ser «${nombre}»`;
        } else {
            $('barraRango').style.width = '100%';
            $('rangoFalta').textContent = '¡Llegaste al rango más alto!';
        }

        $('insigniasTitulo').textContent = `🏅 Mis insignias (${obtenidas}/${r.insignias.length})`;
        $('insigniasGrid').innerHTML = r.insignias.map((i) => `
            <button type="button" class="insignia ${i.obtenida ? 'ganada' : 'bloqueada'}" data-id="${i.id}"
                    aria-label="${esc(i.nombre)}: ${i.obtenida ? 'conseguida' : 'por conseguir'}. ${esc(i.descripcion)}">
                <span class="insignia-icono">${esc(i.icono)}</span>
                <span class="insignia-nombre">${esc(i.nombre)}</span>
            </button>`).join('');

        document.dispatchEvent(new CustomEvent('resumen-listo'));
    }

    $('insigniasGrid')?.addEventListener('click', (ev) => {
        const b = ev.target.closest('.insignia');
        if (!b || !window.RESUMEN) return;
        const i = window.RESUMEN.insignias.find((x) => String(x.id) === b.dataset.id);
        const caja = $('insigniaDetalle');
        caja.hidden = false;
        caja.className = `insignia-detalle ${i.obtenida ? 'ganada' : ''}`;
        caja.innerHTML = `<b>${esc(i.icono)} ${esc(i.nombre)}</b><br>${esc(i.descripcion)}<br>
            <small>${i.obtenida ? `Conseguida el ${new Date(i.fecha).toLocaleDateString('es-CO')}` : 'Aún no la tienes'}${i.puntos ? ` · Premio: +${i.puntos} puntos` : ''}</small>`;
    });

    async function cargar() {
        if (!window.Sesion?.token) return;
        try {
            const resp = await fetch(`${window.Sesion.API}/progreso/resumen`, { headers: window.Sesion.cabeceras() });
            if (resp.ok) pintar(await resp.json());
        } catch { /* sin conexión: se deja el resumen vacío */ }
    }
    cargar();
})();
