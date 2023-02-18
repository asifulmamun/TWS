<?php
/**
 * Template Name: Shop Home
 * Type: page
 * The template for Home Page of shop
 */
    
 	// DEVICE DETECTION
	require_once 'template-parts/device_detector.php';

	// Header file
	get_header();
?>

<div id="tws__page_with_aside">
<?php

	if ($isTab) {
		echo 'Tablet';
	}

	elseif ($isMob) {


			if ($isIOS) {
				echo 'iOS Mobile';
			} elseif ($isAndroid) {
				echo 'ANDROID';
			}else{
				echo 'Other Mobile';
			}

	} elseif ($isWin) {
		// echo 'WINDOWS';
		get_template_part( 'template-parts/desktop/global/aside'); // aside
		get_template_part( 'template-parts/desktop/content', 'page-shop-home' ); // page content
	} else {
		// echo 'Others Desktop...';
		get_template_part( 'template-parts/desktop/global/aside'); // aside
		get_template_part( 'template-parts/desktop/content', 'page-shop-home' ); // page content
	}
?>	
</div>


<?php
// get_sidebar();
get_footer();
