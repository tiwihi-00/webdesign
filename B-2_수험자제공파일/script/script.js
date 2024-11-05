$('li.main-menu').mouseenter(function(){
	$('ul.sub-menu').stop().slideDown(500)
	$('header').addClass('on')
});

$('li.main-menu').mouseleave(function(){
	$('ul.sub-menu').stop().slideUp(500)
	$('header').removeClass('on')
});

setInterval(function(){
	$('.slide-wrap').animate({'left':'-100%'}, function(){
		$('.slide:first').appendTo('.slide-wrap')
		$('.slide-wrap').css({'left':'0'})
	})
}, 3000)

$('.modal').click(function(){
	$('.popupback').fadeIn()
})
$('a.close').click(function(){
	$('.popupback').fadeOut()
})