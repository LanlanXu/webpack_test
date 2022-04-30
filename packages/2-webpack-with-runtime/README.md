### 【打包】将编译后的依赖引入进去
前期是用babel对文件进行编译。
此处是webpack对babel编译后的文件中的依赖进行打包。
所以需要webpack，另外需要依赖（编译时配置的babel.config.json中useBuiltIns: usage, 本处需要corejs）