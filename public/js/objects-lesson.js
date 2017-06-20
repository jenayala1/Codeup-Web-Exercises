"use strict"

//Arrays are lists of values
//Objects are containers for state & behavior (state - value of a variable)
//Objectes bundle together facts about our state and make behavior available

//Store objects to a variable
//Properties on objects are variables on objects


//example of object constructor syntax: (not used commonly-older)
//car.make = "VW"; //string/property associated to the object "car"
//car.model = "Bug"; // string/property associated to the object "car"

//object literal syntax (newer): (same as above, just different syntax)
var car = {}; //empty object with the {}
car.make = "VW";
car.model = "Bug";
car.miles = 35000;
console.log(car);

//concatenation:
console.log("My car is a " + car.make + ". And it has " + car.miles + " miles");

//Example with prompt - need full string info

// var car = prompt("Enter car") 
// car.make = "VW";
// car.model = "Bug";
// car.miles = 35000;
// console.log(car);

// //concatenation:
// console.log("My car is a " + car.make + ". And it has " + car.miles + " miles");

//Creating a function to return an object when the values of the keys are unknown:
function makeCar (make, model, miles){
	var car = {}; //empty object with the {}
	car.make = make;
	car.model = model;
	car.miles = miles;
	return car;
}

var make = prompt("Enter the make of your vehicle");
var model = prompt("Enter the model of your vehicle");
var miles= prompt("Enter the miles of your vehicle");

var myCar = makeCar(make, model, miles);
console.log(my car)

//alternate function:
function makeCar (make, model, miles){
	var car = { //empty object with the {}
		"make": make,
		"model": model,
		"miles": miles,
	}
	return car;
}

var make = prompt("Enter the make of your vehicle");
var model = prompt("Enter the model of your vehicle");
var miles= prompt("Enter the miles of your vehicle");

var myCar = makeCar(make, model, miles);
console.log(my car)

//Nested values - example of obtaiing information for object arrays:
var cars = [
    {
        make: "Toyota",
        model: "Camry",
        features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
        owner: {
            name: "Jane Doe",
            age: 30
        }
    },
    {
        make: "Honda",
        model: "Accord",
        features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
        owner: {
            name: "John Doe",
            age: 31
        }
    }
];

console.log("The first car is a " + cars[0].make + " " + cars[0].model + "."); //returns the data for the first object, in this case "Toyota"
console.log("Features: " + cars[0].features[2]); // lists the features

//#2 Function example
cars.forEach(function(car) {
	console.log("We have a " + car.make + " " + car.model + " for sale by " + car.owner.name);
	console.log("Features: " + car.features.join("' "));
});

//Behavior Example:

var car = {
	"make": "Tesla",
	"model": "Model S",
	"miles": "0",
	"speed": "0",
	"accelerate": function() {
		this.speed++; //this only works on specific objects
	}, 
	"brake": function() {
		this.speed--;
	},
	"fullStop": function() {
		this.speed = 0;
	}
 }

//INSTRUCTOR LESSON: "Orsinger's Postulate of Approaching loops"
//refer to the books exercise:
//1. Start by ignoring the loop, start with console.log of each step
//2. If you have an array of things named with a plural variable name,
	//A. then make a singular version if that variable name & assign the first element of the array
		//ex: 	var index = 0
		//		var book = books[index]
		//		console.log(book);
	//B. Console log the first element of the array
	//C. Reassign singulr variable to hold the next element of that array (rename the indices)
	//EXAMPLE

		index = 1;
		var book = books[index];

		console.log("Book #" + index + 1);
	    console.log("Title: " + book.title);
	    console.log("Author: " + book.author.firstname + book.author.lastname);
	    console.log("---"); 

books.forEach(function(element, index, array) {

//3. After confirming solution on 1st element, add in remaining variables & create loop 

}

//SLACK NOTES:
// "use strict";

//     // todo:
//     // Create an array of objects that represent books.
//     // Each book should have a title and an author property.
//     // The author property should be an object with a firstName and lastName.
//     // Be creative and add at least 5 books to the array

//     var books = [
//         {
//             title: "1984",
//             author: {
//                 firstName: "George",
//                 lastName: "Orwell"
//             }   
//         }, 
//         {
//             title: "One Fish, Two Fish, Red Fish, Blue Fish",
//             author: {
//                 firstName: "Dr. Theophrastus",
//                 lastName: "Seuss"
//             }
//         }, 
//         {
//             title: "Oh, The Places you go!",
//             author: {
//                 firstName: "Dr. Theophrastus",
//                 lastName: "Seuss"
//             }
//         }
//     ];

// console.log("Orsinger's Postulate of Approaching Loops");
// console.log("Start by ignoring the loop completely.");
// console.log("If you have an array of things named with a plural variable name,");
// console.log("Then, make a singular version of that variable name and assign the first element of that array.");
// console.log("Console.log that first element of the array.");

// // var index = 0;
// // var book = books[index];

// books.forEach(function(book, index, array) {

//     console.log("Book #" + (index + 1));
//     console.log("Title: " + book.title);
//     console.log("Author: " + book.author.firstName + " " + book.author.lastName);
//     console.log("---");
// });

// console.log("after console.logging a working solution for the first element of the array");
// console.log("Reassign your singular variable to hold the next element of that array");

// console.log("=======");

// console.log("One you have your solution without the loop, write your forEach with the singular variable name as the parameter");
// console.log("Then move your code into the forEach function's body");





