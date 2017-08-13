<?php

 require_once __DIR__ . '/../db_connect.php';
 require_once __DIR__ . "/../Input.php";
	
function pageController($connection) {
	$data = [];
	$page = Input::get('page', 1);
	$limit = Input::get('quantity', 4);
	$offset = ($page - 1) * $limit;

	$query = "SELECT * FROM national_parks limit $limit offset $offset;";
	 
	$stmt = $connection->query($query);
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
					</tr>
				</th>
				<?php foreach ($results as $result)  : ?>					
				<tr>				
					<td><?= $result['name'] ?></td>
					<td><?= $result['location'] ?></td>
					<td><?= $result['date_established'] ?></td>
					<td><?= $result['area_in_acres'] ?></td>
				</tr>
					<?php endforeach; ?>
			</table>	
			<br>
			<h3> Add a new entry </h3>
			<form method="POST" action= >
				<label> Park Name </label>
				<input type="text" id="name" name="name" placeholder="parkName">
				<label> Park Location </label>
				<input type="text" id="location" name="location" placeholder="location">
				<label> Date Established </label>
				<input type="text" id="date_established" name="date_established" placeholder="date_established">
				<label> Area (in acres) </label>
				<input type="text" id="area_in_acres" name="area_in_acres" placeholder="area_in_acres">
	
				<button type="submit" value="add"> SUBMIT </button>
			</form>		
			<br>
			<a class="btn-btn-primary" href="?page=<?= $page -1 ?>">PREVIOUS</a>
			<a class="btn-btn-primary" href="?page=<?= $page +1 ?>">NEXT</a>

	    <script src="http://code.jquery.com/jquery-2.2.4.min.js"></script>
	    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" 
	    integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" 
	    crossorigin="anonymous"></script>

	</body>

</html>
