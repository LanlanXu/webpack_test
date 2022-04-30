### 【打包】将编译后的依赖引入进去
前期是用babel对文件进行编译。
此处是webpack对babel编译后的文件中的依赖进行打包。
所以需要webpack，另外需要依赖（编译时配置的babel.config.json中useBuiltIns: usage, 本处需要corejs）

其中此处只用了webpack，则webpack的打包的代码需要自己写，要手动引入webpack.config.js的配置，手动引入webpack，进行打包，即【./index.js】