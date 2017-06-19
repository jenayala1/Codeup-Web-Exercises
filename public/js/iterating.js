(function(){
    "use strict";



    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    var names = ["Vincent", "Ian", "Calista", "Giada"];
			

    // TODO: Create a log statement that will log the number of elements in the names array.

    	console.log("There are " + names.length + " names in the names array");

    // TODO: Create log statements that will print each of the names array elements individually

    for (var i = 0; i < names.length; i++) {
    	console.log("The name at index " + i + " is " + names[i]);

  	}

  	names.forEach(function (element, index, arrary) {
  		console.log("The name at index " + index + " is " + element);
  	
  	});

    //ARRAY BONUS
    //Create a simple mad libs game which prompts the user to provide parts of speech to complete missing 
    //words of phrases for 3-4 silly sentences.  Add each word or phrase from each prompt to single array.
    //Once a user has entered all the Mad Libs, alert the results.
    //Use a confirm to play again or not. Validate user input to prevent blank entries.
    //At the very least, wrap your program in an IIFE function. Consider organizing your code into smaller
    //functions.

    //Bonus answer: MAD LIBS//


    //ITERATING ARRAY BONUS:
    //Create a temperature conversion application using the user interaction methods
    //(alert, confirm, propmt) to take in a list of temperatures, ask the user which 
    //conversion to make (farenheit to Celcius or vice versa) return the user a list
    //of converted temperatures.  Extra bonus: add Kelvin.

    //ITERATING ARRAY BONUS SOLUTION:
    var farenheit
    var celsius

})();