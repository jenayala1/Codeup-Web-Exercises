<?php

// if(isset($GET['genre']))

// if(isset($POST['username']))

// $_REQUEST[$variable]
// gets the key=>value from either POST or GET

//purpose - use as a template for functions that will be repeatedly used in other files

function inputHas($key)
{

	return isset($_REQUEST[$key]);
}

function inputGet($key)
{
	if(inputHas($key)) {
		return $_REQUEST[$key];
	} else {
		return $default;
	}
}

function escape($input)
{
	if(!is_string($input)){
		return false;
	}
	return htmlspecialchars(strip_tags($input));
}
