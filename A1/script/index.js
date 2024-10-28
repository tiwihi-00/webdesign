$('li.mainmenu').mouseenter(function () {
    $(this).find('.submenu').stop().slideDown(1000)
}
)
$('li.mainmenu').mouseleave(function(){
    $(this).find('.submenu').stop().slideUp()
})
