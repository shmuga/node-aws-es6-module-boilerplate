var path = require('path');
module.exports = {
  entry: './src/index.js',
  devtool: false,
  cache: true,
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    libraryTarget: 'commonjs',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'src'),
        loader: 'babel-loader',
      }
    ]
  }
};

