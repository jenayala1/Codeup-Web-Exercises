//AJAX LESSON NOTES

//to issue an AJAX request:

		$.ajax("/some-url")

//AJAX OPTIONS
		$.ajax("/some-url", {
		    type: "POST",
		    data: {
		        name:     "John",
		        location: "Boston"
		    }
		});


//to grab the information, perform a .done - indicating the request is complete

		$.ajax("/some-url").done(function(data, status, jqXhr) {
		    alert("AJAX call completed successfully!");
		    console.log("Request status: " + status);
		    console.log("Data returned from server:");
		    console.log(data);
		});


//Instructor Examples
//using the star wars API

//SIMPLE REQUESTS:

		var requestObject = $.ajax("http://swapi.co/api/films"); ///storing the API data to a variable
		console.log(requestObject);  //the console returns an object listing all the elements from the page
		//--need to use the .done method to return the values, otherwise will receive an undefined

//to retrieve the values from the AJAX request
		var requestObject = $.ajax("http://swapi.co/api/films"); 
		requestObject.done(function(data){
			console.log(data); 
		})

//alternate method (not recommended)
		var requestObject = $.ajax("http://swapi.co/api/films"); 

		var dataResponse = {}
		requestObject.done(function(data){
			dataResponse = data;
			
		})
		console.log(dataResponse);

//requesting specific data
$.ajax("/some-url").done(function(data, 
	console.log(data.results[0].director);
});

//single arguments with .done(), .fail() and .always methods
$.ajax("/some-url").done(function(data, 
	console.log(data.results[0].director);
}), fail.function (jqXhr, status, error) {
	console.log(jqXhr);
    console.log("Response status: " + status);
    console.log("Error object: " + error);


//--ALWAYS - will display despite errors, can be written seperately from fail
	$.ajax("/some-url").done(function(data, 
	console.log(data.results[0].director);
		}), fail.function (jqXhr, status, error) {
			console.log(jqXhr);
		    console.log("Response status: " + status);
		    console.log("Error object: " + error);
		}), always.function(){
			console.log("This will always be in the console");
	});

//URL first argument and configuration object second argument
//defaults to GET requests
	$.ajax("http://swapi.co/api/films", {
		"type": "GET",
		"data": {						///setting specific parameters as part of the search, with object name & key value pairs
			"search": "A New Hope"
		}
	})

