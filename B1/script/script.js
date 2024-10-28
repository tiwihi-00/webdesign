$('li.mainmenu').mouseenter(function(){
    $('.submenu').stop().slideDown(400);
    $('header').addClass('on');
});

$('li.mainmenu').mouseleave(function(){
    $('.submenu').stop().slideUp(400);
    $('header').removeClass('on');
});


//slide
setInterval(function(){
    $('.slidewrap').animate({'left':'-100%'},function(){
        $('.slide:first').appendTo('.slidewrap')
        $('.slidewrap').css({'left':'0%'})
    })

}, 3000)

//tabmenu
$('.tabmenu li').click(function(){
    $('.tabmenu li').removeClass('on')
    $(this).addClass('on')
    let idx=$(this).index()
    $('.tab').hide()
    $('.tab').eq(idx).show()
})


//modal
$('li.modal').click(function(){
    $('.popup').fadeIn()
})
$('a.close').click(function(){
    $('.popup').fadeOut()
})