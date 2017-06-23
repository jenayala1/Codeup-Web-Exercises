
"use strict";

//D. Write function statements
//1. identify the variables

var rightinput = document.getElementById("rightinput");
var moperator = document.getElementById("moperator");
var leftinput = document.getElementById("leftinput");
var ddecimal = document.getElementById("bdecimal");
var bpercent = document.getElementById("bpercent");

//2. command to begin cursor in the left operand field & disallow entry in next fields until populated
//3. function to retrieve input from HTML buttons pushed (0-9), returned as numerical values into the left operand field
	//may need an if/else or true statment to determine which input field to place the value

var zero = document.getElementById("zero");
	zero.addEventListener("click", function() {
	leftinput.value = 0;
	});

var one = document.getElementById("one");
	one.addEventListener("click", function() {
	leftinput.value = 1;
	});

var two = document.getElementById("two");
	two.addEventListener("click", function() {
	leftinput.value = 2;
	});

var three = document.getElementById("three");
	three.addEventListener("click", function() {
	leftinput.value = 3;
	});

var four = document.getElementById("four");
	four.addEventListener("click", function() {
	leftinput.value = 4;
	});

var five = document.getElementById("five");
	five.addEventListener("click", function() {
	leftinput.value = 5;
	});

var six = document.getElementById("six");
	six.addEventListener("click", function() {
	leftinput.value = 6;
	});

var seven = document.getElementById("seven");
	seven.addEventListener("click", function() {
	leftinput.value = 7;
	});

var eight = document.getElementById("eight");
	eight.addEventListener("click", function() {
	leftinput.value = 8;
	});

var nine = document.getElementById("nine");
	nine.addEventListener("click", function() {
	leftinput.value = 9;
	});


//4. function to retrieve input from HTML buttons pushed (+, -, *, /), 
//returned as mathematical values in the middle operator field
var bmultiply = document.getElementById("bmultiply");
	bmultiply.addEventListener("click", function() {
	moperator.value = "multiply";
	});

var bplus = document.getElementById("bplus");
	bplus.addEventListener("click", function() {
	moperator.value = "add";
	});

var bequal = document.getElementById("bequal");
	bequal.addEventListener("click", function() {
	moperator.value = "equal";
	});

// var bdivide = document.getElementById("bdivide");
// 	bdivide.addEventListener("click", function() {
// 	moperator.value = "divide";
// 	});

var bsubtract = document.getElementById("bsubtract");
	bsubtract.addEventListener("click", function() {
	moperator.value = "subtract";
	});	

//var calculate = document.get


//5. Function to retrieve input from HTML buttons pushed (0-9), returned as numerical values in the right operand field
	//consider using append or concatenation to add the values to the correct input box
// 1st Solution:
// function AddRightInput (getDig) {
// 	if (var leftinput == null);
	
// 	}, else 
// 		function (calculate) {
	
// 	}, else ( == 'bplus') {

//6. Function to calculate all three input fields (left to right) when the "=" button is pushed
//7. Function to clear the fields when the "C" button is pushed 
var clear
//		Complete after the add input functions are complete - will be referenced 
//		(possibly) as a removeEventListener to the addinput


//8. functions to disallow invalid entries in the selected fields 
