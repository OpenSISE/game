var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('global','global.js');

module.exports = {
  entry: {
    Home: './public/dev/js/home.js',
    Sign: './public/dev/js/sign.js',
    Profile: './public/dev/js/profile.js'
  },
  output: {
    path: 'public/build',
    publicPath: 'assets/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.scss$/, loader: 'style!css!sass'},
      {test: /\.png$/, loader: 'url-loader?limit=8192'}
    ]
  },
  resolve: {
    extensions: ['','.js']
  },
  plugins: [commonsPlugin]
}
