const menuSide = document.querySelector('.menu-side');
const menuIcon = document.querySelector('.menu-mobile img');

document.body.addEventListener('click', function(e) {
    const el = e.target;
    
    if (el === menuIcon) {
        menuSide.classList.toggle('is-hidden');
        return;
    }
    if (el !== menuSide && !el.closest('.menu-side')) {
        menuSide.classList.add('is-hidden');
    }
})