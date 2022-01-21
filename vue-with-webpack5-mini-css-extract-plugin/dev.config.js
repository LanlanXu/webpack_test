const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
  mode: 'development', // webpack3及以下不支持此属性
  entry: './src/index.js',
  output: {
    filename: 'static/js/index.[id].js', // 入口页面
    path: path.resolve(__dirname, 'dist'), // 编译后的文件放的路径
    publicPath: './' //  编译后的文件页面中引用的时候，会拼上啥路径，比如说
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
        include: [path.resolve(__dirname, 'src')]
      },
      {
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: "../../"
          }
        }, "css-loader"],
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
              name: 'static/images/[name].[hash:7].[ext]',
              esModule: false  // 不加此参数：背景图引用失败；background: url([object Module]) 10% 50% no-repeat;
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
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: "static/css/[name].[id].css", // 设置抽离出来的样式所处的路径
      // chunkFilename: "[id].css",
      ignoreOrder: false // Enable to remove warnings about conflicting order
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    hot: true,
    // static: {
    //   directory: path.resolve(__dirname, 'dist'), // 让webpack-dev-server服务器访问dist文件夹的内容
    // },
    compress: true,
    port: 9000
  }
};
