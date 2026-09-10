// ======================================
// SMOOTH SCROLL
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// ======================================
// ELEMENTS FADE IN BIJ SCROLL
// ======================================

const elements = document.querySelectorAll(
    ".section, .project, .skill, .timeline-item"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


elements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});


// ======================================
// MOUSE PARALLAX OP HERO FOTO
// ======================================

const heroImage = document.querySelector(".hero-image");

if (heroImage) {

    document.addEventListener("mousemove", event => {

        const x =
            (event.clientX / window.innerWidth - 0.5) * 10;

        const y =
            (event.clientY / window.innerHeight - 0.5) * 10;

        heroImage.style.transform =
            `rotate(3deg) translate(${x}px, ${y}px)`;

    });

}


// ======================================
// NAVBAR VERANDERT TIJDENS SCROLL
// ======================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ======================================
// JAARTAL AUTOMATISCH
// ======================================

const year = document.querySelector("footer span");

if (year) {

    year.textContent =
        `© ${new Date().getFullYear()} — JOUW NAAM`;

}