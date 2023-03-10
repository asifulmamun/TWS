<?php
/**
 * Loop Add to Cart
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/loop/add-to-cart.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://docs.woocommerce.com/document/template-structure/
 * @package     WooCommerce\Templates
 * @version     3.3.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $product;

echo apply_filters(
	'woocommerce_loop_add_to_cart_link', // WPCS: XSS ok.
	sprintf(
		'<a href="%s" data-quantity="%s" class="%s" %s>%s</a>',
		esc_url( $product->add_to_cart_url() ),
		esc_attr( isset( $args['quantity'] ) ? $args['quantity'] : 1 ),
		esc_attr( isset( $args['class'] ) ? $args['class'] : 'button' ),
		isset( $args['attributes'] ) ? wc_implode_html_attributes( $args['attributes'] ) : '',
		esc_html( $product->add_to_cart_text() )
	),
	$product,
	$args
);


// echo '<div id="tws__add_to_cart_wrapper_' . $product->get_id() . '">
// <a id="tws__cart_loop_increment_' . $product->get_id() . '" href="?add-to-cart=' . $product->get_id() . '" data-quantity="1" class="add_to_cart_button ajax_add_to_cart border py-1 px-2" data-product_id="' . $product->get_id() . '" rel="nofollow">+</a>
// <div id="tws__cart_loop_counter_'. $product->get_id() .'">1</div>
// <button id="tws__cart_loop_decrement_'. $product->get_id() .'" class="border py-1 px-2">-</button>
// </div>';