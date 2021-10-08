"use strict";

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.function.name.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var a = 1;

if ([1, 2, 3].includes(2)) {
  console.log(true);
}

var func = function func() {};

var pos = new Promise(function () {});
Object.assign({
  a: 1
}, {
  b: 2
});
var _name$age = {
  name: 'xll',
  age: 21
},
    name = _name$age.name,
    age = _name$age.age;
var name1 = 1;

var A = function A() {
  _classCallCheck(this, A);
};