<?php
/**
 * wordpress functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package wordpress
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function wordpress_setup() {
	/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on wordpress, use a find and replace
		* to change 'wordpress' to the name of your theme in all the template files.
		*/
	load_theme_textdomain( 'wordpress', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	add_theme_support( 'title-tag' );

	/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'menu-1' => esc_html__( 'Primary', 'wordpress' ),
		)
	);

	/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'wordpress_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
}
add_action( 'after_setup_theme', 'wordpress_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function wordpress_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'wordpress_content_width', 640 );
}
add_action( 'after_setup_theme', 'wordpress_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function wordpress_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'wordpress' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'wordpress' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'wordpress_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function wordpress_scripts() {
	wp_enqueue_style( 'wordpress-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_style_add_data( 'wordpress-style', 'rtl', 'replace' );
	wp_enqueue_style( 'theme', get_template_directory_uri() . '/css/theme.css', array(), _S_VERSION );

	wp_enqueue_script( 'wordpress-theme', get_template_directory_uri() . '/js/theme.js', array(), _S_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'wordpress_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

function wordpress_customizer_script() {
    // Check if we're in the admin area and if it's the Theme Customizer screen
    if ( is_admin() && isset( $_GET['preview'] ) ) {
        wp_enqueue_script(
            'mytheme-customizer-script', // Handle for the script
            get_template_directory_uri() . '/js/customizer.js', // Path to the script
            array( 'customize-preview' ), // Dependencies
            null, // Version number
            true // Load in footer
        );
    }
}
add_action( 'customize_preview_init', 'wordpress_customizer_script' );

//Remove Default Customizer Sections
function wordpress_customize_remove_sections( $wp_customize ) {
    // Remove the Colors section
    $wp_customize->remove_section( 'colors' );

    // Remove the Header Image section
    $wp_customize->remove_section( 'header_image' );

    // Remove the Background Image section
    $wp_customize->remove_section( 'background_image' );

    // Remove the Widgets section
    $wp_customize->remove_section( 'widget' );

    // Remove the Homepage Settings section
    $wp_customize->remove_section( 'static_front_page' ); // This section is typically named 'static_front_page'
}
add_action( 'customize_register', 'wordpress_customize_remove_sections', 20 );

//Add Customizer Sections
function wordpress_customize_add_sections( $wp_customize ) {
    // Remove Widgets section if necessary
    $wp_customize->remove_section( 'widgets' );

    // Add Light Theme Colors section
    $wp_customize->add_section( 'light_theme_colors', array(
        'title'    => __( 'Light Theme Colors', 'wordpress' ),
        'priority' => 100,
    ) );

    // Add Dark Theme Colors section
    $wp_customize->add_section( 'dark_theme_colors', array(
        'title'    => __( 'Dark Theme Colors', 'wordpress' ),
        'priority' => 101,
    ) );

    // Light Theme Colors Settings
    $colors = array(
        'primary_color'          => __( 'Primary Color', 'wordpress' ),
        'secondary_color'        => __( 'Secondary Color', 'wordpress' ),
        'tertiary_color'         => __( 'Tertiary Color', 'wordpress' ),
        'heading_color'          => __( 'Heading Text', 'wordpress' ),
        'paragraph_color'        => __( 'Paragraph Text', 'wordpress' ),
        'heading_list_color'     => __( 'Heading List', 'wordpress' ),
        'paragraph_list_color'   => __( 'Paragraph List', 'wordpress' ),
        'pagination_active_color'=> __( 'Pagination Active', 'wordpress' ),
        'pagination_color'       => __( 'Pagination List', 'wordpress' ),
        'shadow_color'           => __( 'Shadow', 'wordpress' ),
		'card_heading'           => __( 'Card Heading', 'wordpress' ),
		'card_paragraph'         => __( 'Card Paragraph', 'wordpress' ),
		'card_bg'                => __( 'Card Background', 'wordpress' ),
		'badge_text'             => __( 'Badge Text', 'wordpress' ),
		'badge_bg'               => __( 'Badge Background', 'wordpress' ),
		'background'             => __( 'Background Color', 'wordpress' ),
    );

    foreach ( $colors as $id => $label ) {
        // Add settings
        $wp_customize->add_setting( "light_{$id}", array(
            'default'           => '#000000',
            'sanitize_callback' => 'sanitize_hex_color',
        ) );
        
        // Add controls
        $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, "light_{$id}", array(
            'label'    => $label,
            'section'  => 'light_theme_colors',
            'settings' => "light_{$id}",
        ) ) );
        
        // Repeat for Dark Theme Colors
        $wp_customize->add_setting( "dark_{$id}", array(
            'default'           => '#000000',
            'sanitize_callback' => 'sanitize_hex_color',
        ) );
        
        $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, "dark_{$id}", array(
            'label'    => $label,
            'section'  => 'dark_theme_colors',
            'settings' => "dark_{$id}",
        ) ) );



		// Add a new Fonts section
		$wp_customize->add_section( 'fonts_section', array(
			'title'    => __( 'Fonts', 'wordpress' ),
			'priority' => 103,
		) );

		// Font settings
		$fonts = array(
			'use_font' => __( 'Use Custom Font', 'wordpress' ),
			'font_family' => __( 'Font Family', 'wordpress' ),
			'font_uri' => __( 'Font URI', 'wordpress' ),
			'font_weight' => __( 'Font Weight', 'wordpress' ),
			'letter_spacing' => __( 'Letter Spacing', 'wordpress' ),
			'line_height' => __( 'Line Height', 'wordpress' ),
		);

		// Add font use checkbox
		$wp_customize->add_setting( 'use_font', array(
			'default'           => false,
			'sanitize_callback' => 'sanitize_checkbox',
		) );
		$wp_customize->add_control( 'use_font', array(
			'label'    => $fonts['use_font'],
			'section'  => 'fonts_section',
			'type'     => 'checkbox',
			'priority' => 10,
		) );

		// Add font family
		$wp_customize->add_setting( 'font_family', array(
			'default'           => 'Arial, sans-serif',
			'sanitize_callback' => 'sanitize_text_field',
		) );
		$wp_customize->add_control( 'font_family', array(
			'label'    => $fonts['font_family'],
			'section'  => 'fonts_section',
			'type'     => 'text',
			'priority' => 20,
		) );

		// Add font URI
		$wp_customize->add_setting( 'font_uri', array(
			'default'           => '',
			'sanitize_callback' => 'esc_url_raw',
		) );
		$wp_customize->add_control( 'font_uri', array(
			'label'    => $fonts['font_uri'],
			'section'  => 'fonts_section',
			'type'     => 'text',
			'priority' => 30,
		) );

		// Add font weight
		$wp_customize->add_setting( 'font_weight', array(
			'default'           => '400',
			'sanitize_callback' => 'absint',
		) );
		$wp_customize->add_control( 'font_weight', array(
			'label'    => $fonts['font_weight'],
			'section'  => 'fonts_section',
			'type'     => 'range',
			'input_attrs' => array(
				'min' => 100,
				'max' => 900,
				'step' => 100,
			),
			'priority' => 40,
		) );

		// Add letter spacing
		$wp_customize->add_setting( 'letter_spacing', array(
			'default'           => '0px',
			'sanitize_callback' => 'sanitize_text_field',
		) );
		$wp_customize->add_control( 'letter_spacing', array(
			'label'    => $fonts['letter_spacing'],
			'section'  => 'fonts_section',
			'type'     => 'text',
			'priority' => 50,
		) );

		// Add line height
		$wp_customize->add_setting( 'line_height', array(
			'default'           => '1.5',
			'sanitize_callback' => 'sanitize_text_field',
		) );
		$wp_customize->add_control( 'line_height', array(
			'label'    => $fonts['line_height'],
			'section'  => 'fonts_section',
			'type'     => 'text',
			'priority' => 60,
		) );

		// Apply the settings to different elements
		$text_elements = array(
			'heading' => __( 'Heading Text', 'wordpress' ),
			'paragraph' => __( 'Paragraph Text', 'wordpress' ),
			'pagination' => __( 'Pagination Text', 'wordpress' ),
			'heading_list' => __( 'Heading List Text', 'wordpress' ),
			'paragraph_list' => __( 'Paragraph List Text', 'wordpress' ),
		);

		foreach ( $text_elements as $element => $label ) {
			$wp_customize->add_setting( $element . '_font_family', array(
				'default'           => '',
				'sanitize_callback' => 'sanitize_text_field',
			) );
			$wp_customize->add_control( $element . '_font_family', array(
				'label'    => $label . ' ' . $fonts['font_family'],
				'section'  => 'fonts_section',
				'type'     => 'text',
				'priority' => 70,
			) );

			$wp_customize->add_setting( $element . '_font_weight', array(
				'default'           => '400',
				'sanitize_callback' => 'absint',
			) );
			$wp_customize->add_control( $element . '_font_weight', array(
				'label'    => $label . ' ' . $fonts['font_weight'],
				'section'  => 'fonts_section',
				'type'     => 'range',
				'input_attrs' => array(
					'min' => 100,
					'max' => 900,
					'step' => 100,
				),
				'priority' => 80,
			) );

			$wp_customize->add_setting( $element . '_letter_spacing', array(
				'default'           => '0px',
				'sanitize_callback' => 'sanitize_text_field',
			) );
			$wp_customize->add_control( $element . '_letter_spacing', array(
				'label'    => $label . ' ' . $fonts['letter_spacing'],
				'section'  => 'fonts_section',
				'type'     => 'text',
				'priority' => 90,
			) );

			$wp_customize->add_setting( $element . '_line_height', array(
				'default'           => '1.5',
				'sanitize_callback' => 'sanitize_text_field',
			) );
			$wp_customize->add_control( $element . '_line_height', array(
				'label'    => $label . ' ' . $fonts['line_height'],
				'section'  => 'fonts_section',
				'type'     => 'text',
				'priority' => 100,
			) );
		}
    }
}
add_action( 'customize_register', 'wordpress_customize_add_sections', 20 );


/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

