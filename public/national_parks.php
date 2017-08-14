<?php

 require_once __DIR__ . '/../db_connect.php';
 require_once __DIR__ . "/../Input.php";
	
function pageController($connection) {
	$data = [];
	$page = Input::get('page', 1);
	$limit = Input::get('quantity', 4);
	$offset = ($page - 1) * $limit;

	$query = $connection->prepare("SELECT * FROM national_parks limit $limit offset $offset;");
	$stmt = $connection->query($query);
	$stmt->bindValue(':name', $_POST['name'], PDO::PARAM_STR);
    $stmt->bindValue(':location', $_POST['location'], PDO::PARAM_STR);
    $stmt->bindValue(':date_established', $_POST['date_established'], PDO::PARAM_STR);
    $stmt->bindValue(':area_in_acres', $_POST['area_in_acres'], PDO::PARAM_INT);
    $stmt->bindValue(':description', $_POST['description'], PDO::PARAM_STR);
    $stmt->execute();
	$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
	$data['results'] = $results;
	$data['page'] = $page;

return $data;
			
}
extract(pageController($connection));
?>

<!DOCTYPE html>
<html lang="en">
	<head>
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon"> 
	    <title>NATIONAL PARKS</title>
	    <!-- <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
	    rel="stylesheet" 
	    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" 
	    crossorigin="anonymous"> -->
	   <link rel="stylesheet" type="text/css" href="css/nparks.css"> 
	</head>

	<body>
		<h1> NATIONAL PARKS </h1>
		<br>
			<table>
				<th>
					<tr>
						<td> Park Name </td>
						<td> Location </td>
						<td> Date Established </td>
						<td> Area (in Acres)</td>
						<td> Description</td>
					</tr>
				</th>
				<?php foreach ($results as $result)  : ?>					
				<tr>				
					<td><?= htmlspecialchars(strip_tags($result['name'])) ?></td>
					<td><?= htmlspecialchars(strip_tags($result['location'])) ?></td>
					<td><?= htmlspecialchars(strip_tags($result['date_established'])) ?></td>
					<td><?= htmlspecialchars(strip_tags($result['area_in_acres'])) ?></td>
					<td><?= htmlspecialchars(strip_tags($result['description'])) ?></td>
				</tr>
					<?php endforeach; ?>
			</table>	
			<br>
			<br>
			<a class="btn-btn-primary" href="/add-park.php"> ADD A PARK </a>
			<a class="btn-btn-primary" href="?page=<?= $page -1 ?>">PREVIOUS</a>
			<a class="btn-btn-primary" href="?page=<?= $page +1 ?>">NEXT</a>

	    <script src="http://code.jquery.com/jquery-2.2.4.min.js"></script>
	    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" 
	    integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" 
	    crossorigin="anonymous"></script>

	</body>

</html>
