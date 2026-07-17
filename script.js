const menu = document.querySelector("nav");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", function () {

  if (window.getComputedStyle(menu).display === "none") {
    menu.style.display = "flex";
    menu.style.flexDirection = "column";
    menu.style.alignItems = "center";
  } else {
    menu.style.display = "none";
  }

});
