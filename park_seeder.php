
<?php
require 'db_connect.php';
require 'Park.php';

$connection->exec("TRUNCATE national_parks");

//Retrieve contents of park csv file as a string:
$contents = file_get_contents('national_parks.csv');

//Obtain an array of all rows:
$parks = explode("\n", trim($contents));

//Remove heading:
array_shift($parks);

//trim each:
$parks = array_map('trim', $parks);

//Insert records statement: (removed with inclusion of class)
// $statement = "INSERT INTO national_parks(name, location, date_established, area_in_acres, description)
// 	VALUES (:name, :location, :date_established, :area_in_acres, :description)";

// $preparedStmt = $connection->prepare($statement);

foreach($parks as $park) {
	$park = explode(",", $park);

	$addPark = new Park();
	$addPark->name = $park[0];
	$addPark->location = $park[1];
	$addPark->date_established = $park[2];
	$addPark->area_in_acres = $park[3];
	$addPark->description = $park[4];

	$addPark->insert();

//refactor of previous prepared statements - renamed to above statements to point to the class
		// $preparedStmt->bindValue(':name', $park[0], PDO::PARAM_STR);
		// $preparedStmt->bindValue(':location', $park[1], PDO::PARAM_STR);
		// $preparedStmt->bindValue(':date_established', $park[2], PDO::PARAM_STR);
		// $preparedStmt->bindValue(':area_in_acres', $park[3], PDO::PARAM_STR);
		// $preparedStmt->bindValue(':description',$park[4], PDO::PARAM_STR);

		// $preparedStmt->execute();
}




