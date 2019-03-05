const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const precss = require('precss');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|template)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins: function () { // post css plugins, can be exported to postcss.config.js
              return [
                precss,
                autoprefixer
              ];
            },
          },
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
        }],
      },
      {
        test: /bootstrap\.native/,
        use: {
          loader: 'bootstrap.native-loader',
        },
      },
    ],
  },
  plugins: [
    new LodashModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast 
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'source-map',
};
