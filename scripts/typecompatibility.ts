interface Exemple1{ //define o formato que um objeto precisa ter
    name: string;
}

class AnotherExample1 { //define como criar objetos com determinadas propriedades e comportamentos
    name: string;
    age: number;
}

class AnotherExample2 {
    num: number;
}

let exVar: Exemple1;
exVar = new AnotherExample1();
let exVar2 = {name: "Maia", age: 33};
exVar = exVar2;

function testExemple1(ex: Exemple1){
    console.log(ex.name);
}
let exVar3 = {name: "Mai", age: 33}
testExemple1(exVar3);

let x1 = (a: number) => a;
let x2 = (b: number, s: string) => 0;

console.log(x1(10));
console.log(x2(10, " something"));
x2 = x1;
console.log(x2(20, " something2"))

let items = [1,2,3];
items.forEach((item, index, array) => console.log(item));
items.forEach(item => console.log(item));
