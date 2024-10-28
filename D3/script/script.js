$('li.main_menu').mouseenter(function () {
    $('ul.sub_menu').stop().fadeIn()
    $('main').addClass('on')
})
$('li.main_menu').mouseleave(function () {
    $('ul.sub_menu').stop().fadeOut()
    $('main').removeClass('on')
})

$('.slide').eq(0).siblings().hide()
idx = 0
setInterval(function () {
    idx++
    if (idx === 3) {
        idx = 0
    }
    $('.slide').fadeOut()
    $('.slide').eq(idx).fadeIn()
}, 3000)


$('.tab_list li').click(function(){
    $('.tab_list li').removeClass('on')
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