"use strict";
let array = ["DevDojo", "Ok"];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
array.forEach((name) => {
    console.log(name);
});
let person = { name: "Maiara", lastname: "Ávila" };
for (let prop in person) {
    console.log(prop);
}
//# sourceMappingURL=forlooping.js.map