"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const p = document.createElement('p');
const ola = "Olá mundo!";
p.textContent = ola;
document.body.appendChild(p);
let num = 10;
let bool = true;
let str = "A beautiful message";
let str2 = 'A beautiful message';
let str3 = `$str{str2} to me`;
console.log(str3);
function func() {
}
if (bool != null) {
}
if (bool != undefined) {
}
if (bool) {
    let i;
    for (i = 0; i < 3; i++) {
        console.log(i);
    }
}
//console.log("value of" + i)
let list = [1, 2, 3];
let list2 = [1, 2, 3];
let tuple;
tuple = ["Mai", 33];
console.log(tuple[0].toLocaleLowerCase());
var Day;
(function (Day) {
    Day[Day["MONDAY"] = 0] = "MONDAY";
    Day[Day["TUESDAY"] = 1] = "TUESDAY";
    Day[Day["WEDNESDAY"] = 2] = "WEDNESDAY";
})(Day || (Day = {}));
;
let day = Day.MONDAY;
console.log(`day: ${day} | day: ${Day.TUESDAY} | ${Day.WEDNESDAY} `);
console.log(`day: ${Day[0]} | ${Day[1]} | ${Day[2]} `);
//# sourceMappingURL=olamundo.js.map