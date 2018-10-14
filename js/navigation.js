var $nav = $('.nav-container');
var $navContainer = $('.navbar');
var $navLink = $('.nav-link');
var $navBrandTxt = $('.nav-brand-type');
var $navBrandIcon = $('.nav-brand-icon')

$(".mobile-control").click(function(){
    var menu = $(".nav-menu-mobile");
    menu.fadeToggle( "fast", "linear" );
});

$(document).scroll(function() {
    if ($(this).scrollTop()>100) {
        $navBrandTxt.fadeOut("fast", function() {
            $navBrandIcon.fadeIn("fast");
        });
        
    } else {
        $navBrandIcon.fadeOut("fast", function() {
            $navBrandTxt.fadeIn("fast");
        });
    }
    $nav.css({
        'padding': $(this).scrollTop()>100 ? '10px 0' : '25px 0'
    });
    $navContainer.css({
        'background': $(this).scrollTop()>100 ? '#feffff' : 'none'
    });
    $navLink.css({
        'color': $(this).scrollTop()>100 ? '#17252a' : '#feffff'
    })
});