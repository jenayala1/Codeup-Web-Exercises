(function(){
    "use strict";

// Object Basics Exercises

// #1 - Download objects.js and save it to the js folder.
// #2 - Create an HTML file named objects-intro-js.html.
// #3 - Make sure objects-intro-js.html has a <script> tag for objects.js.
// #4 - Open objects.js in your editor and complete the TODO items in the code.
// #5 - View the results in your browser to test for the expected output.
// #6 Finally, save your work, commit the changes to your git repository, and push to GitHub.

    /**
     * #7 - TODO:
     * Create person object, store it in a variable named person **/
    
   //My Answer:
    //var person = new Object ();
        //console.log("Object name is " + typeof person);

    ///Instructor:
    var person = {};
    
     //* #8 - TODO:
     // * Create firstName and lastName properties in your person object, and
     // * assign your name to them
     // */

    // var person = {};
    //      person.first = "Jennifer";
    //      person.last = "Ayala";
    //      console.log(person);
     
    //console.log("My name is " + person.first + person.last);


    /**
     * #9 - TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */
    
    // var sayHello = "Hello";
    // var person = {}
    //     person.first = "Jennifer";
    //     person.last = "Ayala";
    //     person.sayHello = "Hello from "
    //     return person

    // }
    // console.log(person.first + person.last);

    //Instructor solution:
    // person.sayHello = function () {
    //     return "Hello from " + person.first + " " + person.last;
    // };

    // console.log(person.sayHello());

    /** #10 - TODO: Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much does Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    // var cameron = 180;
    // var ryan = 250;
    // var george = 320;
    // var discountAmount;
    //var finalTotal;

    // if (cameron >200) {
    //     discountAmount = cameron * .1;
    //     finalTotal = cameron - discountAmount;
    //     console.log("Cameron got a discount on " + cameron + " ");
    // } else {
    //     console.log("Cameron paid" + cameron + " and did not have a discount");
    //     finalTotal = cameron;
    // }

    // if (ryan >200) {
    //     discountAmount = ryan * .1;
    //     finalTotal = ryan - discountAmount;
    //     console.log("Ryan got a discount on " + cameron + " ");
    // } else {
    //     console.log("Ryan paid" + cameron + " and did not have a discount");
    //     finalTotal = ryan;
    // }

    // if (george >200) {
    //     discountAmount = ryan * .1;
    //     finalTotal = george - discountAmount;
    //     console.log("George got a discount on " + cameron + " ");
    // } else {
    //     console.log("George paid" + cameron + " and did not have a discount");
    //     finalTotal = george;
    // }
    // var cameron;
    // var ryan;
    // var george;


    // var shoppers = [

    //     {
    //         name: "Cameron", 
    //         amount: 180,
    //     },

    //     {
    //         name: 'Ryan', 
    //         amount: 250,
    //     },

    //     {
    //         name: 'George', 
    //         amount: 320,
    //     },

    //  ];

    // shoppers.forEach(function(elements, index, array) {
    //         console.log(shopper.name);

    // });

//INSTRUCTOR SOLUTION:

// var shoppers = [
//     {name: "Cameron", amount: 180},
//     {name: "Ryan", amount: 180},
//     {name: "George", amount: 320}
// ];

// console.log(shoppers[2].name);

// shoppers.forEach(function(shopper){
//     console.log(shopper.name)
//     console.log(shopprt.amount)
// });

// Working with Arrays Of Objects - Exercises

// #1. Continue working in your object.js file.
// #2. Copy and paste the code below as inline JavaScript and complete the todo items in the code.
// #3. View the results in your browser to test for the expected output.
// #4. Finally, save your work, commit the changes to your git repository, and push to GitHub.


// #5 todo:
// #5A - Create an array of objects that represent books.
    // var title;
    // var author;
    // var first;
    // var last;

 
    var books = [
    {
        num: 1,
        title: "Needful Things",
        author: {
            first: "Stephen",
            last: "King",
        }
    },
    {
        num: 2,
        title: "The Bad Place",
        author: {
            first: "Dean",
            last: "Koontz",
        }
    },
    {
        num: 3,
        title: "Field of Blood",
        author: {
            first: "Denise",
            last: "Mina",
        }
    },
    {
        num: 4,
        title: "It",
        uthor: {
            first: "Stephen",
            last: "King",
        }
    },
    {
        num: 5,
        title: "House of Dolls",
        author: {
            first: "Yehiel",
            last: "De-Nur",
        }
    }

    ]

function logBooks(book.title) {
    console.log("These are a few of my books");
    console.log(books[5]);
    console.log("===========");

}

logBooks();
console.log(books);


// #5B - Each book should have a title and an author property.
// #5C - The author property should be an object with a firstName and lastName.
// #5D - Be creative and add at least 5 books to the array
// var books = [todo];

// #5E - log out the books array
// #5F - console.log(books);

// #6 todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here

console.log("Book #" + num);
console.log("Title: " + title);
console.log("Author: " + first + " " + last);
});
//console.log("---");

//end loop here


//INSTRUCTOR SOLUTION:

var books = [
{
    title: "Title 1",
    author: {
        firstName: "first name 1",
        lastName: "last name 1"
    }

},

{
    title: "Title 2",
    author: {
        firstName: "first name 2",
        lastName: "last name 2"
    }
},

{
    title: "Title 3",
    author: {
        firstName: "first name 3",
        lastName: "last name 3"
    }
},

{
    title: "Title 4",
    author: {
        firstName: "first name 4",
        lastName: "last name 4"
    }
},

{
    title: "Title 5",
    author: {
        firstName: "first name 5",
        lastName: "last name 5"
        } 
}
];

console.log(books);

books.forEach(function(book, index, array) {
    console.log("book #" + (index + 1));
    console.log("title" + book.title);
    console.log("author" + book.author.firstName + " " + book.author.lastName);
    console.log("---");
});




// Bonus Exercises for Objects Lesson

// BONUS 1 (expanding on the books object exercise):

//     Add a property “keywords” that contains an array of possibly genres the book may be categoriezed by
//     Add a boolean property “available” and set it to true
//     Add a dateAvailable property that has a string of the date/time when the book will be available
//     Add a method rent() that... 
//         - changes the available property to false if it is not already false
//         - sets the dateAvailable to a date exactly two weeks from when the rent() method is called 
//         (to do this, research the JS Date object and use methods from it in your code)
//     Add a method returned() that...
//         - changes the available property to true
//         - changes the dateAvailble property to the string “now”


// BONUS 2 (Create a Dog object):

//     The dog object should have properties for: 
//         breed (string), 
//         weightInPounds (number),
//         age (number), 
//         color (string), 
//         steralized (boolean), 
//         shotRecords (array of objects with properties for date and typeOfShot)

//     The dog object should have methods to:
//         bark() - will console.log “Woof!”
//         getOlder() - will increase age by 1
//         fix() - will set sterile to true
//         getShot() - takes in an argument for the name of the shot and adds a new shot with the current date to the shotRecords array

// })();