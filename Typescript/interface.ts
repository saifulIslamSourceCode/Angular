interface Person {
    firstName: string;
    lastName: string;
    getFullName(): string
}

class foo implements Person {
    firstName: string
    lastName: string
    getFullName() {
        return this.firstName + this.lastName
    }
}

let aPerson = new foo()
aPerson.firstName = 'saiful'
aPerson.lastName = 'islam'

console.log(aPerson.getFullName())