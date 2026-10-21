"use strict";
const p = document.createElement('p');
const ola = "Olá mundo!";
p.textContent = ola;
document.body.appendChild(p);
let num = 10;
let bool = true;
let str = "A beautiful message";
let str2 = 'A beautiful message';
let str3 = `$str{str2} to me`;
//console.log(str3);
function func() {
}
if (bool !== null) {
}
if (bool === undefined) {
}
if (bool) {
    let i;
    for (i = 0; i < 3; i++) {
        //console.log(i)
    }
}
//console.log("value of" + i)
let list = [1, 2, 3];
let list2 = [1, 2, 3];
let tuple;
tuple = ["Mai", 33];
//console.log(tuple[0].toLocaleLowerCase());
var Day;
(function (Day) {
    Day[Day["MONDAY"] = 0] = "MONDAY";
    Day[Day["TUESDAY"] = 1] = "TUESDAY";
    Day[Day["WEDNESDAY"] = 2] = "WEDNESDAY";
})(Day || (Day = {}));
;
let day = Day.MONDAY;
// console.log(`day: ${day} | day: ${Day.TUESDAY} | ${Day.WEDNESDAY} `);
// console.log(`day: ${Day[0]} | ${Day[1]} | ${Day[2]} `);
//console.log(true === 1);
// function add(v1:number, v2:number, v3?:number): number{ // ?: não é obrigatório
//     if (v3 !== undefined)
//         return v1 + v2 + v3;
//     return v1 + v2;
// }
function add(v1, v2, v3) {
    if (v3 !== undefined)
        return v1 + v2 + v3;
    return v1 + v2;
}
console.log(`add ${add(1, 2)}`);
console.log(`add ${add("qual é o", "número")}`);
//void: não retorna um valor útil.
let var1 = "aah";
let stringLength = var1.length; //conta a quantidade de itens na variável
let stringUpperCase = var1.toUpperCase(); //transforma a variável em letras maiúsculas
console.log(stringLength);
console.log(stringUpperCase);
function add2(v1, ...v2) {
    let sum = 0;
    for (let i = 0; i < v2.length; i++) {
        sum += v2[i];
    }
    console.log(v1 + sum);
}
add2("Sum is: ", 1, 2, 3, 4, 5);
//# sourceMappingURL=olamundo.js.map