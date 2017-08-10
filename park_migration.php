<?php

require 'db_connect.php';

$drop = "DROP TABLE IF EXISTS national_parks";
$statement = "CREATE TABLE national_parks(
		 	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
		 	name VARCHAR(255),
		 	location VARCHAR(255),
		 	date_established DATE,
		 	area_in_acres DOUBLE(12, 2),
		 	PRIMARY KEY(id)
		 );";
$dbc->exec($drop);
$dbc->exec($statement);
 
