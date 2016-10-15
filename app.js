var temps = 240;
var pause;

function decompte(){
	pause = setInterval(function(){
		temps--;
		var minutes = parseInt(temps / 60,10);
		var secondes = temps - minutes*60;
		$("#minutes").text(minutes);
		$("#secondes").text(secondes);

	if(temps <= 0){
		clearInterval(pause);
	}
},1000);
};
$("button").click(function(){
	clearInterval(pause);
});
decompte();
