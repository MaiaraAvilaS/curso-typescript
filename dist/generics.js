"use strict";
function reverseList(list) {
    let reversedList = []; // Essa função recebe um Array de T e devolve um Array de T
    for (let i = list.length - 1; i >= 0; i--) { //percorre a lista de trás para frente
        reversedList.push(list[i]);
    }
    return reversedList;
}
let names = ["Maiara", "João", "José"];
let numbers = [1, 2, 3, 4, 5];
let reversedNames = reverseList(names); //chama reverseList usando string como T
let reversedNumbers = reverseList(numbers);
console.log(reversedNames);
console.log(reversedNumbers);
let reversedListArrow = (list) => {
    let reversedList = [];
    for (let i = list.length - 1; i >= 0; i--) {
        reversedList.push(list[i]);
    }
    return reversedList;
};
console.log(reversedListArrow(names));
class Person3 {
    constructor(name) {
        this._name = name; //Pega o name recebido e coloca dentro de _name
    }
    print() {
        console.log(`name: ${this._name}`);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
class Person3Repository {
    findById(id) {
        console.log(`Serching using ID: ${id}`);
        return new Person3("Mai");
    }
    save(entity) {
        return new Person3("Maia");
    }
}
let personRepository = new Person3Repository();
console.log(personRepository.findById(3));
console.log(personRepository.save(new Person3("Maiara")));
class Person3Repository2 {
    findById(numberId) {
        console.log(`Searching using ID: ${numberId.id}`);
        return new Person3("Mai1");
    }
    save(entity) {
        return new Person3("Maia1");
    }
}
let personRepository2 = new Person3Repository2();
console.log(personRepository2.findById({ id: 1 }));
//# sourceMappingURL=generics.js.map