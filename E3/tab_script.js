$('.tab_menu li a').click(function(e){
    e.preventDefault(); // 기본 동작 막기

    let href = $(this).attr('href'); // 클릭된 탭의 href 값 (#notice 또는 #gallery)

    $('.tab').hide(); // 모든 탭 내용을 숨기기
    $(href).show(); // 클릭된 탭과 연관된 콘텐츠만 보여주기

    $('.tab_menu li').removeClass('on'); // 모든 탭에서 'on' 클래스 제거
    $(this).parent().addClass('on'); // 클릭된 탭에 'on' 클래스 추가
});