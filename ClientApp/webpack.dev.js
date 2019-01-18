'use strict'
const merge = require('webpack-merge');
const common = require(`./webpack.common.js`);

module.exports = merge(common, {    
    devtool: "source-map",
    devServer: {
        historyApiFallback: true
      },
      mode: "development",
});