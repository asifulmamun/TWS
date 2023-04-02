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

<?php if(!wp_is_mobile()): ?>
<span class="fixed bottom-0 right-20 z-50">
	<div class="tws__chat relative grid content-center h-10 hover:h-11 rounded-t-lg">
		<a class="px-8 text-lg" href="#">Live Chat</a>

	</div>

	<span class="absolute top-0 right-0 flex h-3 w-3 -mt-1 -mr-1">
		<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
		<span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
	</span>
</span>
<?php endif; ?>

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

	<div id="push_notify" class="fixed left-1/2 transform -translate-x-1/2 bottom-0 z-20 px-3 py-2 hidden">Notification</div>
<?php wp_footer(); ?>
</body>
</html>
