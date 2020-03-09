<?php

header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require "connect.php";
session_start();

//print_r($_POST);
$postdata = file_get_contents("php://input");
$dets = [];



if(isset($postdata) && !empty($postdata))
{
	$today = $_POST['date'];
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
	
	
	$sql = "insert into ar_data (when_done) values ('$today')";
	if(mysqli_query($con, $sql))
	{
		if(!empty($wb_tech_other_val))
		{
			$q1 = "update ar_data set wb_tech_other = '$wb_tech_other_val' where when_done = '$today'";
			$r1 = mysqli_query($con, $q1);
		}
		
		if(!empty($wb_demo_elig_val))
		{
			$q2 = "update ar_data set wb_demo_elig = '$wb_demo_elig_val' where when_done = '$today'";
			$r2 = mysqli_query($con, $q2);
		}
		
		if(!empty($wb_timely_filing_val))
		{
			$q3 = "update ar_data set wb_timely_filing = '$wb_timely_filing_val' where when_done = '$today'";
			$r3 = mysqli_query($con, $q3);
		}
		
		if(!empty($wb_coding_replies_val))
		{
			$q4 = "update ar_data set wb_coding_replies = '$wb_coding_replies_val' where when_done = '$today'";
			$r4 = mysqli_query($con, $q4);
		}
		
		if(!empty($wb_sup_reviews_val))
		{
			$q5 = "update ar_data set wb_sup_reviews = '$wb_sup_reviews_val' where when_done = '$today'";
			$r5 = mysqli_query($con, $q5);
		}
		
		if(!empty($wb_nf_corres_val))
		{
			$q6 = "update ar_data set wb_nf_corres = '$wb_nf_corres_val' where when_done = '$today'";
			$r6 = mysqli_query($con, $q6);
		}
		
		if(!empty($wb_wc_corres_val))
		{
			$q7 = "update ar_data set wb_wc_corres = '$wb_wc_corres_val' where when_done = '$today'";
			$r7 = mysqli_query($con, $q7);
		}
		
		if(!empty($waystar_medc_sec_val))
		{
			$q8 = "update ar_data set waystar_medc_sec = '$waystar_medc_sec_val' where when_done = '$today'";
			$r8 = mysqli_query($con, $q8);
		}
		
		if(!empty($waystar_oob_val))
		{
			$q9 = "update ar_data set waystar_oob = '$waystar_oob_val' where when_done = '$today'";
			$r9 = mysqli_query($con, $q9);
		}
		
		if(!empty($waystar_fidelis_tf_val))
		{
			$q10 = "update ar_data set waystar_fidelis_tf = '$waystar_fidelis_tf_val' where when_done = '$today'";
			$r10 = mysqli_query($con, $q10);
		}
	
		$dets['entered'] = 1;
		$dets['date'] = $today;
		
		echo json_encode($dets);
	}
	else{
		$dets['entered'] = 0;
		echo json_encode($dets);
	}
}

?>