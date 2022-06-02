const HomePage = require("./homePage");

class LoginPage {
    constructor(){
        this.buttonLogin = ()=> cy.get('.wCjUeog4KtWw64IplV1e6._3A5-9K2JrODjfTiazRr7pk.BLS-hOSrikRnPX76_f5Xr',{timeout:3000}).eq(0);
        this.typeEmail = ()=> cy.get('.input__input', {timeout:2000}).eq(0)   
        this.typePassword = ()=> cy.get('.input__input', {timeout:2000}).eq(1)
        this.buttonConfirmLogIn = ()=> cy.get('._3mm04opyuLqARuyGHzSgDu > .x-button');
        this.buttonCreateAccount = ()=> cy.get('.wCjUeog4KtWw64IplV1e6._3539glT5gkZd9IN6zZJk6G.sqgUf472Rzh6p9Y-lmoKX').eq(3);
        this.tabProfile = ()=> cy.get('.v-popover._1yG9UkgxsTOn_VM_ho2YBj.BLS-hOSrikRnPX76_f5Xr');
        this.invalidMessage = ()=> cy.get('._2xyPzMQ7VZwaQbGuJjmVDX');

        };
    }
module.exports = new LoginPage();