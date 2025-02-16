document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.getElementById("navLinks");
    const submenuToggles = document.querySelectorAll(".submenu-toggle");

    // Toggle Mobile Menu
    burgerMenu.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Toggle Submenu on Click (Mobile)
    submenuToggles.forEach(toggle => {
        toggle.addEventListener("click", function (event) {
            event.preventDefault();
            const submenu = this.nextElementSibling;
            submenu.classList.toggle("active");
        });
    });
});

