<?php
/**
 * @package BornDigital
 */

namespace BD\ACF;

/**
 * Class to setup the component
 */
class Setup
{
	/**
	 * Current module directory
	 *
	 * @var string
	 */
	private $dir;

	/**
	 * Current module url
	 *
	 * @var string
	 */
	private $url;

	/**
	 * Setup the flow
	 */
	public function __construct()
	{
		$this->dir = MODULES_DIR . '/acf';
		$this->url = MODULES_URL . '/acf';

		add_action( 'admin_enqueue_scripts', array($this, 'acf_custom_js') );
		add_filter( 'acf/prepare_field_for_export', array($this, 'make_field_translatable') );
	}

	public function acf_custom_js()
	{

		$screen = get_current_screen();

		if ($screen->id == 'custom-fields_page_acf-tools' && !isset($_GET['keys'])) {
			wp_enqueue_style(
				'bd-acf-css',
				$this->url . '/assets/acf-export-to-theme.css',
				[],
				'auto'
			);

			wp_enqueue_script(
				'bd-acf-js',
				$this->url . '/assets/acf-export-to-theme.js',
				[ 'jquery' ],
				'auto',
				true
			);

			wp_localize_script('bd-acf-js', 'objBdAcf', array(
				'ajaxURL' => admin_url('admin-ajax.php'),
				'action'  => 'generate_acf_file',
				'nonce'   => wp_create_nonce('GenerateAcfFile'),
			));

		}


	}

	public function make_field_translatable($field)
	{

		if ( isset($field['title']) && !empty($field['title']) ) {
			$field['title'] = "__('" . $field['title'] . "')";
		}

		if ( isset($field['label']) && !empty($field['label']) ) {
			$field['label'] = $this->_make_text_translatable($field['label']);
		}

		if ( isset($field['instructions']) && !empty($field['instructions']) ) {
			$field['instructions'] = $this->_make_text_translatable($field['instructions']);
		}

		if ( isset($field['message']) && !empty($field['message']) ) {
			$field['message'] = $this->_make_text_translatable($field['message']);
		}

		return $field;
	}

	private function _make_text_translatable($text) {
		return "__('" . $text . "', '" . BD_ACF_DOMAIN . "')";
	}

}

new Setup();
