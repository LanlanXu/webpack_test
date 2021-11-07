const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
  // mode: 'production', // webpack3及以下不支持此属性
  entry: './src/index.js',
  output: {
    filename: 'static/js/index-[id].js', // 入口页面
    path: path.resolve(__dirname, 'dist'), // 编译后的文件放的路径
    publicPath: './', //  编译后的文件页面中引用的时候，会拼上啥路径，比如说
    // chunkFilename: 'static/js/[name].[chunkhash].js'
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
              publicPath:'../../', // 编译后，样式中引用的图片会拼接上啥路径
              use: "css-loader"
            }),
            // use: [ 用这个不用上面的ExtractTextPlugin的话，抽离出来的样式会作为style标签直接插到页面上
            //   'style-loader',
            //   'css-loader'
            // ]
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 1192,
                name: 'static/images/[name].[hash:7].[ext]'
              },
            },
          ]
        }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new ExtractTextPlugin({
      filename: 'static/styles/[name].[contenthash].css',
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};
