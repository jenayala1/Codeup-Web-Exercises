<!-- $_SESSION

sessions live on the server - predefined functions, temporarily stores data on the server(i.e. keep me logged in for 2 weeks), 
// the session is tied to the cookie

Sessions in "real" life:
- stuff in a shopping cart 
- when open gmail & already logged in
- open facebook & alredy logged in
- bank website says "you've gone 5 mins w/o activity"
 -->

 <?php
//Will be nested inside the page controller
 session_start();
 //starts a new session or picks up where left off, 
 //superglobal is not accessible before the session starts/runs, only need one at the top of the script

 $sessionId = session_id();
 //obtains a unique identifier associated to the session, not required-generally used to check the ID

 $viewCount = isset($_SESSION['view_count']) ? $_SESSION['view_count'] : 0;
 //initialize a view count variable, gets the key & assign it to the variable

 $viewCount++;
 //increments the counter - each time the page is loaded, even if the browser is closed & reopened without having to reintialize

 $_SESSION['view_count'] = $viewCount;
 //stores the new value to the key in the session - writing to the session

 
if(isset($_GET['logout'])) {
	logout();
	header("Location:sessions-lesson.php");
	die();
}


 function logout()
 {
 	//need all 3 to stop the session, clear the data & erase session data:
 	session_unset(); //clears the session
 	
 	session_regenerate_id(true); //destroys the data & erasing the session data from server
 	session_destroy(); //stops the session from running
 	session_start(); //start a new session
 }

 ?>

 <!DOCTYPE html>
<html>
	<head>
		<title>Session Example</title>
	</head>
	<body>
		<ul>
			<li>Session ID: <?=$sessionId; ?></li>
			<li>View Count: <?=$viewCount; ?></li>
		</ul>
		<form method="GET">
			<button name="logout" value="yes">logout</button>

		</form>
	</body>
</html>


