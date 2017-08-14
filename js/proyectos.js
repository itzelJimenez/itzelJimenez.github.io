var cargarPagina = function(){
	$('.carousel').carousel();
	bioMp(document.getElementById('yape'), {
	    url: 'https://itzeljimenez.github.io/geolocalizacion-restaurantes/',
	    view: 'left',
	    image: '../images/iphone6_side_left_gold.png',
	    scale: 0.5
	});

	bioMp(document.getElementById('restaurantes'), {
	    url: 'https://aplication-yape.herokuapp.com/',
	    view: 'front',
	    image: '../images/iphone6_front_black.png',
	    scale: 0.5
	});
	bioMp(document.getElementById('angelesazules'), {
	    url: 'https://elilv21.github.io/angelesAzules/',
	    view: 'right',
	    image: '../images/iphone6_side_right_gold.png',
	    scale: 0.5
	});
}


$(document).ready(cargarPagina);

