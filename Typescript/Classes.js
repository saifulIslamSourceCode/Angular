// class Person {
//     firstName: string;
//     lastName: string;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
//     constructor(fName: string, lName: string) {
//         this.firstName = fName
//         this.lastName = lName
//     }
// }
// class Employee extends Person {
//     EmpID: string
//     EmpPost: string
//     constructor(id: string, post: string) {
//         super();
//         this.EmpID = id
//         this.EmpPost = post
//     }
// }
// let aPerson = new Person('Saiful', 'Islam');
// // aPerson.firstName = 'safiul'
// console.log(aPerson.getFullName())
// let aEmployee = new Employee('SW220', 'Software Developer');
// console.log(aEmployee.firstName)
// Unit 3 video number = 13
/*Inheritance*/
var P = /** @class */ (function () {
    function P() {
    }
    //lets use gatter and setter for the private varibale
    P.prototype.getter = function () {
        return this.firstName;
    };
    P.prototype.setter = function (fname) {
        this.firstName = fname;
    };
    P.prototype.greet = function () {
        console.log('hello');
    };
    return P;
}());
var L = /** @class */ (function (_super) {
    __extends(L, _super);
    function L() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    L.prototype.greet = function () {
        console.log('nice');
    };
    L.prototype.greetLikeNormalPeople = function () {
        _super.prototype.greet.call(this);
    };
    return L;
}(P));
var P1 = new P();
// P1.firstName = 'saiful'
// P1.lastName = 'islam'
P1.setter('saiful');
console.log(P1.getter());
var L1 = new L();
L1.greetLikeNormalPeople();
// console.log(L1.firstName)
//video 14
