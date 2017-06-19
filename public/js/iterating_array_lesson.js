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

var missingBonds = bonds.splice(bonds.indefof("Moore"), 2)
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



