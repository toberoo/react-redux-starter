const webpack = require('webpack');
const config = require('./base.config.js')
const path = require('path')

entry = config.entry.app[0]
config.entry.app = [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    entry
]

config.plugins.push(new webpack.HotModuleReplacementPlugin())
config.plugins.push(new webpack.NamedModulesPlugin())
config.plugins.push(new webpack.NoEmitOnErrorsPlugin())

config.plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'dev')
}))

config.module.rules.push({
    test: /\.jsx/,
    use: ['react-hot-loader/webpack', 'babel-loader']
})

module.exports = config
