"use strict";

/**
 * TODO #1:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 *  > sayHello("codeup") // returns "Hello, codeup!"
 */
 
////----ANSWER------////
//var sayHello = function(greeting) {
	//eturn greeting
// var name = "Jennifer";
// var sayHello = "Hello"
	
// function sayHello (name) {
// 	alert("Hello");
// }	

/**
 * TODO #3:
 * Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
 * Store the result of the function call in a variable named 'helloMessage'.
 * console.log 'helloMessage' to check your work
 */

 ////-----ANSWER-----/////
// var name = "Jennifer";
// var sayHello = "Hello";
// var helloMessage = "myNameIs";

// function sayHello(helloMessage) {
// 	console.log(helloMessage);
// }	


// Don't modify the following line, it generates a random number between 1 and
// 100 and stores it in a variable named random
//var random = Math.floor((Math.random() * 100) + 1); 

/**
 * TODO #4:
 * Create a function called 'isOdd' that takes a number as a parameter.
 * The function should use the ternary operator to return a message.
 * The message should contain the number being checked, and whether or not the
 * number is odd
 * Call the function 'isOdd' passing the variable 'random' as a parameter.
 * console.log *outside of the function* to check your work
 */
 
 /* Example
 *  > isOdd(42) // returns "42 is not odd!"
 *

 //-----ANSWER -----------///////////////
 var random = Math.floor((Math.random() * 100) + 1); 

	function isOdd(random) {
		if (random %2 ===0) {
			console.log("Number " + random + " is not odd");

		} else {
			console.log("Number " + random + " is odd");
			}
		}
		console.log(isOdd(random));

/**
 * TODO #5: Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant
 *
 * the function should accept a tip percentage and the total of the bill, and
 * return the amount to tip
 *
 * Example
 *  > calculateTip(0.20, 20) // returns 4
 */

/* Calculations required:
 /* tipAmount = bill * tip percent (.20)
 /*determine billTotal = (bill + tipAmount) */

//------ ANSWER ----------/// 
// var bill = 20;
// var tipPercent = .2; 
// var tipAmount = bill * tipPercent;
// var billTotal 

// //function tipAmount(bill, tipPercent) {
// 	//return "The tip amount is " (bill * tipPercent);
// 	//console.log("Tip Amount is " + tipAmount);


// function calculateTip (bill, tipPercent) {
// 	return tipAmount;
// 	console.log("Your tip amount is " + tipAmount);
// }

	
/**
 * TODO #6: use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

//----- ANSWER --------//
var tipAmount = bill * tipPercent;

var bill = prompt("Enter Bill Amount");
var tipPercent = prompt("Enter tip percent");
	
	function tipAmount(bill, tipPercent) {
 	return bill * tipPercent;
 	}

console.log("Recommended tip is " + tipAmount);

	// function calculateTip (bill, tipPercent) {
	// 	return tipAmount;
	//  	console.log("Recommended tip amount is " + tipAmount);
	//  }








