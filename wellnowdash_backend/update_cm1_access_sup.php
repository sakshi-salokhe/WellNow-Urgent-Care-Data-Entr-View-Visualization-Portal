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
	
	if($_POST['un_total'] == 'true')
	{
		$un_total = 1;
	}
	else
	{
		$un_total = 0;
	}
	
	
	if($_POST['un_worked'] == 'true')
	{
		$un_worked = 1;
	}
	else
	{
		$un_worked = 0;
	}
	
	if($_POST['dtr_tw'] == 'true')
	{
		$dtr_tw = 1;
	}
	else
	{
		$dtr_tw = 0;
	}
	
	if($_POST['dtr_issuelog'] == 'true')
	{
		$dtr_issuelog = 1;
	}
	else
	{
		$dtr_issuelog = 0;
	}
	
	if($_POST['prw_total'] == 'true')
	{
		$prw_total = 1;
	}
	else
	{
		$prw_total = 0;
	}
	
	if($_POST['prw_worked'] == 'true')
	{
		$prw_worked = 1;
	}
	else
	{
		$prw_worked = 0;
	}
	
	if($_POST['prw_left'] == 'true')
	{
		$prw_left = 1;
	}
	else
	{
		$prw_left = 0;
	}
	
	if($_POST['ncoa_refund'] == 'true')
	{
		$ncoa_refund = 1;
	}
	else
	{
		$ncoa_refund = 0;
	}
	
	if($_POST['ncoa_updates'] == 'true')
	{
		$ncoa_updates = 1;
	}
	else
	{
		$ncoa_updates = 0;
	}
	
	if($_POST['ncoa_skiptrace'] == 'true')
	{
		$ncoa_skiptrace = 1;
	}
	else
	{
		$ncoa_skiptrace = 0;
	}
	
	$query = "update cm1_access set un_total = '$un_total', un_worked = '$un_worked', dtr_tw = '$dtr_tw', dtr_issuelog = '$dtr_issuelog', prw_total = '$prw_total', prw_worked = '$prw_worked', prw_left = '$prw_left', ncoa_refund = '$ncoa_refund', ncoa_updates = '$ncoa_updates', ncoa_skiptrace = '$ncoa_skiptrace' where user_id = '$uid'";
	
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