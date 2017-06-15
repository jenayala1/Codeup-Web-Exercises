"use strict";


// #2 - Create a while loop that uses console.log() to create the output shown below.
// 
//ANSWER:
//var i = 1;
		
// 	while (i < 65536) {
// 		i = i * 2
//     	console.log(i);
//     }

//INSTRUCTOR NOTES:	
//reassign i to hold the result of (i * 2)
//	new value of i gets the (old valud of i *2)

 // #3 An ice cream seller can't go home until she sells all of her cones. 
 //Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell. 
 //Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients. 
 //Use a do-while loop to log to the console the amount of cones sold to each person. 
 //This is how you get the random numbers.

 var allCones = Math.floor(Math.random() * 50) + 50;
 	console.log("I have " + allCones);

 do {
 	var cones = Math.floor(Math.random() * 5) + 1;
 		if (allCones >= cones) {
 			console.log("Someone bought " + cones);
 			allCones = allCones - cones;
 			console.log ("I have " + allCones + "remaining");
 		} else {
 			console.log("I don't have enough cones");
 		}
 	} while (allCones >= 1)
 			console.log("All cones sold");


//Instructor Alternative Solution:
// var min = 50;
// var max = 100;
//var allCones = Math.floor(Math.random() * (max-min)) + min;
//var conesOrdered;
//	console.log("It's a great day to sell ice cream.  I have to sell " + allCones + "of my cones!");
		// do {
			//get a random number of cones ordered between 1 and 5
		//  conesOrdered = Math.floor(Math.random() *5) +1;	

		//  	if (allCones >= cones) {
		//  		console.log("Someone bought " + cones);
		//  		allCones = allCones - cones;
		//  		console.log ("I have " + allCones + "remaining");
		//  		} else {
		//  			console.log("I don't have enough cones");
		//  		}
		//  	} while (allCones >= 1)
		//  			console.log("All cones sold");

