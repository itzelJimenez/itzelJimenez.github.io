var $text = $('#contacto-text');
var $contenido = $('#personal-contacto');


var cargarPagina = function(){
	$text.fadeTo( "slow", 1);
	setInterval(function(){
		$text.fadeTo( "slow", 0.01);
	}, 2000);
	setInterval(function(){
		$text.addClass('hide');
		$contenido.removeClass('hide')
	}, 3000);
	setInterval(function(){
		$contenido.fadeTo( "slow", 1);
	}, 3200)
}



$(document).ready(cargarPagina)