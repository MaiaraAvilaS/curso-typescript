function printName(person: { name: string }): void{ //não retorna nada somente o que for impresso
}
let randomObj = {name: "William", age: 20};
let randomObj2 = {age: 20};
printName(randomObj);
//printName(randomObj2);
interface Person {
    name: string;
}
interface Employee extends Person {
    salary: number;
}
let pe: Person = {name: "Maiara"};
let emp: Employee = {name: "Maiara Ávila1", salary: 4000};
printName(pe);
printName(emp);

function printName2(person: Person): void {
    console.log(person.name);
}
printName2(pe);
printName2(emp);
printName2(randomObj);
printName2({name:"Test"} as Employee);

interface Person{
    age?: number;
}

interface Manager extends Employee{
    readonly bonus: number;

}
let manager: Manager = {name: "Maiara", salary: 4000, bonus: 1000}
manager.name = "Alterado";
//manager.bonus = 10;
printName2(manager);