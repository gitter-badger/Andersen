const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


// mix.styles([
//         'resources/assets/h-ui.css/H-ui.admin.css',
//         'resources/assets/h-ui.css/H-ui.min.css'
//     ],'public/css/h-ui.css')
//     .scripts([
//         'resources/assets/h-ui.js/jquery.min.js',
//         'resources/assets/h-ui.js/layer.js',
//         'resources/assets/h-ui.js/H-ui.min.js',
//         'resources/assets/h-ui.js/H-ui.admin.js'
//     ],'public/js/h-ui.main.js')
//     .scripts([
//         'resources/assets/h-ui.js/jquery.min.js',
//         'resources/assets/h-ui.js/layer.js',
//         'resources/assets/h-ui.js/jquery.validate.js',
//         'resources/assets/h-ui.js/validate-methods.js',
//         'resources/assets/h-ui.js/messages_zh.js',
//         'resources/assets/h-ui.js/H-ui.min.js',
//         'resources/assets/h-ui.js/H-ui.admin.js'
//     ],'public/js/h-ui.base.js')
max.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');
