<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

$emp = [];
	
$startdate = $_GET['startdate'];
$enddate = $_GET['enddate'];
$user_id = $_GET['user_id'];

$q1 = "select * from users where user_id = '$user_id'";
$res1 = mysqli_query($con, $q1);
$row1 = mysqli_fetch_assoc($res1);

$dashboards = $row1['dashboards'];

if($dashboards == '7')
{
	$un_total_val = 0;
	$un_worked_val = 0;
	$dtr_tw_val = 0;
	$dtr_issuelog_val = 0;
	$prw_total_val = 0;
	$prw_worked_val = 0;
	$prw_left_val = 0;
	$ncoa_refund_val = 0;
	$ncoa_updates_val = 0;
	$ncoa_skiptrace_val = 0;

	$sql = "select * from cm1_data where when_done between '$startdate' and '$enddate'";
	if($res = mysqli_query($con, $sql))
	{
		$c = 0;
		while($row = mysqli_fetch_assoc($res))
		{
			if($row['un_total'] == "") 
			{
				$un_total_val = "-";
			} 
			else 
			{
				$un_total_val = $row['un_total'];
			}
			
			if($row['un_worked'] == "") 
			{
				$un_worked_val = "-";
			} 
			else 
			{
				$un_worked_val = $row['un_worked'];
			}
			
			if($row['dtr_tw'] == "") 
			{
				$dtr_tw_val = "-";
			} 
			else 
			{
				$dtr_tw_val = $row['dtr_tw'];
			}
			
			if($row['dtr_issuelog'] == "") 
			{
				$dtr_issuelog_val = "-";
			} 
			else 
			{
				$dtr_issuelog_val = $row['dtr_issuelog'];
			}
			
			if($row['prw_total'] == "") 
			{
				$prw_total_val = "-";
			} 
			else 
			{
				$prw_total_val = $row['prw_total'];
			}
			if($row['prw_worked'] == "") 
			{
				$prw_worked_val = "-";
			} 
			else 
			{
				$prw_worked_val = $row['prw_worked'];
			}
			if($row['prw_left'] == "") 
			{
				$prw_left_val = "-";
			} 
			else 
			{
				$prw_left_val = $row['prw_left'];
			}
			if($row['ncoa_refund'] == "") 
			{
				$ncoa_refund_val = "-";
			} 
			else 
			{
				$ncoa_refund_val = $row['ncoa_refund'];
			}
			if($row['ncoa_updates'] == "") 
			{
				$ncoa_updates_val = "-";
			} 
			else 
			{
				$ncoa_updates_val = $row['ncoa_updates'];
			}
			if($row['ncoa_skiptrace'] == "") 
			{
				$ncoa_skiptrace_val = "-";
			} 
			else 
			{
				$ncoa_skiptrace_val = $row['ncoa_skiptrace'];
			}
			
			$emp[$c]['id'] = $row['cm1_id'];
			$emp[$c]['user_id'] = $user_id;
			$emp[$c]['when_done'] = $row['when_done'];
			$emp[$c]['dashboards'] = $dashboards;
			$emp[$c]['un_total'] = $un_total_val;
			$emp[$c]['un_worked'] = $un_worked_val;
			$emp[$c]['dtr_tw'] = $dtr_tw_val;
			$emp[$c]['dtr_issuelog'] = $dtr_issuelog_val;
			$emp[$c]['prw_total'] = $prw_total_val;
			$emp[$c]['prw_worked'] = $prw_worked_val;
			$emp[$c]['prw_left'] = $prw_left_val;
			$emp[$c]['ncoa_refund'] = $ncoa_refund_val;
			$emp[$c]['ncoa_updates'] = $ncoa_updates_val;
			$emp[$c]['ncoa_skiptrace'] = $ncoa_skiptrace_val;
			
			$c++;
		}
		
		echo json_encode($emp);
	}
}
else
{
	http_response_code(404);
}


?>