const HomePage = require('../pageObjects/homePage')

class Registration{

    createAccountButton(){
        return cy.get('._3qRB9hBOM2Ayz1MoDS05mo > :nth-child(2) > .wCjUeog4KtWw64IplV1e6');
    }

    typeEmail(email){
        return cy.get('._3dr8g_1eJXN-ElQNuG-g2a > :nth-child(1) > .input > .input__group > .input__input')
                .type(`${email}`)
    }

    typePassword(password){
        return cy.get('._3dr8g_1eJXN-ElQNuG-g2a > :nth-child(3) > .input__group > .input__input')
                .type(`${password}`)
    }

    typeAnotherPasswordSection(password){
        return cy.get(':nth-child(4) > .input__group > .input__input')
                .type(`${password}`)
    }

    typeName(name){
        return cy.get(':nth-child(5) > .input__group > .input__input')
                .type(`${name}`)
    }

    fludCheckBoxBustton(){
        return cy.get('[aria-checked="true"] > .x-checkbox__box')
    }

    confirmPrivacyPoliticCheckBox(){
        return cy.get(':nth-child(7) > .x-checkbox > .x-checkbox__box')
    }

    submitRegistrationButton(){
        return cy.get('.x-button.x-button_primaryFilledWeb7184.x-button_40.x-button_intrinsic-width._27JVPsn4v4UPukX_BOxWUd')
    }


    errorEmailMessage(){
        return cy.get('.input__validation-message.input__validation-message_default-theme')
    }

    errorSickPassword(){
        return cy.get('.input__validation-message')
    }

    errorRepeatPassword(){
        return cy.get('.input__validation-message')
    }

    emptyRegistrationForm(){
        return cy.get('._3dr8g_1eJXN-ElQNuG-g2a')
    }

}

module.exports = new Registration ()