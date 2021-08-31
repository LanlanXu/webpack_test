"use strict";

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.object.assign.js");

var a = 1;

if ([1, 2, 3].includes(2)) {
  console.log(true);
}

var func = function func() {};

var pos = new Promise();
Object.assign({
  a: 1
}, {
  b: 2
});
var _n$age = {
  n: 'xll',
  age: 21
},
    n = _n$age.n,
    age = _n$age.age;
var name = 1;
