### es6+->es5 属于【编译】
利用cli命令行工具，依赖：
+ @babel/cli （是babel的命令行集合，使用时仍然需要@babel/core的方法）
@babel/core
@babel/preset-env

cli就是命令行工具
此demo和1-babel的差别就是不需要原生nodejs方法自己写，直接用cli封装的命令就可以实现编译

ps：【打包】即将依赖core-js/xx吸收，还需要webpack实现