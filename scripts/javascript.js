$(document).ready(function(){

	var action = "draw";
	var draw_focused = false;
	var numPixels = 92;

	for (var i = 0; i < numPixels*numPixels; i++) {
		if((i % numPixels) == 0){
			$('.container').append('<div class="square" style="clear:left"></div>');

		}else{
			$('.container').append('<div class="square"></div>');
		}
	}

	var pixelHeight = 540/numPixels;
	$('.square').css('height',pixelHeight);
	$('.square').css('width', pixelHeight);

	$('.square').click(function(){
		if (draw_focused) {
			draw_focused = false;
		}else{
			draw_focused = true;
		}
	});
	
	$('.square').hover(

		function(){
			if (action == "draw" && draw_focused) {
				$(this).addClass('yellow');
			}else if(action == "erase"){
				$(this).removeClass('yellow');
			}
			
		}

	);

	//handle button click event
	$('button').click(function(){
		
		if( $(this).attr('name') == "clear" ){
			clearSketch();
		}else{
			$('button').removeClass('clicked');
			$(this).addClass('clicked');
			action = $(this).attr('name');
		}

		
	});

});


function clearSketch(){
	
	$('.container div').removeClass('yellow');
}



