namespace Validation { //agrupa elementos relacionados sob um mesmo nome
    let emailRegex: RegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    
    export class EmailValidator implements Validator{
         isValid(str: string): boolean{
            return emailRegex.test(str);
        }
    }    
}
