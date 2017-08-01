<?php
// ============== GET REQUESTS ===================//
var_dump($_GET);

$counter = 0;
$message = "";

if(isset($_GET['min_price']) && isset($_GET['max_price'])) {
    //isset defines & sets the variable - determines if the variable is set & is not null- returns true
    //empty will return true if the variable does not exist or value equals false

    if($_GET['min_price'] == "" || $_GET['max_price'] == '') {
        $message = "min and max price must be given values.";
    } else {
        $message = "Showing you all the properties between " . $_GET['min_price'] . " and " 
        . $_GET['max_price'];
    }
}

?>

<!-- ==== DEMO EXTRACT -only cares if passing an array of keys-->
<?php

$movie = [ //associative array
    'genre' => ['animation', 'action', 'comedy'],
    'title' => 'Lion King',
    'release' => '1994'

];

extract($movie); // extract takes each key value pair and passes it as a variable - 
//i.e. creates new variables for "genre", "title", & "release", can be seperated from page controller - can be a standalone

//Extracting a function requires a return value, (like pageController);

if(isset($genre)) {
    var_dump($genre);
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Counter</title>
</head>
<body>
    <h1>Counter: <?= $counter ?> </h1>
    <h2><?= $message ?></h2>
    <a href="?">Up</a>
    <a href="?">Down</a>

    <form method="GET" action="#">
        <label for="min_price">Minimum price</label>
        <input type="text" name="min_price" id="min_price">

        <label for="max_price">Maximum price</label>
        <input type="text" name="max_price" id="max_price">

        <label for="property_type">Property type</label>
        <input type="text" name="property_type" id="property_type">
        
        <button type="submit">Search now!</button>
    </form>
</body>
</html> 







