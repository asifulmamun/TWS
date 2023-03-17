<?php

// WooCommerce setup function.
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





// WooCommerce specific scripts & stylesheets.
function tws_master_pro_woocommerce_scripts() {
    if(! wp_is_mobile()):
        wp_enqueue_style( 'woo', get_template_directory_uri() . '/assets/build/css/woo.css', array(), _S_VERSION );
        wp_enqueue_script( 'woo', get_template_directory_uri() . '/assets/build/js/woo.js', array(), null, true);   
    endif;
    // wp_localize_script( 'cart-qty-ajax-js', 'cart_qty_ajax', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );
        // wp_enqueue_script( 'cart-qty-ajax-js' );
        // $font_path   = WC()->plugin_url() . '/assets/fonts/';
        // $inline_font = '@font-face {
        // 		font-family: "star";
        // 		src: url("' . $font_path . 'star.eot");
        // 		src: url("' . $font_path . 'star.eot?#iefix") format("embedded-opentype"),
        // 			url("' . $font_path . 'star.woff") format("woff"),
        // 			url("' . $font_path . 'star.ttf") format("truetype"),
        // 			url("' . $font_path . 'star.svg#star") format("svg");
        // 		font-weight: normal;
        // 		font-style: normal;
        // 	}';

        // wp_add_inline_style( 'tws-master-pro-woocommerce-style', $inline_font );
}
add_action( 'wp_enqueue_scripts', 'tws_master_pro_woocommerce_scripts' );





// Disable the default WooCommerce stylesheet.
add_filter( 'woocommerce_enqueue_styles', '__return_empty_array' );





// Add 'woocommerce-active' class to the body tag.
function tws_master_pro_woocommerce_active_body_class( $classes ) {
	$classes[] = 'woocommerce-active';

	return $classes;
}
add_filter( 'body_class', 'tws_master_pro_woocommerce_active_body_class' );





// Related Products Args.
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





// mini cart - Cart Fragments.
if ( ! function_exists( 'tws_master_pro_woocommerce_cart_link_fragment' ) ) {
	function tws_master_pro_woocommerce_cart_link_fragment( $fragments ) {
			ob_start();
			tws_master_pro_woocommerce_cart_link();
			$fragments['div.cart-contents'] = ob_get_clean();
			return $fragments;
	}
}
add_filter( 'woocommerce_add_to_cart_fragments', 'tws_master_pro_woocommerce_cart_link_fragment' );
// Cart Link.
if ( ! function_exists( 'tws_master_pro_woocommerce_cart_link' ) ) {
	function tws_master_pro_woocommerce_cart_link() {
		?>
		<div class="cart-contents">
			<?php
                $item_count_text = sprintf(
                    _n( '%d item', '%d items', WC()->cart->get_cart_contents_count(), 'tws-master-pro' ),
                    WC()->cart->get_cart_contents_count()
                );
                ?>
			<span class="amount"><?php echo wp_kses_data( WC()->cart->get_cart_subtotal() ); ?></span> <span class="count"><?php echo esc_html( $item_count_text ); ?></span>
		</div>
		<?php
	}
}
// Cart Content and Widget
if ( ! function_exists( 'tws_master_pro_woocommerce_header_cart' ) ) {
	function tws_master_pro_woocommerce_header_cart() {
		// Only cart amount
		tws_master_pro_woocommerce_cart_link();
		
		// Mini cart widget
		the_widget('WC_Widget_Cart', array('title' => '',));
	}
}





