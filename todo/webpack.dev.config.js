var config = require('./webpack.base.config.js');

config.devtool = 'eval-source-map';

config.devServer = {
  noInfo: true,
  hot:false
};

module.exports = config;