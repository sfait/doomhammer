function showMenu() {
    const firstMenu = document.querySelectorAll(".first-menu");
    const secondMenu = document.querySelectorAll(".second-menu");

    for (let i = 0; i < firstMenu.length; i++) {
        firstMenu[i].addEventListener("mouseover", function() {
            this.querySelector(".second-menu").style.display = "block";
        })

        firstMenu[i].addEventListener("click", function() {
            this.querySelector(".second-menu").classList.toggle('show-menu');
        })

        firstMenu[i].addEventListener("mouseout", function() {
            this.querySelector(".second-menu").style.display = "none";
        })
    }
}

function showHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navigation');

    const handleClick = () => {
        hamburger.classList.toggle('hamburger-active');
        hamburger.setAttribute('aria-expanded', hamburger.classList.contains('hamburger-active'));
        nav.classList.toggle('navigation-active');
    }

    hamburger.addEventListener('click', handleClick);

}

const init = () => {
    showMenu();
    showHamburgerMenu();
}

document.addEventListener("DOMContentLoaded", init);
