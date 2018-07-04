let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */
const config = {
    externals: {
        "jquery": "jQuery",
        "bootstrap": 'Bootstrap',
        "bootstrap-datepicker": "bootstrap-datepicker",
        "moment": "Moment"
    },
    output: {
        library: 'singleDatepicker',
        libraryTarget: 'umd',
        umdNamedDefine: true
    }
};
mix.webpackConfig(config);

mix.js('src/js/main.js', 'dist/js/single-datepicker.js')
   .setPublicPath('dist');