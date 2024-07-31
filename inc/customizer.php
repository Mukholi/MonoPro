<?php
/**
 * wordpress Theme Customizer
 *
 * @package wordpress
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function wordpress_customize_register( $wp_customize ) {
    // Existing code...

    // Modify priority of existing controls (if needed)
    $wp_customize->get_control( 'blogname' )->priority = 10;
    $wp_customize->get_control( 'blogdescription' )->priority = 20;
    $wp_customize->get_control( 'site_icon' )->priority = 30;
    $wp_customize->get_control( 'custom_logo' )->priority = 40;

	

  // Add a checkbox to use site font as default
  $wp_customize->add_setting( 'use_site_font', array(
	'default'           => false,
	'sanitize_callback' => 'sanitize_checkbox',
) );


// Add font family field
$wp_customize->add_setting( 'site_font_family', array(
	'default'           => 'Poppins, Arial, sans-serif',
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( 'site_font_family', array(
	'label'    => __( 'Site Font Family', 'wordpress' ),
	'section'  => 'title_tagline',
	'type'     => 'text',
	'priority' => 80, // Place it after existing fields
) );

// Add font link field
$wp_customize->add_setting( 'site_font_link', array(
	'default'           => '',
	'sanitize_callback' => 'esc_url_raw',
) );

$wp_customize->add_control( 'site_font_link', array(
	'label'    => __( 'Google Font Link', 'wordpress' ),
	'section'  => 'title_tagline',
	'type'     => 'url',
	'priority' => 90, // Place it after the font family field
));

$wp_customize->add_control( 'use_site_font', array(
	'label'    => __( 'Use Site Font as Default', 'wordpress' ),
	'section'  => 'title_tagline',
	'type'     => 'checkbox',
	'priority' => 91, // Place it after existing fields
) );



}
add_action( 'customize_register', 'wordpress_customize_register' );

// Sanitize checkbox input
function sanitize_checkbox( $checked ) {
    return ( ( isset( $checked ) && true == $checked ) ? true : false );
}

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function wordpress_customize_partial_blogname() {
	bloginfo( 'name' );
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function wordpress_customize_partial_blogdescription() {
	bloginfo( 'description' );
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function wordpress_customize_preview_js() {
	wp_enqueue_script( 'wordpress-customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), _S_VERSION, true );
}
add_action( 'customize_preview_init', 'wordpress_customize_preview_js' );


function wordpress_customize_css() {
	$use_site_font = get_theme_mod( 'use_site_font', false );
    $font_family = get_theme_mod( 'site_font_family', 'Poppins, Arial, sans-serif' );

    ?>

    <style type="text/css">
		<?php if ( $use_site_font ) : ?>
            body, p, h1, h2, h3, h4, h5, h6 {
                font-family: <?php echo esc_html( $font_family ); ?>;
            }
			
        <?php endif; ?>
        #page.light-theme {
            --primary-color: <?php echo get_theme_mod( 'light_primary_color', '#000000' ); ?>;
            --secondary-color: <?php echo get_theme_mod( 'light_secondary_color', '#000000' ); ?>;
            --tertiary-color: <?php echo get_theme_mod( 'light_tertiary_color', '#000000' ); ?>;
            --heading-color: <?php echo get_theme_mod( 'light_heading_color', '#000000' ); ?>;
            --paragraph-color: <?php echo get_theme_mod( 'light_paragraph_color', '#000000' ); ?>;
            --shadow-color: <?php echo get_theme_mod( 'light_shadow_color', '#000000' ); ?>;
        }
        #page.dark-theme {
            --primary-color: <?php echo get_theme_mod( 'dark_primary_color', '#ffffff' ); ?>;
            --secondary-color: <?php echo get_theme_mod( 'dark_secondary_color', '#ffffff' ); ?>;
            --tertiary-color: <?php echo get_theme_mod( 'dark_tertiary_color', '#ffffff' ); ?>;
            --heading-color: <?php echo get_theme_mod( 'dark_heading_color', '#ffffff' ); ?>;
            --paragraph-color: <?php echo get_theme_mod( 'dark_paragraph_color', '#ffffff' ); ?>;
            --shadow-color: <?php echo get_theme_mod( 'dark_shadow_color', '#ffffff' ); ?>;
        }

        /* Example usage in CSS */
        .primary { color: var(--primary-color); }
        .secondary { color: var(--secondary-color); }
        .tertiary { color: var(--tertiary-color); }
        h1, h2, h3, h4, h5, h6 { color: var(--heading-color); }
        p { color: var(--paragraph-color); }
        .component { box-shadow: 0 4px 8px var(--shadow-color); }
    </style>
    <?php
}
add_action( 'wp_head', 'wordpress_customize_css' );