var ducky = document.getElementById('ducky');
var scoreText = document.getElementById('score');
var background = document.getElementById('background');
var score = 0;
var missCounter = 0;
var direction = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];



function hit(){
	score++;
	console.log("you have " + score + " score");
}

function miss(){
	missCounter++;
	if(score > 0){
		score--;
	}
	else{
		alert("game over");
	}
	console.log("you have " + score + " score");
	console.log("you have " + missCounter + " misses");
}