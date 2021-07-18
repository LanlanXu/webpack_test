var babel = require('@babel/core');
var code = "let a = 1"
babel.transformAsync(code, {});
// let a = 1;