"use strict";
var EmailValidator = Validation.EmailValidator;
var UrlValidator = Validation.UrlValidador;
let emailExamples = ["lala@", "lala@lala", "william.suane@devdojo.com.br"];
let urlExemples = ["devdojo.com.br", "www.devdojo.com.br", "http:///devdojo.com.br"];
emailExamples.forEach(email => {
    console.log(`${email} ${EmailValidator.isValid(email)}`);
});
urlExemples.forEach(url => {
    console.log(`${url} ${UrlValidator.isValid(url)}`);
});
//# sourceMappingURL=namespace2.js.map