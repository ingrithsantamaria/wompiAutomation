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

describe("Testing Payment Method QR Bancolombia", () => {
  beforeEach("Navigate to methods page", () => {
    checkOut.navigate();
    checkOut.pay(amount);
  });

  it("Should Valid Values Success Transaction", () => {
    paymentMethods.validatePayAmount(amount);
    paymentMethods.navigateQR();
    formPayment.confirmQRPay(
      faker.internet.email(),
      faker.person.fullName(),
      faker.phone.number(),
      "APPROVED"
    );

    summary.validateConfirmApproved();
  });

  it("Should Valid Values Decline transaction", () => {
    paymentMethods.validatePayAmount(amount);
    paymentMethods.navigateQR();
    formPayment.confirmQRPay(
      faker.internet.email(),
      faker.person.fullName(),
      faker.phone.number(),
      "DECLINED"
    );

    summary.validateConfirmDeclined();
  });

  it("Should Valid Values Error Transaction", () => {
    paymentMethods.validatePayAmount(amount);
    paymentMethods.navigateQR();
    formPayment.confirmQRPay(
      faker.internet.email(),
      faker.person.fullName(),
      faker.phone.number(),
      "ERROR"
    );

    summary.validateConfirmError();
  });
});

describe("Testing Payment Method QR Bancolombia Error cases", () => {
  const invalid = faker.number.int({ min: 1, max: 1499 });

  beforeEach("Navigate to methods page", () => {
    checkOut.navigate();
    checkOut.pay(invalid);
  });
  it("Should amount invalid screen validation", () => {
    paymentMethods.validatePayAmount(invalid);
    paymentMethods.navigateQR();
    formPayment.confirmQRPay(
      faker.internet.email(),
      faker.person.fullName(),
      faker.phone.number(),
      "APPROVED"
    );
    cy.wait(3000);
    checker.invalidateMinAmount();
  });

  it("Should form value invalid", () => {
    paymentMethods.validatePayAmount(invalid);
    paymentMethods.navigateQR();
    formPayment.confirmQRPay(
      faker.person.firstName(),
      faker.lorem.word(4),
      faker.number.int({ min: 1, max: 999 }),
      "APPROVED"
    );
    formPayment.invaliValuesdForm();
  });
});
