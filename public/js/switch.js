"use strict";
console.log("Switch JS Working");

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
/*var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var color = prompt("What is your favorite color?");

if (color === "red") {
		console.log("Strawberries are red");

	} else if (color === "orange") {
		console.log("Gerber daisies are orange");

	} else if (color === "yellow") {
		console.log ("Sunflowers are yellow");

	} else if (color=== "green") {
		console.log("Asparagus is green");

	} else if (color=== "blue") {
		 console.log("My water bottle is blue");

	} else {
		console.log(" I don't know of anything with that color");
	}

switch (color) {
	case "red":
		console.log("Raspberries are red");
		break;

	case "orange":
		console.log("Gerber daisies are orange");
		break;

	case "yellow":
		console.log("Sunflowers are yellow");
		break;

	case "green":
		console.log("Asparagus is green");
		break;

	case "blue":
		console.log("My water bottle is blue");
		break;

	default: 
		console.log("I do not know of anything by that color");
		break;

*/

    // TODO #1: create a case statement that will handle every color except indigo and violet
    // TODO #2: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.

    // TODO #3: create a default case that will catch indigo and violet
    // TODO #4: for the default case, log: I do not know anything by that color.

// Additional Exerises//
// 1. HEB offers a 10% discount for shoppers whose total is more than $200. 
	/*We know that Cameron bought $180, Ryan $250 and George $320. 
	Write a JS program, using conditionals, that logs to the browser, how much Ryan, Cameron and George need to pay. 
	Your program will have to display a line with the name of the person, the amount before the discount, if any, and the amount after the discount.*/
/*
	var cameron = 180;
	var ryan = 250;
	var george = 320;
	var discountAmount;
	var finalTotal;

	if (cameron >200) {
		discountAmount = cameron * .1;
		finalTotal = cameron - discountAmount;
		console.log("Cameron got a discount on " + cameron + " ");
	} else {
		console.log("Cameron paid" + cameron + " and did not have a discount");
		finalTotal = cameron;
	}

	if (ryan >200) {
		discountAmount = ryan * .1;
		finalTotal = ryan - discountAmount;
		console.log("Ryan got a discount on " + cameron + " ");
	} else {
		console.log("Ryan paid" + cameron + " and did not have a discount");
		finalTotal = ryan;
	}

	if (george >200) {
		discountAmount = ryan * .1;
		finalTotal = george - discountAmount;
		console.log("George got a discount on " + cameron + " ");
	} else {
		console.log("George paid" + cameron + " and did not have a discount");
		finalTotal = george;
	}
	*/

// 2. Suppose your friend Isaac cannot decide between two options. He doesn't know if he should buy a car or a new house. Help him decide! Write a small JS program. The following line generates either a 0 or a 1 randomly.

//  var flipACoin = Math.floor(Math.random()* 2)
// Add an if statement to log a "Buy a car" to the console if the result is 0 and "Buy a house" if the result is 1. Could this program be written using a ternary operator?
/*
	var flipACoin = Math.floor(Match.random ()* 2);

	console.log(flipACoin);

	if (flipACoin ===1) {
		console.log("Buy a house");
	} else {
		console.log("Buy a car");
	}*/

// 3. Suppose there's a promotion in Walmart, each customer is given a randomly generated "lucky number" between 0 and 6. If your lucky number is 0 you have no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2, discount is 25%, if it's 4, 50%, and if it's 5 you'll get all for free!. Write a JS program that logs to the console how much you will have to pay if your receipt is for $60. Every time you reload your page you should see a different result. Use a switch statement for this exercise.

// The following line generates a random number between 0 and 5.
//  var luckyNumber = Math.floor(Math.random()* 6)

	// var luckyNumber = Math.floor(Math.random() * 6);
	// var subtotal = 60;
	// var discount;
	// var newTotal;

	// console.log(luckyNumber);

	// switch(luckyNumber) {
	// 	case 0:
	// 		console.log("No discount");
	// 		discoint = 0;
	// 		break;

	// 	case 1:
	// 		console.log("10% discount");
	// 		discoint = .1;
	// 		break;

	// 	case 2:
	// 		console.log("25% discount");
	// 		discoint = .25;
	// 		break;

	// 	case 4:
	// 		console.log("50% discount");
	// 		discoint = .5;
	// 		break;

	// 	case 5:
	// 		console.log("100% discount");
	// 		discoint = 1;
	// 		break;

	// 	default:
	// 	console.log("No lucky number discount");
	// 	break;
	// }

	// newTotal = subtotal - (subtotal * discount);
	// console.log("Your final total after discount is " + newTotal);


// 4. 	Write some JavaScript that uses a confirm dialog to ask the user if they would like to enter a number. 
//		If they click 'Ok', prompt the user for a number, then use 3 separate alerts to tell the user:

		// 	whether the number is even or odd
		// what the number plus 100 is
		// if the number is negative or positive
		// if what the user enters is not a number, use an alert to tell them that, and do not display any of the above information.

	var proceed = confirm("Would you like to enter a number");
	if (proceed) {
		
		var number = prompt("Please enter a nunber");

		if (isNaN(parseFloat(number))) {
			console.log("Not a valid number");
		} else {
			if (number % 2 === 0) {
				alert("Your number is even");
				} else {
					alert("Your number is odd");
				}

				alert("Your number plus 1oo is " + (parseFloat(number) + 100));

				if (number < 0) {
					console.log(number + " is negative");
				} else {
					console.log(number + " is positive");
				}
			}
		}
	} else {
		console.log("Another time then...");
	}
// }