//tests for Man page

const ForMan = require('../../pageObjects/forManPage');
const HomePage = require('../../pageObjects/homePage');

describe('tests for Man page', function(){
    beforeEach(()=>{
        cy.viewport(1920,1080);     //устанавливаем разрешение браузера по дефолту перед каждым тестом
        cy.visit('https://www.lamoda.by/');     //заходим на сайт перед каждым тестом
        HomePage.buttonForMen().click();        //переходим в раздел For Man
        
    });

    it('check url',()=>{
        cy.url().should('include','https://www.lamoda.by/men-home/');

    });

    it('check clothes section', ()=>{
        ForMan.clothesButton().click();
        cy.url().should('include', 'https://www.lamoda.by/c/477/clothes-muzhskaya-odezhda/?sitelink=topmenuM&l=2')
    });

    it('check bryuki title', ()=>{
        ForMan.clothesButton().click();
        ForMan.bryukiButton().click();
        cy.title().should('include', 'Мужские брюки');

    });

    it ('check bryuki text section', ()=>{
        ForMan.clothesButton().click();
        ForMan.bryukiButton().click();
        ForMan.textSection().should('include.text','брюки')

    });

    it ('check quantity of items in section greater than 1', ()=>{
        ForMan.clothesButton().click();
        ForMan.bryukiButton().click();
        ForMan.quantityOfItems().should('be.gt', 1);
        

    });

    it ('check if items exists (visible)', ()=>{
        ForMan.clothesButton().click();
        ForMan.bryukiButton().click();
        ForMan.items('2').should('be.visible');       

    });

    it ('check if items clickable and have description', ()=>{
        ForMan.clothesButton().click();
        ForMan.bryukiButton().click();
        cy.wait(2000);
        ForMan.items('2').click();
        ForMan.itemsDescription().should('be.visible');       

    });

    it ('check if items have price more than 1$', ()=>{
        ForMan.clothesButton().click();
        ForMan.bryukiButton().click();
        ForMan.getItemPrice(2).should('be.gt', 2.6)       

    });


})