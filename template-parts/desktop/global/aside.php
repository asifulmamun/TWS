<aside id="aside" class="fixed left-0 bottom-0 overflow-x-hidden overflow-y-scroll flex flex-col">
    <div class="block text-center p-1 border m-1 font-medium"><?php echo (get_bloginfo('description', 'display') || is_customize_preview())? get_bloginfo('description', 'display'): null;?></div>
        <?php
            wp_nav_menu(
                array(
                    'theme_location'        => 'primary-menu',
                    'menu_id'               => 'primary_menu',
                    'container'             => 'nav',
                    'container_class'       => '',
                    'container_id'          => 'primary_menu_nav',
                    'container_aria_label'  => '',
                    'items_wrap'	        => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                )
            );
        ?>

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


    <div class="tws__quick_access_menu fixed bottom-0 z-10 border-t">
        <?php
            // Quick menu print 
            wp_nav_menu(
                array(
                    'theme_location'        => 'quick-access-menu',
                    'menu_id'               => 'quick-access-menu',
                    'container'             => 'nav',
                    'container_class'       => '',
                    'container_id'          => 'quick_access_menu_nav',
                    'container_aria_label'  => '',
                    'items_wrap'	        => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                )
            ); 
        ?>
    </div>


</aside>
