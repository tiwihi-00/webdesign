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


// $('.tab-list li').click(function(){
// 	$('.tab-list li').removeClass('on')
// 	$(this).addClass('on')
// 	let idx=$(this).index()
// 	$('.tab').hide()
// 	$('.tab').eq(idx).show()
// })

const tabLists = document.querySelectorAll('.tab-list li')
const tabs = document.querySelectorAll('.tab')

function upMenu(index) {
	tabLists.forEach(tabList => tabList.classList.remove('on'))
	tabLists[index].classList.add('on')

	tabs.forEach(t => t.classList.remove('on'))
	tabs[index].classList.add('on')
}

tabLists.forEach((tabList, index) => {
	tabList.addEventListener('click', function (e) {
		e.preventDefault()
		upMenu(index)
	})
});

// $('.modal').click(function () {
// 	$('.popup').fadeIn()
// })
// $('a.close').click(function () {
// 	$('.popup').fadeOut()
// })
const modal=document.querySelector('.modal')
const popup=document.querySelector('.popup')
const close=document.querySelector('a.close')

modal.addEventListener('click', function(e){
e.preventDefault()
popup.style.display='block'
})

close.addEventListener('click', function(e){
e.preventDefault()
popup.style.display='none'
})