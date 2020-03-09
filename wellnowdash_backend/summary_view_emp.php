<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

$emp = [];
$dets = [];


$user_id = $_GET['user_id'];
$sql1 = "select * from users where user_id = '$user_id'";
$res1 = mysqli_query($con, $sql1);
$row1 = mysqli_fetch_assoc($res1);
$dashboards = $row1['dashboards'];
$sup_id = $user_id;

if($dashboards == 1 or $dashboards == '1')
{
	$sql1 = "select min(when_done) as when_done from ar_data order by when_done asc";
	$result = mysqli_query($con,$sql1);
	$ans1 = mysqli_fetch_array($result);
	$startdate = $ans1['when_done'];
	
	$sql2 = "select max(when_done) as when_done from ar_data order by when_done asc";
	$result2 = mysqli_query($con,$sql2);
	$ans2 = mysqli_fetch_array($result2);
	$enddate = $ans2['when_done'];
	
}
else if($dashboards == 2 or $dashboards == '2')
{
	$sql1 = "select min(when_done) as when_done from os_data order by when_done asc";
	$result = mysqli_query($con,$sql1);
	$ans1 = mysqli_fetch_array($result);
	$startdate = $ans1['when_done'];
	
	$sql2 = "select max(when_done) as when_done from os_data order by when_done asc";
	$result2 = mysqli_query($con,$sql2);
	$ans2 = mysqli_fetch_array($result2);
	$enddate = $ans2['when_done'];	
}
else if($dashboards == 3 or $dashboards == '3')
{
	$sql1 = "select min(when_done) as when_done from om_data order by when_done asc";
	$result = mysqli_query($con,$sql1);
	$ans1 = mysqli_fetch_array($result);
	$startdate = $ans1['when_done'];
	
	$sql2 = "select max(when_done) as when_done from om_data order by when_done asc";
	$result2 = mysqli_query($con,$sql2);
	$ans2 = mysqli_fetch_array($result2);
	$enddate = $ans2['when_done'];	
}


$format = ('Y-m-d');
$array = array(); 
$interval = new DateInterval('P1M'); 
$realEnd = new DateTime($enddate); 
$realEnd->add($interval); 
$period = new DatePeriod(new DateTime($startdate), $interval, $realEnd); 
foreach($period as $date) {                  
	$array[] = $date->format('Y n d');  
} 
$ed1 = strtotime($enddate);
$endmonth = date("n",$ed1);
$sd1 = strtotime($startdate);
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


