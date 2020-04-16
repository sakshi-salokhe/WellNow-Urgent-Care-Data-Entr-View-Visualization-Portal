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
	
	$un_total_val = $_POST['un_total_val'];
	$un_worked_val = $_POST['un_worked_val'];
	$dtr_tw_val = $_POST['dtr_tw_val'];
	$dtr_issuelog_val = $_POST['dtr_issuelog_val'];
	$prw_total_val = $_POST['prw_total_val'];
	$prw_worked_val = $_POST['prw_worked_val'];
	$prw_left_val = $_POST['prw_left_val'];
	$ncoa_refund_val = $_POST['ncoa_refund_val'];
	$ncoa_updates_val = $_POST['ncoa_updates_val'];
	$ncoa_skiptrace_val = $_POST['ncoa_skiptrace_val'];
	
	
	$sql = "insert into cm1_data (when_done) values ('$today')";
	if(mysqli_query($con, $sql))
	{
		if(!empty($un_total_val))
		{
			$q1 = "update cm1_data set un_total = '$un_total_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(!empty($un_worked_val))
		{
			$q2 = "update cm1_data set un_worked = '$un_worked_val' where when_done = '$today'";
			$r2 = mysqli_query($con, $q2);
		}
		
		if(!empty($dtr_tw_val))
		{
			$q3 = "update cm1_data set dtr_tw = '$dtr_tw_val' where when_done = '$today'";
			$r3 = mysqli_query($con, $q3);
		}
		
		if(!empty($dtr_issuelog_val))
		{
			$q4 = "update cm1_data set dtr_issuelog = '$dtr_issuelog_val' where when_done = '$today'";
			$r4 = mysqli_query($con, $q4);
		}
		
		if(!empty($prw_total_val))
		{
			$q5 = "update cm1_data set prw_total = '$prw_total_val' where when_done = '$today'";
			$r5 = mysqli_query($con, $q5);
		}
		
		if(!empty($prw_worked_val))
		{
			$q6 = "update cm1_data set prw_worked = '$prw_worked_val' where when_done = '$today'";
			$r6 = mysqli_query($con, $q6);
		}
		
		if(!empty($prw_left_val))
		{
			$q7 = "update cm1_data set prw_left = '$prw_left_val' where when_done = '$today'";
			$r7 = mysqli_query($con, $q7);
		}
		
		if(!empty($ncoa_refund_val))
		{
			$q8 = "update cm1_data set ncoa_refund = '$ncoa_refund_val' where when_done = '$today'";
			$r8 = mysqli_query($con, $q8);
		}
		
		if(!empty($ncoa_updates_val))
		{
			$q9 = "update cm1_data set ncoa_updates = '$ncoa_updates_val' where when_done = '$today'";
			$r9 = mysqli_query($con, $q9);
		}
		
		if(!empty($ncoa_skiptrace_val))
		{
			$q10 = "update cm1_data set ncoa_skiptrace = '$ncoa_skiptrace_val' where when_done = '$today'";
			$r10 = mysqli_query($con, $q10);
		}
	
		$dets['entered'] = 1;
		$dets['date'] = $today;
		
		echo json_encode($dets);
	}
	else{
		$dets['entered'] = 0;
		echo json_encode($dets);
	}
}

?>