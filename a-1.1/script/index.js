

// $('li.main-menu').mouseenter(function () {
// 	$(this).find('ul.sunbmenu').stop().slideDown(500)
// })
// $('li.main-menu').mouseleave(function () {
// 	$(this).find('ul.submenu').stop().slideUp(500)
// })

const mainmenus = document.querySelectorAll('li.main-menu')
mainmenus.forEach(mainmenu => {
	mainmenu.addEventListener('mouseenter', () => {
		mainmenu.classList.add('on')
	})
})
mainmenus.forEach(mainmenu=>{
	mainmenu.addEventListener('mouseleave', ()=>{
		mainmenu.classList.remove('on')
	})
})

setInterval(function(){
	$('.slide-wrap').animate({'top':'-100%'}, function(){
		$('.slide:first').appendTo('.slide-wrap')
		$('.slide-wrap').css({'top':'0%'})
	})
}, 2000)

const tabmenus = document.querySelectorAll('ul.tabmenu li')
const tabs = document.querySelectorAll('.tab')

function updateSlide(index) {
	tabs.forEach(t => t.classList.remove('on'));
	tabs[index].classList.add('on');
	tabmenus.forEach(tabmenu => tabmenu.classList.remove('on'));
	tabmenus[index].classList.add('on')
}

tabmenus.forEach((tabmenu, index) => {
	tabmenu.addEventListener('click', function (e) {
		e.preventDefault()
		updateSlide(index);
	})
})


// $('.tabmenu li').click(function () {
// 	$('.tabmenu li').removeClass('on')
// 	$(this).addClass('on')
// 	let idx = $(this).index()
// 	$('.tab').removeClass('on')
// 	$('.tab').eq(idx).addClass('on')
// })

$('li.modal').click(function () {
	$('.popup').fadeIn()
})
$('a.close').click(function () {
	$('.popup').fadeOut()
})