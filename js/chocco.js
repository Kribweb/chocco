const hamburger = document.querySelector(".hamburger__plank");
const menu__list = document.querySelector(".menu__list");
const menu__cross = document.querySelector(".menu__cross");

hamburger__plank.addEventListener("click", function () {
    menu__list.classList.add("menu__opened");
});
menu__cross.addEventListener("click", function () {
    menu__list.classList.remove("menu__opened");
});