if($dashboards == '1' or $dashboards == 1)
{
	if($startdate == $enddate)
	{
		$sql = "select * from ar_data where when_done = '$startdate' order by when_done asc";
	}
	else
	{
		$sql = "select * from ar_data where when_done between '$startdate' and '$enddate' order by when_done asc";
	}
	if($res = mysqli_query($con, $sql))
	{
		$c = 0;
		while($row = mysqli_fetch_assoc($res))
		{
			$emp[$c]['id'] = $row['ar_id'];
			$emp[$c]['when_done'] = $row['when_done'];
			$emp[$c]['dashboards'] = $dashboards;
			$emp[$c]['user_id'] = $sup_id;
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
						$wb_tech_other = is_numeric($emp[$x]['wb_tech_other']) ? $emp[$x]['wb_tech_other'] : 0;
						$wb_demo_elig = is_numeric($emp[$x]['wb_demo_elig']) ? $emp[$x]['wb_demo_elig'] : 0;
						$wb_timely_filing = is_numeric($emp[$x]['wb_timely_filing']) ? $emp[$x]['wb_timely_filing'] : 0;
						$wb_coding_replies = is_numeric($emp[$x]['wb_coding_replies']) ? $emp[$x]['wb_coding_replies'] : 0;
						$wb_sup_reviews = is_numeric($emp[$x]['wb_sup_reviews']) ? $emp[$x]['wb_sup_reviews'] : 0;
						$wb_nf_corres = is_numeric($emp[$x]['wb_nf_corres']) ? $emp[$x]['wb_nf_corres'] : 0;
						$wb_wc_corres = is_numeric($emp[$x]['wb_wc_corres']) ? $emp[$x]['wb_wc_corres'] : 0;
						$waystar_medc_sec = is_numeric($emp[$x]['waystar_medc_sec']) ? $emp[$x]['waystar_medc_sec'] : 0;
						$waystar_oob = is_numeric($emp[$x]['waystar_oob']) ? $emp[$x]['waystar_oob'] : 0;
						$waystar_fidelis_tf = is_numeric($emp[$x]['waystar_fidelis_tf']) ? $emp[$x]['waystar_fidelis_tf'] : 0;
						
						
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
						
						$dateObj   = DateTime::createFromFormat('!m', $cm);
						$monthName = $dateObj->format('F');
						
						$dets[$y]['id'] = $row['ar_id'];
						$dets[$y]['when_done'] = $monthName;
						$dets[$y]['dashboards'] = $dashboards;
						$dets[$y]['user_id'] = $sup_id;
						$dets[$y]['wb_tech_other'] = number_format($wb_tech_other_count / $c2,2,'.','');
						$dets[$y]['wb_demo_elig'] = number_format($wb_demo_elig_count / $c2,2,'.','');
						$dets[$y]['wb_timely_filing'] = number_format($wb_timely_filing_count / $c2,2,'.','');
						$dets[$y]['wb_coding_replies'] = number_format($wb_coding_replies_count / $c2,2,'.','');
						$dets[$y]['wb_sup_reviews'] = number_format($wb_sup_reviews_count / $c2,2,'.','');
						$dets[$y]['wb_nf_corres'] = number_format($wb_nf_corres_count / $c2,2,'.','');
						$dets[$y]['wb_wc_corres'] = number_format($wb_wc_corres_count / $c2,2,'.','');
						$dets[$y]['waystar_medc_sec'] = number_format($waystar_medc_sec_count / $c2,2,'.','');
						$dets[$y]['waystar_oob'] = number_format($waystar_oob_count / $c2,2,'.','');
						$dets[$y]['waystar_fidelis_tf'] = number_format($waystar_fidelis_tf_count / $c2,2,'.','');
						
						
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
				
				$dateObj   = DateTime::createFromFormat('!m', $cm);
				$monthName = $dateObj->format('F');
				
				$dets[$y]['id'] = $row['ar_id'];
				$dets[$y]['when_done'] = $monthName;
				$dets[$y]['dashboards'] = $dashboards;
				$dets[$y]['user_id'] = $sup_id;
				$dets[$y]['wb_tech_other'] = number_format($wb_tech_other_count / $c2,2,'.','');
				$dets[$y]['wb_demo_elig'] = number_format($wb_demo_elig_count / $c2,2,'.','');
				$dets[$y]['wb_timely_filing'] = number_format($wb_timely_filing_count / $c2,2,'.','');
				$dets[$y]['wb_coding_replies'] = number_format($wb_coding_replies_count / $c2,2,'.','');
				$dets[$y]['wb_sup_reviews'] = number_format($wb_sup_reviews_count / $c2,2,'.','');
				$dets[$y]['wb_nf_corres'] = number_format($wb_nf_corres_count / $c2,2,'.','');
				$dets[$y]['wb_wc_corres'] = number_format($wb_wc_corres_count / $c2,2,'.','');
				$dets[$y]['waystar_medc_sec'] = number_format($waystar_medc_sec_count / $c2,2,'.','');
				$dets[$y]['waystar_oob'] = number_format($waystar_oob_count / $c2,2,'.','');
				$dets[$y]['waystar_fidelis_tf'] = number_format($waystar_fidelis_tf_count / $c2,2,'.','');
			

			$wb_tech_other_AVG = 0;
			$wb_demo_elig_AVG = 0;
			$wb_timely_filing_AVG = 0;
			$wb_coding_replies_AVG = 0;
			$wb_sup_reviews_AVG = 0;
			$wb_nf_corres_AVG = 0;
			$wb_wc_corres_AVG = 0;
			$waystar_medc_sec_AVG = 0;
			$waystar_oob_AVG = 0;
			$waystar_fidelis_tf_AVG = 0;
			$y++;
			
			for($ii = 0; $ii < $y; $ii++)
			{
				$wb_tech_other_AVG = $wb_tech_other_AVG + $dets[$ii]['wb_tech_other'];
				$wb_demo_elig_AVG = $wb_demo_elig_AVG + $dets[$ii]['wb_demo_elig'];
				$wb_timely_filing_AVG = $wb_timely_filing_AVG + $dets[$ii]['wb_timely_filing'];
				$wb_coding_replies_AVG = $wb_coding_replies_AVG + $dets[$ii]['wb_coding_replies'];
				$wb_sup_reviews_AVG = $wb_sup_reviews_AVG + $dets[$ii]['wb_sup_reviews'];
				$wb_nf_corres_AVG = $wb_nf_corres_AVG + $dets[$ii]['wb_nf_corres'];
				$wb_wc_corres_AVG = $wb_wc_corres_AVG + $dets[$ii]['wb_wc_corres'];
				$waystar_medc_sec_AVG = $waystar_medc_sec_AVG + $dets[$ii]['waystar_medc_sec'];
				$waystar_oob_AVG = $waystar_oob_AVG + $dets[$ii]['waystar_oob'];
				$waystar_fidelis_tf_AVG = $waystar_fidelis_tf_AVG + $dets[$ii]['waystar_fidelis_tf'];
			}
			
			$dets[$y]['id'] = 'Average';
			$dets[$y]['when_done'] = 'Average';
			$dets[$y]['dashboards'] = $dashboards;
			$dets[$y]['user_id'] = '-1';
			$dets[$y]['wb_tech_other'] = number_format($wb_tech_other_AVG / $y,2,'.','');
			$dets[$y]['wb_demo_elig'] = number_format($wb_demo_elig_AVG / $y,2,'.','');
			$dets[$y]['wb_timely_filing'] = number_format($wb_timely_filing_AVG / $y,2,'.','');
			$dets[$y]['wb_coding_replies'] = number_format($wb_coding_replies_AVG / $y,2,'.','');
			$dets[$y]['wb_sup_reviews'] = number_format($wb_sup_reviews_AVG / $y,2,'.','');
			$dets[$y]['wb_nf_corres'] = number_format($wb_nf_corres_AVG / $y,2,'.','');
			$dets[$y]['wb_wc_corres'] = number_format($wb_wc_corres_AVG / $y,2,'.','');
			$dets[$y]['waystar_medc_sec'] = number_format($waystar_medc_sec_AVG / $y,2,'.','');
			$dets[$y]['waystar_oob'] = number_format($waystar_oob_AVG / $y,2,'.','');
			$dets[$y]['waystar_fidelis_tf'] = number_format($waystar_fidelis_tf_AVG / $y,2,'.','');
			
			echo json_encode($dets);
		}
		else
		{
			$emp[$c]['id'] = 0;
			$emp[$c]['when_done'] = $row['when_done'];
			$emp[$c]['dashboards'] = $dashboards;
			$emp[$c]['user_id'] = $sup_id;
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
			
			
			echo json_encode($emp);
		}
		
	}
}
else if($dashboards == '2' or $dashboards == 2)
{
	if($startdate == $enddate)
	{
		$sql = "select * from os_data where when_done = '$startdate' order by when_done asc";
	}
	else
	{
		$sql = "select * from os_data where when_done between '$startdate' and '$enddate' order by when_done asc";
	}
	if($res = mysqli_query($con, $sql))
	{
		$c = 0;
		
		
		while($row = mysqli_fetch_assoc($res))
		{
			$emp[$c]['id'] = $row['os_id'];
			$emp[$c]['when_done'] = $row['when_done'];
			$emp[$c]['dashboards'] = $dashboards;
			$emp[$c]['user_id'] = $sup_id;
			
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
			
			$c1 = 0;
			$c2 = 0;
			$month_num = 0;
			$num_of_m = sizeof($months);
			
			$y = 0;
			$x = 0;
			
			
				while(($x < $c) and ($y < $num_of_m))
				{
					$cm = $months[$y];
					
					$curr_date = $emp[$x]['when_done'];
					$str_curr_date = strtotime($curr_date);
					$curr_month = date("n",$str_curr_date);
					
					if($cm == $curr_month)
					{
						
						$c1++;
						$RPQ_print_queue_total = is_numeric($emp[$x]['RPQ_print_queue_total']) ? $emp[$x]['RPQ_print_queue_total'] : 0;
						$RPQ_num_of_WC = is_numeric($emp[$x]['RPQ_num_of_WC']) ? $emp[$x]['RPQ_num_of_WC'] : 0;
						$IL_RCM_Ins = is_numeric($emp[$x]['IL_RCM_Ins']) ? $emp[$x]['IL_RCM_Ins'] : 0;
						$IL_RCM_WC = is_numeric($emp[$x]['IL_RCM_WC']) ? $emp[$x]['IL_RCM_WC'] : 0;
						$IL_NINS = is_numeric($emp[$x]['IL_NINS']) ? $emp[$x]['IL_NINS'] : 0;
						$IL_NNF = is_numeric($emp[$x]['IL_NNF']) ? $emp[$x]['IL_NNF'] : 0;
						$IL_NWC = is_numeric($emp[$x]['IL_NWC']) ? $emp[$x]['IL_NWC'] : 0;
						$IL_ENL = is_numeric($emp[$x]['IL_ENL']) ? $emp[$x]['IL_ENL'] : 0;
						$RA_WS_Prof = is_numeric($emp[$x]['RA_WS_Prof']) ? $emp[$x]['RA_WS_Prof'] : 0;
						$RA_WS_Prof_Day = is_numeric($emp[$x]['RA_WS_Prof_Day']) ? $emp[$x]['RA_WS_Prof_Day'] : 0;
						$RA_WS_Inst = is_numeric($emp[$x]['RA_WS_Inst']) ? $emp[$x]['RA_WS_Inst'] : 0;
						$RA_WS_Inst_Day = is_numeric($emp[$x]['RA_WS_Inst_Day']) ? $emp[$x]['RA_WS_Inst_Day'] : 0;
						$RA_Attachments = is_numeric($emp[$x]['RA_Attachments']) ? $emp[$x]['RA_Attachments'] : 0;
						$WBE_NF_Updates = is_numeric($emp[$x]['WBE_NF_Updates']) ? $emp[$x]['WBE_NF_Updates'] : 0;
						$WBE_WC_Updates = is_numeric($emp[$x]['WBE_WC_Updates']) ? $emp[$x]['WBE_WC_Updates'] : 0;
						$WBE_OS_Email_Inbox = is_numeric($emp[$x]['WBE_OS_Email_Inbox']) ? $emp[$x]['WBE_OS_Email_Inbox'] : 0;
						$Coding_FFS_Total = is_numeric($emp[$x]['Coding_FFS_Total']) ? $emp[$x]['Coding_FFS_Total'] : 0;
						$Coding_FFS_On_hold = is_numeric($emp[$x]['Coding_FFS_On_hold']) ? $emp[$x]['Coding_FFS_On_hold'] : 0;
						$Coding_Coding_Queue = is_numeric($emp[$x]['Coding_Coding_Queue']) ? $emp[$x]['Coding_Coding_Queue'] : 0;
						$Coding_Coding_Queue_Days = is_numeric($emp[$x]['Coding_Coding_Queue_Days']) ? $emp[$x]['Coding_Coding_Queue_Days'] : 0;
						$Coding_WS_Coding = is_numeric($emp[$x]['Coding_WS_Coding']) ? $emp[$x]['Coding_WS_Coding'] : 0;
						$Coding_FFS_Onhold_Report = is_numeric($emp[$x]['Coding_FFS_Onhold_Report']) ? $emp[$x]['Coding_FFS_Onhold_Report'] : 0;
						
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
						
						$dateObj   = DateTime::createFromFormat('!m', $cm);
						$monthName = $dateObj->format('F');
				
						$dets[$y]['id'] = $row['os_id'];
						$dets[$y]['when_done'] = $monthName;
						$dets[$y]['dashboards'] = $dashboards;
						$dets[$y]['user_id'] = $sup_id;
						$dets[$y]['RPQ_print_queue_total'] = number_format($RPQ_print_queue_total_count / $c2,2,'.','');
						$dets[$y]['RPQ_num_of_WC'] = number_format($RPQ_num_of_WC_count / $c2,2,'.','');
						$dets[$y]['IL_RCM_Ins'] = number_format($IL_RCM_Ins_count / $c2,2,'.','');
						$dets[$y]['IL_RCM_WC'] = number_format($IL_RCM_WC_count / $c2,2,'.','');
						$dets[$y]['IL_NINS'] = number_format($IL_NINS_count / $c2,2,'.','');
						$dets[$y]['IL_NNF'] = number_format($IL_NNF_count / $c2,2,'.','');
						$dets[$y]['IL_NWC'] = number_format($IL_NWC_count / $c2,2,'.','');
						$dets[$y]['IL_ENL'] = number_format($IL_ENL_count / $c2,2,'.','');
						$dets[$y]['RA_WS_Prof'] = number_format($RA_WS_Prof_count / $c2,2,'.','');
						$dets[$y]['RA_WS_Prof_Day'] = number_format($RA_WS_Prof_Day_count / $c2,2,'.','');
						$dets[$y]['RA_WS_Inst'] = number_format($RA_WS_Inst_count / $c2,2,'.','');
						$dets[$y]['RA_WS_Inst_Day'] = number_format($RA_WS_Inst_Day_count / $c2,2,'.','');
						$dets[$y]['RA_Attachments'] = number_format($RA_Attachments_count / $c2,2,'.','');
						$dets[$y]['WBE_NF_Updates'] = number_format($WBE_NF_Updates_count / $c2,2,'.','');
						$dets[$y]['WBE_WC_Updates'] = number_format($WBE_WC_Updates_count / $c2,2,'.','');
						$dets[$y]['WBE_OS_Email_Inbox'] = number_format($WBE_OS_Email_Inbox_count / $c2,2,'.','');
						$dets[$y]['Coding_FFS_Total'] = number_format($Coding_FFS_Total_count / $c2,2,'.','');
						$dets[$y]['Coding_FFS_On_hold'] = number_format($Coding_FFS_On_hold_count / $c2,2,'.','');
						$dets[$y]['Coding_Coding_Queue'] = number_format($Coding_Coding_Queue_count / $c2,2,'.','');
						$dets[$y]['Coding_Coding_Queue_Days'] = number_format($Coding_Coding_Queue_Days_count / $c2,2,'.','');
						$dets[$y]['Coding_WS_Coding'] = number_format($Coding_WS_Coding_count / $c2,2,'.','');
						$dets[$y]['Coding_FFS_Onhold_Report'] = number_format($Coding_FFS_Onhold_Report_count / $c2,2,'.','');
						
						
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
				
				$dateObj   = DateTime::createFromFormat('!m', $cm);
				$monthName = $dateObj->format('F');
				
				$dets[$y]['id'] = $row['os_id'];
				$dets[$y]['when_done'] = $monthName;
				$dets[$y]['dashboards'] = $dashboards;
				$dets[$y]['user_id'] = $sup_id;
				
				$dets[$y]['RPQ_print_queue_total'] = number_format($RPQ_print_queue_total_count / $c2,2,'.','');
				$dets[$y]['RPQ_num_of_WC'] = number_format($RPQ_num_of_WC_count / $c2,2,'.','');
				$dets[$y]['IL_RCM_Ins'] = number_format($IL_RCM_Ins_count / $c2,2,'.','');
				$dets[$y]['IL_RCM_WC'] = number_format($IL_RCM_WC_count / $c2,2,'.','');
				$dets[$y]['IL_NINS'] = number_format($IL_NINS_count / $c2,2,'.','');
				$dets[$y]['IL_NNF'] = number_format($IL_NNF_count / $c2,2,'.','');
				$dets[$y]['IL_NWC'] = number_format($IL_NWC_count / $c2,2,'.','');
				$dets[$y]['IL_ENL'] = number_format($IL_ENL_count / $c2,2,'.','');
				$dets[$y]['RA_WS_Prof'] = number_format($RA_WS_Prof_count / $c2,2,'.','');
				$dets[$y]['RA_WS_Prof_Day'] = number_format($RA_WS_Prof_Day_count / $c2,2,'.','');
				$dets[$y]['RA_WS_Inst'] = number_format($RA_WS_Inst_count / $c2,2,'.','');
				$dets[$y]['RA_WS_Inst_Day'] = number_format($RA_WS_Inst_Day_count / $c2,2,'.','');
				$dets[$y]['RA_Attachments'] = number_format($RA_Attachments_count / $c2,2,'.','');
				$dets[$y]['WBE_NF_Updates'] = number_format($WBE_NF_Updates_count / $c2,2,'.','');
				$dets[$y]['WBE_WC_Updates'] = number_format($WBE_WC_Updates_count / $c2,2,'.','');
				$dets[$y]['WBE_OS_Email_Inbox'] = number_format($WBE_OS_Email_Inbox_count / $c2,2,'.','');
				$dets[$y]['Coding_FFS_Total'] = number_format($Coding_FFS_Total_count / $c2,2,'.','');
				$dets[$y]['Coding_FFS_On_hold'] = number_format($Coding_FFS_On_hold_count / $c2,2,'.','');
				$dets[$y]['Coding_Coding_Queue'] = number_format($Coding_Coding_Queue_count / $c2,2,'.','');
				$dets[$y]['Coding_Coding_Queue_Days'] = number_format($Coding_Coding_Queue_Days_count / $c2,2,'.','');
				$dets[$y]['Coding_WS_Coding'] = number_format($Coding_WS_Coding_count / $c2,2,'.','');
				$dets[$y]['Coding_FFS_Onhold_Report'] = number_format($Coding_FFS_Onhold_Report_count / $c2,2,'.','');
			

			$RPQ_print_queue_total_AVG = 0;
			$RPQ_num_of_WC_AVG = 0;
			$IL_RCM_Ins_AVG = 0;
			$IL_RCM_WC_AVG = 0;
			$IL_NINS_AVG = 0;
			$IL_NNF_AVG = 0;
			$IL_NWC_AVG = 0;
			$IL_ENL_AVG = 0;
			$RA_WS_Prof_AVG = 0;
			$RA_WS_Prof_Day_AVG = 0;
			$RA_WS_Inst_AVG = 0;
			$RA_WS_Inst_Day_AVG = 0;
			$RA_Attachments_AVG = 0;
			$WBE_NF_Updates_AVG = 0;
			$WBE_WC_Updates_AVG = 0;
			$WBE_OS_Email_Inbox_AVG = 0;
			$Coding_FFS_Total_AVG = 0;
			$Coding_FFS_On_hold_AVG = 0;
			$Coding_Coding_Queue_AVG = 0;
			$Coding_Coding_Queue_Days_AVG = 0;
			$Coding_WS_Coding_AVG = 0;
			$Coding_FFS_Onhold_Report_AVG = 0;
			
			$y++;
			for($ii = 0; $ii < $y; $ii++)
			{
				$RPQ_print_queue_total_AVG = $RPQ_print_queue_total_AVG + $dets[$ii]['RPQ_print_queue_total'];
				$RPQ_num_of_WC_AVG = $RPQ_num_of_WC_AVG + $dets[$ii]['RPQ_num_of_WC'];
				$IL_RCM_Ins_AVG = $IL_RCM_Ins_AVG + $dets[$ii]['IL_RCM_Ins'];
				$IL_RCM_WC_AVG = $IL_RCM_WC_AVG + $dets[$ii]['IL_RCM_WC'];
				$IL_NINS_AVG = $IL_NINS_AVG + $dets[$ii]['IL_NINS'];
				$IL_NNF_AVG = $IL_NNF_AVG + $dets[$ii]['IL_NNF'];
				$IL_NWC_AVG = $IL_NWC_AVG + $dets[$ii]['IL_NWC'];
				$IL_ENL_AVG = $IL_ENL_AVG + $dets[$ii]['IL_ENL'];
				$RA_WS_Prof_AVG = $RA_WS_Prof_AVG + $dets[$ii]['RA_WS_Prof'];
				$RA_WS_Prof_Day_AVG = $RA_WS_Prof_Day_AVG + $dets[$ii]['RA_WS_Prof_Day'];
				$RA_WS_Inst_AVG = $RA_WS_Inst_AVG + $dets[$ii]['RA_WS_Inst'];
				$RA_WS_Inst_Day_AVG = $RA_WS_Inst_Day_AVG + $dets[$ii]['RA_WS_Inst_Day'];
				$RA_Attachments_AVG = $RA_Attachments_AVG + $dets[$ii]['RA_Attachments'];
				$WBE_NF_Updates_AVG = $WBE_NF_Updates_AVG + $dets[$ii]['WBE_NF_Updates'];
				$WBE_WC_Updates_AVG = $WBE_WC_Updates_AVG + $dets[$ii]['WBE_WC_Updates'];
				$WBE_OS_Email_Inbox_AVG = $WBE_OS_Email_Inbox_AVG + $dets[$ii]['WBE_OS_Email_Inbox'];
				$Coding_FFS_Total_AVG = $Coding_FFS_Total_AVG + $dets[$ii]['Coding_FFS_Total'];
				$Coding_FFS_On_hold_AVG = $Coding_FFS_On_hold_AVG + $dets[$ii]['Coding_FFS_On_hold'];
				$Coding_Coding_Queue_AVG = $Coding_Coding_Queue_AVG + $dets[$ii]['Coding_Coding_Queue'];
				$Coding_Coding_Queue_Days_AVG = $Coding_Coding_Queue_Days_AVG + $dets[$ii]['Coding_Coding_Queue_Days'];
				$Coding_WS_Coding_AVG = $Coding_WS_Coding_AVG + $dets[$ii]['Coding_WS_Coding'];
				$Coding_FFS_Onhold_Report_AVG = $Coding_FFS_Onhold_Report_AVG + $dets[$ii]['Coding_FFS_Onhold_Report'];
			}
			
			
			$dets[$y]['id'] = 'Average';
			$dets[$y]['when_done'] = 'Average';
			$dets[$y]['dashboards'] = $dashboards;
			$dets[$y]['user_id'] = '-1';
			$dets[$y]['RPQ_print_queue_total'] = number_format($RPQ_print_queue_total_AVG / $y,2,'.','');
			$dets[$y]['RPQ_num_of_WC'] = number_format($RPQ_num_of_WC_AVG / $y,2,'.','');
			$dets[$y]['IL_RCM_Ins'] = number_format($IL_RCM_Ins_AVG / $y,2,'.','');
			$dets[$y]['IL_RCM_WC'] = number_format($IL_RCM_WC_AVG / $y,2,'.','');
			$dets[$y]['IL_NINS'] = number_format($IL_NINS_AVG / $y,2,'.','');
			$dets[$y]['IL_NNF'] = number_format($IL_NNF_AVG / $y,2,'.','');
			$dets[$y]['IL_NWC'] = number_format($IL_NWC_AVG / $y,2,'.','');
			$dets[$y]['IL_ENL'] = number_format($IL_ENL_AVG / $y,2,'.','');
			$dets[$y]['RA_WS_Prof'] = number_format($RA_WS_Prof_AVG / $y,2,'.','');
			$dets[$y]['RA_WS_Prof_Day'] = number_format($RA_WS_Prof_Day_AVG / $y,2,'.','');
			$dets[$y]['RA_WS_Inst'] = number_format($RA_WS_Inst_AVG / $y,2,'.','');
			$dets[$y]['RA_WS_Inst_Day'] = number_format($RA_WS_Inst_Day_AVG / $y,2,'.','');
			$dets[$y]['RA_Attachments'] = number_format($RA_Attachments_AVG / $y,2,'.','');
			$dets[$y]['WBE_NF_Updates'] = number_format($WBE_NF_Updates_AVG / $y,2,'.','');
			$dets[$y]['WBE_WC_Updates'] = number_format($WBE_WC_Updates_AVG / $y,2,'.','');
			$dets[$y]['WBE_OS_Email_Inbox'] = number_format($WBE_OS_Email_Inbox_AVG / $y,2,'.','');
			$dets[$y]['Coding_FFS_Total'] = number_format($Coding_FFS_Total_AVG / $y,2,'.','');
			$dets[$y]['Coding_FFS_On_hold'] = number_format($Coding_FFS_On_hold_AVG / $y,2,'.','');
			$dets[$y]['Coding_Coding_Queue'] = number_format($Coding_Coding_Queue_AVG / $y,2,'.','');
			$dets[$y]['Coding_Coding_Queue_Days'] = number_format($Coding_Coding_Queue_Days_AVG / $y,2,'.','');
			$dets[$y]['Coding_WS_Coding'] = number_format($Coding_WS_Coding_AVG / $y,2,'.','');
			$dets[$y]['Coding_FFS_Onhold_Report'] = number_format($Coding_FFS_Onhold_Report_AVG / $y,2,'.','');
			
			echo json_encode($dets);
		}
		else
		{
			$emp[$c]['id'] = 0;
			$emp[$c]['when_done'] = $row['when_done'];
			$emp[$c]['dashboards'] = $dashboards;
			$emp[$c]['user_id'] = $sup_id;
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
			
			
			echo json_encode($emp);
		}
		
	}
}
else if($dashboards == '3' or $dashboards == 3)
{
	if($startdate == $enddate)
	{
		$sql = "select * from om_data where when_done = '$startdate' order by when_done asc";
	}
	else
	{
		$sql = "select * from om_data where when_done between '$startdate' and '$enddate' order by when_done asc";
	}
	if($res = mysqli_query($con, $sql))
	{
		$c = 0;
		
		
		while($row = mysqli_fetch_assoc($res))
		{
			$emp[$c]['id'] = $row['om_id'];
			$emp[$c]['when_done'] = $row['when_done'];
			$emp[$c]['dashboards'] = $dashboards;
			$emp[$c]['user_id'] = $sup_id;
			
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
			
			$c1 = 0;
			$c2 = 0;
			$month_num = 0;
			$num_of_m = sizeof($months);
			
			$y = 0;
			$x = 0;
			
			
				while(($x < $c) and ($y < $num_of_m))
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
						
						$dateObj   = DateTime::createFromFormat('!m', $cm);
						$monthName = $dateObj->format('F');
						
						$dets[$y]['id'] = $row['om_id'];
						$dets[$y]['when_done'] = $monthName;
						$dets[$y]['dashboards'] = $dashboards;
						$dets[$y]['user_id'] = $sup_id;
						
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
				
				$dateObj   = DateTime::createFromFormat('!m', $cm);
				$monthName = $dateObj->format('F');
						
				$dets[$y]['id'] = $row['om_id'];
				$dets[$y]['when_done'] = $monthName;
				$dets[$y]['dashboards'] = $dashboards;
				$dets[$y]['user_id'] = $sup_id;
				
				$dets[$y]['support_sp'] = number_format($support_sp_count / $c2,2,'.','');
				$dets[$y]['support_enl'] = number_format($support_enl_count / $c2,2,'.','');
				$dets[$y]['support_dnu'] = number_format($support_dnu_count / $c2,2,'.','');
				$dets[$y]['support_nyucp'] = number_format($support_nyucp_count / $c2,2,'.','');
				$dets[$y]['support_nom'] = number_format($support_nom_count / $c2,2,'.','');
				$dets[$y]['support_emails'] = number_format($support_emails_count / $c2,2,'.','');
				$dets[$y]['support_deposit_pulls'] = number_format($support_deposit_pulls_count / $c2,2,'.','');
				$dets[$y]['support_blank_batch_corres'] = number_format($support_blank_batch_corres_count / $c2,2,'.','');
				$dets[$y]['support_correspondence'] = number_format($support_correspondence_count / $c2,2,'.','');
				$dets[$y]['support_acct_audits'] = number_format($support_acct_audits_count / $c2,2,'.','');
				$dets[$y]['support_inv_correct'] = number_format($support_inv_correct_count / $c2,2,'.','');
				$dets[$y]['support_phone'] = number_format($support_phone_count / $c2,2,'.','');
				$dets[$y]['support_inv_addr'] = number_format($support_inv_addr_count / $c2,2,'.','');
				$dets[$y]['support_collects'] = number_format($support_collects_count / $c2,2,'.','');
				$dets[$y]['suport_medical_records'] = number_format($suport_medical_records_count / $c2,2,'.','');
				$dets[$y]['coding_na'] = number_format($coding_na_count / $c2,2,'.','');
				$dets[$y]['coding_on_holds'] = number_format($coding_on_holds_count / $c2,2,'.','');
				$dets[$y]['coding_coding_queue'] = number_format($coding_coding_queue_count / $c2,2,'.','');
				$dets[$y]['coding_onsites'] = number_format($coding_onsites_count / $c2,2,'.','');
				$dets[$y]['coding_ooa'] = number_format($coding_ooa_count / $c2,2,'.','');
				$dets[$y]['ar120'] = number_format($ar120_count / $c2,2,'.','');
				$dets[$y]['ar_120percent'] = number_format($ar_120percent_count / $c2,2,'.','');
				$dets[$y]['ar_90'] = number_format($ar_90_count / $c2,2,'.','');
				$dets[$y]['ar_voicemails'] = number_format($ar_voicemails_count / $c2,2,'.','');
				$dets[$y]['ar_unapplied'] = number_format($ar_unapplied_count / $c2,2,'.','');
				$dets[$y]['ar_audit'] = number_format($ar_audit_count / $c2,2,'.','');
				$dets[$y]['ar_wbs'] = number_format($ar_wbs_count / $c2,2,'.','');
			

			$support_sp_AVG = 0;
			$support_enl_AVG = 0;
			$support_dnu_AVG = 0;
			$support_nyucp_AVG = 0;
			$support_nom_AVG = 0;
			$support_emails_AVG = 0;
			$support_deposit_pulls_AVG = 0;
			$support_blank_batch_corres_AVG = 0;
			$support_correspondence_AVG = 0;
			$support_acct_audits_AVG = 0;
			$support_inv_correct_AVG = 0;
			$support_phone_AVG = 0;
			$support_inv_addr_AVG = 0;
			$support_collects_AVG = 0;
			$suport_medical_records_AVG = 0;
			$coding_na_AVG = 0;
			$coding_on_holds_AVG = 0;
			$coding_coding_queue_AVG = 0;
			$coding_onsites_AVG = 0;
			$coding_ooa_AVG = 0;
			$ar120_AVG = 0;
			$ar_120percent_AVG = 0;
			$ar_90_AVG = 0;
			$ar_voicemails_AVG = 0;
			$ar_unapplied_AVG = 0;
			$ar_audit_AVG = 0;
			$ar_wbs_AVG = 0;
			
			$y++;
			for($ii = 0; $ii < $y; $ii++)
			{
				$support_sp_AVG = $support_sp_AVG + $dets[$ii]['support_sp'];
				$support_enl_AVG = $support_enl_AVG + $dets[$ii]['support_enl'];
				$support_dnu_AVG = $support_dnu_AVG + $dets[$ii]['support_dnu'];
				$support_nyucp_AVG = $support_nyucp_AVG + $dets[$ii]['support_nyucp'];
				$support_nom_AVG = $support_nom_AVG + $dets[$ii]['support_nom'];
				$support_emails_AVG = $support_emails_AVG + $dets[$ii]['support_emails'];
				$support_deposit_pulls_AVG = $support_deposit_pulls_AVG + $dets[$ii]['support_deposit_pulls'];
				$support_blank_batch_corres_AVG = $support_blank_batch_corres_AVG + $dets[$ii]['support_blank_batch_corres'];
				$support_correspondence_AVG = $support_correspondence_AVG + $dets[$ii]['support_correspondence'];
				$support_acct_audits_AVG = $support_acct_audits_AVG + $dets[$ii]['support_acct_audits'];
				$support_inv_correct_AVG = $support_inv_correct_AVG + $dets[$ii]['support_inv_correct'];
				$support_phone_AVG = $support_phone_AVG + $dets[$ii]['support_phone'];
				$support_inv_addr_AVG = $support_inv_addr_AVG + $dets[$ii]['support_inv_addr'];
				$support_collects_AVG = $support_collects_AVG + $dets[$ii]['support_collects'];
				$suport_medical_records_AVG = $suport_medical_records_AVG + $dets[$ii]['suport_medical_records'];
				$coding_na_AVG = $coding_na_AVG + $dets[$ii]['coding_na'];
				$coding_on_holds_AVG = $coding_on_holds_AVG + $dets[$ii]['coding_on_holds'];
				$coding_coding_queue_AVG = $coding_coding_queue_AVG + $dets[$ii]['coding_coding_queue'];
				$coding_onsites_AVG = $coding_onsites_AVG + $dets[$ii]['coding_onsites'];
				$coding_ooa_AVG = $coding_ooa_AVG + $dets[$ii]['coding_ooa'];
				$ar120_AVG = $ar120_AVG + $dets[$ii]['ar120'];
				$ar_120percent_AVG = $ar_120percent_AVG + $dets[$ii]['ar_120percent'];
				$ar_90_AVG = $ar_90_AVG + $dets[$ii]['ar_90'];
				$ar_voicemails_AVG = $ar_voicemails_AVG + $dets[$ii]['ar_voicemails'];
				$ar_unapplied_AVG = $ar_unapplied_AVG + $dets[$ii]['ar_unapplied'];
				$ar_audit_AVG = $ar_audit_AVG + $dets[$ii]['ar_audit'];
				$ar_wbs_AVG = $ar_wbs_AVG + $dets[$ii]['ar_wbs'];
			}
			
			$dets[$y]['id'] = 'Average';
			$dets[$y]['when_done'] = 'Average';
			$dets[$y]['dashboards'] = $dashboards;
			$dets[$y]['user_id'] = '-1';
			
			$dets[$y]['support_sp'] = number_format($support_sp_AVG / $y,2,'.','');
			$dets[$y]['support_enl'] = number_format($support_enl_AVG / $y,2,'.','');
			$dets[$y]['support_dnu'] = number_format($support_dnu_AVG / $y,2,'.','');
			$dets[$y]['support_nyucp'] = number_format($support_nyucp_AVG / $y,2,'.','');
			$dets[$y]['support_nom'] = number_format($support_nom_AVG / $y,2,'.','');
			$dets[$y]['support_emails'] = number_format($support_emails_AVG / $y,2,'.','');
			$dets[$y]['support_deposit_pulls'] = number_format($support_deposit_pulls_AVG / $y,2,'.','');
			$dets[$y]['support_blank_batch_corres'] = number_format($support_blank_batch_corres_AVG / $y,2,'.','');
			$dets[$y]['support_correspondence'] = number_format($support_correspondence_AVG / $y,2,'.','');
			$dets[$y]['support_acct_audits'] = number_format($support_acct_audits_AVG / $y,2,'.','');
			$dets[$y]['support_inv_correct'] = number_format($support_inv_correct_AVG / $y,2,'.','');
			$dets[$y]['support_phone'] = number_format($support_phone_AVG / $y,2,'.','');
			$dets[$y]['support_inv_addr'] = number_format($support_inv_addr_AVG / $y,2,'.','');
			$dets[$y]['support_collects'] = number_format($support_collects_AVG / $y,2,'.','');
			$dets[$y]['suport_medical_records'] = number_format($suport_medical_records_AVG / $y,2,'.','');
			$dets[$y]['coding_na'] = number_format($coding_na_AVG / $y,2,'.','');
			$dets[$y]['coding_on_holds'] = number_format($coding_on_holds_AVG / $y,2,'.','');
			$dets[$y]['coding_coding_queue'] = number_format($coding_coding_queue_AVG / $y,2,'.','');
			$dets[$y]['coding_onsites'] = number_format($coding_onsites_AVG / $y,2,'.','');
			$dets[$y]['coding_ooa'] = number_format($coding_ooa_AVG / $y,2,'.','');
			$dets[$y]['ar120'] = number_format($ar120_AVG / $y,2,'.','');
			$dets[$y]['ar_120percent'] = number_format($ar_120percent_AVG / $y,2,'.','');
			$dets[$y]['ar_90'] = number_format($ar_90_AVG / $y,2,'.','');
			$dets[$y]['ar_voicemails'] = number_format($ar_voicemails_AVG / $y,2,'.','');
			$dets[$y]['ar_unapplied'] = number_format($ar_unapplied_AVG / $y,2,'.','');
			$dets[$y]['ar_audit'] = number_format($ar_audit_AVG / $y,2,'.','');
			$dets[$y]['ar_wbs'] = number_format($ar_wbs_AVG / $y,2,'.','');
			
			echo json_encode($dets);
		}
		else
		{
			$emp[$c]['id'] = 0;
			$emp[$c]['when_done'] = $row['when_done'];
			$emp[$c]['dashboards'] = $dashboards;
			$emp[$c]['user_id'] = $sup_id;
			
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
			
			echo json_encode($emp);
		}
		
	}
}
else
{
	http_response_code(404);
}


?>