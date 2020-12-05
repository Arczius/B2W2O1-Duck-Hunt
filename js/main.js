var score = 0;
var missCounter = 0;
var direction = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];



function hit(){
	score++;
	console.log("you have " + score + " score");
	document.getElementById('score').innerHTML ="<h2>" + "points: " + score + "</h2>";
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
