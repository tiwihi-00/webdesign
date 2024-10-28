$('li.main_menu').mouseenter(function () {
    $('ul.sub_menu').stop().slideDown()
    $('.slide_container').addClass('on')
})
$('li.main_menu').mouseleave(function () {
    $('ul.sub_menu').stop().slideUp()
    $('.slide_container').removeClass('on')
})

setInterval(function(){
    $('.slide_wrap').animate({'left':'-100%'}, function(){
        $('.slide:first').appendTo('.slide_wrap')
        $('.slide_wrap').css({'left':'0%'})
    })
}, 3000)

$('.tab_list li').click(function(){
    $('.tab_list li').removeClass('on')
    $(this).addClass('on')

    let idx=$(this).index()
    $('.tab').hide()
    $('.tab').eq(idx).show()
})


$('.modal').click(function(){
    $('.popup').fadeIn()
})
$('.close').click(function(){
    $('.popup').fadeOut()
})