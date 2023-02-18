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


?>

<?php if (!WC()->cart->is_empty()) : ?>

	<ul id="tws__mini_cart_ul" class="woocommerce-mini-cart cart_list product_list_widget <?php echo esc_attr($args['list_class']); ?>">
		<?php
		do_action('woocommerce_before_mini_cart_contents');

		foreach (WC()->cart->get_cart() as $cart_item_key => $cart_item) {
			$_product   = apply_filters('woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key);
			$product_id = apply_filters('woocommerce_cart_item_product_id', $cart_item['product_id'], $cart_item, $cart_item_key);

			if ($_product && $_product->exists() && $cart_item['quantity'] > 0 && apply_filters('woocommerce_widget_cart_item_visible', true, $cart_item, $cart_item_key)) {
				$product_name      		= apply_filters('woocommerce_cart_item_name', $_product->get_name(), $cart_item, $cart_item_key);
				$thumbnail         		= apply_filters('woocommerce_cart_item_thumbnail', $_product->get_image(), $cart_item, $cart_item_key);
				$product_regular_price 	= apply_filters('woocommerce_cart_item_price', WC()->cart->get_cart()[$cart_item_key]['data']->regular_price, $cart_item, $cart_item_key);
				$product_price     		= apply_filters('woocommerce_cart_item_price', WC()->cart->get_cart()[$cart_item_key]['data']->price, $cart_item, $cart_item_key);
				$product_permalink 		= apply_filters('woocommerce_cart_item_permalink', $_product->is_visible() ? $_product->get_permalink($cart_item) : '', $cart_item, $cart_item_key);
		?>


				<li id="tws__mini_cart_li_<?php echo $product_id;?>" data-product_id="<?php echo $product_id;?>" class="woocommerce-mini-cart-item <?php echo esc_attr(apply_filters('woocommerce_mini_cart_item_class', 'mini_cart_item', $cart_item, $cart_item_key)); ?>">
					
					<div class="tws__mini_cart_update">
						<a id="tws__mini_increment_<?php echo $product_id;?>" href="?add-to-cart=<?php echo $product_id;?>" data-quantity="1" class="add_to_cart_button ajax_add_to_cart" data-product_id="<?php echo $product_id;?>" rel="nofollow" style="-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-ms-transform:rotate(-90deg);-o-transform:rotate(-90deg);transform:rotate(-90deg);">›</a>
						
						<span id="tws__mini_cart_quantity_<?php echo $product_id;?>"><?php echo $cart_item['quantity']; ?></span>
						
						<button id="tws__mini_decrement_<?php echo $product_id;?>" data-cart_item_key="<?php echo $cart_item_key; ?>" style="-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg);">›</button>
					</div>

					<div class="tws__mini_cart_img_wrapper">
						<?php if (empty($product_permalink)) : ?>
							<?php echo $thumbnail . wp_kses_post($product_name); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped 
							?>
						<?php else : ?>
							<a target="_blank" href="<?php echo esc_url($product_permalink); ?>">
								<?php echo $thumbnail; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped 
								?>
							</a>
						<?php endif; ?>
					</div>

					<div class="details">
						<?php echo wp_kses_post($product_name); ?><br>
						

						

						<?php //echo wc_get_formatted_cart_item_data($cart_item); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped 
						?>

						<?php //echo apply_filters('woocommerce_widget_cart_item_quantity', '<span class="quantity">' . sprintf('%s &times; %s', $cart_item['quantity'], $product_price) . '</span>', $cart_item, $cart_item_key); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped 
						?>


					</div>
					
					<div class="tws__mini_cart_amount">
						<?php
							// Product Price
							echo '<span id="tws__mini_cart_price_' . $product_id .'">' . $product_price*$cart_item['quantity'] . '</span>';

							// if has sale price then show the regular price as deleted
							if($product_price != $product_regular_price):
								echo '<br/><span id="tws__mini_cart_regular_price_' . $product_id .'"><del>' . $product_regular_price*$cart_item['quantity'] . '</del></span>';
							endif;
						?>
					</div>

					<?php
					// Remove Button
					echo apply_filters( // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
						'woocommerce_cart_item_remove_link',
						sprintf(
							'<a href="%s" class="remove remove_from_cart_button" aria-label="%s" data-product_id="%s" data-cart_item_key="%s" data-product_sku="%s">&times;</a>',
							esc_url(wc_get_cart_remove_url($cart_item_key)),
							esc_attr__('Remove this item', 'woocommerce'),
							esc_attr($product_id),
							esc_attr($cart_item_key),
							esc_attr($_product->get_sku())
						),
						$cart_item_key
					);
					?>

				</li>
		<?php
			}
		}

		do_action('woocommerce_mini_cart_contents');
		?>
	</ul>

	<div class="tws__final">
		<span class="woocommerce-mini-cart__total total">
			<?php
			/**
			 * Hook: woocommerce_widget_shopping_cart_total.
			 *
			 * @hooked woocommerce_widget_shopping_cart_subtotal - 10
			 */
			do_action('woocommerce_widget_shopping_cart_total');
			?>
		</span>
		<?php do_action('woocommerce_widget_shopping_cart_before_buttons'); ?>
		<span class="woocommerce-mini-cart__buttons buttons"><?php do_action('woocommerce_widget_shopping_cart_buttons'); // view cart and checkout button 
																?></span>
		<?php do_action('woocommerce_widget_shopping_cart_after_buttons'); ?>
	</div>


<?php else : ?>

	<p class="woocommerce-mini-cart__empty-message"><?php esc_html_e('No products in the cart.', 'woocommerce'); ?></p>

<?php endif; ?>


<?php
// $items = WC()->cart->get_cart();
// foreach ($items as $itemKey => $itemVal) {


// 	$product = wc_get_product($itemVal['data']->get_id());
// 	$product_id = apply_filters('woocommerce_cart_item_product_id', $itemVal['product_id'], $itemVal, $itemKey);
// 	$getProductDetail = wc_get_product($itemVal['product_id']);

// 	echo '<pre>';
// 		var_dump($itemVal['data']);

// 	echo '</pre>';

// }


?>




<?php

// including js
echo '<script>var action_cart_url = "' . admin_url('admin-ajax.php') . '";</script>'; // return the http://tws.test/wp-admin/admin-ajax.php url for the minicart action js in this link with ajax
get_template_part( 'template-parts/device_detector', '' ); // devuce detectors
echo tws__css_js('custom_js',   get_template_directory_uri() . '/assets/build/js/mini_cart.js" id="mini_cart-js');

?>
<script>


// Get the values from your form
// var ckey = 'f29c21d4897f78948b91f03172341b7b';
// var qty = 0;
	



// $('#refresh').on('click', function() {
//     var ckey = 'f29c21d4897f78948b91f03172341b7b';
//     var qty = 10;
//     //ajax request
//     $.post(
//         '<?php //echo admin_url('admin-ajax.php'); ?>',
//         {
//             action: 'tws_master_pro_woocommerce_cart_link_fragment',
//             ckey: ckey,
//             qty: qty
//         }, 
//         function(response) {
//             // process response
//             console.log('Response:',response); 
//         }
//     );
// });





// document.getElementById('refresh').addEventListener('click', function (e) {
    
// // Make a JavaScript Object
// let dataObj = {
// 	"action": "change_item_qty",
//     "ckey": 'f29c21d4897f78948b91f03172341b7b',
//     "qty": 10
// };


// // Make a JavaScript Request object
// let request = new XMLHttpRequest();
// request.open("POST", "/wp-admin/admin-ajax.php", true);
// // Prepare the Request
// request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
// // Send the Request
// request.send(dataObj);


// });



// function decrement_quantity(cart_id) {
//     // var inputQuantityElement = document.getElementById("input-quantity-" + cart_id);
//     // if (inputQuantityElement.value > 1) {
//     //   var newQuantity = parseInt(inputQuantityElement.value) - 1;
//     //   save_to_db(cart_id, newQuantity);
//     // }

// 	alert(cart_id);
//   }




</script>