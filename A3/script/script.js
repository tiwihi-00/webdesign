// menu//
$('li.mainmenu').mouseenter(function(){
    $(this).find('ul.submenu').slideDown()
})
$('li.mainmenu').mouseleave(function(){
    $(this).find('ul.submenu').stop().slideUp()
})

//tab//
$('.tabmenu li').click(function(){
    $('.tabmenu li').removeClass('on')
    $(this).addClass('on')
    let idx=$(this).index()
    $('.tab').hide()
    $('.tab').eq(idx).show()
})
//어떤 값을 연결하려면 a로 위치를 지정하거나 인덱스 순서를 이용하여 연결한다.//

//popup
$('li.modal').click(function(){

    $('.popup').fadeIn()
})

$('a.close').click(function(){

    $('.popup').fadeOut()
})