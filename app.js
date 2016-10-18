"use strict";


(function(){
	var app = {
		time : 60,
		intervalID : null,
		init : function(){
			app.listeners();
		},
		listeners : function(){
			$("#start").on('click', app.start);
			$("#pause").on('click', app.pause);
			$("#reset").on('click', app.reset);
			$("#butval").on('click',app.inputTemps);
			
		},
		start : function(){
			clearInterval(app.intervalID);
			app.intervalID = setInterval(app.decrement, 
				1000);
			
		},
		pause : function(){
			clearInterval(app.intervalID);

		},
		reset : function(){

			app.time = 60;
		},
		decrement : function(){
			app.time--;
			app.vueSablier();
			if(app.time <= 0){
				clearInterval(app.intervalID);
			}
		},
		vueSablier : function(){
			var minutes = parseInt(app.time / 60, 10);
			var secondes = app.time % 60;
			var inputMin = $("#min").val();
			
			$("#minutes").html(minutes);
			$("#secondes").html(secondes);
			

		},

	};
	app.init();
})();
			/*if (minutes <10 && secondes <10){
				$("#nbre").html("0" + minutes + ":" + "0" + secondes);

			}*/
