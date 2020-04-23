<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

$emp = [];

$sup_id = $_GET['sup_id'];

$sql1 = "select * from users where user_id = '$sup_id'";
$res1 = mysqli_query($con, $sql1);
$row1 = mysqli_fetch_assoc($res1);
$dashboards = $row1['dashboards'];

$sql = "select * from users where isManager = 0 and dashboards = 7";
if($res = mysqli_query($con, $sql))
{
	$c = 0;
	while($row = mysqli_fetch_assoc($res))
	{
		$uid = $row['user_id'];
		$q = "select * from cm1_access where user_id = '$uid'";
		
		$result = mysqli_query($con, $q);
		$row_dash = mysqli_fetch_assoc($result);
		
		$username = $row['fullname'];
		$isActive = $row['isActive'];
		
		$emp[$c]['userid'] = $row_dash['user_id'];
		$emp[$c]['fullname'] = $username;
		$emp[$c]['supervisor_id'] = $sup_id;
		
		$emp[$c]['un_total'] = $row_dash['un_total'];
		$emp[$c]['un_worked'] = $row_dash['un_worked'];
		$emp[$c]['dtr_tw'] = $row_dash['dtr_tw'];
		$emp[$c]['dtr_issuelog'] = $row_dash['dtr_issuelog'];
		$emp[$c]['prw_total'] = $row_dash['prw_total'];
		$emp[$c]['prw_worked'] = $row_dash['prw_worked'];
		$emp[$c]['prw_left'] = $row_dash['prw_left'];
		$emp[$c]['ncoa_refund'] = $row_dash['ncoa_refund'];
		$emp[$c]['ncoa_updates'] = $row_dash['ncoa_updates'];
		$emp[$c]['ncoa_skiptrace'] = $row_dash['ncoa_skiptrace'];
		
		$emp[$c]['isActive'] = $isActive;
		
		$c++;
	}
	echo json_encode($emp);
}
else
{
	http_response_code(404);
}

?>