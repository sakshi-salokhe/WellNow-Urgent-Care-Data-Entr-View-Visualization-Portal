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



$sql = "select * from users where isManager = 0 and dashboards = 3";
if($res = mysqli_query($con, $sql))
{
	$c = 0;
	while($row = mysqli_fetch_assoc($res))
	{
		$uid = $row['user_id'];
		$q = "select * from om_access where user_id = '$uid'";
		
		$result = mysqli_query($con, $q);
		$row_dash = mysqli_fetch_assoc($result);
		
		$username = $row['fullname'];
		$isActive = $row['isActive'];
		
		$emp[$c]['userid'] = $row_dash['user_id'];
		$emp[$c]['fullname'] = $username;
		$emp[$c]['supervisor_id'] = $sup_id;
		
		$emp[$c]['support_sp'] = $row_dash['support_sp'];
		$emp[$c]['support_enl'] = $row_dash['support_enl'];
		$emp[$c]['support_dnu'] = $row_dash['support_dnu'];
		$emp[$c]['support_nyucp'] = $row_dash['support_nyucp'];
		$emp[$c]['support_nom'] = $row_dash['support_nom'];
		$emp[$c]['support_emails'] = $row_dash['support_emails'];
		$emp[$c]['support_deposit_pulls'] = $row_dash['support_deposit_pulls'];
		$emp[$c]['support_blank_batch_corres'] = $row_dash['support_blank_batch_corres'];
		$emp[$c]['support_correspondence'] = $row_dash['support_correspondence'];
		$emp[$c]['support_acct_audits'] = $row_dash['support_acct_audits'];
		$emp[$c]['support_inv_correct'] = $row_dash['support_inv_correct'];
		$emp[$c]['support_phone'] = $row_dash['support_phone'];
		$emp[$c]['support_inv_addr'] = $row_dash['support_inv_addr'];
		$emp[$c]['support_collects'] = $row_dash['support_collects'];
		$emp[$c]['suport_medical_records'] = $row_dash['suport_medical_records'];
		
		$emp[$c]['coding_na'] = $row_dash['coding_na'];
		$emp[$c]['coding_on_holds'] = $row_dash['coding_on_holds'];
		$emp[$c]['coding_coding_queue'] = $row_dash['coding_coding_queue'];
		$emp[$c]['coding_onsites'] = $row_dash['coding_onsites'];
		$emp[$c]['coding_ooa'] = $row_dash['coding_ooa'];
		
		$emp[$c]['ar120'] = $row_dash['ar120'];
		$emp[$c]['ar_120percent'] = $row_dash['ar_120percent'];
		$emp[$c]['ar_90'] = $row_dash['ar_90'];
		$emp[$c]['ar_voicemails'] = $row_dash['ar_voicemails'];
		$emp[$c]['ar_unapplied'] = $row_dash['ar_unapplied'];
		$emp[$c]['ar_audit'] = $row_dash['ar_audit'];
		$emp[$c]['ar_wbs'] = $row_dash['ar_wbs'];
		
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