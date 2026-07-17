const menu = document.querySelector("nav");
const toggle = document.querySelector(".menu-toggle");

menu.style.display = "none";

toggle.onclick = function () {
  if (menu.style.display === "none") {
    menu.style.display = "flex";
    menu.style.flexDirection = "column";
  } else {
    menu.style.display = "none";
  }
};
