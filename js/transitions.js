const webhookURL = "https://discordapp.com/api/webhooks/1468477567068803125/KCdGWdR9HOVuIQGT7APtxcTBeuQOSsV6VN6YIn9Q2MKWT1hr99HE6ugErjI2ZKtOWZuS";
let selectedRole = "Not selected";

document.querySelectorAll(".role-selector button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".role-selector button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedRole = btn.dataset.role;
  });
});

document.getElementById("joinForm").addEventListener("submit", async e => {
  e.preventDefault();

  const payload = {
    embeds: [{
      title: "🔥 New H4TE Application",
      color: 15158332,
      fields: [
        { name: "IGN", value: ign.value },
        { name: "Applied Role", value: selectedRole },
        { name: "Position", value: role.value },
        { name: "Experience", value: experience.value || "N/A" },
        { name: "Social Links", value: socials.value || "N/A" },
        { name: "Discord", value: discord.value },
        { name: "Why Join", value: why.value },
        { name: "What We Can Do", value: what.value }
      ],
      timestamp: new Date()
    }]
  };

  const res = await fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (res.ok) {
    document.querySelector(".join-form-box").classList.add("success");
    e.target.reset();
  } else {
    alert("Webhook failed");
  }
});













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
