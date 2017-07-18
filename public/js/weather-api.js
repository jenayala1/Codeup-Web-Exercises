(function() {
    "use strict";

        var coordinates = {lat: 36.600238, lng: -121.894676}; 
        var location = "Monterey, CA 93944"; 

                    
        var mapOptions = {
            zoom: 12,
            center: {
                lat:  36.600238,
                lng: -121.894676
            },

            mapTypeId: google.maps.MapTypeId.HYBRID

        };
                    
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
        var address = "1759 Lewis Rd, Monterey, CA 93944";

        var geocoder = new google.maps.Geocoder();
            geocoder.geocode({address: address}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                                
                } else {
                    alert("Oops " + status);
                }
            });

        var marker = new google.maps.Marker({
             position: coordinates,
             map: map,
             draggable: true,
             animation: google.maps.Animation.DROP,   
        });

        $("marker").click(function(getWeatherOption){
            lat = $("#lat").val();
            lon = $("#lon").val();
             $("#forecast").html("");
             getWeatherOption();
        });

        google.maps.event.addListener(marker, 'dragend', function (event) {
            document.getElementById("lat").value = this.getPosition().lat();
            document.getElementById("lng").value = this.getPosition().lng();
            console.log(lat + lng);
        });

        function updateCity(){
                $("#location").text(location);
            }

})();


///---_#4-----Create a marker on your map of the exact location of your favorite restaurant and adjust the zoom to allow for best viewing distance.
///----#5-----Create an info window with the name of the restaurant.
///----#6-----Info windows can contain basic HTML, not just plain text. Add some addition information about your restaurant to the info window such as why it is your favorite, dishes you like, etc.
///----#7-----Research Google Maps Events. Make sure the info window does not display until the marker has been clicked on.    

    // 

    // var infowindow = new google.maps.InfoWindow({
    //     content: "1759 Lewis Rd" + "  Monterey, CA 93944  ",
    //     maxWidth: 200
    // });

    
    
