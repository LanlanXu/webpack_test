/*
 * @Author: your name
 * @Date: 2022-05-01 21:32:46
 * @LastEditTime: 2022-05-01 21:39:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack_test\packages\vue-with-webpack-dev-server-webpack4\index.js
 */
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const webpackDevServer = require('webpack-dev-server')

const compiler = webpack(webpackConfig)

const devServerOptions = {
    ...webpackConfig.devServer,
    open: true
}
const server = new webpackDevServer(devServerOptions, compiler)

const runServer = async () => {
    console.log('starting server...')
    await server.start()
}
runServer();