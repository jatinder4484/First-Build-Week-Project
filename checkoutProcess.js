class CheckOutProcess{
    getEmail(){
        return cy.xpath('(//input[@id="customer-email"])[1]');
    }
    getFirstName(){
        return cy.xpath('//input[@name="firstname"]');
    }
    getLastName(){
        return cy.xpath('//input[@name="lastname"]');
    }
    getCompany(){
        return cy.xpath('//input[@name="company"]');
    }
    getAddress(){
        return cy.xpath('//input[@id="SF3T7Y4"]');
    }
    getCity(){
        return cy.xpath('//input[@name="city"]');
    }
    getState(){
        return cy.xpath('//select[@id="UWY8IB1"]');
    }
    getPIN(){
        return cy.xpath('//input[@name="postcode"]');
    }
    getCountry(){
        return cy.xpath('//select[@name="country_id"]');
    }
    getPhone(){
        return cy.xpath('//input[@name="telephone"]');
    }
    getShippingMethod(){
        return cy.xpath('(//input[@type="radio"])[2]');
    }
    getNext(){
        return cy.xpath('(//button[@type="submit"])[3]');
    }
    getPlaceOrder(){
        return cy.xpath('//button[@class="action primary checkout"]');
    }
    getSuccessMessage(){
        return cy.xpath('//span[@class="base"]');
    }
    fillCheckoutForm(email, firstname, lastname, company, address, city, state, pin, country, phone, shippingmethod ){
        if(email) this.getEmail().type(email);
        if(firstname) this.getFirstName().type(firstname);
        if(lastname) this.getLastName().type(lastname);
        if(company) this.getCompany().type(company);
        if(address) this.getAddress().type(address);
        if(city) this.getCity().type(city);
        if(state) this.getState().select(state);
        if(pin) this.getPIN().type(pin);
        if(country) this.getCountry().select(country);
        if(phone) this.getPhone().type(phone);
        if(shippingmethod) this.getShippingMethod().select(shippingmethod);
    }
    moveNext(){
        this.getNext().click();
    }
    submitOrder(){
        this.getPlaceOrder().click();
    }
    validateSuccessMessage(expectedMessage){
        this.getSuccessMessage().should('contain', expectedMessage);
    }
}
export default CheckOutProcess;