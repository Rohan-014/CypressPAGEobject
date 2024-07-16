describe('scroll', () => {
    it('google test', () => {

    cy.visit('https://www.google.com/')

    cy.get('[title="Search"]').type('Masai{enter}')
        
    cy.scrollTo(0,1000);
    cy.wait(2000)
    cy.scrollTo(0,-1000);

    cy.contains('Maasai people').scrollIntoView().wait(2000).click();
    });
});