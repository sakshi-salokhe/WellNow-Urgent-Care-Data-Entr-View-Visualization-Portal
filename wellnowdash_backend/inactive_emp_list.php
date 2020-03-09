<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

$emp = [];
$sql = "select * from users where isActive = -1 and dashboards != 5 and isManager = 1";
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
		
		
		$dashboardname = $row_dash;
		$emp[$c]['userid'] = $row['user_id'];
		$emp[$c]['$email1'] = $row['email'];
		$emp[$c]['$fullname1'] = $row['fullname'];
		$emp[$c]['$dashboards1'] = $dashboardname;
		$c++;
	}
	echo json_encode($emp);
}
else
{
	http_response_code(404);
}

?>