$('li.main-menu').mouseenter(function(){
	$('ul.submenu').slideDown()
	$('header').addClass('on')
})
$('li.main-menu').mouseleave(function(){
	$('ul.submenu').slideUp()
	$('header').removeClass('on')
})

setInterval(function(){
	$('.slide-wrap').animate({'top':'-100%'}, function(){
		$('.slide:first').appendTo('.slide-wrap')
		$('.slide-wrap').css({'top':'0%'})
	})
}, 3000)

const tabMenus=document.querySelectorAll('.tabmenu li')
const tabs=document.querySelectorAll('.tab')

function updateMenu(index){
	tabMenus.forEach(tabMenu=>tabMenu.classList.remove('on'))
	tabMenus[index].classList.add('on')
	tabs.forEach(t=>t.classList.remove('on'))
	tabs[index].classList.add('on');
}
tabMenus.forEach((tabMenu, index)=>{
	tabMenu.addEventListener('click', function(e){
		e.preventDefault()
		updateMenu(index)
	})
})


$('li.modal').click(function () {
	$('.popup').fadeIn()
})
$('a.close').click(function () {
	$('.popup').fadeOut()
})