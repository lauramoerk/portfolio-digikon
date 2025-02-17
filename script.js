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

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Apply fade-in effect
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% of element is visible

    fadeElements.forEach(element => observer.observe(element));
});
