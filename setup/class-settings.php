<?php
/**
* Setting up theme settings
*
* @package BornDigital
*/

namespace BD_Theme\Setup;

defined( 'ABSPATH' ) || die( "Can't access directly" );

/**
* Settings class to setup theme settings
*/
class Settings {

	/**
	* Setup the flow
	*/
	public function __construct() {
		// phpcs:ignore
		// add_action( 'init', [ $this, 'add_image_sizes' ] );
		add_filter( 'show_admin_bar', '__return_false' );
	}

	/**
	* Adding image sizes
	*/
	public function add_image_sizes() {
		/**
		* You can add images size in here
		*
		* @link https://developer.wordpress.org/reference/functions/add_image_size/
		*/
		// adjust the sizes below according to your need
		$sizes = [
			[
				'name'   => "custom-size",
				'width'  => 400,
				'height' => 9999
			],
			[
				'name'   => "another-custom-size",
				'width'  => 300,
				'height' => 200,
				'crop'   => true
			]
		];

		if (!$sizes) {
			return;
		}

		foreach ($sizes as $size) {
			$name   = $size['name'];
			$width  = isset($size['width'])     ? $size['width']    : 9999;
			$height = isset($size['height'])    ? $size['height']   : 9999;
			$crop   = isset($size['crop'])      ? $size['crop']     : false;

			add_image_size($name, $width, $height, $crop);
		}
	}
}

new Settings();
