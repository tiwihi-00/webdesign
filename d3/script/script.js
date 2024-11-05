$('li.main-menu').mouseenter(function () {
	$('ul.sub-menu').stop().fadeIn(500)
});

$('li.main-menu').mouseleave(function () {
	$('ul.sub-menu').stop().fadeOut(500)
});

$('.slide').eq(0).siblings().hide()
let idx = 0
setInterval(function () {
	idx++
	if (idx === 3) {
		idx = 0
	}
	$('.slide').fadeOut()
	$('.slide').eq(idx).fadeIn()
}, 3000)

$('.tab-menu li').click(function () {
	$('.tab-menu li').removeClass('on')
	$(this).addClass('on')

	let idx = $(this).index()
	$('.tab').hide()
	$('.tab').eq(idx).show()
})

$('.modal').click(function () {
	$('.popup ').fadeIn()
});

$('a.close').click(function () {
	$('.popup ').fadeOut()
});