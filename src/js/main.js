jQuery(document).ready(function($) {

  $(".header__menu").mouseup(function(event) {
    let target = $(event.target);
    if (target.is("p")) {
        $(this).next().slideToggle();
        $(this).prev().slideUp();
        $(this).css('color', 'rgba(255, 255, 255,0.4)');
    }
  });

  $(document).mouseup(function(event) {
    let target = $(event.target);
    if (!target.is("p") && !target.is("a")) {
        $(".header__menu__list").slideUp();
    }
  });

});
