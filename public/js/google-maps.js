  (function() {
        "use strict";

        var faverestName = "Vietnam Gardens";
        var faverest = {lat: 29.503056, lng: -98.508094}; 
        var results;
        var position;
        var retLocation; 

//---#1 ---- Set map options -----
        var mapOptions = {
            // Set the zoom level
            zoom: 10,

//----#2 -----Sets center of the map 
            center: {
                lat:  29.503056,
                lng: -98.508094
            },

         mapTypeId: google.maps.MapTypeId.HYBRID

        };


// ----#3 -------Render map
var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
var address = "5433 Blanco Rd, San Antonio, TX 78216";

var geocoder = new google.maps.Geocoder();
    geocoder.geocode({address: address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);

            } else {
                alert("Oops, something went wrong. " + status);
            }

        })

///---_#4-----Create a marker on your map of the exact location of your favorite restaurant and adjust the zoom to allow for best viewing distance.
///----#5-----Create an info window with the name of the restaurant.
///----#6-----Info windows can contain basic HTML, not just plain text. Add some addition information about your restaurant to the info window such as why it is your favorite, dishes you like, etc.
///----#7-----Research Google Maps Events. Make sure the info window does not display until the marker has been clicked on.    

    var marker = new google.maps.Marker({
            position: faverest,
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP,

    });

    var infowindow = new google.maps.InfoWindow({
        content: "Vietnam Gardens" + "  5433 Blanco Rd, San Antonio, TX 78216  " + 
        "  Local Favorite Dish Bun Bo Soup",
        maxWidth: 200
    });

    
    marker.addListener('click', function(){
        infowindow.open(map, marker);
    });

 
//----#8 -----Zoom in and verify that you have identified the correct location. Double check it against Google Maps


//----------------Bonuses-----------:

//----#B1----Add a drop animation to the marker when the page first loads.

//----#B2----Refactor your code to display at least three favorite restaurants with information about each. You should create an array of JSON objects with information about each restaurant to accomplish this. You will most likely need to use a .forEach() loop rather than a for.
var restaurants = [
        {
            restName: "Vietnam Gardens",
            retLocation: {lat: 29.503056, lng: -98.508094},
            position: {
                lat: 29.503056,
                lng: -98.508094,
            },
            address: "5433 Blanco Rd, San Antonio, TX 78216",
            phone: "(210)377-1989",
            food: "Vietnamese"

        },
        {
            restName: "Vallarta Taqueria",
            retLocation: {lat: 29.492438, lng: -98.526275},
            position: {
                lat: 29.492438,
                lng: -98.526275,
            },
            address: "3333 West Ave STE 16, San Antonio, TX 78213",
            phone: "(210)541-9964",
            food: "Mexican"
        },
        {
            restName: "The Cove",
            retLocation: {lat: 29.440435, lng: -98.500597},
            position: {
                lat: 29.440435,
                lng: -98.500597,
            },
            address: "606 W Cypress St, San Antonio, TX 78212",
            phone: "(210)227-2683",
            food: "Burgers"
        }
        ];

        
//----B3----Replace the generic marker icon with an image that is more appropriate for each restaurant.*/

})();