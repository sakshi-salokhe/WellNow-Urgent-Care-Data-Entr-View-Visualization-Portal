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
	
	if($_POST['support_sp'] == 'true' or $_POST['support_sp'] == 'on')
	{
		$support_sp = 1;
	}
	else
	{
		$support_sp = 0;
	}
	
	if($_POST['support_enl'] == 'true' or $_POST['support_enl'] == 'on')
	{
		$support_enl = 1;
	}
	else
	{
		$support_enl = 0;
	}
	
	if($_POST['support_dnu'] == 'true' or $_POST['support_dnu'] == 'on')
	{
		$support_dnu = 1;
	}
	else
	{
		$support_dnu = 0;
	}
	
	if($_POST['support_nyucp'] == 'true' or $_POST['support_nyucp'] == 'on')
	{
		$support_nyucp = 1;
	}
	else
	{
		$support_nyucp = 0;
	}
	
	if($_POST['support_nom'] == 'true' or $_POST['support_nom'] == 'on')
	{
		$support_nom = 1;
	}
	else
	{
		$support_nom = 0;
	}
	
	if($_POST['support_emails'] == 'true' or $_POST['support_emails'] == 'on')
	{
		$support_emails = 1;
	}
	else
	{
		$support_emails = 0;
	}
	
	if($_POST['support_deposit_pulls'] == 'true' or $_POST['support_deposit_pulls'] == 'on')
	{
		$support_deposit_pulls = 1;
	}
	else
	{
		$support_deposit_pulls = 0;
	}
	
	if($_POST['support_blank_batch_corres'] == 'true' or $_POST['support_blank_batch_corres'] == 'on')
	{
		$support_blank_batch_corres = 1;
	}
	else
	{
		$support_blank_batch_corres = 0;
	}
	
	if($_POST['support_correspondence'] == 'true' or $_POST['support_correspondence'] == 'on')
	{
		$support_correspondence = 1;
	}
	else
	{
		$support_correspondence = 0;
	}
	
	if($_POST['support_acct_audits'] == 'true' or $_POST['support_acct_audits'] == 'on')
	{
		$support_acct_audits = 1;
	}
	else
	{
		$support_acct_audits = 0;
	}
	
	if($_POST['support_inv_correct'] == 'true' or $_POST['support_inv_correct'] == 'on')
	{
		$support_inv_correct = 1;
	}
	else
	{
		$support_inv_correct = 0;
	}
	
	if($_POST['support_phone'] == 'true' or $_POST['support_phone'] == 'on')
	{
		$support_phone = 1;
	}
	else
	{
		$support_phone = 0;
	}
	
	if($_POST['support_inv_addr'] == 'true' or $_POST['support_inv_addr'] == 'on')
	{
		$support_inv_addr = 1;
	}
	else
	{
		$support_inv_addr = 0;
	}
	
	if($_POST['support_collects'] == 'true' or $_POST['support_collects'] == 'on')
	{
		$support_collects = 1;
	}
	else
	{
		$support_collects = 0;
	}
	
	if($_POST['suport_medical_records'] == 'true' or $_POST['suport_medical_records'] == 'on')
	{
		$suport_medical_records = 1;
	}
	else
	{
		$suport_medical_records = 0;
	}
	
	if($_POST['coding_na'] == 'true' or $_POST['coding_na'] == 'on')
	{
		$coding_na = 1;
	}
	else
	{
		$coding_na = 0;
	}
	
	if($_POST['coding_on_holds'] == 'true' or $_POST['coding_on_holds'] == 'on')
	{
		$coding_on_holds = 1;
	}
	else
	{
		$coding_on_holds = 0;
	}
	
	if($_POST['coding_coding_queue'] == 'true' or $_POST['coding_coding_queue'] == 'on')
	{
		$coding_coding_queue = 1;
	}
	else
	{
		$coding_coding_queue = 0;
	}
	
	if($_POST['coding_onsites'] == 'true' or $_POST['coding_onsites'] == 'on')
	{
		$coding_onsites = 1;
	}
	else
	{
		$coding_onsites = 0;
	}
	
	if($_POST['coding_ooa'] == 'true' or $_POST['coding_ooa'] == 'on')
	{
		$coding_ooa = 1;
	}
	else
	{
		$coding_ooa = 0;
	}
	
	if($_POST['ar120'] == 'true' or $_POST['ar120'] == 'on')
	{
		$ar120 = 1;
	}
	else
	{
		$ar120 = 0;
	}
	
	if($_POST['ar_120percent'] == 'true' or $_POST['ar_120percent'] == 'on')
	{
		$ar_120percent = 1;
	}
	else
	{
		$ar_120percent = 0;
	}
	
	if($_POST['ar_90'] == 'true' or $_POST['ar_90'] == 'on')
	{
		$ar_90 = 1;
	}
	else
	{
		$ar_90 = 0;
	}
	
	if($_POST['ar_voicemails'] == 'true' or $_POST['ar_voicemails'] == 'on')
	{
		$ar_voicemails = 1;
	}
	else
	{
		$ar_voicemails = 0;
	}
	
	if($_POST['ar_unapplied'] == 'true' or $_POST['ar_unapplied'] == 'on')
	{
		$ar_unapplied = 1;
	}
	else
	{
		$ar_unapplied = 0;
	}
	
	if($_POST['ar_audit'] == 'true' or $_POST['ar_audit'] == 'on')
	{
		$ar_audit = 1;
	}
	else
	{
		$ar_audit = 0;
	}
	
	if($_POST['ar_wbs'] == 'true' or $_POST['ar_wbs'] == 'on')
	{
		$ar_wbs = 1;
	}
	else
	{
		$ar_wbs = 0;
	}
	
	$query = "update om_access set support_sp = '$support_sp', support_enl = '$support_enl', support_dnu = '$support_dnu', support_nyucp = '$support_nyucp', support_nom = '$support_nom', support_emails = '$support_emails', support_deposit_pulls = '$support_deposit_pulls', support_blank_batch_corres = '$support_blank_batch_corres', support_correspondence = '$support_correspondence', support_acct_audits = '$support_acct_audits', support_inv_correct = '$support_inv_correct', support_phone = '$support_phone', support_inv_addr = '$support_inv_addr', support_collects = '$support_collects', suport_medical_records = '$suport_medical_records', coding_na = '$coding_na', coding_on_holds = '$coding_on_holds', coding_coding_queue = '$coding_coding_queue', coding_onsites = '$coding_onsites', coding_ooa = '$coding_ooa', ar120 = '$ar120', ar_120percent = '$ar_120percent', ar_90 = '$ar_90', ar_voicemails = '$ar_voicemails', ar_unapplied = '$ar_unapplied', ar_audit = '$ar_audit', ar_wbs = '$ar_wbs' where user_id = '$uid'";
	
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