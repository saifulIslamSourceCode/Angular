"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportClass = void 0;
// import {Person} './generics'
var C1 = /** @class */ (function () {
    //readonly name;
    function C1(myname) {
        this.myname = myname;
        this.myname = myname;
    }
    return C1;
}());
var c1 = new C1('islam');
console.log(c1.myname);
var ExportClass = /** @class */ (function () {
    function ExportClass(n) {
        this.name = n;
    }
    return ExportClass;
}());
exports.ExportClass = ExportClass;
