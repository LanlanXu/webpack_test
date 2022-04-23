/*
 * @Author: your name
 * @Date: 2022-04-22 22:43:34
 * @LastEditTime: 2022-04-23 22:48:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \dev-server\index.js
 */
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const WebpackDevServer = require('webpack-dev-server');

const compiler = webpack(webpackConfig);
const devServerOptions = {...webpackConfig.devServer, open: true};
const server = new WebpackDevServer(devServerOptions, compiler);


const runServer = async ()=> {
  console.log('Starting server....')
  await server.start();
}

runServer();