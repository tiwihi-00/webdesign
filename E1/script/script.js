$('li.main_menu').mouseenter(function(){
    $(this).find('ul.sub_menu').stop().fadeIn()
})
$('li.main_menu').mouseleave(function(){
    $(this).find('ul.sub_menu').stop().fadeOut()
})

setInterval(function(){
    $('.slide_wrap').animate({'left':'-100%'}, function(){
        $('.slide:first').appendTo('.slide_wrap')
        $('.slide_wrap').css({'left':'0%'})
    })
}, 3000)


$('.modal').click(function(){
    $('.popup_back').fadeIn()
})

$('.close').click(function(){
    $('.popup_back').fadeOut()
})