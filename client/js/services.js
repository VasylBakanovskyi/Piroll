$('.intro .btn').on('click', function (){
    $('html, body').animate({
        scrollTop: $('.project-order-container').offset().top
    }, 2000);
});
