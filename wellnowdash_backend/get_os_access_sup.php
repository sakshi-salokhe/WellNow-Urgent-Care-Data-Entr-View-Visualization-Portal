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



$sql = "select * from users where isManager = 0 and dashboards = 2";
if($res = mysqli_query($con, $sql))
{
	$c = 0;
	while($row = mysqli_fetch_assoc($res))
	{
		$uid = $row['user_id'];
		$q = "select * from os_access where user_id = '$uid'";
		
		$result = mysqli_query($con, $q);
		$row_dash = mysqli_fetch_assoc($result);
		
		$username = $row['fullname'];
		$isActive = $row['isActive'];
		
		$emp[$c]['userid'] = $uid;
		$emp[$c]['fullname'] = $username;
		$emp[$c]['supervisor_id'] = $sup_id;
		
		$emp[$c]['RPQ_print_queue_total'] = $row_dash['RPQ_print_queue_total'];
		$emp[$c]['RPQ_num_of_WC'] = $row_dash['RPQ_num_of_WC'];
		$emp[$c]['IL_RCM_Ins'] = $row_dash['IL_RCM_Ins'];
		$emp[$c]['IL_RCM_WC'] = $row_dash['IL_RCM_WC'];
		$emp[$c]['IL_NINS'] = $row_dash['IL_NINS'];
		$emp[$c]['IL_NNF'] = $row_dash['IL_NNF'];
		$emp[$c]['IL_NWC'] = $row_dash['IL_NWC'];
		$emp[$c]['IL_ENL'] = $row_dash['IL_ENL'];
		$emp[$c]['RA_WS_Prof'] = $row_dash['RA_WS_Prof'];
		$emp[$c]['RA_WS_Prof_Day'] = $row_dash['RA_WS_Prof_Day'];
		$emp[$c]['RA_WS_Inst'] = $row_dash['RA_WS_Inst'];
		$emp[$c]['RA_WS_Inst_Day'] = $row_dash['RA_WS_Inst_Day'];
		$emp[$c]['RA_Attachments'] = $row_dash['RA_Attachments'];
		$emp[$c]['WBE_NF_Updates'] = $row_dash['WBE_NF_Updates'];
		$emp[$c]['WBE_WC_Updates'] = $row_dash['WBE_WC_Updates'];
		$emp[$c]['WBE_OS_Email_Inbox'] = $row_dash['WBE_OS_Email_Inbox'];
		$emp[$c]['Coding_FFS_Total'] = $row_dash['Coding_FFS_Total'];
		$emp[$c]['Coding_FFS_On_hold'] = $row_dash['Coding_FFS_On_hold'];
		$emp[$c]['Coding_Coding_Queue'] = $row_dash['Coding_Coding_Queue'];
		$emp[$c]['Coding_Coding_Queue_Days'] = $row_dash['Coding_Coding_Queue_Days'];
		$emp[$c]['Coding_WS_Coding'] = $row_dash['Coding_WS_Coding'];
		$emp[$c]['Coding_FFS_Onhold_Report'] = $row_dash['Coding_FFS_Onhold_Report'];
		
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