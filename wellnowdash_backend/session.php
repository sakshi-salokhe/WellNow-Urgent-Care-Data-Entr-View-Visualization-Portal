<?php
   include('connect.php');
   session_start();
   
   $user_check = $_SESSION['login_user'];
   
   $ses_sql = mysqli_query($con,"select email from users where email = '$user_check' ");
   
   $row = mysqli_fetch_array($ses_sql,MYSQLI_ASSOC);
   
   $login_session = $row['email'];
   
   if(!isset($_SESSION['login_user'])){
      header("location:C:\Users\w501738\Desktop\WellNowDashboard\src\LoginRegJS\Login.js");
      die();
   }
?>