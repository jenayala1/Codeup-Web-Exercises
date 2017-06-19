//lesson examples:

"use strict"

//for loop:

//Example 1
var pies = ['apple', 'cherry', 'key line'];

for (var i = 0; <= pies.length; ++i) {
	console.log(pies[i]);
}


//skipping an item:
var pies = ['apple', 'cherry', 'key line'];

for (var i = 0; i <= pies.length; ++i) {
	console.log(pies[i]);
}

//for-each loop: defined with 3 parameters, the element, index & array

var pies = ['apple', 'cherry', 'key line'];

	pies.forEach(function(element, index, arrary) {
		console.log();
	}

//Alternative for-each syntax:
var pies = ['apple', 'cherry', 'key line'];

	function logPies(element) {
		console.log(element)
	}
	pies.forEach(log.Pies);

// Manipulating arrays
//shift/unshift: shift remove, unshift adds back removed element
var pies = ['apple', 'cherry', 'key line'];

pies.shift();

pies.forEach(function(element) {
	console.log(element)
}

//alternate:
var firstElement = pies.shift();

pies.forEach(function(element) {
	console.log(element);

console.log(pies);
}

//Pop/Push:
var pies = ['apple', 'cherry', 'key line'];
var lastElement = pies.pop();

pies.forEach(function(element) {
	console.log(element);

console.log(pies);

//locating index:

//

//splice:

var bonds = ["Craig", "Bronson", "Dalton", "Moore", "Connery"];

//removing elemets splice -list the index number in the ()
	bonds.splice(1, 2);
	console.log(bonds);

//removing elements without listing the index number:
var bonds = ["Craig", "Bronson", "Dalton", "Moore", "Connery"];
	
	bonds.splice(bonds.indexOf ("Moore"), 2);
	console.log(bonds);

//restore a removed item:

var missingBonds = bonds.splice(bonds.indexof("Moore"), 2)
	console.log(missingBonds);

//Add elements with splice - in bonds.splice, add the index number to proceed the addition, 
//followed by 0 to indicate zero removals, and then the element to add

var bonds = ["Craig", "Bronson", "Dalton", "Moore", "Connery"];
	bonds.splice(1, 0, "Lazenby");
	console.log(bonds);

// to replace: add the index number to proceed the addition, 
//followed by the index number to remove, and then the element to add
var bonds = ["Craig", "Bronson", "Dalton", "Moore", "Connery"];
	bonds.splice(1, 2, "Lazenby");
	console.log(bonds);


//altrnate solution:
var index = bonds.splice(1, 0, "Lazenby");
	console.log(index);

//sorting:
var bonds = ["Craig", "Bronson", "Dalton", "Moore", "Connery"];
	console.log(bonds.sort());

//reverse
var bonds = ["Craig", "Bronson", "Dalton", "Moore", "Connery"];
	console.log(bonds.reverse());


//Array Review:

//#1 What are arrays?
	//--list of elements
	//--store arrays in a variable
	//--numerical index


//#2 why do arrays exist

//#3 what problems do arrays solve?

//#4 when do we use arrays

//#5 what's the most common use of arrays

//exercise review:
//


// TODO #1: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
  //my answer//
    var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];


    // function for logging the planets array
    function logPlanets(element, index, array) {
        console.log("Here is the list of planets:");
        console.log(planets);
        console.log("---- ---- ---- ----");
    }

    logPlanets();

     // TODO #2 : Read the console.log() statement above. Write code to perform the step it describes.
    //my answer:
    planets.splice(0, 0, "Sun");
    console.log('Adding "The Sun" to the beginning of the planets array.');
    logPlanets();

    //instructor answer:
    planets.unshift("The Sun");
    console.log('Adding "The Sun" to the beginning of the planets array.');
    logPlanets();

    // TODO #3: Read the console.log() statement above. Write code to perform the step it describes.
    //my answer:
    planets.splice(9, 0, "Pluto");
        console.log('Adding "Pluto" to the end of the planets array.');
    	logPlanets();

    //instructor:
    planets.push("Pluto")

    // TODO #4: Read the console.log() statement above. Write code to perform the step it describes.
    //my answer
    planets.shift("Sun");
    console.log('Removing "The Sun" from the beginning of the planets array.');
    logPlanets();


    // TODO #5: Read the console.log() statement above. Write code to perform the step it describes.
    var lastElement = planets.pop();
    console.log('Removing "Pluto" from the end of the planets array.');
    logPlanets();

    //instructor:
    planets.pop()


    // TODO #6: Read the console.log() statement above. Write code to perform the step it describes.
    var index = planets.indexOf("Earth");
	    console.log(index);
	    console.log('Finding and logging the index of "Earth" in the planets array.');
    
     // TODO #7: Read the console.log() statement above. Write code to perform the step it describes.
   planets.splice(3, 1)
	    console.log('Using splice to remove the planet after "Earth".');
	    logPlanets();


    // TODO #8: Read the console.log() statement above. Write code to perform the step it describes.
    planets.splice(planets.indexOf("Earth") + 1, 0, "Mars");
        console.log(planets);
        console.log('Using splice to add back the planet after "Earth".');
    	logPlanets();


    // TODO #9: Read the console.log() statement above. Write code to perform the step it describes.
    //me:
    console.log(planets.reverse());
    console.log("Reversing the order of the planets array.");
    logPlanets();

    //instructor:
    planets.reverse());
	    console.log("Reversing the order of the planets array.");
	    logPlanets();


    // TODO#10: Read the console.log() statement above. Write code to perform the step it describes.
    //me:
    console.log(planets.sort());
    console.log("Sorting the planets array.");
    logPlanets();

    //instructor:
    planets.sort();
	    console.log("Sorting the planets array.");
	    logPlanets();

