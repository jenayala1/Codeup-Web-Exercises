
"use strict";

//STEPS:

//1. identify the variables ----------------------------


var rightinput = document.getElementById("rightinput");
var moperator = document.getElementById("moperator");
var leftinput = document.getElementById("leftinput");
var number = document.getElementsByClassName("number");
var operator = document.getElementsByClassName("operator");
var answer;
var bequal = document.getElementById("bequal");
var clear = document.getElementById("clear");
var bpercent = document.getElementById("bpercent");
var plusminus = document.getElementById("plusminus");
var displayInfo;


///STEP 2: FIGURE OUT CONDITIONS & FUNCTION STATEMENTS
//-- #2A: 
//---- For loop: thru operators & numbers to set event listener by class ---
//---- NOTES---this enables the click functionality to apply to all elements defined by the specified class --- 
//---- instead of creating an add event listener to each individual element ---

for (var i = 0; i < number.length; i++) {
	number[i].addEventListener("click", buttonHandler);
}

for (var i = 0; i < operator.length; i++) {
	operator[i].addEventListener("click", buttonHandler);
}


//-- #2B: Establish function to insert data into the input fields by clicking number & operator buttons---
//---- Using if/else statement, beginning with operator:
//---- the left input will only be poplulated if the other two input fields are empty ---

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
		console.log(this.value);
	}
}
	
//-- STEP #3: Create function to clear all values (by element id) ---
clear.addEventListener("click", function() {
	leftinput.setAttribute("value", "");
	moperator.setAttribute("value", "");
	rightinput.setAttribute("value", "");

});


//-- STEP #4 - Calculation function to get answer when "=" is clicked, using switch ---

bequal.addEventListener("click", function() {
	var rightinputNumber = parseFloat(rightinput.getAttribute("value"));
	var leftinputNumber = parseFloat(leftinput.getAttribute("value")); //converts string to numerical value
	
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
//-- clear the input fields to only display the answer in the leftinput field: ---
	leftinput.setAttribute("value", answer);
	rightinput.setAttribute("value", "");
	moperator.setAttribute("value", "");
	console.log(leftinput.value);
});


// --------PENDING STEPS --------------------------------

//---------STEP #5 - CORRECT ERRORS: ----------
// leftinput field not allowing multiple entry input, only single digit numbers, right input field accepts multiple digits and decimal


//---------STEP #6 - Percentage: needs to be accessible before & after number or operator class is clicked into input fields
//i.e: 20.00 - 15% =


//---------STEP #7 - "+/-" to convert number to positive or negative
 



