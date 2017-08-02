<?php

//============= LOGIN PHP FILE====================//
session_start();
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

	//check to see if $_SESSION has a logged_in_user key/value, if so redirect to authorized.php
	if(isset($_SESSION['logged_in_user'])) {
		header("Location: authorized.php");
		die();
	}

	$username = (isset($_POST['username'])) ? $_POST['username'] : "";
	$password = (isset($_POST['password'])) ? $_POST['password'] : "";
	$message = "";

	
	//user submitted the form
	if (!empty($_POST)) {
		if ($username == "guest" && $password == "password") {
		$_SESSION['logged_in_user'] = $username;
		header("Location: authorized.php");
		die(); 
	
		} else {
			$message = "Invalid Login";
		}
	}

	$data = [
		'username' => $username,
		'password' => $password,
		'message' => $message
	];	
?>
<!-- //================= END LOGIN PHP FILE ====================//

//============= AUTHORIZE PHP FILE =======================// -->
<?php
session_start();

//check if user is logged in, if not redirect to login:
if(isset($_SESSION['logged_in_user'])) {
	header("Location: login.php");
	die();
}

$username = isset($_SESSION['logged_in_user']) ? $_SESSION['logged_in_user'] : "";

?>
<!-- //================= END AUTHORIZE PHP FILE ====================//

//============= LOGOUT PHP FILE =======================// -->
<?php
session_start();

function clearSession()
{
    // clear $_SESSION array
    session_unset();

    // delete session data on the server
    session_destroy();

    // ensure client is sent a new session cookie
    session_regenerate_id();

    // start a new session - session_destroy() ended our previous session so
    // if we want to store any new data in $_SESSION we must start a new one
    session_start();
}
clearSession();
header("Location: login.php");
die();
?>
<!-- //================= END LOGOUT PHP FILE ====================// -->


