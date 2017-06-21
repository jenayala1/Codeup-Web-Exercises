//Document Object Model Lesson Notes
//

//EXAMPLES:
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>DOM: Query and Modify</title>
</head>
<body>


<p id="cat">"Hello, cat"</p>
	
	<ul>
		<li id="pets">"Pets"</li>
		<li>dog</li>
		<li>lizard</li>
<p id ="cowboy"
	data-1="howdy"
	data-author="Justin Reich"
	<data-genre="fiction"

	<script>
	"use strict"



	// Retrieve elements by id, class, tag name: -references

	//by id
	var cat = document.getElementById('');
	console.log(cat);

	//NOTE: method = .getElementByID

	// by class: - collection of items identified under this class
	var listItems = document.getElementsByClassName('pets');
	console.log(listItems);
			//also known as a node list - similar to an array, for differences refer to: https://toddmotto.com/a-comprehensive-dive-into-nodelists-arrays-converting-nodelists-and-understanding-the-dom/
	 
	 //to specify only one element in the list, use the index number:
	 var listItems = document.getElementsByClassName('li')[0];
	console.log(listItems);

	//by tag:
	var paragraphs = document.getElementsByTagName('p');
	console.log(paragraphs);


	//get value of inner.HTML:
	console.log(cat.innerHTML); //returns the element and HTML tags
	console.log(cat.Text); ///returns just the value

	//set value of inner.HTML:
	cat.innerHTML = ""; //removes element from the page

	cat.innerHTML = "This is dog"; //changes the return of the element

	cat.innerHTML = <em>"This is dog"</em>; //includes the styling attribute with the value change


	//set value of inner.Text:
	cat.innerText = <em>"This is dog"</em>;

	//Append value to innerText: (works same with inner.HTML)
	cat.innerHTML += "This is also a cat"; //adds statement to the end of the current value


	//Accessing & Modifying Attributes:
	// -- check if attribute exists
	var cowboy = document.getElementId('cowboy');
		console.log(cowboy.hasAttribute);

		//for clarification, refer to data attributes:
		//https://webdesign.tutsplus.com/tutorials/all-you-need-to-know-about-the-html5-data-attribute--webdesign-9642
/
/by data attribute:
	var cowboy = document.getElementId('cowboy');
		console.log(cowboy.hasAttribute('data-1'));

	// --get an attribute value
	console.log(cowboy.getAttribute('data-1'));

	// --create a new attribute or change a value of an existing attribute
	cowboy.setAttribute('data-1'));


	//Accessing & modifying styles:
	console.log(cat.style); //accessing the style of an element

	cat.style.color = "red"; //changes the font color of the element

	var body = document.getElementsByTagName('body');  //retrieves the elements with the [] in the return
	console.log(body);

	var body = document.getElementsByTagName('body')[0];  //retrieves the elements 
	console.log(body);

	var body = document.getElementsByTagName('body')[0];
	body.style["background-color"]; //changesthe tag, "body" background color, compound words require []

	//syntax for forms:
	document.forms; //all forms on the page
	document.forms[0].username.value; //targets a specific form (index) & the input box - target value, will not work with username.Text or username.HTML
		//standard command line:
		var usernameInput = document.forms.login.username:

	//Add/Remove Elements:

	//Additional Notes/Hint:
//	document.getElementById(element value).value
// -- returns a single HTML element in the form of a JS object

//BONUS
//function convertNodeListToArray(list) {
// 	var array = [];

// 	for(var i = 0; i < list.length; i++) {

// 	}
// 	return array;
// }
//var nodeList = document.getElementsByTagName("p");
//var paragraphs = convertNodeListToArray(nodeList);
//paragraphs.forEach(function(paragraph) {

//});
//EXAMPLE:
// for(var i = 0; i < paragraphs; i++) {
//             if(i % 2 == 0) {
//                 paragraphs[i].innerText = "Mission Accomplished!";
//             }
//          }



	</script>

</body>
</html>