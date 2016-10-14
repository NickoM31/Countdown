
var timer = 90;
var stop;


function secondes(){
stop = setInterval(function(){
	$(".secondes").text(timer--);
	if(timer<0){
		clearInterval(stop);
	}
},1000);


}

function minutes(){
stop = setInterval(function(){
	$(".minutes").text(timer--);
	if(timer<0){
		clearInterval(stop);
	}
},1000);


}

function heures(){
stop = setInterval(function(){
	$(".heures").text(timer--);
	if(timer<0){
		clearInterval(stop);
	}
},1000);


}



/*$("h2").text(heures()+":"+minutes()+":"+secondes());*/















