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
	$ilc_pages_val = 0;
	$ilc_completed_val = 0;
	$efts_num_val = 0;
	$efts_completed_val = 0;
	$sc_wcupdates_val = 0;
	$sc_wccorr_val = 0;
	$sc_nfcorr_val = 0;
	$sc_to_val = 0;
	$sc_de_val = 0;
	$sc_tf_val = 0;
	$ccp_total_val = 0;
	$ccp_completed_val = 0;
	$iar_nt_val = 0;
	$iar_completed_val = 0;
	$iar_updates_val = 0;
	$iar_completed1_val = 0;
	$wi_tnb_val = 0;
	$wi_addissue_val = 0;
	$wi_worked_val = 0;
	$wi_left_val = 0;
	
	$sql = "select * from cm2_data where when_done between '$startdate' and '$enddate'";
	if($res = mysqli_query($con, $sql))
	{
		$c = 0;
		while($row = mysqli_fetch_assoc($res))
		{
			if($row['ilc_pages'] == "") 
			{
				$ilc_pages_val = "-";
			} 
			else 
			{
				$ilc_pages_val = $row['ilc_pages'];
			}
			
			if($row['ilc_completed'] == "") 
			{
				$ilc_completed_val = "-";
			} 
			else 
			{
				$ilc_completed_val = $row['ilc_completed'];
			}
			
			if($row['efts_num'] == "") 
			{
				$efts_num_val = "-";
			} 
			else 
			{
				$efts_num_val = $row['efts_num'];
			}
			
			if($row['efts_completed'] == "") 
			{
				$efts_completed_val = "-";
			} 
			else 
			{
				$efts_completed_val = $row['efts_completed'];
			}
			
			if($row['sc_wcupdates'] == "") 
			{
				$sc_wcupdates_val = "-";
			} 
			else 
			{
				$sc_wcupdates_val = $row['sc_wcupdates'];
			}
			if($row['sc_wccorr'] == "") 
			{
				$sc_wccorr_val = "-";
			} 
			else 
			{
				$sc_wccorr_val = $row['sc_wccorr'];
			}
			if($row['sc_nfcorr'] == "") 
			{
				$sc_nfcorr_val = "-";
			} 
			else 
			{
				$sc_nfcorr_val = $row['sc_nfcorr'];
			}
			if($row['sc_to'] == "") 
			{
				$sc_to_val = "-";
			} 
			else 
			{
				$sc_to_val = $row['sc_to'];
			}
			if($row['sc_de'] == "") 
			{
				$sc_de_val = "-";
			} 
			else 
			{
				$sc_de_val = $row['sc_de'];
			}
			if($row['sc_tf'] == "") 
			{
				$sc_tf_val = "-";
			} 
			else 
			{
				$sc_tf_val = $row['sc_tf'];
			}
			
			if($row['ccp_total'] == "") 
			{
				$ccp_total_val = "-";
			} 
			else 
			{
				$ccp_total_val = $row['ccp_total'];
			}
			
			if($row['ccp_completed'] == "") 
			{
				$ccp_completed_val = "-";
			} 
			else 
			{
				$ccp_completed_val = $row['ccp_completed'];
			}
			
			if($row['iar_nt'] == "") 
			{
				$iar_nt_val = "-";
			} 
			else 
			{
				$iar_nt_val = $row['iar_nt'];
			}
			
			if($row['iar_completed'] == "") 
			{
				$iar_completed_val = "-";
			} 
			else 
			{
				$iar_completed_val = $row['iar_completed'];
			}
			
			if($row['iar_updates'] == "") 
			{
				$iar_updates_val = "-";
			} 
			else 
			{
				$iar_updates_val = $row['iar_updates'];
			}
			if($row['iar_completed1'] == "") 
			{
				$iar_completed1_val = "-";
			} 
			else 
			{
				$iar_completed1_val = $row['iar_completed1'];
			}
			if($row['wi_tnb'] == "") 
			{
				$wi_tnb_val = "-";
			} 
			else 
			{
				$wi_tnb_val = $row['wi_tnb'];
			}
			if($row['wi_addissue'] == "") 
			{
				$wi_addissue_val = "-";
			} 
			else 
			{
				$wi_addissue_val = $row['wi_addissue'];
			}
			if($row['wi_worked'] == "") 
			{
				$wi_worked_val = "-";
			} 
			else 
			{
				$wi_worked_val = $row['wi_worked'];
			}
			if($row['wi_left'] == "") 
			{
				$wi_left_val = "-";
			} 
			else 
			{
				$wi_left_val = $row['wi_left'];
			}
			
			$emp[$c]['id'] = $row['cm2_id'];
			$emp[$c]['user_id'] = $user_id;
			$emp[$c]['when_done'] = $row['when_done'];
			$emp[$c]['dashboards'] = $dashboards;
			
			$emp[$c]['ilc_pages'] = $ilc_pages_val;
			$emp[$c]['ilc_completed'] = $ilc_completed_val;
			$emp[$c]['efts_num'] = $efts_num_val;
			$emp[$c]['efts_completed'] = $efts_completed_val;
			$emp[$c]['sc_wcupdates'] = $sc_wcupdates_val;
			$emp[$c]['sc_wccorr'] = $sc_wccorr_val;
			$emp[$c]['sc_nfcorr'] = $sc_nfcorr_val;
			$emp[$c]['sc_to'] = $sc_to_val;
			$emp[$c]['sc_de'] = $sc_de_val;
			$emp[$c]['sc_tf'] = $sc_tf_val;
			$emp[$c]['ccp_total'] = $ccp_total_val;
			$emp[$c]['ccp_completed'] = $ccp_completed_val;
			$emp[$c]['iar_nt'] = $iar_nt_val;
			$emp[$c]['iar_completed'] = $iar_completed_val;
			$emp[$c]['iar_updates'] = $iar_updates_val;
			$emp[$c]['iar_completed1'] = $iar_completed1_val;
			$emp[$c]['wi_tnb'] = $wi_tnb_val;
			$emp[$c]['wi_addissue'] = $wi_addissue_val;
			$emp[$c]['wi_worked'] = $wi_worked_val;
			$emp[$c]['wi_left'] = $wi_left_val;
			
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