class HomePage {

    buttonHome(){
        return cy.get('.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._1rQf3AfsjRMMXytDDkQq94._2S1EogOhPFaC6NSQm1Lmq-._3U9LWbMdwqLexyhRbACSUW');
    };
    
    buttonNovinki(){
        return cy.get('.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._32MQA-gIaGxNU0uTG1yKum._2rJ9t7_3qwx1I1yZf7aTwh').eq(0);
    };

    buttonForMen(){
        return cy.get('.wCjUeog4KtWw64IplV1e6._3A5-9K2JrODjfTiazRr7pk._28VKkeFsrUqull6_FS0I7_').eq(0);
    };

    buttonForChildren(){
        return cy.get('.wCjUeog4KtWw64IplV1e6._3A5-9K2JrODjfTiazRr7pk._28VKkeFsrUqull6_FS0I7_').eq(1);
    };

    buttonForWoomen(){
        return cy.get('.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._28VKkeFsrUqull6_FS0I7_._1Au91adL7jUCA_AmiuRLP1');
    };

    buttonClothes(){
        return cy.get('.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._32MQA-gIaGxNU0uTG1yKum._2rJ9t7_3qwx1I1yZf7aTwh').eq(1);
    };

    buttonBoots(){
        return cy.get('.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._32MQA-gIaGxNU0uTG1yKum._2rJ9t7_3qwx1I1yZf7aTwh').eq(2);
    };

    buttonAccesuares(){
        return cy.get('.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._32MQA-gIaGxNU0uTG1yKum._2rJ9t7_3qwx1I1yZf7aTwh').eq(3);
    };

    buttonBrands(){
        return cy.get('.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._32MQA-gIaGxNU0uTG1yKum._2rJ9t7_3qwx1I1yZf7aTwh').eq(4);
    };

    buttonPremium(){
        return cy.get('.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._32MQA-gIaGxNU0uTG1yKum._2rJ9t7_3qwx1I1yZf7aTwh').eq(5);
    };

    buttonSport(){
        return cy.get('.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._32MQA-gIaGxNU0uTG1yKum._2rJ9t7_3qwx1I1yZf7aTwh').eq(6);
    };

    buttonBeauty(){
        return cy.get('.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._32MQA-gIaGxNU0uTG1yKum._2rJ9t7_3qwx1I1yZf7aTwh').eq(7);
    };

    buttonSales(){
        return cy.get('.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._32MQA-gIaGxNU0uTG1yKum._3EsHx6oyaIHnYbLzeUb9nS._2rJ9t7_3qwx1I1yZf7aTwh');
    };


}

module.exports = new HomePage();