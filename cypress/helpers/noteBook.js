//HOW TO GET PRICE(float number)

const my_value = 5000.00;

cy.wrap(my_value).should('be.gt', 4999.99); // greater than
cy.wrap(my_value).should('be.gte', 5000); // greater than equal to

cy.wrap(my_value).should('be.lt', 5000.1);// less than
cy.wrap(my_value).should('be.lte', 5000); // less than equal to
//When verifying from DOM element, we need to parse the value:

cy.get('div').invoke('text').then(parseFloat).should('be.gt', 10)