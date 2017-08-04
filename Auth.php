<?php

/**
 * A utility class for handling common authorization tasks
 */
class Auth
{
    /** @var string a hash of the string 'password' */
    public static $password = '$2y$10$SLjwBwdOVvnMgWxvTI4Gb.YVcmDlPTpQystHMO2Kfyi/DS8rgA0Fm';
    public static $username = 'guest';

    /**
     * Attempt to log in
     *
     * A login attempt is successful if the passed username matches the static
     * username property and the passed password is verified against the hash in
     * the static password property
     *
     * On a successful attempt, will set the 'LOGGED_IN_USER' key in the session
     *
     * Will log all attempts using an instance of the Log class
     *
     * @param string $username the username to check
     * @param string $password the password to check
     */



    public static function attempt($username, $password)
    {
       
        if

        // TODO: check if the passed username matches the static username
        //       property

        // TODO: use the `password_verify` function to check if the passed
        //       password matches the static password property
        // TODO: create an instance of the Log class to log a message of whether
        //       or not the login attempt was successful or not
        // TODO: if the username and password match, set the 'LOGGED_IN_USER'
        //       key in the session to the passed username
    }

    public static function pasword_verify($password)
    {
        if (!empty($_REQUEST)) {
            if ($username == "guest" && $password == $_REQUEST[$key]) {
                $_SESSION['logged-in-user'] = $username;
                header("Location:/authorized.php");
                die(); 
        
            } else {
                echo $message = "Invalid Login";
            }
        }
    }

    /**
     * Check whether the user is logged in or not
     *
     * @return bool whether or not the user is logged in
     */
    public static function check()
    {

        if(isset($_SESSION['logged_in_user'])) {
            header("Location: authorized.php");
            return true;
            die();
        } else {
            return false;
            echo "Please login";

        }
        // TODO: return a boolean value based on whether or not the
        //       'LOGGED_IN_USER' key is present in the session
    }

    /**
     * Get the currently logged in user
     *
     * @return string|null
     */
    public static function user()
    {
        $username = (isset($_REQUEST['username'])) ? $_REQUEST['username'] : "undefined";
        $password = (isset($_REQUEST['password'])) ? $_REQUEST['password'] : "undefined";
        $message = "";

        $data = [
            'username' => $username,
            'password' => $password,
            'message' => $message
        ];  

        // TODO: return the value associated with the 'LOGGED_IN_USER' key in
        //       the session, or null if it is not set
    }

    /**
     * Log the user out of the applicaiton by recreating the session
     */
    public static function logout()
    {
        // TODO: destroy and re-create the session
        session_unset(); //clears the session
        session_regenerate_id(true); //destroys the data & erasing the session data from server
        session_destroy(); //stops the session from running
        session_start(); //start a new session
    }

 
}
