function echo<T>(arg: T): T{
    return arg
}

echo(2)

let myval: number = echo(1); 

export class Person {
    name: string;
    constructor(n: string) {
        this.name = n;
    }

}
let perosn = new Person('saful')

class Admin extends Person {

}
class Manager extends Person{

}

class Random{

}
let random = new Random()

let admin = new Admin('a');
let manager = new Manager('a');


function personEcho<T extends Person>(person: T): T{
    return person;
}

let val = personEcho(random)