var config = require('./webpack.base.config.js');
var Webpack = require("webpack");
config.plugins = (config.plugins || []).concat([
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
