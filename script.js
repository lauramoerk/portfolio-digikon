document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.getElementById("navLinks");
    const submenuToggles = document.querySelectorAll(".submenu-toggle");

    // Toggle Mobile Menu
    burgerMenu.addEventListener("hover", function () {
        navLinks.classList.toggle("active");
    });

    // Toggle Submenu on Click (Mobile)
    submenuToggles.forEach(toggle => {
        toggle.addEventListener("hover", function (event) {
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

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-block img, .image-content img"); // Select all images
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");

    // Open Lightbox
    images.forEach(img => {
        img.addEventListener("click", function () {
            lightbox.style.display = "flex"; // Show the lightbox
            lightboxImg.src = this.src; // Set clicked image as lightbox image
        });
    });

    // Close Lightbox when clicking outside the image
    lightbox.addEventListener("click", function (e) {
        if (e.target !== lightboxImg) {
            closeLightbox();
        }
    });

    // Close Lightbox function
    function closeLightbox() {
        lightbox.style.display = "none";
    }
});
