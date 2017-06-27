// JS REVIEW:

//#1 --- Event Handler / Listener Function

			var mainContainer = document.getElementById('container');

///--- #A --- Calling the function
			mainContainer.addEventListener('click', function() {
				console.log("Howdy");
			})

//--- #B --- jQuery method of binding a click event - same as function in #A

			//--- anonymous
			$('container').click(function(){
				alert("Howdy");
			})

			//named function:
			$('container').click(cowboyGreeting);

			//by element
			$('li').click(cowboyGreeting);

//--- #C --- Double click addEventListener
			$('li').dblclick(cowboyGreeting);

//--- #D --- Double click & using this addEventListener
			function cowboyGreeting (){
				console.log(this);
			}

			$('li').dblclick(cowboyGreeting);

//---- #E --- Change styling on an element using "this"
			function cowboyGreeting (){
				$(this).css("background-color", "yellow");
			}

			$('li').dblclick(cowboyGreeting);

//---- #F --- Hover - Single Function ex - changing a box to a circle on hover
			$('#box').hover(function() {
				$(this).css("border-radius", "75px");
			}
//---- #G --- Hover - TWO Function ex - changing a box to a circle on hover
			$('#box').hover(function() {
				$(this).css("border-radius", "75px");
			},
			function() {
				$(this).css("border-radius", "0px");
			}		
		);

//---- #H --- EXERCISES:

//---- #1 --- Use the file jquery_exercises.html for these exercises. Commit your changes to GitHub.



//--- #2 --- Remove your custom jQuery code from previous exercises.


//--- #3 --- Add jQuery code that will change the background color of a h1 element when clicked.


//--- #4 --- Make all paragraphs have a font size of 18px when they are double clicked.


//--- #5 --- Set all li text color to red when the mouse is hovering, reset to white when it is not.
			
















