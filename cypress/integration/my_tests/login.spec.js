//Login tests for lamoda.by


const HomePage = require('../../pageObjects/homePage');
const BaseElements = require('../../helpers/baseElements');
const LoginPage = require('../../pageObjects/loginPage');


describe('check Login functionality', function(){

    beforeEach(()=>{
        cy.viewport(1920,1080);     //устанавливаем разрешение браузера по дефолту перед каждым тестом
        cy.visit('https://www.lamoda.by/');     //заходим на сайт перед каждым тестом
    });
        //делаем валидный LogIn
        it ('check valid LogIn on website', ()=>{
            LoginPage.buttonLogin().click();
            LoginPage.typeEmail('eugenebeletsky@gmail.com');
            LoginPage.typePassword('Y68ZNU3hbfkTNKE');
            LoginPage.buttonConfirmLogIn().click();
            LoginPage.tabProfile()
                    .should('be.visible');    
        });

        //делаем невалидный Login с неверным password
        it('check invalid pass', ()=>{
            LoginPage.buttonLogin().click();
            LoginPage.typeEmail('eugenebeletsky@gmail.com');
            LoginPage.typePassword('Y68ZNU3hbfkTNKE1111');      //invalid pass
            LoginPage.buttonConfirmLogIn().click();
            LoginPage.invalidMessage()
                .should('be.visible')
                .and('include.text', 'Неверный логин или пароль.')

   
        });


        //делаем невалидный Login с неверным email
        it('check invalid email', ()=>{
            LoginPage.buttonLogin().click();
            LoginPage.typeEmail('eugenebeletsky111@gmail.com');     //invalid email
            LoginPage.typePassword('Y68ZNU3hbfkTNKE1111');
            LoginPage.buttonConfirmLogIn().click();
            LoginPage.invalidMessage()
                .should('be.visible')
                .and('include.text', 'Неверный логин или пароль.')              


        });

        //делаем невалидный Login с admin/admin
        it ('check invalid length field', ()=>{
            LoginPage.buttonLogin().click();
            LoginPage.typeEmail('admin');     //admin
            LoginPage.typePassword('admin');      //admin
            LoginPage.buttonConfirmLogIn()
                .should('be.disabled');     //проверяем, что кнопка не активна           


        });



});