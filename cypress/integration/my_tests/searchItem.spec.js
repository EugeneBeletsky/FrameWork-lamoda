//SearchItems tests for lamoda.by


const HomePage = require('../../pageObjects/homePage');
const BaseElements = require('../../helpers/baseElements');
const LoginPage = require('../../pageObjects/loginPage');
const SearchPage = require('../../pageObjects/searchPage');


describe('search tests', function(){

    beforeEach(()=>{
        cy.viewport(1920,1080);     //устанавливаем разрешение браузера по дефолту перед каждым тестом
        cy.visit('https://www.lamoda.by/');     //заходим на сайт перед каждым тестом
    });

    //проверяем поиск по тэгу куртка
    it ('check search`куртка`', ()=>{
        SearchPage.search('куртка');
        SearchPage.resultOfTheSearch().should('include.text','куртка');
    });

    //проверяем поиск по тэгу джинсы
    it ('check search`джинсы`', ()=>{
        SearchPage.search('джинсы');       
        SearchPage.resultOfTheSearch().should('include.text','джинсы');
    });

        //проверяем поиск по тэгу кроссовки Adias
    it ('check search`кроссовки Adidas`', ()=>{
        SearchPage.search('кроссовки Adidas');       
        SearchPage.resultOfTheSearch().should('include.text','кроссовки adidas');
    });


        //проверяем поиск по тэгу кепка
    it ('check search`кепка`', ()=>{
        SearchPage.search('кепка');       
        SearchPage.resultOfTheSearch().should('include.text','кепка');
    });

});