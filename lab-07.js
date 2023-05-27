
class CustomError extends Error {
    constructor(inheritFromErrorClass) {
        super(inheritFromErrorClass);
        this.name = "CustomerError"
    }

    throwGenericError(){
        throw new Error("Generic error");       
    }
    throwCustomError() {
        throw new CustomError("Custom error");
    }
}
const tryError = new CustomError();

console.log("Force generic error");
try {
    console.log(`Generic error try block`);
    tryError.throwGenericError()   
} catch(exceptionVar) {
    console.log(`${exceptionVar.message} catch block`);
    console.log(`${exceptionVar.name}: ${exceptionVar.message}`)
} finally {
    console.log(`Generic error finally block`)
}

console.log("Force custom error");
try {
    console.log(`Custom error try block`);
    tryError.throwCustomError()
} catch(exceptionVar) {
    console.log(`${exceptionVar.message} catch block`);
    console.log(`${exceptionVar.name}: ${exceptionVar.message}`)
} finally {
    console.log(`Generic error finally block`)
}