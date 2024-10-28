$('li.mainmenu').mouseenter(function(){
    $(this).find('ul.submenu').slideDown()
})
$('li.mainmenu').mouseleave(function(){
    $(this).find('ul.submenu').stop().slideUp()
})

setInterval(function(){
    $('.slidewrap').animate({'top':'-100%'}, function(){
        $('.slide:first').appendTo('.slidewrap');
        $('.slidewrap').css({'top':'0%'});
    })
}, 3000)

$('li.modal').click(function(){
    $('.popup').fadeIn()
})
$('.close').click(function(){
    $('.popup').fadeOut()
})