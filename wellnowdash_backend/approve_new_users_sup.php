<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

$emp = [];

$user_id = $_GET['user_id'];

$sql1 = "Select * from users where user_id = '$user_id'";
$res1 = mysqli_query($con, $sql1);
$row1 = mysqli_fetch_assoc($res1);
$dash_num = $row1['dashboards'];
$sup_id = $user_id;

$sql = "select * from users where isActive = 0 AND dashboards = '$dash_num' AND isManager = 0";

if($res = mysqli_query($con, $sql))
{
	$c = 0;
	while($row = mysqli_fetch_assoc($res))
	{
		$dash = $row['dashboards'];
		$q = "select dashboard_name from dashboards where dash_id = '$dash'";
		
		$result = mysqli_query($con, $q);
		$row_dash = mysqli_fetch_assoc($result);
		
		$dashboardname = $row_dash['dashboard_name'];
		$emp[$c]['userid'] = $row['user_id'];
		$emp[$c]['$email1'] = $row['email'];
		$emp[$c]['$fullname1'] = $row['fullname'];
		$emp[$c]['$dashboards1'] = $dashboardname;
		$emp[$c]['$dash'] = $dash;
		$emp[$c]['supervisor_id'] = $sup_id;
		$c++;
	}
	echo json_encode($emp);
}
else
{
	http_response_code(404);
}

?>