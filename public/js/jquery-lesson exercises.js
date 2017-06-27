	"use strict";

			$(document).ready(function() {
				alert( 'The DOM has finished loading!' );
			});

			$('#tables');
			//Use jQuery to select an element by the id. Alert the contents of the element -instructor solution:
			
			// 	alert($('#div").html());
			// }

			$('#paragraphs').css('text-align', "centered");

			$('.codeup').css('border', '1px solid #F00');

			$('li').css('font-size', '20px');

			$('h1, p, li').css('background-color', 'yellow');
				alert( 'Elements h1, paragraph, & list items highlighted');
			$('#dreamcar').css('width', '200px');
				alert('dreamcar resized');

			$('body').css('background-image', 'url(img/vintage-leaves.png)');