<?php

function pageController()
{
    //to solve thru if statement:
      // if(isset($_GET['count'])) {
      //   $count = $_GET['count'];
      
      // } else {
      //   $count = 0;

      // }

//if is a statement, this function can also be solved with a terenary operator:
  $data = [];
  $data['count'] = isset($_GET['count']) ? $_GET['count'] : 0
   
    return $data;
}

// Call the pageController function and extract all the returned array as local variables.
extract(pageController());
//extracting the return data - can only return an associative array to turn the keys into specific variables
// Only use echo, conditionals, and loops anywhere within the HTML.
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Counter</title>
    </head>
    <body>

    <form method="GET" action='#'>
    	<label for="min_price">Minimum Price</label>
    	<input type="text"
        <h1> Counter: <?= $counter ?><h1>
        <!--    shorthand PHP echo -->
        <a href="?count=<?= $count +1?>">UP</a>
        <a href="?count=<?= $count -1?>">DOWN</a>
       <!--  "? - tells the browswer the PHP exists in the same file & to echo the variables, do not need to reference the file name -->
       <!-- count - the variable 
        = value
        $count +1 - incrementing the value of $count by 1(in this case 0+1) -->

    </form>
    </body>
</html>