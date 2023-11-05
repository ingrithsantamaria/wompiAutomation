import {faker} from "@faker-js/faker/locale/en";
import { CheckOut } from "../pages/CheckOut";
const checkOut = new CheckOut();

describe ('Checkout Page' , () => {
    beforeEach ('Navigate to checkout page', () => {
        checkOut.navigate();
    })
    it('Should amount validate and validate the checkout page', () => {
        checkOut.validateTheCheckoutPage();
        checkOut.pay(faker.number.int({min:1, max:30}));
    })
})