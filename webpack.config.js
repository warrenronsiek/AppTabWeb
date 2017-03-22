/**
 * Created by warren on 3/16/17.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const validator = require('webpack-validator');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');

const ENV = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080
};

const PATHS = {
  dist: path.join(__dirname, 'dist'),
  src: path.join(__dirname, 'src'),
  css: path.join(__dirname, 'src', 'css'),
  cache: path.join(__dirname, 'cache'),
  node_modules: path.join(__dirname, 'node_modules'),
  static: path.join(__dirname, 'src', 'static')
};

const common_build = {
  context: __dirname,
  entry: [
    PATHS.src
  ],
  resolve: {
    extensions: ['.js']
  },
  output: {
    path: PATHS.dist,
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.(png|woff|woff2|eot|ttf|csv|svg|ico)$/,
        loader: 'url-loader?limit=100000',
        include: PATHS.src
      }, {
        test: /\.json$/,
        loader: 'json-loader',
        include: PATHS.static
      }]
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: 'node_modules/html-webpack-template/index.ejs',
      title: 'apptab',
      appMountId: 'app',
      favicon: path.join(PATHS.static, 'favicon.ico'), //TODO: make favicon work
      inject: false
    })
  ]
};

const dev_build = {
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    inline: true,
    contentBase: PATHS.dist,
    stats: 'errors-only',
    host: ENV.host,
    port: ENV.port
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['source-map-loader', 'react-hot-loader', 'babel-loader?cacheDirectory=' + PATHS.cache],
      exclude: PATHS.node_modules
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader'],
      include: PATHS.css
    }, {
      test: /\.tsx?$/,
      loaders: ['typescript-loader', 'react-hot-loader', 'babel-loader?cacheDirectory=' + PATHS.cache],
      exclude: PATHS.node_modules
    }]
  }
};

const prod_build = {
  output: {filename: '[name].[chunkhash].js', chunkFilename: '[chunkhash].js'},
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: PATHS.node_modules,
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'}),
      include: PATHS.css
    }]
  },
  plugins: [
    new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify("production")}}),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false, drop_console: true},
      beautify: false,
      comments: false,
      mangle: {except: ['$', 'webpackJsonp'], screw_ie8: true, keep_fnames: false}
    }),
    new ExtractTextPlugin('[name].[chunkhash].css')
  ]
};

const clean_build = {
  plugins: [
    new CleanWebpackPlugin([PATHS.dist], {root: process.cwd()})
  ]
};

module.exports = function (env) {
  let config;
  console.log(env);
  switch (env) {
    case 'development':
      config = merge(common_build, dev_build);
      config.plugins.push(new webpack.DefinePlugin({
        __STAGE__: JSON.stringify(env)
      }));
      return validator(config);
    case 'production':
      config = merge(common_build, prod_build);
      config.plugins.push(new webpack.DefinePlugin({
        __STAGE__: JSON.stringify(env)
      }));
      return config;
    default:
      return validator(merge(common_build, dev_build))
  }
};