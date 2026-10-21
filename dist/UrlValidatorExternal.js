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
//# sourceMappingURL=UrlValidatorExternal.js.map