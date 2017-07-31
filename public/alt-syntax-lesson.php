<?php

	$movies = ['Sleepy Hollow', "The Conjuring", "Nightmare of Elm Street", "Something Wicked This Way Comes"];

	$products = [
	['name' => 'Drip Coffee', 'price' => 1.99, 'quantity' => 3],
	['name' => 'Espresso', 'price' => 2.99, 'quantity' => 1],
	['name' => 'Iced Tea', 'price' => 1.49, 'quantity' => 5],
	['name' => 'Bottled Water', 'price' => 2.49, 'quantity' => 0],
 ];
 
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