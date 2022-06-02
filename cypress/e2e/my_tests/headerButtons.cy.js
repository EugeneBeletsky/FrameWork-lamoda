//Header buttons tests for lamoda.by


const HomePage = require('../../pageObjects/homePage');
const LoginPage = require('../../pageObjects/loginPage');


describe('header buttons tests', function(){

    beforeEach(()=>{
        cy.viewport(1920,1080);     
        cy.visit('https://www.lamoda.by/');     
    });
    
    it  ('visit web-site lamoda', ()=>{    
        cy.url().should('eq','https://www.lamoda.by/');        
    });

    
    it ('check home button', ()=>{
        HomePage.buttonForMen().click();
        HomePage.buttonHome().click();
        cy.url().should('include','https://www.lamoda.by/');
    });
    
    it ('check for Men button', ()=>{
        HomePage.buttonForMen().click();
        cy.url().should('include', 'https://www.lamoda.by/men-home/?sitelink=topmenuM');
    });
    
    it ('check for Children button', ()=>{
        HomePage.buttonForChildren().click();
        cy.url().should('include','https://www.lamoda.by/kids-home/?sitelink=topmenuK');
    });
    
    it ('check for Woomen button', ()=>{
        HomePage.buttonForWoomen().click();
        cy.url().should('include', 'https://www.lamoda.by/women-home/?sitelink=topmenuW');
    });
        
    it ('check Novinki button', ()=>{
        HomePage.buttonNovinki().click();
        cy.url().should('include', 'https://www.lamoda.by/c/4153/default-women/?is_new=1&sitelink=topmenuW&l=1');
    });
        
    it ('check Novinki button', ()=>{
        HomePage.buttonClothes().click();
        cy.url().should('include', 'https://www.lamoda.by/c/355/clothes-zhenskaya-odezhda/?sitelink=topmenuW&l=2');
    });
            
    it ('check boots button', ()=>{
        HomePage.buttonBoots().click();
        cy.url().should('include', 'https://www.lamoda.by/c/15/shoes-women/?sitelink=topmenuW&l=3');
    });
               
    it ('check accesuares button', ()=>{
        HomePage.buttonAccesuares().click();
        cy.url().should('include', 'https://www.lamoda.by/c/557/accs-zhenskieaksessuary/?sitelink=topmenuW&l=4');
    });

    it ('check Brands button', ()=>{
        HomePage.buttonBrands().click();
        cy.url().should('include', 'https://www.lamoda.by/brands/?genders=women&sitelink=topmenuW&l=5');
    });

    it ('check Premium button', ()=>{
        HomePage.buttonPremium().click();
        cy.url().should('include', 'https://www.lamoda.by/home-premium-women/?sitelink=topmenuW&l=6');
    });

    it ('check Sport button', ()=>{
        HomePage.buttonSport().click();
        cy.url().should('include', 'https://www.lamoda.by/home-sport-women/?sitelink=topmenuW&l=7');
    });

    it ('check Beauty button', ()=>{
        HomePage.buttonBeauty().click();
        cy.url().should('include', 'https://www.lamoda.by/c/4308/default-krasotawoman/?sitelink=topmenuW&l=8');
    });
               
    it ('check Sales button', ()=>{
        HomePage.buttonSales().click();
        cy.url().should('include', 'https://www.lamoda.by/c/4153/default-women/?is_sale=1&display_locations=outlet&sitelink=topmenuW&l=10');
    }); 
   

});