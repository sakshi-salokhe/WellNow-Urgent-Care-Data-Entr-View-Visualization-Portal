<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

$userid = $_GET['userid'];

$sql1 = "Select * from users where user_id = '$userid' limit 1";
$res1 = mysqli_query($con, $sql1);
$row1 = mysqli_fetch_assoc($res1);
$dashid = $row1['dashboards'];

$sql = "delete from users where user_id = '$userid' limit 1";
$res = mysqli_query($con, $sql);


if($dashid == 1 or $dashid == '1')
{
	$sql2 = "delete from ar_access where user_id = '$userid' limit 1";
	if(mysqli_query($con, $sql2))
	{
		http_response_code(204);
	}
	else
	{
		http_response_code(422);
	}
}
else if($dashid == 2 or $dashid == '2')
{
	$sql2 = "delete from os_access where user_id = '$userid' limit 1";
	if(mysqli_query($con, $sql2))
	{
		http_response_code(204);
	}
	else
	{
		http_response_code(422);
	}
}
else if($dashid == 3 or $dashid == '3')
{
	$sql2 = "delete from om_access where user_id = '$userid' limit 1";
	if(mysqli_query($con, $sql2))
	{
		http_response_code(204);
	}
	else
	{
		http_response_code(422);
	}
}
else if($dashid == 4 or $dashid == '4')
{
	$sql2 = "delete from pat_support where user_id = '$userid' limit 1";
	if(mysqli_query($con, $sql2))
	{
		http_response_code(204);
	}
	else
	{
		http_response_code(422);
	}
}



?>