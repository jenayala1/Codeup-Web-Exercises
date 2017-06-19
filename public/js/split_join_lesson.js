//split join lesson notes

//turning a string into array and turning arrays into strings

//example #1:

var fruit = "banana"
fruit.split("");
//splits each individual letter

//example #2:
var bananaSplit = fruit.split("");
bananaSplit.push('s');
//returns 7

//example #3 - namestrings:
var namesString = "Joe,Bob,Sally";

namesString.split(", "); //splits items inbetween the comma - good for parsing data, 
//can also use -- to seperate the items (also known as a "delimiter", similar identifying the 
//methods to seperate fields when converting a CSV document to excel)


//JOIN:
//example:

var letters = ["c", "o", "d", "e", "u", "p"]
letters.join(", ")
//creates: "codeup"

//alternative:



