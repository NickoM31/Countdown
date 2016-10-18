"use strict";


(function(){
	var app = {
		timer : null,
		intervalID : null,
		init : function(){
			this.listeners();
			
		},
		listeners : function(){
			$("#butval").on('click', this.done.bind(this));
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
		decrement : function(){
			this.timer--;
			console.log(this.timer);
			this.updateView();
			if(this.timer <= 0){
				clearInterval(this.intervalID);
				
			}
		},
		done : function(){
			var min = parseInt($("#inputmin").val(),10);
			var sec = parseInt($("#inputsec").val(),10);
			$("#minutes").html(min);
			$("#secondes").html(sec);
			if(isNaN(min)){
				min = 0;
			}if(isNaN(sec)){
				sec = 0;
			}
			this.timer = min*60 + sec;
		},
		reset : function(){
			this.done();
			console.log("braaapp");
			
		},
		updateView : function(){

			var min= parseInt(this.timer / 60, 10);
			var sec= this.timer % 60;
			$("#minutes").html(min);
			$("#secondes").html(sec);
			if(min < 10){
				$("#minutes").html("0" + min);
			}if(sec < 10){
				$("#secondes").html("0" + sec);
			}
		},

	};
	app.init();
})();

