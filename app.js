"use strict";


(function(){
	var app = {
		timer : null,
		intervalID : null,
		init : function(){
			this.listeners();
			
		},
		listeners : function(){
			$("#start").on('click', this.start.bind(this));
			$("#pause").on('click', this.pause.bind(this));
			$("#reset").on('click', this.reset.bind(this));
			
			
		},
		start : function(){
			clearInterval(this.intervalID);
			this.intervalID = setInterval(this.decrement.bind(this), 
				1000);
			
		},
		pause : function(){
			clearInterval(this.intervalID);

		},
		reset : function(){

			this.timer = 60;
		},
		decrement : function(){
			this.timer--;
			this.updateView();
			if(this.timer <= 0){
				clearInterval(this.intervalID);
			}
		},
		updateView : function(){
			var minutes = parseInt(this.timer / 60, 10);
			var secondes = this.timer % 60;
			var input = $("#min").val();
			
			$("#minutes").html(minutes);
			$("#secondes").html(secondes);
			

		},

	};
	app.init();
})();
			/*if (minutes <10 && secondes <10){
				$("#nbre").html("0" + minutes + ":" + "0" + secondes);

			}*/
