
"use strict";

//D. Write function statements
//1. identify the variables

var rightinput = document.getElementById("rightinput");
var moperator = document.getElementById("moperator");
var leftinput = document.getElementById("leftinput");
var number = document.getElementsByClassName("number");
var operator = document.getElementsByClassName("operator");
var calculate
var answer;
var bequal = document.getElementById("bequal");
var clear = document.getElementById("clear");

//for loop thru operators & numbers to set event listener by class
for (var i = 0; i < number.length; i++) {
	number[i].addEventListener("click", buttonHandler);
}

for (var i = 0; i < operator.length; i++) {
	operator[i].addEventListener("click", buttonHandler);
}

//establish function for each input using if/else statement, beginning with operator
function buttonHandler() {
	if (this.className.includes("operator")) {
		moperator.setAttribute("value", this.value);
		console.log(moperator);
	} else if (moperator.value != "", leftinput.value !="") {
		var displayInfo = rightinput.getAttribute("value");
		displayInfo += this.value; 
		rightinput.setAttribute("value", displayInfo);
		console.log(displayInfo);
	} else if (this.className.includes('number')) {
		var displayInfo = leftinput.getAttribute("value");
		displayInfo += this.value; 
		leftinput.setAttribute("value", displayInfo);
		console.log(displayInfo);
	}

}
	
//clear each value, by element id
clear.addEventListener("click", function() {
	leftinput.setAttribute("value", "");
	moperator.setAttribute("value", "");
	rightinput.setAttribute("value", "");

});


//calculate function for "=":
bequal.addEventListener("click", function() {
	var leftinputNumber = parseFloat(leftinput.getAttribute("value")); //converting string to numerical value
	var rightinputNumber = parseFloat(rightinput.getAttribute("value"));

	switch(moperator.value) {
		case "+":
		answer = leftinputNumber + rightinputNumber;
		break;

		case "-":
		answer = leftinputNumber - rightinputNumber;
		break;

		case "*":
		answer = leftinputNumber * rightinputNumber;
		break;

		case "/":
		answer = leftinputNumber / rightinputNumber;
		break;
	}
	leftinput.setAttribute("value", answer);
	rightinput.setAttribute("value", "");
	moperator.setAttribute("value", "");
	console.log(leftinput.value);
});





