<?php 

// function reCaptcha($recaptcha){
//   $secret = "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";
//   $ip = $_SERVER['REMOTE_ADDR'];

//   $postvars = array("secret"=>$secret, "response"=>$recaptcha, "remoteip"=>$ip);
//   $url = "https://www.google.com/recaptcha/api/siteverify";
//   $ch = curl_init();
//   curl_setopt($ch, CURLOPT_URL, $url);
//   curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
//   curl_setopt($ch, CURLOPT_TIMEOUT, 10);
//   curl_setopt($ch, CURLOPT_POSTFIELDS, $postvars);
//   $data = curl_exec($ch);
//   curl_close($ch);

//   return json_decode($data, true);
// }

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$formcontent="From: $name \n Phone: $phone \n Message: $message";
$recipient = "tanning@bronzeambition.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";

// $recaptcha = $_POST['g-recaptcha-response'];
// $res = reCaptcha($recaptcha);


mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>