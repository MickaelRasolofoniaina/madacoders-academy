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

// FAQ accordion logic
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    if (!answer) return;
    const isOpen = !answer.hasAttribute("hidden");
    // Close all answers
    document
      .querySelectorAll(".faq-answer")
      .forEach((a) => a.setAttribute("hidden", ""));
    // Open if was closed
    if (!isOpen) {
      answer.removeAttribute("hidden");
    }
  });
});

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
