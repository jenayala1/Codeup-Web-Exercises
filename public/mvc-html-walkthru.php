<?php

	$favs = ('thing1', 'thing2', 'thing3', 'thing3');

?>

<!DOCTYPE html>
<html>
	<head>
		<head>
			<meta charset="utf-8">
			<title>server-name-generator</title>
			<link href='https://fonts.google.com/specimen/Play' rel='stylesheet' type'text/css'>
			<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		<title>My Favorite Things</title>
	</head>
	<body>
		<table class="table table-striped">
			<?php foreach($favs as $fav) {?>
				<tr>
					<td><?php echo $fav ?></td>
			<?php } ?>

		</table>

	</body>
</html>