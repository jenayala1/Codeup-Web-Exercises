<?php

session_start();

require 'library.php';
//if must be in the php file & will error out if not found

include 'library.php'
//the php will keep running although the file is required

function pageController ()
{
	if(is_array($input) || is_string($input)){
		return $input[0];
	}
	return false;
}
$favoriteFood = "thai"; //variable and function from inside the library

//from the file referencing the variable:
echo "my favorite food is $favoriteFood";


//Refer to the decision diagram for require, require_once or include
?>
<!-- //Templating/Working with partials:
//reusing the same HTML content across multiple files, i.e. like updating a footer's company name across all profile pages using this content: -->
<!DOCTYPE html>
<html>
	<head>
	</head>
	<body>

		<?php include 'footer.php' ?>
	</body>
</html>




