jQuery(document).ready(function($) {

    if (navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > -1) {
        $('.carousel__button').css({'outline':'none', 'border': '4px solid rgba(0, 0, 0, 0.2)'});
        $('.nav__wrapper').css('display', 'inline-flex');
        $('.nav__menu').css({'padding-right': '35px', 'padding-left': '35px'});
        return true;
    }

});