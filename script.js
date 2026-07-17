const menu = document.querySelector("nav");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");

    if(menu.classList.contains("active")){
        toggle.innerHTML = "✕";
    }else{
        toggle.innerHTML = "☰";
    }
});
