class HomePage {
    constructor(){
        this.buttonHome = ()=> cy.get('.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._1rQf3AfsjRMMXytDDkQq94._2S1EogOhPFaC6NSQm1Lmq-._3U9LWbMdwqLexyhRbACSUW');
        this.buttonNovinki = ()=> cy.get('.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._32MQA-gIaGxNU0uTG1yKum._2rJ9t7_3qwx1I1yZf7aTwh').eq(0);
        this.buttonForMen = ()=> cy.get('.wCjUeog4KtWw64IplV1e6._3A5-9K2JrODjfTiazRr7pk._28VKkeFsrUqull6_FS0I7_').eq(0);
        this.buttonForChildren = ()=> cy.get('.wCjUeog4KtWw64IplV1e6._3A5-9K2JrODjfTiazRr7pk._28VKkeFsrUqull6_FS0I7_').eq(1);
        this.buttonForWoomen = ()=> cy.get('.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._28VKkeFsrUqull6_FS0I7_._1Au91adL7jUCA_AmiuRLP1');
        this.buttonClothes = ()=> cy.get('.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._32MQA-gIaGxNU0uTG1yKum._2rJ9t7_3qwx1I1yZf7aTwh').eq(1);
        this.buttonBoots = ()=> cy.get('.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._32MQA-gIaGxNU0uTG1yKum._2rJ9t7_3qwx1I1yZf7aTwh').eq(2);
        this.buttonAccesuares = ()=> cy.get('.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._32MQA-gIaGxNU0uTG1yKum._2rJ9t7_3qwx1I1yZf7aTwh').eq(3);
        this.buttonBrands = ()=> cy.get('.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._32MQA-gIaGxNU0uTG1yKum._2rJ9t7_3qwx1I1yZf7aTwh').eq(4);
        this.buttonPremium = ()=> cy.get('.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._32MQA-gIaGxNU0uTG1yKum._2rJ9t7_3qwx1I1yZf7aTwh').eq(5);
        this.buttonSport = ()=> cy.get('.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._32MQA-gIaGxNU0uTG1yKum._2rJ9t7_3qwx1I1yZf7aTwh').eq(6);
        this.buttonBeauty = ()=> cy.get('.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._32MQA-gIaGxNU0uTG1yKum._2rJ9t7_3qwx1I1yZf7aTwh').eq(7);
        this.buttonSales = ()=> cy.get('.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._32MQA-gIaGxNU0uTG1yKum._3EsHx6oyaIHnYbLzeUb9nS._2rJ9t7_3qwx1I1yZf7aTwh');

}}

module.exports = new HomePage();