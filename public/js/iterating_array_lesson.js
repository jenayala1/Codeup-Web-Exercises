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

