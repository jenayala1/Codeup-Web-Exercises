<?php

session_start();
 
// $sessionId = session_id();
//  //obtains a unique identifier associated to the session, not required-generally used to check the ID

//  $viewCount = isset($_SESSION['view_count']) ? $_SESSION['view_count'] : 0;
//  //initialize a view count variable, gets the key & assign it to the variable

//  $viewCount++;
//  //increments the counter - each time the page is loaded, even if the browser is closed & reopened without having to reintialize

//  $_SESSION['view_count'] = $viewCount;
//  //stores the new value to the key in the session - writing to the session
 
if(isset($_GET['logout'])) {
	logout();
	header("Location:/login.php");
	die();
}

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
	

		if(!empty($_POST)) {
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

		if(isset($_GET['login'])) {
			header("Location:/login.php");
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
	    <title>LOG OUT</title>
	</head>
	<body>
		<form>
			<h1> YOU HAVE SUCCESSFULLY LOGGED OUT!</h1>
			<button type ='submit' name='login'>LOG IN</button>
		</form>

	</body>
</html>