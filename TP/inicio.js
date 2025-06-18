// Esperamos que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal-descuento");
  const cerrar = document.getElementById("cerrar-modal");

  // Seleccionar la imagen que va a disparar el modal 
  const promoImg = document.querySelectorAll(".best-seller img")[0]; // la primera imagen

  // Al hacer clic en la imagen, mostramos el modal
  promoImg.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // Al hacer clic en la X
  cerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Al hacer clic fuera del contenido del modal
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
