let burger = document.getElementById("burger")
let menu = document.getElementById("menu")

let active = false
function activeMenu() {
    active = !active;
    if (active) {
        menu.style.right = "0%";
    } else {
        menu.style.right = "-100%";
    }
}

burger.addEventListener("click", activeMenu);