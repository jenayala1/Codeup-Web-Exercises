<?php

class Father
{
    protected static $name = 'Darth Vader';

    public static function getName() 
    {
        return self::$name; //self refers to the parent class , 
        //return static::$name; replace self with static if allowing classes to over write static properties
    }
}