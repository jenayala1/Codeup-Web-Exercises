//JS Function Writing Lesson
"use strict";

//=======STANDARD TEMPLATE FOR FUNCTION CHALLENGES

var someTestInput = someValue;
function someFunctionName(someInput) {
	var output = {}; //the empty data type depends on the data type the function will return
	//...the "DO" things that make the output value correct for the function to return..
	return output;

}
//SAMPLE TODO: test the function called addOne that takes an array of numbers and returns an array of the same numbers incremented by addOne
// pass in [1, 2, 3];

var numbers = [1, 2, 3];

function addOne(numberArray) {
	var outputArray = []. //[] - indicate output will be an array
	for (var i = 0; i < numberArray.length; i++) {

	}
	outputArray = numberArray;

	return outputArray;
	}
	//test the function with a console log of the return value of calling the function with a test input
console.log(addOne(numbers));

//#2 - add variables to a new array:
var numbers = [1, 2, 3];

function addOne(numberArray) {
	var outputArray = []. //[] - indicate output will be an array
	for (var i = 0; i < numberArray.length; i++) { //pushes new elements on the output array
		outputArray.push(numberArray[1] + 1); //looks at the index and adds one
	}

return outputArray;
console.log(addOne(numbers));
//returns an output of 2, 3, 4


//#3 - using a for each
var numbers = [1, 2, 3];

function addOne(numberArray) {
	var outputArray = []. //[] - indicate output will be an array
	
	numberArray.forEach(function(element, index, array){
		outputArray.push(element + 1); //specifically pulls the element rather than going thru the whole array (same output as the for loop)
	});

return outputArray;
};
console.log(addOne(numbers));







