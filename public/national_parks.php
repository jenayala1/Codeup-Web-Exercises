<?php

 require_once __DIR__ . "/../Park.php";
 require_once __DIR__ . "/../Input.php";


function pageController()
{

	$data = [];
    $data['message'] = "";

	$page = Input::escape(Input::get('page', 1));
	$recordsPerPage = Input::escape(Input::get('recordsPerPage', 4));
	$parks = Park::paginate($page, $recordsPerPage);

	$data['parks'] = $parks;
	$data['page'] = $page;
	$data['parksCount'] = Park::count();
	$data['recordsPerPage'] = $recordsPerPage;
	return $data;
}

extract(pageController());
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
				<?php foreach ($parks as $park)  : ?>
				<tr>
					<td><?= Input::escape($park->name) ?></td>
					<td><?= Input::escape($park->location) ?></td>
					<td><?= Input::escape($park->date_established) ?></td>
					<td><?= Input::escape($park->area_in_acres) ?></td>
					<td><?= Input::escape($park->description) ?></td>
				</tr>
					<?php endforeach; ?>
			</table>
			<br>
			<br>
			<a class="btn-btn-primary" href="/add-park.php"> ADD A PARK </a>
			<div class="prev">
				<?php if ($page >1) : ?>
					<a class="btn-btn-primary" href="?page=<?= $page -1 ?>">PREVIOUS</a>
				<?php endif; ?>

			<a class="btn-btn-primary" href="?page=<?= $page +1 ?>">NEXT</a>

	    <script src="http://code.jquery.com/jquery-2.2.4.min.js"></script>
	    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
	    integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
	    crossorigin="anonymous"></script>

	</body>

</html>
