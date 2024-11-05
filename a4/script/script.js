$('li.main-menu').mouseenter(function () {
	$('ul.sub-menu').slideDown()
	$('header').addClass('on')
})
$('li.main-menu').mouseleave(function () {
	$('ul.sub-menu').stop().slideUp()
	$('header').removeClass('on')
})


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

$('.tabmenu li').click(function () {
	$('.tabmenu li').removeClass('on')
	$(this).addClass('on')

	let idx = $(this).index()
	$('.tab').hide()
	$('.tab').eq(idx).show()
})


$('.modal').click(function () {
	$('.popup').fadeIn()
})
$('a.close').click(function () {
	$('.popup').fadeOut()
})