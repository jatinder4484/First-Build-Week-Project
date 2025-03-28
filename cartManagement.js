class CartManagement{
    visit(){
        cy.visit('https://magento.softwaretestingboard.com/hero-hoodie.html');
    }
    addProductToCart(){
        cy.get('button[id="product-addtocart-button"]').click({force:true});
    }
    navigateToCart(){
        cy.get('a[class="action showcart"]').click();
    }
    verifyPrice(){
        cy.xpath('(//span[@class="price"])[1]',{timeout:6000}).should('be.visible');
    }
    verifyQuantity(){
        cy.get('input[id="cart-item-686388-qty"]').should('be.visible');
    }
    removeProductFromCart(){
        cy.get('a[class="action delete"]',{timeout:6000}).click({force:true});
    }
}
export default CartManagement;