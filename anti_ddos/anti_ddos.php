<?php
function getIP() {
if ( getenv("HTTP_CLIENT_IP") && preg_match("/^[0-9\.]*?[0-9\.]+$/is", getenv("HTTP_CLIENT_IP")) && getenv("HTTP_CLIENT_IP") != '127.0.0.1') {
	$ip = getenv("HTTP_CLIENT_IP");
} elseif(getenv("HTTP_X_FORWARDED_FOR") and preg_match("/^[0-9\.]*?[0-9\.]+$/is", getenv("HTTP_X_FORWARDED_FOR")) and getenv("HTTP_X_FORWARDED_FOR") !='127.0.0.1' ) {
	$ip = getenv("HTTP_X_FORWARDED_FOR");
} else {
	$ip = getenv("REMOTE_ADDR");
}
	return $ip;
}

$ad_ip = getIP();

$ad_source=file("{$ad_dir}/{$ad_black_file}");
$ad_source=explode(' ',$ad_source[0]);
if (in_array($ad_ip,$ad_source)){die();}

$ad_source=file("{$ad_dir}/{$ad_white_file}");
$ad_source=explode(' ',$ad_source[0]);
if (!in_array($ad_ip,$ad_source)){
	$ad_source=file("{$ad_dir}/{$ad_temp_file}");
	$ad_source=explode(' ',$ad_source[0]);
	if (!in_array($ad_ip,$ad_source)){
		$ad_file=fopen("{$ad_dir}/{$ad_temp_file}","a+");
		$ad_string=$ad_ip.' ';
		fputs($ad_file,"$ad_string");
		fclose($ad_file);
	}
}
?>