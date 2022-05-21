class BaseElements{
search(text){    
    return cy.get('._3jotUx9G5izzdWD5DIoPVO._91HSD7tcHouxctDsMacBB', {timeout:6000})
    .type(`${text}{enter}`);
};

resultOfTheSearch(){
    return cy.get('._385amISN8VbbsCgDXdxEO8.ui-catalog-search-head-title');
};

buyItem(text){
    this.search(text);
    //выбираем товар
    cy.get('._3eAY2i9R86WFOdpIXG96tf').eq(9).click();
    //нажимаем выпадающий список
    cy.get('._1NAuxdqJ984v_YCs8Mzpml.omvWJXbwzlp3TzvRfRP6B').click();
    //выбираем размер
    cy.get('.O7KAVeyES2Dm7FutyoPSf.ui-product-page-sizes-chooser-item_enabled.ui-product-page-sizes-chooser-item').eq(0).click();
    //нажимаем добавить в корзину
    cy.get('.x-button.x-button_primaryFilled.x-button_48._13UOn2F1A_KnQ1IvIHusVP').click();
    //перейти в корзину
    cy.get('.x-button.x-button_primaryFilled.x-button_32.x-button_link.x-button_link_32.x-button_intrinsic-width').click();
    //add phone
    // cy.get('#phone')
    //     .type('295672230');
    //add city
    // cy.get('#city_name')
    //     .type(`берёза'{enter}`)
    
};
typePhone(phone){
    return cy.get('#phone')
        .type(`${phone}`);
};

typeCity(city){
    return cy.get('#city_name')
        .type(`${city}`);
        
};

cityWrapper(){
    return cy.get('._3CUzCWEVDb9VMu0WHCMj5s').eq(0);
};

street(street){
    return cy.get('#street', {timeout:3000})
        .type(`${street}`);
};

streetWrapper(){
    return cy.get('._3CUzCWEVDb9VMu0WHCMj5s').eq(0);
};

house(house){
    return cy.get('#house')
        .type(`${house}`);
};

houseWrapper(){
    return cy.get('._3CUzCWEVDb9VMu0WHCMj5s', {timeout:2000}).eq(0);
};

apartment(apartment){
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
    return cy.get('.x-checkbox__box').eq(0)
        //.uncheck();
};

typeComments(comments){
    return cy.get('#customer_notes')
    //cy.type() failed because it targeted a disabled element.
        .type(`${comments}`,{force:true});
};

buttonPurchase(){
    return cy.get('._1rn675kq-eNIEmUNnV9lHZ > .x-button');
};

}
module.exports = new BaseElements();