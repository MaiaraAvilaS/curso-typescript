"use strict";
var Validation;
(function (Validation) {
    let urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    class UrlValidator {
        isValid(str) {
            return urlRegex.test(str);
        }
    }
    Validation.UrlValidator = UrlValidator;
})(Validation || (Validation = {}));
//# sourceMappingURL=UrlValidator.js.map