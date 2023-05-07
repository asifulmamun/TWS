<?php
/**
 * Template Name: Shop Home
 * Type: page
 * The template for Home Page of shop
 */

// Header file
get_header();
?>
<?php // class="pl-4"; // required for tailwind render ?>
<main id="main" class="w-full pl-56 pr-14 transition-all ease-in-out delay-150 duration-300">
<?php

	if(!wp_is_mobile()):
		get_template_part( 'template-parts/desktop/content', 'page-shop-home' ); // page content
	endif;
?>	
</main>


<?php
get_footer();
