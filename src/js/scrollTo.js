$( document ).ready(function() {    
    $(".carousel__text a").click(function () {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;
            $('html').animate({ 
                scrollTop: destination
            }, 1100);
    });

let btn = $('.buttonUp');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('active');
        } else {
            btn.removeClass('active');
        }
    });

    btn.on('click', function (e) {
    e.preventDefault();
    $('html').animate({
        scrollTop:0
    }, 900);
    });
});