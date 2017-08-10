<?php

require_once "park_logins.php";

// creating a PDO object
$dbc = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASSWORD);

// SCRIPT BREAKDOWN:
//mysql = the database type
//host = server location

// Tell PDO to throw exceptions on error
$dbc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


