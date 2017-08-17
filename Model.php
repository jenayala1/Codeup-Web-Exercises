<?php
abstract class Model
{
    private $data= [];      // Array to store our key/value data
    protected static $connection = null;      /** @var PDO|null Connection to the database */
    protected $attributes = array();  /** @var array Database values for a single record. Array keys should be column names in the DB */

   protected static function dbConnect() //  * Connect to the DB: This method should be called at the beginning of any function that needs to communicate with the database
   {
       require 'db_connect.php';
       if (!self::$connection) {
               if (! is_null(self::$connection)) {
                   return;
               }
               self::$connection = $connection;
       }
   }
    /**
         * Constructor : An instance of a class derived from Model represents a single record in the database.
         * $param array $attributes Optional array of database values to initialize the model record with*/
        public function __construct(array $attributes = array())
        {
            self::dbConnect();
            $this->attributes = $attributes; // @TODO: Initialize the $attributes property with the passed value
        }

    public function __get($name)
    {
        if(array_key_exists($name, $this->item)) {  //check for existence of array key $name
            return $this->item[$name];  //over writes default behavior
        }
        return null;
    }

    // Magic setter to populate $data array
    public function __set($name, $value)
    {
        $this->item[$name] = $value;      // Set the $name key to hold $value in $data
    }

    /** Store the object in the database */
    public function save()
    {
        if(!empty($this->attributes)) {  // @TODO: Ensure there are values in the attributes array before attempting to save
            if (isset($this->attributes['id'])) {  // @TODO: Call the proper database method: if the `id` is set this is an update, else it is a insert
                $this->update();
            } else {
                $this->insert();
            }
        }
    }

    public function find();

    //  * Insert new entry into database -- NOTE: Because this method is abstract, any child class MUST have it defined.
     protected abstract function insert();



    //  * Update existing entry in database -- NOTE: Because this method is abstract, any child class MUST have it defined.
    protected abstract function update();


public function delete();


    public static function getTableName()
    {
        return static::$table;

    }








}
