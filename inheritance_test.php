<?php

require "Student.php";

$bobby = new Student("Bobby", "Tables");
//constructor comes from the parent

$bobby->homework = "Studying furniture making";

$bobby->doHomework();

echo "Hi, nice to meet you, I'm" . $bobby->fullName();

$flash = new Superhero("Barry", "Allen");
// $flash = object

echo $flash->fullName(); //pulls the data using the parent class

$flash->pseudonym = "The Flash";

if($flash->hasCape()) {
	echo "Grab hum by his cape";
}

echo "Alter ego is" . $flash->alterEgo() . PHP_EOL;