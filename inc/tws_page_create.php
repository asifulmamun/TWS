<?php
/**
 * Auto Page Create
 *
 *
 * @package TWS_Master_Pro
 */

// Create Page automatic
function get_default_pages() {
    return array(
        'support' => array(
            'title' => 'Support',
            'content' => 'This is the Support for support to user.',
        ),

        'about' => array(
            'title' => 'About',
            'content' => 'This is the About page.',
        ),
        // Add more pages here if needed
    );
}

// execuite the auto page create function
function create_default_pages_on_activation() {
    $default_pages = get_default_pages();

    foreach ($default_pages as $slug => $page_data) {
        // Check if the page doesn't exist already
        if (!get_page_by_path($slug)) {
            $page_id = wp_insert_post(array(
                'post_title'   => $page_data['title'],
                'post_name'    => $slug,
                'post_content' => $page_data['content'],
                'post_status'  => 'publish',
                'post_type'    => 'page',
            ));

            if ($page_id) {
                // Update the page ID in your theme's options or settings if needed
            }
        }
    }
}
add_action('after_switch_theme', 'create_default_pages_on_activation');




// change permalink as a post name by default
function set_permalink_structure_on_activation() {
    update_option('permalink_structure', '/%postname%/');
}
add_action('after_switch_theme', 'set_permalink_structure_on_activation');


?>