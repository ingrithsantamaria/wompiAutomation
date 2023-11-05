import { faker } from "@faker-js/faker/locale/en";
import { CheckOut } from "../pages/CheckOut";
import { PaymentMethods } from "../pages/PaymentMethods";
import { FormPayment } from "../pages/FormPayment";
import { Summary } from "../pages/Summary";
import { Checker } from "../pages/Checker";

const checkOut = new CheckOut();
const paymentMethods = new PaymentMethods();
const formPayment = new FormPayment();
const summary = new Summary();
const checker = new Checker();

const amount = faker.number.int({ min: 1500, max: 1000000 });
const numberSuccess = 3991111111;
const numberDeclined = 3992222222;

describe("Testing Payment Method Nequi", () => {
  beforeEach("Navigate to methods page", () => {
    checkOut.navigate();
    checkOut.pay(amount);
  });

  it("Should Valid Values Success Transaction", () => {
    paymentMethods.validatePayAmount(amount);
    paymentMethods.navigateNequi();
    formPayment.confirmBasicFormPay(
      faker.internet.email(),
      faker.person.fullName(),
      numberSuccess
    );
    formPayment.nequiPayment();

    summary.validateConfirmApproved();
  });

  it("Should Valid Values Decline transaction", () => {
    paymentMethods.validatePayAmount(amount);
    paymentMethods.navigateNequi();
    formPayment.confirmBasicFormPay(
      faker.internet.email(),
      faker.person.fullName(),
      numberDeclined
    );
    formPayment.nequiPayment(numberDeclined);

    summary.validateConfirmDeclined(numberDeclined);
  });
});

describe("Testing Payment Method Nequi Error cases", () => {
  const invalid = faker.number.int({ min: 1, max: 1499 });

  beforeEach("Navigate to methods page", () => {
    checkOut.navigate();
    checkOut.pay(invalid);
  });
  it("Should amount invalid screen validation", () => {
    paymentMethods.validatePayAmount(invalid);
    paymentMethods.navigateNequi();
    formPayment.confirmBasicFormPay(
      faker.internet.email(),
      faker.person.fullName(),
      numberSuccess
    );
    formPayment.nequiPayment();
    cy.wait(3000);
    checker.invalidateMinAmountForm();
  });

  it("Should form value invalid", () => {
    paymentMethods.validatePayAmount(invalid);
    paymentMethods.navigateNequi();
    formPayment.confirmBasicFormPay(
      faker.person.firstName(),
      faker.lorem.word(4),
      faker.number.int({ min: 1, max: 999 })
    );
    formPayment.invaliValuesdForm();
  });
});
