const left = document.querySelector("#left");
const right = document.querySelector("#right");
const itemsList = document.querySelector("#items");

right.addEventListener("click", e => {
    e.preventDefault();
    itemsList.appendChild(itemsList.firstElementChild);
})
left.addEventListener("click", e => {
    e.preventDefault();
    itemsList.insertBefore(itemsList.lastElementChild, items.firstElementChild);
})