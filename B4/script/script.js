$('li.mainmenu').mouseenter(function () {
    $('ul.submenu').stop().slideDown(400);
    $('.header-inner').addClass('on');
});
$('li.mainmenu').mouseleave(function () {
    $('ul.submenu').stop().slideUp(400);
    $('.header-inner').removeClass('on');
});

setInterval(function () {
    $('.slidewarp').animate({ 'left': '-100%' }, function () {
        $('.slide:first').appendTo('.slidewarp');
        $('.slidewarp').css({ 'left': '0%' });
    });

}, 3000)

$('.modal').click(function () {
    $('.popup').fadeIn();
});
$('.close').click(function () {
    $('.popup').fadeOut();
});