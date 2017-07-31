<?php
	$adjectives = ['humourous', 'outgoing', 'nice', 'attentive', 'scary', 'loud', 'annoying', 'engaging', 'interesting', 'intelligent'];

	$nouns = ['house', 'car', 'music', 'art', 'people', 'electronics', 'supplies', 'dog', 'python', 'tarantula'];

	


	function randomArrayElement($array)
	{
		return $array[rand(0, count($array) -1)];
	}
		
	function randomServerName($arr1, $arr2)
	{
		return randomArrayElement($arr1) . randomArrayElement($arr2);
	}

?>

<!DOCTYPE html>
<html>
	<head>
		<title>server-name-generator</title>
	</head>
	<body>
		<h1> Just a list!</h1>
		<h1><?php echo randomServerName($adjectives, $nouns) ?></h1>

	</body>
</html>