const menuBtn = document.querySelector('.js_burger-btn');
const menu = document.querySelector('.js_burger-menu');

menuBtn.addEventListener('click', openMenu);

function openMenu() {
    menuBtn.classList.toggle('active');
    document.body.classList.toggle('menu-opened');
    menu.classList.toggle('active');
}
