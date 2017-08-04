<?php

//"Object Oriented Programming"
// doing all programming in objects rather than just in functions 

//== What are objects?
//	-- single variables in memory that bundle(related) state and behavior together

// == What are classes?
//	- blueprints/recipes followe to create objects, specify their behavior, establish their properties 
//	- a set of instructions
//	- function that generates an object


//std class - the standard class is a built in class that is limited because it doen
// abstraction:
// -- variables abstract values
// -- conditionals abstract decisions
// -- loops abstract repetition
// -- functions abstract process or sequence of step (behavior)
// -- classes abstract behavior and state(status - i.e. on or off) together to enable treating it as one thing

// --$this - self references the instance of the object

//method is a name for a function that is on a class or an object, all methods are functions
//===============================
// the class file example:
class User
{
	//Properties:
	public $username; //states
	public $email;
	public $password;
	public $isLoggedIn = false;

	//Methods (functions that live inside a class):
	public function changePassword($oldPassword, $newPassword) 
	{
		if($this->isLoggedIn && $oldPassword == $this->password) {
			$this->password = $newPassword;
		}
	}

	public function login($username, $password)
	{
			$this->isLoggedIn = true;
	}

	public function logout()
	{
		$this->isLoggedIn = false;
	}

}

// Creating the object to instantiate the class - in a separate file:



$bob = new User();
$bob->username = "Bobbybob";
$bob->email = "bob@bobco.bob";
$bob->password = "password123";
//=========================================
// EXAMPLE OF CALLING CODE/PROCEDURAL CODE:

require_once "User.php";
require_once "functions.php";

$user = new User();
$user->username = inputGet('username');
$user->email = inputGet('email');
$user->password = inputGet('password');

if(isset($user) && $user->isLoggedIn) {
	$message = "Welcome home, $user->username!";
}

?>
<!DOCTYPE html>
<<html>
	<head>
		<title></title>
	</head>
	<body>
		<h1><?= $message ?></h1>
		<h2>Create a new user</h2>
		<form method="POST" action="#">
			<input type="text" name="username" placeholder="input your username">
			<input type="password" name="password" placeholder="input your password">
			<input type="text" name="email" placeholder="input your email">
			<button type="submit">Register</button>

	</body>
</html>

