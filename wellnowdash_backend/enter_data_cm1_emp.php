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


$sql2 = "select * from cm1_access where user_id = '$userid'";
$result2 = mysqli_query($con,$sql2);
$row2 = mysqli_fetch_array($result2);

$sql3 = "select * from cm1_data where when_done = '$today'";
$result3 = mysqli_query($con,$sql3);
$row3 = mysqli_fetch_array($result3);
$count = mysqli_num_rows($result3);
$today = date('Y-m-d');

$emp['userid'] = $userid;
$emp['dashboard'] = $dashboard;
$emp['when_done'] = $today;

$emp['un_total'] = $row2['un_total'];
$emp['un_worked'] = $row2['un_worked'];
$emp['dtr_tw'] = $row2['dtr_tw'];
$emp['dtr_issuelog'] = $row2['dtr_issuelog'];
$emp['prw_total'] = $row2['prw_total'];
$emp['prw_worked'] = $row2['prw_worked'];
$emp['prw_left'] = $row2['prw_left'];
$emp['ncoa_refund'] = $row2['ncoa_refund'];
$emp['ncoa_updates'] = $row2['ncoa_updates'];
$emp['ncoa_skiptrace'] = $row2['ncoa_skiptrace'];

if($count > 0)
{
	$emp['un_total_PH'] = $row3['un_total'];
	$emp['un_worked_PH'] = $row3['un_worked'];
	$emp['dtr_tw_PH'] = $row3['dtr_tw'];
	$emp['dtr_issuelog_PH'] = $row3['dtr_issuelog'];
	$emp['prw_total_PH'] = $row3['prw_total'];
	$emp['prw_worked_PH'] = $row3['prw_worked'];
	$emp['prw_left_PH'] = $row3['prw_left'];
	$emp['ncoa_refund_PH'] = $row3['ncoa_refund'];
	$emp['ncoa_updates_PH'] = $row3['ncoa_updates'];
	$emp['ncoa_skiptrace_PH'] = $row3['ncoa_skiptrace'];
}
else{
	$emp['un_total_PH'] = NULL;
	$emp['un_worked_PH'] = NULL;
	$emp['dtr_tw_PH'] = NULL;
	$emp['dtr_issuelog_PH'] = NULL;
	$emp['prw_total_PH'] = NULL;
	$emp['prw_worked_PH'] = NULL;
	$emp['prw_left_PH'] = NULL;
	$emp['ncoa_refund_PH'] = NULL;
	$emp['ncoa_updates_PH'] = NULL;
	$emp['ncoa_skiptrace_PH'] = NULL;
}

echo json_encode($emp);

?>