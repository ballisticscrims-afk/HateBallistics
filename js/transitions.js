// Page fade-in on load
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-loaded");
});

// Page fade-out on link click
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");

    // Ignore external links & anchors
    if (
      !href ||
      href.startsWith("#") ||
      href.startsWith("http") ||
      link.target === "_blank"
    ) return;

    e.preventDefault();
    document.body.classList.remove("page-loaded");

    setTimeout(() => {
      window.location.href = href;
    }, 300);
  });
});
