import ProductPage from "./pageObject/productPage";

describe('Product Page Verification', () => {
    const productPage=new ProductPage;

    beforeEach(() => {
        productPage.visit();
    });
    it('should verify product details', () => {
        productPage.getProductPrice().should('be.visible');
        productPage.getProductDescription().should('be.visible');
        productPage.getProductAvailability().should('contain','In stock');
        productPage.getProductImage().should('be.visible');
        
    });
    it('should allow color selection', () => {
        productPage.selectColorSwatch();
    });
    it('should allow size selection', () => {
        productPage.selectSizeSwatch();
    });
});