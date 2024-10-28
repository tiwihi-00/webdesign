$('li.mainmenu').mouseenter(function(){
    $('.submenu').stop().slideDown(400)
    $('header').addClass('on')

})
$('li.mainmenu').mouseleave(function(){
    $('.submenu').stop().slideUp(400)
    $('header').removeClass('on')

})          

//0번째 슬라이드만 보이고 나머지는 숨김
$('.slide').eq(0).siblings().hide()

//0번째 슬라이드가 보여지고 있는 상태에서 3초가 지나면 
let idx=0
setInterval(function(){
    idx++
    if(idx === 3){
        idx = 0
    }
    $('.slide').fadeOut()
    $('.slide').eq(idx).fadeIn()
}, 3000)
//1번째 보임 또 3초가 지나면 2번째 보이고 나머지는 숨김


//2번째 보임 또 3초가 지나면 0번째 보이고 나머지는 숨김
//카운터 하나씩 누적된다
//3이되면 카운터 초기화

//popup
$('li.modal').click(function(){
    $('.popup').fadeIn()
})
$('a.close').click(function(){
    $('.popup').fadeOut()
})