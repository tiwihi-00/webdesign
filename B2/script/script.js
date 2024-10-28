//menu
$('li.mainmenu').mouseenter(function(){
    $('.submenu').stop().slideDown(400);
});

$('li.mainmenu').mouseleave(function(){
    $('.submenu').stop().slideUp(400);
});

//slide
setInterval(function(){
    $('.slidewrap').animate({'top':'-100%'}, function(){
        $('.slide:first').appendTo('.slidewrap');
        $('.slidewrap').css({'top':'0%'});
    });
}, 3000);

$('li.modal').click(function(){
    $('.popup').fadeIn()
})
$('.close').click(function(){
    $('.popup').fadeOut()
})