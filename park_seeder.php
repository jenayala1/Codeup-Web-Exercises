
<?php
require 'db_connect.php';

$connection->exec("TRUNCATE national_parks");

//Retrieve contents of park csv file as a string:
$contents = file_get_contents('national_parks.csv');

//Obtain an array of all rows:
$parks = explode("\n", trim($contents));

//remove heading:
array_shift($parks);


$statement = "INSERT INTO national_parks(name, location, date_established, area_in_acres, description)
	VALUES (:name, :location, :date_established, :area_in_acres, :description)";

$preparedStmt = $connection->prepare($statement);

foreach($parks as $park) {
	$park = explode(",", $park);

	$preparedStmt->bindValue(':name', $park[0], PDO::PARAM_STR);
	$preparedStmt->bindValue(':location', $park[1], PDO::PARAM_STR);
	$preparedStmt->bindValue(':date_established', $park[2], PDO::PARAM_STR);
	$preparedStmt->bindValue(':area_in_acres', $park[3], PDO::PARAM_STR);
	$preparedStmt->bindValue(':description',$park[4], PDO::PARAM_STR);

	$preparedStmt->execute();
}




