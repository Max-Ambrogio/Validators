class PhoneValidator extends BaseValidator {
    validate = (changedValue) => {
        console.log('checking for phone number', changedValue)
        const phone = changedValue
        const stringPhone = JSON.stringify(phone)
        console.log(stringPhone)

        var usPhoneRegex = /^[\(\[]*\d{3}[\)\]\.\-]*\d{3}[\.\.-]*\d{4}$/;
        console.log(usPhoneRegex)

        const isValid = changedValue.match(usPhoneRegex)

        console.log(isValid)

        if(isValid) {
            this.removeError('phone')
        } else {
            this.addError('phone', "Not a valid phone number")
        }

        return isValid
    }

    // var emailRegex = /^\w+[\w-\+_]*@\w+\.\w+/
}