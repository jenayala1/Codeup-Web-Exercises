<?php

require_once "CanOfSoda.php";

$favSoda = new CanofSoda();

$favSoda->brandName="Dr. Pepper";
$favSoda->expirationDate="12/31/2017";

var_dump($favSoda);
$favSoda->openSoda();
$favSoda->pourSoda();

var_dump($favSoda);