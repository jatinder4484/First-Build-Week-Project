import FooterPage from "./pageObject/footerPage";

describe('Footer Links Functionality', () => {
    const footerPage=new FooterPage;
    
    const footerLinks= [
        {text: 'Privacy and Cookie Policy', url: '/privacy-policy-cookie'},
        {text: 'Search Terms', url: '/search'}
    ];
    beforeEach(() => {
        footerPage.visit();
    });
    footerLinks.forEach(link=>{
        it('validate the ${link.text} footer link', () => {
          footerPage.clickFooterLink(link.text);
          footerPage.validatePageURL(link.url);
        });
    });
    
});