2021/9/23 降级至webpack3
extract-text-webpack-plugin@next 安装最新的，目前是v4.0.0-beta.0 支持webpack4，但是分离失败
降级至webpack3，安装extract-text-webpack-plugin@3.0.2
css-loader@0.28.11
html-webpack-plugin@3.2.0
style-loader@0.23.1
url-loader@1.1.2
file-loader@1.1.11

eslint及prettier对代码格式检测及格式化
1、安装eslint：eslint8.x.x对node版本要求较高，所以暂时安装7.x.x
2、eslint --init：初始化，就是新增.eslintrc.js
3、安装eslint-plugin-vue7.x.x
4、然后运行eslint --ext .js,.vue src  就可以检测到哪些格式不正确了


5、安装prettier  & eslint-plugin-prettier
6、运行  eslint src/**/*.{js,vue} --fix  可以修复文件

此时安装了eslint/prettier/eslint-plugin-vue需要运行命令对文件格式进行格式化



