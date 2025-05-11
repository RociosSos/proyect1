document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu__container"); // Asegúrate de que sea el contenedor correcto

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("show"); // Añadir o quitar la clase 'show' para mostrar/ocultar el menú
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", function(event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove("show"); // Eliminar la clase 'show' para ocultar el menú
        }
    });
});

