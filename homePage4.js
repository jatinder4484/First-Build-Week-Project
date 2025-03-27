class HomePage{
    visit(){
        cy.visit('https://magento.softwaretestingboard.com/#',{timeout: 120000});
    }
    validateNavigationMenus(){
        cy.get('a[id="ui-id-5"]').should('be.visible');
    }
    validatePromotionalBanners(){
        cy.get('span[class="action more button"]').should('be.visible');
    }
    validateFeaturedProducts(){
        cy.get('a[title="Hero Hoodie"]').should('be.visible');
    }
}
export default HomePage;