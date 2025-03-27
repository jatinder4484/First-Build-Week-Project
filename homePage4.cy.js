import HomePage from "./pageObject/homePage4";

describe('Homepage Functionality', () => {
    const homepage=new HomePage;
    
    beforeEach(() => {
        homepage.visit();
    });

    it('Validates navigation menus', () => {
        homepage.validateNavigationMenus();
    });
    it('Validates promotional banners', () => {
        homepage.validatePromotionalBanners();
    });
    it('Validates featured products', () => {
        homepage.validateFeaturedProducts();
    });
});