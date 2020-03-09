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

$sql1 = "select * from users where user_id = '$user_id'";
$res1 = mysqli_query($con, $sql1);
$row1 = mysqli_fetch_assoc($res1);
$dashboards = $row1['dashboards'];
$sup_id = $user_id;

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
			$emp[$c]['supervisor_id'] = $sup_id;
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
		
		if(empty($emp[$c]['id']) == False)
		{
			echo json_encode($emp);
		}
		else
		{
			$emp[$c]['id'] = 0;
			$emp[$c]['when_done'] = $startdate.' to '.$enddate;
			$emp[$c]['dashboards'] = $dashboards;
			$emp[$c]['supervisor_id'] = $sup_id;
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
else if($dashboards == '2' or $dashboards == 2)
{
	
	$sql = "select * from os_data where when_done between '$startdate' and '$enddate'";
	if($res = mysqli_query($con, $sql))
	{
		
		$c = 0;
		while($row = mysqli_fetch_assoc($res))
		{
			$emp[$c]['id'] = $row['os_id'];
			$emp[$c]['when_done'] = $row['when_done'];
			$emp[$c]['dashboards'] = $dashboards;
			$emp[$c]['supervisor_id'] = $sup_id;
			
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
		
		if(empty($emp[$c]['id']) == False)
		{
			echo json_encode($emp);
		}
		else
		{
			$emp[$c]['id'] = 0;
			$emp[$c]['when_done'] = $startdate.' to '.$enddate;
			$emp[$c]['dashboards'] = $dashboards;
			$emp[$c]['supervisor_id'] = $sup_id;
			
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
else if($dashboards == '3')
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
			$emp[$c]['supervisor_id'] = $sup_id;
			
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
		
		if(empty($emp[$c]['id']) == False)
		{
			echo json_encode($emp);
		}
		else
		{
			$emp[$c]['id'] = 0;
			$emp[$c]['when_done'] = $startdate.' to '.$enddate;
			$emp[$c]['dashboards'] = $dashboards;
			$emp[$c]['supervisor_id'] = $sup_id;
			
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
/*else if($dashboards == '2')
{
	$sql = "select * from os_data where when_done between '$startdate' and '$enddate'";
}
else if($dashboards == '4')
{
	$sql = "select * from pat_support_data where when_done between '$startdate' and '$enddate'";
}
*/

else
{
	http_response_code(404);
}


?>