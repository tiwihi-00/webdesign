$('li.main-menu').mouseenter(function () {
	$('ul.sub-menu').stop().slideDown(500)
});
$('li.main-menu').mouseleave(function () {
	$('ul.sub-menu').stop().slideUp(500)
});


setInterval(function(){
	$('.slide-wrap').animate({'left':'-100%'}, function(){
		$('.slide:first').appendTo('.slide-wrap')
		$('.slide-wrap').css({'left':'0%'})
	})
}, 3000);

$('.tab-list li').click(function(){
	$('.tab-list li').removeClass('on')
	$(this).addClass('on')
	let idx=$(this).index()
	$('.tab').hide()
	$('.tab').eq(idx).show()
})



$('.modal').click(function(){
	$('.popup').fadeIn()
});
$('.close').click(function(){
	$('.popup').fadeOut()
})

