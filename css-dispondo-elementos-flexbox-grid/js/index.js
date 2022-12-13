const menuBtn = document.querySelector('button.header__menu');
const sideMenu = document.querySelector('nav.side-menu');
menuBtn.addEventListener('click', toggleSidebar);


function toggleSidebar() {
    sideMenu.classList.toggle('hidden');
    menuBtn.classList.toggle('side-menu__isShowing');
    document.querySelector('main').classList.toggle('defocused');
    document.querySelector('img.header__logo').classList.toggle('logo-disappear');

    preventScroll();
}

function preventScroll() {
    if (menuBtn.classList.contains('side-menu__isShowing')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}