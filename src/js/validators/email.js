class EmailValidator extends BaseValidator {
    validate = (changedValue) => {
        console.log('checking for email', changedValue)
        const email = changedValue
        const stringEmail = JSON.stringify(email)
        console.log(stringEmail)

        var regex = /^\w+[\w-\+_]*@\w+\.\w+/;
        console.log(regex)

        const isValid = changedValue.match(regex)

        console.log(isValid)

        if(isValid) {
            this.removeError('email', "")
        } else {
            this.addError('email', "Not a valid email")
        }

        return isValid
    }

    // var emailRegex = /^\w+[\w-\+_]*@\w+\.\w+/
}