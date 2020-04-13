<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

$postdata = file_get_contents("php://input");
$dets = [];

if(isset($postdata) && !empty($postdata))
{
	
	$email = $_POST['email'];
	$fullname = $_POST['fullname'];
	$password1 = md5($_POST['password1']);
	$dashboards = $_POST['dashboards'];
	$isManager = $_POST['isManager'];
	
	$val_query = "SELECT * from users where email='$email'";
	$res = mysqli_query($con, $val_query);
	$count = mysqli_num_rows($res);
	
	if($count>0) 
	{
		
		$dets['registered'] = false;
		$dets['email'] = $email;
		
		echo json_encode($dets);	
	}
	else
	{
		$sql = "insert into users(email, fullname, password1, dashboards, isActive, isManager) values ('$email', '$fullname', '$password1', '$dashboards', 0, '$isManager')";
		
		if(mysqli_query($con, $sql))
		{
			if($isManager == 1 or $isManager == '1')
			{
				$adm_q = "select * from users where isManager = 1 and dashboards = 5";
				$adm_res = mysqli_query($con, $adm_q);
				$adm_row1 = mysqli_fetch_assoc($adm_res);
				$superior_email = $adm_row1['email'];
				$superior_fullname = $adm_row1['fullname'];
				
				if($dashboards == '1' or $dashboards == 1)
				{
					$q1 = "select user_id from users where email = '$email'";
					$res = mysqli_query($con, $q1);
					$row1 = mysqli_fetch_assoc($res);
					$uid = $row1['user_id'];

					$q2 = "insert into ar_access(user_id, wb_tech_other, wb_demo_elig, wb_timely_filing, wb_coding_replies, wb_sup_reviews, wb_nf_corres, wb_wc_corres, waystar_medc_sec, waystar_oob, waystar_fidelis_tf) values ('$uid', 0,0,0,0,0,0,0,0,0,0)";
					
					if(mysqli_query($con, $q2))
					{
						$dets['registered'] = true;
						$dets['email'] = $email;
						
						echo json_encode($dets);
						http_response_code(201);
					}
					else
					{
						$dets['registered'] = false;
						$dets['email'] = $email;
						
						echo json_encode($dets);
					}
				}
				else if($dashboards == '2' or $dashboards == 2)
				{
					$q1 = "select user_id from users where email = '$email'";
					$res = mysqli_query($con, $q1);
					$row1 = mysqli_fetch_assoc($res);
					$uid = $row1['user_id'];
					$q2 = "insert into os_access(user_id, RPQ_print_queue_total, RPQ_num_of_WC, IL_RCM_Ins, IL_RCM_WC, IL_NINS, IL_NNF, IL_NWC, IL_ENL, RA_WS_Prof,RA_WS_Prof_Day, RA_WS_Inst, RA_WS_Inst_Day, RA_Attachments, WBE_NF_Updates, WBE_WC_Updates, WBE_OS_Email_Inbox, Coding_FFS_Total, Coding_FFS_On_hold, Coding_Coding_Queue, Coding_Coding_Queue_Days, Coding_WS_Coding, Coding_FFS_Onhold_Report) values ('$uid', 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)";
					
					if(mysqli_query($con, $q2))
					{
						$dets['registered'] = true;
						$dets['email'] = $email;
						
						echo json_encode($dets);
						http_response_code(201);
					}
					else
					{
						$dets['registered'] = false;
						$dets['email'] = $email;
						
						echo json_encode($dets);
					}
				}
				else if($dashboards == '3' or $dashboards == 3)
				{
					$q1 = "select user_id from users where email = '$email'";
					$res = mysqli_query($con, $q1);
					$row1 = mysqli_fetch_assoc($res);
					$uid = $row1['user_id'];
					$q2 = "insert into om_access(user_id,support_sp, support_enl,support_dnu, support_nyucp, support_nom, support_emails, support_deposit_pulls, support_blank_batch_corres, support_correspondence, support_acct_audits, support_inv_correct, support_phone, support_inv_addr, support_collects, suport_medical_records, coding_na, coding_on_holds, coding_coding_queue, coding_onsites, coding_ooa, ar120, ar_120percent, ar_90, ar_voicemails, ar_unapplied, ar_audit, ar_wbs) values ('$uid', 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)";
					
					if(mysqli_query($con, $q2))
					{
						$dets['registered'] = true;
						$dets['email'] = $email;
						
						echo json_encode($dets);
						http_response_code(201);
					}
					else
					{
						$dets['registered'] = false;
						$dets['email'] = $email;
						
						echo json_encode($dets);
					}
				}
				else if($dashboards == '4' or $dashboards == 4)
				{
					$q1 = "select user_id from users where email = '$email'";
					$res = mysqli_query($con, $q1);
					$row1 = mysqli_fetch_assoc($res);
					$uid = $row1['user_id'];
					$q2 = "insert into pat_sup_access(user_id, saf_mvp_sod, saf_inval_addr_sod, ash_attachments_sod, ash_wc_mailing_sod, ash_wc_deleted_sod, ash_acc_type_sod, ash_last_addr_sod, bailey_indep_health_sod, bailey_bcbs_sod, bailey_emails_sod, justin_ndc_num_sod, justin_medicare_loc_sod, justin_medicare_sec_sod) values ('$uid', 0,0,0,0,0,0,0,0,0,0,0,0,0)";
					
					if(mysqli_query($con, $q2))
					{
						$dets['registered'] = true;
						$dets['email'] = $email;
						
						echo json_encode($dets);
						http_response_code(201);
					}
					else
					{
						$dets['registered'] = false;
						$dets['email'] = $email;
						
						echo json_encode($dets);
					}
				}
				else if($dashboards == '5' or $dashboards == 5) //admin
				{
					$q11 = "select user_id from users where email = '$email'";
					$res = mysqli_query($con, $q11);
					$row11 = mysqli_fetch_assoc($res);
					$uid = $row11['user_id'];
					$q22 = "insert into ar_access(user_id, wb_tech_other, wb_demo_elig, wb_timely_filing, wb_coding_replies, wb_sup_reviews, wb_nf_corres, wb_wc_corres, waystar_medc_sec, waystar_oob, waystar_fidelis_tf) values ('$uid', 1,1,1,1,1,1,1,1,1,1)";
					$q33 = "insert into os_access(user_id, RPQ_print_queue_total, RPQ_num_of_WC, IL_RCM_Ins, IL_RCM_WC, IL_NINS, IL_NNF, IL_NWC, IL_ENL, RA_WS_Prof,RA_WS_Prof_Day, RA_WS_Inst, RA_WS_Inst_Day, RA_Attachments, WBE_NF_Updates, WBE_WC_Updates, WBE_OS_Email_Inbox, Coding_FFS_Total, Coding_FFS_On_hold, Coding_Coding_Queue, Coding_Coding_Queue_Days, Coding_WS_Coding, Coding_FFS_Onhold_Report) values ('$uid', 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)";
					$q44 = "insert into om_access(user_id,support_sp, support_enl,support_dnu, support_nyucp, support_nom, support_emails, support_deposit_pulls, support_blank_batch_corres, support_correspondence, support_acct_audits, support_inv_correct, support_phone, support_inv_addr, support_collects, suport_medical_records, coding_na, coding_on_holds, coding_coding_queue, coding_onsites, coding_ooa, ar120, ar_120percent, ar_90, ar_voicemails, ar_unapplied, ar_audit, ar_wbs) values ('$uid', 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)";
					$q55 = "insert into pat_sup_access(user_id, saf_mvp_sod, saf_inval_addr_sod, ash_attachments_sod, ash_wc_mailing_sod, ash_wc_deleted_sod, ash_acc_type_sod, ash_last_addr_sod, bailey_indep_health_sod, bailey_bcbs_sod, bailey_emails_sod, justin_ndc_num_sod, justin_medicare_loc_sod, justin_medicare_sec_sod) values ('$uid', 1,1,1,1,1,1,1,1,1,1,1,1,1)";
					$q771 = "insert into cm1_access(user_id, un_total, un_worked, dtr_tw, dtr_issuelog, prw_total, prw_worked, prw_left, ncoa_refund, ncoa_updates, ncoa_skiptrace) values ('$uid',1,1,1,1,1,1,1,1,1,1)";
					$q772 = "insert into cm2_access(user_id, ilc_pages, ilc_completed, efts_num, efts_completed, sc_wcupdates, sc_wccorr, sc_nfcorr, sc_to, sc_de, sc_tf, ccp_total, ccp_completed, iar_nt, iar_completed, iar_updates, iar_completed1, wi_tnb, wi_addissue, wi_worked, wi_left) values ('$uid',1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)";
					
					if(mysqli_query($con, $q22) and mysqli_query($con, $q33) and mysqli_query($con, $q44) and mysqli_query($con, $q55) and mysqli_query($con, $q771) and mysqli_query($con, $q772))
					{
						$dets['registered'] = true;
						$dets['email'] = $email;
						
						echo json_encode($dets);
						http_response_code(201);
					}
					
				}
				else if($dashboards == '7' or $dashboards == 7)
				{
					$q1 = "select user_id from users where email = '$email'";
					$res = mysqli_query($con, $q1);
					$row1 = mysqli_fetch_assoc($res);
					$uid = $row1['user_id'];

					$q2 = "insert into cm1_access(user_id, un_total, un_worked, dtr_tw, dtr_issuelog, prw_total, prw_worked, prw_left, ncoa_refund, ncoa_updates, ncoa_skiptrace) values ('$uid',0,0,0,0,0,0,0,0,0,0)";
					$q3 = "insert into cm2_access(user_id, ilc_pages, ilc_completed, efts_num, efts_completed, sc_wcupdates, sc_wccorr, sc_nfcorr, sc_to, sc_de, sc_tf, ccp_total, ccp_completed, iar_nt, iar_completed, iar_updates, iar_completed1, wi_tnb, wi_addissue, wi_worked, wi_left) values ('$uid',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)";
					
					if(mysqli_query($con, $q2) && mysqli_query($con, $q3))
					{
						$dets['registered'] = true;
						$dets['email'] = $email;
						
						echo json_encode($dets);
						http_response_code(201);
					}
					else
					{
						$dets['registered'] = false;
						$dets['email'] = $email;
						
						echo json_encode($dets);
					}
				}
				
				$to = $email;
				$from = 'donotreplywellnowuc@gmail.com';
				$subject = "WellNow Urgent Care Dashboard - Successful Registeration.";
				$message = "Hi ".$fullname.",
	Your have successfully registered into the WellNow Urgent Care Dashboard portal.	
	Please wait for ".$superior_fullname." to approve you in order to Log In. Once approved, you will be able to log in using the same email id ".$email." and the password used for registeration.	
	For any issues with the details entered, please contact me at ".$superior_email.".	
	For any technical issues, please contact Sakshi Salokhe - Reporting Specialist (Automation and Back end Developer), at sakshisanjay.salokhe@wellnow.com.	
		
	Thank you,
	WellNow UrgentCare
	Back End Development Team";
				$headers = array("From: melissa.cortes@wellnow.com",
					"Reply-To: sakshisanjay.salokhe@wellnow.com",
					"X-Mailer: PHP/" . PHP_VERSION
				);
				$headers = implode("\r\n", $headers);
				mail($to, $subject, $message, $headers);
				
				
				$to_sup = $superior_email;
				$message_sup = "Hi ".$superior_fullname.",
	".$fullname." has successfully registered into the WellNow Urgent Care Dashboard portal.	
	Please check the details and update if there are any mistakes or errors. If everything looks good, please approve the user.
	For any technical issues, please contact Sakshi Salokhe - Reporting Specialist (Automation and Back end Developer), at sakshisanjay.salokhe@wellnow.com.	
		
	Thank you,
	WellNow UrgentCare
	Back End Development Team";
				mail($to_sup, $subject, $message_sup, $headers);
			}
			else if($isManager == 0 or $isManager == '0')
			{
				$adm_q = "select * from users where isManager = 1 and dashboards = '$dashboards'";
				$adm_res = mysqli_query($con, $adm_q);
				$adm_row1 = mysqli_fetch_assoc($adm_res);
				$superior_email = $adm_row1['email'];
				$superior_fullname = $adm_row1['fullname'];
				
				if($dashboards == '1' or $dashboards == 1)
				{
					$q1 = "select user_id from users where email = '$email'";
					$res = mysqli_query($con, $q1);
					$row1 = mysqli_fetch_assoc($res);
					$uid = $row1['user_id'];

					$q2 = "insert into ar_access(user_id, wb_tech_other, wb_demo_elig, wb_timely_filing, wb_coding_replies, wb_sup_reviews, wb_nf_corres, wb_wc_corres, waystar_medc_sec, waystar_oob, waystar_fidelis_tf) values ('$uid', 0,0,0,0,0,0,0,0,0,0)";
					
					if(mysqli_query($con, $q2))
					{
						$dets['registered'] = true;
						$dets['email'] = $email;
						
						echo json_encode($dets);
						http_response_code(201);
					}
					else
					{
						$dets['registered'] = false;
						$dets['email'] = $email;
						
						echo json_encode($dets);
					}
				}
				else if($dashboards == '2' or $dashboards == 2)
				{
					$q1 = "select user_id from users where email = '$email'";
					$res = mysqli_query($con, $q1);
					$row1 = mysqli_fetch_assoc($res);
					$uid = $row1['user_id'];
					$q2 = "insert into os_access(user_id, RPQ_print_queue_total, RPQ_num_of_WC, IL_RCM_Ins, IL_RCM_WC, IL_NINS, IL_NNF, IL_NWC, IL_ENL, RA_WS_Prof,RA_WS_Prof_Day, RA_WS_Inst, RA_WS_Inst_Day, RA_Attachments, WBE_NF_Updates, WBE_WC_Updates, WBE_OS_Email_Inbox, Coding_FFS_Total, Coding_FFS_On_hold, Coding_Coding_Queue, Coding_Coding_Queue_Days, Coding_WS_Coding, Coding_FFS_Onhold_Report) values ('$uid', 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)";
					
					if(mysqli_query($con, $q2))
					{
						$dets['registered'] = true;
						$dets['email'] = $email;
						
						echo json_encode($dets);
						http_response_code(201);
					}
					else
					{
						$dets['registered'] = false;
						$dets['email'] = $email;
						
						echo json_encode($dets);
					}
				}
				else if($dashboards == '3' or $dashboards == 3)
				{
					$q1 = "select user_id from users where email = '$email'";
					$res = mysqli_query($con, $q1);
					$row1 = mysqli_fetch_assoc($res);
					$uid = $row1['user_id'];
					$q2 = "insert into om_access(user_id,support_sp, support_enl,support_dnu, support_nyucp, support_nom, support_emails, support_deposit_pulls, support_blank_batch_corres, support_correspondence, support_acct_audits, support_inv_correct, support_phone, support_inv_addr, support_collects, suport_medical_records, coding_na, coding_on_holds, coding_coding_queue, coding_onsites, coding_ooa, ar120, ar_120percent, ar_90, ar_voicemails, ar_unapplied, ar_audit, ar_wbs) values ('$uid', 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)";
					
					if(mysqli_query($con, $q2))
					{
						$dets['registered'] = true;
						$dets['email'] = $email;
						
						echo json_encode($dets);
						http_response_code(201);
					}
					else
					{
						$dets['registered'] = false;
						$dets['email'] = $email;
						
						echo json_encode($dets);
					}
				}
				else if($dashboards == '4' or $dashboards == 4)
				{
					$q1 = "select user_id from users where email = '$email'";
					$res = mysqli_query($con, $q1);
					$row1 = mysqli_fetch_assoc($res);
					$uid = $row1['user_id'];

					$q42 = "insert into pat_sup_access(user_id, saf_mvp_sod, saf_inval_addr_sod, ash_attachments_sod, ash_wc_mailing_sod,  ash_wc_deleted_sod, ash_acc_type_sod, ash_last_addr_sod, bailey_indep_health_sod, bailey_bcbs_sod, bailey_emails_sod, justin_ndc_num_sod, justin_medicare_loc_sod, justin_medicare_sec_sod) values ('$uid', 0,0,0,0,0,0,0,0,0,0,0,0,0)";
					
					if(mysqli_query($con, $q42))
					{
						$dets['registered'] = true;
						$dets['email'] = $email;
						
						echo json_encode($dets);
					}
					else
					{
						$dets['registered'] = false;
						$dets['email'] = $email;
						
						echo json_encode($dets);
					}
				}
				else if($dashboards == '5' or $dashboards == 5)
				{
					$q11 = "select user_id from users where email = '$email'";
					$res = mysqli_query($con, $q11);
					$row11 = mysqli_fetch_assoc($res);
					$uid = $row11['user_id'];
					$q22 = "insert into ar_access(user_id, wb_tech_other, wb_demo_elig, wb_timely_filing, wb_coding_replies, wb_sup_reviews, wb_nf_corres, wb_wc_corres, waystar_medc_sec, waystar_oob, waystar_fidelis_tf) values ('$uid', 1,1,1,1,1,1,1,1,1,1)";
					$q33 = "insert into os_access(user_id, RPQ_print_queue_total, RPQ_num_of_WC, IL_RCM_Ins, IL_RCM_WC, IL_NINS, IL_NNF, IL_NWC, IL_ENL, RA_WS_Prof,RA_WS_Prof_Day, RA_WS_Inst, RA_WS_Inst_Day, RA_Attachments, WBE_NF_Updates, WBE_WC_Updates, WBE_OS_Email_Inbox, Coding_FFS_Total, Coding_FFS_On_hold, Coding_Coding_Queue, Coding_Coding_Queue_Days, Coding_WS_Coding, Coding_FFS_Onhold_Report) values ('$uid', 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)";
					$q44 = "insert into om_access(user_id,support_sp, support_enl,support_dnu, support_nyucp, support_nom, support_emails, support_deposit_pulls, support_blank_batch_corres, support_correspondence, support_acct_audits, support_inv_correct, support_phone, support_inv_addr, support_collects, suport_medical_records, coding_na, coding_on_holds, coding_coding_queue, coding_onsites, coding_ooa, ar120, ar_120percent, ar_90, ar_voicemails, ar_unapplied, ar_audit, ar_wbs) values ('$uid', 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)";
					$q55 = "insert into pat_sup_access(user_id, saf_mvp_sod, saf_inval_addr_sod, ash_attachments_sod, ash_wc_mailing_sod, ash_wc_deleted_sod, ash_acc_type_sod, ash_last_addr_sod, bailey_indep_health_sod, bailey_bcbs_sod, bailey_emails_sod, justin_ndc_num_sod, justin_medicare_loc_sod, justin_medicare_sec_sod) values ('$uid', 1,1,1,1,1,1,1,1,1,1,1,1,1)";
					$q771 = "insert into cm1_access(user_id, un_total, un_worked, dtr_tw, dtr_issuelog, prw_total, prw_worked, prw_left, ncoa_refund, ncoa_updates, ncoa_skiptrace) values ('$uid',1,1,1,1,1,1,1,1,1,1)";
					$q772 = "insert into cm2_access(user_id, ilc_pages, ilc_completed, efts_num, efts_completed, sc_wcupdates, sc_wccorr, sc_nfcorr, sc_to, sc_de, sc_tf, ccp_total, ccp_completed, iar_nt, iar_completed, iar_updates, iar_completed1, wi_tnb, wi_addissue, wi_worked, wi_left) values ('$uid',1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)";
					
					if(mysqli_query($con, $q22) and mysqli_query($con, $q33) and mysqli_query($con, $q44) and mysqli_query($con, $q55) and mysqli_query($con, $q771)and mysqli_query($con, $q772))
					{
						$dets['registered'] = true;
						$dets['email'] = $email;
						
						echo json_encode($dets);
						http_response_code(201);
					}
					
				}
				else if($dashboards == '7' or $dashboards == 7)
				{
					$q1 = "select user_id from users where email = '$email'";
					$res = mysqli_query($con, $q1);
					$row1 = mysqli_fetch_assoc($res);
					$uid = $row1['user_id'];

					$q2 = "insert into cm1_access(user_id, un_total, un_worked, dtr_tw, dtr_issuelog, prw_total, prw_worked, prw_left, ncoa_refund, ncoa_updates, ncoa_skiptrace) values ('$uid',0,0,0,0,0,0,0,0,0,0)";
					$q3 = "insert into cm2_access(user_id, ilc_pages, ilc_completed, efts_num, efts_completed, sc_wcupdates, sc_wccorr, sc_nfcorr, sc_to, sc_de, sc_tf, ccp_total, ccp_completed, iar_nt, iar_completed, iar_updates, iar_completed1, wi_tnb, wi_addissue, wi_worked, wi_left) values ('$uid',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)";
					
					if(mysqli_query($con, $q2) && mysqli_query($con, $q3))
					{
						$dets['registered'] = true;
						$dets['email'] = $email;
						
						echo json_encode($dets);
						http_response_code(201);
					}
					else
					{
						$dets['registered'] = false;
						$dets['email'] = $email;
						
						echo json_encode($dets);
					}
				}
				
				$to = $email;
				$from = 'donotreplywellnowuc@gmail.com';
				$subject = "WellNow Urgent Care Dashboard - Successful Registeration.";
				$message = "Hi ".$fullname.",
	Your have successfully registered into the WellNow Urgent Care Dashboard portal.
	Please wait for ".$superior_fullname." to approve you in order to Log In. Once approved, you will be able to log in using the same email id ".$email." and the password used for registeration.
	For any issues with the details entered, please contact me at ".$superior_email.".
	For any technical issues, please contact Sakshi Salokhe - Reporting Specialist (Automation and Back end Developer), at sakshisanjay.salokhe@wellnow.com.
		
	Thank you,
	WellNow UrgentCare
	Back End Development Team";

				$headers = array("From: melissa.cortes@wellnow.com",
					"Reply-To: sakshisanjay.salokhe@wellnow.com",
					"X-Mailer: PHP/" . PHP_VERSION
				);
				$headers = implode("\r\n", $headers);
				mail($to, $subject, $message, $headers);
				
				
				$to_sup = $superior_email;
				$message_sup = "Hi ".$superior_fullname.",
	".$fullname." has successfully registered into the WellNow Urgent Care Dashboard portal.	
	Please check the details and update if there are any mistakes or errors. If everything looks good, please approve the user.
	For any technical issues, please contact Sakshi Salokhe - Reporting Specialist (Automation and Back end Developer), at sakshisanjay.salokhe@wellnow.com.	
		
	Thank you,
	WellNow UrgentCare
	Back End Development Team";
				mail($to_sup, $subject, $message_sup, $headers);
			}
	

		}
		else
		{
			$dets['registered'] = false;
			$dets['email'] = $email;
			
			echo json_encode($dets);
		}
	}

}

?>