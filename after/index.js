"use strict";

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.object.assign.js");

// import '@babel/polyfill';
// import 'core-js';
// import 'regenerator-runtime/runtime';
var a = 1;

if ([1, 2, 3].includes(2)) {
  console.log(true);
}

var _name$age = {
  name: 'xll',
  age: 21
},
    name = _name$age.name,
    age = _name$age.age;
console.log(name, age);
var pos = new Promise();
Object.assign({
  a: 1
}, {
  b: 2
});