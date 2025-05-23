document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu__container");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("show"); 
    });

    document.addEventListener("click", function(event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove("show");
        }
    });
});

