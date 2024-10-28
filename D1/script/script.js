$('li.main_menu').mouseenter(function(){
    $(this).find('ul.sub_menu').fadeIn()
})
$('li.main_menu').mouseleave(function(){
    $(this).find('ul.sub_menu').stop().fadeOut()
})

setInterval(function(){
    $('.slide_wrap').animate({'top':'-100%'}, function(){
        $('.slide:first').appendTo('.slide_wrap')
        $('.slide_wrap').css({'top':'0%'})
    })
}, 3000)

$('.tab-menu li').click(function(){
    $('.tab-menu li').removeClass('on')
    $(this).addClass('on')
    
    let idx = $(this).index()
    $('.tab').hide()
    $('.tab').eq(idx).show()
})

$('.modal').click(function(){
    $('.popup').fadeIn()
})
$('.close').click(function(){
    $('.popup').fadeOut()
})