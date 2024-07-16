describe('Windows test', () => {
    it('test1', () => {

        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.get('a[href="/windows/new"]').invoke('removeAttr','target').click();
    
    });
});