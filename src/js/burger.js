jQuery(document).ready(function($) {

$('.toggle__menu').on('click', function() {
    $('.nav__wrapper').toggleClass("pushed");
    $('.nav__menu').slideToggle(400, function() {
        if($(this).css('display') === "none") {
            $(this).removeAttr('style');
        }
    });
});

$(".nav__menu").mouseup(function(event) {
    let target = $(event.target);
    if (target.is("ul li:first-child")) {
        $(this).children().not('ul li:first-child').slideToggle();
        $(this).siblings('ul').children().not('ul li:first-child').slideUp();
    }
});

$(document).mouseup(function(event) {
    let target = $(event.target);
    if (!target.is("ul li:first-child")) {
        $(".nav__menu__list").slideUp();
    }
});

});