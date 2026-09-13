/* =========================================
   NAVBAR
========================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================================
   MOBIELE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* =========================================
   MENU SLUITEN NA KLIKKEN
========================================= */

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =========================================
   ESCAPE OM MENU TE SLUITEN
========================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        navLinks.classList.remove("active");
    }

});


/* =========================================
   SCROLL ANIMATIES
========================================= */

const animatedElements = document.querySelectorAll(
    ".motivation-card, .evidence-item, .candidate-image, .candidate-text"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach(function (element) {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


/* =========================================
   LINKEDIN
========================================= */

const linkedinLinks = document.querySelectorAll(
    'a[href*="linkedin.com"]'
);

linkedinLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log("LinkedIn wordt geopend.");

    });

});


/* =========================================
   GMAIL
========================================= */

const emailLinks = document.querySelectorAll(
    'a[href*="mail.google.com"]'
);

emailLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log("Gmail wordt geopend.");

    });

});


/* =========================================
   JAAR AUTOMATISCH UPDATEN
========================================= */

const footer = document.querySelector("footer");

if (footer) {

    const currentYear = new Date().getFullYear();

    footer.innerHTML = `
        <div>© ${currentYear} — DUAA FAHEEM</div>
        <div>POLITIE DOSSIER / DF-2026</div>
    `;

}