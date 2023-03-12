<?php 
	// DEVICE DETECTION
	require 'template-parts/device_detector.php';
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php echo tws__css_js('css', null); ?>

	<!-- remove after developed -->
	<!-- <script src="<?php //echo get_template_directory_uri(); ?>/assets/src/js/tailwindcss.js"></script> -->
	
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php //wp_body_open(); ?>
<?php


	// DEVICE DETECTION
	if ($isMob) {
		if ($isTab) {
			// echo 'Tablet';
		} else {
			if ($isIOS) {
				// echo 'iOS Mobile';
			} elseif ($isAndroid) {
				// echo 'ANDROID';
			} else{
				// echo 'Other Mobile';
			}
		}
	} elseif ($isWin) {
		// echo 'WINDOWS';
		get_template_part( 'template-parts/desktop/global/header', 'nav' );
	} else {
		// echo 'Others Desktop...';
		get_template_part( 'template-parts/desktop/global/header', 'nav' );
	}
?>