class MaxLengthValidator extends BaseValidator {
    validate = (changedValue) => {
        console.log('checking for max length', changedValue)
        const maxLength = parseInt(this.options.maxLength)
        const isValid = changedValue.length <= maxLength
        if(isValid) {
            this.removeError('max-length')
        } else {
            this.addError('max-length', "value is too long.")
        }

        return isValid
    }
}