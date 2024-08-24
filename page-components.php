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

	<!-- <div class="mono-pro-component-collage-container">
		<div class="mono-pro-component-collage" id="mono_pro_component_collage" data="web,design,animation">
			<div class="mono-pro-component-collage-grid">
				<div class="mono-pro-component-collage-item-container web">
					<a href="#" class="mono-pro-component-collage-item">
						<img class="mono-pro-component-collage-item-image" src="<?php echo get_template_directory_uri().'/cdn/image/cat.jpg'?>">
					</a>
				</div>
				<div class="mono-pro-component-collage-item-container design">
					<a href="#" class="mono-pro-component-collage-item">
						<img class="mono-pro-component-collage-item-image" src="<?php echo get_template_directory_uri().'/cdn/image/man.jpg'?>">
					</a>
				</div>
				<div class="mono-pro-component-collage-item-container animation">
					<a href="#" class="mono-pro-component-collage-item">
						<img class="mono-pro-component-collage-item-image" src="<?php echo get_template_directory_uri().'/cdn/image/pattern.jpg'?>">
					</a>
				</div>
				<div class="mono-pro-component-collage-item-container design">
					<a href="#" class="mono-pro-component-collage-item">
						<img class="mono-pro-component-collage-item-image" src="<?php echo get_template_directory_uri().'/cdn/image/leopard.jpg'?>">
					</a>
				</div>
				<div class="mono-pro-component-collage-item-container animation">
					<a href="#" class="mono-pro-component-collage-item">
						<img class="mono-pro-component-collage-item-image" src="<?php echo get_template_directory_uri().'/cdn/image/pattern.jpg'?>">
					</a>
				</div>
				<div class="mono-pro-component-collage-item-container web">
					<a href="#" class="mono-pro-component-collage-item">
						<img class="mono-pro-component-collage-item-image" src="<?php echo get_template_directory_uri().'/cdn/image/graphic3.jpg'?>">
					</a>
				</div>
				<div class="mono-pro-component-collage-item-container animation">
					<a href="#" class="mono-pro-component-collage-item">
						<img class="mono-pro-component-collage-item-image" src="<?php echo get_template_directory_uri().'/cdn/image/cat.jpg'?>">
					</a>
				</div>
				<div class="mono-pro-component-collage-item-container web">
					<a href="#" class="mono-pro-component-collage-item">
						<img class="mono-pro-component-collage-item-image" src="<?php echo get_template_directory_uri().'/cdn/image/puma.jpg'?>">
					</a>
				</div>
				<div class="mono-pro-component-collage-item-container design">
					<a href="#" class="mono-pro-component-collage-item">
						<img class="mono-pro-component-collage-item-image" src="<?php echo get_template_directory_uri().'/cdn/image/man.jpg'?>">
					</a>
				</div>

			</div>
		</div>
	</div> -->

	<div class="mono-pro-component-pricing-container">
		<ul class="mono-pro-component-pricing" id="pricing-x">
			<li class="mono-pro-component-pricing-item-container">
				<div class="mono-pro-component-pricing-item">
					<p class="mono-pro-component-pricing-item-header">Basic Package</p>
					<div class="mono-pro-component-pricing-item-cost">
						<p class="mono-pro-component-pricing-item-cost-currency">UGX</p>
						<p class="mono-pro-component-pricing-item-cost-figure">987,654</p>
					</div>
					<p class="mono-pro-component-pricing-item-subheading">Essential Design</p>
					<ul class="mono-pro-component-pricing-item-detail-list">
						<li class="mono-pro-component-pricing-item-detail">
							<div class="mono-pro-component-pricing-item-details-icon-offset"></div>
							<div class="mono-pro-component-pricing-item-details-icon">
								<div class="mono-pro-component-pricing-item-details-icon-checkbox">
									<div class="mono-pro-component-pricing-item-details-icon-checkbox-indicator"></div>
								</div>
							</div>
							<p class="mono-pro-component-pricing-item-details-text">Logo Design</p>
						</li>
						<li class="mono-pro-component-pricing-item-detail">
							<div class="mono-pro-component-pricing-item-details-icon-offset"></div>
							<div class="mono-pro-component-pricing-item-details-icon">
								<div class="mono-pro-component-pricing-item-details-icon-checkbox">
									<div class="mono-pro-component-pricing-item-details-icon-checkbox-indicator"></div>
								</div>
							</div>
							<p class="mono-pro-component-pricing-item-details-text">1 Revision Round</p>
						</li>
					</ul>
					<a class="mono-pro-component-pricing-item-link">
						<button class="mono-pro-component-pricing-item-link-button">
							<p class="mono-pro-component-pricing-item-link-button-label">Get Started</p>
						</button>	
					</a>
				</div>
			</li>
		</ul>
	</div>
	

	<div style="height:30cm"></div>

<?php
get_footer();
