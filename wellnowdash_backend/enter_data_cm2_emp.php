<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

$emp = [];
$userid = $_GET['userid'];
$sql1 = "select * from users where user_id = '$userid'";

$result1 = mysqli_query($con,$sql1);
$row1 = mysqli_fetch_array($result1);

$dashboard = $row1['dashboards'];

$today = date("Y-m-d");


$sql2 = "select * from cm2_access where user_id = '$userid'";
$result2 = mysqli_query($con,$sql2);
$row2 = mysqli_fetch_array($result2);

$sql3 = "select * from cm2_data where when_done = '$today'";
$result3 = mysqli_query($con,$sql3);
$row3 = mysqli_fetch_array($result3);
$count = mysqli_num_rows($result3);
$today = date('Y-m-d');

$emp['userid'] = $userid;
$emp['dashboard'] = $dashboard;
$emp['when_done'] = $today;

$emp['ilc_pages'] = $row2['ilc_pages'];
$emp['ilc_completed'] = $row2['ilc_completed'];
$emp['efts_num'] = $row2['efts_num'];
$emp['efts_completed'] = $row2['efts_completed'];
$emp['sc_wcupdates'] = $row2['sc_wcupdates'];
$emp['sc_wccorr'] = $row2['sc_wccorr'];
$emp['sc_nfcorr'] = $row2['sc_nfcorr'];
$emp['sc_to'] = $row2['sc_to'];
$emp['sc_de'] = $row2['sc_de'];
$emp['sc_tf'] = $row2['sc_tf'];
$emp['ccp_total'] = $row2['ccp_total'];
$emp['ccp_completed'] = $row2['ccp_completed'];
$emp['iar_nt'] = $row2['iar_nt'];
$emp['iar_completed'] = $row2['iar_completed'];
$emp['iar_updates'] = $row2['iar_updates'];
$emp['iar_completed1'] = $row2['iar_completed1'];
$emp['wi_tnb'] = $row2['wi_tnb'];
$emp['wi_addissue'] = $row2['wi_addissue'];
$emp['wi_worked'] = $row2['wi_worked'];
$emp['wi_left'] = $row2['wi_left'];

if($count > 0)
{
	$emp['ilc_pages_PH'] = $row3['ilc_pages'];
	$emp['ilc_completed_PH'] = $row3['ilc_completed'];
	$emp['efts_num_PH'] = $row3['efts_num'];
	$emp['efts_completed_PH'] = $row3['efts_completed'];
	$emp['sc_wcupdates_PH'] = $row3['sc_wcupdates'];
	$emp['sc_wccorr_PH'] = $row3['sc_wccorr'];
	$emp['sc_nfcorr_PH'] = $row3['sc_nfcorr'];
	$emp['sc_to_PH'] = $row3['sc_to'];
	$emp['sc_de_PH'] = $row3['sc_de'];
	$emp['sc_tf_PH'] = $row3['sc_tf'];
	$emp['ccp_total_PH'] = $row3['ccp_total'];
	$emp['ccp_completed_PH'] = $row3['ccp_completed'];
	$emp['iar_nt_PH'] = $row3['iar_nt'];
	$emp['iar_completed_PH'] = $row3['iar_completed'];
	$emp['iar_updates_PH'] = $row3['iar_updates'];
	$emp['iar_completed1_PH'] = $row3['iar_completed1'];
	$emp['wi_tnb_PH'] = $row3['wi_tnb'];
	$emp['wi_addissue_PH'] = $row3['wi_addissue'];
	$emp['wi_worked_PH'] = $row3['wi_worked'];
	$emp['wi_left_PH'] = $row3['wi_left'];
	
}
else{
	$emp['ilc_pages_PH'] = NULL;
	$emp['ilc_completed_PH'] = NULL;
	$emp['efts_num_PH'] = NULL;
	$emp['efts_completed_PH'] = NULL;
	$emp['sc_wcupdates_PH'] = NULL;
	$emp['sc_wccorr_PH'] = NULL;
	$emp['sc_nfcorr_PH'] = NULL;
	$emp['sc_to_PH'] = NULL;
	$emp['sc_de_PH'] = NULL;
	$emp['sc_tf_PH'] = NULL;
	$emp['ccp_total_PH'] = NULL;
	$emp['ccp_completed_PH'] = NULL;
	$emp['iar_nt_PH'] = NULL;
	$emp['iar_completed_PH'] = NULL;
	$emp['iar_updates_PH'] = NULL;
	$emp['iar_completed1_PH'] = NULL;
	$emp['wi_tnb_PH'] = NULL;
	$emp['wi_addissue_PH'] = NULL;
	$emp['wi_worked_PH'] = NULL;
	$emp['wi_left_PH'] = NULL;
}

echo json_encode($emp);

?>