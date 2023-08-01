<?php
/**
 * TWS Master Pro functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package TWS_Master_Pro
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}


/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function tws_master_pro_setup() {
	/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on TWS Master Pro, use a find and replace
		* to change 'tws-master-pro' to the name of your theme in all the template files.
		*/
	load_theme_textdomain( 'tws-master-pro', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	add_theme_support( 'title-tag' );

	/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'primary-menu' => esc_html__( 'Primary Menu', 'tws-master-pro' ),
		)
	);

	// Quick Menu
	register_nav_menus(
		array(
			'quick-menu' => esc_html__( 'Quick Menu', 'tws-master-pro' ),
		)
	);

	// Quick Access Menu in aside
	register_nav_menus(
		array(
			'quick-access-menu' => esc_html__( 'Quick Access Menu - aside footer', 'tws-master-pro' ),
		)
	);

	/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
	// add_theme_support(
	// 	'html5',
	// 	array(
	// 		'search-form',
	// 		'comment-form',
	// 		'comment-list',
	// 		'gallery',
	// 		'caption',
	// 		'style',
	// 		'script',
	// 	)
	// );

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'tws_master_pro_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	// add_theme_support( 'customize-selective-refresh-widgets' );

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
			'unlink-homepage-logo' => true,
		)
	);
}
add_action( 'after_setup_theme', 'tws_master_pro_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function tws_master_pro_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'tws_master_pro_content_width', 640 );
}
add_action( 'after_setup_theme', 'tws_master_pro_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
// function tws_master_pro_widgets_init() {
// 	register_sidebar(
// 		array(
// 			'name'          => esc_html__( 'Sidebar', 'tws-master-pro' ),
// 			'id'            => 'sidebar-1',
// 			'description'   => esc_html__( 'Add widgets here.', 'tws-master-pro' ),
// 			'before_widget' => '<section id="%1$s" class="widget %2$s">',
// 			'after_widget'  => '</section>',
// 			'before_title'  => '<h2 class="widget-title">',
// 			'after_title'   => '</h2>',
// 		)
// 	);
// }
// add_action( 'widgets_init', 'tws_master_pro_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function tws_master_pro_scripts() {

	if(wp_is_mobile()): // mobile
		wp_enqueue_style( 'app_mobile', get_stylesheet_directory_uri(). '/assets/build/css/app_mobile.css',  array(), null, 'all' );
		wp_enqueue_script( 'app_mobile', get_template_directory_uri() . '/assets/build/js/app_mobile.js', array(), null, true);
		

		if(!is_front_page() || is_home()):
			wp_enqueue_style( 'all_excld_homeshop_mobile', get_stylesheet_directory_uri(). '/assets/build/css/all_excld_homeshop_mobile.css',  array(), null, 'all' );
			wp_enqueue_script( 'all_excld_homeshop_mobile', get_template_directory_uri() . '/assets/build/js/all_excld_homeshop_mobile.js', array(), null, true);
		endif; // is_front_page - mobile
		
		
	else: // desktop
		wp_enqueue_style( 'app_desktop', get_stylesheet_directory_uri(). '/assets/build/css/app_desktop.css',  array(), null, 'all' );
		wp_enqueue_script( 'app_desktop', get_template_directory_uri() . '/assets/build/js/app_desktop.js', array(), null, true);
	
		if(!is_front_page() || is_home()):
			wp_enqueue_style( 'all_excld_homeshop_desktop', get_stylesheet_directory_uri(). '/assets/build/css/all_excld_homeshop_desktop.css',  array(), null, 'all' );
			wp_enqueue_script( 'all_excld_homeshop_desktop', get_template_directory_uri() . '/assets/build/js/all_excld_homeshop_desktop.js', array(), null, true);
		endif; // is_front_page - desktop

	endif;





	
	// comments
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'tws_master_pro_scripts' );

/**
 * Implement the Custom Header feature.
 */
// require get_template_directory() . '/inc/custom-header.php';
/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
// require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
// require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
// if ( defined( 'JETPACK__VERSION' ) ) {
// 	require get_template_directory() . '/inc/jetpack.php';
// }

/**
 * Load WooCommerce compatibility file.
 */
if ( class_exists( 'WooCommerce' ) ) {
	require get_template_directory() . '/inc/woocommerce.php';
}
