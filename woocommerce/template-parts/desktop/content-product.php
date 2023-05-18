<?php

defined( 'ABSPATH' ) || exit;

global $product;

// Ensure visibility.
if ( empty( $product ) || ! $product->is_visible() ) {
	return;
}
?>
<li <?php wc_product_class( 'p-1 hover:shadow-lg', $product ); ?>>

	<div class="tws__product_wrapper relative group grid justify-items-center overflow-hidden">
		<?php //do_action('woocommerce_before_shop_loop_item'); /* init - dependencies working link of products */ ?>
		<?php woocommerce_show_product_loop_sale_flash(); /* Onsale */ ?>
		<span id="tws__product_loop_hover_amount_<?php echo get_the_ID();?>" class="tws__product_loop_hover_amount absolute z-20 top-5 left-1/2 transform -translate-x-1/2 text-lg text-white"></span>
		<a class="tws__product_loop_details_btn absolute z-20 bottom-0 left-0 right-0 text-center py-1 text-sm hover:text-white bg-white hover:bg-red-400 border-b border-r border-l border-solid border-gray-300 hover:border-red-400" title="Click here to for view details of <?php echo get_the_title(get_the_ID()); ?>" href="<?php echo get_the_permalink(get_the_ID()); ?>">Details&nbsp;›</a>
		
		<div id="tws__add_to_cart_hover_wrapper_<?php echo get_the_ID();?>" class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-20 text-white transition-all ease-in-out delay-150 duration-300">
			<button id="tws__cart_hover_loop_decrement_<?php echo get_the_ID();?>" class="py-1 px-2 border">-</button>
			<span id="tws__cart_hover_loop_counter_<?php echo get_the_ID();?>" class="text-5xl px-1">0</span>
			<a id="tws__cart_hover_loop_increment_<?php echo get_the_ID();?>" class="add_to_cart_button ajax_add_to_cart border" href="?add-to-cart=<?php echo get_the_ID();?>" data-quantity="1" data-product_id="<?php echo get_the_ID();?>" rel="nofollow">+</a>
		</div>
	
		<?php if ( !$product->is_type( 'variable' ) ) : // Variable Product - check is product has variable or not ?>
			<a id="tws__add_to_cart_hover_add_<?php echo get_the_ID();?>" class="tws__product_hover_add_to_cart absolute z-10 top-0 left-0 h-full w-full grid items-center justify-items-center add_to_cart_button ajax_add_to_cart text-white" href="?add-to-cart=<?php echo get_the_ID();?>" data-quantity="1" data-product_id="<?php echo get_the_ID();?>" rel="nofollow"><span class="text-lg" id="tws__add_to_cart_hover_txt_<?php echo get_the_ID();?>">Add to cart</span></a>
		<?php else: // not Ajax add to cart - if it it has no variable ?>
			<a title="Click here to for view details of <?php echo get_the_title(get_the_ID()); ?>" href="<?php echo get_the_permalink(get_the_ID()); ?>" data-quantity="1" class="tws__product_hover_add_to_cart absolute z-10 top-0 left-0 h-full w-full grid items-center justify-items-center text-white" data-product_id="<?php echo get_the_ID();?>" rel="nofollow">Select options</a>
		<?php endif; // end of if - check is product has variable or not ?>

		<div class="tws__product_img_wrap grid items-center justify-items-center text-white">
			<img src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'medium'); ?>" alt="<?php echo get_post_meta(get_post_thumbnail_id(), '_wp_attachment_image_alt', TRUE); /* thumbnail */ ?>">
		</div>
		

		<div class="details">
			<?php woocommerce_template_loop_product_title(); /* Product Title Title */ ?>
			<?php do_action('woocommerce_after_shop_loop_item_title'); /* Price */ ?>
		</div>
	</div>


	<?php if ( !$product->is_type( 'variable' ) ) : // Variable Product - check is product has variable or not ?>
		<div class="tws__add_to_cart_wrapper h-14 overflow-hidden grid items-center content-center text-center" id="tws__add_to_cart_wrapper_<?php echo get_the_ID();?>">
			<span class="rounded hover:bg-red-400 text-red-400 hover:text-white text-base border border-solid" id="tws__cart_loop_add_to_cart_<?php echo get_the_ID();?>"><?php do_action( 'woocommerce_after_shop_loop_item' ); //woocommerce_template_loop_add_to_cart(); /* Add To Cart */ ?></span>
			
			<div class="tws__cart_added overflow-hidden flex justify-around bg-red-500 text-white text-base">
				<button class="w-1/4 border-r py-2 hover:bg-red-400" id="tws__cart_loop_decrement_<?php echo get_the_ID();?>" style="display:none;">-</button>
				<span class="w-full flex items-center justify-center">
					<span id="tws__cart_loop_btn_before_qty_<?php echo get_the_ID();?>" style="display:none;"><a class="add_to_cart_button ajax_add_to_cart py-1 px-2" href="?add-to-cart=<?php echo get_the_ID();?>" data-quantity="1" data-product_id="<?php echo get_the_ID();?>" rel="nofollow">Added</a></span>
					<span class="content-center" id="tws__cart_loop_counter_<?php echo get_the_ID();?>"></span>
				</span>
				<a class="add_to_cart_button ajax_add_to_cart w-1/4 border-l py-2 hover:bg-red-400" id="tws__cart_loop_increment_<?php echo get_the_ID();?>" style="display:none;" href="?add-to-cart=<?php echo get_the_ID();?>" data-quantity="1" data-product_id="<?php echo get_the_ID();?>" rel="nofollow">+</a>
			</div>
		</div>
	<?php else: // Ajax add to cart - if it it has no variable ?>
		<?php do_action( 'woocommerce_after_shop_loop_item' ); //woocommerce_template_loop_add_to_cart(); /* Add To Cart */ ?>
	<?php endif; // end of if - check is product has variable or not ?>
</li>
