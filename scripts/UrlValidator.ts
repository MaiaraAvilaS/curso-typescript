namespace Validation { //agrupa elementos relacionados sob um mesmo nome
    let urlRegex: RegExp = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/

    export class UrlValidator implements Validator{
        isValid(str:string): boolean{
                return urlRegex.test(str);
            }
        }
    }
