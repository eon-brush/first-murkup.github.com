$('a[href^="#"]').click(function(e){
	e.stopPropagation();
	//Сохраняем значение атрибута href в переменной:
	var target = $(this).attr('href');
	console.log($(target));
	$('html, body').animate({scrollTop: $(target).offset().top}, 800);
});