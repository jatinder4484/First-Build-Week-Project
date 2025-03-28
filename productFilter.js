class ProductFilter{
    visit(){
        cy.visit('https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html');
    }
    applyPriceFilter(){
        cy.xpath('(//div[@data-role="title"])[11]').click();
        cy.get('a[href="https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html?price=40-50"]').click()
    }
    applyColorFilter(){
        cy.xpath('(//div[@data-role="title"])[4]').click();
        cy.xpath('(//div[@class="swatch-option color "])[2]').click();
    }
    applySizeFilter(){
        cy.xpath('(//div[@data-role="collapsible"])[3]').click();
        cy.xpath('(//div[@class="swatch-option text "])[3]').click();
    }
    clearFilter(){
        cy.contains('Clear All').click();
    }
}
export default ProductFilter;