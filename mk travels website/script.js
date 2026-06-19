const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

document.querySelectorAll("[data-track]").forEach((element) => {
  element.addEventListener("click", () => {
    const action = element.getAttribute("data-track");

    if (window.gtag && action) {
      window.gtag("event", action, {
        event_category: "lead",
        event_label: element.textContent.trim()
      });
    }
  });
});
