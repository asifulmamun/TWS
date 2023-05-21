<?php

defined( 'ABSPATH' ) || exit;

global $product;

// Ensure visibility.
if ( empty( $product ) || ! $product->is_visible() ) {
	return;
}
?>
<li <?php wc_product_class( 'tws__product_wrapper group relative pt-2 pb-3 mb-20 hover:shadow-lg', $product ); ?>>
	<?php woocommerce_show_product_loop_sale_flash(); /* Onsale */ ?>
	<a class="block overflow-hidden text-center" href="<?php echo get_the_permalink(get_the_ID()); ?>">
		<div class="h-40 overflow-hidden flex">
			<img class="max-h-full m-auto" src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'medium'); ?>" alt="<?php echo get_post_meta(get_post_thumbnail_id(), '_wp_attachment_image_alt', TRUE); /* thumbnail */ ?>">
		</div>
		<div class="max-h-24 overflow-hidden pt-5 px-2"><?php woocommerce_template_loop_product_title(); /* Product Title Title */ ?></div>
		<span class="max-h-8 inline-block mt-2 py-2 px-4 overflow-hidden bg-yellow-200"><?php do_action('woocommerce_after_shop_loop_item_title'); /* Price */ ?></span>
	</a>
	
	<span class="tws__add_cat_wrap relative max-h-14 mr-2 grid justify-items-center"><?php do_action( 'woocommerce_after_shop_loop_item' ); /* Add To Cart */ ?></span>
</li>
