var Webpack = require("webpack");
var config = require('./webpack.base.config.js');

// var ExtractTextPlugin = require('extract-text-webpack-plugin'); //用来关联外部文件
config.plugins = (config.plugins || []).concat([
    // new ExtractTextPlugin('[name].[chunkhash].css'),
    new Webpack.BannerPlugin("author:cc"),
    new Webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new Webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
]);
module.exports = config;
