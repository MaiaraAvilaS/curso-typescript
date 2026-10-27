"use strict";
var Destructuring;
(function (Destructuring) {
    let person = { name: "Maiara", lastname: "Ávila" };
    let name1 = person.name;
    let lastname = person.lastname;
    console.log(name1);
    console.log(lastname);
    let { name: name2, lastname: lastname2 } = person;
    console.log(name2);
    console.log(lastname2);
    let array = ["DevDojo", "Mai"];
    let [a, b] = array;
    console.log(a);
    console.log(b);
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    function exemple(person) {
        console.log(person.name);
    }
    function exemple2({ name }) {
        console.log(name);
    }
    exemple(new Person("William"));
    exemple2(new Person("William"));
})(Destructuring || (Destructuring = {}));
//# sourceMappingURL=destructuring.js.map