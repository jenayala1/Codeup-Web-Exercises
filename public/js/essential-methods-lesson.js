"use strict";

//---- jQuery Essential Methods Lesson Notes ----
//----- Attribute Methods--functions similar to bootstrap

//======TEST HTML PAGE=============//

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>JS Assessment</title>
		<link href="css/bootstrap.css" rel="stylesheet">
	</head>
	<body>

		<h1 id="codeup"</h1>
		 
		<div class="my-element"></div>

		<button id="small>Make Samll">

		<script type="text/javascript"></script>
		<script src="js/jsfile.js"></script> 
	</body>
</html>



//--- GETTER (returns a value):
	var codeupHTML = $('#codeup').html(); //pulls the inner.HTML of the id named codeup
	console.log(codeupHTML);

	var divDisplay = $('div').css('display'); //return just the element & CSS properties, even if properties are undefined (like "display") - good for tracking or editing property values
	console.log(divDisplay);


//--- SETTER (returns a jQuery object):

$('.my-element').css('width', '70px'); //CSS sets the styling property (property change)

$('.my-element').css('width', '70px').css('height', '100px'); // changes multiple properties tied to an element
$('.my-element').css
	('width', '70px')
	('height', '100px'); // another method to change multiple properties tied to an element

//--- Add Class----

$('.my-element').addClass('biggerBox'); //another method to apply changes to multiple properties, but applying it by class


$('.my-element').hover(
	function() {
		$(this).addClass(.biggerBox);
	},

	function() {
		$(this).removesClass(.biggerBox);
	}
);
$('my-element').addClass('biggerBox');


//--- TOGGLECLASS :
$('h1').dblclick(function() {
	$(this).toggleClass('awesomeFont'); //checks the current property & then changes the style on the function command (in this case double click) -"this" - identifies it as a jQuery object
});

('h1').dblclick(function() {
	$(this).toggleClass('awesomeFont'); //returns a boolean
	var hasAwesomeFont = $('h1').hasClass('awesomeFont');
	console.log(hasAwesomeFont); // returns true or false in this example - on double click it applies the change & then returns the new value (false)
});

//Traversing (Traversal) Methods:
//--Suite of methods to get & set CSS properties

//Lesson Examples: need to add in the HTML text
// Highlight all the sections
	$('section').css('background-color', 'yellow');

// Highlight all the articles
	$('article').css('background-color', 'yellow');

// Highlight the 1st article
	$('article').first().css('background-color', 'yellow'); //.first specifies the element

// Highlight the nested element inside all the article elements
$('article').children().css('background-color', 'yellow');

// Highlight the 1st nested element inside all the article elements
$('article').children().first.css('background-color', 'yellow');

// Highlight the 2nd list items of the all ordered lists
$('ol').children().next().css.('background-color', 'yellow');

//Each - similar to forEach
$('p').each(function(index, paragraph) { //"paragraph" is the element, reverse from javascript for loop order of element, index
	$(paragraph).css('background-color', 'red'); //the $() turns paragraph into a jquery object
});

//Can apply event listeners to arrays

$('p').click(function(){
	$(this).css('background-color', 'blue'); //apply the function only to the specific element selected, rather than all (in this case, paragraphs)
});

//first element
$('li').first()

//parent - will get the direct parent if selector is not passed - only goes up one level
$('li').first().parent()


$('li').parents() ///all the parents

$('p').first().next() /// - the next sibling selector


///hide & show
$('li').hide(8000) ///the 8000 indicates the milliseconds specified for the selected content to be hidden

$('li').toggle(3000, function() {
	console.log("your lis have been toggled"); //
})

//easing - how something disappears, in a more natural flow - good for side-bar & navbar styling
	//linear - constant speed
	//swing - slower at start & speeds up at the end

	$('li').toggle(3000, linear, function() {
		console.log("your lis have been toggled"); //linear easing
	})

	$('li').fadeIn (1000) //changes opacity until fully displayed
	$('li').fadeOut (1000) //changes opacity until content fully disappears
	$('li').fadeToggle(1000)
	$('li').slideUp(5000) 



