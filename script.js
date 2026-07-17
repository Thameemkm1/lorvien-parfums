const menu = document.querySelector("nav");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => {

    if(menu.style.display === "flex"){

        menu.style.display = "none";

    }else{

        menu.style.display = "flex";
        menu.style.flexDirection = "column";

    }

});
