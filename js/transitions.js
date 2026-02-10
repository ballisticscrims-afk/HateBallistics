document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-loaded");

  document.querySelectorAll("a").forEach(link => {
    const href = link.getAttribute("href");

    if (href && !href.startsWith("#") && !href.startsWith("http")) {
      link.addEventListener("click", e => {
        e.preventDefault();
        document.body.classList.remove("page-loaded");

        setTimeout(() => {
          window.location.href = href;
        }, 400);
      });
    }
  });
});
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
