(function(){
    "use strict";
    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    // TODO #1: Convert planetsString to an array, save it to planetsArray.
    //my solution:
    var planetsArray = ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];
        console.log(planetsArray);

//instructor solution:
    var planetsArray = planetsString.split("|")
        console.log(planetsArray);


    // TODO #2: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?

     //var plantsArray = planetsString.split ('<br > ');
        //console.log(planetsString);


    //Instructor solution:
    planetsString = planetsArray.join("<br>");
        console.log(planetsString);

// Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, 
    //         and <li> tags around each planet.
    //        console.log() your results.

    //Instructor solution:
    planetsString = "<ul><li>";
    planetsString += planetsArray.join("</li><li>");
    planetsString += "</li></ul>";
    console.log(planetsString);

    document.getElementsByTagName("body") [0].innerHTML = planetsString;


})();