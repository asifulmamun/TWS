<?php
/**
 * The template for displaying product content within loops
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.6.0
 */

defined( 'ABSPATH' ) || exit;

global $product;

// Ensure visibility.
if ( empty( $product ) || ! $product->is_visible() ) {
	return;
}
?>
<li <?php wc_product_class( '', $product ); ?>>

	<div class="tws__product_wrapper grid justify-items-center">
		<?php //do_action('woocommerce_before_shop_loop_item'); /* init - dependencies working link of products */ ?>
		<div class="tws__product_img_wrap relative grid items-center justify-items-center">
			<?php woocommerce_show_product_loop_sale_flash(); /* Onsale */ ?>
			
			<?php if ( !$product->is_type( 'variable' ) ) : // Variable Product - check is product has variable or not ?>
				<a id="tws__add_to_cart_hover_add_<?php echo get_the_ID();?>" class="tws__product_hover_add_to_cart absolute z-10 top-0 left-0 h-full w-full grid items-center justify-items-center add_to_cart_button ajax_add_to_cart" href="?add-to-cart=<?php echo get_the_ID();?>" data-quantity="1" data-product_id="<?php echo get_the_ID();?>" rel="nofollow"><span id="tws__add_to_cart_hover_txt_<?php echo get_the_ID();?>">Add to cart</span></a>

				<img src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'medium'); ?>" alt="<?php echo get_post_meta(get_post_thumbnail_id(), '_wp_attachment_image_alt', TRUE); /* thumbnail */ ?>">
			<?php else: // not Ajax add to cart - if it it has no variable ?>
				<a title="Click here to for view details of <?php echo get_the_title(get_the_ID()); ?>" href="<?php echo get_the_permalink(get_the_ID()); ?>" data-quantity="1" class="tws__product_hover_add_to_cart absolute z-10 top-0 left-0 h-full w-full grid items-center justify-items-center" data-product_id="<?php echo get_the_ID();?>" rel="nofollow">Select options</a>

				<img src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'medium'); ?>" alt="<?php echo get_post_meta(get_post_thumbnail_id(), '_wp_attachment_image_alt', TRUE); /* thumbnail */ ?>">
			<?php endif; // end of if - check is product has variable or not ?>
			
			<span id="tws__add_to_cart_hover_wrapper_<?php echo get_the_ID();?>" class="hidden absolute z-20" style="">
				<div class="">
					<button id="tws__cart_hover_loop_decrement_<?php echo get_the_ID();?>" class="py-1 px-2 border">-</button>
					<span id="tws__cart_hover_loop_counter_<?php echo get_the_ID();?>">0</span>
					<a id="tws__cart_hover_loop_increment_<?php echo get_the_ID();?>" class="add_to_cart_button ajax_add_to_cart py-1 px-2 border" href="?add-to-cart=<?php echo get_the_ID();?>" data-quantity="1" data-product_id="<?php echo get_the_ID();?>" rel="nofollow">+</a>
				</div>
			</span>
			
			<span id="tws__product_loop_hover_amount_<?php echo get_the_ID();?>" class="tws__product_loop_hover_amount absolute z-10 top-0 left-0"></span>

			<a class="tws__product_loop_details_btn absolute z-20 bottom-0 left-0 right-0" title="Click here to for view details of <?php echo get_the_title(get_the_ID()); ?>" href="<?php echo get_the_permalink(get_the_ID()); ?>">Details</a>
		</div>
		

		<div class="details">
			<?php // woocommerce_template_loop_product_title(); /* Title */ ?>
			<h1><a href="<?php echo get_the_permalink(get_the_ID()); ?>"><?php echo get_the_title(get_the_ID()); ?></a></h1>
			<?php do_action('woocommerce_after_shop_loop_item_title'); /* Price */ ?>
		</div>

	</div>


	<?php if ( !$product->is_type( 'variable' ) ) : // Variable Product - check is product has variable or not ?>
		
		<div id="tws__add_to_cart_wrapper_<?php echo get_the_ID();?>" class="">

			<span id="tws__cart_loop_add_to_cart_<?php echo get_the_ID();?>"><?php do_action( 'woocommerce_after_shop_loop_item' ); //woocommerce_template_loop_add_to_cart(); /* Add To Cart */ ?></span>

			<button id="tws__cart_loop_decrement_<?php echo get_the_ID();?>" class="border py-1 px-2" style="display:none;">-</button>
			<span id="tws__cart_loop_btn_before_qty_<?php echo get_the_ID();?>" style="display:none;"><a class="add_to_cart_button ajax_add_to_cart border py-1 px-2" href="?add-to-cart=<?php echo get_the_ID();?>" data-quantity="1" data-product_id="<?php echo get_the_ID();?>" rel="nofollow">Added</a></span>
			<span id="tws__cart_loop_counter_<?php echo get_the_ID();?>"></span>
			<a id="tws__cart_loop_increment_<?php echo get_the_ID();?>" class="add_to_cart_button ajax_add_to_cart border py-1 px-2" style="display:none;" href="?add-to-cart=<?php echo get_the_ID();?>" data-quantity="1" data-product_id="<?php echo get_the_ID();?>" rel="nofollow">+</a>
		</div>

	<?php else: // Ajax add to cart - if it it has no variable ?>

		<?php do_action( 'woocommerce_after_shop_loop_item' ); //woocommerce_template_loop_add_to_cart(); /* Add To Cart */ ?>
	
	<?php endif; // end of if - check is product has variable or not ?>




	


	<?php
	// /**
	//  * Hook: woocommerce_before_shop_loop_item.
	//  *
	//  * @hooked woocommerce_template_loop_product_link_open - 10
	//  */
	// do_action( 'woocommerce_before_shop_loop_item' );

	// /**
	//  * Hook: woocommerce_before_shop_loop_item_title.
	//  *
	//  * @hooked woocommerce_show_product_loop_sale_flash - 10
	//  * @hooked woocommerce_template_loop_product_thumbnail - 10
	//  */
	// do_action( 'woocommerce_before_shop_loop_item_title' );

	// /**
	//  * Hook: woocommerce_shop_loop_item_title.
	//  *
	//  * @hooked woocommerce_template_loop_product_title - 10
	//  */
	// do_action( 'woocommerce_shop_loop_item_title' );

	// /**
	//  * Hook: woocommerce_after_shop_loop_item_title.
	//  *
	//  * @hooked woocommerce_template_loop_rating - 5
	//  * @hooked woocommerce_template_loop_price - 10
	//  */
	// do_action( 'woocommerce_after_shop_loop_item_title' );

	// /**
	//  * Hook: woocommerce_after_shop_loop_item.
	//  *
	//  * @hooked woocommerce_template_loop_product_link_close - 5
	//  * @hooked woocommerce_template_loop_add_to_cart - 10
	//  */
	// do_action( 'woocommerce_after_shop_loop_item' );
	?>
</li>
