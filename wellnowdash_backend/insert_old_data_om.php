<?php

header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

//print_r($_POST);
$postdata = file_get_contents("php://input");
$dets = [];



if(isset($postdata) && !empty($postdata))
{
	$today = $_POST['date'];
	
	$support_sp_val = $_POST['support_sp_val'];
	$support_enl_val = $_POST['support_enl_val'];
	$support_dnu_val = $_POST['support_dnu_val'];
	$support_nyucp_val = $_POST['support_nyucp_val'];
	$support_nom_val = $_POST['support_nom_val'];
	$support_emails_val = $_POST['support_emails_val'];
	$support_deposit_pulls_val = $_POST['support_deposit_pulls_val'];
	$support_blank_batch_corres_val = $_POST['support_blank_batch_corres_val'];
	$support_correspondence_val = $_POST['support_correspondence_val'];
	$support_acct_audits_val = $_POST['support_acct_audits_val'];
	$support_inv_correct_val = $_POST['support_inv_correct_val'];
	$support_phone_val = $_POST['support_phone_val'];
	$support_inv_addr_val = $_POST['support_inv_addr_val'];
	$support_collects_val = $_POST['support_collects_val'];
	$suport_medical_records_val = $_POST['suport_medical_records_val'];
	$coding_na_val = $_POST['coding_na_val'];
	$coding_on_holds_val = $_POST['coding_on_holds_val'];
	$coding_coding_queue_val = $_POST['coding_coding_queue_val'];
	$coding_onsites_val = $_POST['coding_onsites_val'];
	$coding_ooa_val = $_POST['coding_ooa_val'];
	$ar120_val = $_POST['ar120_val'];
	$ar_120percent_val = $_POST['ar_120percent_val'];
	$ar_90_val = $_POST['ar_90_val'];
	$ar_voicemails_val = $_POST['ar_voicemails_val'];
	$ar_unapplied_val = $_POST['ar_unapplied_val'];
	$ar_audit_val = $_POST['ar_audit_val'];
	$ar_wbs_val = $_POST['ar_wbs_val'];
	
	
	$sql = "insert into om_data (when_done) values ('$today')";
	if(mysqli_query($con, $sql))
	{
		if(empty($support_sp_val) == False)
		{
			$q1 = "update om_data set support_sp = '$support_sp_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(empty($support_enl_val) == False)
		{
			$q1 = "update om_data set support_enl = '$support_enl_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(empty($support_dnu_val) == False)
		{
			$q1 = "update om_data set support_dnu = '$support_dnu_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(empty($support_nyucp_val) == False)
		{
			$q1 = "update om_data set support_nyucp = '$support_nyucp_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(empty($support_nom_val) == False)
		{
			$q1 = "update om_data set support_nom = '$support_nom_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(empty($support_emails_val) == False)
		{
			$q1 = "update om_data set support_emails = '$support_emails_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(empty($support_deposit_pulls_val) == False)
		{
			$q1 = "update om_data set support_deposit_pulls = '$support_deposit_pulls_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(empty($support_blank_batch_corres_val) == False)
		{
			$q1 = "update om_data set support_blank_batch_corres = '$support_blank_batch_corres_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(empty($support_correspondence_val) == False)
		{
			$q1 = "update om_data set support_correspondence = '$support_correspondence_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(empty($support_acct_audits_val) == False)
		{
			$q1 = "update om_data set support_acct_audits = '$support_acct_audits_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		if(empty($support_inv_correct_val) == False)
		{
			$q1 = "update om_data set support_inv_correct = '$support_inv_correct_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(empty($support_phone_val) == False)
		{
			$q1 = "update om_data set support_phone = '$support_phone_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(empty($support_inv_addr_val) == False)
		{
			$q1 = "update om_data set support_inv_addr = '$support_inv_addr_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(empty($support_collects_val) == False)
		{
			$q1 = "update om_data set support_collects = '$support_collects_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(empty($suport_medical_records_val) == False)
		{
			$q1 = "update om_data set suport_medical_records = '$suport_medical_records_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(empty($coding_na_val) == False)
		{
			$q1 = "update om_data set coding_na = '$coding_na_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(empty($coding_on_holds_val) == False)
		{
			$q1 = "update om_data set coding_on_holds = '$coding_on_holds_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(empty($coding_coding_queue_val) == False)
		{
			$q1 = "update om_data set coding_coding_queue = '$coding_coding_queue_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(empty($coding_onsites_val) == False)
		{
			$q1 = "update om_data set coding_onsites = '$coding_onsites_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(empty($coding_ooa_val) == False)
		{
			$q1 = "update om_data set coding_ooa = '$coding_ooa_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(empty($ar120_val) == False)
		{
			$q1 = "update om_data set ar120 = '$ar120_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(empty($ar_120percent_val) == False)
		{
			$q1 = "update om_data set ar_120percent = '$ar_120percent_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(empty($ar_90_val) == False)
		{
			$q1 = "update om_data set ar_90 = '$ar_90_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(empty($ar_voicemails_val) == False)
		{
			$q1 = "update om_data set ar_voicemails = '$ar_voicemails_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(empty($ar_unapplied_val) == False)
		{
			$q1 = "update om_data set ar_unapplied = '$ar_unapplied_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(empty($ar_audit_val) == False)
		{
			$q1 = "update om_data set ar_audit = '$ar_audit_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(empty($ar_wbs_val) == False)
		{
			$q1 = "update om_data set ar_wbs = '$ar_wbs_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
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