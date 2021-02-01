/* MIS SCRIPTS VANILA JS */


// MENU
const burgerIcon = document.querySelector('#navbar-menu-burguer');
const navbarMenu = document.querySelector('#navbar-menu-items');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});


// TRANSICIONES
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});