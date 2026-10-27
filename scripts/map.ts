let nameAge = new Map <string, number>(); //estrutura de dados que armazena pares de chave e valor
nameAge.set("Gon", 14); //adiciona uma entrada ao Map ou atualiza uma entrada existente
nameAge.set("Killua", 14);
nameAge.set("Gon", 15); //atualiza o valor associado a essa chave, em vez de criar uma segunda entrada para Gon
console.log(nameAge);

let nameAge2 = new Map<string,number>().set("Gon",14).set("Killua", 14);
console.log(nameAge2);

let animeEpisodes = new Map<string, number>([
    ["DBZ", 200], ["FullMetal", 64]
]);

console.log(animeEpisodes);
console.log(animeEpisodes.get("DBZ")); //O método .get() procura uma entrada pela chave e devolve o valor associado
console.log(animeEpisodes.has("DBZ")); //O método .has() verifica se existe uma entrada com a chave informada
//console.log(animeEpisodes.delete("DBZ"));
//console.log(animeEpisodes.has("DBZ"));

for (let key of animeEpisodes.keys()){ //O método .keys() retorna um iterador com as chaves do Map
    console.log(key);
}

for (let v of animeEpisodes.values()){
    console.log(v);
}

for(let entry of animeEpisodes){
    console.log(`${entry[0]} | ${entry[1]}`);
}

for(let [key, value] of animeEpisodes.entries()){ //Retorna um iterador de entradas, em que cada entrada é um par [chave, valor]
    console.log(`${key} | ${value}`);
}

animeEpisodes.clear();
console.log(animeEpisodes.size);