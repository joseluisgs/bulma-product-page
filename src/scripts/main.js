/* MIS SCRIPTS VANILA JS */


// MENU
const burgerIcon = document.querySelector('#navbar-menu-burguer');
const navbarMenu = document.querySelector('#navbar-menu-items');

// Cuando se pulsa cambiamos la propiedad is-active
burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});


// TRANSICIONES
// en todos los href le apliacmos el estilo smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// PESTAÑAS tabs
// Recogemos todas las tabs
const tabs = document.querySelectorAll('.tabs li');
// El contenido de las tabs
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

// Añadimos el evento click
tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        // eliminamos la propiedad is active
        tabs.forEach(item => item.classList.remove('is-active'));
        // Detectamos la que hemos pulsado y le ponemos la clase is-active
        tab.classList.add('is-active');

        // Mostramos el contenido que debemos mostrar en base al data-target
        const target = tab.dataset.target
        // console.log(target);
        // Si el id del contenido coicide con el data-target de li
        tabContentBoxes.forEach((box) => {
            // console.log(box);
            // Si coincide eliminamos la clase is-hiden, si no se lo ponemos
            if (box.getAttribute('id') === target) {
                box.classList.remove('is-hidden');
            } else {
                box.classList.add('is-hidden');
            }
        });
    });
});

// MODAL
// recogemos las cosas que necesitamos
const signupButton = document.querySelector('#signup');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal-close');

// Si pulsamos el botón, cambiamos modal a actiivo
signupButton.addEventListener('click', () => {
    modal.classList.add('is-active');
});

// Si pulsamos fuera o el botón de cerrar del modal, ocultamos el fondo
modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
});
modalCloseButton.addEventListener('click', () => {
    modal.classList.remove('is-active');
});


