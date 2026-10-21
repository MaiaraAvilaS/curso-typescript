"use strict";
function printName(person) {
}
let randomObj = { name: "William", age: 20 };
let randomObj2 = { age: 20 };
printName(randomObj);
let pe = { name: "Maiara" };
let emp = { name: "Maiara Ávila1", salary: 4000 };
printName(pe);
printName(emp);
function printName2(person) {
    console.log(person.name);
}
printName2(pe);
printName2(emp);
printName2(randomObj);
printName2({ name: "Test" });
let manager = { name: "Maiara", salary: 4000, bonus: 1000 };
manager.name = "Alterado";
//manager.bonus = 10;
printName2(manager);
//# sourceMappingURL=interface.js.map