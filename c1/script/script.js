


$('li.main-menu').mouseenter(function () {
	$(this).find('ul.sub-menu').slideDown()
});
$('li.main-menu').mouseleave(function () {
	$(this).find('ul.sub-menu').stop().slideUp()
})

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

$('.tab-list li').click(function () {
	$('.tab-list li').removeClass('on')
	$(this).addClass('on')
	let idx = $(this).index()
	$('.tab').hide()
	$('.tab').eq(idx).show()
});

$('.modal').click(function () {
	$('.popup').fadeIn()
});
$('a.close').click(function () {
	$('.popup').fadeOut()
})

