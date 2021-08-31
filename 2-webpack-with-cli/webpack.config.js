var path = require('path');
module.exports = {
    mode: 'production',
    entry: './after/target.js',
    // devtool: 'inline-source-map', // 生成map，可以debugger
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'target.js'
    },
    optimization: {
        minimize: false
    },
    target: ['web', 'es5'] // 相当关键，如果不设置的话，会生成不兼容ie的语法箭头函数
};