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
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector(".menu");

    hamburger.addEventListener("click", function () {
        // icon.classList.toggle("active");
        menu.classList.toggle("show-menu");
    })
}

const init = () => {
    showMenu();
    showHamburgerMenu();


}

document.addEventListener("DOMContentLoaded", init);
