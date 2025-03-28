class ProductPage{
    visit(){
        cy.visit('https://magento.softwaretestingboard.com/hero-hoodie.html',{timeout:120000});
    }
    getProductPrice(){
        return cy.xpath('(//span[@class="price"])[1]');
    }
    getProductDescription(){
        return cy.xpath('(//a[@class="data switch"])[1]');
    }
    getProductAvailability(){
        return cy.get('div[class="stock available"]');
    }
    getProductImage(){
        return cy.get('img[src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/d34482110da20c5e24f97c38fb219fb3/m/h/mh07-gray_main_2.jpg"]');
    }
    selectColorSwatch(){
        cy.get('div[id="option-label-color-93-item-53"]').should('be.visible').click();
    }
    selectSizeSwatch(){
        cy.get('div[id="option-label-size-143-item-168"]').should('be.visible').click();
    }

}
export default ProductPage;