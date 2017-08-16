<?php

class Datastore
{
    // Array to store our key/value data
    private $data = [];

    //public function __construct() //empty construct
    // {

    // }

    // Magic setter to populate $data array
    public function __set($name, $value)
    {
        // Set the $name key to hold $value in $data
        $this->data[$name] = $value;
    }

    //Madic getter to retrieve values from data
    public function __get($name)
    {
    	//check for existence of array key $name
    	if(array_key_exists($name, $this->data)) { 
    		return $this->data[$name];  //over writes default behavior
    	}
    	return null;
    }

}