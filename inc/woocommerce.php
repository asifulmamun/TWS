<?php
/**
 * WooCommerce Compatibility File
 *
 * @link https://woocommerce.com/
 *
 * @package TWS_Master_Pro
 */

/**
 * WooCommerce setup function.
 *
 * @link https://docs.woocommerce.com/document/third-party-custom-theme-compatibility/
 * @link https://github.com/woocommerce/woocommerce/wiki/Enabling-product-gallery-features-(zoom,-swipe,-lightbox)
 * @link https://github.com/woocommerce/woocommerce/wiki/Declaring-WooCommerce-support-in-themes
 *
 * @return void
 */
function tws_master_pro_woocommerce_setup() {
	add_theme_support(
		'woocommerce',
		array(
			'thumbnail_image_width' => 150,
			'single_image_width'    => 300,
			'product_grid'          => array(
				'default_rows'    => 3,
				'min_rows'        => 1,
				'default_columns' => 4,
				'min_columns'     => 1,
				'max_columns'     => 6,
			),
		)
	);
	add_theme_support( 'wc-product-gallery-zoom' );
	add_theme_support( 'wc-product-gallery-lightbox' );
	add_theme_support( 'wc-product-gallery-slider' );
}
add_action( 'after_setup_theme', 'tws_master_pro_woocommerce_setup' );

/**
 * WooCommerce specific scripts & stylesheets.
 *
 * @return void
 */
function tws_master_pro_woocommerce_scripts() {
	wp_enqueue_style( 'tws-master-pro-woocommerce-style', get_template_directory_uri() . '/assets/build/css/woo.css', array(), _S_VERSION );

	$font_path   = WC()->plugin_url() . '/assets/fonts/';
	$inline_font = '@font-face {
			font-family: "star";
			src: url("' . $font_path . 'star.eot");
			src: url("' . $font_path . 'star.eot?#iefix") format("embedded-opentype"),
				url("' . $font_path . 'star.woff") format("woff"),
				url("' . $font_path . 'star.ttf") format("truetype"),
				url("' . $font_path . 'star.svg#star") format("svg");
			font-weight: normal;
			font-style: normal;
		}';

	wp_add_inline_style( 'tws-master-pro-woocommerce-style', $inline_font );
}
add_action( 'wp_enqueue_scripts', 'tws_master_pro_woocommerce_scripts' );

/**
 * Disable the default WooCommerce stylesheet.
 *
 * Removing the default WooCommerce stylesheet and enqueing your own will
 * protect you during WooCommerce core updates.
 *
 * @link https://docs.woocommerce.com/document/disable-the-default-stylesheet/
 */
add_filter( 'woocommerce_enqueue_styles', '__return_empty_array' );

/**
 * Add 'woocommerce-active' class to the body tag.
 *
 * @param  array $classes CSS classes applied to the body tag.
 * @return array $classes modified to include 'woocommerce-active' class.
 */
function tws_master_pro_woocommerce_active_body_class( $classes ) {
	$classes[] = 'woocommerce-active';

	return $classes;
}
add_filter( 'body_class', 'tws_master_pro_woocommerce_active_body_class' );

/**
 * Related Products Args.
 *
 * @param array $args related products args.
 * @return array $args related products args.
 */
function tws_master_pro_woocommerce_related_products_args( $args ) {
	$defaults = array(
		'posts_per_page' => 3,
		'columns'        => 3,
	);

	$args = wp_parse_args( $defaults, $args );

	return $args;
}
add_filter( 'woocommerce_output_related_products_args', 'tws_master_pro_woocommerce_related_products_args' );

/**
 * Remove default WooCommerce wrapper.
 */
// remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10 );
// remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10 );

// if ( ! function_exists( 'tws_master_pro_woocommerce_wrapper_before' ) ) {
// 	/**
// 	 * Before Content.
// 	 *
// 	 * Wraps all WooCommerce content in wrappers which match the theme markup.
// 	 *
// 	 * @return void
// 	 */
// 	function tws_master_pro_woocommerce_wrapper_before() {
?>
<?php
// 	}
// }
// add_action( 'woocommerce_before_main_content', 'tws_master_pro_woocommerce_wrapper_before' );

// if ( ! function_exists( 'tws_master_pro_woocommerce_wrapper_after' ) ) {
// 	/**
// 	 * After Content.
// 	 *
// 	 * Closes the wrapping divs.
// 	 *
// 	 * @return void
// 	 */
// 	function tws_master_pro_woocommerce_wrapper_after() {
?>
<?php
// 	}
// }
// add_action( 'woocommerce_after_main_content', 'tws_master_pro_woocommerce_wrapper_after' );







/**
 * Override loop template and show quantities next to add to cart buttons
 */
// add_filter( 'woocommerce_loop_add_to_cart_link', 'quantity_inputs_for_woocommerce_loop_add_to_cart_link', 10, 2 );
// function quantity_inputs_for_woocommerce_loop_add_to_cart_link( $html, $product ) {
// 	if ( $product && $product->is_type( 'simple' ) && $product->is_purchasable() && $product->is_in_stock() && ! $product->is_sold_individually() ) {
// 		$html = '<form action="' . esc_url( $product->add_to_cart_url() ) . '" class="cart" method="post" enctype="multipart/form-data">';
// 		$html .= woocommerce_quantity_input( array(), $product, false );
// 		$html .= '<button type="submit" class="button alt">' . esc_html( $product->add_to_cart_text() ) . '</button>';
// 		$html .= '</form>';
// 	}
// 	return $html;
// }



/**
 * Ajax for Add to Cart Button
 */

// Remove old button which submiting form:
// remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30 );

// Add ajax-link from archive page to single product page:
// add_action( 'woocommerce_single_product_summary', 'woocommerce_template_loop_add_to_cart', 30 );
