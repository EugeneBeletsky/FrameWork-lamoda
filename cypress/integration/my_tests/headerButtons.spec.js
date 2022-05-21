//Header buttons tests for lamoda.by


const HomePage = require('../../pageObjects/homePage');
const BaseElements = require('../../helpers/baseElements');
const LoginPage = require('../../pageObjects/loginPage');


describe('header buttons tests', function(){

    beforeEach(()=>{
        cy.viewport(1920,1080);     //устанавливаем разрешение браузера по дефолту перед каждым тестом
        cy.visit('https://www.lamoda.by/');     //заходим на сайт перед каждым тестом
    });

    //проверяем урл главной страницы
    it  ('visit web-site lamoda', ()=>{    
        cy.url().should('eq','https://www.lamoda.by/');
        

    });

    //проверяем кнопку ламода
    it ('check home button', ()=>{
        HomePage.buttonForMen().click();
        HomePage.buttonHome().click();
        cy.url().should('include','https://www.lamoda.by/');

    });

    //проверяем переход в раздел для мужчин
    it ('check for Men button', ()=>{
        HomePage.buttonForMen().click();
        cy.url().should('include', 'https://www.lamoda.by/men-home/?sitelink=topmenuM');
    });

    //проверяем переход в раздел для детей
    it ('check for Children button', ()=>{
        HomePage.buttonForChildren().click();
        cy.url().should('include','https://www.lamoda.by/kids-home/?sitelink=topmenuK');
    });

    //проверяем переход в раздел для женщин
    it ('check for Woomen button', ()=>{
        HomePage.buttonForWoomen().click();
        cy.url().should('include', 'https://www.lamoda.by/women-home/?sitelink=topmenuW');
    });

        //проверяем вкладку Новинки
    it ('check Novinki button', ()=>{
        HomePage.buttonNovinki().click();
        cy.url().should('include', 'https://www.lamoda.by/c/4153/default-women/?is_new=1&sitelink=topmenuW&l=1');
    });


        //проверяем вкладку Одежда
    it ('check Novinki button', ()=>{
        HomePage.buttonClothes().click();
        cy.url().should('include', 'https://www.lamoda.by/c/355/clothes-zhenskaya-odezhda/?sitelink=topmenuW&l=2');
    });


            //проверяем вкладку Обувь
    it ('check boots button', ()=>{
        HomePage.buttonBoots().click();
        cy.url().should('include', 'https://www.lamoda.by/c/15/shoes-women/?sitelink=topmenuW&l=3');
    });


                //проверяем вкладку Аксесуары
    it ('check accesuares button', ()=>{
        HomePage.buttonAccesuares().click();
        cy.url().should('include', 'https://www.lamoda.by/c/557/accs-zhenskieaksessuary/?sitelink=topmenuW&l=4');
    });


                    //проверяем вкладку Бренды
    it ('check Brands button', ()=>{
        HomePage.buttonBrands().click();
        cy.url().should('include', 'https://www.lamoda.by/brands/?genders=women&sitelink=topmenuW&l=5');
    });


                    //проверяем вкладку Премиум
    it ('check Premium button', ()=>{
        HomePage.buttonPremium().click();
        cy.url().should('include', 'https://www.lamoda.by/home-premium-women/?sitelink=topmenuW&l=6');
    });


                    //проверяем вкладку Спорт
    it ('check Sport button', ()=>{
        HomePage.buttonSport().click();
        cy.url().should('include', 'https://www.lamoda.by/home-sport-women/?sitelink=topmenuW&l=7');
    });


                    //проверяем вкладку Красота
    it ('check Beauty button', ()=>{
        HomePage.buttonBeauty().click();
        cy.url().should('include', 'https://www.lamoda.by/c/4308/default-krasotawoman/?sitelink=topmenuW&l=8');
    });


                    //проверяем вкладку Sales
    it ('check Sales button', ()=>{
        HomePage.buttonSales().click();
        cy.url().should('include', 'https://www.lamoda.by/c/4153/default-women/?is_sale=1&display_locations=outlet&sitelink=topmenuW&l=10');
    });


    


    

});