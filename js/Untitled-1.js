//prependTo()를 사용해서 더보기 
$('.more').on('click', function(){
	$('<li>추가내용</li>').prependTo('.last_li');	//여기다 데이터를 저장해서 불러오기(json)
});