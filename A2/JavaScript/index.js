$('li.mainmenu').mouseenter(function(){
    $('.submenu').stop().slideDown(400)
    $('header').addClass('on')
})
$('li.mainmenu').mouseleave(function(){
    $('.submenu').stop().slideUp(400)
    $('header').removeClass('on')
})