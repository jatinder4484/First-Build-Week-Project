class SearchPage{
    visit(){
        cy.visit('https://magento.softwaretestingboard.com/');
    }
    enterSearch(query){
        cy.get('input[id="search"]').type(query).type('{enter}');
    }
    verifyResultContain(){
        cy.get('span[class="base"]').should('be.visible');
    }
    verifyResultNotContain(){
        cy.get('span[class="base"]').should('be.visible');
    }
}
export default SearchPage;