<?php


//Arrays also defined in other langauages as map, hash-map, JSON, associative arrays, dictionary

//Basic Array
$arrayOfNumbers = [];
$arrayOfNumbers[0] = 10; //Assigning value to the index
$arrayOfNumbers[1] = 20;
$arrayOfNumbers[1] = 30;

$arrayOfNumbers = [10, 20, 30];


//Associative Array Syntax:
$phpQuestions = []; //empty array
$phpQuestions['question1'] = 'associative array syntax';
$phpQuestions['question2'] = 'how to iterate';
$phpQuestions['question3'] = 'how to run PHP';

$key = 'question4';

$phpQuestions[$key] = "When you're in the shell";
var_dump($phpQuestions);  //returns the values assigned above


//Assoc Arrays Syntax - Simplified Alternative - the last index item does not need a comma

$phpQuestions = [
'question1' = 'associative array syntax',
'question2' = 'how to iterate',
'question3' = 'how to run PHP'
];
var_dump($phpQuestions);


//Multi-Dimensional Array: - incorporating arrays within arrays
$phpQuestions = []; //empty array
$phpQuestions['questions'] = ['associative array syntax, how to iterate, how to run PHP']; //creating an array within an array

var_dump($phpQuestions); 

//Iterating Arrays:
$phpQuestions['myFavoriteFood'] = "pizza";

foreach($phpQuestions as $question) { //"as $question" assigns value to the variable
	echo $question . PHP_EOL;
}

//More Multi-Dimensional Array Examples: 
$ticTacToe = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];

$ticTacToe[0] [0] = "x"; //assigning the index a new value (this would "1" in this example);




