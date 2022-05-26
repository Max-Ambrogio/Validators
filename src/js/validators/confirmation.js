class ConfirmationValidator extends BaseValidator {
    validate = (changedValue) => {
        console.log('checking if values match ', changedValue)

        const match = document.querySelector(".email")
        // const confirmation = parseInt(this.options.confirmMatches)

        console.log(match.value)

        const stringConf = JSON.stringify(match.value)
        const stringOrigional = JSON.stringify(changedValue)
        console.log(stringConf)
        console.log(stringOrigional)

        const isValid = stringOrigional == stringConf
        console.log(isValid)

        if(isValid) {
            this.removeError('confirmation')
        } else {
            this.addError('confirmation', "Emails do not match")
        }

        return isValid

    }
}

    // var emailRegex = /^\w+[\w-\+_]*@\w+\.\w+/
