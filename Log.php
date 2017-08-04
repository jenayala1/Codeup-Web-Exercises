<?php

class Log
{
	public $filename;
	public $handle;
	public $prefix;


	public function __construct($prefix="log")
	{
		$this->prefix = $prefix;
	}

	public function append($filename, $stringToWrite)
	{
		$handle = fopen($filename, 'a');
    	fwrite($handle, $stringToWrite . PHP_EOL);
    	fclose($handle);
	}
	

	public function logMessage($logLevel, $message)
	{
		$filename = "log" . date('Y-m-d') . ".log";
		$stringToWrite = date('Y-m-d H:i:s') . "[" . $logLevel . "]" . $message . PHP_EOL;
		$this->append($filename, $stringToWrite);

	} 

	public function info($message)
	{
		  $this->logMessage("INFO", $message);
	}

	public function error($message)
	{
		$this->logMessage("ERROR", $message);
	}

	public function __destruct()
	{
		fclose($handle);
	}

}