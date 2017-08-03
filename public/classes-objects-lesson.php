<?php

//objects allow storing together variables and functions that change the state & behavior


//EXAMPLES:
//THRU JS:

var person = new Object();

person.firstName = 'Johnny';
person.lastName  = 'Appleseed';
person.fruit     = ['Granny Smith', 'McIntosh', 'Red Delicious'];

//THRU PHP:
$person = new stdclass();
//defining $person as an objects, "new" is required to instantiate the object
// only use stdclass if you are not defining methods
$person->firstName = 'Johnny';
$person->lastName  = 'Appleseed';
$person->fruit     = ['Granny Smith', 'McIntosh', 'Red Delicious'];

//a class is required in order to associate the objects with functions & variables (bundling)

//The class is similar to a blueprint
//Creating a class: name of the class is the name of file & should be title cased (first character capitalized) & match how named in file:
//need the php tags in the class file
//example would be saved in Person.php
class Person
{
	public $firstName;
	public $lastName;
	//properties

	public function saHello()
	{
		echo "Howdy";
	}

}

//Person Class Example:
$somePerson = new Person();
//pulls in the person class file & associated properties - the firstName & lastName variables
//arrow syntax identifies the content as an object
$somePerson->firstName="Justin";
$somePerson->lastName="Reich";

$somePerson->sayHello();

//Dog Class Example:
//the PHP file contents defining class:
class Dog
{
	public $name;
	public $breed;
	public $age;
	public $isHouseTrained;

	public function bark($bark)
	{
		echo $bark;
	}

	public function getAge()
	{
		//$this refers to the object
		echo $this->age; //methods can also return the output
	}
	public function getOlder()
	{
		$this->age +=1;
	}
}

//making the dog object(seperate file):
$dog = new Dog();

$dog->name="Spot";
$dog->breed="Pug";
$dog->age=4;
$dog->isHouseTrained = true;

echo $dog->getAge() . PHP_EOL;
$dog->getOlder();
// will output 4 & 5

$dog->barksAtSomething($dog->breed);

//Operation Class Example: has both state & behavior

class Operation
{
	public $num1;
	public $num2;
	public $currentOutput;
	public $operationHistory = [];

	public function addNums() //changes the currentOutput

}


//Application
require_once "Operation.php";

$oper = new Operation();

$oper->num1 = 2;
$oper->num2 = 3;

$oper->addNums();

$oper->getCurrentOutput();








