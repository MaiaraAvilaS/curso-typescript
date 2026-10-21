function doingSomething(
    this: unknown,
    callback: (this: unknown, name: string, rule?: string) => void): void { //função que passa como argumento para outra função, para que ela possa executá-la
    callback.call(this, "William Suane"); // O método call() executa a função imediatamente, permitindo definir o valor de this e passar os argumentos separadamente
    callback.apply(this, ["William Suane", "DevDojo Rules"]); //nome e regra //O método apply() também executa a função imediatamente, mas recebe os argumentos dentro de um array //mesmo tendo duas infos, somente a primeira é utilizada nesse caso
    callback("William Suane"); //A chamada direta não permite definir explicitamente o valor de this como os outros dois métodos call e apply
}

function execute(name: string): void {
    console.log(name);
}

doingSomething(execute);

function calculator(num1: number, num2: number, type: string): number { //recebe dois números e uma string que indica qual operação deve executar //type: texto que determina a operação
    switch (type) {
        case "add":
            return num1 + num2;
        case "multiply":
            return num1 * num2;
        default:
            return 0;
    }
}

//console.log(calculator(1, 2, "multiply"));
//console.log(calculator(4, 2, "add"));

function sum(num1: number, num2: number): number {
    return num1 + num2;
}

function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

function doingSomethingCrazy(num1: number, num2: number): void {
    console.log(`Numbers: ${num1} and ${num2}`);
}

function calculator2(
    num1: number,
    num2: number,
    callback: (num1: number, num2: number) => number): number {
    if (typeof callback === "function") {
        return callback(num1, num2);
    }
    return 0;
}

function calculator3(
    num1: number,
    num2: number,
    callback: (num1: number, num2: number) => number
): number {
    return callback(num1, num2);
}

console.log(calculator2(5, 5, sum));
console.log(calculator2(5, 5, multiply));
//calculator2(5, 5, doingSomethingCrazy);

console.log(calculator3(10, 10, (num1: number, num2: number) => {
    return num1 - num2;
}));