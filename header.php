<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php if(wp_is_mobile()): ?>
	<meta name="device" id="device-meta" content="Mobile">
	<?php else: ?>
	<meta name="device" id="device-meta" content="Desktop">
	<?php endif; ?>
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<script>const tws__site_root = "<?php echo get_template_directory_uri(); ?>";</script>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php //wp_body_open(); 
	?>
	<?php
	if (wp_is_mobile()) :
		get_template_part('template-parts/mobile/global/header', 'nav');
	else :
		get_template_part('template-parts/desktop/global/header', 'nav');
	endif;
	?>
<main id="main" class="w-full pl-4 md:pl-56 pr-4 md:pr-14 transition-all ease-in-out delay-150 duration-300">
	<?php if(!is_front_page() || is_home()):
		dynamic_sidebar( 'tws__front_pg_header' ); // if only home/front page then the widget will show
	endif; ?>
	<?php dynamic_sidebar( 'tws__header_widget' ); ?>