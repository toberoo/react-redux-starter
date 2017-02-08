/**
 * Webpack is a modular bundler. It takes all of your node code, css ,sass, just about any file
 * and let's you determine how it should be handled when we require it. All of these things are then packaged
 * into a nice bundle that can be served by a website.
 */

const path = require('path');
const webpack = require('webpack');

const PATHS = {
    src: path.join(__dirname, 'src'), //Location of source code
    app: path.join(__dirname, 'src', 'app.jsx'), //App entry point
    dist: path.join(__dirname, 'dist'), //Output folder for our bundled items
    vendor: path.join(__dirname, 'src', 'vendor.jsx'), //dependencies outside of our source code, i.e. jquery.
    node_modules: path.join(__dirname, 'node_modules')
};


const config = {};
config.plugins = []
config.module = {
    rules: []
}

//Entry points
config.entry = {
    app: [
        PATHS.app, //Entry point
        'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
        'webpack/hot/only-dev-server' // "only" prevents reload on syntax errors
    ],
    vendor: PATHS.vendor, //Pack our vendor dependencies into their own folder.
}

//Dev Server
config.devServer = {
    hot: true,
    colors: true,
    historyApiFallback: true //All routes will serve index.html
}

//Build Path
config.output = {
    path: PATHS.dist,
    filename: "bundle.js"
}

//JSX
config.module.rules.push({
    enforce: 'pre',
    test: /\.jsx/,
    use: "eslint-loader"
})

config.module.rules.push({
    test: /\.jsx/,
    use: "babel-loader"
})

//HTML
config.module.rules.push({
    test: /\.html/,
    use: 'file-loader?name=[name].html'
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

//Plugins
config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.bundle.js',
    minChunks: 2
}))

module.exports = config
