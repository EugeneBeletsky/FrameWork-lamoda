//Purchase tests for lamoda.by

const PurchasePage = require('../../pageObjects/purchasePage');
const BaseElements = require('../../helpers/baseElements');

let customer1={
    item: 'майка',
    number: '0',
    size: '0',
    phone: '295576063',
    city: 'брест',
    street: 'богданчука',
    house: '1',
    apartment: '1',
    firstname: 'Иван',
    lastName: 'Иванов',
    midleName: 'Иванович',
    email: 'ivanIvanov@mail.ru',
    comments: 'не размещайте заказ, спасибо.'
}



describe('check purchase functionality', function(){

    beforeEach(()=>{
        cy.viewport(1920,1080);     //устанавливаем разрешение браузера по дефолту перед каждым тестом
        cy.visit('https://www.lamoda.by/');     //заходим на сайт перед каждым тестом
    });

    //проверяем, есть ли размер
    it ('buy tshirt possible to check size', ()=>{
        PurchasePage.buyItem(customer1.item);
        PurchasePage.selectItembyNumber(customer1.number);
        PurchasePage.selectDropDownd();       
        PurchasePage.selectSize(customer1.size);
        PurchasePage.isSelectedSize().should('be.visible');
    });



    it ('buy tshirt assert price', ()=>{
        PurchasePage.buyItem(customer1.item);
        PurchasePage.selectItembyNumber(customer1.number);
        PurchasePage.selectDropDownd();
        PurchasePage.selectSize(customer1.size);
        PurchasePage.addtoCartButton();
        PurchasePage.cartButton();
        PurchasePage.getPrice().should('be.gt', 1)
        
    });



    it ('possibility to add number of items', ()=>{
        PurchasePage.buyItem(customer1.item);
        PurchasePage.selectItembyNumber(customer1.number);
        PurchasePage.selectDropDownd();
        PurchasePage.selectSize(customer1.size);
        PurchasePage.addtoCartButton();
        PurchasePage.cartButton();
        PurchasePage.mouseOverTheItem()
        cy.wait(1000);
        PurchasePage.addNumberOfItemsButton().trigger('mouseover');
        PurchasePage.addNumberOfItemsButton().click();
        cy.wait(3000);
        PurchasePage.numberOfItemsForBuy().should('be.gt',1)
    });


    it ('possibility to delete the item from cart', ()=>{
        PurchasePage.buyItem(customer1.item);
        PurchasePage.selectItembyNumber(customer1.number);
        PurchasePage.selectDropDownd();
        PurchasePage.selectSize(customer1.size);
        PurchasePage.addtoCartButton();
        PurchasePage.cartButton();
        PurchasePage.mouseOverTheItem()
        cy.wait(1000);
        PurchasePage.deleteItemFromCartButton().click();
        PurchasePage.cartIsEmpyMessageCheck().should('include.text', 'В корзине нет товаров');


    });


    it ('buy tshirt full process', ()=>{
        PurchasePage.buyItem(customer1.item);
        PurchasePage.selectItembyNumber(customer1.number);
        PurchasePage.selectDropDownd();
        PurchasePage.selectSize(customer1.size);
        PurchasePage.addtoCartButton();
        PurchasePage.cartButton();
        BaseElements.type(PurchasePage.typePhone(),customer1.phone);
        cy.wait(1000);
        BaseElements.type(PurchasePage.typeCity(),customer1.city);
        PurchasePage.cityWrapper().click();
        cy.wait(1000);
        BaseElements.type(PurchasePage.street(),customer1.street);
        PurchasePage.streetWrapper().click();
        cy.wait(1000);
        BaseElements.type(PurchasePage.house(),customer1.house);
        PurchasePage.houseWrapper().click();
        cy.wait(1000);
        BaseElements.type(PurchasePage.apartment(),customer1.apartment);
        BaseElements.type(PurchasePage.typeFirstName(),customer1.firstname)
        BaseElements.type(PurchasePage.typeLastName(),customer1.lastName);
        //PurchasePage.typeMiddleName(customer1.midleName);     //уже не требуется
        BaseElements.type(PurchasePage.typeEmail(),customer1.email);
        PurchasePage.checkBoxPromotion().click();     
        BaseElements.typeForce(PurchasePage.typeComments(), customer1.comments)
        // //PurchasePage.buttonPurchase().click();        //кнопка заказа, дождаться, что видима, жать не надо
        // //cy.url().should('include', 'https://www.lamoda.by/checkout/cart/');
        PurchasePage.itemInCart().should('include.text', 'айк');

    });


});
