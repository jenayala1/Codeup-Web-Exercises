<?php

// Never trust user input
// From this point forward, must always sanitize user data using the functions from the lesson
// Following best practices will help prevent malicious code from being injected in your site
// 

function pageController()
	{
		$data = [];
	
		$items = array('Item One', 'Item Two', 'Item Three');

		$userItem = (isset$_POST['newitem'])) ? $_POST['newitem'] : "";


		$data['allItems'] = $items;

		return $data;
	}

extract(pageController());
?>

<<!DOCTYPE html>
<html>
<head>
    <title>Alternative Syntax</title>
</head>
<body>
    <h1>List of Items</h1>
    <ul>
    <?php foreach ($allItems as $item): ?>
        <li><?php echo htmlspecialchars(strip_tags($item)); ?></li> 
       <!--  still posts the data - without the tags & any code -->
    <?php endforeach; ?>
    </ul>

    <form method="POST">
        <input type="text" id="newitem" name="newitem" placeholder="Add new todo item">
        <input type="submit" value="add">
    </form>
</body>
</html>