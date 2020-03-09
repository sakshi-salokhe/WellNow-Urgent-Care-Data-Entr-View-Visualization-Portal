<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

$emp = [];
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
	$userid = $_POST['userid'];
	$fullname = $_POST['fullname'];
	$email = $_POST['email'];
	$dashboard = $_POST['dashboards'];
	
	$q1 = "update users set fullname = '$fullname', email = '$email', dashboards = '$dashboard' where user_id = '$userid'";
	if(mysqli_query($con, $q1))
	{
		$dets['done'] = 1;
		echo json_encode($dets);
	}
	else
	{
		$dets['done'] = 0;
		echo json_encode($dets);
	}
}
?>