//tests for lamoda.by


const HomePage = require('../../pageObjects/homePage');
const BaseElements = require('../../helpers/baseElements');
const LoginPage = require('../../pageObjects/loginPage');


describe('my tests', function(){

    beforeEach(()=>{
        cy.viewport(1920,1080);     //устанавливаем разрешение браузера по дефолту перед каждым тестом
        cy.visit('https://www.lamoda.by/');     //заходим на сайт перед каждым тестом
    });

    //debugger        //открывает дебаггер cypress

    //проверяем урл главной страницы
    it  ('visit web-site lamoda', ()=>{    
        cy.url().should('include','https://www.lamoda.by/');
        

    });

    //проверяем кнопку ламода
    it ('check home button', ()=>{
        HomePage.buttonForMen().click();
        HomePage.buttonHome().click();
        cy.url().should('include','https://www.lamoda.by/');

    });

    //проверяем вкладку Новинки
    it ('check Novinki button', ()=>{
        HomePage.buttonNovinki().click();
        cy.url().should('include', 'https://www.lamoda.by/c/4153/default-women/?is_new=1&sitelink=topmenuW&l=1');
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
    })


    //проверяем поиск по тэгу куртка
    it ('check search`куртка`', ()=>{
        BaseElements.search('куртка');
        BaseElements.resultOfTheSearch().should('include.text','куртка');
    });

    //проверяем поиск по тэгу джинсы
    it ('check search`джинсы`', ()=>{
        BaseElements.search('джинсы');       
        BaseElements.resultOfTheSearch().should('include.text','джинсы');
    });

        //проверяем поиск по тэгу кроссовки Adias
    it ('check search`кроссовки Adidas`', ()=>{
        BaseElements.search('кроссовки Adidas');       
        BaseElements.resultOfTheSearch().should('include.text','кроссовки adidas');
    });


        //проверяем поиск по тэгу кепка
    it ('check search`кепка`', ()=>{
        BaseElements.search('кепка');       
        BaseElements.resultOfTheSearch().should('include.text','кепка');
    });


    //покупаем майку
    it.only ('buy tshirt', ()=>{
        BaseElements.buyItem('майка');
        BaseElements.typePhone('295576063');
        BaseElements.typeCity('берёза');
        BaseElements.cityWrapper().click();
        //cy.wait(3000);
        BaseElements.street('ле');
        BaseElements.streetWrapper().click();
        BaseElements.house('1');
        BaseElements.houseWrapper().click();
        BaseElements.apartment('1');
        BaseElements.typeFirstName('Иван')
        BaseElements.typeLastName('Иванов');
        BaseElements.typeMiddleName('Иванович');
        BaseElements.typeEmail('ivanIvanov@mail.ru');
        BaseElements.checkBoxPromotion().click();        
        BaseElements.typeComments('не размещайте заказ, спасибо.');
        //В поле комментарии есть баг при тесте `#customer_notes`, что поле имеет свойство disabled и не возможно прописать комментарий к заказу
        //cy.type() failed because it targeted a disabled element.
        //BaseElements.buttonPurchase().click();        //кнопка заказа, дождаться, что видима, жать не надо
        //cy.url().should('include', 'https://www.lamoda.by/checkout/cart/');
        cy.get('._23lAKtqBbUlCSaXvUj7r6W').should('include.text', 'айка');

    });


    //делаем LogIn
    it ('check LogIn on website', ()=>{
        LoginPage.buttonLogin().click();
        LoginPage.typeEmail('eugenebeletsky@gmail.com');
        LoginPage.typePassword('Y68ZNU3hbfkTNKE');
        LoginPage.buttonConfirmLogIn().click();
        LoginPage.tabProfile()
                //.invoke('text')
                .should('be.visible');

    })




})
