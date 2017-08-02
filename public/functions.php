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

	return isset($_REQUEST[$key]);

}



function escape($input)
{
	return isset($_REQUEST[$input]);
}
