class Person2{ //supercalss, classe pai
    private _name: string; //só pode ser acessada diretamente dentro da própria classe Person2
    protected constructor(name: string){ //construtor da classe
        this._name = name;
    }
    print(): void { //não retorna nenhum valor
        console.log(`name: ${this.name}`);
    }   
    
    get name(): string{
        return this._name;
    }

    set name(value: string){
        this._name = value;
    }
    
}
class Employee2 extends Person2{
    private _salary: number;
    constructor(name: string, salary: number){
        super(name);
        this._salary = salary;
    } 

    print():void{
        super.print(); //chama o construtor da classe pai
        console.log(`salary: ${this.salary}`);
    }

    get salary(): number{
        return this._salary;
    }

    set salary(value: number){
        this._salary = value;
    }
}

//let p1 = new Person2 ("Natsu");
//console.log(p1.name);
//p1.name = "Natsu 2"



let emp1 = new Employee2("Erza", 2000);
//p1.print();
emp1.print();

let p2 = <Person2>{};
let p3: Person2 = new Employee2("Lucy", 2000)
p3.print(); 