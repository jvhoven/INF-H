const path = require('path')
const cwd = require('process').cwd()

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: path.resolve(cwd, 'client', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(cwd, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.html?$/,
        exclude: /node_modules/,
        loader: 'html-loader'
      }
    ]
  }
}
