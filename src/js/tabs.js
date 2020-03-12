jQuery(document).ready(function($) {

    $(".tabs__wrapper").click(function() {
        if($(this).hasClass('phone')) {
            $(this).toggleClass("tabs__active");
            $(this).siblings().removeClass("tabs__active");
            $(".tabs__phone").parent(".tabs__text").toggleClass("tabs__bold");
            $(".hidden__phone").toggleClass("show__active");
            $(".hidden__phone").siblings().removeClass("show__active");
            return false;
        }
        else if ($(this).hasClass('basket')) {
            $(this).toggleClass("tabs__active");
            $(this).siblings().removeClass("tabs__active");
            $(".tabs__basket").parent(".tabs__text").toggleClass("tabs__bold");
            $(".hidden__basket").toggleClass("show__active");
            $(".hidden__basket").siblings().removeClass("show__active");
            return false;
        }
        else if ($(this).hasClass('web')) {
            $(this).toggleClass("tabs__active");
            $(this).siblings().removeClass("tabs__active");
            $(".tabs__web").parent(".tabs__text").toggleClass("tabs__bold");  
            $(".hidden__web").toggleClass("show__active");
            $(".hidden__web").siblings().removeClass("show__active"); 
            return false;
        }
        else if ($(this).hasClass('magnifier')) {
            $(this).toggleClass("tabs__active");
            $(this).siblings().removeClass("tabs__active");
            $(".tabs__magnifier").parent(".tabs__text").toggleClass("tabs__bold");
            $(".hidden__magnifier").toggleClass("show__active"); 
            $(".hidden__magnifier").siblings().removeClass("show__active");
            return false;
        }
    });
});