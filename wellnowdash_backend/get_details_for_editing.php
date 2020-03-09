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

$userid = $row1['user_id'];
$fullname = $row1['fullname'];
$email = $row1['email'];
$dashboard = $row1['dashboards'];
$isManager = $row1['isManager'];

$sql2 = "select * from dashboards where dash_id = '$dashboard'";
$result2 = mysqli_query($con,$sql2);
$row2 = mysqli_fetch_array($result2);

$dash_name = $row2["dashboard_name"];

$emp['userid'] = $userid;
$emp['fullname'] = $fullname;
$emp['email'] = $email;
$emp['dash_name'] = $dash_name;
$emp['dashboard'] = $dashboard;
$emp['isManager'] = $isManager;

echo json_encode($emp);

?>