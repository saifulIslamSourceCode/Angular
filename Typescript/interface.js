var foo = /** @class */ (function () {
    function foo() {
    }
    foo.prototype.getFullName = function () {
        return this.firstName + this.lastName;
    };
    return foo;
}());
var aPerson = new foo();
aPerson.firstName = 'saiful';
aPerson.lastName = 'islam';
console.log(aPerson.getFullName());
