var path = require('path');

module.exports = {
  entry: {
    path: path.resolve('src'),
    filename: 'index.js'
  },
  output: {
    path: path.resolve('public'),
    filename: 'index.js'
  },
  module: [
    loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      }
    ]
  ]
}
