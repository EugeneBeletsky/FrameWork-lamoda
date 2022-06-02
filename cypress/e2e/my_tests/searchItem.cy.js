//SearchItems tests for lamoda.by

const BaseElements = require('../../helpers/baseElements');




describe('search tests', function(){

    beforeEach(()=>{
        cy.viewport(1920,1080);     
        cy.visit('https://www.lamoda.by/');     
    });
    
    it ('check search`куртка`', ()=>{
        BaseElements.search('куртка');
        BaseElements.resultOfTheSearch().should('include.text','куртка');
    });
    
    it ('check search`джинсы`', ()=>{
        BaseElements.search('джинсы');       
        BaseElements.resultOfTheSearch().should('include.text','джинсы');
    });
        
    it ('check search`кроссовки Adidas`', ()=>{
        BaseElements.search('кроссовки Adidas');       
        BaseElements.resultOfTheSearch().should('include.text','кроссовки adidas');
    });
        
    it ('check search`кепка`', ()=>{
        BaseElements.search('кепка');       
        BaseElements.resultOfTheSearch().should('include.text','кепка');
    });

});