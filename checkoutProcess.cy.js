import CheckOutProcess from "./pageObject/checkoutProcess";

describe('checkout process', () => {
    const checkoutProcess=new CheckOutProcess

    const validEmail="jatinderkumar4484@gmail.com";
    const validFirstName="Jatinder";
    const validLastName="Kumar";
    const validCompany="Masai";
    const validAddress="Dollian";
    const validCity="Jammu";
    const validState="Alaska";
    const validPin="181133";
    const validCountry="India";
    const validPhone="6006445575";
    const validShipping="$5.00"
    const vaildSuccessMessage="Thank you for your purchase!"

    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/checkout/#shipping');
    });

    it('should complete checkout successfully', () => {
        checkoutProcess.fillCheckoutForm(validEmail, validFirstName, validLastName, validCompany, validAddress, validCity, validState, validPin, validCountry, validPhone, validShipping);
        checkoutProcess.moveNext();
        checkoutProcess.submitOrder();

        checkoutProcess.validateSuccessMessage(vaildSuccessMessage);
        
    });
});