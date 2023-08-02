<header id="tws__header" class="fixed top-0 left-0 right-0 z-50 grid grid-cols-10 py-0.5">
    <div class="col-span-2 flex tws__site_branding">
        <button id="toggle_primary_menu" class="border p-1 ml-2">
            <svg class="h-5 w-5" viewBox="0 0 20 20">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        </button>
        <h1 class="tws__site_title"><?php if (is_front_page() && is_home()) :?><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a><?php else:?><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a><?php endif;?></h1>
    </div>
    <div class="col-span-4">
        <div class="tws__search_box group relative rounded-md overflow-hidden">
            <div class="tws__search_box_logo absolute inset-y-0 left-2 group-hover:-left-80 flex items-center overflow-hidden transition-all ease-in-out delay-150 duration-300"><?php 
                    // The Custom Logo
                    if ( has_custom_logo() ) {
                        echo '<img src="' 	. wp_get_attachment_image_src( get_theme_mod( 'custom_logo' ) , '200, 200' )[0]  . '" alt="' . get_bloginfo( 'description' ) . '">';
                    } else {
                        echo get_bloginfo('name');
                    }
                    // Thu Custom Logo
            ?></div>
            <form action="<?php echo esc_url(home_url('/')); ?>">
                <input id="tws__top_search" name="s" type="search" class="w-full block pl-20 group-hover:pl-4 pr-10 py-2 rounded outline-none transition-all ease-in-out delay-150 duration-300" placeholder="Search" />
                <button type="submit" class="absolute inset-y-0 right-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                </button>
            </form>
        </div>
    </div>
    <div class="col-span-4 grid grid-cols-6 tws__right_bar">
        <nav class="col-span-4 flex"><?php wp_nav_menu(array('theme_location' => 'quick-menu', 'menu_id' => 'quick-menu')); // Quick menu print ?></nav>
        <div class="tws__single_menu col-span-2 absolute inset-y-0 right-0 flex items-center px-3.5">
            <?php if(is_user_logged_in()):?>
                <a href="<?php echo get_permalink( get_option('woocommerce_myaccount_page_id') ); ?>"><svg width="29" height="33" style="fill:none;" class="w-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg>&nbsp;<span>অ্যাকাউন্ট</span></a>
            <?php else: ?>
                <a href="<?php echo get_permalink( get_option('woocommerce_myaccount_page_id') ); ?>"><svg width="29" height="33" viewBox="0 0 29 33" fill="none"><path d="M14.3824 12.5C17.5387 12.5 20.0967 9.81406 20.0967 6.5C20.0967 3.18594 17.5387 0.5 14.3824 0.5C11.2262 0.5 8.66816 3.18594 8.66816 6.5C8.66816 9.81406 11.2262 12.5 14.3824 12.5ZM18.3824 14H17.6369C16.6458 14.4781 15.5432 14.75 14.3824 14.75C13.2217 14.75 12.1235 14.4781 11.128 14H10.3824C7.06995 14 4.38245 16.8219 4.38245 20.3V22.25C4.38245 23.4922 5.34227 24.5 6.5253 24.5H22.2396C23.4226 24.5 24.3824 23.4922 24.3824 22.25V20.3C24.3824 16.8219 21.6949 14 18.3824 14Z"/></svg>&nbsp;<span>লগইন</span></a>
            <?php endif; ?>
        </div>
    </div>
</header>
<section id="tws__below_header" class="fixed top-12 z-40 w-full overflow-hidden grid-cols-10 hidden">
    <div class="col-span-2"></div>
    <div id="datafetch" class="col-span-4 relative h-full overflow-y-scroll pl-2 pr-2 bg-white border-l border-r border-b border-solid"></div>
    <div class="col-span-4"></div>
</section>

<?php if( !is_page( 'cart' ) && !is_cart() && !is_page( 'checkout' ) && !is_checkout() ): ?>
<div id="tws__mini_cart_float" class="fixed right-0 top-1/2 transform -translate-y-1/2 z-30 cursor-pointer w-16 text-center shadow-lg">
    <div class="py-1 bg-gray-500 hover:bg-gray-700 text-yellow-400 font-semibold">    
        <svg class="w-7 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
        <span id="tws__mini_cart_float_qty"></span>
    </div>
    <div class="bg-white">
        <span id="odometer_currency_symbol"></span><span id="odometer" class="odometer"></span>
    </div>
</div>
<section id="tws__mini_cart" class="fixed -right-96 bottom-0 z-40 w-80 transition-all ease-in-out delay-150 duration-300">
    <div class="relative h-full border-l">
        <span id="tws__mini_cart_left_close_btn" class="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 py-4 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></span>
        
        <div id="tws__mini_cart_header" class="hidden grid-cols-10">
            <span class="col-span-7 px-2 py-2" id="tws__mini_cart_only_countsDownload">0 Items</span>
            <button class="col-span-3 tws__color_set_optional tws__color_set_optional_hover m-1 transition-all ease-in-out delay-150 duration-300" id="tws__mini_cart_top_close_btn" type="button">Close</button>
            <div class="col-span-10 px-2 py-0.5"  id="tws__mini_cart_header_shipping_charge">Shipping Charge</div>
        </div>

        <div class="h-screen overflow-x-hidden overflow-y-scroll">
            <?php the_widget('WC_Widget_Cart', array('title' => '',)); // Mini cart widget ?>
        </div>
            
    </div>
</section>
<?php endif; ?>

<?php get_sidebar(); // sidebar with menu ?>