const HomePage = require('../pageObjects/homePage')

class Registration{
    constructor(){
        //this.createAccountButton = ()=> cy.get('.wCjUeog4KtWw64IplV1e6._3539glT5gkZd9IN6zZJk6G.sqgUf472Rzh6p9Y-lmoKX').eq(3);
        this.createAccountButton = ()=> cy.get('._3qRB9hBOM2Ayz1MoDS05mo > :nth-child(2) > .wCjUeog4KtWw64IplV1e6')
        //this.typeEmail = ()=> cy.get('.input__input').eq(3)
        this.typeEmail = ()=> cy.get('._3dr8g_1eJXN-ElQNuG-g2a > :nth-child(1) > .input > .input__group > .input__input')
        //this.typePassword = ()=> cy.get('.input__input').eq(4)
        this.typePassword = ()=> cy.get('._3dr8g_1eJXN-ElQNuG-g2a > :nth-child(3) > .input__group > .input__input')
        //this.typeAnotherPasswordSection = ()=> cy.get('.input__input').eq(5)
        this.typeAnotherPasswordSection = ()=> cy.get(':nth-child(4) > .input__group > .input__input')
        //this.typeName = ()=> cy.get('.input__input').eq(6)
        this.typeName = ()=> cy.get(':nth-child(5) > .input__group > .input__input')
        //this.fludCheckBoxBustton = ()=> cy.get('x-checkbox__box').eq(1)
        this.fludCheckBoxBustton = ()=> cy.get('[aria-checked="true"] > .x-checkbox__box')
        //this.confirmPrivacyPoliticCheckBox = ()=> cy.get('x-checkbox__box').eq(2)
        this.confirmPrivacyPoliticCheckBox = ()=> cy.get(':nth-child(7) > .x-checkbox > .x-checkbox__box')
        this.submitRegistrationButton = ()=> cy.contains('Зарегистрироваться')
        this.errorEmailMessage = ()=> cy.get('.input__validation-message.input__validation-message_default-theme')
        this.errorSickPassword = ()=> cy.get('.input__validation-message.input__validation-message_default-theme')
        this.errorRepeatPassword = ()=> cy.get('.input__validation-message.input__validation-message_default-theme')
        this.emptyRegistrationForm = ()=> cy.get('._3dr8g_1eJXN-ElQNuG-g2a')
 

    // createAccountButton(){
    //     return cy.get('.wCjUeog4KtWw64IplV1e6._3539glT5gkZd9IN6zZJk6G.sqgUf472Rzh6p9Y-lmoKX').eq(3);
    // }

    // typeEmail(email){
    //     return cy.get('.input__input').eq(3)
    //             .type(`${email}`)
    // }

    // typePassword(password){
    //     return cy.get('.input__input').eq(4)
    //             .type(`${password}`)
    // }

    // typeAnotherPasswordSection(password){
    //     return cy.get(':nth-child(4) > .input__group > .input__input')
    //             .type(`${password}`)
    // }

    // typeName(name){
    //     return cy.get(':nth-child(5) > .input__group > .input__input')
    //             .type(`${name}`)
    // }

    // fludCheckBoxBustton(){
    //     return cy.get('[aria-checked="true"] > .x-checkbox__box')
    // }

    // confirmPrivacyPoliticCheckBox(){
    //     return cy.get(':nth-child(7) > .x-checkbox > .x-checkbox__box')
    // }

    // submitRegistrationButton(){
    //     return cy.contains('Зарегистрироваться')
    // }


    // errorEmailMessage(){
    //     return cy.get('.input__validation-message.input__validation-message_default-theme')
    // }

    // errorSickPassword(){
    //     return cy.get('.input__validation-message')
    // }

    // errorRepeatPassword(){
    //     return cy.get('.input__validation-message')
    // }

    // emptyRegistrationForm(){
    //     return cy.get('._3dr8g_1eJXN-ElQNuG-g2a')
    // }

}}

module.exports = new Registration ()