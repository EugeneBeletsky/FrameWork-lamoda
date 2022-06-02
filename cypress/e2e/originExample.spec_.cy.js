const hits = getHits()
// cy.visit() should be inside cy.origin() callback
cy.visit('https://www.acme.com/history/founder')
cy.origin('https://www.acme.com', () => {
  // Fails because origin was visited before cy.origin() block
  cy.get('h1').contains('About our Founder, Marvin Acme')
  // Fails because hits is not passed in via args
  cy.get('#hitcounter').contains(hits)
})
// Won't work because still on acme.com
cy.get('h1').contains('My cool site under test')