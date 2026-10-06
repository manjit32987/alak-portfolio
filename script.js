/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


/* Close menu after clicking */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

    });

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================
   SCROLL ANIMATION
========================= */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.12
    }

);


document
    .querySelectorAll(".section, .contact-section")
    .forEach(section => {

        observer.observe(section);

    });


/* =========================
   TYPING EFFECT
========================= */

const roles = [
    "VLSI Designer",
    "Embedded Engineer",
    "Hardware Developer",
    "Digital Design Enthusiast"
];

const roleElement = document.querySelector(".hero h2");

let roleIndex = 0;

let charIndex = 0;

let deleting = false;


function typeRole() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        charIndex++;

        roleElement.innerHTML =
            currentRole.substring(0, charIndex);

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeRole, 1800);

            return;

        }

    } else {

        charIndex--;

        roleElement.innerHTML =
            currentRole.substring(0, charIndex);

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {

                roleIndex = 0;

            }

        }

    }

    setTimeout(
        typeRole,
        deleting ? 50 : 100
    );

}

typeRole();


/* =========================
   CURRENT YEAR
========================= */

const year = new Date().getFullYear();

const footerText = document.querySelector("footer > p");

if (footerText) {

    footerText.textContent =
        `© ${year} Alak Das. All rights reserved.`;

}