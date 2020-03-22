jQuery(document).ready(function($) {

$('.toggle__menu').on('click', function() {
    $('.nav__wrapper').toggleClass("pushed");
    $('.nav__menu').slideToggle(400, function(){
        if($(this).css('display') === "none"){
            $(this).removeAttr('style');
        }
    });
});

$(".nav__menu").mouseup(function(event) {
    let target = $(event.target);
    if (target.is("ul")) {
        $(this).children().slideToggle();
        $(this).siblings('ul').children().slideUp();
    }
    });

$(document).mouseup(function(event) {
    let target = $(event.target);
    if (!target.is("ul")) {
        $(".nav__menu__list").slideUp();
    }
    });

});