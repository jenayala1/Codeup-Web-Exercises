 (function() {
        "use strict";

        var faverestName = "Vietnam Gardens";
        var faverest = {lat: 29.503056, lng: -98.508094};
        var results;
        var position = mapOptions;


// Set map options
        var mapOptions = {
            // Set the zoom level
            zoom: 19,

            // This sets the center of the map at our location
            center: {
                lat:  29.503056,
                lng: -98.508094
            },

         mapTypeId: google.maps.MapTypeId.HYBRID

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

///----Create an info window with the name of the restaurant.

var infowindow = new google.maps.InfoWindow({
    content: "Vietnam Gardens" + "  5433 Blanco Rd, San Antonio, TX 78216  " + 
    "  Local Favorite Dish Bun Bo Soup",
    maxWidth: 200
  
})
infowindow.open(map,marker);

///Zoom in and verify that you have identified the correct location. Double check it against Google Maps
 var marker;

    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 19,
          center: {lat: 29.503056, lng: 98.508094}
        });

        marker = new google.maps.Marker({
          map: map,
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: {lat: 29.503056, lng: 98.508094}
        });

        marker.addListener('click', toggleBounce);
      }

    function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }

//-------Bonuses-----------:
///Info windows can contain basic HTML, not just plain text. Add some addition information about your restaurant to the info window such as why it is your favorite, dishes you like, etc.

///Research Google Maps Events. Make sure the info window does not display until the marker has been clicked on.

///Add a drop animation to the marker when the page first loads.

///Refactor your code to display at least three favorite restaurants with information about each. You should create an array of JSON objects with information about each restaurant to accomplish this. You will most likely need to use a .forEach() loop rather than a for.

///Replace the generic marker icon with an image that is more appropriate for each restaurant.*/
