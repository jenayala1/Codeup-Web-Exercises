"use strict";

// Problems

// --- #1 -- Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative.
//  isNegative(-1) // true
//  isNegative(6) // false

	//----SOLUTION #1------// --still not returning false or true
var number = prompt("Enter number");
	 function isNegative (number) {
 	if (number < 0, "true") {
 		console.log(number + "true");
 	} else {
  		console.log(number + "false");
  	}
 }

// --- #2 -- Write a function named average that accepts an array of numbers and returns the average of those numbers
//  average([1, 2, 3]) // 2
//  average([4, 6, 8, 10, 12]) // 8

	//----SOLUTION #2------// STILL IN PROCESS

var average 


// --- #3 -- Write a function named countOdds that accepts an array of numbers and returns the number of odd numbers in the array.
//  countOdds([1, 2, 3]) // 2
//  countOdds([4, 6, 8, 10]) // 0
//  countOdds([1, 2, 1, 1]) // 3

	//----SOLUTION #3------// - STILL IN PROCESS
var countOdds = [1, 2, 3, 4, 5];
	countOdds.length	

// ---#4 -- Write a function named convertNameToObject that accepts a string that contains a first name and last name separated by a space, and returns an object with properties firstName and lastName.
//  convertNameToObject('Harry Potter') // {firstName: 'Harry', lastName: 'Potter'}
//  convertNameToObject('Ron Weasley') // {firstName: 'Ron', lastName: 'Weasley'}

	//----SOLUTION #4------//
	var firstName;
	var lastName;

	var convertNameToObject = [
		{	firstName: "Harry",
			lastName: "Potter",
		},
		{
			firstName: "Ron",
			lastName: "Weasley"
		}
	];	


// ---#5 -- Write a function named fiveTo that accepts a number and returns an array of the integers from 5 up to (but not including) the passed number.

//  fiveTo(10) // [5, 6, 7, 8, 9]
//  fiveTo(6) // [5]

	//----SOLUTION #5------//


// ---#6 -- Write a function named upperCaseLastNames that accepts an array of objects where each object has properties firstName and lastName and returns the same array of objects with each last name capitalized

//  var names = [
//      {firstName: 'Harry', lastName: 'Potter'},
//      {firstName: 'Ron', lastName: 'weasley'},
//      {firstName: 'Hermione', lastName: 'granger'}
//  ];
//  upperCaseLastNames(names);
 /*
 [
    {firstName: 'Harry', lastName: 'Potter'},
    {firstName: 'Ron', lastName: 'Weasley'},
    {firstName: 'Hermione', lastName: 'Granger'}
 ]
  */

	  //----SOLUTION #6------//


	  	var names = [
			{	firstName: "Harry",
				lastName: "Potter",
			},
			{
				firstName: "Ron",
				lastName: "weasley"
			},
			{
				firstName: "Hermione",
				lastName: "granger"
			}
		];

	names.forEach(function(upperCaseLastNames) {
		names.lastName.toUpperCase();
		console.log("Names are " + firstName + "" + lastName);
	});