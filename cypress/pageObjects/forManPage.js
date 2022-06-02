class ForMan{
    constructor(){
        this.clothesButton = ()=> cy.get('.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._32MQA-gIaGxNU0uTG1yKum._2rJ9t7_3qwx1I1yZf7aTwh').eq(1);
        this.bryukiButton = ()=> cy.get('.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb.pPDgCAUDjSbGauRh05s9c').eq(1);
        this.textSection = ()=> cy.get('._385amISN8VbbsCgDXdxEO8.ui-catalog-search-head-title');        
        this.items = (number)=> cy.get('._3eAY2i9R86WFOdpIXG96tf').eq(number);        
        this.itemsDescription = ()=> cy.get('.product-title__model-name');
        this.sortByPricePeriodButton = ()=> cy.get('.icon.icon__filter_arrow.icon_direction-down.icon_16.I6_8xKif13q4FIRsmDkff',{timeout:3000}).eq(5);
        this.sortByColorButton = ()=> cy.get('._2YKtuOJPpF5Po0l9hCsJsA').eq(2);
        this.sortBycolor = (color)=> cy.get('.x-checkbox__content').eq(color)   
        this.confirmButton = ()=> cy.get('.x-button.x-button_primaryFilledWeb7184.x-button_24.x-button_intrinsic-width')

    }

    quantityOfItems(){
        return cy.get('._2ay87bqQHiBhIcp78oY0pW')
                .invoke('text')
                .then(parseInt)
    };


    getItemPrice(item){
        return cy.get('.x-product-card-description__price-single.x-product-card-description__price-WEB8507_price_no_bold').eq(item)
              .invoke('text')
              .then(parseInt)
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

}

module.exports = new ForMan ();