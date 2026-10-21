"use strict";
class AnotherExample1 {
}
class AnotherExample2 {
}
let exVar;
exVar = new AnotherExample1();
let exVar2 = { name: "Maia", age: 33 };
exVar = exVar2;
function testExemple1(ex) {
    console.log(ex.name);
}
let exVar3 = { name: "Mai", age: 33 };
testExemple1(exVar3);
let x1 = (a) => a;
let x2 = (b, s) => 0;
console.log(x1(10));
console.log(x2(10, " something"));
x2 = x1;
console.log(x2(20, " something2"));
let items = [1, 2, 3];
items.forEach((item, index, array) => console.log(item));
items.forEach(item => console.log(item));
//# sourceMappingURL=typecompatibility.js.map