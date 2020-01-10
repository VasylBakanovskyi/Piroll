const menuSide = document.querySelector('.js-menu-aside');
const menuIcon = document.querySelector('.js-burger-menu');

document.body.addEventListener('click', (e) => {
    const el = e.target;

    if (el === menuIcon || el.closest('.js-burger-menu')) {
        menuSide.classList.toggle('is-hidden');
        return;
    }

    if (el !== menuSide && !el.closest('.js-menu-aside')) {
        menuSide.classList.add('is-hidden');
    }
})