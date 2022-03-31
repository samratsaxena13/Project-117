var dataArray = ['Alarm Clock', 'Hat', 'Hamburger', 'Butterfly', 'Ambulance'];
var randomNum = Math.floor((Math.random()*dataArray.length));
console.log("Sketch to draw: " + dataArray[randomNum]);
var currentSketch = dataArray[randomNum];
document.getElementById("taskLbl").innerHTML = currentSketch;

var timeCounter = 0;
var timeCheck = "";
var drawnSketch = "";
var sketchAnswer = "";
var scoreCounter = 0;