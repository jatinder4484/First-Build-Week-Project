import SearchPage from "./pageObject/searchPage";

describe('Search Functionality', () => {
    const searchPage=new SearchPage;

    beforeEach(() => {
        searchPage.visit();
    });
    it('should display results for valid search', () => {
        searchPage.enterSearch('jacket');
        searchPage.verifyResultContain
    });
    it('should show no result for invalid input', () => {
        searchPage.enterSearch('abc1234');
        searchPage.verifyResultNotContain();
    });
});