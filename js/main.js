
$(function() {

// This animate function slows the page load down until it finishes
// 	var trail = 'animated pulse';
// 	$('.trail').addClass(trail);

// Adventure Page
	$('[data-toggle="popover"]').popover();

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