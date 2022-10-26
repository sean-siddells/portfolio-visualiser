const path = require('path')
// const Dotenv = require('dotenv-webpack')
// const { DefinePlugin } = require('webpack')
module.exports = () => {
  // target: 'node',
  return {
    entry: path.join(__dirname, './index.js'),
    output: {
      path: path.join(__dirname, '../server/public'),
      filename: 'bundle.js'
    },
    mode: 'development',
    module: {
      rules: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|png)$/i,
        type: 'asset/resource'
      }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      fallback: {
        fs: false
      }
    },
    devtool: 'source-map'
  }
}