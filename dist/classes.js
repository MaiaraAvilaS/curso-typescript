"use strict";
class Person2 {
    constructor(name) {
        this._name = name;
    }
    print() {
        console.log(`name: ${this.name}`);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
class Employee2 extends Person2 {
    constructor(name, salary) {
        super(name);
        this._salary = salary;
    }
    print() {
        super.print(); //chama o construtor da classe pai
        console.log(`salary: ${this.salary}`);
    }
    get salary() {
        return this._salary;
    }
    set salary(value) {
        this._salary = value;
    }
}
//let p1 = new Person2 ("Natsu");
//console.log(p1.name);
//p1.name = "Natsu 2"
let emp1 = new Employee2("Erza", 2000);
//p1.print();
emp1.print();
let p2 = {};
let p3 = new Employee2("Lucy", 2000);
p3.print();
//# sourceMappingURL=classes.js.map