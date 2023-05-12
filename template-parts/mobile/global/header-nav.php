<header class="grid grid-cols-10 py-0.5">
    <div class="col-span-2 flex tws__site_branding">
        <button id="toggle_primary_menu" class="border p-1 ml-2">
            <svg class="h-5 w-5" viewBox="0 0 20 20">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        </button>&nbsp;&nbsp;&nbsp;
        <a href="<?php echo esc_url(home_url('/')); ?>"><svg class="w-6 h-6 scale-125" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg></a>
    </div>
    <div class="col-span-8 px-3">
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
            <input class="w-full block pl-20 group-hover:pl-4 pr-10 py-2 rounded outline-none transition-all ease-in-out delay-150 duration-300" id="search" type="search" placeholder="সার্চ করুন (স্কুল ব্যাগ, বড় ব্যাগ)" />
            <button type="submit" class="absolute inset-y-0 right-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
            </button>
        </div>
    </div>
</header>


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
            <button class="col-span-3 m-1 text-white bg-red-600 hover:bg-red-400" id="tws__mini_cart_top_close_btn" type="button">Close</button>
            <div class="col-span-10 px-2 py-0.5"  id="tws__mini_cart_header_shipping_charge">Shipping Charge</div>
        </div>

        <div class="h-screen overflow-x-hidden overflow-y-scroll">
            <?php the_widget('WC_Widget_Cart', array('title' => '',)); // Mini cart widget ?>
        </div>
            
    </div>
</section>

<?php get_sidebar(); // sidebar with menu ?>