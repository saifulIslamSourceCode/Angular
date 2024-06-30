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

/*Inheritance*/
class P {
    firstName: string;
    lastName: string;
    greet() {
        console.log('hello');
    }
    constructor(fName: string, lName: string) {
        this.firstName = fName
        this.lastName = lName
    }
}


class L extends P{
    greet() {
        console.log('nice')
    }
    greetLikeNormalPeople(){ 
        super.greet();
    }
}

var L1:P = new L('ninja', 'islam');
console.log(L1.firstName)
L1.greet()
console.log(L1.firstName);

//video 14
