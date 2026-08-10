/*====================================================
DARUSSALAM WEBSITE
Javascript
====================================================*/

/*==============================
Mobile Menu
==============================*/

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

/*==============================
Sticky Navbar
==============================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

/*==============================
Counter Animation
==============================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;

        const target = +counter.dataset.target;

        let current = 0;

        const speed = 40;

        const update = () => {
          const increment = Math.ceil(target / 100);

          current += increment;

          if (current < target) {
            counter.innerText = current;

            setTimeout(update, speed);
          } else {
            counter.innerText = target;
          }
        };

        update();

        counterObserver.unobserve(counter);
      }
    });
  },
  { threshold: 0.6 },
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

/*==============================
Reveal Animation
==============================*/

const reveals = document.querySelectorAll(".reveal");

function revealSection() {
  const windowHeight = window.innerHeight;

  reveals.forEach((section) => {
    const top = section.getBoundingClientRect().top;

    if (top < windowHeight - 120) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealSection);

window.addEventListener("load", revealSection);

/*==============================
Smooth Scroll
==============================*/

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

/*==============================
Back To Top
==============================*/

const backTop = document.querySelector(".back-top");

if (backTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backTop.classList.add("show");
    } else {
      backTop.classList.remove("show");
    }
  });

  backTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  });
}

/*==============================
Active Menu
==============================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") == "#" + current) {
      link.classList.add("active");
    }
  });
});

/*==============================
Hero Floating
==============================*/

const heroImage = document.querySelector(".hero-right img");

window.addEventListener("mousemove", (e) => {
  if (heroImage) {
    let x = (window.innerWidth / 2 - e.pageX) / 50;

    let y = (window.innerHeight / 2 - e.pageY) / 50;

    heroImage.style.transform = `translate(${x}px,${y}px)`;
  }
});

/*==============================
Loading
==============================*/

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  if (loader) {
    loader.classList.add("hide");
  }
});

const menuBtn = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".menu-overlay");
const closeBtn = document.querySelector(".close-menu");

// buka menu
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
});

// tutup menu
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
});

// klik overlay
overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
});
