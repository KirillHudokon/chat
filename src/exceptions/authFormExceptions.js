
class ValidationError extends Error{
    constructor(message) {
        super(message)
        this.name = this.constructor.name
    }
}

export class FieldRequiredError extends ValidationError {
    constructor(field) {
        super(`${field} is required.`);
        this.field = field;
    }
}
export class PasswordMismatchError extends ValidationError{
    constructor() {
        super('Passwords must be the same');
    }
}

export class IncorrectPhoneNumber extends ValidationError{
    constructor(field) {
        super(`Incorrect phone number in ${field}. Please, try again with correct`);
        this.fieild = field
    }
}
export class BadlyFormattedDataError extends ValidationError{
    constructor(field) {
        super(`${field} is badly formatted.`);
        this.field = field
    }
}
const checkIsEmpty = (userData) => {
    const [name, value] = userData
    if(!value){
        throw new FieldRequiredError(name)
    }
}
const checkPattern = (userData) => {
    const [name, value] = userData
    const regex = {
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        username: /^[\p{L}0-9 ]+$/u,
    }
    if(regex[name] && !regex[name.toLowerCase()].test(value)){
      throw new BadlyFormattedDataError(name)
    }
}
const checkPasswordsMatching=(password, repeatPassword)=>{
    if(password !== repeatPassword){
        throw new PasswordMismatchError()
    }
}
export const checkIsValid = (userData) => {
    Object.entries(userData).map(data=>{
        checkIsEmpty(data)
        checkPattern(data)
    })
    if(userData['repeat password']){
        checkPasswordsMatching(userData['repeat password'], userData['password'])
    }
}