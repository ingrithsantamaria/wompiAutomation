export class Checker {
  invalidateMinAmount() {
    cy.get(".title").contains("Error en la transaccion");
    cy.get(".errors-list")
      .children()
      .contains(
        "El monto mínimo de una transacción es $1,500 exceptuando impuestos"
      );
  }

  invalidateMinAmountForm() {
    cy.get(".title").contains("El pago no pudo ser realizado");
    cy.get(".errors-list")
      .children()
      .contains(
        "El monto mínimo de una transacción es $1,500 exceptuando impuestos"
      );
  }
}
