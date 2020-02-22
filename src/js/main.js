jQuery(document).ready(function($) {
  $(".header__menu").mouseup(function(event) {
    let target = $(event.target);
    if (target.is("p")) {
        $(this).next().slideToggle().addClass("active");
        $(this).prev().slideToggle().removeClass("active");
    }
  });

  $(document).mouseup(function(event) {
    let target = $(event.target);
    if (!target.is("p") && !target.is("a")) {
      $(".header__menu__list.active").slideUp().removeClass("active");
      $(".header__menu__list").slideUp().removeClass("active");
    }
  });

});
