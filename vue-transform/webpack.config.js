var path = require('path');
module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './dist/index.js')
  },
  module: {
    // rules: [
    //     {
    //         test: /\.vue$/,
    //         loader: 'vue-loader'
    //     },
    //     {
    //         test: /\.js$/,
    //         loader: 'babel-loader'
    //     },
    //     {
    //         test: /\.css$/,
    //         loader: 'css-loader'
    //     }
    // ]
  },
  resolve: {
    // https://github.com/babel/babel/issues/8462
    // https://blog.csdn.net/qq_39807732/article/details/110089893
    // 如果确认需要node polyfill，设置resolve.fallback安装对应的依赖
    fallback: {
      assert: require.resolve('assert'),
      buffer: require.resolve('buffer'),
      crypto: require.resolve('crypto-browserify'),
      // domain: require.resolve('domain-browser'),
      // events: require.resolve('events'),
      constants: require.resolve('constants-browserify'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      os: require.resolve('os-browserify/browser'),
      path: require.resolve('path-browserify'),
      // punycode: require.resolve('punycode'),
      // process: require.resolve('process/browser'),
      querystring: require.resolve('querystring-es3'),
      stream: require.resolve('stream-browserify'),
      // string_decoder: require.resolve('string_decoder'),
      // sys: require.resolve('util'),
      // timers: require.resolve('timers-browserify'),
      // tty: require.resolve('tty-browserify'),
      fs: require.resolve('fs'),
      url: require.resolve('url'),
      util: require.resolve('util'),
      vm: require.resolve('vm-browserify'),
      zlib: require.resolve('browserify-zlib'),
      //   stream: require.resolve('stream-browserify/'),
      //   vm: require.resolve('vm-browserify')
    }
  }
};