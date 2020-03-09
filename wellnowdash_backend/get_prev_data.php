<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

$emp = [];
	
$startdate = $_GET['startdate'];
$enddate = $_GET['enddate'];
$dashboards = $_GET['dashboards'];



if($dashboards == '1')
{
	$wb_tech_other_val = 0;
	$wb_demo_elig_val = 0;
	$wb_timely_filing_val = 0;
	$wb_coding_replies_val = 0;
	$wb_sup_reviews_val = 0;
	$wb_nf_corres_val = 0;
	$wb_wc_corres_val = 0;
	$waystar_medc_sec_val = 0;
	$waystar_oob_val = 0;
	$waystar_fidelis_tf_val = 0;

	$wb_tech_other_val1 = 0;
	$wb_demo_elig_val1 = 0;
	$wb_timely_filing_val1 = 0;
	$wb_coding_replies_val1 = 0;
	$wb_sup_reviews_val1 = 0;
	$wb_nf_corres_val1 = 0;
	$wb_wc_corres_val1 = 0;
	$waystar_medc_sec_val1 = 0;
	$waystar_oob_val1 = 0;
	$waystar_fidelis_tf_val1 = 0;

	$wb_tech_other_sum = 0;
	$wb_demo_elig_sum = 0;
	$wb_timely_filing_sum = 0;
	$wb_coding_replies_sum = 0;
	$wb_sup_reviews_sum = 0;
	$wb_nf_corres_sum = 0;
	$wb_wc_corres_sum = 0;
	$waystar_medc_sec_sum = 0;
	$waystar_oob_sum = 0;
	$waystar_fidelis_tf_sum = 0;


	$wb_tech_other_avg = 0;
	$wb_demo_elig_avg = 0;
	$wb_timely_filing_avg = 0;
	$wb_coding_replies_avg = 0;
	$wb_sup_reviews_avg = 0;
	$wb_nf_corres_avg = 0;
	$wb_wc_corres_avg = 0;
	$waystar_medc_sec_avg = 0;
	$waystar_oob_avg = 0;
	$waystar_fidelis_tf_avg = 0;
	
	$sql = "select * from ar_data where when_done between '$startdate' and '$enddate'";
	if($res = mysqli_query($con, $sql))
	{
		$c = 0;
		while($row = mysqli_fetch_assoc($res))
		{
			if($row['wb_tech_other'] == "") 
			{
				$wb_tech_other_val = "-";
				$wb_tech_other_val1 = 0;
			} 
			else 
			{
				$wb_tech_other_val = $row['wb_tech_other'];
				$wb_tech_other_val1 = $row['wb_tech_other'];
			}
			
			if($row['wb_demo_elig'] == "") 
			{
				$wb_demo_elig_val = "-";
				$wb_demo_elig_val1 = 0;
			} 
			else 
			{
				$wb_demo_elig_val = $row['wb_demo_elig'];
				$wb_demo_elig_val1 = $row['wb_demo_elig'];
			}
			
			if($row['wb_timely_filing'] == "") 
			{
				$wb_timely_filing_val = "-";
				$wb_timely_filing_val1 = 0;
			} 
			else 
			{
				$wb_timely_filing_val = $row['wb_timely_filing'];
				$wb_timely_filing_val1 = $row['wb_timely_filing'];
			}
			
			if($row['wb_coding_replies'] == "") 
			{
				$wb_coding_replies_val = "-";
				$wb_coding_replies_val1 = 0;
			} 
			else 
			{
				$wb_coding_replies_val = $row['wb_coding_replies'];
				$wb_coding_replies_val1 = $row['wb_coding_replies'];
			}
			
			if($row['wb_sup_reviews'] == "") 
			{
				$wb_sup_reviews_val = "-";
				$wb_sup_reviews_val1 = 0;
			} 
			else 
			{
				$wb_sup_reviews_val = $row['wb_sup_reviews'];
				$wb_sup_reviews_val1 = $row['wb_sup_reviews'];
			}
			if($row['wb_nf_corres'] == "") 
			{
				$wb_nf_corres_val = "-";
				$wb_nf_corres_val1 = 0;
			} 
			else 
			{
				$wb_nf_corres_val = $row['wb_nf_corres'];
				$wb_nf_corres_val1 = $row['wb_nf_corres'];
			}
			if($row['wb_wc_corres'] == "") 
			{
				$wb_wc_corres_val = "-";
				$wb_wc_corres_val1 = 0;
			} 
			else 
			{
				$wb_wc_corres_val = $row['wb_wc_corres'];
				$wb_wc_corres_val1 = $row['wb_wc_corres'];
			}
			if($row['waystar_medc_sec'] == "") 
			{
				$waystar_medc_sec_val = "-";
				$waystar_medc_sec_val1 = 0;
			} 
			else 
			{
				$waystar_medc_sec_val = $row['waystar_medc_sec'];
				$waystar_medc_sec_val1 = $row['waystar_medc_sec'];
			}
			if($row['waystar_oob'] == "") 
			{
				$waystar_oob_val = "-";
				$waystar_oob_val1 = 0;
			} 
			else 
			{
				$waystar_oob_val = $row['waystar_oob'];
				$waystar_oob_val1 = $row['waystar_oob'];
			}
			if($row['waystar_fidelis_tf'] == "") 
			{
				$waystar_fidelis_tf_val = "-";
				$waystar_fidelis_tf_val1 = 0;
			} 
			else 
			{
				$waystar_fidelis_tf_val = $row['waystar_fidelis_tf'];
				$waystar_fidelis_tf_val1 = $row['waystar_fidelis_tf'];
			}
			
			
			$emp[$c]['id'] = $row['ar_id'];
			$emp[$c]['when_done'] = $row['when_done'];
			$emp[$c]['dashboards'] = $dashboards;
			$emp[$c]['wb_tech_other'] = $wb_tech_other_val;
			$emp[$c]['wb_demo_elig'] = $wb_demo_elig_val;
			$emp[$c]['wb_timely_filing'] = $wb_timely_filing_val;
			$emp[$c]['wb_coding_replies'] = $wb_coding_replies_val;
			$emp[$c]['wb_sup_reviews'] = $wb_sup_reviews_val;
			$emp[$c]['wb_nf_corres'] = $wb_nf_corres_val;
			$emp[$c]['wb_wc_corres'] = $wb_wc_corres_val;
			$emp[$c]['waystar_medc_sec'] = $waystar_medc_sec_val;
			$emp[$c]['waystar_oob'] = $waystar_oob_val;
			$emp[$c]['waystar_fidelis_tf'] = $waystar_fidelis_tf_val;

			$c++;
			
			$wb_tech_other_sum = $wb_tech_other_sum + $wb_tech_other_val1;
			$wb_demo_elig_sum = $wb_demo_elig_sum +  $wb_demo_elig_val1;
			$wb_timely_filing_sum = $wb_timely_filing_sum + $wb_timely_filing_val1;
			$wb_coding_replies_sum = $wb_coding_replies_sum + $wb_coding_replies_val1;
			$wb_sup_reviews_sum = $wb_sup_reviews_sum + $wb_sup_reviews_val1;
			$wb_nf_corres_sum = $wb_nf_corres_sum + $wb_nf_corres_val1;
			$wb_wc_corres_sum = $wb_wc_corres_sum + $wb_wc_corres_val1;
			$waystar_medc_sec_sum = $waystar_medc_sec_sum + $waystar_medc_sec_val1;
			$waystar_oob_sum = $waystar_oob_sum + $waystar_oob_val1;
			$waystar_fidelis_tf_sum = $waystar_fidelis_tf_sum + $waystar_fidelis_tf_val1;
			
		}
		$emp[$c]['id'] = '-1';
		$emp[$c]['when_done'] = 'Total';
		$emp[$c]['dashboards'] = $dashboards;
		$emp[$c]['wb_tech_other'] = $wb_tech_other_sum;
		$emp[$c]['wb_demo_elig'] = $wb_demo_elig_sum;
		$emp[$c]['wb_timely_filing'] = $wb_timely_filing_sum;
		$emp[$c]['wb_coding_replies'] = $wb_coding_replies_sum;
		$emp[$c]['wb_sup_reviews'] = $wb_sup_reviews_sum;
		$emp[$c]['wb_nf_corres'] = $wb_nf_corres_sum;
		$emp[$c]['wb_wc_corres'] = $wb_wc_corres_sum;
		$emp[$c]['waystar_medc_sec'] = $waystar_medc_sec_sum;
		$emp[$c]['waystar_oob'] = $waystar_oob_sum;
		$emp[$c]['waystar_fidelis_tf'] = $waystar_fidelis_tf_sum;
		
		
		if($c == 0)
		{
			$div = 1;
		}
		else{
			$div = $c;
		}
		
		$wb_tech_other_avg = $wb_tech_other_sum / $div;
		$wb_demo_elig_avg = $wb_demo_elig_sum / $div;
		$wb_timely_filing_avg = $wb_timely_filing_sum / $div;
		$wb_coding_replies_avg = $wb_coding_replies_sum / $div;
		$wb_sup_reviews_avg = $wb_sup_reviews_sum / $div;
		$wb_nf_corres_avg = $wb_nf_corres_sum / $div;
		$wb_wc_corres_avg = $wb_wc_corres_sum / $div;
		$waystar_medc_sec_avg = $waystar_medc_sec_sum / $div;
		$waystar_oob_avg = $waystar_oob_sum / $div;
		$waystar_fidelis_tf_avg = $waystar_fidelis_tf_sum / $div;
		
		$c++;
		
		$emp[$c]['id'] = '-2';
		$emp[$c]['when_done'] = 'Average';
		$emp[$c]['dashboards'] = $dashboards;
		$emp[$c]['wb_tech_other'] = number_format($wb_tech_other_avg,2,'.','');
		$emp[$c]['wb_demo_elig'] = number_format($wb_demo_elig_avg,2,'.','');
		$emp[$c]['wb_timely_filing'] = number_format($wb_timely_filing_avg,2,'.','');
		$emp[$c]['wb_coding_replies'] = number_format($wb_coding_replies_avg,2,'.','');
		$emp[$c]['wb_sup_reviews'] = number_format($wb_sup_reviews_avg,2,'.','');
		$emp[$c]['wb_nf_corres'] = number_format($wb_nf_corres_avg,2,'.','');
		$emp[$c]['wb_wc_corres'] = number_format($wb_wc_corres_avg,2,'.','');
		$emp[$c]['waystar_medc_sec'] = number_format($waystar_medc_sec_avg,2,'.','');
		$emp[$c]['waystar_oob'] = number_format($waystar_oob_avg,2,'.','');
		$emp[$c]['waystar_fidelis_tf'] = number_format($waystar_fidelis_tf_avg,2,'.','');
		
		echo json_encode($emp);
	}
}
else if($dashboards == '2')
{
	$RPQ_print_queue_total_val = 0;
	$RPQ_num_of_WC_val = 0;
	$IL_RCM_Ins_val = 0;
	$IL_RCM_WC_val = 0;
	$IL_NINS_val = 0;
	$IL_NNF_val = 0;
	$IL_NWC_val = 0;
	$IL_ENL_val = 0;
	$RA_WS_Prof_val = 0;
	$RA_WS_Prof_Day_val = 0;
	$RA_WS_Inst_val = 0;
	$RA_WS_Inst_Day_val = 0;
	$RA_Attachments_val = 0;
	$WBE_NF_Updates_val = 0;
	$WBE_WC_Updates_val = 0;
	$WBE_OS_Email_Inbox_val = 0;
	$Coding_FFS_Total_val = 0;
	$Coding_FFS_On_hold_val = 0;
	$Coding_Coding_Queue_val = 0;
	$Coding_Coding_Queue_Days_val = 0;
	$Coding_WS_Coding_val = 0;
	$Coding_FFS_Onhold_Report_val = 0;

	$RPQ_print_queue_total_val1 = 0;
	$RPQ_num_of_WC_val1 = 0;
	$IL_RCM_Ins_val1 = 0;
	$IL_RCM_WC_val1 = 0;
	$IL_NINS_val1 = 0;
	$IL_NNF_val1 = 0;
	$IL_NWC_val1 = 0;
	$IL_ENL_val1 = 0;
	$RA_WS_Prof_val1 = 0;
	$RA_WS_Prof_Day_val1 = 0;
	$RA_WS_Inst_val1 = 0;
	$RA_WS_Inst_Day_val1 = 0;
	$RA_Attachments_val1 = 0;
	$WBE_NF_Updates_val1 = 0;
	$WBE_WC_Updates_val1 = 0;
	$WBE_OS_Email_Inbox_val1 = 0;
	$Coding_FFS_Total_val1 = 0;
	$Coding_FFS_On_hold_val1 = 0;
	$Coding_Coding_Queue_val1 = 0;
	$Coding_Coding_Queue_Days_val1 = 0;
	$Coding_WS_Coding_val1 = 0;
	$Coding_FFS_Onhold_Report_val1 = 0;

	$RPQ_print_queue_total_sum = 0;
	$RPQ_num_of_WC_sum = 0;
	$IL_RCM_Ins_sum = 0;
	$IL_RCM_WC_sum = 0;
	$IL_NINS_sum = 0;
	$IL_NNF_sum = 0;
	$IL_NWC_sum = 0;
	$IL_ENL_sum = 0;
	$RA_WS_Prof_sum = 0;
	$RA_WS_Prof_Day_sum = 0;
	$RA_WS_Inst_sum = 0;
	$RA_WS_Inst_Day_sum = 0;
	$RA_Attachments_sum = 0;
	$WBE_NF_Updates_sum = 0;
	$WBE_WC_Updates_sum = 0;
	$WBE_OS_Email_Inbox_sum = 0;
	$Coding_FFS_Total_sum = 0;
	$Coding_FFS_On_hold_sum = 0;
	$Coding_Coding_Queue_sum = 0;
	$Coding_Coding_Queue_Days_sum = 0;
	$Coding_WS_Coding_sum = 0;
	$Coding_FFS_Onhold_Report_sum = 0;

	$RPQ_print_queue_total_avg = 0;
	$RPQ_num_of_WC_avg = 0;
	$IL_RCM_Ins_avg = 0;
	$IL_RCM_WC_avg = 0;
	$IL_NINS_avg = 0;
	$IL_NNF_avg = 0;
	$IL_NWC_avg = 0;
	$IL_ENL_avg = 0;
	$RA_WS_Prof_avg = 0;
	$RA_WS_Prof_Day_avg = 0;
	$RA_WS_Inst_avg = 0;
	$RA_WS_Inst_Day_avg = 0;
	$RA_Attachments_avg = 0;
	$WBE_NF_Updates_avg = 0;
	$WBE_WC_Updates_avg = 0;
	$WBE_OS_Email_Inbox_avg = 0;
	$Coding_FFS_Total_avg = 0;
	$Coding_FFS_On_hold_avg = 0;
	$Coding_Coding_Queue_avg = 0;
	$Coding_Coding_Queue_Days_avg = 0;
	$Coding_WS_Coding_avg = 0;
	$Coding_FFS_Onhold_Report_avg = 0;
	
	$sql = "select * from os_data where when_done between '$startdate' and '$enddate'";
	if($res = mysqli_query($con, $sql))
	{
		$c = 0;
		while($row = mysqli_fetch_assoc($res))
		{
			if($row['RPQ_print_queue_total'] == "") 
			{
				$RPQ_print_queue_total_val = "-";
				$RPQ_print_queue_total_val1 = 0;
			} 
			else 
			{
				$RPQ_print_queue_total_val = $row['RPQ_print_queue_total'];
				$RPQ_print_queue_total_val1 = $row['RPQ_print_queue_total'];
			}
			
			if($row['RPQ_num_of_WC'] == "") 
			{
				$RPQ_num_of_WC_val = "-";
				$RPQ_num_of_WC_val1 = 0;
			} 
			else 
			{
				$RPQ_num_of_WC_val = $row['RPQ_num_of_WC'];
				$RPQ_num_of_WC_val1 = $row['RPQ_num_of_WC'];
			}
			
			if($row['IL_RCM_Ins'] == "") 
			{
				$IL_RCM_Ins_val = "-";
				$IL_RCM_Ins_val1 = 0;
			} 
			else 
			{
				$IL_RCM_Ins_val = $row['IL_RCM_Ins'];
				$IL_RCM_Ins_val1 = $row['IL_RCM_Ins'];
			}
			
			if($row['IL_RCM_WC'] == "") 
			{
				$IL_RCM_WC_val = "-";
				$IL_RCM_WC_val1 = 0;
			} 
			else 
			{
				$IL_RCM_WC_val = $row['IL_RCM_WC'];
				$IL_RCM_WC_val1 = $row['IL_RCM_WC'];
			}
			
			if($row['IL_NINS'] == "") 
			{
				$IL_NINS_val = "-";
				$IL_NINS_val1 = 0;
			} 
			else 
			{
				$IL_NINS_val = $row['IL_NINS'];
				$IL_NINS_val1 = $row['IL_NINS'];
			}
			if($row['IL_NNF'] == "") 
			{
				$IL_NNF_val = "-";
				$IL_NNF_val1 = 0;
			} 
			else 
			{
				$IL_NNF_val = $row['IL_NNF'];
				$IL_NNF_val1 = $row['IL_NNF'];
			}
			if($row['IL_NWC'] == "") 
			{
				$IL_NWC_val = "-";
				$IL_NWC_val1 = 0;
			} 
			else 
			{
				$IL_NWC_val = $row['IL_NWC'];
				$IL_NWC_val1 = $row['IL_NWC'];
			}
			if($row['IL_ENL'] == "") 
			{
				$IL_ENL_val = "-";
				$IL_ENL_val1 = 0;
			} 
			else 
			{
				$IL_ENL_val = $row['IL_ENL'];
				$IL_ENL_val1 = $row['IL_ENL'];
			}
			if($row['RA_WS_Prof'] == "") 
			{
				$RA_WS_Prof_val = "-";
				$RA_WS_Prof_val1 = 0;
			} 
			else 
			{
				$RA_WS_Prof_val = $row['RA_WS_Prof'];
				$RA_WS_Prof_val1 = $row['RA_WS_Prof'];
			}
			if($row['RA_WS_Prof_Day'] == "") 
			{
				$RA_WS_Prof_Day_val = "-";
				$RA_WS_Prof_Day_val1 = 0;
			} 
			else 
			{
				$RA_WS_Prof_Day_val = $row['RA_WS_Prof_Day'];
				$RA_WS_Prof_Day_val1 = $row['RA_WS_Prof_Day'];
			}
			
			if($row['RA_WS_Inst'] == "") 
			{
				$RA_WS_Inst_val = "-";
				$RA_WS_Inst_val1 = 0;
			} 
			else 
			{
				$RA_WS_Inst_val = $row['RA_WS_Inst'];
				$RA_WS_Inst_val1 = $row['RA_WS_Inst'];
			}
			
			if($row['RA_WS_Inst_Day'] == "") 
			{
				$RA_WS_Inst_Day_val = "-";
				$RA_WS_Inst_Day_val1 = 0;
			} 
			else 
			{
				$RA_WS_Inst_Day_val = $row['RA_WS_Inst_Day'];
				$RA_WS_Inst_Day_val1 = $row['RA_WS_Inst_Day'];
			}
			
			if($row['RA_Attachments'] == "") 
			{
				$RA_Attachments_val = "-";
				$RA_Attachments_val1 = 0;
			} 
			else 
			{
				$RA_Attachments_val = $row['RA_Attachments'];
				$RA_Attachments_val1 = $row['RA_Attachments'];
			}
			
			if($row['WBE_NF_Updates'] == "") 
			{
				$WBE_NF_Updates_val = "-";
				$WBE_NF_Updates_val1 = 0;
			} 
			else 
			{
				$WBE_NF_Updates_val = $row['WBE_NF_Updates'];
				$WBE_NF_Updates_val1 = $row['WBE_NF_Updates'];
			}
			
			if($row['WBE_WC_Updates'] == "") 
			{
				$WBE_WC_Updates_val = "-";
				$WBE_WC_Updates_val1 = 0;
			} 
			else 
			{
				$WBE_WC_Updates_val = $row['WBE_WC_Updates'];
				$WBE_WC_Updates_val1 = $row['WBE_WC_Updates'];
			}
			
			if($row['WBE_OS_Email_Inbox'] == "") 
			{
				$WBE_OS_Email_Inbox_val = "-";
				$WBE_OS_Email_Inbox_val1 = 0;
			} 
			else 
			{
				$WBE_OS_Email_Inbox_val = $row['WBE_OS_Email_Inbox'];
				$WBE_OS_Email_Inbox_val1 = $row['WBE_OS_Email_Inbox'];
			}
			
			if($row['Coding_FFS_Total'] == "") 
			{
				$Coding_FFS_Total_val = "-";
				$Coding_FFS_Total_val1 = 0;
			} 
			else 
			{
				$Coding_FFS_Total_val = $row['Coding_FFS_Total'];
				$Coding_FFS_Total_val1 = $row['Coding_FFS_Total'];
			}
			
			if($row['Coding_FFS_On_hold'] == "") 
			{
				$Coding_FFS_On_hold_val = "-";
				$Coding_FFS_On_hold_val1 = 0;
			} 
			else 
			{
				$Coding_FFS_On_hold_val = $row['Coding_FFS_On_hold'];
				$Coding_FFS_On_hold_val1 = $row['Coding_FFS_On_hold'];
			}
			
			if($row['Coding_Coding_Queue'] == "") 
			{
				$Coding_Coding_Queue_val = "-";
				$Coding_Coding_Queue_val1 = 0;
			} 
			else 
			{
				$Coding_Coding_Queue_val = $row['Coding_Coding_Queue'];
				$Coding_Coding_Queue_val1 = $row['Coding_Coding_Queue'];
			}
			
			if($row['Coding_Coding_Queue_Days'] == "") 
			{
				$Coding_Coding_Queue_Days_val = "-";
				$Coding_Coding_Queue_Days_val1 = 0;
			} 
			else 
			{
				$Coding_Coding_Queue_Days_val = $row['Coding_Coding_Queue_Days'];
				$Coding_Coding_Queue_Days_val1 = $row['Coding_Coding_Queue_Days'];
			}
			
			if($row['Coding_WS_Coding'] == "") 
			{
				$Coding_WS_Coding_val = "-";
				$Coding_WS_Coding_val1 = 0;
			} 
			else 
			{
				$Coding_WS_Coding_val = $row['Coding_WS_Coding'];
				$Coding_WS_Coding_val1 = $row['Coding_WS_Coding'];
			}
			
			if($row['Coding_FFS_Onhold_Report'] == "") 
			{
				$Coding_FFS_Onhold_Report_val = "-";
				$Coding_FFS_Onhold_Report_val1 = 0;
			} 
			else 
			{
				$Coding_FFS_Onhold_Report_val = $row['Coding_FFS_Onhold_Report'];
				$Coding_FFS_Onhold_Report_val1 = $row['Coding_FFS_Onhold_Report'];
			}
			
			
			$emp[$c]['id'] = $row['os_id'];
			$emp[$c]['when_done'] = $row['when_done'];
			$emp[$c]['dashboards'] = $dashboards;
			
			$emp[$c]['RPQ_print_queue_total'] = $RPQ_print_queue_total_val;
			$emp[$c]['RPQ_num_of_WC'] = $RPQ_num_of_WC_val;
			$emp[$c]['IL_RCM_Ins'] = $IL_RCM_Ins_val;
			$emp[$c]['IL_RCM_WC'] = $IL_RCM_WC_val;
			$emp[$c]['IL_NINS'] = $IL_NINS_val;
			$emp[$c]['IL_NNF'] = $IL_NNF_val;
			$emp[$c]['IL_NWC'] = $IL_NWC_val;
			$emp[$c]['IL_ENL'] = $IL_ENL_val;
			$emp[$c]['RA_WS_Prof'] = $RA_WS_Prof_val;
			$emp[$c]['RA_WS_Prof_Day'] = $RA_WS_Prof_Day_val;
			$emp[$c]['RA_WS_Inst'] = $RA_WS_Inst_val;
			$emp[$c]['RA_WS_Inst_Day'] = $RA_WS_Inst_Day_val;
			$emp[$c]['RA_Attachments'] = $RA_Attachments_val;
			$emp[$c]['WBE_NF_Updates'] = $WBE_NF_Updates_val;
			$emp[$c]['WBE_WC_Updates'] = $WBE_WC_Updates_val;
			$emp[$c]['WBE_OS_Email_Inbox'] = $WBE_OS_Email_Inbox_val;
			$emp[$c]['Coding_FFS_Total'] = $Coding_FFS_Total_val;
			$emp[$c]['Coding_FFS_On_hold'] = $Coding_FFS_On_hold_val;
			$emp[$c]['Coding_Coding_Queue'] = $Coding_Coding_Queue_val;
			$emp[$c]['Coding_Coding_Queue_Days'] = $Coding_Coding_Queue_Days_val;
			$emp[$c]['Coding_WS_Coding'] = $Coding_WS_Coding_val;
			$emp[$c]['Coding_FFS_Onhold_Report'] = $Coding_FFS_Onhold_Report_val;

			$c++;
			
			$RPQ_print_queue_total_sum = $RPQ_print_queue_total_sum + $RPQ_print_queue_total_val1;
			$RPQ_num_of_WC_sum = $RPQ_num_of_WC_sum +  $RPQ_num_of_WC_val1;
			$IL_RCM_Ins_sum = $IL_RCM_Ins_sum +  $IL_RCM_Ins_val1;
			$IL_RCM_WC_sum = $IL_RCM_WC_sum +  $IL_RCM_WC_val1;
			$IL_NINS_sum = $IL_NINS_sum +  $IL_NINS_val1;
			$IL_NNF_sum = $IL_NNF_sum +  $IL_NNF_val1;
			$IL_NWC_sum = $IL_NWC_sum +  $IL_NWC_val1;
			$IL_ENL_sum = $IL_ENL_sum +  $IL_ENL_val1;
			$RA_WS_Prof_sum = $RA_WS_Prof_sum +  $RA_WS_Prof_val1;
			$RA_WS_Prof_Day_sum = $RA_WS_Prof_Day_sum +  $RA_WS_Prof_Day_val1;
			$RA_WS_Inst_sum = $RA_WS_Inst_sum +  $RA_WS_Inst_val1;
			$RA_WS_Inst_Day_sum = $RA_WS_Inst_Day_sum +  $RA_WS_Inst_Day_val1;
			$RA_Attachments_sum = $RA_Attachments_sum +  $RA_Attachments_val1;
			$WBE_NF_Updates_sum = $WBE_NF_Updates_sum +  $WBE_NF_Updates_val1;
			$WBE_WC_Updates_sum = $WBE_WC_Updates_sum +  $WBE_WC_Updates_val1;
			$WBE_OS_Email_Inbox_sum = $WBE_OS_Email_Inbox_sum +  $WBE_OS_Email_Inbox_val1;
			$Coding_FFS_Total_sum = $Coding_FFS_Total_sum +  $Coding_FFS_Total_val1;
			$Coding_FFS_On_hold_sum = $Coding_FFS_On_hold_sum +  $Coding_FFS_On_hold_val1;
			$Coding_Coding_Queue_sum = $Coding_Coding_Queue_sum +  $Coding_Coding_Queue_val1;
			$Coding_Coding_Queue_Days_sum = $Coding_Coding_Queue_Days_sum +  $Coding_Coding_Queue_Days_val1;
			$Coding_WS_Coding_sum = $Coding_WS_Coding_sum +  $Coding_WS_Coding_val1;
			$Coding_FFS_Onhold_Report_sum = $Coding_FFS_Onhold_Report_sum +  $Coding_FFS_Onhold_Report_val1;
			
		}
		$emp[$c]['id'] = '-1';
		$emp[$c]['when_done'] = 'Total';
		$emp[$c]['dashboards'] = $dashboards;
		
		$emp[$c]['RPQ_print_queue_total'] = $RPQ_print_queue_total_sum;
		$emp[$c]['RPQ_num_of_WC'] = $RPQ_num_of_WC_sum;
		$emp[$c]['IL_RCM_Ins'] = $IL_RCM_Ins_sum;
		$emp[$c]['IL_RCM_WC'] = $IL_RCM_WC_sum;
		$emp[$c]['IL_NINS'] = $IL_NINS_sum;
		$emp[$c]['IL_NNF'] = $IL_NNF_sum;
		$emp[$c]['IL_NWC'] = $IL_NWC_sum;
		$emp[$c]['IL_ENL'] = $IL_ENL_sum;
		$emp[$c]['RA_WS_Prof'] = $RA_WS_Prof_sum;
		$emp[$c]['RA_WS_Prof_Day'] = $RA_WS_Prof_Day_sum;
		$emp[$c]['RA_WS_Inst'] = $RA_WS_Inst_sum;
		$emp[$c]['RA_WS_Inst_Day'] = $RA_WS_Inst_Day_sum;
		$emp[$c]['RA_Attachments'] = $RA_Attachments_sum;
		$emp[$c]['WBE_NF_Updates'] = $WBE_NF_Updates_sum;
		$emp[$c]['WBE_WC_Updates'] = $WBE_WC_Updates_sum;
		$emp[$c]['WBE_OS_Email_Inbox'] = $WBE_OS_Email_Inbox_sum;
		$emp[$c]['Coding_FFS_Total'] = $Coding_FFS_Total_sum;
		$emp[$c]['Coding_FFS_On_hold'] = $Coding_FFS_On_hold_sum;
		$emp[$c]['Coding_Coding_Queue'] = $Coding_Coding_Queue_sum;
		$emp[$c]['Coding_Coding_Queue_Days'] = $Coding_Coding_Queue_Days_sum;
		$emp[$c]['Coding_WS_Coding'] = $Coding_WS_Coding_sum;
		$emp[$c]['Coding_FFS_Onhold_Report'] = $Coding_FFS_Onhold_Report_sum;
		
		
		if($c == 0)
		{
			$div = 1;
		}
		else{
			$div = $c;
		}
		
		$RPQ_print_queue_total_avg = $RPQ_print_queue_total_sum / $div;
		$RPQ_num_of_WC_avg = $RPQ_num_of_WC_sum / $div;
		$IL_RCM_Ins_avg = $IL_RCM_Ins_sum / $div;
		$IL_RCM_WC_avg = $IL_RCM_WC_sum / $div;
		$IL_NINS_avg = $IL_NINS_sum / $div;
		$IL_NNF_avg = $IL_NNF_sum / $div;
		$IL_NWC_avg = $IL_NWC_sum / $div;
		$IL_ENL_avg = $IL_ENL_sum / $div;
		$RA_WS_Prof_avg = $RA_WS_Prof_sum / $div;
		$RA_WS_Prof_Day_avg = $RA_WS_Prof_Day_sum / $div;
		$RA_WS_Inst_avg = $RA_WS_Inst_sum / $div;
		$RA_WS_Inst_Day_avg = $RA_WS_Inst_Day_sum / $div;
		$RA_Attachments_avg = $RA_Attachments_sum / $div;
		$WBE_NF_Updates_avg = $WBE_NF_Updates_sum / $div;
		$WBE_WC_Updates_avg = $WBE_WC_Updates_sum / $div;
		$WBE_OS_Email_Inbox_avg = $WBE_OS_Email_Inbox_sum / $div;
		$Coding_FFS_Total_avg = $Coding_FFS_Total_sum / $div;
		$Coding_FFS_On_hold_avg = $Coding_FFS_On_hold_sum / $div;
		$Coding_Coding_Queue_avg = $Coding_Coding_Queue_sum / $div;
		$Coding_Coding_Queue_Days_avg = $Coding_Coding_Queue_Days_sum / $div;
		$Coding_WS_Coding_avg = $Coding_WS_Coding_sum / $div;
		$Coding_FFS_Onhold_Report_avg = $Coding_FFS_Onhold_Report_sum / $div;
		
		$c++;
		
		$emp[$c]['id'] = '-2';
		$emp[$c]['when_done'] = 'Average';
		$emp[$c]['dashboards'] = $dashboards;
		
		$emp[$c]['RPQ_print_queue_total'] = number_format($RPQ_print_queue_total_avg,2,'.','');
		$emp[$c]['RPQ_num_of_WC'] = number_format($RPQ_num_of_WC_avg,2,'.','');
		$emp[$c]['IL_RCM_Ins'] = number_format($IL_RCM_Ins_avg,2,'.','');
		$emp[$c]['IL_RCM_WC'] = number_format($IL_RCM_WC_avg,2,'.','');
		$emp[$c]['IL_NINS'] = number_format($IL_NINS_avg,2,'.','');
		$emp[$c]['IL_NNF'] = number_format($IL_NNF_avg,2,'.','');
		$emp[$c]['IL_NWC'] = number_format($IL_NWC_avg,2,'.','');
		$emp[$c]['IL_ENL'] = number_format($IL_ENL_avg,2,'.','');
		$emp[$c]['RA_WS_Prof'] = number_format($RA_WS_Prof_avg,2,'.','');
		$emp[$c]['RA_WS_Prof_Day'] = number_format($RA_WS_Prof_Day_avg,2,'.','');
		$emp[$c]['RA_WS_Inst'] = number_format($RA_WS_Inst_avg,2,'.','');
		$emp[$c]['RA_WS_Inst_Day'] = number_format($RA_WS_Inst_Day_avg,2,'.','');
		$emp[$c]['RA_Attachments'] = number_format($RA_Attachments_avg,2,'.','');
		$emp[$c]['WBE_NF_Updates'] = number_format($WBE_NF_Updates_avg,2,'.','');
		$emp[$c]['WBE_WC_Updates'] = number_format($WBE_WC_Updates_avg,2,'.','');
		$emp[$c]['WBE_OS_Email_Inbox'] = number_format($WBE_OS_Email_Inbox_avg,2,'.','');
		$emp[$c]['Coding_FFS_Total'] = number_format($Coding_FFS_Total_avg,2,'.','');
		$emp[$c]['Coding_FFS_On_hold'] = number_format($Coding_FFS_On_hold_avg,2,'.','');
		$emp[$c]['Coding_Coding_Queue'] = number_format($Coding_Coding_Queue_avg,2,'.','');
		$emp[$c]['Coding_Coding_Queue_Days'] = number_format($Coding_Coding_Queue_Days_avg,2,'.','');
		$emp[$c]['Coding_WS_Coding'] = number_format($Coding_WS_Coding_avg,2,'.','');
		$emp[$c]['Coding_FFS_Onhold_Report'] = number_format($Coding_FFS_Onhold_Report_avg,2,'.','');
		
		echo json_encode($emp);
	}
}
else if($dashboards == '3')
{
	$support_sp_val = 0;
	$support_enl_val = 0;
	$support_dnu_val = 0;
	$support_nyucp_val = 0;
	$support_nom_val = 0;
	$support_emails_val = 0;
	$support_deposit_pulls_val = 0;
	$support_blank_batch_corres_val = 0;
	$support_correspondence_val = 0;
	$support_acct_audits_val = 0;
	$support_inv_correct_val = 0;
	$support_phone_val = 0;
	$support_inv_addr_val = 0;
	$support_collects_val = 0;
	$suport_medical_records_val = 0;
	$coding_na_val = 0;
	$coding_on_holds_val = 0;
	$coding_coding_queue_val = 0;
	$coding_onsites_val = 0;
	$coding_ooa_val = 0;
	$ar120_val = 0;
	$ar_120percent_val = 0;
	$ar_90_val = 0;
	$ar_voicemails_val = 0;
	$ar_unapplied_val = 0;
	$ar_audit_val = 0;
	$ar_wbs_val = 0;
	
	$support_sp_val1 = 0;
	$support_enl_val1 = 0;
	$support_dnu_val1 = 0;
	$support_nyucp_val1 = 0;
	$support_nom_val1 = 0;
	$support_emails_val1 = 0;
	$support_deposit_pulls_val1 = 0;
	$support_blank_batch_corres_val1 = 0;
	$support_correspondence_val1 = 0;
	$support_acct_audits_val1 = 0;
	$support_inv_correct_val1 = 0;
	$support_phone_val1 = 0;
	$support_inv_addr_val1 = 0;
	$support_collects_val1 = 0;
	$suport_medical_records_val1 = 0;
	$coding_na_val1 = 0;
	$coding_on_holds_val1 = 0;
	$coding_coding_queue_val1 = 0;
	$coding_onsites_val1 = 0;
	$coding_ooa_val1 = 0;
	$ar120_val1 = 0;
	$ar_120percent_val1 = 0;
	$ar_90_val1 = 0;
	$ar_voicemails_val1 = 0;
	$ar_unapplied_val1 = 0;
	$ar_audit_val1 = 0;
	$ar_wbs_val1 = 0;

	$support_sp_sum = 0;
	$support_enl_sum = 0;
	$support_dnu_sum = 0;
	$support_nyucp_sum = 0;
	$support_nom_sum = 0;
	$support_emails_sum = 0;
	$support_deposit_pulls_sum = 0;
	$support_blank_batch_corres_sum = 0;
	$support_correspondence_sum = 0;
	$support_acct_audits_sum = 0;
	$support_inv_correct_sum = 0;
	$support_phone_sum = 0;
	$support_inv_addr_sum = 0;
	$support_collects_sum = 0;
	$suport_medical_records_sum = 0;
	$coding_na_sum = 0;
	$coding_on_holds_sum = 0;
	$coding_coding_queue_sum = 0;
	$coding_onsites_sum = 0;
	$coding_ooa_sum = 0;
	$ar120_sum = 0;
	$ar_120percent_sum = 0;
	$ar_90_sum = 0;
	$ar_voicemails_sum = 0;
	$ar_unapplied_sum = 0;
	$ar_audit_sum = 0;
	$ar_wbs_sum = 0;

	$support_sp_avg = 0;
	$support_enl_avg = 0;
	$support_dnu_avg = 0;
	$support_nyucp_avg = 0;
	$support_nom_avg = 0;
	$support_emails_avg = 0;
	$support_deposit_pulls_avg = 0;
	$support_blank_batch_corres_avg = 0;
	$support_correspondence_avg = 0;
	$support_acct_audits_avg = 0;
	$support_inv_correct_avg = 0;
	$support_phone_avg = 0;
	$support_inv_addr_avg = 0;
	$support_collects_avg = 0;
	$suport_medical_records_avg = 0;
	$coding_na_avg = 0;
	$coding_on_holds_avg = 0;
	$coding_coding_queue_avg = 0;
	$coding_onsites_avg = 0;
	$coding_ooa_avg = 0;
	$ar120_avg = 0;
	$ar_120percent_avg = 0;
	$ar_90_avg = 0;
	$ar_voicemails_avg = 0;
	$ar_unapplied_avg = 0;
	$ar_audit_avg = 0;
	$ar_wbs_avg = 0;
	
	$sql = "select * from om_data where when_done between '$startdate' and '$enddate'";
	if($res = mysqli_query($con, $sql))
	{
		$c = 0;
		while($row = mysqli_fetch_assoc($res))
		{
			if($row['support_sp'] == "") 
			{
				$support_sp_val = "-";
				$support_sp_val1 = 0;
			} 
			else 
			{
				$support_sp_val = $row['support_sp'];
				$support_sp_val1 = $row['support_sp'];
			}
			
			if($row['support_enl'] == "") 
			{
				$support_enl_val = "-";
				$support_enl_val1 = 0;
			} 
			else 
			{
				$support_enl_val = $row['support_enl'];
				$support_enl_val1 = $row['support_enl'];
			}
			
			if($row['support_dnu'] == "") 
			{
				$support_dnu_val = "-";
				$support_dnu_val1 = 0;
			} 
			else 
			{
				$support_dnu_val = $row['support_dnu'];
				$support_dnu_val1 = $row['support_dnu'];
			}
			
			if($row['support_nyucp'] == "") 
			{
				$support_nyucp_val = "-";
				$support_nyucp_val1 = 0;
			} 
			else 
			{
				$support_nyucp_val = $row['support_nyucp'];
				$support_nyucp_val1 = $row['support_nyucp'];
			}
			
			if($row['support_nom'] == "") 
			{
				$support_nom_val = "-";
				$support_nom_val1 = 0;
			} 
			else 
			{
				$support_nom_val = $row['support_nom'];
				$support_nom_val1 = $row['support_nom'];
			}
			if($row['support_emails'] == "") 
			{
				$support_emails_val = "-";
				$support_emails_val1 = 0;
			} 
			else 
			{
				$support_emails_val = $row['support_emails'];
				$support_emails_val1 = $row['support_emails'];
			}
			if($row['support_deposit_pulls'] == "") 
			{
				$support_deposit_pulls_val = "-";
				$support_deposit_pulls_val1 = 0;
			} 
			else 
			{
				$support_deposit_pulls_val = $row['support_deposit_pulls'];
				$support_deposit_pulls_val1 = $row['support_deposit_pulls'];
			}
			if($row['support_blank_batch_corres'] == "") 
			{
				$support_blank_batch_corres_val = "-";
				$support_blank_batch_corres_val1 = 0;
			} 
			else 
			{
				$support_blank_batch_corres_val = $row['support_blank_batch_corres'];
				$support_blank_batch_corres_val1 = $row['support_blank_batch_corres'];
			}
			if($row['support_correspondence'] == "") 
			{
				$support_correspondence_val = "-";
				$support_correspondence_val1 = 0;
			} 
			else 
			{
				$support_correspondence_val = $row['support_correspondence'];
				$support_correspondence_val1 = $row['support_correspondence'];
			}
			if($row['support_acct_audits'] == "") 
			{
				$support_acct_audits_val = "-";
				$support_acct_audits_val1 = 0;
			} 
			else 
			{
				$support_acct_audits_val = $row['support_acct_audits'];
				$support_acct_audits_val1 = $row['support_acct_audits'];
			}
			
			if($row['support_inv_correct'] == "") 
			{
				$support_inv_correct_val = "-";
				$support_inv_correct_val1 = 0;
			} 
			else 
			{
				$support_inv_correct_val = $row['support_inv_correct'];
				$support_inv_correct_val1 = $row['support_inv_correct'];
			}
			if($row['support_phone'] == "") 
			{
				$support_phone_val = "-";
				$support_phone_val1 = 0;
			} 
			else 
			{
				$support_phone_val = $row['support_phone'];
				$support_phone_val1 = $row['support_phone'];
			}
			if($row['support_inv_addr'] == "") 
			{
				$support_inv_addr_val = "-";
				$support_inv_addr_val1 = 0;
			} 
			else 
			{
				$support_inv_addr_val = $row['support_inv_addr'];
				$support_inv_addr_val1 = $row['support_inv_addr'];
			}
			if($row['support_collects'] == "") 
			{
				$support_collects_val = "-";
				$support_collects_val1 = 0;
			} 
			else 
			{
				$support_collects_val = $row['support_collects'];
				$support_collects_val1 = $row['support_collects'];
			}
			if($row['suport_medical_records'] == "") 
			{
				$suport_medical_records_val = "-";
				$suport_medical_records_val1 = 0;
			} 
			else 
			{
				$suport_medical_records_val = $row['suport_medical_records'];
				$suport_medical_records_val1 = $row['suport_medical_records'];
			}
			if($row['coding_na'] == "") 
			{
				$coding_na_val = "-";
				$coding_na_val1 = 0;
			} 
			else 
			{
				$coding_na_val = $row['coding_na'];
				$coding_na_val1 = $row['coding_na'];
			}
			if($row['coding_on_holds'] == "") 
			{
				$coding_on_holds_val = "-";
				$coding_on_holds_val1 = 0;
			} 
			else 
			{
				$coding_on_holds_val = $row['coding_on_holds'];
				$coding_on_holds_val1 = $row['coding_on_holds'];
			}
			if($row['coding_coding_queue'] == "") 
			{
				$coding_coding_queue_val = "-";
				$coding_coding_queue_val1 = 0;
			} 
			else 
			{
				$coding_coding_queue_val = $row['coding_coding_queue'];
				$coding_coding_queue_val1 = $row['coding_coding_queue'];
			}
			if($row['coding_onsites'] == "") 
			{
				$coding_onsites_val = "-";
				$coding_onsites_val1 = 0;
			} 
			else 
			{
				$coding_onsites_val = $row['coding_onsites'];
				$coding_onsites_val1 = $row['coding_onsites'];
			}
			if($row['coding_ooa'] == "") 
			{
				$coding_ooa_val = "-";
				$coding_ooa_val1 = 0;
			} 
			else 
			{
				$coding_ooa_val = $row['coding_ooa'];
				$coding_ooa_val1 = $row['coding_ooa'];
			}
			if($row['ar120'] == "") 
			{
				$ar120_val = "-";
				$ar120_val1 = 0;
			} 
			else 
			{
				$ar120_val = $row['ar120'];
				$ar120_val1 = $row['ar120'];
			}
			if($row['ar_120percent'] == "") 
			{
				$ar_120percent_val = "-";
				$ar_120percent_val1 = 0;
			} 
			else 
			{
				$ar_120percent_val = $row['ar_120percent'];
				$ar_120percent_val1 = $row['ar_120percent'];
			}
			if($row['ar_90'] == "") 
			{
				$ar_90_val = "-";
				$ar_90_val1 = 0;
			} 
			else 
			{
				$ar_90_val = $row['ar_90'];
				$ar_90_val1 = $row['ar_90'];
			}
			if($row['ar_voicemails'] == "") 
			{
				$ar_voicemails_val = "-";
				$ar_voicemails_val1 = 0;
			} 
			else 
			{
				$ar_voicemails_val = $row['ar_voicemails'];
				$ar_voicemails_val1 = $row['ar_voicemails'];
			}
			if($row['ar_unapplied'] == "") 
			{
				$ar_unapplied_val = "-";
				$ar_unapplied_val1 = 0;
			} 
			else 
			{
				$ar_unapplied_val = $row['ar_unapplied'];
				$ar_unapplied_val1 = $row['ar_unapplied'];
			}
			if($row['ar_audit'] == "") 
			{
				$ar_audit_val = "-";
				$ar_audit_val1 = 0;
			} 
			else 
			{
				$ar_audit_val = $row['ar_audit'];
				$ar_audit_val1 = $row['ar_audit'];
			}
			if($row['ar_wbs'] == "") 
			{
				$ar_wbs_val = "-";
				$ar_wbs_val1 = 0;
			} 
			else 
			{
				$ar_wbs_val = $row['ar_wbs'];
				$ar_wbs_val1 = $row['ar_wbs'];
			}
			
			
			$emp[$c]['id'] = $row['om_id'];
			$emp[$c]['when_done'] = $row['when_done'];
			$emp[$c]['dashboards'] = $dashboards;
			
			$emp[$c]['support_sp'] = $support_sp_val;
			$emp[$c]['support_enl'] = $support_enl_val;
			$emp[$c]['support_dnu'] = $support_dnu_val;
			$emp[$c]['support_nyucp'] = $support_nyucp_val;
			$emp[$c]['support_nom'] = $support_nom_val;
			$emp[$c]['support_emails'] = $support_emails_val;
			$emp[$c]['support_deposit_pulls'] = $support_deposit_pulls_val;
			$emp[$c]['support_blank_batch_corres'] = $support_blank_batch_corres_val;
			$emp[$c]['support_correspondence'] = $support_correspondence_val;
			$emp[$c]['support_acct_audits'] = $support_acct_audits_val;
			$emp[$c]['support_inv_correct'] = $support_inv_correct_val;
			$emp[$c]['support_phone'] = $support_phone_val;
			$emp[$c]['support_inv_addr'] = $support_inv_addr_val;
			$emp[$c]['support_collects'] = $support_collects_val;
			$emp[$c]['suport_medical_records'] = $suport_medical_records_val;
			
			$emp[$c]['coding_na'] = $coding_na_val;
			$emp[$c]['coding_on_holds'] = $coding_on_holds_val;
			$emp[$c]['coding_coding_queue'] = $coding_coding_queue_val;
			$emp[$c]['coding_onsites'] = $coding_onsites_val;
			$emp[$c]['coding_ooa'] = $coding_ooa_val;
			
			$emp[$c]['ar120'] = $ar120_val;
			$emp[$c]['ar_120percent'] = $ar_120percent_val;
			$emp[$c]['ar_90'] = $ar_90_val;
			$emp[$c]['ar_voicemails'] = $ar_voicemails_val;
			$emp[$c]['ar_unapplied'] = $ar_unapplied_val;
			$emp[$c]['ar_audit'] = $ar_audit_val;
			$emp[$c]['ar_wbs'] = $ar_wbs_val;

			$c++;
			
			$support_sp_sum = $support_sp_sum + $support_sp_val1;
			$support_enl_sum = $support_enl_sum +  $support_enl_val1;
			$support_dnu_sum = $support_dnu_sum + $support_dnu_val1;
			$support_nyucp_sum = $support_nyucp_sum + $support_nyucp_val1;
			$support_nom_sum = $support_nom_sum + $support_nom_val1;
			$support_emails_sum = $support_emails_sum + $support_emails_val1;
			$support_deposit_pulls_sum = $support_deposit_pulls_sum + $support_deposit_pulls_val1;
			$support_blank_batch_corres_sum = $support_blank_batch_corres_sum + $support_blank_batch_corres_val1;
			$support_correspondence_sum = $support_correspondence_sum + $support_correspondence_val1;
			$support_acct_audits_sum = $support_acct_audits_sum + $support_acct_audits_val1;
			$support_inv_correct_sum = $support_inv_correct_sum + $support_inv_correct_val1;
			$support_phone_sum = $support_phone_sum +  $support_phone_val1;
			$support_inv_addr_sum = $support_inv_addr_sum + $support_inv_addr_val1;
			$support_collects_sum = $support_collects_sum + $support_collects_val1;
			$suport_medical_records_sum = $suport_medical_records_sum + $suport_medical_records_val1;
			
			$coding_na_sum = $coding_na_sum + $coding_na_val1;
			$coding_on_holds_sum = $coding_on_holds_sum + $coding_on_holds_val1;
			$coding_coding_queue_sum = $coding_coding_queue_sum + $coding_coding_queue_val1;
			$coding_onsites_sum = $coding_onsites_sum + $coding_onsites_val1;
			$coding_ooa_sum = $coding_ooa_sum + $coding_ooa_val1;
			
			$ar120_sum = $ar120_sum + $ar120_val1;
			$ar_120percent_sum = $ar_120percent_sum +  $ar_120percent_val1;
			$ar_90_sum = $ar_90_sum + $ar_90_val1;
			$ar_voicemails_sum = $ar_voicemails_sum + $ar_voicemails_val1;
			$ar_unapplied_sum = $ar_unapplied_sum + $ar_unapplied_val1;
			$ar_audit_sum = $ar_audit_sum + $ar_audit_val1;
			$ar_wbs_sum = $ar_wbs_sum + $ar_wbs_val1;
			
		}
		$emp[$c]['id'] = '-1';
		$emp[$c]['when_done'] = 'Total';
		$emp[$c]['dashboards'] = $dashboards;
		
		$emp[$c]['support_sp'] = $support_sp_sum;
		$emp[$c]['support_enl'] = $support_enl_sum;
		$emp[$c]['support_dnu'] = $support_dnu_sum;
		$emp[$c]['support_nyucp'] = $support_nyucp_sum;
		$emp[$c]['support_nom'] = $support_nom_sum;
		$emp[$c]['support_emails'] = $support_emails_sum;
		$emp[$c]['support_deposit_pulls'] = $support_deposit_pulls_sum;
		$emp[$c]['support_blank_batch_corres'] = $support_blank_batch_corres_sum;
		$emp[$c]['support_correspondence'] = $support_correspondence_sum;
		$emp[$c]['support_acct_audits'] = $support_acct_audits_sum;
		$emp[$c]['support_inv_correct'] = $support_inv_correct_sum;
		$emp[$c]['support_phone'] = $support_phone_sum;
		$emp[$c]['support_inv_addr'] = $support_inv_addr_sum;
		$emp[$c]['support_collects'] = $support_collects_sum;
		$emp[$c]['suport_medical_records'] = $suport_medical_records_sum;
		
		$emp[$c]['coding_na'] = $coding_na_sum;
		$emp[$c]['coding_on_holds'] = $coding_on_holds_sum;
		$emp[$c]['coding_coding_queue'] = $coding_coding_queue_sum;
		$emp[$c]['coding_onsites'] = $coding_onsites_sum;
		$emp[$c]['coding_ooa'] = $coding_ooa_sum;
		
		$emp[$c]['ar120'] = $ar120_sum;
		$emp[$c]['ar_120percent'] = $ar_120percent_sum;
		$emp[$c]['ar_90'] = $ar_90_sum;
		$emp[$c]['ar_voicemails'] = $ar_voicemails_sum;
		$emp[$c]['ar_unapplied'] = $ar_unapplied_sum;
		$emp[$c]['ar_audit'] = $ar_audit_sum;
		$emp[$c]['ar_wbs'] = $ar_wbs_sum;
		
		
		if($c == 0)
		{
			$div = 1;
		}
		else{
			$div = $c;
		}
		
		$support_sp_avg = $support_sp_sum / $div;
		$support_enl_avg = $support_enl_sum / $div;
		$support_dnu_avg = $support_dnu_sum / $div;
		$support_nyucp_avg = $support_nyucp_sum / $div;
		$support_nom_avg = $support_nom_sum / $div;
		$support_emails_avg = $support_emails_sum / $div;
		$support_deposit_pulls_avg = $support_deposit_pulls_sum / $div;
		$support_blank_batch_corres_avg = $support_blank_batch_corres_sum / $div;
		$support_correspondence_avg = $support_correspondence_sum / $div;
		$support_acct_audits_avg = $support_acct_audits_sum / $div;
		$support_inv_correct_avg = $support_inv_correct_sum / $div;
		$support_phone_avg = $support_phone_sum / $div;
		
		$support_inv_addr_avg = $support_inv_addr_sum / $div;
		$support_collects_avg = $support_collects_sum / $div;
		$suport_medical_records_avg = $suport_medical_records_sum / $div;
		$coding_na_avg = $coding_na_avg / $div;
		$coding_on_holds_avg = $coding_on_holds_sum / $div;
		$coding_coding_queue_avg = $coding_coding_queue_sum / $div;
		$coding_onsites_avg = $coding_onsites_sum / $div;
		$coding_ooa_avg = $coding_ooa_sum / $div;
		
		$ar120_avg = $ar120_sum / $div;
		$ar_120percent_avg = $ar_120percent_sum / $div;
		$ar_90_avg = $ar_90_sum / $div;
		$ar_voicemails_avg = $ar_voicemails_sum / $div;
		$ar_unapplied_avg = $ar_unapplied_sum / $div;
		$ar_audit_avg = $ar_audit_sum / $div;
		$ar_wbs_avg = $ar_wbs_sum / $div;
		
		$c++;
		
		$emp[$c]['id'] = '-2';
		$emp[$c]['when_done'] = 'Average';
		$emp[$c]['dashboards'] = $dashboards;
		
		$emp[$c]['support_sp'] = number_format($support_sp_avg,2,'.','');
		$emp[$c]['support_enl'] = number_format($support_enl_avg,2,'.','');
		$emp[$c]['support_dnu'] = number_format($support_dnu_avg,2,'.','');
		$emp[$c]['support_nyucp'] = number_format($support_nyucp_avg,2,'.','');
		$emp[$c]['support_nom'] = number_format($support_nom_avg,2,'.','');
		$emp[$c]['support_emails'] = number_format($support_emails_avg,2,'.','');
		$emp[$c]['support_deposit_pulls'] = number_format($support_deposit_pulls_avg,2,'.','');
		$emp[$c]['support_blank_batch_corres'] = number_format($support_blank_batch_corres_avg,2,'.','');
		$emp[$c]['support_correspondence'] = number_format($support_correspondence_avg,2,'.','');
		$emp[$c]['support_acct_audits'] = number_format($support_acct_audits_avg,2,'.','');
		
		$emp[$c]['support_inv_correct'] = number_format($support_inv_correct_avg,2,'.','');
		$emp[$c]['support_phone'] = number_format($support_phone_avg,2,'.','');
		$emp[$c]['support_inv_addr'] = number_format($support_inv_addr_avg,2,'.','');
		$emp[$c]['support_collects'] = number_format($support_collects_avg,2,'.','');
		$emp[$c]['suport_medical_records'] = number_format($suport_medical_records_avg,2,'.','');
		$emp[$c]['coding_na'] = number_format($coding_na_avg,2,'.','');
		$emp[$c]['coding_on_holds'] = number_format($coding_on_holds_avg,2,'.','');
		$emp[$c]['coding_coding_queue'] = number_format($coding_coding_queue_avg,2,'.','');
		$emp[$c]['coding_onsites'] = number_format($coding_onsites_avg,2,'.','');
		$emp[$c]['coding_ooa'] = number_format($coding_ooa_avg,2,'.','');
		
		$emp[$c]['ar120'] = number_format($ar120_avg,2,'.','');
		$emp[$c]['ar_120percent'] = number_format($ar_120percent_avg,2,'.','');
		$emp[$c]['ar_90'] = number_format($ar_90_avg,2,'.','');
		$emp[$c]['ar_voicemails'] = number_format($ar_voicemails_avg,2,'.','');
		$emp[$c]['ar_unapplied'] = number_format($ar_unapplied_avg,2,'.','');
		$emp[$c]['ar_audit'] = number_format($ar_audit_avg,2,'.','');
		$emp[$c]['ar_wbs'] = number_format($ar_wbs_avg,2,'.','');
		
		echo json_encode($emp);
	}
}
else
{
	http_response_code(404);
}


?>