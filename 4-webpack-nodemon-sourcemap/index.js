/*
 * @Author: your name
 * @Date: 2022-04-22 22:43:34
 * @LastEditTime: 2022-04-23 11:52:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \dev-server\index.js
 */
const webpack = require('webpack');
const config = require('./webpack.config.js');
const rimraf = require('rimraf');

rimraf.sync(__dirname + '/dist');
const compiler = webpack(config);
compiler.run((err, stats) => { // Stats Object
    // ...
    // console.log(stats)
  });