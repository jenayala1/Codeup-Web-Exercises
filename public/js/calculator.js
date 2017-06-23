
"use strict";

//D. Write function statements
//1. identify the variables

var rightinput = document.getElementById("rightinput");
var moperator = document.getElementById("moperator");
var leftinput = document.getElementById("leftinput");
var number = document.getElementsByClassName("number");
var operator = document.getElementsByClassName("operator");
var answer;
var bequal = document.getElementById("bequal");
var clear = document.getElementById("clear");
var percent

//for loop thru operators & numbers to set event listener by class - 
//this enables the click functionality to apply to all elements defined by the specified class, 
//instead of creating an add event listener to each individual element

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
	
//clear all values, by element id
clear.addEventListener("click", function() {
	leftinput.setAttribute("value", "");
	moperator.setAttribute("value", "");
	rightinput.setAttribute("value", "");

});

//calculate function for "=" to get answer:
bequal.addEventListener("click", function() {
	var rightinputNumber = parseFloat(rightinput.getAttribute("value"));
	var leftinputNumber = parseFloat(leftinput.getAttribute("value")); //converting string to numerical value
	
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

//function for percentage: needs to be accessible after other arithmetic functions:
//i.e - 20.00 - 15% =
// function percentage(leftinput)


//function "+/-" to convert number to positive or negative
 



