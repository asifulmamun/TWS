<?php
		/**
		 * Device Detection
		*/
		// Check if the "mobile" word exists in User-Agent 
		$isMob = is_numeric(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]), "mobile"));

		// Check if the "tablet" word exists in User-Agent 
		$isTab = is_numeric(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]), "tablet"));

		// Platform check  
		$isWin = is_numeric(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]), "windows"));
		$isAndroid = is_numeric(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]), "android"));
		$isIPhone = is_numeric(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]), "iphone"));
		$isIPad = is_numeric(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]), "ipad"));
		$isIOS = $isIPhone || $isIPad;

	function tws__css_js($css_js){

		global $isMob, $isTab, $isIOS, $isAndroid, $isWin;
		/**
		 * Adding css by detecting devices
		 * 
		 */
		if ($isMob) {
			if ($isTab) {
				// echo 'Tablet';
			}
			else {
				if ($isIOS) {
					// echo 'iOS Mobile';
				} elseif ($isAndroid) {
					// echo 'ANDROID';
				}else{
					// echo 'Other Mobile';
				}
			}
		} elseif ($isWin) {
			// echo 'WINDOWS';
			if($css_js == 'css'){
				// wp_enqueue_style( 'app', get_stylesheet_directory_uri(). '/assets/build/css/app.css',  array(), null, 'all' );
				return '<link rel="stylesheet" id="app-css" href="' . get_stylesheet_directory_uri() . '/assets/build/css/app.css" type="text/css" media="all">';

			
			}elseif($css_js == 'js'){
				// wp_enqueue_script( 'app', get_template_directory_uri() . '/assets/build/js/app.js', array(), null, true);
				return '<script type="text/javascript" src="' . get_template_directory_uri() .'/assets/build/js/app.js" id="app-js"></script>';

			}
		} else {
			// echo 'Others Desktop...';
			if($css_js == 'css'){
				// wp_enqueue_style( 'app', get_stylesheet_directory_uri(). '/assets/build/css/app.css',  array(), null, 'all' );
				return '<link rel="stylesheet" id="app-css" href="' . get_stylesheet_directory_uri() . '/assets/build/css/app.css" type="text/css" media="all">';

			
			}elseif($css_js == 'js'){
				// wp_enqueue_script( 'app', get_template_directory_uri() . '/assets/build/js/app.js', array(), null, true);
				return '<script type="text/javascript" src="' . get_template_directory_uri() .'/assets/build/js/app.js" id="app-js"></script>';

			}
		}
	} // css_js
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php echo tws__css_js('css'); ?>

	<!-- remove after developed -->
	<script src="<?php echo get_template_directory_uri(); ?>/assets/src/js/tailwindcss.js"></script>
	
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php //wp_body_open(); ?>
<?php
	// /**
	//  * Adding css by detecting devices
	//  * 
	//  */
	if ($isMob) {
		if ($isTab) {
			// echo 'Tablet';
		}
		else {
			if ($isIOS) {
				// echo 'iOS Mobile';
			} elseif ($isAndroid) {
				// echo 'ANDROID';
			}else{
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