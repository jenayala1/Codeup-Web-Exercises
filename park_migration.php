<?php
require_once "Park.php";

Park:: dbConnect();

Park::$connection->exec("DROP TABLE IF EXISTS national_parks");
$statement = "CREATE TABLE national_parks(
		 	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
		 	name VARCHAR(255),
		 	location VARCHAR(255),
		 	date_established DATE,
		 	area_in_acres DOUBLE(12, 2),
		 	description VARCHAR(255),
		 	PRIMARY KEY(id)
		 );";

Park::$connection->exec($statement);
echo "parks table successfully created" . PHP_EOL;
 
