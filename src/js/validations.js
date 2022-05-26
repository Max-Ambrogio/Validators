class Validations {
    constructor() {
        this.applyValidators()
    }

    applyValidators() {
        document.querySelectorAll("[data-validate]").forEach((element) => {
            const keys = element.dataset.validate.split(" ")
            console.log("validating with keys", keys)
            keys.forEach((key) => {
                switch (key) {
                    case 'required':
                        new RequiredValidator(element, element.dataset)
                        break
                    case 'min-length':
                        new MinLengthValidator(element, element.dataset)
                        break 
                    case 'max-length':
                        new MaxLengthValidator(element, element.dataset)
                        break
                    case 'email':
                        new EmailValidator(element, element.dataset)
                        break
                    case 'phone':
                        new PhoneValidator(element, element.dataset)
                        break
                    case 'confirmation':
                        new ConfirmationValidator(element, element.dataset)
                        break
                
                }
            })
        })
    }
}