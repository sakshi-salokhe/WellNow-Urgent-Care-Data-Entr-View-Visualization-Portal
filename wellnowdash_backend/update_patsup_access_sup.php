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
	$sup_id = $_POST['sup_id'];
	
	
	if($_POST['saf_mvp_sod'] == 'true' or $_POST['saf_mvp_sod'] == 'on')
	{
		$saf_mvp_sod = 1;
	}
	else
	{
		$saf_mvp_sod = 0;
	}
	
	if($_POST['saf_inval_addr_sod'] == 'true' or $_POST['saf_inval_addr_sod'] == 'on')
	{
		$saf_inval_addr_sod = 1;
	}
	else
	{
		$saf_inval_addr_sod = 0;
	}
	
	if($_POST['ash_attachments_sod'] == 'true' or $_POST['ash_attachments_sod'] == 'on')
	{
		$ash_attachments_sod = 1;
	}
	else
	{
		$ash_attachments_sod = 0;
	}
	
	if($_POST['ash_wc_mailing_sod'] == 'true' or $_POST['ash_wc_mailing_sod'] == 'on')
	{
		$ash_wc_mailing_sod = 1;
	}
	else
	{
		$ash_wc_mailing_sod = 0;
	}
	
	if($_POST['ash_wc_deleted_sod'] == 'true' or $_POST['ash_wc_deleted_sod'] == 'on')
	{
		$ash_wc_deleted_sod = 1;
	}
	else
	{
		$ash_wc_deleted_sod = 0;
	}
	
	if($_POST['ash_acc_type_sod'] == 'true' or $_POST['ash_acc_type_sod'] == 'on')
	{
		$ash_acc_type_sod = 1;
	}
	else
	{
		$ash_acc_type_sod = 0;
	}
	
	if($_POST['ash_last_addr_sod'] == 'true' or $_POST['ash_last_addr_sod'] == 'on')
	{
		$ash_last_addr_sod = 1;
	}
	else
	{
		$ash_last_addr_sod = 0;
	}
	
	if($_POST['bailey_indep_health_sod'] == 'true' or $_POST['bailey_indep_health_sod'] == 'on')
	{
		$bailey_indep_health_sod = 1;
	}
	else
	{
		$bailey_indep_health_sod = 0;
	}
	
	if($_POST['bailey_bcbs_sod'] == 'true' or $_POST['bailey_bcbs_sod'] == 'on')
	{
		$bailey_bcbs_sod = 1;
	}
	else
	{
		$bailey_bcbs_sod = 0;
	}
	
	if($_POST['bailey_emails_sod'] == 'true' or $_POST['bailey_emails_sod'] == 'on')
	{
		$bailey_emails_sod = 1;
	}
	else
	{
		$bailey_emails_sod = 0;
	}
	
	if($_POST['justin_ndc_num_sod'] == 'true' or $_POST['justin_ndc_num_sod'] == 'on')
	{
		$justin_ndc_num_sod = 1;
	}
	else
	{
		$justin_ndc_num_sod = 0;
	}
	
	if($_POST['justin_medicare_loc_sod'] == 'true' or $_POST['justin_medicare_loc_sod'] == 'on')
	{
		$justin_medicare_loc_sod = 1;
	}
	else
	{
		$justin_medicare_loc_sod = 0;
	}
	
	if($_POST['justin_medicare_sec_sod'] == 'true' or $_POST['justin_medicare_sec_sod'] == 'on')
	{
		$justin_medicare_sec_sod = 1;
	}
	else
	{
		$justin_medicare_sec_sod = 0;
	}
	
	
	
	
	$query = "update pat_sup_access set saf_mvp_sod = '$saf_mvp_sod', saf_inval_addr_sod = '$saf_inval_addr_sod', ash_attachments_sod = '$ash_attachments_sod', ash_wc_mailing_sod = '$ash_wc_mailing_sod', ash_wc_deleted_sod = '$ash_wc_deleted_sod', ash_acc_type_sod = '$ash_acc_type_sod', ash_last_addr_sod = '$ash_last_addr_sod', bailey_indep_health_sod = '$bailey_indep_health_sod', bailey_bcbs_sod = '$bailey_bcbs_sod', bailey_emails_sod = '$bailey_emails_sod', justin_ndc_num_sod = '$justin_ndc_num_sod', justin_medicare_loc_sod = '$justin_medicare_loc_sod', justin_medicare_sec_sod = '$justin_medicare_sec_sod' where user_id = '$uid'";
	
	if (mysqli_query($con, $query))
	{
		$dets['done'] = true;
		$dets['uid'] = $uid;
		$dets['supervisor_id'] = $sup_id;
		echo json_encode($dets);
		http_response_code(200);
	}
	else
	{
		$dets['done'] = false;
		$dets['uid'] = $uid;
		$dets['supervisor_id'] = $sup_id;
		echo json_encode($dets);
		http_response_code(422);
	}
}
?>