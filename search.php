<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package TWS_Master_Pro
 */

get_header();
?>

<form class="tws__inner_search" action="">
	<input name="s" value="<?php printf( esc_html__( '%s', 'tws-master-pro' ), get_search_query() ); ?>" />
	<input type="submit" value="Search" class="tws__btn_padding tws__color_set_darklight tws__color_set_darklight_hover" />
</form>

<header class="page-header">
	<h1 class="page-title">
	<?php
	/* translators: %s: search query. */
	printf( esc_html__( 'Search Results for: %s', 'tws-master-pro' ), '<span>' . get_search_query() . '</span>' );
	?>
	</h1>
</header><!-- .page-header -->

<?php
	if ( have_posts() ) :
		while ( have_posts() ) :
			the_post();
			if(wp_is_mobile()):
				get_template_part( 'template-parts/mobile/content', 'search' );
			
			else:
				get_template_part( 'template-parts/desktop/content', 'search' );
			
			endif;
		endwhile;
		the_posts_navigation();
	
	
	else :
		get_template_part( 'template-parts/content', 'none' );
	endif;
?>	

<?php
// get_sidebar();
get_footer();
