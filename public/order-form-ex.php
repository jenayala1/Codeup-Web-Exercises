<?php
	var_dump($_POST);

	function pageController()
	{
		$data = [];
		$cart = [!empty($_POST)) ? $_POST : []
		$data['items']

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
		<h1></h1>
		<form>
			<?php foreach($items as $key => $groceryItem) : ?>
			<p>


		</form>
	</body>
</html>