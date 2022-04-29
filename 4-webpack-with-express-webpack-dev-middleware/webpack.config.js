/*
 * @Author: your name
 * @Date: 2022-04-29 22:17:22
 * @LastEditTime: 2022-04-29 22:34:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack_ts\4-webpack-with-express-webpack-dev-middleware\webpack.config.js
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: './static/[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'tmd'
        })
    ],
    devtool: 'cheap-module-eval-source-map'
}