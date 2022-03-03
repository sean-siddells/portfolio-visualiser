const path = require('path')

module.exports =  {

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
      options: {
        presets:[ "@babel/preset-env","@babel/preset-react"]
      },
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    fallback: {
      fs: false
    }
  },
  devtool: 'source-map'
}


