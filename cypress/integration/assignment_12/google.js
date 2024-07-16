describe('google test', () => {
    it('test1', () => {
        cy.visit('https://www.google.com/')

        cy.title().should('include','Google')
    });
});