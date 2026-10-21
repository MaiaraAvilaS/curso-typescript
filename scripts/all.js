var Validation;
(function (Validation) {
    var emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    var EmailValidator = /** @class */ (function () {
        function EmailValidator() {
        }
        EmailValidator.prototype.isValid = function (str) {
            return emailRegex.test(str);
        };
        return EmailValidator;
    }());
    Validation.EmailValidator = EmailValidator;
})(Validation || (Validation = {}));
var Validation;
(function (Validation) {
    var urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    var UrlValidator = /** @class */ (function () {
        function UrlValidator() {
        }
        UrlValidator.prototype.isValid = function (str) {
            return urlRegex.test(str);
        };
        return UrlValidator;
    }());
    Validation.UrlValidator = UrlValidator;
})(Validation || (Validation = {}));
var EmailValidator = Validation.EmailValidator;
var UrlValidator = Validation.UrlValidator;
var emailExamples = ["lala@", "lala@lala", "william.suane@devdojo.com.br"];
var urlExemples = ["devdojo.com.br", "www.devdojo.com.br", "http:///devdojo.com.br"];
emailExamples.forEach(function (email) {
    console.log("".concat(email, " ").concat(new EmailValidator().isValid(email)));
});
urlExemples.forEach(function (url) {
    console.log("".concat(url, " ").concat(new UrlValidator().isValid(url)));
});
