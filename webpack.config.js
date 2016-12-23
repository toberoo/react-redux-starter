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

module.exports = {
    entry: {
        app: [
            PATHS.app, //Entry point
            'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
            'webpack/hot/only-dev-server' // "only" prevents reload on syntax errors
        ],
        vendor: PATHS.vendor, //Pack our vendor dependencies into their own folder.
    },
    devServer: {
        hot: true,
        colors: true,
        historyApiFallback: true //All routes will serve index.html
    },
    output: {
        path: PATHS.dist,
        filename: "bundle.js"
    },
    module: {
        preLoaders: [
            {
                loader:  "eslint-loader", //Gives good feeback on errors and warnings.
                include: PATHS.src,
                test: /\.jsx/
            }
        ],
        loaders: [
            //JSX
            {
                loader:  "babel", //Convert JSX to browser safe js
                include: PATHS.src,
                exclude: PATHS.node_modules,
                test: /\.jsx/
            },
            //Html files
            {
                loader: 'file?name=[name].html', //Move our html files. Only index.html in this case.
                include: PATHS.ui,
                test: /\.html/
            },
            //Styles
            {
                loaders: ['style', 'css', 'sass'], //Move our sass files
                test: /\.scss$/
            },
            //Fonts
            {
                loader: 'url?limit=10000&name=[name].[ext]', //Move our font files over
                test: /\.(ttf|eot|svg|woff|woff2)/
            },
            {
                loader: 'url?limit=10000&name=[hash].[ext]', //Move image folders over
                test: /\.(jpeg|jpg|png)/
            }
        ]
    },
      plugins: [ //This plugin breaks our vendor depends into their own bundle.
        new webpack.optimize.CommonsChunkPlugin("vendor","vendor.bundle.js")
    ]
};