const { mix } = require('laravel-mix');

mix.setPublicPath('public');

mix.webpackConfig({
    resolve: {
        alias: {
            Apps: path.resolve(__dirname, 'src/frontend/js/apps'),
            Components: path.resolve(__dirname, 'src/frontend/js/components'),
            Consts: path.resolve(__dirname, 'src/frontend/js/consts'),
            Mixins: path.resolve(__dirname, 'src/frontend/js/mixins'),

        }
    },
    output: {
        filename: '[name].js',
        chunkFilename: 'assets/js/chunks/[name].app.js?v=[chunkhash]',
        publicPath: '/'

    }
});

mix.options({
    postCss: [
        require('precss'),
        require('cssnano')({
            reduceIdents: {
                keyframes: false
            },
            discardUnused: {
                keyframes: false
            }
        }),
        require('postcss-clearfix'),
    ],

});



mix.version();