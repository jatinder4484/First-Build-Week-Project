import ProductFilter from "./pageObject/productFilter";

describe('Product Filter Test', () => {
    const productFilter=new ProductFilter;

    beforeEach(() => {
        productFilter.visit();
    });
    it('Apply price, color, and size filters', () => {
        productFilter.applyPriceFilter();
        productFilter.applyColorFilter();
        productFilter.applySizeFilter();
        
    });
    it('Clear filters', () => {
        productFilter.applyPriceFilter();
        productFilter.applyColorFilter();
        productFilter.applySizeFilter
        productFilter.clearFilter();
        
    });
});