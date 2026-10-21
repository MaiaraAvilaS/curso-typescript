import { EmailValidatorExternal } from "./EmailValidatorExternal";
import { UrlValidatorExternal } from "./UrlValidatorExternal";

let emailExamples2 = ["lala@", "lala@lala", "william.suane@devdojo.com.br"];
let urlExemples2 = ["devdojo.com.br", "www.devdojo.com.br", "http:///devdojo.com.br"]

emailExamples2.forEach(email => { //O forEach() percorre o array e executa uma função para cada elemento
    console.log(`${email} ${new EmailValidatorExternal().isValid(email)}`);
});
urlExemples2.forEach(url => {
    console.log(`${url} ${new UrlValidatorExternal().isValid(url)}`);
});
