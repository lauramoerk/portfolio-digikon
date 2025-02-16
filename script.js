function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    // Get all submenu toggles
    const submenuToggles = document.querySelectorAll(".submenu-toggle");

    submenuToggles.forEach(toggle => {
        toggle.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

            const submenu = this.nextElementSibling;
            submenu.classList.toggle("active");

            // Toggle display manually since we use CSS for desktop hover
            if (submenu.style.display === "block") {
                submenu.style.display = "none";
            } else {
                submenu.style.display = "block";
            }
        });
    });
});
