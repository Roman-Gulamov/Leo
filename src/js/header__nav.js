jQuery(document).ready(function($) {

    $(".nav__menu").mouseup(function(event) {
      let target = $(event.target);
      if (target.is("ul")) {
          $(this).children().slideToggle();
          $(this).siblings().children().slideUp();
          $(this).css('color', 'rgba(255, 255, 255,0.4)');
      }
    });
  
    $(document).mouseup(function(event) {
      let target = $(event.target);
      if (!target.is("ul")) {
          $(".nav__menu__list").slideUp();
      }
    });
  
  });