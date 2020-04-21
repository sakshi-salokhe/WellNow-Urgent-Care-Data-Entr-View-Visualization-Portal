<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

$emp = [];
$user_id = $_GET['user_id'];

$sql1 = "select * from users where user_id = '$user_id'";
$res1 = mysqli_query($con, $sql1);
$row1 = mysqli_fetch_assoc($res1);
$dash = $row1['dashboards'];
$sup_id = $user_id;

$sql = "select * from users where isActive = 1 and dashboards = '$dash' and isManager = 0";
if($res = mysqli_query($con, $sql))
{
	$c = 0;
	while($row = mysqli_fetch_assoc($res))
	{
		$dash = $row['dashboards'];
		
		if($dash == 1 or $dash == '1')
		{
			$row_dash = 'AR Dashboard';
		}
		else if($dash == 2 or $dash == '2')
		{
			$row_dash = 'OS Dashboard';
		}
		else if($dash == 3 or $dash == '3')
		{
			$row_dash = 'OM Dashboard';
		}
		else if($dash == 4 or $dash == '4')
		{
			$row_dash = 'Patient Support Dashboard';
		}
		else if($dash == 7 or $dash == '7')
		{
			$row_dash = 'Cash Mail Management Dashboard';
		}
		
		$dashboardname = $row_dash;
		$emp[$c]['userid'] = $row['user_id'];
		$emp[$c]['$email1'] = $row['email'];
		$emp[$c]['$fullname1'] = $row['fullname'];
		$emp[$c]['$dashboards1'] = $dashboardname;
		$emp[$c]['$supervisor_id'] = $sup_id;
		$c++;
	}
	echo json_encode($emp);
}
else
{
	http_response_code(404);
}

?>