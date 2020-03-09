<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

$emp = [];
$sql = "select * from users where isManager = 1 and dashboards = 1";
if($res = mysqli_query($con, $sql))
{
	$c = 0;
	while($row = mysqli_fetch_assoc($res))
	{
		$uid = $row['user_id'];
		$q = "select * from ar_access where user_id = '$uid'";
		
		$result = mysqli_query($con, $q);
		$row_dash = mysqli_fetch_assoc($result);
		
		$username = $row['fullname'];
		$isActive = $row['isActive'];
		
		$emp[$c]['userid'] = $row_dash['user_id'];
		$emp[$c]['fullname'] = $username;
		$emp[$c]['wb_tech_other'] = $row_dash['wb_tech_other'];
		$emp[$c]['wb_demo_elig'] = $row_dash['wb_demo_elig'];
		$emp[$c]['wb_timely_filing'] = $row_dash['wb_timely_filing'];
		$emp[$c]['wb_coding_replies'] = $row_dash['wb_coding_replies'];
		$emp[$c]['wb_sup_reviews'] = $row_dash['wb_sup_reviews'];
		$emp[$c]['wb_nf_corres'] = $row_dash['wb_nf_corres'];
		$emp[$c]['wb_wc_corres'] = $row_dash['wb_wc_corres'];
		$emp[$c]['waystar_medc_sec'] = $row_dash['waystar_medc_sec'];
		$emp[$c]['waystar_oob'] = $row_dash['waystar_oob'];
		$emp[$c]['waystar_fidelis_tf'] = $row_dash['waystar_fidelis_tf'];
		
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