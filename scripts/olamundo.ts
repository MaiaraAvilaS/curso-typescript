const p = document.createElement('p');

const ola: string = "Olá mundo!";

p.textContent = ola;

document.body.appendChild(p);

let num = 10;
let bool = true;
let str = "A beautiful message";
let str2 = 'A beautiful message';
let str3 = `$str{str2} to me`
//console.log(str3);
function func(){
}
if(bool !== null){
}
if (bool === undefined){
}
if (bool){
    let i: number;
    for(i =0; i < 3; i++){
        //console.log(i)
    }    
}
//console.log("value of" + i)

let list: number[] = [1,2,3];
let list2: Array<number> = [1,2,3]

let tuple: [string, number];
tuple = ["Mai", 33]
//console.log(tuple[0].toLocaleLowerCase());

enum Day{MONDAY, TUESDAY, WEDNESDAY};
let day: Day = Day.MONDAY;
// console.log(`day: ${day} | day: ${Day.TUESDAY} | ${Day.WEDNESDAY} `);
// console.log(`day: ${Day[0]} | ${Day[1]} | ${Day[2]} `);

//console.log(true === 1);

// function add(v1:number, v2:number, v3?:number): number{ // ?: não é obrigatório
//     if (v3 !== undefined)
//         return v1 + v2 + v3;
//     return v1 + v2;
// }

function add(v1: any, v2: any, v3?: any): any { // any pode ser qualquer variável
    if (v3 !== undefined)
        return v1 + v2 + v3;
    return v1 + v2;

}
console.log(`add ${add(1,2)}`)
console.log(`add ${add("qual é o", "número")}`)

//void: não retorna um valor útil.

let var1: any = "aah";

let stringLength: number = (<string> var1).length; //conta a quantidade de itens na variável
let stringUpperCase: string = (var1 as string).toUpperCase(); //transforma a variável em letras maiúsculas

console.log(stringLength);
console.log(stringUpperCase);

function add2(v1: string, ...v2:number[]): void{ //...parameters rest: Ele permite que você passe quantos números quiser para a função
    let sum: number = 0;
    for(let i = 0; i < v2.length; i++){
        sum += v2[i];
    }

    console.log(v1 + sum);
}
add2("Sum is: ", 1,2,3,4,5);