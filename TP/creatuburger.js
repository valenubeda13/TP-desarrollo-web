document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formulario form');
    const ventanaConfirmacion = document.getElementById('ventana_de_confirmacion');
    const contenidoConfirmado = document.getElementById('contenido_confirmado');
    const cerrar = contenidoConfirmado.querySelector('a');
    const seccionContenedor = document.querySelector('.contenedor');

    // Mensaje de error dinámico
    let mensajeError = document.createElement('div');
    mensajeError.style.color = 'red';
    mensajeError.style.marginBottom = '10px';
    form.insertBefore(mensajeError, form.firstChild);

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        mensajeError.textContent = '';

        // Validar pan (radio fuera del form)
        const pan = document.querySelector('input[name="pan"]:checked');
        if (!pan) {
            mensajeError.textContent = 'Seleccioná un tipo de pan.';
            return;
        }

        // Validar carne (radio fuera del form)
        const carne = document.querySelector('input[name="carne"]:checked');
        if (!carne) {
            mensajeError.textContent = 'Seleccioná un tipo de carne.';
            return;
        }

        // Validar nombre
        const nombre = form.nombre.value.trim();
        if (nombre.length < 2) {
            mensajeError.textContent = 'Ingresá tu nombre.';
            return;
        }

        // Validar dirección
        const direccion = form.direccion.value.trim();
        if (direccion.length < 3) {
            mensajeError.textContent = 'Ingresá tu dirección.';
            return;
        }

        // Validar medio de pago
        const pago = form.pago.value;
        if (!pago) {
            mensajeError.textContent = 'Seleccioná un medio de pago.';
            return;
        }

        // Mostrar confirmación y ocultar formulario
        ventanaConfirmacion.style.display = 'flex';
        seccionContenedor.style.display = 'none';
    });

    // Cerrar ventana de confirmación
    cerrar.addEventListener('click', function(e) {
        e.preventDefault();
        ventanaConfirmacion.style.display = 'none';
        seccionContenedor.style.display = 'flex';
        form.reset();
    });
});