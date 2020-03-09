<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

$emp = [];
$today = date("m");
$today_year = date("yy");

$sql1 = "select * from ar_goals where when_done = '$today' and when_done_year = '$today_year'";

$result1 = mysqli_query($con,$sql1);
$row1 = mysqli_fetch_array($result1);
$count = mysqli_num_rows($result1);



if($count > 0)
{
	$emp['ans_val'] = 1;
	$emp['ans'] = "exists";
	$emp['text'] = "data present. do update";
	
	echo json_encode($emp);
}
else
{
	$emp['ans_val'] = 0;
	$emp['ans'] = "no data";
	$emp['text'] = "data not present. do insert";
	
	echo json_encode($emp);
}

?>