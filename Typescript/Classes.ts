// import {Person} './generics'
class C1 {
    //readonly name;
    constructor (readonly myname: string) {
        this.myname = myname;
    }
}
let c1 = new C1('islam')
console.log(c1.myname)

export class ExportClass {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
}

//end of unit 3