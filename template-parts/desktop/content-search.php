<?php
/**
 * Template part for displaying results in search pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package TWS_Master_Pro
 */

?>
<?php dynamic_sidebar( 'tws__header_widget_non_front_after_bredcrumb' ); ?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	
	<span><?php tws_master_pro_post_thumbnail(); ?></span>
	<span>
		<?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>
	</span>
</article><!-- #post-<?php the_ID(); ?> -->
