const hamburger = document.querySelector(".hamburger");
const menuList = document.querySelector(".menu");
const menuCross = document.querySelector(".menu__cross");


hamburger.addEventListener("click", function (e) {
    e.preventDefault();
    menuList.classList.add("menu__opened");
}

);

menuCross.addEventListener("click", function (e) {
    menuList.classList.remove("menu__opened");
}

);


const displayBox = document.querySelector(".display__box");
const foodList = document.querySelector(".food");

displayBox.addEventListener("click", function (e) {
    e.preventDefault();
    foodList.classList.toggle("food__opened");
}

);

