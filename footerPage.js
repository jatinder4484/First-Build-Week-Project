class FooterPage{
    visit(){
        cy.visit('https://magento.softwaretestingboard.com/',{timeout: 120000});
    }
    getFooterLink(linkText){
        return cy.get('div[class="footer content"]').contains(linkText);
    }
    clickFooterLink(linkText){
        this.getFooterLink(linkText).click();
    }
    validatePageURL(expectedUrl){
        cy.url().should('include', expectedUrl);
    }
}
export default FooterPage;