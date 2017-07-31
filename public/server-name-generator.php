<?php

	function randomArrayElement($array)
	{
		return $array[rand(0, count($array) -1)];
	}
		
	function randomServerName($arr1, $arr2)
	{
		return randomArrayElement($arr1) . " " . randomArrayElement($arr2);
	}


	function pageController(){
		$adjectives = ['humourous', 'outgoing', 'nice', 'attentive', 'scary', 'loud', 'annoying', 'engaging', 'interesting', 'intelligent'];

		$nouns = ['house', 'car', 'music', 'art', 'people', 'electronics', 'supplies', 'dog', 'python', 'tarantula'];

	return [ 'serverName' => randomServerName($adjectives, $nouns)];

	}

	extract(pageController());
	
?>

<!DOCTYPE html>
<html>
	<head>
		<title>server-name-generator</title>
	</head>
	<body>
		<h1> Server Name Generator </h1>

		<h1><?= $serverName; ?></h1>
	
	</body>
</html>

