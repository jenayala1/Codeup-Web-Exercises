<?php

session_start();



?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <link href="css/index.css" rel="stylesheet">
		<title>INDEX</title>
	</head>
	<body>
		<div class="header">
			<?php require 'header.php';?>
		</div>

		<div class="navbar">
			<?php require 'navbar.php';?>
		</div>
		<h2> THIS IS THE BODY! </h2>
		<p> Filler text: blah blah blah blah blah </p>
		<div class='container'>
			<img src="/img/DSC_0726-698.jpg">
		</div>
		<div class="text"> PLACEHOLDER TEXT <
			<p>
				PHP Pandas is the book that aims to teach everyone how to be a web developer. You don't need any existing web development experience. The entire book is available online to encourage learning. If you like what you see, please consider buying a copy of the book to support my future writing efforts!
				It's available in a number of awesome formats including PDF and eBook. It's also got a bunch of extras that you won't find on the site! Enjoy!
			</p>
		</div>
		<br>
		<div class="footer">
			<?php require 'footer.php';?>
		</div>
	</body>


</html>