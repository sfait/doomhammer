function showMenu() {
    const firstMenu = document.querySelectorAll(".first-menu");
    const secondMenu = document.querySelectorAll(".second-menu");

    for (let i = 0; i < firstMenu.length; i++) {
        firstMenu[i].addEventListener("mouseover", function() {
            this.querySelector(".second-menu").style.display = "block";
        })

        firstMenu[i].addEventListener("mouseout", function() {
            this.querySelector(".second-menu").style.display = "none";
        })
    }
}

function showHamburgerMenu() {
    const hamburger = document.querySelector(".hamburger");
    const mainHeader = document.querySelector(".main-header");
    const menu = document.querySelector(".menu");

    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("active");
        menu.classList.toggle("show-menu");
        mainHeader.classList.toggle("hide-header");
    })
}

const init = () => {
    showMenu();
    showHamburgerMenu();
}

document.addEventListener("DOMContentLoaded", init);
