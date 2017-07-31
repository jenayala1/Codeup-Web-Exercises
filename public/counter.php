<?php


function pageController()
{
    // Initialize an empty data array.
    $data = array();

    // Add data to be used in the html view.
    $data['message'] = ;

    // Return the completed data array.
    return $data;
}
extract(pageController());


?>
<!DOCTYPE html>
<html>
    <head>
        <title>PHP + HTML</title>
    </head>
    <body>

        <h1 class="counter"></h1>

        <a href="/get-requests.php?search=<?= urlencode($term) ?>">search for <?= $term ?>UP</a>
        <a href="/get-requests.php?search=<?= urlencode($term) ?>">search for <?= $term ?>DOWN</a>

        <?php echo $message; ?>
    </body>
</html>