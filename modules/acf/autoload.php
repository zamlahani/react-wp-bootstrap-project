<?php
/**
 * Autoloading
 *
 * @package BornDigital
 */

namespace BD;

defined( 'ABSPATH' ) || die( "Can't access directly" );

define('BD_ACF_DOMAIN', 'borndigital_acf');

$load_acf_file = defined('IS_LOCAL') && IS_LOCAL ? false : true;
if (file_exists(__DIR__ . '/fields/bd-acf-fields.php') && $load_acf_file) {
    require_once __DIR__ . '/fields/bd-acf-fields.php';
}

require_once __DIR__ . '/ajax/class-generate-acf-file.php';
require_once __DIR__ . '/admin/class-setup.php';
