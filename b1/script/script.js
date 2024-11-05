$('li.main-menu').mouseenter(function () {
	$('ul.sub-menu').stop().slideDown(500)
});
$('li.main-menu').mouseleave(function () {
	$('ul.sub-menu').stop().slideUp(500)
});

// const mainMenus=document.querySelectorAll('li.main-menu')

// mainMenus.forEach(mainMenu=>{
// 	mainMenu.addEventListener('mouseenter', function(){
// 		mainMenu.classList.add('on')
// 	});
// });
// mainMenus.forEach(mainMenu=>{
// 	mainMenu.addEventListener('mouseleave', function(){
// 		mainMenu.classList.remove('on')
// 	})
// })


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

// const tabLists = document.querySelectorAll('.tab-list li')
// const tabs = document.querySelectorAll('.tab')

// function upMenu(index){
// 	tabLists.forEach(tabList=>tabList.classList.remove('on'))
// 	tabLists[index].classList.add('on')
// 	tabs.forEach(t=>t.classList.remove('on'))
// 	tabs[index].classList.add('on')
// }
// tabLists.forEach((tabList, index)=>{
// 	tabList.addEventListener('click', function(e){
// 		e.preventDefault()
// 		upMenu(index)
// 	})
// });


// $('.modal').click(function(){
// 	$('.popup').fadeIn()
// });
// $('.close').click(function(){
// 	$('.popup').fadeOut()
// })

const modal=document.querySelector('.modal')
const close=document.querySelector('.close')
const popup=document.querySelector('.popup')

modal.addEventListener('click', function(e){
e.preventDefault()
popup.style.display='block'
});

close.addEventListener('click', function(e){
e.preventDefault()
popup.style.display='none'
})