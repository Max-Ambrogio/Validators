class RequiredValidator extends BaseValidator {
    validate = (value) => {
        console.log('BaseValidator.validate with: ', value)
        // return !!value
        // return value && value.length > 0 
        const isValid = value && value.length > 0
        if(isValid) {
            this.removeError('required')
        } else {
            this.addError('required' , "field is required")
        }

        return isValid

    }
}