//===== ANIMATE LESSON NOTES

//===== Animating a single style change: (with an HTML button, "DO SOMETHING") - The simplest way to use .animate() is to pass it a JavaScript object of CSS properties and a duration:

	$('#animate').click(function (){
	    $('div').animate(); //the jQuery object to pass the changes through the function
	    width: "30px" // the property being changed

		}, 5000; //the specified duration

//===== Defining a function associated with a click function

	function getBigger(){
		$('div').animate({
			width: "+=30px",
			height: "+=30px" // the += sets the function to increase the object by the specified size each time it is clicked
		}, 500;
	}

	$('#bigger').click(getBigger); //designating the button that calls the "getBigger" function on button click

//===== Completion Callback (the example source is an h3 element set as an in-line element)

	$('h3').click(function(){
		$('h3').animate({
			"font-size": "200px", ///increases the elements size &
			"opacity": 0 //fade out the element to invisible 
		}, 1500, function(){ ///time designated for the 1st function, followed by the call of a new function to
			window.location = "https.google,com" //-redirect the page to the link
		});
	});
	
//===== Chaining Animation - sequence

	$('#animate').click(function(){
		$('div').animate({
			left: "400px",
			width: "400px",
			height: "400px",
			borderRadius: "250px"
		}, 2000).animate({ // identifies another animation function to occur
			left: 0,   //
			width: "200px",
			height: "200px",
			height: "200px",
			borderRadius: 0
		}, 2000
	})










