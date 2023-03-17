<?php
/**
 * Template Name: Shop Home
 * Type: page
 * The template for Home Page of shop
 */

// Header file
get_header();
?>

<div id="tws__page_with_aside">
<?php

	if(!wp_is_mobile()):
		get_template_part( 'template-parts/desktop/global/aside'); // aside
		get_template_part( 'template-parts/desktop/content', 'page-shop-home' ); // page content
	endif;
?>	
</div>


<?php
// get_sidebar();
get_footer();
