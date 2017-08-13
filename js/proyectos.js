var cargarPagina = function(){
	bioMp(document.getElementById('yape'), {
	    url: 'https://jesus-es-tu-pastor.github.io/el-pastorcito-feliz/public/index.html',
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
	    image: '../images/iphone6_side_right_white.png',
	    scale: 0.5
	});
}


$(document).ready(cargarPagina);

