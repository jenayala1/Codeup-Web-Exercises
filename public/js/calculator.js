"use strict";

//-- #1. identify variables:
var operand = "leftinput";

//-- #2: Establish functions to insert data into the input fields by clicking number & operator buttons---

var appendValue = function(event) {
  document.getElementById(operand).value += this.value;
};

var numbers = document.getElementsByClassName("number");
for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", appendValue);
}

document.getElementById("add").addEventListener("click", function(event) {
  document.getElementById("moperator").value = this.value;
  operand = "rightinput";
});
document.getElementById("subtract").addEventListener("click", function(event) {
  document.getElementById("moperator").value = this.value;
  operand = "rightinput";
});
document.getElementById("multiply").addEventListener("click", function(event) {
  document.getElementById("moperator").value = this.value;
  operand = "rightinput";
});
document.getElementById("divide").addEventListener("click", function(event) {
  document.getElementById("moperator").value = this.value;
  operand = "rightinput";
});


//-- STEP #3 - Calculation function to get answer when "=" is clicked, using switch ---

var calculate = function(left, right, moperator) {
  var calculation;
  switch (moperator) {
    case "+":
      calculation = (left + right);
      break;
    case "-":
      calculation = (left - right);
      break;
    case "*":
      calculation = (left * right);
      break;
    case "/":
      calculation = (left / right);
      break;
    default:
      calculation = 0;
  }
  document.getElementById("leftinput").value = calculation;
  document.getElementById("rightinput").value = "";
}

document.getElementById("bequal").addEventListener("click", function(event) {
  var left = Number(document.getElementById("leftinput").value);
  var right = Number(document.getElementById("rightinput").value);
  var operator = document.getElementById("moperator").value;
  calculate(left, right, operator);

});

//-- #4 Create function to clear all values:

var clearValue = function(event) {
  var val = document.getElementById(operand).value;

  if (val === "") {
    document.getElementById("leftinput").value = "";
    operand = "leftinput";
  }

  document.getElementById(operand).value = "";
  document.getElementById("moperator").value = "";
};

var clear = document.getElementById("clear");
clear.addEventListener("click", clearValue);




