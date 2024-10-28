$('li.mainmenu').mouseenter(function(){
    $(this).find('ul.submenu').slideDown();
})
$('li.mainmenu').mouseleave(function(){
    $(this).find('ul.submenu').stop().slideUp();
})



$('.slide').eq(0).siblings().hide()
let idx=0
setInterval(function(){
    idx++
    if(idx === 3) {
        idx = 0
    }
    $('.slide').fadeOut()
    $('.slide').eq(idx).fadeIn()
}, 3000)


$('.tabmenu li').click(function(){
    $('.tabmenu li').removeClass('on')
    $(this).addClass('on')
    let idx=$(this).index()
    $('.tab').hide()
    $('.tab').eq(idx).show()
})

$('li.modal').click(function(){
    $('.popup').fadeIn()
})
$('.close').click(function(){
    $('.popup').fadeOut()
})