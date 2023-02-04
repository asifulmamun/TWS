<main id="main" class="w-full overflow-x-hidden">
<?php while ( have_posts() ) : the_post(); the_content(); endwhile; // Page Content ?>
<?php while ( have_posts() ) : the_post();?>
	<ul class="products grid grid-cols-5 gap-3 border-3">
		<?php
			$args = array(
				'post_type' => 'product',
				'posts_per_page' => 12
				);
			$loop = new WP_Query( $args );
			if ( $loop->have_posts() ) {
				while ( $loop->have_posts() ) : $loop->the_post();

					wc_get_template_part( 'content', 'product' );
					
				endwhile;
			} else {
				echo __( 'No products found' );
			}
			wp_reset_postdata();
		?>
	</ul>
<?php	endwhile; // End of the loop. ?>
</main>