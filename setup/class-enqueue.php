<?php

/**
 * Setting up enqueue
 *
 * @package BornDigital
 */

namespace BD_Theme\Setup;

/**
 * Enqueue class to setup assets enqueue
 */
class Enqueue
{
	/**
	 * Setup the flow
	 */
	public function __construct()
	{
		add_action('admin_init', [$this, 'editor_enqueue']);

		add_filter('style_loader_src', [$this, 'support_autoversion']);
		add_filter('script_loader_src', [$this, 'support_autoversion']);

		add_action('login_enqueue_scripts', [$this, 'login_enqueue']);
		add_action('admin_enqueue_scripts', [$this, 'admin_enqueue']);

		add_action('wp_enqueue_scripts', [$this, 'theme_styles']);
		add_action('wp_enqueue_scripts', [$this, 'theme_scripts']);
	}

	/**
	 * Add autoversion support to style & script's "src"
	 *
	 * @param string $src Non-raw url from style/ script enqueue.
	 * @return string
	 */
	public function support_autoversion($src)
	{
		if (strpos($src, 'ver=auto')) {
			$src = remove_query_arg('ver', $src);

			if (false === strpos($src, BASE_URL)) {
				return $src;
			}

			$dir = str_replace(BASE_URL, BASE_DIR, $src);

			if (!file_exists($dir)) {
				$last_modifed = '0';
			} else {
				$last_modifed = date('YmdHis', filemtime($dir));
			}

			$src = add_query_arg('ver', $last_modifed, $src);
		}

		return $src;
	}

	/**
	 * Enqueue all styles & scripts to adjust editor's content
	 *
	 * @return void
	 */
	public function editor_enqueue()
	{
		add_editor_style('assets/css/editor.css');
	}

	/**
	 * Enqueue all styles and scripts to enhance login screen
	 *
	 * @return void
	 */
	public function login_enqueue()
	{
		wp_enqueue_style(
			'style',
			THEME_URL . '/assets/css/login.css',
			[],
			'auto'
		);

		wp_enqueue_script(
			'loginjs',
			THEME_URL . '/assets/js/login.js',
			['jquery'],
			'auto',
			true
		);
	}

	/**
	 * Enqueue all styles and scripts to custom admin style and behaviour
	 *
	 * @return void
	 */
	public function admin_enqueue()
	{
		// styles.

	}

	/**
	 * Enqueue all style that must included to make theme work
	 *
	 * @return void
	 */
	public function theme_styles()
	{

		wp_enqueue_style(
			'sourcesanspro',
			'https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap',
			[],
			'auto'
		);
		wp_enqueue_style(
			'fontawesome',
			THEME_URL . '/assets/fontawesome/css/all.min.css',
			[],
			'auto'
		);
		wp_enqueue_style(
			'style',
			THEME_URL . '/assets/css/style.min.css',
			[],
			'auto'
		);
	}

	/**
	 * Enqueue all scripts that must included to make theme work
	 *
	 * @return void
	 */
	public function theme_scripts()
	{
		

		$user_id = get_current_user_id();

		wp_enqueue_script(
			'theme',
			THEME_URL . '/assets/js/theme.js',
			[],
			'auto',
			true
		);

		wp_enqueue_script(
			'react-script',
			THEME_URL . '/assets/js/react-main.js',
			[],
			'auto',
			true
		);

		//$bannerImage = get_field('banner_image', 'option');
		//$welcomeContent = get_field('welcome_text', 'option');

		$banner = array(
			'title' => __('Search Page', 'freshportfolio'),
			'image' => $bannerImage,
		);

		$welcome = array(
			'title' => __('Welcome', 'freshportfolio'),
			'content' => $welcomeContent,
		);

		$filter = array(
			'title' => __('Search for', 'freshportfolio'),
			'placeholder' => __('Type keywords here...', 'freshportfolio'),
			'sorting' => array(
				'name' => __('Name', 'freshportfolio'),
				'time' => __('Date', 'freshportfolio'),
			),
		);

		// user data
		// 1. avatar
		// 2. displayname
		// 3. first login
		$user 			= get_user_by('id', $user_id);
		$avatar_url 	= get_avatar_url($user_id);
		$display_name   = $user->display_name;

		$is_first_login = get_user_meta($user_id, 'first_login', true);

		wp_localize_script('theme', 'SITE_OPTIONS', array(
			'siteURL' => site_url(),
			'ajaxURL' => admin_url('admin-ajax.php'),
			'themeURL' => THEME_URL,
		));

		wp_localize_script('theme', 'SITE_AJAX', array(
			'hideWelcome' => array(
				'action' => 'hide_welcome',
				'nonce' => wp_create_nonce('HideWelcome'),
			),
		));

		wp_localize_script('theme', 'SITE_DATA', array(
			'banner'      => $banner,
			'welcome'     => $welcome,
			'filter'      => $filter,
			'first_login' => $is_first_login,
			'user_data' => array(
				'avatar' => $avatar_url,
				'display_name' => $display_name,
			)
		));
	}
}

new Enqueue();