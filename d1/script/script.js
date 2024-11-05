$('li.main-menu').mouseenter(function(){
	$(this).find('ul.sub-menu').slideDown(500)
});
$('li.main-menu').mouseleave(function(){
	$('ul.sub-menu').stop().slideUp(500)
});

// setInterval(function(){
// 	$('.slide-wrap').animate({'top':'-100%'}, function(){
// 		$('.slide:first').appenTo('.slide-wrap')
// 		$('.slide-wrap').css({'top':'0%'})
// 	})
// }, 3000)

$('.slide').eq(0).siblings().hide()
let idx=0
setInterval(function(){
	idx++
	if(idx === 3){
		idx=0
	}
	$('.slide').fadeOut()
	$('.slide').eq(idx).fadeIn()
}, 3000)


$('.tab-list li').click(function(){
	$('.tab-list li').removeClass('on')
	$(this).addClass('on')
	let idx=$(this).index()
	$('.tab').hide()
	$('.tab').eq(idx).show()
})


$('.modal').click(function () {
	$('.popup').fadeIn()
})
$('a.close').click(function () {
	$('.popup').fadeOut()
})
