<?php


// Require or include statements are allowed here. All other code goes in the pageController function.

/**
 * The pageController function handles all processing for this page.
 * @return array An associative array of data to be used in rendering the html view.
 */
function pageController()
{
    
    $data = array();
    $data['counter'] = isset($_GET['counter']) ? $_GET['counter'] : 0; 
    //performs the if/else function

    // Add data to be used in the html view.
    
    // Return the completed data array.
    return $data;
}

// Call the pageController function and extract all the returned array as local variables.
extract(pageController());

// Only use echo, conditionals, and loops anywhere within the HTML.
?>
<!DOCTYPE html>
<html>
    <head>
        <title>PHP + HTML</title>
    </head>
    <body>

    <form>
        <h1> Counter: <?= $counter ?><h1>
        <a href="/counter.php?counter=<?=$counter +1 ?>">UP</a>
        <a href="/counter.php?counter=<?=$counter -1 ?>">DOWN</a>
        
    </body>
</html>