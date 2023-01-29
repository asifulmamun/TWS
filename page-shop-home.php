<?php
/**
 * Template Name: Shop Home
 * Type: page
 * The template for Home Page of shop
 * * @package TWS_Master_Pro
 */

	// Header file
	if ( get_page_template_slug() == 'page-shop-home.php' ) : get_header();endif;
?>


<div id="tws__page_with_aside">
    <aside id="aside" class="fixed left-0 bottom-0 overflow-x-hidden overflow-y-scroll">
		<div class="block text-center p-1 border m-1 font-medium"><?php echo (get_bloginfo('description', 'display') || is_customize_preview())? get_bloginfo('description', 'display'): null;?></div>
		<nav id="site-navigation" class="main-navigation">
			<?php
				wp_nav_menu(
					array(
						'theme_location' => 'primary-menu',
						'menu_id'        => 'primary_menu',
						'items_wrap'	 => '<ul id="%1$s" class="%2$s">%3$s</ul>',
					)
				);
			?>
		</nav>
		<ul>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
			<li>lkfdjlfj</li>
		</ul>
    </aside>
    <main id="main" class="w-full">

		<ul>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
			<li>Shop</li>
		</ul>
    </main>
</div>

	<div id="primary" class="site-main">

		<?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', 'page-shop-home' );

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

		endwhile; // End of the loop.
		?>

	</div><!-- #main -->

<?php
// get_sidebar();
get_footer();
