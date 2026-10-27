function doSomethingWithString(input: string): string {
    if (input === undefined || input === "") {
        throw new StringNotValidError(`The string "${input}" is not valid`); //- throw: lança o erro e interrompe a execução normal da função
    }
    return input;
}
class ApplicationError implements Error {
    name: string = "ApplicationError";

    constructor(public message: string) {
        if (typeof console !== "undefined") {
            console.log(`Error: ${message}`);
        }
    }

    toString(): string {
        return `${this.name}: ${this.message}`;
    }
}

class StringNotValidError extends ApplicationError { 
//A palavra extends indica que StringNotValidError herda de ApplicationError, isso significa que a classe filha pode aproveitar os membros e comportamentos herdados
    
}

try{
    let input = doSomethingWithString("");
} catch (err){
    if(err instanceof ApplicationError){ //verifica se um objeto é uma instância de determinada classe ou se herda dela por meio da cadeia de protótipos
        console.log(`No action inside if`);
        throw err;
    }
    console.log(`No action`)
}finally{
    console.log(`always executed`);
}

