<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

$postdata = file_get_contents("php://input");
$dets = [];

if(isset($postdata) && !empty($postdata))
{
	$uid = $_POST['userid'];
	
	if($_POST['RPQ_print_queue_total'] == 'true' or $_POST['RPQ_print_queue_total'] == 'on')
	{
		$RPQ_print_queue_total = 1;
	}
	else
	{
		$RPQ_print_queue_total = 0;
	}
	
	if($_POST['RPQ_num_of_WC'] == 'true' or $_POST['RPQ_num_of_WC'] == 'on')
	{
		$RPQ_num_of_WC = 1;
	}
	else
	{
		$RPQ_num_of_WC = 0;
	}
	
	if($_POST['IL_RCM_Ins'] == 'true' or $_POST['IL_RCM_Ins'] == 'on')
	{
		$IL_RCM_Ins = 1;
	}
	else
	{
		$IL_RCM_Ins = 0;
	}
	
	if($_POST['IL_RCM_WC'] == 'true' or $_POST['IL_RCM_WC'] == 'on')
	{
		$IL_RCM_WC = 1;
	}
	else
	{
		$IL_RCM_WC = 0;
	}
	
	if($_POST['IL_NINS'] == 'true' or $_POST['IL_NINS'] == 'on')
	{
		$IL_NINS = 1;
	}
	else
	{
		$IL_NINS = 0;
	}
	
	if($_POST['IL_NNF'] == 'true' or $_POST['IL_NNF'] == 'on')
	{
		$IL_NNF = 1;
	}
	else
	{
		$IL_NNF = 0;
	}
	
	if($_POST['IL_NWC'] == 'true' or $_POST['IL_NWC'] == 'on')
	{
		$IL_NWC = 1;
	}
	else
	{
		$IL_NWC = 0;
	}
	
	if($_POST['IL_ENL'] == 'true' or $_POST['IL_ENL'] == 'on')
	{
		$IL_ENL = 1;
	}
	else
	{
		$IL_ENL = 0;
	}
	
	if($_POST['RA_WS_Prof'] == 'true' or $_POST['RA_WS_Prof'] == 'on')
	{
		$RA_WS_Prof = 1;
	}
	else
	{
		$RA_WS_Prof = 0;
	}
	
	if($_POST['RA_WS_Prof_Day'] == 'true' or $_POST['RA_WS_Prof_Day'] == 'on')
	{
		$RA_WS_Prof_Day = 1;
	}
	else
	{
		$RA_WS_Prof_Day = 0;
	}
	
	if($_POST['RA_WS_Inst'] == 'true' or $_POST['RA_WS_Inst'] == 'on')
	{
		$RA_WS_Inst = 1;
	}
	else
	{
		$RA_WS_Inst = 0;
	}
	
	if($_POST['RA_WS_Inst_Day'] == 'true' or $_POST['RA_WS_Inst_Day'] == 'on')
	{
		$RA_WS_Inst_Day = 1;
	}
	else
	{
		$RA_WS_Inst_Day = 0;
	}
	
	if($_POST['RA_Attachments'] == 'true' or $_POST['RA_Attachments'] == 'on')
	{
		$RA_Attachments = 1;
	}
	else
	{
		$RA_Attachments = 0;
	}
	
	if($_POST['WBE_NF_Updates'] == 'true' or $_POST['WBE_NF_Updates'] == 'on')
	{
		$WBE_NF_Updates = 1;
	}
	else
	{
		$WBE_NF_Updates = 0;
	}
	
	if($_POST['WBE_WC_Updates'] == 'true' or $_POST['WBE_WC_Updates'] == 'on')
	{
		$WBE_WC_Updates = 1;
	}
	else
	{
		$WBE_WC_Updates = 0;
	}
	
	if($_POST['WBE_OS_Email_Inbox'] == 'true' or $_POST['WBE_OS_Email_Inbox'] == 'on')
	{
		$WBE_OS_Email_Inbox = 1;
	}
	else
	{
		$WBE_OS_Email_Inbox = 0;
	}
	
	if($_POST['Coding_FFS_Total'] == 'true' or $_POST['Coding_FFS_Total'] == 'on')
	{
		$Coding_FFS_Total = 1;
	}
	else
	{
		$Coding_FFS_Total = 0;
	}
	
	if($_POST['Coding_FFS_On_hold'] == 'true' or $_POST['Coding_FFS_On_hold'] == 'on')
	{
		$Coding_FFS_On_hold = 1;
	}
	else
	{
		$Coding_FFS_On_hold = 0;
	}
	
	if($_POST['Coding_Coding_Queue'] == 'true' or $_POST['Coding_Coding_Queue'] == 'on')
	{
		$Coding_Coding_Queue = 1;
	}
	else
	{
		$Coding_Coding_Queue = 0;
	}
	
	if($_POST['Coding_Coding_Queue_Days'] == 'true' or $_POST['Coding_Coding_Queue_Days'] == 'on')
	{
		$Coding_Coding_Queue_Days = 1;
	}
	else
	{
		$Coding_Coding_Queue_Days = 0;
	}
	
	if($_POST['Coding_WS_Coding'] == 'true' or $_POST['Coding_WS_Coding'] == 'on')
	{
		$Coding_WS_Coding = 1;
	}
	else
	{
		$Coding_WS_Coding = 0;
	}
	
	if($_POST['Coding_FFS_Onhold_Report'] == 'true' or $_POST['Coding_FFS_Onhold_Report'] == 'on')
	{
		$Coding_FFS_Onhold_Report = 1;
	}
	else
	{
		$Coding_FFS_Onhold_Report = 0;
	}
	
	$query = "update os_access set RPQ_print_queue_total = '$RPQ_print_queue_total', RPQ_num_of_WC = '$RPQ_num_of_WC', IL_RCM_Ins = '$IL_RCM_Ins', IL_RCM_WC = '$IL_RCM_WC', IL_NINS = '$IL_NINS', IL_NNF = '$IL_NNF', IL_NWC = '$IL_NWC', IL_ENL = '$IL_ENL', RA_WS_Prof = '$RA_WS_Prof', RA_WS_Prof_Day = '$RA_WS_Prof_Day', RA_WS_Inst = '$RA_WS_Inst', RA_WS_Inst_Day = '$RA_WS_Inst_Day', RA_Attachments = '$RA_Attachments', WBE_NF_Updates = '$WBE_NF_Updates', WBE_WC_Updates = '$WBE_WC_Updates', WBE_OS_Email_Inbox = '$WBE_OS_Email_Inbox', Coding_FFS_Total = '$Coding_FFS_Total', Coding_FFS_On_hold = '$Coding_FFS_On_hold', Coding_Coding_Queue = '$Coding_Coding_Queue', Coding_Coding_Queue_Days = '$Coding_Coding_Queue_Days', Coding_WS_Coding = '$Coding_WS_Coding', Coding_FFS_Onhold_Report = '$Coding_FFS_Onhold_Report' where user_id = '$uid'";
	
	if (mysqli_query($con, $query))
	{
		$dets['done'] = true;
		$dets['uid'] = $uid;
		
		echo json_encode($dets);
		http_response_code(200);
	}
	else
	{
		$dets['done'] = false;
		$dets['uid'] = $uid;
		
		echo json_encode($dets);
		http_response_code(422);
	}
}
?>