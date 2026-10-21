(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidatorExternal = void 0;
let emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
class EmailValidatorExternal {
    isValid(str) {
        return emailRegex.test(str);
    }
}
exports.EmailValidatorExternal = EmailValidatorExternal;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlValidatorExternal = void 0;
let urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
class UrlValidatorExternal {
    isValid(str) {
        return urlRegex.test(str);
    }
}
exports.UrlValidatorExternal = UrlValidatorExternal;

},{}],3:[function(require,module,exports){
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

},{"./EmailValidatorExternal":1,"./UrlValidatorExternal":2}]},{},[3]);
