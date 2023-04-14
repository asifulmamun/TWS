<?php

/**
 * Mini-cart
 *
 * Contains the markup for the mini-cart, used by the cart widget.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/cart/mini-cart.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 5.2.0
 */

defined('ABSPATH') || exit;

do_action('woocommerce_before_mini_cart');

$cart = WC()->cart;
?>

<?php if (!$cart->is_empty()) : ?>
	<div class="tws__shipping_charge grid grid-cols-10">
		<div class="col-span-10"  id="tws__mini_cart_only_countsUpload"><?php $item_count_text = sprintf(_n( '%d item', '%d items', count($cart->get_cart()), 'tws-master-pro' ), count($cart->get_cart())); echo esc_html( $item_count_text ); ?></div>
		<span class="col-span-7" id="tws__mini_cart_header_shipping_charge"></span>
		<button class="col-span-3" id="tws__mini_cart_top_close_btn" type="button">Close</button>
	</div>
	
	<ul id="tws__mini_cart_ul" class="woocommerce-mini-cart cart_list product_list_widget <?php echo esc_attr($args['list_class']); ?>">
		<?php
			do_action('woocommerce_before_mini_cart_contents');
			
			foreach ($cart->get_cart() as $cart_item_key => $cart_item) {
				$_product   = apply_filters('woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key);
				$product_id = apply_filters('woocommerce_cart_item_product_id', $cart_item['product_id'], $cart_item, $cart_item_key);
				if ($_product && $_product->exists() && $cart_item['quantity'] > 0 && apply_filters('woocommerce_widget_cart_item_visible', true, $cart_item, $cart_item_key)) {
					$product_name      		= apply_filters('woocommerce_cart_item_name', $_product->get_name(), $cart_item, $cart_item_key);
					$thumbnail         		= apply_filters('woocommerce_cart_item_thumbnail', $_product->get_image(), $cart_item, $cart_item_key);
					$product_regular_price 	= apply_filters('woocommerce_cart_item_price', $cart->get_cart()[$cart_item_key]['data']->regular_price, $cart_item, $cart_item_key);
					$product_price     		= apply_filters('woocommerce_cart_item_price', $cart->get_cart()[$cart_item_key]['data']->price, $cart_item, $cart_item_key);
					$tws__product_price     = apply_filters( 'woocommerce_cart_item_price', $cart->get_product_price( $_product ), $cart_item, $cart_item_key );
					$product_weight     	= apply_filters('woocommerce_cart_item_price', $cart->get_cart()[$cart_item_key]['data']->weight, $cart_item, $cart_item_key);
					$product_permalink 		= apply_filters('woocommerce_cart_item_permalink', $_product->is_visible() ? $_product->get_permalink($cart_item) : '', $cart_item, $cart_item_key);
					?>
					<li id="tws__mini_cart_li_<?php echo $product_id;?>" data-product_id="<?php echo $product_id;?>" class="grid grid-cols-10 items-center justify-items-center py-3 border-b woocommerce-mini-cart-item <?php echo esc_attr(apply_filters('woocommerce_mini_cart_item_class', 'mini_cart_item', $cart_item, $cart_item_key)); ?>">
						<div class="tws__mini_cart_update col-span-1 grid justify-items-center">
							<a id="tws__mini_increment_<?php echo $product_id;?>" href="?add-to-cart=<?php echo $product_id;?>" data-quantity="1" class="add_to_cart_button ajax_add_to_cart" data-product_id="<?php echo $product_id;?>" rel="nofollow" style="-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-ms-transform:rotate(-90deg);-o-transform:rotate(-90deg);transform:rotate(-90deg);">›</a>
							<span id="tws__mini_cart_quantity_<?php echo $product_id;?>"><?php echo $cart_item['quantity']; ?></span>
							<button id="tws__mini_decrement_<?php echo $product_id;?>" data-cart_item_key="<?php echo $cart_item_key; ?>" style="-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg);">›</button>
						</div>

						<div class="tws__mini_cart_img_wrapper col-span-2 grid content-center justify-center">
							<?php if (empty($product_permalink)) : ?>
								<?php echo $thumbnail . wp_kses_post($product_name); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped 
								?>
							<?php else : ?>
								<a class="" target="_blank" href="<?php echo esc_url($product_permalink); ?>">
									<?php echo $thumbnail; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped 
									?>
								</a>
							<?php endif; ?>
						</div>

						<div class="details col-span-4">
							<?php
							
								// Product Name
								echo wp_kses_post($product_name);
							
								// Product Price
								echo '<br/><span>' . $tws__product_price . '</span>';
								if(!empty($product_weight)):
									echo '&nbsp;/&nbsp;' . $product_weight . ' ' . get_option('woocommerce_weight_unit');
								endif;
								?>
						</div>
						
						<div class="tws__mini_cart_amount col-span-2">
							<?php
								// Product Price
								echo '<span id="tws__mini_cart_price_' . $product_id .'">' . $product_price*$cart_item['quantity'] . '</span>';

								// if has sale price then show the regular price as deleted
								if($product_price != $product_regular_price):
									echo '<br/><span id="tws__mini_cart_regular_price_' . $product_id .'"><del>' . $product_regular_price*$cart_item['quantity'] . '</del></span>';
								endif;
							?>
						</div>
						
						<div class="tws__mini_cart_remove col-span-1">
							<?php
								// Remove Button
								echo apply_filters( // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
									'woocommerce_cart_item_remove_link',
									sprintf(
										'<a href="%s" class="remove remove_from_cart_button" aria-label="%s" id="tws__mini_cart_remove_%s" data-product_id="%s" data-cart_item_key="%s" data-product_sku="%s">&times;</a>',
										esc_url(wc_get_cart_remove_url($cart_item_key)),
										esc_attr__('Remove this item', 'woocommerce'),
										esc_attr($product_id),
										esc_attr($product_id),
										esc_attr($cart_item_key),
										esc_attr($_product->get_sku())
									),
									$cart_item_key
								);
								?>
						</div>
					</li>
					<?php
				} // if
			} // foreach product li

			do_action('woocommerce_mini_cart_contents');
		?>
		<li class="grid grid-cols-10 items-center justify-items-center py-3 border-b">
			<label class="col-span-7"><?php echo esc_html__('Subtotal:', 'mini-ajax-cart'); ?></label>
			<span class="col-span-2" id="odometerUpload"><?php echo number_format($cart->subtotal, 0); ?></span>
			<span class="col-span-1" id="tws__mini_li_subtotal_currency_icon"><?php echo get_woocommerce_currency_symbol(); ?></span>
		</li>
		<li class="grid grid-cols-10 items-center justify-items-center py-3 border-b">
			<label class="col-span-7"><?php echo esc_html__('Shipping:', 'mini-ajax-cart'); ?></label>
			<span class="col-span-2" id="shippingUpload"><?php echo ($cart->get_totals()['shipping_total'] > 0) ? number_format($cart->shipping_total, 0) : '<i class="text-red-500">Free</i>'; ?></span>
			<span class="col-span-1"><?php echo get_woocommerce_currency_symbol(); ?></span>
		</li>
		<?php if ($cart->get_totals()['discount_total'] > 0): // if discount exisst then print ?>
		<li class="grid grid-cols-10 items-center justify-items-center py-3 border-b">
			<label class="col-span-7"><?php echo esc_html__('Discount: (-)', 'mini-ajax-cart'); ?></label>
			<span class="col-span-2 text-red-600" id="discountUpload"><?php echo number_format($cart->get_totals()['discount_total'], 0); ?></span>
			<span class="col-span-1"><?php echo get_woocommerce_currency_symbol(); ?></span>
		</li>
		<?php endif;?>
		<li class="grid grid-cols-10 items-center justify-items-center py-3 border-b font-bold">
			<label class="col-span-7"><?php echo esc_html__('Total:', 'mini-ajax-cart'); ?></label>
			<span class="col-span-2"><?php echo number_format($cart->total, 0); ?></span>
			<span class="col-span-1"><?php echo get_woocommerce_currency_symbol(); ?></span>
		</li>
	</ul>






<div class="tws__final group fixed bottom-0 w-full pb-10">
	<div id="tws__coupon_code_response" style="display:block;"></div>
	<button id="tws__has_coupon_code" class="py-1 w-full mx-auto outline-none transition-all ease-in-out delay-150 duration-300"><i id="tws__has_coupon_code_icon"></i>&nbsp;Have a coupon?</button>
	<div id="tws__coupon_code_wrap" class="relative transition-all ease-in-out delay-150 duration-300" style="display:none;">
		<div id="tws__coupon_form_wrap" class="py-3 text-center">
			<input type="text" id="tws__coupon_input" class="px-2 py-1 rounded focus:outline-none" placeholder="Coupon Code" />
			<button type="button" id="tws__coupon_submit" class="px-2 py-1 transition-all ease-in-out delay-150 duration-300">Apply<?php //echo esc_html($apply_coupon_btn_text); ?></button>
			<button id="tws__coupon_wrap_close" class="px-2 py-1 transition-all ease-in-out delay-150 duration-300">x</button>
		</div>
		
		<?php
			$applied_coupons = $cart->get_applied_coupons();

			if (!empty($applied_coupons)):
				?>
				<ul class="px-1 py-1.5" id="tws__coupon_list_ul">
					<?php foreach ($applied_coupons as $cpns): ?>    
						<li class="group relative inline-block px-2 py-1" id="tws__coupon_list_li_<?php echo esc_attr($cpns); ?>" data-cpcode="<?php echo esc_attr($cpns); ?>">
							<?php echo esc_html($cpns); ?><button type="button" class="absolute bottom-3.5 right-px mx-0.5 px-1 py-px text-sm border outline-none group-hover:inline-block hidden" id="tws__coupon_remove_<?php echo esc_attr($cpns); ?>">x</button>
						</li>
					<?php endforeach; ?>
				</ul>
				<?php
			endif;
		?>
	</div>

	<div class="tws__mini_calculated tws__text_xxs group-hover:text-xs opacity-50 group-hover:opacity-80 group-hover:py-2 px-px text-center transition-all ease-in-out delay-150 duration-300">
		<span id="tws__mini_cart_calculate_subtotal"></span>
		<span id="tws__mini_cart_calculate_shipping"></span>
		<span id="tws__mini_cart_calculate_discount"></span>
	</div>
	<a class="tws__trans_hover_btn text-center hidden group-hover:block opacity-50 group-hover:opacity-100 w-min my-2 mx-auto py-2 px-6 bg-red-500 text-white transition-all ease-in-out delay-150 duration-300" href="<?php echo wc_get_cart_url(); ?>">Cart</a>
	
	<div class="tws__mini_cart_checkout_wrap relative grid grid-cols-10 px-3 pb-2">
		<a class="col-span-5 py-2 text-center font-bold transition-all ease-in-out delay-150 duration-300" href="<?php echo wc_get_checkout_url(); ?>">Checkout</a>
		<span class="tws__mini_cart_total_amount col-span-5 py-2 text-center"><?php echo 'Total ' . get_woocommerce_currency_symbol() . number_format($cart->total, 2); ?></span>
	</div>
</div>


<?php else : ?>
	<p class="woocommerce-mini-cart__empty-message"><?php esc_html_e('No products in the cart.', 'woocommerce'); ?></p>
<?php endif; ?>



<?php
// $items = $cart->get_cart();
// foreach ($items as $itemKey => $itemVal) {
// 	$product = wc_get_product($itemVal['data']->get_id());
// 	$product_id = apply_filters('woocommerce_cart_item_product_id', $itemVal['product_id'], $itemVal, $itemKey);
// 	$getProductDetail = wc_get_product($itemVal['product_id']);

// 	echo '<pre>';
// 		var_dump($itemVal['data']);

// 	echo '</pre>';

// }

// echo '<pre>';
// var_dump($cart->get_totals());
// echo '</pre>';

?>

<br><br><br><br><br><br><br><br><br><br><br><br>
<?php
	// including js
	echo '<script>';
		echo 'var frontend_ajax_object = {';
			echo 'ajaxurl: "'. admin_url('admin-ajax.php'). '",
			ajaxnonce: "'. wp_create_nonce('tws-ajax-nonce'). '"';
		echo '};';
		echo '</script>';

	echo '<script src="' . get_template_directory_uri() . '/assets/build/js/mini_cart.js" id="mini_cart-js"></script>' ;
?>