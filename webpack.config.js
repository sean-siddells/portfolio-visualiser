const path = require('path');

// const Dotenv = require('dotenv-webpack')
// const { DefinePlugin } = require('webpack')
module.exports = {
  entry: path.join(__dirname, './client/Index'),
  output: {
    path: path.join(__dirname, './src/public'),
    filename: 'bundle.js',
    publicPath: '/src/public/',
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, './src/public'),
    },
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.(js|ts)x?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.(jpg|png|mp4)$/i,
      type: 'asset/resource',
    },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    fallback: {
      fs: false,
      url: require.resolve('url/'),
    },
  },
  devtool: 'source-map',
};
