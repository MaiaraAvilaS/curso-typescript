"use strict";
let key = "key1";
let key2 = "key2";
console.log(sessionStorage.getItem(key));
console.log(sessionStorage.getItem(key2));
sessionStorage.setItem(key, "Maiara"); //API do navegador que permite guardar informações no formato de chave e valor
sessionStorage.setItem(key2, "DevDojo"); //Armazena um valor associado a uma chave
console.log(sessionStorage.getItem(key)); //o método consulta o valor associado a uma chave específica
console.log(sessionStorage.getItem(key2)); //Recupera o valor associado à chave, ou null se ela não existir
for (let i = 0; i < sessionStorage.length; i++) { //inicialização; condição; atualização
    console.log(sessionStorage.getItem(sessionStorage.key(i)));
}
sessionStorage.removeItem(key);
console.log(sessionStorage.getItem(key));
sessionStorage.clear();
console.log("-------------------------");
//# sourceMappingURL=sessionstorage.js.map