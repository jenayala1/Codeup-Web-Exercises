(function() {
        "use strict";

//D. Write function statements
//	1. identify the variables

var dig 
var rightinput;
var moperator;
var leftinput;
var zero = 0;
var one = 1;
var two = 2;
var three = 3;
var four = 4;
var five = 5;
var six = 6;
var seven = 7;
var eight = 8; 
var nine = 9;


// functions?
var bmultiply 
var bplus 
var clear;
var bequal 
var bdivide
var calculateDig //create as a function


// 

//2. command to begin cursor in the left operand field & disallow entry in next fields until populated


// 	3. function to retrieve input from HTML buttons pushed (0-9), returned as numerical values into the left operand field
	//may need an if/else or true statment to determine which input field to place the value

//Solution #3:

function addOne() {
	document.getElementById("one")[0];
	//append document.forms[0].leftinput.value;	
	console.log(addOne);
}
	

//solution #2	
	// var zero.addEventListener("Click", function(addZero) {
	// 	document.forms.getElementById("zero")[0].value = 0;
	// 	append document.forms[0].leftinput.value;
	// }

	// var one.addEventListener("Click", function(addOne) {
	// 	document.forms.getElementById("one")[0].value = 1;
	// 	//append document.forms[0].leftinput.value;	
	// 	console.log(addOne);
	// }

	// var two.addEventListener("Click", function(addTwo) {
	// 	document.forms.getElementById("two")[0].value = 2;
	// 	append document.forms[0].leftinput.value;	
	// }

	// var three.addEventListener("Click", function(addThree) {
	// 	document.forms.getElementById("three")[0].value = 3;
	// 	append document.forms[0].leftinput.value;	

	// },

	// var four.addEventListener("Click", function(addFour) {
	// 	document.forms.getElementById("four")[0].value = 4;
	// 	append document.forms[0].leftinput.value;	
	// }

	// var five.addEventListener("Click", function(addFive) {
	// 	document.forms.getElementById("five")[0].value = 5;
	// 	append document.forms[0].leftinput.value;	
	// }

	// var six.addEventListener("Click", function(addSix) {
	// 	document.forms.getElementById("six")[0].value = 6;
	// 	append document.forms[0].leftinput.value;	
	// }

	// var seven.addEventListener("Click", function(addSeven) {
	// 	document.forms.getElementById("seven")[0].value = 7;
	// 	append document.forms[0].leftinput.value;	
	// }

	// var eight.addEventListener("Click", function(addEight) {
	// 	document.forms.getElementById("four")[0].value = 8;
	// 	append document.forms[0].leftinput.value;	
	// }

	// var nine.addEventListener("Click", function(addNine) {
	// 	document.forms.getElementById("four")[0].value = 9;
	// 	append document.forms[0].leftinput.value;	
	// }

});

//Solution #1:
// function AddDigit(dig) {
// if (Current.length > MAXLENGTH)
//        { Current = "Too Long"; //limit length

//     } else
//        { if (append(Current) == 0)
//               && (Current.indexOf(".") == -1)
//              })
//         	{ Current = dig;
//      	}, else
//             { Current = Current + dig;
//            };
//         },
//      };
   
// 	document.Calculator.Display.value = Current;
// 	}
// });

//	4. function to retrieve input from HTML buttons pushed (+, -, *, /), returned as mathematical values in the middle operator field
// var moperator = document.getElementById(function() {
// 	for (var moperator = *) {
// 		return bmultiply;

// 	}, if (var moperator = +) {
// 	 	return bplus;

// 	}, if (var moperator = "/") {
// 	 	return bdivide
// 	}
// }
//	5. function to retrieve input from HTML buttons pushed (0-9), returned as numerical values in the right operand field
	//consider using append or concatenation to add the values to the correct input box
	// 1st Solution:
// function AddRightInput (getDig) {
// 	if (var leftinput == null);
	
// 	}, else 
// 		function (calculate) {
	
// 	}, else ( == 'bplus') {

// 	}, 
// }

	// }
//	6. function to calculate all three input fields (left to right) when the "=" button is pushed
//	7. function to clear the fields when the "C" button is pushed - 
//		Complete after the add input functions are complete - will be referenced (possibly) as a removeEventListener to the addinput
	// function Clear() {
 // 		Current = "0";
	// }

	// document.Calculator.Display.value = Current;
	// });

//	8. functions to disallow invalid entries in the selected fields 

})();