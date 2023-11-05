// Agregar método que valide el monto
// Agregar métodos para navegar a los diferentes método de pago
export class PaymentMethods {
  navigateToMethods() {
    cy.contains("Escoge un método de pago");
  }

  validatePayAmount(amount) {
    const formatAmount = `$${new Intl.NumberFormat("en-DE").format(amount)}`;
    cy.get(".src-components-PricePanel-__PricePanel__priceWrapper__vCwPh")
      .children()
      .contains(formatAmount);
  }

  help() {
    // todo add path ref to buttom help
    cy.get(".src-components-PricePanel-__PricePanel__helpMe__RJQ2g ").click();
  }

  navigateCards() {
    cy.get(".src-components-PaymentMethod-__PaymentMethod__methodName__EpbVf")
      .contains("Paga con tus tarjetas")
      .parent()
      .click();
  }

  navigateQR() {
    cy.get(".src-components-PaymentMethod-__PaymentMethod__methodName__EpbVf")
      .contains("Paga con QR Bancolombia")
      .parent()
      .click();
  }

  navigateTransfer() {
    cy.get(".src-components-PaymentMethod-__PaymentMethod__methodName__EpbVf")
      .contains("Transfiere con tu cuenta ")
      .parent()
      .click();
  }

  navigateNequi() {
    cy.get(".src-components-PaymentMethod-__PaymentMethod__methodName__EpbVf")
      .contains("Paga con tu cuenta Nequi")
      .parent()
      .click();
  }

  navigatePse() {
    cy.get(".src-components-PaymentMethod-__PaymentMethod__methodName__EpbVf")
      .contains("Transfiere con tu cuenta de ahorros o corriente")
      .parent()
      .click();
  }

  navigateCash() {
    cy.get(".src-components-PaymentMethod-__PaymentMethod__methodName__EpbVf")
      .contains("Paga en efectivo en Corresponsal Bancario")
      .parent()
      .click();
  }
}
