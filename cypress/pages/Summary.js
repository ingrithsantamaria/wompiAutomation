const declined = "Transacción declinada";
const success = "Transacción aprobada";
const error = "Transacción con error";
export class Summary {
  validateConfirmApproved() {
    cy.wait(10000);
    cy.get(".src-components-App-__App__title__Y13rn").contains(success);
  }

  validateConfirmTransferApproved() {
    cy.wait(10000);
    cy.get(".title__-7har").contains(success);
  }

  validateConfirmDeclined() {
    cy.wait(10000);
    cy.get(".src-components-App-__App__title__Y13rn").contains(declined);
  }

  validateConfirmTransferDecline() {
    cy.wait(10000);
    cy.get(".title__-7har").contains(declined);
  }

  validateConfirmError() {
    cy.wait(10000);
    cy.get(".src-components-App-__App__title__Y13rn").contains(error);
  }

  validateConfirmTransferError() {
    cy.wait(10000);
    cy.get(".src-components-App-__App__title__Y13rn").contains(error);
  }

  printReceipt() {
    cy.get(".print hide-for-printing").click();
  }
}
