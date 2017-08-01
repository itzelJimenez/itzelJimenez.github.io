
 var cargarPagina = function(){
 	mostrarPortada1();
 	cambiarPortadas();
 	    $('.modal').modal();

  $('#menu').click( function(){ $('.tap-target').tapTarget('open');})
 };

var mostrarPortada1 = function(){
	$('.portada1').removeClass('hide');
};

var mostrarPortada2 = function(){
	$('.portada2').removeClass('hide');
};

var mostrarPortada3 = function(){
	$('.portada3').removeClass('hide');
};

var cambiarPortadas = function(){
	setInterval(function() {
      $('.portada1').addClass('hide');
      $('.portada3').addClass('hide');
      mostrarPortada2();
	}, 3000);

	setInterval(function() {
      $('.portada2').addClass('hide');
      $('.portada1').addClass('hide');
      mostrarPortada3();
	}, 6000);

	setInterval(function() {
      $('.portada3').addClass('hide');
      $('.portada2').addClass('hide');
      mostrarPortada1();
	}, 9000);	
}


 $(document).ready(cargarPagina);
