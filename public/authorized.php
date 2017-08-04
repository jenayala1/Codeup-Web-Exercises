<?php

session_start();
require_once '../Auth.php';
require_once '../Input.php';
require_once '../Log.php';

function logout()
 {
 	//need all 3 to stop the session, clear the data & erase session data:
 	session_unset(); //clears the session
 	
 	session_regenerate_id(true); //destroys the data & erasing the session data from server
 	session_destroy(); //stops the session from running
 	session_start(); //start a new session
 }

function pageController()
{
		$data = [];
		$message = "";

		$username = (isset($_POST['username'])) ? $_POST['username'] : "";	
		$password = (isset($_POST['password'])) ? $_POST['password'] : "";
	
		if(empty($_POST)) {
			if($username == "guest" && $password == "password"){
				header("Location:/authorized.php");
				die();
			} else {
				$message = "Invalid login!";
			}

		}
		$data = [
		'username' => $username,
		'password'=> $password,
		'message' => $message
		];

		if(isset($_GET['logout'])) {
			logout();
			header("Location:/logout.php");
			die();
		}
			
	return $data;
}
extract(pageController());
var_dump($password);	
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <link href="css/bootstrap.css" rel="stylesheet">
	    <link href="css/login.css" rel="stylesheet">
	    <title>AUTHORIZED</title>
	</head>
	<body>
		<form>
			<h1> AUTHORIZED!</h1>
			<h2> Welcome <?= ($username) ?>!</h2>
			<button type ='submit' name='logout'>Logout</button>
		</form>

	</body>
</html>