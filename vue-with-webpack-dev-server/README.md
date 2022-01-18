2021/9/23 降级至webpack3
extract-text-webpack-plugin@next 安装最新的，目前是v4.0.0-beta.0 支持webpack4，但是分离失败
降级至webpack3，安装extract-text-webpack-plugin@3.0.2
css-loader@0.28.11
html-webpack-plugin@3.2.0
style-loader@0.23.1
url-loader@1.1.2
file-loader@1.1.11
webpack-dev-server  4以上的都要求webpack4以上
当前webpack版本是3，所以安装的webpack-dev-server 2的最高版


因为一个extract-text-webpack-plugin （被废弃的样式抽离插件导致的所有依赖降级），也被我正式废弃，转战mini-css-extract-plugin

-----》  vue-with-webpack5-mini-css-extract-plugin