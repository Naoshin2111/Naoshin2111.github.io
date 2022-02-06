// (function($){
//     new WOW().init();
// })(jQuery);

// $(function() {
//     $('a.page-scroll').bind('click', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top
//         }, 1500, 'easeInOutExpo');
//         event.preventDefault();
//     });
// });

      
    let time = document.lastModified;
    let path = window.location.href;
    document.getElementById("modify").innerText = `Last Modified: ${time}`;
    document.getElementById("path").innerText = `User Location: ${path}`;
