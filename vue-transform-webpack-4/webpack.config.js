var path = require('path');
module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './dist/index.js')
  },
  module: {
    // rules: [
    //     {
    //         test: /\.vue$/,
    //         loader: 'vue-loader'
    //     },
    //     {
    //         test: /\.js$/,
    //         loader: 'babel-loader'
    //     },
    //     {
    //         test: /\.css$/,
    //         loader: 'css-loader'
    //     }
    // ]
  }
};