$( document ).ready(function() {    
    $(".carousel__text a").click(function () {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;
            $('html').animate({ 
                scrollTop: destination
            }, 1100);
    });
});