// mini cart widget - custom actions
if (!class_exists('Tws__mini_custom_action')) {
    class Tws__mini_custom_action {

        function __construct() {
            // add_action('wp_footer', array($this, 'majc_menu'));
            // add_action('wp_enqueue_scripts', array($this, 'majc_register_frontend_assets'));

            // Change The Quantiy of the Woocommerce Product
			add_action('wp_ajax_change_item_qty', array($this, 'change_item_qty'));
			add_action('wp_ajax_nopriv_change_item_qty', array($this, 'change_item_qty'));

            add_action('wp_ajax_add_coupon_code', array($this, 'add_coupon_code'));
            add_action('wp_ajax_nopriv_add_coupon_code', array($this, 'add_coupon_code'));

            add_action('wp_ajax_remove_coupon_code', array($this, 'remove_coupon_code'));
            add_action('wp_ajax_nopriv_remove_coupon_code', array($this, 'remove_coupon_code'));

            // add_action('woocommerce_add_to_cart_redirect', array($this, 'prevent_add_to_cart_on_redirect'));
		} // _construct() method


		private function checkNonce() {
			if (isset($_POST['wp_nonce']) && wp_verify_nonce($_POST['wp_nonce'], 'tws-ajax-nonce')) {
				return 'true';
			} else {
				return 'false';
			}
		}


        function change_item_qty() {
            if ($this->checkNonce == 'false') {
                return false;
            }
            $c_key = isset($_REQUEST['ckey']) ? sanitize_text_field($_REQUEST['ckey']) : null;
            $qty = isset($_REQUEST['qty']) ? sanitize_text_field($_REQUEST['qty']) : null;
            WC()->cart->set_quantity($c_key, $qty, true);
            WC()->cart->set_session();
            die();
        }


        function wc_clear_notices() {
            WC()->session->set('wc_notices', array() ); 
            // WC()->session->set('wc_notices', null); 

        } // wc_clear_notices


        public function remove_coupon_code() {
            if ($this->checkNonce == 'false') {
                return false;
            }

            $couponCode = isset($_POST['coupon_code']) ? sanitize_text_field($_POST['coupon_code']) : null;

            if (WC()->cart->remove_coupon($couponCode)) {
                esc_html_e('Coupon Removed Successfully.', 'mini-ajax-cart');
            }

            WC()->cart->calculate_totals();
            WC()->cart->maybe_set_cart_cookies();
            WC()->cart->set_session();

            die();
        } // remove_coupon_code


        public function addCouponResponse($response) {
            header('Content-Type: application/json');
            echo json_encode($response);

            WC()->cart->calculate_totals();
            WC()->cart->maybe_set_cart_cookies();
            WC()->cart->set_session();
        } // addCouponResponse


        public function add_coupon_code() {
            if ($this->checkNonce == 'false') {
                return false;
            }

            $code = isset($_POST['coupon_code']) ? sanitize_text_field($_POST['coupon_code']) : null;
            $code = strtolower($code);

            /* Check if coupon code is empty */
            if (empty($code) || !isset($code)) {

                $response = array(
                    'result' => 'empty',
                    'msg' => esc_html__('Coupon Code Field is Empty!', 'mini-ajax-cart')
                );

                $this->addCouponResponse($response);

                exit();
            }

            /* Create an instance of WC_Coupon with our code */
            $coupon = new WC_Coupon($code);
            $applied_coupons = WC()->cart->get_applied_coupons();

            if (in_array($code, $applied_coupons)) {

                $response = array(
                    'result' => 'already applied',
                    'msg' => esc_html__('Coupon Code Already Applied.', 'mini-ajax-cart')
                );

                $this->addCouponResponse($response);
            } else if (!$coupon->is_valid()) {

                $response = array(
                    'result' => 'not valid',
                    'msg' => esc_html__('Invalid code entered. Please try again.', 'mini-ajax-cart')
                );

                $this->addCouponResponse($response);
            } else {

                WC()->cart->apply_coupon($code);

                $response = array(
                    'result' => 'success',
                    'msg' => esc_html__('Coupon Applied Successfully.', 'mini-ajax-cart')
                );

                $this->addCouponResponse($response);

                $this->wc_clear_notices();
            }
            die();
        } // add_coupon_code

    } // class Tws__mini_custom_action
    new Tws__mini_custom_action();
} // check exist - class Tws_mini_cart


