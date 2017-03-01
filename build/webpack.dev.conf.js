var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
});
var getHtmlPlugin = function () {
    var plugins = [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ];
    for (var key in baseWebpackConfig.entry) {
        var htmlWebpackPlugin = new HtmlWebpackPlugin({
            filename: key + '.html',
            template: 'index.html',
            inject: true,
            chunks: [key]
        });
        plugins.push(htmlWebpackPlugin);
    }
    plugins.push(new FriendlyErrorsPlugin());
    return plugins;
};
module.exports = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({sourceMap: config.dev.cssSourceMap})
    },
    // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',
    plugins: getHtmlPlugin()
    //     [
    //     new webpack.DefinePlugin({
    //         'process.env': config.dev.env
    //     }),
    //     // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    //     new webpack.HotModuleReplacementPlugin(),
    //     new webpack.NoEmitOnErrorsPlugin(),
    //     // https://github.com/ampedandwired/html-webpack-plugin
    //     new HtmlWebpackPlugin({
    //         template: 'index.html',
    //         inject: true
    //     }),
    //     new HtmlWebpackPlugin({
    //         filename: 'index.html',
    //         template: 'index.html',
    //         inject: true
    //     }),
    //     new FriendlyErrorsPlugin()
    // ]
})
