<?php
	
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
		<h1> PLEASE LOG IN FOR AUTHORIZATION </h1>
		<p><?= $message ?></p>
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