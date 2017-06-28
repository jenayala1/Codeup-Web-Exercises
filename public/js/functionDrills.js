BASIC FUNCTION LAYOUT:

var someTestInput = someValue;

function someFunctionName(someInput) {
	var output = {}; // the empty {}, depends on the data type, in this example it represents an empty object 
	return output;
}



// #1. Write a function called `identity(input)` 
//that takes in an argument called input and returns that input.

//***ANSWER******
// var input = 2;
// function identity(input) {	
// 	return input;
// }
// console.log(identity(input));

// #2. Write a function called `getRandomNumber(min, max)` that returns a random number between min and max values sent to that funciton call.
	
///----ANSWER----//////
	
	// var min = 4
	// var max = 250
	// var random = Math.floor(Math.random() * (max - min)) + min;

	// function getRandom(random) {
	//  	return random;
	//  }
	// console.log("Your number is " + random + " between " + min + " and " + max)	


// #3. Write a function called `first(input)` that returns the first character in the provided string. 

///---ANSWER-----////
	// var input = "joy"
	// var x = 

	// function first(input) {
	// 	return x;
	// }


// #4. Write a fuction called `last(input)` that returns the last character of a string

// #5. Write a function called `rest(input)` that returns everything but the first character of a string.

// #6. Write a function called `reverse(input)` that takes a string and returns it reversed.

// #7 Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.

// #8 Write a function called `count(input)` that takes in a string and returns the number of characters.

// #9 Write a function called `add(a, b)` that returns the sum of a and b

// #10 Write a function called `subtract(a, b)` that return the difference between the two inputs.

// #11 Write multiply(a, b) that returns the product

// #12 Write a divide(numerator, denominator) function that returns a divided by b

// #13 Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor`

// #14 Write the function `square(a)` that takes in a number and returns the number multiplied by itself.

// # Super Duper Gold-Star Bonus

// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators

// Write a function called doMath(operator, a, b) that takes 3 parameters. 
//The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.