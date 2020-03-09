<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

$userid = $_GET['userid'];

$sql = "update users set isActive = 1 where user_id = '$userid' limit 1";

if(mysqli_query($con, $sql))
{
	http_response_code(204);
}
else
{
	http_response_code(422);
}

?>