var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const CSS_MAPS = process.env.NODE_ENV !== 'prod';

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    path.resolve('src', 'main.js'),
  ],
  postcss: () => [
      autoprefixer({ browsers: 'last 2 versions' })
  ],
  output: {
    path: path.resolve('build'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('style.css', {
      disable: process.env.NODE_ENV!=='production'
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.(less|css)$/,
      include: path.join(__dirname, 'src'),
      loader: ExtractTextPlugin.extract('style', [
          `css?sourceMap=${CSS_MAPS}&modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]`,
          'postcss',
          `less?sourceMap=${CSS_MAPS}`
      ].join('!'))
    }]
  }
};
