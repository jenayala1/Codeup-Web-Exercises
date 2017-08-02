<?php
	var_dump($_POST);

	function pageController()
	{
		$data = [];
		$username = (isset($_POST['username'])) ? $_POST['username'] : "undefined";
		
		$password = (isset($_POST['password'])) ? $_POST['password'] : "undefined";

		$data['username'] = $username;
		$message = "FAILED LOGIN";
			
		//redirect to another page:
		if ($username == "guest" && $password == "password") {
			header("Location:/authorized.php");
			die(); // must specify the code to end after the function runs
		} else {
			echo $message;
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
	    <title>Login Page</title>
	</head>
	<body>
		<form method="POST">
	        <label for="username">Username</label>
	        <input id="username" type="text" name="username">
	        <br>

	        <label for="password">password</label>
	        <input id="password" type="password" name="password">
	        <br>
	        <button type ='submit'>Submit</button>

		</form>

	</body>
</html>