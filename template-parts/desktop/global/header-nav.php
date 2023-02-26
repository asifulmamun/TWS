<header class="fixed top-0 left-0 right-0 z-50 grid grid-cols-10 py-0.5">
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
        <div class="relative rounded-md tws__search_box">
            <div class="absolute inset-y-0 left-2 flex items-center tws__search_box_logo">
                <?php 
                    // The Custom Logo
                    if ( has_custom_logo() ) {
                        echo '<img src="' 	. wp_get_attachment_image_src( get_theme_mod( 'custom_logo' ) , '200, 200' )[0]  . '" alt="' . get_bloginfo( 'description' ) . '">';
                    } else {
                        echo get_bloginfo('name');
                    }
                    // Thu Custom Logo
                ?>
            </div>
            <input id="search" type="search" class="block pr-10 rounded w-full py-2 px-4" placeholder="সার্চ করুন (স্কুল ব্যাগ, বড় ব্যাগ)" />
            <button type="submit" class="absolute inset-y-0 right-3 flex items-center">
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none"><path d="M30.1985 22.581L25.1929 17.5755C24.967 17.3496 24.6608 17.2241 24.3395 17.2241H23.5211C24.9068 15.4518 25.7302 13.2227 25.7302 10.7978C25.7302 5.02916 21.056 0.355011 15.2874 0.355011C9.51875 0.355011 4.8446 5.02916 4.8446 10.7978C4.8446 16.5664 9.51875 21.2406 15.2874 21.2406C17.7123 21.2406 19.9414 20.4172 21.7137 19.0315V19.8499C21.7137 20.1712 21.8392 20.4774 22.0651 20.7034L27.0706 25.7089C27.5426 26.1808 28.3057 26.1808 28.7726 25.7089L30.1934 24.288C30.6654 23.8161 30.6654 23.053 30.1985 22.581ZM15.2874 17.2241C11.7378 17.2241 8.86106 14.3523 8.86106 10.7978C8.86106 7.24825 11.7328 4.37146 15.2874 4.37146C18.8369 4.37146 21.7137 7.24322 21.7137 10.7978C21.7137 14.3473 18.8419 17.2241 15.2874 17.2241Z"/></svg>
            </button>
        </div>
    </div>
    <div class="col-span-4 grid grid-cols-6 tws__right_bar">
        <nav class="col-span-4 flex"><?php wp_nav_menu(array('theme_location' => 'quick-menu', 'menu_id' => 'quick-menu')); // Quick menu print ?></nav>
        <div class="col-span-2 absolute inset-y-0 right-0 flex items-center px-3.5 tws__single_menu"><?php if(is_user_logged_in()):?><a href="/dashboard"><svg width="25" height="28" viewBox="0 0 25 28" fill="none"><path d="M24.3987 5.69135C24.3989 5.19673 24.3334 4.7042 24.2037 4.22627H23.4565C23.8004 5.32193 23.7497 6.50049 23.313 7.56374C22.8763 8.62699 22.0802 9.51006 21.0587 10.0644C20.0372 10.6188 18.8525 10.8107 17.7039 10.6077C16.5553 10.4048 15.5129 9.81944 14.7519 8.95014C13.991 8.08084 13.558 6.98062 13.5257 5.83451C13.4934 4.6884 13.8638 3.56633 14.5747 2.65701C15.2855 1.7477 16.2934 1.10661 17.4288 0.841583C18.5642 0.576552 19.7579 0.703743 20.8091 1.20176L21.1984 0.60367C20.387 0.203835 19.4913 -0.00294248 18.5835 3.16339e-05C17.6757 0.00300575 16.7814 0.215648 15.9727 0.620791C15.164 1.02593 14.4636 1.61222 13.9281 2.33233C13.3926 3.05243 13.0369 3.88616 12.8897 4.76621C12.3275 4.38027 11.6683 4.15326 10.9838 4.10989C10.2994 4.06651 9.61592 4.20844 9.00787 4.52021C8.39982 4.83199 7.89048 5.30166 7.53529 5.87812C7.1801 6.45457 6.99267 7.1157 6.99341 7.78955V8.89233H3.44457C2.99214 8.89126 2.5555 9.05566 2.21968 9.35352C1.88387 9.65138 1.6729 10.0614 1.62788 10.5037L0.00951101 26.023C-0.0165333 26.2727 0.0110557 26.525 0.0904943 26.7636C0.169933 27.0022 0.299453 27.2218 0.470681 27.4081C0.641909 27.5945 0.851033 27.7434 1.08453 27.8454C1.31803 27.9473 1.57071 28 1.82623 28H19.6668C19.9223 28 20.175 27.9473 20.4085 27.8454C20.642 27.7434 20.8511 27.5945 21.0223 27.4081C21.1935 27.2218 21.3231 27.0022 21.4025 26.7636C21.4819 26.525 21.5095 26.2727 21.4835 26.023L19.9409 11.2298C21.2092 10.9329 22.3388 10.225 23.1475 9.22017C23.9562 8.21539 24.397 6.97231 24.3987 5.69135ZM7.71241 7.78955C7.71182 7.20881 7.88408 6.64058 8.20799 6.15479C8.53189 5.669 8.9933 5.28686 9.53543 5.0554C10.0776 4.82394 10.6767 4.75327 11.2592 4.85208C11.8417 4.95088 12.3821 5.21486 12.8138 5.61152C12.8134 5.63812 12.8128 5.66465 12.8128 5.69134C12.8115 6.8109 13.1483 7.90567 13.7806 8.8371V8.89233H7.71241V7.78955ZM14.1401 11.8191C14.2527 11.8191 14.3628 11.8519 14.4564 11.9134C14.55 11.9748 14.6229 12.0622 14.666 12.1644C14.7091 12.2666 14.7204 12.379 14.6984 12.4875C14.6764 12.596 14.6222 12.6956 14.5426 12.7739C14.463 12.8521 14.3615 12.9053 14.2511 12.9269C14.1407 12.9485 14.0262 12.9374 13.9222 12.8951C13.8182 12.8527 13.7293 12.7811 13.6668 12.6891C13.6042 12.5971 13.5708 12.489 13.5708 12.3784C13.571 12.2301 13.631 12.0879 13.7378 11.9831C13.8445 11.8782 13.9892 11.8193 14.1401 11.8191ZM7.3529 11.8191C7.46549 11.8191 7.57554 11.8519 7.66915 11.9134C7.76276 11.9748 7.83572 12.0622 7.8788 12.1644C7.92188 12.2666 7.93315 12.379 7.91118 12.4875C7.88921 12.596 7.835 12.6956 7.75538 12.7739C7.67577 12.8521 7.57434 12.9053 7.46392 12.9269C7.35349 12.9485 7.23904 12.9374 7.13502 12.8951C7.031 12.8527 6.9421 12.7811 6.87955 12.6891C6.817 12.5971 6.78362 12.489 6.78362 12.3784C6.78379 12.2301 6.84382 12.0879 6.95054 11.9831C7.05727 11.8782 7.20197 11.8193 7.3529 11.8191ZM20.7682 26.0949C20.784 26.2463 20.7673 26.3993 20.7191 26.544C20.671 26.6886 20.5924 26.8218 20.4886 26.9347C20.3848 27.0477 20.258 27.138 20.1165 27.1998C19.9749 27.2617 19.8217 27.2936 19.6668 27.2936H19.2636L17.0257 25.2342C16.5153 24.7632 15.8412 24.5015 15.141 24.5024H6.10775C5.40755 24.5015 4.73341 24.7632 4.22304 25.2342L1.98514 27.2936H1.82623C1.67131 27.2936 1.51812 27.2617 1.37655 27.1998C1.23498 27.138 1.10819 27.0477 1.00438 26.9347C0.900572 26.8218 0.822047 26.6886 0.773885 26.544C0.725723 26.3993 0.708996 26.2463 0.724786 26.0949L2.34314 10.5756C2.37044 10.3075 2.49834 10.0589 2.70194 9.87834C2.90554 9.69776 3.17026 9.59809 3.44455 9.59874H6.99339V11.1638C6.6955 11.2489 6.43885 11.4367 6.27059 11.6927C6.10233 11.9488 6.03377 12.2559 6.07749 12.5576C6.12121 12.8594 6.27428 13.1355 6.50858 13.3352C6.74289 13.5349 7.04269 13.6449 7.3529 13.6449C7.66312 13.6449 7.96291 13.5349 8.19722 13.3352C8.43152 13.1355 8.58459 12.8594 8.62832 12.5576C8.67204 12.2559 8.60347 11.9488 8.43521 11.6927C8.26695 11.4367 8.0103 11.2489 7.71241 11.1638V9.59874H13.7806V11.1638C13.4827 11.2489 13.2261 11.4367 13.0578 11.6927C12.8895 11.9488 12.821 12.2559 12.8647 12.5576C12.9084 12.8594 13.0615 13.1355 13.2958 13.3352C13.5301 13.5349 13.8299 13.6449 14.1401 13.6449C14.4503 13.6449 14.7501 13.5349 14.9844 13.3352C15.2187 13.1355 15.3718 12.8594 15.4155 12.5576C15.4592 12.2559 15.3907 11.9488 15.2224 11.6927C15.0542 11.4367 14.7975 11.2489 14.4996 11.1638V9.70197C15.1116 10.3081 15.8547 10.7709 16.6737 11.0561C17.4928 11.3414 18.3667 11.4416 19.2306 11.3495L20.7682 26.0949Z"/><path d="M19.7277 8.24833C19.7274 8.34011 19.7454 8.43105 19.7809 8.51596C19.8163 8.60087 19.8685 8.67807 19.9343 8.74314C20.0002 8.80822 20.0785 8.85989 20.1647 8.8952C20.2509 8.93051 20.3434 8.94875 20.4368 8.9489C20.5302 8.94905 20.6227 8.93109 20.7091 8.89605C20.7954 8.86102 20.8739 8.80959 20.9399 8.74472C21.006 8.67985 21.0584 8.60281 21.0942 8.51802C21.1299 8.43322 21.1482 8.34233 21.1482 8.25056C21.1481 8.11646 21.1087 7.98523 21.0347 7.87257C20.9606 7.75991 20.8551 7.67062 20.7307 7.61538L20.732 7.4323C20.7327 7.33036 20.6922 7.23231 20.6193 7.15974C20.5464 7.08716 20.4472 7.046 20.3434 7.04532L17.8595 7.02883L17.6633 6.3984L20.2451 6.23096C20.4008 6.21892 20.548 6.15628 20.6635 6.05293C20.779 5.94959 20.8562 5.81141 20.883 5.66018L21.0156 4.80448C21.0376 4.68727 21.0277 4.56642 20.9868 4.45421C20.9377 4.31969 20.8475 4.20333 20.7286 4.12103C20.6097 4.03872 20.4678 3.99447 20.3223 3.99432L16.9401 3.92018L16.675 3.22139C16.6544 3.15513 16.6127 3.09711 16.556 3.0559C16.4993 3.01468 16.4306 2.99243 16.3601 2.99243H15.184V3.63956H16.1164L17.3003 7.4453C17.3155 7.49402 17.3422 7.53852 17.3782 7.57515C17.2212 7.61465 17.0827 7.70577 16.9857 7.83336C16.8887 7.96094 16.839 8.11731 16.845 8.27644C16.8511 8.43558 16.9123 8.5879 17.0187 8.70808C17.125 8.82826 17.2701 8.90904 17.4296 8.937C17.5892 8.96497 17.7537 8.93842 17.8958 8.86178C18.0379 8.78514 18.149 8.66302 18.2106 8.51573C18.2723 8.36845 18.2807 8.20487 18.2346 8.05221C18.1885 7.89954 18.0905 7.76699 17.9571 7.67659L20.0159 7.69027C19.9269 7.75473 19.8544 7.83878 19.8044 7.93569C19.7543 8.0326 19.7281 8.13967 19.7277 8.24833Z"/><path d="M22.419 3.35914H23.138V2.44946H24.0639V1.74305H23.138V0.833313H22.419V1.74305H21.493V2.44946H22.419V3.35914Z"/></svg>&nbsp;<span>কার্ট</span></a><?php else: ?><a href="/dashboard"><svg width="29" height="33" viewBox="0 0 29 33" fill="none"><path d="M14.3824 12.5C17.5387 12.5 20.0967 9.81406 20.0967 6.5C20.0967 3.18594 17.5387 0.5 14.3824 0.5C11.2262 0.5 8.66816 3.18594 8.66816 6.5C8.66816 9.81406 11.2262 12.5 14.3824 12.5ZM18.3824 14H17.6369C16.6458 14.4781 15.5432 14.75 14.3824 14.75C13.2217 14.75 12.1235 14.4781 11.128 14H10.3824C7.06995 14 4.38245 16.8219 4.38245 20.3V22.25C4.38245 23.4922 5.34227 24.5 6.5253 24.5H22.2396C23.4226 24.5 24.3824 23.4922 24.3824 22.25V20.3C24.3824 16.8219 21.6949 14 18.3824 14Z"/></svg>&nbsp;<span>লগইন</span></a><?php endif; ?></div>
    </div>
</header>


<section class="tws__mini_cart fixed bottom-0 right-0 z-10 overflow-x-hidden overflow-y-scroll flex flex-col">
    <?php
        // custom mini cart from inc/woocommerce.php
        if ( function_exists( 'tws_master_pro_woocommerce_header_cart' ) ) {
            tws_master_pro_woocommerce_header_cart();
            // woocommerce_mini_cart(); // default mini cart
        } else{
            woocommerce_mini_cart();
        }
    ?>
</section>