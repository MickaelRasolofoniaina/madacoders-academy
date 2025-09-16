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

function animateMenuHeight(open) {
  if (!menu) return;
  // Only animate on mobile (max-width: 900px)
  if (window.innerWidth > 900) {
    menu.style.height = "";
    menu.style.overflow = "";
    menu.style.transition = "";
    return;
  }
  menu.style.overflow = "hidden";
  menu.style.transition = ""; // Reset transition before starting

  if (open) {
    menu.classList.add("active");
    const targetHeight = menu.scrollHeight;
    menu.style.height = "0px";
    // Force reflow for transition
    void menu.offsetWidth;
    menu.style.transition = "height 0.35s cubic-bezier(0.4,0,0.2,1)";
    menu.style.height = targetHeight + "px";
    setTimeout(() => {
      menu.style.height = "auto";
      menu.style.overflow = "visible";
      menu.style.transition = ""; // Clear transition after animation
    }, 370);
  } else {
    const currentHeight = menu.scrollHeight;
    menu.style.height = currentHeight + "px";
    // Force reflow for transition
    void menu.offsetWidth;
    menu.style.transition = "height 0.35s cubic-bezier(0.4,0,0.2,1)";
    menu.style.height = "0px";
    setTimeout(() => {
      menu.classList.remove("active");
      menu.style.height = "";
      menu.style.overflow = "";
      menu.style.transition = ""; // Clear transition after animation
    }, 370);
  }
}

hamburger.addEventListener("click", () => {
  const isOpen = !menu.classList.contains("active");
  animateMenuHeight(isOpen);
});
hamburger.addEventListener("keypress", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    const isOpen = !menu.classList.contains("active");
    animateMenuHeight(isOpen);
  }
});

// Reset menu height on resize (for desktop/mobile switch)
window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    menu.style.height = "";
    menu.style.overflow = "";
    menu.style.transition = "";
    menu.classList.remove("active");
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
