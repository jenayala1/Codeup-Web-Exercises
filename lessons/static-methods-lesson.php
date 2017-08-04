<?php

// =============== STATIC METHODS & PROPERTIES LESSON:
// tied to class rather than object

// == used when state & behavior is generic to a given class, not directly tied to a specific object that may be instantiated

// == Regular properties/methods tied to a specific object
//don't need to make an instance of the class to access the properties


//=====================================

// EXAMPLES: Operation Class:

class Operation
{

	public $num1;
	public $num2;
	public $currentOutput;
	public $operationHistory = [];


	public static $roundedPiValue = 3.14;

	public function addNums()
	{
		array_push($this->operationHistory, "add");
		$this->currentOutput = ($this->num1 + $this->num2);
	}

	public function getCurrentOutput()
	{
		return $this->currentOutput;
	}

	public static function addArgs($firstNumber, $secondNumber)
	{
		return $firstNumber + $secondNumber; //doesn't have to be tied to the objects
	}

}
				// -------------------------

// Operation Object Example:
require_once "Operation.php";

echo Operation::$roundedPiValue . PHP_EOL; //on static methods use double colon followed by $

$op = new Operation();
$op->currentOutput;

//call a static method
echo Operation::$addArgs(2, 1) . PHP_EOL; //return is not necessary because it is included as part of the addArgs function

echo $op::addArgs(2,4) . PHP_EOL; //calling a static method without the class name - not best practices but possible


//=============================================

// DOG CLASS EXAMPLE:

class Dog
{
	public $name;
	public $breed;
	public $age;
	
	// add static property for number of dogs in the world
	public static $millionsOfDogsInTheWorld = 600;


	//add static property for number of breeds:
	public static $numOfBreeds = 339;


	//add static property affected by static method dogsBred:
	public static $dogsBred = 0;


	//Add constructor to increase the static property value:
	public function __construct()
	{
		self::$dogsBred += 1; // self refers to the class
		//self::blowWhistle();
	}
	public function bark($bark)
	{
		echo $bark;
	}

	public function getAge()
	{
		return $this->age;
	}

	public function blowWhistle()
	{
		return $
	}
 
}


//---------------------
// DOG OBJECT EXAMPLE:

//access static property on Dog Class:
Dog::$numOfBreeds;


//access static method:
Dog::blowDogWhistle();

//instantiate a new dog object & check dogsBred value:
echo Dog::$dogsBred . PHP_EOL;

$fido = new Dog();

echo Dog::$dogsBred . PHP_EOL;






