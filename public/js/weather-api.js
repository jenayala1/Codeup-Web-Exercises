(function() {
        "use strict";

        var coordinates = {lat: 29.428074, lng: -98.489158}; 
        var location = "San Antonio, TX 78205"; 

//---#1 ---- Set map options -----
        var mapOptions = {
            // Set the zoom level
            zoom: 19,

//----#2 -----Sets center of the map 
            center: {
                lat:  29.428074,
                lng: -98.489158
            },

         mapTypeId: google.maps.MapTypeId.HYBRID

        };


// ----#3 -------Render map
var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
var address = "311 E Travis St, San Antonio, TX 78205";

var geocoder = new google.maps.Geocoder();
    geocoder.geocode({address: address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);

            } else {
                alert("Oops, something went wrong. " + status);
            }

        })

"http://tile.openweathermap.org/map/temp_new/19/{x}/{y}.png?appid=40ba7777b52dad7589a9efb71eceb30a"


///---_#4-----Create a marker on your map of the exact location of your favorite restaurant and adjust the zoom to allow for best viewing distance.
///----#5-----Create an info window with the name of the restaurant.
///----#6-----Info windows can contain basic HTML, not just plain text. Add some addition information about your restaurant to the info window such as why it is your favorite, dishes you like, etc.
///----#7-----Research Google Maps Events. Make sure the info window does not display until the marker has been clicked on.    

    var marker = new google.maps.Marker({
            position: location,
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP,
    });

    var infowindow = new google.maps.InfoWindow({
        content: "Travis Park" + "  311 E Travis St, San Antonio, TX 78216  ",
        maxWidth: 200
    });

    
    // marker.addListener('click', function(){
    //     infowindow.open(map, marker);
    // });
