const menu = document.querySelector('.header__navigation[aria-label="Main"]');
const menuBtn = document.querySelector('.header__burger-button');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu () {
    menuBtn.classList.toggle('_active');
    menu.classList.toggle('_active');
}
