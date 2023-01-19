<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<!-- remove after developed -->
	<script src="/tailwindcss.js"></script>


	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>

	<!-- Header -->
	<header class="relative grid grid-cols-10 py-1">
		<!-- Left Bar start -->
		<div class="col-span-2 flex tws__site_branding">
			<button class="border p-1 ml-2">
				<svg class="h-5 w-5" viewBox="0 0 20 20">
					<title>Menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
			<h1 class="tws__site_title">
				<?php
					// the_custom_logo();
					if (is_front_page() && is_home()) :
				?>
					<a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a>
				<?php else:?>
			
					<a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a>
				<?php endif;?>
			</h1>
		</div>
		<!-- Left Bar end -->
		<!-- Middle Bar start -->
		<div class="col-span-4">
			<div class="relative rounded-md tws__search_box">
				<div class="absolute inset-y-0 left-2 flex items-center tws__search_box_logo">
					<?php 
						// The Custom Logo
						if ( has_custom_logo() ) {
							echo '<img src="' 	. wp_get_attachment_image_src( get_theme_mod( 'custom_logo' ) , '200, 200' )[0]  . '" alt="' . get_bloginfo( 'description' ) . '">';
						} else {
							echo get_bloginfo('name');
						}
						// Thu Custom Logo
					?>
				</div>
				<input id="search" type="search" class="block pr-10 rounded w-full py-2 px-4" placeholder="সার্চ করুন (স্কুল ব্যাগ, বড় বাগ)" />
				<button type="submit" class="absolute inset-y-0 right-3 flex items-center">
					<svg width="35" height="35" viewBox="0 0 35 35" fill="none"><path d="M30.1985 22.581L25.1929 17.5755C24.967 17.3496 24.6608 17.2241 24.3395 17.2241H23.5211C24.9068 15.4518 25.7302 13.2227 25.7302 10.7978C25.7302 5.02916 21.056 0.355011 15.2874 0.355011C9.51875 0.355011 4.8446 5.02916 4.8446 10.7978C4.8446 16.5664 9.51875 21.2406 15.2874 21.2406C17.7123 21.2406 19.9414 20.4172 21.7137 19.0315V19.8499C21.7137 20.1712 21.8392 20.4774 22.0651 20.7034L27.0706 25.7089C27.5426 26.1808 28.3057 26.1808 28.7726 25.7089L30.1934 24.288C30.6654 23.8161 30.6654 23.053 30.1985 22.581ZM15.2874 17.2241C11.7378 17.2241 8.86106 14.3523 8.86106 10.7978C8.86106 7.24825 11.7328 4.37146 15.2874 4.37146C18.8369 4.37146 21.7137 7.24322 21.7137 10.7978C21.7137 14.3473 18.8419 17.2241 15.2874 17.2241Z"/></svg>
				</button>
			</div>
		</div>
		<!-- Middle Bar end -->
		<!-- Right bar start -->
		<div class="col-span-4 grid grid-cols-6 tws__right_bar">
			<div class="col-span-4 flex">
				<?php wp_nav_menu(array('theme_location' => 'quick-menu', 'menu_id' => 'quick-menu')); // Quick menu print ?>
			</div>
			<div class="col-span-2 absolute inset-y-0 right-0 flex items-center px-3.5 tws__single_menu">
				<?php if(is_user_logged_in()):?>
					<a href="/dashboard">কার্ট</a>
				<?php else: ?>
					<a href="/dashboard"><svg width="29" height="33" viewBox="0 0 29 33" fill="none"><path d="M14.3824 12.5C17.5387 12.5 20.0967 9.81406 20.0967 6.5C20.0967 3.18594 17.5387 0.5 14.3824 0.5C11.2262 0.5 8.66816 3.18594 8.66816 6.5C8.66816 9.81406 11.2262 12.5 14.3824 12.5ZM18.3824 14H17.6369C16.6458 14.4781 15.5432 14.75 14.3824 14.75C13.2217 14.75 12.1235 14.4781 11.128 14H10.3824C7.06995 14 4.38245 16.8219 4.38245 20.3V22.25C4.38245 23.4922 5.34227 24.5 6.5253 24.5H22.2396C23.4226 24.5 24.3824 23.4922 24.3824 22.25V20.3C24.3824 16.8219 21.6949 14 18.3824 14Z"/></svg>&nbsp;<span>লগইন</span></a>
				<?php endif; ?>
			</div>
		</div>
		<!-- Right bar end -->
	</header>
	<!-- Header -->

	


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
			// wp_nav_menu(
			// 	array(
			// 		'theme_location' => 'menu-1',
			// 		'menu_id'        => 'primary-menu',
			// 	)
			// );
			?>
		</nav>
		</header> -->


		
