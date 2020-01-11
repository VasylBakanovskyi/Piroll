$('.intro .js-btn').on('click', function (){
    $('html, body').animate({
        scrollTop: $('.project-order__panel').offset().top
    }, 2000);
});
