function showMenu() {
    const firstMenu = document.querySelectorAll(".first-menu");
    for (let i = 0; i < firstMenu.length; i++) {
        firstMenu[i].addEventListener("click", function() {
            //pokaz lub ukryj
            const submenu = this.querySelector(".second-menu")
            submenu.classList.toggle('show-menu');
        })
        firstMenu[i].addEventListener("mouseover", function() {
            //tylko pokaz
            const submenu = this.querySelector(".second-menu")
            submenu.classList.add('show-menu');
        })
        firstMenu[i].addEventListener("mouseout", function() {
            //tylko ukryj
            const submenu = this.querySelector(".second-menu")
            submenu.classList.remove('show-menu');
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
