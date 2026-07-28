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

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    item.querySelector(".faq-question").addEventListener("click", () => {
        item.classList.toggle("active");
    });
});

// HERO SLIDER

const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let current = 0;
const total = slide.length;

function showSlide(index) {
    if (index >= total) index = 0;
    if (index < 0) index = total - 1;

    slides.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");

    current = index;
}

// Auto slide every 4 seconds
setInterval(() => {
    showSlide(current + 1);
}, 4000);

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
    });
});

// Touch swipe support
let startX = 0;
let endX = 0;

slides.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

slides.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
        showSlide(current + 1);
    }

    if (endX - startX > 50) {
        showSlide(current - 1);
    }
});

// Initialize
showSlide(0);

// PRELOADER

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 2500);

});
