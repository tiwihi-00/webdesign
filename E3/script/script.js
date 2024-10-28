$('li.main_menu').mouseenter(function(){
    $(this).stop().find('ul.sub_menu').fadeIn()
})
$('li.main_menu').mouseleave(function(){
    $(this).stop().find('ul.sub_menu').fadeOut()
})

setInterval(function(){
    $('.slide_warp').animate({'top':'-100%'}, function(){
        $('.slide:first').appendTo('.slide_warp')
        $('.slide_warp').css({'top':'0%'})
    })
}, 3000)

$('.modal').click(function(){
    $('.popup').fadeIn()
})
$('.close').click(function(){
    $('.popup').fadeOut()
})