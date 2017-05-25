const path = require('path');
const webpack = require('webpack');
const express = require('express');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const args = process.argv.slice(2);

//Set enviornment
let config = require('./config/dev.config.js');
if (args[0] == 'qa') {
  config = require('./config/qa.config.js');
} else if (args[0] == 'prod') {
  config = require('./config/prod.config.js');
}

const app = express();
const compiler = webpack(config);

middleware = devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
})

app.use(middleware)
app.use(hotMiddleware(compiler))

app.get('*', function (req, res) {
  const htmlBuffer = middleware.fileSystem.readFileSync(`${config.output.path}/index.html`)
  res.send(htmlBuffer.toString())
})

app.listen(3000, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:3000/')
  console.log('env: ' + args[0])
})
