<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package wordpress
 */

get_header();
?>

	<main id="primary" class="site-main">

		<?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', 'page' );

		endwhile; // End of the loop.
		?>

	</main><!-- #main -->

	<!-- <div class="mono-pro-component-selector-container">
		<div class="mono-pro-component-selector element-bg-color" id="mono-pro-component-selector-x">
			<div class="mono-pro-component-selector-item-header">
				<p class="font-color mono-pro-component-selector-item-header-text">x</p>
				<p class="icon-color">+</p>
			</div>
			<ul class="mono-pro-component-selector-list">
				<li class="mono-pro-component-selector-item selector-item-active"><p class="font-color">All Projects</p></li>
				<li class="mono-pro-component-selector-item"><p class="font-color">Web</p></li>
				<li class="mono-pro-component-selector-item"><p class="font-color">Design</p></li>
				<li class="mono-pro-component-selector-item"><p class="font-color">Animation</p></li>
			</ul>
		</div>
	</div> -->

	<div class="mono-pro-component-collage-container">
		<div class="mono-pro-component-collage" id="mono-pro-component-collage">
			<div class="mono-pro-component-collage-grid">
				<div class="mono-pro-component-collage-item-container">
					<a href="#" class="mono-pro-component-collage-item">
						<img class="mono-pro-component-collage-item-image" src="<?php echo get_template_directory_uri().'/cdn/image/cat.jpg'?>">
					</a>
				</div>
				<div class="mono-pro-component-collage-item-container">
					<a href="#" class="mono-pro-component-collage-item">
						<img class="mono-pro-component-collage-item-image" src="<?php echo get_template_directory_uri().'/cdn/image/man.jpg'?>">
					</a>
				</div>
				<div class="mono-pro-component-collage-item-container">
					<a href="#" class="mono-pro-component-collage-item">
						<img class="mono-pro-component-collage-item-image" src="<?php echo get_template_directory_uri().'/cdn/image/pattern.jpg'?>">
					</a>
				</div>
				<div class="mono-pro-component-collage-item-container">
					<a href="#" class="mono-pro-component-collage-item">
						<img class="mono-pro-component-collage-item-image" src="<?php echo get_template_directory_uri().'/cdn/image/leopard.jpg'?>">
					</a>
				</div>
				<div class="mono-pro-component-collage-item-container">
					<a href="#" class="mono-pro-component-collage-item">
						<img class="mono-pro-component-collage-item-image" src="<?php echo get_template_directory_uri().'/cdn/image/puma.jpg'?>">
					</a>
				</div>
				<div class="mono-pro-component-collage-item-container">
					<a href="#" class="mono-pro-component-collage-item">
						<img class="mono-pro-component-collage-item-image" src="<?php echo get_template_directory_uri().'/cdn/image/graphic3.jpg'?>">
					</a>
				</div>
			</div>
		</div>
	</div>

	<div style="height:15cm"></div>

<?php
get_footer();
