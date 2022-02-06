(function($){
    new WOW().init();
})(jQuery);

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

function click1(event) {
    let time = document.lastModified;
    let path = window.location.hostname+'/';
    console.log(event.target);
    if(event.target.href!== undefined) {
      path = event.target.href;
    }

    document.getElementById("modify").innerText = `Last Modified: ${time}`;
    document.getElementById("path").innerText = `User Location: ${path}`;
    }

    window.addEventListener('load', (event) => {
      click1(event);
      });

