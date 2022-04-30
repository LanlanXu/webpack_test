/*
 * @Author: your name
 * @Date: 2022-04-22 22:20:09
 * @LastEditTime: 2022-04-23 12:41:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \dev-server\webpack.config.js
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'static/bundle.js',
        publicPath: './',
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'development'
        })
    ]
}