<?php

require 'db_connect.php';

$drop = "DROP TABLE IF EXISTS national_parks";
$statement = "CREATE TABLE national_parks(
		 	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
		 	name VARCHAR(255),
		 	location VARCHAR(255),
		 	date_established DATE,
		 	area_in_acres DOUBLE(12, 2),
		 	description VARCHAR(255),
		 	PRIMARY KEY(id)
		 );";
$connection->exec($drop);
$connection->exec($statement);
 
