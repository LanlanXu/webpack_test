/*
 * @Author: your name
 * @Date: 2022-05-01 21:23:23
 * @LastEditTime: 2022-05-01 22:52:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack_test\packages\vue-with-webpack-dev-server-webpack4\webpack.config.js
 */
const htmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'static/[name].[id].js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new htmlWebpackPlugin({
            title: 'vue',
            template: './src/index.html'
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        port: '9999'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' //内部为正则表达式  vue结尾的
        }
    }
}