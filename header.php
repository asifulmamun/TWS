<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>

	<div class="grid grid-cols-12">
		<div class="col-span-3">
			<?php
				// the_custom_logo();
				if (is_front_page() && is_home()) :
			?>
				<h1>
					<a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a>
				</h1>
			<?php
				else:
			?>
				<a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a>
			<?php
				endif;
			?>
		</div>

		<div class="col-span-4">
				four
		</div>

		<div class="col-span-3">
				three
		</div>

		<div class="col-span-2">
				two
		</div>
	</div>




	<div id="page" class="site">
		<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'tws-master-pro'); ?></a>
		<!-- <header id="masthead" class="site-header">
			<div class="site-branding">
				<?php
				the_custom_logo();
				
				$tws_master_pro_description = get_bloginfo('description', 'display');
				if ($tws_master_pro_description || is_customize_preview()) :
				?>
					<p class="site-description"><?php echo $tws_master_pro_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped 
												?></p>
				<?php endif; ?>
			</div><!-- .site-branding -->

			<nav id="site-navigation" class="main-navigation">
				<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="true"><?php esc_html_e('Primary Menu', 'tws-master-pro'); ?></button>
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'menu-1',
						'menu_id'        => 'primary-menu',
					)
				);
				?>
			</nav>
		</header> -->
