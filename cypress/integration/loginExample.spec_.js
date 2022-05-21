//Cypress example
it('User can log in', () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.contains('a', 'Sign in').click()
    cy.get('#email').type('example@netguru.com')
    cy.get("#passwd").type('password{enter}')
    cy.title().should('include', 'My account - My Store')
  })


  //WDIO example
  it.skip('User can log in', () => {
    browser.url('http://automationpractice.com/index.php')
    $('a=Sign in').click()
    $('#email').setValue('example@netguru.com')
    $('#passwd').setValue('password')
    browser.keys('Enter')
    const title = browser.getTitle()
    assert.strictEqual(title, 'My account - My Store')
})


//Selenium Webdriver example
it.skip('User can log in', async () => {
    await driver.get('http://automationpractice.com/index.php');
    await driver.findElement(By.xpath('//div[@class="header_user_info"]')).click()
    await driver.wait(until.elementLocated(By.id('email')));
    await driver.findElement(By.id('email')).sendKeys('example@netguru.com')
    await driver.findElement(By.id('passwd')).sendKeys('password', Key.RETURN)
    await driver.wait(until.titleContains("My account"));
    driver
      .getTitle()
      .then(title => {
        expect(title).toEqual('My account - My Store');
      });
  });