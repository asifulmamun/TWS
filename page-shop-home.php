<?php
/**
 * Template Name: Shop Home
 * Type: page
 * The template for Home Page of shop
 */

// Header file
get_header();
?>
<?php

	if(wp_is_mobile()):
		get_template_part( 'template-parts/mobile/content', 'page-shop-home' ); // page content
	else:
		get_template_part( 'template-parts/desktop/content', 'page-shop-home' ); // page content
	endif;
?>

<?php
get_footer();
