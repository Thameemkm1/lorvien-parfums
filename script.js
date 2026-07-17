// ==========================
// LORVIEN PARFUMS
// script.js
// ==========================

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,.85)";
        header.style.backdropFilter = "blur(16px)";
    } else {
        header.style.background = "rgba(0,0,0,.25)";
        header.style.backdropFilter = "blur(12px)";
    }

});
