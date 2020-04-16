<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

//print_r($_POST);
$postdata = file_get_contents("php://input");
$dets = [];
$today = date("Y-m-d");

if(isset($postdata) && !empty($postdata))
{
	$ilc_pages_val = $_POST['ilc_pages_val'];
	$ilc_completed_val = $_POST['ilc_completed_val'];
	$efts_num_val = $_POST['efts_num_val'];
	$efts_completed_val = $_POST['efts_completed_val'];
	$sc_wcupdates_val = $_POST['sc_wcupdates_val'];
	$sc_wccorr_val = $_POST['sc_wccorr_val'];
	$sc_nfcorr_val = $_POST['sc_nfcorr_val'];
	$sc_to_val = $_POST['sc_to_val'];
	$sc_de_val = $_POST['sc_de_val'];
	$sc_tf_val = $_POST['sc_tf_val'];
	$ccp_total_val = $_POST['ccp_total_val'];
	$ccp_completed_val = $_POST['ccp_completed_val'];
	$iar_nt_val = $_POST['iar_nt_val'];
	$iar_completed_val = $_POST['iar_completed_val'];
	$iar_updates_val = $_POST['iar_updates_val'];
	$iar_completed1_val = $_POST['iar_completed1_val'];
	$wi_tnb_val = $_POST['wi_tnb_val'];
	$wi_addissue_val = $_POST['wi_addissue_val'];
	$wi_worked_val = $_POST['wi_worked_val'];
	$wi_left_val = $_POST['wi_left_val'];
	
	if(!empty($ilc_pages_val))
	{
		$q1 = "update cm2_data set ilc_pages = '$ilc_pages_val' where when_done = '$today'";
		$r1 = mysqli_query($con, $q1);
	}
	
	if(!empty($ilc_completed_val))
	{
		$q2 = "update cm2_data set ilc_completed = '$ilc_completed_val' where when_done = '$today'";
		$r2 = mysqli_query($con, $q2);
	}
	
	if(!empty($efts_num_val))
	{
		$q3 = "update cm2_data set efts_num = '$efts_num_val' where when_done = '$today'";
		$r3 = mysqli_query($con, $q3);
	}
	
	if(!empty($efts_completed_val))
	{
		$q4 = "update cm2_data set efts_completed = '$efts_completed_val' where when_done = '$today'";
		$r4 = mysqli_query($con, $q4);
	}
	
	if(!empty($sc_wcupdates_val))
	{
		$q5 = "update cm2_data set sc_wcupdates = '$sc_wcupdates_val' where when_done = '$today'";
		$r5 = mysqli_query($con, $q5);
	}
	
	if(!empty($sc_wccorr_val))
	{
		$q6 = "update cm2_data set sc_wccorr = '$sc_wccorr_val' where when_done = '$today'";
		$r6 = mysqli_query($con, $q6);
	}
	
	if(!empty($sc_nfcorr_val))
	{
		$q7 = "update cm2_data set sc_nfcorr = '$sc_nfcorr_val' where when_done = '$today'";
		$r7 = mysqli_query($con, $q7);
	}
	
	if(!empty($sc_to_val))
	{
		$q8 = "update cm2_data set sc_to = '$sc_to_val' where when_done = '$today'";
		$r8 = mysqli_query($con, $q8);
	}
	
	if(!empty($sc_de_val))
	{
		$q9 = "update cm2_data set sc_de = '$sc_de_val' where when_done = '$today'";
		$r9 = mysqli_query($con, $q9);
	}
	
	if(!empty($sc_tf_val))
	{
		$q10 = "update cm2_data set sc_tf = '$sc_tf_val' where when_done = '$today'";
		$r10 = mysqli_query($con, $q10);
	}
	
	if(!empty($ccp_total_val))
	{
		$q11 = "update cm2_data set ccp_total = '$ccp_total_val' where when_done = '$today'";
		$r11 = mysqli_query($con, $q11);
	}
	
	if(!empty($ccp_completed_val))
	{
		$q12 = "update cm2_data set ccp_completed = '$ccp_completed_val' where when_done = '$today'";
		$r12 = mysqli_query($con, $q12);
	}
	
	if(!empty($iar_nt_val))
	{
		$q13 = "update cm2_data set iar_nt = '$iar_nt_val' where when_done = '$today'";
		$r13 = mysqli_query($con, $q13);
	}
	
	if(!empty($iar_completed_val))
	{
		$q14 = "update cm2_data set iar_completed = '$iar_completed_val' where when_done = '$today'";
		$r14 = mysqli_query($con, $q14);
	}
	
	if(!empty($iar_updates_val))
	{
		$q15 = "update cm2_data set iar_updates = '$iar_updates_val' where when_done = '$today'";
		$r15 = mysqli_query($con, $q15);
	}
	
	if(!empty($iar_completed1_val))
	{
		$q16 = "update cm2_data set iar_completed1 = '$iar_completed1_val' where when_done = '$today'";
		$r16 = mysqli_query($con, $q16);
	}
	
	if(!empty($wi_tnb_val))
	{
		$q17 = "update cm2_data set wi_tnb = '$wi_tnb_val' where when_done = '$today'";
		$r17 = mysqli_query($con, $q17);
	}
	
	if(!empty($wi_addissue_val))
	{
		$q18 = "update cm2_data set wi_addissue = '$wi_addissue_val' where when_done = '$today'";
		$r18 = mysqli_query($con, $q18);
	}
	
	if(!empty($wi_worked_val))
	{
		$q19 = "update cm2_data set wi_worked = '$wi_worked_val' where when_done = '$today'";
		$r19 = mysqli_query($con, $q19);
	}
	
	if(!empty($wi_left_val))
	{
		$q20 = "update cm2_data set wi_left = '$wi_left_val' where when_done = '$today'";
		$r20 = mysqli_query($con, $q20);
	}
	
	$dets['entered'] = 1;
	echo json_encode($dets);
}	

?>