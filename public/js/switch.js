"use strict";
console.log("Switch JS Working");

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var color = prompt("What is your favorite color?");


switch (color) {
	case 'red':
		console.log("Raspberries are red");
		break;

	case'orange':
		console.log("Gerber daisies are orange");
		break;

	case 'yellow':
		console.log("Sunflowers are yellow");
		break;

	case 'green':
		console.log("Asparagus is green");
		break;

	case 'blue':
		console.log("My water bottle is blue");
		break;

	default: 
		console.log("I do not know of anything by that color");
		break;


    // TODO #1: create a case statement that will handle every color except indigo and violet
    // TODO #2: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.

    // TODO #3: create a default case that will catch indigo and violet
    // TODO #4: for the default case, log: I do not know anything by that color.
}