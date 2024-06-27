class Person {
    firstName: string;
    lastName: string;

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    constructor(fName: string, lName: string) {
        this.firstName = fName
        this.lastName = lName
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
console.log(aPerson.getFullName())


// let aEmployee = new Employee('SW220', 'Software Developer');
// console.log(aEmployee.firstName)

// Unit 3 video number = 13