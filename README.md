# webpack_TS
1. husky是提供git提交的钩子。【6.0.0版本分界，前后配置有较大差异】
2. commitlint是对提交信息进行格式化检查。
- 需要安装：@commitlint/cli 及@commitlint/config-conventional
- 配置文件：commitlint.config.js
3. eslint ---【删除】，仅在内部练习，外部同时安装会报错
- 需要安装eslint;检测vue的格式需要安装eslint-plugin-vue
- 配置.eslintrc.js
4. 使用yarn workspace 管理项目的依赖