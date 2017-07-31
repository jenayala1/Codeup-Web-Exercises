<?php

	function pageController(){
		$favoriteThings = ['writing', 'music', 'art', 'my kids', 'electronics', 'art supplies', 'dogs', 'snakes', 'tarantulas', 'reading'];

		$randomThing = $favoriteThings[array_rand($favoriteThings)];
	
		return [
			'favoriteThings' => $favoriteThings,
			'randomThing' => $randomThing,
		];
	}
	extract(pageController());
?>

<!DOCTYPE html>
<html>
		<head>
			<meta charset="utf-8">
			<title>My Favorite Things</title>
			<link href='https://fonts.google.com/specimen/Play' rel='stylesheet' type'text/css'>
			<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	 	<link href="css/mft.css" rel="stylesheet">

		</head>
		<body>
			<h1> Just a list!</h1>
			<table>
				<thead>
					<tr> My Favorite Things</tr>
				</thead>
				<tbody>	
					<?php foreach($favoriteThings as $thing): ?>
					<tr> 
						<td><?= $thing ?>
						</td>
					</tr>
					<?php endforeach; ?> 
				</tbody>
			</table>

		</body>
</html>