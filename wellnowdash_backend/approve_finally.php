<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

$userid = $_GET['userid'];
$val = 1;
$detail = [];

$sql = "update users set isActive = '$val' where user_id = '$userid' limit 1";

if(mysqli_query($con, $sql))
{
	$q1 = "select * from users where user_id = '$userid' limit 1";
	$r1 = mysqli_query($con, $q1);
	$row = mysqli_fetch_array($r1);
	
	$detail['result'] = 'success';
	$detail['emailid'] = $row['email'];
	$detail['full_name'] = $row['fullname'];
	
	$to = $row['email'];
	
	$from = 'sakshisalokhe1@gmail.com';
	
	$subject = "WellNow Urgent Care Dashboard - ACCOUNT APPROVAL.</h5>";
	
	$message = "Hi ".$row['fullname'].",

Your account has been approved by Melissa (Sr. Manager) and is ready for use.
	
You can log into the portal using the email address ".$to." and the password used during registeration. 
	
For any issues with the details entered, please contact me at melissa.cortes@wellnow.com.
	
For any technical issues, please contact Sakshi Salokhe - Reporting Specialist (Automation and Back end Development), at sakshisanjay.salokhe@wellnow.com.
	
	
	
	Thank you,
	
	WellNow UrgentCare
	Back End Development Team";
	$headers = array("From: melissa.cortes@wellnow.com",
		"Reply-To: sakshisanjay.salokhe@wellnow.com",
		"X-Mailer: PHP/" . PHP_VERSION
	);
	$headers = implode("\r\n", $headers);
	
	if(mail($to, $subject, $message, $headers) == True)
	{
		print_r("yes done");
	}
	else{
		print_r("nope nothing");
	}
	echo json_encode($detail);
}
else
{
	$detail['result'] = 'fail';
	$detail['emailid'] = "";
	$detail['full_name'] = "";
	
	echo json_encode($detail);
}

?>