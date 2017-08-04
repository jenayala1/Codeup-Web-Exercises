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

	if(isset($_SESSION['logged_in_user'])) {
		header("Location: authorized.php");
		die();
	}
	
	$username = (isset($_REQUEST['username'])) ? $_REQUEST['username'] : "undefined";
	$password = (isset($_REQUEST['password'])) ? $_REQUEST['password'] : "undefined";
	$message = "";

	$data = [
		'username' => $username,
		'password' => $password,
		'message' => $message
	];	

	if (!empty($_POST)) {
		if ($username == "guest" && $password == "password") {
		$_SESSION['logged-in-user'] = $username;
		header("Location:/authorized.php");
		die(); 
	
		} else {
			echo $message = "Invalid Login";
		}
	}

	if(isset($_GET['logout'])) {
			logout();
			header("Location:/logout.php");
			die();
	}

	return $data;
}

extract(pageController());
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <link href="css/bootstrap.css" rel="stylesheet">
	    <link href="css/login.css" rel="stylesheet">
	    <title>Login Page</title>
	</head>
	<body>
		<form method="POST">
	        <label for="username">USERNAME</label>
	        <input id="username" type="text" name="username">
	        <br>
	        <label for="password">PASSWORD</label>
	        <input id="password" type="password" name="password">
	        <br>
	        <button type ='submit'>Submit</button>
	    
		</form>
	</body>
</html>