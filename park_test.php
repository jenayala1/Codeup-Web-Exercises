<?php

require_once "Park.php";
require_once "Model.php";



echo "There are " . Park::count() . " parks in the parks table.";

$parks = Park::all();


	Park::dbConnect();
	var_dump(Park::$connection);


// test Park::count()
	
	echo "There are " . Park::count() . " parks in the parks table.";


// test Park::all()

	var_dump(Park::all());

	$allParks = Park::all();

	echo "Park 1 details..." . PHP_EOL;

	echo $allParks[0]->name . PHP_EOL;
	echo $allParks[0]->location . PHP_EOL;
	echo $allParks[0]->date_established . PHP_EOL;
	echo $allParks[0]->area_in_acres . PHP_EOL;
	echo $allParks[0]->description . PHP_EOL;



// test Park::paginate()

	print_r(Park::paginate(1));
	print_r(Park::paginate(2));
	print_r(Park::paginate(2, 2));
	print_r(Park::paginate(1, 8));



// test inserting a new park

$park = new Park();

$park->name = "Guadalupe Valley";
$park->location = "Texas";
$park->area_in_acres = 700;
$park->date_established = '2017-08-02';
$park->description = 'this is a test';
$park->insert();

Model::find($id);

