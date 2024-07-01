// class Person {
//     firstName: string;
//     lastName: string;

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
class P {
    protected firstName: string;
    private lastName: string;
    //lets use gatter and setter for the private varibale
    getter() {
        return this.firstName;
    }
    setter(fname: string) {
        this.firstName = fname;
    }
    greet() {
        console.log('hello');
    }
    // constructor(fName: string, lName: string) {
    //     this.firstName = fName
    //     this.lastName = lName
    // }
}


class L extends P{
    greet() {
        console.log(this.firstName)
    }
    
    greetLikeNormalPeople(){ 
        super.greet();
    }
}
let P1 = new P();
// P1.firstName = 'saiful'
// P1.lastName = 'islam'
P1.setter('saiful')
console.log(P1.getter())

let L1 = new L();
L1.greetLikeNormalPeople()
// console.log(L1.firstName)

//video 14
