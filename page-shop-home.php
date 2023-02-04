<?php
/**
 * Template Name: Shop Home
 * Type: page
 * The template for Home Page of shop
 * * @package TWS_Master_Pro
 */

	// Header file
	get_header();
?>


<div id="tws__page_with_aside">
	<?php get_template_part( 'template-parts/desktop/global/aside'); // aside ?>
	<?php get_template_part( 'template-parts/desktop/content', 'page-shop-home' ); // page content?>
</div>


<?php
// get_sidebar();
get_footer();
