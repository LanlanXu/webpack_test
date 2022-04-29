/*
 * @Author: your name
 * @Date: 2022-04-29 22:05:16
 * @LastEditTime: 2022-04-29 22:38:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack_ts\4-webpack-with-express-webpack-dev-middleware\index.js
 */
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config.js')
const compiler = webpack(config)

app.use('/testFolder', express.static(__dirname + '/testFolder'))
app.use(
    webpackDevMiddleware(compiler,{
        publicPath: config.output.publicPath
    })
)

app.listen(3000, function(){
    console.log('app listening on port 3000')
})