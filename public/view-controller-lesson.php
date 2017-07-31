<?php


// pageController() function
 // -- a function that encapsulates the logic you need to do on a page
 // -- we'll define this
 // extract() function
 // -- accepts an associative array whose keys will be turned into variables
 // -- built in to php
 
 // our pageController function can return an associative array, which we will
 // then pass to `extract()` to clearly define the boundary between our logic and
 // our presentation
 function pageController(){
 	$heading = 'Welcome to store';

 	 $products = [];
	 
	 $coffee = ['name' => 'Drip Coffee', 'price' => 1.99, 'quantity' => 3];
	 $products[] = $coffee; //same as aray_push($products, $coffee)
	 
	 $espresso = ['name' => 'Espresso', 'price' => 2.99, 'quantity' => 1];
	 $products[] = $espresso;
	 
	 $tea = ['name' => 'Iced Tea', 'price' => 1.49, 'quantity' => 5];
	 $products[] = $tea;
	 
	 $bottledWater = ['name' => 'Bottled Water', 'price' => 2.49, 'quantity' => 0];
	 $products[] = $bottledWater;

	 return [
	 	'products' => $products, 
	 	'heading' => $heading,
	 ];
 }
	// $products = pageController()['products'];
	// $heading = pageController()['heading']; //use "extract" to simplify code instead
	extract(pageController());
 ?>
 
 <!DOCTYPE html>
 <html>
	<head>
		<title></title>

	</head>
	<body>
		<h3><?php echo $movies[1] ?></h3>
		<?=

			if(count($movies) > 3) {
				$longlist = true;

			} else {
				$longlist = false
			}
		?>
		<ol>
			<?php foreach($movies as $movie) : ?>
				<li><?= $movie ?></li>
			<?php endforeach ?>
		</ol>
		<ul>
			<?php if(($movies[4]) == "Something Wicked This Way Comes") : ?>
				<li><?= $movies[4] ?></li>
			<?php endif ?>

			<div class="container">
         	<div class="row">
            	<?php foreach($products as $product): ?>
	                <div class="col-md-6">
	                    <h2 class="text-center"><?= $product['name'] ?></h2>
	                    <?php if($product['quantity'] > 1): ?>
	                         <p>$<?= $product['price'] ?></p>
	                    <?php elseif($product['quantity'] == 1): ?>
	                         <p class="alert alert-warning">Only one left!</p>
	                         <p>$<?= $product['price'] ?></p>
	                    <?php else: ?>
	                         <p>All sold out!</p>
	                    <?php endif; ?>
	                </div>
             	<?php endforeach; ?>
         	</div>
     	</div>
		</ul>
	</body>
</html>