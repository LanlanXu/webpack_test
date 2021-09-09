const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
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
            include:[path.resolve(__dirname, 'src')]
        },
        {
            test: /\.css$/,
            loader: 'css-loader'
        }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};



// module.exports = {
//   mode: 'production', // 会相应的使用内置优化
//   entry: './index.js', // 入口文件
//   output: {
//     filename: '[name].js', // 编译后的文件名
//     path: path.resolve(__dirname, 'dist'), // 编译后的文件存放的目录，必须是绝对路径
//     publicPath: '/assets/', // 编译后的文件页面中引用的时候，会拼上啥路径，比如说
//   }

// }