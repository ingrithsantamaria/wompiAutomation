import {faker} from "@faker-js/faker/locale/en";
import { CheckOut } from "../pages/CheckOut";
import { PaymentMethods } from "../pages/PaymentMethods";
const checkOut = new CheckOut();
const paymentMethods = new PaymentMethods ();
const amount = faker.number.int({min:1, max:30})
describe ('Methods Page', () => {
    beforeEach ('Navigate to methods page', () => {
        checkOut.navigate();
        checkOut.pay(amount);
    })
    it ('Should select payment with card', () => {
        paymentMethods.validatePayAmount(amount)
        paymentMethods.navigateCards();
    })

    it('Should select payment with QR', () => {
        paymentMethods.validatePayAmount(amount)
        paymentMethods.navigateQR()
    })


    it('Should select payment with transfer', () => {
        paymentMethods.validatePayAmount(amount)
        paymentMethods.navigateTransfer();
    })

    it('Should select payment with nequi', () => {
        paymentMethods.validatePayAmount(amount)
        paymentMethods.navigateNequi();
    })

    it('Should select payment with PSE', () => {
        paymentMethods.validatePayAmount(amount)
        paymentMethods.navigatePse();
    })

    it('Should select payment with cash', () => {
        paymentMethods.validatePayAmount(amount)
        paymentMethods.navigateCash();
    })

})