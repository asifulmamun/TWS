<header id="tws__header" class="fixed top-0 left-0 right-0 z-50 grid grid-cols-10 py-0.5">
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
            <form action="">
                <input id="tws__top_search" name="s" type="search" class="w-full block pl-20 group-hover:pl-4 pr-10 py-2 rounded outline-none transition-all ease-in-out delay-150 duration-300" placeholder="সার্চ করুন (স্কুল ব্যাগ, বড় ব্যাগ)" />
                <button type="submit" class="absolute inset-y-0 right-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                </button>
            </form>
        </div>
    </div>
    <div class="col-span-2 flex tws__site_branding">
        <a href="<?php echo esc_url(home_url('/')); ?>"><svg class="w-6 h-6 scale-125" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg></a>&nbsp;&nbsp;&nbsp;
        <button id="toggle_primary_menu" class="p-1 ml-2">
            <svg class="h-5 w-5" viewBox="0 0 20 20">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        </button>
    </div>
</header>
<section id="tws__below_header" class="fixed top-12 z-40 w-full overflow-hidden grid-cols-10 hidden">
    <div class="col-span-1"></div>
    <div id="datafetch" class="col-span-8 relative h-full overflow-y-scroll pl-2 pr-2 bg-white border-l border-r border-b border-solid"></div>
    <div class="col-span-1"></div>
</section>


<?php get_sidebar(); // sidebar with menu ?>