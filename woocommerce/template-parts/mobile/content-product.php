<?php

defined( 'ABSPATH' ) || exit;

global $product;

// Ensure visibility.
if ( empty( $product ) || ! $product->is_visible() ) {
	return;
}
?>
<li <?php wc_product_class( 'tws__product_wrapper group relative h-72 overflow-hidden grid justify-items-center p-1 hover:shadow-lg', $product ); ?>>
	<?php woocommerce_show_product_loop_sale_flash(); /* Onsale */ ?>
	<a class="h-40 overflow-hidden flex p-2" href="<?php echo get_the_permalink(get_the_ID()); ?>"><img class="max-h-full m-auto" src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'medium'); ?>" alt="<?php echo get_post_meta(get_post_thumbnail_id(), '_wp_attachment_image_alt', TRUE); /* thumbnail */ ?>"></a>
	<div class="h-20 overflow-hidden pt-3"><?php woocommerce_template_loop_product_title(); /* Product Title Title */ ?></div>
	<div class="h-7"><?php do_action('woocommerce_after_shop_loop_item_title'); /* Price */ ?></div>
	<span class=""><?php do_action( 'woocommerce_before_shop_loop_item' ); /* Add To Cart */ ?></span>
	<span class=""><?php do_action( 'woocommerce_after_shop_loop_item' ); /* Add To Cart */ ?></span>
</li>
