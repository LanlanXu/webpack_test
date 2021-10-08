"use strict";

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.function.name.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

function helloAsync() {
  return _helloAsync.apply(this, arguments);
}

function _helloAsync() {
  _helloAsync = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", "helloAsync");

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _helloAsync.apply(this, arguments);
}

console.log(helloAsync());

var A = function A() {
  _classCallCheck(this, A);
};