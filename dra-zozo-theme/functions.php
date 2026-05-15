<?php
function dra_zozo_ramos_enqueue_scripts() {
    wp_enqueue_style('dra-zozo-ramos-style', get_stylesheet_uri());
    wp_enqueue_script('dra-zozo-ramos-main', get_template_directory_uri() . '/js/main.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'dra_zozo_ramos_enqueue_scripts');

// Add theme support
add_theme_support('post-thumbnails');
add_theme_support('title-tag');

// Register menus
function dra_zozo_ramos_register_menus() {
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'dra-zozo-ramos'),
    ));
}
add_action('init', 'dra_zozo_ramos_register_menus');

// Elementor compatibility
add_theme_support('elementor');
?>