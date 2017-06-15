"use strict";

// Don't change the next two lines!
// These creates two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

// TODO #1: change this to your favorite color from the list

var color = prompt("What is your favorite color?");

var favorite = 'indigo'; 

console.log("the random color chosen is " + color)

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

	console.log("My favorite color is " + favorite);

	var outcome =(color === favorite) ? "the random color matches" : "Random and favorite colors are different";
	
	console.log(outcome);

// TODO #2: Create a block of if/else statements to check for every color except indigo and violet.

// TODO #3: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.

// TODO #4: Have a final else that will catch indigo and violet.

// TODO #5: In the else, log: I do not know anything by that color.

// TODO #6: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.
