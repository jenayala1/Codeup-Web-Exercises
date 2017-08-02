<?php
    $items = array('Item One', 'Item Two', 'Item Three');
    $allItems = array_merge($items, $_POST);
?>


<!DOCTYPE html>
<html>
<head>
    
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <title>Alternative Syntax</title>

</head>
<body>
    <h1>List of Items</h1>
    <ul>
    <?php foreach ($allItems as $item): ?>
        <li><?php echo htmlspecialchars(strip_tags($item)); ?></li>
    <?php endforeach; ?>
    </ul>

    <form method="POST" action="/form-example.php">
        <input type="text" id="newitem" name="newitem" placeholder="Add new todo item">
        <input type="submit" value="add">
    </form>
</body>
</html>