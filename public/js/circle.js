(function() {
    "use strict";


// Exercises

// Please follow the instructions below.

// #1 - Download and save circle.js to the js folder.
// #2 - Create an HTML file named math-js.html.
// #3 - Include circle.js in your HTML with a <script> tag.
// #4 Complete the TODO items in circle.js. View the results in your browser to test for the expected output.
// 

//TO DO ACTIONS:

// create a circle object

    var circle = {
        radius: 5,
        getArea: function () {
            return Math.PI* (circle.radius * circle.radius);
        },
        logInfo: function (doRounding) {

            if (doRounding == true) { 
                console.log(Math.round(circle.getArea()));
                console.log(circle.getArea());
            } else {    
                console.log(circle.getArea());
            }
        }
     };

        //getArea: function (area) { 
// TODO #1: complete this method
            // hint: area = pi * radius^2
            
    

    //console.log(circle.getArea());
   
    
// TODO: #2: return the proper value
    

        
        
    //}
            
// TODO: #3 complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value


console.log("Area of a circle with radius: " + circle.radius + ", is: " + (Math.round(circle.getArea())));
    //     }
    // };

//     #3A: log info about the circle
//     #3B:
        //console.log("Raw circle information");
//     circle.logInfo(false);
//     console.log("Circle information rounded to the nearest whole number");
//     circle.logInfo(true);

//     console.log("=======================================================");
// TODO: #4 - Change the radius of the circle to 5.

//     // #4A - log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();


// Finally, save your work, commit the changes to your git repository, and push to GitHub.

