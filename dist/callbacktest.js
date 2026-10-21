"use strict";
function doingSomething(callback) {
    callback.call(this, "William Suane"); // O método call() executa a função imediatamente, permitindo definir o valor de this e passar os argumentos separadamente
    callback.apply(this, ["William Suane", "DevDojo Rules"]); //nome e regra //O método apply() também executa a função imediatamente, mas recebe os argumentos dentro de um array //mesmo tendo duas infos, somente a primeira é utilizada nesse caso
    callback("William Suane"); //A chamada direta não permite definir explicitamente o valor de this como os outros dois métodos call e apply
}
function execute(name) {
    console.log(name);
}
doingSomething(execute);
function calculator(num1, num2, type) {
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
function sum(num1, num2) {
    return num1 + num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function doingSomethingCrazy(num1, num2) {
    console.log(`Numbers: ${num1} and ${num2}`);
}
function calculator2(num1, num2, callback) {
    if (typeof callback === "function") {
        return callback(num1, num2);
    }
    return 0;
}
function calculator3(num1, num2, callback) {
    return callback(num1, num2);
}
console.log(calculator2(5, 5, sum));
console.log(calculator2(5, 5, multiply));
//calculator2(5, 5, doingSomethingCrazy);
console.log(calculator3(10, 10, (num1, num2) => {
    return num1 - num2;
}));
//# sourceMappingURL=callbacktest.js.map