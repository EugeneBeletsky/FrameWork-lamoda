class ForMan{

    //clothes button
    clothesButton(){
        return cy.get('.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._32MQA-gIaGxNU0uTG1yKum._2rJ9t7_3qwx1I1yZf7aTwh').eq(1);
    };

    //bryuki section button
    bryukiButton(){
        return cy.get('.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb.pPDgCAUDjSbGauRh05s9c').eq(1);
    };

    //text field result
    textSection(){
        return cy.get('._385amISN8VbbsCgDXdxEO8.ui-catalog-search-head-title');
    };

    //quantity of items in section
    quantityOfItems(){
        return cy.get('._2ay87bqQHiBhIcp78oY0pW.ui-catalog-search-head-products-count')
                .invoke('text')
                .then(parseInt)
    };

    //item results on the page
    items(number){
        return cy.get('._3eAY2i9R86WFOdpIXG96tf').eq(number);
    };

    //get item price
    getItemPrice(item){
        return cy.get('.x-product-card-description__price-single.x-product-card-description__price-WEB8507_price_no_bold').eq(item)
                                                    .invoke('text')
                                                    .then(parseInt)
    }

    //items have description
    itemsDescription(){
        return cy.get('.product-title__model-name');
    }

    //sort conditions by price button
    sortByPricePeriodButton(){
        //return cy.get('._2YKtuOJPpF5Po0l9hCsJsA').eq(5);
        return cy.get('.icon.icon__filter_arrow.icon_direction-down.icon_16.I6_8xKif13q4FIRsmDkff',{timeout:3000}).eq(5);

    }

        //sort conditions by cloro button
    sortByColorButton(){
        return cy.get('._2YKtuOJPpF5Po0l9hCsJsA').eq(2);
        //return cy.get('.icon.icon__filter_arrow.icon_direction-down.icon_16.I6_8xKif13q4FIRsmDkff',{timeout:3000}).eq(5);

    }

    //select color button
    sortBycolor(color){
        return cy.get('.x-checkbox__content').eq(color)   
    }

    //price MIN Field
    typePriceMin(price){
        return cy.get('.input__group.input__group_default-theme').eq(0) 
        .clear()
        .wait(1000)
        .type(`${price}`, {force:true})       
       
    }

    //price MAX field
    typePriceMax(price){
        return cy.get('.input__group.input__group_default-theme').eq(1)        
                .clear()
                .wait(1000)
                .type(`${price}`, {force:true})
    }

    //confirm filter button by price
    confirmButton(){
        return cy.get('.x-button.x-button_primaryFilledWeb7184.x-button_24.x-button_intrinsic-width')
    }


    

}

module.exports = new ForMan ();