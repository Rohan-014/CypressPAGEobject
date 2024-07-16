describe('book test', () => {
    it('test1', () => {
       cy.visit('https://books.toscrape.com/') 

       cy.title().should('include','All products | Books to Scrape - Sandbox')

    });

    it('test2', () => {

        cy.visit('https://books.toscrape.com/') 

        cy.xpath('//ul[@class="nav nav-list"]/li/ul/li[9]').click();
        
    
    });
    
});
