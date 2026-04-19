let btn_left = document.getElementById("btn_left")
let btn_right = document.getElementById("btn_right")
let carusel = document.getElementById("carusel")

let carusel_elem = 4 //количество элементов в карусели
let width = 100 / carusel_elem

for (let i of carusel.children) {
    i.style.minWidth = `${width}%`;
}

let count_item = carusel.children.length - carusel_elem;
let current = 0;

btn_left.addEventListener("click", Left);

function Left() {
    current -= 1;
    if (current < 0) {
        current = count_item;
    }
    carusel.style.transform = `translateX(-${width * current}%)`;
}

btn_right.addEventListener("click", Right);

function Right() {
    current += 1;
    if (current > count_item) {
        current = 0;
    }
    carusel.style.transform = `translateX(-${width * current}%)`;
}