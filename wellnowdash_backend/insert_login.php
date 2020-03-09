<?php

header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

//print_r($_POST);
$postdata = file_get_contents("php://input");
$dets = [];

if(isset($postdata) && !empty($postdata))
{
	$email = $_POST['email'];
	$password1 = md5($_POST['password1']);
	
	
	$sql = "select * from users where email='$email' and password1='$password1'";
	$result = mysqli_query($con,$sql);
    $row = mysqli_fetch_array($result);
	
	
	$active = $row['isActive'];
	$dashboard = $row['dashboards'];
	$user_id = $row['user_id'];
	$isManager = $row['isManager'];
	
	$count = mysqli_num_rows($result);
	
	
	if($count == 1 and $active == 1 and $dashboard != 5) 
	{
        $dets['logged'] = true;
		$dets['dash'] = $dashboard;
		$dets['user_id'] = $user_id;
		$dets['isManager'] = $isManager;
		echo json_encode($dets);
		http_response_code(200);
	}
	else if($count == 1 and $active == 1 and $dashboard == 5) 
	{
        $dets['logged'] = true;
		$dets['dash'] = $dashboard;
		$dets['user_id'] = $user_id;
		$dets['isManager'] = $isManager;
		echo json_encode($dets);
		http_response_code(200);
	}
	else if($count == 1 and $active == 0 and $dashboard != 5) 
	{
        $dets['logged'] = false;
		$dets['dash'] = $dashboard;
		$dets['user_id'] = $user_id;
		$dets['isManager'] = $isManager;
		echo json_encode($dets);
		http_response_code(200);
	}
	else
	{
        $dets['logged'] = false;
		$dets['dash'] = "-1";
		$dets['user_id'] = $user_id;
		$dets['isManager'] = "-1";
		echo json_encode($dets);
	}

}

?>