var fs = require('fs');
var babel = require('@babel/core');
var originCode = fs.readFileSync('./before/index.js',{
    encoding: 'utf-8'
});
var target = babel.transformSync(originCode.toString(), {});

fs.writeFileSync('./after/target.js', target.code, {
    encoding: 'utf-8'
});