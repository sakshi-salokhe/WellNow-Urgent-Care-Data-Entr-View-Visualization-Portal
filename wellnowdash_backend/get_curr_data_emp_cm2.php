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
	$sql = "select * from cm2_data where when_done = '$today'";
	if($res = mysqli_query($con, $sql))
	{
		$c = 0;
		while($row = mysqli_fetch_assoc($res))
		{
			$emp[$c]['id'] = $row['cm2_id'];
			$emp[$c]['user_id'] = $user_id;
			$emp[$c]['when_done'] = $row['when_done'];
			
			$emp[$c]['ilc_pages'] = $row['ilc_pages'];
			$emp[$c]['ilc_completed'] = $row['ilc_completed'];
			$emp[$c]['efts_num'] = $row['efts_num'];
			$emp[$c]['efts_completed'] = $row['efts_completed'];
			$emp[$c]['sc_wcupdates'] = $row['sc_wcupdates'];
			$emp[$c]['sc_wccorr'] = $row['sc_wccorr'];
			$emp[$c]['sc_nfcorr'] = $row['sc_nfcorr'];
			$emp[$c]['sc_to'] = $row['sc_to'];
			$emp[$c]['sc_de'] = $row['sc_de'];
			$emp[$c]['sc_tf'] = $row['sc_tf'];
			$emp[$c]['ccp_total'] = $row['ccp_total'];
			$emp[$c]['ccp_completed'] = $row['ccp_completed'];
			$emp[$c]['iar_nt'] = $row['iar_nt'];
			$emp[$c]['iar_completed'] = $row['iar_completed'];
			$emp[$c]['iar_updates'] = $row['iar_updates'];
			$emp[$c]['iar_completed1'] = $row['iar_completed1'];
			$emp[$c]['wi_tnb'] = $row['wi_tnb'];
			$emp[$c]['wi_addissue'] = $row['wi_addissue'];
			$emp[$c]['wi_worked'] = $row['wi_worked'];
			$emp[$c]['wi_left'] = $row['wi_left'];

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