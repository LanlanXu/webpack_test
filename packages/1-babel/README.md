### es6+->es5 属于【编译】
纯nodejs实现，仅仅依赖：
@babel/core
@babel/preset-env
regenerator-runtime // 如果有async语法使用，或者generator函数使用的话，需要安装

基于nodejs的原生方法使用@babel/core，对文件进行编译。
其中静态方法和实例方法的垫片会以require（引入corejs）的形式实现。其他基本语法直接转化。
真正将require中的垫片打包进来还需要webpack的功能。

ps：【打包】即将依赖core-js/xx吸收，还需要webpack实现