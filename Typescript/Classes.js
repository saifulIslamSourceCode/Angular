"use strict";
class Person {
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
}
// class Employee extends Person {
//     EmpID: string
//     EmpPost: string
//     constructor(id: string, post: string) {
//         super()
//         this.EmpID = id
//         this.EmpPost = post
//     }
// }
let aPerson = new Person('Saiful', 'Islam');
// aPerson.firstName = 'safiul'
console.log(aPerson.getFullName());
// let aEmployee = new Employee('SW220', 'Software Developer');
// console.log(aEmployee.firstName)
