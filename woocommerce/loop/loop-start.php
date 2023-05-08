<?php
/**
 * Product Loop Start
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/loop/loop-start.php.
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
if(wp_is_mobile()): // mobile
	
	echo '<ul id="tws__products_ul" class="products grid grid-cols-2 gap-3 tws__products_ul">';

else: // desktop
	echo '<ul id="tws__products_ul" class="products grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 gap-3 tws__products_ul">';
endif;

?>