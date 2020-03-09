<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

//print_r($_POST);
$postdata = file_get_contents("php://input");
$dets = [];
$today = date("m");
$today_year = date("yy");

if(isset($postdata) && !empty($postdata))
{

	$wb_tech_other_val = $_POST['wb_tech_other_val'];
	
	$wb_demo_elig_val = $_POST['wb_demo_elig_val'];
	$wb_timely_filing_val = $_POST['wb_timely_filing_val'];
	$wb_coding_replies_val = $_POST['wb_coding_replies_val'];
	$wb_sup_reviews_val = $_POST['wb_sup_reviews_val'];
	$wb_nf_corres_val = $_POST['wb_nf_corres_val'];
	$wb_wc_corres_val = $_POST['wb_wc_corres_val'];
	$waystar_medc_sec_val = $_POST['waystar_medc_sec_val'];
	$waystar_oob_val = $_POST['waystar_oob_val'];
	$waystar_fidelis_tf_val = $_POST['waystar_fidelis_tf_val'];
	
	
	if(empty($wb_tech_other_val) == False)
	{
		$q1 = "update ar_goals set wb_tech_other = '$wb_tech_other_val' where when_done = '$today' and when_done_year = '$today_year'";
		$r1 = mysqli_query($con, $q1);
	}
	
	if(empty($wb_demo_elig_val) == False)
	{
		$q2 = "update ar_goals set wb_demo_elig = '$wb_demo_elig_val' where when_done = '$today' and when_done_year = '$today_year'";
		$r2 = mysqli_query($con, $q2);
	}
	
	if(empty($wb_timely_filing_val) == False)
	{
		$q3 = "update ar_goals set wb_timely_filing = '$wb_timely_filing_val' where when_done = '$today' and when_done_year = '$today_year'";
		$r3 = mysqli_query($con, $q3);
	}
	
	if(empty($wb_coding_replies_val) == False)
	{
		$q4 = "update ar_goals set wb_coding_replies = '$wb_coding_replies_val' where when_done = '$today' and when_done_year = '$today_year'";
		$r4 = mysqli_query($con, $q4);
	}
	
	if(empty($wb_sup_reviews_val) == False)
	{
		$q5 = "update ar_goals set wb_sup_reviews = '$wb_sup_reviews_val' where when_done = '$today' and when_done_year = '$today_year'";
		$r5 = mysqli_query($con, $q5);
	}
	
	if(empty($wb_nf_corres_val) == False)
	{
		$q6 = "update ar_goals set wb_nf_corres = '$wb_nf_corres_val' where when_done = '$today' and when_done_year = '$today_year'";
		$r6 = mysqli_query($con, $q6);
	}
	
	if(empty($wb_wc_corres_val) == False)
	{
		$q7 = "update ar_goals set wb_wc_corres = '$wb_wc_corres_val' where when_done = '$today' and when_done_year = '$today_year'";
		$r7 = mysqli_query($con, $q7);
	}
	
	if(empty($waystar_medc_sec_val) == False)
	{
		$q8 = "update ar_goals set waystar_medc_sec = '$waystar_medc_sec_val' where when_done = '$today' and when_done_year = '$today_year'";
		$r8 = mysqli_query($con, $q8);
	}
	
	if(empty($waystar_oob_val) == False)
	{
		$q9 = "update ar_goals set waystar_oob = '$waystar_oob_val' where when_done = '$today' and when_done_year = '$today_year'";
		$r9 = mysqli_query($con, $q9);
	}
	
	if(empty($waystar_fidelis_tf_val) == False)
	{
		$q10 = "update ar_goals set waystar_fidelis_tf = '$waystar_fidelis_tf_val' where when_done = '$today' and when_done_year = '$today_year'";
		$r10 = mysqli_query($con, $q10);
	}
	
	
	
	$dets['entered'] = 1;
	echo json_encode($dets);
}	

?>