function reverseList<T>(list:Array<T>): Array<T>{ // T - uma única função genérica (recebe string e number). O T será determinado posteriormente. 
    let reversedList: T[] = []; // Essa função recebe um Array de T e devolve um Array de T
    for(let i = list.length-1; i>=0; i--){ //percorre a lista de trás para frente
        reversedList.push(list[i]);
    }
    return reversedList;
}
let names = ["Maiara", "João", "José"];
let numbers = [1, 2, 3, 4, 5];
let reversedNames = reverseList<string>(names); //chama reverseList usando string como T
let reversedNumbers = reverseList<number>(numbers);
console.log(reversedNames);
console.log(reversedNumbers);

let reversedListArrow = <T>(list: Array <T>): Array<T> => {
    let reversedList: T[] = [];
    for (let i = list.length - 1; i >=0; i--){
        reversedList.push(list[i]);
    }
    return reversedList;
}
console.log(reversedListArrow(names));

class Person3{
    private _name: string; //encapsulamento
    
    constructor(name: string){
        this._name = name; //Pega o name recebido e coloca dentro de _name
    }

    print(): void {
        console.log(`name: ${this._name}`);
    }

    get name():string {
        return this._name;
    }

    set name(value: string){
        this._name = value;
    }
}

interface Repository<T, ID>{ //Qualquer classe que implementar essa interface precisa possuir determinados métodos
    findById(id: ID): T; //T representa a entidade.ID representa o tipo do identificador

    save(entity: T): T;
}
class Person3Repository implements Repository<Person3, number>{
    findById(id: number): Person3 { //Receba um ID e retorne um T
        console.log(`Serching using ID: ${id}`);
        return new Person3("Mai");
    }

    save(entity: Person3): Person3{ //Recebe uma entidade do tipo T e devolve uma entidade do tipo T
        return new Person3("Maia");
    }
}

let personRepository = new Person3Repository();
console.log(personRepository.findById(3));
console.log(personRepository.save(new Person3("Maiara")))

interface NumberId{
    id: number;
}
interface Repository2<T, ID extends NumberId>{ //O tipo ID precisa ser compatível com NumberId
    findById(id: ID): T;

    save(entity: T): T;
}

class Person3Repository2 implements Repository2<Person3, NumberId>{ //Segue o contrato Repository usando Person3 como entidade e number como ID
    findById(numberId: NumberId): Person3{
        console.log(`Searching using ID: ${numberId.id}`);
        return new Person3("Mai1");
    }
    save(entity: Person3): Person3{
        return new Person3("Maia1");
    }
}   

let personRepository2 = new Person3Repository2();
console.log(personRepository2.findById({ id: 1 }));