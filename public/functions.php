<?php

// if(isset($GET['genre']))

// if(isset($POST['username']))

// $_REQUEST[$variable]
// gets the key=>value from either POST or GET

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
