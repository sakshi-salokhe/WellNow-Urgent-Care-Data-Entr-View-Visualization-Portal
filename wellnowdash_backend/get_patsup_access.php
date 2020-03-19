<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

$emp = [];
$sql = "select * from users where isManager = 1 and dashboards = 4";
if($res = mysqli_query($con, $sql))
{
	$c = 0;
	while($row = mysqli_fetch_assoc($res))
	{
		$uid = $row['user_id'];
		$q = "select * from pat_sup_access where user_id = '$uid'";
		
		$result = mysqli_query($con, $q);
		$row_dash = mysqli_fetch_assoc($result);
		
		$username = $row['fullname'];
		$isActive = $row['isActive'];
		
		$emp[$c]['userid'] = $row_dash['user_id'];
		$emp[$c]['fullname'] = $username;
		
		$emp[$c]['saf_mvp_sod'] = $row_dash['saf_mvp_sod'];
		$emp[$c]['saf_inval_addr_sod'] = $row_dash['saf_inval_addr_sod'];
		$emp[$c]['ash_attachments_sod'] = $row_dash['ash_attachments_sod'];
		$emp[$c]['ash_wc_mailing_sod'] = $row_dash['ash_wc_mailing_sod'];
		$emp[$c]['ash_wc_deleted_sod'] = $row_dash['ash_wc_deleted_sod'];
		$emp[$c]['ash_acc_type_sod'] = $row_dash['ash_acc_type_sod'];
		$emp[$c]['ash_last_addr_sod'] = $row_dash['ash_last_addr_sod'];
		$emp[$c]['bailey_indep_health_sod'] = $row_dash['bailey_indep_health_sod'];
		$emp[$c]['bailey_bcbs_sod'] = $row_dash['bailey_bcbs_sod'];
		$emp[$c]['bailey_emails_sod'] = $row_dash['bailey_emails_sod'];
		$emp[$c]['justin_ndc_num_sod'] = $row_dash['justin_ndc_num_sod'];
		$emp[$c]['justin_medicare_loc_sod'] = $row_dash['justin_medicare_loc_sod'];
		$emp[$c]['justin_medicare_sec_sod'] = $row_dash['justin_medicare_sec_sod'];
		
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