$(document).ready(function(){

	for (var i = 0; i < 16*16; i++) {
		if((i % 16) == 0){
			$('.container').append('<div class="square" style="clear:both"></div>');

		}else{
			$('.container').append('<div class="square"></div>');
		}
	}
	

});