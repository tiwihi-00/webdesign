
const mainMenus=document.querySelectorAll('li.main-menu')
mainMenus.forEach(mainMenu=>{
	mainMenu.addEventListener('mouseenter', function(){
		mainMenu.classList.add('on')
	})
});
mainMenus.forEach(mainMenu=>{
	mainMenu.addEventListener('mouseleave', function(){
		mainMenu.classList.remove('on')
	})
});


// $('li.main-menu').mouseenter(function () {
// 	$(this).find('ul.sub-menu').slideDown()
// });
// $('li.main-menu').mouseleave(function () {
// 	$(this).find('ul.sub-menu').stop().slideUp()
// })

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

// $('.tab-list li').click(function () {
// 	$('.tab-list li').removeClass('on')
// 	$(this).addClass('on')
// 	let idx = $(this).index()
// 	$('.tab').hide()
// 	$('.tab').eq(idx).show()
// });

// $('.modal').click(function () {
// 	$('.popup').fadeIn()
// });
// $('a.close').click(function () {
// 	$('.popup').fadeOut()
// })

const tabmenus=document.querySelectorAll('.tab-list li')
const tabs=document.querySelectorAll('.tab')

function upMenu(index){
	tabmenus.forEach(tabmenu=>tabmenu.classList.remove('on'))
	tabmenus[index].classList.add('on')

	tabs.forEach(t=>t.classList.remove('on'))
	tabs[index].classList.add('on')
}

tabmenus.forEach((tabmenu, index)=>{
	tabmenu.addEventListener('click', function(e){
		e.preventDefault()
		upMenu(index)
	})
});

const modal=document.querySelector('.modal')
const popup=document.querySelector('.popup')
const close=document.querySelector('a.close')

modal.addEventListener('click', function(e){
	e.preventDefault()
	popup.style.display='block'
});
close.addEventListener('click', function(e){
	e.preventDefault()
	popup.style.display='none'
});