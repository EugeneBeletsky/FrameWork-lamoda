//Registration tests for lamoda.by


const HomePage = require('../../pageObjects/homePage');
const Registration = require('../../pageObjects/registrationPage');
const BaseElements = require('../../helpers/baseElements');
const LoginPage = require('../../pageObjects/loginPage');


describe('check Registration functionality', function(){

    beforeEach(()=>{
        cy.viewport(1920,1080);     //устанавливаем разрешение браузера по дефолту перед каждым тестом
        cy.visit('https://www.lamoda.by/');     //заходим на сайт перед каждым тестом
    });


    //делаем регистрацию
    it('test valid registration', ()=>{
        LoginPage.buttonLogin().click();
        // .should('be.visible');
        Registration.createAccountButton().click()
        Registration.typeEmail('vasyapupkin@yandex.ru')
        Registration.typePassword('qweasd123')
        Registration.typeName('Vasya')
        Registration.typeAnotherPasswordSection('qweasd123')
        Registration.fludCheckBoxBustton().click()
        Registration.confirmPrivacyPoliticCheckBox().click()
        Registration.submitRegistrationButton().click()     //нажать зарегистрироваться
        Registration.submitRegistrationButton().should('be.visible');
    })


    it('test invalid email for registration', ()=>{
        LoginPage.buttonLogin().click();        
        Registration.createAccountButton().click()
        Registration.typeEmail('vasyapupkin')
        Registration.typePassword('qweasd123')
        Registration.typeName('Vasya')
        Registration.typeAnotherPasswordSection('qweasd123')
        Registration.fludCheckBoxBustton().click()
        Registration.confirmPrivacyPoliticCheckBox().click()
        //Registration.submitRegistrationButton().click()     //нажать зарегистрироваться        
        Registration.errorEmailMessage().should('be.visible')
    })


    it('test sick password for registration', ()=>{
        LoginPage.buttonLogin().click();       
        Registration.createAccountButton().click()
        Registration.typeEmail('vasyapupkin@mail.ru')
        Registration.typePassword('1111')
        Registration.typeName('Vasya')
        //Registration.typeAnotherPasswordSection('')
        Registration.fludCheckBoxBustton().click()
        Registration.confirmPrivacyPoliticCheckBox().click()
        //Registration.submitRegistrationButton().click()     //нажать зарегистрироваться        
        Registration.errorSickPassword().should('be.visible')
    })


    it('test invalid repeat password registration', ()=>{
        LoginPage.buttonLogin().click();      
        Registration.createAccountButton().click()
        Registration.typeEmail('vasyapupkin@yandex.ru')
        Registration.typePassword('qweasd123')
        Registration.typeName('Vasya')
        Registration.typeAnotherPasswordSection('qweasd')
        Registration.fludCheckBoxBustton().click()
        Registration.confirmPrivacyPoliticCheckBox().click()
        //Registration.submitRegistrationButton().click()     //нажать зарегистрироваться
        Registration.errorRepeatPassword().should('be.visible');
    })


    it('test registration without  privacy checkbox option', ()=>{
        LoginPage.buttonLogin().click(); 
        Registration.createAccountButton().click()
        Registration.typeEmail('vasyapupkin@yandex.ru')
        Registration.typePassword('qweasd123')
        Registration.typeName('Vasya')
        Registration.typeAnotherPasswordSection('qweasd123')
        Registration.fludCheckBoxBustton().click()
        //Registration.confirmPrivacyPoliticCheckBox().click()
        //Registration.submitRegistrationButton().click()     //нажать зарегистрироваться
        Registration.emptyRegistrationForm().should('be.visible');
    })










})