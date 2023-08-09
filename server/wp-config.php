<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp-server' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'b]fSkHEo;|36}B$zCeCgzs/4eL8x+bHq!/M:*yjq6$ lksHo<(_jg5p8kY !}MfA' );
define( 'SECURE_AUTH_KEY',  '!qL@/HTnQl%?}r/5Yr0R,IdmO8b?Nn?in^>CZ^g4P7} :9qwQ@e]9<|t; d?~&ls' );
define( 'LOGGED_IN_KEY',    '}>HYd2>WtZf@-L}?U-o X5Y3BTRjx5Sg_K$?1i64JrSnbGhJG]q})6{B>2@+OE-Y' );
define( 'NONCE_KEY',        'sx(ig^#?/h~-1g_vAnbKOppj7ab]x9TN~qC.d/m3L{RVI5dk6_d0(PD$+4D*,>6D' );
define( 'AUTH_SALT',        '3xH1/8nnqUNnNUj~@nr]r6Tt(@]INvYF*8/9$DB1vVP$sN:-e8o *=:WU]+lIRbk' );
define( 'SECURE_AUTH_SALT', 'hH^UhJAH3a%c-{mk/0={I`feG)*=yuw()#xxH^N{h?Y}ovFTrYGVj+A4@E!QCj0R' );
define( 'LOGGED_IN_SALT',   'I-0h`;y hbhQ4S-w3;yI=:58xt!)n8axzU<@lE:tEew?{]cvjRhQQq4T0he`)rEU' );
define( 'NONCE_SALT',       'szI&ze8f^LiN=LpPU_>qvWXBZ_D^7B;B=Hp_<t?$,I11M7w68/2;we23S:e7*.Gl' );

define('JWT_AUTH_SECRET_KEY', '=<-Gg?sYysUc:[|r96d@A$I=?es)4+XAH2o1Q-eo[-QI,i7b-~f5%]4PA1Yn?Lh+');
define('JWT_AUTH_CORS_ENABLE', true);

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
