<?php

define('DB_HOST', 'localhost');
define('DB_USER', 'sakshisanjaysalokhe');
define('DB_PASS', 'root');
define('DB_NAME', 'wellnowdashboard');

function connect()
{
	$connect = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
	
	if(mysqli_connect_errno($connect))
	{
		die("Failed to connect:". mysqli_connect_error());
	}
	
	mysqli_set_charset($connect, "utf8");
	
	return $connect;
}

$con = connect();

?>