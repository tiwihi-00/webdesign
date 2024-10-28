$('li.main_menu').mouseenter(function () {
    $(this).find('ul.sub_menu').fadeIn()
})

$('li.main_menu').mouseleave(function () {
    $(this).stop().find('ul.sub_menu').fadeOut()
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