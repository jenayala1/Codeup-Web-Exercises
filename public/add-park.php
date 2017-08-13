<?php

 require_once __DIR__ . '/../db_connect.php';
 require_once __DIR__ . "/../Input.php";

 function verifyInput()
 {
 	if (!empty($_POST['name']) &&
 		!empty($_POST['location']) &&
 		!empty($_POST['date_established']) &&
 		is_numeric($_POST['area_in_acres']) &&
 		!empty($_POST['description'])) {

 		return true;
 	}	else {
 		return false;
 	}
 }

 function addPark($connection) {
   $add = ('INSERT INTO national_parks (name, location, date_established, area_in_acres, description) VALUES (:name, :location, :date_established, :area_in_acres, :description)');
    $stmt = $connection->prepare($add);
    $stmt->bindValue(':name', $_POST['name'], PDO::PARAM_STR);
    $stmt->bindValue(':location', $_POST['location'], PDO::PARAM_STR);
    $stmt->bindValue(':date_established', $_POST['date_established'], PDO::PARAM_STR);
    $stmt->bindValue(':area_in_acres', $_POST['area_in_acres'], PDO::PARAM_INT);
    $stmt->bindValue(':description', $_POST['description'], PDO::PARAM_STR);
    
    $stmt->execute();

}

function pageController($connection) {
    $data = [];
    if (!empty($_POST) && verifyInput()) {
        addPark($connection); 
    } 
   return $data; 
}
extract(pageController($connection));
?>

<!DOCTYPE html>
<html>
	<head>
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	    <title>Add Park</title>
	  <!--   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous"> -->
	    <link rel="stylesheet" type="text/css" href="/css/npark.css">
	</head>

	<body>
	
        <h1> National Parks</h1>
		<br>
		<h2> Add a Park! </h2>
		<div class="container">    
	        <form method="POST" action="/add-park.php">
	           
                <label for="name"> Park Name: </label>
                <input class="form-control" type="text" id="name" name="name"></input>
	      		<br>
                <label for="location"> Location: </label>
                <input class="form-control" type="text" id="location" name="location"></input>
	          	<br>
                <label class="form-control" for="date_established"> Date Established: </label>
                <input class="form-control" type="date" id="date_established" name="date_established"></input>
                <br>
                <label class="form-control" for="area_in_acres">Area in Acres: </label>
                <input class="form-control" type="text" id="area_in_acres" name="area_in_acres"></input>
                <br>
                <label for="descriptionTextBox">Description: </label>
                <textarea class="form-control" id="description" name="description"></textarea>
	            <br>
	        </form>
	        <br>
				<a class="btn-btn-primary" href="?addPark<?= 'addPark' ?>"> SUBMIT </a>

	 	<script src="http://code.jquery.com/jquery-2.2.4.min.js"></script>
	    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" 
	    integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" 
	    crossorigin="anonymous"></script>
	</body>
</html>

