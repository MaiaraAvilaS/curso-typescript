let array = ["DevDojo", "Ok"]; //controla o início, a condição e o incremento. Pode usar break e continue.
for(let i =0; i < array.length; i++){
    console.log(array[i]);
}

array.forEach((name) => { //método que executa uma função para cada elemento
console.log(name); //Em cada repetição, name recebe o próximo valor do array
//break, continue, return

});

let person = {name: "Maiara", lastname: "Ávila"};
for(let prop in person){ // utilizado para propriedades //percorre as chaves enumeráveis de um objeto
    console.log(prop); //imprime o nome da chave, não o valor armazenado nela
}

for(let prop in array){ //também pode percorrer um array, mas ele percorre seus índices, não diretamente os valores
    console.log(prop);
    console.log(typeof (prop)); //informa o tipo do valor, nesse caso, retorna "string"
}

console.log("------------------")
for(let prop of array){ //percorre os valores de um objeto iterável, como um array ou uma string
    console.log(prop);
}