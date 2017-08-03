<?php

// PING-PONG WALKTHRU of refactor with the required functions:

require_once 'functions.php';
//refer to the diagram - use require once if the file has functions or classes


function pageController(){
	$data = [];

	//$data['count'] = (isset($_GET['count'])) ? $_GET['count'] : 0;
	//previous statement replaced with the inputGet function below:

	$data['count'] = inputGet('count');
	return data;
}
extract(pageController());

//===============================

//USER LOGIN WALKTHRU OF REFACTOR USING THE REQUIRED/INCLUDE FUNCTIONS:

session_start();

require_once 'functions.php';


function pageController()
{
	$data = [];

	if(isset($_SESSION['logged_in_user'])) {
		header("Location: authorized.php");
		die();
	}
	$message = "";
	$username = inputGet('username');
	$password = inputGet('password');
	

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