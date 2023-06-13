<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package TWS_Master_Pro
 */

get_header();
?>
<main id="main" class="w-full pl-4 md:pl-56 pr-4 md:pr-14 transition-all ease-in-out delay-150 duration-300">
	<?php

		if(wp_is_mobile()):
			get_template_part( 'template-parts/mobile/content', 'page' ); // page content
		else:
			get_template_part( 'template-parts/desktop/content', 'page' ); // page content
		endif;
	?>	
</main>

<?php
// get_sidebar();
get_footer();
