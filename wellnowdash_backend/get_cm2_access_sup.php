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
		$q = "select * from cm2_access where user_id = '$uid'";
		
		$result = mysqli_query($con, $q);
		$row_dash = mysqli_fetch_assoc($result);
		
		$username = $row['fullname'];
		$isActive = $row['isActive'];
		
		$emp[$c]['userid'] = $row_dash['user_id'];
		$emp[$c]['fullname'] = $username;
		$emp[$c]['supervisor_id'] = $sup_id;
		
		$emp[$c]['ilc_pages'] = $row_dash['ilc_pages'];
		$emp[$c]['ilc_completed'] = $row_dash['ilc_completed'];
		$emp[$c]['efts_num'] = $row_dash['efts_num'];
		$emp[$c]['efts_completed'] = $row_dash['efts_completed'];
		$emp[$c]['sc_wcupdates'] = $row_dash['sc_wcupdates'];
		$emp[$c]['sc_wccorr'] = $row_dash['sc_wccorr'];
		$emp[$c]['sc_nfcorr'] = $row_dash['sc_nfcorr'];
		$emp[$c]['sc_to'] = $row_dash['sc_to'];
		$emp[$c]['sc_de'] = $row_dash['sc_de'];
		$emp[$c]['sc_tf'] = $row_dash['sc_tf'];
		$emp[$c]['ccp_total'] = $row_dash['ccp_total'];
		$emp[$c]['ccp_completed'] = $row_dash['ccp_completed'];
		$emp[$c]['iar_nt'] = $row_dash['iar_nt'];
		$emp[$c]['iar_completed'] = $row_dash['iar_completed'];
		$emp[$c]['iar_updates'] = $row_dash['iar_updates'];
		$emp[$c]['iar_completed1'] = $row_dash['iar_completed1'];
		$emp[$c]['wi_tnb'] = $row_dash['wi_tnb'];
		$emp[$c]['wi_addissue'] = $row_dash['wi_addissue'];
		$emp[$c]['wi_worked'] = $row_dash['wi_worked'];
		$emp[$c]['wi_left'] = $row_dash['wi_left'];
		
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