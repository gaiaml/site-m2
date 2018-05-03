var webpack = require('webpack');
var path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

var abspath = function(p) {
  return process.env.APP_ROOT + "/" + p;
}

var config = {
  entry: {
    app: [
      abspath('frontend/main.js')
    ]
  },
  output: {
    path: abspath('build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [abspath('frontend')]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: abspath('static/index.html')
    })
  ],
  performance: {
    hints: false
  },
}

module.exports = config;
