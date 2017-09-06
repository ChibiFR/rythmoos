const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'rythmoos.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname)
  }
};
