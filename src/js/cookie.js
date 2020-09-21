// jQuery(document).ready(function($) { 
//     let user = $('#user');
//     let visitor = $('#visitor');
//     let subscribe = $('#subscribe');

//         if ($.cookie('user') && $.cookie('email')){
//             user.slideDown(1300).slideUp(2300);
//             setTimeout(() => {
//                 subscribe.slideDown(1300).slideUp(2300);
//             }, 2400); 
//         }
//         else if ($.cookie('user') && !$.cookie('email')){ 
//             user.slideDown(1300).slideUp(2300);
//         }
//         else if (!$.cookie('user')&& $.cookie('email')) {
//             visitor.slideDown(1300).slideUp(2300);
//             setTimeout(() => {
//             subscribe.slideDown(1300).slideUp(2300);
//             }, 2400); 
//         } 
//         else {
//             visitor.slideDown(1300).slideUp(2300);
//         }  

//     setTimeout(search, 5500);

//             function search () {
//                 if (!$.cookie('was')) {
//                     $('#boxUserFirstInfo').arcticmodal({
//                         closeOnOverlayClick: false,
//                         closeOnEsc: true
//                     });
//                 }
//                     $.cookie('was', true, {
//                         expires: 365,
//                         path: '/'
//                     });
//             }
// });