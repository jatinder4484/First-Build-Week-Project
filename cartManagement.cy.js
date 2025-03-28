import CartManagement from "./pageObject/cartManagement";

describe('Cart Management Test', () => {
    const cartManagement=new CartManagement;

    beforeEach(() => {
        cartManagement.visit();
    });
    it('should add product to cart and validate', () => {
        cartManagement.addProductToCart();
        cartManagement.navigateToCart();
        cartManagement.verifyPrice();
        cartManagement.verifyQuantity();
        
    });
    it('should remove product from the cart', () => {
        cartManagement.removeProductFromCart();
    });
});