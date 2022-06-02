//Login tests for lamoda.by


const HomePage = require('../../pageObjects/homePage');
const BaseElements = require('../../helpers/baseElements');
const LoginPage = require('../../pageObjects/loginPage');


const user ={
    email: 'eugenebeletsky@gmail.com',
    password: 'Y68ZNU3hbfkTNKE',
    wrongEmail: 'eugenebeletsky11111@gmail.com',
    wrongPass: 'Y68ZNU3hbfkTNKE11111',
    admin: 'admin'
}


describe('check Login functionality', function(){

    beforeEach(()=>{
        cy.viewport(1920,1080);     
        cy.visit('https://www.lamoda.by/');     
    });
        
        it ('check valid LogIn on website', ()=>{
            LoginPage.buttonLogin().click();            
            BaseElements.type(LoginPage.typeEmail(), user.email)            
            BaseElements.type(LoginPage.typePassword(), user.password)
            LoginPage.buttonConfirmLogIn().click();
            LoginPage.tabProfile()
                    .should('be.visible');    
        });

        
        it('check invalid pass', ()=>{
            LoginPage.buttonLogin().click();
            BaseElements.type(LoginPage.typeEmail(), user.email)            
            BaseElements.type(LoginPage.typePassword(), user.wrongPass)  //invalid pass
            LoginPage.buttonConfirmLogIn().click();
            LoginPage.invalidMessage()
                .should('be.visible')
                .and('include.text', 'Неверный логин или пароль.')

   
        });


        
        it('check invalid email', ()=>{
            LoginPage.buttonLogin().click();
            BaseElements.type(LoginPage.typeEmail(), user.wrongEmail)       //invalid email     
            BaseElements.type(LoginPage.typePassword(), user.password)
            LoginPage.buttonConfirmLogIn().click();
            LoginPage.invalidMessage()
                .should('be.visible')
                .and('include.text', 'Неверный логин или пароль.')              


        });

        
        it ('check invalid length field', ()=>{
            LoginPage.buttonLogin().click();
            BaseElements.type(LoginPage.typeEmail(), user.admin)       //admin     
            BaseElements.type(LoginPage.typePassword(), user.admin)      //admin
            LoginPage.buttonConfirmLogIn()
                .should('be.disabled');            


        });



});