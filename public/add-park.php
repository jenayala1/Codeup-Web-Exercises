<?php

 require_once __DIR__ . "/../Input.php";
 require_once __DIR__ . '/../Park.php';


 function verifyInput()
 {
 	if (!empty($_POST['name']) &&
 		!empty($_POST['location']) &&
 		!empty($_POST['date_established']) &&
 		is_numeric($_POST['area_in_acres']) &&
 		!empty($_POST['description'])) {

 		return true;
 	
 	}	else {
        echo "Please enter valid information";
 		return false;
 	}
 }

 function addPark($connection) 
 {

    $name = Input::get('name');
    $location = Input::get('location');
    $date_established = Input::get('date_established');
    $area_in_acres = Input::get('area_in_acres');
    $description = Input::get('description');

    if(!is_numeric($area_in_acres)) {
        echo "Area in acres must be numeric";
        return;
    }
    
}

function pageController($connection) {
    $newPark = new Park();


    if (!empty($_POST) && verifyInput(true)) {
        $park->name = $name;
        $park->location = $location; 
        $page->date_established = $date_established = Input::get('date_established');
        Park::$area_in_acres = Input::get('area_in_acres');
        Park::$description = Input::get('description');
    } 
   return $newPark; 
}

extract(pageController($connection));
?>

<!DOCTYPE html>
<html>
	<head>
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	    <title>Add Park</title>
	    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	    <link rel="stylesheet" type="text/css" href="/css/npark.css">
	</head>

	<body>
	
        <h1> National Parks</h1>
		<br>
		<h2> Add a Park! </h2>
		<div class="container">    
    
	        <form method="POST" action="add-park.php">
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
                <button type="submit" class="btn-btn-primary"> SUBMIT </button>

	        </form>
	        <br>
				
	 	<script src="http://code.jquery.com/jquery-2.2.4.min.js"></script>
	    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" 
	    integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" 
	    crossorigin="anonymous"></script>
	</body>
</html>

