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

    it.skip ('sort by price range', ()=>{
        ForMan.clothesButton().click();
        ForMan.bryukiButton().click();
        ForMan.sortByPricePeriodButton().click();     
 

        //не получается реализовать, т.к. поле сортировки пропадает перед тем, как вводить значения. не нашел решения

        //ForMan.typePriceMin().trigger('mouseover')
        ForMan.typePriceMin('100');
        //ForMan.typePriceMax().trigger('mouseover')
        ForMan.typePriceMax('150');
        ForMan.confirmButton().click();
        cy.wait(2000);
        ForMan.getItemPrice(0).should('be.gte', 100)
                                .and('be.lte', 150)

    })


    it.skip ('sort by color select', ()=>{

        ForMan.clothesButton().click();
        ForMan.bryukiButton().click();
        ForMan.sortByColorButton().click()       
        ForMan.sortBycolor('1').click()
        ForMan.sortByColorButton().click()
        cy.wait(3000)
        ForMan.sortByColorButton().invoke('text').should('iclude.text', 'белый')    


    })


})