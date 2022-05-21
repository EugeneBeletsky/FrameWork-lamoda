class PurchaseItem{


    search(text){    
        //поиск итема
        return cy.get('._3jotUx9G5izzdWD5DIoPVO._91HSD7tcHouxctDsMacBB', {timeout:6000})
        .type(`${text}{enter}`);
    };
    
    resultOfTheSearch(){
        //результат поиска
        return cy.get('._385amISN8VbbsCgDXdxEO8.ui-catalog-search-head-title');
    };
    
    buyItem(text){
        //купить итем
        this.search(text);        
    };


    selectItembyNumber(number){
        //выбираем товар по номеру
        cy.get('._3eAY2i9R86WFOdpIXG96tf').eq(number).click();
    };


    selectDropDownd(){
        //нажимаем выпадающий список
        return cy.get('._1NAuxdqJ984v_YCs8Mzpml.omvWJXbwzlp3TzvRfRP6B').click();        //click?
    };

    selectSize(size){
        //выбираем размер
        return cy.get('.O7KAVeyES2Dm7FutyoPSf.ui-product-page-sizes-chooser-item_enabled.ui-product-page-sizes-chooser-item').eq(size).click();
    };

    isSelectedSize(){
        //размер выбран
        return cy.get('._1NAuxdqJ984v_YCs8Mzpml._2GhP0_k_RksnDhNlSy2hY3');
    };

    addtoCartButton(){
         //нажимаем добавить в корзину
        
        //синяя кнопка
        //return  cy.get('.x-button.x-button_primaryFilled.x-button_48._13UOn2F1A_KnQ1IvIHusVP._1t0WuXcy-ibW302phYkF3').click();     //click
        //черная кнопка
        //return  cy.get('.x-button.x-button_primaryFilledWeb7184.x-button_48._13UOn2F1A_KnQ1IvIHusVP._1t0WuXcy-ibW302phYkF3').click();     //click

        return cy.contains('Добавить в корзину').click();
    };

    cartButton(){
        //перейти в корзину

        return cy.contains('Перейти в корзину').click();        
    };


    typePhone(phone){
        //печатаем телефон
        return cy.get('#phone', {timeout:5000})
            .type(`${phone}`);
    };
    
    typeCity(city){
        //печатаем город
        return cy.get('#city_name', {timeout:5000})
            .type(`${city}`);
            
    };
    
    cityWrapper(){
        //выбираем из врапера
        return cy.get('._3CUzCWEVDb9VMu0WHCMj5s').eq(0);
    };
    
    street(street){
        //печатаем улицу
        return cy.get('#street', {timeout:5000})
            .type(`${street}`);
    };
    
    streetWrapper(){
        //выбираем из врапера
        return cy.get('._3CUzCWEVDb9VMu0WHCMj5s', {timeout:5000}).eq(0);
    };
    
    house(house){
        //печатаем дом
        return cy.get('#house', {timeout:5000})
            .type(`${house}`);
    };
    
    houseWrapper(){
        //выбираем из врапера
        return cy.get('._3CUzCWEVDb9VMu0WHCMj5s', {timeout:5000}).eq(0);
    };
    
    apartment(apartment){
        //печатаем комнату
        return cy.get('#apartment')
            .type(`${apartment}`);
    };
    
    typeFirstName(firstName){
        return cy.get('#first_name')
            .type(`${firstName}`);
    };
    
    typeLastName(lastName){
        return cy.get('#last_name')
            .type(`${lastName}`);
    };
    
    typeMiddleName(middleName){
        return cy.get('#middle_name')
            .type(`${middleName}`)
    };
    
    typeEmail(email){
        return cy.get('#email')
            .type(`${email}`)
    };
    
    checkBoxPromotion(){
        //отменяем подписку чекбокс
        return cy.get('.x-checkbox__box').eq(0)
            //.uncheck();
    };
    
    typeComments(comments){
        //печатаем комментарии к заказу
        return cy.get('#customer_notes')
        //cy.type() failed because it targeted a disabled element.
            .type(`${comments}`,{force:true});
    };
    
    buttonPurchase(){
        //кнопка финальной покупки
        return cy.get('._1rn675kq-eNIEmUNnV9lHZ > .x-button');
    };

    itemInCart(){
        //итем в корзине
        return cy.get('._23lAKtqBbUlCSaXvUj7r6W');
    };

    price(){
        //цена в корзине
        return cy.get('#vue-root > main > div > div._2yemUllPkiZlDZpGtCEwgC > div._1Sxoe9JHlZu3zJxazqco0W > div.recaptcha > form > div._1o2L4yFbkTgscSG1U2MhGU > div._3rW1SY8Qn-hD-mVU7oPLRw._2wgXAo2tdexUjycPgQF9vY > div._3qapQZO7S2NtDUbcVdziYd > div.JhhfBm9fF7I86BmCXCEce.WdXkj0EUdozLHkqbaxBen > div > div:nth-child(3) > div > div:nth-child(2) > span');
        //return cy.get('#vue-root > main > div > div._2yemUllPkiZlDZpGtCEwgC > div._1Sxoe9JHlZu3zJxazqco0W > div.recaptcha > form > div._1o2L4yFbkTgscSG1U2MhGU > div._3rW1SY8Qn-hD-mVU7oPLRw._2wgXAo2tdexUjycPgQF9vY > div._3qapQZO7S2NtDUbcVdziYd > div.JhhfBm9fF7I86BmCXCEce.WdXkj0EUdozLHkqbaxBen > div > div:nth-child(3) > div > div:nth-child(2) > span');
        
    };

    mouseOverTheItem(){
        //триггер мышки на итеме в корзине
        return cy.get('._1d1uyS7uQKpY75DltwBSrO').trigger('mouseover');
    };


    addNumberOfItemsButton(){
        //нажимаем кнопку добавления итема
        return cy.get('.icon.icon_incrementor-plus.icon_direction-down.icon_16._5j-Dkd6XjeXQ8Q6UVS6wt');
    };

    numberOfItemsForBuy(){
        //количество товаров в корзине
        return cy.get('#cart > div > div.gNnAk3S-lnF4jt96vc0D4 > div._3nsZOm3NrhQH8DuZdnVXCD > div')
                .invoke('text')
                .then(parseInt)
    };

    deleteItemFromCartButton(){
        //кнопка удаления товара
        return cy.get('.icon.icon_checkout-cart-remove-item.icon_direction-down.icon_16._38VMlO72Ooj8OzXFIjT9OZ');
    };

    cartIsEmpyMessageCheck(){
        //сообщение о пустой корзине
        return cy.get('._2JSp8mN_DdUcjyfOLCxGOj');
    }


}

module.exports = new PurchaseItem ();