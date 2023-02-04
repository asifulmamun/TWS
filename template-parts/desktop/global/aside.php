<aside id="aside" class="fixed left-0 bottom-0 overflow-x-hidden overflow-y-scroll">
    <div class="block text-center p-1 border m-1 font-medium"><?php echo (get_bloginfo('description', 'display') || is_customize_preview())? get_bloginfo('description', 'display'): null;?></div>
    <nav id="site-navigation" class="main-navigation">
        <?php
            wp_nav_menu(
                array(
                    'theme_location' => 'primary-menu',
                    'menu_id'        => 'primary_menu',
                    'items_wrap'	 => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                )
            );
        ?>
    </nav>
    <div class="grid grid-cols-4 fixed bottom-0 left-0 z-10 border-t tws__quick_access_menu">
        <nav class="col-span-4 flex">
            <?php wp_nav_menu(array('theme_location' => 'quick-access-menu', 'menu_id' => 'quick-access-menu')); // Quick menu print ?>
        </nav>
    </div>

    <ul>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
        <li>DJ</li>
    </ul>
</aside>