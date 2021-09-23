const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
  // mode: 'production', // webpack3及以下不支持此属性
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
        {
            test: /\.vue$/,
            use: [
              {
                loader: 'vue-loader'
              }
            ]
        },
        {
            test: /\.js$/,
            use: 'babel-loader',
            include:[path.resolve(__dirname, 'src')]
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({ // 使用这个完成了样式抽离
              fallback: "style-loader",
              use: "css-loader"
            }),
            // use: [ 用这个不用上面的ExtractTextPlugin的话，抽离出来的样式会作为style标签直接插到页面上
            //   'style-loader',
            //   'css-loader'
            // ]
        }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new ExtractTextPlugin('style.css')
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