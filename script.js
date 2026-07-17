const menu = document.querySelector("nav");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});
