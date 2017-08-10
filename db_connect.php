<?php

require_once "env.php";

// creating a PDO object
$dbc = new PDO("mysql:host=127.0.0.1;dbname=$dbName", $username, $password);

// SCRIPT BREAKDOWN:
//mysql = the database type
//host = server location

// Tell PDO to throw exceptions on error
$dbc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


echo $dbc->getAttribute(PDO::
	ATTR_CONNECTION_STATUS) . "\n";