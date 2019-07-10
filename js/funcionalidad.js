/*
	$(document).ready(function(){

		$("#abierto").click(function(){
		
			$("#login form").slideToggle(300);
			$(this).toggleClass("cerrado");//efecto sube y baja

		});

	});
	*/
//son dos metodos distintos
//primero deslizar hacia arriba y hacia abajo
//segundo desliza hacia abajo y desparece
	$(document).ready(function(){

		$("#abierto").toggle(

		function(){

			$("#login form").slideDown(300);
			$(this).addClass("cerrado");

		},

		function(){
			$("#login form").fadeOut(600);//efecto simula una desaparicion 
			$(this).removeClass("cerrado");
		});

	});
