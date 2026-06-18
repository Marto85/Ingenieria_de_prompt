const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-navigation");
const navLinks = document.querySelectorAll("#primary-navigation a");

function setMenu(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("is-open", open);
  document.body.classList.toggle("nav-open", open);
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  setMenu(!isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
  }
});
