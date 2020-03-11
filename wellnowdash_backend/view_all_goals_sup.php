<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

$emp = [];
$userid = $_GET['user_id'];
$sql1 = "select * from users where user_id = '$userid'";

$result1 = mysqli_query($con,$sql1);
$row1 = mysqli_fetch_array($result1);

$dashboard = $row1['dashboards'];


if($dashboard == 1 or $dashboard == '1')
{
	$sql2 = "select * from ar_goals";
	if($res2 = mysqli_query($con, $sql2))
	{
		$c = 0;
		while($row2 = mysqli_fetch_assoc($res2))
		{
			$emp[$c]['id'] = $row2['ar_goal_id'];
			$emp[$c]['date'] = $row2['when_done']."-".$row2["when_done_year"];
			$emp[$c]['dashboards'] = $dashboard;
			$emp[$c]['userid'] = $userid;
			$emp[$c]['wb_tech_other'] = $row2['wb_tech_other'];
			$emp[$c]['wb_demo_elig'] = $row2['wb_demo_elig'];
			$emp[$c]['wb_timely_filing'] = $row2['wb_timely_filing'];
			$emp[$c]['wb_coding_replies'] = $row2['wb_coding_replies'];
			$emp[$c]['wb_sup_reviews'] = $row2['wb_sup_reviews'];
			$emp[$c]['wb_nf_corres'] = $row2['wb_nf_corres'];
			$emp[$c]['wb_wc_corres'] = $row2['wb_wc_corres'];
			$emp[$c]['waystar_medc_sec'] = $row2['waystar_medc_sec'];
			$emp[$c]['waystar_oob'] = $row2['waystar_oob'];
			$emp[$c]['waystar_fidelis_tf'] = $row2['waystar_fidelis_tf'];
			
			$c++;
		}
		
		if(empty($emp[$c]['id']) == True)
		{
			echo json_encode($emp);
		}
		else
		{
			$emp[$c]['id'] = 0;
			$emp[$c]['when_done'] = "-";
			$emp[$c]['dashboards'] = "-";
			$emp[$c]['userid'] = $userid;
			$emp[$c]['wb_tech_other'] = "-";
			$emp[$c]['wb_demo_elig'] = "-";
			$emp[$c]['wb_timely_filing'] = "-";
			$emp[$c]['wb_coding_replies'] = "-";
			$emp[$c]['wb_sup_reviews'] = "-";
			$emp[$c]['wb_nf_corres'] = "-";
			$emp[$c]['wb_wc_corres'] = "-";
			$emp[$c]['waystar_medc_sec'] = "-";
			$emp[$c]['waystar_oob'] = "-";
			$emp[$c]['waystar_fidelis_tf'] = "-";
			
			echo json_encode($emp);
		}
	}
	
}
else if($dashboard == 2 or $dashboard == '2')
{
	$sql2 = "select * from os_goals";
	if($res2 = mysqli_query($con, $sql2))
	{
		$c = 0;
		while($row2 = mysqli_fetch_assoc($res2))
		{
			$emp[$c]['id'] = $row2['os_goal_id'];
			$emp[$c]['date'] = $row2['when_done']."-".$row2["when_done_year"];
			$emp[$c]['dashboards'] = $dashboard;
			$emp[$c]['userid'] = $userid;
			
		
			$emp[$c]['RPQ_print_queue_total'] = $row2['RPQ_print_queue_total'];
			$emp[$c]['RPQ_num_of_WC'] = $row2['RPQ_num_of_WC'];
			$emp[$c]['IL_RCM_Ins'] = $row2['IL_RCM_Ins'];
			$emp[$c]['IL_RCM_WC'] = $row2['IL_RCM_WC'];
			$emp[$c]['IL_NINS'] = $row2['IL_NINS'];
			$emp[$c]['IL_NNF'] = $row2['IL_NNF'];
			$emp[$c]['IL_NWC'] = $row2['IL_NWC'];
			$emp[$c]['IL_ENL'] = $row2['IL_ENL'];
			$emp[$c]['RA_WS_Prof'] = $row2['RA_WS_Prof'];
			$emp[$c]['RA_WS_Prof_Day'] = $row2['RA_WS_Prof_Day'];
			$emp[$c]['RA_WS_Inst'] = $row2['RA_WS_Inst'];
			$emp[$c]['RA_WS_Inst_Day'] = $row2['RA_WS_Inst_Day'];
			$emp[$c]['RA_Attachments'] = $row2['RA_Attachments'];
			$emp[$c]['WBE_NF_Updates'] = $row2['WBE_NF_Updates'];
			$emp[$c]['WBE_WC_Updates'] = $row2['WBE_WC_Updates'];
			$emp[$c]['WBE_OS_Email_Inbox'] = $row2['WBE_OS_Email_Inbox'];
			$emp[$c]['Coding_FFS_Total'] = $row2['Coding_FFS_Total'];
			$emp[$c]['Coding_FFS_On_hold'] = $row2['Coding_FFS_On_hold'];
			$emp[$c]['Coding_Coding_Queue'] = $row2['Coding_Coding_Queue'];
			$emp[$c]['Coding_Coding_Queue_Days'] = $row2['Coding_Coding_Queue_Days'];
			$emp[$c]['Coding_WS_Coding'] = $row2['Coding_WS_Coding'];
			$emp[$c]['Coding_FFS_Onhold_Report'] = $row2['Coding_FFS_Onhold_Report'];
			
			$c++;
		}
		
		if(empty($emp[$c]['id']) == True)
		{
			echo json_encode($emp);
			
		}
		else
		{
			$emp[$c]['id'] = 0;
			$emp[$c]['date'] = "-";
			$emp[$c]['dashboards'] = "-";
			$emp[$c]['userid'] = $userid;
			
			$emp[$c]['RPQ_print_queue_total'] = "-";
			$emp[$c]['RPQ_num_of_WC'] = "-";
			$emp[$c]['IL_RCM_Ins'] = "-";
			$emp[$c]['IL_RCM_WC'] = "-";
			$emp[$c]['IL_NINS'] = "-";
			$emp[$c]['IL_NNF'] = "-";
			$emp[$c]['IL_NWC'] = "-";
			$emp[$c]['IL_ENL'] = "-";
			$emp[$c]['RA_WS_Prof'] = "-";
			$emp[$c]['RA_WS_Prof_Day'] = "-";
			$emp[$c]['RA_WS_Inst'] = "-";
			$emp[$c]['RA_WS_Inst_Day'] = "-";
			$emp[$c]['RA_Attachments'] = "-";
			$emp[$c]['WBE_NF_Updates'] = "-";
			$emp[$c]['WBE_WC_Updates'] = "-";
			$emp[$c]['WBE_OS_Email_Inbox'] = "-";
			$emp[$c]['Coding_FFS_Total'] = "-";
			$emp[$c]['Coding_FFS_On_hold'] = "-";
			$emp[$c]['Coding_Coding_Queue'] = "-";
			$emp[$c]['Coding_Coding_Queue_Days'] = "-";
			$emp[$c]['Coding_WS_Coding'] = "-";
			$emp[$c]['Coding_FFS_Onhold_Report'] = "-";
			
			echo json_encode($emp);
		}
	}
	
}
else if($dashboard == 3 or $dashboard == '3')
{
	$sql2 = "select * from om_goals";
	if($res2 = mysqli_query($con, $sql2))
	{
		$c = 0;
		while($row2 = mysqli_fetch_assoc($res2))
		{
			$emp[$c]['id'] = $row2['om_id'];
			$emp[$c]['date'] = $row2['when_done']."-".$row2["when_done_year"];
			$emp[$c]['dashboards'] = $dashboard;
			$emp[$c]['userid'] = $userid;
			
		
			$emp[$c]['support_sp'] = $row2['support_sp'];
			$emp[$c]['support_enl'] = $row2['support_enl'];
			$emp[$c]['support_dnu'] = $row2['support_dnu'];
			$emp[$c]['support_nyucp'] = $row2['support_nyucp'];
			$emp[$c]['support_nom'] = $row2['support_nom'];
			$emp[$c]['support_emails'] = $row2['support_emails'];
			$emp[$c]['support_deposit_pulls'] = $row2['support_deposit_pulls'];
			$emp[$c]['support_blank_batch_corres'] = $row2['support_blank_batch_corres'];
			$emp[$c]['support_correspondence'] = $row2['support_correspondence'];
			$emp[$c]['support_acct_audits'] = $row2['support_acct_audits'];
			$emp[$c]['support_inv_correct'] = $row2['support_inv_correct'];
			$emp[$c]['support_phone'] = $row2['support_phone'];
			$emp[$c]['support_inv_addr'] = $row2['support_inv_addr'];
			$emp[$c]['support_collects'] = $row2['support_collects'];
			$emp[$c]['suport_medical_records'] = $row2['suport_medical_records'];
			
			$emp[$c]['coding_na'] = $row2['coding_na'];
			$emp[$c]['coding_on_holds'] = $row2['coding_on_holds'];
			$emp[$c]['coding_coding_queue'] = $row2['coding_coding_queue'];
			$emp[$c]['coding_onsites'] = $row2['coding_onsites'];
			$emp[$c]['coding_ooa'] = $row2['coding_ooa'];
			
			$emp[$c]['ar120'] = $row2['ar120'];
			$emp[$c]['ar_120percent'] = $row2['ar_120percent'];
			$emp[$c]['ar_90'] = $row2['ar_90'];
			$emp[$c]['ar_voicemails'] = $row2['ar_voicemails'];
			$emp[$c]['ar_unapplied'] = $row2['ar_unapplied'];
			$emp[$c]['ar_audit'] = $row2['ar_audit'];
			$emp[$c]['ar_wbs'] = $row2['ar_wbs'];
			
			$c++;
		}
		
		if(empty($emp[$c]['id']) == True)
		{
			echo json_encode($emp);
			
		}
		else
		{
			$emp[$c]['id'] = 0;
			$emp[$c]['date'] = "-";
			$emp[$c]['dashboards'] = "-";
			$emp[$c]['userid'] = $userid;
			
			$emp[$c]['support_sp'] = "-";
			$emp[$c]['support_enl'] = "-";
			$emp[$c]['support_dnu'] = "-";
			$emp[$c]['support_nyucp'] = "-";
			$emp[$c]['support_nom'] = "-";
			$emp[$c]['support_emails'] = "-";
			$emp[$c]['support_deposit_pulls'] = "-";
			$emp[$c]['support_blank_batch_corres'] = "-";
			$emp[$c]['support_correspondence'] = "-";
			$emp[$c]['support_acct_audits'] = "-";
			$emp[$c]['support_inv_correct'] = "-";
			$emp[$c]['support_phone'] = "-";
			$emp[$c]['support_inv_addr'] = "-";
			$emp[$c]['support_collects'] = "-";
			$emp[$c]['suport_medical_records'] = "-";
			
			$emp[$c]['coding_na'] = "-";
			$emp[$c]['coding_on_holds'] = "-";
			$emp[$c]['coding_coding_queue'] = "-";
			$emp[$c]['coding_onsites'] = "-";
			$emp[$c]['coding_ooa'] = "-";
			
			$emp[$c]['ar120'] = "-";
			$emp[$c]['ar_120percent'] = "-";
			$emp[$c]['ar_90'] = "-";
			$emp[$c]['ar_voicemails'] = "-";
			$emp[$c]['ar_unapplied'] = "-";
			$emp[$c]['ar_audit'] = "-";
			$emp[$c]['ar_wbs'] = "-";
			
			echo json_encode($emp);
		}
	}
	
}
else if($dashboard == 4 or $dashboard == '4')
{
	$sql2 = "select * from pat_sup_goals";
	if($res2 = mysqli_query($con, $sql2))
	{
		$c = 0;
		while($row2 = mysqli_fetch_assoc($res2))
		{
			$emp[$c]['id'] = $row2['pat_sup_goal_id'];
			$emp[$c]['date'] = $row2['when_done']."-".$row2["when_done_year"];
			$emp[$c]['dashboards'] = $dashboard;
			$emp[$c]['userid'] = $userid;
			
			$emp[$c]['saf_mvp_sod'] = $row2['saf_mvp_sod'];
			$emp[$c]['saf_inval_addr_sod'] = $row2['saf_inval_addr_sod'];
			$emp[$c]['ash_attachments_sod'] = $row2['ash_attachments_sod'];
			$emp[$c]['ash_wc_mailing_sod'] = $row2['ash_wc_mailing_sod'];
			$emp[$c]['ash_wc_deleted_sod'] = $row2['ash_wc_deleted_sod'];
			$emp[$c]['ash_acc_type_sod'] = $row2['ash_acc_type_sod'];
			$emp[$c]['ash_last_addr_sod'] = $row2['ash_last_addr_sod'];
			$emp[$c]['bailey_indep_health_sod'] = $row2['bailey_indep_health_sod'];
			$emp[$c]['bailey_bcbs_sod'] = $row2['bailey_bcbs_sod'];
			$emp[$c]['bailey_emails_sod'] = $row2['bailey_emails_sod'];
			$emp[$c]['justin_ndc_num_sod'] = $row2['justin_ndc_num_sod'];
			$emp[$c]['justin_medicare_loc_sod'] = $row2['justin_medicare_loc_sod'];
			$emp[$c]['justin_medicare_sec_sod'] = $row2['justin_medicare_sec_sod'];
			
			$c++;
		}
		
		if(empty($emp[$c]['id']) == True)
		{
			echo json_encode($emp);
		}
		else
		{
			$emp[$c]['id'] = 0;
			$emp[$c]['when_done'] = "-";
			$emp[$c]['dashboards'] = "-";
			$emp[$c]['userid'] = $userid;
			
			$emp[$c]['saf_mvp_sod'] = "-";
			$emp[$c]['saf_inval_addr_sod'] = "-";
			$emp[$c]['ash_attachments_sod'] = "-";
			$emp[$c]['ash_wc_mailing_sod'] = "-";
			$emp[$c]['ash_wc_deleted_sod'] = "-";
			$emp[$c]['ash_acc_type_sod'] = "-";
			$emp[$c]['ash_last_addr_sod'] = "-";
			$emp[$c]['bailey_indep_health_sod'] = "-";
			$emp[$c]['bailey_bcbs_sod'] = "-";
			$emp[$c]['bailey_emails_sod'] = "-";
			$emp[$c]['justin_ndc_num_sod'] = "-";
			$emp[$c]['justin_medicare_loc_sod'] = "-";
			$emp[$c]['justin_medicare_sec_sod'] = "-";
			
			echo json_encode($emp);
		}
	}
	
}
else
{
	http_response_code(404);
}

?>