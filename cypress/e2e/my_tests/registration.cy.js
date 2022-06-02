//Registration tests for lamoda.by


const HomePage = require('../../pageObjects/homePage');
const Registration = require('../../pageObjects/registrationPage');
const BaseElements = require('../../helpers/baseElements')
const LoginPage = require('../../pageObjects/loginPage');

const userData = {
    email: 'vasyapupkin@yandex.ru',
    wrongEmail: 'babbdsndjajj',
    password: 'qweasd123',
    smallPassword: '1',
    wrongPassword: 'qweasd1232223',
    name: 'Vasya'
}


describe('check Registration functionality', function(){

    beforeEach(()=>{
        cy.viewport(1920,1080);     
        cy.visit('https://www.lamoda.by/');     
    });


    it ('test valid registration', ()=>{
        LoginPage.buttonLogin().click();
        Registration.createAccountButton().click()
        BaseElements.type(Registration.typeEmail(),userData.email)
        BaseElements.type(Registration.typePassword(),(userData.password))
        BaseElements.type(Registration.typeName(),(userData.name))
        BaseElements.type(Registration.typeAnotherPasswordSection(),(userData.password))
        Registration.fludCheckBoxBustton().click()
        Registration.confirmPrivacyPoliticCheckBox().click()
        //Registration.submitRegistrationButton().click()     //нажать зарегистрироваться
        Registration.submitRegistrationButton().should('be.visible');
    })


    it('test invalid email for registration', ()=>{
        LoginPage.buttonLogin().click();
        Registration.createAccountButton().click()
        BaseElements.type(Registration.typeEmail(),userData.wrongEmail)
        BaseElements.type(Registration.typePassword(),(userData.password))
        BaseElements.type(Registration.typeName(),(userData.name))
        BaseElements.type(Registration.typeAnotherPasswordSection(),(userData.password))
        Registration.fludCheckBoxBustton().click()
        Registration.confirmPrivacyPoliticCheckBox().click()
        //Registration.submitRegistrationButton().click()     //нажать зарегистрироваться      
        Registration.errorEmailMessage().should('be.visible')
    })


    it('test sick password for registration', ()=>{
        LoginPage.buttonLogin().click();
        Registration.createAccountButton().click()
        BaseElements.type(Registration.typeEmail(),userData.email)
        BaseElements.type(Registration.typePassword(),(userData.smallPassword))
        BaseElements.type(Registration.typeName(),(userData.name))
        //BaseElements.type(Registration.typeAnotherPasswordSection(),(userData.password))
        Registration.fludCheckBoxBustton().click()
        Registration.confirmPrivacyPoliticCheckBox().click()
        //Registration.submitRegistrationButton().click()     //нажать зарегистрироваться       
        Registration.errorSickPassword().should('be.visible')
    })


    it('test invalid repeat password registration', ()=>{
        LoginPage.buttonLogin().click();
        Registration.createAccountButton().click()
        BaseElements.type(Registration.typeEmail(),userData.email)
        BaseElements.type(Registration.typePassword(),(userData.password))
        BaseElements.type(Registration.typeName(),(userData.name))
        BaseElements.type(Registration.typeAnotherPasswordSection(),(userData.wrongPassword))
        Registration.fludCheckBoxBustton().click()
        Registration.confirmPrivacyPoliticCheckBox().click()
        //Registration.submitRegistrationButton().click()     //нажать зарегистрироваться
        Registration.errorRepeatPassword().should('be.visible');
    })


    it('test registration without  privacy checkbox option', ()=>{
        LoginPage.buttonLogin().click();
        Registration.createAccountButton().click()
        BaseElements.type(Registration.typeEmail(),userData.email)
        BaseElements.type(Registration.typePassword(),(userData.password))
        BaseElements.type(Registration.typeName(),(userData.name))
        BaseElements.type(Registration.typeAnotherPasswordSection(),(userData.password))
        Registration.fludCheckBoxBustton().click()
        //Registration.confirmPrivacyPoliticCheckBox().click()
        //Registration.submitRegistrationButton().click()     //нажать зарегистрироваться
        Registration.emptyRegistrationForm().should('be.visible');
    })
})