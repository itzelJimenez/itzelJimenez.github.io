var sectionSobremi = $("#sobre-mi");
var sectionHabilidades = $("#habilidades");
var sectionProyectos = $("#proyectos");
var sectionContacto = $("#contacto");
var sectionInicio = $("#portada");

var botonSobremi = $(".sobre-mi");
var botonHabilidades = $(".habilidades");
var botonProyectos = $(".proyectos");
var botonContacto = $(".contacto");
var botonInicio = $(".inicio");

 var cargarPagina = function(){
 	mostrarPortada1();
 	cambiarPortadas();
 	    $('.modal').modal();

  $('#menu').click( function(){ $('.tap-target').tapTarget('open');})
  botonSobremi.click(mostrarSecSobreMi);
  botonHabilidades.click(mostrarSecHabilidades);
  botonProyectos.click(mostrarSecProyectos);
  botonContacto.click(mostrarSecContacto);
  botonInicio.click(mostrarSecInicio);

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

var mostrarSecSobreMi = function(){
      sectionSobremi.removeClass('hide');
      sectionHabilidades.addClass('hide');
      sectionProyectos.addClass('hide');
      sectionContacto.addClass('hide');
      sectionInicio.addClass('hide');
}

var mostrarSecInicio = function(){
      sectionSobremi.addClass('hide');
      sectionHabilidades.addClass('hide');
      sectionProyectos.addClass('hide');
      sectionContacto.addClass('hide');
      sectionInicio.removeClass('hide');
}

var mostrarSecHabilidades = function(){
      sectionSobremi.addClass('hide');
      sectionHabilidades.removeClass('hide');
      sectionProyectos.addClass('hide');
      sectionContacto.addClass('hide');
      sectionInicio.addClass('hide');
}

var mostrarSecProyectos = function(){
      $('body').addClass('black');
      sectionSobremi.addClass('hide');
      sectionHabilidades.addClass('hide');
      sectionProyectos.removeClass('hide');
      sectionContacto.addClass('hide');
      sectionInicio.addClass('hide');
}

var mostrarSecContacto = function(){
      sectionSobremi.addClass('hide');
      sectionHabilidades.addClass('hide');
      sectionProyectos.addClass('hide');
      sectionContacto.removeClass('hide');
      sectionInicio.addClass('hide');
}

 $(document).ready(cargarPagina);
