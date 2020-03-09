<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

$emp = [];
$today = date('Y-m-d');

$user_id = $_GET['user_id'];

$sql1 = "select * from users where user_id = '$user_id'";
if($res1 = mysqli_query($con, $sql1))
{
	$row1 = mysqli_fetch_assoc($res1);
	$dashboards = $row1['dashboards'];
	$sup_id = $user_id;
	
	$emp['dashboards'] = $dashboards;
	$emp['supervisor_id'] = $sup_id;
	
	echo json_encode($emp);
}
else
{
	http_response_code(404);
}

?>