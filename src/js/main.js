jQuery(document).ready(function($) {

  $(".nav__menu").mouseup(function(event) {
    let target = $(event.target);
    if (target.is("a")) {
        $(this).next().slideToggle();
        $(this).prev().slideUp();
        $(this).css('color', 'rgba(255, 255, 255,0.4)');
    }
  });

  $(document).mouseup(function(event) {
    let target = $(event.target);
    if (!target.is("a")) {
        $(".nav__menu__list").slideUp();
    }
  });

});
