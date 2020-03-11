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

$today = $_GET['olddate'];

if($dashboard == 1)
{
	$sql2 = "select * from ar_access where user_id = '$userid'";
	$result2 = mysqli_query($con,$sql2);
	$row2 = mysqli_fetch_array($result2);
	
	$sql3 = "select * from ar_data where when_done = '$today'";
	$result3 = mysqli_query($con,$sql3);
	$row3 = mysqli_fetch_array($result3);
	$count = mysqli_num_rows($result3);
	$emp['when_done'] = $today;
	
	$emp['userid'] = $userid;
	$emp['dashboard'] = $dashboard;
	$emp['date'] = $today;
	$emp['wb_tech_other'] = $row2['wb_tech_other'];
	$emp['wb_demo_elig'] = $row2['wb_demo_elig'];
	$emp['wb_timely_filing'] = $row2['wb_timely_filing'];
	$emp['wb_coding_replies'] = $row2['wb_coding_replies'];
	$emp['wb_sup_reviews'] = $row2['wb_sup_reviews'];
	$emp['wb_nf_corres'] = $row2['wb_nf_corres'];
	$emp['wb_wc_corres'] = $row2['wb_wc_corres'];
	$emp['waystar_medc_sec'] = $row2['waystar_medc_sec'];
	$emp['waystar_oob'] = $row2['waystar_oob'];
	$emp['waystar_fidelis_tf'] = $row2['waystar_fidelis_tf'];
	
	if($count > 0)
	{
		$emp['wb_tech_other_PH'] = $row3['wb_tech_other'];
		$emp['wb_demo_elig_PH'] = $row3['wb_demo_elig'];
		$emp['wb_timely_filing_PH'] = $row3['wb_timely_filing'];
		$emp['wb_coding_replies_PH'] = $row3['wb_coding_replies'];
		$emp['wb_sup_reviews_PH'] = $row3['wb_sup_reviews'];
		$emp['wb_nf_corres_PH'] = $row3['wb_nf_corres'];
		$emp['wb_wc_corres_PH'] = $row3['wb_wc_corres'];
		$emp['waystar_medc_sec_PH'] = $row3['waystar_medc_sec'];
		$emp['waystar_oob_PH'] = $row3['waystar_oob'];
		$emp['waystar_fidelis_tf_PH'] = $row3['waystar_fidelis_tf'];
	}
	else{
		$emp['wb_tech_other_PH'] = NULL;
		$emp['wb_demo_elig_PH'] = NULL;
		$emp['wb_timely_filing_PH'] = NULL;
		$emp['wb_coding_replies_PH'] = NULL;
		$emp['wb_sup_reviews_PH'] = NULL;
		$emp['wb_nf_corres_PH'] = NULL;
		$emp['wb_wc_corres_PH'] = NULL;
		$emp['waystar_medc_sec_PH'] = NULL;
		$emp['waystar_oob_PH'] = NULL;
		$emp['waystar_fidelis_tf_PH'] = NULL;
	}
	
	echo json_encode($emp);
}
else if($dashboard == 2)
{
	$sql2 = "select * from os_access where user_id = '$userid'";
	$result2 = mysqli_query($con,$sql2);
	$row2 = mysqli_fetch_array($result2);
	
	$sql3 = "select * from os_data where when_done = '$today'";
	$result3 = mysqli_query($con,$sql3);
	$row3 = mysqli_fetch_array($result3);
	$count = mysqli_num_rows($result3);
	
	
	$emp['when_done'] = $today;
	
	$emp['userid'] = $userid;
	$emp['dashboard'] = $dashboard;
	$emp['date'] = $today;
	
	$emp['RPQ_print_queue_total'] = $row2['RPQ_print_queue_total'];
	$emp['RPQ_num_of_WC'] = $row2['RPQ_num_of_WC'];
	$emp['IL_RCM_Ins'] = $row2['IL_RCM_Ins'];
	$emp['IL_RCM_WC'] = $row2['IL_RCM_WC'];
	$emp['IL_NINS'] = $row2['IL_NINS'];
	$emp['IL_NNF'] = $row2['IL_NNF'];
	$emp['IL_NWC'] = $row2['IL_NWC'];
	$emp['IL_ENL'] = $row2['IL_ENL'];
	$emp['RA_WS_Prof'] = $row2['RA_WS_Prof'];
	$emp['RA_WS_Prof_Day'] = $row2['RA_WS_Prof_Day'];
	$emp['RA_WS_Inst'] = $row2['RA_WS_Inst'];
	$emp['RA_WS_Inst_Day'] = $row2['RA_WS_Inst_Day'];
	$emp['RA_Attachments'] = $row2['RA_Attachments'];
	$emp['WBE_NF_Updates'] = $row2['WBE_NF_Updates'];
	$emp['WBE_WC_Updates'] = $row2['WBE_WC_Updates'];
	$emp['WBE_OS_Email_Inbox'] = $row2['WBE_OS_Email_Inbox'];
	$emp['Coding_FFS_Total'] = $row2['Coding_FFS_Total'];
	$emp['Coding_FFS_On_hold'] = $row2['Coding_FFS_On_hold'];
	$emp['Coding_Coding_Queue'] = $row2['Coding_Coding_Queue'];
	$emp['Coding_Coding_Queue_Days'] = $row2['Coding_Coding_Queue_Days'];
	$emp['Coding_WS_Coding'] = $row2['Coding_WS_Coding'];
	$emp['Coding_FFS_Onhold_Report'] = $row2['Coding_FFS_Onhold_Report'];
	
	if($count > 0)
	{
		$emp['RPQ_print_queue_total_PH'] = $row3['RPQ_print_queue_total'];
		$emp['RPQ_num_of_WC_PH'] = $row3['RPQ_num_of_WC'];
		$emp['IL_RCM_Ins_PH'] = $row3['IL_RCM_Ins'];
		$emp['IL_RCM_WC_PH'] = $row3['IL_RCM_WC'];
		$emp['IL_NINS_PH'] = $row3['IL_NINS'];
		$emp['IL_NNF_PH'] = $row3['IL_NNF'];
		$emp['IL_NWC_PH'] = $row3['IL_NWC'];
		$emp['IL_ENL_PH'] = $row3['IL_ENL'];
		$emp['RA_WS_Prof_PH'] = $row3['RA_WS_Prof'];
		$emp['RA_WS_Prof_Day_PH'] = $row3['RA_WS_Prof_Day'];
		$emp['RA_WS_Inst_PH'] = $row3['RA_WS_Inst'];
		$emp['RA_WS_Inst_Day_PH'] = $row3['RA_WS_Inst_Day'];
		$emp['RA_Attachments_PH'] = $row3['RA_Attachments'];
		$emp['WBE_NF_Updates_PH'] = $row3['WBE_NF_Updates'];
		$emp['WBE_WC_Updates_PH'] = $row3['WBE_WC_Updates'];
		$emp['WBE_OS_Email_Inbox_PH'] = $row3['WBE_OS_Email_Inbox'];
		$emp['Coding_FFS_Total_PH'] = $row3['Coding_FFS_Total'];
		$emp['Coding_FFS_On_hold_PH'] = $row3['Coding_FFS_On_hold'];
		$emp['Coding_Coding_Queue_PH'] = $row3['Coding_Coding_Queue'];
		$emp['Coding_Coding_Queue_Days_PH'] = $row3['Coding_Coding_Queue_Days'];
		$emp['Coding_WS_Coding_PH'] = $row3['Coding_WS_Coding'];
		$emp['Coding_FFS_Onhold_Report_PH'] = $row3['Coding_FFS_Onhold_Report'];
	}
	else{
		$emp['RPQ_print_queue_total_PH'] = NULL;
		$emp['RPQ_num_of_WC_PH'] = NULL;
		$emp['IL_RCM_Ins_PH'] = NULL;
		$emp['IL_RCM_WC_PH'] = NULL;
		$emp['IL_NINS_PH'] = NULL;
		$emp['IL_NNF_PH'] = NULL;
		$emp['IL_NWC_PH'] = NULL;
		$emp['IL_ENL_PH'] = NULL;
		$emp['RA_WS_Prof_PH'] = NULL;
		$emp['RA_WS_Prof_Day_PH'] = NULL;
		$emp['RA_WS_Inst_PH'] = NULL;
		$emp['RA_WS_Inst_Day_PH'] = NULL;
		$emp['RA_Attachments_PH'] = NULL;
		$emp['WBE_NF_Updates_PH'] = NULL;
		$emp['WBE_WC_Updates_PH'] = NULL;
		$emp['WBE_OS_Email_Inbox_PH'] = NULL;
		$emp['Coding_FFS_Total_PH'] = NULL;
		$emp['Coding_FFS_On_hold_PH'] = NULL;
		$emp['Coding_Coding_Queue_PH'] = NULL;
		$emp['Coding_Coding_Queue_Days_PH'] = NULL;
		$emp['Coding_WS_Coding_PH'] = NULL;
		$emp['Coding_FFS_Onhold_Report_PH'] = NULL;
	}
	
	echo json_encode($emp);
}
else if($dashboard == 3)
{
	$sql2 = "select * from om_access where user_id = '$userid'";
	$result2 = mysqli_query($con,$sql2);
	$row2 = mysqli_fetch_array($result2);
	
	$sql3 = "select * from om_data where when_done = '$today'";
	$result3 = mysqli_query($con,$sql3);
	$row3 = mysqli_fetch_array($result3);
	$count = mysqli_num_rows($result3);
	
	
	$emp['when_done'] = $today;
	
	$emp['userid'] = $userid;
	$emp['dashboard'] = $dashboard;
	$emp['date'] = $today;
	
	$emp['support_sp'] = $row2['support_sp'];
	$emp['support_enl'] = $row2['support_enl'];
	$emp['support_dnu'] = $row2['support_dnu'];
	$emp['support_nyucp'] = $row2['support_nyucp'];
	$emp['support_nom'] = $row2['support_nom'];
	$emp['support_emails'] = $row2['support_emails'];
	$emp['support_deposit_pulls'] = $row2['support_deposit_pulls'];
	$emp['support_blank_batch_corres'] = $row2['support_blank_batch_corres'];
	$emp['support_correspondence'] = $row2['support_correspondence'];
	$emp['support_acct_audits'] = $row2['support_acct_audits'];
	$emp['support_inv_correct'] = $row2['support_inv_correct'];
	$emp['support_phone'] = $row2['support_phone'];
	$emp['support_inv_addr'] = $row2['support_inv_addr'];
	$emp['support_collects'] = $row2['support_collects'];
	$emp['suport_medical_records'] = $row2['suport_medical_records'];
	
	$emp['coding_na'] = $row2['coding_na'];
	$emp['coding_on_holds'] = $row2['coding_on_holds'];
	$emp['coding_coding_queue'] = $row2['coding_coding_queue'];
	$emp['coding_onsites'] = $row2['coding_onsites'];
	$emp['coding_ooa'] = $row2['coding_ooa'];
	
	$emp['ar120'] = $row2['ar120'];
	$emp['ar_120percent'] = $row2['ar_120percent'];
	$emp['ar_90'] = $row2['ar_90'];
	$emp['ar_voicemails'] = $row2['ar_voicemails'];
	$emp['ar_unapplied'] = $row2['ar_unapplied'];
	$emp['ar_audit'] = $row2['ar_audit'];
	$emp['ar_wbs'] = $row2['ar_wbs'];
	
	if($count > 0)
	{
		$emp['support_sp_PH'] = $row3['support_sp'];
		$emp['support_enl_PH'] = $row3['support_enl'];
		$emp['support_dnu_PH'] = $row3['support_dnu'];
		$emp['support_nyucp_PH'] = $row3['support_nyucp'];
		$emp['support_nom_PH'] = $row3['support_nom'];
		$emp['support_emails_PH'] = $row3['support_emails'];
		$emp['support_deposit_pulls_PH'] = $row3['support_deposit_pulls'];
		$emp['support_blank_batch_corres_PH'] = $row3['support_blank_batch_corres'];
		$emp['support_correspondence_PH'] = $row3['support_correspondence'];
		$emp['support_acct_audits_PH'] = $row3['support_acct_audits'];
		$emp['support_inv_correct_PH'] = $row3['support_inv_correct'];
		$emp['support_phone_PH'] = $row3['support_phone'];
		$emp['support_inv_addr_PH'] = $row3['support_inv_addr'];
		$emp['support_collects_PH'] = $row3['support_collects'];
		$emp['suport_medical_records_PH'] = $row3['suport_medical_records'];
		
		$emp['coding_na_PH'] = $row3['coding_na'];
		$emp['coding_on_holds_PH'] = $row3['coding_on_holds'];
		$emp['coding_coding_queue_PH'] = $row3['coding_coding_queue'];
		$emp['coding_onsites_PH'] = $row3['coding_onsites'];
		$emp['coding_ooa_PH'] = $row3['coding_ooa'];
		
		$emp['ar120_PH'] = $row3['ar120'];
		$emp['ar_120percent_PH'] = $row3['ar_120percent'];
		$emp['ar_90_PH'] = $row3['ar_90'];
		$emp['ar_voicemails_PH'] = $row3['ar_voicemails'];
		$emp['ar_unapplied_PH'] = $row3['ar_unapplied'];
		$emp['ar_audit_PH'] = $row3['ar_audit'];
		$emp['ar_wbs_PH'] = $row3['ar_wbs'];
	}
	else{
		$emp['support_sp_PH'] = NULL;
		$emp['support_enl_PH'] = NULL;
		$emp['support_dnu_PH'] = NULL;
		$emp['support_nyucp_PH'] = NULL;
		$emp['support_nom_PH'] = NULL;
		$emp['support_emails_PH'] = NULL;
		$emp['support_deposit_pulls_PH'] = NULL;
		$emp['support_blank_batch_corres_PH'] = NULL;
		$emp['support_correspondence_PH'] = NULL;
		$emp['support_acct_audits_PH'] = NULL;
		$emp['support_inv_correct_PH'] = NULL;
		$emp['support_phone_PH'] = NULL;
		$emp['support_inv_addr_PH'] = NULL;
		$emp['support_collects_PH'] = NULL;
		$emp['suport_medical_records_PH'] = NULL;
		
		$emp['coding_na_PH'] = NULL;
		$emp['coding_on_holds_PH'] = NULL;
		$emp['coding_coding_queue_PH'] = NULL;
		$emp['coding_onsites_PH'] = NULL;
		$emp['coding_ooa_PH'] = NULL;
		
		$emp['ar120_PH'] = NULL;
		$emp['ar_120percent_PH'] = NULL;
		$emp['ar_90_PH'] = NULL;
		$emp['ar_voicemails_PH'] = NULL;
		$emp['ar_unapplied_PH'] = NULL;
		$emp['ar_audit_PH'] = NULL;
		$emp['ar_wbs_PH'] = NULL;
	}
	
	echo json_encode($emp);
}
else if($dashboard == 4)
{
	$sql2 = "select * from pat_sup_access where user_id = '$userid'";
	$result2 = mysqli_query($con,$sql2);
	$row2 = mysqli_fetch_array($result2);
	
	$sql3 = "select * from pat_sup_data where when_done = '$today'";
	$result3 = mysqli_query($con,$sql3);
	$row3 = mysqli_fetch_array($result3);
	$count = mysqli_num_rows($result3);
	
	
	$emp['when_done'] = $today;
	
	$emp['userid'] = $userid;
	$emp['dashboard'] = $dashboard;
	$emp['date'] = $today;
	
	$emp['saf_mvp_sod'] = $row2['saf_mvp_sod'];
	$emp['saf_inval_addr_sod'] = $row2['saf_inval_addr_sod'];
	$emp['ash_attachments_sod'] = $row2['ash_attachments_sod'];
	$emp['ash_wc_mailing_sod'] = $row2['ash_wc_mailing_sod'];
	$emp['ash_wc_deleted_sod'] = $row2['ash_wc_deleted_sod'];
	$emp['ash_acc_type_sod'] = $row2['ash_acc_type_sod'];
	$emp['ash_last_addr_sod'] = $row2['ash_last_addr_sod'];
	$emp['bailey_indep_health_sod'] = $row2['bailey_indep_health_sod'];
	$emp['bailey_bcbs_sod'] = $row2['bailey_bcbs_sod'];
	$emp['bailey_emails_sod'] = $row2['bailey_emails_sod'];
	$emp['justin_ndc_num_sod'] = $row2['justin_ndc_num_sod'];
	$emp['justin_medicare_loc_sod'] = $row2['justin_medicare_loc_sod'];
	$emp['justin_medicare_sec_sod'] = $row2['justin_medicare_sec_sod'];
	
	if($count > 0)
	{
		$emp['saf_mvp_sod_PH'] = $row3['saf_mvp_sod'];
		$emp['saf_inval_addr_sod_PH'] = $row3['saf_inval_addr_sod'];
		$emp['ash_attachments_sod_PH'] = $row3['ash_attachments_sod'];
		$emp['ash_wc_mailing_sod_PH'] = $row3['ash_wc_mailing_sod'];
		$emp['ash_wc_deleted_sod_PH'] = $row3['ash_wc_deleted_sod'];
		$emp['ash_acc_type_sod_PH'] = $row3['ash_acc_type_sod'];
		$emp['ash_last_addr_sod_PH'] = $row3['ash_last_addr_sod'];
		$emp['bailey_indep_health_sod_PH'] = $row3['bailey_indep_health_sod'];
		$emp['bailey_bcbs_sod_PH'] = $row3['bailey_bcbs_sod'];
		$emp['bailey_emails_sod_PH'] = $row3['bailey_emails_sod'];
		$emp['justin_ndc_num_sod_PH'] = $row3['justin_ndc_num_sod'];
		$emp['justin_medicare_loc_sod_PH'] = $row3['justin_medicare_loc_sod'];
		$emp['justin_medicare_sec_sod_PH'] = $row3['justin_medicare_sec_sod'];
	}
	else{
		$emp['saf_mvp_sod_PH'] = NULL;
		$emp['saf_inval_addr_sod_PH'] = NULL;
		$emp['ash_attachments_sod_PH'] = NULL;
		$emp['ash_wc_mailing_sod_PH'] = NULL;
		$emp['ash_wc_deleted_sod_PH'] = NULL;
		$emp['ash_acc_type_sod_PH'] = NULL;
		$emp['ash_last_addr_sod_PH'] = NULL;
		$emp['bailey_indep_health_sod_PH'] = NULL;
		$emp['bailey_bcbs_sod_PH'] = NULL;
		$emp['bailey_emails_sod_PH'] = NULL;
		$emp['justin_ndc_num_sod_PH'] = NULL;
		$emp['justin_medicare_loc_sod_PH'] = NULL;
		$emp['justin_medicare_sec_sod_PH'] = NULL;
	}
	
	echo json_encode($emp);
}
else
{
	http_response_code(422);
}

?>