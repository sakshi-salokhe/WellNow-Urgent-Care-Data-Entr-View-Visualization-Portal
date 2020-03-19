<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

$emp = [];
$dashboard = $_GET['dashboards'];


$today = date("Y-m-d");

if($dashboard == 1)
{
	
	$sql3 = "select * from ar_data where when_done = '$today'";
	$result3 = mysqli_query($con,$sql3);
	$row3 = mysqli_fetch_array($result3);
	$count = mysqli_num_rows($result3);
	$today = date('Y-m-d');
	$emp['when_done'] = $today;
	
	$emp['dashboard'] = $dashboard;
	$emp['wb_tech_other'] = 1;
	$emp['wb_demo_elig'] = 1;
	$emp['wb_timely_filing'] = 1;
	$emp['wb_coding_replies'] = 1;
	$emp['wb_sup_reviews'] = 1;
	$emp['wb_nf_corres'] = 1;
	$emp['wb_wc_corres'] = 1;
	$emp['waystar_medc_sec'] = 1;
	$emp['waystar_oob'] = 1;
	$emp['waystar_fidelis_tf'] = 1;
	
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
		$emp['wb_tech_other_PH'] = "";
		$emp['wb_demo_elig_PH'] = "";
		$emp['wb_timely_filing_PH'] = "";
		$emp['wb_coding_replies_PH'] = "";
		$emp['wb_sup_reviews_PH'] = "";
		$emp['wb_nf_corres_PH'] = "";
		$emp['wb_wc_corres_PH'] = "";
		$emp['waystar_medc_sec_PH'] = "";
		$emp['waystar_oob_PH'] = "";
		$emp['waystar_fidelis_tf_PH'] = "";
	}
	
	echo json_encode($emp);
}
else if($dashboard == 2)
{
	
	$sql3 = "select * from os_data where when_done = '$today'";
	$result3 = mysqli_query($con,$sql3);
	$row3 = mysqli_fetch_array($result3);
	$count = mysqli_num_rows($result3);
	$today = date('Y-m-d');
	$emp['when_done'] = $today;
	$emp['dashboard'] = $dashboard;
	
	$emp['RPQ_print_queue_total'] = 1;
	$emp['RPQ_num_of_WC'] = 1;
	$emp['IL_RCM_Ins'] = 1;
	$emp['IL_RCM_WC'] = 1;
	$emp['IL_NINS'] = 1;
	$emp['IL_NNF'] = 1;
	$emp['IL_NWC'] = 1;
	$emp['IL_ENL'] = 1;
	$emp['RA_WS_Prof'] = 1;
	$emp['RA_WS_Prof_Day'] = 1;
	$emp['RA_WS_Inst'] = 1;
	$emp['RA_WS_Inst_Day'] = 1;
	$emp['RA_Attachments'] = 1;
	$emp['WBE_NF_Updates'] = 1;
	$emp['WBE_WC_Updates'] = 1;
	$emp['WBE_OS_Email_Inbox'] = 1;
	$emp['Coding_FFS_Total'] = 1;
	$emp['Coding_FFS_On_hold'] = 1;
	$emp['Coding_Coding_Queue'] = 1;
	$emp['Coding_Coding_Queue_Days'] = 1;
	$emp['Coding_WS_Coding'] = 1;
	$emp['Coding_FFS_Onhold_Report'] = 1;
	
	
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
	
	$sql3 = "select * from om_data where when_done = '$today'";
	$result3 = mysqli_query($con,$sql3);
	$row3 = mysqli_fetch_array($result3);
	$count = mysqli_num_rows($result3);
	
	$today = date('Y-m-d');
	$emp['when_done'] = $today;
	
	$emp['dashboard'] = $dashboard;
	
	$emp['support_sp'] = 1;
	$emp['support_enl'] = 1;
	$emp['support_dnu'] = 1;
	$emp['support_nyucp'] = 1;
	$emp['support_nom'] = 1;
	$emp['support_emails'] = 1;
	$emp['support_deposit_pulls'] = 1;
	$emp['support_blank_batch_corres'] = 1;
	$emp['support_correspondence'] = 1;
	$emp['support_acct_audits'] = 1;
	$emp['support_inv_correct'] = 1;
	$emp['support_phone'] = 1;
	$emp['support_inv_addr'] = 1;
	$emp['support_collects'] = 1;
	$emp['suport_medical_records'] = 1;
	
	$emp['coding_na'] = 1;
	$emp['coding_on_holds'] = 1;
	$emp['coding_coding_queue'] = 1;
	$emp['coding_onsites'] = 1;
	$emp['coding_ooa'] = 1;
	
	$emp['ar120'] = 1;
	$emp['ar_120percent'] = 1;
	$emp['ar_90'] = 1;
	$emp['ar_voicemails'] = 1;
	$emp['ar_unapplied'] = 1;
	$emp['ar_audit'] = 1;
	$emp['ar_wbs'] = 1;
	
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
	
	$sql3 = "select * from pat_sup_data where when_done = '$today'";
	$result3 = mysqli_query($con,$sql3);
	$row3 = mysqli_fetch_array($result3);
	$count = mysqli_num_rows($result3);
	$today = date('Y-m-d');
	$emp['when_done'] = $today;
	
	$emp['dashboard'] = $dashboard;
	$emp['saf_mvp_sod'] = 1;
	$emp['saf_inval_addr_sod'] = 1;
	$emp['ash_attachments_sod'] = 1;
	$emp['ash_wc_mailing_sod'] = 1;
	$emp['ash_wc_deleted_sod'] = 1;
	$emp['ash_acc_type_sod'] = 1;
	$emp['ash_last_addr_sod'] = 1;
	$emp['bailey_indep_health_sod'] = 1;
	$emp['bailey_bcbs_sod'] = 1;
	$emp['bailey_emails_sod'] = 1;
	$emp['justin_ndc_num_sod'] = 1;
	$emp['justin_medicare_loc_sod'] = 1;
	$emp['justin_medicare_sec_sod'] = 1;
	
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
		$emp['saf_mvp_sod_PH'] = "";
		$emp['saf_inval_addr_sod_PH'] = "";
		$emp['ash_attachments_sod_PH'] = "";
		$emp['ash_wc_mailing_sod_PH'] = "";
		$emp['ash_wc_deleted_sod_PH'] = "";
		$emp['ash_acc_type_sod_PH'] = "";
		$emp['ash_last_addr_sod_PH'] = "";
		$emp['bailey_indep_health_sod_PH'] = "";
		$emp['bailey_bcbs_sod_PH'] = "";
		$emp['bailey_emails_sod_PH'] = "";
		$emp['justin_ndc_num_sod_PH'] = "";
		$emp['justin_medicare_loc_sod_PH'] = "";
		$emp['justin_medicare_sec_sod_PH'] = "";
	}
	
	echo json_encode($emp);
}
else
{
	http_response_code(422);
}

?>