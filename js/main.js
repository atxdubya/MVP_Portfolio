
$(function() {

	var trail = 'animated pulse';

	$('[data-toggle="popover"]').popover();

	$('.trail').addClass(trail);

	$

	$('.map_button1').click(function() {
		$('.map_button2').show(2000);
	});

	$('.map_button2').click(function() {
		$('.map_button3').show(2500);
	});

	$('.map_button3').click(function() {
		$('.map_button4').show(3000);
	});

});