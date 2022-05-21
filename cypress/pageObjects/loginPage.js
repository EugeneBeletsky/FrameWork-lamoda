const HomePage = require("./homePage");

class LoginPage {

    //кнопка войти
    buttonLogin(){
        return cy.get('.wCjUeog4KtWw64IplV1e6._3A5-9K2JrODjfTiazRr7pk.BLS-hOSrikRnPX76_f5Xr',{timeout:3000}).eq(0);                    
    };

    //ввести email
    typeEmail(email){
        return cy.get('.input__input', {timeout:2000}).eq(0)
                .type(`${email}{enter}`);
    };

    //ввести пароль
    typePassword(password){
        return cy.get('.input__input', {timeout:2000}).eq(1)
                .type(`${password}{enter}`);
    };

    //нажимаем кнопку логина
    buttonConfirmLogIn(){
        return cy.get('._3mm04opyuLqARuyGHzSgDu > .x-button');
        //return cy.get('.x-button.x-button_primaryFilled.x-button_40.x-button_intrinsic-width._1SiPT2ceVbbZGRaX2oL2Op');
    }

    //создать аккаунт
    buttonCreateAccount(){
        return cy.get('.wCjUeog4KtWw64IplV1e6._3539glT5gkZd9IN6zZJk6G.sqgUf472Rzh6p9Y-lmoKX').eq(3);
    };

    //табка "Профиль"
    tabProfile(){
        //return cy.get('.popover-target').eq(1);
        return cy.get('#vue-root > header > div.K0z6_G2vAE00pdIvuspNK._19GflbU4exdRDxKrxldulA > div > div > div > div > span > a');
    };

    invalidMessage(){
        return cy.get('._2xyPzMQ7VZwaQbGuJjmVDX');
    }

};

module.exports = new LoginPage();