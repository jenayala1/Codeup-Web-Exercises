  (function() {
        "use strict";

        var faverestName = "Vietnam Gardens";
        var faverest = {lat: 29.502983, lng: -98.508158};
        var results;
        var position = mapOptions;

 // Set map options
        var mapOptions = {
            // Set the zoom level
            zoom: 22,

            // This sets the center of the map at our location
            center: {
                lat:  229.502983,
                lng: -98.508158
            },
        };


        // Render the map
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    
    var address = "5433 Blanco Rd, San Antonio, TX 78216";

    var geocoder = new google.maps.Geocoder();
        geocoder.geocode({address: address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);

            } else {
                alert("Oops, something went wrong" + status);
            }

            })

 
///---Create a marker on your map of the exact location of your favorite restaurant and adjust the zoom to allow for best viewing distance.
   var marker = new google.maps.Marker({
        position: faverest,
        map: map
    });

///----Create an info window with the name of the restaurant.

var contentString = '<div id="content">' +

var infowindow = new google.maps.InfoWindow({
    content: "Vietnam Gardens", "http://www.vietnamgardens.com/", 
})

infowindow.open(map,marker);
///Zoom in and verify that you have identified the correct location. Double check it against Google Maps


//Bonuses:

///Info windows can contain basic HTML, not just plain text. Add some addition information about your restaurant to the info window such as why it is your favorite, dishes you like, etc.

///Research Google Maps Events. Make sure the info window does not display until the marker has been clicked on.

///Add a drop animation to the marker when the page first loads.

///Refactor your code to display at least three favorite restaurants with information about each. You should create an array of JSON objects with information about each restaurant to accomplish this. You will most likely need to use a .forEach() loop rather than a for.

///Replace the generic marker icon with an image that is more appropriate for each restaurant.*/

    })();