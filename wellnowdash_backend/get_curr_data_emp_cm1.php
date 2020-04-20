<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

$emp = [];
$today = date('Y-m-d');
$dashboards = $_GET['dashboards'];
$user_id = $_GET['user_id'];

if($dashboards == '7' or $dashboards ==7)
{
	$sql = "select * from cm1_data where when_done = '$today'";
	if($res = mysqli_query($con, $sql))
	{
		$c = 0;
		while($row = mysqli_fetch_assoc($res))
		{
			$emp[$c]['id'] = $row['cm1_id'];
			$emp[$c]['user_id'] = $user_id;
			$emp[$c]['when_done'] = $row['when_done'];
			
			$emp[$c]['un_total'] = $row['un_total'];
			$emp[$c]['un_worked'] = $row['un_worked'];
			$emp[$c]['dtr_tw'] = $row['dtr_tw'];
			$emp[$c]['dtr_issuelog'] = $row['dtr_issuelog'];
			$emp[$c]['prw_total'] = $row['prw_total'];
			$emp[$c]['prw_worked'] = $row['prw_worked'];
			$emp[$c]['prw_left'] = $row['prw_left'];
			$emp[$c]['ncoa_refund'] = $row['ncoa_refund'];
			$emp[$c]['ncoa_updates'] = $row['ncoa_updates'];
			$emp[$c]['ncoa_skiptrace'] = $row['ncoa_skiptrace'];

			$c++;
		}
		
		
		echo json_encode($emp);
	}
}
else
{
	http_response_code(404);
}


?>