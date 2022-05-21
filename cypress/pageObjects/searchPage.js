class SearchItems{
    
    search(text){    
        return cy.get('._3jotUx9G5izzdWD5DIoPVO._91HSD7tcHouxctDsMacBB', {timeout:6000})
        .type(`${text}{enter}`);
    };
    
    resultOfTheSearch(){
        return cy.get('._385amISN8VbbsCgDXdxEO8.ui-catalog-search-head-title');
    };

}


module.exports = new SearchItems ();