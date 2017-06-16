"use strict";

// For Loops

// 1. Create a file named for_loops.js inside the js directory and link it to your loops.html file.

// 2. Write the JS code to prompt the user for a number between 1 and 10, 
//then log to the console the multiplication table for that number. 
//For instance, if the user enters is 7, the console output should look like:

			//  7x1=7
			//  7x2=14
			//  7x3=21
			//  7x4=28
			//  7x5=35
			//  7x6=42
			//  7x7=49
			//  7x8=56
			//  7x9=63
			//  7x10=70

//ANSWER
// var number = prompt("Choose an odd number between 1 and 10")
// var result

// var multiplier = number;
// 	for (var i = 0; i <= 10; i++) {
// 	    var result = multiplier * i;
// 	    console.log(multiplier + ' * ' + i + ' = ' + result);
// 	}

//Instructor Solution:
// var userInput:
	// do {
	// 	userInput = prompt("Please input a number between 1 and 10");
	// }	while(isNaN(userInput) || (userInput < 1 || userInput > 10));

	// for(var 1 = 1; i<= 10; i++) {
	// 	console.log(userInput + "x" + i + "=" + (i * userInput))
	// }


// 3. Use a for loop and the code from the previous lessons to generate 10 random numbers 
//between 20 and 200 and output to the console whether each number is odd or even. For example:

//  123 is odd
//  80 is even
//  24 is even
//  199 is odd
//  ...
// 
//ANSWER:
// var min = 20
// var max = 200
// var number = Math.floor(Math.random() * 20) +20;
// 	//console.log("Your number is " + number)

// 	if (number % 2 ===0) {
// 		console.log("Number " + number + " is even");
// 	} else {
// 		console.log("Number " + number + " is odd");
// 	}

//	INSTRUCTOR SOLUTION:
	// var max = 200;
	// var min = 20;
	// var randomNumber
	
	// for(var 1 = 1; i<= 10; i++) {
	// 	var randomNumber = Math.floor(Math.random() * (max - min)) + min;
	// 	if(randomNumber % 2 == 0) {
	// 		console.log(randomNumber + " is even");
	// 	} else {
	// 		console.log(randomNumber + " is odd")
	// 	}

// 4. Use inline JavaScript to create a for loop that uses console.log to create the output shown below.

//  1
//  22
//  333
//  4444
//  55555
//  666666
//  7777777
//  88888888
//  999999999
//  0000000000

//INSTRUCTOR SOLUTION #1:
//	console.log(1);
//  console.log(22);
//  console.log(333);
//  console.log(4444);
//  console.log(55555);
//  console.log(666666);
//  console.log(7777777);
//  console.log(88888888);
//  console.log(999999999);
//  console.log(0000000000);


// SOLUTION #2:
	// for(var i = 1; i <= 10; i++) {
	// 	if(i ==1) {
	// 		console.log(i)
	// 	} else if (i == 2) {
	// 		console.log(i.toString() + i);
	// 	} else if (i == 3) {
	// 		console.log(i.toString() + i + i);
	// }

// SOLUTION #3:
	// var stringNumber;

	// for(var i = 1; i <= 10; i++) {
		// 	stringNumber = i.toString();
		// 	stringNumber - stringNumber.substr(stringNumber.length -1);

		// 	console.log(stringNumber.repeat(i));
		// }

// 5. Create a for loop that uses console.log to create the output shown below.

//  100
//  95
//  90
//  85
//  80
//  75
//  70
//  65
//  60
//  55
//  50
//  45
//  40
//  35
//  30
//  25
//  20
//  15
//  10
//  5

//var x = 100;

	// for(var x = 100; x >= 5; x--) {
	// 	console.log("Number is " + x);
	// }

	//INSTRUCTOR SOLUTION:

		for(var i = 100; i >= 5; i = i - 5) {
			console.log(i);
		}