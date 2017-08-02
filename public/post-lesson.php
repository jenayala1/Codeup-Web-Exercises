<?php
	var_dump($_POST);

	function pageController()
	{
		$data = [];
		$nickname = (isset($_POST['nickname'])) ? $_POST['nickname'] : "undefined";
		$data['nickname'] = $nickname;

		//redirect to another page:
		if ($nickname == "Justin") {
			header("Location: http:cornify.com");
			die(); // must specify the code to end after the function runs
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
	    <title>Nickname Form</title>
	</head>
	<body>
		<h1> Nickname is <?= $nickname ?></h1>

		<form method="POST">
			<label for="nickname">Nickname</label>
			<input type='text' name='nickname' id='nickname'>
			<button type ='submit'>Submit</button>
		</form>

	</body>
</html>