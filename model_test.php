<?php

require __DIR__ . "/Model.php";
require __DIR__ . "/User.php";

// $item1 = new Model();

// $item1->serialNumber = "h-news-182";
// $item1->product = "hat";
// $item1->style = "newsboy";
// $item1->price = "$25.99";
// $item1->availability = "online";

// $item2 = new Model();
// $item2->serialNumber = "h-fed-226";
// $item2->product = "hat";
// $item2->style = "fedora";
// $item2->price = "$14.53";
// $item2->availability = "online & in-store ";

// var_dump($item1);
// var_dump($item2);
 
$user = new User();
$user->username = "bobbyTables";
$user->password = "password123";

echo "The table that stores users is " . User::getTableName();
