const webpack = require('webpack');
var config = require('./base.config.js')

config.module.rules.push({
    test: /\.jsx/,
    use: ['babel-loader']
})
config.plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'qa')
}))

module.exports = config
