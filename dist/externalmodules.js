"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmailValidatorExternal_1 = require("./EmailValidatorExternal");
const UrlValidatorExternal_1 = require("./UrlValidatorExternal");
let emailExamples2 = ["lala@", "lala@lala", "william.suane@devdojo.com.br"];
let urlExemples2 = ["devdojo.com.br", "www.devdojo.com.br", "http:///devdojo.com.br"];
emailExamples2.forEach(email => {
    console.log(`${email} ${new EmailValidatorExternal_1.EmailValidatorExternal().isValid(email)}`);
});
urlExemples2.forEach(url => {
    console.log(`${url} ${new UrlValidatorExternal_1.UrlValidatorExternal().isValid(url)}`);
});
//# sourceMappingURL=externalmodules.js.map