<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

$emp = [];
$dets = [];

$startdate = $_GET['startdate'];
$enddate = $_GET['enddate'];
$dashboards = $_GET['dashboards'];

$format = ('Y-m-d');
//get all dates between the date range given
$array = array(); 
      
// Variable that store the date interval of period 1 day 
$interval = new DateInterval('P1M'); 

$realEnd = new DateTime($enddate); 
$realEnd->add($interval); 

$period = new DatePeriod(new DateTime($startdate), $interval, $realEnd); 

// Use loop to store date into array 
foreach($period as $date) {                  
	$array[] = $date->format('Y n d');  
} 
//print_r($array);

$end_date = $_GET['enddate'];
$ed1 = strtotime($end_date);
$endmonth = date("n",$ed1);

$start_date = $_GET['startdate'];
$sd1 = strtotime($start_date);
$startmonth = date("n",$sd1);

if($endmonth == $startmonth)
{
	$arraysize = sizeof($array) - 1;
}
else{
	$arraysize = sizeof($array);
}
$months = array();
$i = 0;
while($i<$arraysize)
{
	$c1 = 0;
	$c2 = 0;
	$mon = preg_split("/[\s,]+/", $array[$i])[1];
	$year = preg_split("/[\s,]+/", $array[$i])[0];
	
	$months[] = $mon;
	
	$i++;
}
//print_r($months);

