(function(){
    "use strict";

    // TODO #1: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
    var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

    // function for logging the planets array
    function logPlanets(element, index, array) {
        console.log("Here is the list of planets:");
        console.log(planets);
        console.log("---- ---- ---- ----");
    }

    logPlanets();


    planets.splice(0, 0, "Sun");
    console.log('Adding "The Sun" to the beginning of the planets array.');
    // TODO #2 : Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    planets.splice(9, 0, "Pluto");
        console.log('Adding "Pluto" to the end of the planets array.');
    // TODO #3: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    planets.shift("Sun");
    console.log('Removing "The Sun" from the beginning of the planets array.');
    // TODO #4: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    var lastElement = planets.pop();
    console.log('Removing "Pluto" from the end of the planets array.');
    // TODO #5: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    var index = planets.indexOf("Earth");
    console.log(index);
    console.log('Finding and logging the index of "Earth" in the planets array.');
    // TODO #6: Read the console.log() statement above. Write code to perform the step it describes.

   planets.splice(3, 1)
    console.log('Using splice to remove the planet after "Earth".');
    // TODO #7: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    planets.splice(planets.indexOf("Earth") + 1, 0, "Mars");
        console.log(planets);
        console.log('Using splice to add back the planet after "Earth".');
    // TODO #8: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log(planets.reverse());
    console.log("Reversing the order of the planets array.");
    // TODO #9: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log(planets.sort());
    console.log("Sorting the planets array.");
    // TODO#10: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();


//BONUS: Array Manipulation Optional BONUS Exercise...

// Create a student roster management app. Using the user dialogue functions (alert, confirm, prompt), create an application that will prompt the user to choose from a menu with the following actions: 
//         1) Add a Student 
//         2) Delete a Student 
//         3) view all students in alphabetical order 
//         4) view all students in reverse alphabetical






})();