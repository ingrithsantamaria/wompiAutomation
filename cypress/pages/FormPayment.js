export class FormPayment {
  navigateFormPayments() {
    cy.contains("Escoge un método de pago");
  }

  confirmQRPay(email, fullName, phoneNumber, status) {
    cy.get("#email").type(email);
    cy.get("#fullName").type(fullName);
    cy.get("#number").type(phoneNumber);
    cy.get("#acceptance").click();

    cy.get("select[name=sandboxStatusQR]").select(status);

    cy.get(
      ".src-components-AcceptTerms-__AcceptTermsAndSubmit__buttonSubmit__nrW74"
    ).click();
  }

  confirmBasicFormPay(email, fullName, phoneNumber) {
    cy.get("#email").type(email);
    cy.get("#fullName").type(fullName);
    cy.get("#number").type(phoneNumber);
    cy.get(".submit-button").click();
  }

  nequiPayment(number) {
    cy.get("#acceptance").click();
    if (number == undefined) {
      cy.get("#phoneNumber").click();
    } else {
      cy.get("#mobilePhone").type(number);
    }

    cy.get(
      ".src-components-AcceptTerms-__AcceptTermsAndSubmit__buttonSubmit__nrW74"
    ).click();
  }

  tranfermPayment(type, status) {
    cy.get("#userType").select(type);
    cy.get("#sandboxStatus").select(status);
    cy.get("#acceptance").click();
    cy.get(
      ".src-components-AcceptTerms-__AcceptTermsAndSubmit__buttonSubmit__nrW74"
    ).click();
  }

  invaliValuesdForm() {
    cy.get(".input-error")
      .contains("Ingresa un correo electrónico válido.")
      .should("be.visible");
    cy.get(".input-error")
      .contains("Tu nombre debe tener al menos 5 caracteres")
      .should("be.visible");
    cy.get(".input-error")
      .contains("Ingresa un número válido")
      .should("be.visible");
  }
}
