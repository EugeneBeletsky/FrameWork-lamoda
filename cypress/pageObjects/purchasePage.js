const BaseElements = require('../helpers/baseElements');

class PurchaseItem{
    constructor(){
        this.cartIsEmpyMessageCheck = ()=> cy.get('._2JSp8mN_DdUcjyfOLCxGOj')
        this.selectItembyNumber = (number)=> cy.get('._3eAY2i9R86WFOdpIXG96tf').eq(number).click()
        this.selectDropDownd = ()=> cy.get('._1NAuxdqJ984v_YCs8Mzpml.omvWJXbwzlp3TzvRfRP6B').click()
        this.selectSize = (size)=> cy.get('.O7KAVeyES2Dm7FutyoPSf.ui-product-page-sizes-chooser-item_enabled.ui-product-page-sizes-chooser-item').eq(size).click()
        this.isSelectedSize = ()=> cy.get('._1NAuxdqJ984v_YCs8Mzpml._2GhP0_k_RksnDhNlSy2hY3')
        this.addtoCartButton = ()=> cy.contains('Добавить в корзину').click()
        this.cartButton = ()=> cy.contains('Перейти в корзину').click()  
        this.typePhone = ()=> cy.get('#phone', {timeout:5000})
        this.typeCity = ()=> cy.get('#city_name', {timeout:5000})
        this.cityWrapper = ()=> cy.get('._3CUzCWEVDb9VMu0WHCMj5s').eq(0)
        this.street = ()=> cy.get('#street', {timeout:5000})
        this.streetWrapper = ()=> cy.get('._3CUzCWEVDb9VMu0WHCMj5s', {timeout:5000}).eq(0)
        this.house = ()=> cy.get('#house', {timeout:5000})
        this.houseWrapper = ()=> cy.get('._3CUzCWEVDb9VMu0WHCMj5s', {timeout:5000}).eq(0)
        this.apartment = ()=> cy.get('#apartment')
        this.typeFirstName = ()=> cy.get('#first_name')
        this.typeLastName = ()=> cy.get('#last_name')
        this.typeMiddleName = ()=> cy.get('#middle_name')
        this.typeEmail = ()=> cy.get('#email')
        this.checkBoxPromotion = ()=> cy.get('.x-checkbox__box').eq(0)
        this.typeComments = ()=> cy.get('#customer_notes')
        this.buttonPurchase = ()=> cy.get('._1rn675kq-eNIEmUNnV9lHZ > .x-button')
        this.itemInCart = ()=> cy.get('._23lAKtqBbUlCSaXvUj7r6W')
        this.price = ()=> cy.get('._1xV4nGs4Y1I9fWAaS0OLsu > span') 
        this.mouseOverTheItem = ()=> cy.get('._1d1uyS7uQKpY75DltwBSrO').trigger('mouseover')
        this.addNumberOfItemsButton = ()=> cy.get('.icon.icon_incrementor-plus.icon_direction-down.icon_16._5j-Dkd6XjeXQ8Q6UVS6wt')
        this.deleteItemFromCartButton = ()=> cy.get('.icon.icon_checkout-cart-remove-item.icon_direction-down.icon_16._38VMlO72Ooj8OzXFIjT9OZ')
        this.cartIsEmpyMessageCheck = ()=> cy.get('._2JSp8mN_DdUcjyfOLCxGOj');
    }


    
    buyItem(text){
        BaseElements.search(text)
               
    };

    numberOfItemsForBuy(){        
        return cy.get('#cart > div > div.gNnAk3S-lnF4jt96vc0D4 > div._3nsZOm3NrhQH8DuZdnVXCD > div')
                .invoke('text')
                .then(parseInt)
    };

    getPrice(){
        return cy.get('._1xV4nGs4Y1I9fWAaS0OLsu > span')
                .invoke('text')
                .then(parseFloat)               

    }

}
module.exports = new PurchaseItem ();