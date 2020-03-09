<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

$emp = [];
$today = date('Y-m-d');
$dashboards = $_GET['dashboards'];
$user_id = $_GET['user_id'];

if($dashboards == '1' or $dashboards ==1)
{
	$sql = "select * from ar_data where when_done = '$today'";
	if($res = mysqli_query($con, $sql))
	{
		$c = 0;
		while($row = mysqli_fetch_assoc($res))
		{
			$emp[$c]['id'] = $row['ar_id'];
			$emp[$c]['user_id'] = $user_id;
			$emp[$c]['when_done'] = $row['when_done'];
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

			$c++;
		}
		
		
		echo json_encode($emp);
	}
}
else if($dashboards == '2' or $dashboards == 2)
{
	$sql = "select * from os_data where when_done = '$today'";
	if($res = mysqli_query($con, $sql))
	{
		$c = 0;
		while($row = mysqli_fetch_assoc($res))
		{
			$emp[$c]['id'] = $row['os_id'];
			$emp[$c]['user_id'] = $user_id;
			$emp[$c]['when_done'] = $row['when_done'];
			
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

			$c++;
		}
		echo json_encode($emp);
	}
}
else if($dashboards == '3')
{
	$sql = "select * from om_data where when_done = '$today'";
	if($res = mysqli_query($con, $sql))
	{
		$c = 0;
		while($row = mysqli_fetch_assoc($res))
		{
			$emp[$c]['id'] = $row['om_id'];
			$emp[$c]['user_id'] = $user_id;
			$emp[$c]['when_done'] = $row['when_done'];
			
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

			$c++;
		}
		
		
		echo json_encode($emp);
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