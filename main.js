// Smooth scroll for A propos link
document.querySelectorAll(".about-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.getElementById("about");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    menu.classList.remove("active");
  });
});
// Navigation hamburger menu
const hamburger = document.getElementById("hamburgerMenu");
const menu = document.getElementById("navbarMenu");
hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
hamburger.addEventListener("keypress", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    menu.classList.toggle("active");
  }
});

// Smooth scroll for Formation link
document.querySelectorAll(".formation-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.getElementById("formations");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    menu.classList.remove("active");
  });
});

// Smooth scroll for FAQ link
document.querySelectorAll(".faq-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.getElementById("faq");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    menu.classList.remove("active");
  });
});

// Smooth scroll for Contactez-nous link
document.querySelectorAll(".contact-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.getElementById("contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    menu.classList.remove("active");
  });
});

// FAQ accordion logic
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    const item = this.parentElement;
    if (!answer || !item) return;
    const isOpen = !answer.hasAttribute("hidden");
    // Close all answers and remove expanded class
    document
      .querySelectorAll(".faq-answer")
      .forEach((a) => a.setAttribute("hidden", ""));
    document
      .querySelectorAll(".faq-item")
      .forEach((i) => i.classList.remove("expanded"));
    // Open if was closed
    if (!isOpen) {
      answer.removeAttribute("hidden");
      item.classList.add("expanded");
    }
  });
});

// FAQ scroll-in animation
function animateFaqItems() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item, idx) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40 && rect.bottom > 0) {
      item.classList.add("visible");
    } else {
      item.classList.remove("visible");
    }
  });
}
window.addEventListener("scroll", animateFaqItems);
window.addEventListener("resize", animateFaqItems);
document.addEventListener("DOMContentLoaded", animateFaqItems);

// Scale effect on Nos formations title when in viewport
const formationTitle = document.getElementById("formationTitle");
function handleTitleScale() {
  if (!formationTitle) return;
  const rect = formationTitle.getBoundingClientRect();
  const inView = rect.top < window.innerHeight && rect.bottom > 0;
  if (inView) {
    formationTitle.classList.add("scale-in");
  } else {
    formationTitle.classList.remove("scale-in");
  }
}
window.addEventListener("scroll", handleTitleScale);
window.addEventListener("resize", handleTitleScale);
document.addEventListener("DOMContentLoaded", handleTitleScale);

// Contact title scroll-in animation
const contactTitle = document.querySelector(".contact-title");
function animateContactTitle() {
  if (!contactTitle) return;
  const rect = contactTitle.getBoundingClientRect();
  const inView = rect.top < window.innerHeight - 40 && rect.bottom > 0;
  if (inView) {
    contactTitle.classList.add("visible");
  } else {
    contactTitle.classList.remove("visible");
  }
}
window.addEventListener("scroll", animateContactTitle);
window.addEventListener("resize", animateContactTitle);
document.addEventListener("DOMContentLoaded", animateContactTitle);
