const hamburger = document.querySelector(".hamburger");
const menuList = document.querySelector(".menu__list");
const menuCross = document.querySelector(".menu__cross");

hamburger.addEventListener("click", function (e) {
    e.preventDefault();
    menuList.classList.add("menu__opened");
});

console.log("test");