if($dashboards == '1' or $dashboards == 1)
{
	
	$sql = "select * from ar_data where when_done between '$startdate' and '$enddate'";
	if($res = mysqli_query($con, $sql))
	{
		$c = 0;
		while($row = mysqli_fetch_assoc($res))
		{
			$emp[$c]['id'] = $row['ar_id'];
			$emp[$c]['when_done'] = $row['when_done'];
			$emp[$c]['dashboards'] = $dashboards;
			$emp[$c]['wb_tech_other'] = $row['wb_tech_other'];
			$emp[$c]['wb_demo_elig'] = $row['wb_demo_elig'];
			$emp[$c]['wb_timely_filing'] = $row['wb_timely_filing'];
			$emp[$c]['wb_coding_replies'] = $row['wb_coding_replies'];
			$emp[$c]['wb_sup_reviews'] = $row['wb_sup_reviews'];
			$emp[$c]['wb_nf_corres'] = $row['wb_nf_corres'];
			$emp[$c]['wb_wc_corres'] = $row['wb_wc_corres'];
			$emp[$c]['waystar_medc_sec'] = $row['waystar_medc_sec'];
			$emp[$c]['waystar_oob'] = $row['waystar_oob'];
			$emp[$c]['waystar_fidelis_tf'] = $row['waystar_fidelis_tf'];

			$dat1 = strtotime($row['when_done']);
			$mon1 = date("n",$dat1);
			
			$sql1 = "select * from ar_goals where when_done = '$mon1'";
			$res1 = mysqli_query($con, $sql1);
			$row1 = mysqli_fetch_assoc($res1);
		
			
			$emp[$c]['wb_tech_other_goals'] = $row1['wb_tech_other'];
			$emp[$c]['wb_demo_elig_goals'] = $row1['wb_demo_elig'];
			$emp[$c]['wb_timely_filing_goals'] = $row1['wb_timely_filing'];
			$emp[$c]['wb_coding_replies_goals'] = $row1['wb_coding_replies'];
			$emp[$c]['wb_sup_reviews_goals'] = $row1['wb_sup_reviews'];
			$emp[$c]['wb_nf_corres_goals'] = $row1['wb_nf_corres'];
			$emp[$c]['wb_wc_corres_goals'] = $row1['wb_wc_corres'];
			$emp[$c]['waystar_medc_sec_goals'] = $row1['waystar_medc_sec'];
			$emp[$c]['waystar_oob_goals'] = $row1['waystar_oob'];
			$emp[$c]['waystar_fidelis_tf_goals'] = $row1['waystar_fidelis_tf'];
			$emp[$c]['mon'] = $mon1;
			
			$c++;
		}
		
		if(empty($emp[$c]['id']) == True)
		{
			$wb_tech_other_count = 0;
			$wb_demo_elig_count = 0;
			$wb_timely_filing_count = 0;
			$wb_coding_replies_count = 0;
			$wb_sup_reviews_count = 0;
			$wb_nf_corres_count = 0;
			$wb_wc_corres_count = 0;
			$waystar_medc_sec_count = 0;
			$waystar_oob_count = 0;
			$waystar_fidelis_tf_count = 0;
			
			$goal_mon = 0;
			$wb_tech_other_goals = 0;
			$wb_demo_elig_goals = 0;
			$wb_timely_filing_goals = 0;
			$wb_coding_replies_goals = 0;
			$wb_sup_reviews_goals = 0;
			$wb_nf_corres_goals = 0;
			$wb_wc_corres_goals = 0;
			$waystar_medc_sec_goals = 0;
			$waystar_oob_goals = 0;
			$waystar_fidelis_tf_goals = 0;
			
			$c1 = 0;
			$c2 = 0;
			$month_num = 0;
			$num_of_m = sizeof($months);
			
			$y = 0;
			$x = 0;
			
			
				while(($x < $c) and($y < $num_of_m))
				{
					$cm = $months[$y];
					
					$curr_date = $emp[$x]['when_done'];
					$str_curr_date = strtotime($curr_date);
					$curr_month = date("n",$str_curr_date);
					
					if($cm == $curr_month)
					{
						
						$c1++;
						$wb_tech_other = isset($emp[$x]['wb_tech_other']) ? $emp[$x]['wb_tech_other'] : 0;
						$wb_demo_elig = isset($emp[$x]['wb_demo_elig']) ? $emp[$x]['wb_demo_elig'] : 0;
						$wb_timely_filing = isset($emp[$x]['wb_timely_filing']) ? $emp[$x]['wb_timely_filing'] : 0;
						$wb_coding_replies = isset($emp[$x]['wb_coding_replies']) ? $emp[$x]['wb_coding_replies'] : 0;
						$wb_sup_reviews = isset($emp[$x]['wb_sup_reviews']) ? $emp[$x]['wb_sup_reviews'] : 0;
						$wb_nf_corres = isset($emp[$x]['wb_nf_corres']) ? $emp[$x]['wb_nf_corres'] : 0;
						$wb_wc_corres = isset($emp[$x]['wb_wc_corres']) ? $emp[$x]['wb_wc_corres'] : 0;
						$waystar_medc_sec = isset($emp[$x]['waystar_medc_sec']) ? $emp[$x]['waystar_medc_sec'] : 0;
						$waystar_oob = isset($emp[$x]['waystar_oob']) ? $emp[$x]['waystar_oob'] : 0;
						$waystar_fidelis_tf = isset($emp[$x]['waystar_fidelis_tf']) ? $emp[$x]['waystar_fidelis_tf'] : 0;
						
						$goal_mon = isset($emp[$x]['mon']) ? $emp[$x]['mon'] : "-";
						$wb_tech_other_goals = isset($emp[$x]['wb_tech_other_goals']) ? $emp[$x]['wb_tech_other_goals'] : 0;
						$wb_demo_elig_goals = isset($emp[$x]['wb_demo_elig_goals']) ? $emp[$x]['wb_demo_elig_goals'] : 0;
						$wb_timely_filing_goals = isset($emp[$x]['wb_timely_filing_goals']) ? $emp[$x]['wb_timely_filing_goals'] : 0;
						$wb_coding_replies_goals = isset($emp[$x]['wb_coding_replies_goals']) ? $emp[$x]['wb_coding_replies_goals'] : 0;
						$wb_sup_reviews_goals = isset($emp[$x]['wb_sup_reviews_goals']) ? $emp[$x]['wb_sup_reviews_goals'] : 0;
						$wb_nf_corres_goals = isset($emp[$x]['wb_nf_corres_goals']) ? $emp[$x]['wb_nf_corres_goals'] : 0;
						$wb_wc_corres_goals = isset($emp[$x]['wb_wc_corres_goals']) ? $emp[$x]['wb_wc_corres_goals'] : 0;
						$waystar_medc_sec_goals = isset($emp[$x]['waystar_medc_sec_goals']) ? $emp[$x]['waystar_medc_sec_goals'] : 0;
						$waystar_oob_goals = isset($emp[$x]['waystar_oob_goals']) ? $emp[$x]['waystar_oob_goals'] : 0;
						$waystar_fidelis_tf_goals = isset($emp[$x]['waystar_fidelis_tf_goals']) ? $emp[$x]['waystar_fidelis_tf_goals'] : 0;
						
						
						
						$wb_tech_other_count = $wb_tech_other_count + $wb_tech_other;
						$wb_demo_elig_count = $wb_demo_elig_count + $wb_demo_elig;
						$wb_timely_filing_count = $wb_timely_filing_count + $wb_timely_filing;
						$wb_coding_replies_count = $wb_coding_replies_count + $wb_coding_replies;
						$wb_sup_reviews_count = $wb_sup_reviews_count + $wb_sup_reviews;
						$wb_nf_corres_count = $wb_nf_corres_count + $wb_nf_corres;
						$wb_wc_corres_count = $wb_wc_corres_count + $wb_wc_corres;
						$waystar_medc_sec_count = $waystar_medc_sec_count + $waystar_medc_sec;
						$waystar_oob_count = $waystar_oob_count + $waystar_oob;
						$waystar_fidelis_tf_count = $waystar_fidelis_tf_count + $waystar_fidelis_tf;
						
						$x++;
					}
					else
					{
						if($c1 == 0)
						{
							$c2 = 1;
						}
						else{
							$c2 = isset($c1) ? $c1 : 1;
						}
				
						$dets[$y]['id'] = $row['ar_id'];
						$dets[$y]['when_done'] = $cm;
						$dets[$y]['dashboards'] = $dashboards;
						$dets[$y]['wb_tech_other_count'] = round($wb_tech_other_count / $c2);
						$dets[$y]['wb_demo_elig_count'] = round($wb_demo_elig_count / $c2);
						$dets[$y]['wb_timely_filing_count'] = round($wb_timely_filing_count / $c2);
						$dets[$y]['wb_coding_replies_count'] = round($wb_coding_replies_count / $c2);
						$dets[$y]['wb_sup_reviews_count'] = round($wb_sup_reviews_count / $c2);
						$dets[$y]['wb_nf_corres_count'] = round($wb_nf_corres_count / $c2);
						$dets[$y]['wb_wc_corres_count'] = round($wb_wc_corres_count / $c2);
						$dets[$y]['waystar_medc_sec_count'] = round($waystar_medc_sec_count / $c2);
						$dets[$y]['waystar_oob_count'] = round($waystar_oob_count / $c2);
						$dets[$y]['waystar_fidelis_tf_count'] = round($waystar_fidelis_tf_count / $c2);
						
						$dets[$y]['wb_tech_other_goals'] = $wb_tech_other_goals;
						$dets[$y]['wb_demo_elig_goals'] = $wb_demo_elig_goals;
						$dets[$y]['wb_timely_filing_goals'] = $wb_timely_filing_goals;
						$dets[$y]['wb_coding_replies_goals'] = $wb_coding_replies_goals;
						$dets[$y]['wb_sup_reviews_goals'] = $wb_sup_reviews_goals;
						$dets[$y]['wb_nf_corres_goals'] = $wb_nf_corres_goals;
						$dets[$y]['wb_wc_corres_goals'] = $wb_wc_corres_goals;
						$dets[$y]['waystar_medc_sec_goals'] = $waystar_medc_sec_goals;
						$dets[$y]['waystar_oob_goals'] = $waystar_oob_goals;
						$dets[$y]['waystar_fidelis_tf_goals'] = $waystar_fidelis_tf_goals;
						$dets[$y]['mon'] = $cm;
						
						
						$c1 = 0;
						$c2 = 0;
						$y++;
						
						$wb_tech_other_count = 0;
						$wb_demo_elig_count = 0;
						$wb_timely_filing_count = 0;
						$wb_coding_replies_count = 0;
						$wb_sup_reviews_count = 0;
						$wb_nf_corres_count = 0;
						$wb_wc_corres_count = 0;
						$waystar_medc_sec_count = 0;
						$waystar_oob_count = 0;
						$waystar_fidelis_tf_count = 0;
					}
					
				}
				if($c1 == 0)
				{
					$c2 = 1;
				}
				else{
					$c2 = isset($c1) ? $c1 : 1;
				}
		
				$dets[$y]['id'] = $row['ar_id'];
				$dets[$y]['when_done'] = $cm;
				$dets[$y]['dashboards'] = $dashboards;
				$dets[$y]['wb_tech_other_count'] = round($wb_tech_other_count / $c2);
				$dets[$y]['wb_demo_elig_count'] = round($wb_demo_elig_count / $c2);
				$dets[$y]['wb_timely_filing_count'] = round($wb_timely_filing_count / $c2);
				$dets[$y]['wb_coding_replies_count'] = round($wb_coding_replies_count / $c2);
				$dets[$y]['wb_sup_reviews_count'] = round($wb_sup_reviews_count / $c2);
				$dets[$y]['wb_nf_corres_count'] = round($wb_nf_corres_count / $c2);
				$dets[$y]['wb_wc_corres_count'] = round($wb_wc_corres_count / $c2);
				$dets[$y]['waystar_medc_sec_count'] = round($waystar_medc_sec_count / $c2);
				$dets[$y]['waystar_oob_count'] = round($waystar_oob_count / $c2);
				$dets[$y]['waystar_fidelis_tf_count'] = round($waystar_fidelis_tf_count / $c2);
				
				
				$dets[$y]['wb_tech_other_goals'] = $wb_tech_other_goals;
				$dets[$y]['wb_demo_elig_goals'] = $wb_demo_elig_goals;
				$dets[$y]['wb_timely_filing_goals'] = $wb_timely_filing_goals;
				$dets[$y]['wb_coding_replies_goals'] = $wb_coding_replies_goals;
				$dets[$y]['wb_sup_reviews_goals'] = $wb_sup_reviews_goals;
				$dets[$y]['wb_nf_corres_goals'] = $wb_nf_corres_goals;
				$dets[$y]['wb_wc_corres_goals'] = $wb_wc_corres_goals;
				$dets[$y]['waystar_medc_sec_goals'] = $waystar_medc_sec_goals;
				$dets[$y]['waystar_oob_goals'] = $waystar_oob_goals;
				$dets[$y]['waystar_fidelis_tf_goals'] = $waystar_fidelis_tf_goals;
				$dets[$y]['mon'] = $cm;
				
			echo json_encode($dets);
		}
		else
		{
			$emp[$c]['id'] = 0;
			$emp[$c]['when_done'] = $row['when_done'];
			$emp[$c]['dashboards'] = $dashboards;
			$emp[$c]['wb_tech_other'] = 0;
			$emp[$c]['wb_demo_elig'] = 0;
			$emp[$c]['wb_timely_filing'] = 0;
			$emp[$c]['wb_coding_replies'] = 0;
			$emp[$c]['wb_sup_reviews'] = 0;
			$emp[$c]['wb_nf_corres'] = 0;
			$emp[$c]['wb_wc_corres'] = 0;
			$emp[$c]['waystar_medc_sec'] = 0;
			$emp[$c]['waystar_oob'] = 0;
			$emp[$c]['waystar_fidelis_tf'] = 0;
			
			
			$emp[$c]['wb_tech_other_goals'] = 0;
			$emp[$c]['wb_demo_elig_goals'] = 0;
			$emp[$c]['wb_timely_filing_goals'] = 0;
			$emp[$c]['wb_coding_replies_goals'] = 0;
			$emp[$c]['wb_sup_reviews_goals'] = 0;
			$emp[$c]['wb_nf_corres_goals'] = 0;
			$emp[$c]['wb_wc_corres_goals'] = 0;
			$emp[$c]['waystar_medc_sec_goals'] = 0;
			$emp[$c]['waystar_oob_goals'] = 0;
			$emp[$c]['waystar_fidelis_tf_goals'] = 0;
			$emp[$c]['mon'] = "-";
			
			echo json_encode($emp);
		}
		
	}
}
if($dashboards == '2' or $dashboards == 2)
{
	
	$sql = "select * from os_data where when_done between '$startdate' and '$enddate' order by when_done";
	if($res = mysqli_query($con, $sql))
	{
		$c = 0;
		while($row = mysqli_fetch_assoc($res))
		{
			$emp[$c]['id'] = $row['os_id'];
			$emp[$c]['when_done'] = $row['when_done'];
			$emp[$c]['dashboards'] = $dashboards;
			
			$emp[$c]['RPQ_print_queue_total'] = $row['RPQ_print_queue_total'];
			$emp[$c]['RPQ_num_of_WC'] = $row['RPQ_num_of_WC'];
			$emp[$c]['IL_RCM_Ins'] = $row['IL_RCM_Ins'];
			$emp[$c]['IL_RCM_WC'] = $row['IL_RCM_WC'];
			$emp[$c]['IL_NINS'] = $row['IL_NINS'];
			$emp[$c]['IL_NNF'] = $row['IL_NNF'];
			$emp[$c]['IL_NWC'] = $row['IL_NWC'];
			$emp[$c]['IL_ENL'] = $row['IL_ENL'];
			$emp[$c]['RA_WS_Prof'] = $row['RA_WS_Prof'];
			$emp[$c]['RA_WS_Prof_Day'] = $row['RA_WS_Prof_Day'];
			$emp[$c]['RA_WS_Inst'] = $row['RA_WS_Inst'];
			$emp[$c]['RA_WS_Inst_Day'] = $row['RA_WS_Inst_Day'];
			$emp[$c]['RA_Attachments'] = $row['RA_Attachments'];
			$emp[$c]['WBE_NF_Updates'] = $row['WBE_NF_Updates'];
			$emp[$c]['WBE_WC_Updates'] = $row['WBE_WC_Updates'];
			$emp[$c]['WBE_OS_Email_Inbox'] = $row['WBE_OS_Email_Inbox'];
			$emp[$c]['Coding_FFS_Total'] = $row['Coding_FFS_Total'];
			$emp[$c]['Coding_FFS_On_hold'] = $row['Coding_FFS_On_hold'];
			$emp[$c]['Coding_Coding_Queue'] = $row['Coding_Coding_Queue'];
			$emp[$c]['Coding_Coding_Queue_Days'] = $row['Coding_Coding_Queue_Days'];
			$emp[$c]['Coding_WS_Coding'] = $row['Coding_WS_Coding'];
			$emp[$c]['Coding_FFS_Onhold_Report'] = $row['Coding_FFS_Onhold_Report'];

			$dat1 = strtotime($row['when_done']);
			$mon1 = date("n",$dat1);
			
			$sql1 = "select * from os_goals where when_done = '$mon1'";
			$res1 = mysqli_query($con, $sql1);
			$row1 = mysqli_fetch_assoc($res1);
		
			
			$emp[$c]['RPQ_print_queue_total_goals'] = $row1['RPQ_print_queue_total'];
			$emp[$c]['RPQ_num_of_WC_goals'] = $row1['RPQ_num_of_WC'];
			$emp[$c]['IL_RCM_Ins_goals'] = $row1['IL_RCM_Ins'];
			$emp[$c]['IL_RCM_WC_goals'] = $row1['IL_RCM_WC'];
			$emp[$c]['IL_NINS_goals'] = $row1['IL_NINS'];
			$emp[$c]['IL_NNF_goals'] = $row1['IL_NNF'];
			$emp[$c]['IL_NWC_goals'] = $row1['IL_NWC'];
			$emp[$c]['IL_ENL_goals'] = $row1['IL_ENL'];
			$emp[$c]['RA_WS_Prof_goals'] = $row1['RA_WS_Prof'];
			$emp[$c]['RA_WS_Prof_Day_goals'] = $row1['RA_WS_Prof_Day'];
			$emp[$c]['RA_WS_Inst_goals'] = $row1['RA_WS_Inst'];
			$emp[$c]['RA_WS_Inst_Day_goals'] = $row1['RA_WS_Inst_Day'];
			$emp[$c]['RA_Attachments_goals'] = $row1['RA_Attachments'];
			$emp[$c]['WBE_NF_Updates_goals'] = $row1['WBE_NF_Updates'];
			$emp[$c]['WBE_WC_Updates_goals'] = $row1['WBE_WC_Updates'];
			$emp[$c]['WBE_OS_Email_Inbox_goals'] = $row1['WBE_OS_Email_Inbox'];
			$emp[$c]['Coding_FFS_Total_goals'] = $row1['Coding_FFS_Total'];
			$emp[$c]['Coding_FFS_On_hold_goals'] = $row1['Coding_FFS_On_hold'];
			$emp[$c]['Coding_Coding_Queue_goals'] = $row1['Coding_Coding_Queue'];
			$emp[$c]['Coding_Coding_Queue_Days_goals'] = $row1['Coding_Coding_Queue_Days'];
			$emp[$c]['Coding_WS_Coding_goals'] = $row1['Coding_WS_Coding'];
			$emp[$c]['Coding_FFS_Onhold_Report_goals'] = $row1['Coding_FFS_Onhold_Report'];
			$emp[$c]['mon'] = $mon1;
			
			$c++;
		}
		
		if(empty($emp[$c]['id']) == True)
		{
			$RPQ_print_queue_total_count = 0;
			$RPQ_num_of_WC_count = 0;
			$IL_RCM_Ins_count = 0;
			$IL_RCM_WC_count = 0;
			$IL_NINS_count = 0;
			$IL_NNF_count = 0;
			$IL_NWC_count = 0;
			$IL_ENL_count = 0;
			$RA_WS_Prof_count = 0;
			$RA_WS_Prof_Day_count = 0;
			$RA_WS_Inst_count = 0;
			$RA_WS_Inst_Day_count = 0;
			$RA_Attachments_count = 0;
			$WBE_NF_Updates_count = 0;
			$WBE_WC_Updates_count = 0;
			$WBE_OS_Email_Inbox_count = 0;
			$Coding_FFS_Total_count = 0;
			$Coding_FFS_On_hold_count = 0;
			$Coding_Coding_Queue_count = 0;
			$Coding_Coding_Queue_Days_count = 0;
			$Coding_WS_Coding_count = 0;
			$Coding_FFS_Onhold_Report_count = 0;
			
			$goal_mon = 0;
			$RPQ_print_queue_total_goals = 0;
			$RPQ_num_of_WC_goals = 0;
			$IL_RCM_Ins_goals = 0;
			$IL_RCM_WC_goals = 0;
			$IL_NINS_goals = 0;
			$IL_NNF_goals = 0;
			$IL_NWC_goals = 0;
			$IL_ENL_goals = 0;
			$RA_WS_Prof_goals = 0;
			$RA_WS_Prof_Day_goals = 0;
			$RA_WS_Inst_goals = 0;
			$RA_WS_Inst_Day_goals = 0;
			$RA_Attachments_goals= 0;
			$WBE_NF_Updates_goals = 0;
			$WBE_WC_Updates_goals = 0;
			$WBE_OS_Email_Inbox_goals = 0;
			$Coding_FFS_Total_goals = 0;
			$Coding_FFS_On_hold_goals = 0;
			$Coding_Coding_Queue_goals = 0;
			$Coding_Coding_Queue_Days_goals = 0;
			$Coding_WS_Coding_goals = 0;
			$Coding_FFS_Onhold_Report_goals = 0;
			
			$c1 = 0;
			$c2 = 0;
			$month_num = 0;
			$num_of_m = sizeof($months);
			
			$y = 0;
			$x = 0;
			
			
				while(($x < $c) and($y < $num_of_m))
				{
					$cm = $months[$y];
					
					$curr_date = $emp[$x]['when_done'];
					$str_curr_date = strtotime($curr_date);
					$curr_month = date("n",$str_curr_date);
					
					if($cm == $curr_month)
					{
						
						$c1++;
						
						$RPQ_print_queue_total = isset($emp[$x]['RPQ_print_queue_total']) ? $emp[$x]['RPQ_print_queue_total'] : 0;
						$RPQ_num_of_WC = isset($emp[$x]['RPQ_num_of_WC']) ? $emp[$x]['RPQ_num_of_WC'] : 0;
						$IL_RCM_Ins = isset($emp[$x]['IL_RCM_Ins']) ? $emp[$x]['IL_RCM_Ins'] : 0;
						$IL_RCM_WC = isset($emp[$x]['IL_RCM_WC']) ? $emp[$x]['IL_RCM_WC'] : 0;
						$IL_NINS = isset($emp[$x]['IL_NINS']) ? $emp[$x]['IL_NINS'] : 0;
						$IL_NNF = isset($emp[$x]['IL_NNF']) ? $emp[$x]['IL_NNF'] : 0;
						$IL_NWC = isset($emp[$x]['IL_NWC']) ? $emp[$x]['IL_NWC'] : 0;
						$IL_ENL = isset($emp[$x]['IL_ENL']) ? $emp[$x]['IL_ENL'] : 0;
						$RA_WS_Prof = isset($emp[$x]['RA_WS_Prof']) ? $emp[$x]['RA_WS_Prof'] : 0;
						$RA_WS_Prof_Day = isset($emp[$x]['RA_WS_Prof_Day']) ? $emp[$x]['RA_WS_Prof_Day'] : 0;
						$RA_WS_Inst = isset($emp[$x]['RA_WS_Inst']) ? $emp[$x]['RA_WS_Inst'] : 0;
						$RA_WS_Inst_Day = isset($emp[$x]['RA_WS_Inst_Day']) ? $emp[$x]['RA_WS_Inst_Day'] : 0;
						$RA_Attachments = isset($emp[$x]['RA_Attachments']) ? $emp[$x]['RA_Attachments'] : 0;
						$WBE_NF_Updates = isset($emp[$x]['WBE_NF_Updates']) ? $emp[$x]['WBE_NF_Updates'] : 0;
						$WBE_WC_Updates = isset($emp[$x]['WBE_WC_Updates']) ? $emp[$x]['WBE_WC_Updates'] : 0;
						$WBE_OS_Email_Inbox = isset($emp[$x]['WBE_OS_Email_Inbox']) ? $emp[$x]['WBE_OS_Email_Inbox'] : 0;
						$Coding_FFS_Total = isset($emp[$x]['Coding_FFS_Total']) ? $emp[$x]['Coding_FFS_Total'] : 0;
						$Coding_FFS_On_hold = isset($emp[$x]['Coding_FFS_On_hold']) ? $emp[$x]['Coding_FFS_On_hold'] : 0;
						$Coding_Coding_Queue = isset($emp[$x]['Coding_Coding_Queue']) ? $emp[$x]['Coding_Coding_Queue'] : 0;
						$Coding_Coding_Queue_Days = isset($emp[$x]['Coding_Coding_Queue_Days']) ? $emp[$x]['Coding_Coding_Queue_Days'] : 0;
						$Coding_WS_Coding = isset($emp[$x]['Coding_WS_Coding']) ? $emp[$x]['Coding_WS_Coding'] : 0;
						$Coding_FFS_Onhold_Report = isset($emp[$x]['Coding_FFS_Onhold_Report']) ? $emp[$x]['Coding_FFS_Onhold_Report'] : 0;
						
						$goal_mon = isset($emp[$x]['mon']) ? $emp[$x]['mon'] : "-";
						
						$RPQ_print_queue_total_goals = isset($emp[$x]['RPQ_print_queue_total_goals']) ? $emp[$x]['RPQ_print_queue_total_goals'] : 0;
						$RPQ_num_of_WC_goals = isset($emp[$x]['RPQ_num_of_WC_goals']) ? $emp[$x]['RPQ_num_of_WC_goals'] : 0;
						$IL_RCM_Ins_goals = isset($emp[$x]['IL_RCM_Ins_goals']) ? $emp[$x]['IL_RCM_Ins_goals'] : 0;
						$IL_RCM_WC_goals = isset($emp[$x]['IL_RCM_WC_goals']) ? $emp[$x]['IL_RCM_WC_goals'] : 0;
						$IL_NINS_goals = isset($emp[$x]['IL_NINS_goals']) ? $emp[$x]['IL_NINS_goals'] : 0;
						$IL_NNF_goals = isset($emp[$x]['IL_NNF_goals']) ? $emp[$x]['IL_NNF_goals'] : 0;
						$IL_NWC_goals = isset($emp[$x]['IL_NWC_goals']) ? $emp[$x]['IL_NWC_goals'] : 0;
						$IL_ENL_goals = isset($emp[$x]['IL_ENL_goals']) ? $emp[$x]['IL_ENL_goals'] : 0;
						$RA_WS_Prof_goals = isset($emp[$x]['RA_WS_Prof_goals']) ? $emp[$x]['RA_WS_Prof_goals'] : 0;
						$RA_WS_Prof_Day_goals = isset($emp[$x]['RA_WS_Prof_Day_goals']) ? $emp[$x]['RA_WS_Prof_Day_goals'] : 0;
						$RA_WS_Inst_goals = isset($emp[$x]['RA_WS_Inst_goals']) ? $emp[$x]['RA_WS_Inst_goals'] : 0;
						$RA_WS_Inst_Day_goals = isset($emp[$x]['RA_WS_Inst_Day_goals']) ? $emp[$x]['RA_WS_Inst_Day_goals'] : 0;
						$RA_Attachments_goals = isset($emp[$x]['RA_Attachments_goals']) ? $emp[$x]['RA_Attachments_goals'] : 0;
						$WBE_NF_Updates_goals = isset($emp[$x]['WBE_NF_Updates_goals']) ? $emp[$x]['WBE_NF_Updates_goals'] : 0;
						$WBE_WC_Updates_goals = isset($emp[$x]['WBE_WC_Updates_goals']) ? $emp[$x]['WBE_WC_Updates_goals'] : 0;
						$WBE_OS_Email_Inbox_goals = isset($emp[$x]['WBE_OS_Email_Inbox_goals']) ? $emp[$x]['WBE_OS_Email_Inbox_goals'] : 0;
						$Coding_FFS_Total_goals = isset($emp[$x]['Coding_FFS_Total_goals']) ? $emp[$x]['Coding_FFS_Total_goals'] : 0;
						$Coding_FFS_On_hold_goals = isset($emp[$x]['Coding_FFS_On_hold_goals']) ? $emp[$x]['Coding_FFS_On_hold_goals'] : 0;
						$Coding_Coding_Queue_goals = isset($emp[$x]['Coding_Coding_Queue_goals']) ? $emp[$x]['Coding_Coding_Queue_goals'] : 0;
						$Coding_Coding_Queue_Days_goals = isset($emp[$x]['Coding_Coding_Queue_Days_goals']) ? $emp[$x]['Coding_Coding_Queue_Days_goals'] : 0;
						$Coding_WS_Coding_goals = isset($emp[$x]['Coding_WS_Coding_goals']) ? $emp[$x]['Coding_WS_Coding_goals'] : 0;
						$Coding_FFS_Onhold_Report_goals = isset($emp[$x]['Coding_FFS_Onhold_Report_goals']) ? $emp[$x]['Coding_FFS_Onhold_Report_goals'] : 0;
						
						$RPQ_print_queue_total_count = $RPQ_print_queue_total_count + $RPQ_print_queue_total;
						$RPQ_num_of_WC_count = $RPQ_num_of_WC_count + $RPQ_num_of_WC;
						$IL_RCM_Ins_count = $IL_RCM_Ins_count + $IL_RCM_Ins;
						$IL_RCM_WC_count = $IL_RCM_WC_count + $IL_RCM_WC;
						$IL_NINS_count = $IL_NINS_count + $IL_NINS;
						$IL_NNF_count = $IL_NNF_count + $IL_NNF;
						$IL_NWC_count = $IL_NWC_count + $IL_NWC;
						$IL_ENL_count = $IL_ENL_count + $IL_ENL;
						$RA_WS_Prof_count = $RA_WS_Prof_count + $RA_WS_Prof;
						$RA_WS_Prof_Day_count = $RA_WS_Prof_Day_count + $RA_WS_Prof_Day;
						$RA_WS_Inst_count = $RA_WS_Inst_count + $RA_WS_Inst;
						$RA_WS_Inst_Day_count = $RA_WS_Inst_Day_count + $RA_WS_Inst_Day;
						$RA_Attachments_count = $RA_Attachments_count + $RA_Attachments;
						$WBE_NF_Updates_count = $WBE_NF_Updates_count + $WBE_NF_Updates;
						$WBE_WC_Updates_count = $WBE_WC_Updates_count + $WBE_WC_Updates;
						$WBE_OS_Email_Inbox_count = $WBE_OS_Email_Inbox_count + $WBE_OS_Email_Inbox;
						$Coding_FFS_Total_count = $Coding_FFS_Total_count + $Coding_FFS_Total;
						$Coding_FFS_On_hold_count = $Coding_FFS_On_hold_count + $Coding_FFS_On_hold;
						$Coding_Coding_Queue_count = $Coding_Coding_Queue_count + $Coding_Coding_Queue;
						$Coding_Coding_Queue_Days_count = $Coding_Coding_Queue_Days_count + $Coding_Coding_Queue_Days;
						$Coding_WS_Coding_count = $Coding_WS_Coding_count + $Coding_WS_Coding;
						$Coding_FFS_Onhold_Report_count = $Coding_FFS_Onhold_Report_count + $Coding_FFS_Onhold_Report;
						
						$x++;
					}
					else
					{
						if($c1 == 0)
						{
							$c2 = 1;
						}
						else{
							$c2 = isset($c1) ? $c1 : 1;
						}
				
						$dets[$y]['id'] = $row['os_id'];
						$dets[$y]['when_done'] = $cm;
						$dets[$y]['dashboards'] = $dashboards;
						
						$dets[$y]['RPQ_print_queue_total_count'] = round($RPQ_print_queue_total_count / $c2);
						$dets[$y]['RPQ_num_of_WC_count'] = round($RPQ_num_of_WC_count / $c2);
						$dets[$y]['IL_RCM_Ins_count'] = round($IL_RCM_Ins_count / $c2);
						$dets[$y]['IL_RCM_WC_count'] = round($IL_RCM_WC_count / $c2);
						$dets[$y]['IL_NINS_count'] = round($IL_NINS_count / $c2);
						$dets[$y]['IL_NNF_count'] = round($IL_NNF_count / $c2);
						$dets[$y]['IL_NWC_count'] = round($IL_NWC_count / $c2);
						$dets[$y]['IL_ENL_count'] = round($IL_ENL_count / $c2);
						$dets[$y]['RA_WS_Prof_count'] = round($RA_WS_Prof_count / $c2);
						$dets[$y]['RA_WS_Prof_Day_count'] = round($RA_WS_Prof_Day_count / $c2);
						$dets[$y]['RA_WS_Inst_count'] = round($RA_WS_Inst_count / $c2);
						$dets[$y]['RA_WS_Inst_Day_count'] = round($RA_WS_Inst_Day_count / $c2);
						$dets[$y]['RA_Attachments_count'] = round($RA_Attachments_count / $c2);
						$dets[$y]['WBE_NF_Updates_count'] = round($WBE_NF_Updates_count / $c2);
						$dets[$y]['WBE_WC_Updates_count'] = round($WBE_WC_Updates_count / $c2);
						$dets[$y]['WBE_OS_Email_Inbox_count'] = round($WBE_OS_Email_Inbox_count / $c2);
						$dets[$y]['Coding_FFS_Total_count'] = round($Coding_FFS_Total_count / $c2);
						$dets[$y]['Coding_FFS_On_hold_count'] = round($Coding_FFS_On_hold_count / $c2);
						$dets[$y]['Coding_Coding_Queue_count'] = round($Coding_Coding_Queue_count / $c2);
						$dets[$y]['Coding_Coding_Queue_Days_count'] = round($Coding_Coding_Queue_Days_count / $c2);
						$dets[$y]['Coding_WS_Coding_count'] = round($Coding_WS_Coding_count / $c2);
						$dets[$y]['Coding_FFS_Onhold_Report_count'] = round($Coding_FFS_Onhold_Report_count / $c2);
						
						$dets[$y]['RPQ_print_queue_total_goals'] = $RPQ_print_queue_total_goals;
						$dets[$y]['RPQ_num_of_WC_goals'] = $RPQ_num_of_WC_goals;
						$dets[$y]['IL_RCM_Ins_goals'] = $IL_RCM_Ins_goals;
						$dets[$y]['IL_RCM_WC_goals'] = $IL_RCM_WC_goals;
						$dets[$y]['IL_NINS_goals'] = $IL_NINS_goals;
						$dets[$y]['IL_NNF_goals'] = $IL_NNF_goals;
						$dets[$y]['IL_NWC_goals'] = $IL_NWC_goals;
						$dets[$y]['IL_ENL_goals'] = $IL_ENL_goals;
						$dets[$y]['RA_WS_Prof_goals'] = $RA_WS_Prof_goals;
						$dets[$y]['RA_WS_Prof_Day_goals'] = $RA_WS_Prof_Day_goals;
						$dets[$y]['RA_WS_Inst_goals'] = $RA_WS_Inst_goals;
						$dets[$y]['RA_WS_Inst_Day_goals'] = $RA_WS_Inst_Day_goals;
						$dets[$y]['RA_Attachments_goals'] = $RA_Attachments_goals;
						$dets[$y]['WBE_NF_Updates_goals'] = $WBE_NF_Updates_goals;
						$dets[$y]['WBE_WC_Updates_goals'] = $WBE_WC_Updates_goals;
						$dets[$y]['WBE_OS_Email_Inbox_goals'] = $WBE_OS_Email_Inbox_goals;
						$dets[$y]['Coding_FFS_Total_goals'] = $Coding_FFS_Total_goals;
						$dets[$y]['Coding_FFS_On_hold_goals'] = $Coding_FFS_On_hold_goals;
						$dets[$y]['Coding_Coding_Queue_goals'] = $Coding_Coding_Queue_goals;
						$dets[$y]['Coding_Coding_Queue_Days_goals'] = $Coding_Coding_Queue_Days_goals;
						$dets[$y]['Coding_WS_Coding_goals'] = $Coding_WS_Coding_goals;
						$dets[$y]['Coding_FFS_Onhold_Report_goals'] = $Coding_FFS_Onhold_Report_goals;
						
						$dets[$y]['mon'] = $cm;
						
						
						$c1 = 0;
						$c2 = 0;
						$y++;
						
						$RPQ_print_queue_total_count = 0;
						$RPQ_num_of_WC_count = 0;
						$IL_RCM_Ins_count = 0;
						$IL_RCM_WC_count = 0;
						$IL_NINS_count = 0;
						$IL_NNF_count = 0;
						$IL_NWC_count = 0;
						$IL_ENL_count = 0;
						$RA_WS_Prof_count = 0;
						$RA_WS_Prof_Day_count = 0;
						$RA_WS_Inst_count = 0;
						$RA_WS_Inst_Day_count = 0;
						$RA_Attachments_count = 0;
						$WBE_NF_Updates_count = 0;
						$WBE_WC_Updates_count = 0;
						$WBE_OS_Email_Inbox_count = 0;
						$Coding_FFS_Total_count = 0;
						$Coding_FFS_On_hold_count = 0;
						$Coding_Coding_Queue_count = 0;
						$Coding_Coding_Queue_Days_count = 0;
						$Coding_WS_Coding_count = 0;
						$Coding_FFS_Onhold_Report_count = 0;
					}
					
				}
				if($c1 == 0)
				{
					$c2 = 1;
				}
				else{
					$c2 = isset($c1) ? $c1 : 1;
				}
		
				$dets[$y]['id'] = $row['os_id'];
				$dets[$y]['when_done'] = $cm;
				$dets[$y]['dashboards'] = $dashboards;
				
				$dets[$y]['RPQ_print_queue_total_count'] = round($RPQ_print_queue_total_count / $c2);
				$dets[$y]['RPQ_num_of_WC_count'] = round($RPQ_num_of_WC_count / $c2);
				$dets[$y]['IL_RCM_Ins_count'] = round($IL_RCM_Ins_count / $c2);
				$dets[$y]['IL_RCM_WC_count'] = round($IL_RCM_WC_count / $c2);
				$dets[$y]['IL_NINS_count'] = round($IL_NINS_count / $c2);
				$dets[$y]['IL_NNF_count'] = round($IL_NNF_count / $c2);
				$dets[$y]['IL_NWC_count'] = round($IL_NWC_count / $c2);
				$dets[$y]['IL_ENL_count'] = round($IL_ENL_count / $c2);
				$dets[$y]['RA_WS_Prof_count'] = round($RA_WS_Prof_count / $c2);
				$dets[$y]['RA_WS_Prof_Day_count'] = round($RA_WS_Prof_Day_count / $c2);
				$dets[$y]['RA_WS_Inst_count'] = round($RA_WS_Inst_count / $c2);
				$dets[$y]['RA_WS_Inst_Day_count'] = round($RA_WS_Inst_Day_count / $c2);
				$dets[$y]['RA_Attachments_count'] = round($RA_Attachments_count / $c2);
				$dets[$y]['WBE_NF_Updates_count'] = round($WBE_NF_Updates_count / $c2);
				$dets[$y]['WBE_WC_Updates_count'] = round($WBE_WC_Updates_count / $c2);
				$dets[$y]['WBE_OS_Email_Inbox_count'] = round($WBE_OS_Email_Inbox_count / $c2);
				$dets[$y]['Coding_FFS_Total_count'] = round($Coding_FFS_Total_count / $c2);
				$dets[$y]['Coding_FFS_On_hold_count'] = round($Coding_FFS_On_hold_count / $c2);
				$dets[$y]['Coding_Coding_Queue_count'] = round($Coding_Coding_Queue_count / $c2);
				$dets[$y]['Coding_Coding_Queue_Days_count'] = round($Coding_Coding_Queue_Days_count / $c2);
				$dets[$y]['Coding_WS_Coding_count'] = round($Coding_WS_Coding_count / $c2);
				$dets[$y]['Coding_FFS_Onhold_Report_count'] = round($Coding_FFS_Onhold_Report_count / $c2);
				
				$dets[$y]['RPQ_print_queue_total_goals'] = $RPQ_print_queue_total_goals;
				$dets[$y]['RPQ_num_of_WC_goals'] = $RPQ_num_of_WC_goals;
				$dets[$y]['IL_RCM_Ins_goals'] = $IL_RCM_Ins_goals;
				$dets[$y]['IL_RCM_WC_goals'] = $IL_RCM_WC_goals;
				$dets[$y]['IL_NINS_goals'] = $IL_NINS_goals;
				$dets[$y]['IL_NNF_goals'] = $IL_NNF_goals;
				$dets[$y]['IL_NWC_goals'] = $IL_NWC_goals;
				$dets[$y]['IL_ENL_goals'] = $IL_ENL_goals;
				$dets[$y]['RA_WS_Prof_goals'] = $RA_WS_Prof_goals;
				$dets[$y]['RA_WS_Prof_Day_goals'] = $RA_WS_Prof_Day_goals;
				$dets[$y]['RA_WS_Inst_goals'] = $RA_WS_Inst_goals;
				$dets[$y]['RA_WS_Inst_Day_goals'] = $RA_WS_Inst_Day_goals;
				$dets[$y]['RA_Attachments_goals'] = $RA_Attachments_goals;
				$dets[$y]['WBE_NF_Updates_goals'] = $WBE_NF_Updates_goals;
				$dets[$y]['WBE_WC_Updates_goals'] = $WBE_WC_Updates_goals;
				$dets[$y]['WBE_OS_Email_Inbox_goals'] = $WBE_OS_Email_Inbox_goals;
				$dets[$y]['Coding_FFS_Total_goals'] = $Coding_FFS_Total_goals;
				$dets[$y]['Coding_FFS_On_hold_goals'] = $Coding_FFS_On_hold_goals;
				$dets[$y]['Coding_Coding_Queue_goals'] = $Coding_Coding_Queue_goals;
				$dets[$y]['Coding_Coding_Queue_Days_goals'] = $Coding_Coding_Queue_Days_goals;
				$dets[$y]['Coding_WS_Coding_goals'] = $Coding_WS_Coding_goals;
				$dets[$y]['Coding_FFS_Onhold_Report_goals'] = $Coding_FFS_Onhold_Report_goals;
				$dets[$y]['mon'] = $cm;
				
			echo json_encode($dets);
		}
		else
		{
			$emp[$c]['id'] = 0;
			$emp[$c]['when_done'] = $row['when_done'];
			$emp[$c]['dashboards'] = $dashboards;
			
			$emp[$c]['RPQ_print_queue_total'] = 0;
			$emp[$c]['RPQ_num_of_WC'] = 0;
			$emp[$c]['IL_RCM_Ins'] = 0;
			$emp[$c]['IL_RCM_WC'] = 0;
			$emp[$c]['IL_NINS'] = 0;
			$emp[$c]['IL_NNF'] = 0;
			$emp[$c]['IL_NWC'] = 0;
			$emp[$c]['IL_ENL'] = 0;
			$emp[$c]['RA_WS_Prof'] = 0;
			$emp[$c]['RA_WS_Prof_Day'] = 0;
			$emp[$c]['RA_WS_Inst'] = 0;
			$emp[$c]['RA_WS_Inst_Day'] = 0;
			$emp[$c]['RA_Attachments'] = 0;
			$emp[$c]['WBE_NF_Updates'] = 0;
			$emp[$c]['WBE_WC_Updates'] = 0;
			$emp[$c]['WBE_OS_Email_Inbox'] = 0;
			$emp[$c]['Coding_FFS_Total'] = 0;
			$emp[$c]['Coding_FFS_On_hold'] = 0;
			$emp[$c]['Coding_Coding_Queue'] = 0;
			$emp[$c]['Coding_Coding_Queue_Days'] = 0;
			$emp[$c]['Coding_WS_Coding'] = 0;
			$emp[$c]['Coding_FFS_Onhold_Report'] = 0;
			
			$emp[$c]['RPQ_print_queue_total_goals'] = 0;
			$emp[$c]['RPQ_num_of_WC_goals'] = 0;
			$emp[$c]['IL_RCM_Ins_goals'] = 0;
			$emp[$c]['IL_RCM_WC_goals'] = 0;
			$emp[$c]['IL_NINS_goals'] = 0;
			$emp[$c]['IL_NNF_goals'] = 0;
			$emp[$c]['IL_NWC_goals'] = 0;
			$emp[$c]['IL_ENL_goals'] = 0;
			$emp[$c]['RA_WS_Prof_goals'] = 0;
			$emp[$c]['RA_WS_Prof_Day_goals'] = 0;
			$emp[$c]['RA_WS_Inst_goals'] = 0;
			$emp[$c]['RA_WS_Inst_Day_goals'] = 0;
			$emp[$c]['RA_Attachments_goals'] = 0;
			$emp[$c]['WBE_NF_Updates_goals'] = 0;
			$emp[$c]['WBE_WC_Updates_goals'] = 0;
			$emp[$c]['WBE_OS_Email_Inbox_goals'] = 0;
			$emp[$c]['Coding_FFS_Total_goals'] = 0;
			$emp[$c]['Coding_FFS_On_hold_goals'] = 0;
			$emp[$c]['Coding_Coding_Queue_goals'] = 0;
			$emp[$c]['Coding_Coding_Queue_Days_goals'] = 0;
			$emp[$c]['Coding_WS_Coding_goals'] = 0;
			$emp[$c]['Coding_FFS_Onhold_Report_goals'] = 0;
			$emp[$c]['mon'] = "-";
			
			echo json_encode($emp);
		}
		
	}
}
else if($dashboards == '3' or $dashboards == 3)
{
	
	$sql = "select * from om_data where when_done between '$startdate' and '$enddate'";
	if($res = mysqli_query($con, $sql))
	{
		$c = 0;
		while($row = mysqli_fetch_assoc($res))
		{
			$emp[$c]['id'] = $row['om_id'];
			$emp[$c]['when_done'] = $row['when_done'];
			$emp[$c]['dashboards'] = $dashboards;
			
			$emp[$c]['support_sp'] = $row['support_sp'];
			$emp[$c]['support_enl'] = $row['support_enl'];
			$emp[$c]['support_dnu'] = $row['support_dnu'];
			$emp[$c]['support_nyucp'] = $row['support_nyucp'];
			$emp[$c]['support_nom'] = $row['support_nom'];
			$emp[$c]['support_emails'] = $row['support_emails'];
			$emp[$c]['support_deposit_pulls'] = $row['support_deposit_pulls'];
			$emp[$c]['support_blank_batch_corres'] = $row['support_blank_batch_corres'];
			$emp[$c]['support_correspondence'] = $row['support_correspondence'];
			$emp[$c]['support_acct_audits'] = $row['support_acct_audits'];
			$emp[$c]['support_inv_correct'] = $row['support_inv_correct'];
			$emp[$c]['support_phone'] = $row['support_phone'];
			$emp[$c]['support_inv_addr'] = $row['support_inv_addr'];
			$emp[$c]['support_collects'] = $row['support_collects'];
			$emp[$c]['suport_medical_records'] = $row['suport_medical_records'];
			
			$emp[$c]['coding_na'] = $row['coding_na'];
			$emp[$c]['coding_on_holds'] = $row['coding_on_holds'];
			$emp[$c]['coding_coding_queue'] = $row['coding_coding_queue'];
			$emp[$c]['coding_onsites'] = $row['coding_onsites'];
			$emp[$c]['coding_ooa'] = $row['coding_ooa'];
			
			$emp[$c]['ar120'] = $row['ar120'];
			$emp[$c]['ar_120percent'] = $row['ar_120percent'];
			$emp[$c]['ar_90'] = $row['ar_90'];
			$emp[$c]['ar_voicemails'] = $row['ar_voicemails'];
			$emp[$c]['ar_unapplied'] = $row['ar_unapplied'];
			$emp[$c]['ar_audit'] = $row['ar_audit'];
			$emp[$c]['ar_wbs'] = $row['ar_wbs'];

			$dat1 = strtotime($row['when_done']);
			$mon1 = date("n",$dat1);
			
			$sql1 = "select * from om_goals where when_done = '$mon1'";
			$res1 = mysqli_query($con, $sql1);
			$row1 = mysqli_fetch_assoc($res1);
		
			
			$emp[$c]['support_sp_goals'] = $row1['support_sp'];
			$emp[$c]['support_enl_goals'] = $row1['support_enl'];
			$emp[$c]['support_dnu_goals'] = $row1['support_dnu'];
			$emp[$c]['support_nyucp_goals'] = $row1['support_nyucp'];
			$emp[$c]['support_nom_goals'] = $row1['support_nom'];
			$emp[$c]['support_emails_goals'] = $row1['support_emails'];
			$emp[$c]['support_deposit_pulls_goals'] = $row1['support_deposit_pulls'];
			$emp[$c]['support_blank_batch_corres_goals'] = $row1['support_blank_batch_corres'];
			$emp[$c]['support_correspondence_goals'] = $row1['support_correspondence'];
			$emp[$c]['support_acct_audits_goals'] = $row1['support_acct_audits'];
			$emp[$c]['support_inv_correct_goals'] = $row1['support_inv_correct'];
			$emp[$c]['support_phone_goals'] = $row1['support_phone'];
			$emp[$c]['support_inv_addr_goals'] = $row1['support_inv_addr'];
			$emp[$c]['support_collects_goals'] = $row1['support_collects'];
			$emp[$c]['suport_medical_records_goals'] = $row1['suport_medical_records'];
			
			$emp[$c]['coding_na_goals'] = $row1['coding_na'];
			$emp[$c]['coding_on_holds_goals'] = $row1['coding_on_holds'];
			$emp[$c]['coding_coding_queue_goals'] = $row1['coding_coding_queue'];
			$emp[$c]['coding_onsites_goals'] = $row1['coding_onsites'];
			$emp[$c]['coding_ooa_goals'] = $row1['coding_ooa'];
			
			$emp[$c]['ar120_goals'] = $row1['ar120'];
			$emp[$c]['ar_120percent_goals'] = $row1['ar_120percent'];
			$emp[$c]['ar_90_goals'] = $row1['ar_90'];
			$emp[$c]['ar_voicemails_goals'] = $row1['ar_voicemails'];
			$emp[$c]['ar_unapplied_goals'] = $row1['ar_unapplied'];
			$emp[$c]['ar_audit_goals'] = $row1['ar_audit'];
			$emp[$c]['ar_wbs_goals'] = $row1['ar_wbs'];
			
			$emp[$c]['mon'] = $mon1;
			
			$c++;
		}
		
		if(empty($emp[$c]['id']) == True)
		{
			$support_sp_count = 0;
			$support_enl_count = 0;
			$support_dnu_count = 0;
			$support_nyucp_count = 0;
			$support_nom_count = 0;
			$support_emails_count = 0;
			$support_deposit_pulls_count = 0;
			$support_blank_batch_corres_count = 0;
			$support_correspondence_count = 0;
			$support_acct_audits_count = 0;
			$support_inv_correct_count = 0;
			$support_phone_count = 0;
			$support_inv_addr_count = 0;
			$support_collects_count = 0;
			$suport_medical_records_count = 0;
			$coding_na_count = 0;
			$coding_on_holds_count = 0;
			$coding_coding_queue_count = 0;
			$coding_onsites_count = 0;
			$coding_ooa_count = 0;
			$ar120_count = 0;
			$ar_120percent_count = 0;
			$ar_90_count = 0;
			$ar_voicemails_count = 0;
			$ar_unapplied_count = 0;
			$ar_audit_count = 0;
			$ar_wbs_count = 0;
			
			$goal_mon = 0;
			
			$support_sp_goals = 0;
			$support_enl_goals = 0;
			$support_dnu_goals = 0;
			$support_nyucp_goals = 0;
			$support_nom_goals = 0;
			$support_emails_goals = 0;
			$support_deposit_pulls_goals = 0;
			$support_blank_batch_corres_goals = 0;
			$support_correspondence_goals = 0;
			$support_acct_audits_goals = 0;
			$support_inv_correct_goals = 0;
			$support_phone_goals = 0;
			$support_inv_addr_goals = 0;
			$support_collects_goals = 0;
			$suport_medical_records_goals = 0;
			$coding_na_goals = 0;
			$coding_on_holds_goals = 0;
			$coding_coding_queue_goals = 0;
			$coding_onsites_goals = 0;
			$coding_ooa_goals = 0;
			$ar120_goals = 0;
			$ar_120percent_goals = 0;
			$ar_90_goals = 0;
			$ar_voicemails_goals = 0;
			$ar_unapplied_goals = 0;
			$ar_audit_goals = 0;
			$ar_wbs_goals = 0;
			
			$c1 = 0;
			$c2 = 0;
			$month_num = 0;
			$num_of_m = sizeof($months);
			
			$y = 0;
			$x = 0;
			
			
				while(($x < $c) and($y < $num_of_m))
				{
					$cm = $months[$y];
					
					$curr_date = $emp[$x]['when_done'];
					$str_curr_date = strtotime($curr_date);
					$curr_month = date("n",$str_curr_date);
					
					if($cm == $curr_month)
					{
						
						$c1++;
						
						$support_sp = is_numeric($emp[$x]['support_sp']) ? $emp[$x]['support_sp'] : 0;
						$support_enl = is_numeric($emp[$x]['support_enl']) ? $emp[$x]['support_enl'] : 0;
						$support_dnu = is_numeric($emp[$x]['support_dnu']) ? $emp[$x]['support_dnu'] : 0;
						$support_nyucp = is_numeric($emp[$x]['support_nyucp']) ? $emp[$x]['support_nyucp'] : 0;
						$support_nom = is_numeric($emp[$x]['support_nom']) ? $emp[$x]['support_nom'] : 0;
						$support_emails = is_numeric($emp[$x]['support_emails']) ? $emp[$x]['support_emails'] : 0;
						$support_deposit_pulls = is_numeric($emp[$x]['support_deposit_pulls']) ? $emp[$x]['support_deposit_pulls'] : 0;
						$support_blank_batch_corres = is_numeric($emp[$x]['support_blank_batch_corres']) ? $emp[$x]['support_blank_batch_corres'] : 0;
						$support_correspondence = is_numeric($emp[$x]['support_correspondence']) ? $emp[$x]['support_correspondence'] : 0;
						$support_acct_audits = is_numeric($emp[$x]['support_acct_audits']) ? $emp[$x]['support_acct_audits'] : 0;
						$support_inv_correct = is_numeric($emp[$x]['support_inv_correct']) ? $emp[$x]['support_inv_correct'] : 0;
						$support_phone = is_numeric($emp[$x]['support_phone']) ? $emp[$x]['support_phone'] : 0;
						$support_inv_addr = is_numeric($emp[$x]['support_inv_addr']) ? $emp[$x]['support_inv_addr'] : 0;
						$support_collects = is_numeric($emp[$x]['support_collects']) ? $emp[$x]['support_collects'] : 0;
						$suport_medical_records = is_numeric($emp[$x]['suport_medical_records']) ? $emp[$x]['suport_medical_records'] : 0;
						
						$coding_na = is_numeric($emp[$x]['coding_na']) ? $emp[$x]['coding_na'] : 0;
						$coding_on_holds = is_numeric($emp[$x]['coding_on_holds']) ? $emp[$x]['coding_on_holds'] : 0;
						$coding_coding_queue = is_numeric($emp[$x]['coding_coding_queue']) ? $emp[$x]['coding_coding_queue'] : 0;
						$coding_onsites = is_numeric($emp[$x]['coding_onsites']) ? $emp[$x]['coding_onsites'] : 0;
						$coding_ooa = is_numeric($emp[$x]['coding_ooa']) ? $emp[$x]['coding_ooa'] : 0;
						
						$ar120 = is_numeric($emp[$x]['ar120']) ? $emp[$x]['ar120'] : 0;
						$ar_120percent = is_numeric($emp[$x]['ar_120percent']) ? $emp[$x]['ar_120percent'] : 0;
						$ar_90 = is_numeric($emp[$x]['ar_90']) ? $emp[$x]['ar_90'] : 0;
						$ar_voicemails = is_numeric($emp[$x]['ar_voicemails']) ? $emp[$x]['ar_voicemails'] : 0;
						$ar_unapplied = is_numeric($emp[$x]['ar_unapplied']) ? $emp[$x]['ar_unapplied'] : 0;
						$ar_audit = is_numeric($emp[$x]['ar_audit']) ? $emp[$x]['ar_audit'] : 0;
						$ar_wbs = is_numeric($emp[$x]['ar_wbs']) ? $emp[$x]['ar_wbs'] : 0;
						
						
						$goal_mon = is_numeric($emp[$x]['mon']) ? $emp[$x]['mon'] : "-";
						
						$support_sp_goals = is_numeric($emp[$x]['support_sp_goals']) ? $emp[$x]['support_sp_goals'] : 0;
						$support_enl_goals = is_numeric($emp[$x]['support_enl_goals']) ? $emp[$x]['support_enl_goals'] : 0;
						$support_dnu_goals = is_numeric($emp[$x]['support_dnu_goals']) ? $emp[$x]['support_dnu_goals'] : 0;
						$support_nyucp_goals = is_numeric($emp[$x]['support_nyucp_goals']) ? $emp[$x]['support_nyucp_goals'] : 0;
						$support_nom_goals = is_numeric($emp[$x]['support_nom_goals']) ? $emp[$x]['support_nom_goals'] : 0;
						$support_emails_goals = is_numeric($emp[$x]['support_emails_goals']) ? $emp[$x]['support_emails_goals'] : 0;
						$support_deposit_pulls_goals = is_numeric($emp[$x]['support_deposit_pulls_goals']) ? $emp[$x]['support_deposit_pulls_goals'] : 0;
						$support_blank_batch_corres_goals = is_numeric($emp[$x]['support_blank_batch_corres_goals']) ? $emp[$x]['support_blank_batch_corres_goals'] : 0;
						$support_correspondence_goals = is_numeric($emp[$x]['support_correspondence_goals']) ? $emp[$x]['support_correspondence_goals'] : 0;
						$support_acct_audits_goals = is_numeric($emp[$x]['support_acct_audits_goals']) ? $emp[$x]['support_acct_audits_goals'] : 0;
						$support_inv_correct_goals = is_numeric($emp[$x]['support_inv_correct_goals']) ? $emp[$x]['support_inv_correct_goals'] : 0;
						$support_phone_goals = is_numeric($emp[$x]['support_phone_goals']) ? $emp[$x]['support_phone_goals'] : 0;
						$support_inv_addr_goals = is_numeric($emp[$x]['support_inv_addr_goals']) ? $emp[$x]['support_inv_addr_goals'] : 0;
						$support_collects_goals = is_numeric($emp[$x]['support_collects_goals']) ? $emp[$x]['support_collects_goals'] : 0;
						$suport_medical_records_goals = is_numeric($emp[$x]['suport_medical_records_goals']) ? $emp[$x]['suport_medical_records_goals'] : 0;
						
						$coding_na_goals = is_numeric($emp[$x]['coding_na_goals']) ? $emp[$x]['coding_na_goals'] : 0;
						$coding_on_holds_goals = is_numeric($emp[$x]['coding_on_holds_goals']) ? $emp[$x]['coding_on_holds_goals'] : 0;
						$coding_coding_queue_goals = is_numeric($emp[$x]['coding_coding_queue_goals']) ? $emp[$x]['coding_coding_queue_goals'] : 0;
						$coding_onsites_goals = is_numeric($emp[$x]['coding_onsites_goals']) ? $emp[$x]['coding_onsites_goals'] : 0;
						$coding_ooa_goals = is_numeric($emp[$x]['coding_ooa_goals']) ? $emp[$x]['coding_ooa_goals'] : 0;
						
						$ar120_goals = is_numeric($emp[$x]['ar120_goals']) ? $emp[$x]['ar120_goals'] : 0;
						$ar_120percent_goals = is_numeric($emp[$x]['ar_120percent_goals']) ? $emp[$x]['ar_120percent_goals'] : 0;
						$ar_90_goals = is_numeric($emp[$x]['ar_90_goals']) ? $emp[$x]['ar_90_goals'] : 0;
						$ar_voicemails_goals = is_numeric($emp[$x]['ar_voicemails_goals']) ? $emp[$x]['ar_voicemails_goals'] : 0;
						$ar_unapplied_goals = is_numeric($emp[$x]['ar_unapplied_goals']) ? $emp[$x]['ar_unapplied_goals'] : 0;
						$ar_audit_goals = is_numeric($emp[$x]['ar_audit_goals']) ? $emp[$x]['ar_audit_goals'] : 0;
						$ar_wbs_goals = is_numeric($emp[$x]['ar_wbs_goals']) ? $emp[$x]['ar_wbs_goals'] : 0;
						
						
						///calculations
						$support_sp_count = $support_sp_count + $support_sp;
						$support_enl_count = $support_enl_count +  $support_enl;
						$support_dnu_count = $support_dnu_count + $support_dnu;
						$support_nyucp_count = $support_nyucp_count + $support_nyucp;
						$support_nom_count = $support_nom_count + $support_nom;
						$support_emails_count = $support_emails_count + $support_emails;
						$support_deposit_pulls_count = $support_deposit_pulls_count + $support_deposit_pulls;
						$support_blank_batch_corres_count = $support_blank_batch_corres_count + $support_blank_batch_corres;
						$support_correspondence_count = $support_correspondence_count + $support_correspondence;
						$support_acct_audits_count = $support_acct_audits_count + $support_acct_audits;
						$support_inv_correct_count = $support_inv_correct_count + $support_inv_correct;
						$support_phone_count = $support_phone_count +  $support_phone;
						$support_inv_addr_count = $support_inv_addr_count + $support_inv_addr;
						$support_collects_count = $support_collects_count + $support_collects;
						$suport_medical_records_count = $suport_medical_records_count + $suport_medical_records;
						
						$coding_na_count = $coding_na_count + $coding_na;
						$coding_on_holds_count = $coding_on_holds_count + $coding_on_holds;
						$coding_coding_queue_count = $coding_coding_queue_count + $coding_coding_queue;
						$coding_onsites_count = $coding_onsites_count + $coding_onsites;
						$coding_ooa_count = $coding_ooa_count + $coding_ooa;
						
						$ar120_count = $ar120_count + $ar120;
						$ar_120percent_count = $ar_120percent_count +  $ar_120percent;
						$ar_90_count = $ar_90_count + $ar_90;
						$ar_voicemails_count = $ar_voicemails_count + $ar_voicemails;
						$ar_unapplied_count = $ar_unapplied_count + $ar_unapplied;
						$ar_audit_count = $ar_audit_count + $ar_audit;
						$ar_wbs_count = $ar_wbs_count + $ar_wbs;
						
						$x++;
					}
					else
					{
						if($c1 == 0)
						{
							$c2 = 1;
						}
						else{
							$c2 = isset($c1) ? $c1 : 1;
						}
				
						$dets[$y]['id'] = $row['ar_id'];
						$dets[$y]['when_done'] = $cm;
						$dets[$y]['dashboards'] = $dashboards;
						
						$dets[$y]['support_sp_count'] = round($support_sp_count / $c2);
						$dets[$y]['support_enl_count'] = round($support_enl_count / $c2);
						$dets[$y]['support_dnu_count'] = round($support_dnu_count / $c2);
						$dets[$y]['support_nyucp_count'] = round($support_nyucp_count / $c2);
						$dets[$y]['support_nom_count'] = round($support_nom_count / $c2);
						$dets[$y]['support_emails_count'] = round($support_emails_count / $c2);
						$dets[$y]['support_deposit_pulls_count'] = round($support_deposit_pulls_count / $c2);
						$dets[$y]['support_blank_batch_corres_count'] = round($support_blank_batch_corres_count / $c2);
						$dets[$y]['support_correspondence_count'] = round($support_correspondence_count / $c2);
						$dets[$y]['support_acct_audits_count'] = round($support_acct_audits_count / $c2);
						$dets[$y]['support_inv_correct_count'] = round($support_inv_correct_count / $c2);
						$dets[$y]['support_phone_count'] = round($support_phone_count / $c2);
						$dets[$y]['support_inv_addr_count'] = round($support_inv_addr_count / $c2);
						$dets[$y]['support_collects_count'] = round($support_collects_count / $c2);
						$dets[$y]['suport_medical_records_count'] = round($suport_medical_records_count / $c2);
						$dets[$y]['coding_na_count'] = round($coding_na_count / $c2);
						$dets[$y]['coding_on_holds_count'] = round($coding_on_holds_count / $c2);
						$dets[$y]['coding_coding_queue_count'] = round($coding_coding_queue_count / $c2);
						$dets[$y]['coding_onsites_count'] = round($coding_onsites_count / $c2);
						$dets[$y]['coding_ooa_count'] = round($coding_ooa_count / $c2);
						$dets[$y]['ar120_count'] = round($ar120_count / $c2);
						$dets[$y]['ar_120percent_count'] = round($ar_120percent_count / $c2);
						$dets[$y]['ar_90_count'] = round($ar_90_count / $c2);
						$dets[$y]['ar_voicemails_count'] = round($ar_voicemails_count / $c2);
						$dets[$y]['ar_unapplied_count'] = round($ar_unapplied_count / $c2);
						$dets[$y]['ar_audit_count'] = round($ar_audit_count / $c2);
						$dets[$y]['ar_wbs_count'] = round($ar_wbs_count / $c2);
						
						$dets[$y]['support_sp_goals'] = $support_sp_goals;
						$dets[$y]['support_enl_goals'] = $support_enl_goals;
						$dets[$y]['support_dnu_goals'] = $support_dnu_goals;
						$dets[$y]['support_nyucp_goals'] = $support_nyucp_goals;
						$dets[$y]['support_nom_goals'] = $support_nom_goals;
						$dets[$y]['support_emails_goals'] = $support_emails_goals;
						$dets[$y]['support_deposit_pulls_goals'] = $support_deposit_pulls_goals;
						$dets[$y]['support_blank_batch_corres_goals'] = $support_blank_batch_corres_goals;
						$dets[$y]['support_correspondence_goals'] = $support_correspondence_goals;
						$dets[$y]['support_acct_audits_goals'] = $support_acct_audits_goals;
						$dets[$y]['support_inv_correct_goals'] = $support_inv_correct_goals;
						$dets[$y]['support_phone_goals'] = $support_phone_goals;
						$dets[$y]['support_inv_addr_goals'] = $support_inv_addr_goals;
						$dets[$y]['support_collects_goals'] = $support_collects_goals;
						$dets[$y]['suport_medical_records_goals'] = $suport_medical_records_goals;
						$dets[$y]['coding_na_goals'] = $coding_na_goals;
						$dets[$y]['coding_on_holds_goals'] = $coding_on_holds_goals;
						$dets[$y]['coding_coding_queue_goals'] = $coding_coding_queue_goals;
						$dets[$y]['coding_onsites_goals'] = $coding_onsites_goals;
						$dets[$y]['coding_ooa_goals'] = $coding_ooa_goals;
						$dets[$y]['ar120_goals'] = $ar120_goals;
						$dets[$y]['ar_120percent_goals'] = $ar_120percent_goals;
						$dets[$y]['ar_90_goals'] = $ar_90_goals;
						$dets[$y]['ar_voicemails_goals'] = $ar_voicemails_goals;
						$dets[$y]['ar_unapplied_goals'] = $ar_unapplied_goals;
						$dets[$y]['ar_audit_goals'] = $ar_audit_goals;
						$dets[$y]['ar_wbs_goals'] = $ar_wbs_goals;
						
						$dets[$y]['mon'] = $cm;
						
						
						$c1 = 0;
						$c2 = 0;
						$y++;
						
						$support_sp_count = 0;
						$support_enl_count = 0;
						$support_dnu_count = 0;
						$support_nyucp_count = 0;
						$support_nom_count = 0;
						$support_emails_count = 0;
						$support_deposit_pulls_count = 0;
						$support_blank_batch_corres_count = 0;
						$support_correspondence_count = 0;
						$support_acct_audits_count = 0;
						$support_inv_correct_count = 0;
						$support_phone_count = 0;
						$support_inv_addr_count = 0;
						$support_collects_count = 0;
						$suport_medical_records_count = 0;
						$coding_na_count = 0;
						$coding_on_holds_count = 0;
						$coding_coding_queue_count = 0;
						$coding_onsites_count = 0;
						$coding_ooa_count = 0;
						$ar120_count = 0;
						$ar_120percent_count = 0;
						$ar_90_count = 0;
						$ar_voicemails_count = 0;
						$ar_unapplied_count = 0;
						$ar_audit_count = 0;
						$ar_wbs_count = 0;
					}
					
				}
				if($c1 == 0)
				{
					$c2 = 1;
				}
				else{
					$c2 = isset($c1) ? $c1 : 1;
				}
		
				$dets[$y]['id'] = $row['ar_id'];
				$dets[$y]['when_done'] = $cm;
				$dets[$y]['dashboards'] = $dashboards;
				
				$dets[$y]['support_sp_count'] = round($support_sp_count / $c2);
				$dets[$y]['support_enl_count'] = round($support_enl_count / $c2);
				$dets[$y]['support_dnu_count'] = round($support_dnu_count / $c2);
				$dets[$y]['support_nyucp_count'] = round($support_nyucp_count / $c2);
				$dets[$y]['support_nom_count'] = round($support_nom_count / $c2);
				$dets[$y]['support_emails_count'] = round($support_emails_count / $c2);
				$dets[$y]['support_deposit_pulls_count'] = round($support_deposit_pulls_count / $c2);
				$dets[$y]['support_blank_batch_corres_count'] = round($support_blank_batch_corres_count / $c2);
				$dets[$y]['support_correspondence_count'] = round($support_correspondence_count / $c2);
				$dets[$y]['support_acct_audits_count'] = round($support_acct_audits_count / $c2);
				$dets[$y]['support_inv_correct_count'] = round($support_inv_correct_count / $c2);
				$dets[$y]['support_phone_count'] = round($support_phone_count / $c2);
				$dets[$y]['support_inv_addr_count'] = round($support_inv_addr_count / $c2);
				$dets[$y]['support_collects_count'] = round($support_collects_count / $c2);
				$dets[$y]['suport_medical_records_count'] = round($suport_medical_records_count / $c2);
				$dets[$y]['coding_na_count'] = round($coding_na_count / $c2);
				$dets[$y]['coding_on_holds_count'] = round($coding_on_holds_count / $c2);
				$dets[$y]['coding_coding_queue_count'] = round($coding_coding_queue_count / $c2);
				$dets[$y]['coding_onsites_count'] = round($coding_onsites_count / $c2);
				$dets[$y]['coding_ooa_count'] = round($coding_ooa_count / $c2);
				$dets[$y]['ar120_count'] = round($ar120_count / $c2);
				$dets[$y]['ar_120percent_count'] = round($ar_120percent_count / $c2);
				$dets[$y]['ar_90_count'] = round($ar_90_count / $c2);
				$dets[$y]['ar_voicemails_count'] = round($ar_voicemails_count / $c2);
				$dets[$y]['ar_unapplied_count'] = round($ar_unapplied_count / $c2);
				$dets[$y]['ar_audit_count'] = round($ar_audit_count / $c2);
				$dets[$y]['ar_wbs_count'] = round($ar_wbs_count / $c2);
				
				$dets[$y]['support_sp_goals'] = $support_sp_goals;
				$dets[$y]['support_enl_goals'] = $support_enl_goals;
				$dets[$y]['support_dnu_goals'] = $support_dnu_goals;
				$dets[$y]['support_nyucp_goals'] = $support_nyucp_goals;
				$dets[$y]['support_nom_goals'] = $support_nom_goals;
				$dets[$y]['support_emails_goals'] = $support_emails_goals;
				$dets[$y]['support_deposit_pulls_goals'] = $support_deposit_pulls_goals;
				$dets[$y]['support_blank_batch_corres_goals'] = $support_blank_batch_corres_goals;
				$dets[$y]['support_correspondence_goals'] = $support_correspondence_goals;
				$dets[$y]['support_acct_audits_goals'] = $support_acct_audits_goals;
				$dets[$y]['support_inv_correct_goals'] = $support_inv_correct_goals;
				$dets[$y]['support_phone_goals'] = $support_phone_goals;
				$dets[$y]['support_inv_addr_goals'] = $support_inv_addr_goals;
				$dets[$y]['support_collects_goals'] = $support_collects_goals;
				$dets[$y]['suport_medical_records_goals'] = $suport_medical_records_goals;
				$dets[$y]['coding_na_goals'] = $coding_na_goals;
				$dets[$y]['coding_on_holds_goals'] = $coding_on_holds_goals;
				$dets[$y]['coding_coding_queue_goals'] = $coding_coding_queue_goals;
				$dets[$y]['coding_onsites_goals'] = $coding_onsites_goals;
				$dets[$y]['coding_ooa_goals'] = $coding_ooa_goals;
				$dets[$y]['ar120_goals'] = $ar120_goals;
				$dets[$y]['ar_120percent_goals'] = $ar_120percent_goals;
				$dets[$y]['ar_90_goals'] = $ar_90_goals;
				$dets[$y]['ar_voicemails_goals'] = $ar_voicemails_goals;
				$dets[$y]['ar_unapplied_goals'] = $ar_unapplied_goals;
				$dets[$y]['ar_audit_goals'] = $ar_audit_goals;
				$dets[$y]['ar_wbs_goals'] = $ar_wbs_goals;
				
				$dets[$y]['mon'] = $cm;
				
			echo json_encode($dets);
		}
		else
		{
			$emp[$c]['id'] = 0;
			$emp[$c]['when_done'] = $row['when_done'];
			$emp[$c]['dashboards'] = $dashboards;
			
			$emp[$c]['support_sp'] = 0;
			$emp[$c]['support_enl'] = 0;
			$emp[$c]['support_dnu'] = 0;
			$emp[$c]['support_nyucp'] = 0;
			$emp[$c]['support_nom'] = 0;
			$emp[$c]['support_emails'] = 0;
			$emp[$c]['support_deposit_pulls'] = 0;
			$emp[$c]['support_blank_batch_corres'] = 0;
			$emp[$c]['support_correspondence'] = 0;
			$emp[$c]['support_acct_audits'] = 0;
			$emp[$c]['support_inv_correct'] = 0;
			$emp[$c]['support_phone'] = 0;
			$emp[$c]['support_inv_addr'] = 0;
			$emp[$c]['support_collects'] = 0;
			$emp[$c]['suport_medical_records'] = 0;
			
			$emp[$c]['coding_na'] = 0;
			$emp[$c]['coding_on_holds'] = 0;
			$emp[$c]['coding_coding_queue'] = 0;
			$emp[$c]['coding_onsites'] = 0;
			$emp[$c]['coding_ooa'] = 0;
			
			$emp[$c]['ar120'] = 0;
			$emp[$c]['ar_120percent'] = 0;
			$emp[$c]['ar_90'] = 0;
			$emp[$c]['ar_voicemails'] = 0;
			$emp[$c]['ar_unapplied'] = 0;
			$emp[$c]['ar_audit'] = 0;
			$emp[$c]['ar_wbs'] = 0;
			
			
			//goals
			$emp[$c]['support_sp_goals'] = 0;
			$emp[$c]['support_enl_goals'] = 0;
			$emp[$c]['support_dnu_goals'] = 0;
			$emp[$c]['support_nyucp_goals'] = 0;
			$emp[$c]['support_nom_goals'] = 0;
			$emp[$c]['support_emails_goals'] = 0;
			$emp[$c]['support_deposit_pulls_goals'] = 0;
			$emp[$c]['support_blank_batch_corres_goals'] = 0;
			$emp[$c]['support_correspondence_goals'] = 0;
			$emp[$c]['support_acct_audits_goals'] = 0;
			$emp[$c]['support_inv_correct_goals'] = 0;
			$emp[$c]['support_phone_goals'] = 0;
			$emp[$c]['support_inv_addr_goals'] = 0;
			$emp[$c]['support_collects_goals'] = 0;
			$emp[$c]['suport_medical_records_goals'] = 0;
			
			$emp[$c]['coding_na_goals'] = 0;
			$emp[$c]['coding_on_holds_goals'] = 0;
			$emp[$c]['coding_coding_queue_goals'] = 0;
			$emp[$c]['coding_onsites_goals'] = 0;
			$emp[$c]['coding_ooa_goals'] = 0;
			
			$emp[$c]['ar120_goals'] = 0;
			$emp[$c]['ar_120percent_goals'] = 0;
			$emp[$c]['ar_90_goals'] = 0;
			$emp[$c]['ar_voicemails_goals'] = 0;
			$emp[$c]['ar_unapplied_goals'] = 0;
			$emp[$c]['ar_audit_goals'] = 0;
			$emp[$c]['ar_wbs_goals'] = 0;
			
			$emp[$c]['mon'] = "-";
			
			echo json_encode($emp);
		}
		
	}
}
else
{
	http_response_code(404);
}


?>