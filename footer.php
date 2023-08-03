<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package TWS_Master_Pro
 */

?>

<?php if (wp_is_mobile()) :
		get_template_part('template-parts/mobile/global/footer', '');
else :
		get_template_part('template-parts/desktop/global/footer', '');
endif; ?>
<?php dynamic_sidebar( 'tws__before_footer' ); ?>
<footer class="grid grid-cols-12">
	<div class="col-span-4">
		<?php dynamic_sidebar( 'tws__widget_footer_col_1' ); ?>
	</div>
	<div class="col-span-4">
		<?php dynamic_sidebar( 'tws__widget_footer_col_2' ); ?>
	</div>
	<div class="col-span-4">
		<?php dynamic_sidebar( 'tws__widget_footer_col_3' ); ?>
	</div>
</footer>


	<!-- <footer id="colophon" class="site-footer">
		<div class="site-info">
			<a href="<?php // echo esc_url( __( 'https://wordpress.org/', 'tws-master-pro' ) ); ?>">
				<?php
				// /* translators: %s: CMS name, i.e. WordPress. */
				// printf( esc_html__( 'Proudly powered by %s', 'tws-master-pro' ), 'WordPress' );
				?>
			</a>
			<span class="sep"> | </span>
				<?php
				// /* translators: 1: Theme name, 2: Theme author. */
				// printf( esc_html__( 'Theme: %1$s by %2$s.', 'tws-master-pro' ), 'tws-master-pro', '<a href="https://asifulmamun.info">asifulmamun</a>' );
				?>
		</div>
	</footer> -->
	
</main>
<?php wp_footer(); ?>
</body>
</html>
