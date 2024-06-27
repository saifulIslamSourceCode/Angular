let x = 20;
console.log(x);

for(var i = 0; i < 5; i++){

}

console.log(i);

for(let a = 0; a < 5; a++){

}
//console.log(a)
var fn = () => 'response'
//var num: number;
//num = 20;
//var foo: undefined;
//console.log(foo)

var myArray: number[] = [1,45,5];
//myArray = [1, 3, 5];
console.log(myArray)
//myArray.push('4')
console.log(myArray)

//tuple
var arr: [number, boolean];
arr = [234, false]

//funstion
function add (a: number, b: number, c: number = 10): number {
    return a + b + c;
}
let sum = add(5, 4, 5);
console.log(sum);

/*
var a: number
var b: boolean
var c: string*/

var a = 10
var b = true
var c = 'hello'

// a = false; 
function greet() {
    return 'good morning'
}
var greeting;
greeting = greet()
greeting = 20;

var y : number | string | boolean
y = 'saiful'

y = false