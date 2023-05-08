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