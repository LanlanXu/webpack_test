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


extract-text-webpack-plugin  2022/1/18 被废弃   
-- 安装  mini-css-extract-plugin 最新版2.5.2 依赖webpack5 
安装webpack 5
但是
file-loader@1.1.11" has incorrect peer dependency "webpack@^2.0.0 || ^3.0.0 || ^4.0.0".
html-webpack-plugin@3.2.0" has incorrect peer dependency "webpack@^1.0.0 || ^2.0.0 || ^3.0.0 || ^4.0.0".
url-loader@1.1.2" has incorrect peer dependency "webpack@^3.0.0 || ^4.0.0"

重新安装以下：支持webpack5
file-loader@6.2.0
html-webpack-plugin@5.5.0 
url-loader@4.1.1


