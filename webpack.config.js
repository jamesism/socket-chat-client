var pkg = require('./package.json');
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

// Path constants
const SRC_DIR = path.resolve('src');
const OUTPUT_DIR = path.resolve('build');
const PUBLIC_PATH = '/';

// Only use CSS Maps in dev (extract text in prod)
const CSS_MAPS = isProd;

// Plugin list
const PLUGINS = [
  new HtmlWebpackPlugin({
    template: 'index.tpl.html',
    inject: 'body',
    filename: 'index.html'
  }),
  new ExtractTextPlugin('style.css', {
    disabled: !isProd
  })
];

const DEV_PLUGINS = [
  new webpack.HotModuleReplacementPlugin()
];

const PROD_PLUGINS = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
  }),
  new webpack.optimize.OccurrenceOrderPlugin(true)
];

// Entrypoint pulled from package.json main
const ENTRY_MAIN = path.resolve(pkg.main);
const ENTRY = [ENTRY_MAIN];

// Dev-server stuff if not prod
if (!isProd) {
  ENTRY.unshift(
    'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server' // "only" prevents reload on syntax errors
  );
}

module.exports = {
  devtool: 'source-map',
  entry: ENTRY,
  plugins: PLUGINS.concat(isProd ? PROD_PLUGINS : DEV_PLUGINS),
  postcss: () => [
      autoprefixer({ browsers: 'last 2 versions' })
  ],
  output: {
    path: OUTPUT_DIR,
    filename: '[name].js',
    publicPath: PUBLIC_PATH
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: isProd ? ['babel'] : ['react-hot', 'babel'],
      include: SRC_DIR
    },
    {
      test: /\.(less|css)$/,
      include: SRC_DIR,
      loader: ExtractTextPlugin.extract('style', [
          `css?sourceMap=${!isProd}&modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]`,
          'postcss',
          `less?sourceMap=${!isProd}`
      ].join('!'))
    }]
  }
};
