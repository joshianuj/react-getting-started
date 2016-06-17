var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlwebpackPlugin = require('html-webpack-plugin');

//paths
var TARGET = process.env.npm_lifecycle_event;

//folder directories
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
// {
//   './assets/build': './app/index.jsx'
// }
var common = {
  entry: APP_PATH,
  output: {
    path: BUILD_PATH,
    filename: 'build.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: APP_PATH
      },
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: APP_PATH
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'React Getting Started',
      filename: 'index.html'
    })
  ]
};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
