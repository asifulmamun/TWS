<form class="woocommerce-cart-form" action="<?php echo esc_url( wc_get_cart_url() ); ?>" method="post">
	<?php do_action( 'woocommerce_before_cart_table' ); ?>

	<table class="w-full shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellspacing="0">
		<thead class="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
			<tr class="text-center">
				<th class="py-3 product-thumbnail"><?php esc_html_e( 'Thumbnail image', 'woocommerce' ); ?></th>
				<th class="py-3 product-name"><?php esc_html_e( 'Product', 'woocommerce' ); ?></th>
				<th class="py-3 product-price"><?php esc_html_e( 'Price', 'woocommerce' ); ?></th>
				<th class="py-3 product-quantity"><?php esc_html_e( 'Quantity', 'woocommerce' ); ?></th>
				<th class="py-3 product-subtotal"><?php esc_html_e( 'Subtotal', 'woocommerce' ); ?></th>
				<th class="py-3 product-remove"><?php esc_html_e( 'Remove item', 'woocommerce' ); ?></th>
			</tr>
		</thead>
		<tbody id="cart_t_body" class="">
			<?php do_action( 'woocommerce_before_cart_contents' ); ?>

			<?php
			foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {
				$_product   = apply_filters( 'woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key );
				$product_id = apply_filters( 'woocommerce_cart_item_product_id', $cart_item['product_id'], $cart_item, $cart_item_key );

				if ( $_product && $_product->exists() && $cart_item['quantity'] > 0 && apply_filters( 'woocommerce_cart_item_visible', true, $cart_item, $cart_item_key ) ) {
					$product_permalink = apply_filters( 'woocommerce_cart_item_permalink', $_product->is_visible() ? $_product->get_permalink( $cart_item ) : '', $cart_item, $cart_item_key );
					?>
					<tr id="<?php echo $cart_item_key; ?>" class="text-center woocommerce-cart-form__cart-item <?php echo esc_attr( apply_filters( 'woocommerce_cart_item_class', 'cart_item', $cart_item, $cart_item_key ) ); ?>" data-pr_key="<?php echo $cart_item_key; ?>">

						<td class="grid justify-center py-8 product-thumbnail">
						<?php
						$thumbnail = apply_filters( 'woocommerce_cart_item_thumbnail', $_product->get_image(), $cart_item, $cart_item_key );

						if ( ! $product_permalink ) {
							echo $thumbnail; // PHPCS: XSS ok.
						} else {
							printf( '<a href="%s">%s</a>', esc_url( $product_permalink ), $thumbnail ); // PHPCS: XSS ok.
						}
						?>
						</td>

						<td class="text-left product-name" data-title="<?php esc_attr_e( 'Product', 'woocommerce' ); ?>">
						<?php
						if ( ! $product_permalink ) {
							echo wp_kses_post( apply_filters( 'woocommerce_cart_item_name', $_product->get_name(), $cart_item, $cart_item_key ) . '&nbsp;' );
						} else {
							echo wp_kses_post( apply_filters( 'woocommerce_cart_item_name', sprintf( '<a class="px-2 font-bold" href="%s">%s</a>', esc_url( $product_permalink ), $_product->get_name() ), $cart_item, $cart_item_key ) );
						}

						do_action( 'woocommerce_after_cart_item_name', $cart_item, $cart_item_key );

						// Meta data.
						echo wc_get_formatted_cart_item_data( $cart_item ); // PHPCS: XSS ok.

						// Backorder notification.
						if ( $_product->backorders_require_notification() && $_product->is_on_backorder( $cart_item['quantity'] ) ) {
							echo wp_kses_post( apply_filters( 'woocommerce_cart_item_backorder_notification', '<p class="backorder_notification">' . esc_html__( 'Available on backorder', 'woocommerce' ) . '</p>', $product_id ) );
						}
						?>
						</td>

						<td class="product-price" data-title="<?php esc_attr_e( 'Price', 'woocommerce' ); ?>">
							<?php
								echo apply_filters( 'woocommerce_cart_item_price', WC()->cart->get_product_price( $_product ), $cart_item, $cart_item_key ); // PHPCS: XSS ok.
							?>
						</td>

						<td class="product-quantity" data-title="<?php esc_attr_e( 'Quantity', 'woocommerce' ); ?>">
						<button id="decr_<?php echo $cart_item_key; ?>" type="button">-</button>
						<?php
							if ( $_product->is_sold_individually() ) {
								$min_quantity = 1;
								$max_quantity = 1;
							} else {
								$min_quantity = 0;
								$max_quantity = $_product->get_max_purchase_quantity();
							}

							$product_quantity = woocommerce_quantity_input(
								array(
									'input_name'   => "cart[{$cart_item_key}][qty]",
									'input_value'  => $cart_item['quantity'],
									'max_value'    => $max_quantity,
									'min_value'    => $min_quantity,
									'product_name' => $_product->get_name(),
								),
								$_product,
								false
							);

							echo apply_filters( 'woocommerce_cart_item_quantity', $product_quantity, $cart_item_key, $cart_item ); // PHPCS: XSS ok.
						?>
						<button id="incr_<?php echo $cart_item_key; ?>" type="button">+</button>
						</td>

						<td class="font-bold product-subtotal" data-title="<?php esc_attr_e( 'Subtotal', 'woocommerce' ); ?>">
							<?php
								echo apply_filters( 'woocommerce_cart_item_subtotal', WC()->cart->get_product_subtotal( $_product, $cart_item['quantity'] ), $cart_item, $cart_item_key ); // PHPCS: XSS ok.
							?>
						</td>

						<td class="product-remove">
							<?php
								echo apply_filters( // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
									'woocommerce_cart_item_remove_link',
									sprintf(
										'<a onclick="browser_refresh()" class="py-2 px-3 text-white font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 transition-all ease-in-out delay-150 duration-300" href="%s" class="remove" aria-label="%s" data-product_id="%s" data-product_sku="%s">Remove</a>',
										esc_url( wc_get_cart_remove_url( $cart_item_key ) ),
										esc_html__( 'Remove this item', 'woocommerce' ),
										esc_attr( $product_id ),
										esc_attr( $_product->get_sku() )
									),
									$cart_item_key
								);
							?>
						</td>
					</tr>
					<?php
				}
			}
			?>

			<?php do_action( 'woocommerce_cart_contents' ); ?>

			<tr>
				<td colspan="6" class="actions">

					<?php if ( wc_coupons_enabled() ) { ?>
						<div class="coupon">
							<label for="coupon_code" class="screen-reader-text"><?php esc_html_e( 'Coupon:', 'woocommerce' ); ?></label> <input type="text" name="coupon_code" class="input-text outline-none py-2 px-3" id="coupon_code" value="" placeholder="<?php esc_attr_e( 'Coupon code', 'woocommerce' ); ?>" /> <button type="submit" class="button<?php echo esc_attr( wc_wp_theme_get_element_class_name( 'button' ) ? ' ' . wc_wp_theme_get_element_class_name( 'button' ) : '' ); ?> py-2 px-3 rounded hover:bg-red-400 text-red-400 hover:text-white text-base border border-solid" name="apply_coupon" value="<?php esc_attr_e( 'Apply coupon', 'woocommerce' ); ?>"><?php esc_attr_e( 'Apply coupon', 'woocommerce' ); ?></button>
							<?php do_action( 'woocommerce_cart_coupon' ); ?>
						</div>
					<?php } ?>

					<button id="tws__btn_update_cart" type="submit" class="button<?php echo esc_attr( wc_wp_theme_get_element_class_name( 'button' ) ? ' ' . wc_wp_theme_get_element_class_name( 'button' ) : '' ); ?> py-2 px-4 text-base text-white font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 transition-all ease-in-out delay-150 duration-300" name="update_cart" value="<?php esc_attr_e( 'Update cart', 'woocommerce' ); ?>"><?php esc_html_e( 'Update cart', 'woocommerce' ); ?></button>

					<?php do_action( 'woocommerce_cart_actions' ); ?>

					<?php wp_nonce_field( 'woocommerce-cart', 'woocommerce-cart-nonce' ); ?>
				</td>
			</tr>

			<?php do_action( 'woocommerce_after_cart_contents' ); ?>
		</tbody>
	</table>
	<?php do_action( 'woocommerce_after_cart_table' ); ?>
</form>

<?php do_action( 'woocommerce_before_cart_collaterals' ); ?>

<div class="cart-collaterals">
	<?php
		/**
		 * Cart collaterals hook.
		 *
		 * @hooked woocommerce_cross_sell_display
		 * @hooked woocommerce_cart_totals - 10
		 */
		do_action( 'woocommerce_cart_collaterals' );
	?>
</div>

<?php
	// content single product - css/js only for this desktop version
	wp_enqueue_style( 'woo_single_product', get_stylesheet_directory_uri(). '/assets/build/css/cart_checkout.css',  array(), null, 'all' );
	wp_enqueue_script( 'woo_single_product', get_template_directory_uri() . '/assets/build/js/cart_checkout.js', array(), null, true);   

?>

<script>function browser_refresh(){setTimeout(function(){location.reload();},2000);}//refresh when click remove button any product - after 2 sec</script>