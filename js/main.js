
 var onload = function(){
 	  $('.button-collapse').sideNav();
 	  $('.parallax').parallax();
 	  $('.proyect').mouseover(showGifProyects);
 	  $('.proyect').mouseout(hideGifProyects);
 	  $('#menu').click(opacityNull);
 };

var showGifProyects = function(e){
	 $(this).children('img').addClass("hide");
	 $(this).children('div').removeClass("hide");
};

var hideGifProyects = function(){
	 $(this).children('img').removeClass("hide");
	 $(this).children('div').addClass("hide");
};

var opacityNull = function(){
	 $('#sidenav-overlay').removeClass("opacity");
}

 $(document).ready(onload);