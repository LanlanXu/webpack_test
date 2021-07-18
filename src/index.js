var babel = require('@babel/core');
var code = `
    let a = 1;
    if([1,2,3].includes(2)){
        console.log(true);
    }

    let {name, age} = {name: 'xll', age: 21};
    console.log(name, age);
    var pos = new Promise();
    Object.assign({a: 1}, {b: 2})
`;
var result = babel.transformSync(code, {});
console.log(result.code);