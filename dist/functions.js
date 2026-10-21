"use strict";
function print(val) {
    console.log(val);
}
print("Message here");
function printOrNot(flag = false) {
    let str = flag ? "flag is true" : "flag is false";
    console.log(str);
}
printOrNot(true);
let sumAnonymous = function (n1, n2) {
    console.log(`sum: ${n1 + n2}`);
};
sumAnonymous(1, 2);
sumNotAnonymous(2, 2);
function sumNotAnonymous(n1, n2) {
    console.log(`sum: ${n1 + n2}`);
}
sumNotAnonymous(2, 2);
let sumArrow1 = (n1, n2) => n1 + n2;
let sumArrow2 = (n1, n2) => {
    return n1 + n2;
};
let objectArrow = (name, surname) => ({ name: name, surname: surname });
console.log(sumArrow1(3, 3));
console.log(sumArrow2(4, 4));
console.log(objectArrow("Maiara", "Ávila"));
console.log("------------------------------------");
function testThis() {
    return this;
}
console.log(testThis());
console.log(this);
let objExemple = {
    name: "Maiara",
    lastName: "Ávila",
    fullName: function () {
        return this;
    },
    fullName2: () => {
        return this;
    },
    thisExemple: this
};
console.log(objExemple.name);
console.log(objExemple.fullName());
console.log(objExemple.fullName2());
console.log(objExemple.thisExemple);
let lottery = {
    names: ["Maiara", "João", "José"],
    test: "test",
    createLotteryPicker: function () {
        console.log("first level this: " + this.names, +" " + this.test);
        return () => {
            console.log("second level this: " + this);
            let pickedPersonNumber = Math.floor(Math.random() * 3);
            return { name: this.names[pickedPersonNumber] };
        };
    }
};
let personPicker = lottery.createLotteryPicker();
let pickedPerson = personPicker();
console.log(pickedPerson);
//# sourceMappingURL=functions.js.map