$('li.main-menu').mouseenter(function(){
    $(this).find('ul.sub-menu').show();
})
$('li.main-menu').mouseleave(function(){
    $(this).find('ul.sub-menu').stop().hide();
})



setInterval(function(){
    $('.slide-wrap').animate({'left':'-100%'}, function(){
        $('.slide:first').appendTo('.slide-wrap')
        $('.slide-wrap').css({'left':'0%'})
    })
}, 3000)





$('.modal').click(function(){
    $('.popup').fadeIn()
})
$('.close').click(function(){
    $('.popup').fadeOut()
})