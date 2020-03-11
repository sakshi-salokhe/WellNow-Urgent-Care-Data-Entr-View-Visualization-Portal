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
	$userid = $_POST['userid'];
	
	$saf_mvp_sod_val = $_POST['saf_mvp_sod_val'];
	$saf_inval_addr_sod_val = $_POST['saf_inval_addr_sod_val'];
	$ash_attachments_sod_val = $_POST['ash_attachments_sod_val'];
	$ash_wc_mailing_sod_val = $_POST['ash_wc_mailing_sod_val'];
	$ash_wc_deleted_sod_val = $_POST['ash_wc_deleted_sod_val'];
	$ash_acc_type_sod_val = $_POST['ash_acc_type_sod_val'];
	$ash_last_addr_sod_val = $_POST['ash_last_addr_sod_val'];
	$bailey_indep_health_sod_val = $_POST['bailey_indep_health_sod_val'];
	$bailey_bcbs_sod_val = $_POST['bailey_bcbs_sod_val'];
	$bailey_emails_sod_val = $_POST['bailey_emails_sod_val'];
	$justin_ndc_num_sod_val = $_POST['justin_ndc_num_sod_val'];
	$justin_medicare_loc_sod_val = $_POST['justin_medicare_loc_sod_val'];
	$justin_medicare_sec_sod_val = $_POST['justin_medicare_sec_sod_val'];
	
	
	$sql = "insert into pat_sup_goals (when_done,when_done_year, user_id) values ('$today','$today_year', '$userid')";
	if(mysqli_query($con, $sql))
	{
		if(empty($saf_mvp_sod_val) == False)
		{
			$q1 = "update pat_sup_goals set saf_mvp_sod = '$saf_mvp_sod_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(empty($saf_inval_addr_sod_val) == False)
		{
			$q3 = "update pat_sup_goals set saf_inval_addr_sod = '$saf_inval_addr_sod_val' where when_done = '$today'";
			$r3 = mysqli_query($con, $q3);
		}
		
		if(empty($ash_attachments_sod_val) == False)
		{
			$q5 = "update pat_sup_goals set ash_attachments_sod = '$ash_attachments_sod_val' where when_done = '$today'";
			$r5 = mysqli_query($con, $q5);
		}
		
		if(empty($ash_wc_mailing_sod_val) == False)
		{
			$q7 = "update pat_sup_goals set ash_wc_mailing_sod = '$ash_wc_mailing_sod_val' where when_done = '$today'";
			$r7 = mysqli_query($con, $q7);
		}
		
		if(empty($ash_wc_deleted_sod_val) == False)
		{
			$q9 = "update pat_sup_goals set ash_wc_deleted_sod = '$ash_wc_deleted_sod_val' where when_done = '$today'";
			$r9 = mysqli_query($con, $q9);
		}
		
		if(empty($ash_acc_type_sod_val) == False)
		{
			$q10 = "update pat_sup_goals set ash_acc_type_sod = '$ash_acc_type_sod_val' where when_done = '$today'";
			$r10 = mysqli_query($con, $q10);
		}
	
		if(empty($ash_last_addr_sod_val) == False)
		{
			$q10 = "update pat_sup_goals set ash_last_addr_sod = '$ash_last_addr_sod_val' where when_done = '$today'";
			$r10 = mysqli_query($con, $q10);
		}
		
		if(empty($bailey_indep_health_sod_val) == False)
		{
			$q10 = "update pat_sup_goals set bailey_indep_health_sod = '$bailey_indep_health_sod_val' where when_done = '$today'";
			$r10 = mysqli_query($con, $q10);
		}
		
		if(empty($bailey_bcbs_sod_val) == False)
		{
			$q10 = "update pat_sup_goals set bailey_bcbs_sod = '$bailey_bcbs_sod_val' where when_done = '$today'";
			$r10 = mysqli_query($con, $q10);
		}
		
		if(empty($bailey_emails_sod_val) == False)
		{
			$q10 = "update pat_sup_goals set bailey_emails_sod = '$bailey_emails_sod_val' where when_done = '$today'";
			$r10 = mysqli_query($con, $q10);
		}
		
		if(empty($justin_ndc_num_sod_val) == False)
		{
			$q10 = "update pat_sup_goals set justin_ndc_num_sod = '$justin_ndc_num_sod_val' where when_done = '$today'";
			$r10 = mysqli_query($con, $q10);
		}
		
		if(empty($justin_medicare_loc_sod_val) == False)
		{
			$q10 = "update pat_sup_goals set justin_medicare_loc_sod = '$justin_medicare_loc_sod_val' where when_done = '$today'";
			$r10 = mysqli_query($con, $q10);
		}
		
		if(empty($justin_medicare_sec_sod_val) == False)
		{
			$q10 = "update pat_sup_goals set justin_medicare_sec_sod = '$justin_medicare_sec_sod_val' where when_done = '$today'";
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