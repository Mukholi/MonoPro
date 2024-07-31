/* global wp, jQuery */
/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

( function( $ ) {
    // Function to update CSS variables
    function updateCssVariables() {
        var lightThemeColors = {
            primaryColor: wp.customize( 'light_primary_color' ).get(),
            secondaryColor: wp.customize( 'light_secondary_color' ).get(),
            tertiaryColor: wp.customize( 'light_tertiary_color' ).get(),
            headingColor: wp.customize( 'light_heading_color' ).get(),
            paragraphColor: wp.customize( 'light_paragraph_color' ).get(),
            headingListColor: wp.customize( 'light_heading_list_color' ).get(),
            paragraphListColor: wp.customize( 'light_paragraph_list_color' ).get(),
            paginationActiveColor: wp.customize( 'light_pagination_active_color' ).get(),
            paginationColor: wp.customize( 'light_pagination_color' ).get(),
            shadowColor: wp.customize( 'light_shadow_color' ).get(),
            cardHeading: wp.customize( 'light_card_heading' ).get(),
            cardParagraph: wp.customize( 'light_card_paragraph' ).get(),
            cardBg: wp.customize( 'light_card_bg' ).get(),
            badgeText: wp.customize( 'light_badge_text' ).get(),
            badgeBg: wp.customize( 'light_badge_bg' ).get(),
            background: wp.customize( 'light_background' ).get(),
        };

        var darkThemeColors = {
            primaryColor: wp.customize( 'dark_primary_color' ).get(),
            secondaryColor: wp.customize( 'dark_secondary_color' ).get(),
            tertiaryColor: wp.customize( 'dark_tertiary_color' ).get(),
            headingColor: wp.customize( 'dark_heading_color' ).get(),
            paragraphColor: wp.customize( 'dark_paragraph_color' ).get(),
            headingListColor: wp.customize( 'dark_heading_list_color' ).get(),
            paragraphListColor: wp.customize( 'dark_paragraph_list_color' ).get(),
            paginationActiveColor: wp.customize( 'dark_pagination_active_color' ).get(),
            paginationColor: wp.customize( 'dark_pagination_color' ).get(),
            shadowColor: wp.customize( 'dark_shadow_color' ).get(),
            cardHeading: wp.customize( 'dark_card_heading' ).get(),
            cardParagraph: wp.customize( 'dark_card_paragraph' ).get(),
            cardBg: wp.customize( 'dark_card_bg' ).get(),
            badgeText: wp.customize( 'dark_badge_text' ).get(),
            badgeBg: wp.customize( 'dark_badge_bg' ).get(),
            background: wp.customize( 'dark_background' ).get(),
        };

        // Apply light theme colors
        $( '#page .light-theme' ).css({
            '--primary-color': lightThemeColors.primaryColor,
            '--secondary-color': lightThemeColors.secondaryColor,
            '--tertiary-color': lightThemeColors.tertiaryColor,
            '--heading-color': lightThemeColors.headingColor,
            '--paragraph-color': lightThemeColors.paragraphColor,
            '--heading-list-color': lightThemeColors.headingListColor,
            '--paragraph-list-color': lightThemeColors.paragraphListColor,
            '--pagination-active-color': lightThemeColors.paginationActiveColor,
            '--pagination-color': lightThemeColors.paginationColor,
            '--shadow-color': lightThemeColors.shadowColor,
            '--card-heading': lightThemeColors.cardHeading,
            '--card-paragraph': lightThemeColors.cardParagraph,
            '--card-bg': lightThemeColors.cardBg,
            '--badge-text': lightThemeColors.badgeText,
            '--badge-bg': lightThemeColors.badgeBg,
            '--background': lightThemeColors.background,
        });

        // Apply dark theme colors
        $( '#page .dark-theme' ).css({
            '--primary-color': darkThemeColors.primaryColor,
            '--secondary-color': darkThemeColors.secondaryColor,
            '--tertiary-color': darkThemeColors.tertiaryColor,
            '--heading-color': darkThemeColors.headingColor,
            '--paragraph-color': darkThemeColors.paragraphColor,
            '--heading-list-color': darkThemeColors.headingListColor,
            '--paragraph-list-color': darkThemeColors.paragraphListColor,
            '--pagination-active-color': darkThemeColors.paginationActiveColor,
            '--pagination-color': darkThemeColors.paginationColor,
            '--shadow-color': darkThemeColors.shadowColor,
            '--card-heading': darkThemeColors.cardHeading,
            '--card-paragraph': darkThemeColors.cardParagraph,
            '--card-bg': darkThemeColors.cardBg,
            '--badge-text': darkThemeColors.badgeText,
            '--badge-bg': darkThemeColors.badgeBg,
            '--background': darkThemeColors.background,
        });
    }

    // Bind the update function to Customizer settings changes
    wp.customize.bind( 'preview-ready', function() {
        wp.customize.bind( 'change', updateCssVariables );
        updateCssVariables(); // Initial call to set the CSS variables
    });
} )( jQuery );
