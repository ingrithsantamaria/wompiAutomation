export class CheckOut {
    navigate(){
        cy.visit("/l/stagtest_VPOS_bdQraT");
    }

    pay(amount){
        cy.get('input[name="amount"]').type(amount)
        cy.get('button').contains("Continuar").click();
        return this;
    }

    help(){
        // todo add path ref to buttom help
        cy.get('.src-components-PricePanel-__PricePanel__helpMe__RJQ2g ').click();
    }

    validateTheCheckoutPage(){
        cy.get('button').should('have.text', "Continuar");
        cy.get('.src-components-PricePanel-__PricePanel__helpMe__RJQ2g ').children().should('have.text', "¿Necesitas ayuda");
    }


}