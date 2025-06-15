const form = document.getElementById('caja_contacto');
const mensajeError = document.getElementById('mensajeError');
const ventanaReserva = document.getElementById('ventana_de_reserva');
const cerrarConfirmacion = document.getElementById('cerrar_confirmacion');
const seccionFormulario = document.querySelector('.caja_contacto');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = form.nombre.value.trim();
  const email = form.email.value.trim();
  const telefono = form.telefono.value.trim();
  const fecha = form.fecha.value;
  const hora = form.hora.value;
  const personas = form.personas.value;

  mensajeError.textContent = '';

  if (nombre.length < 3) {
    mensajeError.textContent = 'El nombre debe tener al menos 3 caracteres.';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    mensajeError.textContent = 'El correo electrónico no es válido.';
    return;
  }

  if (telefono.length < 10) {
    mensajeError.textContent = 'El teléfono debe tener al menos 10dígitos.';
    return;
  }

  if (!fecha) {
    mensajeError.textContent = 'Debe seleccionar una fecha.';
    return;
  }

  if (!hora) {
    mensajeError.textContent = 'Debe seleccionar una hora.';
    return;
  }

  if (isNaN(personas) || personas < 1) {
    mensajeError.textContent = 'Debe ingresar la cantidad de comensales.';
    return;
  }

  // Mostrar confirmación y ocultar formulario
  ventanaReserva.style.display = 'block';
  seccionFormulario.style.display = 'none';
  form.reset();
});

// Botón para cerrar la confirmación y volver al formulario
cerrarConfirmacion.addEventListener('click', function(e) {
  e.preventDefault();
  ventanaReserva.style.display = 'none';
  seccionFormulario.style.display = 'block';
});