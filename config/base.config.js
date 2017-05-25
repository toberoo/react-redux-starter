/**
 * Webpack is a modular bundler. It takes all of your node code, css ,sass, just about any file
 * and let's you determine how it should be handled when we require it. All of these things are then packaged
 * into a nice bundle that can be served by a website.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const PATHS = {
    src: path.join(__dirname, '..', 'src'), //Location of source code
    app: path.join(__dirname, '..', 'src', 'app.jsx'), //App entry point
    dist: path.join(__dirname, '..', 'dist'), //Output folder for our bundled items,
    template: path.join(__dirname, 'index.template.html')
};

const config = {}
config.entry = {}
config.devServer = {}
config.plugins = []
config.module = {
    rules: []
}

//Entry points
config.entry = {
    app: [
        PATHS.app
    ]
}

//Build Path
config.output = {
    filename: 'bundle.js',
    path: PATHS.dist,
    publicPath: ''
}

//JSX
config.module.rules.push({
    enforce: 'pre',
    test: /\.jsx/,
    use: 'eslint-loader'
})

//Styles
config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
})

//Fonts
config.module.rules.push({
    test: /\.(ttf|eot|svg|woff|woff2)/,
    use: 'url-loader?limit=10000&name=[name].[ext]'
})

//Images
config.module.rules.push({
    test: /\.(jpeg|jpg|png|gif)/,
    use: 'url-loader?limit=10000&name=[name].[ext]'
})

//Generate html
config.plugins.push(new HtmlWebpackPlugin({
    title: 'Data Intake Form',
    template: PATHS.template
}))
module.exports = config
