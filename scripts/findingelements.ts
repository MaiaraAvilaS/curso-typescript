let element = document.getElementById("btn2"); //HTMLElement
console.log(element);

let element2 = document.querySelector("#.test"); //Element //O primeiro elemento que corresponde a um seletor CSS
console.log(element2);

let element3 = <HTMLDivElement> document.querySelector("#main"); //HTMLDivElement //Elementos por nome da tag HTML
console.log(element3);

let elements = document.getElementsByTagName("div");
console.log(elements);
console.log(elements[3]);

let elements2 = document.querySelectorAll(".test"); //NodeList Todos os elementos que correspondem a um seletor CSS
console.log(elements2);
console.log(elements2[0]); //Node
console.log(<HTMLButtonElement>elements2[0]); 

let elements3 = document.getElementsByName("button"); //NodeList<HTMLElement>
console.log(elements3);