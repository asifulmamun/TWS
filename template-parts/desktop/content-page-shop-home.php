<main id="main" class="w-full">
<?php 

// Page Content
while ( have_posts() ) : the_post(); the_content(); endwhile; // Page Content 




// // Custom Loop
// while ( have_posts() ) : the_post();

// 			$args = array(
// 				'post_type' => 'product',
// 				// 'orderby' => 'name',
// 				// 'order' => 'ASC',
// 				'posts_per_page' => 10
// 				);
// 			$loop = new WP_Query( $args );
// 			if ( $loop->have_posts() ) {
// 				woocommerce_product_loop_start();
// 				while ( $loop->have_posts() ) : $loop->the_post();
// 					wc_get_template_part( 'content', 'product' );
// 				endwhile;
// 				woocommerce_product_loop_start();
// 			} else {
// 				echo __( 'No products found' );
// 			}
// 			wp_reset_postdata();




// 			// $args = array(
// 			// 	'post_type' => 'product',
// 			// 	'posts_per_page' => 10,
// 			// 	'orderby' => 'name',
// 			// 	'order' => 'ASC',
// 			// 	// 'tax_query' => $tax_query
// 			// );
			
// 			// $query = new WP_Query( $args );
			
// 			// if( $query->have_posts() ) :
// 			// 	woocommerce_product_loop_start();
// 			// 	while( $query->have_posts() ): $query->the_post();
// 			// 		wc_get_template_part( 'content', 'product' );
// 			// 	endwhile;
// 			// 	woocommerce_product_loop_end();
			
// 			// 	global $wp_query;
// 			// 	$wp_query->max_num_pages=$query->max_num_pages;
// 			// 	// TODO - get pagination working
// 			// 	woocommerce_pagination();
			
// 			// 	wp_reset_postdata();
// 			// else :
// 			// 	echo '<p>No products found</p>';
// 			// endif;


// endwhile; // End of the loop.
?>
</main>