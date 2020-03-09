<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

$emp = [];

$user_id = $_GET['user_id'];

$q1 = "select * from users where user_id = '$user_id'";

if($res1 = mysqli_query($con, $q1))
{
	$row1 = mysqli_fetch_assoc($res1);

	$dashboards = $row1['dashboards'];

	$emp['user_id'] = $user_id;
	$emp['dashboards'] = $dashboards;

	echo json_encode($emp);
}
else
{
	http_response_code(404);
}


?>