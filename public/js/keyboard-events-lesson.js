//Keyboard Events Lesson Notes

// ------ Curriculum Exercises---------------//

// The Konami Code was a cheat code that appeared on a number of games from Konami. Contra was one of the early NES games to have featured the Konami Code. 
// Contra would start you on 3 lives per game but after the start screen if you entered the Konami Code you would get 30 lives on Contra!
// The Konami Code: Up, Up, Down, Down, Left, Right, Left, Right, B, A ( ↑ ↑ ↓ ↓ ← → ← → B A )

//---- #1 --- Create a file named konami.html using the template below. 
//---- This code will log a number reference that is tied to each key that is entered on your keyboard. 
//---- Open the console and view the output as you type on the keyboard.

<!DOCTYPE html>
<html>
<head>
    <title>Konami Code</title>
</head>
<body>
    <h1>Konami Code</h1>

    <script src="/js/jquery.js"></script>
    <script>
        "use strict";

        $(document).keyup(function(event){
            console.log(event.keyCode);
        });
    </script>
</body>
</html>

//---- #3 --- Allow the user to enter the Konami Code: "↑ ↑ ↓ ↓ ← → ← → b a enter" (the return key)

//---- #4 --- Find the matching sequence using the code above for each key in the Konami Code.
//---- Don't worry about capital a or b just check for lowercase.

//---- #5 --- After the correct Konami Code sequence is inputted then the enter key have the script alert the user: "You have added 30 lives! Other ideas:
//---- 		--- Change the background screen.
//----		--- Play a sound.
//----		--- Be creative!
//----		--- Happy Playing.

