<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

//print_r($_POST);
$postdata = file_get_contents("php://input");
$dets = [];
$today = date("m");
$today_year = date("yy");

if(isset($postdata) && !empty($postdata))
{

	$RPQ_print_queue_total_val = $_POST['RPQ_print_queue_total_val'];
	$RPQ_num_of_WC_val = $_POST['RPQ_num_of_WC_val'];
	$IL_RCM_Ins_val = $_POST['IL_RCM_Ins_val'];
	$IL_RCM_WC_val =$_POST['IL_RCM_WC_val'];
	$IL_NINS_val = $_POST['IL_NINS_val'];
	$IL_NNF_val = $_POST['IL_NNF_val'];
	$IL_NWC_val = $_POST['IL_NWC_val'];
	$IL_ENL_val = $_POST['IL_ENL_val'];
	$RA_WS_Prof_val = $_POST['RA_WS_Prof_val'];
	$RA_WS_Prof_Day_val = $_POST['RA_WS_Prof_Day_val'];
	$RA_WS_Inst_val = $_POST['RA_WS_Inst_val'];
	$RA_WS_Inst_Day_val = $_POST['RA_WS_Inst_Day_val'];
	$RA_Attachments_val = $_POST['RA_Attachments_val'];
	$WBE_NF_Updates_val = $_POST['WBE_NF_Updates_val'];
	$WBE_WC_Updates_val = $_POST['WBE_WC_Updates_val'];
	$WBE_OS_Email_Inbox_val = $_POST['WBE_OS_Email_Inbox_val'];
	$Coding_FFS_Total_val = $_POST['Coding_FFS_Total_val'];
	$Coding_FFS_On_hold_val = $_POST['Coding_FFS_On_hold_val'];
	$Coding_Coding_Queue_val = $_POST['Coding_Coding_Queue_val'];
	$Coding_Coding_Queue_Days_val = $_POST['Coding_Coding_Queue_Days_val'];
	$Coding_WS_Coding_val = $_POST['Coding_WS_Coding_val'];
	$Coding_FFS_Onhold_Report_val = $_POST['Coding_FFS_Onhold_Report_val'];
	
	
	if(empty($RPQ_print_queue_total_val) == False)
	{
		$q1 = "update os_goals set RPQ_print_queue_total = '$RPQ_print_queue_total_val' where when_done = '$today'";
		$r1 = mysqli_query($con, $q1);
	}
	
	if(empty($RPQ_num_of_WC_val) == False)
	{
		$q2 = "update os_goals set RPQ_num_of_WC = '$RPQ_num_of_WC_val' where when_done = '$today'";
		$r2 = mysqli_query($con, $q2);
	}
	
	if(empty($IL_RCM_Ins_val) == False)
	{
		$q3 = "update os_goals set IL_RCM_Ins = '$IL_RCM_Ins_val' where when_done = '$today'";
		$r3 = mysqli_query($con, $q3);
	}
	
	if(empty($IL_RCM_WC_val) == False)
	{
		$q4 = "update os_goals set IL_RCM_WC = '$IL_RCM_WC_val' where when_done = '$today'";
		$r4 = mysqli_query($con, $q4);
	}
	
	if(empty($IL_NINS_val) == False)
	{
		$q5 = "update os_goals set IL_NINS = '$IL_NINS_val' where when_done = '$today'";
		$r5 = mysqli_query($con, $q5);
	}
	
	if(empty($IL_NNF_val) == False)
	{
		$q6 = "update os_goals set IL_NNF = '$IL_NNF_val' where when_done = '$today'";
		$r6 = mysqli_query($con, $q6);
	}
	
	if(empty($IL_NWC_val) == False)
	{
		$q7 = "update os_goals set IL_NWC = '$IL_NWC_val' where when_done = '$today'";
		$r7 = mysqli_query($con, $q7);
	}
	
	if(empty($IL_ENL_val) == False)
	{
		$q8 = "update os_goals set IL_ENL = '$IL_ENL_val' where when_done = '$today'";
		$r8 = mysqli_query($con, $q8);
	}
	
	if(empty($RA_WS_Prof_val) == False)
	{
		$q9 = "update os_goals set RA_WS_Prof = '$RA_WS_Prof_val' where when_done = '$today'";
		$r9 = mysqli_query($con, $q9);
	}
	
	if(empty($RA_WS_Prof_Day_val) == False)
	{
		$q10 = "update os_goals set RA_WS_Prof_Day = '$RA_WS_Prof_Day_val' where when_done = '$today'";
		$r10 = mysqli_query($con, $q10);
	}
	
	if(empty($RA_WS_Inst_val) == False)
	{
		$q10 = "update os_goals set RA_WS_Inst = '$RA_WS_Inst_val' where when_done = '$today'";
		$r10 = mysqli_query($con, $q10);
	}
	
	if(empty($RA_WS_Inst_Day_val) == False)
	{
		$q10 = "update os_goals set RA_WS_Inst_Day = '$RA_WS_Inst_Day_val' where when_done = '$today'";
		$r10 = mysqli_query($con, $q10);
	}
	
	if(empty($RA_Attachments_val) == False)
	{
		$q10 = "update os_goals set RA_Attachments = '$RA_Attachments_val' where when_done = '$today'";
		$r10 = mysqli_query($con, $q10);
	}
	
	if(empty($WBE_NF_Updates_val) == False)
	{
		$q10 = "update os_goals set WBE_NF_Updates = '$WBE_NF_Updates_val' where when_done = '$today'";
		$r10 = mysqli_query($con, $q10);
	}
	
	if(empty($WBE_WC_Updates_val) == False)
	{
		$q10 = "update os_goals set WBE_WC_Updates = '$WBE_WC_Updates_val' where when_done = '$today'";
		$r10 = mysqli_query($con, $q10);
	}
	
	if(empty($WBE_OS_Email_Inbox_val) == False)
	{
		$q10 = "update os_goals set WBE_OS_Email_Inbox = '$WBE_OS_Email_Inbox_val' where when_done = '$today'";
		$r10 = mysqli_query($con, $q10);
	}
	
	if(empty($Coding_FFS_Total_val) == False)
	{
		$q10 = "update os_goals set Coding_FFS_Total = '$Coding_FFS_Total_val' where when_done = '$today'";
		$r10 = mysqli_query($con, $q10);
	}
	
	if(empty($Coding_FFS_On_hold_val) == False)
	{
		$q10 = "update os_goals set Coding_FFS_On_hold = '$Coding_FFS_On_hold_val' where when_done = '$today'";
		$r10 = mysqli_query($con, $q10);
	}
	
	if(empty($Coding_Coding_Queue_val) == False)
	{
		$q10 = "update os_goals set Coding_Coding_Queue = '$Coding_Coding_Queue_val' where when_done = '$today'";
		$r10 = mysqli_query($con, $q10);
	}
	
	if(empty($Coding_Coding_Queue_Days_val) == False)
	{
		$q10 = "update os_goals set Coding_Coding_Queue_Days = '$Coding_Coding_Queue_Days_val' where when_done = '$today'";
		$r10 = mysqli_query($con, $q10);
	}
	
	if(empty($Coding_WS_Coding_val) == False)
	{
		$q10 = "update os_goals set Coding_WS_Coding = '$Coding_WS_Coding_val' where when_done = '$today'";
		$r10 = mysqli_query($con, $q10);
	}
	
	if(empty($Coding_FFS_Onhold_Report_val) == False)
	{
		$q10 = "update os_goals set Coding_FFS_Onhold_Report = '$Coding_FFS_Onhold_Report_val' where when_done = '$today'";
		$r10 = mysqli_query($con, $q10);
	}
	
	$dets['entered'] = 1;
	echo json_encode($dets);
}	

?>