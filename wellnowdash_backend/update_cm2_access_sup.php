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
	
	if($_POST['ilc_pages'] == 'true')
	{
		$ilc_pages = 1;
	}
	else
	{
		$ilc_pages = 0;
	}
	
	
	if($_POST['ilc_completed'] == 'true')
	{
		$ilc_completed = 1;
	}
	else
	{
		$ilc_completed = 0;
	}
	
	if($_POST['efts_num'] == 'true')
	{
		$efts_num = 1;
	}
	else
	{
		$efts_num = 0;
	}
	
	if($_POST['efts_completed'] == 'true')
	{
		$efts_completed = 1;
	}
	else
	{
		$efts_completed = 0;
	}
	
	if($_POST['sc_wcupdates'] == 'true')
	{
		$sc_wcupdates = 1;
	}
	else
	{
		$sc_wcupdates = 0;
	}
	
	if($_POST['sc_wccorr'] == 'true')
	{
		$sc_wccorr = 1;
	}
	else
	{
		$sc_wccorr = 0;
	}
	
	if($_POST['sc_nfcorr'] == 'true')
	{
		$sc_nfcorr = 1;
	}
	else
	{
		$sc_nfcorr = 0;
	}
	
	if($_POST['sc_to'] == 'true')
	{
		$sc_to = 1;
	}
	else
	{
		$sc_to = 0;
	}
	
	if($_POST['sc_de'] == 'true')
	{
		$sc_de = 1;
	}
	else
	{
		$sc_de = 0;
	}
	
	if($_POST['sc_tf'] == 'true')
	{
		$sc_tf = 1;
	}
	else
	{
		$sc_tf = 0;
	}
	
	if($_POST['ccp_total'] == 'true')
	{
		$ccp_total = 1;
	}
	else
	{
		$ccp_total = 0;
	}
	
	if($_POST['ccp_completed'] == 'true')
	{
		$ccp_completed = 1;
	}
	else
	{
		$ccp_completed = 0;
	}
	
	if($_POST['iar_nt'] == 'true')
	{
		$iar_nt = 1;
	}
	else
	{
		$iar_nt = 0;
	}
	
	if($_POST['iar_completed'] == 'true')
	{
		$iar_completed = 1;
	}
	else
	{
		$iar_completed = 0;
	}
	
	if($_POST['iar_updates'] == 'true')
	{
		$iar_updates = 1;
	}
	else
	{
		$iar_updates = 0;
	}
	
	if($_POST['iar_completed1'] == 'true')
	{
		$iar_completed1 = 1;
	}
	else
	{
		$iar_completed1 = 0;
	}
	
	if($_POST['wi_tnb'] == 'true')
	{
		$wi_tnb = 1;
	}
	else
	{
		$wi_tnb = 0;
	}
	
	if($_POST['wi_addissue'] == 'true')
	{
		$wi_addissue = 1;
	}
	else
	{
		$wi_addissue = 0;
	}
	
	if($_POST['wi_worked'] == 'true')
	{
		$wi_worked = 1;
	}
	else
	{
		$wi_worked = 0;
	}
	
	if($_POST['wi_left'] == 'true')
	{
		$wi_left = 1;
	}
	else
	{
		$wi_left = 0;
	}
	
	$query = "update cm2_access set ilc_pages = '$ilc_pages', ilc_completed = '$ilc_completed', efts_num = '$efts_num', efts_completed = '$efts_completed', sc_wcupdates = '$sc_wcupdates', sc_wccorr = '$sc_wccorr', sc_nfcorr = '$sc_nfcorr', sc_to = '$sc_to', sc_de = '$sc_de', sc_tf = '$sc_tf', ccp_total = '$ccp_total', ccp_completed = '$ccp_completed', iar_nt = '$iar_nt', iar_completed = '$iar_completed', iar_updates = '$iar_updates', iar_completed1 = '$iar_completed1', wi_tnb = '$wi_tnb', wi_addissue = '$wi_addissue', wi_worked = '$wi_worked', wi_left = '$wi_left' where user_id = '$uid'";
	
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