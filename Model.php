<?php

class Model
{
    // Array to store our key/value data
    private $item = [];

    protected static $table = "";

    //public function __construct() //empty construct
    // {

    // }

    // Magic setter to populate $data array
    public function __set($name, $value)
    {
        // Set the $name key to hold $value in $data
        $this->item[$name] = $value;
    }

    //Madic getter to retrieve values from data
    public function __get($name)
    {
    	//check for existence of array key $name
    	if(array_key_exists($name, $this->item)) { 
    		return $this->item[$name];  //over writes default behavior
    	}
    	return null;
    }

    public static function getTableName()
    {
        return static::$table;
    }

}