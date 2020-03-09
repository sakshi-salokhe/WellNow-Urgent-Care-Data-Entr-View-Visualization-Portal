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
	if($_POST['check_wb_tech_other'] == 'true')
	{
		$wb_tech_other = 1;
	}
	else
	{
		$wb_tech_other = 0;
	}
	
	
	if($_POST['wb_demo_elig'] == 'true')
	{
		$wb_demo_elig = 1;
	}
	else
	{
		$wb_demo_elig = 0;
	}
	
	if($_POST['wb_timely_filing'] == 'true')
	{
		$wb_timely_filing = 1;
	}
	else
	{
		$wb_timely_filing = 0;
	}
	
	if($_POST['wb_coding_replies'] == 'true')
	{
		$wb_coding_replies = 1;
	}
	else
	{
		$wb_coding_replies = 0;
	}
	
	if($_POST['wb_sup_reviews'] == 'true')
	{
		$wb_sup_reviews = 1;
	}
	else
	{
		$wb_sup_reviews = 0;
	}
	
	if($_POST['wb_nf_corres'] == 'true')
	{
		$wb_nf_corres = 1;
	}
	else
	{
		$wb_nf_corres = 0;
	}
	
	if($_POST['wb_wc_corres'] == 'true')
	{
		$wb_wc_corres = 1;
	}
	else
	{
		$wb_wc_corres = 0;
	}
	
	if($_POST['waystar_medc_sec'] == 'true')
	{
		$waystar_medc_sec = 1;
	}
	else
	{
		$waystar_medc_sec = 0;
	}
	
	if($_POST['waystar_oob'] == 'true')
	{
		$waystar_oob = 1;
	}
	else
	{
		$waystar_oob = 0;
	}
	
	if($_POST['waystar_fidelis_tf'] == 'true')
	{
		$waystar_fidelis_tf = 1;
	}
	else
	{
		$waystar_fidelis_tf = 0;
	}
	
	$query = "update ar_access set wb_tech_other = '$wb_tech_other', wb_demo_elig = '$wb_demo_elig', wb_timely_filing = '$wb_timely_filing', wb_coding_replies = '$wb_coding_replies', wb_sup_reviews = '$wb_sup_reviews', wb_nf_corres = '$wb_nf_corres', wb_wc_corres = '$wb_wc_corres', waystar_medc_sec = '$waystar_medc_sec', waystar_oob = '$waystar_oob', waystar_fidelis_tf = '$waystar_fidelis_tf' where user_id = '$uid'";
	
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